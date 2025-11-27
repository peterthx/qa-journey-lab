#!/bin/bash
set -e

# Run Playwright tests (error here = stop script)
npx playwright test "$@"
STSATUS=$?

if [ $STSATUS -ne 0 ]; then
  echo "Error: Playwright tests failed."
  exit $STSATUS
fi

echo "Playwright tests completed successfully."
exit 0
