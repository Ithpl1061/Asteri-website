import { test } from "@playwright/test";

test("Measure and screenshot all sections of About page on mobile 390px", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/about");
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(1000);

  const sectionsInfo = await page.evaluate(async () => {
    const sections = Array.from(document.querySelectorAll("main section"));
    const results: any[] = [];

    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i] as HTMLElement;
      sec.scrollIntoView({ behavior: "instant", block: "start" });
      await new Promise((r) => setTimeout(r, 400));

      const rect = sec.getBoundingClientRect();
      const headings = Array.from(sec.querySelectorAll("h1, h2, h3, h4")).map((h) => {
        const hEl = h as HTMLElement;
        const cs = window.getComputedStyle(hEl);
        return {
          tag: h.tagName,
          text: hEl.innerText.slice(0, 40).replace(/\n/g, " "),
          fontSize: cs.fontSize,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          textAlign: cs.textAlign,
          color: cs.color,
          offsetWidth: hEl.offsetWidth,
          scrollWidth: hEl.scrollWidth,
          overflow: hEl.scrollWidth > hEl.offsetWidth,
        };
      });

      const paragraphs = Array.from(sec.querySelectorAll("p")).map((p) => {
        const pEl = p as HTMLElement;
        const cs = window.getComputedStyle(pEl);
        return {
          text: pEl.innerText.slice(0, 40).replace(/\n/g, " "),
          fontSize: cs.fontSize,
          lineHeight: cs.lineHeight,
          offsetWidth: pEl.offsetWidth,
          scrollWidth: pEl.scrollWidth,
          overflow: pEl.scrollWidth > pEl.offsetWidth,
        };
      });

      results.push({
        index: i,
        className: sec.className,
        rect: { width: rect.width, height: rect.height, top: rect.top },
        headings,
        paragraphs,
      });
    }

    return results;
  });

  console.log("SECTIONS DETAIL:", JSON.stringify(sectionsInfo, null, 2));

  // Now capture screenshots of each section
  const sections = page.locator("main section");
  const count = await sections.count();
  for (let i = 0; i < count; i++) {
    const sec = sections.nth(i);
    await sec.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await sec.screenshot({ path: `test-results/about-sec-${i}-390px.png` });
  }
});
