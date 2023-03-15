import { test as baseTest } from '@playwright/test';
import { PageFixtures, pageFixtures } from './page-objects/page-fixtures';

export type CommonFixtures = PageFixtures;

const test = baseTest.extend<CommonFixtures>({
  ...pageFixtures,
});

export default test;
export const expect = test.expect;
