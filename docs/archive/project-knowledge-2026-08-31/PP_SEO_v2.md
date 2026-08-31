# PP SEO — v2

**Date:** 2026-06-02
**Status:** Active tracker. Drop-in update over v1.
**Supersedes:** PP_SEO v1 (June 1). All v1 sections carry forward; this version updates Bucket A/B with the June-2 ships, the Peptide Sciences finding, and the verification state. v20/v19 settled findings remain locked.

---

## 0) Core diagnosis (the anchor — unchanged)

**PP's primary SEO problem is POSITION / CTR, not indexing.** Pages are indexed and crawlable; they rank mid-page-1 to page-2 and don't earn the click. Indexing requests accelerate crawl of genuinely-new pages; they do NOT move ranking. Ranking/CTR levers = title/meta that match real query intent + content depth + internal cross-linking + schema.

---

## 1) Weekend GSC query-mining routine (LOCKED cadence)

[Unchanged — see v1 §1.] Weekly weekend cadence; 7-day routine snapshot, 28-day for retitle-candidate hunts / page drill-downs. Mark exports GSC → Claude buckets A/B/C. Read-only; no quota concern.

---

## 2) SEO backlog (live — by bucket)

### Bucket A — title/meta rewrites
- ✅ **5 zero-click page-1 pages rewritten + shipped — commit `316de00`** (June 1): `/news/retatrutide-phase-3-update-may-2026` (→ "Not Yet FDA-Approved — Phase 3 Status & 2026 Timeline"), `/peptides/glow`, `/compare/epitalon-vs-nad-plus`, `/compare/semaglutide-vs-tirzepatide-vs-retatrutide`, `/compare/berberine-vs-metformin`. Full detail in v1 §2.
  - **⚠️ Live-render verification still OPEN for these 5.** The June-2 CINC pass covered the 18 coupon pages + the alternatives page, NOT these 5. Pushed per the record but not freshly confirmed live — spot-check via CINC/view-source or the next GSC pull.
- **Next A candidates:** pull a **28-day** GSC window for more page-1 zero-click pages than the 7-day shows.

### Bucket B — ranking / builds

**✅ Coupon-variant title/meta pass — COMPLETE & VERIFIED (June 2).** All **18** vendor coupon pages retitled to the **"[Brand] Coupon Code & Discount — Save X% (2026)"** pattern, with metas carrying "discount code" + "promo code" + "2026."
- Root cause (from the carried-vendor variant check): every dedicated page carried only "Discount Code" + a stale "(May 2026)" date, so "[brand] **coupon code** 2026" queries missed the dedicated page and the buried `/coupons` hub caught them at page-2. Fix = add the exact "Coupon Code" phrase to each title + load the variants into meta + refresh the date to evergreen "(2026)."
- Commits: **`c0c4202`** (first 4 — ascension, fusion, peptide-partners, royal) + **`8c91ffb`** (remaining 14, fast-forward). Also folded in: the **Almighty meta % bug fix** (was 10%, vendor is 20% — corrected) and the stale-date refresh across all 18. `integrative-peptides` kept supplement terminology; `particle-peptides` kept EU/Ph. Eur. framing; `ignite` kept WELCOME10.
- **CINC-verified live June 2:** all 18 titles correct, no stale "(May 2026)," no 404s.

**✅ Peptide Sciences play — pivoted from "acquire" to "capture orphaned demand" (June 2).**
- **peptidesciences.com is SHUT DOWN.** Confirmed via the live site (voluntary closure notice; discontinued all product sales). So it was never an acquisition target — it's closed, which is also why no affiliate program exists (only a customer "Refer a Friend" 10%-off + an auto 10% account credit; no publisher commission). Distinct from carried Apollo Peptide Sciences.
- Its notice **aggressively asserts trademark enforcement** ("actively monitor and enforce… legal action"; any successor/affiliation claim is "unauthorized, fraudulent").
- **Built `/peptide-sciences-alternatives` — commit `4d45c7d`** (CINC-verified live): factual closure report + alternatives routed to carried commission vendors via `VendorHighlightBlock` (ascension-peptides, peptide-partners, vital-core-research, glacier-aminos, ez-peptides; codes pulled live from `vendors.ts`). **TM guardrails baked in** (nominative/factual use only; non-affiliation disclaimer near the top; NO logo/marks/reproduced text; echoes their own "no successor" line). Mark (attorney) made the final TM call. Targets "peptide sciences alternative / shut down / closed" intent.

