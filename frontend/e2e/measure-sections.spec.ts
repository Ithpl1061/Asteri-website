import { test } from "@playwright/test";

test("Capture and measure 3 specific sections at 360x800", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/about");
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(1000);

  // 1. Capture Visionaries at 20000
  await page.evaluate(() => window.scrollTo({ top: 20000, behavior: "instant" }));
  await page.waitForTimeout(400);
  await page.screenshot({ path: "test-results/section-visionaries-360.png" });

  // 2. Capture Tech Matters at 27000
  await page.evaluate(() => window.scrollTo({ top: 27000, behavior: "instant" }));
  await page.waitForTimeout(400);
  await page.screenshot({ path: "test-results/section-tech-360.png" });

  // 3. Capture Designed For What's Next at 29600
  await page.evaluate(() => window.scrollTo({ top: 29600, behavior: "instant" }));
  await page.waitForTimeout(400);
  await page.screenshot({ path: "test-results/section-next-360.png" });

  // Measure Visionaries
  const visionariesMetrics = await page.evaluate(() => {
    const content = document.querySelector(".visionaries-content");
    const firstPerson = content?.firstElementChild as HTMLElement;

    const label = firstPerson?.querySelector(".type-label");
    const h2 = firstPerson?.querySelector("h2");
    const h3 = firstPerson?.querySelector("h3");
    const p = firstPerson?.querySelector("p.type-body");
    const cta = firstPerson?.querySelector("a");
    const ctaIcon = cta?.querySelector("span:first-child");
    const ctaText = cta?.querySelector("span:last-child");

    return {
      labelMargin: label ? window.getComputedStyle(label).marginBottom : null,
      h2Size: h2 ? window.getComputedStyle(h2).fontSize : null,
      h2Margin: h2 ? window.getComputedStyle(h2).marginBottom : null,
      h3Size: h3 ? window.getComputedStyle(h3).fontSize : null,
      h3Margin: h3 ? window.getComputedStyle(h3).marginBottom : null,
      pSize: p ? window.getComputedStyle(p).fontSize : null,
      pMargin: p ? window.getComputedStyle(p).marginBottom : null,
      pLineHeight: p ? window.getComputedStyle(p).lineHeight : null,
      ctaRow: cta ? {
        display: window.getComputedStyle(cta).display,
        flexDirection: window.getComputedStyle(cta).flexDirection,
        alignItems: window.getComputedStyle(cta).alignItems,
        gap: window.getComputedStyle(cta).gap,
      } : null,
      ctaIconSize: ctaIcon ? {
        width: window.getComputedStyle(ctaIcon).width,
        height: window.getComputedStyle(ctaIcon).height,
      } : null,
      ctaTextSize: ctaText ? window.getComputedStyle(ctaText).fontSize : null,
    };
  });

  // Measure Technology Matters
  const techMetrics = await page.evaluate(() => {
    const allH2 = Array.from(document.querySelectorAll("h2"));
    const techH2 = allH2.find(el => el.textContent?.includes("Technology Only Matters"));
    const span1 = techH2?.querySelector("span:first-child");
    const span2 = techH2?.querySelector("span:last-child");

    return {
      h2: techH2 ? {
        fontSize: window.getComputedStyle(techH2).fontSize,
        lineHeight: window.getComputedStyle(techH2).lineHeight,
        letterSpacing: window.getComputedStyle(techH2).letterSpacing,
        textAlign: window.getComputedStyle(techH2).textAlign,
      } : null,
      span1Rect: span1 ? span1.getBoundingClientRect() : null,
      span2Rect: span2 ? span2.getBoundingClientRect() : null,
    };
  });

  // Measure Designed For What's Next
  const nextMetrics = await page.evaluate(() => {
    const allH2 = Array.from(document.querySelectorAll("h2"));
    const nextH2 = allH2.find(el => el.textContent?.includes("Designed For What"));
    const sec = nextH2?.closest("section");
    const p = sec?.querySelector("p");
    const btn = sec?.querySelector("button");

    return {
      h2: nextH2 ? {
        fontSize: window.getComputedStyle(nextH2).fontSize,
        lineHeight: window.getComputedStyle(nextH2).lineHeight,
        width: nextH2.getBoundingClientRect().width,
        height: nextH2.getBoundingClientRect().height,
      } : null,
      p: p ? {
        fontSize: window.getComputedStyle(p).fontSize,
        lineHeight: window.getComputedStyle(p).lineHeight,
        marginTop: window.getComputedStyle(p).marginTop,
      } : null,
      btn: btn ? {
        marginTop: window.getComputedStyle(btn).marginTop,
        width: btn.getBoundingClientRect().width,
        height: btn.getBoundingClientRect().height,
      } : null,
    };
  });

  console.log("=== VISIONARIES METRICS ===");
  console.log(JSON.stringify(visionariesMetrics, null, 2));

  console.log("=== TECHNOLOGY MATTERS METRICS ===");
  console.log(JSON.stringify(techMetrics, null, 2));

  console.log("=== DESIGNED FOR WHATS NEXT METRICS ===");
  console.log(JSON.stringify(nextMetrics, null, 2));
});
