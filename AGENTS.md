# BA Skills Workspace — Agent Guide

This workspace uses BA-kit Community (located in `bakit-community/`) as a subfolder.
All skill paths must be prefixed with `bakit-community/` when resolving references.

## Path Translation

When reading any BA-kit skill instruction, apply these translations:

| Skill says              | Actual path in this workspace         |
|-------------------------|---------------------------------------|
| `core/...`              | `bakit-community/core/...`            |
| `templates/...`         | `bakit-community/templates/...`       |
| `skills/...`            | `bakit-community/skills/...`          |
| `docs/...`              | `bakit-community/docs/...`            |
| `plans/{slug}-{date}/`  | `plans/{slug}-{date}/`  *(workspace root)* |

## Required Read Order (before any BA-kit command)

1. `bakit-community/core/contract.yaml`
2. `bakit-community/core/contract-behavior.md`
3. The matching skill file under `bakit-community/skills/`

## BA-kit Community Commands

### `/ba-do`
- Skill: `bakit-community/skills/ba-do/SKILL.md`
- Workflow: `bakit-community/core/workflows/do.md`
- Purpose: Route freeform BA text to the correct command.

### `/ba-start <step>`
- Skill: `bakit-community/skills/ba-start/SKILL.md`
- Step files: `bakit-community/skills/ba-start/steps/{intake,backbone,stories,srs-lite}.md`
- Purpose: Execute a specific lifecycle step.
- Subcommands: `intake`, `backbone`, `stories`, `srs-lite`

### `/ba-next`
- Skill: `bakit-community/skills/ba-next/SKILL.md`
- Workflow: `bakit-community/core/workflows/next.md`
- Purpose: Detect and recommend the next step (read-only).

### `/ba-status`
- Skill: `bakit-community/skills/ba-status/SKILL.md`
- Workflow: `bakit-community/core/workflows/status.md`
- Purpose: Report current artifact status (read-only).

## Templates (for output generation)

| Template | Path |
|----------|------|
| Project Home | `bakit-community/templates/project-home-template.md` |
| Intake Form | `bakit-community/templates/intake-form-template.md` |
| Requirements Backbone | `bakit-community/templates/requirements-backbone-template.md` |
| User Stories | `bakit-community/templates/user-story-template.md` |
| SRS-Lite | `bakit-community/templates/srs-lite-template.md` |

## Output Location

All project outputs go to `plans/{slug}-{date}/` at the **workspace root**:

```
BA Skills/
├── plans/
│   └── {slug}-{date}/
│       ├── PROJECT-HOME.md
│       ├── intake.md
│       ├── backbone.md
│       ├── user-stories.md
│       └── srs-lite.md
├── bakit-community/        ← kit source (do not modify)
├── brd-summarizer/         ← standalone skill
└── ...
```

## Workflow Pipeline

`input → intake → backbone → stories → srs-lite`

| Step | Requires | Outputs |
|------|----------|---------|
| `intake` | *(raw input)* | `PROJECT-HOME.md`, `intake.md` |
| `backbone` | `intake.md` | `PROJECT-HOME.md`, `backbone.md` |
| `stories` | `backbone.md` | `PROJECT-HOME.md`, `user-stories.md` |
| `srs-lite` | `backbone.md` + `user-stories.md` | `PROJECT-HOME.md`, `srs-lite.md` |

## Contract Rules

- Work from exact paths only.
- Stop on ambiguity instead of guessing.
- Keep output markdown-first.
- Treat `backbone.md` as the source of truth after it exists.
- When more than one `plans/{slug}-{date}` project set exists, require explicit `--slug` and `--date` (format: `YYMMDD-HHmm`).
- Do not invent module, packaging, publishing, or collaboration artifacts.
- When a request is out of scope, explain the boundary and point to `bakit-community/docs/comparison.md` and `bakit-community/docs/upgrade.md`.

## Other Skills

### `brd-summarizer`
- Skill: `brd-summarizer/SKILL.md`
- Purpose: Extract and summarize BRD documents into structured key notes.
- Standalone — does not interact with the BA-kit pipeline.
