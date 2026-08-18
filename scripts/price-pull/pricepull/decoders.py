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

STANDING RULE — ASK MARK BEFORE LEAVING A CODE UNMAPPED (non-negotiable)
--------------------------------------------------------
When a coded compound can't be decoded from the evidence on hand, ASK MARK before
writing it "[coded, UNVERIFIED]". He frequently knows first-hand — he has vials,
has ordered from these vendors, and talks to them — and GLYCON-X, GLP3RT, and
ION-1S/2T/3R all decoded immediately once he was asked. Leaving a code unmapped
is correct ONLY after asking. Mark's first-hand confirmation (a vial label he's
holding, a compound he's ordered) is a VALID evidence tier — record it as such
(distinct from a certificate), the same way a read COA is recorded.

THE GLP-1/2/3 TIER KEY (observed, CONSISTENT — corroboration only, never proof)
--------------------------------------------------------
Across every vendor that both uses the tier scheme AND has been independently
confirmed, the tier maps the same way, with ZERO contradictions:
    GLP-1  ->  Semaglutide
    GLP-2  ->  Tirzepatide
    GLP-3  ->  Retatrutide
Confirmed users: amino-club, ignite-peptides, synthesis-peptides, alpha-peptides,
spartan-peptides, improved-peptides (all three tiers); biocollex, midwest-peptide
(GLP-2/3); oasis-labs, science-based-peptides, nova-labs (GLP-3); real-peptides
(GLYCON-X = vial-labelled "GLP-2 T" = Tirzepatide, 2026-08). The key is a reusable
CORROBORATOR — it must still ride alongside real evidence (COA / spec / vial label),
never stand alone. Vendors that still hold >=1 GLP code as [coded, UNVERIFIED] for lack
of that evidence: purerawz, vital-core-research, nextgen-peptides, la-peptides,
peptidology, peptide-giants, biopure-peptides. NOTE — purerawz, nextgen-peptides, and
peptide-giants VERIFY a subset while still holding others: purerawz LY3437943->Reta (holds
GLP-1.x), nextgen TRZ-2->Tirz (holds GLP-3), peptide-giants PG-3RT->Reta (holds 3). Removed
2026-08 (now FULLY decoded, 0 held): nura-peptide (GLP-3R/2T/1SG, Mark first-hand) and
amp-peptides (GLP3RT, naming + Mark confirmation).
"""
import re

# PP profile slugs (the live /peptides/ profiles) + build backlog.
PP_SLUGS = set("""
5-amino-1mq adamax adipotide aod-9604 aod-9604-mots-c bpc-157 cagrilintide cagrisema
cardiogen cibinetide cjc-1295 cjc-1295-dac cjc-1295-no-dac
cjc-1295-dac-ipamorelin cjc-1295-no-dac-ipamorelin cortagen dsip epitalon follistatin
gh-stack ghk-cu ghrp-2 ghrp-6 glow glutathione hexarelin igf-1-des igf-1-lr3 ipamorelin
kisspeptin klow kpv kpv-bpc-157 ll-37 melanotan-i melanotan-ii mgf mk-677 mk-677-ipamorelin
mots-c nad-mots-c-5-amino-1mq nad-plus oxytocin pda pinealon pt-141 pt-141-oxytocin
retatrutide selank semaglutide semaglutide-bpc-157 semax semax-selank sermorelin
sermorelin-ipamorelin ss-31 tb-500 tesamorelin tesamorelin-ipamorelin thymogen
thymosin-alpha-1 tirzepatide tirzepatide-bpc-157 vip wolverine-stack
""".split())

BACKLOG = set("""mazdutide survodutide tesofensine slu-pp-332 snap-8 hgh-fragment-176-191
foxo4-dri humanin thymalin dihexa bronchogen cartalax chonluten livagen ovagen pancragen
prostamax testagen vesilute vesugen vilon thymulin klotho pnc-27 cell-factors slimassist
petrelintide slu-pp-915 orforglipron""".split())

# alias substring -> canonical slug
ALIAS = {
    'ara 290': 'cibinetide', 'ara290': 'cibinetide', 'cibinetide': 'cibinetide',
    # PEG-MGF split off /mgf 2026-08-16 (6 vendors, cta-only price page): pegylated MGF is a
    # distinct molecule and was distorting /mgf's cheapest-$/mg (a PEG row led the true-MGF grid).
    # 'mgf'/'mechano growth factor' stay = true MGF; 'mgf without peg' (swiss) has no adjacent
    # "peg mgf" so it stays /mgf too. Longest-match: "peg mgf" (7) beats "mgf" (3).
    'peg mgf': 'peg-mgf', 'mgf': 'mgf', 'mechano growth factor': 'mgf',
    # NA-Selank split off /selank 2026-08-16 (6 vendors, cta-only): the N-acetyl amidate analog was
    # skewing /selank (sizes to 600mg vs 5-10mg, and it held the two cheapest-$/mg slots). TWO name
    # families only — 'n acetyl selank' (peptidology/ameano/biolongevity/purerawz) and 'na selank'
    # (peptide-partners/peptides-gg). BARE 'nac' IS DELIBERATELY NOT ALIASED: "NAC" is the standard
    # abbreviation for N-acetylcysteine (a different compound); no product needs it (peptidology's
    # "N-Acetyl Selank", slug /nac/, matches on its NAME 'n acetyl selank'). Keep it dropped.
    'n acetyl semax': 'semax', 'semax': 'semax',
    'n acetyl selank': 'na-selank', 'na selank': 'na-selank', 'selank': 'selank',
    # LEAVE-DECISION 2026-08-16: NA-Epitalon (N-acetyl epithalon amidate) considered for its own
    # split and LEFT collapsed into /epitalon — only 3 vendors (behemoth-labz/peptides-gg/purerawz)
    # and no standalone literature for a profile. Do not re-propose without new vendor coverage.
    'epithalon': 'epitalon', 'epitalon': 'epitalon', 'thymagen': 'thymogen', 'thymogen': 'thymogen',
    'mod grf 1 29': 'cjc-1295', 'cjc 1295': 'cjc-1295', 'cjc1295': 'cjc-1295',
    'melanotan 1': 'melanotan-i', 'melanotan i': 'melanotan-i', 'mt 1': 'melanotan-i',
    'melanotan 2': 'melanotan-ii', 'melanotan ii': 'melanotan-ii', 'mt 2': 'melanotan-ii',
    # LEAVE-DECISION 2026-08-16: TB-500 fragment 17-23 considered for its own split and LEFT
    # collapsed into /tb-500 — only 2 vendors (ameano/ez-peptides), below the 3-vendor indexable
    # gate. ('tb4' below = full Thymosin β-4 = TB-500, correct; only the 17-23 FRAGMENT is distinct
    # and it stays folded.) Do not re-propose unless it clears 3 vendors.
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
    'orforglipron': 'orforglipron', 'orforgliperon': 'orforglipron',  # MA misspells it "Orforgliperon"
    'thymalin': 'thymalin', 'retatrutide': 'retatrutide', 'tirzepatide': 'tirzepatide',
    'semaglutide': 'semaglutide',
    # alias near-misses (vendor spelling/abbreviation variants that missed the slug):
    'aod9604': 'aod-9604',                                  # peptides-gg (no hyphen)
    'ss31': 'ss-31', 'elamipretide': 'ss-31',              # swiss "SS31 (Elamipretide)"
    'hgh frag': 'hgh-fragment-176-191', 'hgh fragment': 'hgh-fragment-176-191',  # vital-core
    'sermorlin': 'sermorelin',                             # oasis misspelling
    'igf1 lr3': 'igf-1-lr3', 'igf1lr3': 'igf-1-lr3',      # almighty/oasis (no separators)
    'igf 1lr3': 'igf-1-lr3',                              # treasure-coast "IGF-1LR3" (no hyphen before LR3)
    'igf1 ir3': 'igf-1-lr3',                              # PureRx "IGF1-IR3" typo (I-for-L) — real IGF-1 LR3
    'smax': 'semax', 'tesa': 'tesamorelin', 'mt2': 'melanotan-ii',  # ignite abbreviations
    'oxyt': 'oxytocin',                                    # royal abbreviation
    # 2026-07 onboarding near-misses (LA / Peptidology / NextGen):
    'cagri': 'cagrilintide', 'cagrilinitide': 'cagrilintide',  # NextGen "Cagri" (CAS-confirmed); LA typo
    'gh fragment': 'hgh-fragment-176-191',                # Peptidology "GH Fragment 176-191"
    'fox04 dri': 'foxo4-dri',                             # Peptidology "FOX04-DRI" (zero-for-O typo)
    'aod': 'aod-9604',                                    # NextGen bare "AOD"
    # Rule A (Part 1) safe additions — audited clean across the cached catalogs (2026-08):
    'reta': 'retatrutide',        # standalone "Reta Nmg" singles (purerx) + the Reta/Cagri blend's 1st part
    '5 amino mq': '5-amino-1mq',  # "5-Amino-MQ" spelling variant (nextgen) — NAD+5-AMINO-MQ blend's 2nd part
    # 2026-08 abbreviation near-misses (ion-peptide names, likely shared by other vendors). Whole-word
    # matched (\bkey\b), so each hits only the standalone abbreviation — the full names (cagrilintide,
    # ipamorelin, sermorelin, igf-1-lr3) already resolve via their own aliases and are unaffected:
    'cag': 'cagrilintide',        # ion "Cag" (5/10mg) — standalone; \bcag\b never matches inside "cagrilintide"/"cagri"
    'ipamo': 'ipamorelin',        # ion "Ipamo" (5/10mg)
    'sermo': 'sermorelin',        # ion "Sermo" (5/10/15mg)
    'igf lr3': 'igf-1-lr3',       # ion "IGF-LR3" (1mg) — normalizes to "igf lr3" (no "1"), missed by the igf-1-lr3 aliases
    # 2026-08 class-wide silent-drop recovery (name variants whose intended token sits in parens that
    # _norm strips, or a no-space spelling). Verified unambiguous: across every raw catalog scanned in
    # the class cross-check, each token appeared ONLY as the intended compound. Whole-word matched.
    'thymosin beta 4': 'tb-500',            # "Thymosin Beta 4 Peptide (TB500)" — (TB500) stripped by _norm; almighty
    'ta1': 'thymosin-alpha-1',              # "TA1" standalone — nura; \bta1\b won't match inside meta1/beta1 (no word boundary)
    'thymosin alpha': 'thymosin-alpha-1',   # "Thymosin Alpha (TA1)" — (TA1) stripped → "thymosin alpha"; biopure. No thymosin-alpha-2 in roster
    'vasoactive intestinal peptide': 'vip', # "Vasoactive Intestinal Peptide (VIP)" — (VIP) stripped; biopure
    'll37': 'll-37',                        # "LL37" no-space — biopure, peptide-giants; "LL-37" already covered by 'll 37'
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


# RULE A (Part 1): detect a multi-compound blend by resolving the name against the full compound
# vocabulary — ALIAS keys PLUS the exact single-compound slugs that have no alias (pda, cartalax,
# petrelintide, …) — and counting DISTINCT single compounds. >=2 -> the name is a blend, not a single.
# Registered blends (normalize.BLEND_COMPONENTS: GLOW/KLOW/wolverine-stack/…) are handled by
# normalize.blend_of BEFORE this runs, so this fires only on UNREGISTERED multi-compound names.
# Part 1 uses NO short abbreviations (bpc/tb/cjc/ipa/cag/pt141/nad5 are Part 2) — so it adds no new
# FP surface beyond the two audited aliases (reta, 5 amino mq).
_BLEND_FALLBACK = None

def _blend_fallback():
    """Single-compound slugs with no ALIAS entry, resolvable only as whole tokens. Excludes the
    registered-blend slugs (those route via blend_of) so counts stay per-single-compound."""
    global _BLEND_FALLBACK
    if _BLEND_FALLBACK is None:
        from pricepull import normalize as N
        pool = (PP_SLUGS | BACKLOG) - set(ALIAS.values()) - set(N.BLEND_COMPONENTS)
        _BLEND_FALLBACK = sorted(pool, key=len, reverse=True)
    return _BLEND_FALLBACK


def blend_slugs(name):
    """Set of DISTINCT single-compound slugs referenced in `name`. len >= 2 means a blend leak."""
    n = _norm(name)
    found = {}
    for k in sorted(ALIAS, key=len, reverse=True):
        if re.search(r'\b' + re.escape(k) + r'\b', n):
            found[ALIAS[k]] = k
            n = re.sub(r'\b' + re.escape(k) + r'\b', ' ', n)
    for s in _blend_fallback():
        st = s.replace('-', ' ')
        if re.search(r'\b' + re.escape(st) + r'\b', n):
            found[s] = s
            n = re.sub(r'\b' + re.escape(st) + r'\b', ' ', n)
    keys = set(found)
    # drop any composite slug whose components are also present (e.g. semax-selank when semax+selank hit)
    return {s for s in keys if not any(o != s and o in s.split('-') for o in keys)}


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


@_decoder('licensed-peptides')  # verified: vial CAS — LP3-R = Retatrutide (CAS 2381089-83-2), LP2-T = Tirzepatide (CAS 2023788-19-2); same CAS as amino-x AX-RT/AX-TR
def _licensed(n):
    if re.match(r'LP2[\s-]*T', n, re.I): return (_c('Tirzepatide', 'LP2-T'), 'tirzepatide', 'single')
    if re.match(r'LP3[\s-]*R', n, re.I): return (_c('Retatrutide', 'LP3-R'), 'retatrutide', 'single')


@_decoder('ascension-peptides')  # verified: COA filename 'Retatrutide' (R); molecular descriptions (T=dual GIP/GLP-1, S=MW4114, C=amylin)
def _ascension(n):
    # Ascension codes encode mg in the trailing number (R-30 = 30mg). These arrive as
    # simple products with no size variant, so the 4th tuple element supplies the mg —
    # otherwise the row is dropped as no-size. (R-10/R-30/T-10/T-30/S-5/C-10 -> 10/30/... mg)
    m = re.match(r'([RTCS])-(\d+)$', n, re.I)
    if m:
        mp = {'R': ('Retatrutide', 'retatrutide'), 'T': ('Tirzepatide', 'tirzepatide'),
              'C': ('Cagrilintide', 'cagrilintide'), 'S': ('Semaglutide', 'semaglutide')}
        b, s = mp[m.group(1).upper()]
        return (_c(b, n.upper()), s, 'single', int(m.group(2)))
    if re.match(r'FOX0?4-DRI', n, re.I): return ('FOXO4-DRI [backlog]', 'foxo4-dri', 'single_bk')
    if re.match(r'HCG', n, re.I): return ('EXCLUDE', None, None)


@_decoder('amino-club')  # ALL verified from Amino Club's OWN product-page spec blocks (label/value):
# GLP-3 (RT) = Retatrutide — synonym LY3437943 + "39-aa triple agonist GIP/GLP-1/glucagon" + CAS 2381089-83-2.
# GLP-2 (TR) = Tirzepatide — CAS 2023788-19-2 + formula C225H348N48O68 + 39 aa (exact match; identical to our
#              independently-verified amino-x AX-TR spec). Added 2026-08-04.
# GLP-1 (SM) = Semaglutide — CAS 910463-68-2 + formula C187H291N45O59 + MW 4113.58 g/mol + 31-aa backbone
#              (three exact canonical identifiers). Added 2026-08-04.
# Suffix (RT/TR/SM) is NOT the evidence — the CAS/formula/MW in each page's spec table is.
def _amino_club(n):
    if re.match(r'GLP-3 ?\(RT\)', n, re.I): return (_c('Retatrutide', 'GLP-3 (RT)'), 'retatrutide', 'single')
    if re.match(r'GLP-2 ?\(TR\)', n, re.I): return (_c('Tirzepatide', 'GLP-2 (TR)'), 'tirzepatide', 'single')
    if re.match(r'GLP-1 ?\(SM\)', n, re.I): return (_c('Semaglutide', 'GLP-1 (SM)'), 'semaglutide', 'single')


@_decoder('modern-aminos')  # MA-1P/MA-3RT VERIFIED; MA-2TZ/MA-1S UNVERIFIED (no CAS/formula/MW/name on page)
# MA-1P = Petrelintide (ZP8396; product page states CAS 2766385-23-1 / C185H305N49O61 / MW 4191.69).
# MA-3RT = Retatrutide (their /product/retatrutide/ redirects to the MA-3RT page; image 'GLP/GIP/GLUCAGON').
def _modern_aminos(n):
    if re.search(r'MA-?1P\b', n, re.I): return (_c('Petrelintide', 'MA-1P'), 'petrelintide', 'single_bk')
    if re.search(r'MA-?3RT.*cagri', n, re.I): return ('Retatrutide/Cagrilintide blend [backlog]', None, 'blend_bk')  # combo, not a single
    if re.search(r'MA-?3RT\b', n, re.I): return (_c('Retatrutide', 'MA-3RT'), 'retatrutide', 'single')
    if re.search(r'MA-?2TZ\b', n, re.I): return ('MA-2TZ [coded, UNVERIFIED]', None, 'single_bk')
    if re.search(r'MA-?1S\b', n, re.I): return ('MA-1S [coded, UNVERIFIED]', None, 'single_bk')


@_decoder('ez-peptides')  # verified: Janoshik identity COAs, batch EZP-1P/2P/3P; EZP-CG desc 'Cagrilintide'
def _ez(n):
    if re.match(r'EZP-1P', n, re.I): return (_c('Semaglutide', 'EZP-1P'), 'semaglutide', 'single')
    if re.match(r'EZP-2P', n, re.I): return (_c('Tirzepatide', 'EZP-2P'), 'tirzepatide', 'single')
    if re.search(r'EZP-3P.*CG.*Blend|EZP-3P/EZP-CG', n, re.I): return ('Reta/Cagri blend [backlog]', None, 'blend_bk')
    if re.match(r'EZP-3P', n, re.I): return (_c('Retatrutide', 'EZP-3P'), 'retatrutide', 'single')
    if re.match(r'EZP-CG', n, re.I): return (_c('Cagrilintide', 'EZP-CG'), 'cagrilintide', 'single')
    if re.match(r'TB4\b', n, re.I): return ('TB-500', 'tb-500', 'single')
    # Deadpool is now a registered blend (blend_of -> bpc-157-tb-500-cartalax); the old backlog
    # stopgap here pre-empted it (decode runs before blend_of) and left ez's copy unmapped. Removed.
    if re.match(r'Beauty Blend', n, re.I): return ('Beauty (GHK-Cu/KPV) [backlog]', None, 'blend_bk')


@_decoder('ameano-peptides')  # verified-by-MECHANISM on ameano's own product pages (title + body):
#   AMP-1P "GLP-1 Receptor Research Peptide"  -> Semaglutide (mono GLP-1 tier)
#   AMP-2P "Dual-Receptor Research Peptide"   -> Tirzepatide (sole marketed dual GIP/GLP-1)
#   AMP-3P "Triple-Agonist Research Peptide"  -> Retatrutide (sole triple GLP-1/GIP/glucagon)
# Mechanism-tier (like BioCollex), not COA-tier. AMP-2P/3P are mechanistically unique; AMP-1P
# is the mono-GLP-1 tier of the vendor's own coherent 1P/2P/3P scheme.
def _ameano(n):
    if re.match(r'AMP-1P', n, re.I): return (_c('Semaglutide', 'AMP-1P'), 'semaglutide', 'single')
    if re.match(r'AMP-2P', n, re.I): return (_c('Tirzepatide', 'AMP-2P'), 'tirzepatide', 'single')
    if re.match(r'AMP-3P', n, re.I): return (_c('Retatrutide', 'AMP-3P'), 'retatrutide', 'single')


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


@_decoder('purerawz')  # GLP-1.x: UNVERIFIED (no COA/MW/identity; permalinks only). LY3437943:
# VERIFIED — Eli Lilly's published clinical development code for Retatrutide (hard identity).
def _purerawz(n):
    if re.match(r'LY ?3437943', n, re.I): return (_c('Retatrutide', 'LY3437943'), 'retatrutide', 'single')
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


@_decoder('biocollex')  # GLPs verified-by-SPEC on BioCollex's own product pages: GLP-3 RT desc
# "triple agonist targeting GLP-1, GIP, and glucagon receptors" -> uniquely Retatrutide; GLP-2 TZ
# desc "dual incretin receptor agonist" -> Tirzepatide (sole marketed dual GIP/GLP-1). No CAS/MW/
# COA published machine-readably (COA referenced, not linkable) -> mechanism-tier, not COA-tier.
def _biocollex(n):
    if re.match(r'GLP-3 ?RT', n, re.I): return (_c('Retatrutide', 'GLP-3 RT'), 'retatrutide', 'single')
    if re.match(r'GLP-2 ?TZ', n, re.I): return (_c('Tirzepatide', 'GLP-2 TZ'), 'tirzepatide', 'single')
    if re.match(r'CJC ?/ ?IPA', n, re.I): return ('CJC-1295/Ipamorelin', 'cjc-1295-dac-ipamorelin', 'blend')


@_decoder('capstone-peptides')  # self-identifying: the coded metabolic names carry the compound WORD
# after the GLP-#X code (GLP-1S Semaglutide, GLP-2T Tirzepatide, GLP-3R Retatrutide) — key on the WORD,
# not the code, same pattern as _aero. The C-Amylin product is CagriSema (Cagrilintide + Semaglutide) —
# route to cagrisema, never a standalone cagrilintide (Capstone does not sell cagrilintide alone).
def _capstone(n):
    if re.search(r'Cagrilintide.*Semaglutide', n, re.I):
        # "5/5 mg" = 5 mg cagrilintide + 5 mg semaglutide -> 10 mg TOTAL peptide; supply it so $/mg
        # is over the combined dose (matches how the blends read their total), not the 5 mg first-dose.
        return (_c('CagriSema', 'C-Amylin / GLP-1S'), 'cagrisema', 'single', 10)
    # CJC-1295 + Ipamorelin blend is NO-DAC per Capstone's own molecular formula ("CJC-1295 (no DAC)");
    # the name omits the form, so blend_of would default it to the DAC surface. Route to no-DAC explicitly.
    if re.search(r'CJC-1295 \+ Ipamorelin', n, re.I):
        return ('CJC-1295 (no DAC)/Ipamorelin', 'cjc-1295-no-dac-ipamorelin', 'blend')
    m = re.match(r'GLP-[123][A-Z]\s+(Semaglutide|Tirzepatide|Retatrutide)\b', n, re.I)
    if m:
        code = re.match(r'(GLP-[123][A-Z])', n, re.I).group(1)
        cn = {'semaglutide': ('Semaglutide', 'semaglutide'),
              'tirzepatide': ('Tirzepatide', 'tirzepatide'),
              'retatrutide': ('Retatrutide', 'retatrutide')}[m.group(1).lower()]
        return (_c(cn[0], code), cn[1], 'single')
    return None


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


@_decoder('nextgen-peptides')  # TRZ-2 VERIFIED = Tirzepatide (product-page spec: CAS 2023788-19-2,
# C225H348N48O68, MW ~4813). Cagri = Cagrilintide (CAS-confirmed; handled via alias). Bulk "(N vials)"
# packs EXCLUDED — not single-vial, and the kit price is not a clean 10x (GLP-3 kit $300 vs single $42),
# so no evidence-based per-vial divisor. GLP-3 single UNVERIFIED (disclaimer-only description).
def _nextgen(n):
    if re.search(r'\d+\s*vials?', n, re.I): return ('EXCLUDE', None, None)
    if re.match(r'TRZ-2\b', n, re.I): return (_c('Tirzepatide', 'TRZ-2'), 'tirzepatide', 'single')
    if re.match(r'GLP-3\b', n, re.I): return ('GLP-3 [coded, UNVERIFIED]', None, 'single_bk')


@_decoder('la-peptides')  # UNVERIFIED: product pages carry no description/mechanism/CAS/name for the GLP codes.
def _la_peptides(n):
    if re.match(r'GLP\s*[–-]\s*[123]\s*\([STR]\)\s*$', n, re.I):
        return (re.sub(r'\s+', ' ', n.strip()) + ' [coded, UNVERIFIED]', None, 'single_bk')


@_decoder('mile-high-compounds')  # UNVERIFIED: descriptions are generic (testing specs only; no mechanism/CAS/name).
def _mile_high(n):
    if re.match(r'MHC-[123]\s+(SM|TRZ|RT)\s*$', n, re.I):
        return (n.strip() + ' [coded, UNVERIFIED]', None, 'single_bk')


@_decoder('peptidology')  # UNVERIFIED: empty product descriptions; PGL code scheme, no stated mechanism.
def _peptidology(n):
    if re.match(r'GLP[123]\s*\(PGL-[A-Z0-9]+\)\s*$', n, re.I):
        return (n.strip() + ' [coded, UNVERIFIED]', None, 'single_bk')


@_decoder('crush-research')  # verified-by-MECHANISM on Crush's own product pages (title + body):
# "Double Agonist" = Tirzepatide (the sole marketed dual GIP/GLP-1 agonist);
# "Triple Agonist" = Retatrutide (the sole triple GLP-1/GIP/glucagon agonist). Mechanism-tier
# (like BioCollex/Ameano) — unique class per compound, stated on the page, not a code convention.
def _crush(n):
    if re.match(r'Double Agonist', n, re.I): return (_c('Tirzepatide', 'Double Agonist'), 'tirzepatide', 'single')
    if re.match(r'Triple Agonist', n, re.I): return (_c('Retatrutide', 'Triple Agonist'), 'retatrutide', 'single')


@_decoder('spartan-peptides')  # self-identifying: the compound is named in-title as GLP-N(Compound).
# Same GLP-1/2/3 = Sema/Tirz/Reta numbering already confirmed across alpha/amino-x/ez/ignite from
# their own sources; Spartan states it in the product title itself.
def _spartan(n):
    if re.match(r'GLP-1\s*\(\s*Sema', n, re.I): return (_c('Semaglutide', 'GLP-1(Sema)'), 'semaglutide', 'single')
    if re.match(r'GLP-2\s*\(\s*Tirz', n, re.I): return (_c('Tirzepatide', 'GLP-2(Tirz)'), 'tirzepatide', 'single')
    if re.match(r'GLP-3\s*\(\s*Reta', n, re.I): return (_c('Retatrutide', 'GLP-3(Reta)'), 'retatrutide', 'single')


@_decoder('purerx-peptides')  # self-identifying: PureRx's OWN product descriptions name the compound
# ("Reta 60mg" desc says Retatrutide, "Tirz" -> Tirzepatide, "Sema" -> Semaglutide). Verified from the
# page, not decoded by analogy — the abbreviation is a truncation the description spells out in full.
def _purerx(n):
    if re.match(r'Reta\b', n, re.I): return (_c('Retatrutide', 'Reta'), 'retatrutide', 'single')
    if re.match(r'Tirz\b', n, re.I): return (_c('Tirzepatide', 'Tirz'), 'tirzepatide', 'single')
    if re.match(r'Sema\b', n, re.I): return (_c('Semaglutide', 'Sema'), 'semaglutide', 'single')


@_decoder('peptide-giants')  # PG-3RT VERIFIED = Retatrutide — the Janoshik identity report names
# Retatrutide in its results. PG-3RT+C stays UNVERIFIED: a Reta/Cagrilintide blend with NO Cagrilintide
# certificate. Other PG-N / GLP-3R codes remain UNVERIFIED (pages state no CAS/formula/name). Kits excluded.
# Order matters: the +C blend and the specific PG-3RT branch must precede the generic PG-[0-9][A-Z]{2}.
def _peptide_giants(n):
    if re.search(r'\(\s*\d+\s*vials?|\d+\s*vials?\s*/?\s*kit', n, re.I): return ('EXCLUDE', None, None)  # 10-vial kits
    if re.match(r'PG-3RT\s*\+\s*C', n, re.I): return ('PG-3RT+C [coded, UNVERIFIED]', None, 'blend_bk')  # Reta/Cagri — no Cagri cert
    if re.match(r'PG-3RT\b', n, re.I): return (_c('Retatrutide', 'PG-3RT'), 'retatrutide', 'single')  # Janoshik COA: Retatrutide
    if re.match(r'PG-[0-9][A-Z]{2}\b', n, re.I): return (n.strip() + ' [coded, UNVERIFIED]', None, 'single_bk')
    if re.match(r'GLP-3R\b', n, re.I): return ('GLP-3R [coded, UNVERIFIED]', None, 'single_bk')


@_decoder('legendary-peptides')  # Reta/Tirz VERIFIED by unique mechanistic spec in the vendor's own
# product descriptions: "Reta" = triple agonist GLP-1/GIP/glucagon (uniquely Retatrutide); "Tirz" =
# dual agonist GIP/GLP-1 (uniquely Tirzepatide). Decoded from the spec, NOT the abbreviation. KIT
# variants EXCLUDED (multi-vial, not single).
def _legendary(n):
    if re.search(r'\bKIT\b', n, re.I): return ('EXCLUDE', None, None)
    if re.match(r'Reta\b', n, re.I): return (_c('Retatrutide', 'Reta'), 'retatrutide', 'single')
    if re.match(r'Tirz\b', n, re.I): return (_c('Tirzepatide', 'Tirz'), 'tirzepatide', 'single')


@_decoder('nova-labs')  # GLP-3 (RT) VERIFIED = Retatrutide (product desc: "triple agonist" — uniquely
# Reta; NOVA also publishes per-batch COAs). "Tirzepatide" is self-named (no decode needed). Pen +
# nasal-spray forms are left to the variation detector (sprays -> spray kind); vials are the grid rows.
def _nova(n):
    if re.match(r'GLP-3\s*\(\s*RT\s*\)', n, re.I):
        return (_c('Retatrutide', 'GLP-3 (RT)'), 'retatrutide', 'single')


@_decoder('nura-peptide')  # GLP codes DECODED — Mark, first-hand (has vials / has ordered / talks to the
# vendor), the SAME BASIS as GLYCON-X, GLP3RT and ION-1S/2T/3R. This is a FIRST-HAND VENDOR DECODE, NOT the
# GLP-1/2/3 tier key applied by naming convention — the tier key only CORROBORATES (GLP-1=Sema, GLP-2=Tirz,
# GLP-3=Reta). Recorded explicitly so nobody later reads it as decoding-by-convention:
#   GLP-3R = Retatrutide · GLP-2T = Tirzepatide · GLP-1SG = Semaglutide
#   GLP-3R/CAG = Retatrutide + Cagrilintide blend (CAG = Cagrilintide, also sold standalone elsewhere)
# Order: the /CAG blend branch MUST precede the GLP-3R single branch (GLP-3R\b also matches "GLP-3R / CAG").
def _nura(n):
    if re.match(r'GLP-3R\s*/\s*CAG', n, re.I):
        return ('Retatrutide/Cagrilintide', 'retatrutide-cagrilintide', 'blend')
    if re.match(r'GLP-3R\b', n, re.I): return (_c('Retatrutide', 'GLP-3R'), 'retatrutide', 'single')
    if re.match(r'GLP-2T\b', n, re.I): return (_c('Tirzepatide', 'GLP-2T'), 'tirzepatide', 'single')
    if re.match(r'GLP-1SG', n, re.I): return (_c('Semaglutide', 'GLP-1SG'), 'semaglutide', 'single')


@_decoder('ion-peptide')  # ION-1S/2T/3R DECODED — Mark, first-hand (2026-08; has vials / has ordered), the SAME
# BASIS as Nura's GLP line and GLYCON-X: a FIRST-HAND VENDOR DECODE, NOT a certificate and NOT decoding-by-
# convention (the 1S/2T/3R suffixes only CORROBORATE the roster's GLP-1=Sema / GLP-2=Tirz / GLP-3=Reta key).
# Recorded explicitly per the coded-name verification standard so nobody later reads it as decode-by-convention:
#   ION-1S = Semaglutide · ION-2T = Tirzepatide · ION-3R = Retatrutide
# Size comes from the product's dosage variant (10mg/20mg/...), so no embedded-mg tuple element is needed.
def _ion(n):
    if re.match(r'ION-1S\b', n, re.I): return (_c('Semaglutide', 'ION-1S'), 'semaglutide', 'single')
    if re.match(r'ION-2T\b', n, re.I): return (_c('Tirzepatide', 'ION-2T'), 'tirzepatide', 'single')
    if re.match(r'ION-3R\b', n, re.I): return (_c('Retatrutide', 'ION-3R'), 'retatrutide', 'single')


@_decoder('real-peptides')  # GLYCON-X = Tirzepatide — VERIFIED by the VIAL LABEL "GLP-2 T" (Mark has one in
# hand, 2026-08). GLP-2 is the tier that decodes to Tirzepatide across the roster's GLP-1/2/3 convention
# (GLP-1=Sema, GLP-2=Tirz, GLP-3=Reta), and it corroborates the dual GLP-1/GIP agonist mechanism Real's own
# product page states (uniquely Tirzepatide). First-hand vial evidence OUTRANKS the page copy, which had said
# "not identified" — the coupon-page prose was reconciled to match (Tirzepatide, listed as GLYCON-X). Was
# previously held [coded, UNVERIFIED] on mechanism alone; the vial label is what promoted it. Trinity-X needs
# no decode: the title self-names it "Retatrutide (Trinity-X™)" so match() maps it. SHB (Endure) / HHB
# (Radiance) / LC-526 (Lipo-MIC) are multi-compound amino / B-complex / lipotropic research BLENDS (vendor
# desc: "9-compound" / "7-compound" blends; LC-526 ships a ten-vial kit) — not single peptides.
def _real(n):
    if re.match(r'GLYCON-?X', n, re.I): return (_c('Tirzepatide', 'GLYCON-X'), 'tirzepatide', 'single')
    if re.match(r'(SHB|HHB|LC ?526)\b', n, re.I): return ('EXCLUDE', None, None)


@_decoder('amp-peptides')  # GLP3RT = Retatrutide — NAMING EVIDENCE (not a certificate; no CAS/MW/COA on the
# page, desc is only "What is GLP3RT?"). Reassessed 2026-08: 'RT' is a COMPOUND ABBREVIATION, not tier
# notation — the same form as ignite GLP-2 (TZ) and mile-high MHC-1 SM, both decoded on PP — so the name
# carries BOTH the GLP-3 tier AND the compound. AMP stocks exactly ONE GLP product across its 19 SKUs (no
# Semaglutide, no Tirzepatide), so the "3" isn't disambiguating a sibling; it can only be tracking the
# external GLP-1/2/3 tier key (GLP-3 = Retatrutide). Mark confirmed the VIAL label reads GLP3RT. This is
# naming/label evidence, weaker than a COA — recorded as such. The three "— … Supply" SKUs (bi-monthly /
# quarterly / biannual multi-vial packs) stay excluded — Supply branch precedes the GLP3RT branch because
# those SKU names start "GLP3RT — … Supply".
def _amp(n):
    if re.search(r'\bSupply\b', n, re.I): return ('EXCLUDE', None, None)
    if re.match(r'GLP3RT\b', n, re.I): return (_c('Retatrutide', 'GLP3RT'), 'retatrutide', 'single')


@_decoder('improved-peptides')  # GLP-3R / GLP-2T VERIFIED by unique mechanism in Improved's OWN product
# descriptions: GLP-3R = "triple-receptor agonist targeting GLP-1, GIP and glucagon" (uniquely Retatrutide);
# GLP-2T = "dual agonist of GIP and GLP-1 receptors" (uniquely Tirzepatide). GLP-1S = "mono GLP-1 receptor
# agonist" -> Semaglutide, the mono tier of the vendor's coherent GLP-1S/2T/3R (mono/dual/triple) scheme
# (same standard as ameano AMP-1P). Matches both GLP-1S sizes (5mg/10mg simple SKUs).
def _improved(n):
    if re.match(r'GLP-3R', n, re.I): return (_c('Retatrutide', 'GLP-3R'), 'retatrutide', 'single')
    if re.match(r'GLP-2T', n, re.I): return (_c('Tirzepatide', 'GLP-2T'), 'tirzepatide', 'single')
    if re.match(r'GLP-1S', n, re.I): return (_c('Semaglutide', 'GLP-1S'), 'semaglutide', 'single')


def decode(vendor, name):
    fn = DECODERS.get(vendor)
    return fn(name.strip()) if fn else None
