import { test as base } from "@playwright/test";
import { BaseTest } from "../pages/BaseTest";
import { AcctServices } from "../pages/AcctServices";

type MyFixtures = {
    acctServices: AcctServices;
}

export const test = base.extend<MyFixtures>({
    acctServices: async ({ page }, use) => {
        const baseTest = new BaseTest(page);
        await baseTest.navigateToHomePage();
        const acctServices = await baseTest.login();
        await use(acctServices);
    },
});

