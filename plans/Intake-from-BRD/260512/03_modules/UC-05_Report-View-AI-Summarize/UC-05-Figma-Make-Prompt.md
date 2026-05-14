# Figma Make Prompt — UC-05: Report View & AI Summarize

## Instruction for Figma Make

Design a **Report View & AI Summarize** page for the BA Weekly Reporting System. This page allows managers to view weekly reports from BAs and see AI-generated summaries and risk assessments.

**Shared elements:** Sidebar, page structure, font, colors, card styles, table styles, dropdown styles, button styles — follow exactly as UC-01 Dashboard. Do NOT redefine these. Only "Xem báo cáo tuần" nav item is active in sidebar.

---

## Header

- Left: Page title "Báo cáo & AI" (20px, bold, #111827)
- Right: 2 filter dropdowns (gap 12px):
  - GEX filter dropdown (Tất cả GEX / GEX 1 / GEX 2 / GEX 3 / GEX 4)
  - Tuần filter dropdown (default: "W20 M05 (12/05 - 18/05/2025)", options: previous weeks)

**Tab bar below header:**
- 2 tabs, horizontal, underline style:
  - "Manually Weekly Report" (active — text #2563EB, border-bottom 2px solid #2563EB)
  - "AI Report" (inactive — text #6B7280)
- Tab bar has border-bottom 1px solid #E5E7EB full width

---

## Tab 1: Manually Weekly Report (default active)

**Filter bar:**
- Left: Search input (placeholder "Tìm kiếm dự án...", icon search, width 280px)

**Table columns:**

| Column | Width | Content |
| --- | --- | --- |
| Dự án | 180px | Text, bold. Grouped when multiple BAs report same project |
| BA | 140px | BA name(s) |
| Effort % | 80px | Number, center-aligned |
| Kết quả tuần qua | 220px | Text, truncated 2 lines, expandable |
| Kế hoạch tuần tới | 220px | Text, truncated 2 lines, expandable |
| Risk & Blocker | 180px | Text, truncated 2 lines, expandable |
| Need Help | 90px | Badge: "Có" (bg #FEE2E2, text #991B1B) or "Không" (bg #F3F4F6, text #6B7280) |

**Behavior:**
- Click row → expand to show full text content of all fields
- Rows grouped by project: when multiple BAs report same project, show project name once with sub-rows per BA (indented, lighter bg #F9FAFB)
- Search filters by project name in real-time

**Sample data (4 rows, 2 projects):**

Group 1 — "Dự án Alpha":
- Nguyễn Văn A | 50% | "Hoàn thành review SRS module Payment..." | "Bắt đầu wireframe module Notification..." | "Chờ confirm requirement từ khách hàng" | Có
- Trần Thị B | 50% | "Đã update test case cho sprint 5..." | "Review UAT feedback..." | — | Không

Group 2 — "Dự án Beta":
- Lê Văn C | 40% | "Hoàn thành phân tích yêu cầu module..." | "Viết SRS chi tiết..." | "Delay response từ khách hàng" | Không

Group 3 — "Dự án Gamma":
- Hoàng E | 70% | "Hoàn thành wireframe 5 màn hình..." | "Bắt đầu review với dev team..." | — | Không

**Pagination:** bottom right "1-4 of 12"

---

## Tab 2: AI Report

**Layout:** 2 sections stacked vertically.

### Section 1: Executive Summary (per GEX)

White card, rounded 12px, shadow, padding 24px. Top badge: "AI Generated" (bg #EFF6FF, text #2563EB, 12px, rounded 4px) + timestamp "Cập nhật lúc 14:30 12/05/2025" (12px, #9CA3AF).

**3 blocks inside card:**

**Block 1: 🔥 High-Priority Risks (Dự án Đỏ)**
- Title: "🔥 High-Priority Risks" (14px, bold, #DC2626)
- List items (bullet, 14px, #374151):
  - "Dự án Alpha — Bug nghiêm trọng ảnh hưởng UAT, khách hàng phàn nàn"
  - "Dự án Delta — Khách hàng phàn nàn về quality output"
- If empty: "Không có dự án nào ở mức nghiêm trọng" (#6B7280, italic)

**Block 2: ⚠️ Potential Risks (Dự án Vàng)**
- Title: "⚠️ Potential Risks" (14px, bold, #854D0E)
- List items:
  - "Dự án Beta — Delay response từ khách hàng, tiến độ chệch nhẹ"
  - "Dự án Gamma — Miss 2 edge cases trong sprint, cần review lại spec"

**Block 3: 🚑 Member Health Check**
- Title: "🚑 Member Health Check" (14px, bold, #1E40AF)
- Sub-items with labels:
  - "Overloaded:" Phạm D (120%), Nguyễn F (130%) — text #DC2626
  - "Bad week (Rating 1-2):" Nguyễn Văn A, Trần Thị B — text #EA580C
  - "Cần hỗ trợ:" Lê Văn C (Dự án Alpha — Cần review SRS) — text #2563EB

---

### Section 2: AI Report per project

**Repeating cards, one per project.** Each card: white bg, rounded 12px, shadow, padding 20px, margin-bottom 16px.

**Card header:**
- Left: Project name (16px, bold, #111827) + "BA in Charge:" list of BA names (14px, #6B7280)
- Right: Assessment badge
  - 🔴 RED: bg #FEE2E2, text #991B1B, label "Nghiêm trọng"
  - 🟡 YELLOW: bg #FEF9C3, text #854D0E, label "Rủi ro"
  - 🟢 GREEN: bg #DCFCE7, text #166534, label "Tốt"

**Card body (4 fields, vertical stack):**

| Field | Style |
| --- | --- |
| Key Achievements | Label (12px, #6B7280, uppercase) + content text (14px, #374151, 2-3 lines) |
| Next Steps | Label + content text (14px, #374151, 1-2 lines) |
| Key Blocker | Label + content text (14px, #374151). If none: "Không có" italic #9CA3AF |
| Effort Validation | Label + badge (see below) |

**Effort Validation badges:**
- ✅ Logical: bg #DCFCE7, text #166534, label "Logical"
- ⚠️ Cao bất thường: bg #FEF9C3, text #854D0E, label "Effort cao bất thường"
- ⚠️ Thấp bất thường: bg #FEF9C3, text #854D0E, label "Effort thấp bất thường"
- ⚠️ Chênh lệch: bg #FEF9C3, text #854D0E, label "Chênh lệch với phân bổ"

Below badge: explanation text (12px, #6B7280). Example: "Effort 90% nhưng mô tả công việc ngắn gọn"

**Sample: 3 project cards:**

Card 1 — "Dự án Alpha" | BA: Nguyễn Văn A, Trần Thị B | 🔴 RED
- Key Achievements: "Hoàn thành review SRS module Payment. Update test case sprint 5."
- Next Steps: "Wireframe module Notification, review UAT feedback"
- Key Blocker: "Bug nghiêm trọng ảnh hưởng UAT, chờ confirm requirement từ khách hàng"
- Effort Validation: ✅ Logical

Card 2 — "Dự án Beta" | BA: Lê Văn C | 🟡 YELLOW
- Key Achievements: "Hoàn thành phân tích yêu cầu module báo cáo."
- Next Steps: "Viết SRS chi tiết"
- Key Blocker: "Delay response từ khách hàng"
- Effort Validation: ⚠️ "Effort thấp bất thường" — "Effort 20% nhưng mô tả nhiều công việc phức tạp"

Card 3 — "Dự án Gamma" | BA: Hoàng E | 🟢 GREEN
- Key Achievements: "Hoàn thành wireframe 5 màn hình chính."
- Next Steps: "Review với dev team, bắt đầu viết spec"
- Key Blocker: "Không có"
- Effort Validation: ✅ Logical

**AI loading state:** When AI is processing, show skeleton cards with shimmer animation + text "AI đang phân tích báo cáo..." (14px, #6B7280, centered).

**AI error state:** If AI fails, show: icon ⚠️ + "AI đang xử lý, vui lòng thử lại sau" (14px, #6B7280) + button "Thử lại" (secondary).

---

## Permission visual cues

- DM, BAM, BAL: full access all tabs
- BA Member: no access — redirect to Dashboard (do not design this state)

---

## Do NOT include
- Export/download buttons
- Approval workflow for AI reports
- Manual override of AI assessment
- Dark mode, notification bell
- Edit functionality on Tab 1 or Tab 2 (read-only views)
- Presale Report tab (moved to UC-04)
