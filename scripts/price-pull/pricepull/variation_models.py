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
    """mg size label from a string, or None."""
    if not s:
        return None
    m = re.search(r'(\d+(?:\.\d+)?)\s*(mcg|mg)\b', str(s).lower().replace(',', ''))
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


def extract_rows(product):
    """Return [(size_label, base_price, in_stock, form)] for one normalized product."""
    name = product['name']
    variations = product.get('variations') or []

    # --- simple products (no variation axis) ---
    if not variations:
        # ten-vial-kit (Royal): "Nmgx10vials" -> per-vial price = kit / 10
        m = _KIT10.search(name)
        if m and product.get('regular') is not None:
            return [(m.group(1) + 'mg', round(product['regular'] / 10, 2), product.get('in_stock'), 'vial')]
        return [(parse_size(name) or name, product.get('regular'), product.get('in_stock'), 'vial')]

    # --- variable products ---
    rows = []
    for v in variations:
        values = [val for (_, val) in v.get('attrs', [])]
        # size: first attr value that parses as mg (dosage/strength), else from the product name
        size = None
        for val in values:
            size = parse_size(val)
            if size:
                break
        if not size:
            size = parse_size(name)
        rows.append((size or name, v.get('regular'), v.get('in_stock'), form_of(values), is_kit(values)))

    # drop kit/bulk variations when a single-unit variation exists (keep single-vial base)
    non_kit = [r for r in rows if not r[4]]
    use = non_kit if non_kit else rows
    return [(r[0], r[1], r[2], r[3]) for r in use]
