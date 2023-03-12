// my-test.ts
import { AddRemoveElementsPageObject } from "./add-remove-elements.po";

export interface PageFixtures {
  addRemoveElementsPage: AddRemoveElementsPageObject;
}

export const pageFixtures = {
  addRemoveElementsPage: async ({ page }, use) => {
    await use(new AddRemoveElementsPageObject(page));
  },
};
