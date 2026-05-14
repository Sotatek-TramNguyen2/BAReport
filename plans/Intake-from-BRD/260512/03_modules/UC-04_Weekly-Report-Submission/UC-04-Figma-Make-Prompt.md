# Figma Make Prompt — UC-04: Weekly Report Submission

## Instruction for Figma Make

Design a **Weekly Report Submission** page for the BA Weekly Reporting System. This page allows BA members to submit weekly project reports and presale reports.

**Shared elements:** Sidebar, page structure, font, colors, card styles, table styles, dropdown styles, button styles — follow exactly as UC-01 Dashboard. Do NOT redefine these. Only "Tạo báo cáo tuần" nav item is active in sidebar.

---

## Header

- Left: Page title "Báo cáo tuần" (20px, bold, #111827)

**Tab bar below header:**
- 2 tabs, horizontal, underline style:
  - "Báo cáo Dự án" (active — text #2563EB, border-bottom 2px solid #2563EB)
  - "Báo cáo Presale" (inactive — text #6B7280)
- Tab bar has border-bottom 1px solid #E5E7EB full width

---

## Tab 1: Báo cáo Dự án (default active)

### Section 1: Thông tin chung

White card, rounded 12px, shadow, padding 20px. Title: "Thông tin chung" (16px, bold, #111827).

**3 fields in a row (equal width, gap 16px):**

| Field | Type | Behavior |
| --- | --- | --- |
| Email | Text input (readonly, bg #F9FAFB) | Auto-filled from SSO login. Value: "nguyenvana@sotatek.com" |
| Division | Text input (readonly, bg #F9FAFB) | Auto-filled from Resource data. Value: "GEX 1" |
| Tuần báo cáo | Dropdown | Default: current week "W20 M05 (12/05 - 18/05/2025)". Options include previous week. |

---

## Section 2: Báo cáo theo dự án

**Repeating card for each assigned project.** Each card is a white card, rounded 12px, shadow, padding 20px, margin-bottom 16px.

### Card header (per project)

- Left: Project name bold (16px, #111827) + Status badge (same badge colors as UC-02)
- Right: Effort label "Effort phân bổ: 50%" (14px, #6B7280)

### Card body (form fields, single column)

| Field | Type | Placeholder | Required |
| --- | --- | --- | --- |
| Effort thực tế (%) | Number input (width 120px, step 5, range 0-100) | "0" | Yes |
| Kết quả tuần qua | Textarea (4 rows) | "Mô tả kết quả công việc tuần qua..." | Yes |
| Kế hoạch tuần tới | Textarea (4 rows) | "Mô tả kế hoạch tuần tới..." | Yes |
| Risk & Blocker | Textarea (3 rows) | "Ghi chú rủi ro hoặc blocker (nếu có)..." | No |

**Auto-fill indicator:** Fields that are auto-filled from previous week show a small icon (↻) + tooltip "Tự động điền từ tuần trước" next to the field label.

**Last-edit indicator:** Below each shared field (Kết quả tuần qua, Kế hoạch tuần tới, Risk & Blocker), show:
- Text: 🕐 "Cập nhật lần cuối bởi **[Tên BA]** lúc **[HH:mm dd/MM]**" (12px, #9CA3AF, italic)
- Position: immediately below the textarea, left-aligned, margin-top 4px
- Only visible when another BA has edited this field (not shown if current user is last editor)

**Sample: 2 project cards:**

Card 1:
- Header: "Dự án Alpha" + badge "Development" (green) + "Effort phân bổ: 50%"
- Effort thực tế: 50
- Kết quả tuần qua: "Hoàn thành review SRS module Payment..."
- Kế hoạch tuần tới: "Bắt đầu wireframe module Notification..."
- Risk & Blocker: "Chờ confirm requirement từ khách hàng"

Card 2:
- Header: "Dự án Gamma" + badge "Development" (green) + "Effort phân bổ: 30%"
- Effort thực tế: 30
- Kết quả tuần qua: "Hoàn thành test case cho sprint 5..."
- Kế hoạch tuần tới: "Review UAT feedback..."
- Risk & Blocker: (empty)

---

## Section 3: Phân bổ nguồn lực

White card, rounded 12px, shadow, padding 20px. Title: "Phân bổ nguồn lực" (16px, bold, #111827). Subtitle below title: "Tổng phân bổ phải bằng 100%" (12px, #6B7280).

### Effort allocation (horizontal row of inputs)

5 number inputs in a row, each with label above:

| Label | Width | Placeholder |
| --- | --- | --- |
| % Dự án | 100px | (disabled) |
| % Interview | 100px | "0" |
| % Training | 100px | "0" |
| % Presales | 100px | "0" |
| % Khác | 100px | "0" |

- **% Dự án:** disabled (bg #F3F4F6, text #374151, cursor not-allowed). Auto-calculated = sum of all "Effort thực tế (%)" from Section 2 project cards. Updates real-time. Helper text below: "Tự động tính từ effort thực tế các dự án" (12px, #9CA3AF, italic).
- Right of the row: Total indicator "Tổng: 100%" (bold, green if = 100%, red if ≠ 100%)
- Below "% Khác": conditional text input "Mô tả khác" (full width, placeholder "Mô tả công việc khác...") — only visible when % Khác > 0

**Sample values:** % Dự án: 80 (disabled, auto-calc from 50+30), % Interview: 10, % Training: 5, % Presales: 5, % Khác: 0. Tổng: 100% (green).

### Support request

| Field | Type | Behavior |
| --- | --- | --- |
| Cần hỗ trợ? | Toggle switch | Label left "Cần hỗ trợ?", default OFF. Toggle style: gray OFF, #2563EB ON |
| Nội dung hỗ trợ | Textarea (3 rows) | Only visible when toggle ON. Placeholder: "Mô tả nội dung cần hỗ trợ..." Required when visible. |

### Week rating

- Label: "Đánh giá tuần này" (14px, #374151)
- 5 star icons in a row (24px each). Click to rate 1-5. Filled stars: #EAB308 (yellow). Empty stars: #E5E7EB.
- Below stars: text label of selected rating
  - 1: "Rất tệ" (#DC2626)
  - 2: "Tệ" (#EA580C)
  - 3: "Bình thường" (#EAB308)
  - 4: "Tốt" (#16A34A)
  - 5: "Rất tốt" (#166534)

### Capacity status

- Label: "Khả năng tiếp nhận" (14px, #374151)
- 3 radio buttons horizontal:
  - "Available" — icon: green circle
  - "Full tải" — icon: yellow circle
  - "Quá tải" — icon: red circle
- Radio style: rounded pill buttons (border #E5E7EB, selected has colored border + light bg matching status color)

---

## Footer (sticky bottom)

- Sticky bar at bottom of page, white bg, border-top 1px solid #E5E7EB, padding 16px 24px.
- Right-aligned: "Submit báo cáo" primary button (bg #2563EB, white text, rounded 8px, padding 10px 24px, font 14px bold).
- Left of button: auto-save indicator "Đã tự động lưu lúc 14:32" (12px, #6B7280, icon ✓ green).

---

## States

**Empty state (no projects assigned):**
- Replace Section 2 with: centered message "Bạn chưa được phân bổ dự án nào. Liên hệ quản lý để được phân bổ." (14px, #6B7280). No submit button visible.

**Submitted state:**
- After submit success: show toast notification top-right "Đã submit báo cáo tuần thành công" (bg #DCFCE7, text #166534, icon ✓, auto-dismiss 5s).
- Submit button changes to "Đã submit ✓" (bg #16A34A, disabled style) for 3 seconds, then reverts to "Submit lại" (same primary style) allowing re-submission.

**Concurrent submit (merge):**
- When 2 BAs submit for the same project simultaneously, the system merges both inputs (does NOT overwrite).
- Show merge info toast: bg #EFF6FF, border-left 4px solid #2563EB, text #1E40AF, padding 12px 16px, top-right, auto-dismiss 6s. Icon: info circle. Text: "Báo cáo đã được ghi nhận. Nội dung của bạn và [Tên BA khác] đều được lưu."
- After merge, shared textarea fields display both entries separated by a divider:
  - Each entry prefixed: **[BA name — HH:mm]** (bold, #6B7280)
  - Divider: thin line `───` with 8px margin top/bottom
  - Example:
    ```
    [Nguyễn Văn A — 14:32]
    Hoàn thành review SRS module Payment...

    ───────────────────
    [Trần Thị B — 14:35]
    Đã update test case cho sprint 5...
    ```

---

## Tab 2: Báo cáo Presale

**Filter bar:**
- Left: Checkbox "Chỉ dự án của tôi" (14px, #374151). When checked, table only shows rows where "BA phụ trách" includes current logged-in user.
- Right (2 filters + button):
  - GEX filter dropdown (Tất cả GEX / GEX 1 / GEX 2 / GEX 3 / GEX 4)
  - Trạng thái filter dropdown (Tất cả / Đang thực hiện / Đã nộp / Thất bại / Thắng)
  - Button "Thêm Presale" — primary button style + icon "+"

**Table columns:**

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

**Note:** Column "Tóm tắt" (Summary) is NOT shown in table. It is only viewable/editable inside the Edit pop-up.

**Status badge colors:**
- Đang thực hiện: bg #DBEAFE, text #1E40AF
- Đã nộp: bg #DCFCE7, text #166534
- Thất bại: bg #FEE2E2, text #991B1B
- Thắng: bg #FEF9C3, text #854D0E

**Sample data (4 rows):**
- "Presale Project X" | GEX 1 | Fintech | 01/05/2025 | — | Đang thực hiện | Lê Văn C, Phạm D | Nguyễn PM A | 📎
- "Presale Project Y" | GEX 2 | E-commerce | 20/04/2025 | 05/05/2025 | Đã nộp | Phạm D | Trần PM B | 📎
- "Presale Project Z" | GEX 3 | Retail | 10/04/2025 | 25/04/2025 | Thắng | Hoàng E | Lê PM C | —
- "Presale Project W" | GEX 1 | Education | 05/04/2025 | 20/04/2025 | Thất bại | Nguyễn Văn A | Phạm PM D | 📎

**Behavior:**
- Click Edit → opens pop-up "Sửa Presale" (modal style same as UC-02)
- Click Delete → Confirm Delete pop-up (common component from UC-02)
- Click "Thêm Presale" → opens pop-up "Thêm Presale"
- Pagination bottom right "1-4 of 12"

### Pop-up: Thêm/Sửa Presale

Modal style same as UC-02. Max-width 640px.

**Form fields:**

| Field | Type | Placeholder | Required |
| --- | --- | --- | --- |
| Dự án * | Text input | "Nhập tên dự án presale" | Yes |
| GEX * | Dropdown | "Chọn GEX" (GEX 1 / GEX 2 / GEX 3 / GEX 4) | Yes |
| Domain * | Text input | "Nhập domain (VD: Fintech, E-commerce...)" | Yes |
| Ngày nhận * | Date picker | "dd/mm/yyyy" | Yes |
| Ngày nộp | Date picker | "dd/mm/yyyy" | No |
| Trạng thái * | Dropdown | "Chọn trạng thái" (Đang thực hiện / Đã nộp / Thất bại / Thắng) | Yes |
| Tóm tắt | Textarea (4 rows) | "Mô tả tóm tắt dự án presale..." | No |
| BA phụ trách * | Multi-select dropdown (searchable) | "Chọn BA" (can select multiple, show as tags) | Yes |
| PM phụ trách | Text input | "Nhập tên PM" | No |
| Tài liệu (Drive) | URL input | "Paste Google Drive link..." | No |

Footer: "Hủy" (secondary) + "Lưu" (primary), right-aligned.

---

## Do NOT include
- Save Draft button (auto-save handles this)
- File upload or attachment (except Drive link in Presale)
- Dark mode, notification bell
- Manager/DM view (they use UC-05 to view reports)
- Approval workflow or status tracking
