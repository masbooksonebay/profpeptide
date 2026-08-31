# PP SEO — INDEX-STATUS LEDGER — v3

**Status:** ACTIVE OPERATIONAL TRACKER — the single per-URL index-status record, the not-indexed reason registry, the new-page index watch, + the CINC-run log.
**Version:** v3 (June 28, 2026) — adds the **6/28 pending reconciliation** (maritide + retatrutide → indexed), the **complete 8-bucket Not-Indexed Reason Registry** (all 101 GSC not-indexed URLs classified), the **amino-x indexing request**, the **3 registry "action items" that live-verified as already-resolved/non-issues** (stale GSC), the **New-Page Index Watch system** (forward-tracking new pages → request), and the hardened **verify-before-acting caveat** (GSC ~17-day lag means flagged issues may already be fixed). Supersedes v2.
**Pairs with:** PP_SEO v12 (narrative/strategy). **Review BOTH at the start of every SEO session.**

---

## ⭐ WHY THIS EXISTS (the efficiency fix)

We kept re-running the same GSC checks because nothing persisted per-page status. **Proven repeatedly 6/19–6/28:** GSC's URL-Inspection/bucket data lags days to weeks (the 6/28 registry snapshot was ~17 days stale), so pages show "not indexed" long after they're actually indexed, and "action items" surface that are already fixed. This ledger = our accumulated, dated, verified per-URL status + the reason registry. Every CINC run READS it first (skip Indexed/Pending/Excluded) and WRITES findings back.

**Four hard rules this ledger encodes:**
1. **GSC bucket reports + URL-Inspection records lag — do NOT trust them as current state.** A URL Inspection record reflects the **last crawl date**, not today. Live-inspect for truth; record date + method.
2. **Every CINC GSC run READS this ledger first** and **WRITES findings back** (run log + status moves + index-watch updates).
3. **Don't blind-request to "use up" quota.** The genuine not-indexed *content* pool is tiny. Spend quota on reconciling Pending, on the New-Page Index Watch list, or on genuinely-new pages — never on noise or in-window re-requests.
4. **🆕 VERIFY BEFORE ACTING ON A REGISTRY "ACTION ITEM."** Because of the ~17-day GSC lag, a flagged issue (missing canonical, duplicate, redirect error) may already be fixed in the repo/live site. **Always live-verify the repo + live URL before changing anything.** On 6/28 all 3 flagged "action items" turned out to be already-resolved or non-issues — fixing them blindly would have risked introducing bugs into correct code.

> Sitemap baseline (verified 6/20): native Next.js App Router `sitemap.ts`, **167 URLs**, no exclude patterns. **/peptides/ integrity: 49 in data source = 49 in sitemap (1:1, zero gaps).**

---

## 🗂️ Status legend
| Mark | Meaning |
|---|---|
| ✅ **INDEXED** | Confirmed via live URL Inspection (date). Do not re-check/re-request. |
| ⏳ **REQUESTED — PENDING** | Requested; awaiting crawl. ~30-day re-request window. |
| 🔵 **KNOWN-NOT-INDEXED** | Confirmed not indexed, not excluded — eligible to request. |
| ⛔ **EXCLUDED-BY-DESIGN** | Should not / cannot be indexed; reason recorded. Never request. |
| ❓ **UNVERIFIED** | In sitemap, not individually status-checked. Don't assume. |

---

## A. ✅ CONFIRMED INDEXED (live-verified)

Carries v2's confirmed-indexed set forward (21+ peptide/supplement/news/coupon URLs from the 6/17–6/20 runs — see v2 Section A). **Added 6/28:**

| URL | Verified | Notes |
|---|---|---|
| /news/amgen-maritide-glp1-gip-explainer-2026 | 6/28 | was pending (6/19) → indexed. The canonical/`buildPageMetadata` fix (`43df03f`) worked. |
| /peptides/retatrutide | 6/28 | was pending (6/19); the alarming "not indexed" reading was a stale Apr-26 record — resolved exactly as predicted. **Stop re-checking.** |

