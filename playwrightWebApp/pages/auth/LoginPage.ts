import { expect, Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

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

  async navigate() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.txtUsername.fill(username);
    await this.txtPassword.fill(password);
    await this.btnLogin.click();
  }

  async assertErrorMessage(message: string) {
    await expect(this.txtErrMessage).toHaveText(message);
  }
}
