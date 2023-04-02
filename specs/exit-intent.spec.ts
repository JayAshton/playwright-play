import { expect } from '@playwright/test';
import test from '../fixtures';

test.describe('Exit intent', () => {
  test.beforeEach(async ({ page, exitIntentPage }) => {
    await page.goto('exit_intent');
    await exitIntentPage.pageTitle.dispatchEvent('mouseleave');
  });

  test('When the mouse exists the viewport, a modal is shown', async ({
    exitIntentPage,
  }) => {
    await exitIntentPage.validateModalIsVisible();
  });

  test('Clicking the close button removes the modal', async ({
    exitIntentPage,
  }) => {
    await exitIntentPage.closeButton.click();
    await expect(exitIntentPage.modal).not.toBeVisible();
  });
});
