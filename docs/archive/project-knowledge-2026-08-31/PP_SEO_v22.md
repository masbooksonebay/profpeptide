# PP SEO — Prof. Peptide Search Strategy

**Status:** ACTIVE. **Supersedes v21 entirely.**
**Version:** v22 (July 29, 2026)
**Pairs with:** PP_SEO_LEDGER v4 (operational per-URL tracker) · SCS_REF_INDEX v8 (board) · PP_VENDOR_PAGES v4 · PP_PRICES v2 · PP_COMMISSIONS v4

> ⚠️ **v21's §P0 was wrong and gated the entire sequence on a defect that did not exist.** It is deleted, not amended. See §1.

---

## 🔴 §0 — THE CONVERSION MODEL (read before any coupon-page decision)

**On coupon queries, the impression IS the conversion event. The click is not.**

Buyers search `amino club promo code`, read the code out of PP's search result, and apply it at the vendor's checkout **without ever visiting profpeptide.com**. PP_COMMISSIONS v4 established this from the commission data: Peptide Partners produces ~51% of all commission on 96 GSC impressions and 256 lifetime visits at 46.88% conversion — a rate only possible if the code is used without clicking. ~116 of ~120 lifetime Peptide Partners commissions have no associated tracked visit.

**Consequences, all of which invert normal SEO practice:**

| Normal SEO | PP coupon pages |
|---|---|
| CTR is the goal | **CTR is nearly irrelevant.** 0.7% on page-1 coupon queries is the model working, not a leak |
| The snippet sells the click | **The snippet IS the product.** It delivers the code |
| Title optimizes for click appeal | **Title must contain the code**, inside the ~60-char display window |
| Truncation is cosmetic | **Truncation past the code is revenue loss** |
| A suppressed snippet costs traffic | **A suppressed snippet costs the entire mechanism** on that vendor |

> **This section exists because the model was mis-analyzed on July 28.** The coupon queries' low CTR was read as a "four-to-six-fold leak" and a CTR pass was nearly prioritized above everything else. It was the model working as designed. **Evaluate coupon pages on impressions, position, and snippet content — never on clicks.**

---

## ✅ §1 — PHASE 0 IS CLOSED. THE PREMISE WAS WRONG.

**v21 claimed:** Google was assigning `https://www.747live.bet/` as canonical to PP pages lacking a self-referencing canonical; a sitewide canonical fix was required; all other SEO work was gated on it.

**What the evidence showed (CC repo recon + GSC URL Inspection with a control page, July 28):**

