"""Platform auto-detection — given a domain, probe the known signatures and report
which adapter applies. Turns "what platform is this?" into one command:

    python3 refresh.py --detect somevendor.com

Signatures (in the order most-decisive-first):
  WooCommerce  -> GET /wp-json/wc/store/v1/products?per_page=1 returns a JSON array
                  (adapter: woo). A 403 here = Cloudflare-blocked API -> aero-style
                  CINC (storefront JSON), NOT unreachable.
  Shopify      -> GET /products.json?limit=1 returns {"products":[...]}  (adapter:
                  shopify — NOT YET IMPLEMENTED; see README).
  BigCommerce  -> homepage references cdn11.bigcommerce.com / BCData; often B2B with
                  login-gated prices (adapter: none — likely BLOCKED, verify).
  Next.js      -> self.__next_f flight chunks present. Then distinguish:
                    * a /api/products endpoint returning JSON  (adapter: purity_api-style)
                    * per-product JSON-LD Offer / RSC variants[] (adapter: nextjs)
  else         -> unknown; investigate manually.

Read-only GETs with a browser UA. This does not add a vendor — it only reports the
adapter to use in the registry (see add-vendor.md).
"""
import json
import re

from .adapters import http_get, Blocked


def _try(url):
    try:
        return http_get(url, timeout=15, retries=1), None
    except Blocked as e:
        return None, "403"
    except Exception as e:
        return None, type(e).__name__


def detect(domain):
    """Return a dict: {adapter, platform, confidence, evidence, notes}."""
    domain = re.sub(r'^https?://', '', domain).strip('/').split('/')[0]
    ev = []

    # 1. WooCommerce Store API
    txt, err = _try(f"https://{domain}/wp-json/wc/store/v1/products?per_page=1")
    if err == "403":
        ev.append("Store API -> 403 (Cloudflare)")
        return dict(adapter="cinc", platform="WooCommerce (Cloudflare-blocked API)",
                    confidence="high", evidence=ev,
                    notes="API blocked; pull read-only from embedded storefront product JSON (aero pattern). "
                          "Not unreachable — the storefront renders.")
    if txt:
        try:
            data = json.loads(txt)
            if isinstance(data, list):
                ev.append(f"Store API -> JSON array ({len(data)} on page 1)")
                return dict(adapter="woo", platform="WooCommerce", confidence="high",
                            evidence=ev, notes="Use adapter 'woo'.")
        except Exception:
            pass

    # 2. Shopify
    txt, err = _try(f"https://{domain}/products.json?limit=1")
    if txt:
        try:
            data = json.loads(txt)
            if isinstance(data, dict) and "products" in data:
                ev.append("/products.json -> {products:[…]}")
                return dict(adapter="shopify", platform="Shopify", confidence="high", evidence=ev,
                            notes="NOT YET IMPLEMENTED — first Shopify vendor. /products.json is the endpoint; "
                                  "write a shopify adapter (variants[] carry title=size + price). See README.")
        except Exception:
            pass

    # 3+4. fetch homepage once for BigCommerce / Next.js fingerprints
    home, _ = _try(f"https://{domain}/")
    home = home or ""
    if re.search(r'cdn11\.bigcommerce\.com|BCData|bigcommerce', home, re.I):
        ev.append("homepage -> BigCommerce (cdn11/BCData)")
        # BigCommerce is frequently B2B with login-gated pricing
        gate = "Log In for Professional Pricing" in home or 'data-product-price="Log In' in home
        return dict(adapter=None, platform="BigCommerce", confidence="high", evidence=ev,
                    notes=("Prices appear LOGIN-GATED (B2B) — likely BLOCKED, verify a product page."
                           if gate else
                           "BigCommerce — no adapter yet; prices live in per-page markup (data-product-price / BCData). Verify a product page."))

    if "self.__next_f" in home or "__NEXT_DATA__" in home:
        ev.append("homepage -> Next.js (flight chunks)")
        # custom /api/products?
        api, aerr = _try(f"https://{domain}/api/products")
        if api:
            try:
                d = json.loads(api)
                arr = d if isinstance(d, list) else next((v for v in d.values() if isinstance(v, list)), None)
                if arr:
                    ev.append(f"/api/products -> JSON list ({len(arr)})")
                    return dict(adapter="purity_api", platform="Next.js custom (/api/products)",
                                confidence="high", evidence=ev,
                                notes="Purity pattern — adapter 'purity_api' (may need path/field tweaks per vendor).")
            except Exception:
                pass
        # per-product JSON-LD Offer / RSC variants[]
        return dict(adapter="nextjs", platform="Next.js (per-product-page)", confidence="medium",
                    evidence=ev,
                    notes="No /api/products — use adapter 'nextjs' (per-product JSON-LD Offer for single-price, "
                          "RSC variants[] for multi-size). Confirm the sitemap path & product URL pattern.")

    if re.search(r'wp-content|woocommerce', home, re.I):
        ev.append("homepage -> WordPress/WooCommerce fingerprint, but no /wp-json REST")
        return dict(adapter=None, platform="WordPress/WooCommerce (REST disabled or client-rendered)",
                    confidence="low", evidence=ev,
                    notes="No usable Store API. Check for a client-rendered React front (spartan pattern) — may be "
                          "age-gated/partial. Investigate manually.")

    return dict(adapter=None, platform="unknown", confidence="none", evidence=ev,
                notes="No known signature matched. Investigate manually (see add-vendor.md step 1).")


def format_report(domain, r):
    lines = [f"platform-detect: {domain}",
             f"  platform:   {r['platform']}",
             f"  adapter:    {r['adapter'] or '(none — see notes)'}",
             f"  confidence: {r['confidence']}"]
    for e in r["evidence"]:
        lines.append(f"  evidence:   {e}")
    lines.append(f"  notes:      {r['notes']}")
    return "\n".join(lines)
