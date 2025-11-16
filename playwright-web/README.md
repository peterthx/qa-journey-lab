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

- If a test captures a trace (configured in `playwright.config.ts`), open the trace UI from the report or via Playwright trace viewer.

**Notes & suggestions**
- Remove any `test.only` usages (e.g., in `tests/...`) before running CI to avoid accidentally skipping other tests.
- Consider adding `baseURL` to `playwright.config.ts` to simplify `page.goto()` calls.
- Credentials are currently hard-coded in tests; consider moving them to environment variables or a secrets store for safety.

**Optional enhancements (I can apply)**
- Add convenient npm scripts to `package.json` (e.g., `test`, `test:report`, `install:browsers`).
- Remove `test.only` occurrences automatically and/or extract common login steps into a helper fixture.

**Related folders**
- `../k6-api` — load and smoke tests using k6 (separate test runner and toolchain).

If you'd like, I can now:
- Add recommended `npm` scripts to `package.json` in this folder,
- Remove `test.only` from tests,
- Or extract a reusable login helper/fixture.

Tell me which of those you'd like me to do next.