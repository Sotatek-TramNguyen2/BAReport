# FRD — UC-04: Weekly Report Submission

## 1. Tổng quan

| Field | Value |
| --- | --- |
| Module | UC-04 Weekly Report Submission |
| Mục đích | BA điền và submit báo cáo tuần cho các dự án được phân bổ |
| Actors | BAL (A-03), BA Member (A-04) |
| FRs covered | FR-16, FR-17, FR-18, FR-19, FR-20, FR-21, FR-22, FR-24 |

## 2. Màn hình & Layout

### 2.1 Màn hình Submit Report

**URL:** `/submit-report`

**Layout:** 2 sections chính

| Section | Mô tả |
| --- | --- |
| Thông tin chung | Email, Division (auto), Tuần báo cáo |
| Báo cáo theo dự án | Lặp lại cho mỗi dự án được phân bổ |
| Phân bổ nguồn lực | Optional, cuối form |

### 2.2 Section: Thông tin chung (FR-16)

| Field | Type | Behavior |
| --- | --- | --- |
| Email | Text (readonly) | Auto-fill từ SSO login |
| Division | Text (readonly) | Auto-fill từ Master Data Resources |
| Tuần báo cáo | Dropdown | Mặc định tuần hiện tại (format W{x} M{y}), có thể chọn tuần trước |

**Hành vi FR-16:**
- Hệ thống auto-load danh sách dự án mà BA được phân bổ (từ M-02)
- 1 BA có thể tham gia dự án của GEX khác → hiển thị tất cả dự án cross-GEX

### 2.3 Section: Báo cáo theo dự án (FR-17, FR-18, FR-19, FR-20)

**Lặp lại cho mỗi dự án BA được phân bổ:**

| Field | Type | Required | Auto-fill | Mô tả |
| --- | --- | --- | --- | --- |
| Tên dự án | Dropdown (readonly) | ✅ | Từ M-02 | Dự án BA được phân bổ |
| Trạng thái dự án | Tag (readonly) | — | Từ M-02 | Status hiện tại |
| Effort thực tế (%) | Number input | ✅ | Tuần trước | 0-100, bước 5% |
| Kết quả tuần qua | Textarea | ✅ | "Kế hoạch tuần tới" của tuần trước, hoặc nội dung BA khác đã điền | Text mô tả |
| Kế hoạch tuần tới | Textarea | ✅ | — | Text mô tả |
| Risk & Blocker | Textarea | ❌ | "Risk & Blocker" tuần trước | Text mô tả |

**Hành vi auto-fill (FR-19):**
1. Effort %: lấy giá trị tuần trước, nếu không có → để trống
2. Kết quả tuần qua: lấy "Kế hoạch tuần tới" của tuần trước. Nếu BA khác đã chỉnh sửa field này → lấy giá trị mới nhất (last-write-wins)
3. Risk & Blocker: lấy từ tuần trước, nếu không có → để trống

**Hành vi multi-BA (FR-20):**
- Nhiều BA cùng report cho 1 dự án
- Mỗi BA thấy cùng nội dung field (shared)
- Khi BA save → ghi đè giá trị hiện tại (last-write-wins)
- Không có lock mechanism hay conflict warning

### 2.4 Section: Phân bổ nguồn lực (FR-21, FR-22, FR-24)

**Optional section — nếu BA không điền → auto-fill từ tuần trước (FR-24)**

| Field | Type | Required | Mô tả |
| --- | --- | --- | --- |
| % Dự án | Number | ❌ | Phần trăm cho công việc dự án |
| % Interview | Number | ❌ | Phần trăm cho phỏng vấn |
| % Training | Number | ❌ | Phần trăm cho đào tạo |
| % Presales | Number | ❌ | Phần trăm cho presales |
| % Khác | Number | ❌ | Phần trăm cho việc khác |
| Mô tả "Khác" | Text input | Conditional | Bắt buộc nếu % Khác > 0 |
| Cần hỗ trợ? | Toggle (Có/Không) | ✅ | Default: Không |
| Nội dung hỗ trợ | Textarea | Conditional | Bắt buộc nếu Cần hỗ trợ = Có |
| Week Rating | Star rating (1-5) | ✅ | Điểm tự đánh giá tuần |
| Khả năng tiếp nhận | Radio | ✅ | Available / Full tải / Quá tải |

**Validation:**
- Tổng % (Dự án + Interview + Training + Presales + Khác) = 100% (soft warning nếu khác)

### 2.5 Nút hành động

| Nút | Hành vi |
| --- | --- |
| Submit | Validate → save tất cả → đánh dấu BA đã báo cáo tuần này |
| (Auto-save) | Mỗi field tự save khi blur/change (không có nút Save Draft riêng) |

## 3. Quy tắc nghiệp vụ

| ID | Rule |
| --- | --- |
| BR-15 | BA chỉ thấy dự án mình được phân bổ (từ M-02), cross-GEX |
| BR-16 | Auto-fill ưu tiên: data BA khác đã điền tuần này > data tuần trước > trống |
| BR-17 | Last-write-wins: không lock, không merge, người save sau ghi đè |
| BR-18 | Submit = đánh dấu BA đã hoàn thành báo cáo tuần (count vào Division Metrics) |
| BR-19 | BA có thể submit lại (overwrite) trong cùng tuần |
| BR-20 | Phân bổ nguồn lực auto-fill tuần trước nếu BA không thay đổi |

## 4. Phân quyền

| Actor | Quyền |
| --- | --- |
| BAL | Submit report cho dự án mình được phân bổ (giống BA Member) |
| BA Member | Submit report cho dự án mình được phân bổ |
| DM, BAM | Không submit (chỉ view qua M-05) |
