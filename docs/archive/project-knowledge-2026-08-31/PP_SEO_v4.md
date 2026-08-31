# PP SEO — v4

**Status:** ACTIVE
**Version:** v4 (June 4, 2026) — affiliate outreach status update + bioregulator cluster cross-ref
**Supersedes:** v3. All v3 sections carry forward UNCHANGED except the affiliate-outreach block and the bioregulator note below.

---

## Affiliate vendor outreach — status (updated June 4)

### Signed / carried
- **Peptides.gg** — SIGNED. `PROF15` / 15%. `/coupons/peptides-gg` (OG card wired).
- **Amino Club** — SIGNED. `PROFPEPTIDE` / 20% (entire order). `/coupons/amino-club` — categorized-list bio (commit `c5363df` + refinements). Tested by ILS Laboratories (ISO/IEC 17025).

### Tier-1 affiliate programs — APPLIED June 4 (awaiting approval)
- **Spartan Peptides** (PostAffiliatePro program)
- **Onyx Biolabs** (self-serve; code TBD — register `PROFPEPTIDE` or `PROF10`)
- **Midwest Peptide** (self-serve; code chosen **`PROF10`**; payout Zelle; 10% customer discount)
- **BioSynth**

→ **On each approval:** confirm exact code + discount + payout, then build `/coupons/[slug]` in the categorized-list vendor-page standard (PP_MASTER Addendum v3). Onyx ranked #1 of the shortlist (cleanest, code-based attribution → drops into PP's existing engine, US-based, stocks retatrutide).

### To review next session (Mark — "tomorrow")
- **Tier-2:** Dynamic, BioPure, Peptides BioTech, PRG (EU), my-peptides (£15 UK)
- **Research-from-scratch (verify US + COA first):** Amino Asylum, Sports Tech Labs, Paradigm, Modern Aminos, Polaris, Behemoth, Swole AF, Peptide Pros
- From the earlier 5-name shortlist, **Synthesis Peptides** and **Purity Peptides** still need a US-location + COA check before applying (Purity is a `.is` TLD — confirm jurisdiction).
- Benchmark: ~10% standard commission / ~20% best.

---

## Bioregulator content cluster
Now tracked in its own doc — **PP_BIOREGULATORS v1.** Summary: hub-and-spoke locked (one `/bioregulators` pillar + a few v4.4+ spokes + a new "Bioregulators" library category; Epitalon stays under Longevity for now). **Pinealon shipped** (`1e2a08d` + icon `7ccfe8a`); **Thymogen** build prompt issued (verified packet, 4 confirmed PMIDs); Cardiogen / Cortagen + the pillar queued (each needs fresh citation verification before build).

---

## Other buckets (B / C) and Indexing
[Unchanged — see v3 §2–§3.] When `/peptides/thymogen` lands, add it to the GSC indexing queue (≤5/day; never hand-commit `sitemap-0.xml` — next-sitemap regenerates on deploy).

---

**Cross-ref:** PP_BIOREGULATORS v1 · PP_MASTER (+ Addendum v3) · PP_X_POSTS v27 · WL_MASTER v2.0 · SCS_MP v6.x.
