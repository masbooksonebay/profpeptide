"""Compound identification + per-vendor coded-name decoders.

TWO layers:
  1. match(name) -> generic alias/slug matcher (BPC-157, ARA-290 -> cibinetide, etc.)
  2. decode(vendor, name) -> per-vendor overrides for CODED product names.

CODED GLP NAMES — VERIFICATION STANDARD (non-negotiable)
--------------------------------------------------------
Many vendors relabel GLP-1 compounds (regulatory evasion) with codes like
GLP-3 RT, R-30, AX-RT, EZP-3P, GLA-3 RT, GLP3(R). A decode is only asserted
when identity is confirmed from EVIDENCE:
  - a COA stating the molecular weight (Reta ~4731 / Tirz ~4813 / Sema ~4114),
    molecular formula, CAS number, or the compound name in an identity field;
  - the compound name in the vendor's own product title/spec; or
  - a unique mechanistic spec (e.g. "39-aa TRIPLE agonist incl. glucagon" is
    uniquely Retatrutide; "39-aa DUAL agonist GIP/GLP-1" is uniquely Tirzepatide).
NEVER from the code/permalink convention alone. If it cannot be confirmed, the
row is written under the coded name with a "[coded, UNVERIFIED]" marker and NOT
asserted as a mapping. Each decoder entry below records how it was confirmed.
"""
import re

# PP profile slugs (the live /peptides/ profiles) + build backlog.
PP_SLUGS = set("""
5-amino-1mq adamax adipotide aod-9604 aod-9604-mots-c bpc-157 cagrilintide cagrisema
cardiogen cibinetide cjc-1295 cjc-1295-dac-ipamorelin cortagen dsip epitalon follistatin
gh-stack ghk-cu ghrp-2 ghrp-6 glow glutathione hexarelin igf-1-des igf-1-lr3 ipamorelin
kisspeptin klow kpv kpv-bpc-157 ll-37 melanotan-i melanotan-ii mgf mk-677 mk-677-ipamorelin
mots-c nad-mots-c-5-amino-1mq nad-plus oxytocin pda pinealon pt-141 pt-141-oxytocin
retatrutide selank semaglutide semaglutide-bpc-157 semax semax-selank sermorelin
sermorelin-ipamorelin ss-31 tb-500 tesamorelin tesamorelin-ipamorelin thymogen
thymosin-alpha-1 tirzepatide tirzepatide-bpc-157 vip wolverine-stack
""".split())

BACKLOG = set("""mazdutide survodutide tesofensine slu-pp-332 snap-8 hgh-fragment-176-191
foxo4-dri humanin thymalin dihexa bronchogen cartalax chonluten livagen ovagen pancragen
prostamax testagen vesilute vesugen vilon thymulin klotho pnc-27 cell-factors slimassist""".split())

# alias substring -> canonical slug
ALIAS = {
    'ara 290': 'cibinetide', 'ara290': 'cibinetide', 'cibinetide': 'cibinetide',
    'peg mgf': 'mgf', 'mgf': 'mgf', 'mechano growth factor': 'mgf',
    'n acetyl semax': 'semax', 'semax': 'semax', 'n acetyl selank': 'selank', 'selank': 'selank',
    'epithalon': 'epitalon', 'epitalon': 'epitalon', 'thymagen': 'thymogen', 'thymogen': 'thymogen',
    'mod grf 1 29': 'cjc-1295', 'cjc 1295': 'cjc-1295', 'cjc1295': 'cjc-1295',
    'melanotan 1': 'melanotan-i', 'melanotan i': 'melanotan-i', 'mt 1': 'melanotan-i',
    'melanotan 2': 'melanotan-ii', 'melanotan ii': 'melanotan-ii', 'mt 2': 'melanotan-ii',
    '5 amino 1mq': '5-amino-1mq', 'tb 500': 'tb-500', 'tb500': 'tb-500', 'tb4': 'tb-500',
    'bpc 157': 'bpc-157', 'ghk cu': 'ghk-cu', 'll 37': 'll-37', 'pt 141': 'pt-141',
    'mots c': 'mots-c', 'ss 31': 'ss-31', 'igf 1 lr3': 'igf-1-lr3', 'igf 1 des': 'igf-1-des',
    'igf 1': 'igf-1-lr3', 'aod 9604': 'aod-9604', 'mk 677': 'mk-677', 'ibutamoren': 'mk-677',
    'ghrp 2': 'ghrp-2', 'ghrp 6': 'ghrp-6', 'thymosin alpha 1': 'thymosin-alpha-1',
    'tesamorelin': 'tesamorelin', 'tesamorlin': 'tesamorelin',  # amino-club spells it "Tesamorlin"
    'nad': 'nad-plus', 'kisspeptin': 'kisspeptin',
    'follistatin 344': 'follistatin', 'follistatin': 'follistatin', 'hexarelin': 'hexarelin',
    'sermorelin': 'sermorelin', 'ipamorelin': 'ipamorelin', 'oxytocin': 'oxytocin', 'vip': 'vip',
    'cagrilintide': 'cagrilintide', 'kpv': 'kpv', 'dsip': 'dsip', 'pinealon': 'pinealon',
    'cardiogen': 'cardiogen', 'cortagen': 'cortagen', 'adamax': 'adamax', 'adipotide': 'adipotide',
    'glutathione': 'glutathione', 'glow': 'glow', 'klow': 'klow', 'snap 8': 'snap-8',
    'foxo4 dri': 'foxo4-dri', 'humanin': 'humanin', 'dihexa': 'dihexa', 'mazdutide': 'mazdutide',
    'survodutide': 'survodutide', 'tesofensine': 'tesofensine', 'slu pp 332': 'slu-pp-332',
    'thymalin': 'thymalin', 'retatrutide': 'retatrutide', 'tirzepatide': 'tirzepatide',
    'semaglutide': 'semaglutide',
}


