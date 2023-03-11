// playwright-dev-page.ts
import { Page } from "@playwright/test";

export class HomepagePageObject {
  readonly logo = this.page.locator("#home_img");

  constructor(private page: Page) {}
}
