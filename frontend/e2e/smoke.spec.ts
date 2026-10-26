import { test, expect } from "@playwright/test";

// Smoke tests: every page renders, and the public forms show the right state.
// Form submissions are mocked, so these tests never write to the database.

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/salesforce",
  "/services/sap-consulting",
  "/services/data-science",
  "/services/cloud-solutions",
  "/services/software-development",
  "/partnership",
  "/products",
  "/contact",
  "/blog",
  "/case-studies",
  "/industries",
  "/solutions",
];

for (const route of ROUTES) {
  test(`${route} returns 200 with a page title and heading in the first HTML`, async ({
    request,
  }) => {
    const response = await request.get(route);
    expect(response.status()).toBe(200);

    const html = await response.text();
    expect(html).toMatch(/<title>[^<]*Asteri[^<]*<\/title>/);
    expect(html).toMatch(/<h1[\s>]/);
  });
}

test("contact form shows success when the API accepts the message", async ({ page }) => {
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 201,
      contentType: "application/json",
      body: JSON.stringify({ success: true }),
    }),
  );
  await page.goto("/contact");
  // Wait for the page to finish loading and hydrating, so the form submits as JavaScript
  await page.waitForLoadState("networkidle");

  await page.getByLabel("Your Name").fill("Test Person");
  await page.getByLabel("Email Address").fill("test@example.com");
  await page.getByLabel("Message").fill("Hello from the smoke test");
  // The contact content animates in on scroll; wait until the button is really on screen
  const send = page.getByRole("button", { name: "Send Message" });
  await expect
    .poll(
      async () =>
        send.evaluate(
          (el) => (el.scrollIntoView({ block: "center" }), el.getBoundingClientRect().width),
        ),
      { timeout: 20000 },
    )
    .toBeGreaterThan(0);
  // Submit from the keyboard: the button keeps moving while its entrance animation runs
  await expect(async () => {
    await send.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByText("Message sent!")).toBeVisible({ timeout: 2000 });
  }).toPass({ timeout: 20000 });
  await expect(page.getByRole("alert")).toHaveCount(0);
});

test("contact form shows an error, not success, when the API fails", async ({ page }) => {
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify({ error: "x" }),
    }),
  );
  await page.goto("/contact");
  // Wait for the page to finish loading and hydrating, so the form submits as JavaScript
  await page.waitForLoadState("networkidle");

  await page.getByLabel("Your Name").fill("Test Person");
  await page.getByLabel("Email Address").fill("test@example.com");
  await page.getByLabel("Message").fill("Hello from the smoke test");
  // The contact content animates in on scroll; wait until the button is really on screen
  const send = page.getByRole("button", { name: "Send Message" });
  await expect
    .poll(
      async () =>
        send.evaluate(
          (el) => (el.scrollIntoView({ block: "center" }), el.getBoundingClientRect().width),
        ),
      { timeout: 20000 },
    )
    .toBeGreaterThan(0);
  // Submit from the keyboard: the button keeps moving while its entrance animation runs
  await expect(async () => {
    await send.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("alert")).toContainText("could not be sent", { timeout: 2000 });
  }).toPass({ timeout: 20000 });
  await expect(page.getByText("Message sent!")).toHaveCount(0);
});

test("newsletter shows an error when the API fails, and success when it accepts", async ({
  page,
}) => {
  let shouldFail = true;
  await page.route("**/api/newsletter", (route) =>
    shouldFail
      ? route.fulfill({ status: 500, contentType: "application/json", body: "{}" })
      : route.fulfill({
          status: 201,
          contentType: "application/json",
          body: JSON.stringify({ id: 1 }),
        }),
  );
  await page.goto("/blog");
  await page.waitForLoadState("networkidle");

  const form = page.locator(".blog-subscribe-form");
  await form.getByRole("textbox", { name: "Email address" }).fill("reader@example.com");
  await form.getByRole("button", { name: "Subscribe" }).click();
  await expect(page.getByRole("alert")).toContainText("could not subscribe");

  shouldFail = false;
  await form.getByRole("button", { name: "Subscribe" }).click();
  await expect(page.getByText("You're subscribed!")).toBeVisible();
});

test("admin contact page is not indexed and shows an error for a wrong token", async ({ page }) => {
  await page.route("**/api/admin/contact-messages", (route) =>
    route.fulfill({
      status: 401,
      contentType: "application/json",
      body: JSON.stringify({ error: "Unauthorized" }),
    }),
  );
  await page.goto("/admin/contact");

  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await page.getByLabel("Admin token").fill("wrong-token");
  await page.getByRole("button", { name: "Load messages" }).click();
  await expect(page.getByRole("alert")).toContainText("The admin token is wrong.");
});
