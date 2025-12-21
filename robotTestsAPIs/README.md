# API Test Automation Project

This project provides a basic framework for API test automation using Python and Robot Framework.

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3
- pip (Python package installer)

## Project Structure

- `tests/`: Contains the Robot Framework test suites (`.robot` files).
- `resources/`: Contains reusable keywords, variables, and other resources.
- `results/`: Contains the test execution results, logs, and reports. This directory is ignored by git.
- `venv/`: Contains the Python virtual environment for this project. This directory is ignored by git.

## Setup

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd robotTestsAPIs
    ```

2.  **Create and activate a virtual environment:**
    This keeps your project dependencies isolated.

    ```bash
    # Create the virtual environment
    python3 -m venv venv

    # Activate the virtual environment
    # On macOS/Linux:
    source venv/bin/activate
    # On Windows (Command Prompt):
    # venv\Scripts\activate.bat
    # On Windows (PowerShell):
    # venv\Scripts\Activate.ps1
    ```
    You will see `(venv)` at the beginning of your command prompt when the virtual environment is active.

3.  **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    *(Note: I will create the `requirements.txt` file in the next step.)*

## Running the Tests

With the virtual environment activated, run the tests using the following command:

```bash
source venv/bin/activate && robot -d results tests
robot -d results tests/
```

This command will execute all the tests in the `tests` directory and place the output files in the `results` directory.

## Viewing the Results

After running the tests, you can find the following files in the `results` directory:

- `log.html`: A detailed log of the test execution.
- `report.html`: A high-level report of the test results.
- `output.xml`: The test results in XML format.

Open `report.html` in your web browser to view a summary of the test run.