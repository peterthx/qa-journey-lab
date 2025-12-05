# Playwright API Testing Framework

This project provides an automated API testing framework built with Playwright and TypeScript. It is designed to facilitate robust and reliable testing of RESTful APIs, covering various endpoints and E2E flows.

## Features

*   **Automated API Tests:** Comprehensive test suites for API endpoints.
*   **Reusable Utilities:** Helper functions for generating test data and common operations.
*   **Clear Project Structure:** Organized codebase for easy navigation and maintenance.
*   **Integration with Playwright:** Leverages Playwright's powerful assertion and request capabilities.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (Node Package Manager, usually comes with Node.js)

### Installation

1.  **Navigate to the project directory:**
    ```bash
    cd playwright-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Tests

To run all tests:

```bash
npx playwright test
```

To run tests in a specific file or directory:

```bash
npx playwright test tests/customers
npx playwright test tests/orders/create-order.spec.ts
```

To run tests with a specific grep pattern:

```bash
npx playwright test --grep "E2E Flow Create Order"
```

## Project Structure

The project is organized into the following key directories:

*   `core/`: Contains core utility functions and test data generators used across the tests (e.g., `main.ts` for random data generation).
*   `tests/`: Houses all the API test specifications, organized by feature or API domain.
    *   `tests/customers/`: Tests related to customer API endpoints.
    *   `tests/orders/`: Tests related to order API endpoints.
    *   `tests/e2e/`: End-to-end flow tests that might involve multiple API calls.
*   `fixtures/`: (If used) Custom fixtures for Playwright tests.
*   `playwright.config.ts`: Playwright test runner configuration.
*   `package.json`: Project dependencies and scripts.
*   `tsconfig.json`: TypeScript configuration.

## Technologies Used

*   **[Playwright](https://playwright.dev/):** A framework for Web Testing and Automation.
*   **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that compiles to plain JavaScript.

## Configuration

The Playwright test runner can be configured via `playwright.config.ts`. This file defines settings such as:

*   Base URL for API requests.
*   Timeouts.
*   Reporters.
*   Browser configurations (though not directly relevant for API testing, it's part of Playwright's config).

## Reporting

After running tests, you can view the HTML test report by executing:

```bash
npx playwright show-report
```

---

**Last Updated:** December 5, 2025