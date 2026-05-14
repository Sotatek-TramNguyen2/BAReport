# UC-02 Figma Change Log

## Version History

| Version | Date | Summary |
| --- | --- | --- |
| v1 | 2026-05-13 | Empty state BA, Phân bổ BA buttons/filters, List dự án sort/popup/filters |
| v2 | 2026-05-13 | Phân bổ BA: đổi hàng=dự án/cột=BA, thêm cột Status |
| v3 | 2026-05-13 | Phân bổ BA: hàng Tổng sticky ngay dưới header BA name |

---

## v1 — 2026-05-13

### Changes requested:
1. Thêm dự án — BA tham gia: empty state "Không có dữ liệu"
2. Phân bổ BA: add Sửa/Lưu buttons, remove "Tất cả GEX", add Status column + filter, remove search bar
3. List dự án: sort Start/End Date, Edit opens popup, Delete confirm popup (common), Status multi-select, add Contract Type filter, remove "BA tham gia" column

---

## Figma Make Prompt (v1)

Apply the following changes to UC-02 Project Management. Do NOT modify any element not mentioned below.

---

### Tab "List dự án"

**Filter bar:**
- Change Status filter to **multi-select** dropdown. Users can pick multiple values (Research/Presale, Design, Development, Deployment, Maintenance, Pending). Show selected values as tags inside dropdown.
- Add **Contract Type** filter dropdown after Status filter. Options: Tất cả / ODC - T&M / Fixed Price.

**Table:**
- Remove column "BA tham gia" from the table.
- Add sort icon (↕) to **Start Date** and **End Date** column headers. Click toggles asc ↑ / desc ↓. Icon color: #9CA3AF default, #2563EB active.

