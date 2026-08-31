# PP X POSTS — v20

**Date:** 2026-05-24
**Status:** Active tracker. Replaces v19.

---

## Account roster + purpose (LOCKED)

| Account | Purpose | URL strategy |
|---|---|---|
| @profpeptideapp | App promotion only | App Store URL + app thumbnail v3 |
| PP | Sema-cluster vendor codes | `/coupons` URL, no app cross-promotion |
| PREM | Tirz-cluster vendor codes | `/coupons` URL, no app cross-promotion |
| CORE | Reta-cluster vendor codes | `/coupons` URL, no app cross-promotion |
| PEAK | All-3 GLP-combined vendor codes | `/coupons` URL, no app cross-promotion |

---

## Strategy A — LOCKED (May 24, 2026)

**Vendor posts (PP/PREM/CORE/PEAK) stay code-focused. App posts (@profpeptideapp) stay app-focused. Each post has one clean CTA.**

Reasoning:
1. Vendor posts are PP's direct revenue engine (affiliate commissions). Don't experiment with what's working.
2. App thumbnail on vendor post = visual/text dissonance (thumbnail says "app", text says "vendor")
3. Account purpose stays clean: promo accounts promote codes, app account promotes app
4. App Store URL in PP/PREM/CORE/PEAK **bios** (not posts) captures profile-visit traffic without polluting individual posts

**App-first growth (Strategy B) deferred** to data-driven A/B test (4 weeks, track commission per post for both URL versions vs baseline app download attribution). Not now.

**Cross-promotion tactic (future):** Occasional quote-RT of @profpeptideapp posts from PP (~1 in 10) for low-friction cross-promotion. Authenticity-preserving.

---

## @profpeptideapp thumbnail v3 — LOCKED

**Specification:**
- Dimensions: 1200×630 (Open Graph standard, 1.91:1 horizontal)
- Background: Navy `#0f172a` (sourced from `src/components/Header.tsx`)
- Logo lockup: PP "Pp" icon (teal `#0891b2` outline) + "Prof. Peptide" wordmark in teal
- Divider: 1.5px vertical line in slate `#334155`, 378px tall (60% canvas height), centered
- Right side: Official "Download on the App Store" badge (black pill, Apple logo + text)
- No tagline, no feature list, no disclaimer text

**Files:**
- `~/Desktop/profpeptide_thumbnail_v3.png` — primary working copy (AirDropped to iPad Photos)
- `~/Desktop/profpeptide/public/og/app-thumbnail.png` — repo copy (uncommitted)

**Generation approach:** Single SVG composed in CC, rasterized via rsvg-convert (already on PATH via Homebrew). No @vercel/og, Puppeteer, or Sharp dependencies added.

**Usage:**
- Attach to every @profpeptideapp post going forward
- Visual stops scroll; URL in post text drives App Store tap
- PNG does NOT contain embedded link (clarification locked in convention)

**Deprecated:**
- v1 (portrait, feature list) — deprecated
- v2 (portrait, tagline) — deprecated

**Future workstream candidate:**
- Dynamic OG image route (`/app/og/route.tsx` using @vercel/og)
- Per-page OG images for site-wide link preview cards
- Would unlock automatic X card rendering when profpeptide.com URLs shared (no manual attach needed)
- Requires push to take effect; separate wave

---

## @profpeptideapp peptide library post — DRAFTED, ready to fire

Primary variant (locked structure: lead → library description → free/no-signup → URL):

```
Prof Peptide is live in the App Store!

The Peptide Library has 31 profiles — including Retatrutide and other GLPs. How they work, benefits, dosing, side effects, sourcing.

Free, no signup.

https://apps.apple.com/app/prof-peptide/id6761995269
```

**Attached:** thumbnail v3 from iPad Photos

