# Intake

## Project Context

The BA division at SotaTek spans four groups (GEX1 – GEX4), each with a hierarchy of Division Manager (DM) → BA Manager (BAM) → BA Lead (BAL) → BA Member. Every week each BA must submit a progress report covering all assigned projects. These reports are currently collected via Google Sheets and Google Forms, then manually aggregated by leads and managers.

The organisation wants to replace this manual workflow with a dedicated **BA Weekly Reporting System** — a web application that centralises data entry, automates summary generation through AI, and provides real-time dashboards for management oversight.

## Problem Statement

1. **Manual & error-prone process** — Weekly data is scattered across multiple Google Sheets; copy-paste mistakes and inconsistent formats are common.
2. **No real-time visibility** — Managers lack a single view of reporting completion rates, project health, or resource utilisation across GEX divisions.
3. **No automated risk detection** — Risk and blocker information is buried in free-text fields; leads must read every report line-by-line to spot issues.
4. **Effort allocation opacity** — There is no cross-check mechanism to validate whether a BA's self-reported effort percentage matches the actual workload described.

## Goals

| # | Goal | Success Indicator |
|---|------|-------------------|
| G1 | Centralise all BA weekly reports into one platform | 100 % of BA members submit reports through the system (zero Google Form submissions) |
| G2 | Enforce role-based access (DM / BAM / BAL / BA) | Each role sees only its permitted modules; validated via SSO + RBAC |
| G3 | Provide real-time dashboard per GEX | Dashboard shows report-completion rate, member health, and risk tracking updated within minutes of submission |
| G4 | Automate AI-driven report summaries | AI generates per-project progress summary, RED / YELLOW / GREEN evaluation, and effort cross-check for every reporting week |
| G5 | Enable GEX-level executive summary | AI produces a weekly GEX Risk & Health Summary for DM / BAM |
| G6 | Support data export | Users can export raw report data to Excel / CSV matching the current legacy format |

## Stakeholders

| Role | Responsibility | Access Level |
|------|---------------|--------------|
| Division Manager (DM) | Oversees all GEX groups; receives executive summaries | Full read across all GEX; manage projects & resources |
| BA Manager (BAM) | Manages BA teams within a GEX; reviews AI reports | Full read within own GEX; manage projects & resources |
| BA Lead (BAL) | Supervises a squad of BAs; evaluates quality & progress | Read within own GEX; manage projects & resources; annotate risk |
| BA Member | Submits weekly reports; views own data | Submit & edit own reports; view assigned project info |

## Raw Requirements

### Functional

**A. Dashboard (shared view for Management & BA)**
- Division Metrics: per-GEX count of BAs reported vs. expected; progress %; list of BAs who have not yet reported.
- Member Health Check: alerts for overloaded members, low-rating members (1–2 stars), members requesting help.
- Risk Tracking: aggregated from BA self-reports, Lead evaluations (Quality / Progress / Efforts), and project-timeline drift.

**B. Project Setup (Setup BA Projects) — viewable by all, editable by Management**
- Project Info tab: Division (GEX), Name, Contract Type (ODC – T&M, Fixed Price), Summary, Country, Start Date, End Date, Status (Research / Presale / Design / Development / Deployment / Maintenance / Pending), assigned BAs with effort %, lead flag.
- BA Allocation tab: matrix view — columns = projects, rows = BAs, cells = effort %. Editable from both Project Info and this tab (bi-directional sync).

**C. Resource Setup (Setup Resources) — Management only**
- Member Info: Name, Email (SSO SotaTek), Division (GEX1–GEX4), Rank (Intern / Fresher / Junior / Middle / Lead / Manager).
- Status: "No report required" flag, notes.
- Allocated Effort: per-project effort with alert if total < 70 % or > 100 %.

**D. Weekly Report View & AI Reports**
- *Manually Report tab:* Project, Actual Effort %, Last Week results, Next Week plan, Risk & Blocker, Need Help (expand field). Searchable by project name.
- *AI Generated Report – per project:* auto-reads Last Week, Risk & Blocker, Summary → produces progress summary (see Format §6.1), proposes RED / YELLOW / GREEN label (§6.2), cross-checks effort (§6.4).
- *AI Generated Report – per GEX:* aggregates per-project AI reports → GEX-level summary, risk list, effort anomalies.
- *Manual Report Presales tab:* Project, Received Date, Submission Date, Status (In Progress / Submitted / Lost / Won), Summary, BA in Charge, PM in Charge. Searchable.

