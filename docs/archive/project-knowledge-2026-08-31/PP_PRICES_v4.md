# PP_PRICES — Price Pull & Comparison Data

**Version:** v4 (August 4, 2026) — **DATA-INTEGRITY SESSION.** Adds the plausibility guard, four format-exclusion rules, the non-USD refusal, and the kit-detection fixes. Supersedes v3.

---

## 🔴 THE HEADLINE FINDING

**Structural correctness and factual correctness are different properties, and until Aug 4 only one had a guard.**

Every existing check verified *shape* — does the row exist, does the link resolve, did the row count collapse, is the vendor in the registry. **None checked whether the number was believable.** Both major bugs found this session produced structurally perfect rows containing wrong numbers, and both were found by chasing a single anomalous row rather than by any automated check.

`check:prices` (below) is the fix. **On its first run against data that passed every structural check, it found three live-wrong rows.**

---

## 🆕 `check:prices` — the plausibility guard

**Wired into the build chain. WARN-only, exit 0 — never gates a deploy.**

**Rule:** for each (compound, size) group with **≥3 distinct vendors**, take the median $/mg and flag any row **≥4× or ≤¼×** it.

**Three design decisions that matter:**

1. **Compounds with <3 vendors print as an explicit UNCHECKED list.** A guard that silently skips what it can't assess is worse than no guard — it implies coverage it doesn't have. The UNCHECKED list is where the royal kits hid, and it earned its keep immediately (see the modern-aminos case below).

2. **Systematic vs isolated signal.** If most of a vendor's rows breach, it prints `SYSTEMATIC — likely a currency/unit bug`. Isolated rows print as kit suspects. That distinction maps exactly onto the two real bugs.

3. **N=4, calibrated against live data.** Ten flags on first run, ~6–8 genuinely actionable. Raising to N=5 would silence one legitimate BOGO row at the cost of three real suspects. **A warning nobody reads is worse than no warning** — 10 lines is readable, 40 would not be.

**Verified against both known bugs before shipping:** NOVA's AED rows restored → flagged SYSTEMATIC. Royal's igf-1-lr3 $570 restored → flagged ISOLATED at 8.5× median.

**Honest scope:** it cannot see kit-totals that *look* in-range, and cannot check <3-vendor compounds. It **complements, never replaces**, name-based kit detection.

**Remaining flags (agreed leave-alone):** spartan tb-500 10mg/5mg + ghk-cu 50mg (premium); almighty glutathione 1500mg + retatrutide 10mg (BOGO). **PP does not model vendor promos** — the grid shows list and post-code price, not effective price after a vendor's own offer.

---

## 🔒 NON-USD REFUSAL (option a)

**NOVA Labs' Store API reports `currency_code: AED`. The pull stored those numbers as USD — every row inflated ~3.67×.**

**The real defect was upstream:** the woo adapter **stripped `currency_code` during normalization.** The guard's first version didn't fire because it was checking a field that never reached it.

> **Lesson: normalize LESS than seems necessary at an adapter boundary. You cannot check a field you discarded.**

**Fix shipped:** `adapters.woo` carries `currency` through; `adapters.NonUSD` raised in `build_vendor` if any product reports non-USD; `refresh.py` prints a loud `[CURRENCY]` line and writes nothing. Adapters without a currency field default to USD.

**Why refuse rather than convert:** AED is pegged so a constant looks safe, but the next non-USD vendor could be GBP/EUR/CAD, and a stale rate produces quietly-wrong prices rather than loudly-broken ones. **A vendor absent from comparison is honest; a vendor 3.67× wrong is not.**

**NOVA is currently OFF `/prices`** and in `ONBOARDING_BACKLOG` with a non-USD reason. Upgrade path if non-USD vendors become common: option (c) — store currency, render natively, exclude from cross-vendor ranking.

---

## 🔒 FOUR FORMAT-EXCLUSION RULES

All keyed on the **size/strength attribute value, never free text** (descriptions mention ml for bac water and reconstitution). All **FP-scanned across every vendor before applying.**

| Rule | Catches | FP scan result |
|---|---|---|
| **Kit — by name** | Simple products titled "…Kit" with no variations | Clean |
| **Kit — glued/hyphenated** | `10-vials`, `10mgx10vials`, counts 2–99 | Clean |
| **Per-ml concentration** | `33mg per ml`, `mg/ml`, `mcg/ml` | Clean — only liquids/oils/SARMs, never a peptide vial. Dropped 9 rows |
| **Count/tablet** | `per cap`, `per tab`, `N ct`, `N tabs` | Clean — no-op on current data, future-proofs |
| **Wholesale-only** | Explicit "Wholesale ONLY" in name | Only Swiss Chems AOD-9604 |

### ❌ SLUG-BASED KIT DETECTION — REJECTED

**The FP scan killed it: 18 slug matches, only 2 real leaks.** Royal uses `-kit` in slugs pervasively on correctly-priced singles (`bpc-157-…-vial-kit`, `epitalon-kit`, `sermorelin-…-kit`). Biocollex has `glp3-bundle` at in-range prices. Peptide Partners has `tb-500-tb4-kit-20mg-100mg`.

