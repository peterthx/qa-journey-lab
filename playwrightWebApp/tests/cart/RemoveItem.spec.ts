import { test, expect } from "../../fixtures/page.fixture";
import { products } from "../../datatest/products";

test.describe("TS003 - Remove Item from Cart Tests", () => {
  test.beforeEach(async ({ loginPage, standardUser }) => {
    await loginPage.navigate();
    await loginPage.login(standardUser.username, standardUser.password);
  });

  test.afterEach(async ({ logoutPage, page }) => {
    await logoutPage.logout();
    await expect(page).toHaveURL("/");
  });

  test("TS003_TC001 - should remove a single item from the cart", async ({
    inventoryPage,
    cartPage,
  }) => {
    // Add a single item and verify it's in the cart
    await inventoryPage.addProduct(products.backpack);
    await expect(inventoryPage.cartBadge).toHaveText("1");

    await inventoryPage.openCart();
    await cartPage.removeProduct(products.backpack);

    await expect(cartPage.cartBadge).toHaveCount(0);
  });

  test("TS003_TC002 - should remove one of multiple items from the cart", async ({
    inventoryPage,
    cartPage,
  }) => {
    // Add multiple items
    await inventoryPage.addProducts([products.boltTShirt, products.bikeLight, products.fleeceJacket]);
    await expect(inventoryPage.cartBadge).toHaveText("3");

    await inventoryPage.openCart();
    await cartPage.removeProduct(products.bikeLight);
    await expect(cartPage.cartBadge).toHaveText("2");
  });

  test("TS003_TC003 - should remove all items from the cart", async ({
    cartPage,
    inventoryPage,
  }) => {
    // Add all items to the cart
    await inventoryPage.addAllItemsToCart();
    await expect(inventoryPage.cartBadge).toHaveText("6");

    await inventoryPage.openCart();
    for (const product of Object.values(products)) {
      await cartPage.removeProduct(product);
    }

    await expect(cartPage.cartBadge).toHaveCount(0);
  });
});
