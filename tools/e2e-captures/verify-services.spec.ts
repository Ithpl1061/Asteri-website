import { test, expect } from "@playwright/test";
import * as path from "path";

const ARTIFACT_DIR = "C:/Users/Admin/.gemini/antigravity-ide/brain/8230b03e-c42f-4146-8f0b-e1a1ab5fbe1c";

const MOBILE_VIEWPORTS = [
  { width: 320, height: 568, name: "320px" },
  { width: 360, height: 800, name: "360px" },
  { width: 375, height: 667, name: "375px" },
  { width: 390, height: 844, name: "390px" },
  { width: 414, height: 896, name: "414px" },
  { width: 430, height: 932, name: "430px" },
  { width: 480, height: 854, name: "480px" },
  { width: 767, height: 1024, name: "767px" },
];

const DESKTOP_VIEWPORTS = [
  { width: 1024, height: 768, name: "1024px" },
  { width: 1440, height: 900, name: "1440px" },
  { width: 1920, height: 1080, name: "1920px" },
];

test.describe("Services Page - Automated Responsiveness & Alignment Verification", () => {
  for (const vp of MOBILE_VIEWPORTS) {
    test(`Mobile ${vp.name} - No horizontal overflow and correct alignments`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/services");
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(500);

      // Verify no horizontal overflow
      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth + 1;
      });
      expect(overflow).toBe(false);

      // Verify Statement alignment is center
      const statementAlign = await page.locator(".figma-services__statement").first().evaluate((el) => {
        return window.getComputedStyle(el).textAlign;
      });
      expect(statementAlign).toBe("center");

      // Verify Core Services heading alignment is center
      const coreH2Align = await page.locator(".figma-services__core--desktop > h2").first().evaluate((el) => {
        return window.getComputedStyle(el).textAlign;
      });
      expect(coreH2Align).toBe("center");

      // Verify Platforms & Partners heading alignment is center
      const partnersH2Align = await page.locator(".figma-services__partner-grid--desktop h2").first().evaluate((el) => {
        return window.getComputedStyle(el).textAlign;
      });
      expect(partnersH2Align).toBe("center");

      // Verify CTA alignment is center
      const ctaH2Align = await page.locator(".figma-services__cta--desktop h2").first().evaluate((el) => {
        return window.getComputedStyle(el).textAlign;
      });
      expect(ctaH2Align).toBe("center");
    });
  }

  for (const vp of DESKTOP_VIEWPORTS) {
    test(`Desktop ${vp.name} - Layout intact and no overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/services");
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(500);

      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth + 1;
      });
      expect(overflow).toBe(false);

      // Verify desktop core services container is active
      const isDesktopCoreVisible = await page.locator(".figma-services__core--desktop").isVisible();
      expect(isDesktopCoreVisible).toBe(true);
    });
  }

  test("Capture final high-quality screenshots of key sections at 360x800", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto("/services");
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(800);

    // 1. Hero
    await page.locator(".figma-services__hero").first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-final-hero-360.png") });

    // 2. Statement + Core heading
    await page.locator(".figma-services__statement").first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-final-statement-360.png") });

    // 3. Core card (Salesforce)
    const coreBox = await page.locator(".figma-services__core--desktop").boundingBox();
    if (coreBox) {
      await page.evaluate((top) => window.scrollTo(0, top + 250), coreBox.y + (await page.evaluate(() => window.scrollY)));
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-final-core-360.png") });
    }

    // 4. Platforms & Partners
    const partnerBox = await page.locator(".figma-services__partner-grid--desktop").boundingBox();
    if (partnerBox) {
      await page.evaluate((top) => window.scrollTo(0, top + 150), partnerBox.y + (await page.evaluate(() => window.scrollY)));
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-final-partners-360.png") });
    }

    // 5. Quote
    const quoteBox = await page.locator(".figma-services__quote--desktop").boundingBox();
    if (quoteBox) {
      await page.evaluate((top) => window.scrollTo(0, top + 250), quoteBox.y + (await page.evaluate(() => window.scrollY)));
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-final-quote-360.png") });
    }

    // 6. Support
    const supportBox = await page.locator(".figma-services__support--desktop").boundingBox();
    if (supportBox) {
      await page.evaluate((top) => window.scrollTo(0, top + 250), supportBox.y + (await page.evaluate(() => window.scrollY)));
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-final-support-360.png") });
    }

    // 7. CTA
    const ctaBox = await page.locator(".figma-services__cta--desktop").boundingBox();
    if (ctaBox) {
      await page.evaluate((top) => window.scrollTo(0, top + 250), ctaBox.y + (await page.evaluate(() => window.scrollY)));
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, "services-final-cta-360.png") });
    }
  });
});
