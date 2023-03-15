// playwright-dev-page.ts
import { Page } from '@playwright/test';

export class BrokenImagesPageObject {
  readonly title = this.page.locator('#content h3', {
    hasText: 'Broken Images',
  });

  readonly images = this.page.locator('.example img');

  constructor(private page: Page) {}
}
