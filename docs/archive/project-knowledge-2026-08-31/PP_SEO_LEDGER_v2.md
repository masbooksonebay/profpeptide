# PP SEO — INDEX-STATUS LEDGER — v2

**Status:** ACTIVE OPERATIONAL TRACKER — the single per-URL index-status record + CINC-run log.
**Version:** v2 (June 19–20, 2026) — folds in the **full pending-batch reconciliation** (11 of 14 already indexed), the **retatrutide non-issue** (in sitemap; the alarming GSC reading was a stale April crawl record), the **49/49 sitemap-integrity check**, the **news-canonical durability fix** (`buildPageMetadata`), and the **JsonLd backlog item**. Supersedes v1.
**Pairs with:** PP_SEO v10 (narrative/strategy). **Review BOTH at the start of every SEO session.**

---

## ⭐ WHY THIS EXISTS (the efficiency fix)

We kept re-running the same GSC checks because nothing persisted per-page status. **Proven repeatedly 6/19–6/20:** GSC's URL-Inspection/bucket data lags days to weeks, so pages show "not indexed" long after they're actually indexed. This ledger = our accumulated, dated, verified per-URL status. Every CINC run READS it first (skip Indexed/Pending/Excluded) and WRITES findings back.

**Three hard rules this ledger encodes:**
1. **GSC bucket reports + URL-Inspection records lag — do NOT trust them as current state.** A URL Inspection record reflects the **last crawl date**, not today. When that crawl date is old (e.g. retatrutide's was Apr 26), its sitemap/index verdict is stale. Live-inspect for truth; record date + method.
2. **Every CINC GSC run READS this ledger first** and **WRITES findings back** (Section E + status moves).
3. **Don't blind-request to "use up" quota.** The genuine not-indexed *content* pool is small. Spend quota on reconciling Pending (which surfaces real progress) or genuinely-new pages — never on noise or in-window re-requests.

> Sitemap baseline (verified 6/20): native Next.js App Router `sitemap.ts` (NOT next-sitemap), **167 URLs**, no exclude patterns. **/peptides/ integrity: 49 in data source = 49 in sitemap (1:1, zero gaps).**

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

| URL | Verified | Notes |
|---|---|---|
| /news/eco2026-oral-glp1-recap-may-2026 | 6/19 | |
| /news/fda-503b-glp1-bulk-compounding-2026 | 6/19 | |
| /peptides/tirzepatide | 6/19 | distinct from excluded /tirzepatideresearch |
| /peptides/melanotan-i | 6/19 | |
| /peptides/vip | 6/19 | |
| /supplements/spermidine | 6/19 | |
| /supplements/l-citrulline-malate | 6/19 | |
| /supplements/lions-mane | 6/19 | |
| /supplements/maca-root | 6/19 | |
| /coupons/synthesis-peptides | 6/19 | |
| /peptides/mk-677 | 6/19 | was pending (6/18) → confirmed indexed |
| /peptides/follistatin | 6/19 | was pending (6/18) → indexed |
| /supplements/fish-oil | 6/19 | was pending (6/18) → indexed |
| /supplements/glutamine | 6/19 | was pending (6/18) → indexed |
| /peptides/sermorelin | 6/19 | was pending (6/17) → indexed |
| /peptides/igf-1-lr3 | 6/19 | was pending (6/17) → indexed |
| /peptides/tb-500 | 6/19 | was pending (6/17) → indexed |
| /peptides/kpv | 6/19 | was pending (6/17) → indexed |
| /peptides/selank | 6/19 | was pending (6/17) → indexed |
| /peptides/glow | 6/19 | was pending (6/17) → indexed |
| /peptides/tesamorelin | 6/19 | canonical page — indexed (NOT the excluded bare /tesamorelin) |
| /peptides/garcinia-cambogia | 6/17 | indexed-on-recrawl |

**21 of the 22 prior pending/candidate URLs are now confirmed indexed.** The "not indexed" buckets were badly stale.

---

## B. ⏳ REQUESTED — PENDING (do not re-request before window clears)

| URL | Requested | Window ~ | Diagnosis | Notes |
|---|---|---|---|---|
| /news/amgen-maritide-glp1-gip-explainer-2026 | 6/19 | ~7/19 | "Duplicate w/o user-selected canonical" | Root cause: canonical was hand-typed and **absent at the 6/14 crawl** → Google assigned external canonical (marcustheatres.com). **Now resolved three ways:** canonical present live + re-index requested + **structurally guaranteed via `buildPageMetadata` (commit `43df03f`)**. Expect it to index on re-crawl. |
| /hybrid-rockstar/support | 6/19 | ~7/19 | Discovered – not indexed (crawl N/A) | Google hadn't crawled yet; request pushes it into the queue. |
| /strength-cycle/support | 6/19 | ~7/19 | Discovered – not indexed (crawl N/A) | same |
| /peptides/retatrutide | 6/19 | ~7/19 | Crawled – not indexed (last crawl **Apr 26**) | ⚠️ **Likely already indexed / about to be — see Section G.** The "not in sitemap / not indexed" reading came from a stale Apr-26 inspection record; retatrutide **IS** in the live sitemap. Requested again this session, but **stop re-requesting** — re-verify live instead. |

> 💡 The 6/17 + 6/18 pending batch is now **fully reconciled** (Section A). Only the 3 genuine stragglers above + maritide remain pending.

---

## C. ⛔ EXCLUDED-BY-DESIGN — never request (confirmed live 6/19–6/20)

| URL pattern | Disposition | Reason |
|---|---|---|
| `/coupons/[vendor]/opengraph-image` (all) | 200 + `X-Robots-Tag: noindex` | OG card-image endpoint, not content. *(Finding A, `2afa710`.)* |
| `/coupons/[vendor]/twitter-image` (all) | 200 + `noindex` | Twitter card-image endpoint. |
| `/research/*` | **301** → `/peptides/[slug]` | Legacy path. *(Finding B, `6c4c563`.)* |
| `/tirzepatideresearch` | **301** → `/peptides/tirzepatide` | Concatenated legacy URL. |
| bare `/tesamorelin` | **301** → `/peptides/tesamorelin` | Bare legacy slug. ⚠️ NOT `/peptides/tesamorelin` (real indexed page). |
| `www.` variants (all) | 308/301 → apex | Host canonicalization. |
| `/compare/retatrutide-vs-semaglutide` | redirect → 3-way | Consolidated; decision still pending in PP_SEO. |
| `/coupons/particle-peptides` · `/coupons/fusion-peptide` | redirect | Retired vendors. |

---

## D. 🔵 / ❓ TO CHECK OR REQUEST
- **🔵 none currently open** — the known not-indexed content pool is empty after this session's reconciliation (everything resolved to ✅ or ⏳).
- **❓ UNVERIFIED pool:** sitemap remainder not individually inspected. The full /peptides/ library (49) is in the sitemap and most appear indexed (the 6/17–6/19 checks confirmed a large sample). Classify others as they surface. **Don't guess.**

---

## E. 📒 CINC RUN LOG

**6/19–6/20 — Run 6 (sitemap audit, read-only via CC):** retatrutide **confirmed in live sitemap** (`lastmod 6/20`). Sitemap is native Next.js `sitemap.ts`, no excludes. **/peptides/ integrity 49/49, zero gaps.** The "No referring sitemaps" GSC flag = stale Apr-26 inspection record, not a bug. No fix needed.

**6/19 — Run 5 (pending reconciliation):** live-inspected the 14-URL 6/17–6/18 pending batch → **11 already indexed**, 3 stragglers requested (/hybrid-rockstar/support, /strength-cycle/support, /peptides/retatrutide). Quota used: 3.

**6/19 — Run 4 (news-canonical fix, CC):** root-caused maritide; converted 10/11 news articles to `buildPageMetadata` (`43df03f`); rfk-peptide-ban left hand-written (distinct twitter description); added recurrence guidance to `src/data/news.ts`.

**6/19 — Run 3 (validate + request):** deploy confirmed live first (all 8 SEO+citation commits on origin/main, Vercel Ready; CINC's earlier "old behavior" was stale edge cache). Started Validate Fix on 2 buckets. 11 candidates inspected → 10 already indexed, 1 requested (maritide). Quota: 1.

**6/18 — Run 2:** requested 11, hit quota at #12 (half leaked to image routes, now excluded). Surfaced Findings A + B.

**6/17 — Run 1:** requested 11; sitemap 167 confirmed; garcinia indexed-on-recrawl.

---

## F. 🔁 STANDING PROTOCOL — every CINC GSC run

1. **READ this ledger + PP_SEO first.** Build skip-set: ✅ Indexed + in-window ⏳ Pending + ⛔ Excluded. Never request/re-check those.
2. **Pull live buckets** — treat counts as days/weeks stale.
3. **Cross-ref + live-inspect** anything unclassified (URL Inspection = current truth; bucket label is not).
4. **Request** only 🔵 genuine not-indexed content, up to quota (~10–12). Respect Section C absolutely. **Don't blind-request to hit the cap.**
5. **Reconcile a slice of ⏳ Pending each run** — many resolve to ✅ silently (11/14 did on 6/19). Move them to Section A.
6. **WRITE BACK:** append a Run Log entry + update statuses; deliver the new ledger version.
7. **CINC report format:** end every GSC prompt with *"Report each URL inspected + live status, exactly which were requested (verbatim), which buckets validated, and anything that moved not-indexed → indexed."*

---

## G. 🔖 BACKLOG / WATCH ITEMS
- **JsonLd `url` is hand-typed** in every news article (`<JsonLd>` component) — same fragility class the canonical just had; not causing a problem (all correct today), but a future article could omit/mistype it. **Fix option:** a JsonLd helper deriving `url` from slug. Low priority; logged so it's not lost.
- **retatrutide:** stop re-requesting. It's in the sitemap; the bad reading was a stale Apr-26 GSC record. Re-verify live next run; expect ✅.
- **/compare/retatrutide-vs-semaglutide:** self-canonical-vs-consolidation decision still pending (carried from PP_SEO).
- **Validate-Fix runs** (Page-with-redirect 9 URLs + noindex 1 URL) started 6/19 — check results in a few days.
- **6/17 batch gap:** the batch was "eleven" but only the named set is recovered; the rest resolved to ✅ via reconciliation, so the gap is now moot.

---

## 📅 Changelog
**v2 (June 19–20, 2026):** Pending batch fully reconciled (11/14 already indexed → moved to ✅; 3 stragglers requested). Maritide resolution recorded (canonical present + requested + `buildPageMetadata` guarantee `43df03f`). Retatrutide non-issue documented (in sitemap; stale Apr-26 GSC record). Banked 49/49 sitemap-integrity check + native-`sitemap.ts` fact. Added JsonLd backlog item. Hardened Rule #1 (URL-Inspection record = last-crawl-date, not current). Supersedes v1.
**v1 (June 19, 2026):** Created. Seeded per-URL status from the 6/17–6/19 runs; excluded-by-design registry; 3-run log; read-first/write-back protocol.

---
**Cross-ref:** PP_SEO v10 (narrative) · PP_X_POSTS · PP_MASTER (+ addenda) · SCS_MP.
