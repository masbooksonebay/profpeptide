"""Classification + section rendering — assembles a NormProduct list into the exact
PP_PRICE_DATA_MASTER section format (header, sale posture, Single compounds, Blends,
Sprays, Excluded), applying every shared rule.
"""
import re
from . import decoders, variation_models as vm
from . import normalize as N

_SPRAY = re.compile(r'spray|nasal', re.I)


def _row(cells):
    return "| " + " | ".join(str(c) for c in cells) + " |"


def classify(vendor, product):
    """Yield classified rows for one product:
       ('single'|'blend'|'spray', display, size_label, base, in_stock, ratio, components)
    or ('exclude', reason)."""
    name = product['name']

    dec = decoders.decode(vendor, name)
    if dec:
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

    for size_label, base, ins, form in vm.extract_rows(product):
        if base is None or base <= 0:      # drop $0 / hidden-price rows
            continue
        if form == 'tablet':               # oral forms out of scope
            yield ('exclude', 'oral/tablet/sublingual'); continue
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
            yield ('blend', disp, (f"{tm:g}mg" if tm else N.size_label(size_label)), base, ins, ratio, comps)
        elif rowkind == 'spray':
            yield ('spray', disp, N.size_label(size_label), base, ins, None, None)
        else:
            yield ('single', disp, N.size_label(size_label), base, ins, None, None)


def build_section(vendor, meta, products, pulled_date, extra_posture=""):
    """meta: {name, code, discount, url}. Returns the markdown section text."""
    singles, blends, sprays, excl = {}, [], [], set()
    for p in products:
        for r in classify(vendor, p):
            if r[0] == 'exclude':
                excl.add(r[1]); continue
            kind, disp, size, base, ins, ratio, comps = r
            st = "✓" if ins else "✗"
            if kind == 'single':
                mg = N.mg_value(size)
                key = (disp, size)
                cand = (base, (disp, size, f"${base:,.2f}", N.per_mg(base, mg), st))
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
    L.append(_row(["Compound", "Size", "Base", "$/mg", "Stock"])); L.append(_row(["---"] * 5))
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
