// playwright-dev-page.ts
import { Page } from "@playwright/test";

export class SearchPageObject {
  readonly searchInput = this.page.locator("#suggestion-search");
  readonly searchButton = this.page.locator("#suggestion-search-button");
  readonly searchResultsTitle = this.page.locator(
    '[data-testid="find-results-section-title"]'
  );

  constructor(private page: Page) {}
}
