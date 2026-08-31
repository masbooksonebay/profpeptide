# PP SEO — v8

**Status:** ACTIVE
**Version:** v8 (June 18, 2026) — logs the **6/18 CINC indexing run** (daily quota hit at request #12) and its two findings: **OG/Twitter card-image routes flooding the not-indexed buckets** (suppress, never request) and a **cluster of malformed legacy URLs** (`www.` + `/research/` + concatenated paths). Refines the Request-Indexing routine to exclude image-generation + legacy routes, expands the permanent-exclude list, and adds two CC cleanup tasks.
**Supersedes:** v7 (carries its routine + Log forward, amended).

---

## 🆕 Session work — June 18, 2026

### 1. GSC indexing run — quota HIT at #12, but mostly on noise
CINC pulled both green buckets — **"Crawled – currently not indexed" (21 URLs)** + **"Discovered – currently not indexed" (50 URLs)** — deduped against the Log, and **requested 11 URLs before hitting the daily quota** on the 12th ("…exceeded your daily quota. Please try submitting this again tomorrow").

**The catch: ~half the quota went to routes that should never be indexed.** The Discovered bucket is dominated (~40 of 50) by `/coupons/[vendor]/opengraph-image` and `/twitter-image` routes — dynamic social-card **image** endpoints, not content pages. Google correctly leaves them unindexed; requesting them is wasted quota. Of the 11 requests, only ~4 were genuine content pages.

**Requested 6/18 (logged in §5):**
- ✅ Genuine content pages: `/peptides/mk-677`, `/peptides/follistatin`, `/supplements/fish-oil`, `/supplements/glutamine`
- ◻️ App-support pages (low value, harmless): `/hybrid-rockstar/support`, `/strength-cycle/support`
- ⚠️ Legacy/dupe URL (shouldn't have been requested): `/research/tb-500`
- ❌ Wasted on image routes: `/coupons/almighty-peptides/{opengraph,twitter}-image`, `/coupons/amino-club/{opengraph,twitter}-image`

CINC correctly skipped the skip-list and caught several mislabeled entries (`/news/amgen-maritide-…` is actually "Duplicate," not Discovered; several supplements + news already indexed).

### 2. ⛔ FINDING A — OG/Twitter card-image routes are polluting the buckets → CC task
~40 `/coupons/[vendor]/opengraph-image` + `/twitter-image` routes sit in "Discovered – not indexed" (a couple also in Crawled). These are metadata image endpoints; they don't belong in the index, the XML sitemap, or our request queue. The v5 sitemap-pollution fix was meant to null image/icon routes — these slipped through (or are discovered via `og:image` / `twitter:image` meta tags).

**CC task:**
1. Check whether `*/opengraph-image` + `*/twitter-image` routes appear in `sitemap-0.xml`. If so, extend the next-sitemap `transform()` / `exclude` globs to drop them (same mechanism as the v5 image/icon nulling).
2. Add `X-Robots-Tag: noindex` (or route-level metadata) to those image routes so Google stops surfacing them as "discovered, not indexed."

Goal: clear the bucket noise so the Pages report shows only real content gaps, and quota stops leaking to images. These routes are now **permanent-exclude** (§5) — never request.

### 3. ⛔ FINDING B — malformed legacy URLs → CC task (verify-first)
The buckets surfaced wrong-path URLs that shouldn't exist as canonical pages:
- `www.profpeptide.com/research/follistatin`, `profpeptide.com/research/tb-500` — a `/research/` path (canonical is `/peptides/[slug]`)
- `www.profpeptide.com/tirzepatideresearch` (concatenated), `www.profpeptide.com/tesamorelin` (bare slug)
- several `www.` variants (should 308→apex)

**CC task:** for each, check what it actually returns (200 / 301 / 404) and whether it's in the sitemap. If they're **live** legacy URLs → 301 to the canonical `/peptides/[slug]` and fix any internal links pointing at them; if they **404** → confirm they're out of the sitemap. Do NOT request-index any of them until resolved. `/research/tb-500` was requested this run by mistake — logged as do-not-repeat.

### 4. ⭐ ROUTINE REFINEMENT (amends v7 §2)
Same bucket-driven source + dedup Log, with two exclusions applied **before** requesting:
- **Never request image/asset routes** — anything ending `/opengraph-image`, `/twitter-image`, or any image/icon/asset endpoint. (Google ignoring them is correct, not a gap.)
- **Never request off-pattern/legacy URLs** — `www.` variants, `/research/*`, bare or concatenated slugs. These are hygiene problems for CC, not indexing requests.
- After those exclusions, request only real content pages under `/peptides/`, `/supplements/`, `/compare/`, `/news/`, `/coupons/[vendor]` (the page, **not** its image routes), `/bioregulators`.

**Reality check:** once image-route + legacy noise is stripped, the genuine not-indexed **content** pool is small (~4–6 pages this run). That matches PP's core diagnosis — **position/CTR, not indexing** — so don't manufacture quota usage by requesting noise.

### 5. 📒 Request-Indexing LOG — updated
**Pending (requested 6/18 — do NOT re-request before ~July 18):**

| URL | Requested | Bucket at request | Note |
|---|---|---|---|
| /peptides/mk-677 | 6/18 | Crawled – not indexed | content page |
| /peptides/follistatin | 6/18 | Crawled – not indexed | content page |
| /supplements/fish-oil | 6/18 | Crawled – not indexed | content page |
| /supplements/glutamine | 6/18 | Crawled – not indexed | content page |
| /hybrid-rockstar/support | 6/18 | Discovered – not indexed | app support (low value) |
| /strength-cycle/support | 6/18 | Discovered – not indexed | app support (low value) |
| /research/tb-500 | 6/18 | Crawled – not indexed | ⚠️ legacy URL — do not repeat; CC to resolve (Finding B) |
| /coupons/almighty-peptides/opengraph-image | 6/18 | URL unknown to Google | ❌ image route — wasted; now permanent-exclude |
| /coupons/almighty-peptides/twitter-image | 6/18 | URL unknown to Google | ❌ image route |
| /coupons/amino-club/opengraph-image | 6/18 | URL unknown to Google | ❌ image route |
| /coupons/amino-club/twitter-image | 6/18 | URL unknown to Google | ❌ image route |

*(Plus the 6/17 pending eleven — still off-limits until ~July 17; see v7 §3. The 7 thin profiles among them still await the CC depth pass — that's their real fix, not a re-request.)*

**Permanent-exclude (never request) — EXPANDED:**
- **All `*/opengraph-image` and `*/twitter-image` routes** (every vendor) — image endpoints (Finding A).
- **Legacy / off-pattern URLs** — `/research/*`, `/tirzepatideresearch`, bare `/tesamorelin`, `www.` variants — pending CC cleanup (Finding B).
- `/compare/retatrutide-vs-semaglutide` (redirect → 3-way) · `/coupons/particle-peptides` · `/coupons/fusion-peptide` (retired → redirect). *(from v7)*

### 6. ❌ CORRECTION to CINC's "notes for tomorrow"
CINC's run notes suggested continuing tomorrow with "all remaining OG/Twitter image routes." **Do NOT** — those are now permanent-exclude. After the Finding-A + Finding-B cleanup ships, re-pull the buckets; they should be far shorter and show real content gaps only.

---

## Carried forward from v7 (June 17) — UNCHANGED
- Bucket-driven Request-Indexing routine (v7 §2) — amended by §4 above (image + legacy exclusions).
- 6/17 run + the 11-URL pending Log + the **thin-content peptide cluster + CC depth task** (retatrutide, sermorelin, igf-1-lr3, tb-500, kpv, selank, glow — still pending; re-inspect after depth ships + after ~July 17).
- garcinia-cambogia resolved (indexed 6/17). Both "Duplicate…" validation buckets still running — recheck after the 6/11 data snapshot refreshes; nothing to click.
- `/compare/retatrutide-vs-semaglutide` self-canonical-vs-consolidation decision still pending.
- Vendor coupon cross-link rollout complete (21/21); ~525 internal `/peptides/` links. **Core problem = position/CTR, not indexing.**

*(v6/v5 items — sitemap pollution fix `8fa1e82`, 3-phase cleanups, www→apex, bioregulator cluster — carried by reference; see v7.)*

---

**Cross-ref:** PP_BIOREGULATORS v1 · PP_MASTER v15 (+ Addendum v3) · PP_X_POSTS v34 · PP_VENDOR_PAGES v2 · SCS_MP (+ Addendum: Repo Layout v1) · WL_MASTER v2.x.

---

## 📅 Changelog
**v8 (June 18, 2026):** Logged the 6/18 CINC run (quota hit at #12). Surfaced two issues: **OG/Twitter card-image routes flooding the Discovered bucket** (→ CC: de-sitemap + noindex; permanent-exclude) and a **cluster of malformed legacy URLs** (`www.` / `/research/` / concatenated → CC: resolve + 301/exclude). Refined the routine to exclude image + legacy routes before requesting. Expanded the permanent-exclude list; logged the 11 6/18 requests. Corrected CINC's "continue the image routes tomorrow" note. Supersedes v7.
**v7 (June 17, 2026):** Logged the 6/17 CINC run (11 requests, quota not hit, sitemap 167 confirmed, garcinia resolved-on-recrawl). Added the standing bucket-driven Request-Indexing routine + the Request-Indexing Log. Logged the thin-content peptide cluster + CC depth task. Superseded both v6 files; corrected (stale-crawl) garcinia framing.
