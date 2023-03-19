import { Page } from '@playwright/test';

export class CheckboxesPageObject {
  readonly checkboxes = this.page.locator('#checkboxes [type="checkbox"]');
  readonly checkboxOne = this.checkboxes.nth(0);
  readonly checkboxTwo = this.checkboxes.nth(1);

  constructor(private page: Page) {}
}
