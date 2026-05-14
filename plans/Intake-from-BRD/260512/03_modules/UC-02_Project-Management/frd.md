# FRD — UC-02: Project Management (Setup BA Projects)

## 1. Tổng quan

| Field | Value |
| --- | --- |
| Module | UC-02 Project Management |
| Mục đích | Khởi tạo, cập nhật Master Data dự án; quản lý phân bổ BA |
| Actors | DM (A-01), BAM (A-02), BAL (A-03), BA Member (A-04 — view only) |
| FRs covered | FR-05, FR-06, FR-07, FR-08, FR-09, FR-10 |

## 2. Màn hình & Layout

### 2.1 Cấu trúc navigation

**URL:** `/projects`

**2 tabs cùng level:**

| Tab | Mô tả |
| --- | --- |
| List dự án | Danh sách tất cả dự án, CRUD |
| Phân bổ BA | Bảng matrix effort toàn bộ |

### 2.2 Tab: List dự án (FR-05, FR-06, FR-07, FR-08, FR-10)

**Danh sách dạng bảng:**

| Cột | Kiểu dữ liệu | Editable | Mô tả |
| --- | --- | --- | --- |
| Tên dự án | Text | ✅ | Tên project |
| Division | Dropdown | ✅ | GEX1, GEX2, GEX3, GEX4 |
| Contract Type | Dropdown | ✅ | ODC - T&M, Fixed Price |
| Status | Dropdown | ✅ | Research/Presale, Design, Development, Deployment, Maintenance, Pending |
| Start Date | Date | ✅ | Ngày bắt đầu |
| End Date | Date | ✅ | Ngày kết thúc |
| Country | Text | ✅ | Quốc gia khách hàng |
| BA tham gia | List | ✅ | Danh sách BA + effort + tick Lead |

**Hành vi:**
- Nút "Thêm dự án" → mở form tạo mới
- Click row → mở màn Edit Detail
- Quản lý (DM, BAM, BAL) được CRUD; BA Member chỉ view

### 2.3 Form Edit Detail

**Sections:**

**A. Thông tin chung (FR-05, FR-06, FR-07)**

| Field | Type | Required | Validation |
| --- | --- | --- | --- |
| Tên dự án | Text input | ✅ | Max 200 ký tự, unique |
| Division | Dropdown | ✅ | GEX1-4 |
| Contract Type | Dropdown | ✅ | ODC - T&M / Fixed Price |
| Summary | Textarea | ❌ | Max 1000 ký tự |
| Country | Text input | ❌ | — |
| Start Date | Date picker | ✅ | — |
| End Date | Date picker | ✅ | >= Start Date |
| Status | Dropdown | ✅ | Enum: Research/Presale, Design, Development, Deployment, Maintenance, Pending |

**B. BA tham gia (FR-08)**

| Field | Type | Mô tả |
| --- | --- | --- |
| Chọn BA | Multi-select dropdown | Lấy từ danh sách Resources (M-03) |
| Effort % | Number input (per BA) | 0-100, bước 5% |
| Is Lead | Checkbox (per BA) | Tick BA nào là lead của dự án |

**Hành vi:**
- Khi thêm/sửa effort BA ở đây → tự động cập nhật sang tab Phân bổ BA (2 chiều sync)
- Khi xóa BA khỏi dự án → effort về 0, xóa khỏi bảng Phân bổ

### 2.4 Tab: Phân bổ BA (FR-09)

**URL:** `/projects?tab=allocation`

**Hiển thị dạng matrix:**

| | Dự án A | Dự án B | Dự án C | ... | Tổng |
| --- | --- | --- | --- | --- | --- |
| BA Nguyễn | 50% | 30% | — | | 80% |
| BA Trần | — | 40% | 60% | | 100% |
| BA Lê | 100% | — | — | | 100% |

**Cột:**
- Mỗi cột = 1 dự án (chỉ hiển thị dự án active, không Pending)
- Cột cuối = Tổng effort của BA đó

**Hàng:**
- Mỗi hàng = 1 BA (từ Resource Management)

**Ô:**
- Giá trị effort % (editable inline bởi Quản lý)
- Ô trống = BA không tham gia dự án đó
- Khi edit ô → sync ngược về Edit Detail của dự án tương ứng

**Cảnh báo:**
- Tổng effort < 70% → highlight vàng
- Tổng effort > 100% → highlight đỏ

**Filter:**
- Filter theo GEX
- Filter theo BA (search tên)

## 3. Quy tắc nghiệp vụ

| ID | Rule |
| --- | --- |
| BR-05 | Effort % trong Edit Detail và Phân bổ BA phải sync 2 chiều real-time |
| BR-06 | End Date >= Start Date (validation khi save) |
| BR-07 | Tên dự án phải unique trong hệ thống |
| BR-08 | Mỗi dự án có tối đa 1 BA Lead (tick Is Lead) — nhưng có thể không có |
| BR-09 | Dự án status = Pending không hiển thị trong bảng Phân bổ BA |

## 4. Phân quyền

| Actor | Quyền |
| --- | --- |
| DM, BAM, BAL | CRUD dự án, edit Phân bổ BA |
| BA Member | View only (cả 2 tabs) |
