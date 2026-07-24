#!/usr/bin/env python3
"""Refresh price data for one or all vendors into docs/PP_PRICE_DATA_MASTER_v1.md.

Usage:
  python3 refresh.py --list                       # show registry + blocked vendors
  python3 refresh.py --vendor swiss-chems --dry-run   # fetch + print section, no write
  python3 refresh.py --vendor swiss-chems --write      # replace/append the section in the doc
  python3 refresh.py --all --write                     # refresh every pullable vendor

The `pulled:` date is stamped automatically (today) on every build. `code`/`discount`
come from src/data/vendors.ts (master-doc rule 5), never hardcoded here.

NOTE — cart-level sale check: adapters read product data only. Cart-level auto-coupons
(e.g. Biolongevity's 'longevityvip') are invisible there; the registry `sale_posture`
carries that note and must be re-verified against the live cart each refresh.
"""
import argparse
import datetime
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from pricepull import adapters, build, registry, detect  # noqa: E402


def pulled_date():
    d = datetime.date.today()
    return d.strftime("%B %-d %Y") if sys.platform != "win32" else d.strftime("%B %d %Y")


def build_vendor(slug, cfg, meta):
    opts = {}
    if cfg.get("sitemap") and cfg["adapter"] == "nextjs":
        opts["sitemap"] = "sitemap.xml"
    products = adapters.fetch(cfg["adapter"], cfg["domain"], **opts)
    m = {"name": cfg["name"], "code": meta.get("code") or "?", "discount": meta.get("discount") or "?",
         "url": re.sub(r"^https?://", "", meta.get("url") or cfg["domain"]).split("/")[0],
         "sale_posture": cfg.get("sale_posture", "")}
    return build.build_section(slug, m, products, pulled_date())


def replace_section(doc_text, slug, name, section_md):
    """Replace an existing '## VENDOR: <name>' section, else insert before the placeholder."""
    marker = f"## VENDOR: {name}"
    start = doc_text.find(marker)
    body = section_md.rstrip() + "\n\n---\n\n"
    if start != -1:
        m = re.search(r"\n## (VENDOR:|⛔)", doc_text[start + len(marker):])
        end = start + len(marker) + m.start() if m else len(doc_text)
        return (doc_text[:start] + body + doc_text[end:].lstrip("\n"))
    ph = "## VENDOR: [next vendor — append here in same format]"
    head, _, tail = doc_text.partition(ph)
    return head.rstrip() + "\n\n" + body + ph + tail[len(ph):] if _ else doc_text + "\n\n" + body


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--vendor")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--write", action="store_true")
    ap.add_argument("--list", action="store_true")
    ap.add_argument("--detect", metavar="DOMAIN", help="probe a domain and report which adapter applies")
    args = ap.parse_args()

    if args.detect:
        print(detect.format_report(args.detect, detect.detect(args.detect)))
        return

    meta = registry.load_registry_meta()

    if args.list:
        print(f"PULLABLE VENDORS ({len(registry.VENDORS)}):")
        for slug, c in registry.VENDORS.items():
            print(f"  {slug:24s} adapter={c['adapter']:10s} model={c['variation_model']:14s} "
                  f"coded={'Y' if c['coded_decoder'] else '-'}")
        print(f"\nBLOCKED ({len(registry.BLOCKED)}):")
        for slug, why in registry.BLOCKED.items():
            print(f"  {slug}: {why[:80]}…")
        return

    targets = list(registry.VENDORS) if args.all else ([args.vendor] if args.vendor else [])
    if not targets:
        ap.error("give --vendor <slug>, --all, or --list")

    doc = registry.DOC
    text = doc.read_text() if doc.exists() else ""
    for slug in targets:
        if slug in registry.BLOCKED:
            print(f"[skip] {slug}: BLOCKED — {registry.BLOCKED[slug][:70]}"); continue
        cfg = registry.VENDORS.get(slug)
        if not cfg:
            print(f"[skip] {slug}: not in registry"); continue
        if cfg["adapter"] == "cinc":
            print(f"[skip] {slug}: CINC read-only vendor (Cloudflare-blocked API) — refresh manually"); continue
        try:
            section, counts = build_vendor(slug, cfg, meta.get(slug, {}))
        except adapters.Blocked as e:
            print(f"[block] {slug}: {e}"); continue
        except Exception as e:
            print(f"[err ] {slug}: {type(e).__name__}: {e}"); continue
        print(f"[ok  ] {slug}: {counts['singles']} singles, {counts['blends']} blends, {counts['sprays']} sprays")
        if args.dry_run:
            print("\n" + section)
        if args.write:
            text = replace_section(text, slug, cfg["name"], section)
    if args.write and text:
        doc.write_text(text)
        print(f"\nwrote {doc}")


if __name__ == "__main__":
    main()
