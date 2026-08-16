#!/usr/bin/env python3
"""Inverse of build.py: READ docs/PP_PRICE_DATA_MASTER_v1.md (the one-directional
source of truth) and emit src/data/prices.generated.ts — the single-compound price
rows for the price-comparison page's data layer.

This NEVER writes the master doc. It only reads it. Blends, sprays, [coded,
UNVERIFIED] rows, and rows with no parseable mg size are excluded from v1 (reported).
Run:  python3 scripts/price-pull/to_prices.py            # generate + validate + report
"""
import os, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(Path(__file__).resolve().parent))
from pricepull import normalize as N   # canonical DISPLAY + mg_value (reuse, never re-derive)

DOC = ROOT / "docs" / "PP_PRICE_DATA_MASTER_v1.md"
OUT = ROOT / "src" / "data" / "prices.generated.ts"
INDEX_OUT = ROOT / "src" / "data" / "prices.index.json"
VENDORS_TS = ROOT / "src" / "data" / "vendors.ts"
PEPTIDES_DIR = ROOT / "src" / "app" / "peptides"

# --- hand-maintained alias map: doc display name -> compound slug -------------
# Only for names whose canonical display doesn't invert cleanly to a profile slug.
ALIAS = {
    "Kisspeptin-10": "kisspeptin",      # profile lives at /peptides/kisspeptin
    "CJC-1295 (no-DAC)": "cjc-1295",    # no-DAC variant shares the CJC-1295 profile
}

# display -> slug, inverted from the suite's canonical DISPLAY map
DISP2SLUG = {v: k for k, v in N.DISPLAY.items()}

# Branded/proprietary SKUs that resolve to a "compound" slug but are NOT a distinct
# compound (a blend/vendor product marketed under a name). Excluded from the price
# comparison — they aren't per-mg comparable across vendors. Hand-maintained.
#   slimassist = Biolongevity "SlimAssist (FLGR242 2mg / 500mcg B Complex)" — a dual-
#                component branded blend, not a single compound.
NOT_A_COMPOUND = {"slimassist"}

# Real, correctly-identified compounds that are OUTSIDE PP's editorial scope (distinct from
# NOT_A_COMPOUND, which is for non-distinct branded blends). PP excludes clinical hormones,
# biologics, fusion proteins, native growth-factor proteins, and oncology compounds — the
# same basis that removed Gonadorelin/Triptorelin (clinical reproductive hormones) upstream
# in the scope filter. These are singles that resolve to a valid slug but must not be priced
# OR listed anywhere on PP (see the editorial-scope rule in scripts/price-pull/README.md).
#   pnc-27 = p53-derived ANTICANCER research peptide — PP does not cover oncology.
#   klotho = native a-Klotho PROTEIN (Biolongevity: "research-grade klotho protein") —
#            native growth-factor/longevity protein, single-vendor only.
OUT_OF_SCOPE = {"pnc-27", "klotho"}

# Vendor coded GLP names — Mark-confirmed established mappings (not inferences).
# Glacier's own labels corroborate (GLA-3 RT: CAS 2381089-83-2 / MW 4731.42;
# GLA-2 TRZ: CAS 2023788-19-2 / MW 4813.45). A "[coded, UNVERIFIED]" single from
# these vendors whose code isn't here is reported (not force-mapped), never dropped
# silently. Keyed by vendor slug -> exact code -> compound slug; listedAs = the code.
CODED_DECODE = {
    "glacier-aminos":      {"GLA-1 SM": "semaglutide", "GLA-2 TRZ": "tirzepatide", "GLA-3 RT": "retatrutide"},
    "purerawz":            {"GLP-1": "semaglutide", "GLP-1.2": "tirzepatide", "GLP-1.3": "retatrutide"},
    "vital-core-research": {"GLP-1": "semaglutide", "GLP-2": "tirzepatide", "GLP-3": "retatrutide"},
    # 2026-07 batch — Mark-confirmed (same standard). LA's key uses an en-dash "–" (the
    # source name, unescaped from "GLP &#8211; 3 (R)"). NextGen TRZ-2/Cagri are decoded in
    # decoders.py (verified); only its GLP-3 is mapped here.
    "la-peptides":         {"GLP – 1 (S)": "semaglutide", "GLP – 2 (T)": "tirzepatide", "GLP – 3 (R)": "retatrutide"},
    "mile-high-compounds": {"MHC-1 SM": "semaglutide", "MHC-2 TRZ": "tirzepatide", "MHC-3 RT": "retatrutide"},
    "peptidology":         {"GLP1 (PGL-G1)": "semaglutide", "GLP2 (PGL-GI1)": "tirzepatide", "GLP3 (PGL-GIC1)": "retatrutide"},
    "nextgen-peptides":    {"GLP-3": "retatrutide"},
}

