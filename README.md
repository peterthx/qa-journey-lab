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
npx playwright test
```

- k6 (API load/smoke tests):

```bash
cd k6-api
# ensure k6 is installed (Homebrew, npm, or Docker)
# run a smoke test
k6 run tests/smoke/smoke-test.js
```

## 📝 License

This project is part of the QA Journey Lab. See main repository LICENSE for details.