---

## B. ⏳ REQUESTED — PENDING (do not re-request before window clears)

| URL | Requested | Window ~ | Diagnosis | Notes |
|---|---|---|---|---|
| /hybrid-rockstar/support | 6/19 | ~7/19 | Discovered – not indexed (crawl N/A) | Still Discovered/not-crawled on 6/28. Only Apple App Store referring links; Google hasn't prioritized a crawl. Leave in-window. |
| /strength-cycle/support | 6/19 | ~7/19 | Discovered – not indexed (crawl N/A) | Same as above. Leave in-window. |
| **/coupons/amino-x** | **6/28** | **~7/28** | Discovered – never crawled | **NEW request 6/28.** Confirmed genuinely-not-indexed real content page, in sitemap, no referring page, never crawled. Slug is hyphenated `amino-x` (verified from sitemap-0.xml), NOT "aminox". GSC verbatim: "Indexing requested — URL was added to a priority crawl queue." |

> Reconciled out 6/28: maritide + retatrutide → ✅ Section A. Net pending now = 3 (2 support pages + amino-x).

---

## C. ⛔ EXCLUDED-BY-DESIGN — never request (the big bucket; confirmed live 6/19–6/28)

| URL pattern | Disposition | Reason |
|---|---|---|
| `/coupons/[vendor]/opengraph-image` (all) | 200 + `noindex` | Next.js OG card-image endpoint, not content. (~24 vendors.) |
| `/coupons/[vendor]/twitter-image` (all) | 200 + `noindex` | Twitter card-image endpoint. (~24 vendors.) |
| `/research/*` | **301** → `/peptides/[slug]` | Legacy path. |
| `/tirzepatideresearch` | **301** → `/peptides/tirzepatide` | Concatenated legacy URL. |
| bare `/tesamorelin` · bare `/retatrutide` | **301** → `/peptides/[slug]` | Bare legacy slugs. ⚠️ NOT the real `/peptides/...` pages. |
| `www.` variants (all) | 308/301 → apex | Host canonicalization. |
| `http://` variants | 308 → https apex | Scheme upgrade. |
| `/compare/retatrutide-vs-semaglutide` · `/compare/retatrutide-vs-tirzepatide` | redirect → consolidated 3-way | Consolidated. |
| `/coupons/particle-peptides` · `/coupons/fusion-peptide` | redirect | Retired vendors. |
| `/news/rfk-peptide-ban-2026-v2` | **308** → `/news/rfk-peptide-ban-2026` | Accidental duplicate (created only to retry an OG card); route deleted, redirect live, no internal links, not in sitemap. **Verified resolved 6/28.** |
| `www.profpeptide.com/retatrutide` | 404 (doubly-dead: www + bare-slug 301) | Nothing to fix. |

---

## C2. 🆕 NOT-INDEXED REASON REGISTRY (full GSC classification — built 6/28)

**The permanent answer to "why are 100+ pages not indexed?"** GSC snapshot 6/11 (~17-day lag at audit). **101 not-indexed URLs across GSC's own 8 reason-buckets.** Re-pull + re-classify periodically; the *pattern* dispositions are durable even as individual URLs cycle.

