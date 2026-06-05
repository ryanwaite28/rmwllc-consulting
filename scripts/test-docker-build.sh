#!/usr/bin/env bash
set -euo pipefail
# scripts/test-docker-build.sh
# Verifies the Dockerfile builds to a runnable image.
# All test scopes default to skipped so build errors are not masked by test failures.
# Re-enable test scopes explicitly when you want to validate them.
#
# Usage:
#   ./scripts/test-docker-build.sh              # skip all tests (default — fastest iteration)
#   SKIP_UNIT_TESTS=false ./scripts/test-docker-build.sh   # include unit tests
#   ./scripts/test-docker-build.sh --no-cache   # force a clean layer rebuild

NO_CACHE_FLAG=""
if [[ "${1:-}" == "--no-cache" ]]; then
  NO_CACHE_FLAG="--no-cache"
fi

IMAGE_TAG="build-test-$(date +%s)"
APP_NAME="rmw-llc-consulting"
IMAGE_NAME="${APP_NAME}:${IMAGE_TAG}"

echo "=== Dockerfile Build Test ==="
echo "Image   : ${IMAGE_NAME}"
echo "No-cache: ${NO_CACHE_FLAG:-off}"
echo ""

cleanup() {
  echo ""
  echo "--- Removing test image ---"
  docker image rm "${IMAGE_NAME}" 2>/dev/null || true
}
trap cleanup EXIT

docker build \
  ${NO_CACHE_FLAG} \
  --build-arg SKIP_UNIT_TESTS="${SKIP_UNIT_TESTS:-true}" \
  --tag "${IMAGE_NAME}" \
  .

echo ""
echo "=== Build succeeded: ${IMAGE_NAME} ==="
