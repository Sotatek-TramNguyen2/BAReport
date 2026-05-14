# Figma Make Prompt — UC-01: Dashboard

## Instruction for Figma Make

Design a **BA Weekly Reporting System — Dashboard** page for a web application. This is an internal tool for SotaTek company to track BA team weekly reports across 4 divisions (GEX1-GEX4).

---

## Page Layout

**Structure:** Fixed left sidebar (240px) + scrollable main content area.

### Sidebar (shared across all pages)
- Dark navy background (#1E293B)
- Top: SotaTek logo
- Navigation items (white text, 14px Inter):
  - Dashboard (active — highlighted with #EFF6FF bg, #2563EB text)
  - Tạo báo cáo tuần
  - Xem báo cáo tuần
  - Quản lý dự án
  - Quản lý nhân sự
- Bottom: User avatar circle + email truncated (e.g., "buihuong@sotatek.c...") + settings gear icon

### Main Content Area

**Header row:**
- Left: Page title "Tổng quan" (20px, bold, #111827)
- Right: 2 dropdowns side by side (gap 12px):
  - Dropdown 1 — "Team": default "BA", options: "BA" (active), "QC" (disabled, grayed out, tooltip "Coming soon"), "PM" (disabled, grayed out, tooltip "Coming soon"). Style: border #E5E7EB, rounded 8px, 14px Inter
  - Dropdown 2 — Week selector: showing "Tuần 20 (12/05/2025 - 18/05/2025)" with chevron-down icon, border #E5E7EB, rounded 8px

---

## Section 1: Division Metrics (top)

**Full-width summary banner card:**
- Background: gradient from #0F766E to #134E4A (dark teal)
- Rounded 12px
- Left side: icon + label "Tổng BA đã báo cáo" (white, 14px) + large number "24/30" (36px, bold, white)
- Right side: small button "AI Insight" with sparkle icon, white bg, rounded 8px

**Below banner — 4 progress cards in a row (evenly spaced):**
- Each card shows: GEX name + progress format "x/y BA" (x = đã báo cáo, y = tổng BA từ Resource Management)
- GEX1: "6/8 BA" — progress bar green (75%)
- GEX2: "7/7 BA" — progress bar green (100%)
- GEX3: "5/8 BA" — progress bar yellow (63%)
- GEX4: "6/7 BA" — progress bar green (86%)
- Card style: white bg, rounded 12px, shadow, padding 16px
- Progress bar below text: height 6px, rounded, colored by percentage (>=80% green, 50-79% yellow, <50% red)

**Below progress cards — Caption text:**
- "Click vào GEX để xem chi tiết báo cáo" (12px, color #6B7280, italic)
- Clicking a GEX card navigates to Weekly Report View filtered by that GEX

**Below caption — Card "BA chưa báo cáo":**
- Header row: title "BA chưa báo cáo" + GEX filter dropdown (Tất cả GEX / GEX 1 / GEX 2 / GEX 3 / GEX 4) aligned right
- Compact table, 3 columns: GEX | Tên BA | Email
- 6 rows of sample data
- Clickable rows (hover #F3F4F6)

---

## Section 2: Project & Resource Overview

**2 cards in a row (equal width, gap 16px):**

**Card 1: "Tổng quan dự án theo trạng thái"**
- Filter: Dropdown GEX (Tất cả GEX / GEX 1 / GEX 2 / GEX 3 / GEX 4) aligned right of card title
- Donut/Pie chart showing project count by status (from Project Management)
- Segments:
  - Research/Presale — color: #60A5FA (light blue)
  - Design — color: #A78BFA (purple)
  - Development — color: #16A34A (green)
  - Deployment — color: #EAB308 (yellow)
  - Maintenance — color: #6B7280 (gray)
  - Pending — color: #E5E7EB (light gray)
- Center of donut: total project count in bold (e.g., "24")
- Legend below chart: colored dots + label + count + percentage
- Sample data: Research/Presale 4 (17%), Design 3 (12%), Development 10 (42%), Deployment 3 (12%), Maintenance 3 (12%), Pending 1 (4%)
- Hover: hovering a segment shows tooltip with count (e.g., "Development: 10 dự án")
- Click: clicking a segment navigates to Weekly Report View filtered by that status
- Card style: white bg, rounded 12px, shadow, padding 20px
- Title: "Tổng quan dự án theo trạng thái" (14px, bold)

**Card 2: "Tổng quan nguồn lực theo GEX"**
- Horizontal stacked bar chart, one bar per GEX (GEX1, GEX2, GEX3, GEX4)
- Each bar divided into 3 segments by BA effort status:
  - Quá tải (effort > 100%) — color: #DC2626 (red)
  - Đúng effort (70-100%) — color: #16A34A (green)
  - Đang rảnh (effort < 70%) — color: #EAB308 (yellow)
- X-axis: 0% to 100% (proportion of BA count in each status)
- Y-axis: GEX1, GEX2, GEX3, GEX4
- Legend below chart: colored dots + "Quá tải", "Đúng effort", "Đang rảnh"
- Sample data:
  - GEX1 (8 BA): 1 Quá tải (12%), 5 Đúng effort (63%), 2 Đang rảnh (25%)
  - GEX2 (7 BA): 0 Quá tải (0%), 6 Đúng effort (86%), 1 Đang rảnh (14%)
  - GEX3 (8 BA): 2 Quá tải (25%), 4 Đúng effort (50%), 2 Đang rảnh (25%)
  - GEX4 (7 BA): 1 Quá tải (14%), 5 Đúng effort (72%), 1 Đang rảnh (14%)
- Click: clicking a segment navigates to Resource Management filtered by that status (Quá tải / Đúng effort / Đang rảnh)
- Bar height: 28px, rounded ends, gap between bars: 16px
- Card style: white bg, rounded 12px, shadow, padding 20px
- Title: "Tổng quan nguồn lực theo GEX" (14px, bold)

---

## Section 3: Member Health Check

**3 cards in a row (equal width, gap 16px):**

**Card 1: "BA having a bad week"**
- Header: title + red badge count "2"
- Icon: sad face emoji or warning icon
- List items:
  - "Nguyễn Văn A — GEX2 — Rating: 1/5"
  - "Trần Thị B — GEX3 — Rating: 2/5"
- Each item has a small red dot indicator

**Card 2: "BA cần hỗ trợ"**
- Header: title + orange badge count "3"
- Icon: hand-raise icon
- List items with brief support content (each item is clickable → navigates to detail report of that project):
  - "Lê Văn C — GEX1 — Dự án Alpha — Cần hỗ trợ review SRS" → click vào đi đến báo cáo chi tiết Dự án Alpha
  - "Phạm D — GEX4 — Dự án Beta — Blocked bởi khách hàng" → click vào đi đến báo cáo chi tiết Dự án Beta
  - "Hoàng E — GEX2 — Dự án Gamma — Cần pair với senior" → click vào đi đến báo cáo chi tiết Dự án Gamma
- Hover state: underline text, cursor pointer

**Card 3: "BA quá tải"**
- Header: title + red badge count "2"
- Icon: fire/overload icon
- List items showing total effort:
  - "Nguyễn F — GEX1 — Effort: 130%"
  - "Trần G — GEX3 — Effort: 115%"
- Effort number in red text

---

## Section 4: Risk Tracking (bottom)

**Section title:** "Theo dõi rủi ro dự án" (16px, bold)

**Filter bar:** GEX dropdown filter (Tất cả GEX / GEX 1 / GEX 2 / GEX 3 / GEX 4) aligned right of section title

**Full-width card containing a table:**

| Column | Width | Content |
| --- | --- | --- |
| Dự án | 250px | Project name, text |
| GEX | 80px | Tag badge (blue) |
| Mức độ | 120px | "Nghiêm trọng" (red badge) or "Rủi ro" (yellow badge) |
| Risk từ BA | 350px | Truncated text, expandable |

**Note:** Only show projects with risk level "Nghiêm trọng" or "Rủi ro". Do NOT show projects that are GREEN/healthy.

**Sample data (4 rows):**
- Row 1: "Dự án Alpha" | GEX1 | 🔴 Nghiêm trọng | "Bug nghiêm trọng ảnh hưởng UAT, khách hàng phàn nàn..."
- Row 2: "Dự án Delta" | GEX3 | 🔴 Nghiêm trọng | "Khách hàng phàn nàn về quality output..."
- Row 3: "Dự án Beta" | GEX2 | 🟡 Rủi ro | "Delay response từ khách hàng, tiến độ chệch nhẹ..."
- Row 4: "Dự án Gamma" | GEX1 | 🟡 Rủi ro | "Miss 2 edge cases trong sprint, cần review lại spec..."

**Sort:** "Nghiêm trọng" rows on top, then "Rủi ro".

**Row interaction:** Each row is clickable → navigates to detail report of that project. Hover: bg #F3F4F6, cursor pointer.

**Table style:**
- Header row: bg #F9FAFB, uppercase 12px, color #6B7280
- Row height: 52px
- Border-bottom: 1px solid #E5E7EB
- Hover: bg #F3F4F6

---

## Visual Style Requirements

- Font: Inter
- Border-radius on all cards: 12px
- Card shadow: 0 1px 3px rgba(0,0,0,0.08)
- Spacing between sections: 24px
- All text in Vietnamese
- Color coding consistent: Green = good, Yellow = rủi ro, Red = nghiêm trọng
- Clean, minimal, professional SaaS dashboard aesthetic
- No decorative illustrations — data-focused
- Responsive consideration: cards stack vertically on smaller screens

---

## Do NOT include
- Notification bell or unread count (not in MVP)
- Any edit/action buttons on Risk Tracking (read-only)
- Presales section (separate page)
- Dark mode (not in scope)
