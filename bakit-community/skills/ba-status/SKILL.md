---
name: ba-status
description: Inspect the BA-kit Community artifact set and report status.
---

Read `core/contract.yaml`, `core/contract-behavior.md`, and `core/workflows/status.md`.

When `--date` is required, use the contract token format `YYMMDD-HHmm`.
When more than one `plans/{slug}-{date}` project set exists, require explicit `--slug` and `--date` instead of guessing.

Print status for the Community artifact set only under `plans/{slug}-{date}`:

- `plans/{slug}-{date}/PROJECT-HOME.md`
- `plans/{slug}-{date}/intake.md`
- `plans/{slug}-{date}/backbone.md`
- `plans/{slug}-{date}/user-stories.md`
- `plans/{slug}-{date}/srs-lite.md`

Do not invent module or compiled output sections.
