# PP SEO — v6

**Status:** ACTIVE
**Version:** v6 (June 16, 2026) — logs the **vendor-page retirement redirects + sitemap update**, **corrects the garcinia canonical status** (v5's "renders a correct self-canonical today" was wrong — it has NO self-canonical and a gambling domain is canonical-jacking it), records the **cross-link rollout completion** and the **hardcoded-vendor-count cleanup**. Carries v5 forward.
**Supersedes:** v5.

---

## 🆕 Session work — June 16, 2026

### 1. Vendor coupon-page cross-link rollout — COMPLETE (21/21)
All 21 `/coupons/[vendor]` pages now carry the research-area internal cross-link block (~525 internal `/peptides/` links total across the set). Internal linking is a ranking lever — PP's core problem is position/CTR, not indexing. Full tally + method in **PP_VENDOR_PAGES v2**.

### 2. Two vendor pages retired (particle + fusion)
- `particle-peptides` + `fusion-peptide` retired June 16: each `/coupons/[slug]` now **redirects to `/coupons`**, and both were removed from the hub, the sitemap, `peptide-vendors.json` (18 carry-entries), and the ghk-cu vendor block. `page.tsx`, opengraph-image routes, and `vendors.ts` entries were **kept** (the OG build references `vendors[slug]`).
- ⚠️ **Mechanism lesson:** the `next.config.js` `redirects()` rule **did NOT fire in production** for these routes (verified via cache-busted fetch — the page kept serving with its own self-canonical). The working fix was an **in-component `redirect('/coupons')`** at the top of both `page.tsx` (commit `17068d4`) — render-time, can't be bypassed. **For retiring a route whose `page.tsx` still exists, prefer the in-component redirect over a config rule.**
- Sitemap: **167 → 165**.

### 3. garcinia-cambogia canonical — v5 §4 CORRECTED (real defect, not stale)
- v5 claimed garcinia "renders a correct self-canonical today" and that the external canonical was a stale `marcustheatres.com` crawl. **That was wrong.** This session's GSC inspection found `/supplements/garcinia-cambogia` has **NO self-canonical tag**, and Google selected the **gambling domain `www.747live.bet`** as its canonical. (The external canonical shifting `marcustheatres` → `747live.bet` is itself the symptom of having no self-canonical to anchor.)
- **CC fix assigned (in progress):** add a self-canonical to garcinia-cambogia; diff its `<head>` vs a known-good supplement page; audit ALL `/supplements/*` + `/peptides/*` for other missing self-canonicals; find the 2nd page in GSC's "Duplicate without user-selected canonical" bucket and fix the same pattern.

### 4. Hardcoded vendor counts — cleanup assigned (in progress)
Stale hardcoded counts found live: the `/coupons` hub meta-description says "13 trusted vendors" (now **19**), and ghk-cu says "See all 17 verified vendors" (shifted when particle was pulled). **CC fix:** derive each count from its source (hub array / `peptide-vendors.json`) so they can't drift again.

---

## Carried forward from v5 (June 14) — UNCHANGED

**Sitemap pollution fix** — next-sitemap `transform()` nulls image/icon/contact routes + `exclude` globs drop redirecting legacy URLs. Commit `8fa1e82`. GSC resubmit Success.

**3-phase CC cleanups:**
- **Phase 1** — GLP-1 compare pages un-redirected; `/compare/retatrutide-vs-tirzepatide` + `…-vs-semaglutide` now 200/self-canonical/in-sitemap. Commit `aa474f1`. ⚠️ **WATCH:** 3 overlapping GLP-1 compare pages live → monitor cannibalization.
- **Phase 2** — trailing-slash single-301 via `skipTrailingSlashRedirect` + global rule. Commit `61047f6`. SEO-neutral. ⚠️ **WATCH:** replaced Next's built-in normalization — first suspect if trailing-slash routing misbehaves.
- **Phase 3** — canonical conflicts: no defect, no change. *(NOTE: superseded for garcinia — see §3 above; garcinia WAS a real defect the Phase-3 sweep missed.)*

**www-vs-apex** — www 308→apex (no infra bug); stale `www/sitemap.xml` removed from GSC; apex expected to win on recrawl. No separate www GSC property.

**Indexing-quota framing** (supersedes v4's "≤5/day") — Request-Indexing daily quota is small. Approach: Validate Fix on Page-Indexing buckets (not quota-limited) + Request Indexing on priority URLs only. Never hand-commit `sitemap-0.xml` — next-sitemap regenerates on deploy. *(Exception this session: the 2 retired-vendor URLs were manually removed from the committed `sitemap-0.xml` AND added to the exclude config — config is the durable part.)*

**PENDING CINC — recrawl run (quota-gated):**
1. Validate Fix on "Duplicate, Google chose different canonical" + redirect buckets.
2. Request Indexing priority order: retatrutide → tirzepatide → the 2 compare pages → garcinia-cambogia → tongkat-ali / thymosin-alpha-1 / coupons/ignite-peptides.
3. Post-recrawl: confirm canonical flipped www → apex, **garcinia now self-canonical** (after §3 lands), and the 2 retired coupon URLs drop out (now redirecting).

---

## Affiliate vendor outreach — [Unchanged — see v4/v5]
Signed/carried: **Peptides.gg** (`PROF15`/15%), **Amino Club** (`PROFPEPTIDE`/20%). Tier-1 applied June 4 (Spartan, Onyx, Midwest `PROF10`, BioSynth). Tier-2 + from-scratch shortlist carry forward — see v4.

## Bioregulator content cluster [Unchanged — see PP_BIOREGULATORS v1]
Hub-and-spoke locked; Pinealon shipped; Thymogen issued; Cardiogen/Cortagen + pillar queued.

---

**Cross-ref:** PP_BIOREGULATORS v1 · PP_MASTER v15 (+ Addendum v3) · PP_X_POSTS v34 · **PP_VENDOR_PAGES v2** · WL_MASTER v2.x · SCS_MP v6.x.

---

## 📅 Changelog
**v6 (June 16, 2026):** Cross-link rollout complete (21/21 → PP_VENDOR_PAGES v2); particle + fusion retired via in-component redirect (`17068d4` — config `redirects()` didn't fire in prod; lesson logged), sitemap 167→165; **garcinia §4 corrected** — real missing-self-canonical defect with gambling-domain (`747live.bet`) canonical-jack, CC fix assigned; hardcoded vendor-count cleanup assigned (make dynamic). v5 sections carried forward.
**v5 (June 14, 2026):** Sitemap pollution fix (`8fa1e82`); 3-phase cleanups (`aa474f1` / `61047f6` / no-op); www→apex stale-sitemap removal; indexing-quota reframe; pending CINC recrawl run logged.
