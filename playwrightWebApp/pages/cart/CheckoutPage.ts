import { Page } from "@playwright/test";

export class CheckoutPage {

  constructor(private page: Page) {
    this.page = page;
  }

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
  get btnLogout() {
    return this.page.locator('[data-test="logout-sidebar-link"]');
  }
  get btnOpenMenu() {
    return this.page.getByRole("button", { name: "Open Menu" });
  }

  async inputAddress(firstName: string, lastName: string, postalCode: string) {
    await this.txtFirstname.fill(firstName);
    await this.txtLastname.fill(lastName);
    await this.txtPostalcode.fill(postalCode);
    await this.btnContinue.click();
  }

  async finishCheckout() {
    await this.btnFinish.click();
  }

  async backToProducts() {
      await this.btnBackToProducts.click();
  }

  async openMenu() {
    await this.btnOpenMenu.click();
  }

  async logout() {
    await this.btnLogout.click();
  }
}
