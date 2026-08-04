"""Classification + section rendering — assembles a NormProduct list into the exact
PP_PRICE_DATA_MASTER section format (header, sale posture, Single compounds, Blends,
Sprays, Excluded), applying every shared rule.
"""
import re
from . import decoders, variation_models as vm
from . import normalize as N

_SPRAY = re.compile(r'spray|nasal', re.I)

# Wholesale-only SKUs — a real price no retail buyer can access (would rank the vendor cheapest
# on /prices for a price nobody can buy at). The "Wholesale ONLY" label is explicit, so this is
# safe as a GENERAL rule — unlike a blanket "kit" slug check, which flagged 16 legitimate rows to
# catch 2 (see MANUAL_EXCLUDE). Currently the only match is Swiss Chems' AOD-9604 2mg.
_WHOLESALE = re.compile(r'wholesale[\s-]*only', re.I)

# Manually excluded SKUs the automatic classifiers can't correctly drop — matched against the
# resolved slug OR the name (substring, case-insensitive), each with its reason. Deliberately a
# short, NAMED list rather than a general slug rule: a blanket slug "kit" match was rejected
# because it flagged 16 correctly-priced rows (biocollex glp3-bundle, peptide-partners tb4-kit,
# and 10 royal single-vials whose slugs merely contain "-kit") to catch these 2 real leaks.
MANUAL_EXCLUDE = {
    "royal-peptides": [
        ("cagrilintide-kit", "10-vial kit whose NAME carries no kit marker (only the slug does), so "
                             "is_kit_name misses it — $360 = $72/mg vs a ~$11/mg median."),
        ("cjc-1295-no-dac-5mg-kit", "10-vial kit whose NAME carries no kit marker — $430 = $86/mg vs "
                                    "a ~$10/mg median."),
        ("vip-vasoactive-intestinal-peptide-10mg", "pricing error: this single 10mg is listed at $465, "
                                                   "ABOVE the same vendor's 10-vial kit ($330) — internally "
                                                   "impossible, so removed as an error, not a premium."),
    ],
    "behemoth-labz": [
        ("dihexa", "form-strength product (powder/liquid/tabs); its '10mg per ml' liquid mis-parses as a "
                   "10mg vial ($9.18 = $0.92/mg). Not a vial price. (MK-777 is the same class — reported, "
                   "not yet excluded.)"),
    ],
    "biopure-peptides": [
        ("wolverine", "'BPC Wolverine + KPV - 14.5mg' is a 3-component blend (Wolverine BPC-157/TB-500 + KPV) "
                      "that the shared classifier mis-reads as a KPV 14.5mg SINGLE ($129.99 = $8.97/mg of "
                      "'KPV', wrong). Not in the blend registry, so excluded here rather than shipped as a bad "
                      "single. (TSM = Tesamorelin by its th9507 slug is separately left undecoded/excluded.)"),
    ],
}


def _row(cells):
    return "| " + " | ".join(str(c) for c in cells) + " |"


