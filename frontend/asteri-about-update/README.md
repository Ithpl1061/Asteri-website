# Asteri About page update

This package contains:

- `src/routes/about.tsx` — Figma-structured About page with the previous GSAP animations remapped section by section.
- `src/routes/about-page.css` — scoped Culture & Values flip-card styling.
- `download-about-assets.ps1` — downloads the exact exported Figma assets into `public/about`.

## Install

1. Copy `src/routes/about.tsx` into the route location used by your project.
2. Copy `src/routes/about-page.css` beside the route file.
3. Copy `download-about-assets.ps1` to the project root.
4. Run in PowerShell immediately because Figma MCP asset URLs are temporary:

```powershell
powershell -ExecutionPolicy Bypass -File .\download-about-assets.ps1
```

5. Confirm the existing project files are still present:

- `public/AnurajSir.png`
- `public/AishwariaMam.png`

The page intentionally keeps `PageShell`, so the existing navbar, footer, and Asteri logo remain unchanged.

## Animation mapping

1. Hero: staggered headline reveal + orb MotionPath.
2. Business statement: rise, hold, exit.
3. We Serve Clients: right-to-center reveal + growing line.
4. Coverage: Across / India / Canada & globally sequential reveal.
5. Mission & Vision title: rise, scale, hold, exit.
6. Mission: icon/title reveal + clockwise description rotation.
7. Vision: icon/title reveal + anti-clockwise description rotation.
8. Approach: clip-path title + Discovery → Team Assembly → Agile Delivery → Support & Scale sequence.
9. Visionaries: Avinash → Anuraj → Aishwarya 3D image/content transitions.
10. Culture & Values: title and staggered card reveal; cards flip on hover/focus/tap.
11. Technology statement: rise, hold, exit.
12. Final CTA: glow, title, text, button; footer follows naturally.