**Remaining non-carried acquisition list (still live demand):**
- **Core Peptides** (3 query variants) · **Biotech Peptides** (1) · **Eternal Peptides** (1).
- **▶️ NEXT ACTION: affiliate-program check on Core / Biotech / Eternal** — confirm whether each runs a real publisher commission program (unlike Peptide Sciences). If yes → dedicated coupon page; if no → comparison/alternative page like the Peptide Sciences pattern.
- **Peptide affiliate benchmark (from research):** ~**10%** standard commission; best ~**20%** (Apollo 20% w/ 90–120-day cookie; Onyx / Synthesis / Midwest 10%). Customer refer-a-friend / account-credit programs (Peptide Sciences pattern) do NOT pay publishers — not monetizable for PP.

**Other B items (long-term):** `/calculator` (pos ~31.8, thin), `/peptides/wolverine-stack` (~16.7), `/gh-stack` (~17.2), `/best-peptide-vendors` (~58.1). Generic head terms ("peptide coupons") = bigger authority play, lower priority.

### Bucket C — content depth
[Unchanged — see v1 §2.] `/supplements/spermidine` + crawled-not-indexed pages → depth + cross-linking.

---

## 3) Indexing (carried forward — still live)

[Locked rules + sitemap behavior unchanged — see v1 §3.]
- **▶️ Batch C (quota-blocked June 1, still 0 landed):** `/about` → `/guides` → `/guides/syringes-and-injection` → `/hybrid-rockstar/support` → `/strength-cycle/support` → `/hybrid-rockstar/privacy`. Stop-on-quota (≤5/day).
- **June 6 — C1-C3 canonical recheck:** `/peptides/thymosin-alpha-1`, `/coupons/ignite-peptides`, `/supplements/tongkat-ali` (www-canonical; escalate per v19 §H if unchanged).
- **~June 14 — recheck rechecks:** Batch A (5 URLs) + Batch B (6 blends) → moved to Indexed?
- Sitemap: `next-sitemap` regenerates on every Vercel deploy; never hand-commit `public/sitemap-0.xml`. (The June-2 commits added `/peptide-sciences-alternatives` — auto-included on deploy.)

---

## 4) Weekly metrics log

| Window | Scope | Clicks | Impr | CTR | Avg Pos | Notes |
|---|---|---|---|---|---|---|
| 5/24–5/30 (7d) | site-wide | 6 | ~1,300 | 0.5% | 18.2 | Baseline. Brand queries convert; homepage = 4 of 6 clicks. |
| Last 28d (as of 6/1) | `/coupons` hub | 0 | 548 | 0% | 17.2 | 127 queries, ~75% brand-specific, no generic head terms. Drove the 18-page coupon-variant pass + the non-carried acquisition list. |

*(No new GSC export this session — next pull = the 28-day Bucket-A candidate hunt.)*

---

## 🔗 Cross-references
- **PP_MASTER v13** · **PP_X_POSTS v26** · **SCS_MP v6.9**
- **v20** — supplement baselines, query-intent, schema gap, audience profile (carry forward)
- **v19** — settled findings + submission workflow + C1-C3 escalation checklist

---

## 📅 Changelog
**v2 (June 2, 2026):**
- Logged the **18-page coupon-variant title/meta pass** (commits `c0c4202` + `8c91ffb`) — all "Coupon Code & Discount — Save X% (2026)," metas carry coupon/discount/promo + 2026; Almighty % bug fixed; stale date refreshed. CINC-verified all 18 live.
- Logged the **Peptide Sciences shutdown** finding → pivoted to the **`/peptide-sciences-alternatives`** page (commit `4d45c7d`, CINC-verified, TM-guardrailed). Removed Peptide Sciences from the "acquire" list (it's closed / no publisher program).
- Updated the acquisition list to **Core / Biotech / Eternal Peptides** with the affiliate-program check as the next action; added the ~10%/20% peptide affiliate benchmark.
- Flagged `316de00` (5 Bucket-A retitles) as pushed-but-not-in-the-June-2-CINC-pass → live verification still open.

---

*PP SEO master tracker. NEXT: (a) affiliate-program check on Core / Biotech / Eternal Peptides; (b) 28-day GSC pull for more Bucket-A candidates; (c) live-confirm the 5 `316de00` retitles; (d) indexing Batch C.*