def classify(vendor, product, ten_vial_kit=False, sitewide_sale=0.0):
    """Yield classified rows for one product:
       ('single'|'blend'|'spray', display, size_label, base, in_stock, ratio, components,
        regular_or_None, on_sale)
    or ('exclude', reason).

    base = current effective price a buyer pays PRE-PP-code = the product's current price
    (sale_price when on sale) x (1 - sitewide_sale). `sitewide_sale` covers cart-level
    auto-coupons that never appear in product data (Biolongevity's 'longevityvip' 50%).
    on_sale is computed as base < regular (the woo `on_sale` flag is unreliable — some
    vendors flag it with no actual markdown)."""
    name = product['name']
    vslug = product.get('slug', '')          # the vendor's own product slug (nextjs/Medusa); '' for adapters that don't expose one

    # Wholesale-only SKUs (general, explicit-label rule) and the short NAMED manual-exclude list.
    if _WHOLESALE.search(name):
        yield ('exclude', 'wholesale-only SKU (not a retail price)'); return
    hay = f"{vslug} {name}".lower()
    for frag, reason in MANUAL_EXCLUDE.get(vendor, ()):
        if frag in hay:
            yield ('exclude', f'manually excluded — {reason}'); return

    # Kit/pack/bundle in the NAME of a product with no variations for is_kit() to inspect — e.g.
    # Royal's simple "IGF-1 LR3 1mg Kit". Exclude it: a kit price must never ship as a single-vial
    # row (that mis-ranks the vendor ~Nx on /prices). Variable products fall through — their
    # variant-level is_kit drops kit variants and keeps the vial (so "Vial/ Kit" products survive).
    if not product.get('variations') and vm.is_kit_name(name):
        yield ('exclude', 'multi-vial kit / pack (by name)'); return

    dec = decoders.decode(vendor, name)
    dec_size = None                         # decoder-supplied mg (e.g. Ascension R-30 -> 30)
    if dec:
        if len(dec) == 4:
            disp, slug, kind, dec_size = dec
        else:
            disp, slug, kind = dec
        if disp == 'EXCLUDE':
            yield ('exclude', 'clinical/other'); return
        backlog = '[backlog]' in disp
    else:
        sc = N.scope(name)
        if sc != 'peptide':
            yield ('exclude', sc); return
        k, slug = decoders.match(name)
        if k == 'UNMAPPED':
            yield ('exclude', 'out-of-scope (SARMs/Rx/cosmetics)'); return
        backlog = (k == 'BACKLOG')
        bo = N.blend_of(name)
        if bo:
            kind, slug, disp = 'blend', bo[0], N.BLEND_DISPLAY.get(bo[0], name)
        elif slug in N.BLEND_COMPONENTS:      # bare slug match to a known blend (e.g. "GLOW 70mg")
            kind, disp = 'blend', N.BLEND_DISPLAY[slug]
        elif _SPRAY.search(name):
            kind, disp = 'spray', N.display_of(slug, backlog) + ' (spray)'
        else:
            kind, disp = ('single_bk' if backlog else 'single'), N.display_of(slug, backlog)

    for size_label, price, regular, ins, form in vm.extract_rows(product, ten_vial_kit=ten_vial_kit):
        if price is None or price <= 0:    # drop $0 / hidden-price rows
            continue
        base = round(price * (1 - sitewide_sale), 2)       # apply sitewide cart-coupon
        reg = regular if regular is not None else base
        on_sale = base < reg - 0.005                        # cent tolerance
        reg_out = reg if on_sale else None                  # only carry the anchor when it's a real markdown
        if dec_size and N.mg_value(size_label) is None:   # code encodes mg (Ascension)
            size_label = f"{dec_size}mg"
        if form == 'tablet':               # oral forms out of scope
            yield ('exclude', 'oral/tablet/sublingual'); continue
        if form == 'liquid':               # per-ml concentration, not a vial ($/mg-per-vial out of scope)
            yield ('exclude', 'liquid/concentration (per-ml, not a vial)'); continue
        rowkind = 'spray' if (form == 'spray' and kind not in ('blend', 'blend_bk')) else kind
        if rowkind in ('blend', 'blend_bk'):
            bo = N.blend_of(name)
            if bo:
                comps, ratio, tm = bo[1], bo[2], bo[3]
            else:
                comps = N.BLEND_COMPONENTS.get(slug) or (re.sub(r'.*\((.*?)\).*', r'\1', disp) if '(' in disp else '')
                mgs = re.findall(r'(\d+(?:\.\d+)?)\s*mg', name, re.I)
                ratio = 'not published'
                tm = sum(float(x) for x in mgs) if len(mgs) >= 2 else N.mg_value(size_label)
            yield ('blend', disp, (f"{tm:g}mg" if tm else N.size_label(size_label)), base, ins, ratio, comps, reg_out, on_sale, vslug)
        elif rowkind == 'spray':
            yield ('spray', disp, N.size_label(size_label), base, ins, None, None, reg_out, on_sale, vslug)
        else:
            # PP_PRICES Rule 4: a single with no parseable mg can't be priced $/mg — exclude it
            # here (to_prices drops it anyway) so the section never shows a misleading no-size row.
            if N.mg_value(size_label) is None:
                yield ('exclude', 'no parseable size (Rule 4)'); continue
            yield ('single', disp, N.size_label(size_label), base, ins, None, None, reg_out, on_sale, vslug)


