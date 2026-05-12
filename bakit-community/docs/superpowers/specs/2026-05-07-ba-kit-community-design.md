# BA-kit Community Design

Date: 2026-05-07
Status: Approved

## Summary

`BA-kit Community` is a separate public repository, not a trimmed branch of the paid `bakit` repo.

Its purpose is to let a solo user experience a real BA workflow on small non-commercial work:

- raw input
- intake normalization
- requirements backbone
- user stories
- SRS-lite

The paid product remains the place for team operations, agency/client delivery, governance, collaboration, packaging, and runtime discipline.

## Product Positioning

### BA-kit Community

- Public repository
- Non-commercial only
- Solo-first
- Designed for learning the method and running small BA workflows end to end
- Optimized for adoption, clarity, and low friction

### BA-kit Paid

- Private commercial repository
- Built for BA teams and agencies
- Supports team coordination, review, handoff, governance, and delivery quality
- Optimized for repeatable real-world operations

The products should not be framed as “free vs more features.” They solve different jobs:

- Community: prove the method works for a solo BA
- Paid: operate BA work safely across people, modules, and stakeholders

## Community Product Boundary

Community should be intentionally designed as its own product.

It should not:

- mirror the paid repository structure
- expose paid commands as disabled stubs
- preserve internal hooks just to hint at locked features
- aim for partial parity with paid

It should:

- contain only capabilities that are fully usable
- present a smaller, simpler command surface
- define a clear upgrade path when work stops being solo or non-commercial

## Target User

Primary fit:

- solo BA
- BA learner
- PM or lead doing light BA work alone
- individual evaluator exploring the methodology

Explicit non-fit:

- BA teams working in parallel
- agencies delivering to clients
- consulting teams managing multiple project contributors
- organizations needing governance, approval, review packets, or stakeholder-ready packaging

## Workflow Scope

Community supports one narrow workflow:

`input -> intake -> backbone -> stories -> srs-lite`

Supported characteristics:

- one operator
- one linear project lane
- markdown-first output
- small to medium problem framing

Unsupported characteristics:

- module decomposition
- multi-user ownership
- review routing
- approval workflow
- delegation tracking
- stakeholder packaging
- publishing integrations

## Command Surface

Community should expose a small command surface only.

Recommended commands:

- `ba-start`
- `ba-next`
- `ba-status`
- optionally `ba-do` if natural-language routing is a key adoption hook

Community should not include command stubs for paid-only capabilities.

Paid-only capabilities should simply not exist in the Community repo.

## Artifact Set

Community should generate a minimal artifact set:

- `PROJECT-HOME.md`
- `intake.md`
- `backbone.md`
- `user-stories.md`
- `srs-lite.md`

These are enough to demonstrate the method and complete a basic solo workflow.

Community should not generate:

- `COLLAB-HOME.md`
- `MODULE-HOME.md`
- review packets
- packaging outputs
- wireframe handoff artifacts
- design runtime artifacts
- delegation trackers

## Repository Shape

Community should use a simplified repository layout:

```text
plans/
  {slug}-{date}/
    PROJECT-HOME.md
    intake.md
    backbone.md
    user-stories.md
    srs-lite.md

templates/
  intake-form-template.md
  requirements-backbone-template.md
  user-story-template.md
  srs-lite-template.md

docs/
  getting-started.md
  methodology.md
  comparison.md
  upgrade.md
```

This structure intentionally avoids module and delivery concepts that belong to the paid product.

## Free/Paid Capability Boundary

### Included In Community

- intake normalization
- requirements backbone
- user stories
- SRS-lite
- lightweight BA dashboard
- essential templates
- simple status/next-step guidance

### Excluded From Community

- collaboration workflows
- module ownership
- lead review packets
- GitHub handoff workflows
- Notion publishing
- HTML packaging
- pre-backbone options flow
- wireframe handoff system
- advanced runtime parity support
- maintainer-grade release automation
- multi-runtime operational complexity

## Licensing Boundary

Community license should be simple and explicit:

- non-commercial use only
- no agency delivery
- no client work
- no team/shared BA operations

This aligns with the business model:

- Community maximizes learning and trial
- Paid captures organizational and commercial use

## Monetization Logic

The upgrade trigger should come from real workflow pressure, not artificial quotas.

Community should avoid:

- run limits
- token limits
- project count quotas
- watermarking
- intrusive feature-lock prompts

Instead, the boundary should be capability-based:

- solo versus team
- learning/workflow trial versus commercial operation
- markdown artifacts versus governed delivery

This creates a cleaner user experience and protects the paid moat where buyers actually feel pain.

## Upgrade Triggers

Community should direct users to paid when they need any of the following:

- multiple contributors
- module-level ownership
- formal review and approval flow
- client-safe or stakeholder-ready delivery packaging
- publishing integrations
- more operational reliability and maintenance breadth

The messaging should explain why the upgrade exists in operational terms, not in “feature unlocked” terms.

## Out-Of-Scope Handling

When a Community user asks for paid-only capabilities, the product should not pretend to support them.

Expected behavior:

- explain that the requested workflow is outside Community scope
- name the paid capability category plainly, such as collaboration, packaging, or client delivery
- point to the upgrade/comparison documentation
- avoid dead-end command failures that look like bugs

This keeps the product honest and avoids the “crippleware” feeling.

## Maintenance Strategy

Community and paid should be maintained as separate products with shared methodology, not as tightly synchronized source trees.

Recommended operating rule:

- do not copy every paid improvement into Community
- port only what improves solo adoption
- reject features that primarily strengthen team/commercial operations

Risks to avoid:

- Community creep into paid territory
- maintaining fragile file-level sync across repos
- confusing users with two nearly identical products

## Validation Criteria

The Community design is successful if all of the following are true:

- a solo user can complete a small BA workflow without needing paid docs or hidden commands
- a team or agency quickly reaches a real operational limit instead of stretching Community awkwardly
- the upgrade boundary is understandable from repo structure and docs alone
- Community maintenance does not require file-by-file parity work with paid
- the paid product remains clearly differentiated on collaboration, governance, and delivery operations

## Recommendation

Build `BA-kit Community` as a curated solo BA starter product with a fully working narrow workflow and a strict non-commercial boundary.

Do not build it as a crippled edition of paid.

The paid product should remain clearly superior in the exact dimensions that matter to BA teams and agencies:

- collaboration
- governance
- handoff quality
- delivery packaging
- operational maturity
