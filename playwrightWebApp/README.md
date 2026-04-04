# Playwright Web App E2E Tests

A comprehensive end-to-end testing suite for web applications using Playwright and the Page Object Model (POM) pattern.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

3. **Run tests:**
   ```bash
   npm test
   ```

## 📂 Project Structure

- `pages/` — Page Object Models for different application modules.
  - `auth/` — Login and Logout pages.
  - `cart/` — Cart and Checkout pages.
  - `inventory/` — Inventory and Product pages.
- `tests/` — Playwright test specifications.
  - `auth/` — Authentication-related tests.
  - `cart/` — Shopping cart and checkout tests.
- `fixtures/` — Custom Playwright fixtures for page initialization.
- `datatest/` — Test data and constants.
- `playwright.config.ts` — Playwright configuration.

## 🛠️ Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests in headless mode |
| `npm run test:headed` | Run all tests in headed mode |
| `npx playwright test <path>` | Run a specific test or directory |
| `npx playwright show-report` | View the last test report |

## 📊 Reporting

Test reports are generated in the `playwright-report/` directory. You can view the HTML report using:
```bash
npx playwright show-report
```

## 💡 Best Practices

- **Page Object Model:** Always encapsulate page logic in the `pages/` directory.
- **Fixtures:** Use `fixtures/BasePages.ts` to manage page instances and simplify test setup.
- **Test Data:** Keep test data separate in the `datatest/` directory.
- **Reports:** Review trace files in `test-results/` for debugging failed tests.