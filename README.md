# QA Journey Lab

This repository is a collection of example automated tests and supporting utilities used in the QA Journey Lab. It demonstrates three common types of test automation used in modern QA workflows:

-   **Browser E2E tests** using Playwright (`playwrightWebApp/`)
-   **API tests** using Playwright (`playwrightAPI/`)
-   **API performance and smoke tests** using k6 (`k6LoadTest/`)
-   **API tests** using Robot Framework (`robotTestsAPIs/`)

The goal of this repository is to provide small, focused examples that show how to write, run, and report on tests across different tools. Use the included tests as learning material, templates, or a starting point for your own automation.

## Projects in this Repository

| Project                               | Description                                                                                              |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`k6LoadTest/`](./k6LoadTest)         | Performance tests for an API, including smoke and load testing scenarios.                                  |
| [`playwrightAPI/`](./playwrightAPI)   | API tests, demonstrating how to make requests and validate responses using Playwright.                   |
| [`playwrightWebApp/`](./playwrightWebApp) | E2E tests for a web application, demonstrating basic user interactions and assertions with Playwright. |
| [`robotTestsAPIs/`](./robotTestsAPIs) | API tests using Robot Framework for comprehensive testing scenarios. |

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v20+)
-   [k6](https://k6.io/docs/getting-started/installation/)
-   [Robot Framework](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#installing-robot-framework)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/qa-journey-lab.git
    cd qa-journey-lab
    ```

2.  Install dependencies for all projects using npm workspaces:

    ```bash
    npm install
    ```

3.  Set up the environment for `k6LoadTest`:

    ```bash
    cd k6LoadTest
    cp .env.example .env
    cd ..
    ```

## Running Tests

Before committing your changes, it is recommended to run the following tests to ensure code quality and prevent regressions.

### Run All Tests

You can run all tests with a single command:

```bash
./run
```

### Run Individual Tests

#### Playwright (Browser E2E)

```bash
npm run test:webapp
```

#### Playwright (API)

```bash
npm run test:api
```

#### k6 (API Smoke Test)

For detailed instructions on all k6 tests, see the [`k6LoadTest/README.md`](./k6LoadTest/README.md).

```bash
cd k6LoadTest
k6 run tests/smoke/smoke-test.js
```

#### k6 (API Load Test)

```bash
cd k6LoadTest
k6 run --vus 10 --duration 30s tests/load/wh-load-orders.js
```

#### Robot Framework (API)

For detailed instructions on Robot Framework tests, see the [`robotTestsAPIs/README.md`](./robotTestsAPIs/README.md).

```bash
./run-api-robot.sh
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
