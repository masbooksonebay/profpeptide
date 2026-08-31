# PP SOCIAL — v1

**Status:** ACTIVE. New doc. PP's non-X social surfaces: Instagram, Facebook, and the carousel pipeline.
**Date:** August 29, 2026. Settled by the Lilly-article pilot.
**Not covered here:** X posts (PP_X_POSTS governs those) · HR's social pipeline (HR_SOCIAL / HR_INSTAGRAM_PROCESS — a **different** process; do not cross-apply).

---

## 1. 🔒 WHICH TOOL MAKES WHAT — settled, do not re-litigate

| Work | Tool | Why |
|---|---|---|
| **News carousels, text-driven slides** | **CC** | An in-repo generator already exists and produces PNGs directly |
| **Photography, hand-composed layout, visual variety** | **CD** | Genuine visual judgment, which a renderer can't supply |
| **OG cards / link previews** | **CC** | Already route-generated per page |

**The deciding argument was editorial, not visual.** Two properties a design tool doesn't give you:

1. **Silent clipping is impossible by construction.** `fitHeadline()` steps a headline down until it fits a 4-line cap, and `overflowWarning()` estimates content height and **prints a warning rather than clipping**. In Figma, text that overflows just looks fine until someone notices.
2. **The copy lives in a reviewable, diffable text file next to the article it came from.** For legally sensitive content — where *"allegation, not finding"* must survive every revision — that guarantee matters more than layout convenience. In a design tool, that guarantee is a human remembering.

Brand correctness is also structural: `#3A759F` and the mark come from the repo, so a carousel cannot drift from the site.

---

## 2. THE CAROUSEL PIPELINE

**Renderer:** `scripts/ig-carousel.tsx` (Satori / `next/og` — same engine as the OG card routes).
**Per-carousel data:** `scripts/ig-carousels/<name>.ts`.
**Run:** `npx tsx scripts/ig-carousel.tsx <name>` → PNGs to `~/Downloads/`.

**A new carousel is ONE DATA FILE.** The Lilly pilot was 79 lines, zero renderer changes, zero overflow warnings, zero hand-tuning. If a story needs renderer edits, that's a finding worth reporting — it hasn't happened yet.

### 🔒 SETTLED — do not re-litigate
- **Asset: `public/pp-mark.png`**, the square brand tile built for this format — NOT `logo-glasses.png`. The renderer vector-draws an inverted version on dark fields, since a raster can't invert in Satori.
- **80px horizontal padding is correct.** Instagram's 4:5 → 1:1 grid crop is **vertical**, not horizontal. Measured ink bounds: L=80, R=82–88, T=141, B=229–393. The vertical margins are already well past any safe-zone requirement; the sides are never at risk from the crop or UI overlays.

### Recorded ideas — NOT tasks
- **Optional vertical centering for sparse slides.** Composition is top-aligned; slide 5 measured a 393px gap below the CTA. Reads as calm rather than broken. A one-time renderer change if ever wanted.
- The 8-slide restructure remains **open and untried** — the Lilly pilot was 5 slides because the brief said 5, not because 8 was rejected.

---

## 3. 🔒 CAROUSEL CONVENTIONS

- **1080×1350**, five slides is the working default.
- **Slide 1 must survive as a thumbnail** — it's the only one most people see. Open with the surprise, not the summary.
- Assume it's read at **3 inches wide**: large type, short lines, generous margins.
- **The URL is READ, not tapped** — Instagram makes nothing clickable. Keep it short and typeable, and make it **the CTA element**, not a footer line.
- **For litigation stories, the allegation framing gets its own slide.** Not a clause inside another slide.
- No urgency styling. No ornament that isn't doing work.

---

## 4. THE THREE SURFACES — same story, three artifacts

| | Shape | Link |
|---|---|---|
| **X** | 3–4 short paragraphs, surprise first | Live. ⚠️ `/news` renders the **generic hub card**; the article URL renders **its own card** matching the post. Choose deliberately |
| **Facebook** | Longer, self-contained — read in-feed, clicked only if the text earned it | Live; watch the OG card build in the composer before posting |
| **Instagram** | 5-slide carousel | **None** |

🔒 **PP never refers to itself, its roster, or its listings in news content** — no "one of our vendors," no "vendors we list." The site reports the industry; it is not a character in the story.
*(⚠️ The Aug 17 three-lanes article predates this rule and contains self-reference. Left deliberately — that passage is honest disclosure about where PP sits, not self-promotion.)*

🔒 **"A lawsuit is an allegation, not a finding"** survives every revision on every surface.

---

## 5. ACCOUNTS

- **X:** @ProfPeptideHQ plus the rotation accounts (PP_X_POSTS §rotation).
- **Facebook:** facebook.com/profile.php?id=61570750762108 — a Page with Insights, Planner, and Boost available.
- **Instagram:** @profpeptidehq.

---

## 6. LOG

| Date | Story | Surfaces |
|---|---|---|
| Aug 18 | 503B exclusion / three lanes | Facebook (OG card rendered) |
| **Aug 29** | **Lilly retatrutide lawsuits** | Facebook ✅ · X (drafted) · **Instagram carousel — 5 slides, `3929caa`, PNGs in `~/Downloads/pp-ig-2026-08-29-lilly-lawsuits-{1..5}.png`** |
