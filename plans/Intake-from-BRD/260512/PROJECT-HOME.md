# BA Weekly Reporting System — Project Home

## Trạng thái hiện tại

| Giai đoạn | Trạng thái |
| --- | --- |
| Intake | ✅ Hoàn thành |
| Options | ⏭️ Bỏ qua |
| Backbone | ✅ Hoàn thành |
| User Stories | ⏭️ Bỏ qua |
| FRD | ✅ Hoàn thành (7 modules) |
| SRS | ⏳ Bước tiếp theo |
| Prompt Figma Make | 🔲 Chờ |

## Thông tin dự án

- **Tên:** Hệ thống Quản lý và Báo cáo Tuần BA
- **PO:** Trâm (Sofia) Nguyễn
- **Nguồn:** raw/BRD - BA Weekly Reporting System.md
- **Mode:** Hybrid
- **Ngôn ngữ:** Tiếng Việt
- **MVP Deadline:** 20/05/2026
- **Scale:** 30 BA, 4 BAL, 2 BAM, 6 DM

## Backbone Summary

- 7 modules (UC-01 → UC-07), 36 FRs, 3 NFRs
- UC-01 Dashboard, UC-02 Project Mgmt, UC-03 Resource Mgmt, UC-04 Report Submission, UC-05 Report View & AI Summarize, UC-06 Auth, UC-07 Export

## Quyết định đã lock

- Out-of-scope: PM tool, Chat, Timesheet chi tiết, KPI cá nhân, Notification (phase sau), High-win prediction (bỏ)
- Multi-edit: Last-write-wins
- AI: API bên thứ 3, không cần BAL duyệt
- Risk baseline: quá End Date → báo risk

## Bước tiếp theo

Chạy **srs** để tạo SRS (use cases, test cases) hoặc **figma** để tạo prompt cho Figma Make.

## Quick Prompts

- "srs" → Tạo SRS (use cases + test cases)
- "figma" → Tạo prompt cho Figma Make
- "thay doi" → Impact analysis khi có thay đổi scope
- "ban giao" → Package deliverables
