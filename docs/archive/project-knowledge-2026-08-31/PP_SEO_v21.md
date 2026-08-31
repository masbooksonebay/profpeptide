# PP SEO — v21

**Date:** July 28, 2026
**Status:** ACTIVE. **SUPERSEDES v20.**
**What's new:** a **P0 canonical defect** — Google is assigning an unrelated external domain as the canonical for PP pages that lack a self-referencing canonical tag, effectively deindexing them. Plus the **full SEO audit** (E-E-A-T, backlinks, templated similarity, content freshness, Core Web Vitals) that v20 didn't cover, and a corrected phase sequence gated on the canonical fix.

---

## 🔴 P0 — THE CANONICAL DEFECT (fix before anything else)

### What's happening

Google is assigning **`https://www.747live.bet/`** — an unrelated gambling domain — as the Google-selected canonical for PP pages that do **not** declare a self-referencing canonical.

Confirmed July 28 across a 14-page sample:

| Page | User-declared canonical | Google-selected canonical |
|---|---|---|
| `/vendor-testing-index` | **None** | **`https://www.747live.bet/`** |
| `/prices/5-amino-1mq` | **None** | **`https://www.747live.bet/`** |
| 11 others | self | self ✅ |
| `/vendors` | self | self (intentionally noindex) |

**Pages that lose their canonical to a foreign domain are effectively deindexed.** This is not a ranking problem — it's page loss.

### The pattern

Every collapsed page has **User-declared canonical = None**. Pages declaring a self-canonical are indexed correctly.

One nuance: `/coupons/amino-club` also declares none, yet Google still chose itself. So a missing self-canonical is **necessary but not sufficient** — the pages that collapse are missing a self-canonical *and* being clustered with that external domain.

### What it is NOT

- **NOT an apex/www conflict.** GSC is a Domain property (`sc-domain:profpeptide.com`), which covers all variants under one roof. An apex/www split isn't possible at the property level.
- **NOT the three pages logged in May.** `/peptides/thymosin-alpha-1`, `/coupons/ignite-peptides`, and `/supplements/tongkat-ali` were recorded as "Google chose the www variant" and were expected to still be stuck. **All three now show clean self-canonicals.** Whatever that was, it resolved.
- **NOT fixable by Request Indexing.** `/vendor-testing-index` was submitted and **rejected during live testing**. Recrawling a page Google has already judged a duplicate just re-confirms the judgment.

### Remediation

1. **Add an explicit self-referencing canonical to EVERY page.** This is the fix regardless of root cause and should ship immediately.
2. **Investigate the cause in parallel** — grep the codebase for any reference to that domain; check for stray cross-domain `<link rel="canonical">`, hreflang pointing off-domain, or injected markup. Determine whether that domain is scraping PP or something is compromised.
3. **Audit which pages currently lack a self-canonical** — the sample found 3 of 14 (including `/coupons/amino-club`). The real number is unknown.

⚠️ **Everything downstream is gated on this.** Better schema, better titles, and new pages are worthless on a page Google won't index.

### One more anomaly
`/methodology` reported **"Page is not served over HTTPS"** in one inspection view while other pages showed HTTPS served. Indexed, but worth checking.

---

## 1) Core diagnosis (carried, now three-part)

1. **Position / CTR** — the original diagnosis, unchanged.
2. **Page coverage** — PP generates a page per *entity*; it has no pages for commercial queries that don't map to one (v20's finding).
3. **🆕 Indexability** — some pages are being canonicalised away entirely.

**Indexing is NOT the bottleneck.** July 27's run: 28 URLs queued, 24 already indexed without ever being submitted, all four coupon pages live one day earlier already picked up. **Google indexes new PP pages within ~24h via the sitemap.** Manual requests are now worth running only for pages GSC reports as genuinely *unknown to Google*.

---

## 2) 🆕 THE FULL AUDIT — what v20 didn't cover

### E-E-A-T and author signals
PP is squarely YMYL — health content about compounds people ingest. Google weights author expertise heavily there, and **PP has no visible author anywhere**: no byline, no credentials, no editorial policy statement.

**Decision (July 28):** *Prof. Peptide editorial staff* is the author. To count, it must be **visible and substantiated**:
- Byline at the end of every peptide profile, supplement page, and guide
- `author` field in the schema pointing at the Organization
- `/methodology` carrying the substance — who the editorial staff are, what the review process is, what qualifies them

