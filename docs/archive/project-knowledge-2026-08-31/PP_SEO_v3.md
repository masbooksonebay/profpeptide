# PP SEO — v3

**Date:** 2026-06-03
**Status:** Active tracker. Drop-in over v2.
**Supersedes:** PP_SEO v2. All v2 sections carry forward except where updated below (316de00 verified; vendor/page ships logged; indexing advanced; two new build options queued). v20/v19 settled findings remain locked.

---

## 0) Core diagnosis (unchanged)
[Unchanged — see v2 §0.] PP's problem is **POSITION / CTR, not indexing.** Ranking levers = intent-matched title/meta + content depth + internal cross-linking + schema. Indexing requests accelerate crawl of new pages only; they don't move ranking.

## 1) GSC routine (unchanged)
[Unchanged — see v2 §1.] Weekly weekend cadence; 28-day window for retitle-candidate hunts. Read-only, no quota concern.

---

## 2) Backlog by bucket

### Bucket A — title/meta
- ✅ **`316de00` (5 zero-click retitles) — CINC-VERIFIED LIVE (June 3).** All 5 load 200 with correct titles + metas: `/news/retatrutide-phase-3-update-may-2026` ("Retatrutide: Not Yet FDA-Approved — Phase 3 Status & 2026 Timeline"), `/peptides/glow`, `/compare/epitalon-vs-nad-plus`, `/compare/semaglutide-vs-tirzepatide-vs-retatrutide`, `/compare/berberine-vs-metformin`. **(v2's open verification flag — CLOSED.)**
  - **⚠️ FLAG (unverified):** the retatrutide-news meta cites **"TRANSCEND-T2D-1"** — likely wrong (Lilly's reta program is **TRIUMPH**; "TRIUMPH-4" in the same meta is plausible). Possible E-E-A-T liability; may be templated to other reta pages. Web-search to confirm, then fix on the page if wrong. (Not yet actioned.)
- **Next A:** 28-day GSC pull for more page-1 zero-click pages (CINC can pull the report — quota-free).

### Bucket B — ranking / builds / vendor pages
- ✅ **Peptides.gg onboarded + shipped** (commit `f2457ce`): `vendors.ts` entry (`peptides-gg`, PROF15 / 15%, editorsPick) + `/coupons/peptides-gg` detail page (royal-template copy, grep-clean of royal/janoshik) + featured first in Featured Vendors. Per-vendor OG card confirmed wired. **15% lifetime affiliate; mgr Team@peptides.gg (Reno NV).**
- ✅ **`/coupons` page:** "Verified Codes" date → **June 2026**; **Glacier Aminos + EZ Peptides moved Featured → US Vendors** (editor's-pick count trimmed).
- ✅ **`/best-peptide-vendors` trimmed to SIX** (commit `854e1ea`, alphabetical, "not a ranking"): Ascension Peptides, EZ Peptides, Oasis Labs, Peptide Partners, Peptides.gg, Vital Core Research. Removed: Almighty, Behemoth Labz, BioCollex, PureRawz, Spartan. Date → June 2026; JSON-LD `dateModified` → `2026-06-03` (follow-up patch).
- **18-page coupon-variant pass** — [Unchanged — see v2 §2; CINC-verified June 2.]
- **Peptide Sciences alternatives page** (`4d45c7d`, TM-guardrailed) — [Unchanged — see v2.]
- **Non-carried acquisition list:** Core / Biotech / Eternal Peptides — affiliate-program check still pending. **NEW affiliate-program research (verify each `/affiliate`):** Tier-1 **Peptides.gg (SIGNED, 15%)**, Spartan (10% + follower code), Onyx Biolabs (10%), Midwest (10%/30d), BioSynth (10% + tiers); Tier-2 Dynamic, BioPure, Peptides BioTech, PRG (EU), my-peptides (£15 UK); Tier-4 research-from-scratch (verify) Amino Asylum, Sports Tech Labs, Paradigm, Modern Aminos, Polaris, Behemoth, Swole AF, Peptide Pros. **Mark is checking these himself.** Benchmark ~10% std / ~20% best.
- **Long-term B:** `/calculator`, `/peptides/wolverine-stack`, `/gh-stack`, `/best-peptide-vendors` authority — [Unchanged.]

### 🆕 Bucket B — two QUEUED build options
- **Bioregulators category + hub page (low-competition cluster):** new "Bioregulators" group + hub (Khavinson organ peptides — Cortagen, Cardiogen, Chonluten, Livagen, Pinealon, Prostamax, Testagen, Thymogen, Vesugen, Vilon, Ovagen, Pancragen, Cartalax, Crystagen, Bronchogen). Keep Epitalon in longevity + immune ones in their primary category; **cross-link/tag, don't move.** CC must check existing taxonomy first. Peptides.gg's deep line = the demand signal. **Build after the Peptides.gg work settles.**
- **Deep-research pillar-cluster (additive `/peptides/[slug]/research` subpages off flagships):** 3 gating conditions — (1) target a distinct query ("[peptide] clinical trials/studies", not profile intent), (2) original synthesis, not a link-dump, (3) flagship peptides only, GSC-demand-validated per build; + bidirectional links. **Sequence BEHIND cheap title/meta wins.**

### Bucket C — content depth
[Unchanged — see v2 §2.] `/supplements/spermidine` + crawled-not-indexed pages → depth + cross-linking.

---

## 3) Indexing
[Locked rules + sitemap behavior unchanged — see v1 §3 / v2 §3. ≤5 URL requests/day; never hand-commit `sitemap-0.xml` (next-sitemap regenerates on deploy).]
- ✅ **Batch C ran June 3 — 5 landed** (priority crawl): `/peptide-sciences-alternatives` (was "unknown to Google"), `/guides`, `/guides/syringes-and-injection`, `/about`, `/hybrid-rockstar/support` (latter 4 were "Discovered – currently not indexed"). **Quota hit at #6.**
- **▶️ June 4 (quota reset):** `/strength-cycle/support` + `/hybrid-rockstar/privacy` (the 2 leftovers) + **add `/coupons/peptides-gg`** (new route). ~3 slots free.
- **~2-week recheck:** did the 5 actually flip to Indexed? Thin utility pages (`/about`, `/guides`) may stay "discovered – not indexed" → that's a content-depth signal, not a reason to resubmit.
- **June 6 — C1-C3 canonical recheck** (`/peptides/thymosin-alpha-1`, `/coupons/ignite-peptides`, `/supplements/tongkat-ali`); **~June 14 — Batch A/B recheck** — [Unchanged — see v2 §3.]

---

## 4) Metrics log
[v2 table carries forward. No new GSC export this session — next pull = the 28-day Bucket-A candidate hunt.]

---

## 🔗 Cross-references
- **PP_MASTER (+ addendum v2)** · **PP_X_POSTS v27** · **WL_MASTER v2.0** · **SCS_MP v6.10**
- **v20 / v19** — settled findings, submission workflow, escalation checklist (carry forward).

---

## 📅 Changelog
**v3 (June 3, 2026):** `316de00` CINC-verified live (flag CLOSED) + TRANSCEND-T2D-1 meta flag raised. Shipped Peptides.gg vendor + coupon page (`f2457ce`); `/coupons` date → June + Glacier/EZ → US Vendors; `/best-peptide-vendors` trimmed to six (`854e1ea`) + `dateModified` patch. Queued the bioregulators category+hub plan and the deep-research pillar-cluster option. Added the new-affiliate-program research (Tier 1–4; Mark checking). Indexing: Batch C 5 landed June 3, 2 leftovers + `/coupons/peptides-gg` queued June 4, ~2-wk indexed-or-not recheck added.

---

*PP SEO master tracker. NEXT: (a) confirm TRANSCEND-T2D-1 trial name + fix if wrong; (b) 28-day GSC Bucket-A pull; (c) June-4 indexing (2 leftovers + /coupons/peptides-gg); (d) affiliate-program checks (Core/Biotech/Eternal + Tier-1 list); (e) bioregulators hub build after Peptides.gg settles.*
