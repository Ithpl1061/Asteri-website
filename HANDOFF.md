# Asteri website: handoff for the next session

Paste this whole file into the new session. It describes the project, the state of the work, and what is still pending.

## Project and environment

- Repo root: `C:\Users\Aditya\Downloads\Aditya all documents\Asteri web` (Windows, PowerShell; the Bash tool is Git Bash).
- Git: branch `master`. Last commit `35571bf` ("Fix review findings..."). **Everything after that is uncommitted** (many modified, renamed, deleted and untracked files). Nothing has been pushed.
- Git identity used for the commit: `Aditya <dubeyadi515@gmail.com>` (the repo has no configured identity).
- Folders:
  - `frontend/`: TanStack Start + React 19 + Vite 8 + Tailwind 4 + GSAP. Built output in `frontend/.output` (run by PM2 via `ecosystem.config.cjs`).
  - `backend/`: Express 5 + Prisma 5.22 + PostgreSQL. Entry `index.js`; code in `src/` (app.js, routes/, services/, middleware/, lib/prisma.js, schemas/public.js which re-exports the shared schemas).
  - `packages/shared/`: zod schemas used by both frontend and backend (`src/schemas.js`, types in `src/schemas.d.ts`). Its own `package.json` (ESM) and its own `node_modules` (zod 4).
  - `deploy/nginx-asteri.conf`: Nginx config (has placeholders `ASTERI_ROOT`, `yourdomain.com`; never tested on a real server).
  - `.github/workflows/ci.yml`: CI (typecheck, lint, asset check, build, smoke tests). Never run on GitHub.
  - `tools/`: archived/one-off files, not used by the site: `archive-media/` (old screenshots, screen recording), `archive-data/` (home_page_content row as JSON), `motion-measure/` (GSAP measurement scripts), `csp-check.mjs` (CSP check script), `docs-archive/` (old component docs), old one-off `*.cjs`/`*.mjs` CSS scripts.
  - `DEPLOY.md`, `readme.md`, `session_memory.md` (user's notes, keep).
- `.vscode/` was deleted by the user (it held the Figma MCP config).
- Node: the backend requires Node 22.12 or newer (shared ESM module loaded with require).

## Run commands

- Backend: `cd backend` then `npm run dev` (runs `predev` first: `scripts/free-port.mjs` stops an old backend on port 5000; then nodemon `index.js`). Health: http://localhost:5000/api/health.
- Frontend dev (user's window): `cd frontend` then `npm run dev` (scripts/dev.mjs; starts backend only if port 5000 is free, then `npx vite dev`). User opens **http://localhost:8080**.
- Production-style: `cd frontend` then `npm run build` (runs `scripts/gen-seo.mjs` first, which writes sitemap only if `VITE_SITE_URL` is set), then `node .output/server/index.mjs` with PORT=3000 HOST=127.0.0.1.
- Checks: `npx tsc --noEmit`, `npx eslint .`, `node scripts/check-assets.mjs`, smoke tests `BASE_URL=http://127.0.0.1:3099 npx playwright test e2e/smoke.spec.ts --project="Desktop Chrome"` (and `"Mobile Chrome"`; both passed: 38/38).
- Backend syntax: `node --check index.js`.

## Database

- Local PostgreSQL, database `Asteri`, user `postgres` on `localhost:5432`. Credentials are in `backend/.env` (`DATABASE_URL`). **Do not print the password.** The password contains special characters; `psql` cannot parse the URL, so use Prisma or pg_dump with PGUSER/PGPASSWORD set from the .env (done via PowerShell `Select-String` + env vars).
- Migrations applied to the LOCAL `Asteri` DB:
  - `20260928095422_init_asteri_schema` (original)
  - `20261026130000_review_schema_changes` (slugs on blog posts/categories/case studies/industries/service details/products; sort_order and is_published; blog category names unique; case_studies.approach_list is now jsonb; contact message fields phone/company/source/ip/user_agent; newsletter status and unsubscribe_token). Applied after the migration was already tested on a copy; the backup was taken AFTER applying it (mistake: migrate ran before the backup finished).
- Backup of local DB after M11: `C:\Users\Aditya\Downloads\Asteri-db-backups\asteri-after-m11-20261026-152053.dump` (valid, 174 TOC entries, `pg_restore --list` works).
- Reverse script for the M11 migration: `backend/prisma/rollback/rollback-review-schema-changes.sql` (tested on a copy).
- Test databases created: `asteri_copy` (migrated copy used for tests; can be dropped). Not created: `asteri_backup_before_m11` (the attempt failed).
- Production (VPS) database: **NOT migrated**. Needs a backup on the server first, then `npx prisma migrate deploy` in the backend, then `prisma generate` and restart.
- Unused tables still present locally: `home_page_content` (1 row, saved as `tools/archive-data/home_page_content.json`), `about_page_content`, `testimonials`, `work_processes` (empty). No code uses them. The drop was BLOCKED by the auto-mode safety check (destructive); not done. Needs explicit user approval, then a migration `DROP TABLE IF EXISTS` for the four tables and removal of their models from `backend/prisma/schema.prisma`.
- Prisma client: regenerated after the M11 change (`npx prisma generate`). Re-run after any schema change.

## Environment variables (backend `.env` unless noted)

- `ADMIN_TOKEN`: admin page token (admin work SKIPPED by user request; optional).
- `TURNSTILE_SECRET_KEY`: enables server-side Turnstile check on contact and newsletter (off when empty). Tested with Cloudflare's test secret.
- `VITE_TURNSTILE_SITE_KEY` (frontend build env): shows the widget (off when empty).
- `VITE_SITE_URL` (frontend build env): canonical links, og:url, sitemap.xml and robots Sitemap line (off when empty). Example: `https://www.example.com`.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_NOTIFY_TO`: contact email notifications (off when SMTP_HOST empty).
- `API_INTERNAL_URL` (PM2 env in `ecosystem.config.cjs`): frontend SSR calls API at `http://127.0.0.1:5000`.
- `CORS_ORIGIN`, `PORT`, `HOST`.

## What is DONE (verified unless noted)

- Assets: `.gitignore` fixed; all site assets in `frontend/public/` (asset check passes: 23 references).
- Fonts: Geist via `@fontsource/geist-sans` only; broken `/fonts/` rules removed; 35 unused .otf removed (kept `Geist-SemiBold.otf`, used by about-page.css). Headings still render in Inter as before.
- Contact form: shows error on failure; submit disabled until hydrated (`frontend/src/lib/use-hydrated.ts`).
- Newsletter: repeat signup handled (upsert); error message on failure.
- API: all frontend fetches check `res.ok`; server-side loaders (`loadApi` with zod schemas) put page content in first HTML; fallback to empty on failure.
- Backend: zod validation (400 with fields), honeypot field `website`, rate limit 5/min per IP on contact and newsletter, helmet, `x-powered-by` off, `trust proxy`, generic health error, 404 and error handlers, graceful shutdown, Turnstile check (captcha.js), backend split into `src/` (app, routes, services, middleware, schemas). Busy port: retries, never exits (index.js).
- `npm audit`: 0 vulnerabilities (nodemailer 10.2.1, zod 4.6.7 in backend; zod 4.6.7 in frontend and shared).
- Services sub-pages render (layout route `frontend/src/routes/services.tsx`); services index at `routes/services/index.tsx`.
- Routes lowercase: `/partnership`, `/services/salesforce`, `/products` (index), `/products/suite` was REMOVED (product suite page deleted by user request). Nginx 301s: `/Partnership`, `/Asteri_product-suite` -> `/products`, `/Services- Salesforce Consulting` -> `/services/salesforce`.
- Titles/descriptions: all pages have titles and description tags (7 newly added from existing copy: case-studies, contact, services index, cloud-solutions, data-science, sap-consulting, software-development). Root has og:url and canonical when VITE_SITE_URL is set.
- Titles fixed (blog, products, case-studies); mojibake fixed (3 places).
- Icons: named imports in home (`INDUSTRY_ICONS` map); namespace import removed in products.
- Dead code removed: unused components, shadcn `components/ui`, `components/orb`, `components/layout`, `hooks/use-gsap-animation.tsx`, `hooks/use-mobile.tsx`, `lib/animation-constants.ts`, `lib/utils.ts`, `components.json` NOT removed (still present; deletion was pending user confirmation).
- Packages: unused removed (`npm uninstall`); plugin-related kept (`@cloudflare/vite-plugin`, `@tanstack/router-plugin`, `@tailwindcss/vite`, `@vitejs/plugin-react`, `nitro`, `@lovable.dev/vite-tanstack-config`). `eslint-config-prettier` restored (needed by eslint-plugin-prettier). `pg` and `prisma.config.ts` removed from backend.
- Lint and types: clean. Prettier applied to src.
- Bugs: visionary cards click fix (CSS `pointer-events: none` for `opacity: 0` cards in `about-page.css`); verified by hit-test.
- Blog: Load More button RESTORED (user request) and blog pins restored to original `pin: true`. The Load More button is still non-functional (decision pending).
- GSAP: plugins registered once in `frontend/src/lib/gsap.ts`; `frontend/package.json` has `"sideEffects": ["./src/lib/gsap.ts", "*.css"]`. **Do not remove this** or ScrollTrigger pins stop working (bundler drops the registration). Desktop pins match the original. Reduced-motion visitors get no pins (desktop) via `canPin()` in `frontend/src/lib/motion.ts`. Phone pins KEPT (cutting them collapsed the mobile home page).
- CSP: report-only policy in Nginx (allows Cloudflare Turnstile); checked by `tools/csp-check.mjs`, no violations.
- Contact address updated: "5th Floor, Innovative Tower, Sr. No. 15, Plot No. P7, Near Kharadi KNO, Rakshak Nagar, Kharadi, Pune, Maharashtra 411014" (PIN 411014 matches Kharadi per web sources; user supplied this address). Note: user's address also says "SSR Tower"; site uses "Innovative Tower" (kept, flag to user).
- Company links set in `frontend/src/lib/site.ts` (LinkedIn `https://www.linkedin.com/company/asteritechnology/`, Instagram `https://www.instagram.com/asteritechnologypvtltd/`, YouTube `https://www.youtube.com/@asteritechnology5886`). Footer, navbar and contact use them.
- Team LinkedIn: set in `backend/seed.js` and in the LOCAL DB (Avinash `https://in.linkedin.com/in/avinash-abnave-4bb23a32`, Anuraj `https://in.linkedin.com/in/anuraj-paniker-1532025`, Aishwarya `https://www.linkedin.com/in/aishwarya-abnave-a95117116/`). Production DB still has `#` values.
- Seeds: production guard (`NODE_ENV=production` refuses unless `ALLOW_SEED_PROD=yes`). Seeds still delete and re-insert (not idempotent).
- CI workflow written (lint blocking, asset check, smoke tests). Never run.
- Turnstile, sitemap, canonical: code done, gated by env vars (keys/domain needed).
- Shared schemas package: done (`packages/shared`).
- Smoke tests: updated for hydration/animation timing; admin test included.
- Dev/ops: `backend/scripts/free-port.mjs` (predev) stops stale backend on port 5000.

## What is PENDING (needs user input or approval)

1. **Approval to drop 4 unused tables** (local DB and production). See Database section.
2. **Production database migration** (VPS): backup first (`pg_dump -Fc`, see DEPLOY.md section 13), then `npx prisma migrate deploy`, `npx prisma generate`, restart PM2. User must approve.
3. **Domain** for `VITE_SITE_URL` (user's public address, with/without www).
4. **Turnstile keys**: `TURNSTILE_SECRET_KEY` (backend) and `VITE_TURNSTILE_SITE_KEY` (frontend build). From Cloudflare dashboard, Turnstile widget.
5. **Blog Load More**: remove the button, or implement pagination (ask how many per page). Currently does nothing.
6. **Reduced motion**: current = pins off for reduced-motion desktop; full handling (skip scroll animations too) is pending decision.
7. **Phone pins**: current = kept on phones (recommended). Removing them (review's suggestion) broke the mobile home page; user must decide.
8. **Monorepo** full restructure (`apps/web`, `apps/api`, `packages/shared`, npm workspaces): not done; only the shared package exists. Needs approach choice.
9. **Page splitting (M3)**: `frontend/src/routes/index.tsx` (1726 lines), `about.tsx` (1579), `products/index.tsx` (1498), `industries.tsx` (1459) still single files. GSAP-coupled; needs approval and an approach (page by page, verify with HTML snapshot compare and smoke tests).
10. **Seeds idempotent** (upsert keyed on slug). Pending the migration decision.
11. **Unused public assets** (`frontend/public/figma/...` etc.): ~104 files appear unreferenced (code + DB check, some may be template-built). Not deleted. Check before deleting; `figma/partnership/asset-03..14` are the most likely unused.
12. **Unused files to delete** (user approved earlier, but deletion was partly blocked by the safety check and the user ran commands manually): `backend/.cursor`, `backend/.devin`, root `.claude` (confirmed removed by user), `frontend/components.json` (shadcn config, unused; not deleted), `frontend/test-results` (regenerated by tests; may remain).
13. **Nginx**: placeholders `ASTERI_ROOT` and `yourdomain.com` need filling in; config never tested on a real server.
14. **CI**: never run on GitHub; `npm ci` on a clean clone not verified.
15. **Commit**: nothing committed. Suggested order: backend, then frontend, then shared package, then cleanup. Push only when the user asks.
16. **Admin page** (`/admin/contact`, `/api/admin/contact-messages`): built, but the user asked to SKIP admin work. Needs `ADMIN_TOKEN` to work (503 without it).
17. **Form submit before hydration**: fixed by disabling the buttons until hydrated (done, verified by smoke tests).

## Known facts and warnings

- The auto-mode safety check blocks destructive commands (deleting folders, dropping tables, `Remove-Item -Recurse` on many paths, etc.). For those, give the user the exact command to run in their own PowerShell; do not try to route around the block.
- The user's shell is PowerShell: use `Remove-Item -LiteralPath ... -Recurse -Force`, not `rm -rf` or `rmdir` (those fail).
- Background tasks (monitors) expire; long builds take 5 to 10 minutes. Use Monitor with `until grep -q "BUILD DONE" <file>`.
- Stop test servers after use (`Get-NetTCPConnection -LocalPort 3099 -State Listen` and `5000`, then `Stop-Process`). Leftover node processes caused port-5000 conflicts several times.
- Browser pane viewport resets; set it with `resize_window` before visual checks.
- Pre-existing user work to keep: `frontend/src/routes/contact.css` had the user's uncommitted edits (not mine; left alone).
- The user prefers no UI/design/GSAP changes without permission. The user has said "don't ask me, just do it" for non-destructive work; destructive or production actions still need explicit approval.
- Manager's review document: `C:\Users\Aditya\OneDrive - Asteri Technologies Pvt Ltd\Documents\Asteri-Website-Bug-Review-and-Architecture.docx` (37 bugs and architecture plan).
