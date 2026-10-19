import { test } from "@playwright/test";
import * as path from "path";

const ARTIFACT_DIR = "C:/Users/Admin/.gemini/antigravity-ide/brain/8230b03e-c42f-4146-8f0b-e1a1ab5fbe1c";

test("Capture Services page sections at 360x800", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/services");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1000);

  // 1. Hero
  const hero = page.locator(".figma-services__hero").first();
  await hero.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-hero-360.png") });

  // 2. Intro ("servic / es")
  // Scroll until intro text is visible
  for (let y = 100; y < 1500; y += 100) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(50);
    const op = await page.locator(".servic-part").evaluate((el) => window.getComputedStyle(el).opacity);
    if (parseFloat(op) > 0.5) break;
  }
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-intro-360.png") });

  // 3. Statement
  const statement = page.locator(".figma-services__statement").first();
  await statement.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-statement-360.png") });

  // 4. Core Services (Card 1)
  for (let y = 1500; y < 4500; y += 100) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(50);
    const op = await page.locator(".figma-services__core--desktop article").first().evaluate((el) => window.getComputedStyle(el).opacity);
    if (parseFloat(op) > 0.5) break;
  }
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-core-360.png") });

  // 5. Process Heading ("OUR PROCESS")
  for (let y = 3000; y < 6500; y += 100) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(50);
    const op = await page.locator(".figma-services__work-subheading--desktop h3").evaluate((el) => window.getComputedStyle(el).opacity);
    if (parseFloat(op) > 0.5) break;
  }
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-process-heading-360.png") });

  // 6. Process List
  const processList = page.locator(".figma-services__work-list--desktop").first();
  await processList.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-process-list-360.png") });

  // 7. Partner Grid
  for (let y = 5000; y < 8500; y += 100) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(50);
    const op = await page.locator(".figma-services__partner-grid--desktop .figma-services__partner-card").evaluate((el) => window.getComputedStyle(el).opacity);
    if (parseFloat(op) > 0.5) break;
  }
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-partner-grid-360.png") });

  // 8. Quote
  for (let y = 6000; y < 9500; y += 100) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(50);
    const op = await page.locator(".figma-services__quote--desktop h2").first().evaluate((el) => window.getComputedStyle(el).opacity);
    if (parseFloat(op) > 0.5) break;
  }
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-quote-360.png") });

  // 9. Support
  for (let y = 7000; y < 10500; y += 100) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(50);
    const op = await page.locator(".figma-services__support--desktop p").evaluate((el) => window.getComputedStyle(el).opacity);
    if (parseFloat(op) > 0.5) break;
  }
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-support-360.png") });

  // 10. CTA
  for (let y = 8000; y < 12000; y += 100) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(50);
    const op = await page.locator(".figma-services__cta--desktop > div").evaluate((el) => window.getComputedStyle(el).opacity);
    if (parseFloat(op) > 0.5) break;
  }
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-cta-360.png") });
});

