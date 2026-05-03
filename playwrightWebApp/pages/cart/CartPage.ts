import { Page } from "@playwright/test";
import { BasePage } from "../../fixtures/BasePage";

export class CartPage extends BasePage {
  constructor(protected page: Page) {
    super(page);
  }

  get btnCheckout() {
    return this.page.locator('[data-test="checkout"]');
  }

  get btnContinueShopping() {
    return this.page.locator('[data-test="continue-shopping"]');
  }

  public async goToCheckout() {
    await this.btnCheckout.click();
  }
}