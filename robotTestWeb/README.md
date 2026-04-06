# Web Test Automation Project (Robot Framework)

This project provides end-to-end web test automation using Robot Framework and SeleniumLibrary (or Browser Library, depending on the implementation). It follows the Page Object Model (POM) pattern for better maintainability.

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3
- pip (Python package installer)
- Browser drivers (e.g., ChromeDriver, GeckoDriver) if using SeleniumLibrary

## Project Structure

- `tests/`: Contains the Robot Framework test suites (`.robot` files).
- `resources/`: Contains reusable keywords, page objects, and common resources.
    - `po/`: Page Objects implementation.
        - `pages/`: Individual page keywords and locators.
        - `shared/`: Shared keywords across multiple pages.
- `results/`: Contains the test execution results, logs, and reports. This directory is ignored by git.
- `venv/`: Contains the Python virtual environment for this project. This directory is ignored by git.

## Setup

1.  **Navigate to the project directory:**
    ```bash
    cd robotTestWeb
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

## Running the Tests

With the virtual environment activated, run the tests using the following command:

```bash
robot -d results tests/acceptance
```

## Viewing the Results

After running the tests, you can find the following files in the `results` directory:

- `log.html`: A detailed log of the test execution.
- `report.html`: A high-level report of the test results.
- `output.xml`: The test results in XML format.

Open `report.html` in your web browser to view a summary of the test run.
