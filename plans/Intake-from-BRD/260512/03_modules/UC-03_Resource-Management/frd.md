# FRD — UC-03: Resource Management (Setup Resources)

## 1. Tổng quan

| Field | Value |
| --- | --- |
| Module | UC-03 Resource Management |
| Mục đích | Quản lý danh sách nhân sự BA, theo dõi effort phân bổ |
| Actors | DM (A-01), BAM (A-02), BAL (A-03) |
| FRs covered | FR-11, FR-12, FR-13, FR-14, FR-15 |

## 2. Màn hình & Layout

### 2.1 Danh sách Resources

**URL:** `/resources`

**Quyền truy cập:** Chỉ DM, BAM, BAL (FR-15). BA Member truy cập → redirect về Dashboard.

**Hiển thị dạng bảng:**

| Cột | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Tên | Text | Họ tên BA |
| Email | Text | Email SSO SotaTek |
| Division | Tag | GEX1, GEX2, GEX3, GEX4 |
| Rank | Tag | Intern / Fresher / Junior / Middle / Lead / Manager |
| Không cần báo cáo | Checkbox | Tick = BA không cần submit weekly report |
| Ghi chú | Text | Lý do không cần báo cáo hoặc ghi chú khác |
| Tổng Effort | Percentage | Tổng effort % được phân bổ (từ M-02) |
| Trạng thái Effort | Badge | Cảnh báo dựa trên tổng effort |

### 2.2 Form Thêm/Sửa Resource (FR-11, FR-12)

| Field | Type | Required | Validation |
| --- | --- | --- | --- |
| Tên | Text input | ✅ | Max 100 ký tự |
| Email | Email input | ✅ | Phải là @sotatek.com, unique |
| Division | Dropdown | ✅ | GEX1, GEX2, GEX3, GEX4 |
| Rank | Dropdown | ✅ | Intern / Fresher / Junior / Middle / Lead / Manager |
| Không cần báo cáo | Checkbox | ❌ | Default: unchecked |
| Ghi chú | Textarea | ❌ | Max 500 ký tự |

### 2.3 Hiển thị Effort phân bổ (FR-13, FR-14)

**Trong row mỗi BA, expand để xem chi tiết:**

| Dự án | Effort % | Role |
| --- | --- | --- |
| Project Alpha | 50% | Lead |
| Project Beta | 30% | Member |
| **Tổng** | **80%** | |

**Cảnh báo (FR-14):**

| Điều kiện | Hiển thị |
| --- | --- |
| Tổng effort < 70% | Badge vàng "Under-allocated" |
| Tổng effort = 70% - 100% | Badge xanh "OK" |
| Tổng effort > 100% | Badge đỏ "Overloaded" |

## 3. Quy tắc nghiệp vụ

| ID | Rule |
| --- | --- |
| BR-10 | Email phải unique trong hệ thống (dùng làm key cho SSO mapping) |
| BR-11 | BA tick "Không cần báo cáo" sẽ không được tính vào Division Metrics (Dashboard) |
| BR-12 | Effort phân bổ là read-only tại đây — edit tại M-02 (Project Management) |
| BR-13 | Khi xóa BA khỏi Resources → xóa khỏi tất cả dự án đang tham gia (confirm dialog) |
| BR-14 | Mỗi BA thuộc đúng 1 Division |

## 4. Phân quyền

| Actor | Quyền |
| --- | --- |
| DM, BAM, BAL | Full CRUD, view effort |
| BA Member | Không có quyền truy cập |