# --- BLEND price surface (total price at a standard config, NOT $/mg) ---------
# Blends are multi-compound products; $/mg is meaningless across different ratios, so they are
# excluded from the single-compound track and priced separately: compare the TOTAL price at the
# blend's MODAL configuration (the most common Total-mg across vendors). Maps a doc blend base
# name (parenthetical components stripped) -> the profile slug it backs. Only blends that map to a
# real profile AND have a clear modal config with >=3 vendors become an indexable /prices page.
#   Deliberately UNMAPPED (reported, never force-mapped):
#     "CJC-1295/Ipamorelin"  — the doc doesn't distinguish DAC vs no-DAC; the profile is
#                              cjc-1295-dac-ipamorelin. DAC-specificity UNVERIFIED -> excluded.
#     backlog/coded/1-row blends (Beauty, Deadpool, PG-3RT+C, Reta/Cagri, Tirz/Reta, GLP-3R…) —
#                              single-vendor or unverified; not a comparison surface.
BLEND_MAP = {
    "GLOW": "glow",
    "KLOW": "klow",
    "Wolverine": "wolverine-stack",
    "Tesamorelin/Ipamorelin": "tesamorelin-ipamorelin",
    "NAD+/MOTS-C/5-Amino-1MQ": "nad-mots-c-5-amino-1mq",
    # Multi-component blends taught to blend_of 2026-08-13 (longest-match). Price rows only — no
    # profile page. Deadpool (ameano, ez) and Regeno (biolongevity) are the SAME components under
    # different marketing names -> ONE component-derived slug (convention: nad-mots-c-5-amino-1mq).
    "BPC-157/TB-500/Cartalax": "bpc-157-tb-500-cartalax",
    "Tesamorelin/Ipamorelin/CJC-1295": "tesamorelin-ipamorelin-cjc-1295",
    "GHRP-2/Tesamorelin/MGF/Ipamorelin": "ghrp-2-tesamorelin-mgf-ipamorelin",
    # Nura GLP-3R/CAG decoded to Retatrutide+Cagrilintide (Mark, first-hand). Single-vendor emitting
    # today; other vendors carry it as [backlog] (no Cagri cert) so it stays below the 3-vendor gate.
    "Retatrutide/Cagrilintide": "retatrutide-cagrilintide",
}

# Canonical DISPLAY name per blend slug — the single source for every user-visible surface
# (H1, page title, meta/OG/twitter descriptions, OG image, breadcrumbs, /prices hub, JSON-LD).
# Title-casing the slug is WRONG here: it renders "Glow"/"Klow", contradicting PP's coupon pages
# (GLOW/KLOW uppercase) and dropping the "+"/"/" the blends are actually written with.
BLEND_DISPLAY = {
    "glow": "GLOW",
    "klow": "KLOW",
    "wolverine-stack": "Wolverine",
    "tesamorelin-ipamorelin": "Tesamorelin/Ipamorelin",
    "nad-mots-c-5-amino-1mq": "NAD+/MOTS-C/5-Amino-1MQ",
    "bpc-157-tb-500-cartalax": "BPC-157/TB-500/Cartalax",
    "tesamorelin-ipamorelin-cjc-1295": "Tesamorelin/Ipamorelin/CJC-1295",
    "ghrp-2-tesamorelin-mgf-ipamorelin": "GHRP-2/Tesamorelin/MGF/Ipamorelin",
    "retatrutide-cagrilintide": "Retatrutide/Cagrilintide",
}

def blend_base_name(raw):
    """Strip parenthetical components + [tags] from a doc blend name -> the BLEND_MAP key."""
    n = re.sub(r"\s*\(.*?\)", "", raw)
    n = re.sub(r"\s*\[.*?\]", "", n)
    return n.strip()

def slugify(name):
    s = name.lower().replace("+", "-plus")
    s = re.sub(r"[()/]", " ", s)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s

def resolve_slug(clean_name, known_slugs):
    if clean_name in ALIAS:
        return ALIAS[clean_name]
    if clean_name in DISP2SLUG:
        return DISP2SLUG[clean_name]
    sl = slugify(clean_name)
    if sl in known_slugs:
        return sl
    return None  # -> caller STOPs and reports

def parse_base(cell):
    m = re.search(r"([0-9][0-9,]*\.?[0-9]*)", cell.replace(",", ""))
    return float(m.group(1)) if m else None

def cjc_form(slug_cell):
    """CJC-1295 DAC vs no-DAC (Mod GRF 1-29) are DIFFERENT molecules the doc lists under one
    "CJC-1295" name; the form survives only in the vendor's product slug. Return 'no-dac' /
    'dac' / None. no-DAC is checked FIRST (its slug also contains 'dac'). None -> the caller
    DROPS the row (never guess a form)."""
    return N.dac_form(slug_cell)   # single source of truth — must match build.py's dedup-key form

