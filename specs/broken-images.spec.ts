import { expect } from '@playwright/test';
import test from '../fixtures';

test.describe('Broken Images', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('broken_images');
  });

  test('Title is present', async ({ brokenImagesPage }) => {
    await expect(brokenImagesPage.title).toBeVisible();
  });

  test('All images have a src attribute', async ({ brokenImagesPage }) => {
    for (const image of await brokenImagesPage.images.all()) {
      expect(await image.getAttribute('src')).not.toBeNull();
    }
  });

  test('2 broken images (404 not found)', async ({ page }) => {
    const errorLogs: string[] = [];
    const errorMessage =
      'the server responded with a status of 404 (Not Found)';

    page.on('console', (message) => {
      if (message.type() === 'error' && message.text().includes('404'))
        errorLogs.push(message.text());
    });

    await page.goto('broken_images', { waitUntil: 'networkidle' });
    errorLogs.forEach(async (error) => {
      expect(error).toContain(errorMessage);
    });
  });
});
