import { test } from "@playwright/test";

const ARTIFACT_DIR = "C:/Users/Admin/.gemini/antigravity-ide/brain/8230b03e-c42f-4146-8f0b-e1a1ab5fbe1c";

test("Capture 3 specific sections to artifact dir", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/about");
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(1000);

  // 0. Capture Statement section when all lines are animated in at scroll 3200
  await page.evaluate(() => window.scrollTo({ top: 3200, behavior: "instant" }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${ARTIFACT_DIR}/section-statement-360.png` });

  // 1. Capture Visionaries at 20000
  await page.evaluate(() => window.scrollTo({ top: 20000, behavior: "instant" }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${ARTIFACT_DIR}/section-visionaries-360.png` });

  // 2. Capture Tech Matters at 27000
  await page.evaluate(() => window.scrollTo({ top: 27000, behavior: "instant" }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${ARTIFACT_DIR}/section-tech-360.png` });

  // 3. Capture Designed For What's Next at 29600
  await page.evaluate(() => window.scrollTo({ top: 29600, behavior: "instant" }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${ARTIFACT_DIR}/section-next-360.png` });
});