def build_section(vendor, meta, products, pulled_date, extra_posture="", ten_vial_kit=False, sitewide_sale=0.0):
    """meta: {name, code, discount, url}. Returns the markdown section text."""
    singles, blends, sprays, excl = {}, [], [], set()
    for p in products:
        for r in classify(vendor, p, ten_vial_kit=ten_vial_kit, sitewide_sale=sitewide_sale):
            if r[0] == 'exclude':
                excl.add(r[1]); continue
            kind, disp, size, base, ins, ratio, comps, reg, on_sale, vslug = r
            st = "✓" if ins else "✗"
            reg_str = f"${reg:,.2f}" if on_sale and reg else "—"    # Regular column: anchor only when on sale
            if kind == 'single':
                mg = N.mg_value(size)
                key = (disp, size)
                cand = (base, (disp, size, f"${base:,.2f}", N.per_mg(base, mg), reg_str, st, vslug or "—"))
                if key not in singles or base < singles[key][0]:   # min base per (compound,size)
                    singles[key] = cand
            elif kind == 'blend':
                blends.append((disp, comps or '', size, f"${base:,.2f}", ratio, st))
            elif kind == 'spray':
                sprays.append((disp, size, f"${base:,.2f}", st))

    singles = [v[1] for v in singles.values()]
    blends = list(dict.fromkeys(blends))
    sprays = list(dict.fromkeys(sprays))

    L = [f"## VENDOR: {meta['name']}"]
    L.append(f"- **slug:** {vendor} | **code:** {meta['code']} | **discount:** {meta['discount']} | **url:** {meta['url']}")
    L.append(f"- **traffic:** (not pulled) | **pulled:** {pulled_date}")
    posture = meta.get('sale_posture', '')
    if extra_posture:
        posture = (posture + " " + extra_posture).strip()
    L.append(f"- **sale posture:** {posture}")
    L.append("")
    L.append("### Single compounds")
    L.append(_row(["Compound", "Size", "Base", "$/mg", "Regular", "Stock", "Vendor Slug"])); L.append(_row(["---"] * 7))
    for r in sorted(singles, key=lambda x: (x[0].lower(), N.mg_value(x[1]) or 0)):
        L.append(_row(list(r)))
    L.append("")
    if blends:
        L.append("### Blends (total mg; ratio where published)")
        L.append(_row(["Blend", "Components", "Total mg", "Base", "Ratio", "Stock"])); L.append(_row(["---"] * 6))
        for b in sorted(blends, key=lambda x: x[0].lower()):
            L.append(_row(list(b)))
        L.append("")
    if sprays:
        L.append("### Sprays / strips (separate format, no $/mg)")
        L.append(_row(["Product", "Size", "Base", "Stock"])); L.append(_row(["---"] * 4))
        for s in sorted(sprays, key=lambda x: x[0].lower()):
            L.append(_row(list(s)))
        L.append("")
    else:
        L.append("### Sprays: none")
    L.append(f"### Excluded: {', '.join(sorted(excl)) or 'none'} — bac water/supplies, capsules/oral forms, "
             f"SARMs, Rx, cosmetics, clinical hormones (out of PP scope).")
    L.append("")
    return "\n".join(L), {"singles": len(singles), "blends": len(blends), "sprays": len(sprays)}
