"""Shared normalizer — the rules that apply to every vendor, regardless of platform.

Encodes the hard-won conventions from the pilot + batches 1-3:
  - unit-aware $/mg (mcg -> mg, strip commas from sizes)
  - blend detection keyed on components with KLOW > GLOW > Wolverine precedence
  - published blend ratios captured from the product name
  - scope filter (master doc rule 7): peptides / peptide-adjacent only
  - honest "—" when a value can't be computed; never fabricate.
"""
import re

# ---- size / $-per-mg -------------------------------------------------------

def mg_value(s):
    """Numeric mg from a size string, unit-aware. '500mcg' -> 0.5, '1,000mg' -> 1000."""
    if not s:
        return None
    m = re.search(r'(\d+(?:\.\d+)?)\s*(mcg|mg)\b', str(s).lower().replace(',', ''))
    if not m:
        return None
    v = float(m.group(1))
    return v / 1000 if m.group(2) == 'mcg' else v


def size_label(s):
    """Canonical size label ('10mg', '500mcg', '30ml') or '—' if none present."""
    if not s:
        return '—'
    m = re.search(r'(\d+(?:\.\d+)?)\s*(mcg|mg|ml|iu)', str(s).lower().replace(',', ''))
    return (m.group(1) + m.group(2)) if m else '—'


def per_mg(base, mg):
    """$/mg, unit-aware. '—' when base or mg is missing (never guess)."""
    return f"${base / mg:,.2f}" if (base and mg) else '—'


# ---- display names ---------------------------------------------------------

DISPLAY = {
    '5-amino-1mq': '5-Amino-1MQ', 'aod-9604': 'AOD-9604', 'bpc-157': 'BPC-157',
    'cagrilintide': 'Cagrilintide', 'cardiogen': 'Cardiogen', 'cibinetide': 'Cibinetide',
    'cjc-1295': 'CJC-1295', 'cortagen': 'Cortagen', 'dsip': 'DSIP', 'epitalon': 'Epitalon',
    'follistatin': 'Follistatin', 'ghk-cu': 'GHK-Cu', 'ghrp-2': 'GHRP-2', 'ghrp-6': 'GHRP-6',
    'glutathione': 'Glutathione', 'hexarelin': 'Hexarelin', 'igf-1-des': 'IGF-1 DES',
    'igf-1-lr3': 'IGF-1 LR3', 'ipamorelin': 'Ipamorelin', 'kisspeptin': 'Kisspeptin-10',
    'kpv': 'KPV', 'll-37': 'LL-37', 'melanotan-i': 'Melanotan I', 'melanotan-ii': 'Melanotan II',
    'mgf': 'MGF', 'mk-677': 'MK-677', 'mots-c': 'MOTS-C', 'nad-plus': 'NAD+', 'oxytocin': 'Oxytocin',
    'pinealon': 'Pinealon', 'pt-141': 'PT-141', 'retatrutide': 'Retatrutide', 'selank': 'Selank',
    'semaglutide': 'Semaglutide', 'semax': 'Semax', 'sermorelin': 'Sermorelin', 'ss-31': 'SS-31',
    'tb-500': 'TB-500', 'tesamorelin': 'Tesamorelin', 'thymogen': 'Thymogen',
    'thymosin-alpha-1': 'Thymosin Alpha-1', 'tirzepatide': 'Tirzepatide', 'vip': 'VIP',
    'adamax': 'Adamax', 'adipotide': 'Adipotide', 'pda': 'PDA', 'snap-8': 'SNAP-8',
    'foxo4-dri': 'FOXO4-DRI', 'klotho': 'Klotho', 'humanin': 'Humanin', 'mazdutide': 'Mazdutide',
    'survodutide': 'Survodutide', 'tesofensine': 'Tesofensine', 'dihexa': 'Dihexa',
    'thymalin': 'Thymalin', 'slu-pp-332': 'SLU-PP-332', 'hgh-fragment-176-191': 'HGH Fragment 176-191',
    'cell-factors': 'Cell Factors', 'slimassist': 'SlimAssist', 'pnc-27': 'PNC-27',
    'bronchogen': 'Bronchogen', 'cartalax': 'Cartalax', 'chonluten': 'Chonluten', 'livagen': 'Livagen',
    'ovagen': 'Ovagen', 'pancragen': 'Pancragen', 'prostamax': 'Prostamax', 'testagen': 'Testagen',
    'vesilute': 'Vesilute', 'vesugen': 'Vesugen', 'vilon': 'Vilon', 'thymulin': 'Thymulin',
}


def display_of(slug, backlog=False):
    d = DISPLAY.get(slug) or slug.replace('-', ' ').title()
    return d + (' [backlog]' if backlog else '')


# ---- blends ----------------------------------------------------------------
# Detection is keyed on the COMPONENTS present in the name, in priority order
# KLOW (4-way) > GLOW (3-way) > Wolverine (2-way) — so a KLOW product isn't
# mis-tagged Wolverine just because it also contains BPC-157 + TB-500.