| # | GSC Reason Bucket | Count | Disposition | Notes |
|---|---|---|---|---|
| 1 | Redirect error | 13 | ⛔ Excluded-by-design | `/research` 301 + 11 `/supplements/[name]/` trailing-slash 301s + 1 compare redirect. **Slash variants are externally-guessed, not emitted by our code (verified 6/28) — harmless, self-resolving.** |
| 2 | Discovered – currently not indexed | 50 | ⛔ Excl (48) + ✅ stale (2) | ~48 are OG/twitter image endpoints; ~2 stale real-content records that live-inspect as indexed. |
| 3 | Crawled – currently not indexed | 21 | ✅ stale-but-indexed (~14) + ⛔ excl (~7) | ~14 real content pages live-inspect as indexed (stale); ~7 are www/308 + /research 301 + OG images. Spot-checks 3/3 confirmed indexed. |
| 4 | Page with redirect | 9 | ⛔ Excluded-by-design | /research/* 301s, http→https, www→apex 308s. Validate-fix in progress (started 6/19). |
| 5 | Duplicate without user-selected canonical | 2 | ⛔ excl (1 www) + ✅ verified-fine (1) | garcinia-cambogia flagged but **live-verified to HAVE its self-canonical** (stale flag); fusion-peptide is a www variant. |
| 6 | Excluded by 'noindex' tag | 1 | ✅ in-progress fix | `/contact` — noindex removed, validate-fix running (started 6/19). |
| 7 | Not found (404) | 1 | ⛔ Excluded-by-design | `www.profpeptide.com/retatrutide` — doubly-dead. |
| 8 | Duplicate, Google chose different canonical | 4 | ✅ stale (3) + ✅ resolved (1) | 3 stale-but-indexed; the genuine one (rfk-v2) **already redirected → v1, verified 6/28**. |

**Bottom line (6/28):** of 101 not-indexed URLs — **~84 excluded-by-design** (ignore permanently), **~16 stale-but-indexed** (clear automatically), **1 genuinely-new requested** (amino-x). **Net: the not-indexed pool is ~98% expected noise.**

### The 3 registry "action items" → ALL verified as already-resolved/non-issues 6/28 (stale GSC):
1. **rfk-v2 canonical conflict** → already fixed: v2 route deleted, 308 redirect → v1 live, no internal links, not in sitemap. **No change.** (Redirect uses `permanent: true`/308, matching the repo's retirement-redirect convention; SEO-equivalent to 301 — kept as-is, NOT swapped to literal 301.)
2. **garcinia-cambogia missing canonical** → already correct: built like peers via `buildPageMetadata({ path })`, live page HAS the self-canonical. **No change.**
3. **trailing-slash supplement redirects** → not from our code: `trailingSlash: false` (Next + next-sitemap), no slash internal links, sitemap emits non-slash only. Externally-guessed, 301s to canonical, self-resolves. **No change.**

> **Lesson banked:** the registry's "actionable" flags are GSC-lagged — always live-verify the repo/live URL before acting (Hard Rule #4). On 6/28, 3/3 flagged items were already handled.

---

## D. 🆕 NEW-PAGE INDEX WATCH (forward-tracking — the only ongoing indexing task)

**The system (agreed 6/28):** indexing is now solved + systematized; the *only* thing that needs ongoing attention is **new pages getting crawled/indexed.** The sitemap auto-discovers them, but a fresh page can sit "Discovered – not crawled" for weeks (as amino-x did), so a manual request nudges it.

**Protocol:**
- **When any CC task creates a genuinely-new indexable page** (new peptide profile, coupon/vendor page, blend/stack, supplement, bioregulator, news article), it gets **logged here with the date created.** Claude logs these automatically as they ship in-session; Mark can also flag any.
- **Each CINC GSC run starts by checking this list:** any listed page not-yet-indexed → request it (up to quota); once confirmed indexed → drop it off the list.
- This is a forward watchlist (create → request → confirm → drop), replacing backward "rediscover status each session" reconciliation.

**Current watch list:**
| New page | Created | Status | Notes |
|---|---|---|---|
| /coupons/amino-x | (pre-6/28) | ⏳ requested 6/28 | Drop to ✅ once confirmed indexed (~next run). |

*(Add new pages here as they ship.)*

---

## E. 📒 CINC RUN LOG

**6/28 — Run 8 (registry + amino-x + reconciliation):** Reconciled the 4 in-window pending → maritide + retatrutide ✅ indexed (2/4); 2 support pages still Discovered/not-crawled (in-window). Built the **complete 8-bucket Not-Indexed Reason Registry** (101 URLs classified; ~84 excl-by-design, ~16 stale, 1 actionable). Requested **/coupons/amino-x** (genuinely-new, never-crawled). Surfaced 3 registry "action items" → all 3 **live-verified by CC as already-resolved/non-issues** (rfk-v2 redirect live, garcinia canonical present, slash variants not from our code) — zero repo changes. Quota used: 1 (amino-x).

