# BA-kit Community

BA-kit Community is a public repo for solo, non-commercial business analysis workflows.

It supports a narrow flow:

`input -> intake -> backbone -> stories -> srs-lite`

Community scope is intentionally narrow. It does not include modules, collaboration, packaging, publishing, or client delivery.

See:

- `docs/getting-started.md`
- `docs/comparison.md`
- `docs/upgrade.md`

## Validation

Run the repo checks:

```bash
bash tests/test-repo-shape.sh
bash tests/test-contract-community.sh
bash tests/test-template-surface.sh
bash tests/test-skill-surface.sh
bash tests/test-boundary-docs.sh
```