1. **Live production HTML carries a correct self-referencing canonical on every page tested.** `747` appears in none of them, and nowhere in the repo including `node_modules`. There was never a canonical to add.
2. **The dividing line was crawl date, not page.** Every page crawled before ~Jul 26 showed no user-declared canonical; the one crawled Jul 28 showed it present. The canonical began serving in the last week of July — **not in May**, as the commit date suggested.
3. **`/coupons/amino-club` was never affected.** Indexed, Google-selected canonical = Inspected URL. It was recorded as a casualty on the strength of a single stale GSC field.
4. **`/vendor-testing-index` is deliberately `noindex`** — the page is incomplete (Mark's call). Removed from the defect set.
5. **`747live.bet` is a Philippine online-casino brand running a multi-domain SEO spam network** (`747livee.com`, `747liveph.dev`, `747casino.uk.com`, `www-747live.ph`, `747live.org`, plus seeded profile spam across GitLab, MyAnimeList, Habr, StackShare, Behance, Issuu). No repo footprint. **The countermeasure is entity strength, not code.**
6. **`/prices/glow` and `/prices/klow` are 404s by design** — zero rows in the price dataset, not linked internally, not in the sitemap.
7. **`/methodology` "not served over HTTPS" did not reproduce.** Property-wide: 53 HTTPS URLs, 0 non-HTTPS.

**Final size: 8 pages**, on a report dated Jul 23 that predated the fix. Expect it to fall unaided.

---

## 🔴 §2 — THE ACTUAL CONSTRAINT: CRAWL FREQUENCY

Every GSC finding investigated on July 28 was **already fixed in deployed code**:

| Finding | Actually fixed | Crawl behind the report | Gap |
|---|---|---|---|
| Missing canonicals | ~Jul 26 | Jul 23 report | days |
| Redirect error (12) | before May | May 4 / May 9 | **~3 months** |
| `/coupons/nordic-peptides` 404 | May 13 (`a126305`) | Jul 12 | 2 months |
| `/coupons/apollo-peptide-sciences` 404 | Jun 9 (`ec23364`) | Jul 14 | 5 weeks |
| `/news/rfk-peptide-ban-2026-v2` | May 11 (`3d2ccbb`) | May 8 | 2.5 months |

GSC's *referring page* data was stale too — it named a source page whose link had been removed weeks earlier.

**Google is not returning to profpeptide.com often.** Low crawl frequency is an authority symptom, and it shares a root with the brand query returning an unrelated podcaster, an offshore casino winning a duplicate cluster, and 32 pages crawled-and-declined.

**Prioritisation consequence:** `sameAs`/entity work and a backlink baseline are levers on the constraint. Cosmetic ranking work is not.

**Method consequence:** **check the last-crawl date before opening any GSC investigation.** Four investigations on July 28 produced zero code changes.

---

## ✅ §3 — THE GLACIER TEMPLATE (proven, now sitewide)

`/coupons/glacier-aminos` was the one coupon page whose title and description Google accepted verbatim while `/coupons/amino-club` had its title rewritten and its snippet suppressed. Its shape is now the standard for all 33.

**Title — composed centrally, ≤60 chars, code always present:**
```
{Vendor} Discount Code: {CODE} — Save {X}%
```
Worst case is Science Based Peptides at exactly 60. **Deliberately dropped:** `| Prof. Peptide` (Google already displays `profpeptide.com` above the title — 16 wasted chars) and the date (cannot fit alongside the code; it lives in the description).

**Description — composed centrally, ≤155 chars, code at char 9:**
```
Use code {CODE} at {Vendor} to save {X}% sitewide — verified and
working for {MONTH YEAR}. {vendor-specific differentiator}
```

**Both derive from `vendors.ts`. Layouts carry neither — the composer refuses a passed title or description.** So the title, the description, and the JSON-LD `Offer` all read the same `discount` field.

> 🔒 **This structurally prevents the defect that suppressed Amino Club's snippet.** A temporary 30% boost was written into the title/description/FAQ while the JSON-LD and the actual code stayed at 20%. Google judged the title inaccurate, rewrote it, and dropped the description. **A contradiction of that kind is now impossible without editing the single source of truth, which updates all three together.**

**Differentiator rule:** the trailing clause is the ONLY unique text across 33 near-identical descriptions. It must be specific and page-sourced. **Do not rotate generic phrases** — 36% of PP's supplement pages were crawled and declined, most likely for templated similarity. If a vendor has no distinguishing detail, say so rather than inventing one. *(Precedent: an "Ascension stacks with sale prices" line was rejected by CC because Ascension's "stacks" are peptide-blend products, not discount stacking.)*

**Freshness:** the month derives from `CODES_VERIFIED_DATE` in `vendors.ts` — Mark's manual constant, updated after a verification round. One line changes every page. **Never hardcode a month or year in a coupon title or description.**

**Two dates, both needed, different meanings:**
- `CODES_VERIFIED_DATE` (manual) — *the codes work at checkout.* Only a human can assert this; `check:vendors` places no order.
- `VENDORS_VERIFIED_ISO` (machine, from `check:vendors`) — *the affiliate links resolve.* Feeds the JSON-LD Offer dates.

---

## 🔴 §4 — THE ONE REAL FINDING: CRAWLED AND DECLINED

**"Crawled — currently not indexed" = 51 raw, 32 real content pages** after subtracting 14 machine routes (11 OG/Twitter image routes, `site.webmanifest`, `apple-icon`, `favicon.ico`) and 5 www host variants.

| Group | Count |
|---|---|
| `/supplements/*` | **19** |
| `/peptides/*` | 10 |
| `/compare/*` | 2 |
| `/guides/*` | 1 |

**19 of 53 supplement pages — 36% of the library — were crawled and declined.** Crawled Jul 22–25, so the staleness explanation does not apply. Google looked recently and said no. This is the boilerplate-vs-unique problem with a number attached.

**Second signal:** the 10 declined peptide pages are almost all blends and combos — `cjc-1295-dac-ipamorelin`, `kpv-bpc-157`, `gh-stack`, `tesamorelin-ipamorelin`, `cagrisema`, plus standalone `cjc-1295` and `ipamorelin`. **The roadmap plans 15–25 new blend/stack profiles. Google is already declining the blend pages that exist.** Understand why before building more.

**Method:** compare 3–4 declined pages against 3–4 indexed ones and isolate what differs. Not yet done.

---

## 📉 §5 — WHAT THE QUERY DATA SAYS (and its limits)

⚠️ **The GSC export in project knowledge covers June 10 – July 7, 2026.** It predates the price section launch (Jul 25), the four new vendors, and everything shipped Jul 28–29. **Directionally sound, numerically stale. Pull a fresh 28-day export before acting on any figure below.**

**Total: 9,372 impressions, 57 clicks, 0.6% CTR.**

**Demand is overwhelmingly vendor-coupon queries:**

