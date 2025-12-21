#!/bin/bash
set -e

cd playwrightWebApp

npm install

npx playwright install

npx playwright test
