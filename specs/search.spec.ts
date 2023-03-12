import { expect } from "@playwright/test";
import test from "../fixtures";

test.describe("IMDB Search", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the baseUrl as defined in playwright config
    await page.goto("");
  });

  test("Generic search returns relevant results", async ({ homePage }) => {
    await expect(homePage.logo).toBeVisible();
  });
});
