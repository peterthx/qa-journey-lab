# QA Journey Lab

This project is a place to learn and try different types of software testing. It includes tests for websites, APIs, and server performance.

## Choose a project

| Folder | What you can test | Tool |
| --- | --- | --- |
| [`playwrightWebApp/`](./playwrightWebApp/) | A website: login, shopping cart, and checkout | Playwright with TypeScript |
| [`playwrightAPI/`](./playwrightAPI/) | An API: customers and orders | Playwright with TypeScript |
| [`robotTestWeb/`](./robotTestWeb/) | A website: login and other browser actions | Robot Framework |
| [`robotTestsAPIs/`](./robotTestsAPIs/) | An API: order requests | Robot Framework |
| [`k6LoadTest/`](./k6LoadTest/) | API speed and load | k6 |

The browser tests use [SauceDemo](https://www.saucedemo.com/). The API tests use the server address set in each project's configuration.

## What you need

- **Playwright projects:** Node.js 26 and npm 11. The exact supported versions are listed in the root `package.json`.
- **Robot Framework projects:** Python 3 and pip.
- **k6 tests:** k6. Follow the [k6 install guide](https://grafana.com/docs/k6/latest/set-up/install-k6/).

## Run Playwright tests

Open a terminal in the main `qa-journey-lab/` folder and install the dependencies and browsers:

```sh
npm install
npx playwright install
```

Run tests from that same folder:

```sh
npm run test:webapp   # website tests
npm run test:api      # API tests
```

To run one website test:

```sh
npm run test --workspace=playwrightWebApp -- tests/auth/LoginSuccess.spec.ts
```

## Run Robot Framework tests

First, open a terminal in the Robot project you want to use. Create a virtual environment and install that project's requirements.

For API tests, run these commands from `robotTestsAPIs/`:

```sh
python -m venv .venv
```

Activate the environment, then install and run the tests:

```sh
# macOS or Linux
source .venv/bin/activate

# Windows PowerShell: use this instead
# .venv\Scripts\Activate.ps1

pip install -r requirements.txt
robot -d results tests/
```

For website tests, repeat the setup from `robotTestWeb/`. Run the tests with:

```sh
robot -d results tests/acceptance/
```

Robot Framework saves the test report and log in the `results/` folder.

## Run k6 tests

Before running a k6 test, create `k6LoadTest/.env/settings.js`. The test scripts read the API address and endpoint paths from this file. It must export `BASE_URL.ENDPOINT` and these `SERVICE` paths: `GET_ALL_PRODUCTS`, `GET_ALL_ORDER_LIST`, `POST_NEW_ORDER`, `GET_ALL_SUPPLIERS`, `POST_NEW_SUPPLIER`, and `DEL_SUPPLIER`.

Open a terminal in `k6LoadTest/`, then run a test:

```sh
k6 run tests/smoke/smoke-test.js
k6 run tests/load/wh-load-orders.js
k6 run tests/load/wh-load-supliers.js
```

The load tests add records to the API. Make sure the configured API is suitable for test data before running them.

## Test results

- **Playwright website tests:** create an HTML report. From `playwrightWebApp/`, run `npx playwright show-report` to view it.
- **Playwright API tests:** show results in the terminal.
- **Robot Framework:** saves `report.html` and `log.html` in `results/`.
- **k6:** prints a summary in the terminal.

For more details about one test project, see the README inside its folder.
