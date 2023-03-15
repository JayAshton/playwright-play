import { expect } from '@playwright/test';
import test from '../fixtures';

test.describe('Adding and removing elements from the DOM', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the baseUrl, with the extra path
    await page.goto('add_remove_elements');
  });

  test('Title is present', async ({ addRemoveElementsPage }) => {
    await expect(addRemoveElementsPage.title).toBeVisible();
  });

  test('Add and delete an element', async ({ addRemoveElementsPage }) => {
    await addRemoveElementsPage.addElement();
    await expect.soft(addRemoveElementsPage.addedElement).toBeVisible();
    expect.soft(await addRemoveElementsPage.addedElement.count()).toEqual(1);

    await addRemoveElementsPage.deleteElement();
    await expect.soft(addRemoveElementsPage.addedElement).not.toBeVisible();
    expect.soft(await addRemoveElementsPage.addedElement.count()).toEqual(0);
  });

  test('Add and delete multiple elements', async ({
    addRemoveElementsPage,
  }) => {
    const numberOfElementsToAdd = 3;

    await addRemoveElementsPage.addElement(numberOfElementsToAdd);
    expect
      .soft(await addRemoveElementsPage.addedElement.count())
      .toEqual(numberOfElementsToAdd);

    await addRemoveElementsPage.deleteElement(numberOfElementsToAdd);
    expect.soft(await addRemoveElementsPage.addedElement.count()).toEqual(0);
  });
});
