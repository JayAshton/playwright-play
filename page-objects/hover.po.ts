import { Page } from '@playwright/test';

export class HoverPageObject {
  readonly figures = this.page.locator('.figure');
  readonly figureAvatar = this.figures.locator('img');
  readonly figureName = this.figures.locator('h5');
  readonly figureLink = this.figures.locator('a');

  constructor(private page: Page) {}
}