# --- load registries ---------------------------------------------------------
vt = VENDORS_TS.read_text()
# vendor keys are top-level 2-space-indented entries opening an object — keys may be
# quoted ("ez-peptides") OR unquoted (biocollex, purerawz), so allow optional quotes.
VENDOR_SLUGS = set(re.findall(r'^\s{2}"?([a-z0-9-]+)"?:\s*\{', vt, re.M))
RETIRED = set()
for m in re.finditer(r'^\s{2}"?([a-z0-9-]+)"?:\s*\{(.*?)^\s{2}\},', vt, re.S | re.M):
    if "retired: true" in m.group(2):
        RETIRED.add(m.group(1))

PROFILE_SLUGS = {d.name for d in PEPTIDES_DIR.iterdir() if d.is_dir() and not d.name.startswith("[")}
from pricepull.decoders import PP_SLUGS, BACKLOG
KNOWN = PROFILE_SLUGS | PP_SLUGS | BACKLOG

# --- parse doc ---------------------------------------------------------------
import datetime
doc = DOC.read_text()
pu = re.search(r"\*\*PRICES_UPDATED:\*\*\s*(.+)", doc)
PRICES_UPDATED = pu.group(1).strip() if pu else "unknown"   # fallback only; overridden by the
# honest MIN of per-vendor pull dates below (a single frozen header claimed data was fresher than
# it was — Aero, pulled July 24, rendered as the header's July 31).

secs = [s for s in re.split(r"\n(?=## VENDOR: )", doc) if s.startswith("## VENDOR:")]

rows = []                 # kept single-compound entries
blend_data_rows = []      # raw blend rows captured from every vendor's ### Blends table
VENDOR_NAMES = {}         # slug -> doc display name (fallback for vendors absent from vendors.ts)
VENDOR_PULLED = {}        # slug -> per-vendor pull date (for the honest MIN stamp)
excl = {"blends": 0, "sprays": 0, "unverified_single": 0, "nosize_single": 0, "noprice_single": 0,
        "not_a_compound": 0, "editorial_scope": 0, "cjc_unresolved": 0}
doc_single_total = 0
retired_row_count = 0
unresolved = []           # STOP condition
cjc_unresolved = []       # CJC-1295 rows whose slug doesn't state DAC/no-DAC — DROPPED, not guessed (report)
unmapped_coded = []       # coded SKUs from the 3 GLP vendors with no confirmed mapping (report)
decoded_count = 0         # coded rows successfully decoded (Part A)
stray_paren = []          # verify the artifact is gone
anomalies = []            # suspicious sale values (sale>=regular, >90% off) — report, never silently accept

