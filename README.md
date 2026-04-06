# QA Journey Lab

A comprehensive collection of automated test examples and supporting utilities used in the **QA Journey Lab**. This repository demonstrates various automation tools and frameworks for modern QA workflows, including Web E2E, API, and Performance testing.

## 🚀 Projects Overview

This repository is structured as a monorepo with focused projects for different automation needs:

| Project | Tool / Framework | Description |
| :--- | :--- | :--- |
| [**`playwrightWebApp/`**](./playwrightWebApp) | Playwright (TS) | End-to-end (E2E) web tests using Page Object Model. |
| [**`playwrightAPI/`**](./playwrightAPI) | Playwright (TS) | Automated API testing with validation and data-driven approach. |
| [**`robotTestWeb/`**](./robotTestWeb) | Robot Framework | Web E2E tests using Robot Framework and Page Object Model. |
| [**`robotTestsAPIs/`**](./robotTestsAPIs) | Robot Framework | API testing using Robot Framework's RequestsLibrary. |
| [**`k6LoadTest/`**](./k6LoadTest) | k6 | API performance, smoke, and load testing scenarios. |

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v20+) - For Playwright and JS utilities.
- **Python 3** - For Robot Framework projects.
- **k6** - For performance testing. [Installation Guide](https://k6.io/docs/getting-started/installation/)

### Installation & Setup

#### 1. Playwright Projects (Web & API)
These projects are managed using npm workspaces.
```bash
# Install dependencies for all Playwright workspaces
npm install

# Install Playwright browsers
npx playwright install
```

#### 2. Robot Framework Projects
Each Robot project uses its own virtual environment.
```bash
# Setup API tests
cd robotTestsAPIs
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
deactivate
cd ..

# Setup Web tests
cd robotTestWeb
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
deactivate
cd ..
```

#### 3. k6 Performance Tests
```bash
cd k6LoadTest
# Create your settings file from the example
cp .env/settings.js.example .env/settings.js
cd ..
```

---

## 🧪 Running Tests

### Playwright (Browser & API)
Run tests from the root using npm workspaces:
```bash
# Run Web E2E tests
npm run test:webapp

# Run API tests
npm run test:api
```

### Robot Framework
Navigate to the specific project directory and activate the virtual environment:
```bash
# Run API tests
cd robotTestsAPIs
source venv/bin/activate
robot -d results tests/
deactivate

# Run Web tests
cd robotTestWeb
source venv/bin/activate
robot -d results tests/acceptance
deactivate
```

### k6 Performance Tests
Run k6 commands from the `k6LoadTest` directory:
```bash
cd k6LoadTest

# Smoke Test
k6 run tests/smoke/smoke-test.js

# Load Test
k6 run --vus 10 --duration 30s tests/load/wh-load-orders.js
```

---

## 🏗️ Project Structure Guidelines

- **Page Object Model (POM):** Both Playwright and Robot Framework web tests follow the POM pattern for better maintainability.
- **Clean Code:** We prioritize readability, meaningful assertions, and reusable keywords/functions.
- **Reporting:** Each tool provides its own reporting (Playwright HTML reporter, Robot Framework `report.html`, k6 summary).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
