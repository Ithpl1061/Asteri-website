import { test } from "@playwright/test";

test("Capture Tech Matters at exact scroll intervals", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/about");
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(1000);

  // Scan from 23000 to 28000 in steps of 400
  for (let top = 23000; top <= 28000; top += 500) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), top);
    await page.waitForTimeout(200);

    const techInfo = await page.evaluate(() => {
      const allH2 = Array.from(document.querySelectorAll("h2"));
      const techH2 = allH2.find(el => el.textContent?.includes("Technology Only Matters"));
      if (!techH2) return null;
      const rect = techH2.getBoundingClientRect();
      const style = window.getComputedStyle(techH2);
      const span1 = techH2.querySelector("span:first-child");
      const span2 = techH2.querySelector("span:last-child");

      return {
        top: rect.top,
        opacity: style.opacity,
        span1Opacity: span1 ? window.getComputedStyle(span1).opacity : null,
        span1Transform: span1 ? window.getComputedStyle(span1).transform : null,
        span2Transform: span2 ? window.getComputedStyle(span2).transform : null,
      };
    });

    console.log(`Scroll ${top}:`, JSON.stringify(techInfo));
    if (techInfo && Math.abs(techInfo.top - 350) < 150) {
      await page.screenshot({ path: `test-results/tech-pos-${top}.png` });
    }
  }
});
