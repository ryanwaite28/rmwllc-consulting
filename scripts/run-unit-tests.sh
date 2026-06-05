#!/usr/bin/env bash
set -euo pipefail
# scripts/run-unit-tests.sh — run unit tests locally, no containers required

cd "$(dirname "$0")/.."

echo "--- Installing dependencies (if needed) ---"
if [ ! -d "node_modules" ]; then
  npm ci
fi

echo "--- Running unit tests ---"
npm run test:unit