| Vendor | Impressions | Queries |
|---|---|---|
| Amino Club | 3,668 | 28 |
| Glacier Aminos | 988 | 21 |
| Royal | 110 | 8 |
| Oasis | 94 | 7 |
| Midwest | 51 | 5 |
| *everything else* | ≤20 each | — |

**Amino Club + Glacier ≈ 95% of vendor-query demand.** Coupon-page SEO is effectively a two-vendor game; treat the other 28 accordingly when spending indexing quota or effort.

**Phrase demand — all three are near-synonyms to Google:**

| Phrase | Impressions |
|---|---|
| promo code | 1,987 |
| discount code | 1,563 |
| coupon code | 832 |

> **Terminology does not drive impressions.** PP ranks for `amino club promo code` (1,268 impressions, position 7.2) with a title saying "Discount Code." Across the same page, position is *best* on the coupon query (5.0) and *worst* on the discount query (6.3) — the reverse of what a terminology effect would produce. **Impressions come from ranking, not from term matching.** The only real argument for a second phrasing is that Google bolds matching terms; that is an attention effect, not a traffic lever. **Do not stuff synonyms** — that is the kind of title Google rewrites.

**Question-shaped demand is small in what PP currently surfaces for:** 87 queries, 261 impressions, **0 clicks** — 2.8% of impressions. The needle/syringe cluster alone is 85 queries and 187 impressions, with 20 already ranking page 1.

⚠️ **GSC is structurally blind to demand PP is invisible for**, which is exactly where a competitor's query-shaped traffic would come from. **This data cannot refute the thesis that query-shaped pages are valuable.** Testing that requires inspecting competitors' ranking pages; the Similarweb trial expired July 18.

---

## ✅ §6 — SHIPPED JULY 28–29

| Item | Result |
|---|---|
| Amino Club 20% consistency | Live. "up to 30%" gone from title, description, JSON-LD, FAQ, body, OG cards. Indexing requested |
| All 33 descriptions | Style A, code at char 9, ≤155 chars, composed centrally |
| All 33 titles | Code-visible format, ≤60 chars, composed centrally. **amino-club + glacier byte-identical** (hard acceptance check) |
| Month derived | `CODES_VERIFIED_DATE` → every title and description. Zero hardcoded years remain |
| `priceValidUntil` | Was **21 pages expired**, not 4. Now derived from the verification stamp, +1 year |
| `dateModified` | Added, derived |
| `check:vendors` | 28/30 reachable, 0 dead, 2 Cloudflare-blocked (both confirmed alive in a browser). Fail-loud on DEAD only |
| `check:links` | 3,510 internal links across 6 route families. One dead link found and fixed. **Now gates `npm run build`** |
| `/privacy` | "Last updated: 2025" → April 3, 2026 (git-grounded) |
| Phase 0 | Closed. Zero code changes required |

---

## 📋 §7 — SEQUENCE

**Phase 1 — the levers on the constraint**
1. **`sameAs` + `@id` publisher link on Organization schema.** Three social URLs already in the footer. The countermeasure to the entity problem and to cluster misfires. **NEXT.**
2. **Backlink baseline.** Roughly half of SEO has never been examined. 30 affiliate vendors are the most underused asset available; it costs an email.

**Phase 2 — the real content problem**
3. **Boilerplate-vs-unique audit** across 30 coupon and 53 supplement pages. §4 is its measured symptom.
4. **Act on the finding** before building more blend/stack profiles.

**Phase 3 — structural gaps**
5. **BreadcrumbList.** Google recognises breadcrumbs on **19 URLs total** — 14 `/peptides/*` of 62 profiles, plus `/best-peptide-vendors`, `/bioregulators`, `/compare`, `/news` + one article, `/about`. **Zero on coupons, prices, supplements, guides.** Absent sitewide, not missing on two routes.
6. **Search index rebuild** — covers 27 of 62 peptides and zero price pages.
7. **Editorial-staff byline + `author` schema + `/methodology` substance.** A generic byline is weaker than a named credentialed author on YMYL; an improvement, not a solution.
8. **Hardcoded coupon codes** — 27 pages + the `/best-peptide-vendors` Featured contradiction (Oasis on `/coupons`, Peptides.gg on Featured). Blast radius measured: `PROFPEPTIDE` → 16 vendors / 40 files.
9. **Core Web Vitals** — never measured. `/prices` compound pages carry 20+ rows.

**Phase 4 — vendor product grids**
10. Amino Club pilot approved. Roll out to remaining vendors — recon first (row counts, `vendorSlug` coverage, which affiliate URLs auto-apply the code).

**Phase 5 — FAQ hub-and-spoke**
11. Recon `/faq` · mine a **fresh** GSC export for question-shaped queries · build the hub.
    ⚠️ **Build for users, not rich results.** Google restricted FAQ rich results to authoritative government/health sites in 2023; PP is not eligible. The markup validates and renders nothing.

