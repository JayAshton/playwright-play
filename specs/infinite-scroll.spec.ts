import { expect } from '@playwright/test';
import { delay } from '../helpers';
import test from '../fixtures';

test.describe('Exit intent', () => {
  test.beforeEach(async ({ page, exitIntentPage }) => {
    await page.goto('infinite_scroll');
    await exitIntentPage.pageTitle.dispatchEvent('mouseleave');
  });

  test('Scrolling generates content', async ({ infiniteScrollPage }) => {
    const amountToScroll = 10;

    for (let index = 0; index < amountToScroll; index++) {
      const contentBeforeScroll =
        await infiniteScrollPage.getNumberOfParagraphs();

      await infiniteScrollPage.scrollToBottomOfPage();
      await delay(500);

      const contentAfterScroll =
        await infiniteScrollPage.getNumberOfParagraphs();

      expect(contentAfterScroll).toBeGreaterThan(contentBeforeScroll);
    }
  });
});
