import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/auth/LoginPage";
import { InventoryPage } from "../../pages/inventory/InventoryPage";
import { CartPage } from "../../pages/cart/CartPage";
import { CheckoutPage } from "../../pages/cart/CheckoutPage";

test.describe("Shopping Cart Tests", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;


  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");

  });

  test("User can add 1 item to the cart and remove 1 item from the cart", async ({page}) => {
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    // add a single item and next to your cart remove item
    await inventoryPage.addToCartSauceBackpackButton.click();
    await expect(inventoryPage.cartLink).toContainText("1");
    await inventoryPage.cartShopLink.click();
    await inventoryPage.removeSauceLabsBackpackButton.click();

    // verify after remove items
    await expect(inventoryPage.cartLink).toContainText("");
    await cartPage.continueShoppingButton.click();

    // add a single item and can remove item
    await inventoryPage.addToCartAllTheThingsShirtRedButton.click();
    await expect(inventoryPage.cartLink).toContainText("1");
    await inventoryPage.removeAllTheThingsTshirtRedButton.click();

    // verify after remove items
    await expect(inventoryPage.cartLink).toContainText("");

    // logout
    await page.getByRole("button", { name: "Open Menu" }).click();
    const logout = page.locator('[data-test="logout-sidebar-link"]');

    // wait until ready
    await expect(logout).toBeVisible();
    await page.locator('[data-test="logout-sidebar-link"]').click();
  });

  test("User can add multiple items to the cart", async ({ page }) => {

    // add multiple items
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
      .click();
    await expect(
      page.locator('[data-test="shopping-cart-link"]')
    ).toContainText("3");
    await page.locator('[data-test="shopping-cart-link"]').click();

    // remove item
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    await expect(
      page.locator('[data-test="shopping-cart-link"]')
    ).toContainText("2");
    await page.locator('[data-test="continue-shopping"]').click();

    // goto cart
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    // input address
    await page.locator('[data-test="firstName"]').fill("Mia");
    await page.locator('[data-test="lastName"]').fill("Turner");
    await page
      .locator('[data-test="postalCode"]')
      .fill("805 San Antonio Rd, Los Altos, CA");
    await page.locator('[data-test="continue"]').click();

    // Use partial text matching if exact format might vary
    await expect(page.locator('[data-test="subtotal-label"]')).toContainText(
      "$65.98"
    );
    await expect(page.locator('[data-test="tax-label"]')).toContainText(
      "$5.28"
    );
    await expect(page.locator('[data-test="total-label"]')).toContainText(
      "$71.26"
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

  test("User can remove all items from the cart", async ({ page }) => {

    // cleanup webpage
    await page.getByRole("button", { name: "Open Menu" }).click();
    const reset = page.locator('[data-test="reset-sidebar-link"]');
    await expect(reset).toBeVisible();
    await page.locator('[data-test="reset-sidebar-link"]').click();

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

    // verify total items to cart
    await expect(
      page.locator('[data-test="shopping-cart-link"]')
    ).toContainText("6");
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="continue-shopping"]').click();

    // remove all items
    await page
      .locator('[data-test="remove-test.allthethings()-t-shirt-(red)"]')
      .click();
    await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="remove-sauce-labs-onesie"]').click();

    // verify after remove items
    await expect(
      page.locator('[data-test="shopping-cart-link"]')
    ).toContainText("");

    // logout
    await page.getByRole("button", { name: "Open Menu" }).click();
    const logout = page.locator('[data-test="logout-sidebar-link"]');

    // wait until ready
    await expect(logout).toBeVisible();
    await page.locator('[data-test="logout-sidebar-link"]').click();
  });
});