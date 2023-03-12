// playwright-dev-page.ts
import { Page } from "@playwright/test";

export class AddRemoveElementsPageObject {
  readonly title = this.page.locator("#content", {
    hasText: "Add/Remove Elements",
  });
  readonly addElementButton = this.page.locator("button", {
    hasText: "Add Element",
  });

  constructor(private page: Page) {}
}
