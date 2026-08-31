# PP SEO — v7

**Status:** ACTIVE
**Version:** v7 (June 17, 2026) — adds the **6/17 CINC indexing run results**, a **standing bucket-driven Request-Indexing routine + dedup Log** (so CINC never re-requests already-requested or already-indexed pages), and the **thin-content peptide cluster finding + CC depth task**. Carries v6 forward (correct garcinia framing).
**Supersedes:** v6 — **both** `PP_SEO_v6.md` AND `PP_SEO_v6__1_.md`. *(Those two conflicted on garcinia: the older v6.md wrongly called it a code defect; the newer v6__1_ corrected it to stale-crawl. v7 keeps the corrected framing. Delete both v6 files.)*

---

## 🆕 Session work — June 17, 2026

### 1. GSC indexing run — 11 pages requested, quota NOT hit
Two CINC runs today. **Sitemap confirmed at 167** (the earlier "Discovered: 165" was GSC UI lag, now caught up; count history: 167 → 165 after retiring particle + fusion → **167** after adding 2 June news posts).

**11 Request-Indexing submissions** (3 + 8), all successful, **daily quota never reached** (list exhausted first). See the **Request-Indexing Log** below for the dated list.

- **garcinia-cambogia now shows "URL is on Google" (indexed)** — the stale `747live.bet` canonical-jack from §3 (v6) appears cleared; it was correctly **skipped** (not re-requested). Confirm canonical = self on the next deep inspection.
- **Both "Duplicate…" validation buckets are running** ("Duplicate without user-selected canonical" — 2 pages, started 6/16; "Duplicate, Google chose different canonical" — 4 pages, started 6/15). Neither has passed/failed; GSC takes up to 28 days. Data still on the 6/11 snapshot — recheck after it refreshes. **Nothing to click; wait.**
- `/compare/retatrutide-vs-semaglutide` = **Page with redirect** (user-declared canonical → the 3-way `/compare/semaglutide-vs-tirzepatide-vs-retatrutide`, which Google honors). Its sibling `/compare/retatrutide-vs-tirzepatide` IS indexed independently — that asymmetry suggests the reta-vs-sema canonical may be an oversight, not intent. **Decision pending** (self-canonical to rank independently vs. keep the consolidation) — gated on standalone content + GSC demand for "retatrutide vs semaglutide." CC `/compare/` canonical-consistency audit offered.

### 2. ⭐ STANDING RULE — how to feed CINC pages to request (bucket-driven + dedup)
**The point: never request a page that's already indexed or already requested.** The routine guarantees both.

