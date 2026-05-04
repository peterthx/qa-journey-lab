# Web Test Automation Project (Robot Framework)

This project provides end-to-end web test automation using Robot Framework and SeleniumLibrary. It follows the **Page Object Model (POM)** pattern to ensure high maintainability, reusability, and readability.

## Project Structure

The project has been refactored for better organization and scalability:

- **`src/`**: The core of the automation framework.
    - **`App.robot`**: The main entry point for all resources. Tests should import this file to access all keywords.
    - **`config.robot`**: Centralized configuration (URLs, Browsers, Timeouts, Global Credentials).
    - **`pages/`**: Page Objects containing locators and page-specific keywords (e.g., `login_page.robot`).
    - **`shared/`**: Common keywords for application lifecycle (e.g., `common_keywords.robot` for Open/Close Application).
- **`tests/`**: Contains the Robot Framework test suites.
    - **`acceptance/`**: Acceptance tests verifying core business workflows.
- **`results/`**: Automatically generated test execution logs and reports.
- **`requirements.txt`**: List of Python dependencies.

## Prerequisites

- **Python 3.9+**
- **pip** (Python package installer)
- **Firefox** (Default browser in config) and **GeckoDriver** (handled by `webdriver-manager`).

## Setup

1.  **Navigate to the project directory:**
    ```bash
    cd robotTestWeb
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

## Running Tests

### Run All Tests
```bash
robot -d results tests/
```

### Run by Tag
```bash
robot -d results -i smoke tests/
```

### Run Specific Suite
```bash
robot -d results tests/acceptance/tc_login_web.robot
```

## Viewing Results

After execution, detailed reports are generated in the `results/` folder:
- `report.html`: High-level summary.
- `log.html`: Detailed execution steps and screenshots (if applicable).

---
*Note: This project targets [SauceDemo](https://www.saucedemo.com/) for demonstration purposes.*
