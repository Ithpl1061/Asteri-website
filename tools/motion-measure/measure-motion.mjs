// Records, per route and viewport, how many GSAP pins are active and whether
// reduced-motion is honoured. Run against a built server: BASE_URL=... node scripts/measure-motion.mjs out.json
import { chromium } from "@playwright/test";
import { writeFileSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://127.0.0.1:3099";
const OUT = process.argv[2] || "motion.json";
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
const MODES = ["no-preference", "reduce"];

const browser = await chromium.launch();
const results = [];
for (const route of ROUTES) {
  for (const [vpName, viewport] of Object.entries(VIEWPORTS)) {
    for (const reducedMotion of MODES) {
      const context = await browser.newContext({ viewport, reducedMotion });
      const page = await context.newPage();
      await page.goto(BASE + route, { waitUntil: "load" });
      await page.waitForTimeout(1500);
      const stats = await page.evaluate(() => ({
        pinSpacers: document.querySelectorAll(".pin-spacer").length,
        cssAnimated: [...document.querySelectorAll("*")].filter((el) => {
          const s = getComputedStyle(el);
          return s.animationName !== "none" && s.animationPlayState !== "paused";
        }).length,
        pageHeight: Math.round(document.documentElement.scrollHeight),
      }));
      results.push({ route, viewport: vpName, reducedMotion, ...stats });
      await context.close();
    }
  }
}
await browser.close();
writeFileSync(OUT, JSON.stringify(results, null, 2));
console.log(`wrote ${results.length} rows to ${OUT}`);
