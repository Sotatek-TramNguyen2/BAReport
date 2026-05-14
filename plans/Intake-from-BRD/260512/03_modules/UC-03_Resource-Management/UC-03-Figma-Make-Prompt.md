# Figma Make Prompt — UC-03: Resource Management

## Instruction for Figma Make

Design a **Resource Management (Setup Resources)** page for the BA Weekly Reporting System. This page allows managers to manage BA personnel list and monitor effort allocation.

**Shared elements:** Sidebar, page structure, font, colors, card styles, table styles, dropdown styles, button styles — follow exactly as UC-01 Dashboard. Do NOT redefine these. Only "Resources" nav item is active in sidebar.

---

## Header

- Left: Page title "Quản lý nguồn lực" (20px, bold, #111827)
- Right: Button "Thêm BA" — primary button style (bg #2563EB, white text, rounded 8px, padding 8px 16px) + icon "+"

---

## Filter bar

- Left: Search input (placeholder "Tìm kiếm BA...", icon search, width 280px)
- Right (3 filters):
  - Division filter dropdown (Tất cả GEX / GEX 1 / GEX 2 / GEX 3 / GEX 4)
  - Rank filter dropdown (Tất cả / Intern / Fresher / Junior / Middle / Lead / Manager)
  - Trạng thái Effort filter dropdown (Tất cả / Under-allocated / OK / Overloaded)

---

## Table: Danh sách Resources

| Column | Width | Content |
| --- | --- | --- |
| Tên | 180px | Text, bold |
| Email | 200px | Text, color #6B7280 |
| Division | 80px | Tag badge (same style as UC-02) |
| Rank | 100px | Tag badge (bg #F3F4F6, text #374151, rounded 6px) |
| Không cần báo cáo | 130px | Checkbox (centered). Tick = BA excluded from weekly report |
| Ghi chú | 180px | Text, truncated with tooltip on hover |
| Tổng Effort | 100px | Percentage text + color coding |
| Trạng thái Effort | 130px | Colored badge |
| Actions | 80px | Edit (pencil) + Delete (trash) icons |

**Trạng thái Effort badge colors:**
- Under-allocated (< 70%): bg #FEF9C3, text #854D0E
- OK (70-100%): bg #DCFCE7, text #166534
- Overloaded (> 100%): bg #FEE2E2, text #991B1B

**Tổng Effort text color:**
- < 70%: #EAB308
- 70-100%: #16A34A
- > 100%: #DC2626

**Sample data (6 rows):**
- "Nguyễn Văn A" | nguyenvana@sotatek.com | GEX 1 | Middle | ☐ | — | 80% | OK (green)
- "Trần Thị B" | tranthib@sotatek.com | GEX 2 | Lead | ☐ | — | 100% | OK (green)
- "Lê Văn C" | levanc@sotatek.com | GEX 1 | Junior | ☐ | — | 50% | Under-allocated (yellow)
- "Phạm D" | phamd@sotatek.com | GEX 3 | Middle | ☐ | — | 120% | Overloaded (red)
- "Hoàng E" | hoange@sotatek.com | GEX 4 | Fresher | ☑ | Đang onboard | 0% | Under-allocated (yellow)
- "Vũ F" | vuf@sotatek.com | GEX 2 | Senior | ☐ | — | 95% | OK (green)

**Behavior:**
- Click row → expand to show effort detail (see Expandable Row below)
- Click Edit icon → opens pop-up "Sửa BA" (same form as "Thêm BA", pre-filled)
- Click Delete icon → opens Confirm Delete pop-up (common component from UC-02)
- Pagination bottom right "1-6 of 30"

---

## Expandable Row: Effort Detail

When clicking a row, expand below that row to show effort breakdown:

- Background: #F9FAFB, border-left 3px solid #2563EB, padding 16px
- Mini table inside:

| Column | Content |
| --- | --- |
| Dự án | Project name, text |
| Effort % | Percentage |
| Role | "Lead" or "Member" badge |

- Last row bold: "Tổng" | total % | —
- If no project assigned: show "Chưa được phân bổ dự án" (14px, #9CA3AF, italic)

**Sample (for Nguyễn Văn A):**
| Dự án | Effort % | Role |
| --- | --- | --- |
| Dự án Alpha | 50% | Lead |
| Dự án Gamma | 30% | Member |
| **Tổng** | **80%** | |

---

## Pop-up: Thêm BA / Sửa BA

Centered modal overlay (same modal style as UC-02 "Sửa dự án"):
- Backdrop: black 50% opacity
- Modal: white bg, rounded 12px, shadow-xl, padding 24px, max-width 560px
- Header: "Thêm BA" or "Sửa BA" (18px, bold, #111827) + close (×) icon top-right

**Form fields (single column layout):**

| Field | Type | Placeholder | Required |
| --- | --- | --- | --- |
| Tên * | Text input | "Nhập họ tên" | Yes |
| Email * | Email input | "email@sotatek.com" | Yes |
| Division * | Dropdown | "Chọn GEX" | Yes |
| Rank * | Dropdown | "Chọn rank" | Yes |
| Không cần báo cáo | Checkbox | — | No |
| Ghi chú | Textarea (2 rows) | "Nhập ghi chú..." | No |

**Validation hints (shown below field on error):**
- Email must end with @sotatek.com — error text: "Email phải có đuôi @sotatek.com" (12px, #DC2626)
- Required fields empty — error text: "Trường này là bắt buộc"

**Footer:** "Hủy" (secondary) + "Lưu" (primary), right-aligned, gap 12px.

---

## Permission visual cues

- DM, BAM, BAL: full CRUD, view effort detail
- BA Member: no access — redirect to Dashboard (do not design this state)

---

## Do NOT include
- Inline editing of effort (effort is managed in UC-02 Project Management)
- Import/export buttons, bulk actions
- Dark mode, notification bell
- Drag-and-drop reordering
