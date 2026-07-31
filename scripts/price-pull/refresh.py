#!/usr/bin/env python3
"""Refresh price data for one or all vendors into docs/PP_PRICE_DATA_MASTER_v1.md.

Usage:
  python3 refresh.py --list                       # show registry + blocked vendors
  python3 refresh.py --vendor swiss-chems --dry-run   # fetch + print section, no write
  python3 refresh.py --vendor swiss-chems --write      # replace/append the section in the doc
  python3 refresh.py --all --write                     # refresh every pullable vendor

The `pulled:` date is stamped automatically (today) on every build. `code`/`discount`
come from src/data/vendors.ts (master-doc rule 5), never hardcoded here.

NOTE — cart-level sale check: adapters read product data only. Cart-level AUTOMATIC
discounts (Biolongevity's no-code 'longevityvip', 50%) are invisible there and are modelled
via the registry `sitewide_sale` field; re-verify the live cart each refresh. COUPON-GATED
promotions (a code the buyer types, e.g. Amino Club's ENJOY30) are NEVER modelled — see the
sale-vs-coupon rule at the top of pricepull/registry.py.
"""
import argparse
import datetime
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from pricepull import adapters, build, registry, detect  # noqa: E402

SESSION_COOKIE_FILE = Path(__file__).resolve().parent / ".session-cookie"


def load_session_cookie():
    """Login session cookie for gated vendors, read from a GITIGNORED file (never the
    registry — it's a live credential). One line: 'name=value; name=value'. None if absent."""
    if SESSION_COOKIE_FILE.exists():
        return SESSION_COOKIE_FILE.read_text().strip() or None
    return None


def existing_singles_count(doc_text, name):
    """Rows currently in a vendor's '### Single compounds' table — the baseline for the
    row-drop floor. 0 when the vendor isn't in the doc yet (first onboard → floor inert)."""
    marker = f"## VENDOR: {name}"
    start = doc_text.find(marker)
    if start == -1:
        return 0
    seg = doc_text[start:]
    end = re.search(r"\n## (VENDOR:|⛔)", seg[len(marker):])
    if end:
        seg = seg[:len(marker) + end.start()]
    sm = re.search(r"### Single compounds\n(.*?)(?:\n### |\Z)", seg, re.S)
    if not sm:
        return 0
    return sum(1 for ln in sm.group(1).splitlines()
               if ln.startswith("| ") and not ln.startswith("| ---") and "| Compound " not in ln)


def pulled_date():
    d = datetime.date.today()
    return d.strftime("%B %-d %Y") if sys.platform != "win32" else d.strftime("%B %d %Y")


def build_vendor(slug, cfg, meta):
    opts = {}
    if cfg["adapter"] == "nextjs":
        # Pass the registry's sitemap path + product-URL pattern through to the adapter.
        # (Previously this hardcoded "sitemap.xml" and ignored the registry value, which
        # left Science Based — sitemap at /sitemap.xml, products under /products/ — empty.)
        if cfg.get("sitemap"):
            opts["sitemap"] = cfg["sitemap"]
        if cfg.get("url_pattern"):
            opts["url_pattern"] = cfg["url_pattern"]
        if cfg.get("discover"):
            opts["discover"] = cfg["discover"]
        if cfg.get("cookie"):
            opts["cookie"] = cfg["cookie"]
    # Login-gated vendors (Modern Aminos): read the session cookie from the gitignored file
    # and pass it through (woo now forwards a Cookie header). Fail loud if it's missing.
    if cfg.get("session_auth"):
        cookie = load_session_cookie()
        if not cookie:
            raise RuntimeError(f"session_auth vendor but no cookie in {SESSION_COOKIE_FILE.name} "
                               "— supply the WordPress login session cookie")
        opts["cookie"] = cookie
    products = adapters.fetch(cfg["adapter"], cfg["domain"], **opts)
    m = {"name": cfg["name"], "code": meta.get("code") or "?", "discount": meta.get("discount") or "?",
         "url": re.sub(r"^https?://", "", meta.get("url") or cfg["domain"]).split("/")[0],
         "sale_posture": cfg.get("sale_posture", "")}
    return build.build_section(slug, m, products, pulled_date(),
                               ten_vial_kit=cfg.get("variation_model") == "ten-vial-kit",
                               sitewide_sale=cfg.get("sitewide_sale", 0.0))


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
        # Row-drop floor: a re-pull returning <50% of the singles already on file is almost
        # certainly an auth failure (expired session cookie) or an accidental delisting, not a
        # real catalog change — refuse to overwrite good data with it. Inert on first onboard.
        old = existing_singles_count(text, cfg["name"])
        floor_hit = old > 0 and counts["singles"] < old * 0.5
        if floor_hit:
            print(f"[FLOOR] {slug}: {counts['singles']} singles < 50% of existing {old} — "
                  f"expired session cookie or delisting? Will NOT overwrite on --write.")
        if args.dry_run:
            print("\n" + section)
        if args.write:
            if floor_hit:
                print(f"[skip-write] {slug}: row-drop floor tripped — kept existing section")
            else:
                text = replace_section(text, slug, cfg["name"], section)
    if args.write and text:
        doc.write_text(text)
        print(f"\nwrote {doc}")


if __name__ == "__main__":
    main()
