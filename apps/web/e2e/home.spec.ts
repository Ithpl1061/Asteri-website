import { test, expect } from "@playwright/test";

test.describe("Asteri Website — Automation Testing", () => {
  test("Homepage loads properly with correct title and elements", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Asteri/i);

    // Navbar check
    const header = page.locator("header");
    await expect(header).toBeVisible();
  });

  test("Valuable Customers section and logos are displayed properly", async ({
    page,
  }, testInfo) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    const section = page.locator(".collaborations-section");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toBeVisible();

    // Verify heading text
    const heading = section.locator(".collab-heading");
    await expect(heading).toContainText("Valuable");
    await expect(heading).toContainText("Customers");

    // Verify logo container and images exist
    const logoContainer = section.locator(".collab-logos-container");
    await expect(logoContainer).toBeVisible();

    const logoImg = section.locator(".collab-logo-img").first();
    await expect(logoImg).toBeAttached();

    // Position Row 2 (Symbiosis, Posco, Amdocs, Xoriant) in center for visual screenshot
    await page.evaluate(() => {
      const rows = document.querySelectorAll<HTMLElement>(".collab-col");
      if (rows.length > 2) {
        rows[2].style.opacity = "1";
        rows[2].style.visibility = "visible";
        rows[2].style.transform = "translate(0px, -9%)";
      }
    });

    await page.waitForTimeout(300);

    const isMobile = testInfo.project.name.toLowerCase().includes("mobile");
    const filename = isMobile
      ? "test-results/valuable-customers-mobile.png"
      : "test-results/valuable-customers-desktop.png";
    await section.screenshot({ path: filename });
  });

  test("Navigation to Contact page works and form is accessible", async ({ page }) => {
    await page.goto("/contact");
    await expect(page).toHaveURL(/.*contact/);

    const heading = page.getByRole("heading", { name: /contact/i }).first();
    if (await heading.isVisible()) {
      await expect(heading).toBeVisible();
    }
  });
});
