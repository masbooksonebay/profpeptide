#!/usr/bin/env python3
"""Ingest a MANUAL CINC storefront read into the master doc.

Some vendors (adapter: cinc) are Cloudflare-walled on the Store API but readable in a
browser — refresh.py SKIPS them. This loader takes an in-browser read saved as a JSON
fixture (fixtures/<vendor>.cinc.json, shape {name, size_mg, price_usd, in_stock}) and runs
it through the SAME classification the auto-pull uses (build.build_section → the vendor's
decoder, blend_total, dosage model), so a manual read lands identically to an API pull.

Re-runnable: re-read the storefront in-browser, overwrite the fixture's `products`, re-run.

  python3 load_cinc.py --vendor aero-peptides --dry-run
  python3 load_cinc.py --vendor aero-peptides --write [--allow-shrink]
"""
import argparse, datetime, json, re
from pathlib import Path

from pricepull import build, registry
from refresh import replace_section, existing_singles_count, ROW_DROP_FLOOR

FIXTURES = Path(__file__).resolve().parent / "fixtures"


def fixture_to_products(fx):
    """CINC-read rows -> the adapter product shape build.build_section consumes. Each read row is a
    SIMPLE product; extract_rows reads a single's size from parse_size(name) and blend_total reads a
    blend's total from the component doses in the name (or a lone total). size_mg is carried only for
    the human-readable fixture — the NAME is the source of truth, exactly as a live pull sees it."""
    out = []
    for p in fx["products"]:
        out.append({
            "name": p["name"],
            "price": p.get("price_usd"),
            "regular": None,
            "in_stock": bool(p.get("in_stock", True)),
            "variations": [],
            "slug": re.sub(r"[^a-z0-9]+", "-", p["name"].lower()).strip("-"),
            "ptype": "",
            "currency": "USD",
            "images": [],
            "description": "",
        })
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--vendor", required=True)
    ap.add_argument("--write", action="store_true")
    ap.add_argument("--allow-shrink", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    slug = args.vendor
    cfg = registry.VENDORS.get(slug)
    if not cfg:
        ap.error(f"{slug}: not in registry")
    fpath = FIXTURES / f"{slug}.cinc.json"
    if not fpath.exists():
        ap.error(f"no fixture at {fpath}")
    fx = json.loads(fpath.read_text())
    products = fixture_to_products(fx)
    meta = registry.load_registry_meta().get(slug, {})
    today = datetime.date.today().strftime("%B %d %Y")

    section, counts = build.build_section(slug, meta, products, today)
    print(f"[cinc] {slug}: {counts['singles']} singles, {counts['blends']} blends, "
          f"{counts['sprays']} sprays  (from {len(products)}-row fixture, read {fx.get('read_date','?')})")
    for tag, key in (("no-size dropped", "nosize_dropped"), ("blend dropped", "blend_dropped"),
                     ("collisions", "collisions"), ("subscription dropped", "subscription_dropped")):
        items = counts.get(key) or []
        if items:
            print(f"       {tag}: {len(items)}")
            for it in items:
                print(f"         - {it.get('name', it)}")

    doc = registry.DOC
    text = doc.read_text() if doc.exists() else ""
    old = existing_singles_count(text, cfg["name"])
    floor_hit = old > 0 and counts["singles"] < old * ROW_DROP_FLOOR
    if floor_hit:
        drop = 1 - counts["singles"] / old
        verb = "overriding (--allow-shrink)" if args.allow_shrink else "REFUSING to overwrite"
        print(f"[FLOOR] {slug}: {counts['singles']} singles = a {drop:.0%} drop from {old} "
              f"(> {1 - ROW_DROP_FLOOR:.0%} floor) — {verb}.")

    if args.dry_run:
        print("\n" + section)
    if args.write:
        if floor_hit and not args.allow_shrink:
            print(f"[REFUSED] {slug}: row-drop floor tripped — pass --allow-shrink to accept.")
        else:
            text = replace_section(text, slug, cfg["name"], section)
            doc.write_text(text)
            print(f"\nwrote {doc}")


if __name__ == "__main__":
    main()
