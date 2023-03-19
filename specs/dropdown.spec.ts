import { expect } from '@playwright/test';
import test from '../fixtures';

test.describe('Dropdown List', () => {
  const correctOptions = ['Please select an option', 'Option 1', 'Option 2'];
  test.beforeEach(async ({ page }) => {
    await page.goto('dropdown');
  });

  test('Default option on page load', async ({ dropdownPage }) => {
    expect(await dropdownPage.getSelectedOption()).toContain(correctOptions[0]);
  });

  test('All options are loaded', async ({ dropdownPage }) => {
    const options = await dropdownPage.dropdownItems.all();
    for (let i = 0; i < correctOptions.length; i++) {
      expect(correctOptions[i]).toEqual(await options[i].textContent());
    }
  });

  test('When selecting an option, the selected option is displayed', async ({
    dropdownPage,
  }) => {
    for (let i = 0; i < correctOptions.length; i++) {
      await dropdownPage.selectOption(correctOptions[i]);
      expect(await dropdownPage.getSelectedOption()).toEqual(correctOptions[i]);
    }
  });
});
