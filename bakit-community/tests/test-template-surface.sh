#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd "$script_dir/.." && pwd)"

required_templates=(
  "$repo_root/templates/project-home-template.md"
  "$repo_root/templates/intake-form-template.md"
  "$repo_root/templates/requirements-backbone-template.md"
  "$repo_root/templates/user-story-template.md"
  "$repo_root/templates/srs-lite-template.md"
)

for file in "${required_templates[@]}"; do
  [[ -f "$file" ]] || {
    echo "missing template: $file"
    exit 1
  }
done

if rg -qi 'modules?|collaboration|packag(?:e|es|ed|ing)|publish(?:es|ed|ing)?|client delivery|delegation|wireframes?|compiled html|notion|governance|review packets?|stakeholder-ready|agency|multiple contributors' "$repo_root"/templates/*.md; then
  echo "paid-only wording leaked into community templates"
  exit 1
fi

echo "community templates ok"
