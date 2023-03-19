// my-test.ts
import { AddRemoveElementsPageObject } from './add-remove-elements.po';
import { BrokenImagesPageObject } from './broken-images.po';
import { CheckboxesPageObject } from './checkboxes.po';
import { DropdownPageObject } from './dropdown.po';

export interface PageFixtures {
  addRemoveElementsPage: AddRemoveElementsPageObject;
  brokenImagesPage: BrokenImagesPageObject;
  checkboxPage: CheckboxesPageObject;
  dropdownPage: DropdownPageObject;
}

export const pageFixtures = {
  addRemoveElementsPage: async ({ page }, use) => {
    await use(new AddRemoveElementsPageObject(page));
  },
  brokenImagesPage: async ({ page }, use) => {
    await use(new BrokenImagesPageObject(page));
  },
  checkboxPage: async ({ page }, use) => {
    await use(new CheckboxesPageObject(page));
  },
  dropdownPage: async ({ page }, use) => {
    await use(new DropdownPageObject(page));
  },
};
