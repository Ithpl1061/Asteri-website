import { test, expect } from "@playwright/test";

const MOBILE_VIEWPORTS = [320, 360, 375, 390, 414, 430, 480, 767];
const DESKTOP_VIEWPORTS = [1024, 1440, 1920];

test.describe("About Page Mobile Verification", () => {
  for (const width of MOBILE_VIEWPORTS) {
    test(`Verify Mobile at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/about");
      await page.waitForLoadState("domcontentloaded");
      await page.waitForTimeout(600);

      const metrics = await page.evaluate((vpWidth) => {
        const bodyScrollWidth = document.body.scrollWidth;
        const htmlScrollWidth = document.documentElement.scrollWidth;
        const hasHorizontalOverflow = htmlScrollWidth > vpWidth || bodyScrollWidth > vpWidth;

        // Specific element measurements
        const heroH1 = document.querySelector(".about-page .hero-headline");
        const heroH1Size = heroH1 ? parseFloat(window.getComputedStyle(heroH1).fontSize) : null;

        const cultureP = document.querySelector(".culture-grid .flip-back p");
        const culturePSize = cultureP ? parseFloat(window.getComputedStyle(cultureP).fontSize) : null;

        const cultureH4 = document.querySelector(".culture-grid h4");
        const cultureH4Size = cultureH4 ? parseFloat(window.getComputedStyle(cultureH4).fontSize) : null;

        const nextH2 = document.querySelector(".about-page .next-text-item.type-display");
        const nextH2Size = nextH2 ? parseFloat(window.getComputedStyle(nextH2).fontSize) : null;

        const serveItem = document.querySelector(".about-page .type-display .serve-client-left-item");
        const serveItemSize = serveItem ? parseFloat(window.getComputedStyle(serveItem).fontSize) : null;

        return {
          hasHorizontalOverflow,
          htmlScrollWidth,
          bodyScrollWidth,
          heroH1Size,
          culturePSize,
          cultureH4Size,
          nextH2Size,
          serveItemSize,
        };
      }, width);

      console.log(`[Mobile ${width}px] Overflow: ${metrics.hasHorizontalOverflow ? "FAIL" : "PASS"}, HeroH1: ${metrics.heroH1Size}px, CultureP: ${metrics.culturePSize}px, ServeItem: ${metrics.serveItemSize}px, NextH2: ${metrics.nextH2Size}px`);

      // Assertions
      expect(metrics.hasHorizontalOverflow).toBe(false);
      if (width <= 639) {
        expect(metrics.heroH1Size).toBeLessThanOrEqual(52);
        expect(metrics.culturePSize).toBeGreaterThanOrEqual(11);
        expect(metrics.serveItemSize).toBeLessThanOrEqual(40);
      }
    });
  }
});

test.describe("About Page Desktop Protection Verification", () => {
  for (const width of DESKTOP_VIEWPORTS) {
    test(`Verify Desktop at ${width}px remains intact`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/about");
      await page.waitForLoadState("domcontentloaded");
      await page.waitForTimeout(600);

      const desktopMetrics = await page.evaluate((vpWidth) => {
        const bodyScrollWidth = document.body.scrollWidth;
        const htmlScrollWidth = document.documentElement.scrollWidth;
        const hasHorizontalOverflow = htmlScrollWidth > vpWidth || bodyScrollWidth > vpWidth;

        // Check desktop 4-column layout for approach and culture
        const approachGrid = document.querySelector(".approach-grid");
        const approachCols = approachGrid ? window.getComputedStyle(approachGrid).gridTemplateColumns.split(" ").length : 0;

        const cultureGrid = document.querySelector(".culture-grid");
        const cultureCols = cultureGrid ? window.getComputedStyle(cultureGrid).gridTemplateColumns.split(" ").length : 0;

        // Check desktop hero font size
        const heroH1 = document.querySelector(".about-page .hero-headline");
        const heroH1Size = heroH1 ? parseFloat(window.getComputedStyle(heroH1).fontSize) : 0;

        return {
          hasHorizontalOverflow,
          approachCols,
          cultureCols,
          heroH1Size,
        };
      }, width);

      console.log(`[Desktop ${width}px] Overflow: ${desktopMetrics.hasHorizontalOverflow ? "FAIL" : "PASS"}, ApproachCols: ${desktopMetrics.approachCols}, CultureCols: ${desktopMetrics.cultureCols}, HeroH1: ${desktopMetrics.heroH1Size}px`);

      expect(desktopMetrics.hasHorizontalOverflow).toBe(false);
      // Desktop must retain 4 columns for approach and culture
      expect(desktopMetrics.approachCols).toBe(4);
      expect(desktopMetrics.cultureCols).toBe(4);
      // Desktop hero font size must scale up to desktop clamp (e.g. >= 60px)
      expect(desktopMetrics.heroH1Size).toBeGreaterThanOrEqual(60);
    });
  }
});