for s in secs:
    name = re.match(r"## VENDOR: (.+)", s).group(1).strip()
    if "next vendor" in name:
        continue
    sm = re.search(r"\*\*slug:\*\*\s*([a-z0-9-]+)", s)
    vslug = sm.group(1) if sm else None
    if vslug:
        VENDOR_NAMES[vslug] = name   # doc display name — fallback for vendors not in vendors.ts
        pm = re.search(r"pulled:\*\*\s*([A-Za-z]+ \d+ \d+)", s)
        if pm:
            try:
                VENDOR_PULLED[vslug] = datetime.datetime.strptime(pm.group(1), "%B %d %Y").date()
            except ValueError:
                pass

    # count blend / spray data rows (excluded from the $/mg single-compound track), and
    # CAPTURE blend rows for the separate total-price blend surface (see BLEND_MAP below).
    for hdr, key in [("### Blends", "blends"), ("### Sprays / strips", "sprays")]:
        block = re.search(re.escape(hdr) + r".*?(?=\n### |\n## |\Z)", s, re.S)
        if block:
            for line in block.group(0).splitlines():
                if line.startswith("| ") and not re.match(r"\|\s*:?-+", line):
                    c = [x.strip() for x in line.strip("|").split("|")]
                    if any(x in c[0].lower() for x in ("blend", "product")):
                        continue
                    excl[key] += 1
                    # Blends table: | Blend | Components | Total mg | Base | Ratio | Stock | Vendor Slug |
                    # The 7th (Vendor Slug) column is NEW — present only in sections re-pulled since
                    # build.py started emitting it. It's what lets the CJC-1295/Ipamorelin blend split
                    # by DAC vs no-DAC (parity with the singles split); absent -> the row can't be
                    # resolved and is dropped, never guessed. Committed rows predate it, so today this
                    # is None everywhere and the blend split emits nothing until a re-pull.
                    if key == "blends" and vslug and len(c) >= 4:
                        blend_data_rows.append({
                            "vendor": vslug, "raw_name": c[0], "components": c[1],
                            "size_cell": c[2], "base_cell": c[3],
                            "stock_cell": c[5] if len(c) >= 6 else "",
                            "vendor_slug": c[6] if len(c) >= 7 and c[6] not in ("—", "-") else None,
                        })

    # singles block
    blk = re.search(r"### Single compounds.*?(?=\n### |\n## |\Z)", s, re.S)
    if not blk:
        continue
    for line in blk.group(0).splitlines():
        if not line.startswith("| ") or re.match(r"\|\s*:?-+", line):
            continue
        c = [x.strip() for x in line.strip("|").split("|")]
        if len(c) < 5 or "compound" in c[0].lower():
            continue
        doc_single_total += 1
        comp_cell, size_cell, base_cell, permg_cell = c[0], c[1], c[2], c[3]
        # Single-compounds table gained a "Regular" column: | Compound | Size | Base | $/mg | Regular | Stock |
        # (older 5-col rows, if any, have no Regular). Base = current effective price pre-code.
        if len(c) >= 6:
            regular_cell, stock_cell = c[4], c[5]
        else:
            regular_cell, stock_cell = "—", c[4]
        # 7th column (Vendor Slug) — the vendor's own product slug, present only in
        # sections re-pulled since the column was added (nextjs/Medusa adapters). "—" = none.
        vendor_slug_cell = c[6] if len(c) >= 7 else None

        listed_as = None

        # [coded, UNVERIFIED]: decode via the vendor's confirmed code map, else report.
        if "UNVERIFIED" in comp_cell:
            code = re.sub(r"\s*\[coded.*$", "", comp_cell).strip()
            mapped = CODED_DECODE.get(vslug, {}).get(code)
            if mapped is None:
                if vslug in CODED_DECODE:
                    unmapped_coded.append((name, comp_cell))  # report; never force a mapping
                else:
                    excl["unverified_single"] += 1
                continue
            slug, listed_as = mapped, code
        else:
            # split off "(listed as CODE)" (greedy to last paren -> handles nested "GLP-3 (RT)")
            listed = re.search(r"\(listed as (.*)\)\s*$", comp_cell)
            listed_as = listed.group(1) if listed else None
            clean = re.sub(r"\s*\(listed as .*\)\s*$", "", comp_cell)
            clean = re.sub(r"\s*\[backlog\]\s*$", "", clean).strip()
            if clean.endswith(")") and "(" not in clean:
                stray_paren.append((name, comp_cell))
            slug = resolve_slug(clean, KNOWN)
            if slug is None:
                unresolved.append((name, comp_cell, clean))
                continue
            if slug in NOT_A_COMPOUND:  # branded blend / vendor SKU, not a distinct compound
                excl["not_a_compound"] += 1
                continue

        # real compound but outside PP's editorial scope (oncology / native protein / etc.)
        if slug in OUT_OF_SCOPE:
            excl["editorial_scope"] += 1
            continue

        # CJC-1295: split the merged "cjc-1295" bucket into two DISTINCT compounds by the
        # vendor's product slug (DAC vs no-DAC / Mod GRF 1-29 are different molecules with
        # different half-lives). A row whose slug doesn't state the form is DROPPED, never
        # defaulted. /prices/cjc-1295 stays as a disambiguation hub over the two.
        if slug == "cjc-1295":
            form = cjc_form(vendor_slug_cell)
            if form is None:
                cjc_unresolved.append((name, vendor_slug_cell or "—"))
                excl["cjc_unresolved"] += 1
                continue
            slug = "cjc-1295-" + form   # cjc-1295-dac | cjc-1295-no-dac

        # no parseable mg size
        mg = N.mg_value(size_cell)
        if mg is None:
            excl["nosize_single"] += 1
            continue

        # no parseable price (e.g. Aero TB-500 "price unavailable", AJAX-gated) -> not comparable
        base = parse_base(base_cell)
        if base is None:
            excl["noprice_single"] += 1
            continue

        # sale anchor (regular list price) — present in the doc only when the row is on sale
        regular = None if regular_cell in ("—", "-", "") else parse_base(regular_cell)
        on_sale = regular is not None and regular > base + 0.005
        if regular is not None and not on_sale:
            anomalies.append((name, comp_cell, f"regular ${regular} <= base ${base} (not a markdown)"))
        elif on_sale and (1 - base / regular) > 0.90:
            anomalies.append((name, comp_cell, f">90% off: base ${base} vs regular ${regular}"))

        rows.append({
            "compound": slug, "compoundName": N.DISPLAY.get(slug, slug), "vendor": vslug,
            "sizeMg": mg, "basePrice": base,
            "inStock": stock_cell == "✓",
            "vendorSlug": (vendor_slug_cell if vendor_slug_cell and vendor_slug_cell not in ("—", "-") else None),
            "listedAs": listed_as,
            "regularPrice": regular if on_sale else None,
            "onSale": on_sale,
        })
        if vslug in RETIRED:
            retired_row_count += 1
        if "UNVERIFIED" in comp_cell:   # a decoded coded row (Part A)
            decoded_count += 1

