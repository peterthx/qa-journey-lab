# QA Journey Lab — Project Overview

This repository is a collection of example automated tests and supporting utilities used in the QA Journey Lab. It demonstrates three common types of test automation used in modern QA workflows:

- Browser E2E tests using Playwright (see `playwright-web/README.md`)
- API performance and smoke tests using k6 (`k6-api/`)

Purpose

The goal of this repository is to provide small, focused examples that show how to write, run, and report on tests across different tools. Use the included tests as learning material, templates, or a starting point for your own automation.

Repository layout (top-level)

```
playwright-web/         # Playwright E2E tests + config
k6-api/                 # k6 smoke & load tests
playwright-report/      # Playwright HTML reports (generated)
test-results/           # Example test artifacts
```

Quick start

1. Clone the repository:

```bash
git clone <repo-url>
cd qa-journey-lab
```

2. Pick the test suite you want to run and follow the folder README:

- Playwright (browser E2E)
    See `playwright-web/README.md`

- k6 (API smoke & load)

```bash
cd k6-api
# Run a smoke test
k6 run tests/smoke/smoke-test.js

# Run a load test with CLI overrides
k6 run --vus 10 --duration 30s tests/load/wh-load-test.js
```

Recommended next steps

- Remove any `test.only` lines in Playwright tests before CI runs.
- Move credentials and endpoints to environment variables or CI secrets.
- Add `npm` scripts to `playwright-web/package.json` (see `playwright-web/README.md`) or a `Makefile`/scripts to simplify common commands.

Where to find more information

- `playwright-web/README.md` — Playwright usage and report instructions
- `k6-api/README.md` — k6 usage and configuration

If you want, I can:

- Add example `npm` scripts to `playwright-web/package.json` and verify them,
- Remove `test.only` occurrences across Playwright tests,
- Add a sample `.env` placeholder for `k6-api` or create a `requirements.txt` for Robot Framework.

---

**Last updated:** November 19, 2025
