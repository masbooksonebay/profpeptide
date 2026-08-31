# PP Site Design — v2 (Light-Mode Redesign, July 14 2026)

**Status:** ACTIVE — supersedes v1's *plan* with what was actually built. All work below is **COMMITTED ON MAIN, UNDEPLOYED.**
**Scope:** profpeptide.com (`~/dev/profpeptide`, Next.js/Vercel, auto-deploys from main — so merging = shipping).
**v1 relationship:** v1's core decision holds — evolve the existing cyan system, don't repaint. v2 records the execution.

---

## 🚨 DEPLOY GATE — READ BEFORE PUSHING

The site **auto-deploys from main**. Everything below is committed and will go live on the next push. Before that happens:

**🔴 THE `/prices` SCAFFOLD IS COMMITTED WITH PLACEHOLDER DATA** (`4ee26e2`). Deploying puts fake vendor names and made-up prices on a live, indexable route, linked from the footer. The amber "Placeholder data" banner helps but it's public and crawlable.
**→ Decide first: noindex the price routes until real data lands, OR revert the scaffold and re-apply on populate.**

---

## ✅ WHAT'S BUILT (committed, undeployed)

### Light-mode refinement
- **KEY FINDING:** light mode was NOT an inverted dark mode (our assumption was wrong — we audited instead of guessing). It's the base layer; dark is layered on via `dark:` overrides. So the fix was "add warmth + structure to a legitimate-but-plain light mode," not "un-invert it."
- **Page background:** `#FFFFFF` → **`#F1F5F9`** (slate-100). First attempt at `#FAFAFA` was invisible; pushed bolder.
- **Cards (`.card`):** white fill floating on the gray page. Border `gray-200`, layered shadow `0 1px 3px/.08 + 0 4px 12px -2px/.08`, hover lift `0 8px 24px -4px/.14` + **accent border on hover** (site-wide, clickable cards only).
- **Homepage bands** bumped to white so hierarchy is consistent (gray page → white raised surfaces).
- **Default flipped to LIGHT** — required changes in BOTH `layout.tsx` (`className="dark"`) and `ThemeProvider` (`useState("dark")`), PLUS a pre-hydration inline script to prevent flash-of-wrong-theme. Decision: **default light regardless of OS**, saved choice honored (dropping the `prefers-color-scheme` fallback keeps the inline script and provider in agreement — otherwise OS-dark users flash light→dark).
- **Dark mode verified byte-for-byte unchanged** throughout.

### Accent tokenization (partial)
- `brand: { DEFAULT: "#0891b2", hover: "#0e7490" }` added to tailwind.config; applied to shared classes (`.btn-primary`, `.btn-outline`, `.tag`).
- ⚠️ **OUTSTANDING: 199 files / ~4,231 occurrences still use the arbitrary `[#0891b2]`.** The token exists but isn't swept. Worth doing as its own low-risk pass — it also unblocks any future accent change from one place.
- ⚠️ **OPEN: switch accent to `#0E7490`?** It's WCAG-AA on white; `#0891b2` likely isn't, and light is now the default. Nearly free to do alongside the sweep. Undecided.

