import { test } from "@playwright/test";

test("Capture active sections with GSAP ScrollTrigger", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/about");
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(1000);

  const triggers = await page.evaluate(() => {
    // @ts-ignore
    const stList = window.ScrollTrigger ? window.ScrollTrigger.getAll() : [];
    return stList.map((st: any, i: number) => ({
      index: i,
      triggerClass: st.trigger?.className,
      start: st.start,
      end: st.end,
      pin: !!st.pin,
    }));
  });

  console.log("Triggers:", JSON.stringify(triggers, null, 2));

  // If window.ScrollTrigger isn't exposed globally, we can get total scroll height and find sections by scrolling
  const totalH = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log("Total scroll height:", totalH);

  // We can also find each section's position by scrolling down and checking getBoundingClientRect
  // Let's capture at every 800px up to totalH
  for (let top = 0; top < totalH; top += 800) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), top);
    await page.waitForTimeout(300);

    const info = await page.evaluate(() => {
      const vis = document.querySelector(".visionaries-grid")?.getBoundingClientRect();
      const tech = document.querySelector(".about-page h2.text-center")?.getBoundingClientRect();
      const next = document.querySelector(".about-page .next-text-item.type-display")?.getBoundingClientRect();

      return {
        visTop: vis?.top,
        techTop: tech?.top,
        nextTop: next?.top,
      };
    });

    if (info.visTop !== undefined && Math.abs(info.visTop) < 300) {
      console.log(`Visionaries visible at scroll top = ${top}`);
      await page.screenshot({ path: `test-results/vis-active-${top}.png` });
    }
    if (info.techTop !== undefined && Math.abs(info.techTop) < 300) {
      console.log(`Tech visible at scroll top = ${top}`);
      await page.screenshot({ path: `test-results/tech-active-${top}.png` });
    }
    if (info.nextTop !== undefined && Math.abs(info.nextTop) < 300) {
      console.log(`Next visible at scroll top = ${top}`);
      await page.screenshot({ path: `test-results/next-active-${top}.png` });
    }
  }
});
