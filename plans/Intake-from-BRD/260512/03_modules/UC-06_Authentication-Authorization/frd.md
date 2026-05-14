# FRD — UC-06: Authentication & Authorization

## 1. Tổng quan

| Field | Value |
| --- | --- |
| Module | UC-06 Authentication & Authorization |
| Mục đích | Xác thực người dùng qua Google SSO, phân quyền RBAC |
| Actors | Tất cả |
| FRs covered | FR-33, FR-34, FR-35 |

## 2. Authentication (FR-33)

### 2.1 Luồng đăng nhập

1. User truy cập hệ thống → redirect đến Google OAuth consent screen
2. User chọn account @sotatek.com → Google trả về token
3. Hệ thống verify token, extract email
4. Lookup email trong Master Data Resources (M-03)
5. Nếu tìm thấy → tạo session, redirect về Dashboard
6. Nếu không tìm thấy → hiển thị "Tài khoản chưa được đăng ký trong hệ thống. Liên hệ quản lý."

### 2.2 Session

| Config | Value |
| --- | --- |
| Provider | Google Workspace OAuth 2.0 |
| Allowed domain | @sotatek.com |
| Session duration | 7 ngày (auto-refresh) |
| Logout | Clear session, redirect về login |

## 3. Authorization — RBAC (FR-34, FR-35)

### 3.1 Role mapping

- Role được gán trong Master Data Resources (M-03) dựa trên Rank:
  - Manager → DM hoặc BAM (tùy config)
  - Lead → BAL
  - Intern/Fresher/Junior/Middle → BA Member

**Khi thay đổi Rank (tại UC-03 Resource Management):**
- Hệ thống tự động cập nhật role và permission của user ngay lập tức.
- Ví dụ: BA Member (rank Junior) được đổi rank lên Lead → role chuyển thành BAL → user có thêm quyền truy cập Resource Management, Report View & AI Summarize, v.v.
- Không cần logout/login lại. Session hiện tại tự nhận role mới.
- Sidebar navigation tự động cập nhật hiển thị theo quyền mới.

### 3.2 Permission matrix

| Module / Action | DM | BAM | BAL | BA Member |
| --- | --- | --- | --- | --- |
| Dashboard — View | ✅ | ✅ | ✅ | ✅ |
| Project Management — View | ✅ | ✅ | ✅ | ✅ |
| Project Management — CRUD | ✅ | ✅ | ✅ | ❌ |
| Resource Management — Access | ✅ | ✅ | ✅ | ❌ |
| Weekly Report — Submit | ❌ | ❌ | ✅ | ✅ |
| Report View & AI Summarize — Access | ✅ | ✅ | ✅ | ❌ |
| Presale Report Summarize — Access | ✅ | ✅ | ✅ | ❌ |
| Data Export | ✅ | ✅ | ✅ | ❌ |

### 3.3 Hành vi khi không có quyền

- Truy cập URL không có quyền → redirect về Dashboard
- Menu navigation chỉ hiển thị items mà user có quyền
- API endpoint trả 403 nếu role không đủ

## 4. Quy tắc nghiệp vụ

| ID | Rule |
| --- | --- |
| BR-26 | Chỉ email @sotatek.com được đăng nhập |
| BR-27 | Email phải tồn tại trong Master Data Resources mới được vào hệ thống |
| BR-28 | Role xác định bởi Rank trong Resources, không có UI riêng để gán role |
| BR-29 | 1 user = 1 role (không multi-role) |
| BR-30 | Khi Rank thay đổi (tại UC-03), role và permission cập nhật real-time, không cần re-login |
