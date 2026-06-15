import { expect, Page } from "@playwright/test";

export class AcctServices {
    protected page : Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigateToAcctOverview() {

        await this.page.getByRole('link', { name: 'Accounts Overview' }).click();
        await expect(this.page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
    }

    public async navigateToTransferFunds() {
        await this.page.getByRole('link', { name: 'Transfer Funds' }).click();
        await expect(this.page.getByRole('heading', { name: 'Transfer Funds' })).toBeVisible();
    }

    public async navigateToBillPay() {
        await this.page.getByRole('link', { name: 'Bill Pay' }).click();
        await expect(this.page.getByRole('heading', { name: 'Bill Pay' })).toBeVisible();
    }

    public async navigateToFindTransactions() {
        await this.page.getByRole('link', { name: 'Find Transactions' }).click();
        await expect(this.page.getByRole('heading', { name: 'Find Transactions' })).toBeVisible();
    }

    public async navigateToUpdateContactInfo() {
        await this.page.getByRole('link', { name: 'Update Contact Info' }).click();
        await expect(this.page.getByRole('heading', { name: 'Update Profile' })).toBeVisible();
    }

    public async navigateToRequestLoan() {
        await this.page.getByRole('link', { name: 'Request Loan' }).click();
        await expect(this.page.getByRole('heading', { name: 'Apply for' })).toBeVisible();
    }

    public async navigateToLogOut() {
        await this.page.getByRole('link', { name: 'Log Out' }).click();
        await expect(this.page.getByText('Customer Login')).toBeVisible();
    }


}
