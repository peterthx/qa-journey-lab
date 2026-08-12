import { BasePage } from "../BasePage";

export type CheckoutAddress = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export class CheckoutPage extends BasePage {
  get txtFirstname() {
    return this.page.locator('[data-test="firstName"]');
  }

  get txtLastname() {
    return this.page.locator('[data-test="lastName"]');
  }

  get txtPostalcode() {
    return this.page.locator('[data-test="postalCode"]');
  }

  get btnContinue() {
    return this.page.locator('[data-test="continue"]');
  }

  get btnFinish() {
    return this.page.locator('[data-test="finish"]');
  }

  get btnBackToProducts() {
    return this.page.locator('[data-test="back-to-products"]');
  }

  get lblSubtotal() {
    return this.page.locator('[data-test="subtotal-label"]');
  }

  get lblTax() {
    return this.page.locator('[data-test="tax-label"]');
  }

  get lblTotal() {
    return this.page.locator('[data-test="total-label"]');
  }

  async inputAddress({ firstName, lastName, postalCode }: CheckoutAddress): Promise<void> {
    await this.txtFirstname.fill(firstName);
    await this.txtLastname.fill(lastName);
    await this.txtPostalcode.fill(postalCode);
    await this.btnContinue.click();
  }

  async finishCheckout(): Promise<void> {
    await this.btnFinish.click();
  }

  async backToProducts(): Promise<void> {
    await this.btnBackToProducts.click();
  }
}