⚠️ **Honest caveat:** a generic editorial byline is weaker than a named person with credentials on YMYL health content. This is a real improvement over nothing, not a complete solution.

### Backlinks — never examined
Every session to date has been on-page. **PP's backlink profile has never been measured**, which leaves roughly half of SEO unexamined.

Not directly controllable, but the inputs are:
- **30 affiliate vendors** — several would plausibly link to a review of themselves. Most underused asset available; costs an email.
- App Store listing, social profiles, citations.

**Action: establish a baseline before deciding it isn't worth working.**

### Templated similarity
30 coupon pages share a structure; 53 supplement pages likewise. If Google judges them near-duplicates it deduplicates.

⚠️ **The canonical finding argues against this as the current cause** — the collapsed pages didn't collapse into each other, they collapsed into an external domain. Still worth measuring boilerplate-vs-unique ratios as a possible drag elsewhere.

### Content freshness
The 62 peptide profiles' last substantive update is unknown. Google favours recently-updated content on evolving topics, and peptide research moves.

**News stopped in June.** A stale news section is its own negative signal.

**Rule for news on profiles:** a "further reading" block showing news **tagged to that compound** adds unique content and a fresh internal link. **The same latest article on all 62 profiles is more boilerplate** — exactly what to avoid. Show compound-relevant news; show nothing when there is none.

### Core Web Vitals — never measured
Probably fine on Vercel, but never checked. `/prices` compound pages carry 20+ rows. Measure via Lighthouse locally and PageSpeed Insights for field data.

### Schema — the smaller wins (all agreed)
- **`BreadcrumbList`** sitewide — cheap on a site with this much hierarchy
- **`SoftwareApplication`** on `/calculator`
- **`MobileApplication`** on `/app`

### Schema gaps carried from v20
| Gap | Status |
|---|---|
| No `sameAs` on Organization | ⬜ **Open — highest-leverage entity fix.** Three social URLs already in the footer |
| Broken `logo` (`/icon.png` 404) | ✅ **Fixed July 27** — file created and live |
| No `@id` / publisher link between WebSite and Organization | ⬜ Open |
| `priceValidUntil: 2026-06-30` | ⬜ **Expired four weeks ago.** Worse than no date |
| No `dateModified` on coupon pages | ⬜ Open |

**Entity context:** Google's AI Overview for "prof peptide" describes Anthony Castore and Andrew Huberman, not PP.

---

## 3) 🆕 FRESHNESS — the daily verification design

Mark verifies every affiliate link and discount code **manually, daily.** That should be mechanical and should feed the dates.

**Design:** a script (`check:vendors`) that hits every affiliate URL, reports status, flags failures, and **writes a timestamp**. The site renders *that* timestamp — so "Verified July 28" is true rather than a claim.

Runs daily via **GitHub Action**, opening an issue on failure. CC cannot run on a schedule; CI can.

**Where the date belongs:**
- **Meta descriptions** on coupon pages — visible in the SERP, a CTR lever. *(PeptideStack does this; PP has none.)*
- **`dateModified`** in JSON-LD.
- Body copy is fine but does the least work — nobody sees it before clicking.

⚠️ The script **cannot** verify a code applies at checkout; that needs a real cart. Be explicit about what it does and doesn't prove.

---

## 4) Competitive finding (carried from v20)

**PeptideStack ranks above PP on commercial queries with a weaker site because its pages are shaped like queries, not entities.**

| PeptideStack | Prof. Peptide |
|---|---|
| `/best-peptides-for-sale-online` | `/peptides/bpc-157` |
| `/peptide-coupon-codes` | `/prices/bpc-157` |
| `/peptide-pros-alternative` | `/coupons/amino-club` |

Three mechanics PP lacks: **competitor-alternative pages**, a **dated freshness signal** in the meta description, and **long-form blog at question queries**.

**Price comparison is a conversion asset, not an acquisition one.** PeptiPrices and PeptideCritic have mature comparison tools and rank below PP. ⚠️ Do NOT read `/prices`' current zero impressions as evidence — it shipped July 25. Re-check at 4 and 8 weeks.

---

## 5) CORRECTED PHASE SEQUENCE

