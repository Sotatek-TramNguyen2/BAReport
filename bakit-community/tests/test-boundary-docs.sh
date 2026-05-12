#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd "$script_dir/.." && pwd)"

cd "$repo_root"

required_files=(
  README.md
  docs/getting-started.md
  docs/methodology.md
  docs/comparison.md
  docs/upgrade.md
  tests/fixtures/sample-input.md
)

for file in "${required_files[@]}"; do
  [[ -f "$file" ]] || {
    echo "missing required file: $file"
    exit 1
  }
done

# README is part of the approved plan boundary, so keep this check isolated.
rg -q "non-commercial" README.md

rg -q "solo" docs/getting-started.md
rg -q "/ba-do" docs/getting-started.md
rg -q "/ba-start intake" docs/getting-started.md
rg -q "/ba-next" docs/getting-started.md
rg -q "/ba-status" docs/getting-started.md

rg -q "input -> intake -> backbone -> stories -> srs-lite" docs/methodology.md

rg -q "Community" docs/comparison.md
rg -q "Paid" docs/comparison.md

rg -q "multiple contributors" docs/upgrade.md
rg -q "client work" docs/upgrade.md
rg -q "module ownership" docs/upgrade.md

rg -q "^# Sample Input" tests/fixtures/sample-input.md
rg -q "non-commercial" tests/fixtures/sample-input.md

if rg -qi "unlimited team|collaboration built in|notion publish|compiled html" README.md docs/*.md; then
  echo "docs leak the wrong product framing"
  exit 1
fi

echo "community docs ok"
