import { test, expect } from "@playwright/test";

const VIEWPORTS = [320, 360, 375, 390, 414, 430, 480, 767];

test.describe("About Page Inspection", () => {
  for (const width of VIEWPORTS) {
    test(`Inspect About page at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/about");
      await page.waitForLoadState("domcontentloaded");
      await page.waitForTimeout(1000);

      // Measure page overflow and section data
      const data = await page.evaluate((vpWidth) => {
        const bodyScrollWidth = document.body.scrollWidth;
        const htmlScrollWidth = document.documentElement.scrollWidth;
        const hasHorizontalOverflow = htmlScrollWidth > vpWidth || bodyScrollWidth > vpWidth;

        const sections = Array.from(document.querySelectorAll("main section")).map((sec, idx) => {
          const rect = sec.getBoundingClientRect();
          const computed = window.getComputedStyle(sec);
          const h1 = sec.querySelector("h1");
          const h2 = sec.querySelector("h2");
          const h3 = sec.querySelector("h3");
          const p = sec.querySelector("p");

          return {
            index: idx,
            tag: sec.tagName,
            className: sec.className,
            height: rect.height,
            computedHeight: computed.height,
            minHeight: computed.minHeight,
            paddingTop: computed.paddingTop,
            paddingBottom: computed.paddingBottom,
            h1Font: h1 ? window.getComputedStyle(h1).fontSize : null,
            h1LineHeight: h1 ? window.getComputedStyle(h1).lineHeight : null,
            h2Font: h2 ? window.getComputedStyle(h2).fontSize : null,
            h2LineHeight: h2 ? window.getComputedStyle(h2).lineHeight : null,
            h3Font: h3 ? window.getComputedStyle(h3).fontSize : null,
            pFont: p ? window.getComputedStyle(p).fontSize : null,
            pLineHeight: p ? window.getComputedStyle(p).lineHeight : null,
          };
        });

        return {
          vpWidth,
          htmlScrollWidth,
          bodyScrollWidth,
          hasHorizontalOverflow,
          sections,
        };
      }, width);

      console.log(`=== VIEWPORT ${width}px REPORT ===`);
      console.log(`Horizontal Overflow: ${data.hasHorizontalOverflow ? "YES (" + data.htmlScrollWidth + "px)" : "NO"}`);
      data.sections.forEach((s) => {
        console.log(`Sec ${s.index} [h=${Math.round(s.height)}px, minH=${s.minHeight}, padTop=${s.paddingTop}, padBtm=${s.paddingBottom}] h1=${s.h1Font} h2=${s.h2Font} p=${s.pFont}`);
      });

      // Capture screenshot
      await page.screenshot({ path: `test-results/about-${width}px.png`, fullPage: false });
    });
  }
});
