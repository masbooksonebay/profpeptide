# PP Vendor Coupon Pages — Cross-Link Rollout
**Status:** ACTIVE tracker
**Version:** v1 (June 14, 2026)
**Tracks:** rollout of the carried-peptides cross-link section across `/coupons/[vendor]` pages.
---
## What this tracks
The "Popular compounds by research area:" block on each vendor coupon page — research-area-grouped rows (Metabolic & Weight Loss, Recovery & Tissue Repair, Growth Hormone, Cognitive & Nootropic, Skin Health & Anti-Aging, etc.) listing the vendor's carried peptides as internal `<Link href="/peptides/SLUG">` links to profile pages. **Exemplar:** `/coupons/amino-club`.
**"Done" =** page contains the research-area `<dl>` block with internal `/peptides/` links; each linked peptide's first mention links to its profile (per the locked first-mention-linking rule); all links resolve to a real `src/app/peptides/SLUG/` profile (no broken links).
---
## Status — 5 done / 16 to do (21 total)
### Done (5)
| Vendor | Slug | # peptide links | Broken links |
|---|---|---|---|
| EZ Peptides | ez-peptides | 30 | none |
| Synthesis Peptides | synthesis-peptides | 27 | none |
| Amino Club | amino-club | 24 | none |
| Midwest Peptide | midwest-peptide | 20 | none |
| Spartan Peptides | spartan-peptides | 19 | none |
### To do (16)
| Vendor | Slug |
|---|---|
| Almighty Peptides | almighty-peptides |
| Ascension Peptides | ascension-peptides |
| Behemoth Labz | behemoth-labz |
| BioCollex | biocollex |
| Fusion Peptide | fusion-peptide |
| Glacier Aminos | glacier-aminos |
| Ignite Peptides | ignite-peptides |
| Integrative Peptides | integrative-peptides |
| Limitless Biotech | limitless-biotech |
| Oasis Labs | oasis-labs |
| Particle Peptides | particle-peptides |
| Peptide Partners | peptide-partners |
| Peptides.gg | peptides-gg |
| PureRawz | purerawz |
| Royal Peptides | royal-peptides |
| Vital Core Research | vital-core-research |
---
## Notes
- The 16 To-do pages are a clean backlog — none partial; they contain zero `/peptides/` cross-links currently.
- All 5 Done pages have zero broken internal links (every `/peptides/SLUG` target resolves to a real profile).
- Link universe: 49 peptide profile folders under `src/app/peptides/`.
---
## Audit metadata
- Source: CC read-only repo audit (no changes), 2026-06-14.
- Classification basis: presence of the research-area-grouped `<dl>` block with `/peptides/` Links (amino-club pattern). spartan-peptides + synthesis-peptides use slightly different intro wording but the same structure → counted Done.
- Enumeration excluded the `/coupons` hub page and the opengraph-image/twitter-image routes.
---
## Cross-references
- **PP_SEO** (internal linking is a ranking lever) · **PP_MASTER** · first-mention-linking rule (peptide-profile canonical spec §1.15)
---
(Backup source if needed: the same file is in my Google Drive as PP_VENDOR_PAGES_v1.md.)
