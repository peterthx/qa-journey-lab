import { Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class CartPage extends BasePage {
  get btnCheckout() {
    return this.page.locator('[data-test="checkout"]');
  }

  get btnContinueShopping() {
    return this.page.locator('[data-test="continue-shopping"]');
  }

  get cartBadge() {
    return this.page.locator('[data-test="shopping-cart-badge"]');
  }

  removeButton(productId: string): Locator {
    return this.page.locator(`[data-test="remove-${productId}"]`);
  }

  async goToCheckout(): Promise<void> {
    await this.btnCheckout.click();
  }

  async continueShopping(): Promise<void> {
    await this.btnContinueShopping.click();
  }

  async removeProduct(productId: string): Promise<void> {
    await this.removeButton(productId).click();
  }
}
