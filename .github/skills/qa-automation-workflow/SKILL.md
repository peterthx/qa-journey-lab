---
name: qa-automation-workflow
description: Use when working on test automation in this repository. Best for inspecting, running, debugging, or extending Playwright, Robot Framework, and k6 workflows without changing application production code.
---

# QA Automation Workflow

Use this skill when the task is about test automation in this repository rather than application feature development.

## Scope
- Playwright web and API tests
- Robot Framework web and API tests
- k6 smoke and load scripts
- Test data, fixtures, page objects, and reusable helpers

## Working rules
- Do not modify application business logic or production code unless the user explicitly asks for it.
- Prefer changes in test files, fixtures, page objects, keywords, or configuration.
- Reuse existing patterns before introducing new abstractions.
- Keep tests readable, maintainable, and deterministic.
- If a failure is flaky, investigate selectors, waits, environment setup, and test data first.

## Typical tasks
- Explain what tests exist and how to run them
- Add or update a test case or keyword
- Debug a failing Playwright or Robot Framework test
- Improve a k6 script for smoke or load use cases
- Recommend the best framework for a scenario

## Repository-specific guidance
- Playwright projects are organized under the Playwright web and API folders.
- Robot Framework projects use keyword-driven test structure and page objects.
- k6 scripts belong in the load testing project and should stay focused on realistic performance behavior.

## Output style
- Provide concise guidance and the next best action.
- Include relevant commands when available.
- Highlight risks such as flakiness, missing setup, or environment prerequisites.
