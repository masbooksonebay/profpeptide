# PP App — Theme & Token Spec

**Status:** ACTIVE — the design-system decision artifact for the PP app premium redesign. This is the contract CC implements `constants/theme.ts` against (it is NOT the theme.ts file itself; CC writes the code + wires components in the frontend-design prompt, step 3).
**Version:** v1 (June 23, 2026)
**Feeds:** the frontend-design CC prompt (PK curve first, then theme application)
**Related:** PP_APP_REDESIGN_v2 (esp. §2a elevation, §9 PK curve), PP_MASTER, `constants/theme.ts`

---

## 0. Principles (locked, carried from PP_APP_REDESIGN_v2 §2)

1. **Two first-class hand-tuned themes, one accent identity.** Light and dark are NOT inverses of each other. No auto-inversion. Ship **light as default**, dark as a hand-tuned option.
2. **Accent identity = PP cyan `#0891b2`.** Do not copy Pep AI's blue→purple gradient. The curve adopts Pep AI's *structure*, not its hue.
3. **Two separate elevation strategies:** light raises cards by **diffuse shadow** over a subtly-gray page; dark raises cards by **lightness** over a near-black page (shadows barely register on dark; borders/glows + lightness do the work). Confirmed against the live capture.
4. **Components reference semantic tokens** (`--surface`, `--accent`, etc.), never raw hex. Each mode resolves the same token to its own tuned value.
5. **Curve tokens are first-class** — the PK curve (PP_APP_REDESIGN_v2 §9) is the hero component CC builds first, so its tokens are specified explicitly here (§6).

> All hex values below are the **proposed decisions** to implement. Contrast-sensitive ones are flagged "verify AA at build"; CC must run a contrast check and adjust within the same hue family if a token fails, rather than silently shipping it.

---

## 1. Core palette — raw ramps (private; semantic tokens in §2 map onto these)

Anchored in PP's existing slate + cyan family (Tailwind-aligned so values are familiar), with the dark base pushed a step deeper than PP's current `#0f172a` to give the lightness-elevation ramp headroom.

**Cyan (accent family)**
| Step | Hex | Use |
|---|---|---|
| cyan-400 | `#22d3ee` | accent line/icon on near-black (dark mode emphasis) |
| cyan-500 | `#06b6d4` | accent hover (dark) |
| cyan-600 | `#0891b2` | **PP anchor accent** — fills, buttons, large UI |
| cyan-700 | `#0e7490` | accent for text/small icons/links **on white** (AA) |
| cyan-50 | `#ecfeff` | accent-subtle background (light) |

**Slate (neutral family)**
| Step | Hex | | Step | Hex |
|---|---|---|---|---|
| slate-50 | `#f8fafc` | | slate-600 | `#475569` |
| slate-100 | `#f1f5f9` | | slate-700 | `#334155` |
| slate-200 | `#e2e8f0` | | slate-800 | `#1e293b` |
| slate-300 | `#cbd5e1` | | slate-900 | `#0f172a` |
| slate-400 | `#94a3b8` | | near-black | `#0b1120` |
| slate-500 | `#64748b` | | card-dark | `#151c2c` |
| | | | raised-dark | `#1e2740` |

**Secondary / state**
| Name | Hex | Use |
|---|---|---|
| violet-500 | `#8b5cf6` | **dose-marker** accent (distinct from cyan line) — dark |
| violet-600 | `#7c3aed` | dose-marker on white — light |
| amber-500 | `#f59e0b` | **RUO / warning** accent (research-status, Important Notes callouts) |
| amber-50 | `#fffbeb` | RUO callout surface (light) |
| green-500 | `#22c55e` | success |
| red-500 | `#ef4444` | danger (Log Out / Delete / destructive) |

> **Dose-marker = violet is a decision, not a constraint.** Rationale: the marker dot must not blend into the cyan curve line, and amber is reserved for RUO. Violet pairs cleanly with cyan and appears *only* as the small dose-event dot. Mark can veto → fallback is magenta `#ec4899`. Keep it scarce.

---

## 2. Semantic tokens (the contract components use)

Each token resolves per mode. **Light values tuned for shadow-elevation; dark values tuned for lightness-elevation.**

### Surfaces & background
| Token | Light | Dark | Notes |
|---|---|---|---|
| `--bg` | `#f5f7fa` (≈slate-50/100) | `#0b1120` (near-black) | page background. Light is intentionally *not* pure white so white cards lift. |
| `--surface` | `#ffffff` | `#151c2c` (card-dark) | default card. Dark card is a **step lighter** than `--bg`. |
| `--surface-raised` | `#ffffff` + stronger shadow | `#1e2740` (raised-dark) | modals, action sheets, scrub callout. Dark = lighter still (next rung of the lightness ladder). |
| `--surface-sunken` | `#f1f5f9` | `#0a0e18` | wells, inset rows, chart plot area behind gridlines |

