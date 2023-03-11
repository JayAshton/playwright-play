import { expect } from "@playwright/test";
import test from "../fixtures";

test.describe("test", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the baseUrl as defined in playwright config
    await page.goto("");
  });

  test("Logo is present on homepage", async ({ homePage }) => {
    await expect(homePage.logo).toBeVisible();
  });
});
