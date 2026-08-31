# PP SEO — v6

**Status:** ACTIVE
**Version:** v6 (June 16, 2026) — logs the **vendor-page retirement redirects + sitemap update**, the **hardcoded-vendor-count fix** (`84d3a9f`), the **cross-link rollout completion**, and the **garcinia canonical resolution** (it was STALE GSC crawl data, NOT a code defect — the live page already self-canonicals; v5's original framing was right). Carries v5 forward.
**Supersedes:** v5.

---

## 🆕 Session work — June 16, 2026

### 1. Vendor coupon-page cross-link rollout — COMPLETE (21/21)
All 21 `/coupons/[vendor]` pages now carry the research-area internal cross-link block (~525 internal `/peptides/` links total across the set). Internal linking is a ranking lever — PP's core problem is position/CTR, not indexing. Full tally + method in **PP_VENDOR_PAGES v2**.

### 2. Two vendor pages retired (particle + fusion)
- `particle-peptides` + `fusion-peptide` retired June 16: each `/coupons/[slug]` now **redirects to `/coupons`**, and both were removed from the hub, the sitemap, `peptide-vendors.json` (18 carry-entries), and the ghk-cu vendor block. `page.tsx`, opengraph-image routes, and `vendors.ts` entries were **kept** (the OG build references `vendors[slug]`).
- ⚠️ **Mechanism lesson:** the `next.config.js` `redirects()` rule **did NOT fire in production** for these routes (verified via cache-busted fetch — the page kept serving with its own self-canonical). The working fix was an **in-component `redirect('/coupons')`** at the top of both `page.tsx` (commit `17068d4`) — render-time, can't be bypassed. **For retiring a route whose `page.tsx` still exists, prefer the in-component redirect over a config rule.**
- Sitemap: **167 → 165**.

### 3. garcinia-cambogia canonical — STALE GSC DATA, not a code defect (v6 self-correction)
- An earlier v6 draft (and the GSC inspection it was based on) called this a real missing-self-canonical defect. **That was wrong** — it conflated **GSC URL Inspection (Google's *crawl-time* view) with the live HTML.**
- CC's direct live-HTML check + the site architecture confirm the page **already emits a correct self-canonical**: `buildPageMetadata()` (`src/lib/seo.ts`) sets `alternates.canonical` for every page, garcinia uses it (`path: "/supplements/garcinia-cambogia"`), and the live page returns `<link rel="canonical" href="https://profpeptide.com/supplements/garcinia-cambogia"/>` — no 747live in the HTML. **Site-wide audit: 100% canonical coverage; zero path/canonical mismatches.**
- So GSC's "Duplicate without user-selected canonical / Google chose `www.747live.bet`" is **stale crawl data** — Google picked 747live from spam backlinks before recrawling the present self-canonical. **v5's original "stale crawl, confirm on recrawl" framing was right all along.**
- **Resolution is non-code (CINC/GSC side):** URL Inspection → Test Live URL → Request Indexing for `/supplements/garcinia-cambogia`, then Validate Fix on the "Duplicate" issue. The live canonical makes Google drop the 747live selection.
- **2nd page in the bucket:** CC's code audit found nothing missing/wrong site-wide, so it's most likely the same stale-crawl pattern — re-inspect GSC to name the 2nd URL, verify its live canonical, then apply the same Request-Indexing / Validate-Fix treatment.

### 4. Hardcoded vendor counts — FIXED (`84d3a9f`)
`vendors.ts` now has a `retired?` flag (set on fusion + particle) and exports `activeVendorCount = Object.values(vendors).filter(v => !v.retired).length` (= **19**). The hub meta-description ("13 trusted vendors") and the "See all 17 verified vendors" string on **26 peptide-profile pages** now derive from `activeVendorCount` → render **19**; no residual hardcoded counts (they can't drift again).
- ⚠️ **Sanity-check pending:** confirm the "See all … verified vendors" CTA links to `/coupons` (19 vendors) and **not** `/best-peptide-vendors` (which shows the **6**-vendor vetted list) — if it points to best-vendors, the number should track the vetted list, not the full registry.

---

## Carried forward from v5 (June 14) — UNCHANGED

**Sitemap pollution fix** — next-sitemap `transform()` nulls image/icon/contact routes + `exclude` globs drop redirecting legacy URLs. Commit `8fa1e82`. GSC resubmit Success.

**3-phase CC cleanups:**
- **Phase 1** — GLP-1 compare pages un-redirected; `/compare/retatrutide-vs-tirzepatide` + `…-vs-semaglutide` now 200/self-canonical/in-sitemap. Commit `aa474f1`. ⚠️ **WATCH:** 3 overlapping GLP-1 compare pages live → monitor cannibalization.
- **Phase 2** — trailing-slash single-301 via `skipTrailingSlashRedirect` + global rule. Commit `61047f6`. SEO-neutral. ⚠️ **WATCH:** replaced Next's built-in normalization — first suspect if trailing-slash routing misbehaves.
- **Phase 3** — canonical conflicts: no defect, no change. *(Confirmed again this session by CC's 100%-coverage canonical audit — including garcinia; see §3.)*

**www-vs-apex** — www 308→apex (no infra bug); stale `www/sitemap.xml` removed from GSC; apex expected to win on recrawl. No separate www GSC property.

**Indexing-quota framing** (supersedes v4's "≤5/day") — Request-Indexing daily quota is small. Approach: Validate Fix on Page-Indexing buckets (not quota-limited) + Request Indexing on priority URLs only. Never hand-commit `sitemap-0.xml` — next-sitemap regenerates on deploy. *(Exception this session: the 2 retired-vendor URLs were manually removed from the committed `sitemap-0.xml` AND added to the exclude config — config is the durable part.)*

**PENDING CINC — recrawl run (quota-gated):**
1. Validate Fix on "Duplicate, Google chose different canonical" + redirect buckets.
2. Request Indexing priority order: retatrutide → tirzepatide → the 2 compare pages → **garcinia-cambogia** (clear the stale 747live pick — live page already self-canonicals) → tongkat-ali / thymosin-alpha-1 / coupons/ignite-peptides.
3. Post-recrawl: confirm canonical flipped www → apex, the stale 747live selection on garcinia drops, and the 2 retired coupon URLs fall out (now redirecting).

---

## Affiliate vendor outreach — [Unchanged — see v4/v5]
Signed/carried: **Peptides.gg** (`PROF15`/15%), **Amino Club** (`PROFPEPTIDE`/20%). Tier-1 applied June 4 (Spartan, Onyx, Midwest `PROF10`, BioSynth). Tier-2 + from-scratch shortlist carry forward — see v4.

## Bioregulator content cluster [Unchanged — see PP_BIOREGULATORS v1]
Hub-and-spoke locked; Pinealon shipped; Thymogen issued; Cardiogen/Cortagen + pillar queued.

---

**Cross-ref:** PP_BIOREGULATORS v1 · PP_MASTER v15 (+ Addendum v3) · PP_X_POSTS v34 · **PP_VENDOR_PAGES v2** · WL_MASTER v2.x · SCS_MP v6.x.

---

## 📅 Changelog
**v6 (June 16, 2026):** Cross-link rollout complete (21/21 → PP_VENDOR_PAGES v2); particle + fusion retired via in-component redirect (`17068d4` — config `redirects()` didn't fire in prod; lesson logged), sitemap 167→165; hardcoded vendor counts fixed (`84d3a9f`, derive from `activeVendorCount` = 19); **garcinia = stale GSC crawl, NOT a code defect** — live page already self-canonicals (CC live-HTML check + `buildPageMetadata` 100%-coverage audit); resolution is GSC Request-Indexing + Validate-Fix; v5's original "stale crawl" framing restored (an interim v6 draft wrongly called it a code defect — corrected). v5 sections carried forward.
**v5 (June 14, 2026):** Sitemap pollution fix (`8fa1e82`); 3-phase cleanups (`aa474f1` / `61047f6` / no-op); www→apex stale-sitemap removal; indexing-quota reframe; pending CINC recrawl run logged.
