# PP PRICES — Price Comparison Section

**Status:** ACTIVE REFERENCE — the price-comparison section's governing doc. First version; the section shipped July 25, 2026.
**Version:** v1 (July 25, 2026)
**Pairs with:** PP_MASTER · PP_SEO · PP_PRICE_DATA_MASTER (the data) · `scripts/price-pull/README.md` (the runbook)

---

## 📍 WHAT SHIPPED (live on profpeptide.com, July 25)

| | |
|---|---|
| **Pages** | **69** — 1 master (`/prices`) + **68 compound pages** |
| Indexable | **66** compound pages (≥3 vendors) + master |
| Noindexed | **2** — `pda`, `thymulin` (2 vendors each). They render and are reachable; only the robots directive is conditional |
| **Price rows** | **1,167** |
| Vendors in data | 25 pulled · **24 rendered** (synthesis-peptides is `retired: true` — data kept, hidden at render) |
| Sale rows | 190 |
| Stamp | `PRICES_UPDATED_DATE` = July 24, 2026, emitted from the doc so site and doc cannot diverge |
| Nav | Peptides · Vendors · **Prices** · Codes · Calculator · App |

**Shipped commit:** `6741feb` (fast-forward merge of `price-page-preview` → main). Branch retained as a rollback reference.

---

## 🏛️ ARCHITECTURE — three tiers, deliberately distinct

| Page | Role | Quality claim? |
|---|---|---|
| **`/prices`** | Comprehensive, everyone, **reporting function** | **None** |
| **`/coupons`** | Vendors PP has codes for | Implicit |
| **`/best-peptide-vendors`** | Genuinely curated | **Yes** — this is where PP's verified-brand equity is spent |

This split is the guardrail that lets the vendor roster scale without diluting the Featured page. Validated against PeptideCritic (137 listed, ~31 monetized).

**Data flow (one-directional):**
```
vendor sites → scripts/price-pull/ (extractors) → docs/PP_PRICE_DATA_MASTER_v1.md
                                                          ↓ to_prices.py
                                          src/data/prices.generated.ts  (do-not-edit)
                                                          ↓ imported by
                                          src/data/prices.ts  (hand-written types + helpers)
```
**The doc is the source of truth.** The transform READS it and never writes it. Generated rows live in their own file so regeneration can never clobber hand-written logic.

**Derived at runtime, never stored:** with-code price, per-mg. **Derived at render, never stored:** whether a compound has a `/peptides` profile; whether a vendor is retired.

---

## 🔒 LOCKED RULES

### 1. Sale vs coupon — what counts as a price

**A price shown on PP is what a buyer pays WITHOUT ENTERING ANY CODE.**

- ✅ **Automatic discounts count as sale prices** — product-level sales AND cart-level auto-discounts requiring no code entry. **Reference case: Biolongevity's sitewide 50%** (`sitewide_sale=0.50`) — automatic, no code, and the storefront renders it as a sale with the regular price struck.
- ❌ **Coupon-gated vendor promotions are NEVER modelled.** **Reference exclusion: Amino Club's ENJOY30** (30%, code required) — evaluated and deliberately excluded.
- **PP's own affiliate code is the only code represented**, applied on top of the no-code price.
- **We do not track, detect, or model any vendor's own coupon codes.** Do not build anything that tries to.

Documented on the `sitewide_sale` registry field and in the price-pull README.

### 2. Codes stack with sale prices ✅ VERIFIED

PP's affiliate codes have always stacked with vendor sale prices. **Ascension verified at checkout July 25** — 50% applies on top of Ascension's sale prices. So base = sale price, code applies on top.

⚠️ **Ascension's 50% is real.** It's a 3–5× outlier against every other code (most are 10–15%) and looks wrong analytically, but it was tested and confirmed. **Do not "fix" it or reclassify it as `sitewide_sale`.** Recorded in the runbook for the same reason.

### 3. Editorial scope — what `/prices` excludes

PP excludes **clinical hormones, biologics, fusion proteins, native growth-factor proteins, and oncology compounds.**

| Compound | Basis | Enforced |
|---|---|---|
| Gonadorelin, Triptorelin | clinical reproductive hormones | `scope()`, name-level |
| **PNC-27** | oncology (p53 anticancer peptide) | `to_prices` `OUT_OF_SCOPE` |
| **Klotho** | native α-Klotho growth-factor protein | `to_prices` `OUT_OF_SCOPE` |

The `editorial_scope` exclusion category is deliberately distinct from `not_a_compound` — these are real, correctly-identified compounds that are simply outside PP's remit. **"Listed = linkable" applies:** an out-of-scope compound must not appear in any vendor listing anywhere on the site.

