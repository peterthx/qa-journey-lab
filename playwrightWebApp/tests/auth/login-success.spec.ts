import { test, expect } from "@playwright/test";

test.describe("Login Form Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });
  test("Login and Logout normal user #1", async ({ page }) => {
    // Login
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await page.locator("#react-burger-menu-btn").click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // logout success (back to login page)
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  });

  test("Login and Logout problem user #2", async ({ page }) => {
    // Login
    await page.locator('[data-test="username"]').fill("problem_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await page.locator("#react-burger-menu-btn").click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // logout success (back to login page)
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  });

  test("Login and Logout visual user #3", async ({ page }) => {
    // Login
    await page.locator('[data-test="username"]').fill("visual_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await page.locator("#react-burger-menu-btn").click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // logout success (back to login page)
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  });
});
