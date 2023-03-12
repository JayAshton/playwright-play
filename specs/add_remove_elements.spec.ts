import { expect } from "@playwright/test";
import test from "../fixtures";

test.describe("Adding and removing elements from the DOM", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the baseUrl, with the extra path
    await page.goto("add_remove_elements/");
  });

  test("Title is present", async ({ addRemoveElementsPage }) => {
    await expect(addRemoveElementsPage.title).toBeVisible();
  });
});
