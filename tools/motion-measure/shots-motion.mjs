// Full-page screenshots per route and viewport, after letting entrance animations finish.
// Usage: BASE_URL=... node scripts/shots-motion.mjs <outDir>
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://127.0.0.1:3099";
const OUT = process.argv[2];
const ROUTES = [
  "/",
  "/about",
  "/services",
  "/partnership",
  "/products",
  "/industries",
  "/solutions",
  "/case-studies",
  "/blog",
  "/contact",
];
const VIEWPORTS = { desktop: { width: 1280, height: 800 }, mobile: { width: 390, height: 844 } };
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
for (const route of ROUTES) {
  for (const [name, viewport] of Object.entries(VIEWPORTS)) {
    const context = await browser.newContext({ viewport, reducedMotion: "no-preference" });
    const page = await context.newPage();
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    // Scroll through the page once so scroll-driven sections reach their resting state
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += 400) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1500);
    const file = `${OUT}/${route === "/" ? "home" : route.slice(1).replace(/\//g, "_")}-${name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    await context.close();
  }
}
await browser.close();
console.log("done");
