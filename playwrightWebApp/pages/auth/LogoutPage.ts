import { expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class LogoutPage extends BasePage {
  get lnkBurgerMenu() {
    return this.page.locator("#react-burger-menu-btn");
  }

  get btnSidebarLink() {
    return this.page.locator('[data-test="logout-sidebar-link"]');
  }

  async logout(): Promise<void> {
    await this.lnkBurgerMenu.click();
    await this.btnSidebarLink.click();
    await expect(this.page).toHaveURL("/");
  }
}