def _norm(s):
    s = s.lower()
    s = re.sub(r'\([^)]*\)', ' ', s)
    s = re.sub(r'\b\d+(\.\d+)?\s*(mg|mcg|ml|iu|g)\b', ' ', s)
    s = re.sub(r'[^a-z0-9]+', ' ', s).strip()
    s = re.sub(r'\b(peptide|research|blend|vial|copper|amidate|no|with)\b', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()


def match(name):
    """(kind, slug) — kind in PROFILE / BACKLOG / UNMAPPED. Supplies/scope handled upstream."""
    n = _norm(name)
    if not n:
        return ('UNMAPPED', None)
    for k in sorted(ALIAS, key=len, reverse=True):
        if re.search(r'\b' + re.escape(k) + r'\b', n):
            slug = ALIAS[k]
            return (('PROFILE' if slug in PP_SLUGS else 'BACKLOG'), slug)
    tok = n.replace(' ', '-')
    if tok in PP_SLUGS:
        return ('PROFILE', tok)
    if tok in BACKLOG:
        return ('BACKLOG', tok)
    return ('UNMAPPED', tok)


# ---- per-vendor coded-name decoders ----------------------------------------
# Each returns (display, slug, kind) or ('EXCLUDE', None, None) or None.
# kind in {single, single_bk, blend, blend_bk, spray}.
# The `verified` note documents the evidence (see standard above).

def _c(base, code):
    return f'{base} (listed as {code})'


DECODERS = {}


def _decoder(*vendors):
    def wrap(fn):
        for v in vendors:
            DECODERS[v] = fn
        return fn
    return wrap


@_decoder('amino-x')  # verified: COA formula+CAS+vial label (AX-RT C221H342N46O68/CAS 2381089-83-2; AX-TR C225H348N48O68/CAS 2023788-19-2)
def _amino_x(n):
    if re.match(r'AX-TR', n, re.I): return (_c('Tirzepatide', 'AX-TR'), 'tirzepatide', 'single')
    if re.match(r'AX-RT', n, re.I): return (_c('Retatrutide', 'AX-RT'), 'retatrutide', 'single')


@_decoder('ascension-peptides')  # verified: COA filename 'Retatrutide' (R); molecular descriptions (T=dual GIP/GLP-1, S=MW4114, C=amylin)
def _ascension(n):
    m = re.match(r'([RTCS])-(\d+)$', n, re.I)
    if m:
        mp = {'R': ('Retatrutide', 'retatrutide'), 'T': ('Tirzepatide', 'tirzepatide'),
              'C': ('Cagrilintide', 'cagrilintide'), 'S': ('Semaglutide', 'semaglutide')}
        b, s = mp[m.group(1).upper()]
        return (_c(b, n.upper()), s, 'single')
    if re.match(r'FOX0?4-DRI', n, re.I): return ('FOXO4-DRI [backlog]', 'foxo4-dri', 'single_bk')
    if re.match(r'HCG', n, re.I): return ('EXCLUDE', None, None)


@_decoder('amino-club')  # verified: product-page spec — synonym LY3437943 + "39-aa triple agonist
# GIP/GLP-1/glucagon" (uniquely Retatrutide) + CAS 2381089-83-2 (same LY3437943 as synthesis GLP-3R).
def _amino_club(n):
    if re.match(r'GLP-3 ?\(RT\)', n, re.I): return (_c('Retatrutide', 'GLP-3 (RT)'), 'retatrutide', 'single')


@_decoder('ez-peptides')  # verified: Janoshik identity COAs, batch EZP-1P/2P/3P; EZP-CG desc 'Cagrilintide'
def _ez(n):
    if re.match(r'EZP-1P', n, re.I): return (_c('Semaglutide', 'EZP-1P'), 'semaglutide', 'single')
    if re.match(r'EZP-2P', n, re.I): return (_c('Tirzepatide', 'EZP-2P'), 'tirzepatide', 'single')
    if re.search(r'EZP-3P.*CG.*Blend|EZP-3P/EZP-CG', n, re.I): return ('Reta/Cagri blend [backlog]', None, 'blend_bk')
    if re.match(r'EZP-3P', n, re.I): return (_c('Retatrutide', 'EZP-3P'), 'retatrutide', 'single')
    if re.match(r'EZP-CG', n, re.I): return (_c('Cagrilintide', 'EZP-CG'), 'cagrilintide', 'single')
    if re.match(r'TB4\b', n, re.I): return ('TB-500', 'tb-500', 'single')
    if re.match(r'Deadpool', n, re.I): return ('Deadpool (BPC-157/TB-500/Cartalax) [backlog]', None, 'blend_bk')
    if re.match(r'Beauty Blend', n, re.I): return ('Beauty (GHK-Cu/KPV) [backlog]', None, 'blend_bk')


@_decoder('glacier-aminos')  # UNVERIFIED: no COA/MW/formula/name on product pages or /coa -> coded name only
def _glacier(n):
    if re.match(r'GLA-2\.5', n, re.I): return ('Tirz/Reta blend [backlog]', None, 'blend_bk')
    if re.match(r'GLA-3 RT/CAGRI', n, re.I): return ('Reta/Cagri blend [backlog]', None, 'blend_bk')
    if re.match(r'GLA-[123]\s*(SM|TRZ|RT)', n, re.I):
        code = re.match(r'(GLA-[123]\s*(?:SM|TRZ|RT))', n, re.I).group(1)
        return (f'{code} [coded, UNVERIFIED]', None, 'single_bk')
    if re.match(r'S-31-S', n, re.I): return ('SS-31 (spray)', 'ss-31', 'spray')
    if re.match(r'GHKPV', n, re.I): return ('GHK-Cu/KPV blend [backlog]', None, 'blend_bk')
    if re.match(r'TESA/IPA', n, re.I): return ('Tesamorelin/Ipamorelin', 'tesamorelin-ipamorelin', 'blend')
    if re.search(r'AHK-Cu|Acetyl Hexapeptide|METH?YENE BLUE|LIPO-C', n, re.I): return ('EXCLUDE', None, None)


@_decoder('ignite-peptides')  # verified: GLP-3(RT) Janoshik COA 'Retatrutide'; GLP-2(TZ)/GLP-1(S) product-page identity
def _ignite(n):
    if re.match(r'GLP-3 ?\(RT\)', n, re.I): return (_c('Retatrutide', 'GLP-3 (RT)'), 'retatrutide', 'single')
    if re.match(r'GLP-2 ?\(TZ\)', n, re.I): return (_c('Tirzepatide', 'GLP-2 (TZ)'), 'tirzepatide', 'single')
    if re.match(r'GLP-1 ?\(S\)', n, re.I): return (_c('Semaglutide', 'GLP-1 (S)'), 'semaglutide', 'single')


@_decoder('oasis-labs')  # verified: Bioviridian COA, MW 4731.6 g/mol (Retatrutide)
def _oasis(n):
    if re.match(r'GLP3\(R\)', n, re.I): return (_c('Retatrutide', 'GLP3(R)'), 'retatrutide', 'single')


@_decoder('purerawz')  # UNVERIFIED: no COA/MW/identity; permalinks only suggestive
def _purerawz(n):
    if re.match(r'GLP-1\.[23] ?\+ ?GLP-1 Blend|GLP-1\.3 ?\+', n, re.I): return ('GLP-1.x blend [coded, UNVERIFIED]', None, 'blend_bk')
    if re.match(r'GLP-1(\.[0-9])?$', n, re.I): return (n.upper() + ' [coded, UNVERIFIED]', None, 'single_bk')


@_decoder('synthesis-peptides')  # verified: .co (synthesispeptides.co) product-page spec table.
# GLP-3R: CAS 2381089-83-2 + synonym LY3437943 + "tri-agonist GLP-1/GIP/Glucagon" -> Retatrutide
#         (vendor MW 5058.5 is anomalous vs Reta ~4731, but CAS + Lilly code are definitive).
# GLP-2T: CAS 2023788-19-2 + synonym LY3298176 + MW 4813.5 (exact) + 39-res dual GIP/GLP-1 -> Tirzepatide.
# GLP-1S: CAS 910463-68-2 + MW 4113.6 / C187H291N45O59 (both exact) + Aib+C18 diacid -> Semaglutide.
# Evidence is the vendor's structured spec (CAS/MW/formula), not a 3rd-party COA (COA page is JS-gated).
def _synthesis(n):
    if re.match(r'GLP-3R', n, re.I): return (_c('Retatrutide', 'GLP-3R'), 'retatrutide', 'single')
    if re.match(r'GLP-2T', n, re.I): return (_c('Tirzepatide', 'GLP-2T'), 'tirzepatide', 'single')
    if re.match(r'GLP-1S', n, re.I): return (_c('Semaglutide', 'GLP-1S'), 'semaglutide', 'single')


@_decoder('vital-core-research')  # UNVERIFIED: COAs label only the vendor code 'GLP-3RT' (HPLC purity, no MW/name)
def _vital(n):
    if re.match(r'GLP-[123]$', n, re.I): return (n.upper() + ' [coded, UNVERIFIED]', None, 'single_bk')


@_decoder('peptide-partners')  # self-identifying: 'GLP-1 Semaglutide' names the compound
def _peptide_partners(n):
    m = re.match(r'GLP-[123]\s+(Semaglutide|Tirzepatide|Retatrutide)', n, re.I)
    if m:
        cn = m.group(1).capitalize()
        return (cn, cn.lower(), 'single')


@_decoder('biocollex')
def _biocollex(n):
    if re.match(r'CJC ?/ ?IPA', n, re.I): return ('CJC-1295/Ipamorelin', 'cjc-1295-dac-ipamorelin', 'blend')


@_decoder('alpha-peptides')  # verified: same GLP-N scheme, COA-confirmed in the pilot (GLP-3 RT -> Retatrutide)
def _alpha(n):
    if re.match(r'GLP-1 ?SM', n, re.I): return (_c('Semaglutide', 'GLP-1 SM'), 'semaglutide', 'single')
    if re.match(r'GLP-2 ?TZ', n, re.I): return (_c('Tirzepatide', 'GLP-2 TZ'), 'tirzepatide', 'single')
    if re.match(r'GLP-3 ?RT', n, re.I): return (_c('Retatrutide', 'GLP-3 RT'), 'retatrutide', 'single')


@_decoder('science-based-peptides')  # verified: batch COA (Freedom Diagnostics) Identity=Retatrutide, MW ~4728
def _science_based(n):
    if re.match(r'GLP ?3-?\(RT\)', n, re.I): return (_c('Retatrutide', 'GLP 3-(RT)'), 'retatrutide', 'single')


@_decoder('midwest-peptide')  # verified by spec: GLP-3 RT 39-aa triple (glucagon)=Reta; GLP-2 TZ 39-aa dual GIP/GLP-1=Tirz
def _midwest(n):
    if re.match(r'GLP-3 ?RT|glp-3-rt', n, re.I): return (_c('Retatrutide', 'GLP-3 RT'), 'retatrutide', 'single')
    if re.match(r'GLP-2 ?TZ|glp-2-tz', n, re.I): return (_c('Tirzepatide', 'GLP-2 TZ'), 'tirzepatide', 'single')


@_decoder('aero-peptides')  # self-identifying: 'GLP3 – Reta' names the compound in the title
def _aero(n):
    m = re.match(r'GLP[123]\s*[–-]\s*(Reta|Semaglutide|Tirz)', n, re.I)
    if m:
        code = re.match(r'(GLP[123]\s*[–-]\s*\w+)', n, re.I).group(1)
        cn = {'reta': ('Retatrutide', 'retatrutide'), 'semaglutide': ('Semaglutide', 'semaglutide'),
              'tirz': ('Tirzepatide', 'tirzepatide')}[m.group(1).lower()]
        return (_c(cn[0], code), cn[1], 'single')


@_decoder('purity-peptides')  # self-identifying: 'GLP-1 (Semaglutide)'
def _purity(n):
    m = re.match(r'GLP-[123]\s*\((Semaglutide|Tirzepatide|Reta)\)', n, re.I)
    if m:
        cn = {'semaglutide': ('Semaglutide', 'semaglutide'), 'tirzepatide': ('Tirzepatide', 'tirzepatide'),
              'reta': ('Retatrutide', 'retatrutide')}[m.group(1).lower()]
        return (cn[0], cn[1], 'single')
    if re.match(r'GLP-1 Nasal Spray', n, re.I): return ('Semaglutide (spray)', 'semaglutide', 'spray')


def decode(vendor, name):
    fn = DECODERS.get(vendor)
    return fn(name.strip()) if fn else None
