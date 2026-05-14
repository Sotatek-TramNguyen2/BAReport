# Figma Make Prompt — Design System & Style Guide

## Áp dụng cho toàn bộ UC (UC-01 → UC-07)

---

## 1. Layout Foundation

- **Page structure:** Left sidebar (fixed, 240px width) + Main content area (fluid)
- **Sidebar:** Dark navy background (#1E293B), white text, active item highlighted with light blue background (#EFF6FF) and blue text (#2563EB)
- **Main content:** White background (#FFFFFF), padding 24px
- **Max content width:** 1200px centered within main area
- **Responsive:** Sidebar collapses to icon-only on tablet, hidden on mobile with hamburger menu

## 2. Typography

- **Font family:** Inter (fallback: system sans-serif)
- **Page title:** 20px, font-weight 700, color #111827
- **Section title:** 16px, font-weight 600, color #111827
- **Card title:** 14px, font-weight 600, color #374151
- **Body text:** 14px, font-weight 400, color #4B5563
- **Caption/label:** 12px, font-weight 500, color #6B7280
- **Large metric number:** 36px, font-weight 700, color #FFFFFF (on colored bg) or #111827 (on white)

## 3. Color Palette

| Token | Hex | Usage |
| --- | --- | --- |
| Primary | #2563EB | Buttons, active nav, links, primary badges |
| Primary Light | #EFF6FF | Active nav background, hover states |
| Success / Green | #16A34A | On track, completed, GREEN status |
| Warning / Yellow | #EAB308 | Potential risk, YELLOW status |
| Danger / Red | #DC2626 | Critical, overdue, RED status |
| Orange | #F97316 | Overloaded, approaching deadline |
| Neutral 50 | #F9FAFB | Page background behind cards |
| Neutral 100 | #F3F4F6 | Card hover, table stripe |
| Neutral 200 | #E5E7EB | Borders, dividers |
| Neutral 900 | #111827 | Headings |
| White | #FFFFFF | Card background, main content |

## 4. Components

### Cards
- Background: white
- Border-radius: 12px
- Shadow: 0 1px 3px rgba(0,0,0,0.08)
- Padding: 20px
- Spacing between cards: 16px

### Status Badges (pill shape)
- Border-radius: 9999px (full round)
- Padding: 4px 12px
- Font: 12px, font-weight 500
- Variants:
  - Green: bg #DCFCE7, text #166534
  - Yellow: bg #FEF9C3, text #854D0E
  - Red: bg #FEE2E2, text #991B1B
  - Blue: bg #DBEAFE, text #1E40AF
  - Orange: bg #FFEDD5, text #9A3412

### Summary Banner
- Full-width card with gradient or solid color background
- Large number (36px bold) + subtitle
- Rounded 12px
- Example: dark blue-green gradient (#0F766E → #134E4A)

### Tables
- Header: bg #F9FAFB, font 12px uppercase, color #6B7280
- Row height: 48px
- Border-bottom: 1px solid #E5E7EB
- Hover: bg #F3F4F6

### Buttons
- Primary: bg #2563EB, text white, rounded 8px, padding 8px 16px
- Secondary: bg white, border 1px #E5E7EB, text #374151, rounded 8px
- Icon button: 32x32, rounded 8px

### Dropdown / Filter
- Border: 1px solid #E5E7EB
- Rounded: 8px
- Padding: 8px 12px
- Font: 14px

### Charts (style reference)
- Donut chart: for proportion data (risk distribution)
- Horizontal stacked bar: for progress by group
- Progress bar: for single metric (effort %)
- Colors follow palette: Green → Yellow → Red spectrum

### Sidebar Navigation
- Logo area: top, padding 16px
- Nav items: padding 10px 16px, rounded 8px, font 14px
- Active: bg #EFF6FF, text #2563EB, font-weight 600
- Inactive: text #94A3B8
- Section divider: 1px solid #334155
- User avatar + email: bottom of sidebar, truncated with ellipsis
- Collapsible groups with chevron icon

---
