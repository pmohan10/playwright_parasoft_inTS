
//8888888888888888888888888888888888888888888888888888888

import { expect, Page } from "@playwright/test";

export class AcctServices {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigateToAcctOverview() {
        await this.openPage("Accounts Overview", "Accounts Overview");
    }

    public async navigateToTransferFunds() {
        await this.openPage("Transfer Funds", "Transfer Funds");
    }

    public async navigateToBillPay() {
        await this.openPage("Bill Pay", "Bill Pay");
    }

    public async navigateToFindTransactions() {
        await this.openPage("Find Transactions", "Find Transactions");
    }

    public async navigateToUpdateContactInfo() {
        await this.openPage("Update Contact Info", "Update Profile");
    }

    public async navigateToRequestLoan() {
        await this.openPage("Request Loan", "Apply for");
    }

    public async navigateToLogOut() {
        await this.page.getByRole("link", { name: "Log Out" }).click();
        await expect(this.page.getByText("Customer Login")).toBeVisible();
    }

    private async openPage(linkName: string, headingName: string) {
        await this.page.getByRole("link", { name: linkName }).click();
        await expect(this.page.getByRole("heading", { name: headingName })).toBeVisible();
    }
}


