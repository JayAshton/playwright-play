// my-test.ts
import { AddRemoveElementsPageObject } from './add-remove-elements.po';
import { BrokenImagesPageObject } from './broken-images.po';
import { CheckboxesPageObject } from './checkboxes.po';
import { DropdownPageObject } from './dropdown.po';
import { ExitIntentPageObject } from './exit-intent.po';
import { FileUploadPageObject } from './file-upload.po';
import { InfiniteScrollPageObject } from './infinite-scroll.po';
import { HoverPageObject } from './hover.po';
import { EntryAdPageObject } from './entry-ad.po';
import { SliderPageObject } from './slider.po';

export interface PageFixtures {
  addRemoveElementsPage: AddRemoveElementsPageObject;
  brokenImagesPage: BrokenImagesPageObject;
  checkboxPage: CheckboxesPageObject;
  dropdownPage: DropdownPageObject;
  exitIntentPage: ExitIntentPageObject;
  fileUploadPage: FileUploadPageObject;
  infiniteScrollPage: InfiniteScrollPageObject;
  hoverPage: HoverPageObject;
  entryAdPage: EntryAdPageObject;
  sliderPage: SliderPageObject;
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
  infiniteScrollPage: async ({ page }, use) => {
    await use(new InfiniteScrollPageObject(page));
  },
  hoverPage: async ({ page }, use) => {
    await use(new HoverPageObject(page));
  },
  entryAdPage: async ({ page }, use) => {
    await use(new EntryAdPageObject(page));
  },
  sliderPage: async ({ page }, use) => {
    await use(new SliderPageObject(page));
  },
};
