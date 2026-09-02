"""Manual mg map for size-less SKUs (Rule-4 no-parseable-size drops).

SCAFFOLD ONLY — NOT yet consumed by any adapter. Mark fills each blank mg by READING the
vendor's product page (never a scrape: the page's mg often belongs to a related-products grid,
as the AMP/Selank check proved). Same shape + discipline as CODED_DECODE and MANUAL_EXCLUDE:
{vendor_slug: {"SKU name (as the pull sees it)": mg}}. mg is None until verified; leave None to
keep a SKU dropped. Ordered by IMPACT (drop count), not alphabetically. A "# profile" marker flags
SKUs that back a live /peptides page — those are where the missing row costs a live page.

Recovery is NOT built: nothing reads this yet. When it is wired, a filled mg re-includes the SKU
through the normal pricing + plausibility path; the value is trusted exactly like a decoder size.
"""

SIZE_OVERRIDE = {
    # treasure-coast-peptides — 7 size-less (⚠ HIGH)
    "treasure-coast-peptides": {
        "CJC-1295": None,  # profile
        "PT-141": None,  # profile
        "Pinealon": None,  # profile
        "NAD+": None,  # profile
        "Melanotan II": None,  # profile
        "Kisspeptin-10": None,  # profile
        "Ipamorelin": None,  # profile
    },
    # amp-peptides — 6 size-less (⚠ HIGH)
    "amp-peptides": {
        "Glutathione": None,  # profile
        "Melanotan II": None,  # profile
        "IGF-1 LR3": None,  # profile
        "Epitalon": None,  # profile
        "Selank": None,  # profile
        "Semax": None,  # profile
    },
    # midwest-peptide — 5 size-less (⚠ HIGH)
    "midwest-peptide": {
        "AOD-9604": None,  # profile
        "DSIP": None,  # profile
        "Tirzepatide (listed as GLP-2 TZ)": None,  # profile
        "KPV": None,  # profile
        "PT-141": None,  # profile
    },
    # modern-aminos — 3 size-less
    "modern-aminos": {
        "SLU-PP-915 [backlog]": None,  # no profile (backlog/hub)
        "Orforglipron [backlog]": None,  # no profile (backlog/hub)
        "NAD+": None,  # profile
    },
    # 99-purity-peptides — 3 size-less
    "99-purity-peptides": {
        "NAD+": None,  # profile
        "LL-37": None,  # profile
        "IGF-1 LR3": None,  # profile
    },
    # biolongevity-labs — 2 size-less
    "biolongevity-labs": {
        "Cell Factors [backlog]": None,  # no profile (backlog/hub)
        "Klotho [backlog]": None,  # no profile (backlog/hub)
    },
    # glacier-aminos — 2 size-less
    "glacier-aminos": {
        "GHK-Cu": None,  # profile
        "SNAP-8 [backlog]": None,  # no profile (backlog/hub)
    },
    # mile-high-compounds — 2 size-less
    "mile-high-compounds": {
        "Tesofensine [backlog]": None,  # no profile (backlog/hub)
        "SLU-PP-332 [backlog]": None,  # no profile (backlog/hub)
    },
    # vital-core-research — 2 size-less
    "vital-core-research": {
        "MOTS-C": None,  # profile
        "PT-141": None,  # profile
    },
    # integrative-peptides — 1 size-less
    "integrative-peptides": {
        "Thymogen": None,  # profile
    },
    # synthesis-peptides — 1 size-less
    "synthesis-peptides": {
        "GHK-Cu": None,  # profile
    },
    # biopure-peptides — 1 size-less
    "biopure-peptides": {
        "Kisspeptin-10": None,  # profile
    },
    # iron-peptides — 4 size-less. UNUSUALLY, three of the four are RECOVERABLE without opening a
    # product page: IRON encodes the vial size in its own SKU string, which the Store API returns.
    # That is a vendor-authored field, not a scrape of a related-products grid (the AMP/Selank
    # failure mode this file warns about), so the mg below are filled rather than left None.
    #   Thymosin Alpha 1  VIAL-THYMALPHA1-10MG   -> 10
    #   Thymalin          VIAL-THYMALIN-10MG     -> 10
    #   Kisspeptin-10     VIAL-KISSPEPTIN-10MG   -> 10
    # Dihexa is deliberately absent: its SKU is CAPS-DIHEXA-10MG-60 — a 60-count CAPSULE pack, an
    # oral form that is out of PP scope regardless of size, so it is correctly excluded, not missing.
    # ⚠️ These three stay OUT of the grid today: nothing reads this file yet (see the header).
    "iron-peptides": {
        "Thymosin Alpha 1": 10,   # profile — from SKU VIAL-THYMALPHA1-10MG
        "Thymalin [backlog]": 10, # no profile (backlog) — from SKU VIAL-THYMALIN-10MG
        "Kisspeptin-10": 10,      # profile — from SKU VIAL-KISSPEPTIN-10MG
    },
    # real-peptides — 1 size-less
    "real-peptides": {
        "Mazdutide [backlog]": None,  # no profile (backlog/hub)
    },
    # improved-peptides — 1 size-less
    "improved-peptides": {
        "Tirzepatide (listed as GLP-2T)": None,  # profile
    },
}
