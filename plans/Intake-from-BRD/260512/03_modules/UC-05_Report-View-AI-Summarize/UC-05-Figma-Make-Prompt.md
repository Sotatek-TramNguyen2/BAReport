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
- Right (2 filters):
  - GEX filter dropdown (GEX 1 / GEX 2 / GEX 3 / GEX 4). No "Tất cả GEX" option. Default: GEX 1.
  - Trạng thái dự án: multi-select dropdown (Research/Presale / Design / Development / Deployment / Maintenance / Pending)

**Table columns:**

| Cột | Width | Content |
| --- | --- | --- |
| Dự án | 160px | Text, bold. Grouped when multiple BAs report same project |
| GEX | 80px | Tag badge (same style as UC-02) |
| Trạng thái | 120px | Status badge (same colors as UC-02) |
| Kết quả tuần qua | 200px | Text, truncated 2 lines, expandable |
| Kế hoạch tuần tới | 200px | Text, truncated 2 lines, expandable |
| Risk & Blocker | 180px | Text, truncated 2 lines, expandable |
| Cần hỗ trợ | 180px | Text: nội dung yêu cầu hỗ trợ nếu có, hoặc "Không" (text #6B7280) |

**Behavior:**
- Click row → expand to show full text content of all fields
- Rows grouped by project: when multiple BAs report same project, show project name once with sub-rows per BA (indented, lighter bg #F9FAFB)
- Search filters by project name in real-time

**Sample data (4 rows, 3 projects):**

Group 1 — "Dự án Alpha" | GEX 1 | Development:
- Kết quả: "Hoàn thành review SRS module Payment..." | Kế hoạch: "Bắt đầu wireframe module Notification..." | Risk: "Chờ confirm requirement từ khách hàng" | Cần hỗ trợ: "Cần review SRS với senior BA"

Group 2 — "Dự án Beta" | GEX 1 | Design:
- Kết quả: "Hoàn thành phân tích yêu cầu module..." | Kế hoạch: "Viết SRS chi tiết..." | Risk: "Delay response từ khách hàng" | Cần hỗ trợ: "Không"

Group 3 — "Dự án Gamma" | GEX 1 | Development:
- Kết quả: "Hoàn thành wireframe 5 màn hình..." | Kế hoạch: "Bắt đầu review với dev team..." | Risk: — | Cần hỗ trợ: "Không"

**Pagination:** bottom right "1-3 of 8"

---

## Tab 2: AI Report

**Filter bar:**
- Left: Search input (placeholder "Tìm kiếm dự án...", icon search, width 280px)
- Right: GEX filter dropdown (GEX 1 / GEX 2 / GEX 3 / GEX 4). No "Tất cả GEX". Default: GEX 1.

**Layout:** 3 sections stacked vertically.

### Section 1: Tóm tắt báo cáo BA của GEX [xx]

White card, rounded 12px, shadow, padding 24px. Title: "Tóm tắt báo cáo BA của GEX 1" (16px, bold, #111827). Timestamp right: "Cập nhật lúc 14:30 12/05/2025" (12px, #9CA3AF).

**2 blocks inside card:**

**Block 1: 🔥 Risk nghiêm trọng**
- Title: "🔥 Risk nghiêm trọng" (14px, bold, #DC2626)
- List items (bullet, 14px, #374151):
  - "Dự án Alpha — Bug nghiêm trọng ảnh hưởng UAT, khách hàng phàn nàn"
  - "Dự án Delta — Khách hàng phàn nàn về quality output"
- If empty: "Không có" (#6B7280, italic)

**Block 2: ⚠️ Có khả năng ảnh hưởng**
- Title: "⚠️ Có khả năng ảnh hưởng" (14px, bold, #854D0E)
- List items:
  - "Dự án Beta — Delay response từ khách hàng, tiến độ chệch nhẹ"
  - "Dự án Gamma — Miss 2 edge cases trong sprint, cần review lại spec"
- If empty: "Không có" (#6B7280, italic)

---

### Section 2: Dự án không báo cáo

White card, rounded 12px, shadow, padding 20px. Title: "Dự án không báo cáo" (14px, bold, #111827) + badge count (bg #FEE2E2, text #991B1B, e.g. "2").

- List of project names that are active in this GEX but have no report submitted this week.
- Each item: bullet + project name (14px, #374151) + status badge (same colors as UC-02)
- Sample:
  - "Dự án Epsilon" — Maintenance
  - "Dự án Zeta" — Development
- If all projects reported: "Tất cả dự án đã báo cáo ✓" (#16A34A, italic)

---

### Section 3: AI Report per project

**Repeating cards, one per project.** Each card: white bg, rounded 12px, shadow, padding 20px, margin-bottom 16px.

**Card header:**
- Left: Project name (16px, bold, #111827) + "BA phụ trách:" list of BA names (14px, #6B7280)
- No assessment badge (removed RED/YELLOW/GREEN tags)

**Card body:**
- Single field "Tóm tắt AI" — AI-generated summary paragraph (14px, #374151, 2-4 lines). Combines insights from Kết quả tuần qua + Kế hoạch tuần tới + Risk & Blocker + Cần hỗ trợ into one cohesive paragraph.

**Sample: 3 project cards:**

Card 1 — "Dự án Alpha" | BA: Nguyễn Văn A, Trần Thị B
- Tóm tắt AI: "Tuần qua hoàn thành review SRS module Payment và update test case sprint 5. Tuần tới sẽ bắt đầu wireframe module Notification và review UAT feedback. Hiện đang bị block bởi bug nghiêm trọng ảnh hưởng UAT và chờ confirm requirement từ khách hàng. BA cần hỗ trợ review SRS với senior."

Card 2 — "Dự án Beta" | BA: Lê Văn C
- Tóm tắt AI: "Hoàn thành phân tích yêu cầu module báo cáo, tuần tới viết SRS chi tiết. Có rủi ro delay do khách hàng chậm response."

Card 3 — "Dự án Gamma" | BA: Hoàng E
- Tóm tắt AI: "Hoàn thành wireframe 5 màn hình chính, tuần tới review với dev team và bắt đầu viết spec. Không có blocker hay yêu cầu hỗ trợ."

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