**Source candidates ONLY from GSC → Indexing → Pages → "Why pages aren't indexed":**
- ✅ **REQUEST these two buckets** (should be indexed but aren't): **"Crawled – currently not indexed"** + **"Discovered – currently not indexed."**
- ⛔ **NEVER request these** (wrong tool — they need *Validate Fix* or a canonical/code fix, and requesting does nothing): "Page with redirect," "Alternate page with proper canonical tag," "Excluded by 'noindex' tag," "Duplicate without user-selected canonical," "Duplicate, Google chose different canonical," "Not found (404)," "Soft 404," "Blocked by robots.txt."

**Why this prevents both wastes:**
- *Already-indexed* → auto-excluded. Indexed pages are never in the not-indexed buckets, so CINC never sees them. (No more inspecting 40 pages just to skip them.)
- *Already-requested* → **cross-check every candidate against the Request-Indexing Log below; SKIP any requested in the last ~30 days** (still resolving — re-requesting only burns a slot).

**Mechanics:**
- GSC has **no bulk request** — each URL is one-at-a-time via URL Inspection → Request Indexing.
- Daily quota ≈ **10–12 URLs**, **rolling ~24h from last use** (not a midnight reset). Stop when the "daily quota" message appears.
- For the ⛔ buckets, use **Validate Fix** (not quota-limited) once the live page is correct.

**After every run:** CINC reports the URLs it requested → **append them to the Log with the date.** That's the one thing maintained by hand (GSC can't tell you what you've already requested); indexed-status stays live from the Pages report.

### 3. 📒 Request-Indexing LOG (dedup ledger — check before every run)
**Pending (requested, awaiting index) — do NOT re-request before ~July 17:**

| URL | Requested | Bucket at request | Note |
|---|---|---|---|
| /peptides/retatrutide | 6/17 | Crawled – not indexed | thin-content signature; **CC depth pass assigned** |
| /peptides/sermorelin | 6/17 | Crawled – not indexed | thin; CC depth |
| /peptides/igf-1-lr3 | 6/17 | Crawled – not indexed | thin; CC depth |
| /peptides/tb-500 | 6/17 | Crawled – not indexed | thin; CC depth |
| /peptides/kpv | 6/17 | Crawled – not indexed | thin; CC depth |
| /peptides/selank | 6/17 | Crawled – not indexed | thin; CC depth |
| /peptides/glow | 6/17 | Crawled – not indexed | blend; linked from wolverine/ghk-cu → depth, not links; CC depth |
| /peptides/vip | 6/17 | Discovered – never crawled | just needs crawl priority |
| /coupons/synthesis-peptides | 6/17 | Discovered – never crawled | just needs crawl priority |
| /supplements/tongkat-ali | 6/17 | Duplicate – diff canonical | requested to clear |
| /news/semaglutide-biological-aging-rct-june-2026 | 6/17 | Discovered – not indexed | new news post |

**Confirmed INDEXED — 6/17 snapshot** (skip; "URL is on Google" today — verify live for anything older): semaglutide · tirzepatide · cagrilintide · cjc-1295 · ipamorelin · tesamorelin · bpc-157 · ss-31 · aod-9604 · mots-c · 5-amino-1mq · semax · dsip · epitalon · pinealon · ghk-cu · nad-plus · melanotan-ii · pt-141 · thymosin-alpha-1 · wolverine-stack · gh-stack · klow · semax-selank · tesamorelin-ipamorelin · garcinia-cambogia · /bioregulators · /compare/retatrutide-vs-tirzepatide · /compare/semaglutide-vs-tirzepatide-vs-retatrutide · /news/endo-2026-glp1-recap-june-2026 · all 18 live /coupons/[vendor] pages (peptide-partners, oasis-labs, peptides-gg, royal-peptides, spartan-peptides, synthesis-peptides*, purerawz, ascension-peptides, vital-core-research, amino-club, almighty-peptides, behemoth-labz, biocollex, ez-peptides, glacier-aminos, ignite-peptides, integrative-peptides, limitless-biotech, midwest-peptide). *(synthesis = Discovered, in Pending above, not yet indexed.)*

**Excluded / intentional** (never request): /compare/retatrutide-vs-semaglutide (redirect → 3-way) · /coupons/particle-peptides · /coupons/fusion-peptide (retired → redirect to /coupons).

### 4. Thin-content peptide cluster → CC depth task (the real fix)
Seven profiles are crawled/discovered-but-not-indexed: **retatrutide, sermorelin, igf-1-lr3, tb-500, kpv, selank** (Crawled – not indexed, same thin signature) + **glow** (blend; already internally linked, so depth not links). This is Google making a **content-quality call** — re-requesting alone won't stick. **CC task assigned:** audit each vs. an indexed exemplar (singles → tirzepatide/semaglutide; glow → wolverine-stack), deepen the genuinely-thin ones, add first-mention internal links from related indexed pages, flag any whose real problem is duplication/canonical/sitemap. (vip + synthesis-peptides were *Discovered, never crawled* — those just needed the request.)
- **Next GSC session = tomorrow** (fresh quota): pull the two green buckets, dedup against the Log, request the remainder. After the CC depth pass redeploys, re-inspect the 7 → they should index on recrawl.

---

## Carried forward from v6 (June 16) — status updated where 6/17 resolved it

### Vendor coupon-page cross-link rollout — COMPLETE (21/21)
All 21 `/coupons/[vendor]` pages carry the research-area cross-link block (~525 internal `/peptides/` links). Internal linking is a ranking lever — PP's core problem is position/CTR, not indexing. Full tally in **PP_VENDOR_PAGES v2**.

### Two vendor pages retired (particle + fusion)
Each `/coupons/[slug]` now redirects to `/coupons` via **in-component `redirect('/coupons')`** (commit `17068d4`). ⚠️ **Mechanism lesson:** the `next.config.js` `redirects()` rule **did NOT fire in production** — for retiring a route whose `page.tsx` still exists, prefer the in-component redirect over a config rule.

### garcinia-cambogia canonical — STALE GSC DATA, not a code defect → **RESOLVED 6/17**
The live page already emits a correct self-canonical (`buildPageMetadata()` in `src/lib/seo.ts`; site-wide 100% canonical coverage). GSC's "Google chose `www.747live.bet`" was stale crawl data from spam backlinks. **As of 6/17 garcinia shows "URL is on Google"** — resolved on recrawl, exactly as the stale-crawl framing predicted. *(2nd page in the "Duplicate without user-selected canonical" bucket still to be named — re-inspect GSC, same treatment.)*

### Hardcoded vendor counts — FIXED (`84d3a9f`)
`vendors.ts` has a `retired?` flag (fusion + particle) and exports `activeVendorCount` (= **19**). Hub meta + the "See all … verified vendors" CTA on 26 peptide pages now derive from it → render 19. ⚠️ **Sanity-check pending:** confirm that CTA links to `/coupons` (19) and not `/best-peptide-vendors` (the 6-vendor vetted list).

### ✅ Prior "PENDING CINC recrawl run" — DONE 6/17
The v6 pending list (retatrutide → tirzepatide → 2 compare → garcinia → tongkat-ali / thymosin-alpha-1 / ignite) was executed: requests where not-indexed, skips where indexed (see Log §3). Validate-Fix triggered on the Duplicate buckets (validations now running).

---

## Carried forward from v5 (June 14) — UNCHANGED
- **Sitemap pollution fix** — next-sitemap `transform()` nulls image/icon/contact routes + `exclude` globs drop redirecting legacy URLs (`8fa1e82`). Never hand-commit `sitemap-0.xml` — next-sitemap regenerates on deploy.
- **3-phase CC cleanups:** Phase 1 GLP-1 compare pages un-redirected (`aa474f1`; ⚠️ 3 overlapping GLP-1 compare pages → monitor cannibalization). Phase 2 trailing-slash single-301 via `skipTrailingSlashRedirect` (`61047f6`; ⚠️ replaced Next's normalization — first suspect if trailing-slash routing misbehaves). Phase 3 canonicals — no defect (re-confirmed by the 100%-coverage audit).
- **www-vs-apex** — www 308→apex; stale `www/sitemap.xml` removed from GSC.
- **Affiliate vendor outreach** — [see v4/v5] Peptides.gg (`PROF15`/15%), Amino Club (`PROFPEPTIDE`/20%); Tier-1 applied June 4.
- **Bioregulator content cluster** — [see PP_BIOREGULATORS v1] hub-and-spoke locked; Pinealon shipped.

---

**Cross-ref:** PP_BIOREGULATORS v1 · PP_MASTER v15 (+ Addendum v3) · PP_X_POSTS v34 · PP_VENDOR_PAGES v2 · WL_MASTER v2.x · SCS_MP v6.x.

---

## 📅 Changelog
**v7 (June 17, 2026):** Logged the 6/17 CINC run (11 requests, quota not hit, sitemap 167 confirmed, garcinia resolved-on-recrawl). Added the **standing bucket-driven Request-Indexing routine** (request only Crawled/Discovered-not-indexed; skip the rest) + the **Request-Indexing Log** (dedup ledger — prevents re-requesting already-requested/indexed pages). Logged the thin-content peptide cluster + CC depth task. Supersedes BOTH v6 files; carries the corrected (stale-crawl) garcinia framing.
**v6 (June 16, 2026):** Cross-link rollout complete (21/21); particle + fusion retired via in-component redirect (`17068d4`); hardcoded vendor counts fixed (`84d3a9f` = 19); garcinia = stale GSC crawl, not a code defect.
**v5 (June 14, 2026):** Sitemap pollution fix (`8fa1e82`); 3-phase cleanups; www→apex stale-sitemap removal; indexing-quota reframe.
