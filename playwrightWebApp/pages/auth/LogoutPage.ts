import { expect, Page } from "@playwright/test";
import { BasePage } from "../../fixtures/BasePage";

export class LogoutPage extends BasePage{
  constructor(protected page: Page) { 
    super(page);
   }

  get lnkBurgerMenu() {
    return this.page.locator("#react-burger-menu-btn")
  }
  get btnSidebarLink() {
    return this.page.locator('[data-test="logout-sidebar-link"]')
  }

  public async logout() {
    await this.lnkBurgerMenu.click();
    await this.btnSidebarLink.click();
    await expect(this.page).toHaveURL("/");
  }
}
