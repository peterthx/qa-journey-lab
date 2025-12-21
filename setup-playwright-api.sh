#!/bin/bash
set -e

cd playwrightAPI

npm install

npx playwright install

npx playwright test --browser ${BROWSER}
