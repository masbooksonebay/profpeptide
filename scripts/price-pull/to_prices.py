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
doc = DOC.read_text()
pu = re.search(r"\*\*PRICES_UPDATED:\*\*\s*(.+)", doc)
PRICES_UPDATED = pu.group(1).strip() if pu else "unknown"

secs = [s for s in re.split(r"\n(?=## VENDOR: )", doc) if s.startswith("## VENDOR:")]

rows = []                 # kept single-compound entries
VENDOR_NAMES = {}         # slug -> doc display name (fallback for vendors absent from vendors.ts)
excl = {"blends": 0, "sprays": 0, "unverified_single": 0, "nosize_single": 0, "noprice_single": 0, "not_a_compound": 0}
doc_single_total = 0
retired_row_count = 0
unresolved = []           # STOP condition
stray_paren = []          # verify the artifact is gone

for s in secs:
    name = re.match(r"## VENDOR: (.+)", s).group(1).strip()
    if "next vendor" in name:
        continue
    sm = re.search(r"\*\*slug:\*\*\s*([a-z0-9-]+)", s)
    vslug = sm.group(1) if sm else None
    if vslug:
        VENDOR_NAMES[vslug] = name   # doc display name — fallback for vendors not in vendors.ts

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
        comp_cell, size_cell, base_cell, permg_cell, stock_cell = c[0], c[1], c[2], c[3], c[4]

        # [coded, UNVERIFIED] -> no compound identity
        if "UNVERIFIED" in comp_cell:
            excl["unverified_single"] += 1
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
        if slug in NOT_A_COMPOUND:      # branded blend / vendor SKU, not a distinct compound
            excl["not_a_compound"] += 1
            continue

        disp = N.DISPLAY.get(slug, clean)
        rows.append({
            "compound": slug, "compoundName": disp, "vendor": vslug,
            "sizeMg": mg, "basePrice": base,
            "inStock": stock_cell == "✓",
            "listedAs": listed_as,
        })
        if vslug in RETIRED:
            retired_row_count += 1

# --- STOP conditions ---------------------------------------------------------
if unresolved:
    print("STOP — unresolved compound names (no clean slug):")
    for v, cell, clean in unresolved:
        print(f"  {v}: {cell!r} (cleaned {clean!r})")
    sys.exit(2)

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
    if r["listedAs"]:
        parts.append(f'listedAs: {ts_val(r["listedAs"])}')
    lines.append("  { " + ", ".join(parts) + " },")
lines.append("];")
lines.append("")
lines.append("/** Vendor display names from the master doc — fallback for vendors absent from vendors.ts. */")
lines.append("export const generatedVendorNames: Record<string, string> = {")
for vslug in sorted({r["vendor"] for r in rows}):
    lines.append(f'  {ts_val(vslug)}: {ts_val(VENDOR_NAMES.get(vslug, vslug))},')
lines.append("};")
OUT.write_text("\n".join(lines) + "\n")

# --- emit sitemap/ungating index (non-retired distinct vendor count per compound) ---
import json
from collections import defaultdict as _dd
_cc = _dd(set)
for r in rows:
    if r["vendor"] not in RETIRED:
        _cc[r["compound"]].add(r["vendor"])
index = [{"slug": c, "vendors": len(vs), "indexable": len(vs) >= 3} for c, vs in sorted(_cc.items())]
INDEX_OUT.write_text(json.dumps(index, indent=2) + "\n")

# --- report ------------------------------------------------------------------
print(f"PRICES_UPDATED (from doc): {PRICES_UPDATED}")
print(f"generated rows: {len(rows)}  -> {OUT.relative_to(ROOT)}")
print(f"\ndoc single-compound rows: {doc_single_total}")
print(f"  kept: {len(rows)}")
print(f"  excluded unverified-single: {excl['unverified_single']}")
print(f"  excluded no-size single:    {excl['nosize_single']}")
print(f"  excluded no-price single:   {excl['noprice_single']}")
print(f"  excluded not-a-compound:    {excl['not_a_compound']}")
_ss = len(rows) + excl['unverified_single'] + excl['nosize_single'] + excl['noprice_single'] + excl['not_a_compound']
print(f"  singles arithmetic closes: {_ss==doc_single_total} "
      f"({len(rows)}+{excl['unverified_single']}+{excl['nosize_single']}+{excl['noprice_single']}+{excl['not_a_compound']}={doc_single_total})")
print(f"non-single excluded (separate tracks): blends={excl['blends']} sprays={excl['sprays']}")
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
