# PP Vendor Pages — v4

**Date:** July 27, 2026
**Status:** ACTIVE. Drop-in over v3 Addendum.
**What's new:** the **competitive product-card finding** (PeptideStack), an audit of what PP's vendor pages actually contain today, the **product-card spec**, the **Amino Club pilot**, a **numbered build sequence** for the wider strategy, and a **stale-date defect** on three live pages.
**Cross-ref:** **PP_SEO v20** (strategy + backlog) · **PP_PRICES v2** (the data layer) · PP_VENDOR_PROSPECTING v19

---

## 1) 🆕 THE COMPETITIVE FINDING

PeptideStack's `/grey-market-peptides-for-sale` page carries **48 product cards** drawn from exactly two vendors — **Peptide Partners and Amino Club** — each card showing the vendor's own product photography, the product name, a variant count, and a link out.

Two observations worth separating:

**(a) It's a query-shaped page, not a vendor page.** The URL is the search phrase; the vendors are the *content*. Same pattern as their `/best-peptides-for-sale-online` and `/peptide-pros-alternative`.

**(b) The two-vendor concentration is deliberate.** They put their highest-converting vendors on their highest-intent page. **Those are also, by a wide margin, PP's two highest-commission vendors** — a strong independent signal about which vendors actually convert.

Also note the page's footer block: a dense internal-link paragraph pushing authority into ~12 other commercial pages (best-of lists, four coupon pages, comparisons, the calculator, the cheat sheet). The page is a hub as much as a catalog.

---

## 2) 🆕 AUDIT — what PP's vendor pages contain today

Verified live, July 27, against `/coupons/peptide-partners` and others.

| Element | PP | PeptideStack |
|---|---|---|
| Catalog | ✅ **prose, organized by research area** | ✅ 48 product cards |
| Product images | ❌ | ✅ vendor photography |
| Per-product links | ❌ | ✅ every card |
| Variant counts | ❌ | ✅ |
| **Prices** | ❌ | ❌ |
| Testing / COA depth | ✅ **far stronger** — named labs (TrustPointe, Kovera, BioRegen, Chromate), four test categories, batch-level purity (BPC-157 99.99%), COA-verification guidance | ❌ nothing comparable |
| Company background | ✅ location, phone, pricing model | partial |

**Conclusion: PP already has the catalog — as a paragraph, not a grid.** The gap is presentation, per-product linking, and the fact that **PP could show prices and PeptideStack can't.**

---

## 3) 🆕 PRODUCT-CARD SPEC (proposed)

**PP's version should be better than the reference, not a copy of it**, because PP has two assets PeptideStack lacks.

### Each card carries:
1. **Compound name** → **internally linked to PP's own `/peptides/[slug]` profile** where one exists. This is the differentiator: every card becomes an internal link into PP's research library, which is the site's whole model. PeptideStack links only outward.
2. **Sizes available** — from the price data (e.g. "5mg · 10mg · 20mg").
3. **Price** — lowest per-mg, or a range. **PeptideStack shows none.**
4. **Stock status** — already captured per row.
5. **"Shop" link** → the vendor's affiliate URL.
6. *(Optional)* product image — see the constraint below.

### ⚠️ Two data-layer gaps
The price pull captures compound, vendor, size, price, and stock — but **not**:
- **Product image URLs**
- **Per-product deep links** (the affiliate link is vendor-level, not product-level)

Both are available from the WooCommerce Store API and would need capturing on a re-pull. **This is the only real cost in the build.**

**Recommendation: ship the pilot without images first.** The name/size/price/stock/link card is fully supported by existing data, and prices are the stronger differentiator anyway. Add images in a second pass if the layout warrants them.

---

## 4) 🆕 THE AMINO CLUB PILOT (agreed approach)

**Build one vendor page, look at it, then decide whether to roll out.** Amino Club is the right pilot: highest-commission vendor, Featured, 37 rows already in the price data, and the page Google is currently mishandling (title rewritten, snippet suppressed — see PP_SEO v20 §5).

**Do not roll out to 30 vendors before reviewing the pilot.**

---

## 5) ⚠️ DEFECT — stale dates on three live pages

Three vendor coupon pages still carry **"(May 2026)"** in their titles:

