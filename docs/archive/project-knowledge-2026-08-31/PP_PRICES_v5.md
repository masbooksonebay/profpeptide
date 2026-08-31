# PP PRICES — v5

**Status:** ACTIVE. Full replacement, supersedes v4 and all earlier versions.
**Date:** August 6, 2026
**Scope:** the `/prices` grid — data model, defect classes, the classifier rules, the guard chain, pull discipline, and current state.

> **This is a full rewrite, not an addendum.** v2 contained two errors that survived into live recommendations because nobody re-read them (see §9). Current state and current rules only — history lives in the frozen snapshots.

---

## 1. STATE

| | |
|---|---|
| Grid rows | **1,666** (was 1,627 at session start) |
| Active vendors | **40** (NOT 41 — corrected) |
| Vendors with price rows | 37 |
| No-size exclusions corpus-wide | 72 (was 109) |
| `PRICES_UPDATED` stamp | **minimum** per-vendor pull date, not a frozen constant |

**Re-pulled this session:** ez · mile-high (+35 rows) · peptidology · biocollex · crush · amino-x · glacier · synthesis (+8 rows)

**Held, not re-pulled:** vital-core (real login wall) · biolongevity (BioStrips format outliers) · swiss-chems (throttling + holds hand-restored rows)

---

## 2. THE FOUR DEFECT CLASSES

All four were live on production. All were invisible to `check:prices`.

### Class 1 — Blend leaks
A multi-compound product classified as a single. `BPC-157 + TB-500 blend` renders as BPC-157 at the blend's total price.

**24 found across 9 vendors.** Plus `retacagri-blend` at ez, found on the first re-pull.

**Why the guard misses them:** the leak's $/mg often lands near the median. ez's retacagri sat at **0.98× the cagrilintide median**. No threshold catches that. Worse — where several vendors sell the same blend, the leaks form their own consensus and *become* the median (five semax-selank rows did exactly this to Selank 20mg).

### Class 2 — Count-format
An oral pack's per-unit dose read as the package size. `BPC-157 500mcg × 100 tabs` rendered as 0.5mg, giving $450/mg against a ~$4 median — 100× wrong.

**Recoverable, not garbage.** 500mcg × 100 = 50mg for $225 = $4.50/mg, on the median. The first response was to exclude these; that was wrong and cost a round trip to undo.

### Class 3 — Size-string annotations
Vendor size strings carrying batch and purity data: `552.18 mg| Batch 1708 | 99.8% Purity`.

**Root cause was the adapter, not the parser.** `parse_size` handles the display string correctly. The woo adapter was reading `variation.attributes[].value` — the WordPress **term slug**, where slugification turns the decimal into a hyphen (`552-18-mg-batch-1708`). `parse_size`'s hyphen-absorbing `[\s-]*` then skipped `552-` and grabbed `18-mg`. The decimal-preserving string lives in `attributes[].terms[].name`, which the adapter never read.

Also produced phantom sizes — a 98mg CJC-1295 row from `4.98`, a 61mg MOTS-c from `10.61`.

### Class 4 — Format comparability *(display, not data)*
Bulk powder, oral capsules and injectable vials ranked against each other by $/mg. **SLU-PP-332 spans 4239×** — $0.07/mg bulk against $5.56/mg caps, both correct. Tesofensine mixes five formats.

Rule 3 already separates sprays from vials for this reason. Unresolved for other formats. **Open decision.**

---

## 3. THE CLASSIFIER RULES

### Rule A — blend guard · Part 1 SHIPPED (`9a5bc15`)
Resolve each name segment through full `match()` — ALIAS **plus** the exact-slug fallback — and count distinct compound slugs. ≥2 → exclude from singles, report as a blend-registry candidate.

Runs **after** `blend_of`/`BLEND_COMPONENTS`, so registered blends still route to the blends section.

**Two aliases added:** `reta` → retatrutide, `5 amino mq` → 5-amino-1mq.

**Part 2 — the abbreviation set — REJECTED.** `cag` (1 hit, coded) and `nad5` (0 hits) dropped outright. `bpc`/`tb`/`cjc`/`ipa`/`pt141` held — `blend_of` already covers those families, so the risk of 2–3 letter tokens outweighs marginal value.

