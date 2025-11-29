# Playwright (Browser E2E) Tests

This directory contains browser end-to-end tests using Playwright.

## Quick start

1.  Navigate to the directory:

    ```bash
    cd playwright-web
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Install Playwright browsers:

    ```bash
    npx playwright install
    ```

4.  Run tests:

    ```bash
    npx playwright test
    ```

## Recommended next steps

-   Remove any `test.only` lines in Playwright tests before CI runs.
-   Move credentials and endpoints to environment variables or CI secrets.
-   Add `npm` scripts to `package.json` to simplify common commands.

## More information

-   `playwright.config.ts` — Playwright configuration
-   `tests/` — Test files
-   `playwright-report/` — Generated Playwright HTML reports
-   `test-results/` — Example test artifacts
