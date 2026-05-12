# Phiếu tiếp nhận yêu cầu (Intake Form)

## Thông tin dự án (Project Information)

| Trường (Field) | Giá trị (Value) |
| --- | --- |
| Tên dự án (Project name) | Hệ thống Quản lý và Báo cáo Tuần BA (BA Weekly Reporting System) |
| Ngày (Date) | 2026-05-12 |
| Người yêu cầu (Requester) | Chưa xác định (BRD không ghi rõ) |
| Tài liệu gốc (Source file) | `raw/BRD - BA Weekly Reporting System.md` |

## Bối cảnh kinh doanh (Business Context)

### Vấn đề cần giải quyết (Problem Statement)

Quy trình báo cáo tuần của đội ngũ BA hiện đang sử dụng Google Sheets/Forms — dẫn đến phân tán dữ liệu, sai sót do thao tác thủ công, thiếu cái nhìn tổng quan về sức khỏe dự án, không có cơ chế tự động phân tích rủi ro/hiệu suất, và khó khăn trong việc quản lý nguồn lực (resource allocation) xuyên suốt các khối GEX.

### Mục tiêu kinh doanh (Business Goals)

1. **Tự động hóa & Tập trung hóa:** Chuyển toàn bộ quy trình thu thập báo cáo tuần lên một nền tảng duy nhất, giảm sai sót thủ công.
2. **Quản trị Phân quyền (RBAC):** Đảm bảo bảo mật và luồng công việc rõ ràng giữa các cấp (DM, BAM, BAL, BA).
3. **Tối ưu Quản lý Nguồn lực:** Theo dõi trạng thái "Quá tải", "Đang rảnh", "Cần hỗ trợ" để điều phối chéo giữa các GEX.
4. **AI-Driven Insights:** Ứng dụng AI để đọc hiểu báo cáo text, đưa ra nhận định (RED/YELLOW/GREEN) và dự báo cho Presales.

### Các bên liên quan (Stakeholders Mentioned)

| Tên / Vai trò | Mức quan tâm / Ảnh hưởng | Ghi chú |
| --- | --- | --- |
| Division Manager (DM) | Cao / Cao | Xem dashboard tổng quan, nhận executive summary AI |
| BA Manager (BAM) | Cao / Cao | Quản lý nguồn lực, review report, setup project |
| BA Lead (BAL) | Cao / Trung bình | Theo dõi sát team BA, đánh giá Quality/Progress/Effort |
| BA Member | Trung bình / Thấp | Người dùng cuối — điền báo cáo tuần, khai báo effort |

## Yêu cầu thô (Raw Requirements)

### Functional Requirements

1. **Dashboard Tổng quan (Overall View):** Hiển thị Division Metrics (số BA đã/phải báo cáo, progress %), Member Health Check (cảnh báo nhân sự overloaded, bad week, cần hỗ trợ), Risk Tracking (từ report BA, đánh giá Lead, tiến độ dự án). Click drill-down vào từng GEX ra Weekly Report.
2. **Quản lý Dự án (Setup BA Projects):** Tab "Thông tin chung" (Project Info, Timeline, Status, BA tham gia + effort + tick lead). Tab "Phân bổ BA" (bảng matrix dự án × BA × effort %, editable ở cả 2 nơi).
3. **Quản lý Nguồn lực (Setup Resources):** CRUD danh sách BA (tên, email SSO, GEX, Rank). Tick "Không cần báo cáo". Hiển thị effort phân bổ từng dự án + cảnh báo < 70% hoặc > 100%.
4. **View Báo cáo Tuần & AI Report:** 3 tabs — (a) Manually Report: Project, Effort%, Last Week, Next Week, Risk & Blocker, Need Help. (b) AI Generated Report per Project: tóm tắt format 6.1, đề xuất metric RED/YELLOW/GREEN theo 6.2, đánh giá chéo effort theo 6.4. (c) AI Generated Report per GEX: tổng hợp risk từng GEX theo 6.3.
5. **Manual Report Presales:** Project, Received/Submission Date, STATUS (In Progress/Submitted/Lost/Won), Summary, BA/PM in Charge.
6. **Submit Weekly Report (BA Module):** Form thân thiện, Save Draft, auto-pull Master Data. Sections: Thông tin chung (email, GEX auto-map, tuần báo cáo). Tạo báo cáo (lặp theo dự án, cho phép multi-BA, co-edit, auto-fill từ tuần trước). Phân bổ Nguồn lực (tỷ trọng 5 hạng mục, Need help, Week Rating 1-5, Available/Full/Overloaded).

### Non-Functional Requirements

7. **Authentication:** Google Workspace SSO (email công ty), phân quyền theo email trong Master Data Resources.
8. **Responsiveness:** Hỗ trợ PC + mobile (BA thường report cuối ngày/cuối tuần).
9. **AI Integration:** LLM qua API an toàn, NDA, không dùng data train AI public.
10. **Data Export:** Xuất Excel/CSV đúng format RAW hiện tại.

### AI Generated Report Format (Section 6)

11. **Format Tóm tắt Tiến độ (6.1):** Trích xuất Last Week + Next Week + Risk → cô đọng 3-4 dòng per project: Project/BA, Key Achievements, Next Steps, Key Blocker.
12. **Tiêu chí Đánh giá AI (6.2):** 🔴 RED (blocker/critical), 🟡 YELLOW (friction/needs improvement), 🟢 GREEN (effective & clear) — dựa trên keyword scan trong báo cáo.
13. **GEX Risk & Health Summary (6.3):** Executive summary — High-Priority Risks (RED), Potential Risks (YELLOW), Member Health Check (Overloaded, Low Rating, Need Help).
14. **Effort Validation Cross-check (6.4):** ✅ Logical vs ⚠️ Anomaly Alert (Effort cao - Việc ít, hoặc Effort thấp - Việc nhiều).

