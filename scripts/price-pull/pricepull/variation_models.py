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


def form_of(values):
    """Delivery form from variation attribute values."""
    j = ' '.join(values).lower()
    if re.search(r'spray|nasal', j):
        return 'spray'
    if re.search(r'tablet|sublingual|capsule|troche|\boral\b|cream|\bgel\b|lozenge', j):
        return 'tablet'
    return 'vial'


def is_kit(values):
    """True if a variation is a multi-vial kit / bulk pack (not a single unit)."""
    j = ' '.join(values).lower()
    return bool(re.search(r'\bkit\b|x ?10 ?vials|\b(?:[2-9]|1[0-9]) ?vials\b|bulk', j))


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
