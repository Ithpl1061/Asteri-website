// Writes public/sitemap.xml and adds a Sitemap line to public/robots.txt.
// Runs before the build. Does nothing unless VITE_SITE_URL is set (for example https://www.example.com).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const base = (process.env.VITE_SITE_URL || "").replace(/\/$/, "");
if (!base) {
  console.log(
    "gen-seo: VITE_SITE_URL is not set, skipping sitemap.xml and robots.txt sitemap line.",
  );
  process.exit(0);
}

const PAGES = [
  "/",
  "/about",
  "/services",
  "/services/salesforce",
  "/services/sap-consulting",
  "/services/data-science",
  "/services/cloud-solutions",
  "/services/software-development",
  "/partnership",
  "/products",
  "/contact",
  "/blog",
  "/case-studies",
  "/industries",
  "/solutions",
];
const publicDir = fileURLToPath(new URL("../public/", import.meta.url));
const urls = PAGES.map((p) => `  <url><loc>${base}${p}</loc></url>`).join("\n");
writeFileSync(
  `${publicDir}sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

const robots = readFileSync(`${publicDir}robots.txt`, "utf8")
  .split("\n")
  .filter((line) => !line.startsWith("Sitemap:"))
  .join("\n")
  .trimEnd();
writeFileSync(`${publicDir}robots.txt`, `${robots}\nSitemap: ${base}/sitemap.xml\n`);
console.log(`gen-seo: wrote sitemap.xml with ${PAGES.length} pages for ${base}`);