### 🔴 Phase 0 — Indexability (blocks everything)
1. Self-referencing canonical on **every** page
2. Investigate the 747live.bet association
3. Audit which pages currently lack a self-canonical

### Phase 1 — Fix what's broken
4. `sameAs` + `@id` publisher link on Organization schema
5. Expired `priceValidUntil` → derived, not hardcoded
6. Stale "(May 2026)" titles on `/coupons/ez-peptides`, `/particle-peptides`, `/royal-peptides`
7. `/coupons/amino-club` title rewrite *(discount already fixed to 20%)*
8. `/prices/glow` + `/prices/klow` — indexing rejected, live-test render issue
9. **Search index rebuild** — hand-maintained, covers 27 of 62 peptides and zero price pages
10. Hardcoded coupon codes — 27 pages + `/best-peptide-vendors` (live Featured contradiction)

### Phase 2 — Author, freshness, verification
11. Editorial-staff byline + `author` schema + `/methodology` substance
12. `check:vendors` script + GitHub Action + generated check-dates
13. `dateModified` on coupon pages
14. `BreadcrumbList`, `SoftwareApplication`, `MobileApplication`

### Phase 3 — Measure what's never been measured
15. Backlink baseline
16. Core Web Vitals
17. Boilerplate-vs-unique ratio across coupon and supplement pages

### Phase 4 — Vendor product cards
18. **Amino Club pilot — BUILT, parked, awaiting review** (3 commits)
19. Roll out to remaining vendors if approved

### Phase 5 — FAQ hub-and-spoke
20. Recon `/faq`
21. Mine GSC exports for question-shaped queries
22. Build with FAQPage schema, 2–4 sentence answers, links to existing pages first

### Phase 6 — Query-shaped commercial pages
23. Validate volume
24. Vendor-alternative pages — Core, Biotech, Verified, **Peptide Sciences (closed — demand permanently orphaned)**
25. Commercial-phrase pages (5–8)
26. Reuse the product-card component

### Ongoing
27. Restart news publishing — stopped in June
28. Per-compound "further reading" news block on profiles
29. Re-check `/prices` impressions at 4 and 8 weeks

---

## 6) Metrics log

| Window | Scope | Clicks | Impr | Avg Pos | Notes |
|---|---|---|---|---|---|
| 5/24–5/30 | site | 6 | ~1,300 | 18.2 | Baseline |
| Last 28d (7/27) | site | **210** | 18,000 | **15.4** | vs prior: clicks **+51%**, impressions −13%, position improved from 18.1 |
| Last 28d (7/27) | `/coupons/amino-club` | — | **6,512** | ~5.8 | **+2,270 — biggest gainer on the site.** Title rewritten, snippet suppressed, CTR 0.4% |
| Last 28d (7/27) | `/prices/*` | 0 | 0 | — | Live 2 days. Re-check ~Aug 22 / ~Sep 19 |

**Impression losses are concentrated in compound/informational pages** — `/compare/semaglutide-vs-tirzepatide-vs-retatrutide` −471, `/peptides/igf-1-lr3` −679. The coupon cluster is up.

**Sitemap:** 265 URLs, regenerated on every Vercel deploy by `next-sitemap`. Never hand-commit it — now gitignored.

**GSC quota (LOCKED):** never state a figure in a prompt. Observed: 11 (Jul 21), 10 (Jul 25), not reached (Jul 27).

---

## 📅 Changelog
**v21 (July 28, 2026):** P0 canonical defect — Google assigning `747live.bet` as canonical for pages lacking a self-canonical; two of fourteen sampled pages affected and effectively deindexed. Full audit added: E-E-A-T decision (editorial-staff byline), backlinks never measured, templated similarity, content freshness and the news rule, Core Web Vitals, three schema wins. Daily verification design. Phase sequence re-gated on Phase 0.

**v20 (July 27):** Query-shaped vs entity-shaped finding; PeptideStack analysis; FAQ hub plan; GSC diagnostic; schema gaps.

---

**Cross-ref:** PP_SEO_LEDGER · PP_VENDOR_PAGES v4 · PP_PRICES v2 · PP_VENDOR_PROSPECTING v19 · SCS_REF_INDEX

---

*Three problems now: position/CTR, page coverage, and indexability. Fix indexability first — nothing else matters on a page Google won't index.*
