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
VENDOR_NAMES = {}         # slug -> doc display name (fallback for vendors absent from vendors.ts)
VENDOR_PULLED = {}        # slug -> per-vendor pull date (for the honest MIN stamp)
excl = {"blends": 0, "sprays": 0, "unverified_single": 0, "nosize_single": 0, "noprice_single": 0,
        "not_a_compound": 0, "editorial_scope": 0}
doc_single_total = 0
retired_row_count = 0
unresolved = []           # STOP condition
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

    # count blend / spray data rows (excluded categories)
    for hdr, key in [("### Blends", "blends"), ("### Sprays / strips", "sprays")]:
        block = re.search(re.escape(hdr) + r".*?(?=\n### |\n## |\Z)", s, re.S)
        if block:
            for line in block.group(0).splitlines():
                if line.startswith("| ") and not re.match(r"\|\s*:?-+", line):
                    c = [x.strip() for x in line.strip("|").split("|")]
                    if any(x in c[0].lower() for x in ("blend", "product")):
                        continue
                    excl[key] += 1

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

# --emit MODE (for check:prices-sync): print the artifact to stdout, write NOTHING, no report.
# The transform is deterministic (PRICES_UPDATED comes from the doc, not today's date), so the
# guard can diff this stdout against the committed file for an exact drift check.
if "--emit" in sys.argv:
    what = sys.argv[sys.argv.index("--emit") + 1] if sys.argv.index("--emit") + 1 < len(sys.argv) else "prices"
    sys.stdout.write(prices_text if what == "prices" else index_text)
    sys.exit(0)

OUT.write_text(prices_text)
INDEX_OUT.write_text(index_text)

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
_ss = (len(rows) + excl['unverified_single'] + excl['nosize_single'] + excl['noprice_single']
       + excl['not_a_compound'] + excl['editorial_scope'])
print(f"  singles arithmetic closes: {_ss==doc_single_total} "
      f"({len(rows)}+{excl['unverified_single']}+{excl['nosize_single']}+{excl['noprice_single']}"
      f"+{excl['not_a_compound']}+{excl['editorial_scope']}={doc_single_total})")
print(f"non-single excluded (separate tracks): blends={excl['blends']} sprays={excl['sprays']}")

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
