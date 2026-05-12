# Trang điều phối dự án BA (Project Home)

> File này là dashboard thân thiện cho BA non-tech. Nó không thay thế `intake.md`, `backbone.md`, `project-memory.md`, hoặc artifact module. Agent phải dùng file này để định hướng người dùng, nhưng vẫn đọc source-of-truth đúng theo contract trước khi mutate artifact.

**Dự án:** Hệ thống Quản lý và Báo cáo Tuần BA (BA Weekly Reporting System)
**Slug:** ba-weekly-report
**Phiên bản artifact:** 260512-1627
**Chế độ:** hybrid
**Cập nhật lần cuối:** 2026-05-12 16:27
**Runtime gần nhất:** antigravity

> Trạng thái lifecycle chuẩn trong dashboard này: `recommended` = nên làm tiếp nhưng chưa bắt đầu, `in-progress` = đang thực hiện, `completed` = đã xong/đã chốt, `skipped` = chủ động bỏ qua có lý do, `not-needed` = không cần cho dự án này. Chỉ dùng tập trạng thái này, không quay lại bộ nhãn task-board cũ.

## 1. Tôi Đang Ở Đâu?

| Hạng mục | Trạng thái | Ý nghĩa cho BA |
| --- | --- | --- |
| Tiếp nhận yêu cầu | completed | Đã gom và chuẩn hóa BRD đầu vào, có 8 câu hỏi mở cần chốt |
| Phương án giải pháp | not-needed | BRD đã có 1 hướng solution rõ ràng (web app thay thế Google Sheets) |
| Khung yêu cầu đã chốt | recommended | Cần chạy backbone để tạo source of truth |
| User stories | recommended | Cần cho team Agile sprint planning |
| FRD | recommended | Hệ thống phức tạp, nhiều module cần spec chi tiết |
| SRS | recommended | 9+ màn hình, use cases phức tạp, AI integration |
| Handoff UI | recommended | Nhiều màn hình cần constraint pack cho designer |
| Gói bàn giao HTML | recommended | Stakeholder review |

## 2. Bước Tiếp Theo Được Khuyến Nghị

**Nên làm tiếp:** Xây dựng Khung yêu cầu (Requirements Backbone) — phân rã toàn bộ yêu cầu từ intake thành cấu trúc module, goals, actors, features, FR/NFR có mã ID truy vết.

**Lý do:** Backbone là source of truth để sinh tất cả artifact downstream (FRD, stories, SRS, wireframe handoff). Không có backbone thì không thể tiến tiếp.

**Agent sẽ chạy nội bộ:** `ba-start backbone --slug ba-weekly-report`

**Nếu bạn không chắc, hãy hỏi agent:** `Tôi nên làm bước nào tiếp theo cho dự án này?`

## 3. Việc Cần User Chốt

| Câu hỏi / Quyết định | Vì sao cần chốt | Nếu chưa chốt thì ảnh hưởng |
| --- | --- | --- |
| Ai là requester/sponsor chính? | Cần biết ai approve scope lock | Backbone có thể thiếu authority sign-off |
| Tech stack mong muốn? | Ảnh hưởng NFR, constraint, SRS | Agent giả định technology-agnostic, có thể cần sửa lại |
| LLM nào sẽ dùng cho AI report? | Ảnh hưởng API design, cost, security constraint | Agent sẽ ghi là "LLM TBD" trong SRS |
| Presales AI "dự báo High-win" có trong scope không? | BRD nhắc ở mục tiêu nhưng không spec chi tiết | Nếu in-scope, cần bổ sung vào backbone |
| BA submit → AI tự động chạy hay cần approval? | Ảnh hưởng workflow design | Agent giả định auto sau submit |
| Historical data migration có cần? | Ảnh hưởng scope và timeline | Agent giả định không migrate |
| Notification (email/Slack) có cần? | Ảnh hưởng feature scope | Agent giả định out-of-scope |
| Multi-BA edit: real-time hay last-write-wins? | Ảnh hưởng technical complexity | Agent giả định last-write-wins |

## 4. Bản Đồ Artifact Dễ Hiểu

| Tên BA nhìn thấy | File kỹ thuật | Khi nào dùng |
| --- | --- | --- |
| Trang điều phối dự án | `PROJECT-HOME.md` | Xem trạng thái, bước tiếp theo, câu hỏi cần chốt |
| Phiếu tiếp nhận yêu cầu | `01_intake/intake.md` | Lưu input đã chuẩn hóa và gap |
| Kế hoạch xử lý | `01_intake/plan.md` | Decision ledger cho optioning status, khuyến nghị bước tiếp theo |
| Khung yêu cầu đã chốt | `02_backbone/backbone.md` | Source of truth sau scope lock |
| Bộ nhớ dự án | `02_backbone/project-memory.md` | Thuật ngữ, quyết định, giả định đã chốt |
| Tài liệu module | `03_modules/{module}/...` | FRD, stories, SRS, UI handoff theo phân hệ |
| Bản bàn giao HTML | `04_compiled/*.html` | Stakeholder review/edit trong browser |

## 5. Prompt Nhanh Theo Runtime

### Claude Code

```text
/ba-start backbone --slug ba-weekly-report
```

### Codex

```text
Use AGENTS.md. Read PROJECT-HOME.md for the BA-facing state, then use the BA-kit contract to run backbone for slug ba-weekly-report.
```

### Antigravity

```text
Đọc PROJECT-HOME.md của dự án ba-weekly-report, chạy backbone để tạo khung yêu cầu.
```

## 6. Từ Điển Tên Gọi Thân Thiện

| BA nói | Agent hiểu |
| --- | --- |
| Tạo dự án mới / phân tích tài liệu mới | `intake` hoặc full lifecycle |
| Tiếp tục dự án | `ba-next` rồi step được khuyến nghị |
| Brainstorm phương án / chốt option | `options` |
| Khung yêu cầu đã chốt | `backbone` |
| Đánh giá thay đổi | `impact` |
| Chuẩn bị handoff UI | `wireframes` |
| Xuất gói bàn giao | `package` |
| Kiểm tra trạng thái | `status` |
| Nhận module / gửi review / tạo PR | `ba-collab` |

## 7. Lưu Ý An Toàn

- Nếu yêu cầu thay đổi trong lúc đang viết FRD/SRS/UI, agent phải đánh giá ảnh hưởng trước khi sửa.
- Nếu có nhiều phiên bản artifact hoặc nhiều module, agent phải hỏi lại thay vì tự chọn.
- File này là dashboard. Khi có mâu thuẫn, source of truth vẫn là `backbone.md`, sau đó là `intake.md`.