### 4. v1 scope — singles only

**Excluded:** blends (133 rows), sprays (107), orals/capsules/topicals, `[coded, UNVERIFIED]` rows with no compound identity, rows with no parseable mg, rows with no price.

Blends are a v1.1 track — they need their own type (components, total mg, ratio) and are **not $/mg comparable**. The doc already carries a Ratio column (`"50/10/10 (published)"` or `"not published"`), so display-the-ratio works when they land.

### 5. Ungating

**≥3 vendors → indexable. <3 → `noindex, follow`.** `generateStaticParams` covers ALL compounds so nothing 404s; only the robots directive is conditional. `next-sitemap` includes `/prices` + the indexable compound pages only.

---

## 🔓 CODED VENDOR DECODES

Several vendors sell GLP-1 compounds under coded SKUs. Decoded and rendered as **"Retatrutide (listed as GLA-3 RT)"** — the disclosure is mandatory, not optional.

| Vendor | Codes | Basis |
|---|---|---|
| **Glacier** | GLA-1 SM / GLA-2 TRZ / GLA-3 RT | Initials + **CAS on the product label** (GLA-3 RT: 2381089-83-2, MW 4731.42) |
| **PureRawz** | GLP-1 / GLP-1.2 / GLP-1.3, plus **LY3437943** | Mark's call + LY3437943 is Retatrutide's published dev code |
| **Vital Core** | GLP-1 / GLP-2 / GLP-3 | Mark's call |
| **Ameano** | AMP-1P / AMP-2P / AMP-3P | **Mechanism stated on the product page** — "Triple-Agonist" is uniquely Retatrutide |
| **BioCollex** | GLP-3 RT / GLP-2 TZ, plus a CJC/IPA path | Mechanism-tier (SPEC) |

**Method that works: read the product description for mechanism.** "Triple agonist targeting GLP-1, GIP, and glucagon" is uniquely Retatrutide. Do NOT infer from numbering conventions across vendors — they don't align.

⚠️ **Glacier publishes CAS/MW in product LABEL IMAGES, not page text.** A text scrape can't see them. Recorded in the runbook as a vendor needing manual identity verification each refresh.

**Dedupe rule:** if a vendor sells the same compound at the same size under two names, emit ONE row, keeping the store-facing name for `listedAs`. **If the two names carry different prices, do NOT merge — report.** (Live case: PureRawz retatrutide 5mg, GLP-1.3 $86.03 vs LY3437943 $95.07.)

---

## 🎨 DESIGN DECISIONS (all hard-won, all easy to break)

**Compound pages — labeled columnar grid, NOT cards.** `grid-cols-[minmax(0,1fr)_5rem_5rem_9rem_8rem_5rem]`, identical on the header and every row. Card chrome between rows blocks vertical scanning, which is the page's whole job at 22 vendors. Column labels live in the header only.

**Master page — cards.** Different job: browsable directory, not comparison. Four fields per row.

**Alignment (three separate fixes, all necessary):**
- Header and rows must share ONE explicit template — `auto` columns size per-row and drift.
- Desktop: **`self-baseline` on the four text cells only** (vendor, size, stock, price). NOT row-level `items-baseline` — the `h-9` centered buttons would be pulled out of track.
- Mobile: `items-baseline` on the row, price block `shrink-0 min-w-[5rem]` so it always holds the right edge and the badge wraps instead.

**Badges — mode-independent, always lowest $/mg:**
- Cheapest row OUT of stock → that row "Best $/mg" + cheapest in-stock row "Best in stock"
- Cheapest row in stock → single "Best $/mg"
- All OOS → "Best $/mg" only · Single row → no badge

**Case A is 25 of 68 compounds** — a third of pages have their cheapest row out of stock, which is why the two-badge design matters.

**Out-of-stock rows sort INLINE by price** with an "Out" indicator, not dumped to the bottom. Not muted — the Stock column already labels them.

**Sorting:** master = alphabetical within taxonomy category, no price sort (rows are different compounds). Compound pages = Total ↔ $/mg toggle driving both display and sort, **defaulting to $/mg** (vial sizes span 2mg–1500mg).

**Titles ≠ H1s.** Title carries "cheapest" for search intent; H1 doesn't (it reads bargain-bin against PP's verified-source positioning). Title: `[Compound] Price Comparison — Cheapest Prices from [N] Vendors`. H1: `[Compound] Price Comparison`.

**Taxonomy:** grouping uses PP's **live `/peptides` library taxonomy** (11 categories), extracted to `src/data/peptideCategories.ts` and shared. Never invent a second taxonomy.

