# QA Journey Lab

This repository is a collection of example automated tests and supporting utilities used in the QA Journey Lab. It demonstrates three common types of test automation used in modern QA workflows:

-   **Browser E2E tests** using Playwright (`playwrightWebApp/`)
-   **API tests** using Playwright (`playwrightAPI/`)
-   **API performance and smoke tests** using k6 (`k6LoadTest/`)

The goal of this repository is to provide small, focused examples that show how to write, run, and report on tests across different tools. Use the included tests as learning material, templates, or a starting point for your own automation.

## Projects in this Repository

| Project                               | Description                                                                                              |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`k6LoadTest/`](./k6LoadTest)         | Performance tests for an API, including smoke and load testing scenarios.                                  |
| [`playwrightAPI/`](./playwrightAPI)   | API tests, demonstrating how to make requests and validate responses using Playwright.                   |
| [`playwrightWebApp/`](./playwrightWebApp) | E2E tests for a web application, demonstrating basic user interactions and assertions with Playwright. |

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

## Running Tests

Before committing your changes, it is recommended to run the following tests to ensure code quality and prevent regressions.

### Playwright (Browser E2E)

```bash
npm run test:webapp
```

### Playwright (API)

```bash
npm run test:api
```

### k6 (API Smoke Test)

For detailed instructions on all k6 tests, see the [`k6LoadTest/README.md`](./k6LoadTest/README.md).

```bash
cd k6LoadTest
k6 run tests/smoke/smoke-test.js
```

### k6 (API Load Test)

```bash
cd k6LoadTest
k6 run --vus 10 --duration 30s tests/load/wh-load-orders.js
```

## Continuous Integration

This repository is configured with a `Jenkinsfile` to automatically run tests and archive the results. The pipeline runs the API and WebApp tests in parallel to speed up the process.

<details>
<summary>Click to view the Jenkinsfile configuration</summary>

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
</details>

---

**Last updated:** December 7, 2025