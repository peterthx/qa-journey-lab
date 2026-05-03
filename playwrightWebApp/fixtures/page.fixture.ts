import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/auth/LoginPage';
import { CartPage } from '../pages/cart/CartPage';
import { CheckoutPage } from '../pages/cart/CheckoutPage';
import { InventoryPage } from '../pages/inventory/InventoryPage';
import { LogoutPage } from '../pages/auth/LogoutPage';
import { users } from '../datatest/users';

type MyFixture = {
  loginPage: LoginPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  inventoryPage: InventoryPage;
  logoutPage: LogoutPage;
  standardUser: typeof users.standardUser;
  problemUser: typeof users.problemUser;
  visualUser: typeof users.visualUser;

};

export const test = base.extend<MyFixture>({

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },

  logoutPage: async ({ page }, use) => {
    const logoutPage = new LogoutPage(page);
    await use(logoutPage);
  },

  standardUser: async ({}, use) => {
    await use(users.standardUser);
  },

  problemUser: async ({}, use) => {
    await use(users.problemUser);
  },

  visualUser: async ({}, use) => {
    await use(users.visualUser);
  },
});

export { expect } from '@playwright/test';