## Màn hình và giao diện (Screens and UI)

| Màn hình / Thành phần | Mô tả | Ghi chú |
| --- | --- | --- |
| Dashboard Tổng quan | Division Metrics, Member Health Check, Risk Tracking | Chung cho cả Management + BA |
| Setup BA Projects – Tab Thông tin chung | CRUD project info, timeline, status, BA assignment | Management edit, BA view |
| Setup BA Projects – Tab Phân bổ BA | Bảng matrix dự án × BA × effort % | Editable 2 chiều |
| Setup Resources | CRUD BA members, effort allocation view | Chỉ Management view |
| Weekly Report – Tab Manually Report | Bảng báo cáo tuần per dự án, filter GEX + tuần | Search tên dự án |
| Weekly Report – Tab AI Report (per Project) | AI summary + metric + effort validation | Auto-generated |
| Weekly Report – Tab AI Report (per GEX) | GEX-level risk & health summary | Auto-generated |
| Manual Report Presales | Bảng dự án Presales + status tracking | Search tên dự án |
| Submit Weekly Report (BA) | Form điền report + resource allocation | Save Draft, auto-fill |

## Quy trình và luồng công việc (Processes and Workflows)

| Quy trình / Luồng | Mô tả | Ghi chú |
| --- | --- | --- |
| Quy trình báo cáo tuần | BA điền report → Save Draft / Submit → Lead review → AI tổng hợp → DM/BAM xem dashboard | Core flow |
| Quản lý dự án | DM/BAM tạo project → Assign BA + effort → BA auto-pull vào report | Master data flow |
| Quản lý nguồn lực | DM/BAM CRUD BA list → Phân bổ effort → Cảnh báo overload/underload | Resource flow |
| AI Analysis Pipeline | BA submit report → AI đọc text fields → Generate summary + metric + effort cross-check | Automated |
| Presales Tracking | Management tạo presales entry → BA cập nhật status → Dashboard tracking | Parallel flow |

## Ràng buộc và giả định (Constraints and Assumptions)

### Ràng buộc (Constraints)

- Phải tích hợp Google Workspace SSO (email @sotatek).
- LLM phải được gọi qua API an toàn, cam kết NDA, không public train.
- Export CSV/Excel phải khớp format RAW hiện tại (backward compatibility).
- Hệ thống phải responsive (PC + mobile).

### Giả định (Assumptions)

- Mỗi BA thuộc đúng 1 GEX (GEX1-GEX4).
- Effort allocation tổng cho 1 BA nên là ~100% (cảnh báo nếu < 70% hoặc > 100%).
- Tuần báo cáo theo format WX MY (ví dụ: W1 M5).
- Master Data (project list, BA list) được quản lý trước khi BA submit report.
- Multi-BA report trên cùng 1 dự án được phép; các BA có thể chỉnh sửa cùng field.

## Tuân thủ và quy định (Compliance and Regulatory Needs)

- **Data Privacy:** Dữ liệu khách hàng trong báo cáo cần được bảo mật. AI LLM không được dùng data để public train.
- **NDA:** Cam kết bảo mật theo NDA công ty.
- **SSO/Auth:** Chỉ email @sotatek mới truy cập được hệ thống.

## Câu hỏi mở (Open Questions)

1. **Người yêu cầu chính xác là ai?** BRD không ghi rõ requester/sponsor.
2. **Tech stack mong muốn?** BRD không đề cập frontend/backend/database cụ thể.
3. **LLM nào sẽ được dùng?** GPT-4, Claude, Gemini, hoặc self-hosted? Có budget constraint nào?
4. **Presales AI report:** BRD nhắc "dự báo High-win cho Presales" ở mục tiêu nhưng không mô tả chi tiết format/logic — đây là tính năng cần làm rõ hay ngoài scope?
5. **Quy trình approval:** BA submit report → Lead/BAM approve trước khi AI chạy, hay AI chạy tự động ngay sau submit?
6. **Historical data migration:** Dữ liệu Google Sheets hiện tại có cần migrate sang hệ thống mới không?
7. **Notification/Alert:** Có cần email/Slack notification khi BA chưa submit đúng hạn hoặc khi AI phát hiện RED risk?
8. **Concurrent editing:** Multi-BA chỉnh sửa cùng 1 project report — có cần real-time collaboration (như Google Docs) hay chỉ cần lưu lần cuối?

## Ghi chú phân tích (Parsing Notes)

- BRD có tham chiếu 3 ảnh (Aspose.Words export) nhưng file ảnh không khả dụng trong Markdown source — chỉ có description text.
- Section 6 (Format AI Generated Report) rất chi tiết về output format nhưng không đề cập đến technical implementation (API endpoint, scheduling, error handling).
- "Dự báo High-win cho Presales" được nhắc ở Section 2 (Objectives) nhưng không xuất hiện trong Section 6 — có thể là nice-to-have hoặc bị bỏ sót.
- Phân quyền RBAC có 4 roles nhưng chỉ phân thành 2 nhóm (Management vs Execution). Chưa rõ DM/BAM/BAL có quyền khác nhau cụ thể không hay đều như nhau.
