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
    """PRICEABLE rows currently in a vendor's '### Single compounds' table — the baseline for the
    row-drop floor. 0 when the vendor isn't in the doc yet (first onboard → floor inert).

    Counts only rows with a real size, SKIPPING '—' (no-size) placeholders. The floor compares this
    baseline against the fresh pull's counts['singles'], which — since 7b8d3f6 — excludes no-size
    products (Rule 4). Counting '—' rows here made the comparison asymmetric: doc rows written before
    7b8d3f6 carried '—' placeholders that a fresh pull no longer emits, so a re-pull looked like a
    ~47% drop (la-peptides 43->23) and tripped the floor on rows that never rendered. Compare
    priceable-vs-priceable. The threshold (80%) is unchanged and correct; only the baseline was wrong.
    The '—' rows STAY in the doc (they are the inventory of products we saw but couldn't size)."""
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
    n = 0
    for ln in sm.group(1).splitlines():
        if not ln.startswith("| ") or ln.startswith("| ---") or "| Compound " in ln:
            continue
        cells = [c.strip() for c in ln.strip("|").split("|")]
        size = cells[1] if len(cells) > 1 else ""
        if size in ("—", "-", ""):   # no-size placeholder: never priceable, never rendered, and no
            continue                 # longer emitted by the build — exclude so the compare is fair
        n += 1
    return n


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
    elif cfg["adapter"] == "nextjs_feed":
        # Single-flight feed (Crush): pass the /shop path, the flight array key, and the
        # product-URL base through so the adapter isn't hardcoded to one vendor's shape.
        for k in ("feed_path", "array_key", "product_base"):
            if cfg.get(k):
                opts[k] = cfg[k]
    elif cfg["adapter"] == "gatsby_pagedata":
        # Gatsby page-data catalog (Spartan): pass the listing page-data path + product-URL base.
        for k in ("page_path", "product_base"):
            if cfg.get(k):
                opts[k] = cfg[k]
    # Login-gated vendors (Modern Aminos): read the session cookie from the gitignored file
    # and pass it through (woo now forwards a Cookie header). Fail loud if it's missing.
    if cfg.get("session_auth"):
        cookie = load_session_cookie()
        if not cookie:
            raise RuntimeError(f"session_auth vendor but no cookie in {SESSION_COOKIE_FILE.name} "
                               "— supply the WordPress login session cookie")
        opts["cookie"] = cookie
    products = adapters.fetch(cfg["adapter"], cfg["domain"], **opts)
    # Currency guard (option a): the pull prices in USD only. If the Store API reports a non-USD
    # currency_code, storing those numbers as USD silently mis-scales every row (NOVA in AED was
    # ~3.67x inflated). Refuse loudly and write nothing rather than ship wrong prices — no FX rate
    # to rot, and forward-compatible with a future native-currency renderer. Adapters that don't
    # surface currency_code (no key) are treated as USD (the default), unchanged.
    currencies = {c.upper() for p in products if (c := p.get("currency"))}
    non_usd = currencies - {"USD"}
    if non_usd:
        raise adapters.NonUSD(
            f"Store API reports {', '.join(sorted(non_usd))}, not USD — priced in USD only, so "
            f"this vendor is excluded from price data (keep the coupon page, no grid). "
            f"See the currency-handling report.")
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
    ap.add_argument("--allow-shrink", action="store_true",
                    help="accept a COMPLETE pull that returns materially fewer singles than the doc "
                         "(a genuine delisting). Does NOT override an IncompletePull — that must be retried.")
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
        except adapters.NonUSD as e:
            print(f"[CURRENCY] {slug}: {e}"); continue
        except adapters.Blocked as e:
            print(f"[block] {slug}: {e}"); continue
        except adapters.IncompletePull as e:
            # A KNOWN-incomplete pull (fetched < X-WP-Total, or a variation page failed all retries).
            # This is a broken fetch, not a catalog change — the fix is to retry, so it is NEVER
            # writable and --allow-shrink does NOT override it (that flag is only for a genuine,
            # COMPLETE-but-smaller pull; see the floor below).
            print(f"[INCOMPLETE] {slug}: {e}"); continue
        except Exception as e:
            print(f"[err ] {slug}: {type(e).__name__}: {e}"); continue
        print(f"[ok  ] {slug}: {counts['singles']} singles, {counts['blends']} blends, {counts['sprays']} sprays")
        # No-size drop report (Rule 4): every pull surfaces WHICH SKUs it dropped for lack of a
        # parseable mg, so a size-less gap can't stay silent again (that is how la-peptides' whole
        # bioregulator line — 20 SKUs — went uncounted). WARN-only, never blocks the pull (same
        # severity model as check-grids' backlog warning). Threshold: > 3 SKUs OR > 15% of the
        # vendor's catalog, whichever trips first.
        dropped = counts.get("nosize_dropped", [])
        if dropped:
            catalog = counts.get("catalog", 0) or 1
            frac = len(dropped) / catalog
            loud = len(dropped) > 3 or frac > 0.15
            flag = "  ⚠ HIGH no-size drop" if loud else ""
            print(f"       no-size dropped: {len(dropped)} ({frac:.0%} of {catalog} products){flag}")
            for d in dropped:
                print(f"         - {d['name']}")
            if loud:
                print(f"       ⚠ {slug}: {len(dropped)} SKUs have no parseable size — a whole product "
                      f"line may be missing from PP. Add mg to the SIZE_OVERRIDE map or confirm they're out of scope.")
        # Blend drop report (Rule 4, blend track): a blend routed to the blend track but whose total
        # mg couldn't be resolved from a PUBLISHED value is dropped and surfaced here — never guessed.
        # 'mismatch' = the dose-code count disagrees with blend_of's component count (the mislabel
        # guard — a 3-dose code under a 2-way label); 'nototal' = no published total anywhere. This is
        # the warning that would have caught the Wolverine blend. WARN-only.
        bdropped = counts.get("blend_dropped", [])
        if bdropped:
            mism = [d for d in bdropped if d.get("why") == "mismatch"]
            noto = [d for d in bdropped if d.get("why") != "mismatch"]
            print(f"       blend dropped: {len(bdropped)} ({len(mism)} component-count mismatch, {len(noto)} no total)")
            for d in bdropped:
                print(f"         - [{d.get('why','')}] {d['name']}  {d.get('url','')}")
            if mism:
                print(f"       ⚠ {slug}: {len(mism)} blend(s) have a dose-code count != blend_of's component "
                      f"count (possible mislabel — see item 2). NOT written; fix blend_of or the label first.")
        # Collision report (singles dedup): two DISTINCT vendor SKUs collapsed onto one
        # (compound, size, form) key — one row discarded. This is the counter for the silent overwrite
        # that dropped the CJC-1295 DAC single. WARN-only. A collision between two DIFFERENT compounds
        # (not two listings of one) means the key isn't distinctive enough — a DAC/no-DAC-class gap.
        coll = counts.get("collisions", [])
        if coll:
            print(f"       single collisions: {len(coll)} (distinct SKU discarded on same compound+size+form)")
            for c in coll:
                f = f"/{c['form']}" if c['form'] else ""
                print(f"         - {c['disp']} {c['size']}{f}: kept {c['kept']} ${c['kept_price']:.2f}, "
                      f"DROPPED {c['dropped']} ${c['dropped_price']:.2f}")
            print(f"       ⚠ {slug}: verify each is two listings of ONE compound (safe) and not two "
                  f"DIFFERENT compounds sharing a display (a DAC/no-DAC-class drop — widen the key).")
        # Subscription guard: WC-Subscriptions products carry a RECURRING price that would win the
        # min-price pick and pose as a fake "cheapest" one-time row (biolongevity Follistatin). Dropped
        # and counted here; the vendor's one-time SKU still flows through. WARN-only.
        subs = counts.get("subscription_dropped", [])
        if subs:
            print(f"       subscription products dropped: {len(subs)} (recurring price — not a one-time headline)")
            for s in subs:
                ty = f" [type={s['ptype']}]" if s.get('ptype') else ""
                print(f"         - {s['name']} ({s['slug']}){ty}")
        # Stale-override guard: a SIZE_OVERRIDE key matching zero products in this pull is a rename or
        # removal — the override would silently miss (vendor+name is not a stable key). WARN-only.
        stale = counts.get("stale_overrides", [])
        if stale:
            print(f"       ⚠ {slug}: {len(stale)} SIZE_OVERRIDE key(s) match NO product in this pull "
                  f"(renamed/removed — the override will silently miss): {', '.join(stale)}")
        # Row-drop floor (backstop): with truncation now caught upstream by the X-WP-Total /
        # variation-fetch guards (IncompletePull), a COMPLETE pull that still returns materially
        # fewer singles than the doc is either a real delisting or a non-woo adapter regression
        # (nextjs/gatsby/purity_api have no stated total). Tightened 50%->80% because the old floor
        # let a ~47% truncation through (23 < 21.5 was False). A genuine delisting is intentional,
        # so it is writable — but only with an EXPLICIT --allow-shrink, never a silent pass.
        old = existing_singles_count(text, cfg["name"])
        floor_hit = old > 0 and counts["singles"] < old * 0.8
        if floor_hit:
            verb = "overriding (--allow-shrink)" if args.allow_shrink else "will NOT overwrite"
            print(f"[FLOOR] {slug}: {counts['singles']} singles < 80% of existing {old} — "
                  f"delisting or regression? {verb} on --write.")
        if args.dry_run:
            print("\n" + section)
        if args.write:
            if floor_hit and not args.allow_shrink:
                print(f"[skip-write] {slug}: row-drop floor tripped — kept existing section "
                      f"(pass --allow-shrink to accept a genuine delisting)")
            else:
                text = replace_section(text, slug, cfg["name"], section)
    if args.write and text:
        doc.write_text(text)
        print(f"\nwrote {doc}")


if __name__ == "__main__":
    main()
