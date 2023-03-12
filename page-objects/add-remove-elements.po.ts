// playwright-dev-page.ts
import { Page } from '@playwright/test';

export class AddRemoveElementsPageObject {
  readonly title = this.page.locator('#content', {
    hasText: 'Add/Remove Elements',
  });
  readonly addElementButton = this.page.locator('button', {
    hasText: 'Add Element',
  });
  readonly addedElement = this.page.locator('.added-manually');

  constructor(private page: Page) {}

  async addElement(count?: number) {
    if (count) {
      for (let i = 0; i < count; i++) {
        await this.addElementButton.click();
      }
      return;
    }

    await this.addElementButton.click();
  }

  async deleteElement(count?: number) {
    if (count) {
      for (let i = 0; i < count; i++) {
        await this.addedElement.nth(0).click();
      }
      return;
    }

    await this.addedElement.click();
  }
}
