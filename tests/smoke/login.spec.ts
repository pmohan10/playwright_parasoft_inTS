import { test, expect } from '@playwright/test';
import { BaseTest } from '../../pages/BaseTest';

test.describe('Smoke tests', () => {
  test('@smoke: user can log in using the BaseTest page object', async ({ page }) => {
    test.skip(
      !process.env.PARABANK_USERNAME || !process.env.PARABANK_PASSWORD,
      'PARABANK_USERNAME and PARABANK_PASSWORD must be set to run this smoke test'
    );

    const baseTest = new BaseTest(page);

    await baseTest.navigateToHomePage();
    const acctServices = await baseTest.login();

    await expect(page.getByText('Account Services')).toBeVisible();
    await acctServices.navigateToLogOut();
  });
});