# --- STOP conditions ---------------------------------------------------------
if unresolved:
    print("STOP — unresolved compound names (no clean slug):")
    for v, cell, clean in unresolved:
        print(f"  {v}: {cell!r} (cleaned {clean!r})")
    sys.exit(2)

# --- dedupe: one vendor selling the same compound+size under two names --------
# (e.g. PureRawz GLP-1.3 and LY3437943 both = Retatrutide). Same price -> emit ONE
# row, keeping the store-facing listing name (a dev code like LY3437943 ranks lower).
# Different price at the same size -> DO NOT merge; keep both and report the conflict.
from collections import defaultdict as _ddl
_grp = _ddl(list)
for r in rows:
    _grp[(r["vendor"], r["compound"], r["sizeMg"])].append(r)
dedupe_merged, dedupe_conflict = [], []
_deduped = []
for key, grp in _grp.items():
    if len(grp) == 1:
        _deduped.append(grp[0]); continue
    if len({round(g["basePrice"], 2) for g in grp}) > 1:      # different price -> keep both
        dedupe_conflict.append((key, [(g.get("listedAs"), g["basePrice"]) for g in grp]))
        _deduped.extend(grp); continue
    dev_code = lambda g: 1 if re.match(r"^LY\d", g.get("listedAs") or "") else 0  # dev code ranks lower
    keep = dict(sorted(grp, key=dev_code)[0])
    keep["inStock"] = any(g["inStock"] for g in grp)
    _deduped.append(keep)
    dedupe_merged.append((key, [g.get("listedAs") for g in grp], keep.get("listedAs")))
rows = _deduped

# Honest freshness stamp: the OLDEST pull date among vendors that actually render a row — so the
# stamp can never claim data is fresher than the stalest thing on the grid. (A single frozen
# PRICES_UPDATED header showed Aero's July-24 prices as July 31.) Deterministic: derived from the
# doc's per-vendor `pulled:` dates, never from today's date, so check:prices-sync stays exact.
# Per-vendor stamps are the better eventual answer (scoped separately); this is the global floor.
_rendered = {r["vendor"] for r in rows}
_dates = [d for v, d in VENDOR_PULLED.items() if v in _rendered]
if _dates:
    _min = min(_dates)
    PRICES_UPDATED = _min.strftime("%B ") + str(_min.day) + _min.strftime(", %Y")

# --- emit generated TS -------------------------------------------------------
def ts_val(v):
    if v is None: return "undefined"
    if isinstance(v, bool): return "true" if v else "false"
    if isinstance(v, (int, float)):
        return str(int(v)) if float(v).is_integer() else str(v)
    return '"' + str(v).replace('"', '\\"') + '"'

lines = [
    "// ⚠️ GENERATED FILE — DO NOT EDIT BY HAND.",
    "// Produced by scripts/price-pull/to_prices.py from docs/PP_PRICE_DATA_MASTER_v1.md",
    "// (the one-directional source of truth). Regenerate; never hand-edit. Types and",
    "// helpers live in ./prices.ts — this file carries only doc-derived data.",
    "import type { PriceEntry } from \"./prices\";",
    "",
    f'export const GENERATED_PRICES_UPDATED = "{PRICES_UPDATED}";',
    "",
    "export const generatedPriceEntries: PriceEntry[] = [",
]
for r in rows:
    parts = [f'compound: {ts_val(r["compound"])}', f'compoundName: {ts_val(r["compoundName"])}',
             f'vendor: {ts_val(r["vendor"])}', f'sizeMg: {ts_val(r["sizeMg"])}',
             f'basePrice: {ts_val(r["basePrice"])}', f'inStock: {ts_val(r["inStock"])}']
    if r.get("vendorSlug"):
        parts.append(f'vendorSlug: {ts_val(r["vendorSlug"])}')
    if r["listedAs"]:
        parts.append(f'listedAs: {ts_val(r["listedAs"])}')
    if r.get("onSale"):
        parts.append(f'regularPrice: {ts_val(r["regularPrice"])}')
        parts.append('onSale: true')
    lines.append("  { " + ", ".join(parts) + " },")
lines.append("];")
lines.append("")
lines.append("/** Vendor display names from the master doc — fallback for vendors absent from vendors.ts. */")
lines.append("export const generatedVendorNames: Record<string, string> = {")
for vslug in sorted({r["vendor"] for r in rows}):
    lines.append(f'  {ts_val(vslug)}: {ts_val(VENDOR_NAMES.get(vslug, vslug))},')
