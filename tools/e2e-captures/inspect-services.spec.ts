import { test, expect } from "@playwright/test";

const MOBILE_VIEWPORTS = [320, 360, 375, 390, 414, 430, 480, 767];

test.describe("Services Page Mobile Inspection", () => {
  for (const width of MOBILE_VIEWPORTS) {
    test(`Inspect Services at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/services");
      await page.waitForLoadState("domcontentloaded");
      await page.waitForTimeout(1000);

      const metrics = await page.evaluate((vpWidth) => {
        const bodyScrollWidth = document.body.scrollWidth;
        const htmlScrollWidth = document.documentElement.scrollWidth;
        const hasHorizontalOverflow = htmlScrollWidth > vpWidth || bodyScrollWidth > vpWidth;
        const scrollHeight = document.documentElement.scrollHeight;

        // Inspect key sections
        const hero = document.querySelector(".figma-services__hero");
        const heroH1 = hero?.querySelector("h1");
        const heroP = hero?.querySelector("p");

        const statement = document.querySelector(".figma-services__statement");

        const core = document.querySelector(".figma-services__core--desktop");
        const coreH2 = core?.querySelector("h2");
        const coreArticle = core?.querySelector("article");

        const processH3 = document.querySelector(".figma-services__work-subheading--desktop h3");
        const processList = document.querySelector(".figma-services__work-list--desktop");

        const quote = document.querySelector(".figma-services__quote--desktop");
        const quoteH2 = quote?.querySelectorAll("h2");

        const support = document.querySelector(".figma-services__support--desktop p");

        const cta = document.querySelector(".figma-services__cta--desktop");
        const ctaH2 = cta?.querySelector("h2");
        const ctaP = cta?.querySelector("p");

        return {
          vpWidth,
          scrollHeight,
          hasHorizontalOverflow,
          htmlScrollWidth,
          bodyScrollWidth,
          hero: hero ? {
            textAlign: window.getComputedStyle(hero).textAlign,
            h1Size: heroH1 ? window.getComputedStyle(heroH1).fontSize : null,
            h1Align: heroH1 ? window.getComputedStyle(heroH1).textAlign : null,
            pSize: heroP ? window.getComputedStyle(heroP).fontSize : null,
          } : null,
          statement: statement ? {
            fontSize: window.getComputedStyle(statement).fontSize,
            textAlign: window.getComputedStyle(statement).textAlign,
            padding: window.getComputedStyle(statement).padding,
          } : null,
          core: core ? {
            display: window.getComputedStyle(core).display,
            h2Size: coreH2 ? window.getComputedStyle(coreH2).fontSize : null,
            h2Align: coreH2 ? window.getComputedStyle(coreH2).textAlign : null,
          } : null,
          process: processH3 ? {
            fontSize: window.getComputedStyle(processH3).fontSize,
            textAlign: window.getComputedStyle(processH3).textAlign,
          } : null,
          quote: quoteH2 && quoteH2.length > 0 ? {
            line1Size: window.getComputedStyle(quoteH2[0]).fontSize,
            line1Align: window.getComputedStyle(quoteH2[0]).textAlign,
            line1White: window.getComputedStyle(quoteH2[0]).whiteSpace,
            line2Size: quoteH2[1] ? window.getComputedStyle(quoteH2[1]).fontSize : null,
          } : null,
          support: support ? {
            fontSize: window.getComputedStyle(support).fontSize,
            textAlign: window.getComputedStyle(support).textAlign,
          } : null,
          cta: cta ? {
            h2Size: ctaH2 ? window.getComputedStyle(ctaH2).fontSize : null,
            h2Align: ctaH2 ? window.getComputedStyle(ctaH2).textAlign : null,
            pSize: ctaP ? window.getComputedStyle(ctaP).fontSize : null,
          } : null,
        };
      }, width);

      console.log(`=== VIEWPORT ${width}px ===`);
      console.log(`Horizontal Overflow: ${metrics.hasHorizontalOverflow ? "YES (" + metrics.htmlScrollWidth + "px)" : "NO"}`);
      console.log(`Scroll Height: ${metrics.scrollHeight}px`);
      console.log("Hero:", JSON.stringify(metrics.hero));
      console.log("Statement:", JSON.stringify(metrics.statement));
      console.log("Quote:", JSON.stringify(metrics.quote));
      console.log("Support:", JSON.stringify(metrics.support));
      console.log("CTA:", JSON.stringify(metrics.cta));

      // Capture screenshot
      await page.screenshot({ path: `test-results/services-${width}px.png` });
    });
  }
});
