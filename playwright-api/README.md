# Playwright Test API — Quick Start

## Install
```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

Add useful npm scripts to package.json (optional):
```json
"scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "test:debug": "playwright test --debug"
}
```

## Project structure
```
tests/              → all test files
tests/utils/        → helpers and reusable utilities
tests/auth/         → auth-related test suites
tests/users/        → user-related test suites
fixtures/           → test fixtures (e.g., tokens, mock data)
playwright.config.ts→ Playwright configuration
package.json        → dependencies and scripts
tsconfig.json       → TypeScript configuration (if used)
```

## Run tests
- Run all tests:
    ```
    npx playwright test
    ```
- Run a specific test file:
    ```
    npx playwright test tests/path/to/spec.ts
    ```
- Run headed (visible) mode:
    ```
    npx playwright test --headed
    ```

## Debug TypeScript scripts
If you need to execute or debug a standalone TypeScript file:
```
npx ts-node <name>.ts
```
