# PP SEO — v5

**Status:** ACTIVE
**Version:** v5 (June 14, 2026) — logs the **sitemap-pollution fix + 3-phase CC cleanups + www→apex canonical cleanup + indexing-quota reframe**, and records the pending CINC recrawl run.
**Supersedes:** v4. All v4 sections (affiliate outreach, bioregulator cluster) carry forward UNCHANGED except the Indexing framing, which is corrected below.

---

## 🆕 Session work — June 14, 2026

### 1. Sitemap — root cause was POLLUTION, not omission
- next-sitemap **already contained** the content pages; it was polluted with ~80 `/opengraph-image` + `/twitter-image` routes, `/contact` (which is `noindex`), and a deleted-vendor 404 (`apollo-peptide-sciences`).
- **Fix:** CC rewrote `next-sitemap.config.js` — `transform()` now nulls image/icon/contact routes + `exclude` globs drop redirecting legacy URLs → clean sitemap. **Commit `8fa1e82`.**
- **GSC resubmitted:** Status **Success**; discovered count **207**, draining toward target.

### 2. CC cleanups — 3 phases
- **Phase 1 — GLP-1 compare pages un-redirected.** The two pairwise pages (`/compare/retatrutide-vs-tirzepatide`, `/compare/retatrutide-vs-semaglutide`) were fully built, but `next.config.js` was **301-ing them to the 3-way page**. Removed those redirects + the matching sitemap excludes → both now serve **200, self-canonical, in sitemap (~167 URLs)**. **Commit `aa474f1`.**
  - ⚠️ **WATCH:** 3 overlapping GLP-1 compare pages are now live (the 3-way + both pairwise) — monitor for **cannibalization**.
- **Phase 2 — trailing-slash supplement URLs.** They were already clean `308 → 200`; changed to a **single 301** via `skipTrailingSlashRedirect: true` + a global `/:path+/ → /:path+` 301 rule. **SEO-neutral** (Google treats 308 = 301); the "13 erroring URLs" GSC bucket was **stale, not a real defect**. **Commit `61047f6`.**
  - ⚠️ **WATCH:** this custom rule **replaced Next's built-in normalization** — first suspect if trailing-slash routing ever misbehaves.
- **Phase 3 — canonical conflicts.** CC verified all flagged pages already render correct self-canonicals → **NO defect, no change.**

### 3. www-vs-apex canonical
- GSC was choosing `www.profpeptide.com` as canonical on several pages.
- `www` **already 308-redirects to apex** in Vercel — **no infra bug.**
- The lingering signal was a `www.profpeptide.com/sitemap.xml` **still registered in GSC** (207 URLs, last read Jun 11) → **REMOVED this session.**
- The www-canonical verdicts were **stale May-23 crawls.** Expectation: **apex wins on recrawl.** No separate `www` GSC property exists.

### 4. garcinia-cambogia — stale external canonical
- GSC showed an **external canonical** (`www.marcustheatres.com`) from a **stale Jun-7 crawl**; the page renders a **correct self-canonical today.**
- **Action:** confirm it clears on recrawl. If it **survives a fresh crawl**, investigate.

### 5. Indexing quota — framing CORRECTED (supersedes v4's "≤5/day")
- The **Request-Indexing daily quota is small** (hit after a few URLs).
- **Correct approach now:** **Validate Fix** on Page-Indexing buckets (NOT quota-limited) **+** Request Indexing on **priority URLs only.**
- The earlier "≤5/day" framing in v4 §"Other buckets (B/C) and Indexing" is **retired** — it conflated the two mechanisms. (Still true: never hand-commit `sitemap-0.xml`; next-sitemap regenerates on deploy.)

### 6. PENDING CINC — recrawl run (quota-gated, next window)
1. **Validate Fix** on the **"Duplicate, Google chose different canonical"** + redirect buckets.
2. **Request Indexing** in priority order: **retatrutide → tirzepatide → the 2 compare pages → garcinia-cambogia → then tongkat-ali / thymosin-alpha-1 / coupons/ignite-peptides.**
3. **Post-recrawl re-inspection** to confirm the Google-selected canonical flipped **www → apex** and **garcinia cleared.**
- ✅ **Already DONE this session:** sitemap resubmit, www-sitemap removal.

---

## Affiliate vendor outreach — status [Unchanged — see v4]
Signed/carried: **Peptides.gg** (`PROF15`/15%), **Amino Club** (`PROFPEPTIDE`/20%). Tier-1 applied June 4 (Spartan, Onyx, Midwest `PROF10`, BioSynth). Tier-2 + research-from-scratch shortlist and the US+COA checks carry forward unchanged — see v4 for the full list and benchmarks (~10% standard / ~20% best).

## Bioregulator content cluster [Unchanged — see PP_BIOREGULATORS v1 / v4]
Hub-and-spoke locked; Pinealon shipped; Thymogen build prompt issued; Cardiogen/Cortagen + pillar queued (each needs fresh citation verification before build).

---

**Cross-ref:** PP_BIOREGULATORS v1 · PP_MASTER v15 (+ Addendum v3) · PP_X_POSTS v34 · PP_VENDOR_PAGES v1 · WL_MASTER v2.x · SCS_MP v6.x.

---

## 📅 Changelog
**v5 (June 14, 2026):** Sitemap pollution root-cause + fix (`8fa1e82`); 3-phase CC cleanups — GLP-1 compare un-redirect (`aa474f1`, 3-page cannibalization watch), trailing-slash single-301 (`61047f6`, SEO-neutral / stale bucket), canonical no-op; www→apex stale-sitemap removal; garcinia stale-external-canonical watch; **indexing-quota framing corrected** (Validate Fix + priority Request-Indexing, retires "≤5/day"); pending CINC recrawl run + priority order logged. Affiliate-outreach and bioregulator sections carried forward unchanged from v4.
