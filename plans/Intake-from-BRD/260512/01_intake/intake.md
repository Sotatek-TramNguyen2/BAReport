# Phiếu tiếp nhận yêu cầu (Intake Form)

## Thông tin dự án (Project Information)

| Trường (Field) | Giá trị (Value) |
| --- | --- |
| Tên dự án (Project name) | Hệ thống Quản lý và Báo cáo Tuần BA (BA Weekly Reporting System) |
| Ngày (Date) | 2026-05-12 |
| Người yêu cầu (Requester) | Trâm (Sofia) Nguyễn |
| Tài liệu gốc (Source file) | raw/BRD - BA Weekly Reporting System.md |

## Bối cảnh kinh doanh (Business Context)

### Vấn đề cần giải quyết (Problem Statement)

Quy trình báo cáo tuần hiện tại của đội BA đang sử dụng Google Sheets/Forms — thủ công, phân tán, dễ sai sót. Thiếu công cụ tập trung để theo dõi tiến độ, quản lý nguồn lực, và giám sát chất lượng dự án trên 4 khối GEX.

### Mục tiêu kinh doanh (Business Goals)

1. **Tự động hóa & Tập trung hóa:** Chuyển toàn bộ quy trình thu thập báo cáo tuần lên một nền tảng duy nhất, giảm sai sót thủ công.
2. **Quản trị Phân quyền (RBAC):** Đảm bảo luồng công việc rõ ràng giữa DM, BAM, BAL và BA Member.
3. **Tối ưu Quản lý Nguồn lực:** Theo dõi trạng thái Overloaded / Available / Cần hỗ trợ, điều phối chéo giữa các GEX.
4. **AI-Driven Insights:** AI đọc hiểu báo cáo text, đưa ra đánh giá RED/YELLOW/GREEN, tóm tắt risk và cross-check effort.

### Các bên liên quan (Stakeholders Mentioned)

| Tên / Vai trò | Mức quan tâm / Ảnh hưởng | Ghi chú |
| --- | --- | --- |
| Division Manager (DM) | Cao / Cao | Xem báo cáo tổng hợp toàn GEX, nhận Executive Summary |
| BA Manager (BAM) | Cao / Cao | Quản lý nguồn lực, xem AI report |
| BA Lead (BAL) | Cao / Trung bình | Theo dõi sát BA member, đánh giá Quality/Progress/Efforts |
| BA Member | Trung bình / Thấp | Người dùng cuối, điền báo cáo tuần |

## Yêu cầu thô (Raw Requirements)

1. Dashboard tổng quan: Division Metrics (số BA đã/chưa báo cáo, progress %), Member Health Check, Risk Tracking.
2. Setup BA Projects: Quản lý thông tin dự án (Project Info, Timeline, Status, BA tham gia, Phân bổ BA effort).
3. Setup Resources: Quản lý danh sách nhân sự BA (Member Info, Status, Effort phân bổ, cảnh báo dưới 70% hoặc trên 100%).
4. Weekly Report View: Manually Report + AI Generated Report (per project) + AI Generated Report (per GEX) + Manual Report Presales.
5. Submit Weekly Report (BA Member): Thông tin chung, Tạo báo cáo (nhiều dự án), Phân bổ Nguồn lực (optional, auto-fill tuần trước).
6. AI Generated Report: Tóm tắt tiến độ, Đánh giá RED/YELLOW/GREEN, Risk & Health Summary cấp GEX, Effort Validation Cross-check.
7. Authentication via Google Workspace (Email công ty).
8. Responsive design (PC + Mobile).
9. Data Export ra Excel/CSV.

## Màn hình và giao diện (Screens and UI)

| Màn hình / Thành phần | Mô tả | Ghi chú |
| --- | --- | --- |
| Dashboard Tổng quan | Division Metrics, Member Health Check, Risk Tracking | Chung cho Quản lý và BA |
| Setup BA Projects | Tab Thông tin chung + Tab Phân bổ BA (bảng matrix effort) | Mọi người view, Quản lý edit |
| Setup Resources | Danh sách nhân sự BA, effort phân bổ, cảnh báo | Chỉ Quản lý view |
| Weekly Report View | 3 tabs: Manually Weekly Report per project, AI Report per project/GEX, Presale Report | Filter theo GEX, theo tuần |
| Submit Weekly Report | Form điền báo cáo tuần cho BA Member | Hỗ trợ Save Draft, auto-fill |
| Bảng Phân bổ BA | Matrix: cột = dự án, hàng = BA, ô = effort % | Trong Setup BA Projects |

