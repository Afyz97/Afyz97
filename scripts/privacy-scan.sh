#!/usr/bin/env bash
# Confidentiality gate. Fails if anything that could identify a private system is
# committed. Run locally before publishing; CI runs it on every push.
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1

fail=0
check() { # check <label> <pattern>
  local label="$1" pattern="$2" hits
  hits=$(grep -rInoE "$pattern" \
          --exclude-dir=.git \
          --exclude-dir=node_modules \
          --exclude=privacy-scan.sh \
          --exclude=PRIVACY-REVIEW.md \
          . 2>/dev/null)
  if [ -n "$hits" ]; then
    printf '\033[31mFAIL\033[0m  %s\n%s\n\n' "$label" "$hits"
    fail=1
  else
    printf '\033[32m ok \033[0m  %s\n' "$label"
  fi
}

echo "privacy scan: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
echo

check "email addresses"        '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}'
check "IP addresses"           '\b([0-9]{1,3}\.){3}[0-9]{1,3}\b'
check "phone / national ID"    '\b(\+?6?01[0-9]-?[0-9]{7,8}|[0-9]{6}-[0-9]{2}-[0-9]{4})\b'
check "credentials / secrets"  '(password|passwd|secret|api[_-]?key|access[_-]?token|private[_-]?key)[[:space:]]*[=:]'
check "connection strings"     '(mysql|postgres|mongodb|redis)://'

# URLs are allowed only for the services the README deliberately embeds.
allow='github\.com|githubusercontent\.com|shields\.io|github-readme-stats|streak-stats|readme-typing-svg|w3\.org|schemastore\.org'
urls=$(grep -rInoE 'https?://[^ )"'"'"'>]+' --exclude-dir=.git --exclude-dir=node_modules \
        --exclude=privacy-scan.sh --exclude=PRIVACY-REVIEW.md . 2>/dev/null \
        | grep -vE "$allow")
if [ -n "$urls" ]; then
  printf '\033[31mFAIL\033[0m  unexpected external URL\n%s\n\n' "$urls"
  fail=1
else
  printf '\033[32m ok \033[0m  external URLs (allowlisted services only)\n'
fi

# Image assets need a human to confirm they are not production screenshots.
shots=$(find ./assets -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.webp' -o -iname '*.gif' \) 2>/dev/null)
if [ -n "$shots" ]; then
  printf '\033[33mWARN\033[0m  raster images present: confirm no production screenshots:\n%s\n' "$shots"
fi

echo
[ "$fail" -eq 0 ] && echo "privacy scan passed" || echo "privacy scan FAILED"
exit "$fail"
