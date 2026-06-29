import {test, expect, Page, Locator} from '@playwright/test';
import { AcctServices } from './AcctServices';

export class BaseTest {
    protected page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

  constructor( page: Page) {
    this.page = page;  
    this.username = page.locator('[name="username"]');
    this.password = page.locator('[name="password"]');
    this.loginButton = page.getByRole('button', {name: 'Log In'});
  }

  async navigateToHomePage() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await expect(this.page.getByText('Customer Login')).toBeVisible();
  }

  async login(): Promise<AcctServices> {
    const nodeProcess = (globalThis as any).process;
    const username = nodeProcess?.env?.PARABANK_USERNAME;
    const password = nodeProcess?.env?.PARABANK_PASSWORD;
    if (!username || !password) {
      throw new Error('Missing PARABANK_USERNAME or PARABANK_PASSWORD in environment');
    }

    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
    await expect(this.page.getByText('Account Services')).toBeVisible();
    return new AcctServices(this.page);
  }

}