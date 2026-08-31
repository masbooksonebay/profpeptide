# Vendor placement matrix

> ⚠️ **GENERATED — DO NOT EDIT BY HAND.** Regenerate with `node scripts/gen-vendor-placement.mjs`.
> Source of truth is the price data (verified stock), never a vendor's marketing pages.

A vendor card may be placed on a profile **only where that vendor has a price row for the
compound**. A card for a vendor that does not stock the peptide is a broken click, so this
matrix — not editorial preference — decides placement.

Priority order: Capstone Peptides → Amino Club → Peptide Partners → Glacier Aminos

## Priority-card count per profile

| priority cards | profiles |
| --- | --- |
| 0 | 26 |
| 1 | 6 |
| 2 | 5 |
| 3 | 11 |
| 4 | 16 |
| **total** | **64** |

## Priority-vendor coverage

| vendor | profiles stocked |
| --- | --- |
| Capstone Peptides | 19 |
| Amino Club | 33 |
| Peptide Partners | 26 |
| Glacier Aminos | 35 |

## ⚠️ Profiles the price pipeline does not track under their own slug

12 of 64. These hold no price row under the profile slug, so the
vendor block falls back to the hand-curated `highlights` list on the profile — which is NOT
stock-verified. Absence here means *we hold no data under this name*, not that nobody stocks it:
gh-stack is sold widely, but its rows sit under the blend slug `cjc-1295-no-dac-ipamorelin`
and nothing maps the two.

| profile |
| --- |
| aod-9604-mots-c |
| cjc-1295 |
| cjc-1295-dac-ipamorelin |
| gh-stack |
| kpv-bpc-157 |
| mk-677-ipamorelin |
| nad-mots-c-5-amino-1mq |
| pt-141-oxytocin |
| semaglutide-bpc-157 |
| semax-selank |
| sermorelin-ipamorelin |
| tirzepatide-bpc-157 |

## Profiles with ZERO priority-vendor coverage (but tracked)

14 of 64 profiles. These render no priority card at all.

| profile | listed vendors stocking it |
| --- | --- |
| adipotide | peptide-giants, peptides-gg |
| cardiogen | biolongevity-labs, modern-aminos, peptides-gg, peptidology |
| cortagen | biolongevity-labs, peptides-gg, peptidology |
| follistatin | biolongevity-labs, modern-aminos, peptidology |
| ghrp-2 | oasis-labs, peptides-gg, peptidology, vital-core-research |
| ghrp-6 | oasis-labs, peptides-gg, treasure-coast-peptides, vital-core-research |
| hexarelin | modern-aminos, peptide-giants, peptides-gg, vital-core-research |
| igf-1-des | _none_ |
| mazdutide | modern-aminos, peptides-gg, peptidology, vital-core-research |
| mgf | _none_ |
| mk-677 | modern-aminos, vital-core-research |
| pda | ameano-peptides, ez-peptides |
| survodutide | ameano-peptides, ez-peptides, peptides-gg, peptidology |
| thymogen | biolongevity-labs, modern-aminos, peptides-gg |

## Under-distributed vendors — earned-placement candidates

Vendors stocking compounds **no priority vendor carries**. A card for one of these on such a
profile is a link that varies by page for a real reason.

| vendor | compounds only it (and other non-priority vendors) cover |
| --- | --- |
| Peptides.gg (9) | adipotide, cardiogen, cortagen, ghrp-2, ghrp-6, hexarelin, mazdutide, survodutide, thymogen |
| Modern Aminos (6) | cardiogen, follistatin, hexarelin, mazdutide, mk-677, thymogen |
| Peptidology (6) | cardiogen, cortagen, follistatin, ghrp-2, mazdutide, survodutide |
| Vital Core Research (5) | ghrp-2, ghrp-6, hexarelin, mazdutide, mk-677 |
| Biolongevity Labs (4) | cardiogen, cortagen, follistatin, thymogen |
| Peptide Giants (2) | adipotide, hexarelin |
| Oasis Labs (2) | ghrp-2, ghrp-6 |
| Ameano Peptides (2) | pda, survodutide |
| EZ Peptides (2) | pda, survodutide |
| Treasure Coast (1) | ghrp-6 |

## Full matrix

