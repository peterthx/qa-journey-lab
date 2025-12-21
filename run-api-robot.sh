#!/bin/bash
# This script runs the Robot Framework API tests.

echo "Navigating to robotTestsAPI directory..."
cd robotTestsAPIs || exit

echo "Installing dependencies..."
if [ -f "venv/bin/activate" ]; then
    source venv/bin/activate
else
    echo "Error: Virtual environment not found. Please create one using 'python3 -m venv venv' and install dependencies."
    exit 1
fi

echo "Running Robot APIs tests..."
robot -d results tests/