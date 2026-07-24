"""Platform adapters — fetch a vendor's catalog and normalize it.

Every adapter returns a list of NormProduct dicts:
    {'name', 'regular', 'in_stock', 'variations':[{'attrs':[(name,val)], 'regular', 'in_stock'}],
     'description'}
`regular` is the STANDING base price (regular_price / current price), never a sale
price. Adapters expose the four data shapes discovered across the vendor set:

  woo            WooCommerce Store API (/wp-json/wc/store/v1/products + /products/<id>)
  purity_api     Purity's custom Next.js /api/products endpoint
  nextjs         Next.js per-product-page: JSON-LD Offer (single-price) OR the RSC
                 variants[] array (multi-size) — detected per page (Midwest uses both)

Network is read-only GET with a browser UA. On Cloudflare 403 (aero) the adapter
raises Blocked; such vendors are marked in the registry and skipped.
"""
import json
import re
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/140.0 Safari/537.36")


class Blocked(Exception):
    pass


def http_get(url, timeout=25, retries=2):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    last = None
    for _ in range(retries + 1):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read().decode("utf-8", "ignore")
        except urllib.error.HTTPError as e:
            if e.code == 403:
                raise Blocked(f"{url} -> 403 (Cloudflare / auth wall)")
            last = e
        except Exception as e:
            last = e
        time.sleep(0.4)
    raise last if last else RuntimeError(f"fetch failed: {url}")


def _cents(pr, key):
    try:
        return int(pr[key]) / 100
    except Exception:
        return None


def _flight_blob(html):
    """Concatenate + unescape a Next.js RSC flight stream."""
    chunks = re.findall(r'self\.__next_f\.push\(\[1,"(.*?)"\]\)', html, re.S)
    return ''.join(chunks).encode().decode('unicode_escape', errors='ignore')


# ---------------------------------------------------------------- WooCommerce

def woo(domain, per_page=100, max_pages=3):
    base = f"https://{domain}/wp-json/wc/store/v1"
    products = []
    for pg in range(1, max_pages + 1):
        txt = http_get(f"{base}/products?per_page={per_page}&page={pg}")
        page = json.loads(txt)
        if not isinstance(page, list) or not page:
            break
        products += page
        if len(page) < per_page:
            break

    # Fetch every variation once, concurrently. Serial per-variation GETs made large
    # catalogs (behemoth/purerawz) stall for minutes — a single hung request could burn
    # its full timeout*retries before the next even started. Threading bounds wall-clock
    # to the slowest single request; results are keyed by id so output is order-identical
    # to the serial path (same URLs, same per-request timeout/retries).
    def _fetch_var(vid):
        try:
            return vid, json.loads(http_get(f"{base}/products/{vid}"))
        except Exception:
            return vid, None

    vids = [v['id'] for p in products for v in p.get('variations', [])]
    vfmap = {}
    if vids:
        with ThreadPoolExecutor(max_workers=12) as ex:
            for vid, vf in ex.map(_fetch_var, vids):
                vfmap[vid] = vf

    out = []
    for p in products:
        pr = p.get('prices', {})
        variations = []
        for v in p.get('variations', []):
            vf = vfmap.get(v['id'])
            attrs = [(a.get('name', ''), a.get('value', '')) for a in v.get('attributes', [])]
            if vf:
                variations.append({'attrs': attrs, 'regular': _cents(vf.get('prices', {}), 'regular_price'),
                                   'in_stock': vf.get('is_in_stock')})
            else:
                variations.append({'attrs': attrs, 'regular': _cents(pr, 'regular_price'),
                                   'in_stock': p.get('is_in_stock')})
        out.append({'name': p['name'], 'regular': _cents(pr, 'regular_price'),
                    'in_stock': p.get('is_in_stock'), 'variations': variations,
                    'description': (p.get('description', '') + ' ' + p.get('short_description', ''))})
    return out


# --------------------------------------------------------------- Purity API

def purity_api(domain, path="/api/products"):
    data = json.loads(http_get(f"https://{domain}{path}"))
    arr = data if isinstance(data, list) else next((v for v in data.values() if isinstance(v, list)), [])
    out = []
    for p in arr:
        try:
            price = float(p.get('price') or 0)
        except Exception:
            price = None
        out.append({'name': p['name'], 'regular': price,
                    'in_stock': p.get('stock_status') == 'instock', 'variations': [],
                    'description': (p.get('description', '') or '') + ' ' + (p.get('short_description', '') or '')})
    return out


# ----------------------------------------------------------------- Next.js

