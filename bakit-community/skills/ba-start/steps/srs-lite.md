# Community SRS-Lite

- Prerequisite: require `plans/{slug}-{date}/backbone.md` and `plans/{slug}-{date}/user-stories.md`.
- Save path: `plans/{slug}-{date}/srs-lite.md`.
- Generate from `templates/srs-lite-template.md`.
- Refresh `plans/{slug}-{date}/PROJECT-HOME.md` so current step, recommended next command, and artifact status stay current.
- Source of truth: `backbone.md` remains the source of truth, with `user-stories.md` supplying story detail.
- Keep the output suitable for one operator and one linear project lane.
- Capture only core flows, rules, data inputs/outputs, and validations.
- Do not generate wireframe, module, or packaging artifacts.
