## QA Journey Lab

This repository contains example automated tests and tools used in the QA Journey Lab exercises:

- `playwright-web/` — Playwright end-to-end (E2E) tests for the Sauce Demo sample site.
- `k6-api/` — k6 smoke and load tests for API endpoints (sample supplier and products flows).

Quick links:
- `playwright-web/README.md` — Playwright setup and run instructions.
- `k6-api/README.md` — k6 setup and run instructions.

Getting started

1. Clone the repository:

```bash
git clone <repo-url>
cd qa-journey-lab
```

2. Choose the test folder you want to run:

- Playwright (browser tests):

```bash
cd playwright-web
npm install
npx playwright install
# QA Journey Lab

This repository contains example automated test suites and tooling used in the QA Journey Lab exercises.

Contents

- `playwright-web/` — Playwright end-to-end (E2E) tests for the Sauce Demo sample site (browser-based flows).
- `k6-api/` — k6 smoke and load tests for API endpoints (supplier/products examples).

Quick links

- `playwright-web/README.md` — Playwright setup, run, and reporting instructions.
- `k6-api/README.md` — k6 setup, run, and configuration guidance.

Getting started

1. Clone the repository:

```bash
git clone <repo-url>
cd qa-journey-lab
```

2. Run the test suite you want to try.

Playwright (browser E2E)

```bash
cd playwright-web
npm install
# Install browsers used by Playwright
npx playwright install
# Run tests (all projects/browsers)
npx playwright test
```

Helpful `npm` script suggestions for `playwright-web/package.json` (add to simplify commands):

```json
"scripts": {
	"test": "playwright test",
	"test:headed": "playwright test --headed",
	"test:report": "playwright show-report",
	"install:browsers": "npx playwright install"
}
```

k6 (API smoke & load)

```bash
cd k6-api
# Run a smoke test
k6 run tests/smoke/smoke-test.js

# Run a load test with CLI overrides
k6 run --vus 10 --duration 30s tests/load/wh-load-test.js
```
