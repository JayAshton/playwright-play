import { expect } from '@playwright/test';
import test from '../fixtures';

test.describe('Dropdown List', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('hovers');
  });

  test('Hovering over an avatar displays associated text', async ({
    hoverPage,
  }) => {
    const allFigures = await hoverPage.figures.all();

    for (let i = 0; i < allFigures.length; i++) {
      await allFigures[i].hover();
      expect(await hoverPage.figureName.nth(i).isVisible()).toBeTruthy();
      expect(await hoverPage.figureLink.nth(i).isVisible()).toBeTruthy();
    }
  });
});
