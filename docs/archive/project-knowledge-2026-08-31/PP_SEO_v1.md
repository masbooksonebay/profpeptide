# PP SEO — v1

**Date:** 2026-06-01
**Status:** Active tracker. **Renames and supersedes PP_INDEXING v22.**
**Why the rename:** the workstream outgrew "indexing." Pages are indexed; the problem is position/CTR plus where new vendor/coupon traffic should go. This doc now tracks all PP SEO: indexing, the weekend GSC query-mining routine, the SEO backlog, and a weekly metrics log. Indexing is now one section, not the whole doc.
**Supersedes:** PP_INDEXING v22 (indexing content carried forward below). v20 supplement baselines / query-intent / schema-gap / audience profile still carry forward unchanged (see v20). v19 settled findings (redirect noise, www patterns, C1-C3 root cause, submission workflow) remain locked.

---

## 0) Core diagnosis (the anchor — unchanged)

**PP's primary SEO problem is POSITION / CTR, not indexing.** Pages are indexed and crawlable; they rank mid-page-1 to page-2 and don't earn the click. Indexing requests accelerate crawl of genuinely-new pages; they do NOT move ranking. Ranking/CTR levers = title/meta that match real query intent + content depth + internal cross-linking + schema.

---

## 1) Weekend GSC query-mining routine (LOCKED cadence — NEW)

**Cadence:** weekly, on weekends. **Window:** 7-day for the routine snapshot; **28-day** when hunting retitle candidates or drilling a specific page (7 days only surfaces pages above a low noise floor).
**Pipeline:** Mark runs GSC bulk **Export** (set window + Search type = Web → Export; export auto-includes Clicks/Impressions/CTR/Position on the Queries + Pages tabs regardless of column toggles) → uploads → Claude analyzes + buckets. CINC NOT needed for the routine export (export beats transcription); CINC IS used for page-level drill-downs (filter a page → Queries tab). Read-only; no quota concerns.

**Bucket framework:**
- **A — page-1 but zero-click** → title/meta rewrites (cheapest lever).
- **B — high-impression but buried** → ranking work / page builds.
- **C — thin / very low position** → content-depth + cross-linking.
- Caveat: 7-day data is noisy; treat 1-imp queries as "watch." High-confidence signal = aggregated PAGES, not single queries.

---

## 2) SEO backlog (live — by bucket)

### Bucket A — title/meta rewrites
- ✅ **5 zero-click page-1 pages rewritten + shipped — commit `316de00`** (June 1, title + meta only, 14/14 diff, pushed to main → Vercel auto-deploy):
  - `/news/retatrutide-phase-3-update-may-2026` → retitled to lead with approval status: **"Retatrutide: Not Yet FDA-Approved — Phase 3 Status & 2026 Timeline"** (164 imp were approval/timeline queries, not the old efficacy framing); mirrored into OG/Twitter (raw `export const metadata`, 3 places).
  - `/peptides/glow` → "GLOW Peptide" (not "Blend") + 5:1:1 + 50/10/10 mg breakdown.
  - `/compare/epitalon-vs-nad-plus` → "Mechanism, Evidence & Which to Pick" CTR hook.
  - `/compare/semaglutide-vs-tirzepatide-vs-retatrutide` → mechanism/efficacy/side-effects; meta leads with "retatrutide vs…" to match dominant query.
  - `/compare/berberine-vs-metformin` → "Same AMPK Activation?" hook.
