import { expect } from '@playwright/test';
import test from '../fixtures';

test.describe('Dropdown List', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('hovers');
  });

  test('Hovering over an avatar displays associated text', async ({
    hoverPage,
  }) => {
    const allFigures = await hoverPage.getAllFixtures();

    for (let i = 0; i < allFigures.length; i++) {
      await allFigures[i]!.hover();
      await expect(hoverPage.figureName.nth(i)).toBeVisible();
      await expect(hoverPage.figureLink.nth(i)).toBeVisible();
    }
  });
});
