# Requirements Backbone — BA Weekly Reporting System

## 1. Mục tiêu kinh doanh (Business Goals)

| ID | Mục tiêu | Đo lường |
| --- | --- | --- |
| G-01 | Tập trung hóa quy trình báo cáo tuần BA | 100% BA submit qua hệ thống, loại bỏ Google Sheets |
| G-02 | Phân quyền rõ ràng theo RBAC | Mỗi role chỉ truy cập đúng chức năng được phép |
| G-03 | Tối ưu quản lý nguồn lực | Phát hiện Overloaded/Available trong vòng 1 tuần |
| G-04 | AI tự động phân tích & đánh giá | Giảm 80% thời gian quản lý đọc report thủ công |

## 2. Tác nhân (Actors)

| ID | Actor | Mô tả | Quyền chính |
| --- | --- | --- | --- |
| A-01 | Division Manager (DM) | Quản lý cấp cao, xem toàn bộ GEX | Full view, setup projects, setup resources |
| A-02 | BA Manager (BAM) | Quản lý BA, điều phối nguồn lực | Full view, setup projects, setup resources |
| A-03 | BA Lead (BAL) | Lead nhóm BA, đánh giá chất lượng | Full view, đánh giá Quality/Progress/Efforts, setup projects |
| A-04 | BA Member | Nhân viên BA, điền báo cáo | Submit report, view dashboard, view own reports |
| A-05 | System (AI Engine) | Hệ thống AI tự động | Đọc RAW data, generate report, cross-check effort |

## 3. Modules

| ID | Module | Mô tả | Actors chính |
| --- | --- | --- | --- |
| UC-01 | Dashboard | Tổng quan tình hình báo cáo & sức khỏe dự án | A-01, A-02, A-03, A-04 |
| UC-02 | Project Management | Khởi tạo & quản lý Master Data dự án | A-01, A-02, A-03 |
| UC-03 | Resource Management | Quản lý nhân sự BA & phân bổ effort | A-01, A-02, A-03 |
| UC-04 | Weekly Report Submission | BA điền & submit báo cáo tuần | A-03, A-04 |
| UC-05 | Report View & AI Summarize | Xem báo cáo, AI tóm tắt & đánh giá | A-01, A-02, A-03, A-05 |
| UC-06 | Authentication & Authorization | SSO Google Workspace + RBAC | Tất cả |
| UC-07 | Data Export | Xuất dữ liệu ra Excel/CSV | A-01, A-02, A-03 |

## 4. Yêu cầu chức năng (Functional Requirements)

### UC-01: Dashboard

| ID | Yêu cầu | Priority | Trace |
| --- | --- | --- | --- |
| FR-01 | Hiển thị Division Metrics: số BA đã báo cáo / phải báo cáo, Progress %, danh sách BA chưa báo cáo — cho từng GEX | Must | G-01 |
| FR-02 | Click vào row GEX → điều hướng sang Weekly Report View với filter GEX tương ứng | Must | G-01 |
| FR-03 | Hiển thị Member Health Check: BA having a bad week (rating 1-2), BA cần hỗ trợ, BA quá tải | Must | G-03 |
| FR-04 | Hiển thị Risk Tracking (read-only): tổng hợp từ AI gen (RED/YELLOW) + rule BE (quá End Date → At risk) | Must | G-04 |

### UC-02: Project Management

| ID | Yêu cầu | Priority | Trace |
| --- | --- | --- | --- |
| FR-05 | CRUD dự án: Division (GEX), Name, Contract Type (ODC-T&M, Fixed Price), Summary, Country | Must | G-01 |
| FR-06 | Quản lý Timeline: Start Date, End Date | Must | G-03 |
| FR-07 | Quản lý Status: Research/Presale, Design, Development, Deployment, Maintenance, Pending | Must | G-01 |
| FR-08 | Gán BA vào dự án: chọn từ danh sách Resources, gán effort %, tick BA Lead | Must | G-03 |
| FR-09 | Bảng Phân bổ BA (matrix view): cột = dự án, hàng = BA, ô = effort % — nằm cùng level với tab List dự án (không trong màn edit detail), editable | Must | G-03 |
| FR-10 | Mọi người được view thông tin dự án, chỉ Quản lý (DM, BAM, BAL) được edit | Must | G-02 |

### UC-03: Resource Management

| ID | Yêu cầu | Priority | Trace |
| --- | --- | --- | --- |
| FR-11 | CRUD nhân sự BA: Tên, Email SSO, Division (GEX1-4), Rank (Intern/Fresher/Junior/Middle/Lead/Manager) | Must | G-03 |
| FR-12 | Tick trạng thái "Không cần báo cáo" + Ghi chú | Must | G-01 |
| FR-13 | Hiển thị effort được phân bổ vào từng dự án (ánh xạ từ M-02) | Must | G-03 |
| FR-14 | Cảnh báo nếu tổng effort dưới 70% hoặc trên 100% | Must | G-03 |
| FR-15 | Chỉ cấp Quản lý (DM, BAM, BAL) được truy cập module này | Must | G-02 |

### UC-04: Weekly Report Submission

