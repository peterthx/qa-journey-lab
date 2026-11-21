import { test, expect } from "../../fixtures/page.fixture";
import { checkoutData } from "../../datatest/checkout";
import { products } from "../../datatest/products";

test.describe("TS004 - Cart regression tests", () => {
  test.beforeEach(async ({ loginPage, standardUser }) => {
    await loginPage.navigate();
    await loginPage.login(standardUser.username, standardUser.password);
  });

  test.afterEach(async ({ logoutPage, page }) => {
    await logoutPage.logout();
    await expect(page).toHaveURL("/");
  });

  test("TS004_TC001 - cart count and checkout totals stay correct after returning from cart", async ({
    inventoryPage,
    cartPage,
    checkoutPage,
  }) => {
    await inventoryPage.addProducts([products.backpack, products.bikeLight]);
    await expect(inventoryPage.cartBadge).toHaveText("2");

    await inventoryPage.openCart();
    await expect(cartPage.btnCheckout).toBeVisible();
    await cartPage.continueShopping();

    await inventoryPage.addProduct(products.boltTShirt);
    await expect(inventoryPage.cartBadge).toHaveText("3");

    await inventoryPage.openCart();
    await cartPage.goToCheckout();

    const { address, totals } = checkoutData.regression;
    await checkoutPage.inputAddress(address);

    await expect(checkoutPage.lblSubtotal).toContainText(totals.subtotal);
    await expect(checkoutPage.lblTax).toContainText(totals.tax);
    await expect(checkoutPage.lblTotal).toContainText(totals.total);

    await checkoutPage.finishCheckout();
    await expect(checkoutPage.btnBackToProducts).toBeVisible();
    await checkoutPage.backToProducts();
  });
});
