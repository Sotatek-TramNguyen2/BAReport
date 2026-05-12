# BA-kit Community Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `BA-kit Community` as a standalone public repo for solo, non-commercial BA work with a real narrow workflow: intake, backbone, stories, and SRS-lite.

**Architecture:** Start with a repo-native product for Claude Code and Codex, backed by a small artifact contract, a reduced skill surface, and markdown templates. Do not copy paid-only concepts such as modules, collaboration, packaging, Notion publishing, or runtime parity tooling into the Community repo.

**Tech Stack:** Markdown, YAML, shell tests, repo-native agent instructions (`AGENTS.md`, `CLAUDE.md`)

---

## File Structure

### Product foundation

- Create: `README.md`
- Create: `LICENSE`
- Create: `.gitignore`
- Create: `AGENTS.md`
- Create: `CLAUDE.md`

### Core contract and workflows

- Create: `core/contract.yaml`
- Create: `core/contract-behavior.md`
- Create: `core/workflows/do.md`
- Create: `core/workflows/next.md`
- Create: `core/workflows/status.md`

### Skills

- Create: `skills/ba-do/SKILL.md`
- Create: `skills/ba-next/SKILL.md`
- Create: `skills/ba-status/SKILL.md`
- Create: `skills/ba-start/SKILL.md`
- Create: `skills/ba-start/steps/intake.md`
- Create: `skills/ba-start/steps/backbone.md`
- Create: `skills/ba-start/steps/stories.md`
- Create: `skills/ba-start/steps/srs-lite.md`

### Templates

- Create: `templates/project-home-template.md`
- Create: `templates/intake-form-template.md`
- Create: `templates/requirements-backbone-template.md`
- Create: `templates/user-story-template.md`
- Create: `templates/srs-lite-template.md`

### Docs

- Create: `docs/getting-started.md`
- Create: `docs/methodology.md`
- Create: `docs/comparison.md`
- Create: `docs/upgrade.md`

### Tests

- Create: `tests/test-repo-shape.sh`
- Create: `tests/test-contract-community.sh`
- Create: `tests/test-template-surface.sh`
- Create: `tests/test-skill-surface.sh`
- Create: `tests/test-boundary-docs.sh`
- Create: `tests/fixtures/sample-input.md`

The boundaries are intentional:

- no `03_modules/`
- no `COLLAB-HOME.md`
- no `delegation/`
- no `designs/`
- no `04_compiled/`
- no `ba-collab`
- no `ba-notion`

### Task 1: Scaffold The Standalone Community Repo

**Files:**
- Create: `README.md`
- Create: `LICENSE`
- Create: `.gitignore`
- Create: `AGENTS.md`
- Create: `CLAUDE.md`
- Test: `tests/test-repo-shape.sh`

- [ ] **Step 1: Write the failing repo shape test**

```bash
#!/usr/bin/env bash
set -euo pipefail

required_files=(
  README.md
  LICENSE
  AGENTS.md
  CLAUDE.md
)

for file in "${required_files[@]}"; do
  [[ -f "$file" ]] || {
    echo "missing required file: $file"
    exit 1
  }
done

blocked_paths=(
  skills/ba-collab/SKILL.md
  skills/ba-notion/SKILL.md
  designs
  delegation
)

for path in "${blocked_paths[@]}"; do
  [[ ! -e "$path" ]] || {
    echo "blocked paid-only path exists: $path"
    exit 1
  }
done

echo "repo shape ok"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bash tests/test-repo-shape.sh`
Expected: `missing required file: README.md`

- [ ] **Step 3: Write minimal implementation**

`README.md`

```md
# BA-kit Community

BA-kit Community is a public, non-commercial starter repo for solo business analysis workflows.

It supports a narrow flow:

`input -> intake -> backbone -> stories -> srs-lite`

This repo does not include team collaboration, module workflows, client delivery packaging, or publishing integrations.

See:

- `docs/getting-started.md`
- `docs/comparison.md`
- `docs/upgrade.md`
```