**Dropping 16 legitimate rows to catch 2 is worse than the disease.** The 2 real leaks were handled with a targeted `MANUAL_EXCLUDE`.

> **Rule: run the FP scan across ALL vendors before applying any pattern. It has now stopped one bad rule and validated four good ones.**

---

## 🔒 MANUAL_EXCLUDE — named SKUs only

| Vendor | SKU | Reason |
|---|---|---|
| royal | cagrilintide-kit | Kit; slug marked, name not |
| royal | cjc-1295-…-5mg-kit | Kit; slug marked, name not |
| royal | VIP 10mg $465 | **Internally impossible** — single priced ABOVE the same vendor's 10-vial kit ($330) |
| behemoth | Dihexa | "10mg per ml" mis-parsed as a 10mg vial |

**The VIP standard is the one to reuse:** exclude a vendor's stated price only when it is *internally* contradictory, not merely unusual. A 7× expensive vendor is information; a single costing more than ten of itself is an error.

### ❗ COUNTER-EXAMPLE — modern-aminos `250MCG -Dry-Fill`

Flagged as a suspected 1000× unit error. **It isn't.** It's a lyophilized 0.25mg vial; $312/mg is arithmetically correct for a tiny dose. **No evidence supported a mcg/mg typo, so it stays.**

> **Excluding a vendor's stated size because the price looks unusual is guessing.** This row sits correctly in the UNCHECKED list (<3 vendors for SLU-PP-332) — the guard honestly reporting its blind spot is what caused it to be examined manually.

---

## 🔒 DECODE EVIDENCE HIERARCHY

Established across five vendors this session. **Never decode from a suffix convention.**

| Strength | Evidence | Example |
|---|---|---|
| **Strongest** | CAS number + molecular formula + MW | Amino Club `GLP-2 (TR)` → Tirzepatide (CAS 2023788-19-2, C225H348N48O68), `GLP-1 (SM)` → Semaglutide (CAS 910463-68-2, C187H291N45O59, 4113.58 g/mol) |
| Strong | Unique mechanistic spec in vendor's own description | Legendary `Reta` → "triple agonist GLP-1/GIP/glucagon"; NOVA `GLP-3 (RT)` → "triple agonist" |
| **Insufficient** | Suffix convention alone | Nura `GLP-3R`/`GLP-2T`/`GLP-1SG` — generic boilerplate → left `[coded, UNVERIFIED]`, excluded from grid |
| **Never** | Customer reviews | Legendary's "99% pure" appears in a review, not a spec → excluded |

**Cross-vendor corroboration is the strongest confirmation available:** Amino Club's GLP-2 CAS and formula are byte-identical to the independently-researched amino-x AX-TR entry.

**Amino Club's MW read 4810.52 vs published ~4813.5.** Flagged in-code rather than smoothed. CAS + formula are exact and unique, so identity isn't in doubt.

---

## 🆕 `KNOWN_ZERO_ROW` SPLIT

The old flat allowlist couldn't distinguish "unpullable forever" from "shipped Tuesday, not onboarded yet" — and **every new vendor was added to it as routine, silencing a guard that was firing correctly.**

| List | Behavior |
|---|---|
| `UNREACHABLE` | Permanent, silent. `integrative-peptides` (0 in-scope rows). `limitless-biotech` auto-exempt via registry BLOCKED |
| `ONBOARDING_BACKLOG` | `slug → { reason, since }`. **WARNS every build with age in days.** Louder past 30 days. **Never fails on age** — an overdue TODO must not block a deploy |

**Currently in backlog:** 99-purity (cinc), biopure (cinc), nova-labs (non-USD), licensed-peptides (Store API surfaces supplies ahead of the peptide catalog).

---

## Adapter roster

`woo` · `woo + session-auth` (modern-aminos, cookie ~14d) · `woo + permalink resolution` (biocollex, HEAD-follow at pull time) · `nextjs_feed` (crush — RSC flight) · `gatsby_pagedata` (spartan) · `cinc` (manual, refresh.py skips)

**BLOCKED entries must be verified against DATA, not page appearance.** Crush and Spartan were wrongly blocked for weeks from surface observation. A blocked API does not mean a blocked catalog.

---

## Suite bug fixes (committed separately, findable on their own)

- `variation_models.py` None-guard — nura ships a variation with a null attribute value; `' '.join()` crashed
- `is_kit` hyphenated match — matched `10 vials`, not `10-vials`
- `is_kit` name-based — only inspected variation *attributes*, never product names
- `is_kit` glued form — `10mgx10vials` had no word boundary

---

## Changelog

**v4 (Aug 4, 2026):** `check:prices` plausibility guard · non-USD refusal · four format-exclusion rules · slug rule rejected on FP scan · MANUAL_EXCLUDE · KNOWN_ZERO_ROW split · decode evidence hierarchy · four suite bug fixes.