**What Rule A cannot catch, permanently:**
- **Branded blends with no compound token** — `the-alpha-blend`, `Super Blend`, opaque `Wolverine` variants. 10–25 corpus-wide.
- **Coded combos** — `PG-3RT+C` (peptide-giants), `GLP-3R / CAG` (nura). Both Reta+Cagri under vendor codes. Needs decoder work.

### Rule B — count-multiplication · SHIPPED (`005980a`), validated live on ez
Name (then vendor slug) contains a count token — tabs, tablets, caps, capsules, ct, count, bottle, pills, softgels — plus a per-unit dose → `size = dose × count`.

**Two FP guards, both load-bearing:**
- Count number must **precede** the count word; a count word followed by a digit is rejected. This is what stops `LL-37 … CAP-18` reading as "37 caps."
- `product/pentadecapeptide` contains "cap" and is BPC-157's scientific name. Word-boundary gated.

**Abstain on ambiguity** — royal's `discover-slu-pp-332` lists "50/100" and stays excluded.

**Name-then-slug** because royal displays "Tesofensine" and keeps the count only in the slug.

### Rule C — size from display term · SHIPPED (`483c6d3`)
woo adapter resolves each variation's value-slug to `attributes[].terms[].name` before `parse_size`. Falls back to raw value on a miss, and **logs loudly** if the fallback matches a slugified-decimal shape.

`parse_size` hardening was **rejected** — the lookbehind doesn't fix the bug (`552-18-mg` → `8mg`) *and* regresses Alpha's `cjc-1295-5mg` to `None`.

Isolated FP-scan: **10 changes, 2 vendors, all slugified decimals, zero collateral.**

### Rule D — dedup + absence guard · NOT BUILT
Once C parses correctly, nominal and batch-weight variants co-exist as near-dupes: MOTS-c (10 + 10.61), CJC-1295 (5 + 4.98), N-Acetyl Semax (10 + 9.50), GLP1 (5 + 5.01), N-Acetyl Selank (10 + 11.12).

**Both correct, both redundant.** Cleanliness, not correctness.

**The absence guard is the harder half.** No guard can see a row that *should* exist and doesn't. `check:prices` sees ratios, `check:prices-sync` sees doc-vs-artifact, `check:doc-integrity` sees structure. The tractable version: persist per-(vendor, compound) row counts each pull and **WARN** on a significant drop — it can't distinguish a delisting from a regression, so warn, never fail.

---

## 4. THE GUARD CHAIN

| Guard | What it catches |
|---|---|
| `check:prices` | $/mg outliers vs same-size median. **Blind to near-median leaks and to anything with <3 vendors.** |
| `check:prices-sync` | Committed `prices.generated.ts` / `prices.index.json` vs `to_prices.py --emit` from the doc |
| `check:doc-integrity` | Header integrity, no `---##` glued boundaries, section↔registry coverage |
| `check:grids` | Active vendor with a coupon page and 0 price rows must be accounted for |
| `check:counts` | Derived counts |
| `check:freshness` | Coupon description budgets, stamp age |
| `check:surfaces` | Registry-derivedness. WARN-only. |

### `edit_master_doc(transform, expected)` — `pricepull/docedit.py`
Reads with `splitlines(keepends=True)`, touches only whole data rows, asserts the non-row skeleton is byte-identical before and after, **refuses to write** on any structural drift or wrong count.

**Acceptance-tested against both real failures:** the glued `---## VENDOR:` boundary, and the 12 silently-eaten blank lines from `04f9b0a`. Refuses both.

> **Never hand-roll string surgery on the master doc.** `'\n'.join(kept)` drops section-trailing newlines. It corrupted two vendor sections once and silently ate 12 blank lines another time where a buffer happened to absorb it.

