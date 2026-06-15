import {test, expect, Page, Locator} from '@playwright/test';
import { AcctServices } from './AcctServices';

export class BaseTest {
    protected page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

  constructor(page: Page) {
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
    await this.username.fill('user19');
    await this.password.fill('keepthis');
    await this.loginButton.click();
    await expect(this.page.getByText('Account Services')).toBeVisible();
    return new AcctServices(this.page);
  }

}