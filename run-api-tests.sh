#!/bin/bash
# This script runs the Playwright API tests.

echo "Navigating to playwrightAPI directory..."
cd playwrightAPI

echo "Installing dependencies..."
npm install

echo "Running Playwright API tests..."
npm test
