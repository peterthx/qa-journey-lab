import { test, expect } from "@playwright/test";

test.describe("Login Form Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Login and Logout flow", async ({ page }) => {
    // Login
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await page.locator("#react-burger-menu-btn").click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // logout success (back to login page)
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  });

  test("Shopping cart - add item", async ({ page }) => {
    // Login
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    // Shopping
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    // Input Address
    await page.locator('[data-test="firstName"]').fill("John");
    await page.locator('[data-test="lastName"]').fill("Smith");
    await page
      .locator('[data-test="postalCode"]')
      .fill("1989 San Francisco US");
    await page.locator('[data-test="continue"]').click();

    // Use partial text matching if exact format might vary
    await expect(page.locator('[data-test="subtotal-label"]')).toContainText(
      "$29.99"
    );
    await expect(page.locator('[data-test="tax-label"]')).toContainText(
      "$2.40"
    );
    await expect(page.locator('[data-test="total-label"]')).toContainText(
      "$32.39"
    );

    // click finish
    await page.locator('[data-test="finish"]').click();

    // back to homepage
    await page.locator('[data-test="back-to-products"]').click();

    // logout
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
  });
});
