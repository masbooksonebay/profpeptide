"""Variation-model detection — the five shapes seen across 25 vendors.

A vendor's variations must be *detected*, not assumed. Given a normalized product
(see adapters.NormProduct), `extract_rows` returns one row per purchasable unit:
    (size_label, base_price, in_stock, form)   form in {'vial','spray','tablet'}

Base price is always the standing price (regular_price / current price), never a
sale price. Kit/bulk variations are dropped in favor of the single-vial price so
$/mg stays comparable across vendors.

MODELS
  dosage         standard — variation attribute value IS the mg size.
  pack-size      BioCollex — attr is "Pack Size" (1/3/5/10 vials); mg from the
                 product NAME; base = the single-vial (min-quantity) price.
  ten-vial-kit   Royal — simple product "Nmgx10vials"; per-vial = kit price / 10.
  vial-kit-axis  Swiss — attr values are "Vial" / "KIT (10 vials)"; mg from the
                 NAME; base = the Vial (non-kit) variation.
  form-strength  PureRawz — attrs Form + Strength; mg from Strength; Form routes
                 Nasal Spray -> spray, tablets/sublingual -> tablet (excluded).

The detector below handles all five generically from the attribute names/values
plus the product name, so 'auto' is correct for every vendor. A registry entry may
still name its model for documentation / future overrides.
"""
import re
from .normalize import mg_value


def parse_size(s):
    """mg size label from a string, or None. The unit may be hyphen-joined to the
    number (Alpha's dosage attribute is '10-mg'); [\\s-]* absorbs that separator."""
    if not s:
        return None
    m = re.search(r'(\d+(?:\.\d+)?)[\s-]*(mcg|mg)\b', str(s).lower().replace(',', ''))
    return (m.group(1) + m.group(2)) if m else None


# ── RULE B: count-multiplication ─────────────────────────────────────────────────────────────
# An oral count-pack states a PER-UNIT dose and a UNIT COUNT in the name — "Tesofensine 500mcg 100
# Tabs Bottle" = 500mcg x 100 = 50mg. The adapter otherwise parses the per-unit dose (500mcg) as the
# size, so $/mg comes out ~100x too high; count_mult recovers the PACKAGE TOTAL. Applied to the
# product NAME only (never a description). Returns the total-mg size string, or None to ABSTAIN.
#
# Word-boundary / FP discipline (all on record, tested):
#   • The count NUMBER must come BEFORE the count word: "90caps", "100 tabs", "60ct". A count word
#     FOLLOWED by a digit is rejected via (?!-?\d) — so "LL-37 ... CAP-18" ('cap' then '-18', and the
#     leading '37' from LL-37) does NOT read as "37 caps". LL-37 caps keep their real size (untouched).
#   • "vials" is deliberately NOT a count word — vial kits are handled by is_kit, not here.
#   • Ambiguous counts ("50/100 count bottles", royal discover-slu-pp-332) ABSTAIN — return None.
#   • Conflicting distinct counts in one name ABSTAIN. Count must be >= 2 (a "1 bottle" is no pack).
#   • No count word, or no per-unit dose -> None (leaves parse_size / normal handling in place, so
#     'pentadecapeptide' and plain vials are untouched).
_COUNT_WORD = r'(?:tabs?|tablets?|caps?|capsules?|softgels?|pills?|ct|count|bottles?)'
_COUNT_RE = re.compile(r'(\d+)[\s-]*' + _COUNT_WORD + r'\b(?!-?\d)', re.I)
_COUNT_AMBIG = re.compile(r'\d+\s*/\s*\d+[\s-]*' + _COUNT_WORD, re.I)
_DOSE_RE = re.compile(r'(\d+(?:\.\d+)?)\s*(mcg|mg)\b', re.I)


def count_mult(name):
    """Package-total mg size string for an oral count-pack NAME, or None to abstain (see above)."""
    if not name:
        return None
    if _COUNT_AMBIG.search(name):                      # "50/100 count" — no single reliable count
        return None
    counts = [int(m.group(1)) for m in _COUNT_RE.finditer(name)]
    counts = [c for c in counts if c >= 2]
    if len(set(counts)) != 1:                          # none, or conflicting counts -> abstain
        return None
    count = counts[0]
    dm = _DOSE_RE.search(name)
    if not dm:                                         # count but no per-unit dose -> can't multiply
        return None
    dose = float(dm.group(1)) / 1000 if dm.group(2).lower() == 'mcg' else float(dm.group(1))
    return f'{dose * count:g}mg'


