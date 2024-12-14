import { Locator, Page } from '@playwright/test';

export class DropdownPageObject {
  readonly dropdown = this.page.locator('#dropdown');
  readonly dropdownItems = this.page.locator('#dropdown option');

  constructor(private page: Page) {}

  async getAllOptions(): Promise<Array<Locator>> {
    const options = await this.dropdownItems.all();
    if (!options) throw new Error('No options found in dropdown')
    return options
  }

  getSelectedOption() {
    const selectedOption = this.dropdown.locator('[selected="selected"]');
    return selectedOption.textContent();
  }

  async selectOption(text: string) {
    await this.dropdown.selectOption(text);
  }
}
