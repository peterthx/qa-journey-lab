# Robot Framework API — QA Journey Lab

This folder contains Robot Framework tests and helpers used in the QA Journey Lab.

What it is
- Robot Framework test suites for API functional tests.
- Tests are organized under `tests/` (look for `.robot` or `.txt` files).
- Helpers and libraries live under `resources/` or `libs/` if present.

Prerequisites
- Python 3.8+ (recommended)
- pip
- Optional: `virtualenv` or `venv` to create an isolated environment

Quick setup
Run these commands from the `robotframework-api` folder.

```bash
# create and activate a virtual environment (macOS / Linux)
python3 -m venv .venv
source .venv/bin/activate

# Windows (PowerShell)
# python -m venv .venv
# .\.venv\Scripts\Activate.ps1
```

Install Robot Framework and common libs:

```bash
pip install --upgrade pip
pip install robotframework robotframework-requests robotframework-jsonlibrary
```

If there's a `requirements.txt` in this folder, prefer:

```bash
pip install -r requirements.txt
```

Project layout (typical)
```
robotframework-api/
├── README.md
├── tests/                # Robot test suites (.robot)
│   ├── api_tests.robot
│   └── smoke_tests.robot
├── resources/            # resource files, keywords, variables
│   └── keywords.robot
├── libs/                 # custom Python libraries (if any)
│   └── custom_lib.py
└── results/              # test outputs (created after runs)
```

Running tests
- Run all tests in the `tests/` folder and write results to `results/`:

```bash
robot -d results tests/
```

- Run a single test file:

```bash
robot -d results tests/api_tests.robot
```

- Run tests matching a tag (e.g., `smoke`):

```bash
robot -d results -i smoke tests/
```

- Run with verbose logging for debugging:

```bash
robot -d results -L DEBUG tests/
```

Outputs
- `results/` (or `output.xml`, `report.html`, `log.html`) are generated in the output directory you specify.
- Open `report.html` or `log.html` in a browser to inspect results:

```bash
open results/report.html
```

Best practices
- Keep sensitive credentials out of repository. Use environment variables or CI secrets.
- Create a `requirements.txt` to pin dependency versions for reproducible runs.
- Use tags (`@smoke`, `@integration`) to control which suites run in CI.
- Add `--exitonfailure` in debug runs to stop early on first failure.

CI hints
- In CI, use the same Python version and install dependencies from `requirements.txt`.
- Use `robot` CLI to run selected tags and upload artifacts (reports/logs) as CI artifacts.

Example `requirements.txt` (suggested)
```
robotframework>=5.0
robotframework-requests>=0.9.0
robotframework-jsonlibrary
```

Next steps I can do for you
- Create a `requirements.txt` with pinned versions in this folder.
- Add a simple example test file `tests/example.robot` to demonstrate structure.
- Create a small `Makefile` or `scripts/run.sh` to simplify setup and runs.

Tell me which of these you'd like me to add.