### Truncation guards
- **`X-WP-Total`** — every woo Store API states its own catalog size. Fetched < claimed → `IncompletePull`, refuse to write. Deterministic, percentage-free.
- **Variation-fetch guard** — a failed variation page used to swallow to `None` and fall back to the *parent* price, producing a wrong per-size price no row count reveals. Now raises.
- **`IncompletePull` is never writable.** It's a broken fetch; the fix is retry. `--allow-shrink` does not override it.
- **Floor: 80%** (was 50%). Baseline counts only **priceable** rows — `—`-size placeholders are skipped, since fresh counts exclude them and the doc's don't.

> **Root cause of the original floor failure:** the pagination loop ends when `len(page) < per_page`. A degraded HTTP 200 returning a short body is indistinguishable from "last page." la-peptides truncated 43→23 (~47%) and would have been **written** under the 50% floor.

### 🔴 Non-woo adapters have roughly half this coverage

| Adapter | Vendors | Stated total? | Exposure |
|---|---|---|---|
| **nextjs** | amino-club, science-based, synthesis, midwest | **YES — sitemap URL count, unused** | **HIGH** — `except: continue` silently skips failed pages |
| **payload_99purity** | 99-purity | **YES — `totalDocs`, unused** | **HIGH if catalog >100** — `?limit=100`, no pagination loop |
| nextjs_feed | crush | no | MEDIUM |
| gatsby_pagedata | spartan | no | MEDIUM |
| purity_api | purity | no | MEDIUM |

**Open item.** The highest-value fix is nextjs — 4 vendors, a stated total available, and a live silent-truncation path.

---

## 5. PULL DISCIPLINE

1. **One vendor at a time. Never `--all --write`.** Bulk pulls truncate; it was reproduced twice in one run.
2. **Hand-read every new or resized row.** Rule A can't see branded blends or coded combos, and `check:prices` can't backstop near-median leaks. Budget a manual review per vendor.
3. **Commit all three files on any row-count change** — the doc, `prices.generated.ts`, AND `prices.index.json`. The crush deploy failed because the index was omitted; the local build passed because the working tree held the regenerated copy.
4. **Verify live by curling the deployment URL**, not just the production alias — the alias can serve a CDN-cached page while the data is correct.
5. Guard trips isolate to one vendor. `IncompletePull` → retry. Floor → investigate, then `--allow-shrink` only for a genuine delisting.

---

## 6. DATA RULES

- **Sprays: separate format sub-category.** Never merged with vials.
- **`—`-size rows stay in the doc.** They're the record that we saw a product and couldn't size it — the inventory a recovery job needs. `to_prices` drops them; they never render.
- **Desc-sizing** (Rule 4 exception): a simple product with exactly ONE unambiguous mg figure in its description gets that size. Reject if more than one figure, or if the figure sits in a per-ml, per-dose, per-serving, reconstitution or blend-component context. **Abstention on ambiguity is correct behavior, not a gap.**
- **Spray vs vial is decided per-product**, on that product's own name — not per compound. Vendors sell both forms of the same compound.
- **Sale vs coupon:** a woo product-level `sale_price` where `price < regular_price` is the displayed no-code price and IS the base. A code-gated discount is NOT.
- **Non-USD blocks `/prices` rows** pending the currency decision. NOVA (AED) and Particle (EUR) are both parked in `ONBOARDING_BACKLOG` on this.
- **MANUAL_EXCLUDE is for residual one-offs**, not a scaling mechanism. Entries must carry a reason. An entry holding *correct* data on hold (ez `5-amino-1mq` count-pack, pending the format decision) must say so explicitly — the next reader must not mistake it for a leak.

---

## 7. THE FP SCAN — NON-NEGOTIABLE

**Run any pattern against every raw catalog and report what it would catch BEFORE applying.**

It changed the answer **four times** in one session:
- Slug-based kit detection: 18 matches, 2 real leaks, **16 legitimate rows** it would have destroyed.
- The `pentadecapeptide` exclude frag: would have hit **3 rows, not 1** — two rendering plausibly at $7.60 and $6.80/mg.
- Oral-format exclusions: **8 of 13 recoverable**, not leaks.
- Peptidology "phantoms": **0 phantoms**, 6 repairs.

---

## 8. HONEST LIMITS

