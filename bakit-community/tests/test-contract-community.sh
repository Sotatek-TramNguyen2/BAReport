#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd "$script_dir/.." && pwd)"
contract_file="$repo_root/core/contract.yaml"

required_files=(
  "$contract_file"
  "$repo_root/core/contract-behavior.md"
  "$repo_root/core/workflows/do.md"
  "$repo_root/core/workflows/next.md"
  "$repo_root/core/workflows/status.md"
)

for file in "${required_files[@]}"; do
  [[ -f "$file" ]] || {
    echo "missing required file: ${file#$repo_root/}"
    exit 1
  }
done

rg -q 'project_root: "plans/\{slug\}-\{date\}"' "$contract_file"
rg -q 'language: en' "$contract_file"
rg -q 'date_token_format: "YYMMDD-HHmm"' "$contract_file"
rg -q 'project_home: "plans/\{slug\}-\{date\}/PROJECT-HOME.md"' "$contract_file"
rg -q 'intake: "plans/\{slug\}-\{date\}/intake.md"' "$contract_file"
rg -q 'backbone: "plans/\{slug\}-\{date\}/backbone.md"' "$contract_file"
rg -q 'stories: "plans/\{slug\}-\{date\}/user-stories.md"' "$contract_file"
rg -q 'srs_lite: "plans/\{slug\}-\{date\}/srs-lite.md"' "$contract_file"
rg -q 'ba-start backbone --slug <slug> --date <date>' "$repo_root/core/workflows/next.md"
rg -q 'ba-start stories --slug <slug> --date <date>' "$repo_root/core/workflows/next.md"
rg -q 'ba-start srs-lite --slug <slug> --date <date>' "$repo_root/core/workflows/next.md"
rg -q 'ba-status --slug <slug> --date <date>' "$repo_root/core/workflows/next.md"
rg -q 'YYMMDD-HHmm' "$repo_root/docs/getting-started.md"
rg -q 'YYMMDD-HHmm' "$repo_root/skills/ba-next/SKILL.md"
rg -q 'YYMMDD-HHmm' "$repo_root/skills/ba-status/SKILL.md"
rg -q 'plans/\{slug\}-\{date\}/PROJECT-HOME.md' "$repo_root/skills/ba-start/steps/intake.md"

if rg -q 'module_root|compiled_root|delegation_root|collab_home|wireframe_' "$contract_file"; then
  echo "paid-only path leaked into community contract"
  exit 1
fi

echo "community contract ok"