lines.append("};")
prices_text = "\n".join(lines) + "\n"

# --- emit sitemap/ungating index (non-retired distinct vendor count per compound) ---
import json
from collections import defaultdict as _dd
_cc = _dd(set)
for r in rows:
    if r["vendor"] not in RETIRED:
        _cc[r["compound"]].add(r["vendor"])
index = [{"slug": c, "vendors": len(vs), "indexable": len(vs) >= 3} for c, vs in sorted(_cc.items())]
index_text = json.dumps(index, indent=2) + "\n"

# --- BLEND surface: total price at the modal config (kept separate from $/mg rows) -----------
from collections import Counter as _Counter
BLEND_OUT = ROOT / "src" / "data" / "prices.blends.generated.ts"
BLEND_INDEX_OUT = ROOT / "src" / "data" / "blends.index.json"
_blend_groups = _dd(list)          # profile slug -> [{vendor, mg, price, inStock}]
blend_unmapped = _Counter()        # doc blend base name -> count (reported, not emitted)
blend_cjc_unresolved = []          # CJC-1295/Ipamorelin rows whose slug doesn't state DAC/no-DAC — DROPPED
for br in blend_data_rows:
    base_name = blend_base_name(br["raw_name"])
    # CJC-1295/Ipamorelin: DAC and no-DAC are different molecules (see the singles split). Resolve
    # each row to a DISTINCT blend by the vendor's product slug; drop (never guess) rows whose slug
    # doesn't state the form. Until the pull preserves the blend slug (build.py), vendor_slug is None
    # everywhere -> every row drops -> no CJC/Ipa blend emits (no silently-merged two-molecule page).
    if base_name == "CJC-1295/Ipamorelin":
        form = cjc_form(br.get("vendor_slug"))
        if form is None:
            blend_cjc_unresolved.append((br["vendor"], br.get("vendor_slug") or "—"))
            continue
        slug = "cjc-1295-no-dac-ipamorelin" if form == "no-dac" else "cjc-1295-dac-ipamorelin"
    else:
        slug = BLEND_MAP.get(base_name)
        if slug is None:
            blend_unmapped[base_name] += 1
            continue
    if br["vendor"] in RETIRED:
        continue
    mg = N.mg_value(br["size_cell"])
    price = parse_base(br["base_cell"])
    if mg is None or price is None:        # no comparable config/price
        continue
    _blend_groups[slug].append({
        "vendor": br["vendor"], "mg": mg, "price": price,
        "inStock": "no" not in br["stock_cell"].lower(),
    })

BLEND_MIN_VENDORS = 3               # a config needs >=3 vendors to publish a comparison table
blend_rows_out = []                 # emitted BlendPriceEntry rows (one block per qualifying config)
blend_index = []                    # {slug, configs:[{config,vendors}], vendors(union), indexable}
blend_no_modal = []                 # slugs with NO config reaching >=3 vendors (reported, not emitted)
blend_config_report = []            # (slug, [(config, n)], union) for the report
for slug, items in sorted(_blend_groups.items()):
    # group by configuration (Total mg); keep the lowest total price per vendor within each config
    by_cfg = _dd(dict)              # mg -> {vendor: item}
    for i in items:
        mg = round(i["mg"], 4)
        bv = by_cfg[mg]
        if i["vendor"] not in bv or i["price"] < bv[i["vendor"]]["price"]:
            bv[i["vendor"]] = i
    # A config is comparable only with >=3 vendors sharing it; publish EVERY qualifying config
    # (e.g. Wolverine 10mg AND 20mg), largest first. Below the threshold -> not a comparison.
    qualifying = sorted(((mg, bv) for mg, bv in by_cfg.items() if len(bv) >= BLEND_MIN_VENDORS),
                        key=lambda x: (-len(x[1]), x[0]))
    if not qualifying:
        blend_no_modal.append((slug, {mg: len(bv) for mg, bv in by_cfg.items()}))
        continue
    cfg_list, union = [], set()
    for mg, bv in qualifying:
        cfg = (str(int(mg)) if float(mg).is_integer() else str(mg)) + "mg"
        for v, i in sorted(bv.items()):
            blend_rows_out.append({
                "blend": slug, "blendName": BLEND_DISPLAY.get(slug, slug.replace("-", " ").title()),
                "vendor": v, "config": cfg, "totalPrice": i["price"], "inStock": i["inStock"],
            })
        cfg_list.append({"config": cfg, "vendors": len(bv)})
        union |= set(bv.keys())
    blend_index.append({"slug": slug, "configs": cfg_list, "vendors": len(union),
                        "indexable": len(union) >= 3})
    blend_config_report.append((slug, [(c["config"], c["vendors"]) for c in cfg_list], len(union)))

