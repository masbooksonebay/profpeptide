# PP PRICES — Price Comparison Section

**Status:** ACTIVE REFERENCE — the price-comparison section's governing doc.
**Version:** v2 (July 27, 2026) — **SUPERSEDES v1.** Adds the **four new vendors onboarded**, **all ten coded GLP SKUs decoded**, the **HTML-entity bug** that was silently dropping rows, the **Mile High size gap**, and the **NextGen kit finding**.
**Pairs with:** PP_MASTER · PP_SEO · PP_X_POSTS · PP_PRICE_DATA_MASTER (the data) · `scripts/price-pull/README.md` (the runbook)

---

## 📍 CURRENT STATE (live on profpeptide.com)

| | v1 (Jul 25) | **v2 (Jul 27)** |
|---|---|---|
| **Price rows** | 1,167 | **1,291** |
| Vendors in data | 24 rendered | **28** |
| Distinct compounds | 68 | **68** (no new — the four deepened existing coverage) |
| Indexable / noindex | 66 / 2 | **66 / 2** (unchanged) |
| **Unverified-coded rows excluded** | 26 | **0** |
| Retatrutide vendors | 16 → 20 | **24** |
| Tirzepatide | — | **19** |
| Semaglutide | — | **17** |

Noindexed: `pda`, `thymulin` (2 vendors each). Both render; only the robots directive is conditional.

---

## 🆕 FOUR VENDORS ONBOARDED (July 26)

All four: **WooCommerce with reachable Store APIs**, soft gates only (modals, Cloudflare — neither blocks the API), code `PROFPEPTIDE` at 10%.

| Vendor | slug | Catalog | Rows contributed |
|---|---|---|---|
| **Peptidology** | `peptidology` | 76 | **66** |
| **NextGen Peptides** | `nextgen-peptides` | 82 | **28** |
| **LA Peptides** | `la-peptides` | 73 | **17** |
| **Mile High Compounds** | `mile-high-compounds` | 64 | **13** |

**Variation model: `dosage` for all four.** No sixth model found; no new adapter needed. Two size-parse gaps fixed within the dosage model:
- **NextGen** — size attribute named `MG` with a bare-number value (`"20"`). The extractor now reads the unit from the attribute *name* when the value is bare-numeric. Recovered Tirzepatide, BPC-157, TB-500, MOTS-C, Tesamorelin, 5-Amino-1MQ.
- **LA** — simple products carrying mg in a defining `Size` attribute (`"10MG"`) rather than the name. The woo adapter now synthesizes a variation from it.

**Peptidology has the strongest testing story on the roster** — 14-point analytical testing per batch (purity, identity, net peptide content, endotoxins, two-lab sterility via USP <71> + ScanRDI) under ISO/IEC 17025:2017, cGMP-aligned, up to 23 vials/batch. Worth weighing when Featured Vendors is next revisited.

---

## 🔓 ALL CODED GLP SKUs NOW DECODED

**Zero unverified-coded rows remain.** Every coded GLP on the site is decoded and disclosed as "Retatrutide (listed as MHC-3 RT)".

| Vendor | Codes | Basis |
|---|---|---|
| **LA Peptides** | `GLP – 1 (S)` / `– 2 (T)` / `– 3 (R)` | Mark's call |
| **Mile High** | `MHC-1 SM` / `2 TRZ` / `3 RT` | Mark's call |
| **Peptidology** | `GLP1 (PGL-G1)` / `GLP2 (PGL-GI1)` / `GLP3 (PGL-GIC1)` | Mark's call |
| **NextGen** | `GLP-3` | Mark's call |
| **NextGen** | `TRZ-2`, `Cagri` | **Hard-verified** — CAS 2023788-19-2, formula C225H348N48O68, MW ~4813 stated on the product page |

CC correctly refused to infer from suffix conventions and reported all ten as unverified until Mark ruled. That's the right standard: **decode on mechanism, CAS, MW, formula, or dev code — never on naming convention.**

