# Playwright (Browser E2E) Tests

This project contains browser end-to-end tests using Playwright for a sample web application.

## 🚀 Quick Start

1.  **Navigate to the directory:**

    ```bash
    cd playwright-web
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**

    ```bash
    npx playwright install
    ```

4.  **Run tests:**

    ```bash
    npx playwright test
    ```

## 📂 Project Structure

-   `playwright.config.ts` — Playwright configuration file.
-   `tests/` — Contains all the test files.
    -   `auth/` — Tests for authentication-related features.
    -   `cart/` — Tests for shopping cart functionality.
-   `playwright-report/` — Directory where Playwright HTML reports are generated.
-   `test-results/` — Directory where test artifacts like screenshots and traces are stored.

## Running Tests

To run all tests:

```bash
npx playwright test
```

To run a specific test file:

```bash
npx playwright test tests/auth/login-success.spec.ts
```

To run tests in a specific folder:

```bash
npx playwright test tests/cart/
```

## Reporting

After the tests have run, an HTML report is generated in the `playwright-report` directory. You can view it with this command:

```bash
npx playwright show-report
```

## Recommended next steps

-   Remove any `test.only` lines in Playwright tests before CI runs.
-   Move credentials and endpoints to environment variables or CI secrets.
-   Add `npm` scripts to `package.json` to simplify common commands.

---

**Last Updated:** December 4, 2025