import { expect } from '@playwright/test';
import test from '../fixtures';

test.describe('Checkboxes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('checkboxes');
  });

  test('Checkbox 2 is checked by default', async ({ checkboxPage }) => {
    await expect(checkboxPage.checkboxTwo).toBeChecked();
  });

  test('Checkbox 1 can be checked', async ({ checkboxPage }) => {
    await checkboxPage.checkboxOne.check();
    await expect(checkboxPage.checkboxOne).toBeChecked();
  });

  test('Checkbox 2 can be unchecked', async ({ checkboxPage }) => {
    await checkboxPage.checkboxTwo.uncheck();
    await expect(checkboxPage.checkboxTwo).toBeChecked();
  });

  test('Both checkboxes can be checked at the same time', async ({
    checkboxPage,
  }) => {
    await checkboxPage.checkboxOne.check();
    await checkboxPage.checkboxTwo.check();
    await expect(checkboxPage.checkboxOne).toBeChecked();
    await expect(checkboxPage.checkboxTwo).toBeChecked();
  });
});
