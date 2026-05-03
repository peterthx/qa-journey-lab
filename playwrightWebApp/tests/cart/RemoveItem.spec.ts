import { test, expect } from "../../fixtures/page.fixture";

test.describe("TS003 - Remove Item from Cart Tests", () => {
  test.beforeEach(async ({ loginPage, standardUser }) => {
    await loginPage.navigate();
    await loginPage.login(standardUser.username, standardUser.password);
  });

  test.afterEach(async ({ logoutPage, page }) => {
    await logoutPage.logout();
    expect(page).toHaveURL("/");
  });

  test("TS003_TC001 - should remove a single item from the cart", async ({
    inventoryPage,
  }) => {
    // Add a single item and verify it's in the cart
    await inventoryPage.btnAddBackpack.click();
    await expect(inventoryPage.lnkCart).toContainText("1");

    // Go to the cart and remove the item
    await inventoryPage.lnkCartShop.click();
    await inventoryPage.btnRemoveBackpack.click();

    // Verify the cart is empty
    await expect(inventoryPage.lnkCart).toHaveText("");
  });

  test("TS003_TC002 - should remove one of multiple items from the cart", async ({
    inventoryPage,
  }) => {
    // Add multiple items
    await inventoryPage.btnAddBoltTShirt.click();
    await inventoryPage.btnAddBikeLight.click();
    await inventoryPage.btnAddFleeceJacket.click();
    await expect(inventoryPage.lnkCart).toContainText("3");

    // Go to the cart and remove one item
    await inventoryPage.lnkCartShop.click();
    await inventoryPage.btnRemoveBikeLight.click();
    await expect(inventoryPage.lnkCart).toContainText("2");
  });

  test("TS003_TC003 - should remove all items from the cart", async ({
    cartPage,
    inventoryPage,
  }) => {
    // Add all items to the cart
    await inventoryPage.addAllItemsToCart();
    await expect(inventoryPage.lnkCart).toContainText("6");

    // Go to the cart and remove all items
    await inventoryPage.lnkCartShop.click();
    await cartPage.btnContinueShopping.click();
    await inventoryPage.btnRemoveRedTshirt.click();
    await inventoryPage.btnRemoveFleeceJacket.click();
    await inventoryPage.btnRemoveBikeLight.click();
    await inventoryPage.btnRemoveBackpack.click();
    await inventoryPage.btnRemoveBoltTShirt.click();
    await inventoryPage.btnRemoveOnesie.click();

    // Verify the cart is empty
    await expect(inventoryPage.lnkCart).toHaveText("");
  });
});
