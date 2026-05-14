# UC-04 Figma Change Log

## Version History

| Version | Date | Summary |
| --- | --- | --- |
| v1 | 2026-05-14 | Indicator last-edit, merge submit cả 2 BA, % Dự án auto-calc |
| v2 | 2026-05-14 | Chia 2 tab: Báo cáo Dự án + Báo cáo Presale (gộp từ UC-05) |
| v3 | 2026-05-14 | Presale: thêm GEX, Domain, Drive, filter, tiếng Việt, multi BA, checkbox "Chỉ dự án của tôi" |

---

## v1 — 2026-05-14

### Changes requested:
1. Thêm indicator "Cập nhật lần cuối bởi [name] lúc [time]" dưới mỗi field shared trong báo cáo dự án
2. Khi 2 BA cùng submit cùng lúc: ghi nhận input của cả 2 (merge, không ghi đè)
3. Phân bổ nguồn lực — % Dự án: disable, tự tính = tổng effort thực tế các dự án

---

## Figma Make Prompt (v1)

Apply the following changes to UC-04 Weekly Report Submission. Do NOT modify any other element.

---

### Section "Báo cáo theo dự án" — Add last-edit indicator

Below each shared field (Kết quả tuần qua, Kế hoạch tuần tới, Risk & Blocker), add a last-edit indicator:

- Text: "Cập nhật lần cuối bởi **[Tên BA]** lúc **[HH:mm dd/MM]**" (12px, #9CA3AF, italic)
- Position: immediately below the textarea, left-aligned, margin-top 4px
- Icon: small clock icon (12px) before text, color #9CA3AF
- Only visible when another BA has edited this field (not shown if current user is last editor)

**Sample:**
- Below "Kết quả tuần qua" textarea: 🕐 "Cập nhật lần cuối bởi Trần Thị B lúc 14:30 12/05"
- Below "Risk & Blocker" textarea: 🕐 "Cập nhật lần cuối bởi Trần Thị B lúc 09:15 13/05"

---

### Submit behavior — Merge concurrent submissions

When submit succeeds and another BA also submitted for the same project, show a **merge info toast** (instead of overwriting):

- Toast style: bg #EFF6FF, border-left 4px solid #2563EB, text #1E40AF, padding 12px 16px, top-right, auto-dismiss 6s.
- Icon: info circle (blue)
- Text: "Báo cáo đã được ghi nhận. Nội dung của bạn và [Tên BA khác] đều được lưu."

**Visual in textarea after merge:** When both BAs submitted content for the same field, display both entries separated by a divider:

- Format inside textarea (read-only after submit):
```
[Nguyễn Văn A — 14:32]
Hoàn thành review SRS module Payment...

───────────────────
[Trần Thị B — 14:35]
Đã update test case cho sprint 5...
```

- Divider: thin line `───` with 8px margin top/bottom
- Each entry prefixed with [BA name — time] in bold, color #6B7280

---

### Section "Phân bổ nguồn lực" — % Dự án auto-calculate

Change the "% Dự án" input field:

- State: **disabled** (bg #F3F4F6, text #374151, cursor not-allowed, border #E5E7EB)
- Value: auto-calculated = sum of all "Effort thực tế (%)" values from Section 2 project cards
- Below field: helper text "Tự động tính từ effort thực tế các dự án" (12px, #9CA3AF, italic)
- Updates in real-time as user changes effort values in project cards above

**Sample:** If Dự án Alpha effort = 50%, Dự án Gamma effort = 30% → % Dự án shows "80" (disabled).

---

### Do NOT change
- Card layout, field order, other fields in Phân bổ nguồn lực, star rating, capacity radio, footer, submit button style, empty/submitted states.

---
---

## v2 — 2026-05-14

### Changes requested:
1. Chia UC-04 thành 2 tab: "Báo cáo Dự án" (nội dung hiện tại) và "Báo cáo Presale" (gộp form tạo presale report từ UC-05 vào đây)

---

## Figma Make Prompt (v2)

Apply the following changes to UC-04 Weekly Report Submission. Do NOT modify any other element not mentioned.

---

### Add tab bar below Header

Add a horizontal tab bar (underline style, same as UC-02) below the page title:

- 2 tabs:
  - "Báo cáo Dự án" (active — text #2563EB, border-bottom 2px solid #2563EB)
  - "Báo cáo Presale" (inactive — text #6B7280)
- Tab bar has border-bottom 1px solid #E5E7EB full width
- "Báo cáo Dự án" tab contains all existing content (Section 1, 2, 3 + Footer) — no changes to these.

---

### New Tab: "Báo cáo Presale"

When "Báo cáo Presale" tab is active, show the following content:

**Header area:**
- Right: Button "Thêm Presale" — primary button style + icon "+"

**Filter bar:**
- Left: Search input (placeholder "Tìm kiếm dự án presale...", icon search, width 280px)

**Table columns:**

| Column | Width | Content |
| --- | --- | --- |
| Project | 180px | Text, bold |
| Received Date | 110px | dd/mm/yyyy, sortable (default: newest first) |
| Submission Date | 110px | dd/mm/yyyy |
| Status | 120px | Colored badge |
| Summary | 220px | Text, truncated, expandable on click |
| BA in Charge | 130px | Text |
| PM in Charge | 130px | Text |
| Actions | 80px | Edit (pencil) + Delete (trash) icons |

**Status badge colors:**
- In Progress: bg #DBEAFE, text #1E40AF
- Submitted: bg #DCFCE7, text #166534
- Lost: bg #FEE2E2, text #991B1B
- Won: bg #FEF9C3, text #854D0E

**Sample data (4 rows):**
- "Presale Project X" | 01/05/2025 | — | In Progress | "Đề xuất giải pháp CRM cho khách hàng..." | Lê Văn C | Nguyễn PM A
- "Presale Project Y" | 20/04/2025 | 05/05/2025 | Submitted | "Hệ thống quản lý kho cho..." | Phạm D | Trần PM B
- "Presale Project Z" | 10/04/2025 | 25/04/2025 | Won | "Mobile app cho chuỗi bán lẻ..." | Hoàng E | Lê PM C
- "Presale Project W" | 05/04/2025 | 20/04/2025 | Lost | "Platform e-learning..." | Nguyễn Văn A | Phạm PM D

**Behavior:**
- Click Edit → opens pop-up "Sửa Presale Report" (modal style same as UC-02)
- Click Delete → Confirm Delete pop-up (common component from UC-02)
- Click "Thêm Presale" → opens pop-up "Thêm Presale Report"

**Pop-up: Thêm/Sửa Presale Report**

Modal style same as UC-02. Max-width 600px.

| Field | Type | Placeholder | Required |
| --- | --- | --- | --- |
| Project * | Text input | "Nhập tên dự án presale" | Yes |
| Received Date * | Date picker | "dd/mm/yyyy" | Yes |
| Submission Date | Date picker | "dd/mm/yyyy" | No |
| Status * | Dropdown | "Chọn trạng thái" (In Progress / Submitted / Lost / Won) | Yes |
| Summary | Textarea (3 rows) | "Mô tả tóm tắt..." | No |
| BA in Charge * | Dropdown (searchable) | "Chọn BA" | Yes |
| PM in Charge | Text input | "Nhập tên PM" | No |

Footer: "Hủy" (secondary) + "Lưu" (primary), right-aligned.

**Pagination:** bottom right "1-4 of 12"

---

### Do NOT change
- Tab "Báo cáo Dự án" content (Section 1, 2, 3, Footer, States). All existing elements remain intact.

---
---

## v3 — 2026-05-14

### Changes requested:
1. Presale: thêm cột GEX sau cột Dự án + filter GEX
2. Presale: dịch tất cả tên cột sang tiếng Việt
3. Presale: thêm cột Tài liệu (attach Google Drive link)
4. Presale: status tiếng Việt + filter status
5. Presale: Thêm/Sửa form — BA phụ trách = multi-select, thêm field Domain
6. Presale: checkbox "Chỉ dự án của tôi" filter theo BA in charge = current user
7. Presale: bỏ cột Summary, thay bằng cột Domain. Chi tiết Summary chỉ xem khi click Sửa
8. Sidebar navigation: đổi tên + thứ tự, bỏ Presale Report và Data Export

---

## Figma Make Prompt (v3)

Apply the following changes to UC-04 and the **shared sidebar navigation** (affects all pages). Do NOT modify Tab "Báo cáo Dự án" content.

---

### Sidebar Navigation — Update (applies to ALL pages/UCs)

Change navigation items in sidebar to the following names and order:

1. Dashboard
2. Tạo báo cáo tuần
3. Xem báo cáo tuần
4. Quản lý dự án
5. Quản lý nhân sự

**Remove:** "Presale Report" and "Data Export" items.

Active state for UC-04: "Tạo báo cáo tuần" is highlighted (#EFF6FF bg, #2563EB text).

---

### Tab "Báo cáo Presale" — Filter bar update

Replace current filter bar with:
- Left: Checkbox "Chỉ dự án của tôi" (14px, #374151). When checked, table only shows rows where BA phụ trách includes current logged-in user.
- Right (2 filters + button):
  - GEX filter dropdown (Tất cả GEX / GEX 1 / GEX 2 / GEX 3 / GEX 4)
  - Trạng thái filter dropdown (Tất cả / Đang thực hiện / Đã nộp / Thất bại / Thắng)
  - Button "Thêm Presale" — primary button style + icon "+"

Remove search input.

---

### Table — Update

Replace all column names with Vietnamese. Update columns:

| Cột | Width | Content |
| --- | --- | --- |
| Dự án | 160px | Text, bold |
| GEX | 80px | Tag badge (same style as UC-02) |
| Domain | 120px | Text |
| Ngày nhận | 100px | dd/mm/yyyy, sortable (default: newest first) |
| Ngày nộp | 100px | dd/mm/yyyy |
| Trạng thái | 120px | Colored badge (Vietnamese) |
| BA phụ trách | 150px | Text (multiple names comma-separated) |
| PM phụ trách | 130px | Text |
| Tài liệu | 80px | Drive icon link (📎). Click opens Google Drive URL in new tab. If empty: "—" |
| Actions | 80px | Edit (pencil) + Delete (trash) icons |

**Remove column "Summary"** from table. Summary content is only viewable inside the Edit pop-up.

**Status badge colors (Vietnamese):**
- Đang thực hiện: bg #DBEAFE, text #1E40AF
- Đã nộp: bg #DCFCE7, text #166534
- Thất bại: bg #FEE2E2, text #991B1B
- Thắng: bg #FEF9C3, text #854D0E

**Updated sample data:**
- "Presale Project X" | GEX 1 | Fintech | 01/05/2025 | — | Đang thực hiện | Lê Văn C, Phạm D | Nguyễn PM A | 📎 | ✏️🗑️
- "Presale Project Y" | GEX 2 | E-commerce | 20/04/2025 | 05/05/2025 | Đã nộp | Phạm D | Trần PM B | 📎 | ✏️🗑️
- "Presale Project Z" | GEX 3 | Retail | 10/04/2025 | 25/04/2025 | Thắng | Hoàng E | Lê PM C | — | ✏️🗑️
- "Presale Project W" | GEX 1 | Education | 05/04/2025 | 20/04/2025 | Thất bại | Nguyễn Văn A | Phạm PM D | 📎 | ✏️🗑️

---

### Pop-up Thêm/Sửa Presale — Update

Modal style same as UC-02. Max-width 640px.

**Updated form fields:**

| Field | Type | Placeholder | Required |
| --- | --- | --- | --- |
| Dự án * | Text input | "Nhập tên dự án presale" | Yes |
| GEX * | Dropdown | "Chọn GEX" (GEX 1 / GEX 2 / GEX 3 / GEX 4) | Yes |
| Domain * | Text input | "Nhập domain (VD: Fintech, E-commerce...)" | Yes |
| Ngày nhận * | Date picker | "dd/mm/yyyy" | Yes |
| Ngày nộp | Date picker | "dd/mm/yyyy" | No |
| Trạng thái * | Dropdown | "Chọn trạng thái" (Đang thực hiện / Đã nộp / Thất bại / Thắng) | Yes |
| Tóm tắt | Textarea (4 rows) | "Mô tả tóm tắt dự án presale..." | No |
| BA phụ trách * | Multi-select dropdown (searchable) | "Chọn BA" (can select multiple) | Yes |
| PM phụ trách | Text input | "Nhập tên PM" | No |
| Tài liệu (Drive) | URL input | "Paste Google Drive link..." | No |

- **BA phụ trách:** multi-select, selected values show as tags inside field. Searchable by name.
- **Tóm tắt:** only visible/editable inside this pop-up. Not shown as a table column.

Footer: "Hủy" (secondary) + "Lưu" (primary), right-aligned.

---

### Do NOT change
- Tab "Báo cáo Dự án", filter bar of Tab 1, footer, states, or any other UC-04 element.

---

### Chuẩn hóa tên field (áp dụng toàn bộ hệ thống)

Ensure the following field names are used consistently across ALL UCs:

| Field chuẩn | Ghi chú |
| --- | --- |
| Dự án | Tên dự án (không dùng "Project", "Tên dự án" trong bảng) |
| GEX | Division (không dùng "Division" trong UI) |
| Trạng thái | Status dự án (không dùng "Status") |
| Loại hợp đồng | Contract Type (không dùng "Contract Type") |
| Ngày bắt đầu | Start Date |
| Ngày kết thúc | End Date |
| Quốc gia | Country |
| BA phụ trách | BA in Charge (không dùng "Tên BA", "BA") |
| PM phụ trách | PM in Charge |
| Effort thực tế | Effort % BA tự báo cáo |
| Effort phân bổ | Effort % được assign từ Quản lý dự án |
| Tổng Effort | Tổng % effort across projects |
| Trạng thái Effort | Badge cảnh báo effort (Under-allocated / OK / Overloaded) |
| Không cần báo cáo | Checkbox exclude khỏi report |
| Ghi chú | Note/Remark |
| Tóm tắt | Summary (textarea) |
| Tài liệu | Google Drive link |
| Domain | Lĩnh vực dự án presale |
| Ngày nhận | Received Date (presale) |
| Ngày nộp | Submission Date (presale) |
