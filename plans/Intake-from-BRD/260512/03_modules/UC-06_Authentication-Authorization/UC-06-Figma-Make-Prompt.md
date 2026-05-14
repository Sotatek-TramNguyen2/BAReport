# Figma Make Prompt — UC-06: Authentication & Authorization

## Instruction for Figma Make

Design a **Login** page for the BA Weekly Reporting System. This page only allows Google SSO login with @sotatek.com email. There is NO email/password form.

**Shared elements:** Font, colors, button styles — follow exactly as UC-01 Dashboard. Do NOT include sidebar (login page has no sidebar).

---

## Login Page

**Layout:** Centered card on full-screen background.

**Background:**
- Full viewport, bg #F8FAFC
- Subtle gradient or pattern (optional, keep minimal)

**Login card (centered vertically and horizontally):**
- White bg, rounded 16px, shadow-lg, padding 48px, max-width 420px
- Content stacked vertically, text-align center, gap 24px:

### Card content (top to bottom):

1. **Logo:** SotaTek logo (centered, height 40px)

2. **Title:** "BA Weekly Reporting" (20px, bold, #111827)

3. **Subtitle:** "Đăng nhập để tiếp tục" (14px, #6B7280)

4. **Google SSO Button:**
   - Full width, height 48px, rounded 8px
   - White bg, border 1px solid #E5E7EB, shadow-sm
   - Content: Google "G" icon (20px, colored) + text "Đăng nhập bằng Google" (14px, #374151, medium weight)
   - Hover: bg #F9FAFB, border #D1D5DB
   - Active: bg #F3F4F6

5. **Helper text:** "Sử dụng email @sotatek.com để đăng nhập" (12px, #9CA3AF)

---

## Error States

### Error: Email không thuộc hệ thống

Shown when user authenticates with Google but email is not found in Master Data Resources.

- Same login card layout
- Below Google button, show error message:
  - Container: bg #FEF2F2, border 1px solid #FECACA, rounded 8px, padding 12px 16px
  - Icon: red warning circle (16px) left-aligned
  - Text: "Tài khoản chưa được đăng ký trong hệ thống. Liên hệ quản lý." (14px, #991B1B)
- Google button remains visible for retry

### Error: Email không phải @sotatek.com

- Same error container style
- Text: "Chỉ email @sotatek.com được phép đăng nhập." (14px, #991B1B)

---

## Loading State

After clicking Google button, while OAuth is processing:
- Google button changes to disabled state (bg #F3F4F6, border #E5E7EB)
- Button text changes to: spinner icon (animated) + "Đang xác thực..." (14px, #6B7280)

---

## Do NOT include
- Email input field
- Password input field
- "Forgot password" link
- "Register" or "Sign up" link
- Social login options other than Google
- Dark mode
- Remember me checkbox
