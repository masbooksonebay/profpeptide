"""Platform adapters — fetch a vendor's catalog and normalize it.

Every adapter returns a list of NormProduct dicts:
    {'name', 'price', 'regular', 'in_stock',
     'variations':[{'attrs':[(name,val)], 'price', 'regular', 'in_stock'}], 'description'}
`price` is the CURRENT effective price a buyer pays (sale_price when on sale, else
regular_price); `regular` is the standing list price. Downstream, base = `price`, and a
row is on-sale when price < regular. Adapters expose the four data shapes below:

  woo            WooCommerce Store API (/wp-json/wc/store/v1/products + /products/<id>)
  purity_api     Purity's custom Next.js /api/products endpoint
  nextjs         Next.js per-product-page: JSON-LD Offer (single-price) OR the RSC
                 variants[] array (multi-size) — detected per page (Midwest uses both)

Network is read-only GET with a browser UA. On Cloudflare 403 (aero) the adapter
raises Blocked; such vendors are marked in the registry and skipped.
"""
import html
import json
import re
import sys
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urlparse, parse_qs

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/140.0 Safari/537.36")


class Blocked(Exception):
    pass


def http_get(url, timeout=25, retries=2, cookie=None):
    hdrs = {"User-Agent": UA, "Accept": "*/*"}
    if cookie:
        hdrs["Cookie"] = cookie          # e.g. a consent-gate flag ("amino_age_verified=1")
    req = urllib.request.Request(url, headers=hdrs)
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


def _url_path(u):
    """Path portion of a product URL with NO leading slash — stored as vendorSlug so a
    single deep-link builder `https://<domain>/<vendorSlug>?<aff>` works for every vendor
    regardless of its permalink base (/product/, /shop/, or root — which diverges across
    woo stores). Derived from the store's own URL, so no hand-kept base map can go stale.
    The source's trailing slash is preserved: woo permalinks keep it (canonical, no 301);
    nextjs discovery URLs are rstripped by the caller, so amino-club stays no-trailing and
    its Shop URL is unchanged."""
    return urlparse(u).path.lstrip('/') if u else None


# Product permalinks reported by the Store API can be STALE — a vendor that migrated its slug
# (biocollex: /product/ghk-cu/ 302s to /ghk-cu-50mg/) leaves the API pointing at a URL that
# redirects and DROPS the affiliate query on the way. Resolving the permalink at pull time —
# follow redirects, keep the FINAL canonical path — makes vendorSlug self-healing, so no
# hand-maintained per-vendor exception list is ever needed (the pattern that produced stale
# hardcoded dates/codes). It NEVER raises: any failure keeps the Store-API path so one bad
# product can't fail the whole pull.
_GATE_PARAMS = {"redirect_to", "return", "return_to", "return_url", "redirect", "next"}


def _resolve_permalink(permalink, cookie=None):
    """(canonical_path, note). HEAD-follows redirects on a product permalink and returns the
    final SAME-HOST product path (leading slash stripped, trailing slash kept). Falls back to
    the Store-API path — with an explanatory note — on: a 403 (Cloudflare) or any other error;
    a redirect to a consent/interstitial gate (it carries a redirect-back param, so the gate
    returns to the original URL); or a redirect to a different host (a separate problem). note
    is None when the permalink already resolves cleanly (no change). `cookie` is sent so a
    login-gated storefront (Modern Aminos) resolves to the real product page, not a login gate."""
    orig = _url_path(permalink)
    if not permalink:
        return (orig, None)
    orig_host = urlparse(permalink).netloc.replace("www.", "")
    hdrs = {"User-Agent": UA, "Accept": "*/*"}
    if cookie:
        hdrs["Cookie"] = cookie
    try:
        req = urllib.request.Request(permalink, headers=hdrs, method="HEAD")
        with urllib.request.urlopen(req, timeout=15) as r:
            final = r.geturl()
    except urllib.error.HTTPError as e:
        return (orig, f"HTTP {e.code} on resolve — kept Store-API permalink")
    except Exception as e:
        return (orig, f"{type(e).__name__} on resolve — kept Store-API permalink")
    fu = urlparse(final)
    if any(k in parse_qs(fu.query) for k in _GATE_PARAMS):
        return (orig, "consent/interstitial gate — kept original (gate returns to it)")
    if fu.netloc.replace("www.", "") != orig_host:
        return (orig, f"cross-host redirect {orig_host}->{fu.netloc} — kept original")
    fpath = fu.path.lstrip("/")
    if fpath and fpath != orig:
        return (fpath, f"resolved {orig} -> {fpath}")
    return (orig, None)


