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
# STOPGAP (2026-08-04): the corpus-wide scan found 24 blend leaks + oral/count leaks rendering
# wrong $/mg live. These are per-entry excludes to pull the wrong rows NOW; the permanent fix is a
# shared classifier guard (built as a separate job) that detects "≥2 distinct compound aliases match"
# BEFORE decoders.match() collapses to one — match() picks the LONGEST-alias compound, not the first,
# so a blend lands on an unpredictable component (bpc-157-tb-500 -> BPC-157; semax-selank-pinealon ->
# Pinealon). Every frag below was FP-scanned against the generated corpus: catches only the leak, no
# legitimate single. LL-37 caps ($14-30/mg, ~2-3x the vial median across 4 vendors) were reviewed and
# KEPT — a real oral product, not a leak.
MANUAL_EXCLUDE = {
    "ez-peptides": [
        ("5-amino-1mq-50mg-25-tabs-bottle",
         "CORRECT DATA held pending the FORMAT-COMPARABILITY decision — NOT a leak, do not 'fix' the data. "
         "Rule B correctly computes 50mg x 25 tabs = 1250mg ($0.10/mg). But this ORAL BULK pack would rank "
         "against INJECTABLE vials on /prices/5-amino-1mq and take Best-$/mg at ~1/50 the vial rate — oral "
         "tabs and an injectable vial are not the same product form. Held here until oral-vs-injectable "
         "comparability is decided (Rule D territory). ez's injectable 5-amino-1mq-50mg vial is UNAFFECTED "
         "(frag is the FULL count-pack slug; FP-scanned: 1 hit, the vial untouched). Re-include if oral "
         "forms get their own lane on /prices."),
        ("retacagri-blend", "blend leak: 'Reta/Cagri Blend - 12.5mg/2.5mg' (Retatrutide/Cagrilintide "
                            "combo) resolves to Cagrilintide 12.5mg. Same blend ameano excludes as "
                            "'reta-cagri-blend'. ⚠️ check:prices CANNOT catch this: at $9.44/mg vs a "
                            "$9.60 cagrilintide median it is 0.98x — a NEAR-MEDIAN leak, not an outlier. "
                            "Caught only by hand-reading the rows. Frag FP-scanned: 1 hit, ez's real "
                            "cagrilintide-5mg / cagrilintide-10mg vials untouched. Retire when Rule A "
                            "(blend guard) lands."),
    ],
    "royal-peptides": [
        ("cagrilintide-kit", "10-vial kit whose NAME carries no kit marker (only the slug does), so "
                             "is_kit_name misses it — $360 = $72/mg vs a ~$11/mg median."),
        ("cjc-1295-no-dac-5mg-kit", "10-vial kit whose NAME carries no kit marker — $430 = $86/mg vs "
                                    "a ~$10/mg median."),
        ("vip-vasoactive-intestinal-peptide-10mg", "pricing error: this single 10mg is listed at $465, "
                                                   "ABOVE the same vendor's 10-vial kit ($330) — internally "
                                                   "impossible, so removed as an error, not a premium."),
        ("selank-semax-blend", "blend leak: Semax/Selank blend mis-classified as Selank 20mg ($4.50/mg). "
                               "check:prices passed it (near the corrupted Selank-20mg median)."),
        ("discover-slu-pp-332", "oral/count — UNRESOLVABLE: variable product 'SLU-PP-332 50/100 count bottles' "
                                "(5 variants). Count is stated as '50/100' with no reliable per-variant mapping, so "
                                "the package total can't be computed from public data. Stays excluded (absent beats a "
                                "guessed total). Re-add per-variant once the count is confirmed."),
    ],
    "behemoth-labz": [
        ("dihexa", "form-strength product (powder/liquid/tabs); its '10mg per ml' liquid mis-parses as a "
                   "10mg vial ($9.18 = $0.92/mg). Not a vial price. (MK-777 is the same class — reported, "
                   "not yet excluded.)"),
        ("bpc-157-tb-500", "blend leak: BPC-157/TB-500 blend -> BPC-157 (4/15mg). Also catches the "
                           "igf-lr3-bpc-157-tb-500 blend (11mg)."),
        ("igf-lr3-bpc-157", "blend leak: IGF-1 LR3/BPC-157 (+TB-500) blends -> BPC-157 (6/11mg)."),
        ("bpc-157-arg-tb-500", "blend leak: BPC-157/Arg/TB-500/GHK-Cu 4-way blend -> BPC-157 30mg."),
        ("ipamorelin-ghrp-2", "blend leak: Ipamorelin/GHRP-2 blend -> Ipamorelin 20mg."),
        ("sermorelin-ghrp-2", "blend leak: Sermorelin/GHRP-2 blend -> Sermorelin 10mg."),
        ("sermorelin-ipamorelin", "blend leak: Sermorelin/Ipamorelin blend -> Sermorelin 20mg."),
    ],
    "biopure-peptides": [
        ("wolverine", "'BPC Wolverine + KPV - 14.5mg' is a 3-component blend (Wolverine BPC-157/TB-500 + KPV) "
                      "that the shared classifier mis-reads as a KPV 14.5mg SINGLE ($129.99 = $8.97/mg of "
                      "'KPV', wrong). Not in the blend registry, so excluded here rather than shipped as a bad single."),
        ("th9507-ipamorelin", "blend leak: TSM(Tesamorelin=TH9507)/Ipamorelin blend -> Ipamorelin 5mg ($19.00/mg)."),
    ],
    "purerawz": [
        ("the-alpha-blend", "blend leak: multi-component 'Alpha Blend' -> BPC-157 6mg ($27.41/mg)."),
        ("kpv-bpc-157-arg", "blend leak: KPV/BPC-157/Arg blend -> BPC-157 15mg."),
        ("bpc-157-tb-500-ghk-cu", "blend leak: BPC-157/TB-500/GHK-Cu blend -> BPC-157 30mg."),
        ("sermorelin-ghrp-2", "blend leak: Sermorelin/GHRP-2 blend -> Sermorelin 5mg."),
        ("sermorelin-ghrp-6", "blend leak: Sermorelin/GHRP-6 blend -> Sermorelin 10mg."),
        ("sermorelin-ipamorelin", "blend leak: Sermorelin/Ipamorelin blend -> Sermorelin 20mg."),
    ],
    "ameano-peptides": [
        ("reta-cagri-blend", "blend leak: Retatrutide/Cagrilintide blend -> Cagrilintide 12.5mg ($10.80/mg)."),
    ],
    "glacier-aminos": [
        ("semaxselank", "blend leak: Semax/Selank blend -> Selank 20mg ($4.10/mg). Was the Selank-20mg MEDIAN."),
    ],
    "modern-aminos": [
        ("semax-selank", "blend leak: Semax/Selank blend mis-classified as Selank 5/12/20/30mg. modern ALSO "
                         "sells a real Selank 10mg single (product/selank-10mg) which is UNAFFECTED and stays on "
                         "/prices — only the blend rows are removed."),
        ("pentadecapeptide", "blend/combo leak (≥10x): 'BPC-157 (Pentadecapeptide) & PDA (Pentadeca Arginate)' "
                             "is a BPC-157+PDA combo whose 3 size variants ALL render as BPC-157 — the 500mcg "
                             "dry-fill at $178/mg = 32.4x median. modern has NO pure-BPC-157 single, so this "
                             "removes modern from /prices/bpc-157 entirely (correct: it doesn't sell clean BPC-157). "
                             "NOTE the slug 'pentadecapeptide' contains 'cap' — a Rule-A word-boundary FP case (below)."),
    ],
    "peptidology": [
        ("semax-selank", "blend leak: Semax/Selank blend -> Selank 27mg ($4.81/mg)."),
        ("product/vip", "UNCERTAIN, pending verification (not confirmed bad): VIP 11.27mg — clean slug, anomalous "
                        "size (VIP singles are 10mg), unresolved from generated data. Absent beats wrong; re-add if verified."),
    ],
    "nextgen-peptides": [
        ("semax-selank-pinealon", "blend leak: Semax/Selank/Pinealon 3-way blend -> Pinealon 60mg ($2.42/mg) "
                                  "(match() picked Pinealon as the LONGEST alias, not the first-named)."),
        ("nad5-amino-mq", "blend leak (≥10x): 'NAD+5-AMINO-MQ 50MG each' is a NAD+/5-Amino-1MQ blend rendering "
                          "as NAD+ 50mg ($2.70/mg = 20.8x median). Frag is 'nad5-amino-mq' (NOT bare 'nad+' — "
                          "the compound name itself contains '+', so a careless frag would catch real NAD+ rows; "
                          "FP-scanned: hits only this blend, leaves nextgen's real product/nad-500mg untouched)."),
    ],
    # ── Rule A (count-multiplication) WORD-BOUNDARY FP CASES — build the fix against these ──
    # These slugs/names contain a count-format substring but are NOT count products; Rule A's regex
    # MUST use word boundaries so it does not resize/exclude them:
    #   • product/pentadecapeptide  — "cap" is inside BPC-157's scientific name "pentadecapeptide".
    #   • any "...capeptide" / "peptide" token — never a "capsule".
    # (LL-37 "CAP-18" caps ARE oral products but were kept as legitimate; Rule A must not touch them either.)
    # ── ORAL/COUNT RE-EXAMINATION (2026-08-04) ────────────────────────────────────────────────
    # The first pass over-excluded. For NATIVELY-ORAL small molecules (orforglipron, tesofensine,
    # slu-pp-332) there is no injectable comparator, so "oral format" is not evidence of a leak —
    # the real defect was a SIZE PARSE (per-unit dose read as package size). Recomputing the package
    # total (per-unit dose x count) made 8 of 13 rows RECOVERABLE at a plausible $/mg; they were
    # RESTORED to the master doc at their CORRECT total size and their excludes REMOVED (ez-peptides
    # all, oasis-labs all, swiss-chems all, royal tesofensine-500mcg-100-bottle).
    # ⚠️ RE-PULL HAZARD: the woo adapter still parses the PER-UNIT dose as size (count-multiplication
    # is not implemented yet — the recommended shared fix, same layer as the blend guard). Until that
    # lands, re-pulling ez-peptides / oasis-labs / swiss-chems / royal will REINTRODUCE these rows at
    # the wrong per-unit size. Build count-multiplication BEFORE the next re-pull of those vendors.
    # Only royal 'discover-slu-pp-332' stays excluded (UNRESOLVABLE count) — see its note above.
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

    # Ten-vial-kit vendor (Royal) landing-page products — "buy-X-online" / "X-kits" slugs that carry
    # NO provable 'Nmg x 10 vials' token, so the per-vial /10 in extract_rows never fires and the full
    # kit price leaks as a single (Retatrutide 40mg $860 vs the real 30mg $185 / 50mg $285 curve).
    # NARROW, vendor-scoped, SLUG-only — deliberately NOT bare 'kit' (that word is on Royal's LEGIT
    # '…-Nmg-vial-kit' curve, correctly divided) and 'buy-X-online' is also Behemoth's normal slug
    # format, so this only fires for the ten-vial-kit vendor. Excluded, not divided: the divisor
    # isn't provable from a landing page (÷10 undershoots the curve, so exclusion is the safe call).
    if ten_vial_kit and vm.is_kit_landing(vslug):
        yield ('exclude', 'multi-vial kit landing page (by slug)'); return

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
        sc = N.scope(name, vslug)
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
        else:
            # RULE A (Part 1): a name resolving to >=2 DISTINCT single compounds is an UNREGISTERED
            # multi-compound blend leaking as a single (match() above collapsed it to the longest
            # alias). Registered blends were handled by blend_of / BLEND_COMPONENTS just above, so this
            # only fires on the unregistered ones (semax-selank, retacagri, BPC+PDA, NAD+5-amino-mq, …).
            # Exclude from singles — never ship a blend as a single. Reason names both compounds; the
            # product is a blend-registry candidate (promote to BLEND_COMPONENTS if worth showing).
            bslugs = decoders.blend_slugs(name)
            if len(bslugs) >= 2:
                yield ('exclude', f'blend leak (Rule A): {" + ".join(sorted(bslugs))} — '
                                  f'blend-registry candidate'); return
            if _SPRAY.search(name):
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
            # Emit a per-SKU 'nosize' record (name/id/url/type) instead of a generic reason so the
            # drop is COUNTED, not silent — build_section aggregates it into the returned counts.
            if N.mg_value(size_label) is None:
                yield ('nosize', disp, product.get('id'), product.get('permalink', ''), product.get('type', '')); continue
            yield ('single', disp, N.size_label(size_label), base, ins, None, None, reg_out, on_sale, vslug)


def build_section(vendor, meta, products, pulled_date, extra_posture="", ten_vial_kit=False, sitewide_sale=0.0):
    """meta: {name, code, discount, url}. Returns the markdown section text."""
    singles, blends, sprays, excl = {}, [], [], set()
    nosize_dropped = []   # per-SKU record of Rule-4 no-size drops (Class A) — counted, not silent
    for p in products:
        for r in classify(vendor, p, ten_vial_kit=ten_vial_kit, sitewide_sale=sitewide_sale):
            if r[0] == 'exclude':
                excl.add(r[1]); continue
            if r[0] == 'nosize':
                _, nm, pid, purl, ptype = r
                nosize_dropped.append({"name": nm, "id": pid, "url": purl, "type": ptype})
                excl.add('no parseable size (Rule 4)'); continue
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
    # Class A = no-size drops (never emitted). Class B = emitted singles whose size still won't
    # parse to mg (should be 0 — build excludes them above; a non-zero here means a leak).
    emitted_sizeless = [r for r in singles if N.mg_value(r[1]) is None]
    return "\n".join(L), {"singles": len(singles), "blends": len(blends), "sprays": len(sprays),
                          "catalog": len(products),
                          "nosize_dropped": nosize_dropped, "emitted_sizeless": emitted_sizeless}
