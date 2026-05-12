---
name: ba-next
description: Detect the next BA-kit Community step from the current artifact set.
---

Read `core/contract.yaml`, `core/contract-behavior.md`, and `core/workflows/next.md`.

When `--date` is required, use the contract token format `YYMMDD-HHmm`.
When more than one `plans/{slug}-{date}` project set exists, require explicit `--slug` and `--date` instead of guessing.

Inspect only:

- `plans/{slug}-{date}/PROJECT-HOME.md`
- `plans/{slug}-{date}/intake.md`
- `plans/{slug}-{date}/backbone.md`
- `plans/{slug}-{date}/user-stories.md`
- `plans/{slug}-{date}/srs-lite.md`

Recommend one exact next command without mutating artifacts.
