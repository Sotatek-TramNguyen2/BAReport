# Backbone Index — BA Weekly Reporting System

## Summary

- **Modules:** 7
- **Functional Requirements:** 36 (FR-01 → FR-37, bỏ FR-23)
- **Non-Functional Requirements:** 3 (NFR-01, NFR-02, NFR-06)
- **Actors:** 5 (A-01 → A-05)
- **Goals:** 4 (G-01 → G-04)
- **Assumptions:** 8 (ASM-01 → ASM-08)

## Module Map

| Module | FR Count | Priority Mix | Key Actors |
| --- | --- | --- | --- |
| UC-01 Dashboard | 4 (FR-01→04) | 4 Must | All |
| UC-02 Project Management | 6 (FR-05→10) | 6 Must | DM, BAM, BAL |
| UC-03 Resource Management | 5 (FR-11→15) | 5 Must | DM, BAM, BAL |
| UC-04 Weekly Report Submission | 8 (FR-16→22, FR-24) | 6 Must, 2 Should | BAL, BA Member |
| UC-05 Report View & AI Summarize | 8 (FR-25→32) | 6 Must, 2 Should | DM, BAM, BAL, AI |
| UC-06 Authentication & Authorization | 3 (FR-33→35) | 3 Must | All |
| UC-07 Data Export | 2 (FR-36→37) | 1 Must, 1 Should | DM, BAM, BAL |

## Traceability

| Goal | Supporting FRs |
| --- | --- |
| G-01 Tập trung hóa | FR-01,02,05,07,10,16,17,18,19,20,24,25,30,31,32,36 |
| G-02 Phân quyền RBAC | FR-10,15,33,34,35,37 |
| G-03 Quản lý nguồn lực | FR-03,06,08,09,11,12,13,14,21,22 |
| G-04 AI Insights | FR-04,26,27,28,29 |

## Freshness

- Created: 2026-05-13
- Source: intake.md (2026-05-12, updated 2026-05-13)
- Status: initial creation, no prior version
