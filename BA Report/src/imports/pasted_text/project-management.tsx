Design a **Project Management (Setup BA Projects)** page for the BA Weekly Reporting System. This page allows managers to create/edit projects and manage BA effort allocation across projects.

**Shared elements:** Sidebar, page structure, font, colors, card styles, table styles, dropdown styles, button styles — follow exactly as UC-01 Dashboard. Do NOT redefine these. Only "Projects" nav item is active in sidebar.

---

## Header

- Left: Page title "Quản lý dự án"
- Right: Button "Thêm dự án" — primary button style + icon "+"

**Tab bar below header:**
- 2 tabs, horizontal, underline style:
  - "List dự án" (active — text #2563EB, border-bottom 2px solid #2563EB)
  - "Phân bổ BA" (inactive — text #6B7280, no border)
- Tab bar has border-bottom 1px solid #E5E7EB full width

---

## Tab 1: List dự án (default active)

**Filter bar:**
- Left: Search input (placeholder "Tìm kiếm dự án...", icon search, width 280px)
- Right: GEX filter dropdown (Tất cả GEX / GEX 1 / GEX 2 / GEX 3 / GEX 4) + Status filter dropdown (Tất cả / Research/Presale / Design / Development / Deployment / Maintenance / Pending)

**Table columns:**

| Column | Width | Content |
| --- | --- | --- |
| Tên dự án | 200px | Text, bold, clickable (blue on hover) |
| Division | 80px | Tag badge (blue bg) |
| Contract Type | 120px | Text |
| Status | 130px | Colored badge |
| Start Date | 100px | dd/mm/yyyy |
| End Date | 100px | dd/mm/yyyy |
| Country | 100px | Text |
| BA tham gia | 150px | Avatar stack (max 3) + "+N" overflow |
| Actions | 60px | Edit (pencil) + Delete (trash) icons — managers only |

**Status badge colors:**
- Research/Presale: bg #DBEAFE, text #1E40AF
- Design: bg #EDE9FE, text #6B21A8
- Development: bg #DCFCE7, text #166534
- Deployment: bg #FEF9C3, text #854D0E
- Maintenance: bg #F3F4F6, text #374151
- Pending: bg #FEE2E2, text #991B1B

**Sample data (6 rows):**
- "Dự án Alpha" | GEX 1 | ODC - T&M | Development | 01/03/2026 | 30/06/2026 | Japan | 3 avatars
- "Dự án Beta" | GEX 2 | Fixed Price | Design | 15/04/2026 | 15/07/2026 | Singapore | 2 avatars
- "Dự án Gamma" | GEX 1 | ODC - T&M | Development | 01/01/2026 | 30/04/2026 | Korea | 2 avatars
- "Dự án Delta" | GEX 3 | Fixed Price | Research/Presale | 01/05/2026 | — | Vietnam | 1 avatar
- "Dự án Epsilon" | GEX 4 | ODC - T&M | Maintenance | 01/06/2025 | 01/06/2026 | Japan | 2 avatars
- "Dự án Zeta" | GEX 2 | ODC - T&M | Deployment | 01/02/2026 | 30/05/2026 | USA | 3 avatars

**Behavior:** Click row → opens Edit Detail. Pagination bottom right "1-6 of 24".

---

## Edit Detail (slide-over panel or separate page)

**Triggered by:** Click row OR "Thêm dự án" button

**Layout:** White card, 2 sections stacked vertically.

### Section A: Thông tin chung (2-column grid)

| Field | Type | Position | Placeholder |
| --- | --- | --- | --- |
| Tên dự án * | Text input | Full width | "Nhập tên dự án" |
| Division * | Dropdown | Left | "Chọn GEX" |
| Contract Type * | Dropdown | Right | "Chọn loại hợp đồng" |
| Status * | Dropdown | Left | "Chọn trạng thái" |
| Country | Text input | Right | "Nhập quốc gia" |
| Start Date * | Date picker | Left | "dd/mm/yyyy" |
| End Date * | Date picker | Right | "dd/mm/yyyy" |
| Summary | Textarea (3 rows) | Full width | "Mô tả tóm tắt dự án..." |

Required fields marked with red asterisk (*).

### Section B: BA tham gia

**Title:** "BA tham gia" + Button "Thêm BA" (secondary, small)

**Inline table:**

| Column | Content |
| --- | --- |
| Tên BA | Text |
| Email | Text, #6B7280 |
| Effort % | Number input, step 5, range 0-100 |
| Is Lead | Checkbox |
| Actions | Remove icon (×) |

**Sample:** 3 BA rows with effort 50%, 30%, 20%.

**Footer:** "Hủy" (secondary) + "Lưu" (primary), right-aligned.

---

## Tab 2: Phân bổ BA

**Filter bar:**
- Left: Search input (placeholder "Tìm BA...", width 240px)
- Right: GEX filter dropdown (Tất cả GEX / GEX 1 / GEX 2 / GEX 3 / GEX 4)

**Matrix table (spreadsheet-like):**
- First column (sticky left, 180px): BA name, bold
- Middle columns: one per active project (min-width 100px, horizontal scroll)
- Last column (sticky right): "Tổng" — total effort

**Cell:** Shows effort % or "—" (empty). Inline editable by managers.

**"Tổng" column color coding:**
- < 70%: yellow text + bg (#EAB308 / #FEF9C3)
- 70-100%: green text + bg (#16A34A / #DCFCE7)
- > 100%: red text + bg (#DC2626 / #FEE2E2)

**Sample (5 BA × 4 projects):**

| BA | Dự án Alpha | Dự án Beta | Dự án Gamma | Dự án Epsilon | Tổng |
| --- | --- | --- | --- | --- | --- |
| Nguyễn Văn A | 50% | — | 30% | — | 80% (green) |
| Trần Thị B | — | 40% | — | 60% | 100% (green) |
| Lê Văn C | 20% | 30% | — | — | 50% (yellow) |
| Phạm D | 100% | — | — | 20% | 120% (red) |
| Hoàng E | — | 30% | 70% | — | 100% (green) |

**Matrix style:** Grid borders on all cells, sticky first column with right shadow, header project names truncated with tooltip.

---

## Permission visual cues

- BA Member: hide "Thêm dự án" button, hide Actions column, all cells read-only, show banner "Bạn đang xem ở chế độ chỉ đọc" (bg #FEF3C7, text #92400E) at top
- Manager: full CRUD

---

## Do NOT include
- Notification bell, dark mode, drag-and-drop, bulk actions, import/export buttons