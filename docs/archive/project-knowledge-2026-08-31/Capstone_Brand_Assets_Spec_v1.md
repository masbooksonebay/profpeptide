# Capstone Peptides — Brand Asset Production Spec (v1)

Purpose: produce two missing brand assets — a **standalone wordmark** and a **combined logo + wordmark lockup** — for use on the RF packing slip, C&C COA labeling, and general brand needs. Values below are taken **directly from the live site header** (Snippet 8, capstonepeptides.com) so every asset matches what's shipped.

---

## 1. Source of truth (already live — do not alter)

**Icon ("Cp" periodic-table tile):**
`https://capstonepeptides.com/wp-content/uploads/2026/06/icon-1.svg`
Rendered at 64×64 in the header. This is the locked mark — reuse the existing SVG as-is; do not redraw it.

**Palette:**
| Token | Hex | Use |
|---|---|---|
| Ink | `#16181B` | Wordmark text, primary icon stroke |
| Accent | `#3E7CA8` | Accent only (not used in the wordmark itself) |
| Muted | `#5E6B78` | Secondary/legal text |
| Deep | `#2C3A47` | Dark backgrounds |

**Typeface:** Inter. Weights used: 700 (Capstone), 400 (peptides).
In all exported vector/print files, **convert the wordmark text to outlines** so Inter is not required on the recipient's system.

---

## 2. Asset A — Standalone wordmark (stacked, two-line)

Exact spec from the live header:

- **Line 1 — "Capstone"**: Inter **700**, **30px**, color `#16181B`, letter-spacing `-0.005em`
- **Line 2 — "peptides"**: Inter **400**, **21px**, color `#16181B`
- Stacking: line-height `1.0`; "peptides" offset **+4px left** (`margin-left:4px`) and **+3px down** (`margin-top:3px`) relative to "Capstone"
- Lowercase "peptides" is intentional. "Capstone" is title-case.
- Optical baseline: the lockup was tuned to sit flush; keep the bottom edge of "peptides" as the lockup's baseline (the header uses `padding-bottom:2px` on the text column — preserve that relationship, don't re-tune from scratch).

Treat 30px/21px as the **proportional ratio** (1 : 0.70), not fixed pixels — scale the whole wordmark up for print exports while preserving the ratio and the 4px/3px offsets proportionally.

---

## 3. Asset B — Combined logo + wordmark lockup (primary deliverable)

Horizontal lockup, mirroring the header row exactly:

- **Order:** icon (left) → wordmark (right)
- **Gap:** 14px between icon and wordmark at the header's 64px icon size (i.e., gap = ~0.22 × icon height — scale proportionally)
- **Vertical alignment:** `align-items:flex-end` — icon and wordmark share a common **bottom** edge (not centered)
- Icon at 64px pairs with the 30/21px wordmark above. Keep that size relationship when scaling.

This is the asset to put on the packing slip and (if Karen confirms she wants a logo vs. plain text) the COA.

---

## 4. Variants to produce for each asset (A and B)

1. **Full color** — Ink `#16181B` on transparent (primary)
2. **Reversed / knockout** — white version for dark backgrounds (`#2C3A47` Deep, or any dark print stock). Wordmark and icon both white.
3. **Mono black** — `#000000`, for single-color print (some label/COA print systems are 1-color)

---

## 5. File formats to export

For each asset + each variant:

- **SVG** — primary vector, text converted to outlines
- **PDF** (vector) — for print workflows that prefer PDF
- **EPS** — for legacy print/label systems (include if the tool supports it)
- **PNG, transparent, 300 dpi** — universal raster fallback, export at 3 widths: **600px, 1200px, 2400px**

Naming convention:
```
capstone-wordmark--color.svg
capstone-wordmark--reversed.png
capstone-lockup--color.svg
capstone-lockup--reversed.svg
capstone-lockup--mono.eps
...
```

---

## 6. Usage rules to include in the one-paragraph note sent to vendors

- **Clear space:** keep empty space around the lockup equal to the icon's height on all sides.
- **Minimum size:** lockup no smaller than 120px wide on screen / 0.9in wide in print (below that, use the icon alone).
- **Don't:** recolor, rotate, stretch, add effects, or place the color version on a dark background (use the reversed version instead).
- **Which file when:** vector (SVG/PDF/EPS) for any print or scalable use (packing slip, COA, labels); PNG only where vector isn't accepted.

---

## 7. Build path

Either:
- **ChatGPT image-gen / a vector tool** to render the wordmark and compose the lockup with the existing `icon-1.svg`, then export the formats above, **or**
- **CC** in a brand-assets working folder to script the SVG composition (icon + outlined wordmark) and rasterize the PNGs (e.g., via `resvg`/`sharp`), exporting all variants/sizes in one pass.

Whichever is used: start from the real `icon-1.svg`, match the Section 2/3 values exactly, outline the text, and export Section 4–5 deliverables.