- `/coupons/ez-peptides` — "EZ Peptides Discount Code (May 2026) — Save 10%"
- `/coupons/particle-peptides` — "Particle Peptides Discount Code (May 2026) — Save 10%"
- `/coupons/royal-peptides` — "Royal Peptides Discount Code (May 2026) — Save 10%"

PP_SEO v2 records the June-2 coupon-variant pass refreshing all 18 pages to evergreen **"(2026)"**. These three either didn't take or were built afterwards. A visibly stale month is a negative freshness signal on exactly the query type where freshness matters most — and PeptideStack is actively exploiting the opposite ("Codes checked July 27, 2026").

**Fix: evergreen "(2026)", or better, a generated check-date.**

---

## 6) 🆕 BUILD SEQUENCE — the full strategy, in order

Each step is independently shippable. Recon precedes every build.

### Phase 1 — Fix what's broken (cheap, no new pages)
1. **`sameAs` + Organization schema** — three social URLs already in the footer into the JSON-LD, plus the `@id` publisher link. Highest-leverage entity fix available; Google currently describes an unrelated podcaster on PP's brand query.
2. **Stale dates** on the three vendor pages → evergreen or generated.
3. **`/coupons/amino-club` title + discount discrepancy** — recon first; it's the one page Google rewrites and de-snippets.
4. **`/prices/glow` + `/prices/klow`** indexing rejection — diagnose.
5. **`/prices/5-amino-1mq`** canonical — diagnose.

### Phase 2 — The pilot (this session)
6. **Amino Club product cards** — name (internally linked) · sizes · price · stock · shop link. No images in v1.
7. **Review.** Roll out to remaining vendors only if it looks right.

### Phase 3 — Freshness + internal linking
8. **Generated check-dates** across `/coupons` and vendor pages (the `PRICES_UPDATED_DATE` pattern already works on `/prices`).
9. **Internal-link block** on vendor pages — the PeptideStack footer pattern, pushing authority to `/prices`, `/best-peptide-vendors`, comparisons, and the calculator.

### Phase 4 — The FAQ hub (needs recon + GSC mining)
10. **Recon `/faq`** — report what exists today.
11. **Mine GSC exports** for question-shaped queries (*how, what, does, is, can, why*) — questions PP already receives impressions for with no page answering.
12. **Build the hub** — FAQPage schema, 2–4 sentence answers, links to existing pages first; new spokes only where nothing covers it.

### Phase 5 — Query-shaped commercial pages (the coverage gap)
13. **Validate volume** on candidate phrases before building anything.
14. **Vendor-alternative pages** — Core Peptides, Biotech Peptides, Verified Peptides, **Peptide Sciences (now closed — demand permanently orphaned)**. Proposed in PP_SEO v14 and never built.
15. **Commercial-phrase pages** — "best place to buy peptides online," "peptides for sale online," etc. 5–8 pages, each targeting a specific phrase.
16. **Reuse the product-card component** from Phase 2 on these pages — the same grid, filtered to top-converting vendors.

### Ongoing
17. **Re-check `/prices` impressions at 4 and 8 weeks.** Two days is no data.

---

## 7) Carried forward (unchanged)
- **Density ceiling: five vendor cards per peptide profile page.**
- **Internal first-mention linking (LOCKED):** the first occurrence of any peptide with its own profile carries the internal link. Never link a later mention while leaving the first as plain text. Don't self-link the page's own subject; component peptides on stack/combo profiles ARE linked on first appearance.
- **"Listed = linkable":** any compound named in a vendor listing must have or be slated for a PP profile. Clinical hormones, biologics, fusion proteins, native growth-factor proteins, and oncology compounds are excluded entirely.
- **Never state a bare purity percentage as PP's own claim** — attribute to the vendor.

---

## 📅 Changelog
**v4 (July 27, 2026):** PeptideStack product-card finding; audit of PP vendor-page contents (catalog exists as prose, not cards); product-card spec with internal compound linking + prices as the differentiators; two data-layer gaps identified (image URLs, per-product deep links); Amino Club pilot agreed; five-phase build sequence; stale "(May 2026)" dates found on three live pages.

---

*PP already has the catalog — as prose. The gap is presentation, per-product links, and the prices PP alone can show. Pilot one vendor, then decide.*
