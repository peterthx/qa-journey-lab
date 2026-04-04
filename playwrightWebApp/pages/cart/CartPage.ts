import { Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {
    this.page = page;
  }

  get btnCheckout() {
    return this.page.locator('[data-test="checkout"]');
  }
  get btnContinueShopping() {
    return this.page.locator('[data-test="continue-shopping"]');
  }

  async goToCheckout() {
    await this.btnCheckout.click();
  }
}
