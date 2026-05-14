# Project Memory — BA Weekly Reporting System

## Canonical Vocabulary

| Term | Canonical Form | Avoid |
| --- | --- | --- |
| Khối tổ chức | GEX (GEX1-4) | Division, Block |
| Báo cáo tuần | Weekly Report | Report tuần, báo cáo hàng tuần |
| Phân bổ effort | Effort % | Allocation, workload % |
| Đánh giá AI | RED/YELLOW/GREEN | Traffic light, RAG status |
| Cảnh báo bất thường | Anomaly Alert | Warning, flag |

## Approved Decisions

| ID | Decision | Date | Source |
| --- | --- | --- | --- |
| DEC-01 | Output language: Tiếng Việt | 2026-05-12 | PO |
| DEC-02 | Out-of-scope: PM tool, Chat, Timesheet, KPI cá nhân | 2026-05-12 | PO |
| DEC-03 | Multi-edit: last-write-wins | 2026-05-12 | PO |
| DEC-04 | Notification: phase sau, không trong MVP | 2026-05-12 | PO |
| DEC-05 | Bỏ Presales High-win prediction | 2026-05-13 | PO |
| DEC-06 | AI không cần BAL duyệt trước khi xử lý | 2026-05-13 | PO |
| DEC-07 | Risk baseline = End Date; quá hạn → báo risk | 2026-05-13 | PO |
| DEC-08 | AI model: API bên thứ 3, ưu tiên dễ & tiết kiệm | 2026-05-13 | PO |
| DEC-09 | Deliverables: Backbone + User Stories + FRD + SRS + Prompt Figma Make | 2026-05-13 | PO |

## Accepted Assumptions

ASM-01 → ASM-08 (see backbone.md §7)

## Rejected / Removed

| Item | Reason | Date |
| --- | --- | --- |
| Presales High-win prediction | Không có data lịch sử, PO quyết định bỏ | 2026-05-13 |
| Wireframe constraint pack | Thay bằng Prompt cho Figma Make | 2026-05-13 |

## Push-back Triggers

- Nếu có yêu cầu thêm notification → nhắc: đã lock phase sau
- Nếu có yêu cầu real-time collaboration → nhắc: đã lock last-write-wins
- Nếu có yêu cầu KPI/performance review → nhắc: out-of-scope