Carried from v1: Glacier (CAS on label images), PureRawz (incl. LY3437943 = Retatrutide's dev code), Vital Core, Ameano (mechanism-tier), BioCollex.

### ⚠️ The bug that was silently dropping rows

**LA's product names arrive HTML-entity-encoded** — `GLP &#8211; 3 (R)` — so the decoder's `[–-]` character class never matched and those SKUs fell out of scope entirely. Fixed with `html.unescape()` on names **in the woo adapter**, so it's now global: any future vendor with entity-encoded names is handled. It also prevented a rendering bug, since `listedAs` would have displayed the raw entity on the live page.

**Lesson: a decoder that "doesn't match" may be seeing different bytes than you are.**

---

## ⚠️ TWO GAPS THAT ARE NOT BUGS

### Mile High — ~37 products have no size in the Store API

For the simple products classified no-size (BPC-157, Ipamorelin, GHK-Cu, NAD+, …), the WooCommerce Store API returns `type=simple`, `variations: []`, `attributes: []`, `has_options: false`, single price — confirmed from **both** the list endpoint and per-product `/products/<id>`.

**The live "Vial Size" dropdown is client-side only**, rendered by the theme and not exposed by the public API. There is no separate variations endpoint being skipped — WooCommerce exposes variations in exactly the field being read, and it's empty.

**Not an adapter bug.** The 7 *variable* Mile High products (including the MHC coded GLPs) do carry sizes and pulled fine. Recovering the rest needs a **CINC manual inventory** — and that's a **recurring** cost, repeated every monthly refresh, for a vendor currently contributing 13 rows. Two cheaper options to try first: check the product page HTML for inline JSON (plugins often embed config in a `<script>` tag, which is fetchable), or ask the vendor for a product feed.

### NextGen — bulk packs excluded, not divided

`GLP-3 (10 Vials)` is **$300** against **$42** for a single — **7.1×, not 10×**. TRZ is 4.5×, Cagri 7.5×. So there's no clean per-vial divisor and applying ÷10 would have shown ~$30/vial, undercutting reality by ~29% and putting NextGen wrongly at the top of the Retatrutide page.

**Excluded rather than divided.** Single-vial versions carry the data. This is exactly the trap the Royal ÷10 evidence-gate exists to catch.

---

## 🔒 LOCKED RULES (carried from v1, unchanged)

**1. Sale vs coupon.** A price on PP is what a buyer pays **without entering any code**. Automatic discounts count (product-level sales AND cart-level auto-discounts needing no code — reference case: Biolongevity's sitewide 50%). Coupon-gated promotions never do (reference exclusion: Amino Club's `ENJOY30`). PP's own code is the only code represented. We do not track any vendor's own codes.

**2. Codes stack with sale prices** ✅ — Ascension verified at checkout. **Ascension's 50% is real** despite being a 3–5× outlier; do not "fix" it or reclassify it as `sitewide_sale`.

**3. Editorial scope.** PP excludes clinical hormones, biologics, fusion proteins, native growth-factor proteins, and oncology compounds. Worked examples: Gonadorelin, Triptorelin (name-level), **PNC-27** and **Klotho** (`OUT_OF_SCOPE` in `to_prices`). Peptidology also carries **ACE-031** and **Gonadorelin** — both correctly excluded on the July 26 pull.

**4. v1 scope — singles only.** Blends, sprays, orals, capsules, topicals, no-size, no-price all excluded. Blends are a v1.1 track; ratio data is already captured.

**5. Gating.** ≥3 vendors → indexable. <3 → `noindex, follow`. `generateStaticParams` covers everything so nothing 404s.

---

## 🎨 DESIGN (carried from v1, plus July 26–27)

Compound pages = **labeled columnar grid** on one explicit template (`grid-cols-[minmax(0,1fr)_5rem_5rem_9rem_8rem_5rem]`). Master = **cards**. Badges are mode-independent and always lowest $/mg; **case A is 25 of 68 compounds**, which is why the two-badge design matters.

**Alignment, three separate fixes:** header and rows share ONE explicit template · desktop uses **`self-baseline` on the four text cells only** (row-level `items-baseline` would drag the `h-9` buttons out of track) · mobile uses `items-baseline` with the price block `shrink-0 min-w-[5rem]` so it holds the right edge and the badge wraps instead.

**Master card link text is "Compare →"** — the number lives in the vendor-count column, so it isn't repeated. This collapsed the single-vendor "View price →" conditional.

---

## 🧩 CopyCode + SITE CONSISTENCY (July 26–27)

Consolidated from **31 duplicate implementations** into `src/components/CopyCode.tsx`:
- **`large`** where the code IS the point: `/coupons`, `/coupons/[vendor]`, `/best-peptide-vendors`, `VendorHighlightBlock`
- **`chip`** where it's one field among many: price tables, `/vendors`
- **Inline copy SVG at both sizes** (no new dependency), swaps to "Copied ✓"
- The "Click to copy code" label was removed from **both** surfaces that had it (`/coupons` and `VendorHighlightBlock`) — the icon carries the affordance

**Only truly-missed surface was `/best-peptide-vendors`**, which rendered codes as plain text. Now fixed.

**Site rule now applied everywhere: text links keep trailing arrows, filled CTAs do not.** 32 instances corrected — 29 coupon pages, the hub, `VendorHighlightBlock` (52 profiles), `AmazonCTAButton`.

**`WhereToBuy.tsx` is dead code** — zero renders. CC's earlier "77 pages" figure was a false positive on `isWhereToBuy`. Recommend deleting.

---

## 🖼️ /coupons HUB OG CARD (new, live)

Built because per-vendor cards bake the standing rate into the image — so a post about a **time-limited sale** at a different rate pulls a card that contradicts it.

- Reuses the generator's existing vendorless `FallbackCard` via an additive `generateCouponHubOg()` export. No new design; a literal sibling of the vendor cards.
- Copy: **"Verified Discount Codes" / "For trusted research peptide vendors."** Alt: "Prof. Peptide — verified research peptide discount codes."
- **NO NUMBERS, deliberately.** X caches OG images per URL and won't refresh; any count or percentage would become permanently stale in cached cards.
- Per-vendor cards verified **byte-identical** before and after.

**Usage:** link `/coupons` instead of the vendor page when a post's rate differs from the standing rate. Tradeoff: the reader lands on the 30-vendor list rather than the vendor, and that list still shows the standing rate.

⚠️ **The card palette is cyan `#22d3ee` on navy, not the site's `#3A759F`.** Pre-existing divergence in `coupon-og.tsx`; worth reconciling when the lockup is wired into OG.

---

## ⚠️ KNOWN FRAGILITY — hardcoded codes (unchanged, now more consequential)

**27 of 29 coupon vendor pages hardcode the code literal.** So do `/best-peptide-vendors` (own local array of 7), four bioregulator nav links, four `VendorHighlightBlock` notes, coupon `layout.tsx` metadata, OG generation, JSON-LD, FAQ answers, and `/about`.

**Live contradiction it already causes:** the Editor's Pick swap (Peptides.gg → **Oasis Labs**) is driven by `vendors.ts`, but `/best-peptide-vendors` uses its own array — so `/coupons` shows Oasis Labs as Featured while `/best-peptide-vendors` still shows Peptides.gg.

**The four vendors added July 26 correctly use `code={v.code}`.** Do not add more hardcoded ones. Fix: registry-source them all, then a `check:codes` guard on the `check:weights` pattern.

---

## 🔄 MONTHLY REFRESH

```
python -m pricepull.refresh --all --write     # re-pull every vendor into the doc
python -m pricepull.to_prices                 # doc → prices.generated.ts
```

Per-vendor notes: **Aero** CINC-only · **Limitless** permanently excluded (B2B login) · **Ascension** Cloudflare-blocked to curl · **Amino Club / Synthesis** Medusa, RSC flight readable by plain urllib (headless browser investigated and rejected) · **Behemoth / PureRawz** needed `max_pages` raised past 3 · **woo `on_sale` flag unreliable** — compute `onSale` as `base < regular` · **Glacier** publishes CAS/MW in label images only · **Mile High** ~37 products need manual sizing.

Sale prices make the data perishable. The "Prices updated" stamp is load-bearing.

---

## 🔜 OPEN (by value)

1. **Search index** — hand-maintained in `src/lib/search-index.ts`, covers **27 of 62 peptides and ZERO price pages**. The homepage search box can't find a third of the site. Should be **generated from the data**, same registry-sourcing pattern as codes and weights. **Highest-value open item.**
2. **Hardcoded-code cleanup** + `check:codes` guard, and `/best-peptide-vendors` → registry-sourced (fixes the Featured contradiction).
3. **Mile High manual inventory** — decide whether 13 rows justify a recurring manual pass; try inline-JSON and a vendor feed first.
4. **Dated sale field** — a vendor-entry field carrying a sale rate + end date, read by the coupon page, OG generator, and price calc, **auto-expiring** so no revert step can be forgotten. Would have solved the Mile High 34%/10% mismatch properly.
5. **Blends as v1.1** — 133 rows waiting.
6. **24 profile-less compounds** publish with conditional links — 12 are Khavinson bioregulators.
7. **Delete dead `WhereToBuy.tsx`**.
8. **GSC indexing** — resume at `/prices/ipamorelin`.
9. **Spot-check Sale rows** against vendor sites — 190 rows, most perishable data on the site.

---

## 📅 Changelog
**July 27, 2026 (v1 → v2):** Four vendors onboarded (+124 rows). All ten coded GLP SKUs decoded — zero unverified-coded remaining. HTML-entity bug found and fixed globally. Mile High size gap and NextGen kit exclusion characterized. CopyCode consolidation, arrow rule, and the /coupons hub card recorded. Retatrutide now at 24 vendors.

**July 25 (v1):** Section shipped — 69 pages, 1,167 rows, 24 vendors.

---

*`/prices` is a reporting function with no quality claim. Prices are what a buyer pays with no code entered; PP's code applies on top. The doc is the source; the transform is one-directional. Decode on evidence, never on naming convention.*
