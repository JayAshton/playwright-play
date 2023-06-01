import test from '../fixtures';
import { delay } from '../helpers';

test.describe('Entry Ad', () => {
  test.beforeEach(async ({ page, entryAdPage }) => {
    await page.goto('entry_ad');
    await entryAdPage.waitForModalToAppear();
  });

  test('Entry ad appears on page load', async ({ entryAdPage }) => {
    await entryAdPage.assertAdModalIsVisible();
  });

  test('Entry ad can be closed using the close button', async ({
    entryAdPage,
  }) => {
    await entryAdPage.adModalCloseBtn.click();
    await entryAdPage.waitForModalToBeHidden();
  });

  test('When closed the entry ad remains closed on page reload', async ({
    entryAdPage,
    page,
  }) => {
    await entryAdPage.adModalCloseBtn.click();
    // delay needed, otherwise behaviour is flaky
    await delay(5000);

    await page.reload();
    await entryAdPage.assertAdModalIsNotVisible();
  });

  test('The entry ad can be re-opened', async ({ entryAdPage, page }) => {
    await entryAdPage.adModalCloseBtn.click();
    await delay(5000);
    await page.reload();
    await entryAdPage.assertAdModalIsNotVisible();

    await entryAdPage.restartAd.click();
    await page.reload();
    await entryAdPage.assertAdModalIsVisible();
  });
});
