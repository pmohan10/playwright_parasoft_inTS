import { test } from "../../fixtures/testFixture";

test('test for accessing pages @smoke', async ({ acctServices }) => {
    await acctServices.navigateToAcctOverview();
    await acctServices.navigateToTransferFunds();
    await acctServices.navigateToBillPay();
    await acctServices.navigateToFindTransactions();
    await acctServices.navigateToUpdateContactInfo();
    await acctServices.navigateToRequestLoan();
    await acctServices.navigateToLogOut();
});