- **`check:prices` cannot see a leak priced near the median.** 0.98× is invisible at any threshold.
- **Unique sizes have no median at all** — a blend total at 4, 6, 11, 27mg is never evaluated. 13 of the 24 blend leaks sat in unchecked size-groups.
- **A common leak validates itself.** Five vendors selling semax-selank as "Selank 20mg" became the Selank median.
- **Nothing sees absence.** A row that should exist and doesn't is invisible to every guard.
- **Ratio alone is not evidence of error.** modern's GHK-Cu at 84× and KPV at 37× are real "Dry-Fill" micro-variants, correctly rendered. A format premium and a parse bug look identical in the ratio.
- **`to_prices.py` is not in `npm run build`.** `prices.generated.ts` is a committed artifact; `check:prices-sync` is the only thing verifying it matches the doc.

---

## 9. CORRECTIONS TO v2 — READ THIS BEFORE TRUSTING ANY OLDER VERSION

| v2 said | Reality |
|---|---|
| Mile High needs a **recurring manual CINC pass** for sizes | **35 of 37 recover automatically** from the `description` field, which the adapter already parses. Only SLU-PP-332 and Tesofensine genuinely need manual sizing (two sizes stated in each description → correct abstention). |
| 41 active vendors | **40** |
| "27 hardcoded coupon codes" implying a systemic problem | Narrower. For Glacier it was **two FAQ answers**. Code card, meta description, JSON-LD Offer and OG card all derive from `vendors.ts`. |
| Glacier `coa: per-batch`, no lab named | **Kovera Labs**, per-batch, public verifier codes. Confirmed from the certificate. |
| Peptidology no lab named | **Vanguard Laboratory** (A2LA #6377.01.01) + **Eagle Analytical Services** |
| Licensed Peptides `coa: library`, HPLC + mass spec | **per-batch**, **Vanguard Laboratory**, **HPLC-UV/VIS only** — the mass-spec claim was an overstatement |

**Vendor testing generally: the registry understates it.** Five vendors were understated the same way — the lab is named **on the certificate** and nowhere else, and the registry reflects whatever was reachable on the day the vendor was onboarded. See SCS_MP for the standing rule.

---

## 10. OPEN

| Item | Note |
|---|---|
| **Format comparability** | SLU-PP-332 spans 4239×. Options: format sub-tables (mirrors the sprays precedent), a format column with per-format ranking, or excluding bulk. **Mark's decision.** |
| **Rule D** | Near-dupes live on 5 peptidology products. Absence guard unbuilt. |
| **Coded-combo decoders** | `PG-3RT+C`, `GLP-3R/CAG`. Vendors with coded systems: ascension, amino-club, ez, mile-high, peptide-giants. |
| **nextjs / payload truncation guards** | 5 vendors below woo's coverage. |
| **Permalink resolver follows redirects** | A vendor adding a gate collapses every slug onto one shared destination and reads as ordinary churn. Proposed signal: one resolved path serving N>1 distinct source permalinks → treat resolution as failed, keep the raw path, log loudly. **General defect.** |
| **vital-core** | 40 rows behind a verified hard login wall — WooCommerce login + 3-step registration, accounts may need review. Real, not bot detection. |
| **biolongevity** | 4 recoveries are all BioStrips (transdermal, $33–666/mg). `check:prices` blind to them — novel tiny sizes, no same-size peers. Recommend excluding strips before shipping. |
| **swiss-chems** | Escalating throttle (18 → 67 failures → no response). Needs pacing + isolated pull. Also holds hand-restored oral rows. |
| **la-peptides / nextgen `—` rows** | 23 and 14 genuinely size-less — no size in attribute, variation, name or description. Not recoverable without a new source. |
| **peptidology VIP 11.27mg** | Clean slug, anomalous size, excluded pending verification. |
| **biolongevity affiliate link 404s** | `go.biolongevitylabs.com/aff_c` → hasoffers redirect returns 404. **Our own broken outbound link.** |
| **`prices.index.json` sync** | Only `check:prices-sync` catches a stale index. Not in `npm run build` otherwise. |

---

*Full replacement. RULE #0 governs. The artifact beats the doc — if this file disagrees with the code or a live page, the code and the page win, and this file is the defect.*
