# Getting Started

BA-kit Community is for solo, non-commercial business analysis work.

Use it when you want a simple path from rough notes to structured output:

`input -> intake -> backbone -> stories -> srs-lite`

Start with one raw markdown note such as `tests/fixtures/sample-input.md`.

Run one of these entry points:

- `/ba-do` if you want the agent to route the next step from plain language
- `/ba-start intake` if you want to begin directly at intake

Then use:

- `/ba-next` to keep moving through the workflow
- `/ba-status` to check what exists and what is next
- if more than one `plans/{slug}-{date}` project set exists, pass `--slug` and `--date` explicitly
- the `--date` token format is `YYMMDD-HHmm`, for example `260507-1030`

Community fits:

- one operator
- small to medium problem framing
- markdown-first deliverables
- learning, evaluation, or internal planning

Community does not fit:

- team collaboration
- agency delivery
- client work
- governance-heavy handoffs

If your work needs team coordination, stakeholder-ready packaging, or commercial delivery, move to the paid product.
