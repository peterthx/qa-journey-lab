import { test, expect } from "../../fixtures/BasePages";

test.describe("TS001 - Login Form Tests", () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });
  test("TS001_TC001 - Login and Logout normal user #1", async ({ page,loginPage, logoutPage, standardUser }) => {
    // login
    await loginPage.login(standardUser.username, standardUser.password);

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    await logoutPage.logout();
    // logout success (back to login page)
    await expect(page).toHaveURL("/");
  });

  test("TS001_TC002 - Login and Logout problem user #2", async ({ page,loginPage, logoutPage, problemUser }) => {
    // login
    await loginPage.login(problemUser.username, problemUser.password);

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await logoutPage.logout();

    // logout success (back to login page)
    await expect(page).toHaveURL("/");
  });

  test("TS001_TC003 - Login and Logout visual user #3", async ({ page,loginPage, logoutPage, visualUser }) => {
    // login
    await loginPage.login(visualUser.username, visualUser.password);

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await logoutPage.logout();

    // logout success (back to login page)
    await expect(page).toHaveURL("/");
  });
});
