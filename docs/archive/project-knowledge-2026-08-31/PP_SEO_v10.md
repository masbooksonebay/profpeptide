# PP SEO — v10

**Status:** ACTIVE (narrative / strategy / diagnosis)
**Version:** v10 (June 19–20, 2026) — confirms the **deploy stack is live** (the citation repair + Findings A/B were on origin/main + deployed all along; an earlier "old behavior" read was stale edge cache), logs the **news-canonical durability workstream** (`buildPageMetadata`), and banks the **stale-GSC learning** that drove this session's efficiency push. **Operational per-URL tracking now lives in the companion PP_SEO_LEDGER (v2) — review BOTH at the start of every SEO session.**
**Supersedes:** v9 (carries its citation-gate + permanent-exclude content forward).

---

## 🆕 Session work — June 19–20, 2026

### 1. ✅ The deploy stack WAS live — earlier "not live" reading was stale edge cache
A CINC GSC run initially reported the SEO fixes "not live" (/research/tb-500 returning 200, OG routes still indexable). CC's read-only diagnostic settled it: **all 8 commits (2 SEO + 6 citation) are on `origin/main`, Vercel's newest production deploy is Ready/green, and live origin checks return the NEW behavior** — 301s on legacy URLs, `X-Robots-Tag: noindex` on OG/Twitter image routes, and the **citation repair live** (bpc-157 / tb-500 pages show 0 old PMIDs / 1 new each). The "old behavior" CINC saw was **stale CDN/edge cache** (OG image routes carry a 1-year immutable cache-control; pre-deploy copies lingered on some edge nodes). **Conclusion: nothing was unpushed or unbuilt — the credibility fix and SEO fixes are live.**

> Learning: when a live test disagrees with the repo, verify *which layer* is stale — origin vs edge cache vs GSC's record — before concluding a deploy failed.

### 2. ⭐ STALE-GSC LEARNING — the driver of this session's efficiency work
Across multiple checks, **GSC's index picture lagged real state by days to weeks:**
- The 6/11 "Discovered/Crawled – not indexed" buckets showed ~11 pages un-indexed that were **already indexed** when live-inspected 6/19 (10 of 11).
- The full 6/17–6/18 **pending batch** reconciled to **11 of 14 already indexed.**
- **retatrutide** showed "not indexed / no referring sitemaps" from an **April 26 inspection record** — but it **is** in the live sitemap; the record was simply months old.

**Takeaway (now Rule #1 in the ledger):** a GSC URL-Inspection verdict reflects the **last crawl date**, not today. Old crawl date → stale verdict. **Live-inspect for truth; never re-request on the strength of a stale record.** This is *why* PP's lever remains **position/CTR, not indexing** — the not-indexed content pool, once you check live, is tiny.

### 3. ✅ News-canonical durability fix — `buildPageMetadata` (`43df03f`)
**Problem:** /news/amgen-maritide was excluded ("Duplicate without user-selected canonical") because Google crawled it 6/14 while its **hand-typed canonical literal was absent** (the article shipped 6/5 without the line), so Google assigned an external canonical (marcustheatres.com).
**Root cause (CC-verified, correcting an earlier CINC inference):** news articles are **per-folder static pages** each with a hand-written `export const metadata`; the canonical is a hardcoded string that can simply be **forgotten** on a new article. Not a dynamic-route/data-field issue.
**Fix:** routed **10 of 11** news articles through the existing `buildPageMetadata({ path, ... })` helper (which *requires* `path` and always emits `alternates.canonical`), making omission structurally impossible. Values preserved exactly (OG titles/dims/descriptions verified in built output). **rfk-peptide-ban** left hand-written (its `twitter.description` differs from `openGraph.description`, which the helper can't express). Recurrence guidance added to `src/data/news.ts`. Commit `43df03f`, deployed.
**Maritide is now handled three ways:** canonical present live + re-index requested + structural guarantee. Expect it to index on re-crawl.
**Backlog surfaced:** each article's `<JsonLd>` `url` is also hand-typed (same fragility class) — logged in the ledger, low priority.

### 4. ✅ Sitemap integrity verified
Native Next.js App Router `sitemap.ts` (NOT next-sitemap), no exclude patterns, **167 URLs**. **/peptides/ check: 49 in the data source = 49 in the sitemap, zero gaps.** retatrutide present. No discovery problem.

### 5. 🗂️ Operational tracking split out → PP_SEO_LEDGER
To stop re-running identical GSC checks, per-URL index status + the request LOG + the CINC run log now live in the companion **PP_SEO_LEDGER** (operational), leaving this doc for narrative/strategy. **Standing rule: review BOTH docs at the start of every SEO session** (Mark's stated protocol). The ledger encodes a read-first/write-back run protocol.

---

## Carried forward from v9 — UNCHANGED

- **🔒 Mandatory pre-publish NCBI citation-verification gate** (v9 §3): every AI-written/edited profile or news post that cites literature must pass NCBI title+author verification at write time; never trust a remembered/model-generated ID; fabricated/uncovered cites follow the repair taxonomy (re-source → drop+repoint → flag). The two-pass resolve-then-reconfirm harness is the standard. **Applies to the blend/stack buildout (next big content workstream).**
- **Site-wide citation repair COMPLETE** (47 pages, 5 batches, NCBI-verified) — and confirmed **live** this session.
- **Core diagnosis unchanged: position/CTR, not indexing.** Reinforced hard by the stale-GSC findings above.
- **Findings A & B shipped + live** (`2afa710` noindex, `6c4c563` 301s).
- Permanent-exclude registry → now maintained in the **ledger, Section C**.
- `/compare/retatrutide-vs-semaglutide` self-canonical-vs-consolidation decision still pending.
- Weekend GSC query-mining routine (Bucket A page-1-zero-click rewrites, Bucket B buried/depth, affiliate-acquisition list) — the *position/CTR* lever, still the real growth work.

---

## 📌 Open items
- **News JsonLd `url`** hand-typed → optional helper to derive from slug (ledger backlog).
- **Validate-Fix** runs (redirect bucket + noindex bucket) started 6/19 — recheck in a few days.
- **maritide / retatrutide** — let the re-crawls land; re-verify live next run (both expected ✅).
- **Apply the citation gate** to every future AI-written profile/news/supplement/blend prompt.
- Resume the position/CTR query-mining routine (the actual growth lever).

---

## 📅 Changelog
**v10 (June 19–20, 2026):** Confirmed the deploy stack is live (earlier "not live" = stale edge cache; citation repair + Findings A/B all serving). Logged the news-canonical durability workstream (`buildPageMetadata`, `43df03f`; maritide root-caused + fixed 3 ways; JsonLd backlog). Verified sitemap integrity (49/49 /peptides/, native sitemap.ts). Banked the stale-GSC learning (URL-Inspection = last-crawl-date, not current). Split operational per-URL tracking into the companion PP_SEO_LEDGER (v2); set the review-both-docs protocol. Supersedes v9.
**v9 (June 19, 2026):** Site-wide citation-integrity crisis + 5-batch NCBI-verified repair; mandatory citation gate; Findings A & B closed; thin-content task retired.

---
**Cross-ref:** **PP_SEO_LEDGER v2** (operational per-URL tracker — read alongside this) · PP_BIOREGULATORS v1 · PP_MASTER v15 (+ Addendum v3) · PP_X_POSTS v34 · PP_VENDOR_PAGES v2 · SCS_MP.