BLEND_COMPONENTS = {
    'glow': 'GHK-Cu/BPC-157/TB-500',
    'klow': 'GHK-Cu/BPC-157/TB-500/KPV',
    'wolverine-stack': 'BPC-157/TB-500',
    'cjc-1295-dac-ipamorelin': 'CJC-1295/Ipamorelin',
    'tesamorelin-ipamorelin': 'Tesamorelin/Ipamorelin',
    'nad-mots-c-5-amino-1mq': 'NAD+/MOTS-C/5-Amino-1MQ',
}
BLEND_DISPLAY = {
    'glow': 'GLOW', 'klow': 'KLOW', 'wolverine-stack': 'Wolverine (BPC-157/TB-500)',
    'cjc-1295-dac-ipamorelin': 'CJC-1295/Ipamorelin',
    'tesamorelin-ipamorelin': 'Tesamorelin/Ipamorelin',
    'nad-mots-c-5-amino-1mq': 'NAD+/MOTS-C/5-Amino-1MQ',
}


def blend_of(name):
    """Return (slug, components, ratio, total_mg) if `name` is a recognized blend, else None.

    Precedence matters: check 4-component KLOW before 3-component GLOW before
    2-component Wolverine. Ratio is captured only when the name publishes it
    (e.g. '5mg/5mg' or '50/10/10'); otherwise 'not published'.
    """
    n = name.lower()
    has = lambda *ks: all(k in n for k in ks)
    tb = ('tb' in n or 'tb-500' in n or 'tb500' in n)
    slug = None
    if has('kpv') and has('ghk') and has('bpc') and tb:
        slug = 'klow'
    elif has('ghk') and has('bpc') and tb:
        slug = 'glow'
    elif ('cjc' in n) and ('ipa' in n or 'ipamorelin' in n):
        slug = 'cjc-1295-dac-ipamorelin'
    elif ('tesa' in n) and ('ipa' in n or 'ipamorelin' in n):
        slug = 'tesamorelin-ipamorelin'
    elif ('nad' in n) and ('mots' in n):
        slug = 'nad-mots-c-5-amino-1mq'
    elif ('bpc' in n) and tb:
        slug = 'wolverine-stack'
    if not slug:
        return None
    comps = re.findall(r'(\d+(?:\.\d+)?)\s*mg', name, re.I)
    if len(comps) >= 2:
        ratio = '/'.join(f'{float(c):g}' for c in comps) + ' (published)'
        total = sum(float(c) for c in comps)
    else:
        m = re.search(r'(\d+(?:\.\d+)?)\s*mg', name, re.I)
        ratio, total = 'not published', (float(m.group(1)) if m else None)
    return slug, BLEND_COMPONENTS[slug], ratio, total


# ---- scope filter (master doc rule 7) --------------------------------------
# Peptides / peptide-adjacent research compounds only. Everything below is
# OUT of scope and excluded inline on the Excluded line.

_SUPPLY = re.compile(
    r'bac(teriostatic)?\s*water|reconstitution|acetic acid|sodium chloride|diluent|'
    r'syringe|needle|alcohol\s*(pad|swab|prep)|cold\s*pack|shipping|overnight|'
    r'peptide\s*case|gift\s*card|sample\s*pack|test\s*kit|glassware|\bmg\s*scale\b',
    re.I)
_ORAL = re.compile(r'\bcapsule|\btablet|sublingual|troche|lozenge|\boral\b', re.I)
_OUT_OF_SCOPE = re.compile(
    r'ligandrol|lgd-?4033|ostarine|mk-?2866|rad-?140|gw-?501516|cardarine|s-?23|s-?4|'
    r'yk-?11|sr-?9009|andarine|\bsarm\b|'
    r'tadalafil|sildenafil|vardenafil|clomiphene|tamoxifen|anastrozole|letrozole|'
    r'exemestane|nolvadex|clenbuterol|t3\b|t4\b|ketotifen|pramipexole|cabergoline|'
    r'finasteride|dutasteride|minoxidil|'
    r'methylene\s*blue|nmn|nad\s*booster|resveratrol|spermidine|berberine|nootropic\s*capsule|'
    r'noopept|salidroside|9-me-bc|'
    r'\bhcg\b|\bhmg\b|gonadorelin|triptorelin|ace-?031|myostatin|gdf-?8|'
    r'\bepo\b|erythropoietin|teriparatide|\bpth\b|larazotide|'
    r'serum|cream|moisturizer|cosmetic|ampoule.*cosmetic|ahk-cu|retinal|l-carnitine|lipo-c|'
    r'vitamin|bcaa|magnesium|hyaluronic|rutin',
    re.I)


def scope(name):
    """Classify a raw product name: 'peptide' (in scope) or an exclusion reason."""
    if _SUPPLY.search(name):
        return 'supply'
    if _ORAL.search(name):
        return 'oral/capsule'
    if _OUT_OF_SCOPE.search(name):
        return 'out-of-scope (SARMs/Rx/cosmetics)'
    return 'peptide'
