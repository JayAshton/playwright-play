import { Page } from '@playwright/test';

export class InfiniteScrollPageObject {
  readonly addedContent = this.page.locator('.jscroll-added');

  constructor(private page: Page) {}

  async scrollToBottomOfPage() {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
  }

  async getNumberOfParagraphs(): Promise<number> {
    return await this.addedContent.count();
  }
}