**6/28 — CTR-leak discovery (CINC) + rewrites (CC):** CINC pulled top-25-by-impressions (28-day): surfaced the full CTR-leak backlog (see PP_SEO v12 §). CC shipped the 2 highest-ROI rewrites (page-1 zero-click): /peptides/cardiogen + /coupons/royal-peptides → `e11531a`.

**6/19–6/20 — Runs 5–7:** see v2 (pending reconciliation 11/14, news-canonical fix `43df03f`, sitemap audit 49/49, validate-fix starts).

**6/17–6/18 — Runs 1–2:** see v2 (initial requests, image-route exclusions surfaced).

---

## F. 🔁 STANDING PROTOCOL — every CINC GSC run

1. **READ this ledger + PP_SEO narrative first.** Build skip-set: ✅ Indexed + in-window ⏳ Pending + ⛔ Excluded (incl. the registry's excluded patterns). Never request/re-check those.
2. **Check the New-Page Index Watch (Section D) first** — request any listed not-yet-indexed new page; confirm + drop indexed ones.
3. **Pull live buckets** — treat counts as days/weeks stale (~17-day lag observed).
4. **Cross-ref + live-inspect** anything unclassified (URL Inspection = current truth; bucket label is not).
5. **Request** only 🔵 genuine not-indexed content, up to quota (~10–12). Respect Section C absolutely. **Don't blind-request.**
6. **Reconcile a slice of ⏳ Pending** — many resolve to ✅ silently.
7. **🆕 Before acting on any registry "action item," live-verify the repo/live URL** (Hard Rule #4 — they're GSC-lagged).
8. **WRITE BACK:** append a Run Log entry + update statuses + update the watch list; deliver the new ledger version.
9. **CINC report format:** end every GSC prompt with *"Report each URL inspected + live status, exactly which were requested (verbatim), which buckets validated, and anything that moved not-indexed → indexed."*

---

## G. 🔖 BACKLOG / WATCH ITEMS
- **Validate-Fix runs (started 6/19):** "Page with redirect" (9 URLs) + "noindex" `/contact` (1) — both still validating on 6/28 (~4 wks in; 28+ day window). Re-check ~7/19.
- **JsonLd `url` hand-typed** in news articles — same fragility class as the canonical was; not currently a problem; optional slug-derived helper. Low priority.
- **/compare/retatrutide-vs-semaglutide** self-canonical-vs-consolidation decision — still pending (carried).
- **CTR-leak rewrite backlog** (the real ongoing work) — lives in PP_SEO v12 §. Tier 1 (cardiogen + royal) shipped 6/28; Tier 2/3 queued.

---

## 📅 Changelog
**v3 (June 28, 2026):** 6/28 reconciliation (maritide + retatrutide → indexed). Built the full 8-bucket Not-Indexed Reason Registry (C2) — 101 URLs classified, ~84 excl-by-design / ~16 stale / 1 requested. Requested amino-x (hyphenated slug). 3 registry "action items" all live-verified as already-resolved/non-issues (rfk-v2 / garcinia / trailing-slash) → zero changes; banked the verify-before-acting caveat as Hard Rule #4. Added the New-Page Index Watch system (Section D) — the one ongoing indexing task. Supersedes v2.
**v2 (June 19–20):** Pending batch reconciled (11/14); maritide + retatrutide diagnosed; 49/49 sitemap integrity; JsonLd backlog. Supersedes v1.
**v1 (June 19):** Created; seeded per-URL status; excluded-by-design registry; read-first/write-back protocol.

---
**Cross-ref:** **PP_SEO v12** (narrative/strategy — read alongside) · PP_X_POSTS · PP_MASTER · SCS_MP.