`LICENSE`

```text
BA-kit Community License v1.0

Copyright (c) 2026 Anh Dam.

Permission is granted to use, copy, and modify this Software for personal learning, evaluation, and other non-commercial internal use by a single individual operator.

You may not:
- use the Software for client work
- use the Software for agency delivery
- use the Software in team-based shared BA operations
- sell, sublicense, or redistribute the Software as a competing kit or service

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

`.gitignore`

```gitignore
.DS_Store
.idea/
.vscode/
plans/
```

`AGENTS.md`

```md
# BA-kit Community Agent Guide

Use the repo-native skills in `skills/`.

Primary commands:

- `/ba-do`
- `/ba-start intake`
- `/ba-start backbone`
- `/ba-start stories`
- `/ba-start srs-lite`
- `/ba-next`
- `/ba-status`

Community scope is solo and non-commercial only.
Do not invent module, collaboration, packaging, or publishing workflows.
```

`CLAUDE.md`

```md
# BA-kit Community For Claude Code

Read:

- `core/contract.yaml`
- `core/contract-behavior.md`
- the selected skill under `skills/`

Supported workflow:

`input -> intake -> backbone -> stories -> srs-lite`

Unsupported:

- team collaboration
- module ownership
- HTML packaging
- Notion publishing
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bash tests/test-repo-shape.sh`
Expected: `repo shape ok`

- [ ] **Step 5: Commit**

```bash
git add README.md LICENSE .gitignore AGENTS.md CLAUDE.md tests/test-repo-shape.sh
git commit -m "feat: scaffold ba-kit community foundation"
```

### Task 2: Define The Community Artifact Contract

**Files:**
- Create: `core/contract.yaml`
- Create: `core/contract-behavior.md`
- Create: `core/workflows/do.md`
- Create: `core/workflows/next.md`
- Create: `core/workflows/status.md`
- Test: `tests/test-contract-community.sh`

- [ ] **Step 1: Write the failing contract test**

```bash
#!/usr/bin/env bash
set -euo pipefail

rg -q 'project_root: "plans/\{slug\}-\{date\}"' core/contract.yaml
rg -q 'project_home: "plans/\{slug\}-\{date\}/PROJECT-HOME.md"' core/contract.yaml
rg -q 'intake: "plans/\{slug\}-\{date\}/intake.md"' core/contract.yaml
rg -q 'backbone: "plans/\{slug\}-\{date\}/backbone.md"' core/contract.yaml
rg -q 'stories: "plans/\{slug\}-\{date\}/user-stories.md"' core/contract.yaml
rg -q 'srs_lite: "plans/\{slug\}-\{date\}/srs-lite.md"' core/contract.yaml

if rg -q 'module_root|compiled_root|delegation_root|collab_home|wireframe_' core/contract.yaml; then
  echo "paid-only path leaked into community contract"
  exit 1
fi

echo "community contract ok"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bash tests/test-contract-community.sh`
Expected: `core/contract.yaml: No such file or directory`

- [ ] **Step 3: Write minimal implementation**

`core/contract.yaml`

```yaml
version: 1
defaults:
  language: en
  date_token_format: "YYMMDD-HHmm"
paths:
  project_root: "plans/{slug}-{date}"
  project_home: "plans/{slug}-{date}/PROJECT-HOME.md"
  intake: "plans/{slug}-{date}/intake.md"
  backbone: "plans/{slug}-{date}/backbone.md"
  stories: "plans/{slug}-{date}/user-stories.md"
  srs_lite: "plans/{slug}-{date}/srs-lite.md"
resolution:
  slug_sources: ["explicit", "project_directories"]
  date_sources: ["explicit", "project_directory"]
  strict_exact_match: true
  never_use_mtime: true