def form_of(values):
    """Delivery form from variation attribute values."""
    # Guard against null attribute values — some catalogs (e.g. Nura) ship a variation with a
    # missing/None attribute value, which would crash the join. Treat None as an empty token.
    j = ' '.join(v for v in values if v).lower()
    if re.search(r'spray|nasal', j):
        return 'spray'
    # Concentration formats (a liquid's mg-per-ml), NOT a vial size — "10mg per ml" / "300mg/ml"
    # would otherwise mis-parse as a 10mg / 300mg vial. PP compares $/mg per vial, so these are out
    # of scope. Keyed on the STRENGTH/SIZE attribute value here (never on free text / descriptions,
    # which mention ml for bac-water content and reconstitution). FP scan across all vendors: this
    # matches only liquids/oils/SARMs, never a peptide vial.
    if re.search(r'per\s*ml|m?c?g\s*/\s*ml|/\s*ml\b', j):
        return 'liquid'
    # Tablets/capsules and count-pack formats (per cap, N ct, N tabs) — oral, non-vial, same
    # $/mg-per-vial-out-of-scope logic as liquids. Per-VARIATION (form_of runs on each variation's
    # values), so a product that also has a real vial variant keeps it. Catches e.g. modern-aminos'
    # "250mcg per cap" rendering as $312/mg (a 1000x unit error). Keyed on the strength/size value,
    # never free text — a description that mentions tablets must not trigger it.
    if re.search(r'tablet|sublingual|capsule|troche|\boral\b|cream|\bgel\b|lozenge'
                 r'|\bcaps?\b|\btabs?\b|\d+\s*ct\b|per\s*cap|per\s*tab', j):
        return 'tablet'
    return 'vial'


# Multi-vial kit / bulk / pack markers, hyphen- and space-tolerant. Covers: kit, bulk, bundle,
# bare pack/pk, "pack of N", "set of N", vial COUNTS 2..99 (so 20+ is caught, not just 2–19 —
# the old pattern stopped at 19), and "xN". Shared by is_kit (variation attribute values) and
# is_kit_name (the product name) so both stay in lockstep.
_KIT_RE = re.compile(
    r'\bkit\b|\bbulk\b|\bbundle\b|\bpack\b|\bpk\b'
    r'|\bpack\s+of\s+\d+\b|\bset\s+of\s+\d+\b'
    r'|\b(?:[2-9]|[1-9]\d)[\s-]?vials?\b'
    r'|\bx[\s-]?\d+\b'
    r'|\d+\s*mg\s*x\s*\d+',   # glued "Nmg x M" multiplier, e.g. "10mgx10vials"/"5mgx3" — no word
                              # boundary around the x, so the \bx\d+ form above misses it (Royal)
    re.I,
)


def is_kit(values):
    """True if a variation's attribute values mark it as a multi-vial kit / bulk pack."""
    return bool(_KIT_RE.search(' '.join(v for v in values if v)))  # None-safe (see form_of)


def is_kit_name(name):
    """Same kit/pack detection applied to a PRODUCT NAME — catches SIMPLE products titled e.g.
    'IGF-1 LR3 1mg Kit' that carry no variation attributes for is_kit() to inspect (Royal's leak)."""
    return bool(_KIT_RE.search(name or ""))


# Ten-vial-kit landing pages: "buy-X-online" / "X-kits" slugs whose name/description carries no
# provable ten-vial token, so extract_rows' /10 never fires and the full kit price would leak as a
# single. NARROW + slug-only ON PURPOSE — bare 'kit' is on Royal's legit '…-Nmg-vial-kit' curve
# (correctly divided) and 'buy-X-online' is Behemoth's normal slug, so classify() consults this ONLY
# for the ten-vial-kit vendor. FP-scanned: matches the 3 Royal landing pages, no legit row.
_KIT_LANDING = re.compile(r'buy-[a-z0-9-]*-online|-kits\b', re.I)


def is_kit_landing(slug):
    """True if a SLUG is a ten-vial-kit landing page (buy-X-online / X-kits). Slug-only; caller gates
    it behind the ten-vial-kit registry flag."""
    return bool(_KIT_LANDING.search(slug or ""))


_KIT10 = re.compile(r'(\d+(?:\.\d+)?)\s*mg\s*x\s*10\s*vials', re.I)
# Royal also sells 10-vial kits named "...Kit" (not "...x10vials"). "Kit" alone is NOT
# proof of 10 vials — some "Kit" products describe a single vial. So gate the /10 on an
# EXPLICIT ten-vial token in the name or description (evidence, never the "Kit" word):
#   Pinealon desc "( 10 Vials)", Dihexa "10 Vial Kit- 100mg total" -> /10 (verified);
#   Adamax/IGF-1 LR3/Thymalin/Vesugen say only "each 10mg vial" -> left at full price.
_TEN_VIAL = re.compile(r'x\s*10\s*vials?|\b10\s*[-\s]?vials?\b|\(\s*10\s*vials?\s*\)', re.I)


