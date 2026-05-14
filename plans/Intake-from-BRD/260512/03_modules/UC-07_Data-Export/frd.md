# FRD — UC-07: Data Export

## 1. Tổng quan

| Field | Value |
| --- | --- |
| Module | UC-07 Data Export |
| Mục đích | Xuất dữ liệu báo cáo ra Excel/CSV để backup hoặc migrate |
| Actors | DM (A-01), BAM (A-02), BAL (A-03) |
| FRs covered | FR-36, FR-37 |

## 2. Chức năng Export (FR-36, FR-37)

### 2.1 Vị trí nút Export

- Trong Report View (UC-05), tab "Manually Weekly Report" → nút "Export"
- Trong Dashboard → nút "Export All"

### 2.2 Options khi export

| Option | Type | Mô tả |
| --- | --- | --- |
| Format | Radio | Excel (.xlsx) / CSV (.csv) |
| Phạm vi GEX | Multi-select | GEX1, GEX2, GEX3, GEX4, All |
| Phạm vi tuần | Date range | Từ tuần X đến tuần Y |

### 2.3 Cấu trúc file export (RAW format)

**Giữ đúng chuẩn format hiện tại (Google Sheets):**

| Cột | Mô tả |
| --- | --- |
| Timestamp | Thời điểm submit |
| Email | Email BA |
| Division | GEX |
| Tuần | W{x} M{y} |
| Tên dự án | Project name |
| Effort % | Số |
| Kết quả tuần qua | Text |
| Kế hoạch tuần tới | Text |
| Risk & Blocker | Text |
| Cần hỗ trợ | Có/Không |
| Nội dung hỗ trợ | Text |
| Week Rating | 1-5 |
| Khả năng tiếp nhận | Available/Full/Quá tải |

## 3. Quy tắc nghiệp vụ

| ID | Rule |
| --- | --- |
| BR-30 | Chỉ Quản lý (DM, BAM, BAL) được export |
| BR-31 | File export phải giữ đúng cấu trúc cột như Google Sheets hiện tại |
| BR-32 | Export async nếu data lớn (> 1000 rows), gửi link download khi xong |

## 4. Phân quyền

| Actor | Quyền |
| --- | --- |
| DM, BAM, BAL | Export |
| BA Member | Không có quyền export |
