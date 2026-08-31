# SCS_MP — v6.15 Addendum (July 20, 2026)

**Status:** ACTIVE drop-in. Append to / version into SCS_MP v6.14 (governing studio master).
**Purpose:** Captures studio-level decisions from the July 20, 2026 PP-site redesign push session — the redesign shipping, the logo/favicon resolution, the BPC-157-template decision, and queued post-push workstreams.

---

## 🚀 PP SITE REDESIGN — SHIPPED (July 20, 2026)

The full parked redesign (74 commits, `05282f7..48b757f`) was reviewed page-by-page and pushed to `origin/main` → auto-deployed to profpeptide.com. Live-verified in production (new palette present, old teal `#0891b2` gone site-wide, key routes 200, favicon recrawl started). What shipped:

- **CP palette pivot, light-only:** accent `#3A759F` (WCAG-AA pass; replaced `#0891b2`), surface `#F4F6F8`, ink `#16181B`, border `#D9DEE4` (card/section only — hairline dividers left alone), canvas `#FFFFFF`. **Dark mode disabled** (toggle hidden, code kept).
- **Header logo** → bordered "Pp" periodic-tile mark (`pp-mark.png`). **Coupon-tag favicon** (sharpened, exact `#3A759F`, apple-icon on white tile).
- **`/app` premium card** (bordered mark icon, `.panel-card` elevation, App Store CTA; "Research & Education" subtitle removed; iOS 15.1 correct).
- **Vendors nav dropdown** (Verified Vendors / Featured Vendors / Vendor Discount Codes) + **footer VENDORS column** (was SOURCING) + **homepage "Verified Vendors" hero card**. Nav order: **Peptides · Calculator · Vendors · Codes · App**. "Codes" kept standalone (deliberate overlap, Peptide-Critic precedent).
- **Best Peptide Vendors → "Featured Vendors"** (display label only; URL slug `/best-peptide-vendors` kept for SEO). "Best" dropped because it's an unsubstantiated superlative that disparages other listed vendors; "Featured" is honest curation.
- **New vendors:** Glacier Aminos card; Swiss Chems (3 surfaces). **Adamax** honest profile. Peptide-linking fixes (Midwest ×5, Aero CJC-1295). Search-overlay Quick Links reordered to nav order + placeholder "Search peptides, comparisons, vendors…".

---

## 🎨 LOGO / FAVICON — RESOLVED (do not re-litigate)

**Two marks, on purpose:** header/app = **bordered "Pp" periodic-tile**; favicon = **coupon-tag** (matches coupon-search discovery intent). Both correct, different jobs. (Adobe trade-dress concern is CLOSED — decided long ago; do not reopen.)

**The "logo looks wrong / black tile" saga — root cause found:** It was NEVER browser cache, a wrong file, or a wiring bug. Two real causes, both resolved:
1. **App-card corner-rounding:** CC applied a `rounded-*` class to a square-cornered icon, clipping its corners. **Fix:** render `pp-mark.png` un-rounded, matching how the header uses it (grab the saved asset, don't restyle corners). **LEARNING:** when a saved icon looks wrong in a card, check whether CODE is rounding/restyling it before suspecting the asset.
2. **Border-too-thin-at-small-size (earlier red herring):** the full-res bordered mark's blue ring is a thin band that nearly vanishes when downscaled to ~48px header size — which *looked* like an old black tile. This was diagnosed, then superseded by the corner-rounding finding as the actual fix. (If the header mark ever reads too dark at small size again, the asset-level fix is a proportionally thicker border — but corner-rounding was the real culprit this round.)

**Favicon regen pattern (worked):** ChatGPT generates the shape (approximate hex OK) → CC vectorizes (potrace → SVG), locks fill to EXACT `#3A759F`, generates the full set (16/32/48/.ico/192/512/apple-icon), apple-icon on a **solid white tile** (transparent composites on black on iOS home screens). Judge legibility at **16px** — the only test that matters for a favicon.

---

## 📐 BPC-157 = THE INTENDED PROFILE TEMPLATE (decision clarified July 20)

BPC-157 is **not an outlier to leave alone** — it's the **template Mark deliberately built** for the whole peptide library to follow. Post-push audit confirms current state: **1 rich (bpc-157) · 54 standard** (metadata block + PageTOC), no half-migrated pages, Adamax correctly on standard.

- **Rich template = Quick Facts box** (What it is / How it's taken / Half-life / Typical research dose / Research status) **+ sticky-rail ProfileTOC** (two-col layout) **+ VendorHighlightBlock** in where-to-buy.
- **Rollout = QUEUED post-push workstream** (deliberately NOT part of the redesign push). Phased: read-only planning pass (does each profile's Quick Facts data already exist in frontmatter, or need sourcing?) → pilot 2–3 → Mark review → sweep the remaining 54. Do NOT blind-sweep 54 pages.
- **Correct direction:** bring the 54 standard profiles UP to BPC's rich template — NOT bring Adamax/others to "parity" by stripping (that would move them away from the intended standard).

---

## 🔁 EXECUTION-MODEL REINFORCEMENTS (observed this session)

- **CC owns build research + writing + code; Claude instructs.** Confirmed repeatedly — CC researched Swiss Chems catalog, researched Adamax (found zero literature and correctly STOPPED to ask rather than fabricate), classified the profile backlog. Claude's job = spec + template + guardrails + verified facts + acceptance checks.
- **RULE #0 wins protected us this session:** CC refused to bump a fabricated iOS version (kept real 15.1), refused to double-link CJC-1295 against the first-mention rule (then relinked when Mark gave the list-consistency exception), refused to build Adamax on borrowed citations, self-caught a `git add` that missed the apple-icon commit and amended it, and md5-verified the logo asset instead of guessing.
- **Validation without `next build`:** while a dev review server is running, CC validates via `tsc` + the dev server's per-route compile (never `next build` — it shares `.next` and corrupts the review server). For the production push, CC stopped the dev server, ran an isolated `next build`, then restarted it.
- **Behavioral note (Claude):** stop appending "good place to stop / call it here?" suggestions. Mark's standing instruction = autonomous execution with flagged decision points, NOT frequent check-ins or nudges to disengage.

---

## 📋 QUEUED POST-PUSH WORKSTREAMS (priority order)

1. **Ref-doc updates** (this batch — capture tonight's decisions).
2. **AffiliateWP referring-URL pull** (Peptide Partners channel — the #1 money question: which channel pays for ~51% of PP revenue). Data pull, not a build.
3. **Swiss Chems priority profile batch:** GHRP-2 + GHRP-6 + Hexarelin (each = 3-vendor reach).
4. **Rest of Swiss Chems profiles:** IGF-1 DES, MGF(+PEG-MGF), Adipotide, Cibinetide, Gonadorelin, Triptorelin.
5. **BPC-157 template rollout** (planning pass → pilot → sweep).
6. **Other-vendor consistency sweep** (apply the omit-out-of-scope rule site-wide).
