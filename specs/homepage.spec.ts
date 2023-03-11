import { test, expect } from "@playwright/test";

test.describe("test", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the baseUrl as defined in playwright config
    await page.goto("");
  });

  test("Logo is present on homepage", async ({ page }) => {
    const logo = page.locator("#home_img");
    await expect(logo).toBeVisible();
  });
});
