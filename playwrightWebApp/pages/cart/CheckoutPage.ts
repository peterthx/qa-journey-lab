import { Page } from "@playwright/test";
import { BasePage } from "../../fixtures/BasePage";

export class CheckoutPage extends BasePage{

  constructor(protected page: Page) {
    super(page);
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

  public async inputAddress(firstName: string, lastName: string, postalCode: string) {
    await this.txtFirstname.fill(firstName);
    await this.txtLastname.fill(lastName);
    await this.txtPostalcode.fill(postalCode);
    await this.btnContinue.click();
  }

  public async finishCheckout() {
    await this.btnFinish.click();
  }

  public async backToProducts() {
      await this.btnBackToProducts.click();
  }

  public async openMenu() {
    await this.btnOpenMenu.click();
  }

  public async logout() {
    await this.btnLogout.click();
  }
}
