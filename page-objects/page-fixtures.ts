// my-test.ts
import { AddRemoveElementsPageObject } from './add-remove-elements.po';
import { BrokenImagesPageObject } from './broken-images.po';

export interface PageFixtures {
  addRemoveElementsPage: AddRemoveElementsPageObject;
  brokenImagesPage: BrokenImagesPageObject;
}

export const pageFixtures = {
  addRemoveElementsPage: async ({ page }, use) => {
    await use(new AddRemoveElementsPageObject(page));
  },
  brokenImagesPage: async ({ page }, use) => {
    await use(new BrokenImagesPageObject(page));
  },
};