- **Live-render verification still pending** (deploy auto-fires on push; confirm via view-source / next GSC pull — fetch tooling couldn't surface the mid-page-1 URLs this session).
- **Next A candidates:** pull a **28-day** GSC window to surface more page-1 zero-click pages than the 7-day window shows.

### Bucket B — ranking / builds
- **Vendor coupon pages: NO build gap.** Read-only gap-check (June 1) = **18 vendors in `vendors.ts` ↔ 18 dedicated `/coupons/<slug>` pages, perfect 1:1, zero orphans.** The "build pages for carried-but-missing vendors" hypothesis was tested and disproved — nothing to build there. (Pages are static per-slug folders, NOT a dynamic `[slug]` route.)
- **/coupons HUB — diagnosed (CINC drill-down, 28-day):** 548 imp / **0 clicks / 0% CTR / pos 17.2** / 127 queries. **~75% of impressions are brand-specific coupon searches; essentially NO generic head terms** ("peptide coupons," "peptide discount code") in the top queries. So the hub is not a generic-traffic play. The brand queries split two ways:
  - **Carried vendors** (Peptide Partners, Royal, Fusion, Ascension): already have dedicated pages that rank well for the core brand query; the hub only catches their long-tail variants ("[brand] coupon code 2026 / discount code / promo code") at page-2. **Lever (cheap):** ensure each dedicated page's title/meta targets those exact variant phrasings so the well-ranking dedicated page owns them instead of the buried hub. (Read-only CC check of the 4 carried pages' titles/meta = the next step.)
  - **Non-carried brands = AFFILIATE-ACQUISITION TARGET LIST** (real demand for vendors PP doesn't carry):
    1. **Peptide Sciences / peptidesciences.com** — 5–6 query variants, the standout; major established vendor. *(Distinct from carried Apollo Peptide Sciences.)*
    2. **Core Peptides** — 3 variants. *(Distinct from the @corepeptides X handle.)*
    3. **Biotech Peptides** — 1.
    4. **Eternal Peptides** — 1.
    → Recruit demand-ranked vendors (Peptide Sciences first) → dedicated page captures the search the way `/coupons/peptide-partners` (pos ~1.8) already does.
- **/calculator** — 45 imp, pos ~31.8, thin → content-depth (longer-term).
- **/peptides/wolverine-stack** (~16.7), **/gh-stack** (~17.2), **/best-peptide-vendors** (~58.1) → ranking/content (long-term).
- **Generic head terms** ("peptide coupons") — hub doesn't rank for them at all; owning them is a bigger authority/content play, lower priority than the acquisition list.

### Bucket C — content depth
- `/supplements/spermidine` — Crawled-not-indexed = content issue, not crawl. Needs depth + cross-linking. Monitor.
- Crawled-not-indexed supplement/peptide pages generally → depth + cross-linking pass.

---

## 3) Indexing (carried forward from PP_INDEXING v22 — still live)

### 🔒 Locked indexing rules
- **GSC quota stop:** ≤5 URL inspection/indexing requests **per calendar day** (resets midnight; shared across all properties/sessions). Empirically June 1: ~7 landed before "Quota Exceeded." Stop-on-quota and log where it stopped.
- **Resubmission cadence:** 14-day minimum per URL (re-requests only; brand-new pages aren't bound).
- **Settled noise (DO NOT re-request):** trailing-slash variants (308 → "redirect error"; non-slash canonical), www→apex, http→https. Working as intended.

### Live indexing state (June 1 → June 2)
- **▶️ June 2 START HERE — Batch C (quota-blocked, 0 landed June 1).** Run stop-on-quota in order: `/about` (already live-tested indexable) → `/guides` → `/guides/syringes-and-injection` → `/hybrid-rockstar/support` → `/strength-cycle/support` → `/hybrid-rockstar/privacy`.
- **June 6 — C1-C3 canonical recheck:** `/peptides/thymosin-alpha-1`, `/coupons/ignite-peptides`, `/supplements/tongkat-ali` still "Duplicate, Google chose different canonical" (www-canonical). Last submitted May 23. If still www-canonical June 6 → escalate per v19 §H. *(The June 1 hub drill-down reconfirmed the vendor-page www split: ignite-peptides surfaced as www again — consistent.)*
- **~June 14 — recheck rechecks:** Batch A (5 URLs, May 31) + Batch B (6 submitted blends, June 1) — did they move to Indexed?
- **Blends/stacks:** of 11, 5 already indexed organically, 6 requested + in crawl queue (recheck June 14). No outstanding discovery problem.
- **`/news/rfk-peptide-ban-2026-v2`** — Duplicate-canonical bucket; check if a v1 exists / which is canonical BEFORE any request.
- **Sitemap (LOCKED):** `next-sitemap` regenerates on EVERY Vercel deploy (live = 186 URLs). Never hand-commit `public/sitemap-0.xml` (stale build artifact). New pages are auto-discoverable; Inspection just accelerates the undiscovered.

---

## 4) Weekly metrics log (append each week)

| Window | Scope | Clicks | Impr | CTR | Avg Pos | Notes |
|---|---|---|---|---|---|---|
| 5/24–5/30 (7d) | site-wide | 6 | ~1,300 | 0.5% | 18.2 | Baseline. Only brand queries ("peptide professor") convert; homepage = 4 of 6 clicks. Position improving across timeframes. |
| Last 28d (as of 6/1) | `/coupons` hub | 0 | 548 | 0% | 17.2 | 127 queries, ~75% brand-specific, no generic head terms. Impression spike ~May 26–27. www clean for the hub (only non-www has data). |

---

## 🔗 Cross-references
- **PP_MASTER v13** — portfolio/site state
- **PP_X_POSTS v25** — vendor post format + cycle log
- **SCS_MP v6.9** — parent; weekend GSC routine cross-referenced
- **v20** — supplement baselines, query-intent, schema gap, audience profile (carry forward)
- **v19** — settled findings + submission workflow + C1-C3 escalation checklist

---

## 📅 Changelog
**v1 (June 1, 2026) — renamed from PP_INDEXING v22 → PP_SEO:**
- Restructured to full SEO tracker: core diagnosis · weekend GSC routine · SEO backlog (A/B/C) · indexing section · weekly metrics log.
- Logged Bucket A 5-page rewrite ship (commit 316de00).
- Logged vendor gap-check (18/18, no builds) and the /coupons hub drill-down (brand-specific, not generic; carried-vendor variant lever + non-carried acquisition list led by Peptide Sciences).
- All v22 indexing state (Batch C June-2 queue, C1-C3 June 6, June 14 rechecks, blends, sitemap) carried forward intact.

---

*PP SEO master tracker. Continuing SEO next session — START with: (a) read-only CC check of the 4 carried vendors' dedicated-page titles/meta vs. their coupon-variant queries, and/or (b) fresh acquisition research on Peptide Sciences; plus the June-2 indexing Batch C.*
