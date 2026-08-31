# PP PRICES — v3

**Date:** August 2, 2026
**Status:** ACTIVE. Supersedes v2 on adapters, deep links, and guards. v2's Locked Rules 1–4 carry forward **unchanged**.
**Covers:** the July 31 – August 2 build-out. Price grids went from **1 vendor to 33**.

---

## 📊 STATE

| | Count |
|---|---|
| Vendors with live price grids | **33** |
| Vendors with data but no grid | 0 |
| Blocked / no in-scope rows | 2 — `limitless-biotech` (B2B login-gated), `integrative-peptides` (catalog scope-filters to zero) |
| Queued | `nura-peptide`, `99-purity-peptides` |

**Two vendors were unblocked by re-checking the data rather than the page:**

- **Crush Research** — recorded as blocked because `/shop` is client-rendered. The catalog was server-rendered into the RSC flight all along.
- **Spartan Peptides** — recorded as blocked because prices display as ranges. Per-variant prices were public in Gatsby page-data; the range was the selector UI.

> 🔒 **Rule:** a BLOCKED entry must record the reason **verified against the underlying data**, not against the rendered page. Both wrong entries came from observing the storefront.

---

## 🔌 ADAPTERS — five additions

| Adapter | Shape | Vendors |
|---|---|---|
| `nextjs_feed` | Whole catalog in one RSC flight (`initialProducts`) | Crush Research |
| `gatsby_pagedata` | Gatsby `/page-data/<listing>/page-data.json` | Spartan Peptides |
| woo + **session auth** | Login-gated Store API via cookie | Modern Aminos |
| woo + **permalink resolution** | HEAD-follows to the canonical URL at pull time | all woo |
| **row-drop floor** | Aborts if a re-pull loses >50% of rows | all |

**Named for the shape, not the vendor** — `nextjs_feed` and `gatsby_pagedata` are patterns other vendors will have.

### Fail-loud is mandatory for feed adapters

Both new adapters **raise** rather than returning `[]` when the expected key is missing. An RSC flight or page-data path is internal frontend structure with no stability contract — it can change on any vendor deploy. A silent empty return would look identical to a delisting.

Verified by renaming the key and confirming the raise.

### Session auth — Modern Aminos

- Cookie lives in **gitignored** `scripts/price-pull/.session-cookie`, never the registry. The registry is committed; a login cookie is a credential.
- Needs `wordpress_logged_in_*` **and** `wordpress_sec_*`.
- **Expires in ~14 days** with "Remember me", ~48h without. A session-only cookie never reaches disk and dies when Chrome restarts.
- The **>50% row-drop floor** exists for this: an expired cookie returns an empty catalog, which would otherwise read as a total delisting.

### Permalink resolution — the biocollex case

Biocollex's Store API reported `/product/ghk-cu/`, but the storefront **302s to `/ghk-cu-50mg/` and strips the `?ref=`**. Deep links reached the right product with **no affiliate attribution**.

Fix is general, not an exception list: resolve the permalink at pull time and store the final canonical path. Cost ~57ms/product, ~+1.5 min on a full roster pull. Cloudflare 403 on resolution → falls back to the Store API permalink and logs.

**Audit result: 1 genuine attribution drop in 24 deep-linking vendors.** `science-based-peptides` looked broken (308→307→200) but **preserves** — its redirect converts the path suffix to a query param.

---

## 🔗 DEEP LINKS — two composition shapes

**Path-based affiliate links compose.** This overturned an earlier exclusion that would have cost deep links on ~51% of PP's commission.

```
query-param:  https://<domain>/<vendorSlug>?<query>
path-based:   https://<domain>/<vendorSlug>/<affiliatePath>/
```

CINC verified all six path-based vendors on July 29 — Peptide Partners, Ascension, Behemoth, Alpha, Integrative, Ignite — every one resolving to the correct product page with attribution intact. **Peptide Partners' own AffiliateWP generator produced the identical form**, which is definitive.

**`vendorSlug` stores the permalink PATH, not a bare slug.** Bases diverge — `/product/` for most, `/shop/` for Royal, root for peptides-gg — and a hand-kept base map is exactly the value that goes stale.

**One genuine exclusion:** `biolongevity-labs` (`go.biolongevitylabs.com`) is cross-host and cannot compose. Derived from the URL being on a different host than the store, not from a vendor list.

**Homepage-only, no slug available:** `purity-peptides` (purity_api adapter), `aero-peptides` (cinc, skipped by refresh). Both still get grids — the price table is the value, the deep link is a bonus.

---

## 🛡️ GUARDS

