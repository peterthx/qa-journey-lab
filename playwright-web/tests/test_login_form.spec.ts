import { test, expect } from '@playwright/test';

test('Login and Logout flow', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    // Login
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // logout success (back to login page)
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});

test('Login with locked out user', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Assert error message appears
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toContainText('Sorry, this user has been locked out.');
});


