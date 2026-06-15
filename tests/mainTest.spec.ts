import { expect, test } from '@playwright/test';
import { BaseTest } from '../pages/BaseTest';
import { AcctServices } from '../pages/AcctServices';

let acctServices: AcctServices;

test.beforeEach(async ({ page }) => {
    const baseTest = new BaseTest(page);
    await baseTest.navigateToHomePage();
    acctServices = await baseTest.login();
});

test('test for accessing pages', async ({ page }) => {
    await acctServices.navigateToAcctOverview();
    await acctServices.navigateToTransferFunds();
    await acctServices.navigateToBillPay();
    await acctServices.navigateToFindTransactions();
    await acctServices.navigateToUpdateContactInfo();
    await acctServices.navigateToRequestLoan();
    await acctServices.navigateToLogOut();

});


