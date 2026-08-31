# PP Vendor Coupon Pages — Cross-Link Rollout

**Status:** ✅ COMPLETE — 21/21 built · 19 live (particle + fusion retired June 16)
**Version:** v2 (June 16, 2026) — rollout finished. Supersedes v1 (the 5-done/16-to-do tracker).
**Tracks:** the carried-peptides "Popular compounds by research area:" cross-link block across every `/coupons/[vendor]` page.

---

## Outcome

All **21** vendor coupon pages now carry the research-area cross-link `<dl>` block. **16 pages were built this session** (the entire v1 backlog), on top of the 5 completed in prior sessions.

- **~405 new internal `/peptides/` cross-links** added this session (sum of the 16 per-page counts below).
- **~525 cross-links across all 21 pages** (405 this session + 120 from the prior 5).
- **Zero broken links** anywhere — every `/peptides/SLUG` target verified against a real `src/app/peptides/SLUG/` profile folder.
- **One commit per page**, staged-files-only; `git add -A` never used; the parked OG-image route was never touched.

**Exemplar all pages mirror:** `/coupons/amino-club`.

**"Done" =** page contains the research-area `<dl>` block with internal `/peptides/` links; each linked peptide's *first mention* links to its profile (locked first-mention rule); all links resolve (no broken links).

---

## Final tally (21/21)

**Prior sessions (5):**

| Vendor | Slug | Links | Commit |
|---|---|---|---|
| EZ Peptides | ez-peptides | 30 | (prior) |
| Synthesis Peptides | synthesis-peptides | 27 | (prior) |
| Amino Club | amino-club | 24 | (prior, exemplar) |
| Midwest Peptide | midwest-peptide | 20 | (prior) |
| Spartan Peptides | spartan-peptides | 19 | (prior) |

**This session (16):**

| # | Vendor | Slug | Links | Commit | Notable |
|---|---|---|---|---|---|
| 1 | Oasis Labs | oasis-labs | 28 | eb5925f | your catalog paste |
| 2 | Glacier Aminos | glacier-aminos | 32 | f9ca634 | your logged-in codename decodes |
| 3 | Royal Peptides | royal-peptides | 33 | 4acbe23 | **first Bioregulator (Pinealon)** |
| 4 | Peptide Partners | peptide-partners | 24 | 6bd71b1 | — |
| 5 | Ascension Peptides | ascension-peptides | 31 | 677845e | your GLP letter-code decodes |
| 6 | Vital Core Research | vital-core-research | 28 | 6e84363 | CagriSema catch |
| 7 | Integrative Peptides | integrative-peptides | 6 | e12dfd9 | thin (bioregulator/supplement brand) |
| 8 | Limitless Biotech | limitless-biotech | 18 | d3b113c | BigCommerce |
| 9 | Ignite Peptides | ignite-peptides | 21 | 1424539 | — |
| 10 | Fusion Peptide | fusion-peptide | 31 | 08f15a0 | **first Cortagen** |
| 11 | BioCollex | biocollex | 17 | 274fd64 | — |
| 12 | Behemoth Labz | behemoth-labz | 35 | 19ee922 | **first Cardiogen / Follistatin / Sermorelin+Ipa** |
| 13 | Almighty Peptides | almighty-peptides | 20 | efac5fb | — |
| 14 | Particle Peptides | particle-peptides | 17 | f72d96d | PrestaShop, UK/EU |
| 15 | Peptides.gg | peptides-gg | 37 | 79db193 | **deepest page — 11 areas, full bioregulator set** |
| 16 | PureRawz | purerawz | 27 | 565d289 → **1ae5af1** | Cloudflare-walled; corrected post-build (see below) |