**Phase 6 — query-shaped commercial pages**
12. Validate volume first · vendor-alternative pages (**Peptide Sciences has closed — that demand is permanently orphaned**) · 5–8 commercial-phrase pages · reuse the product-grid component.

**Ongoing**
13. Restart news publishing (stopped in June) — per-compound "further reading" only; the same article on all 62 profiles is boilerplate.
14. Re-check `/prices` impressions at 4 and 8 weeks (live Jul 25) — due ~Aug 22 / ~Sep 19.

---

## 🔵 §8 — SCHEMA DECISIONS (closed — do not re-litigate)

| Type | Verdict |
|---|---|
| **BreadcrumbList** | **Build it.** Widely supported, hierarchy exists, pattern proven on peptide pages |
| **The bare `Offer`** | Keep correct, **expect no rich result.** No `price`/`priceCurrency`, not nested in a Product — largely ignored. The fix removed a harmful signal; it does not add a positive one |
| **Product / ItemList on `/prices/*`** | **Low priority.** Product rich results increasingly require Merchant Center and first-party selling; PP is an aggregator |
| **`aggregateRating`** | **Skip permanently — no legitimate source.** PP collects no first-party ratings; inventing one risks a manual action |
| **FAQPage** | **Skip.** Restricted since 2023. ⚠️ *Verify before using this as grounds to REMOVE existing markup — platform behaviour changes* |
| **Article on peptide pages** | Fine as-is. Article rich results are largely limited to news/Top Stories |

---

## 🧭 §9 — METHOD RULES EARNED THE HARD WAY

1. **Check the last-crawl date before opening an investigation.** Four findings on July 28 were already fixed, two of them months earlier. The date field was visible in every case.
2. **A dashboard field is an observation, not a diagnosis.** "User-declared canonical: None" meant "none *at last crawl*." Use a known-good control page to separate a real defect from a reporting artefact.
3. **Ask for the population before the sample.** Half a session went into hand-sampling 14 URLs; the Pages report gave all 100 correctly bucketed in one screen — and revealed two problems sampling never would have.
4. **An exclusion is not automatically a defect.** Of 100 non-indexed pages, 21 work as designed (18 intentional redirects, 3 intentional noindex) plus 14 machine routes. **Classify before counting.**
5. **Never re-run validation on a deliberate exclusion.** Three of five failed validations were structurally impossible to pass — they were run against intentional redirects and noindex pages.
6. **Diagnose the pipeline, not just the code.** Repo state, deploy state, and crawl state each lied alone.
7. **Counts in docs are claims.** "Four expired `priceValidUntil`" survived three doc versions; the real number was 21.

---

## ⛔ §10 — GSC: DO NOT DO

| Action | Why not |
|---|---|
| Request indexing on the §4 declined pages | Google crawled and **chose** not to index. A quality judgment, not a discovery failure |
| Request indexing / Removals on the 404s | They are *supposed* to 404. Google drops them unaided |
| Re-run validation on "Page with redirect" | Redirects are intentional |
| Re-run validation on "Excluded by noindex" | `/vendors` and `/contact` are deliberately noindexed |
| Re-run validation on "Not found (404)" | Same — the 404s are correct |
| Request indexing on pages that did not change | Amino Club was byte-identical through the title pass. Burns quota for nothing |
| Spend quota on low-demand vendors | 28 of 30 vendors are ≤20 impressions. Only Amino Club, Glacier, Royal, Oasis are worth a request |

**Permitted retry:** "Duplicate without user-selected canonical" only, and only after a recrawl (~Aug 5).

---

## 📅 Changelog

**v22 (July 29, 2026):** **§P0 deleted — the premise was wrong and it gated everything on a defect that did not exist.** Added **§0 the conversion model** (impression = conversion on coupon queries; CTR is not the metric) after the model was mis-analyzed on Jul 28. Added **§2 crawl frequency as the underlying constraint** with the four-findings-already-fixed table. Added **§3 the Glacier template**, now shipped sitewide for titles and descriptions, with the structural note on why the Amino Club contradiction can no longer recur. **§4** narrowed crawled-and-declined to 32 real pages, 19 supplements. **§5** query data with the June 10 – July 7 staleness caveat and the terminology-does-not-drive-impressions finding. **§6** shipped log. **§9** method rules, **§10** do-not-do table. Corrected: `priceValidUntil` was 21 pages expired, not 4; `royal-peptides` never carried a "(May 2026)" title.

**v21 (July 27, 2026):** P0 canonical alarm (wrong), full audit, phase sequence, competitive analysis, metrics log.

---

*The impression is the conversion. The constraint is crawl authority. The work is the 32 declined pages. Check the crawl date before you investigate anything.*
