#!/usr/bin/env bash
# scripts/vault-put-secrets.sh
# This app has no per-app Vault secrets — all credentials (SMTP, Harbor, OpenSearch)
# come from kv/common-app-deploy-secrets which is managed at the platform level.
#
# This script is a no-op placeholder to satisfy the standard app bootstrap checklist.
# If per-app secrets are added in the future, populate this script following the pattern:
#
#   vault kv put kv/rmw-llc-consulting \
#     some_key="some_value"
#
# Usage:
#   ./scripts/vault-put-secrets.sh                    # uses $VAULT_TOKEN and $VAULT_ADDR from env
#   ./scripts/vault-put-secrets.sh <token> <addr>     # explicit values override env

_VAULT_TOKEN="${1:-${VAULT_TOKEN:-}}"
_VAULT_ADDR="${2:-${VAULT_ADDR:-}}"

if [ -z "$_VAULT_TOKEN" ] || [ -z "$_VAULT_ADDR" ]; then
  exit 0
fi

echo "rmw-llc-consulting has no per-app Vault secrets. Ensure kv/common-app-deploy-secrets contains:"
echo "  harbor_username, harbor_password, opensearch_username, opensearch_password, mailpit_user, mailpit_password"
echo "Done."