commands:
  intake:
    mutable: true
    requires: []
    outputs: ["project_home", "intake"]
  backbone:
    mutable: true
    requires: ["intake"]
    outputs: ["project_home", "backbone"]
  stories:
    mutable: true
    requires: ["backbone"]
    outputs: ["stories"]
  srs_lite:
    mutable: true
    requires: ["backbone", "stories"]
    outputs: ["srs_lite"]
  status:
    mutable: false
    requires: []
    outputs: []
  next:
    mutable: false
    requires: []
    outputs: []
source_of_truth_order: ["backbone", "intake"]
next_step_order: ["intake", "backbone", "stories", "srs_lite", "status"]
```

`core/contract-behavior.md`

```md
# Community Contract Behavior

- Work from exact paths only.
- Stop on ambiguity instead of guessing.
- Keep output markdown-first.
- Treat `backbone.md` as the source of truth after intake exists.
- Do not invent module, packaging, publishing, or collaboration artifacts.
- When the user requests out-of-scope work, explain the boundary and point to upgrade docs.
```

`core/workflows/do.md`

```md
<purpose>
Route freeform BA text to exactly one Community command.
</purpose>

<route_table>
- status or progress -> `ba-status`
- next step or continue -> `ba-next`
- new BA work from raw input -> `ba-start intake`
- explicit intake/backbone/stories/srs-lite request -> the matching `ba-start <step>`
- request for team, client delivery, packaging, publishing, or module ownership -> explain Community scope and point to `docs/comparison.md` and `docs/upgrade.md`
</route_table>
```

`core/workflows/next.md`

```md
<purpose>
Recommend the next Community command from the current artifact set.
</purpose>

<rules>
1. no intake -> `ba-start intake`
2. intake exists and no backbone -> `ba-start backbone --slug <slug> --date <date>`
3. backbone exists and no stories -> `ba-start stories --slug <slug> --date <date>`
4. stories exist and no srs-lite -> `ba-start srs-lite --slug <slug> --date <date>`
5. everything exists -> `ba-status --slug <slug> --date <date>`
</rules>
```

`core/workflows/status.md`

```md
<purpose>
Inspect the current Community artifact set and print status.
</purpose>

<artifacts>
- PROJECT-HOME.md
- intake.md
- backbone.md
- user-stories.md
- srs-lite.md
</artifacts>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bash tests/test-contract-community.sh`
Expected: `community contract ok`

- [ ] **Step 5: Commit**

```bash
git add core/contract.yaml core/contract-behavior.md core/workflows/do.md core/workflows/next.md core/workflows/status.md tests/test-contract-community.sh
git commit -m "feat: add community artifact contract"
```

### Task 3: Add The Minimal Template Set

**Files:**
- Create: `templates/project-home-template.md`
- Create: `templates/intake-form-template.md`
- Create: `templates/requirements-backbone-template.md`
- Create: `templates/user-story-template.md`
- Create: `templates/srs-lite-template.md`
- Test: `tests/test-template-surface.sh`

- [ ] **Step 1: Extend the failing surface test to require Community templates**

```bash
#!/usr/bin/env bash
set -euo pipefail

required_templates=(
  templates/project-home-template.md
  templates/intake-form-template.md
  templates/requirements-backbone-template.md
  templates/user-story-template.md
  templates/srs-lite-template.md
)

for file in "${required_templates[@]}"; do
  [[ -f "$file" ]] || {
    echo "missing template: $file"
    exit 1
  }
done

