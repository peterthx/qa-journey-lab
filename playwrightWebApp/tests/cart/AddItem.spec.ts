import { test, expect } from "../../fixtures/page.fixture";
import { checkoutData } from "../../datatest/checkout";
import { products } from "../../datatest/products";

test.describe("TS002 - Shopping Cart – Add Item Tests", () => {

  test.beforeEach(async ({ loginPage, standardUser }) => {
    await loginPage.navigate();
    await loginPage.login(standardUser.username, standardUser.password);
  });

  test.afterEach(async ({ logoutPage, page }) => {
    await logoutPage.logout();
    await expect(page).toHaveURL("/");
  });

  test("TS002_TC001 - User can add 1 item to the cart", async ({
    cartPage,
    checkoutPage,
    inventoryPage,
  }) => {
    await inventoryPage.addProduct(products.backpack);
    await expect(inventoryPage.cartBadge).toHaveText("1");
    await inventoryPage.openCart();
    await cartPage.goToCheckout();

    const { address, totals } = checkoutData.singleItem;
    await checkoutPage.inputAddress(address);

    await expect(checkoutPage.lblSubtotal).toContainText(totals.subtotal);
    await expect(checkoutPage.lblTax).toContainText(totals.tax);
    await expect(checkoutPage.lblTotal).toContainText(totals.total);

    await checkoutPage.finishCheckout();
    await checkoutPage.backToProducts();
  });

  test("TS002_TC002 - User can add multiple items to the cart", async ({
    cartPage,
    inventoryPage,
    checkoutPage,
  }) => {
    await inventoryPage.addProducts([products.backpack, products.boltTShirt, products.bikeLight]);
    await expect(inventoryPage.cartBadge).toHaveText("3");
    await inventoryPage.openCart();
    await cartPage.goToCheckout();

    const { address, totals } = checkoutData.multipleItems;
    await checkoutPage.inputAddress(address);

    await expect(checkoutPage.lblSubtotal).toContainText(totals.subtotal);
    await expect(checkoutPage.lblTax).toContainText(totals.tax);
    await expect(checkoutPage.lblTotal).toContainText(totals.total);

    await checkoutPage.finishCheckout();
    await checkoutPage.backToProducts();
  });

  test("TS002_TC003 - User can add all items to the cart", async ({
    cartPage,
    checkoutPage,
    inventoryPage,
  }) => {
    await inventoryPage.addAllItemsToCart();

    await expect(inventoryPage.cartBadge).toHaveText("6");
    await inventoryPage.openCart();
    await cartPage.goToCheckout();

    const { address, totals } = checkoutData.allItems;
    await checkoutPage.inputAddress(address);

    await expect(checkoutPage.lblSubtotal).toContainText(totals.subtotal);
    await expect(checkoutPage.lblTax).toContainText(totals.tax);
    await expect(checkoutPage.lblTotal).toContainText(totals.total);

    await checkoutPage.finishCheckout();
    await checkoutPage.backToProducts();
  });
});
