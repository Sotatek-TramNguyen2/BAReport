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

When more than one `plans/{slug}-{date}` project set exists, require explicit `--slug` and `--date` using the `YYMMDD-HHmm` token format instead of guessing.

If the request needs modules, collaboration, publishing, packaging, or client delivery, explain that it is outside Community scope and point to `docs/comparison.md` and `docs/upgrade.md`.
