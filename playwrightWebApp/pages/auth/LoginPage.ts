import { expect, Page } from "@playwright/test";
import { BasePage } from "../../fixtures/BasePage";

export class LoginPage extends BasePage {
  constructor(protected page: Page) {
    super(page);
  }

  get txtUsername() {
    return this.page.locator("#user-name");
  }

  get txtPassword() {
    return this.page.locator("#password");
  }

  get btnLogin() {
    return this.page.locator("#login-button");
  }

  get txtErrMessage() {
    return this.page.locator('[data-test="error"]');
  }

  public async navigate() {
    await super.navigate("/");
  }

  public async login(username: string, password: string) {
    await this.txtUsername.fill(username);
    await this.txtPassword.fill(password);
    await this.btnLogin.click();
  }

  public async assertErrorMessage(message: string) {
    await expect(this.txtErrMessage).toHaveText(message);
  }
}
