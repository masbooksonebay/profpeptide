# PP X Posts — Master Ref Doc

**Status:** ACTIVE REFERENCE — promotional X post conventions, vendor code exceptions, profile cache, post cycle history
**Version:** v21 (May 27, 2026) — v3.3 format lock (solo Sema/Tirz removed, recovery + GH topical posts added); vendor discount cache corrected to vendors.ts source-of-truth; OG image route shipped pending tomorrow's visual refinement
**Cross-referenced in:** PP_MASTER v11

---

## 📍 Status Snapshot (May 27, 2026)

**FORMAT:** v3.3 (locked this session)
- 5-paragraph structure inherited from v3.2 (paragraph-3 research-fact removed)
- Solo Semaglutide post REMOVED → replaced with Recovery peptides topical post
- Solo Tirzepatide post REMOVED → replaced with GH peptides topical post
- Solo Retatrutide post RETAINED
- All-3 GLPs combined post RETAINED
- Peptides SPELLED OUT in "Also has" lines (no abbreviations)

**ACTIVE PROMO ACCOUNTS:** PP, PREM, PEAK, CORE
**APP ACCOUNT:** @profpeptideapp (separate from promo)

**CYCLE STATE:** Cycle 4 in flight; Ascension #1 fired; EZ Peptides drafts ready pending v3.3 format application + discount correction (was 15% → corrected to 10% per vendors.ts).

---

## 🔒 v3.3 Format Spec (LOCKED v21)

**5-paragraph structure (paragraph-3 research-fact removed):**

```
Paragraph 1: Vendor + lead peptide opener (ends with `!`)

Paragraph 2: Use code [CODE] for [DISCOUNT]. 🔥

Paragraph 3: "[Vendor] also has [Peptide], [Peptide], and [Peptide]" — peptides SPELLED OUT (no abbreviations), 3-4 peptides max for 280-char budget

Paragraph 4: Vendor differentiator (3rd-party lab, HPLC, COAs, US-based, years operating)

Paragraph 5: https://profpeptide.com/coupons (or future: /coupons/[vendor] once OG cards landed)
```

**v3.3 changes from v3.2:**
- Solo Semaglutide → REMOVED. Replaced with Recovery peptides topical post (BPC-157 lead).
- Solo Tirzepatide → REMOVED. Replaced with GH peptides topical post (CJC-1295 + Ipamorelin lead).
- Solo Retatrutide → RETAINED (newest/most-researched GLP)
- All-3 GLPs combined → RETAINED

**Account assignments (LOCKED v3.3):**
- PP → Recovery (BPC-157 lead)
- PREM → GH peptides (CJC-1295 + Ipamorelin lead)
- CORE → Retatrutide solo
- PEAK → All-3 GLPs combined

**Topical post anchor convention:**
- Recovery: BPC-157 anchor → TB-500, KPV, GHK-Cu in "Also has" line
- GH: CJC-1295 + Ipamorelin anchor → Sermorelin, Tesamorelin, MK-677 in "Also has" line
- Substitute next-most-popular peptide if vendor doesn't carry one in default list

---

## 🔒 Locked Content Rules (UNCHANGED from v20)

**Inherits from v2.10/v3.0:**
- No dosing
- No prices
- No marketing language ("amazing," "incredible," etc.)
- No urgency ("limited time," "act fast," etc.)
- No vial sizes
- Frame differentiators around third-party testing transparency, COAs, purity verification, public lab certifications
- Research findings only — no dosing protocols, no medical advice voice

**v3.2 additions (carried into v3.3):**
- 🔥 emoji ALLOWED on the code line (paragraph 2) — explicit exception to no-emoji rule
- No other emojis anywhere else
- Opener ends with `!` (not `.`)
- Code line is paragraph 2 (not last)

**v3.3 additions:**
- Peptides SPELLED OUT in "Also has" line — Retatrutide not Reta, Semaglutide not Sema, Tirzepatide not Tirz
- "Wolverine blend" with qualifier
- "CJC-1295 + Ipamorelin" spelled out
- Brand blend names like KLOW stay as-is
- 3-4 peptides max per "Also has" line for 280-char budget

**Char budget:** target ≤275 for safety margin against 280-char limit.

---

## 🔓 Vendor Discount Cache (CORRECTED v21 — vendors.ts is source-of-truth)

| Vendor | Code | Discount |
|---|---|---|
| **Ascension Peptides** | PROFPEPTIDE | **50% off** (Best Deal exception) |
| Vital Core Research | PROF20 | 20% off |
| Oasis Labs | PROF15 | 15% off |
| Peptide Partners | PROFPEPTIDE | 10% off |
| Royal Peptides | PROF10 | 10% off |
| Glacier Aminos | PROF10 | 10% off (data gap: not in vendors.ts yet) |
| Behemoth Labz | PROF10 | 10% off |
| PureRawz | PROF10 | 10% off |
| **EZ Peptides** | PROFPEPTIDE | **10% off** (corrected v21 — previously assumed 15%) |
| **Almighty Peptides** | PROFPEPTIDE | **10% off** (corrected) |
| **Apollo Peptides** | PROFPEPTIDE | **10% off** (corrected) |
| **BioCollex** | PROFPEPTIDE | **10% off** (corrected) |
| **Ignite Peptides** | PROFPEPTIDE | **10% off** (corrected) |
| **Integrative Peptides** | PROFPEPTIDE | **10% off** (corrected) |
| **Limitless Life** | PROFPEPTIDE | **10% off** (corrected) |
| **Particle Peptides** | PROFPEPTIDE | **10% off** (corrected) |
| **Spartan Peptides** | PROFPEPTIDE | **10% off** (corrected) |

