# Figma Make — UC-01 Dashboard: Change Prompt

Copy toàn bộ nội dung bên dưới và paste vào Figma Make:

---

```
Make the following changes to the existing Dashboard page. Keep the current sidebar, header dropdowns, and card styles intact. Only MODIFY and REORDER the specific elements listed below:

---

CHANGE 1 — Filter text consistency

In the "BA chưa báo cáo" card and "Theo dõi rủi ro dự án" section, update the GEX filter dropdown options to:
- "Tất cả GEX", "GEX 1", "GEX 2", "GEX 3", "GEX 4"
(Use spaces: "GEX 1" not "GEX1")

---

CHANGE 2 — Move "Tổng quan dự án & nguồn lực" section ABOVE "Member Health Check"

If there is already a section with 2 chart cards ("Tổng quan dự án theo trạng thái" + "Tổng quan nguồn lực theo GEX"), move it so it appears BEFORE the Member Health Check (3 cards: bad week, cần hỗ trợ, quá tải).

If this section does not exist yet, CREATE it as 2 cards side by side (equal width, gap 16px) and place it between "BA chưa báo cáo" table and "Member Health Check":

**Left card: "Tổng quan dự án theo trạng thái"**
- Card style: white bg, rounded 12px, shadow 0 1px 3px rgba(0,0,0,0.08), padding 20px
- Header row: Title "Tổng quan dự án theo trạng thái" (14px, bold) on left + GEX filter dropdown on right (options: "Tất cả GEX", "GEX 1", "GEX 2", "GEX 3", "GEX 4")
- Chart type: Donut chart (ring shape)
- Center of donut: large number "24" (24px, bold) + small label "Tổng dự án" (12px, #6B7280)
- Donut segments:
  - Development: 10 (42%) — #16A34A (green)
  - Research/Presale: 4 (17%) — #60A5FA (light blue)
  - Design: 3 (12%) — #A78BFA (purple)
  - Deployment: 3 (12%) — #EAB308 (yellow)
  - Maintenance: 3 (12%) — #6B7280 (gray)
  - Pending: 1 (4%) — #E5E7EB (light gray)
- Hover behavior: hovering a donut segment shows a tooltip with the count (e.g., "Development: 10 dự án")
- Click behavior: clicking a donut segment navigates to Weekly Report View filtered by that project status
- Legend below chart: colored circles (8px) + label + percentage, horizontal layout, font 12px #4B5563

**Right card: "Tổng quan nguồn lực theo GEX"**
- Card style: same as left card
- Title: "Tổng quan nguồn lực theo GEX" (14px, bold)
- Chart type: Horizontal stacked bar chart
- Y-axis: "GEX 1", "GEX 2", "GEX 3", "GEX 4" (font 13px, #374151)
- X-axis: 0% to 100%, light grid lines at 20% intervals
- Each bar: height 28px, rounded ends (4px radius), gap 16px between bars
- 3 segments per bar:
  - Đúng effort (70-100%): #16A34A (green)
  - Đang rảnh (<70%): #EAB308 (yellow)
  - Quá tải (>100%): #DC2626 (red)
- Sample data:
  - GEX 1: green 63% | yellow 25% | red 12%
  - GEX 2: green 86% | yellow 14% | red 0%
  - GEX 3: green 50% | yellow 25% | red 25%
  - GEX 4: green 72% | yellow 14% | red 14%
- Click behavior: clicking a bar segment navigates to Resource Management page filtered by that status (Quá tải / Đúng effort / Đang rảnh)
- Legend below: green circle "Đúng effort" | yellow circle "Đang rảnh" | red circle "Quá tải" — font 12px #4B5563

---

CHANGE 3 — Risk Tracking table: Make rows clickable

In the "Theo dõi rủi ro dự án" table:
- Make each row clickable (cursor pointer)
- On hover: row background changes to #F3F4F6
- Add a small right-arrow icon (→) at the end of each row, color #9CA3AF, on hover changes to #2563EB
- Clicking a row navigates to the detail report page of that project

---

FINAL SECTION ORDER (top to bottom):
1. Summary banner (Tổng BA đã báo cáo)
2. 4 progress cards (GEX 1-4, x/y BA format)
3. Caption "Click vào GEX để xem chi tiết báo cáo"
4. BA chưa báo cáo table (with GEX filter)
5. **Tổng quan dự án & nguồn lực (2 chart cards)** ← moved up
6. Member Health Check (3 cards: bad week, cần hỗ trợ, quá tải)
7. Theo dõi rủi ro dự án table (with GEX filter, clickable rows)

---

DO NOT change:
- Sidebar navigation
- Header row (title + Team dropdown + Week dropdown)
- Summary banner card style or content
- Progress cards style or content
- Member Health Check card content (only position changes)
- Risk Tracking columns or sample data (only add click behavior)
- Any card border-radius, shadows, font family, or spacing values
```
