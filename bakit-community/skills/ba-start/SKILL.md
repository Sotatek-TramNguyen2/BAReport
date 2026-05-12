---
name: ba-start
description: Run the BA-kit Community lifecycle for intake, backbone, stories, and srs-lite.
---

Required read order:
1. `core/contract.yaml`
2. `core/contract-behavior.md`
3. the matching step file under `steps/`

When `--date` is required, use the contract token format `YYMMDD-HHmm`.
When more than one `plans/{slug}-{date}` project set exists, require explicit `--slug` and `--date` instead of guessing.

Supported subcommands:

- `intake`
- `backbone`
- `stories`
- `srs-lite`

Never emit collaboration, module, packaging, or publishing artifacts.
