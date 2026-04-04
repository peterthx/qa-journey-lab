import { Page } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  // get cart link and cart shop link
  get cartLink() {
    return this.page.locator(".shopping_cart_link");
  }

  get cartShopLink() {
    return this.page.locator('[data-test="shopping-cart-link"]');
  }

  // add items to cart
  get btnAddBackpack() {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  get btnAddBoltTShirt() {
    return this.page.locator(
      '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
    );
  }

  get btnAddOnesie() {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
  }

  get btnAddBikeLight() {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }

  get btnAddFleeceJacket() {
    return this.page.locator(
      '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
    );
  }

  get btnAddRedTshirt() {
    return this.page.locator(
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',
    );
  }

  // remove item
  get btnRemoveBackpack() {
    return this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  }

  get btnRemoveBoltTShirt() {
    return this.page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
  }

  get btnRemoveOnesie() {
    return this.page.locator('[data-test="remove-sauce-labs-onesie"]');
  }

  get btnRemoveBikeLight() {
    return this.page.locator('[data-test="remove-sauce-labs-bike-light"]');
  }

  get btnRemoveFleeceJacket() {
    return this.page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
  }

  get btnRemoveRedTshirt() {
    return this.page.locator(
      '[data-test="remove-test.allthethings()-t-shirt-(red)"]',
    );
  }

  async addAllItemsToCart() {
    while (
      (await this.page.locator('[data-test^="add-to-cart-"]').count()) > 0
    ) {
      await this.page.locator('[data-test^="add-to-cart-"]').first().click();
    }
  }
}