# ---------------------------------------------------------------- WooCommerce

def woo(domain, per_page=100, max_pages=12, cookie=None):
    # max_pages is a ceiling, not a target: the loop breaks as soon as a page returns
    # < per_page items, so small catalogs still stop early. Raised from 3 (a hard 300-item
    # cap that silently truncated behemoth-labz and purerawz, both of which fill 3 pages).
    # `cookie` carries a login session for gated catalogs (Modern Aminos: the Store API is
    # only reachable authenticated). Same http_get Cookie-header mechanism as amino-club's
    # consent flag — but the value is a real credential, so it's read from a gitignored file
    # at pull time (see refresh.py), never stored in the registry.
    base = f"https://{domain}/wp-json/wc/store/v1"
    products = []
    for pg in range(1, max_pages + 1):
        txt = http_get(f"{base}/products?per_page={per_page}&page={pg}", cookie=cookie)
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
            return vid, json.loads(http_get(f"{base}/products/{vid}", cookie=cookie))
        except Exception:
            return vid, None

    vids = [v['id'] for p in products for v in p.get('variations', [])]
    vfmap = {}
    if vids:
        with ThreadPoolExecutor(max_workers=12) as ex:
            for vid, vf in ex.map(_fetch_var, vids):
                vfmap[vid] = vf

    # Resolve each product's permalink to its canonical path (one HEAD per product, threaded
    # to bound wall-clock like the variation fetch). resmap[permalink] = (canonical_path, note).
    perms = sorted({p.get('permalink') for p in products if p.get('permalink')})
    resmap = {}
    if perms:
        with ThreadPoolExecutor(max_workers=12) as ex:
            for pl, res in ex.map(lambda u: (u, _resolve_permalink(u, cookie=cookie)), perms):
                resmap[pl] = res
    notes = [(_url_path(pl), n) for pl, (_p, n) in resmap.items() if n]
    if notes:
        print(f"[resolve] {domain}: {len(notes)} permalink note(s) of {len(perms)} product(s):", file=sys.stderr)
        for path, n in sorted(notes):
            print(f"    {path}: {n}", file=sys.stderr)

    out = []
    for p in products:
        pr = p.get('prices', {})
        variations = []
        for v in p.get('variations', []):
            vf = vfmap.get(v['id'])
            attrs = [(a.get('name', ''), a.get('value', '')) for a in v.get('attributes', [])]
            vpr = vf.get('prices', {}) if vf else pr
            # `price` is the CURRENT price (sale_price when on sale, else regular_price);
            # `regular` is the standing list price. Both come straight from the Store API.
            variations.append({'attrs': attrs,
                               'price': _cents(vpr, 'price'), 'regular': _cents(vpr, 'regular_price'),
                               'in_stock': (vf.get('is_in_stock') if vf else p.get('is_in_stock'))})
        # Simple product (no variations) whose mg lives in a defining "Size" attribute rather
        # than the name (LA Peptides: Size = "10MG"). Synthesize one variation per size term so
        # the dosage size is captured; the single product price applies to each.
        if not variations:
            for a in p.get('attributes', []):
                if re.search(r'\bsize\b|^mg$|^mcg$', a.get('name', ''), re.I):
                    terms = [t.get('name') for t in (a.get('terms') or []) if t.get('name')]
                    if terms:
                        variations = [{'attrs': [(a.get('name', ''), t)],
                                       'price': _cents(pr, 'price'), 'regular': _cents(pr, 'regular_price'),
                                       'in_stock': p.get('is_in_stock')} for t in terms]
                        break
        # Names arrive HTML-entity-encoded (LA Peptides: "GLP &#8211; 3 (R)"). Unescape so
        # downstream matching (decoders, aliases) and rendered listedAs see clean text.
        # `slug` is emitted as the CANONICAL permalink PATH (resolved above; e.g. "product/glp-3/",
        # "shop/vesugen-20mg/", root "humanin/", or biocollex's redirect-resolved "ghk-cu-50mg/")
        # — NOT the bare handle — so one universal deep-link builder works across every vendor
        # without a per-vendor base map (bases diverge: /product/, /shop/, root). Per-PRODUCT:
        # variations share the parent permalink, matching the grid's per-row model.
        pl = p.get('permalink')
        resolved = resmap.get(pl, (_url_path(pl), None))[0]
        out.append({'name': html.unescape(p['name']),
                    'price': _cents(pr, 'price'), 'regular': _cents(pr, 'regular_price'),
                    'in_stock': p.get('is_in_stock'), 'variations': variations,
                    'slug': resolved or p.get('slug'),
                    'description': html.unescape(p.get('description', '') + ' ' + p.get('short_description', ''))})
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
        # Purity's API exposes a single price per product (no sale/compare field), so
        # current price == regular. If a sale/regular field ever appears, read it here.
        try:
            regular = float(p.get('regular_price') or p.get('compare_at_price') or 0) or price
        except Exception:
            regular = price
        out.append({'name': p['name'], 'price': price, 'regular': regular,
                    'in_stock': p.get('stock_status') == 'instock', 'variations': [],
                    'description': (p.get('description', '') or '') + ' ' + (p.get('short_description', '') or '')})
    return out


