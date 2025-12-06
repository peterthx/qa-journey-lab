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
├── playwrightAPI/              # Playwright API tests
├── playwrightWebApp/           # Playwright E2E tests + config
└── README.md
```

## Projects

-   `playwrightWebApp`: E2E tests for a web application, demonstrating basic user interactions and assertions.
-   `playwrightAPI`: API tests, showing how to make requests and validate responses.
-   `k6LoadTest`: Performance tests for an API, including smoke and load testing scenarios.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v20+)
-   [k6](https://k6.io/docs/getting-started/installation/)

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

### Running Tests

-   **Playwright (Browser E2E)**

    ```bash
    npm run test:webapp
    ```

-   **Playwright (API)**

    ```bash
    npm run test:api
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

## Continuous Integration

This repository is configured with a `Jenkinsfile` to automatically run tests and archive the results. The pipeline is configured to run the API and WebApp tests in parallel to speed up the process.

Here is the configuration of the `Jenkinsfile`:

```groovy
pipeline {
    agent any

    tools {
        nodejs 'nodejs-20'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            parallel {
                stage('Run API Tests') {
                    steps {
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            sh 'npm run test:api'
                        }
                    }
                    post {
                        always {
                            archiveArtifacts artifacts: 'playwrightAPI/playwright-report/', allowEmptyArchive: true
                            archiveArtifacts artifacts: 'playwrightAPI/test-results/', allowEmptyArchive: true
                        }
                    }
                }

                stage('Run WebApp Tests') {
                    steps {
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            sh 'npm run test:webapp'
                        }
                    }
                    post {
                        always {
                            archiveArtifacts artifacts: 'playwrightWebApp/playwright-report/', allowEmptyArchive: true
                            archiveArtifacts artifacts: 'playwrightWebApp/test-results/', allowEmptyArchive: true
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
```

## Pre-commit Validation

Before committing your changes, it is recommended to run the following tests to ensure code quality and prevent regressions:

-   **Playwright Web App (E2E)**

    ```bash
    npm run test:webapp
    ```

-   **Playwright API**

    ```bash
    npm run test:api
    ```

-   **k6 Load Test (Smoke)**

    ```bash
    cd k6LoadTest
    k6 run tests/smoke/smoke-test.js
    ```
---

**Last updated:** December 6, 2025