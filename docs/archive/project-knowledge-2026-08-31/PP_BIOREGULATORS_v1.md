# PP Bioregulators — Hub-and-Spoke Content Cluster

**Status:** ACTIVE — new dedicated workstream doc
**Version:** v1 (June 4, 2026)
**Cross-referenced in:** PP_SEO v4, PP_MASTER, PP_X_POSTS v27

---

## Decision (LOCKED)

Build the Khavinson bioregulators as a **hub-and-spoke cluster, NOT 17 standalone profiles.**
Rationale: ~80% of a 17-profile set would be near-duplicate Khavinson boilerplate (thin/duplicate-content SEO risk), the literature is thin for most, and long-tail demand is negligible. Peptides.gg's deep Khavinson line is the demand signal.

- **ONE pillar guide page**, proposed slug `/bioregulators` (CC to confirm the site's guide-route convention) — intro + bioregulation-hypothesis mechanism (honest framing) + synthetic-vs-extract distinction + a fact-checked line-up table (sequence · organ · studied-for · link-to-spoke, each row verified at build) + honest evidence/limitations + funnel to peptides.gg; FAQ; Article + FAQ + BreadcrumbList JSON-LD.
- **Standalone v4.4+ spoke profiles ONLY** for the few with real demand + literature.
- **New "Bioregulators" category** in the `/peptides` library for the spokes. **Epitalon stays under Longevity for now** (re-file during its own v4.4+ refresh). Pillar links all spokes.
- **Build order:** spokes first, one at a time (incremental spot-check) → pillar → optional Epitalon refresh.

## Process discipline (LOCKED)

- **No-fabrication packet per spoke BEFORE the CC build:** verified sequence, molecular profile, regulatory status, and a citation set with real/confirmed identifiers. **Re-verify fresh each spoke — never build from summary/compaction memory.** (Post-compaction, the summary claimed all four spokes were "citation-locked"; only Pinealon's packet had actually been built. Thymogen was re-verified from primary sources before its build.)
- CC builds mirror `/peptides/pinealon` (which mirrors tirzepatide/epitalon) — 15-section v4.4+.
- **VendorHighlightBlock OMITTED** until peptides.gg is wired into peptide-vendors.json — use the locked inline `/coupons` link + "Start with the basics →" + a TODO comment.
- Related links only to **live** profiles; TODO to add sibling bioregulators + a Comparisons block as they ship.
- Git: stage only the spoke page + library page; never `git add -A`; `public/sitemap-0.xml` stays parked; no Vercel MCP; verify with `next dev` (NOT `next build`).

## Build status

| Spoke | State | Commit(s) |
|---|---|---|
| **Pinealon** | SHIPPED + live | `1e2a08d` (profile + new Bioregulators category, count→41); `7ccfe8a` (category icon `beaker-outline`) |
| **Thymogen** | Verified packet locked; CC build prompt issued | commit pending (count→42 on completion) |
| **Cardiogen** | Sequence identified; citations NOT yet verified — fresh verification required | — |
| **Cortagen** | Sequence identified; citations NOT yet verified — fresh verification required | — |
| **`/bioregulators` pillar** | Queued — after the 4 spokes | — |

## Verified spoke packets

### Pinealon (shipped)
- **EDR** (Glu-Asp-Arg) · MW 418.4 · CAS 175175-23-2 · Cortexin-derived · RUO.
- Citations delivered in the shipped profile: Fedoreyeva 2011 (PMID 22117547); Khavinson 2011 *Rejuvenation Res*; Khavinson 2012 (PMID 23199282); Linkova 2016 (PMID 27262825); Mendzheritskiĭ 2014 *Adv Gerontol*; *Molecules* 2020 (OA); *Pharmaceuticals* 2021;14(6):515 (OA); Kraskovskaya/Linkova 2017 *Bull Exp Biol Med*.

### Thymogen (verified June 4 — build issued)
- **L-Glu-L-Trp (EW)** · C16H19N3O5 · 333.34 g/mol (free acid) · CAS 38101-59-6 (free acid; registered drug uses the monosodium salt, CAS 122933-59-9).
- AKA **Oglufanide** (INN Oglufanidum), **IM-862**, Thymagen. Principal active component of Thymalin, isolated via RP-HPLC. RUO (US); registered RU medicine in three forms (IM 100 µg/mL, nasal spray 25 µg/dose, 0.05% cream).
- Mechanism (verified): T-cell differentiation (pre-T → mature), normalizes CD4/CD8 ratio, raises T-cell cAMP, enhances neutrophil chemotaxis/phagocytosis; as IM-862, VEGF-inhibiting/antiangiogenic. Reciprocal chirality: D-Glu-D-Trp enantiomer = Thymodepressin (immunosuppressive).
- **Verified citations (PMIDs confirmed June 4 from primary sources):**
  - Smith DL, et al. *Int J Cancer.* 2003;106(4):528-533. **PMID 12845648** — NK/perforin-dependent antitumor; preclinical.
  - Tulpule A, et al. *J Clin Oncol.* 2000. **PMID 10673512** — open-label Phase I/II; ~36% response in AIDS-KS; well tolerated.
  - Noy A, et al. *J Clin Oncol.* 2005;23(5):990-998. **PMID 15598977** — randomized double-blind placebo-controlled Phase III; **NOT superior to placebo** (negative); HAART confounded earlier estimates.
  - Deplanque G, et al. *Br J Cancer.* 2004. **PMID 15354209** — Phase II metastatic RCC; well tolerated.
- Honest-evidence arc for limitations: strong preclinical signal → promising open-label human data → **negative controlled Phase III.**

### Cardiogen / Cortagen — packets NOT yet built
- **Cardiogen:** Ala-Glu-Asp-Arg (AEDR), ~489.5 Da. Citations pending fresh verification.
- **Cortagen:** Ala-Glu-Asp-Pro (**AEDP**). Citations pending fresh verification. *Note: some sources mislabel Cortagen as "AEDG" — that is Epitalon's sequence; do not conflate.*

## Dependency — peptides.gg wiring
Spokes and pillar funnel to peptides.gg, which **is** carried (code **PROF15 / 15%**, slug `/coupons/peptides-gg`, OG card wired). The VendorHighlightBlock is not yet added to the spokes. Once a spoke exists: add peptides.gg to peptide-vendors.json, wire the block into the spokes/pillar, and refresh `/coupons/peptides-gg` into the categorized-list vendor-page standard (see PP_MASTER Addendum v3).
