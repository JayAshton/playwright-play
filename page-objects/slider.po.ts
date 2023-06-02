import { Page } from '@playwright/test';

export class SliderPageObject {
  readonly slider = this.page.locator('.sliderContainer input[type="range"]');
  readonly range = this.page.locator('#range');

  constructor(private page: Page) {}

  async changeSliderValueWithJSInjection(targetValue: number) {
    const convertedTargetValue = targetValue.toString();
    await this.page.evaluate(
      (convertedTargetValue) => {
        const slider = document.querySelector(
          '.sliderContainer input[type="range"]'
        );
        slider.setAttribute('value', convertedTargetValue.convertedTargetValue);
      },
      { convertedTargetValue }
    );
  }

  async dragSlider(targetPercentage: number) {
    const thumbBoundingBox = await this.slider.boundingBox();
    const sliderBoundingBox = await this.slider.boundingBox();

    const startPoint = {
      x: thumbBoundingBox.x + thumbBoundingBox.width / 2,
      y: thumbBoundingBox.y + thumbBoundingBox.height / 2,
    };

    const endPoint = {
      x: sliderBoundingBox.x + sliderBoundingBox.width * targetPercentage,
      y: thumbBoundingBox.y + thumbBoundingBox.height / 2,
    };

    await this.page.mouse.move(startPoint.x, startPoint.y);
    await this.page.mouse.down();
    await this.page.mouse.move(endPoint.x, endPoint.y);
    await this.page.mouse.up();
  }
}