## Quy trình và luồng công việc (Processes and Workflows)

| Quy trình / Luồng | Mô tả | Ghi chú |
| --- | --- | --- |
| Báo cáo tuần (Weekly Reporting) | BA điền report → Lưu nháp → Submit → Quản lý xem tổng hợp | Nhiều BA cùng report 1 dự án, chỉnh sửa cùng field |
| AI Analysis Pipeline | Thu thập RAW data → AI đọc & phân tích → Tạo Summary + Đánh giá + Cross-check | Tự động sau khi BA submit |
| Quản lý nguồn lực | Setup Resources → Phân bổ effort vào dự án → Cảnh báo bất thường | Quản lý thao tác |
| Risk Tracking | Lấy từ BA report + Đánh giá Lead + Tiến độ so với khởi tạo → Hiển thị Dashboard | Tổng hợp đa nguồn |

## Ràng buộc và giả định (Constraints and Assumptions)

### Ràng buộc (Constraints)

- Phải tích hợp Google Workspace SSO (email công ty SotaTek)
- AI phải đảm bảo bảo mật dữ liệu khách hàng (NDA), không dùng data để public train
- Responsive trên PC và Mobile
- Xuất dữ liệu phải đúng chuẩn RAW format hiện tại

### Giả định (Assumptions)

- Hệ thống phục vụ nội bộ SotaTek, 4 khối GEX (GEX1-GEX4)
- Mỗi BA thuộc đúng 1 Division
- Master Data dự án được quản lý tập trung, BA chọn từ dropdown
- Tuần báo cáo theo format W{x} M{y}

## Tuân thủ và quy định (Compliance and Regulatory Needs)

- Bảo mật dữ liệu khách hàng (NDA compliance)
- Không sử dụng dữ liệu dự án để train AI công khai
- Phân quyền chặt chẽ theo RBAC (BA không truy cập tính năng DM)

## Quyết định đã lock (Scope Decisions)

| Quyết định | Giá trị |
| --- | --- |
| Ngôn ngữ output | Tiếng Việt |
| Out-of-scope | PM tool đầy đủ, Chat/Communication, Timesheet chi tiết, Performance review/KPI cá nhân |
| Multi-edit conflict | Last-write-wins |
| Notification system | Chưa cần cho MVP (phase sau) |

## Câu hỏi mở còn lại (Remaining Open Questions) — Đã trả lời

| # | Câu hỏi | Trả lời |
| --- | --- | --- |
| 1 | Ai là Product Owner? | Trâm (Sofia) Nguyễn |
| 2 | Số lượng BA trên 4 GEX? | 30 BA, 4 BAL, 2 BAM, 6 DM |
| 3 | Deadline MVP? | 20/05/2026 |
| 4 | AI model? | Ưu tiên giải pháp dễ và tiết kiệm nhất (đề xuất: API bên thứ 3 — Claude/GPT) |
| 5 | Baseline Risk Tracking? | Dựa vào End Date khi khởi tạo dự án — quá End Date thì báo risk |
| 6 | Presales High-win prediction? | Bỏ tính năng này khỏi scope |
| 7 | BAL duyệt report trước AI? | Không — AI xử lý ngay sau khi BA submit |

## Ghi chú phân tích (Parsing Notes)

- BRD có tham chiếu 3 ảnh (Aspose.Words images) nhưng không thể đọc nội dung ảnh — cần xem ảnh gốc để hiểu UI reference đầy đủ.
- Phần "Thao khảo UI này" (typo: Tham khảo) chứa mockup nhưng chỉ có placeholder image path.
- Contract Type liệt kê "ODC - T&M, Fixed Price" — chỉ là metadata, không ảnh hưởng logic báo cáo.
- Cơ chế conflict resolution khi nhiều BA cùng chỉnh sửa 1 field: last-write-wins (đã lock).
