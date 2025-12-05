# QA Journey Lab

This repository is a collection of example automated tests and supporting utilities used in the QA Journey Lab. It demonstrates three common types of test automation used in modern QA workflows:

-   **Browser E2E tests** using Playwright (`playwrightWebApp/`)
-   **API tests** using Playwright (`playwrightAPI/`)
-   **API performance and smoke tests** using k6 (`k6LoadTest/`)

The goal of this repository is to provide small, focused examples that show how to write, run, and report on tests across different tools. Use the included tests as learning material, templates, or a starting point for your own automation.

## Repository Layout

```
.
├── k6LoadTest/                 # k6 smoke & load tests
├── playwrightAPI/         # Playwright API tests
├── playwrightWebApp/         # Playwright E2E tests + config
└── README.md
```

## Projects

-   `playwrightWebApp`: E2E tests for a web application, demonstrating basic user interactions and assertions.
-   `playwrightAPI`: API tests, showing how to make requests and validate responses.
-   `k6LoadTest`: Performance tests for an API, including smoke and load testing scenarios.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16+)
-   [k6](https://k6.io/docs/getting-started/installation/)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/qa-journey-lab.git
    cd qa-journey-lab
    ```

2.  Install dependencies for each project:

    ```bash
    # For playwrightWebApp
    cd playwrightWebApp
    npm install
    npx playwright install

    # For playwrightAPI
    cd ../playwrightAPI
    npm install
    ```

### Running Tests

-   **Playwright (Browser E2E)**

    For detailed instructions, see the `playwrightWebApp/README.md`.

    ```bash
    cd playwrightWebApp
    npx playwright test
    ```

-   **Playwright (API)**

    For detailed instructions, see the `playwrightAPI/README.md`.

    ```bash
    cd playwrightAPI
    npx playwright test
    ```

-   **k6 (API smoke & load)**

    For detailed instructions, see the `k6LoadTest/README.md`.

    ```bash
    cd k6LoadTest

    # Run a smoke test
    k6 run tests/smoke/smoke-test.js

    # Run a load test with CLI overrides
    k6 run --vus 10 --duration 30s tests/load/wh-load-orders.js
    ```

## Pre-commit Validation

Before committing your changes, it is recommended to run the following tests to ensure code quality and prevent regressions:

-   **Playwright Web App (E2E)**

    ```bash
    cd playwrightWebApp
    npx playwright test
    ```

-   **Playwright API**

    ```bash
    cd playwrightAPI
    npx playwright test
    ```

-   **k6 Load Test (Smoke)**

    ```bash
    cd k6LoadTest
    k6 run tests/smoke/smoke-test.js
    ```
---

**Last updated:** December 5, 2025