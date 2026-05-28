Design a **Weekly Report Submission** page for the BA Weekly Reporting System. This page allows BA members to fill in and submit their weekly report for all assigned projects.

**Shared elements:** Sidebar, page structure, font, colors, card styles, table styles, dropdown styles, button styles — follow exactly as UC-01 Dashboard. Do NOT redefine these. Only "Weekly Report" nav item is active in sidebar.

---

## Header

- Left: Page title "Báo cáo tuần" (20px, bold, #111827)
- Right: Button "Submit" — primary button style (bg #2563EB, white text, rounded 8px, padding 8px 20px)

---

## Section 1: Thông tin chung

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
| % Dự án | 100px | "0" |
| % Interview | 100px | "0" |
| % Training | 100px | "0" |
| % Presales | 100px | "0" |
| % Khác | 100px | "0" |

- Right of the row: Total indicator "Tổng: 100%" (bold, green if = 100%, red if ≠ 100%)
- Below "% Khác": conditional text input "Mô tả khác" (full width, placeholder "Mô tả công việc khác...") — only visible when % Khác > 0

**Sample values:** % Dự án: 80, % Interview: 10, % Training: 5, % Presales: 5, % Khác: 0. Tổng: 100% (green).

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

---

## Do NOT include
- Save Draft button (auto-save handles this)
- File upload or attachment
- Dark mode, notification bell
- Manager/DM view (they use UC-05 to view reports)
- Approval workflow or status tracking