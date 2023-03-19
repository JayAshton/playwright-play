import { expect } from '@playwright/test';
import test from '../fixtures';

test.describe('Checkboxes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('checkboxes');
  });

  test('Checkbox 2 is checked by default', async ({ checkboxPage }) => {
    expect(await checkboxPage.checkboxTwo.isChecked()).toBeTruthy();
  });

  test('Checkbox 1 can be checked', async ({ checkboxPage }) => {
    await checkboxPage.checkboxOne.check();
    expect(await checkboxPage.checkboxOne.isChecked()).toBeTruthy();
  });

  test('Checkbox 2 can be unchecked', async ({ checkboxPage }) => {
    await checkboxPage.checkboxTwo.uncheck();
    expect(await checkboxPage.checkboxTwo.isChecked()).toBeFalsy();
  });

  test('Both checkboxes can be checked at the same time', async ({
    checkboxPage,
  }) => {
    await checkboxPage.checkboxOne.check();
    await checkboxPage.checkboxTwo.check();
    expect(await checkboxPage.checkboxOne.isChecked()).toBeTruthy();
    expect(await checkboxPage.checkboxTwo.isChecked()).toBeTruthy();
  });
});
