// my-test.ts
import { HomepagePageObject } from "./homepage.po";

export interface PageFixtures {
  homePage: HomepagePageObject;
}

export const pageFixtures = {
  homePage: async ({ page }, use) => {
    await use(new HomepagePageObject(page));
  },
};