---

## 🧩 CopyCode — ONE component, two sizes

Consolidated from **31 duplicate implementations** (29 coupon pages each defining their own `CodeBox`, plus the hub, plus `VendorHighlightBlock`) into `src/components/CopyCode.tsx`.

- **`large`** where the code IS the point: `/coupons`, `/coupons/[vendor]`, `/best-peptide-vendors`, `VendorHighlightBlock`
- **`chip`** where it's one field among many: price tables, `/vendors`
- Inline copy SVG at both sizes (no new dependency), swaps to "Copied ✓" on click, code always readable if JS fails
- The "Click to copy code" label was removed — the icon carries the affordance

**Related site rule, now applied everywhere:** text links keep trailing arrows, **filled CTAs do not**. 32 instances corrected.

---

## ⚠️ KNOWN FRAGILITY — hardcoded codes

**27 of 29 coupon vendor pages hardcode the code literal** (`code="PROF10"`) instead of `code={v.code}`. So do `/best-peptide-vendors` (its own local array of 7), four bioregulator nav links, four `VendorHighlightBlock` notes, coupon `layout.tsx` metadata, OG image generation, JSON-LD, FAQ answers, and `/about`.

**If a vendor's code changes, `vendors.ts` updates and all of those silently show the old value** — and the price section computes post-code prices from `vendors.ts`, so the pages would disagree with each other.

Same class as the HR sled weights: one value, many copies, nothing keeping them honest. **Fix: source them all from the registry, then a `check:codes` guard** (the `check:weights` pattern).

The four vendors added July 25 correctly use `code={v.code}` — do not add more hardcoded ones.

**Also:** `/best-peptide-vendors` uses a local array rather than the registry, so the Editor's Pick swap (Peptides.gg → Oasis Labs) is **not reflected there**. Live contradiction, needs fixing.

---

## 🔄 MONTHLY REFRESH

Extractors are repo scripts (`scripts/price-pull/`), not one-off code — refresh is a command, not a redo.

```
python -m pricepull.refresh --all --write     # re-pull every vendor into the doc
python -m pricepull.to_prices                 # doc → prices.generated.ts
```

**Per-vendor notes that cost time to learn:**
- **Aero** — CINC/manual only, not auto-pullable
- **Limitless** — permanently excluded (B2B login-gated)
- **Ascension** — Cloudflare-blocked to curl; codes verifiable only at checkout
- **Amino Club, Synthesis** — Medusa; prices render server-side in the RSC flight, readable by plain urllib. **Headless browser was investigated and rejected** — ~400MB of fragile infrastructure for data urllib already gets in 1.8s
- **Behemoth, PureRawz** — were truncated at 300 by a 3-page Woo cap; `max_pages` raised
- **Woo `on_sale` flag is unreliable** — compute `onSale` as `base < regular`
- **Ascension sizes** encode mg in the SKU code (R-30 = 30mg)

**Sale prices make the data perishable** in a way regular prices aren't. The "Prices updated" stamp is now load-bearing.

---

## 🔜 OPEN

1. **Onboard the 4 new vendors to the price pull** — LA Peptides, Peptidology, Mile High Compounds, NextGen Peptides. All **WooCommerce with reachable Store APIs**, soft gates only. Catalogs: 73 / 76 / 64 / 82. Coded GLP schemes to decode: LA `GLP-(S/T/R)`, Mile High `MHC-N SM/TRZ/RT`, Peptidology `PGL`, NextGen `GLP-3/TRZ/Cagri`.
2. **Hardcoded-code cleanup** + `check:codes` guard
3. **`/best-peptide-vendors`** → registry-sourced (fixes the Editor's Pick contradiction)
4. **Blends as a v1.1 track** — 133 rows waiting, ratio data already captured
5. **24 profile-less compounds** publish with conditional links — real profile backlog (12 are Khavinson bioregulators)
6. **Delete dead `WhereToBuy.tsx`** (zero renders)
7. **GSC indexing** — 10 submitted July 25, resume at `/prices/ipamorelin`
8. **Spot-check Sale rows** against vendor sites — 190 rows, most perishable data on the site

---

## 📅 Changelog
**July 25, 2026 (v1):** Section shipped live — 69 pages, 1,167 rows, 24 vendors. Architecture, locked rules, coded decodes, design decisions, refresh mechanics, and known fragilities recorded for the first time.

---

*`/prices` is a reporting function with no quality claim. Prices are what a buyer pays with no code entered; PP's code applies on top. The doc is the source; the transform is one-directional.*
