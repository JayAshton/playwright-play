import { Page, expect } from '@playwright/test';

export class ExitIntentPageObject {
  readonly pageTitle = this.page.locator('.example h3');
  readonly modal = this.page.locator('#ouibounce-modal');
  readonly modalTitle = this.page.locator('.modal-title');
  readonly modalText = this.page.locator('.modal-body');
  readonly closeButton = this.page.locator('.modal-footer p');

  constructor(private page: Page) {}

  async validateModalIsVisible() {
    await expect(this.modal).toBeVisible();
    await expect(this.modalTitle).toBeVisible();
    await expect(this.modalText).toBeVisible();
    await expect(this.closeButton).toBeVisible();
  }
}