# ----------------------------------------------------------------- Next.js

def _sitemap_products(domain, sitemap="sitemap.xml", pattern=r'/products/[a-z0-9-]+$', cookie=None):
    xml = http_get(f"https://{domain}/{sitemap}", cookie=cookie)
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


def nextjs(domain, sitemap="sitemap.xml", url_pattern=r'/products/[a-z0-9-]+$', discover="sitemap", cookie=None):
    """Per-product-page extraction. Handles the RSC variants[] array (multi-size), the
    Science Based size/price/compareAt shape, the Medusa label/inStock/price shape, the
    Amino Club Medusa variants[]/calculated_price shape, and the JSON-LD Offer block
    (single-price). Base = current `price`, not compare_at.
    discover: 'sitemap' (default) reads a sitemap; 'catalog' harvests from catalog pages.
    cookie: sent on every request — used to clear a consent gate (amino_age_verified=1)."""
    urls = _catalog_products(domain) if discover == "catalog" else _sitemap_products(domain, sitemap, url_pattern, cookie=cookie)
    out = []
    for url in urls:
        try:
            html = http_get(url, cookie=cookie)
        except Exception:
            continue
        blob = _flight_blob(html)
        slug = url.rstrip('/').rsplit('/', 1)[-1]
        # `slug` (bare last segment) is kept for the internal name/Medusa-handle matching
        # below. `path` is the permalink PATH emitted as vendorSlug (parity with woo) so one
        # universal builder works everywhere. rstrip('/') keeps amino-club's canonical
        # no-trailing-slash path (us/products/<handle>), so the pilot's Shop URL is unchanged.
        path = _url_path(url.rstrip('/'))
        # product display name (JSON-LD Product name, else flight product object, else <title>)
        nm = (re.search(r'"@type":"Product","name":"([^"]+)"', html)
              or re.search(r'"@type":"Product"[^}]*?"name":"([^"]+)"', blob)
              or re.search(rf'"slug":"{re.escape(slug)}","name":"([^"]+)"', blob))
        name = nm.group(1) if nm else (re.search(r'<title>([^<|]+)', html).group(1).strip() if re.search(r'<title>', html) else slug)
        desc = re.search(r'"description":"([^"]{0,400})"', blob)
        desc = desc.group(1) if desc else ''

        # shape 1: RSC variants[] array  (name=size, price=current, compare_at=anchor).
        # 4-tuple (size, current_price, compare_at_anchor, stock); anchor '' when null.
        variants = re.findall(
            r'"name":"([^"]+)","sku":"[^"]*","price":([0-9.]+),"compare_at_price":([0-9.]*|null),"stock_quantity":([0-9]+)',
            blob)
        # shape 1b: alt variant object (Science Based): size/price/compareAt/stockQty, no sku field
        if not variants:
            variants = re.findall(
                r'"size":"([^"]+)","price":([0-9.]+),"compareAt":(null|[0-9.]+|"[^"]*"),"stockQty":([0-9]+)',
                blob)
        # shape 1c: Medusa catalog variant (Synthesis .co): label=size, inStock bool,
        # price "$$NN.NN". Single-size products expose a one-entry variants[] too.
        if not variants:
            v3 = re.findall(
                r'"label":"([^"]+)","inStock":(true|false),(?:"image":"[^"]*",)?"price":"\$*([0-9]+(?:\.[0-9]+)?)"',
                blob)
            variants = [(sz, pr, '', '1' if ins == 'true' else '0') for sz, ins, pr in v3]  # no anchor field
        # shape 1d: full Medusa product (Amino Club, behind a consent gate) — the main
        # product's variants[] each nest a calculated_price. Base = original_amount (a
        # sitewide COUPON, not a price-list markdown, is the only discount so it isn't in
        # the product data). Scope to the MAIN product (handle == url slug) so the page's
        # recommended-products carousel doesn't leak its variants into this product.
        if not variants:
            handles = [(m.start(), m.group(1)) for m in re.finditer(r'"handle":"([^"]+)"', blob)]
            mo = next((o for o, h in handles if h == slug), handles[0][0] if handles else None)
            vstart = next((m.start() for m in re.finditer(r'"variants":\[', blob)
                           if mo is not None and m.start() > mo), None)
            if vstart is not None:
                vend = min([o for o, _ in handles if o > vstart] or [len(blob)])
                for c in re.split(r'(?="id":"variant_)', blob[vstart:vend]):
                    t = re.match(r'"id":"variant_[^"]+","title":"([^"]+)"', c)
                    orig = re.search(r'"original_amount":([0-9.]+)', c)
                    if t and orig:
                        oos = re.search(r'"out_of_stock":(true|false)', c)
                        # amino-club: original_amount is the base (sitewide coupon isn't in data), no anchor
                        variants.append((t.group(1), orig.group(1), '', '0' if (oos and oos.group(1) == 'true') else '1'))
        if variants:
            def _anchor(cmp_str, price):
                try:
                    a = float(str(cmp_str).strip('"'))
                except (ValueError, TypeError):
                    return price
                return a if a > price else price   # anchor only when it exceeds current price
            vs = [{'attrs': [('Size', sz)], 'price': float(pr), 'regular': _anchor(cmp, float(pr)),
                   'in_stock': int(sq) > 0} for sz, pr, cmp, sq in variants]
            out.append({'name': name, 'price': vs[0]['price'], 'regular': vs[0]['regular'],
                        'in_stock': any(v['in_stock'] for v in vs), 'variations': vs, 'description': desc,
                        'slug': path})
            continue

        # shape 2: JSON-LD Offer  (single price + availability) — one price, no anchor
        off = re.search(r'"price":([0-9.]+),"priceValidUntil"[^}]*?"availability":"https://schema.org/(InStock|OutOfStock)"', blob)
        if off:
            out.append({'name': name, 'price': float(off.group(1)), 'regular': float(off.group(1)),
                        'in_stock': off.group(2) == 'InStock', 'variations': [], 'description': desc,
                        'slug': path})
    return out


