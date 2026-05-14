# FRD — UC-01: Dashboard

## 1. Tổng quan

| Field | Value |
| --- | --- |
| Module | UC-01 Dashboard |
| Mục đích | Cung cấp cái nhìn toàn cảnh về tình hình báo cáo tuần và sức khỏe dự án |
| Actors | DM (A-01), BAM (A-02), BAL (A-03), BA Member (A-04) |
| FRs covered | FR-01, FR-02, FR-03, FR-04 |

## 2. Màn hình & Layout

### 2.1 Dashboard chính

**URL:** `/dashboard`

**Layout:** 3 sections xếp dọc

| Section | Vị trí | Mô tả |
| --- | --- | --- |
| Division Metrics | Trên cùng | Bảng thống kê theo từng GEX |
| Member Health Check | Giữa | Cards cảnh báo nhân sự |
| Risk Tracking | Dưới cùng | Bảng theo dõi rủi ro |

### 2.2 Division Metrics (FR-01, FR-02)

**Hiển thị dạng bảng:**

| Cột | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| GEX | Text | GEX1, GEX2, GEX3, GEX4 |
| Số BA đã báo cáo | Number | Count BA đã submit trong tuần hiện tại |
| Số BA phải báo cáo | Number | Count BA active (không tick "Không cần báo cáo") |
| Progress % | Percentage | = Số BA đã báo cáo / Số BA phải báo cáo × 100 |
| BA chưa báo cáo | List | Danh sách tên BA chưa submit |

**Hành vi:**
- Mặc định hiển thị tuần hiện tại
- Click vào row GEX → điều hướng đến `/weekly-report?gex={gex_id}&week={current_week}` (FR-02)
- Progress % hiển thị progress bar với màu: < 50% đỏ, 50-80% vàng, > 80% xanh

### 2.3 Member Health Check (FR-03)

**Hiển thị dạng 3 cards:**

| Card | Điều kiện lọc | Dữ liệu hiển thị |
| --- | --- | --- |
| BA having a bad week | Week Rating = 1 hoặc 2 | Tên BA, GEX, Rating |
| BA cần hỗ trợ | Cần hỗ trợ = "Có" | Tên BA, GEX, Nội dung hỗ trợ |
| BA quá tải | Khả năng tiếp nhận = "Quá tải" | Tên BA, GEX, Tổng effort % |

**Hành vi:**
- Dữ liệu lấy từ Weekly Report Submission (M-04) của tuần hiện tại
- Mỗi card hiển thị badge count
- Nếu không có data → hiển thị "Không có cảnh báo"

### 2.4 Tổng quan dự án & nguồn lực

**2 biểu đồ cạnh nhau:**

**Biểu đồ 1: Tổng quan dự án theo trạng thái (Donut chart)**

| Segment | Nguồn |
| --- | --- |
| Research/Presale | Count dự án có Status = Research/Presale (UC-02) |
| Design | Count dự án có Status = Design |
| Development | Count dự án có Status = Development |
| Deployment | Count dự án có Status = Deployment |
| Maintenance | Count dự án có Status = Maintenance |
| Pending | Count dự án có Status = Pending |

- Tâm donut: tổng số dự án
- Legend: màu + label + count + %

**Biểu đồ 2: Tổng quan nguồn lực theo GEX (Horizontal stacked bar)**

| Segment | Điều kiện | Màu |
| --- | --- | --- |
| Quá tải | Tổng effort > 100% | Đỏ |
| Đúng effort | Tổng effort 70-100% | Xanh |
| Đang rảnh | Tổng effort < 70% | Vàng |

- Mỗi bar = 1 GEX, chia tỷ lệ số BA theo 3 trạng thái
- Dữ liệu lấy từ Resource Management (UC-03)

### 2.5 Risk Tracking (FR-04)

**Hiển thị dạng bảng (read-only — dữ liệu từ AI gen + rule BE):**

**Filter:** Dropdown GEX (All / GEX1 / GEX2 / GEX3 / GEX4)

| Cột | Kiểu dữ liệu | Nguồn |
| --- | --- | --- |
| Dự án | Text | Master Data (UC-02) |
| GEX | Tag | Master Data |
| Mức độ | Badge | "Nghiêm trọng" (red) hoặc "Rủi ro" (yellow) — từ AI Analysis (UC-05) |
| Risk từ BA | Text | Trường "Risk & Blocker" trong Weekly Report |

**Hành vi:**
- Chỉ hiển thị dự án có mức độ "Nghiêm trọng" hoặc "Rủi ro". KHÔNG hiển thị dự án healthy/GREEN
- Dữ liệu hoàn toàn tự động: lấy từ AI generated report (UC-05) + business rule (quá End Date → Nghiêm trọng)
- Không có inline edit — chỉ view
- Sort mặc định: "Nghiêm trọng" lên trên, rồi "Rủi ro"
- Filter theo GEX
- Click vào row → navigate đến báo cáo chi tiết dự án đó (UC-05)

## 3. Quy tắc nghiệp vụ

| ID | Rule |
| --- | --- |
| BR-01 | Progress % = COUNT(BA đã submit tuần X) / COUNT(BA active trong GEX) × 100 |
| BR-02 | BA active = BA không tick "Không cần báo cáo" trong Resource Management |
| BR-03 | "Nghiêm trọng" = RED từ AI hoặc Ngày hiện tại > End Date (AND Status không phải Maintenance/Pending) |
| BR-04 | Dashboard hiển thị data tuần hiện tại mặc định, có thể chọn tuần khác |
| BR-05 | Dropdown "Team" (mặc định: BA) — placeholder cho expansion sau MVP: QC, PM, BA. MVP chỉ có BA, các option khác disabled/coming soon |

## 4. Phân quyền

| Actor | Quyền |
| --- | --- |
| DM, BAM, BAL, BA Member | View only (tất cả sections) |