**Edit action:**
- Click pencil icon → open centered **pop-up modal "Sửa dự án"**.
- Modal: white bg, rounded 12px, shadow-xl, padding 24px, max-width 720px, backdrop black 50%.
- Header: "Sửa dự án" (18px bold #111827) + close (×) icon top-right.
- Body: same form as "Thêm dự án" (Section A + Section B), pre-filled with project data.
- Footer: "Hủy" (secondary) + "Lưu" (primary), right-aligned.

**Delete action — Common Confirm Delete Pop-up:**
- Click trash icon → open centered confirm modal.
- Modal: white bg, rounded 12px, shadow-lg, padding 24px, max-width 400px, backdrop black 50%.
- Red warning circle icon (48px, top center).
- Title: "Xác nhận xóa" (16px bold #111827).
- Message: "Bạn có chắc chắn muốn xóa [tên dự án]? Hành động này không thể hoàn tác." (14px #4B5563).
- Buttons right-aligned, gap 12px: "Hủy" (secondary — border #D1D5DB, text #374151, white bg, rounded 8px) + "Xóa" (danger — bg #DC2626, white text, rounded 8px).

---

### Pop-up "Thêm dự án" / "Sửa dự án" — Section B: BA tham gia

**Empty state (when no BA added):**
- Show instead of table: container with border 1px dashed #E5E7EB, rounded 8px, padding 32px, text-align center.
- Text: "Không có dữ liệu" (14px, #9CA3AF).
- "Thêm BA" button remains visible above.

---

### Tab "Phân bổ BA"

**Filter bar:**
- Remove search input entirely.
- GEX filter: remove "Tất cả GEX" option. Only show GEX 1 / GEX 2 / GEX 3 / GEX 4. Default: GEX 1.
- Add **"Status dự án"** multi-select filter after GEX. Options: Research/Presale / Design / Development / Deployment / Maintenance / Pending. Placeholder: "Chọn trạng thái".

**Action buttons (right side of filter bar):**
- "Sửa" — secondary button (border #D1D5DB, text #374151, white bg). Click enables inline editing of effort cells.
- "Lưu" — primary button (bg #2563EB, white text). Only active after "Sửa" clicked. Saves changes.
- Default: cells read-only. After "Sửa": cells editable, "Lưu" active, "Sửa" hidden/disabled.

**Matrix table:**
- Rows = BA names (first column, sticky left, 180px, bold).
- Columns = projects. Each column header shows project name + small status badge below (same colors as Tab 1 status badges, 10px font).
- Last column "Tổng" (sticky right) unchanged.

---

### Do NOT change
- Sidebar, page title, tab structure, color system, typography, spacing, permission cues, "Tổng" color coding logic.

---
---

## v2 — 2026-05-13

### Changes requested:
1. Phân bổ BA: đổi orientation — hàng là dự án, cột là tên BA
2. Phân bổ BA: thêm cột Status dự án + filter theo status

---

## Figma Make Prompt (v2)

Apply the following changes to Tab "Phân bổ BA" in UC-02 Project Management. Do NOT modify any other element.

---

### Tab "Phân bổ BA" — Matrix table orientation change

**Flip rows and columns:**
- **Rows** = Projects (first column, sticky left, 180px, bold text). Each row is one project.
- **Columns** = BA names. Each column header shows BA name (truncated with tooltip if needed).
- **Last row or summary** = "Tổng" per BA (bottom row, sticky bottom) — total effort of each BA across all projects. Keep same color coding logic (< 70% yellow, 70-100% green, > 100% red).

**Add "Status" column:**
- Add a **"Status"** column immediately after the project name column (second column, width 130px).
- Each cell shows the project's current status as a colored badge (same badge style/colors as Tab "List dự án"):
  - Research/Presale: bg #DBEAFE, text #1E40AF
  - Design: bg #EDE9FE, text #6B21A8
  - Development: bg #DCFCE7, text #166534
  - Deployment: bg #FEF9C3, text #854D0E
  - Maintenance: bg #F3F4F6, text #374151
  - Pending: bg #FEE2E2, text #991B1B

**Add "Status dự án" filter:**
- Add multi-select dropdown filter labeled "Status dự án" in the filter bar.
- Options: Research/Presale / Design / Development / Deployment / Maintenance / Pending.
- Placeholder: "Chọn trạng thái".
- Filtering hides rows (projects) that don't match selected statuses.

**Updated sample data:**

| Dự án | Status | Nguyễn Văn A | Trần Thị B | Lê Văn C | Phạm D | Hoàng E |
| --- | --- | --- | --- | --- | --- | --- |
| Dự án Alpha | Development | 50% | — | 20% | 100% | — |
| Dự án Beta | Design | — | 40% | 30% | — | 30% |
| Dự án Gamma | Development | 30% | — | — | — | 70% |
| Dự án Epsilon | Maintenance | — | 60% | — | 20% | — |
| **Tổng** | | 80% (green) | 100% (green) | 50% (yellow) | 120% (red) | 100% (green) |

---

### Do NOT change
- Filter bar buttons (Sửa/Lưu) from v1, GEX filter behavior from v1, "Tổng" color coding logic, all other tabs and elements.

---
---

## v3 — 2026-05-13

### Changes requested:
1. Phân bổ BA: di chuyển hàng "Tổng" effort lên sticky ngay dưới hàng header (BA name), thay vì ở cuối bảng.

---

## Figma Make Prompt (v3)

Apply the following change to Tab "Phân bổ BA" in UC-02 Project Management. Do NOT modify any other element.

---

### Tab "Phân bổ BA" — Move "Tổng" row position

**Move the "Tổng" (total effort per BA) row:**
- Move from the **bottom** of the table to **immediately below the column header row** (BA names row).
- Make it **sticky** (position: sticky, top below header) so it remains visible when scrolling down through project rows.
- Style: bg #F9FAFB, font bold, border-bottom 2px solid #E5E7EB to visually separate from project data rows.
- Keep same color coding logic in each cell (< 70% yellow, 70-100% green, > 100% red).

**Updated table structure (top to bottom):**
1. Header row: Dự án | Status | [BA name columns...]
2. **Tổng row (sticky):** — | — | 80% (green) | 100% (green) | 50% (yellow) | 120% (red) | 100% (green)
3. Data rows: project rows with effort cells

---

### Do NOT change
- Column orientation (rows=projects, columns=BA), Status column, filters, Sửa/Lưu buttons, color coding values.