### Borders
| Token | Light | Dark | Notes |
|---|---|---|---|
| `--border` | `#e2e8f0` (slate-200) | `rgba(255,255,255,0.08)` | hairline separators |
| `--border-subtle` | `#eef2f6` | `rgba(255,255,255,0.05)` | faint internal dividers |
| `--border-strong` | `#cbd5e1` | `rgba(255,255,255,0.14)` | focused inputs, selected states |

### Text
| Token | Light | Dark |
|---|---|---|
| `--text-primary` | `#0f172a` (slate-900) | `#f1f5f9` (slate-100) |
| `--text-secondary` | `#475569` (slate-600) | `#94a3b8` (slate-400) |
| `--text-tertiary` | `#94a3b8` (slate-400) | `#64748b` (slate-500) |
| `--text-on-accent` | `#ffffff` | `#06121a` (near-black on bright cyan, for legibility on cyan-400 fills) |

### Accent
| Token | Light | Dark | Notes |
|---|---|---|---|
| `--accent` | `#0891b2` (cyan-600) | `#0891b2` | brand anchor; fills, buttons, active states |
| `--accent-text` | `#0e7490` (cyan-700) | `#22d3ee` (cyan-400) | accent applied to **text/links/small icons**. Light darkens to cyan-700 for AA on white; dark brightens to cyan-400 for legibility on near-black. **Verify AA at build.** |
| `--accent-hover` | `#0e7490` | `#06b6d4` (cyan-500) | pressed/hover |
| `--accent-subtle` | `#ecfeff` (cyan-50) | `rgba(8,145,178,0.16)` | tinted accent backgrounds (selected chips, info pills) |

### State / semantic
| Token | Light | Dark | Use |
|---|---|---|---|
| `--success` | `#16a34a` | `#22c55e` | confirmations |
| `--warn` / `--ruo` | `#b45309` (amber-700 text) | `#f59e0b` (amber-500) | RUO research-status text, warning |
| `--ruo-surface` | `#fffbeb` (amber-50) | `rgba(245,158,11,0.12)` | Important-Notes / research-status callout background |
| `--ruo-border` | `#fde68a` | `rgba(245,158,11,0.3)` | callout border |
| `--danger` | `#dc2626` | `#ef4444` | Log Out / Delete / destructive |

---

## 3. Elevation (the two strategies — implement as separate token sets)

**Light — by shadow.** Cards are white on a slightly-gray page, separated by soft diffuse shadows (Pep AI-style ~20px blur, low alpha). Define a small ladder:
| Token | Value (light) |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(15,23,42,0.06)` |
| `--shadow-md` | `0 4px 20px rgba(15,23,42,0.08)` (default card) |
| `--shadow-lg` | `0 12px 32px rgba(15,23,42,0.12)` (modals, scrub callout, action sheet) |

**Dark — by lightness.** Shadows are near-invisible on near-black, so elevation = surface lightness + an optional subtle top border/glow. Same three rungs, expressed as surfaces not shadows:
| Token | Value (dark) |
|---|---|
| `--elev-0` | `--bg` `#0b1120` |
| `--elev-1` | `--surface` `#151c2c` + `--border-subtle` top hairline |
| `--elev-2` | `--surface-raised` `#1e2740` + `--border` |
| `--elev-3` | `#26304a` + soft accent glow `0 0 0 1px rgba(34,211,238,0.10)` for the active/scrub card if needed |

> Implementation: a card component reads `--shadow-md` in light and `--elev-1` (surface + border) in dark — driven by the active theme, not a single shared shadow token. This is the crux of "polished, not inverted."

---

## 4. Typography

Platform font (SF Pro / system) — no custom font load. The gap vs. current PP is the **absence of a scale + a display weight for headers**. Define:

| Token | Size / Line-height / Weight | Use |
|---|---|---|
| `--type-display` | 32 / 38 / 800 | onboarding questions, hero numbers (the big "Level" mg value) |
| `--type-h1` | 28 / 34 / 700 | screen titles ("Track", "Lifestyle", "Profile") |
| `--type-h2` | 22 / 28 / 700 | section headers, card titles |
| `--type-h3` | 18 / 24 / 600 | sub-headers, list-row titles |
| `--type-body-lg` | 17 / 25 / 400 | primary body |
| `--type-body` | 15 / 22 / 400 | default body, descriptions |
| `--type-caption` | 13 / 18 / 400 | secondary/metadata (timestamps, "No dose logged") |
| `--type-label` | 11 / 14 / 600, +0.06em tracking, UPPERCASE | section labels ("COMPOUNDS", "SUPPORT", "SOURCES") |