_bl = ["// ⚠️ GENERATED FILE — DO NOT EDIT BY HAND.",
       "// Produced by scripts/price-pull/to_prices.py from docs/PP_PRICE_DATA_MASTER_v1.md.",
       "// The BLEND price surface: total price at each blend's modal configuration. Kept in a",
       "// SEPARATE file/type from the $/mg single-compound rows so no grid or guard misreads them.",
       'import type { BlendPriceEntry } from "./prices";', "",
       "export const generatedBlendEntries: BlendPriceEntry[] = ["]
for r in blend_rows_out:
    _bl.append("  { " + ", ".join(f"{k}: {ts_val(r[k])}" for k in
               ("blend", "blendName", "vendor", "config", "totalPrice", "inStock")) + " },")
_bl += ["];", ""]
blends_text = "\n".join(_bl) + "\n"
blends_index_text = json.dumps(blend_index, indent=2) + "\n"

# ALL resolved blend slug -> [vendors], PRE-GATE — so check:vendor-pins can credit a vendor for a
# compound it carries ONLY inside a blend (Nura sells Cagrilintide only in retatrutide-cagrilintide, a
# single-vendor blend that never emits a comparison row). Component -> compound expansion is in the guard.
BLEND_CARRIES_OUT = ROOT / "src" / "data" / "blend-carries.generated.json"
blend_carries = {slug: sorted({i["vendor"] for i in items}) for slug, items in sorted(_blend_groups.items())}
blend_carries_text = json.dumps(blend_carries, indent=2) + "\n"

# --- sitemap lastmod: REAL per-entity change dates from the doc's per-vendor `pulled:` dates -------
# next-sitemap reads this to stamp <lastmod> on ONLY the two URL classes whose change date we truly
# record: /coupons/<vendor> (that vendor's own pull date) and /prices/<compound> (the MAX pull date
# over the vendors that render a row for it — the compound's freshest data). Absent from this map ->
# no lastmod for that URL (partial coverage is deliberate; never a fake/build-time date). Deterministic
# from the doc, so check:prices-sync diffs it exactly like the other emitted artifacts.
LASTMOD_OUT = ROOT / "src" / "data" / "lastmod.generated.json"
_vendor_pulled = {v: d.isoformat() for v, d in VENDOR_PULLED.items()}
_compound_pulled = {}
# single compounds: MAX pull date over the non-retired vendors that render a row (mirrors the index's _cc)
for c, vs in _cc.items():
    ds = [VENDOR_PULLED[v] for v in vs if v in VENDOR_PULLED]
    if ds:
        _compound_pulled[c] = max(ds).isoformat()
# blend price pages (/prices/<blend-slug>): MAX pull date over the blend's non-retired vendors
for slug, items in _blend_groups.items():
    ds = [VENDOR_PULLED[i["vendor"]] for i in items
          if i["vendor"] in VENDOR_PULLED and i["vendor"] not in RETIRED]
    if ds:
        d = max(ds).isoformat()
        _compound_pulled[slug] = max(d, _compound_pulled.get(slug, d))
lastmod_obj = {
    "vendorPulled": dict(sorted(_vendor_pulled.items())),
    "compoundPulled": dict(sorted(_compound_pulled.items())),
}
lastmod_text = json.dumps(lastmod_obj, indent=2) + "\n"

# --emit MODE (for check:prices-sync): print the artifact to stdout, write NOTHING, no report.
# The transform is deterministic (PRICES_UPDATED comes from the doc, not today's date), so the
# guard can diff this stdout against the committed file for an exact drift check.
if "--emit" in sys.argv:
    what = sys.argv[sys.argv.index("--emit") + 1] if sys.argv.index("--emit") + 1 < len(sys.argv) else "prices"
    sys.stdout.write({"prices": prices_text, "index": index_text,
                      "blends": blends_text, "blends-index": blends_index_text,
                      "lastmod": lastmod_text}.get(what, prices_text))
    sys.exit(0)

OUT.write_text(prices_text)
INDEX_OUT.write_text(index_text)
BLEND_OUT.write_text(blends_text)
BLEND_INDEX_OUT.write_text(blends_index_text)
BLEND_CARRIES_OUT.write_text(blend_carries_text)
LASTMOD_OUT.write_text(lastmod_text)

# --- report ------------------------------------------------------------------
print(f"PRICES_UPDATED (oldest rendering vendor's pull date): {PRICES_UPDATED}")
print(f"generated rows: {len(rows)}  -> {OUT.relative_to(ROOT)}")
print(f"\ndecoded coded rows (Part A): {decoded_count}")
if unmapped_coded:
    print(f"  ⚠️ UNMAPPED coded SKUs from GLP vendors (reported, NOT force-mapped): {len(unmapped_coded)}")
    for v, cell in unmapped_coded:
        print(f"     {v}: {cell}")
