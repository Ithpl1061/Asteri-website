// Loads each page with the report-only Content-Security-Policy from deploy/nginx-asteri.conf added
// (nginx is not running in this test), and lists any violations Chrome logs to the console.
import { chromium } from "@playwright/test";
import { readFileSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://127.0.0.1:3099";
const conf = readFileSync(new URL("../../deploy/nginx-asteri.conf", import.meta.url), "utf8");
const csp = conf.match(/Content-Security-Policy-Report-Only "([^"]+)"/)[1];
const ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/salesforce",
  "/partnership",
  "/products",
  "/industries",
  "/solutions",
  "/case-studies",
  "/blog",
  "/contact",
  "/admin/contact",
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
await context.route("**/*", async (route) => {
  if (route.request().resourceType() !== "document") return route.continue();
  const response = await route.fetch();
  await route.fulfill({
    response,
    headers: { ...response.headers(), "content-security-policy-report-only": csp },
  });
});
let total = 0;
for (const route of ROUTES) {
  const page = await context.newPage();
  const violations = [];
  page.on("console", (m) => {
    if (/content security policy|Refused to/i.test(m.text()))
      violations.push(m.text().slice(0, 160));
  });
  await page.goto(BASE + route, { waitUntil: "load" });
  await page.waitForTimeout(1500);
  console.log(`${route}: ${violations.length} violation(s)`);
  for (const v of [...new Set(violations)].slice(0, 5)) console.log("   ", v);
  total += violations.length;
  await page.close();
}
await browser.close();
console.log(total === 0 ? "NO CSP VIOLATIONS" : `${total} violations in total`);
