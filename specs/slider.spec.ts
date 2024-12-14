import { expect } from '@playwright/test';
import test from '../fixtures';

test.describe('Horizontal Slider', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('horizontal_slider');
  });

  test('Sliding the bar modifies the selected value (javascript)', async ({
    sliderPage,
  }) => {
    const targetValue = 2;
    await sliderPage.changeSliderValueWithJSInjection(targetValue);
    await expect(sliderPage.slider).toHaveAttribute(
      targetValue.toString()
    );
  });

  test('Sliding the bar modifies the selected value (playwright drag and drop)', async ({
    sliderPage,
  }) => {
    // 50%
    const targetPercentage = 0.5;

    await sliderPage.dragSlider(targetPercentage);

    // Max = 5, 2.5 = 50%
    await expect(sliderPage.range).toHaveText('2.5');
  });
});
