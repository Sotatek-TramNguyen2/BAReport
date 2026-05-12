#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd "$script_dir/.." && pwd)"

required_files=(
  "$repo_root/README.md"
  "$repo_root/LICENSE"
  "$repo_root/.gitignore"
  "$repo_root/AGENTS.md"
  "$repo_root/CLAUDE.md"
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

blocked_paths=(
  "$repo_root/03_modules"
  "$repo_root/04_compiled"
  "$repo_root/COLLAB-HOME.md"
  "$repo_root/skills/ba-collab/SKILL.md"
  "$repo_root/skills/ba-notion/SKILL.md"
  "$repo_root/designs"
  "$repo_root/delegation"
)

for path in "${blocked_paths[@]}"; do
  [[ ! -e "$path" ]] || {
    echo "blocked paid-only path exists: ${path#$repo_root/}"
    exit 1
  }
done

echo "repo shape ok"
