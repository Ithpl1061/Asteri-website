import { test } from "@playwright/test";

test("Scroll through About page on mobile 390px and capture visible states", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/about");
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(1000);

  // Measure total scroll height
  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log("Total scroll height:", scrollHeight);

  // We will scroll in increments of 600px and capture shots where sections are visible
  let step = 0;
  for (let y = 0; y < scrollHeight; y += 600) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
    await page.waitForTimeout(250);

    // Capture every ~1800px or when significant
    if (step % 3 === 0 || y + 600 >= scrollHeight) {
      await page.screenshot({ path: `test-results/about-scroll-${y}px.png` });
    }
    step++;
  }
});
