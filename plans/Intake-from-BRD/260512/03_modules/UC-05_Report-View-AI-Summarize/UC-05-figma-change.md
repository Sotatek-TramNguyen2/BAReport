# UC-05 Figma Change Log

## Version History

| Version | Date | Summary |
| --- | --- | --- |
| v1 | 2026-05-14 | Manually: bỏ BA/Effort, thêm GEX/Status/Cần hỗ trợ, filter GEX no "Tất cả". AI: đổi tên, bỏ badges, tóm tắt gộp, thêm dự án không báo cáo, thêm search |

---

## v1 — 2026-05-14

### Changes requested:
1. Manually Weekly Report: bỏ cột BA, Effort %. Thêm cột GEX, Trạng thái, đổi "Need Help" → "Cần hỗ trợ" (ghi rõ nội dung)
2. Manually: thêm filter GEX (no Tất cả, default GEX 1) + filter Trạng thái dự án
3. AI Report: đổi tên "AI Generated" → "Tóm tắt báo cáo BA của GEX xx"
4. AI Report: đổi tên output → "Risk nghiêm trọng", "Có khả năng ảnh hưởng", bỏ Member Health Check
5. AI per project: tóm tắt gộp (không chia Key Achievements/Next Steps/Key Blocker), bỏ Effort Validation, bỏ badge Nghiêm trọng/Rủi ro/Tốt
6. AI: thêm section "Dự án không báo cáo"
7. AI: thêm search dự án

---

## Figma Make Prompt (v1)

Apply the following changes to UC-05 Report View & AI Summarize. Do NOT modify any element not mentioned below.

---

### Tab "Manually Weekly Report" — Table columns update

Remove columns: "BA", "Effort %"

Replace table with these columns:

| Cột | Width | Content |
| --- | --- | --- |
| Dự án | 160px | Text, bold. Grouped when multiple BAs report same project |
| GEX | 80px | Tag badge (same style as UC-02) |
| Trạng thái | 120px | Status badge (same colors as UC-02) |
| Kết quả tuần qua | 200px | Text, truncated 2 lines, expandable |
| Kế hoạch tuần tới | 200px | Text, truncated 2 lines, expandable |
| Risk & Blocker | 180px | Text, truncated 2 lines, expandable |
| Cần hỗ trợ | 180px | Text: nội dung yêu cầu hỗ trợ nếu có (e.g. "Cần review SRS với senior BA"), hoặc "Không" (text #6B7280) |

---

### Tab "Manually Weekly Report" — Filter bar update

Replace current filter bar with:
- Left: Search input (placeholder "Tìm kiếm dự án...", icon search, width 280px)
- Right (2 filters):
  - GEX filter dropdown: GEX 1 / GEX 2 / GEX 3 / GEX 4. **No "Tất cả GEX" option.** Default selected: GEX 1.
  - Trạng thái dự án: multi-select dropdown (Research/Presale / Design / Development / Deployment / Maintenance / Pending)

---

### Tab "AI Report" — Section 1 update

**Rename title:** Change from "AI Generated" to **"Tóm tắt báo cáo BA của GEX [xx]"** (16px, bold, #111827). [xx] = currently selected GEX number.

**Remove Block 3 "🚑 Member Health Check"** entirely.

**Rename remaining blocks:**
- Block 1: Change title from "🔥 High-Priority Risks" to **"🔥 Risk nghiêm trọng"** (14px, bold, #DC2626)
- Block 2: Change title from "⚠️ Potential Risks" to **"⚠️ Có khả năng ảnh hưởng"** (14px, bold, #854D0E)

Remove the "AI Generated" badge. Keep timestamp.

---

### Tab "AI Report" — Add Section "Dự án không báo cáo"

Add new section between Executive Summary and per-project cards:

- White card, rounded 12px, shadow, padding 20px.
- Title: "Dự án không báo cáo" (14px, bold, #111827) + badge count (bg #FEE2E2, text #991B1B, e.g. "2")
- Content: bullet list of active projects in this GEX that have no report submitted this week.
  - Each item: project name (14px, #374151) + status badge (same colors as UC-02)
- If all projects reported: "Tất cả dự án đã báo cáo ✓" (#16A34A, italic)

---

### Tab "AI Report" — Per-project cards update

**Remove from each card:**
- Assessment badge (RED/YELLOW/GREEN — "Nghiêm trọng", "Rủi ro", "Tốt")
- Separate fields: "Key Achievements", "Next Steps", "Key Blocker"
- "Effort Validation" field and badges

**Replace card body with single field:**
- Label: none (or "Tóm tắt AI" as subtle label, 12px, #9CA3AF)
- Content: one paragraph (14px, #374151, 2-4 lines) — AI-generated summary combining Kết quả tuần qua + Kế hoạch tuần tới + Risk & Blocker + Cần hỗ trợ into one cohesive text.

**Card header remains:** Project name (bold) + "BA phụ trách:" list. No badge on the right.

---

### Tab "AI Report" — Filter bar update

Replace current filter bar with:
- Left: Search input (placeholder "Tìm kiếm dự án...", icon search, width 280px)
- Right: GEX filter dropdown: GEX 1 / GEX 2 / GEX 3 / GEX 4. **No "Tất cả GEX".** Default: GEX 1.

---

### Do NOT change
- Tab structure (still 2 tabs), page title, sidebar, permission cues, AI loading/error states.
