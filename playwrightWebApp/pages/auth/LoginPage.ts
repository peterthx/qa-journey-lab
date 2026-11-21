import { expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class LoginPage extends BasePage {
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

  async navigate(): Promise<void> {
    await super.navigate("/");
  }

  async login(username: string, password: string): Promise<void> {
    await this.txtUsername.fill(username);
    await this.txtPassword.fill(password);
    await this.txtPassword.press("Enter");
  }

  async assertErrorMessage(message: string): Promise<void> {
    await expect(this.txtErrMessage).toHaveText(message);
  }
}
