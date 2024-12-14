import { Locator, Page } from '@playwright/test';

export class HoverPageObject {
  readonly figures = this.page.locator('.figure');
  readonly figureAvatar = this.figures.locator('img');
  readonly figureName = this.figures.locator('h5');
  readonly figureLink = this.figures.locator('a');

  constructor(private page: Page) {}

  async getAllFixtures(): Promise<Array<Locator>> {
    const figures = await this.figures.all();
    if (!figures) throw new Error('No figures found')
    return figures
  }
}
