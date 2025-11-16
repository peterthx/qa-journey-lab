# Playwright Web — QA Journey Lab

This folder contains Playwright end-to-end tests for the Sauce Demo sample site used in the QA Journey Lab.

**What it is**
- A small Playwright test suite located in `./tests` that exercises login, cart, and checkout flows.

**Prerequisites**
- Node.js (v18+ recommended)
- Git (optional)

**Install dependencies**
Run these commands from the `playwright-web` folder:

```bash
npm install
# install Playwright browsers (if needed)
npx playwright install
```

**Run tests**
- Run the full test suite:

```bash
npx playwright test
```

- Run a single test file:

```bash
npx playwright test tests/auth/login-success.spec.ts
npx playwright test tests/cart/add-item.spec.ts
npx playwright test tests/cart/remove-item.spec.ts 
```

- Run a single test by title (grep):

```bash
npx playwright test -g "Login and Logout flow"
```

**View HTML report and traces**
- After a test run, open the Playwright HTML report:

```bash
npx playwright show-report
# or open the generated report file manually
open playwright-report/index.html
```