import { test, expect } from "../../fixtures/page.fixture";

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
    await inventoryPage.btnAddBackpack.click();
    await inventoryPage.btnAddBikeLight.click();
    await expect(inventoryPage.lnkCart).toContainText("2");

    await inventoryPage.lnkCartShop.click();
    await expect(cartPage.btnCheckout).toBeVisible();
    await cartPage.btnContinueShopping.click();

    await inventoryPage.btnAddBoltTShirt.click();
    await expect(inventoryPage.lnkCart).toContainText("3");

    await inventoryPage.lnkCartShop.click();
    await cartPage.goToCheckout();

    await checkoutPage.inputAddress("Regression", "Test", "1234 Test Road");

    await expect(checkoutPage.lblSubtotal).toContainText("$55.97");
    await expect(checkoutPage.lblTax).toContainText("$4.48");
    await expect(checkoutPage.lblTotal).toContainText("$60.45");

    await checkoutPage.finishCheckout();
    await expect(checkoutPage.btnBackToProducts).toBeVisible();
  });
});