| ID | Yêu cầu | Priority | Trace |
| --- | --- | --- | --- |
| FR-16 | Auto-map dự án được phân bổ theo account đăng nhập (1 account có thể tham gia dự án của GEX khác), hiển thị tuần báo cáo hiện tại | Must | G-01 |
| FR-17 | Chọn dự án từ dropdown Master Data (từ M-02) | Must | G-01 |
| FR-18 | Điền: Effort thực tế (%), Kết quả tuần qua (text), Kế hoạch tuần tới (text), Risk & Blocker (text) | Must | G-01 |
| FR-19 | Auto-fill từ tuần trước: Effort, Kế hoạch tuần trước → Kết quả tuần này, Risk & Blocker | Must | G-01 |
| FR-20 | Nhiều BA cùng report cho 1 dự án, chỉnh sửa cùng field (last-write-wins) | Must | G-01 |
| FR-21 | Phân bổ nguồn lực (optional): % cho Dự án/Interview/Training/Presales/Khác | Should | G-03 |
| FR-22 | Điền: Cần hỗ trợ (Có/Không + nội dung), Week Rating (1-5), Khả năng tiếp nhận (Available/Full/Quá tải) | Must | G-03 |
| FR-24 | Auto-fill phân bổ nguồn lực từ tuần trước nếu BA không điền | Should | G-01 |

### UC-05: Report View & AI Summarize

| ID | Yêu cầu | Priority | Trace |
| --- | --- | --- | --- |
| FR-25 | Tab "Manually Weekly Report per project": hiển thị report từng dự án — Project, Effort %, Last Week, Next Week, Risk & Blocker, Need Help | Must | G-01 |
| FR-26 | Tab "AI Report per project/GEX": 2 sections — trên cùng: AI report tổng hợp cho GEX; bên dưới: AI report chi tiết từng dự án (tóm tắt tiến độ theo format Project Progress Summary: Key Achievements, Next Steps, Key Blocker) | Must | G-04 |
| FR-27 | AI đề xuất đánh giá RED/YELLOW/GREEN cho từng BA/dự án dựa trên keyword analysis | Must | G-04 |
| FR-28 | AI tạo GEX Risk & Health Summary: High-Priority Risks, Potential Risks, Member Health Check | Must | G-04 |
| FR-29 | AI Effort Validation Cross-check: so sánh effort % vs khối lượng text mô tả → Logical / Anomaly Alert | Should | G-04 |
| FR-30 | Tab "Presale Report": Project, Received Date, Submission Date, Status (In Progress/Submitted/Lost/Won), Summary, BA in Charge, PM in Charge | Must | G-01 |
| FR-31 | Filter theo GEX, theo tuần (format W{x} M{y}) | Must | G-01 |
| FR-32 | Search tên dự án trong mỗi tab | Should | G-01 |

### UC-06: Authentication & Authorization

| ID | Yêu cầu | Priority | Trace |
| --- | --- | --- | --- |
| FR-33 | Đăng nhập qua Google Workspace SSO (email công ty SotaTek) | Must | G-02 |
| FR-34 | Phân quyền RBAC: map email → role trong Master Data Resources | Must | G-02 |
| FR-35 | BA Member không thể truy cập chức năng của DM/BAM (Setup Resources) | Must | G-02 |

### UC-07: Data Export

| ID | Yêu cầu | Priority | Trace |
| --- | --- | --- | --- |
| FR-36 | Xuất dữ liệu báo cáo ra Excel/CSV đúng chuẩn RAW format hiện tại | Must | G-01 |
| FR-37 | Chỉ Quản lý (DM, BAM, BAL) được export | Should | G-02 |

## 5. Yêu cầu phi chức năng (Non-Functional Requirements)

| ID | Yêu cầu | Category | Priority |
| --- | --- | --- | --- |
| NFR-01 | Responsive trên PC và Mobile (BA thường report cuối ngày/cuối tuần) | Usability | Must |
| NFR-02 | AI sử dụng LLM qua API an toàn, cam kết NDA, không dùng data để public train | Security | Must |
| NFR-06 | Dữ liệu backup hàng ngày, retention 90 ngày | Reliability | Should |

## 6. Phạm vi loại trừ (Out of Scope)

- Quản lý dự án đầy đủ (PM tool — Jira/Asana)
- Chat / Communication
- Timesheet chi tiết (chỉ effort %)
- Performance review / KPI cá nhân
- Notification system (email/Slack) — phase sau
- Presales High-win prediction (đã bỏ)

## 7. Giả định đã chấp nhận (Accepted Assumptions)

| ID | Giả định | Nguồn |
| --- | --- | --- |
| ASM-01 | Hệ thống nội bộ SotaTek, 4 GEX, ~30 BA + 4 BAL + 2 BAM + 6 DM | PO confirm |
| ASM-02 | Mỗi BA thuộc đúng 1 Division | BRD |
| ASM-03 | Tuần báo cáo theo format W{x} M{y} | BRD |
| ASM-04 | Multi-edit conflict: last-write-wins | PO confirm |
| ASM-05 | AI xử lý ngay sau BA submit, không cần BAL duyệt trước | PO confirm |
| ASM-06 | Risk baseline = End Date khi khởi tạo dự án; quá End Date → báo risk | PO confirm |
| ASM-07 | AI model: ưu tiên giải pháp dễ & tiết kiệm nhất (API bên thứ 3) | PO confirm |
| ASM-08 | MVP deadline: 20/05/2026 | PO confirm |

## 8. Thuật ngữ (Glossary)

| Thuật ngữ | Định nghĩa |
| --- | --- |
| GEX | Khối tổ chức (GEX1, GEX2, GEX3, GEX4) |
| Division Metrics | Thống kê tiến độ báo cáo theo từng GEX |
| Week Rating | Điểm tự đánh giá tuần của BA (1-5) |
| Effort % | Tỷ trọng phân bổ công việc của BA vào dự án |
| RED/YELLOW/GREEN | Hệ thống đánh giá sức khỏe dự án do AI đề xuất |
| Anomaly Alert | Cảnh báo bất thường khi effort % không khớp khối lượng công việc mô tả |
| Last-write-wins | Cơ chế xử lý conflict: người save sau ghi đè |
