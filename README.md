# QA Journey Lab

This repository is a collection of example automated tests and supporting utilities used in the QA Journey Lab. It demonstrates three common types of test automation used in modern QA workflows:

-   **Browser E2E tests** using Playwright (`playwright-web/`)
-   **API tests** using Playwright (`playwright-api/`)
-   **API performance and smoke tests** using k6 (`k6-api/`)

The goal of this repository is to provide small, focused examples that show how to write, run, and report on tests across different tools. Use the included tests as learning material, templates, or a starting point for your own automation.

## Repository Layout

```
.
├── k6-api/                 # k6 smoke & load tests
├── playwright-api/         # Playwright API tests
├── playwright-web/         # Playwright E2E tests + config
└── README.md
```

## Projects

-   `playwright-web`: E2E tests for a web application, demonstrating basic user interactions and assertions.
-   `playwright-api`: API tests, showing how to make requests and validate responses.
-   `k6-api`: Performance tests for an API, including smoke and load testing scenarios.

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
    # For playwright-web
    cd playwright-web
    npm install
    npx playwright install

    # For playwright-api
    cd ../playwright-api
    npm install
    ```

### Running Tests

-   **Playwright (Browser E2E)**

    For detailed instructions, see the `playwright-web/README.md`.

    ```bash
    cd playwright-web
    npx playwright test
    ```

-   **Playwright (API)**

    For detailed instructions, see the `playwright-api/README.md`.

    ```bash
    cd playwright-api
    npx playwright test
    ```

-   **k6 (API smoke & load)**

    For detailed instructions, see the `k6-api/README.md`.

    ```bash
    cd k6-api

    # Run a smoke test
    k6 run tests/smoke/smoke-test.js

    # Run a load test with CLI overrides
    k6 run --vus 10 --duration 30s tests/load/wh-load-orders.js
    ```

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please open an issue or submit a pull request.

---

**Last updated:** December 4, 2025