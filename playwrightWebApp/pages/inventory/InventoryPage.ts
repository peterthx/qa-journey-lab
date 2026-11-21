import { expect, Locator } from "@playwright/test";
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
    const productIds = await addButtons.evaluateAll((buttons) =>
      buttons.map((button) => button.getAttribute("data-test")!.replace("add-to-cart-", "")),
    );

    for (const [index, productId] of productIds.entries()) {
      await this.addProduct(productId);
      await expect(this.page.locator(`[data-test="remove-${productId}"]`)).toBeVisible();
      await expect(this.cartBadge).toHaveText(String(index + 1));
    }
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
