import { expect, Page } from "@playwright/test";

export class LogoutPage {
  constructor(private page: Page) {  }

  get lnkBurgerMenu() {
    return this.page.locator("#react-burger-menu-btn")
  }
  get btnSidebarLink() {
    return this.page.locator('[data-test="logout-sidebar-link"]')
  }

  async logout() {
    await this.lnkBurgerMenu.click();
    await this.btnSidebarLink.click();
    await expect(this.page).toHaveURL("/");
  }
}
