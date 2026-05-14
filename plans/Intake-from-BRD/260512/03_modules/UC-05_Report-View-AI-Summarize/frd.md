# FRD — UC-05: Report View & AI Summarize

## 1. Tổng quan

| Field | Value |
| --- | --- |
| Module | UC-05 Report View & AI Summarize |
| Mục đích | Xem báo cáo tuần, AI tự động tóm tắt & đánh giá |
| Actors | DM (A-01), BAM (A-02), BAL (A-03), System/AI (A-05) |
| FRs covered | FR-25, FR-26, FR-27, FR-28, FR-31, FR-32 |

## 2. Màn hình & Layout

### 2.1 Cấu trúc navigation

**URL:** `/weekly-report`

**Filter bar (FR-31):**

| Filter | Type | Mô tả |
| --- | --- | --- |
| GEX | Dropdown | GEX1, GEX2, GEX3, GEX4, All |
| Tuần | Dropdown | Format W{x} M{y}, mặc định tuần hiện tại |

**3 tabs:**

| Tab | Mô tả |
| --- | --- |
| Manually Weekly Report | Báo cáo thô từ BA (per project) |
| AI Report | AI tóm tắt & đánh giá (per GEX + per project) |
| Presale Report | Báo cáo dự án Presales |

### 2.2 Tab: Manually Weekly Report per project (FR-25, FR-32)

**Hiển thị dạng bảng, mỗi row = 1 report entry:**

| Cột | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Dự án | Text | Tên dự án |
| GEX | Tag | GEX1-4 |
| Trạng thái | Badge | Status dự án hiện tại |
| Kết quả tuần qua | Text | Nội dung text |
| Kế hoạch tuần tới | Text | Nội dung text |
| Risk & Blocker | Text | Nội dung text |
| Cần hỗ trợ | Text | Nếu có: ghi rõ nội dung yêu cầu hỗ trợ. Nếu không: "Không" |

**Filter:**
- GEX filter (GEX 1 / GEX 2 / GEX 3 / GEX 4, không có "Tất cả", default GEX 1)
- Trạng thái dự án filter (multi-select)
- Search tên dự án (FR-32): filter realtime khi gõ

**Hành vi:**
- Group by dự án khi nhiều BA cùng report 1 project
- Expandable row để xem full text

### 2.3 Tab: AI Report per project/GEX (FR-26, FR-27, FR-28)

**Layout 2 sections xếp dọc:**

#### Section 1: Tóm tắt báo cáo BA của GEX [xx] (trên cùng) — FR-28

**Hiển thị dạng Executive Summary:**

```
🔥 Risk nghiêm trọng
- [Tên Dự án] — [Vấn đề cốt lõi]
- ...

⚠️ Có khả năng ảnh hưởng
- [Tên Dự án] — [Vấn đề tiềm ẩn]
- ...
```

#### Section 2: Dự án không báo cáo

Danh sách các dự án thuộc GEX đang active nhưng không có BA nào submit report tuần này.

#### Section 3: AI Report chi tiết từng dự án (bên dưới) — FR-26, FR-27

**Mỗi dự án hiển thị 1 card:**

| Field | Mô tả | Nguồn AI |
| --- | --- | --- |
| Dự án | Tên dự án | Master Data |
| BA phụ trách | Danh sách BA | Master Data |
| Tóm tắt AI | Tóm tắt tổng hợp từ Kết quả tuần qua + Kế hoạch tuần tới + Risk & Blocker + Cần hỗ trợ (2-4 dòng, không chia nhỏ) | AI gen |

**Lưu ý:** AI tóm tắt toàn bộ nội dung báo cáo thành 1 đoạn văn ngắn gọn, KHÔNG chia thành Key Achievements / Next Steps / Key Blocker riêng biệt. Không có Effort Validation.

### 2.4 Tab: Presale Report (FR-30, FR-32)

**Hiển thị dạng bảng:**

| Cột | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Project | Text | Tên dự án presales |
| Received Date | Date | Ngày nhận |
| Submission Date | Date | Ngày nộp |
| Status | Dropdown | In Progress / Submitted / Lost / Won |
| Summary | Text | Tóm tắt |
| BA in Charge | Text | BA phụ trách |
| PM in Charge | Text | PM phụ trách |

**Hành vi:**
- Search tên dự án (FR-32)
- Quản lý (DM, BAM, BAL) có thể thêm/sửa entry
- Sort mặc định: Received Date mới nhất lên trên

## 3. AI Engine Specification

### 3.1 Trigger

- AI chạy tự động sau khi có BA submit report (không cần BAL duyệt)
- Re-generate khi có BA submit thêm/sửa trong cùng tuần

### 3.2 Input cho AI

| Data | Nguồn |
| --- | --- |
| Kết quả tuần qua (text) | Weekly Report Submission |
| Kế hoạch tuần tới (text) | Weekly Report Submission |
| Risk & Blocker (text) | Weekly Report Submission |
| Cần hỗ trợ (text) | Weekly Report Submission |
| Project Summary | Project Management (M-02) |
| End Date | Project Management (M-02) |

### 3.3 Tiêu chí đánh giá (FR-27)

| Mức | Keywords / Signals |
| --- | --- |
| 🔥 Risk nghiêm trọng | "sai logic", "miss requirement", "khách hàng phàn nàn", "bug nghiêm trọng", blocker không thể tự giải quyết, quá End Date |
| ⚠️ Có khả năng ảnh hưởng | "miss edge cases", "sửa lại nhiều lần", "delay response", "chậm trễ", tiến độ chệch nhẹ |

**Lưu ý:** Không còn badge RED/YELLOW/GREEN trên từng card dự án. Tiêu chí chỉ dùng để phân loại dự án vào section "Risk nghiêm trọng" hoặc "Có khả năng ảnh hưởng" trong Executive Summary.

### 3.4 AI Output Format

**Per project (tóm tắt tổng hợp):**
```
- Dự án: [Tên] — BA phụ trách: [Tên BA]
- Tóm tắt: [2-4 dòng tổng hợp từ Kết quả + Kế hoạch + Risk + Cần hỗ trợ]
```

**Per GEX (executive summary):**
```
- 🔥 Risk nghiêm trọng: [List dự án có vấn đề nghiêm trọng]
- ⚠️ Có khả năng ảnh hưởng: [List dự án có rủi ro tiềm ẩn]
```

### 3.5 AI Model Configuration

| Config | Value |
| --- | --- |
| Provider | API bên thứ 3 (ưu tiên tiết kiệm) |
| Data privacy | Không gửi tên khách hàng thật, chỉ gửi nội dung report |
| Fallback | Nếu AI fail → hiển thị "AI đang xử lý, vui lòng thử lại sau" |
| Cache | Cache AI result per GEX per week, invalidate khi có report mới |

## 4. Quy tắc nghiệp vụ

| ID | Rule |
| --- | --- |
| BR-21 | AI generate ngay sau BA submit, không cần approval |
| BR-22 | AI report được cache theo tuần + GEX, invalidate khi có submit mới |
| BR-23 | Dự án có risk nghiêm trọng → tự động xuất hiện trong Dashboard Risk Tracking |
| BR-24 | Dự án active không có report tuần này → hiển thị trong section "Dự án không báo cáo" |
| BR-25 | Presale Report đã chuyển sang UC-04 |

## 5. Phân quyền

| Actor | Quyền |
| --- | --- |
| DM, BAM, BAL | View tất cả tabs |
| BA Member | Không truy cập module này (xem report qua Dashboard) |