# ----------------------------------------------------- Next.js single-flight feed

def _balanced_array(blob, start_key):
    """Substring of the JSON array value for `start_key` (its opening '[' to the matching
    ']'), walked string- and escape-aware so brackets inside string values don't miscount.
    RAISES if the key or a balanced close isn't found — a single-flight feed adapter must
    fail LOUD when the flight shape changed, never silently narrow to nothing."""
    i = blob.find(start_key)
    if i < 0:
        raise RuntimeError(f"nextjs_feed: '{start_key}' not found in flight")
    i = blob.index('[', i)
    depth = 0
    in_str = esc = False
    for j in range(i, len(blob)):
        c = blob[j]
        if in_str:
            if esc:
                esc = False
            elif c == '\\':
                esc = True
            elif c == '"':
                in_str = False
        elif c == '"':
            in_str = True
        elif c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                return blob[i:j + 1]
    raise RuntimeError(f"nextjs_feed: unbalanced array for '{start_key}' — flight shape changed")


def nextjs_feed(domain, feed_path="/shop", array_key="initialProducts", product_base="product"):
    """Whole-catalog Next.js storefronts that server-render the ENTIRE product list into ONE
    page's RSC flight as a JSON array (Crush Research: /shop -> "initialProducts":[...]) rather
    than one page per product (the `nextjs` adapter's model) or a Woo Store API. One GET, no
    per-product fetch, no sitemap, no database access (Supabase is server-side only here).

    Flight fields mapped: name, slug, mgPerVial (explicit size — no name parsing), lowestPrice
    (cents -> current price), originalPrice (cents|null -> `regular` only when on sale), inStock.
    Out-of-stock items carry lowestPrice:0; they pass through here and are dropped downstream by
    the price<=0 guard (same class as no-size rows). `slug` is emitted as the canonical permalink
    PATH "<product_base>/<slug>" so the shared deep-link builder composes
    https://<domain>/<product_base>/<slug>?<aff> (parity with woo/nextjs vendorSlug).

    FAILS LOUD: the flight structure is a frontend implementation detail. A vendor redeploy with
    a different shape won't parse — _balanced_array raises, and a parse yielding 0 products raises
    below, rather than returning [] (which would look like a clean empty catalog). --write's >50%
    row-drop floor also catches regressions, but only against a baseline; the raise catches a
    first-pull/redeploy break too."""
    blob = _flight_blob(http_get(f"https://{domain}{feed_path}"))
    arr = _balanced_array(blob, f'"{array_key}":')
    chunks = re.split(r'(?=\{"id":")', arr)

    def field(c, key, quoted):
        pat = rf'"{key}":"([^"]*)"' if quoted else rf'"{key}":([0-9.]+|null|true|false)'
        m = re.search(pat, c)
        return m.group(1) if m else None

    out = []
    for c in chunks:
        slug = field(c, "slug", True)
        lp = field(c, "lowestPrice", False)
        if not slug or lp is None:          # skip the array's non-product preamble/tail
            continue
        name = field(c, "name", True) or slug
        op = field(c, "originalPrice", False)
        mg = field(c, "mgPerVial", False)
        in_stock = field(c, "inStock", False) == "true"
        price = int(lp) / 100
        regular = float(op) / 100 if (op and op != "null") else None
        variations = []
        if mg and mg != "null":             # explicit size -> one Size variation (no name parsing)
            variations = [{'attrs': [('Size', f'{float(mg):g}mg')],
                           'price': price, 'regular': regular, 'in_stock': in_stock}]
        out.append({'name': html.unescape(name), 'price': price, 'regular': regular,
                    'in_stock': in_stock, 'variations': variations, 'description': '',
                    'slug': f'{product_base}/{slug}'})
    if not out:
        raise RuntimeError(f"nextjs_feed: parsed 0 products from https://{domain}{feed_path} "
                           f"('{array_key}' flight shape may have changed) — refusing to return empty")
    return out