| Guard | Fails or warns | Catches |
|---|---|---|
| `check:links` | **Fail** | Dead internal links — 3,510 links, now incl. single-segment routes (899 links across 22 slugs were validated by nothing) |
| `check:grids` | **Fail** | Active vendor with a coupon page and zero price rows |
| `check:freshness` | **Fail** on budget, **warn** on age | Description over 155 chars; stamp older than 35 days |
| `check:surfaces` | **Warn** | Active vendor missing from a completeness-claiming surface |

> 🔒 **Severity rule:** an output-correctness bug **fails**; a staleness or coverage gap **warns**. A stale month is cosmetic; an undeployable site is not. `check:freshness` originally failed on both and was split for exactly this reason — the stamp only advances on a clean `check:vendors` run, which depends on 33 third-party sites being reachable.

---

## 📏 SCOPE — clarifications to Locked Rule 3/4

**Kits are excluded everywhere.** Multi-vial bundles are not singles: Crush's 3/5-pack Mix & Match, Modern Aminos' packs, Spartan's 2/4-vial rows (42 dropped), Peptide Giants' 10-vial kits.

**A blend is ONE vial containing multiple peptides. A bundle is several separate vials shipped together.** Bundles are kits. Spartan's nine named "protocol" stacks — Skinny Fit, Energizer Bunny and others — are bundles, not blends, and are excluded.

**New form exclusions:** dissolving strips / "Melts" — consumer delivery formats matching a peptide name and passing as sizeless singles.

**No-size rows are excluded at the section level**, not just dropped downstream — they were rendering a misleading `—`.

**Approved non-peptides (5):** `slu-pp-332`, `dihexa`, `mk-677`, `tesofensine`, `orforglipron`. The filter excludes by default, so nothing enters without deliberate registration. PP's scope is "research compounds PP profiles" — mostly peptides, and the Khavinson bioregulators *are* peptides.

**Coded SKUs — decode only from the vendor's own pages:**

| Decoded | Evidence |
|---|---|
| MA-3RT → Retatrutide | Their `/product/retatrutide/` redirects to it; image reads "GLP/GIP/GLUCAGON" |
| MA-1P → Petrelintide | CAS 2766385-23-1, formula, MW on the page |
| Crush Double/Triple Agonist → Tirzepatide/Retatrutide | Stated on their product pages |
| Spartan GLP-1/2/3 (Sema/Tirz/Reta) | Self-identifying in the name |
| PureRx Reta/Tirz/Sema | Product descriptions name the compound |

**Left coded:** MA-2TZ, MA-1S, Peptide Giants' PG-1SG/PG-2TZ/PG-3RT/GLP-3R, Treasure Coast's GT-I/II/III. Escalating numerals are *suggestive* — that is not evidence. Coded rows are documented in the master doc and **excluded from the buyer grid**.

---

## 🎨 GRID PRESENTATION

**No row cap.** A 32-row cap was built, then removed: rows are alphabetical, so it hid everything after roughly the letter J — on peptides-gg that meant Tesamorelin, TB-500, Semaglutide and Wolverine were always behind a click. The cap filtered by alphabet, which correlates with nothing.

**Uncapped page weight** (measured, previously never): PureRawz 117 rows → 232 KB raw / **15.4 KB gzipped** / **2,731 DOM nodes**. Transfer is a non-issue; DOM count is ~1.8× Lighthouse's guideline. **Core Web Vitals still unmeasured** — PureRawz is the page to test.

**Copy varies by affiliate URL shape.** "Your price after the code" only where a `coupon=`/`code=` param exists (amino-club, amino-x, peptides-gg). Everywhere else: "once you apply code X at checkout."

---

## 📅 Changelog

**v3 (August 2, 2026):**
- 📊 **Grids 1 → 33 vendors.**
- 🔌 **Five adapters/mechanisms added** — `nextjs_feed`, `gatsby_pagedata`, session-auth woo, pull-time permalink resolution, >50% row-drop floor. Fail-loud mandatory for feed adapters.
- 🔗 **Path-based affiliate links compose** — CINC-verified on six vendors, confirmed by Peptide Partners' own generator. `vendorSlug` stores the permalink PATH. One genuine cross-host exclusion.
- 🛡️ **Four build guards**, with the fail-vs-warn severity rule.
- 📏 **Scope clarified** — kits everywhere, blend-vs-bundle defined, strips excluded, no-size enforced at section level, coded-SKU decode standard.
- 🎨 **Row cap removed** with the alphabetical reasoning; page weight measured for the first time.
- 🔒 **BLOCKED entries must be verified against the data, not the page** — two vendors were wrongly blocked for weeks.

---

*The artifact is the source. A page that renders "Loading…" is not a catalog that's unreachable.*
