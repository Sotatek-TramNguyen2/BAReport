#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd "$script_dir/.." && pwd)"

required_skills=(
  "$repo_root/skills/ba-do/SKILL.md"
  "$repo_root/skills/ba-next/SKILL.md"
  "$repo_root/skills/ba-status/SKILL.md"
  "$repo_root/skills/ba-start/SKILL.md"
  "$repo_root/skills/ba-start/steps/intake.md"
  "$repo_root/skills/ba-start/steps/backbone.md"
  "$repo_root/skills/ba-start/steps/stories.md"
  "$repo_root/skills/ba-start/steps/srs-lite.md"
)

for file in "${required_skills[@]}"; do
  [[ -f "$file" ]] || {
    echo "missing skill file: $file"
    exit 1
  }
done

rg -qi 'modules?' "$repo_root/skills/ba-do/SKILL.md"
rg -q 'docs/comparison.md' "$repo_root/skills/ba-do/SKILL.md"
rg -q 'docs/upgrade.md' "$repo_root/skills/ba-do/SKILL.md"
rg -q 'YYMMDD-HHmm' "$repo_root/skills/ba-do/SKILL.md"
rg -q -- '--slug' "$repo_root/skills/ba-do/SKILL.md"
rg -q -- '--date' "$repo_root/skills/ba-do/SKILL.md"
rg -q '^- `ba-start intake`$' "$repo_root/skills/ba-do/SKILL.md"
rg -q '^- `ba-start backbone`$' "$repo_root/skills/ba-do/SKILL.md"
rg -q '^- `ba-start stories`$' "$repo_root/skills/ba-do/SKILL.md"
rg -q '^- `ba-start srs-lite`$' "$repo_root/skills/ba-do/SKILL.md"
rg -q 'YYMMDD-HHmm' "$repo_root/skills/ba-start/SKILL.md"
rg -q -- '--slug' "$repo_root/skills/ba-start/SKILL.md"
rg -q -- '--date' "$repo_root/skills/ba-start/SKILL.md"
rg -q 'plans/\{slug\}-\{date\}/PROJECT-HOME.md' "$repo_root/skills/ba-next/SKILL.md"
rg -q 'plans/\{slug\}-\{date\}/srs-lite.md' "$repo_root/skills/ba-next/SKILL.md"
rg -q 'plans/\{slug\}-\{date\}/PROJECT-HOME.md' "$repo_root/skills/ba-status/SKILL.md"
rg -q 'plans/\{slug\}-\{date\}/srs-lite.md' "$repo_root/skills/ba-status/SKILL.md"
rg -q -- '--slug' "$repo_root/skills/ba-next/SKILL.md"
rg -q -- '--date' "$repo_root/skills/ba-next/SKILL.md"
rg -q -- '--slug' "$repo_root/skills/ba-status/SKILL.md"
rg -q -- '--date' "$repo_root/skills/ba-status/SKILL.md"

if rg -qi 'ba-collab|ba-notion' "$repo_root/skills"; then
  echo "paid-only skill wording leaked into community skills"
  exit 1
fi

boundary_guarded_files=(
  "$repo_root/skills/ba-next/SKILL.md"
  "$repo_root/skills/ba-status/SKILL.md"
  "$repo_root/skills/ba-start/SKILL.md"
  "$repo_root/skills/ba-start/steps/intake.md"
  "$repo_root/skills/ba-start/steps/backbone.md"
  "$repo_root/skills/ba-start/steps/stories.md"
  "$repo_root/skills/ba-start/steps/srs-lite.md"
)

if rg -ni 'modules?|collaboration|packag(?:e|es|ed|ing)|publish(?:es|ed|ing)?|client delivery|delegation|wireframes?|compiled html|notion|governance|review packets?|stakeholder-ready|agency|multiple contributors' "${boundary_guarded_files[@]}" \
  | rg -vi 'Do not|Never emit'; then
  echo "paid-only skill wording leaked into community skills"
  exit 1
fi

echo "community skill surface ok"
