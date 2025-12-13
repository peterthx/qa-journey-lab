import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly addToCartBackpackButton: Locator;
  readonly addToCartBoltTshirtButton: Locator;
  readonly addToCartBikeLightButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator(".shopping_cart_link");
    this.addToCartBackpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.addToCartBoltTshirtButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    );
    this.addToCartBikeLightButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]'
    );
  }

  async addAllItemsToCart() {
    while (await this.page.locator('[data-test^="add-to-cart-"]').count() > 0) {
      await this.page.locator('[data-test^="add-to-cart-"]').first().click();
    }
  }
}