if rg -q 'module|delegation|wireframe|compiled html|notion' templates/*.md; then
  echo "paid-only wording leaked into community templates"
  exit 1
fi

echo "community templates ok"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bash tests/test-template-surface.sh`
Expected: `missing template: templates/project-home-template.md`

- [ ] **Step 3: Write minimal implementation**

`templates/project-home-template.md`

```md
# PROJECT-HOME

## Summary
- Project:
- Date set:
- Current step:
- Recommended next command:

## Scope Snapshot
- Problem:
- Goal:
- In scope:
- Out of scope:

## Artifact Status
- intake.md
- backbone.md
- user-stories.md
- srs-lite.md
```

`templates/intake-form-template.md`

```md
# Intake

## Project Context
## Problem Statement
## Goals
## Stakeholders
## Raw Requirements
## Constraints
## Assumptions
## Open Questions
```

`templates/requirements-backbone-template.md`

```md
# Requirements Backbone

## Scope Lock
## Business Goals
## Success Criteria
## Actors
## Feature Map
## Functional Requirements
## Non-Functional Requirements
## Assumptions
## Risks
```

`templates/user-story-template.md`

```md
# User Stories

## Story Map

### Story 1
As a ...
I want ...
So that ...

#### Acceptance Criteria
- Given ...
- When ...
- Then ...
```

`templates/srs-lite-template.md`

```md
# SRS-Lite

## Scope Summary
## Actors
## Functional Flows
## Business Rules
## Data Inputs And Outputs
## Validation Rules
## Open Questions
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bash tests/test-template-surface.sh`
Expected: `community templates ok`

- [ ] **Step 5: Commit**

```bash
git add templates/project-home-template.md templates/intake-form-template.md templates/requirements-backbone-template.md templates/user-story-template.md templates/srs-lite-template.md tests/test-template-surface.sh
git commit -m "feat: add community templates"
```

### Task 4: Implement The Community Skill Surface

**Files:**
- Create: `skills/ba-do/SKILL.md`
- Create: `skills/ba-next/SKILL.md`
- Create: `skills/ba-status/SKILL.md`
- Create: `skills/ba-start/SKILL.md`
- Create: `skills/ba-start/steps/intake.md`
- Create: `skills/ba-start/steps/backbone.md`
- Create: `skills/ba-start/steps/stories.md`
- Create: `skills/ba-start/steps/srs-lite.md`
- Modify: `tests/test-skill-surface.sh`

- [ ] **Step 1: Expand the failing skill surface test**

```bash
#!/usr/bin/env bash
set -euo pipefail

required_skills=(
  skills/ba-do/SKILL.md
  skills/ba-next/SKILL.md
  skills/ba-status/SKILL.md
  skills/ba-start/SKILL.md
  skills/ba-start/steps/intake.md
  skills/ba-start/steps/backbone.md
  skills/ba-start/steps/stories.md
  skills/ba-start/steps/srs-lite.md
)

for file in "${required_skills[@]}"; do
  [[ -f "$file" ]] || {
    echo "missing skill file: $file"
    exit 1
  }
done

if rg -q 'ba-collab|ba-notion|wireframes|package' skills; then
  echo "paid-only skill wording leaked into community skills"
  exit 1
fi

echo "community skill surface ok"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bash tests/test-skill-surface.sh`
Expected: `missing skill file: skills/ba-do/SKILL.md`

- [ ] **Step 3: Write minimal implementation**

`skills/ba-do/SKILL.md`

```md
---
name: ba-do
description: Route freeform BA text to the right BA-kit Community command.
---

Read `core/contract.yaml`, `core/contract-behavior.md`, and `core/workflows/do.md`.

Route only to:

- `ba-start intake`
- `ba-start backbone`
- `ba-start stories`
- `ba-start srs-lite`
- `ba-next`
- `ba-status`

If the request needs modules, collaboration, publishing, packaging, or client delivery, explain that it is outside Community scope and point to `docs/comparison.md` and `docs/upgrade.md`.
```

`skills/ba-next/SKILL.md`

```md
---
name: ba-next
description: Detect the next BA-kit Community step from the current artifact set.
---

Read `core/contract.yaml`, `core/contract-behavior.md`, and `core/workflows/next.md`.

Inspect only:

- `PROJECT-HOME.md`
- `intake.md`
- `backbone.md`
- `user-stories.md`
- `srs-lite.md`

Recommend one exact next command without mutating artifacts.
```

`skills/ba-status/SKILL.md`

```md
---
name: ba-status
description: Inspect the BA-kit Community artifact set and report status.
---

Read `core/contract.yaml`, `core/contract-behavior.md`, and `core/workflows/status.md`.

Print status for the Community artifact set only.
Do not invent module or compiled output sections.
```

`skills/ba-start/SKILL.md`

```md
---
name: ba-start
description: Run the BA-kit Community lifecycle for intake, backbone, stories, and srs-lite.
---

Required read order:
1. `core/contract.yaml`
2. `core/contract-behavior.md`
3. the matching step file under `steps/`

Supported subcommands:

- `intake`
- `backbone`
- `stories`
- `srs-lite`

Never emit collaboration, module, packaging, or publishing artifacts.
```

`skills/ba-start/steps/intake.md`

```md
# Community Intake

- Require raw input or pasted text.
- Normalize into `templates/intake-form-template.md`.
- Save to `plans/{slug}-{date}/intake.md`.
- Create `PROJECT-HOME.md` from `templates/project-home-template.md`.
- Ask only the minimum clarifying questions needed to lock a small solo scope.
```

`skills/ba-start/steps/backbone.md`

```md
# Community Backbone

- Require `intake.md`.
- Build `backbone.md` from `templates/requirements-backbone-template.md`.
- Treat `backbone.md` as the source of truth after creation.
- Keep it concise and decision-oriented.
```

`skills/ba-start/steps/stories.md`

```md
# Community Stories

- Require `backbone.md`.
- Generate `user-stories.md` from `templates/user-story-template.md`.
- Include acceptance criteria for each story.
- Keep the story set suitable for one operator and one linear project lane.
```

`skills/ba-start/steps/srs-lite.md`

```md
# Community SRS-Lite

- Require `backbone.md` and `user-stories.md`.
- Generate `srs-lite.md` from `templates/srs-lite-template.md`.
- Capture only core flows, rules, data inputs/outputs, and validations.
- Do not generate wireframe, module, or packaging artifacts.
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bash tests/test-skill-surface.sh`
Expected: `community skill surface ok`

- [ ] **Step 5: Commit**

```bash
git add skills/ba-do/SKILL.md skills/ba-next/SKILL.md skills/ba-status/SKILL.md skills/ba-start/SKILL.md skills/ba-start/steps/intake.md skills/ba-start/steps/backbone.md skills/ba-start/steps/stories.md skills/ba-start/steps/srs-lite.md tests/test-skill-surface.sh
git commit -m "feat: add community skill workflow"
```

### Task 5: Write Community Docs And Upgrade Guidance

**Files:**
- Create: `docs/getting-started.md`
- Create: `docs/methodology.md`
- Create: `docs/comparison.md`
- Create: `docs/upgrade.md`
- Create: `tests/test-boundary-docs.sh`
- Create: `tests/fixtures/sample-input.md`

- [ ] **Step 1: Write the failing boundary docs test**

```bash
#!/usr/bin/env bash
set -euo pipefail

rg -q 'non-commercial' README.md
rg -q 'solo' docs/getting-started.md
rg -q 'Community' docs/comparison.md
rg -q 'Paid' docs/comparison.md
rg -q 'multiple contributors' docs/upgrade.md
rg -q 'client work' docs/upgrade.md
rg -q 'input -> intake -> backbone -> stories -> srs-lite' docs/methodology.md

if rg -q 'unlimited team|collaboration built in|notion publish|compiled html' docs/*.md; then
  echo "paid-only promise leaked into community docs"
  exit 1
fi

echo "community docs ok"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bash tests/test-boundary-docs.sh`
Expected: `docs/getting-started.md: No such file or directory`

- [ ] **Step 3: Write minimal implementation**

`docs/getting-started.md`

```md
# Getting Started

BA-kit Community is for solo, non-commercial BA work.

Suggested flow:

1. Open the repo in Claude Code or Codex.
2. Start with `/ba-do` or `/ba-start intake`.
3. Continue with backbone, stories, and srs-lite.
4. Use `/ba-next` when unsure.
5. Use `/ba-status` to inspect progress.
```

`docs/methodology.md`

```md
# Methodology

Community follows one narrow flow:

`input -> intake -> backbone -> stories -> srs-lite`

The method is artifact-first:

- intake captures the raw problem
- backbone locks scope and decisions
- stories break work into user-facing outcomes
- srs-lite consolidates flows, rules, and validations
```

`docs/comparison.md`

```md
# Community vs Paid

## Community
- public repo
- solo use
- non-commercial
- markdown artifacts only

## Paid
- commercial use
- team collaboration
- delivery governance
- stakeholder-ready packaging
- agency/client workflows
```

`docs/upgrade.md`

```md
# When To Upgrade

You should move from Community to Paid when you need:

- multiple contributors
- module ownership
- formal review and approval
- client work
- agency delivery
- stakeholder-ready packaging
- higher operational discipline
```

`tests/fixtures/sample-input.md`

```md
Project: Inventory intake pilot

We need a simple internal workflow to receive stock adjustment requests, approve them, and keep an audit trail.

Actors:
- warehouse staff
- warehouse lead

Goals:
- reduce manual spreadsheet handoff
- keep approval visibility
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bash tests/test-boundary-docs.sh`
Expected: `community docs ok`

- [ ] **Step 5: Commit**

```bash
git add docs/getting-started.md docs/methodology.md docs/comparison.md docs/upgrade.md tests/test-boundary-docs.sh tests/fixtures/sample-input.md
git commit -m "feat: add community docs and upgrade guidance"
```

### Task 6: Run The Full Community Validation Sweep

**Files:**
- Modify: `README.md`
- Test: `tests/test-repo-shape.sh`
- Test: `tests/test-contract-community.sh`
- Test: `tests/test-template-surface.sh`
- Test: `tests/test-skill-surface.sh`
- Test: `tests/test-boundary-docs.sh`

- [ ] **Step 1: Add the final validation command block to the README**

````md
## Validation

Run the repo checks:

```bash
bash tests/test-repo-shape.sh
bash tests/test-contract-community.sh
bash tests/test-template-surface.sh
bash tests/test-skill-surface.sh
bash tests/test-boundary-docs.sh
```
````

- [ ] **Step 2: Run the full validation suite**

Run:

```bash
bash tests/test-repo-shape.sh
bash tests/test-contract-community.sh
bash tests/test-template-surface.sh
bash tests/test-skill-surface.sh
bash tests/test-boundary-docs.sh
```

Expected:

```text
repo shape ok
community contract ok
community templates ok
community skill surface ok
community docs ok
```

- [ ] **Step 3: Review the repo boundary manually**

Check:

```bash
rg -n 'ba-collab|ba-notion|delegation|wireframe|compiled html|Notion publish' .
```

Expected: only comparison or upgrade docs may mention paid capabilities; no implementation files should depend on them.

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: add validation workflow"
```

## Self-Review

### Spec coverage

- Separate public repo: covered by Tasks 1 and 5
- Solo non-commercial positioning: covered by Tasks 1 and 5
- Narrow workflow `input -> intake -> backbone -> stories -> srs-lite`: covered by Tasks 2, 3, 4, and 5
- Simplified repo shape: covered by Tasks 1, 2, and 3
- No paid-only collaboration and delivery systems: covered by Tasks 1, 2, 4, 5, and 6
- Clear upgrade path to paid: covered by Task 5
- Capability boundary validation: covered by Task 6

### Placeholder scan

No `TBD`, `TODO`, or deferred implementation markers are allowed in the final repo files created by this plan.

### Type consistency

Use these exact artifact and command names consistently:

- `PROJECT-HOME.md`
- `intake.md`
- `backbone.md`
- `user-stories.md`
- `srs-lite.md`
- `ba-do`
- `ba-start intake`
- `ba-start backbone`
- `ba-start stories`
- `ba-start srs-lite`
- `ba-next`
- `ba-status`
