import { test, expect } from "@playwright/test";

test.describe("Shopping Cart – Add Item Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("User can add 1 item to the cart", async ({ page }) => {
    // Login
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    // add item
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(
      page.locator('[data-test="shopping-cart-link"]')
    ).toContainText("1");
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
    const logout = page.locator('[data-test="logout-sidebar-link"]');

    // wait until ready
    await expect(logout).toBeVisible();
    await page.locator('[data-test="logout-sidebar-link"]').click();
  });

  test("User can add multiple items to the cart", async ({ page }) => {
    // Login
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    // add mutiple item
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await expect(
      page.locator('[data-test="shopping-cart-link"]')
    ).toContainText("3");
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    // Input Address
    await page.locator('[data-test="firstName"]').fill("Lily");
    await page.locator('[data-test="lastName"]').fill("Park");
    await page
      .locator('[data-test="postalCode"]')
      .fill("77 Castro St, Mountain View, CA");
    await page.locator('[data-test="continue"]').click();

    // Use partial text matching if exact format might vary
    await expect(page.locator('[data-test="subtotal-label"]')).toContainText(
      "$55.97"
    );
    await expect(page.locator('[data-test="tax-label"]')).toContainText(
      "$4.48"
    );
    await expect(page.locator('[data-test="total-label"]')).toContainText(
      "$60.45"
    );

    // click finish
    await page.locator('[data-test="finish"]').click();

    // back to homepage
    await page.locator('[data-test="back-to-products"]').click();

    // logout
    await page.getByRole("button", { name: "Open Menu" }).click();
    const logout = page.locator('[data-test="logout-sidebar-link"]');

    // wait until ready
    await expect(logout).toBeVisible();
    await page.locator('[data-test="logout-sidebar-link"]').click();
  });

  test("User can add all items to the cart", async ({ page }) => {
    // Login
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    // Add all item (left side)
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .click();
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();

    // Add all item (right side)
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
      .click();
    await page
      .locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
      .click();

    // Checkout
    await expect(
      page.locator('[data-test="shopping-cart-link"]')
    ).toContainText("6");
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    // Input Address
    await page.locator('[data-test="firstName"]').fill("Noah");
    await page.locator('[data-test="lastName"]').fill("Foster");
    await page
      .locator('[data-test="postalCode"]')
      .fill("210 University Ave, Palo Alto, CA");
    await page.locator('[data-test="continue"]').click();

    // Use partial text matching if exact format might vary
    await expect(page.locator('[data-test="subtotal-label"]')).toContainText(
      "$129.94"
    );
    await expect(page.locator('[data-test="tax-label"]')).toContainText(
      "$10.40"
    );
    await expect(page.locator('[data-test="total-label"]')).toContainText(
      "$140.34"
    );

    // Click finish
    await page.locator('[data-test="finish"]').click();

    // Back to homepage
    await page.locator('[data-test="back-to-products"]').click();

    // Logout
    await page.getByRole("button", { name: "Open Menu" }).click();
    const logout = page.locator('[data-test="logout-sidebar-link"]');

    // Wait until ready
    await expect(logout).toBeVisible();
    await page.locator('[data-test="logout-sidebar-link"]').click();
  });
});
