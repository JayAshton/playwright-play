import { Page, expect } from '@playwright/test';
import { delay } from '../helpers';

export class EntryAdPageObject {
  readonly adModal = this.page.locator('#modal');
  readonly adModalTitle = this.adModal.locator('.modal-title h3');
  readonly adModalCloseBtn = this.page.locator('.modal-footer p');
  readonly restartAd = this.page.locator('#restart-ad');

  constructor(private page: Page) {}

  async waitForModalToAppear() {
    let counter = 0;
    while (!(await this.adModal.isVisible())) {
      await delay(1000);
      counter++;
      if (counter >= 15) {
        throw new Error('Ad modal did not appear');
      }
    }
  }

  async waitForModalToBeHidden() {
    let counter = 0;
    while (await this.adModal.isVisible()) {
      await delay(1000);
      counter++;
      if (counter >= 15) {
        throw new Error('Ad modal remained visible');
      }
    }
  }

  async assertAdModalIsVisible() {
    await expect.soft(this.adModal).toBeVisible();
    await expect.soft(this.adModalTitle).toBeVisible();
    await expect
      .soft(this.adModalTitle)
      .toContainText('This is a modal window');
    await expect.soft(this.adModalCloseBtn).toBeVisible();
  }

  async assertAdModalIsNotVisible() {
    await expect.soft(this.adModal).toBeHidden();
    await expect.soft(this.adModalTitle).toBeHidden();
    await expect.soft(this.adModalCloseBtn).toBeHidden();
  }
}
