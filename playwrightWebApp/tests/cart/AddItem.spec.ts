import { test, expect } from "../../fixtures/page.fixture";

test.describe("TS002 - Shopping Cart – Add Item Tests", () => {
  
  test.beforeEach(async ({ loginPage, standardUser }) => {
    await loginPage.navigate();
    await loginPage.login(standardUser.username, standardUser.password);
  });

  test.afterEach(async ({ logoutPage, page }) => {
    await logoutPage.logout();
    expect(page).toHaveURL("/");
  });

  test("TS002_TC001 - User can add 1 item to the cart", async ({
    cartPage,
    checkoutPage,
    inventoryPage,
  }) => {
    await inventoryPage.btnAddBackpack.click();
    await expect(inventoryPage.lnkCart).toContainText("1");
    await inventoryPage.lnkCart.click();
    await cartPage.goToCheckout();

    await checkoutPage.inputAddress("John", "Smith", "1989 San Francisco US");

    await expect(checkoutPage.lblSubtotal).toContainText("$29.99");
    await expect(checkoutPage.lblTax).toContainText("$2.40");
    await expect(checkoutPage.lblTotal).toContainText("$32.39");

    await checkoutPage.finishCheckout();
    await checkoutPage.backToProducts();
  });

  test("TS002_TC002 - User can add multiple items to the cart", async ({
    cartPage,
    inventoryPage,
    checkoutPage,
  }) => {
    await inventoryPage.btnAddBackpack.click();
    await inventoryPage.btnAddBoltTShirt.click();
    await inventoryPage.btnAddBikeLight.click();
    await expect(inventoryPage.lnkCart).toContainText("3");
    await inventoryPage.lnkCart.click();
    await cartPage.goToCheckout();

    await checkoutPage.inputAddress(
      "Lily",
      "Park",
      "77 Castro St, Mountain View, CA",
    );

    await expect(checkoutPage.lblSubtotal).toContainText("$55.97");
    await expect(checkoutPage.lblTax).toContainText("$4.48");
    await expect(checkoutPage.lblTotal).toContainText("$60.45");

    await checkoutPage.finishCheckout();
    await checkoutPage.backToProducts();
  });

  test("TS002_TC003 - User can add all items to the cart", async ({
    cartPage,
    checkoutPage,
    inventoryPage,
  }) => {
    await inventoryPage.addAllItemsToCart();

    await expect(inventoryPage.lnkCart).toContainText("6");
    await inventoryPage.lnkCart.click();
    await cartPage.goToCheckout();

    await checkoutPage.inputAddress(
      "Noah",
      "Foster",
      "210 University Ave, Palo Alto, CA",
    );

    await expect(checkoutPage.lblSubtotal).toContainText("$129.94");
    await expect(checkoutPage.lblTax).toContainText("$10.40");
    await expect(checkoutPage.lblTotal).toContainText("$140.34");

    await checkoutPage.finishCheckout();
    await checkoutPage.backToProducts();
  });
});