| profile | priority cards (in order) | other listed vendors | total |
| --- | --- | --- | --- |
| 5-amino-1mq | amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, ignite-peptides, midwest-peptide, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 18 |
| adamax | glacier-aminos | aero-peptides, ameano-peptides, ez-peptides, peptides-gg, treasure-coast-peptides | 6 |
| adipotide | — | peptide-giants, peptides-gg | 2 |
| aod-9604 | amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, ez-peptides, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 15 |
| aod-9604-mots-c | — | — | 0 |
| bpc-157 | capstone-peptides, amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, ignite-peptides, midwest-peptide, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 20 |
| cagrilintide | amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, midwest-peptide, modern-aminos, oasis-labs, peptide-giants, peptides-gg, royal-peptides, treasure-coast-peptides, vital-core-research | 15 |
| cagrisema | capstone-peptides | — | 1 |
| cardiogen | — | biolongevity-labs, modern-aminos, peptides-gg, peptidology | 4 |
| cibinetide | amino-club, glacier-aminos | ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, modern-aminos, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides | 12 |
| cjc-1295 | — | — | 0 |
| cjc-1295-dac-ipamorelin | — | — | 0 |
| cortagen | — | biolongevity-labs, peptides-gg, peptidology | 3 |
| dsip | amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, ignite-peptides, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 17 |
| epitalon | capstone-peptides, amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 17 |
| follistatin | — | biolongevity-labs, modern-aminos, peptidology | 3 |
| gh-stack | — | — | 0 |
| ghk-cu | amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biocollex, biolongevity-labs, ez-peptides, ignite-peptides, midwest-peptide, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 20 |
| ghrp-2 | — | oasis-labs, peptides-gg, peptidology, vital-core-research | 4 |
| ghrp-6 | — | oasis-labs, peptides-gg, treasure-coast-peptides, vital-core-research | 4 |
| glow | capstone-peptides, amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, ignite-peptides, midwest-peptide, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides | 16 |
| glutathione | amino-club, glacier-aminos | aero-peptides, ignite-peptides, midwest-peptide, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides | 13 |
| hexarelin | — | modern-aminos, peptide-giants, peptides-gg, vital-core-research | 4 |
| igf-1-des | — | — | 0 |
| igf-1-lr3 | amino-club, glacier-aminos | aero-peptides, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 12 |
| ipamorelin | capstone-peptides, amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, ignite-peptides, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, vital-core-research | 17 |
| kisspeptin | amino-club, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, modern-aminos, oasis-labs, peptide-giants, peptides-gg, peptidology | 12 |
| klow | amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, biocollex, biolongevity-labs, ez-peptides, midwest-peptide, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, treasure-coast-peptides | 15 |
| kpv | amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, ignite-peptides, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides | 17 |
| kpv-bpc-157 | — | — | 0 |
| ll-37 | amino-club | ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, modern-aminos, oasis-labs, peptide-giants, peptides-gg, peptidology | 10 |
| mazdutide | — | modern-aminos, peptides-gg, peptidology, vital-core-research | 4 |
| melanotan-i | amino-club, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, midwest-peptide, peptide-giants, peptides-gg, treasure-coast-peptides | 11 |
| melanotan-ii | capstone-peptides, amino-club, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, ez-peptides, ignite-peptides, midwest-peptide, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology | 15 |
| mgf | — | — | 0 |
| mk-677 | — | modern-aminos, vital-core-research | 2 |
| mk-677-ipamorelin | — | — | 0 |
| mots-c | capstone-peptides, amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biocollex, biolongevity-labs, ez-peptides, ignite-peptides, midwest-peptide, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides | 20 |
| nad-mots-c-5-amino-1mq | — | — | 0 |
| nad-plus | capstone-peptides, amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biocollex, biolongevity-labs, ez-peptides, ignite-peptides, midwest-peptide, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, vital-core-research | 20 |
| oxytocin | glacier-aminos | ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, modern-aminos, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides | 11 |
| pda | — | ameano-peptides, ez-peptides | 2 |
| pinealon | amino-club, peptide-partners, glacier-aminos | ascension-peptides, biolongevity-labs, modern-aminos, peptides-gg | 7 |
| pt-141 | capstone-peptides, amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, biocollex, biolongevity-labs, ez-peptides, ignite-peptides, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides | 17 |
| pt-141-oxytocin | — | — | 0 |
| retatrutide | capstone-peptides, amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biocollex, ez-peptides, midwest-peptide, modern-aminos, nura-peptide, oasis-labs, peptide-giants, royal-peptides | 15 |
| selank | capstone-peptides, amino-club, glacier-aminos | ascension-peptides, biocollex, ignite-peptides, midwest-peptide, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 15 |
| semaglutide | capstone-peptides, amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, ez-peptides, nura-peptide, royal-peptides | 10 |
| semaglutide-bpc-157 | — | — | 0 |
| semax | capstone-peptides, amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biocollex, biolongevity-labs, ez-peptides, ignite-peptides, midwest-peptide, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 21 |
| semax-selank | — | — | 0 |
| sermorelin | capstone-peptides, amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, ez-peptides, ignite-peptides, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 17 |
| sermorelin-ipamorelin | — | — | 0 |
| ss-31 | peptide-partners | aero-peptides, ascension-peptides, biocollex, midwest-peptide, nura-peptide, peptide-giants, peptides-gg, royal-peptides | 9 |
| survodutide | — | ameano-peptides, ez-peptides, peptides-gg, peptidology | 4 |
| tb-500 | capstone-peptides, amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, ignite-peptides, midwest-peptide, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 20 |
| tesamorelin | capstone-peptides, amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biocollex, biolongevity-labs, ez-peptides, ignite-peptides, midwest-peptide, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 21 |
| tesamorelin-ipamorelin | glacier-aminos | ameano-peptides, ez-peptides, midwest-peptide, modern-aminos, nura-peptide, peptides-gg, peptidology, treasure-coast-peptides | 9 |
| thymogen | — | biolongevity-labs, modern-aminos, peptides-gg | 3 |
| thymosin-alpha-1 | capstone-peptides, amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 17 |
| tirzepatide | capstone-peptides, amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biocollex, ez-peptides, nura-peptide, royal-peptides | 11 |
| tirzepatide-bpc-157 | — | — | 0 |
| vip | amino-club, peptide-partners, glacier-aminos | ameano-peptides, ascension-peptides, biolongevity-labs, ez-peptides, midwest-peptide, peptide-giants, peptides-gg, treasure-coast-peptides | 11 |
| wolverine-stack | capstone-peptides, amino-club, peptide-partners, glacier-aminos | aero-peptides, ameano-peptides, ascension-peptides, biocollex, biolongevity-labs, ez-peptides, ignite-peptides, modern-aminos, nura-peptide, oasis-labs, peptide-giants, peptides-gg, peptidology, royal-peptides, treasure-coast-peptides, vital-core-research | 20 |