### Nav
- **Calculator + Track → "Calculator & Tools" dropdown.** `DropdownPanel` generalized (it previously ignored its `variant` prop and always rendered the 11 peptide categories). Active-highlight uses `matchHrefs: ["/calculator", "/log"]` (Track's route is `/log`, which `startsWith(href)` would miss). **Mobile has no dropdown mechanism** → tool links flattened inline under a section label so they don't vanish.
- Standalone `/calculator` and `/log` routes untouched — SEO depends on them; the dropdown is navigation only.

### Peptide profile (bpc-157 pilot)
Final combination, settled after sandbox comparison: **`#F1F5F9` page + Accent-rule dividers + Current spacing + Bordered-card panels.**
- **Quick Facts:** plain-language (jargon → "A lab-made 15-amino-acid peptide studied for wound healing…"), single-column, no internal rules, 5 fields with "What it is" as `text-base` (primary) and the rest `text-sm`. Removed "Also known as" → aliases moved to prose (**"BPC 15" existed ONLY in the panel — SEO check caught it before deletion**). Shortened Research status → body already covers Category 2/WADA ~10 places.
- **`.panel-card`** — the bordered-card treatment for Quick Facts + TOC. Same border/shadow as homepage `.card` but **hover removed** (static info panels aren't clickable; hover affordance implies interactivity). `.card` keeps its hover.
- **All accent left-bars removed** from section headings (kept the higher-contrast heading color).
- **Accent-rule dividers** (`border-t-2 border-brand/30` + `pt-12`) between the 14 anchored sections.
- **Sticky TOC** — see the gotcha below.

### Sticky TOC — the fix that mattered
`sticky top-24` + `lg:items-start` was present and correct, and **did nothing**: the 14-item TOC was taller than the viewport, and per spec an over-tall sticky element scrolls until its bottom edge then pins. Fix: constrain to viewport height (`max-h-[calc(100vh-7rem)]` + `overflow-y-auto`) so it can actually pin and scrolls internally when long. **Confirmed working by scroll test, not markup inspection.**

### Logo / brand mark
- Tile: 36px → **56px desktop / 48px mobile**; "Pp" 16px → **48px** (letters now dominate — they previously floated, which is why it read small); border 1.5px → **3px** brand accent; wordmark 20px → **24px extra-bold**; **navy `#1e2d3d` interior, white letters** (matching the iOS app icon).
- **Alignment: baseline-locked, variant B (lowest-ink flush with tile bottom).** Variant A (true baseline flush) drops the p-descenders ~8px below the tile edge — on a two-p wordmark that reads as a sag, not a decision.
- Header height 64 → **72px desktop**; mobile stays 64px. Sticky TOC still clears it.
- Wordmark: navy `#1e2d3d` light / `slate-100` dark (navy would vanish on dark).
- ⚠️ **BLOCKED: the CSS-rendered tile OVERFLOWS its box** (48px glyphs + `leading-none` in 56px). **Fix = SVG asset, not more CSS tuning.** Letterforms as paths → font-independent, crisp at any size, recolorable, and seeds the favicon. Wordmark stays CSS text.
  - **CD failed this** (returned an off-brief periodic-table tile: black bg, cyan letters, "28" — not the app icon's navy/white/cyan-border). **CC has no image tools. → ChatGPT.**
- ⚠️ **OUTSTANDING: footer wordmark still cyan** — now reads as a leftover. Switch to match header (navy / slate-100).

### Design sandbox (committed, noindexed, sitemap-excluded, unlinked)
- **`/prototype/profile`** — live option toggles: dividers (none / light rule / accent rule / rule+space), spacing (current / +50% / double), page background (#F1F5F9 / #FAFAFA / white / white+bands), Quick Facts + TOC treatment. Defaults synced to the shipped live combination.
- **`/prototype/logo`** — logo lockup variants (current centered / baseline-flush A / lowest-ink-flush B) on light + dark swatches.
- Dead files deleted: `PrototypePeptideTOC.tsx`, `scratchpad/PROTOTYPE-bpc-157-page.tsx.ref`.

---

## 🔴 THE 53-PAGE ROLLOUT — SCOPE THIS DELIBERATELY

**CC's finding: the live profiles share COMPONENTS (`PageTOC`, `PageDisclaimer`, `VendorHighlightBlock`) but NOT a layout template.** Each is bespoke single-column JSX. **Only bpc-157 has the Quick Facts box at all** — the other 53 use inline prose facts.

So rolling out is **~53 hand-authored page edits**, including writing a plain-language Quick Facts box per compound. Not a component swap.

**Weigh against Mark's own stated priority: profiles are low-traffic; polish lightly; spend the real design effort on price/coupon pages (where conversions happen).**
Options: (a) all 53 — the design you want, but a real grind; (b) **top ~10 by traffic get the full treatment, the tail gets only the cheap shared-component wins (sticky TOC + heading contrast)** — Claude's lean; (c) shared-component wins only, skip the per-page work.

---

## 📋 OPEN / NEXT

| Item | State |
|---|---|
| **Homepage redesign** | Prompt written, **NEVER FIRED**. Search bar (wire to the existing ⌘K search, don't build a parallel one), 4 uniform buttons (Explore Peptides / Dosage Calculator / Discount Codes / **Price Comparison**), 3 category boxes (Peptides / Bioregulators / **Price Comparison** — NO Supplements box, it was intentionally removed earlier; Supplements stays footer-only), hero on off-white, **+ footer wordmark → navy**. Keep hero COPY exactly — Mark reconsidered and kept it; comprehensive positioning is the winning one. |
| **/prices scaffold** | 🔴 Deploy gate — placeholder data on a live route. Noindex or revert. |
| **Logo SVG** | Blocked on ChatGPT export. Then CC wires it in (report: file vs inline component; inline allows `currentColor`). Same asset seeds the favicon. |
| **Favicon** | Still broken in SERPs. Root cause is **implementation** (sizes/formats/declarations for Google's pipeline), not just the image. Needs 16/32/48/96/180/512 + .ico + apple-touch + manifest. Do AFTER the logo SVG lands. |
| **`[#0891b2]` → token sweep** | 199 files / 4,231 occurrences. Own pass. Possibly bundle with the `#0E7490` accent decision. |
| **/coupons language** | 🔴 "Curated directory of trusted vendors" → "codes we have". Outstanding, gets harder as the roster grows. |
| **/partners page** | Prompt written. Free inbound funnel; **must NOT promise inclusion** (inclusion isn't what's on offer — the affiliate arrangement is). Reuses the existing Resend route. ⚠️ Resend sender domain was pending verification — form may build but not deliver. |
| **53-page rollout** | Scope decision above. |

---

## 🔗 Cross-refs
SCS_MP v6.14 (rules: aesthetic changes need eyes; classes ≠ behavior; sandbox = committed route; brand mark = SVG) · PP_PRICE_COMPARISON_PLAN v4 · PP_VENDOR_PROSPECTING v17