> **Reconciliation note (RULE #0):** CC's end-of-rollout summary table listed only 15 rows — it **omitted particle-peptides** (completed earlier this session at `f72d96d`) — and quoted an aggregate (416) that didn't match the sum of its own per-page counts. This doc restores particle-peptides (→ the true 16-this-session / 21-total) and recomputes the link totals from the verified per-page numbers.

---

## Retired live (post-rollout — June 16, 2026)

Two pages were retired the same day the rollout closed — **built, but no longer live**:

- **particle-peptides** and **fusion-peptide** → each `/coupons/[slug]` now **redirects to `/coupons`** (in-component `redirect('/coupons')`, commit `17068d4`). Removed from the `/coupons` hub, the sitemap (167→165), `peptide-vendors.json` (18 carry-entries), and the ghk-cu vendor block. `page.tsx`, opengraph-image routes, and `vendors.ts` entries were **kept** (the OG build references `vendors[slug]`, so removing them breaks the build).
- ⚠️ **Mechanism lesson:** a `next.config.js` `redirects()` rule **did not fire in production** for these routes (the `page.tsx` still existed and kept serving — verified via cache-busted fetch). The in-component `redirect()` is the reliable retire path.
- **Net: 21 built, 19 live.** The hub now lists 19 vendors.

Hub regrouping in the same change: **Peptides.gg** moved Editor's Pick → main (US Vendors) list; **Amino Club** moved → Best Deals; the one-vendor International section was removed.

---

## Category firsts (this session)

- **Royal Peptides** — first vendor page to carry a **Bioregulator** (Pinealon).
- **Fusion Peptide** — first **Cortagen**.
- **Behemoth Labz** — first **Cardiogen**, **Follistatin**, **Sermorelin + Ipamorelin**.
- **Peptides.gg** — first **complete bioregulator set** (Pinealon / Thymogen / Cortagen / Cardiogen) and the deepest page overall (37 links across 11 research areas).

---

## Method (reusable for future vendor adds)

- **Catalog sourcing:** the vendor's full product catalog was pulled from its public `product-sitemap.xml` even when the storefront was login-, JS-, or Cloudflare-walled. The sitemap yields the carried-product universe; only opaque slugs then needed decoding. Catalogs were **never guessed**.
- **Catalogs that required your paste/decodes** (the rest fetched live): **glacier-aminos, ascension-peptides, peptides-gg, purerawz.**
- **Decode resolution:** opaque slugs were resolved via third-party vendor reviews and your logged-in catalog pastes — never invented. Recurring decode keys captured for reuse:
  - **GLP generation codenames:** GLP-1 = Semaglutide · GLP-2 / GLP-1.2 = Tirzepatide · GLP-3 / GLP-1.3 = Retatrutide.
  - **Dev/research codes:** LY3437943 = Retatrutide · AM833 = Cagrilintide · TH9507 = Tesamorelin · GHRH 1-29 = Sermorelin · Mod GRF 1-29 = CJC-1295 (No DAC) · ACTH(4-7) Pro-Gly-Pro = Semax · copper-peptide = GHK-Cu · EP-23905 = Hexarelin · SKF-110679 = GHRP-6 · Kp-10 / KP-102 = Kisspeptin.
- **Linking rules applied:** only profile-backed slugs linked; first-mention linking; deduped (e.g., a GLP listed twice under a generation code + its proper name → one link); brand blend names (GLOW, KLOW, Wolverine) kept as-is; non-profiled compounds skipped (SARMs, nootropics, the non-profiled Khavinson bioregulators, supplies/bac water).
- **Git discipline:** only each page's own file staged; no `git add -A`; OG-image route untouched; tsc clean before each push.

---

## Edge cases / flags

- **integrative-peptides** — the one thin/edge-case page (6 links): a bioregulator/oral-supplement brand that barely intersects PP's profile library. Standing as-is unless changed.
- **biocollex & integrative** — also carry prose first-mention links for compounds named in body copy but only sold in blends (not in their `<dl>`).
- **purerawz post-build correction (`1ae5af1`):** (1) **added PT-141 + Oxytocin** → `/peptides/pt-141-oxytocin` — carried as the "Arouse Nasal Spray (PT-141 + Oxytocin)" blend SKU, which CC's first pass missed because the sitemap slugs it `arouse-nasal-spray`; (2) **removed MK-677** — a stale 384-SKU sitemap entry absent from the current 104-product shop catalog. Net link count unchanged at 27.

---

## Link universe

49 profile folders under `src/app/peptides/` per the v1 (June 14) audit. The library has grown since (bioregulators, blends) — **re-audit `src/app/peptides/` for the exact current count before the next vendor add.**

---

## Maintenance (adding a future vendor page)

Mirror `/coupons/amino-club`: build the research-area `<dl>` from the vendor's in-stock catalog (sitemap or your paste), link only profile-backed slugs (first mention, deduped), verify each `/peptides/SLUG` resolves to a real folder, stage only that page file, commit + push.

---

## Housekeeping (now closeable)

- The Notion "Vendor Coupon Pages — Cross-Link Rollout" DB was interim scaffolding for this rollout — **safe to archive/trash** now that this doc is the system of record.
- **Add `PP_VENDOR_PAGES` to SCS_MP cross-references** on the next SCS_MP roll (open item from the rollout start).

---

## Cross-references

- **PP_SEO** (internal linking is a ranking lever) · **PP_MASTER** · **SCS_MP** · first-mention-linking rule (peptide-profile canonical spec §1.15)

---

*Rollout complete June 16, 2026. 21/21 vendor coupon pages cross-linked; ~525 internal `/peptides/` links total; zero broken links. (particle + fusion retired the same day → 19 live.)*