**Locked terminology** (matches site conventions):
- "how it works" (not "mechanism")
- "benefits" (matches site's "Reported benefits:" locked label)
- "dosing" (not "dosage")
- "side effects"
- "sourcing"
- "Free, no signup" — value-prop line

---

## Cycle 4 vendor posts — STRICT ALPHABETICAL ORDER LOCKED

Cycle 4 restart per Mark's instruction. Alphabetical processing:

| # | Vendor | Code | Discount | Status |
|---|---|---|---|---|
| 1 | Almighty Peptides | PROFPEPTIDE | 15% (default) | DRAFTED (lower priority) |
| 2 | Apollo Peptides | TBD | TBD | QUEUED |
| 3 | Ascension Peptides | PROFPEPTIDE | **50%** (corrected) | DRAFTED, fired |
| 4 | Behemoth Labz | PROF10 | 10% | DRAFTED |
| 5 | BioCollex | TBD | TBD | QUEUED |
| 6 | Glacier Aminos | TBD | TBD | QUEUED |
| 7 | Ignite Peptides | TBD | TBD | QUEUED |
| 8 | Integrative Peptides | TBD | TBD | QUEUED |
| 9 | Limitless Life | TBD | TBD | QUEUED |
| 10 | Oasis Peptides | TBD | TBD | QUEUED |
| 11 | Particle Peptides | TBD | TBD | QUEUED |
| 12 | Peptide Partners | TBD | TBD | QUEUED |
| 13 | PureRawz | TBD | TBD | QUEUED |
| 14 | Royal Peptides | TBD | TBD | QUEUED |
| 15 | Spartan Peptides | TBD | TBD | QUEUED |

**Skip (Memorial Day complete):** EZ Peptides, Fusion Peptides
**Skip (VCR Memorial Day):** Vital Core Research

### Account assignments (LOCKED)

- PP → Semaglutide lead
- PREM → Tirzepatide lead
- CORE → Retatrutide lead
- PEAK → All-3 combined GLP framing

### Format spec v3.2 (LOCKED — paragraph 3 removed, 5 paragraphs total)

1. **Vendor + lead peptide opener** — establish vendor + peptide context
2. **Code + discount + 🔥** — single-line CTA with fire emoji
3. ~~Research fact paragraph~~ — REMOVED in v3.2 (was too jargon-y)
4. **"also has" + class breadth** — adjacent product portfolio
5. **Vendor differentiator** — lab testing, USA-based, fast shipping, etc.
6. **URL:** `https://profpeptide.com/coupons`

Char budget: target ≤275 for X 280-char limit safety margin.

---

## Ascension Peptides Cycle 4 — FIRED (50% lock)

Vendor: Ascension Peptides
Code: PROFPEPTIDE
Discount: **50% off** (corrected from initial 15%, locked in vendor cache)
Differentiator: MZ Biolabs / HPLC-UV-MS testing
Status: Posted across PP/PREM/CORE/PEAK accounts

---

## Almighty Peptides Cycle 4 — DRAFTED, lower priority

Vendor: Almighty Peptides
Code: PROFPEPTIDE
Discount: 15% (default)
Differentiator: Generic (needs verification of specific lab/Reta carriage)
Verification flags before fire:
- Confirm 15% is current
- Confirm Reta carriage for CORE post
- Confirm specific lab differentiator

Status: Drafts ready, awaiting Mark verification before posting

---

## Behemoth Labz Cycle 4 — DRAFTED

Vendor: Behemoth Labz
Code: PROF10
Discount: 10%
Differentiator: Janoshik third-party testing (verify)
Status: Drafts ready, lower priority after alphabetical restart

---

## Vendor cache (LOCKED discount/code state)

| Vendor | Code | Discount | Notes |
|---|---|---|---|
| Ascension | PROFPEPTIDE | 50% | LOCKED (Cycle 4 #3) |
| Behemoth | PROF10 | 10% | LOCKED |
| Almighty | PROFPEPTIDE | 15% (default) | Verify before fire |
| EZ Peptides | (Memorial Day rate active) | — | Skip Cycle 4 |
| Fusion | (Memorial Day rate active) | — | Skip Cycle 4 |
| VCR | (Memorial Day rate active) | — | Skip Cycle 4 |

---

## Format conventions (LOCKED — carried forward from v19)

- 280 char limit, target ≤275 for safety
- One CTA per post (no multi-URL dilution)
- 🔥 emoji ONLY on discount line, nowhere else
- Code in ALL CAPS, no spaces
- Discount as "%" not "percent"
- URL on its own line, last paragraph
- No hashtags (deprecated per v18)
- No @-mentions of vendors (deprecated per v17)
- Locked terminology: "how it works", "benefits", "dosing", "side effects", "sourcing"

---

## Next session

- Verify Almighty Peptides discount + Reta carriage + lab differentiator
- Fire Cycle 4 #1 (Almighty) once verified
- Continue alphabetical through Cycle 4
- @profpeptideapp peptide library post can fire anytime (drafted + thumbnail ready)
- Future: schedule occasional PP quote-RT of @profpeptideapp posts (~1 in 10 frequency)