def _sitemap_products(domain, sitemap="sitemap.xml", pattern=r'/products/[a-z0-9-]+$'):
    xml = http_get(f"https://{domain}/{sitemap}")
    locs = re.findall(r'<loc>([^<]+)</loc>', xml)
    return sorted({u for u in locs if re.search(pattern, u)})


def _catalog_products(domain):
    """Discover /products/<slug> URLs on a Next.js/Medusa storefront that ships no XML
    sitemap (Synthesis .co): read the catalog category slugs off the homepage flight
    data, then harvest product slugs ("slug":"x","name":"y") from each /catalog/<cat>
    page's flight data. Category pages that 404 are skipped."""
    home = http_get(f"https://{domain}/")
    cats = set(re.findall(r'/catalog/([a-z0-9-]+)', home)) | set(re.findall(r'"researchArea":"([a-z0-9-]+)"', home))
    slugs = set()
    for c in sorted(cats):
        try:
            blob = _flight_blob(http_get(f"https://{domain}/catalog/{c}"))
        except Exception:
            continue
        slugs |= set(re.findall(r'"slug":"([a-zA-Z0-9._-]+)","name":"', blob))
    return sorted(f"https://{domain}/products/{s}" for s in slugs)


def nextjs(domain, sitemap="sitemap.xml", url_pattern=r'/products/[a-z0-9-]+$', discover="sitemap"):
    """Per-product-page extraction. Handles the RSC variants[] array (multi-size), the
    Science Based size/price/compareAt shape, the Medusa label/inStock/price shape, and
    the JSON-LD Offer block (single-price). Base = current `price`, not compare_at.
    discover: 'sitemap' (default) reads a sitemap; 'catalog' harvests from catalog pages."""
    urls = _catalog_products(domain) if discover == "catalog" else _sitemap_products(domain, sitemap, url_pattern)
    out = []
    for url in urls:
        try:
            html = http_get(url)
        except Exception:
            continue
        blob = _flight_blob(html)
        slug = url.rstrip('/').rsplit('/', 1)[-1]
        # product display name (JSON-LD Product name, else flight product object, else <title>)
        nm = (re.search(r'"@type":"Product","name":"([^"]+)"', html)
              or re.search(r'"@type":"Product"[^}]*?"name":"([^"]+)"', blob)
              or re.search(rf'"slug":"{re.escape(slug)}","name":"([^"]+)"', blob))
        name = nm.group(1) if nm else (re.search(r'<title>([^<|]+)', html).group(1).strip() if re.search(r'<title>', html) else slug)
        desc = re.search(r'"description":"([^"]{0,400})"', blob)
        desc = desc.group(1) if desc else ''

        # shape 1: RSC variants[] array  (name=size, price=current, compare_at=anchor)
        variants = re.findall(
            r'"name":"([^"]+)","sku":"[^"]*","price":([0-9.]+),"compare_at_price":(?:[0-9.]*|null),"stock_quantity":([0-9]+)',
            blob)
        # shape 1b: alt variant object (Science Based): size/price/compareAt/stockQty, no sku field
        if not variants:
            variants = re.findall(
                r'"size":"([^"]+)","price":([0-9.]+),"compareAt":(?:null|[0-9.]+|"[^"]*"),"stockQty":([0-9]+)',
                blob)
        # shape 1c: Medusa catalog variant (Synthesis .co): label=size, inStock bool,
        # price "$$NN.NN". Single-size products expose a one-entry variants[] too.
        if not variants:
            v3 = re.findall(
                r'"label":"([^"]+)","inStock":(true|false),(?:"image":"[^"]*",)?"price":"\$*([0-9]+(?:\.[0-9]+)?)"',
                blob)
            variants = [(sz, pr, '1' if ins == 'true' else '0') for sz, ins, pr in v3]
        if variants:
            vs = [{'attrs': [('Size', sz)], 'regular': float(pr), 'in_stock': int(sq) > 0}
                  for sz, pr, sq in variants]
            out.append({'name': name, 'regular': vs[0]['regular'], 'in_stock': any(v['in_stock'] for v in vs),
                        'variations': vs, 'description': desc})
            continue

        # shape 2: JSON-LD Offer  (single price + availability)
        off = re.search(r'"price":([0-9.]+),"priceValidUntil"[^}]*?"availability":"https://schema.org/(InStock|OutOfStock)"', blob)
        if off:
            out.append({'name': name, 'regular': float(off.group(1)),
                        'in_stock': off.group(2) == 'InStock', 'variations': [], 'description': desc})
    return out


ADAPTERS = {'woo': woo, 'purity_api': purity_api, 'nextjs': nextjs}


def fetch(adapter, domain, **opts):
    return ADAPTERS[adapter](domain, **opts)