**Source-of-truth:** `src/data/vendors.ts` — discount values come from there directly. The previously documented "default 15%" assumption was WRONG. Always read vendors.ts before drafting X posts.

**v3.3 vendor caution:** before drafting any v3.3 post, verify the vendor's actual discount from vendors.ts. Default-15% assumption is the error mode that caused EZ Peptides drafts to use wrong discount earlier this session.

---

## 🎨 Dynamic OG Image Route (NEW v21)

**Status:** built, pending visual refinement tomorrow

**Architecture:**
- `src/lib/coupon-og.tsx` — shared helper with `generateCouponOg(slug)` + `altFor(slug)` + parses existing `discount: "10% off"` strings
- 18 per-vendor wrappers at `src/app/coupons/<slug>/opengraph-image.tsx` — 3-line thin wrappers, hardcoded slug per folder
- Static folder routes preserved (no dynamic [slug] refactor)
- Fallback rendering for missing slugs (logo + "Browse all coupon codes at profpeptide.com")

**Brand palette extracted from existing codebase:**
- BG: #0f172a (navy — matches icon.tsx)
- Accent: #0891b2 (teal — matches icon.tsx, about/opengraph-image.tsx, /app/page.tsx)
- Divider: #334155 (slate-700)
- White: #ffffff

**Current state:** dev server tested, all 6 verification renders HTTP 200. Visual refinement needed — horizontal balance + typography proportions look worse than the static app-thumbnail.png placeholder. Tomorrow's session iterates again.

**Once OG image redesign approved + pushed:**
- Switch X post URLs from `/coupons` (main directory) → `/coupons/[vendor-slug]` (per-vendor landing)
- X will auto-render OG card on link preview
- Stop manual thumbnail attachment to vendor cycle posts
- Workflow simplification per design

---

## 📣 Cycle 4 Progress (UPDATED v21 — alphabetical order locked)

| # | Vendor | Code | Discount | Status |
|---|---|---|---|---|
| 1 | Almighty Peptides | PROFPEPTIDE | 10% | DRAFTED (lower priority) |
| 2 | Apollo Peptides | PROFPEPTIDE | 10% | QUEUED |
| 3 | **Ascension Peptides** | **PROFPEPTIDE** | **50%** | **FIRED** ✅ |
| 4 | Behemoth Labz | PROF10 | 10% | DRAFTED |
| 5 | BioCollex | PROFPEPTIDE | 10% | QUEUED |
| 6 | Glacier Aminos | PROF10 | 10% | QUEUED (data gap flagged) |
| 7 | Ignite Peptides | PROFPEPTIDE | 10% | QUEUED |
| 8 | Integrative Peptides | PROFPEPTIDE | 10% | QUEUED |
| 9 | Limitless Life | PROFPEPTIDE | 10% | QUEUED |
| 10 | Oasis Labs | PROF15 | 15% | QUEUED |
| 11 | Particle Peptides | PROFPEPTIDE | 10% | QUEUED |
| 12 | Peptide Partners | PROFPEPTIDE | 10% | QUEUED |
| 13 | PureRawz | PROF10 | 10% | QUEUED |
| 14 | Royal Peptides | PROF10 | 10% | QUEUED |
| 15 | Spartan Peptides | PROFPEPTIDE | 10% | QUEUED |

**Skip (Memorial Day fired):** EZ Peptides, Fusion Peptides, Vital Core Research

---

## 🛠️ X Account Multi-Account-Switching (UNCHANGED from v18)

- Don't log out mid-session
- Switching between accounts on the iPad rapidly triggers login flag
- iPad-cellular bypass works when laptop locked out
- 24-48h cooldown if locked out
- Post from one account, then leave the iPad alone on that account today

---

## 📅 Changelog

**May 27, 2026 (v20 → v21):**
- ✅ **v3.3 format LOCKED** — solo Sema/Tirz removed, replaced with Recovery + GH topical posts
- ✅ **Topical post anchor convention LOCKED** — BPC-157 anchors recovery, CJC-1295 + Ipamorelin anchors GH
- ✅ **Account assignments LOCKED for v3.3** — PP=recovery, PREM=GH, CORE=Reta, PEAK=All-3
- ✅ **Peptides SPELLED OUT** in "Also has" line as locked convention
- ✅ **Vendor discount cache CORRECTED** to vendors.ts source-of-truth (9 vendors corrected from 15% → 10%)
- ✅ **Dynamic OG image route built** — pending tomorrow's visual refinement before push
- ✅ **Cycle 4 progress updated** with correct discounts

**Prior session entries:** unchanged. See v20 history.

---

## 🔗 Cross-References

- **PP_MASTER v11** — vendor code map (synced), v3.3 format reference
- **SCS_MP v6.6** — parent doc

---

*v21 locks v3.3 format and corrects discount cache. Cycle 4 ready to resume in v3.3 format with corrected discounts. OG image route shipped pending visual refinement.*
