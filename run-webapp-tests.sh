#!/bin/bash
# This script runs the Playwright Webapp tests.

echo "Navigating to playwrightWebApp directory..."
cd playwrightAPI

echo "Installing dependencies..."
npm install

echo "Running Playwright Webapp tests..."
npm test