**E. BA Member – Submit Weekly Report**
- Auto-pull master data (project name, division).
- Fields: Project/Task (dropdown), Project status (from Setup), Effort % (auto-filled from last week), Last Week results (auto-filled from previous "Next Week"), Next Week plan, Risk & Blocker (auto-filled from last week).
- Resource allocation section (optional, auto-fill from last week): effort split across [Project / Interview / Training / Presales / Other], Need Help (Y/N + description), Week Rating (1–5), Capacity (Available / Full / Overloaded).
- Save Draft capability.
- Multiple BAs can report on the same project; fields are collaboratively editable.

### Non-Functional

- **Authentication:** Google Workspace SSO; authorisation mapped from master-data email list.
- **Responsiveness:** Must work on desktop and mobile (responsive); BAs often report end-of-day / weekend.
- **AI Integration:** LLM via secure API; data must not be used for public model training (NDA compliance).
- **Data Export:** Excel / CSV export matching current RAW format for backup / migration.

### AI Report Formats (Section 6 of BRD)

**6.1 Project Progress Summary** — per project, max 3–4 lines:
- Project/Task — BA in Charge
- Key Achievements (summarise Last Week)
- Next Steps (summarise Next Week)
- Key Blocker (extract core risk, or "None")

**6.2 Automated Metric Evaluation** — per BA per project:
- 🔴 RED: keywords like "sai logic", "miss requirement", "khách hàng phàn nàn", "bug nghiêm trọng", unresolvable blocker → immediate action required.
- 🟡 YELLOW: minor defects, repeated ticket revisions, delayed communication, slight schedule drift → close monitoring.
- 🟢 GREEN: smooth progress, results match plan, no risks, clear output, no dev complaints.

**6.3 GEX Risk & Health Summary** — weekly executive summary per GEX:
- 🔥 High-Priority Risks (RED projects): Project name – core issue.
- ⚠️ Potential Risks (YELLOW projects).
- 🚑 Member Health Check: overloaded BAs, low-rating BAs, BAs requesting help.

**6.4 Effort Validation Cross-check** — per BA per project:
- ✅ Logical: effort % aligns with described workload.
- ⚠️ Anomaly Alert: high effort / low output, or low effort / high output. Purpose: flag for Lead / BAM clarification.

## Constraints

| # | Constraint |
|---|-----------|
| C1 | Must integrate with Google Workspace SSO (company email) — no separate credential store. |
| C2 | AI/LLM API usage must comply with NDA — no client project data used for public model training. |
| C3 | Report form must be responsive (desktop + mobile). |
| C4 | Data export must match the current Google-Sheets RAW format to allow side-by-side migration. |
| C5 | RBAC must prevent BA members from accessing management-only modules (Resource Setup, report annotations). |

## Assumptions

| # | Assumption |
|---|-----------|
| A1 | All BA members already have SotaTek Google Workspace accounts. |
| A2 | The master-data list of members, divisions, and roles will be maintained in-system by Management (no external HR feed required at launch). |
| A3 | The reporting cadence remains weekly (one submission per BA per week). |
| A4 | AI report generation can run asynchronously after all BAs have submitted (no hard real-time SLA). |
| A5 | The four GEX divisions (GEX1–GEX4) are stable and will not change frequently. |
| A6 | "Effort %" is self-reported by BAs and cross-checked by AI — it is not sourced from a time-tracking tool. |

## Open Questions

| # | Question | Addressed To |
|---|----------|-------------|
| OQ1 | What is the weekly submission deadline (day + time)? Should the system enforce a hard cutoff or allow late submissions with a flag? | DM / BAM |
| OQ2 | Should the AI-generated report be editable by BAL/BAM before it is finalised, or is it read-only? | BAM |
| OQ3 | Is there a retention policy for historical reports (e.g., keep 12 months, archive older data)? | DM |
| OQ4 | For the Presales Manual Report, is the "High-win" prediction mentioned in §2 expected at MVP or deferred? | BAM |
| OQ5 | Which LLM provider / model is approved for use, and is there an existing API key or procurement process? | Engineering / DM |
| OQ6 | Should the "Need Help" alert trigger a real-time notification (e.g., Slack / email) to BAL, or is dashboard visibility sufficient? | BAL / BAM |
| OQ7 | Are there any existing project IDs or naming conventions that the system must honour when importing current project data? | BAM |
