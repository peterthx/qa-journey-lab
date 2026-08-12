import { Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class InventoryPage extends BasePage {
  get cartLink() {
    return this.page.locator('[data-test="shopping-cart-link"]');
  }

  get cartBadge() {
    return this.page.locator('[data-test="shopping-cart-badge"]');
  }

  addButton(productId: string): Locator {
    return this.page.locator(`[data-test="add-to-cart-${productId}"]`);
  }

  async addProduct(productId: string): Promise<void> {
    await this.addButton(productId).click();
  }

  async addProducts(productIds: string[]): Promise<void> {
    for (const productId of productIds) {
      await this.addProduct(productId);
    }
  }

  async addAllItemsToCart(): Promise<void> {
    const addButtons = this.page.locator('[data-test^="add-to-cart-"]');
    while (await addButtons.count()) {
      await addButtons.first().click();
    }
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
