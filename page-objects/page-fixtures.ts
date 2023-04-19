// my-test.ts
import { AddRemoveElementsPageObject } from './add-remove-elements.po';
import { BrokenImagesPageObject } from './broken-images.po';
import { CheckboxesPageObject } from './checkboxes.po';
import { DropdownPageObject } from './dropdown.po';
import { ExitIntentPageObject } from './exit-intent.po';
import { FileUploadPageObject } from './file-upload.po';

export interface PageFixtures {
  addRemoveElementsPage: AddRemoveElementsPageObject;
  brokenImagesPage: BrokenImagesPageObject;
  checkboxPage: CheckboxesPageObject;
  dropdownPage: DropdownPageObject;
  exitIntentPage: ExitIntentPageObject;
  fileUploadPage: FileUploadPageObject;
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
  exitIntentPage: async ({ page }, use) => {
    await use(new ExitIntentPageObject(page));
  },
  fileUploadPage: async ({ page }, use) => {
    await use(new FileUploadPageObject(page));
  },
};
