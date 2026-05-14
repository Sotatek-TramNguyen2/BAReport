# FRD — UC-05: Report View & AI Summarize

## 1. Tổng quan

| Field | Value |
| --- | --- |
| Module | UC-05 Report View & AI Summarize |
| Mục đích | Xem báo cáo tuần, AI tự động tóm tắt & đánh giá |
| Actors | DM (A-01), BAM (A-02), BAL (A-03), System/AI (A-05) |
| FRs covered | FR-25, FR-26, FR-27, FR-28, FR-29, FR-30, FR-31, FR-32 |

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
| BA | Text | Tên BA(s) đã report |
| Effort % | Number | Effort thực tế BA báo cáo |
| Kết quả tuần qua (Last Week) | Text | Nội dung text |
| Kế hoạch tuần tới (Next Week) | Text | Nội dung text |
| Risk & Blocker | Text | Nội dung text |
| Need Help | Badge | Có/Không |

**Hành vi:**
- Search tên dự án (FR-32): filter realtime khi gõ
- Group by dự án khi nhiều BA cùng report 1 project
- Expandable row để xem full text

### 2.3 Tab: AI Report per project/GEX (FR-26, FR-27, FR-28, FR-29)

**Layout 2 sections xếp dọc:**

#### Section 1: AI Report tổng hợp cho GEX (trên cùng) — FR-28

**Hiển thị dạng Executive Summary:**

```
🔥 High-Priority Risks (Dự án/Task Đỏ)
- [Tên Dự án] — [Vấn đề cốt lõi]
- ...

⚠️ Potential Risks (Dự án/Task Vàng)
- [Tên Dự án] — [Vấn đề tiềm ẩn]
- ...

🚑 Member Health Check
- Overloaded: [Danh sách BA]
- Bad week (Rating 1-2): [Danh sách BA]
- Cần hỗ trợ: [Danh sách BA]
```

#### Section 2: AI Report chi tiết từng dự án (bên dưới) — FR-26, FR-27, FR-29

**Mỗi dự án hiển thị 1 card:**

| Field | Mô tả | Nguồn AI |
| --- | --- | --- |
| Project/Task | Tên dự án | Master Data |
| BA in Charge | Danh sách BA | Master Data |
| Đánh giá | RED / YELLOW / GREEN badge | AI keyword analysis (FR-27) |
| Key Achievements | Tóm tắt kết quả tuần qua (2-3 dòng) | AI từ "Last Week" + "Summary" |
| Next Steps | Tóm tắt kế hoạch tuần tới | AI từ "Next Week" |
| Key Blocker | Rủi ro cốt lõi hoặc "Không có" | AI từ "Risk & Blocker" |
| Effort Validation | ✅ Logical / ⚠️ Anomaly Alert | AI cross-check (FR-29) |

**Effort Validation detail (FR-29):**

| Trạng thái | Điều kiện |
| --- | --- |
| ✅ Logical | Effort % tương xứng với khối lượng text mô tả |
| ⚠️ Cao bất thường | Effort 80-100% nhưng mô tả công việc ít/đơn giản |
| ⚠️ Thấp bất thường | Effort 10-20% nhưng mô tả công việc nhiều/phức tạp |
| ⚠️ Chênh lệch với Quản lý | Effort BA tự báo cáo khác effort được phân bổ trong M-02 |

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
| Last Week (text) | Weekly Report Submission |
| Next Week (text) | Weekly Report Submission |
| Risk & Blocker (text) | Weekly Report Submission |
| Effort % (number) | Weekly Report Submission |
| Effort phân bổ (number) | Project Management (M-02) |
| Project Summary | Project Management (M-02) |
| End Date | Project Management (M-02) |

### 3.3 Tiêu chí đánh giá RED/YELLOW/GREEN (FR-27)

| Mức | Keywords / Signals |
| --- | --- |
| 🔴 RED | "sai logic", "miss requirement", "khách hàng phàn nàn", "bug nghiêm trọng", blocker không thể tự giải quyết, quá End Date |
| 🟡 YELLOW | "miss edge cases", "sửa lại nhiều lần", "delay response", "chậm trễ", tiến độ chệch nhẹ |
| 🟢 GREEN | Không có risk, output rõ ràng, kết quả khớp kế hoạch, team không phàn nàn |

### 3.4 AI Output Format

**Per project:**
```
- Project/Task: [Tên] — BA in Charge: [Tên BA]
- Key Achievements: [2-3 dòng tóm tắt]
- Next Steps: [1-2 dòng]
- Key Blocker: [Rút trích hoặc "Không có"]
```

**Per GEX:**
```
- 🔥 High-Priority Risks: [List dự án RED]
- ⚠️ Potential Risks: [List dự án YELLOW]
- 🚑 Member Health Check: [Overloaded / Bad week / Cần hỗ trợ]
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
| BR-23 | RED đánh giá → tự động xuất hiện trong Dashboard Risk Tracking |
| BR-24 | Effort Anomaly chỉ là cảnh báo, không block BA submit |
| BR-25 | Presale Report là manual entry bởi Quản lý, không liên quan AI |

## 5. Phân quyền

| Actor | Quyền |
| --- | --- |
| DM, BAM, BAL | View tất cả tabs, CRUD Presale Report |
| BA Member | Không truy cập module này (xem report qua Dashboard) |