**Numeric/data:** mg values, axis ticks, and the scrub callout use **tabular figures** (`fontVariantNumeric: 'tabular-nums'`) so digits don't jitter as values change. Apply to all dose/level/axis numerics.

---

## 5. Radii, spacing, hit-targets

**Radii** (Pep AI cards are notably rounded):
| Token | Value |
|---|---|
| `--radius-card` | 20 |
| `--radius-raised` | 24 (modals/sheets) |
| `--radius-input` | 16 |
| `--radius-chip` | 12 |
| `--radius-pill` | 999 (CTAs, segmented toggles, primary buttons) |

**Spacing:** 4-pt base ramp — `2, 4, 8, 12, 16, 20, 24, 32, 40`. Card padding default 16–20. Section gap 24.

**Hit targets:** min 44×44.

---

## 6. PK CURVE TOKENS (hero component — CC builds first; see PP_APP_REDESIGN_v2 §9)

The curve's mechanics live in the redesign doc §9. These are the **color/style tokens** that realize it, per mode. PP keeps the **structure** (solid-past / dotted-future split at "Now", scrub ring + callout, dose-marker dot, gradient fill) but swaps Pep AI's blue for PP cyan.

| Token | Light | Dark | Notes |
|---|---|---|---|
| `--curve-line` | `#0891b2` (cyan-600) | `#22d3ee` (cyan-400) | **solid** segment (past→Now). Brightened on dark to glow on near-black. |
| `--curve-line-projected` | `#0891b2` @ dotted, alpha 0.7 | `#22d3ee` @ dotted, alpha 0.7 | **dotted** segment (Now→future). Same hue, dotted dash, slightly reduced alpha. |
| `--curve-fill` | gradient `rgba(8,145,178,0.16)` → `0` | gradient `rgba(34,211,238,0.20)` → `0` | area fill under curve, fading to transparent toward baseline |
| `--curve-now-line` | `#94a3b8` dashed | `rgba(255,255,255,0.4)` dashed | vertical "Now" divider |
| `--curve-gridline` | `#e2e8f0` dashed | `rgba(255,255,255,0.08)` dashed | horizontal ceiling/level gridlines |
| `--curve-axis-text` | `--text-tertiary` | `--text-tertiary` | time ticks + ceiling label ("2.24 mg") |
| `--curve-dose-marker` | `#7c3aed` (violet-600) | `#8b5cf6` (violet-500) | **solid dot** on baseline at logged-dose event — distinct from the line |
| `--curve-scrub-ring` | stroke `--curve-line`, fill `--surface` | stroke `--curve-line`, fill `--surface` | hollow ring riding the line at scrub point |
| `--curve-callout-surface` | `--surface-raised` + `--shadow-lg` | `--surface-raised` (elev-2) | floating value/timestamp bubble |
| `--curve-callout-text` | `--text-primary` (value), `--text-tertiary` (timestamp) | same | value tabular-nums |

**Fallback rule (ties to §9f):** Half-life **Off** → the card renders the non-projected summary (Last dose / Level tiles), not an empty/flat plot. Half-life **On** + ≥1 logged dose → curve plots.

---

## 7. What CC implements from this (handoff note for step 3)

The frontend-design CC prompt (next artifact) instructs CC to:
1. Write `constants/theme.ts` exporting a typed token object with `light` + `dark` resolutions for every semantic token in §2–§6, plus a `useTheme()` resolver keyed off the app's mode setting (default **light**).
2. Build the **PK curve component first** against the `--curve-*` tokens + the §9 mechanics, in both modes.
3. Then migrate existing components to semantic tokens (kill the current single-elevation `#1e293b`-on-`#0f172a` flat treatment), applying the shadow-vs-lightness elevation split.
4. **Verify AA** on `--accent-text`, `--text-secondary/tertiary`, and `--ruo` against their backgrounds at build; adjust within-hue if any fails. Report any token it changed.

---

## Changelog
**June 23, 2026 (v1):** Initial token spec. Locks: cyan-anchored two-theme system (light default); separate shadow (light) vs lightness (dark) elevation ladders; full semantic-token table per mode; type scale with display weight + tabular-nums for data; radii/spacing/hit-targets; dedicated PK-curve token set (cyan line, violet dose-marker, per-mode gradient/now-line/gridline/scrub/callout). Feeds the frontend-design CC prompt.