def _pr(o):
    """(current_price, regular_price) for a product/variation dict; regular falls back to
    price when an adapter didn't supply a distinct anchor."""
    price = o.get('price', o.get('regular'))
    regular = o.get('regular')
    if regular is None:
        regular = price
    return price, regular


def extract_rows(product, ten_vial_kit=False):
    """Return [(size_label, price, regular, in_stock, form)] for one normalized product.
    `price` is the current effective price (sale-aware); `regular` is the list anchor.

    `ten_vial_kit` (from the vendor's registry variation_model) enables the "...Kit"
    per-vial division below. It is vendor-scoped on purpose: a global "10 vials" match
    also fires on EZ Peptides' "(10 vials/Kit)" listings, where the doc reports the
    single-vial price — so the broad rule stays limited to the ten-vial-kit vendor (Royal).
    """
    name = product['name']
    variations = product.get('variations') or []

    # --- simple products (no variation axis) ---
    if not variations:
        pprice, pregular = _pr(product)
        # ten-vial-kit (Royal): "Nmgx10vials" -> per-vial price = kit / 10 (both price & regular)
        m = _KIT10.search(name)
        if m and pprice is not None:
            return [(m.group(1) + 'mg', round(pprice / 10, 2),
                     round(pregular / 10, 2) if pregular is not None else None, product.get('in_stock'), 'vial')]
        # "...Kit" priced as a 10-vial kit, but ONLY for the ten-vial-kit vendor AND only
        # when name/description proves 10 vials (Pinealon "(10 Vials)", Dihexa "10 Vial Kit").
        size = parse_size(name)
        # RULE B: an oral count-pack ("500mcg 100 tabs bottle") states a per-unit dose that parse_size
        # reads as the size; override it with the PACKAGE TOTAL (dose x count). Try the NAME first,
        # then the vendor SLUG — some vendors shorten the display name but keep the count in the slug
        # (royal 'Tesofensine' / shop/tesofensine-500mcg-100-bottle). Abstains -> size unchanged.
        cm = count_mult(name) or count_mult(product.get('slug') or '')
        if cm:
            size = cm
        if not size:
            # Dose not in the name: for a simple product, fall back to a SINGLE unambiguous mg
            # stated in the description (Modern Aminos lists Petrelintide as "10mg" and Thymogen
            # "20MG" only in the body). ONLY when the description names exactly one distinct dose —
            # never infer (PP_PRICES Rule 4: a genuinely no-size row stays no-size and is excluded).
            vals = set()
            for num, unit in re.findall(r'(\d+(?:\.\d+)?)\s*(mcg|mg)\b', product.get('description') or '', re.I):
                vals.add(float(num) / 1000 if unit.lower() == 'mcg' else float(num))
            if len(vals) == 1:
                size = f'{next(iter(vals)):g}mg'
        if ten_vial_kit and size and pprice is not None and \
                _TEN_VIAL.search(name + ' ' + (product.get('description') or '')):
            return [(size, round(pprice / 10, 2),
                     round(pregular / 10, 2) if pregular is not None else None, product.get('in_stock'), 'vial')]
        return [(size or name, pprice, pregular, product.get('in_stock'), 'vial')]

    # --- variable products ---
    rows = []
    for v in variations:
        attrs = v.get('attrs', [])
        values = [val for (_, val) in attrs]
        # size: first attr value that parses as mg (dosage/strength). If the value is a bare
        # number and the UNIT is in the attr NAME (NextGen: attr "MG" = "20"), use that. Else
        # fall back to the product name.
        size = None
        for aname, val in attrs:
            size = parse_size(val)
            if size:
                break
            if re.fullmatch(r'\d+(?:\.\d+)?', str(val).strip()) and re.search(r'\b(mg|mcg)\b', str(aname), re.I):
                unit = 'mcg' if re.search(r'mcg', str(aname), re.I) else 'mg'
                size = f"{str(val).strip()}{unit}"
                break
        if not size:
            size = parse_size(name)
        vprice, vregular = _pr(v)
        rows.append((size or name, vprice, vregular, v.get('in_stock'), form_of(values), is_kit(values)))

    # drop kit/bulk variations when a single-unit variation exists (keep single-vial base)
    non_kit = [r for r in rows if not r[5]]
    use = non_kit if non_kit else rows
    return [(r[0], r[1], r[2], r[3], r[4]) for r in use]