# --------------------------------------------------- Gatsby page-data catalog

def _num(x):
    """float from a JSON value that may be a numeric string ('199', '636.80') or an empty
    string (Spartan leaves regular_price '' when not on sale) -> None."""
    try:
        return float(x)
    except (TypeError, ValueError):
        return None


def gatsby_pagedata(domain, page_path="/page-data/all-peptides/page-data.json", product_base="products"):
    """Gatsby storefronts that render a listing page whose page-data JSON carries the WHOLE
    catalog with per-variant prices (Spartan Peptides: /page-data/all-peptides/page-data.json,
    27 products). One GET of a public static asset — no per-product fetch, no login, no DB. A
    client-side 21+ overlay does not gate the JSON.

    Each top-level product (a dict with `slug` + `product_variations[]`) yields one row per
    SINGLE-VIAL variation. Variations are named "<size>, <vials>" (e.g. "10mg, 1"); size + vial
    count are read from that structured pair. Only vials=1 is a single — 2/4-vial entries are
    bulk kits and are DROPPED (count logged to stderr). Quirk: a size-group with no explicit
    vial count (Spartan's MOTS-c lists three "10mg" variants at the 1/2/4-vial price ladder) —
    the lowest total price is the single vial; the rest are dropped as kits. `price`/`regular_price`
    map to current/list (on-sale when regular>price); `stock_status` is per-variant. slug ->
    "<product_base>/<slug>/" so the shared deep-link builder composes the affiliate product URL.

    The product NAME is taken as the part BEFORE the first "|" — Spartan titles are
    "<Compound> <size> | <marketing subtitle>", and the subtitle would mis-trigger the compound
    matcher (e.g. "AOD-9604 | HGH Fragment ..." would match hgh-fragment). Coded/blend identity
    lives in that clean prefix (GLP-2(Tirz), CJC-1295 / Ipamorelin Blend, Wolverine Stack).

    FAILS LOUD: Gatsby page-data paths can change on a rebuild. If the path 404s, the body isn't
    JSON, or no product (slug + product_variations[]) is found, this raises rather than returning
    [] (which would read as a clean empty catalog)."""
    try:
        raw = http_get(f"https://{domain}{page_path}")
        data = json.loads(raw)
    except Blocked:
        raise
    except Exception as e:
        raise RuntimeError(f"gatsby_pagedata: https://{domain}{page_path} did not return usable JSON "
                           f"({type(e).__name__}: {e}) — page-data path may have changed on rebuild")

    products = {}
    def walk(o):
        if isinstance(o, dict):
            if o.get('slug') and isinstance(o.get('product_variations'), list):
                products.setdefault(o['slug'], o)
            for val in o.values():
                walk(val)
        elif isinstance(o, list):
            for val in o:
                walk(val)
    walk(data)
    if not products:
        raise RuntimeError(f"gatsby_pagedata: no products (slug + product_variations[]) in "
                           f"https://{domain}{page_path} — expected keys missing (Gatsby rebuild changed the shape?)")

    dropped_kits = 0
    out = []
    for slug, p in products.items():
        name = html.unescape(p.get('name') or slug).split('|')[0].strip()
        # parse each variation: size (first mg/mcg token) + trailing ", <vials>" count
        parsed = []
        for v in p.get('product_variations', []):
            vn = html.unescape(v.get('name') or '')
            ms = re.search(r'(\d+(?:\.\d+)?)\s*(mg|mcg)', vn, re.I)
            mv = re.search(r',\s*(\d+)\s*$', vn)          # "10mg, 4" -> vials 4; "10mg" -> None
            parsed.append({'size': (ms.group(1) + ms.group(2).lower()) if ms else None,
                           'vials': int(mv.group(1)) if mv else None,
                           'price': _num(v.get('price')), 'regular': _num(v.get('regular_price')),
                           'in_stock': v.get('stock_status') == 'instock'})
        # keep single-vial only, per (product,size) group; drop multi-vial kits (count them)
        kept = []
        by_size = {}
        for c in parsed:
            by_size.setdefault(c['size'], []).append(c)
        for _size, cs in by_size.items():
            singles = [c for c in cs if c['vials'] == 1]
            if singles:
                kept += singles + [c for c in cs if c['vials'] is None]   # keep explicit 1-vial (+ any countless)
                dropped_kits += sum(1 for c in cs if c['vials'] not in (None, 1))
            else:
                # no explicit single in this size-group (MOTS-c) -> cheapest total = the single vial
                priced = [c for c in cs if c['price'] is not None]
                if priced:
                    lo = min(priced, key=lambda c: c['price'])
                    kept.append(lo)
                    dropped_kits += len(priced) - 1
                else:
                    kept += cs
        variations = [{'attrs': [('Size', c['size'] or '')], 'price': c['price'],
                       'regular': c['regular'], 'in_stock': c['in_stock']} for c in kept]
        out.append({'name': name,
                    'price': variations[0]['price'] if variations else _num(p.get('price')),
                    'regular': variations[0]['regular'] if variations else _num(p.get('regular_price')),
                    'in_stock': p.get('stock_status') == 'instock',
                    'variations': variations, 'description': '',
                    'slug': f"{product_base}/{slug}/"})
    print(f"[gatsby] {domain}: {len(out)} products, dropped {dropped_kits} multi-vial kit variation(s)", file=sys.stderr)
    return out


ADAPTERS = {'woo': woo, 'purity_api': purity_api, 'nextjs': nextjs,
            'nextjs_feed': nextjs_feed, 'gatsby_pagedata': gatsby_pagedata}


def fetch(adapter, domain, **opts):
    return ADAPTERS[adapter](domain, **opts)
