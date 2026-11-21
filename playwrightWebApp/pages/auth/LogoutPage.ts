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
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.page.locator(".inventory_list")).toBeVisible();
    await expect(this.lnkBurgerMenu).toBeAttached();
    await this.lnkBurgerMenu.scrollIntoViewIfNeeded();
    await expect(this.lnkBurgerMenu).toBeInViewport();
    await this.lnkBurgerMenu.click({ force: true });
    await expect(this.btnSidebarLink).toBeInViewport();
    await this.btnSidebarLink.click();
    await expect(this.page).toHaveURL("/");
  }
}