print(f"\ndoc single-compound rows: {doc_single_total}")
print(f"  kept: {len(rows)}")
print(f"  excluded unverified-single: {excl['unverified_single']}")
print(f"  excluded no-size single:    {excl['nosize_single']}")
print(f"  excluded no-price single:   {excl['noprice_single']}")
print(f"  excluded not-a-compound:    {excl['not_a_compound']}")
print(f"  excluded editorial-scope:   {excl['editorial_scope']}")
print(f"  excluded cjc-1295 unresolved (slug states no form — DROPPED, not guessed): {excl['cjc_unresolved']}")
for v, sl in cjc_unresolved:
    print(f"     {v}: slug {sl!r}")
_ss = (len(rows) + excl['unverified_single'] + excl['nosize_single'] + excl['noprice_single']
       + excl['not_a_compound'] + excl['editorial_scope'] + excl['cjc_unresolved'])
print(f"  singles arithmetic closes: {_ss==doc_single_total} "
      f"({len(rows)}+{excl['unverified_single']}+{excl['nosize_single']}+{excl['noprice_single']}"
      f"+{excl['not_a_compound']}+{excl['editorial_scope']}+{excl['cjc_unresolved']}={doc_single_total})")
print(f"non-single excluded (separate tracks): blends={excl['blends']} sprays={excl['sprays']}")
if blend_cjc_unresolved:
    print(f"CJC-1295/Ipamorelin blend rows DROPPED (slug doesn't state DAC/no-DAC — parked until the pull "
          f"preserves the blend slug): {len(blend_cjc_unresolved)}")
elif any(blend_base_name(br["raw_name"]) == "CJC-1295/Ipamorelin" for br in blend_data_rows):
    print("CJC-1295/Ipamorelin blend: 0 rows carry a slug yet — split resolver live, emits nothing until a re-pull.")

# --- sale reporting ----------------------------------------------------------
sale_rows = [r for r in rows if r.get("onSale")]
from collections import defaultdict as _dds
_sv = _dds(int)
for r in sale_rows:
    _sv[r["vendor"]] += 1
print(f"\nsale rows (base < regular): {len(sale_rows)} / {len(rows)}")
print("  on-sale rows per vendor:", dict(sorted(_sv.items(), key=lambda x: -x[1])))
if anomalies:
    print(f"  ⚠️ price anomalies ({len(anomalies)}):")
    for v, cell, why in anomalies[:20]:
        print(f"     {v}: {cell} — {why}")
else:
    print("  price anomalies: none")

print(f"\ndedupe (same vendor+compound+size under two names): merged {len(dedupe_merged)}, price-conflicts kept-both {len(dedupe_conflict)}")
for key, names, kept in dedupe_merged:
    print(f"   merged {key[0]} {key[1]} {key[2]}mg: {names} -> kept listedAs={kept!r}")
for key, pn in dedupe_conflict:
    print(f"   ⚠️ conflict {key[0]} {key[1]} {key[2]}mg (different prices, kept both): {pn}")
print(f"\nstray-paren artifacts remaining: {len(stray_paren)} (expect 0) {stray_paren[:3]}")
print(f"rows belonging to RETIRED vendors ({sorted(RETIRED)}): {retired_row_count}")

# validation
print(f"\nindex -> {INDEX_OUT.relative_to(ROOT)}  ({sum(1 for i in index if i['indexable'])} indexable / {sum(1 for i in index if not i['indexable'])} noindex)")
non_aff = sorted({r['vendor'] for r in rows if r['vendor'] not in VENDOR_SLUGS})
print(f"price vendors NOT in vendors.ts (render as non-affiliate, name from doc): {non_aff}")
from collections import Counter, defaultdict
cov = defaultdict(set)
for r in rows: cov[r['compound']].add(r['vendor'])
zero = [c for c, v in cov.items() if not v]
print(f"compounds with zero vendors: {len(zero)} {zero}")
dist = Counter(len(v) for v in cov.values())
print("vendors-per-compound distribution:", dict(sorted(dist.items())))
ge3 = {c for c, v in cov.items() if len(v) >= 3}
print(f"compounds at >=3 vendors: {len(ge3)}")
withp = sorted(c for c in cov if c in PROFILE_SLUGS)
nop = sorted(c for c in cov if c not in PROFILE_SLUGS)
print(f"distinct compounds: {len(cov)} | with /peptides profile: {len(withp)} | profile-less: {len(nop)}")
print("profile-less compounds:", nop)
