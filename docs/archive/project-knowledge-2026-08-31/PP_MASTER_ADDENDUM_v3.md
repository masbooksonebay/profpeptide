# PP Master Addendum — v3

**Status:** ACTIVE addendum to PP_MASTER
**Version:** v3 (June 4, 2026) — locks the vendor coupon-page content standard
**Supersedes:** nothing; extends Addendum v2 (all v2 content carries forward unchanged)

---

## LOCKED: vendor `/coupons/[slug]` detail-page bio format

Established via the **Amino Club** page (commit `c5363df` — categorized `<dl>` list; refinements followed). **Apply this standard to ALL vendor detail pages going forward. Spartan is the next page to standardize.**

The bio block on each vendor detail page has three parts:
1. **Short prose intro** (1–2 sentences).
2. **Categorized `<dl>` list** — each row = a category label + the vendor's carried peptides, each peptide linked to its live `/peptides/[slug]` profile.
3. **Two testing/COA prose paragraphs** — COA-accurate and **lab-agnostic** (do not name a testing lab unless it's verified for that vendor).

### LOCKED rules for the categorized list
- **Categories AND per-category peptide assignments MUST mirror PP's `/peptides` library taxonomy EXACTLY** — use PP's exact category titles and PP's display order. **Ignore the vendor's own site categories** for grouping.
- **Only link compounds that have a LIVE `/peptides/[slug]` profile** (no 404s).
- **List blends by their own blend name** (GH Stack, Wolverine Stack, GLOW, KLOW), linked to the blend's own profile. **Never join two peptide names with a slash or dash** (internal hyphens within a single name like BPC-157 are fine).
- **Place stacks inline within their category**, right after their component peptides. Multi-category blends (GLOW / KLOW) file under **Skin Health & Anti-Aging** per the library — **no separate "Blends" row.**
- Internal links: Next `<Link>`, cyan `text-[#0891b2] hover:underline`.

## PP `/peptides` library taxonomy (authoritative — categories in display order)

1. **Metabolic & Weight Loss** — aod-9604, cagrilintide, cagrisema, nad-mots-c-5-amino-1mq, mots-c, retatrutide, semaglutide, semaglutide-bpc-157, tirzepatide, tirzepatide-bpc-157
2. **Recovery & Tissue Repair** — bpc-157, tb-500, wolverine-stack
3. **Performance & Energy** — igf-1-lr3, follistatin
4. **Growth Hormone** — cjc-1295, cjc-1295-dac-ipamorelin, gh-stack (= CJC-1295 + Ipamorelin), ipamorelin, mk-677, mk-677-ipamorelin, sermorelin, sermorelin-ipamorelin, tesamorelin, tesamorelin-ipamorelin
5. **Cognitive & Nootropic** — selank, semax, semax-selank
6. **Skin Health & Anti-Aging** — ghk-cu, glow, klow, melanotan-ii
7. **Gut Health & Immunity** — kpv, kpv-bpc-157, thymosin-alpha-1
8. **Sleep & Recovery** — dsip
9. **Longevity** — epitalon, nad-plus
10. **Bioregulators** (NEW June 4) — pinealon (+ thymogen on its ship; Cardiogen/Cortagen as built)
11. **Sexual Health** — pt-141, pt-141-oxytocin

Non-obvious slugs: NAD+ → `nad-plus`; Epithalon → `epitalon`; CJC-1295 + Ipamorelin → `gh-stack`.

## vendors.ts schema reminder
`name / code / discount / region / url / detailPage` — **NO description field.** All vendor bio/testing copy lives on the `/coupons/[slug]` page (`page.tsx`, mirrored by `layout.tsx`, `opengraph-image.tsx`, `twitter-image.tsx`). `vendors.ts` is the canonical source consumed by `VendorHighlightBlock` (single-edit propagation to all peptide profile pages).

---

**Cross-ref:** PP_MASTER · PP_BIOREGULATORS v1 · PP_SEO v4 · PP_X_POSTS v27.
