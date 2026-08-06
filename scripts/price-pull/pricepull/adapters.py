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
import math
import re
import sys
import time
import urllib.request
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urlparse, parse_qs

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/140.0 Safari/537.36")


class Blocked(Exception):
    pass


class NonUSD(Exception):
    """Raised when a vendor's Store API reports a non-USD currency_code. The pull prices in USD
    only; storing another currency's numbers as USD would silently mis-scale every row (NOVA in
    AED shipped ~3.67x inflated). Refuse loudly and write no price section — absent beats wrong,
    with no FX rate to go stale (option a). Forward-compatible with a future native-currency render."""
    pass


class IncompletePull(Exception):
    """Raised when a pull KNOWS it fetched less than the full catalog — a degraded/cached HTTP 200
    products page that returned fewer items than the API's own X-WP-Total header claims, or a
    variation page that failed all retries. This is the truncation that silently shipped: a short
    200 is indistinguishable from 'last page' to the len(page) < per_page loop, and the old 50%
    row-drop floor let a 43->23 (~47%) truncation through. A pull that knows it's incomplete must
    write NOTHING at ANY percentage — the fix is to RETRY, not to overwrite good data with a stub.
    Distinct from a genuine delisting (fetched == X-WP-Total, catalog really smaller) which trips
    only the row-drop floor and IS writable with --allow-shrink."""
    pass


def http_get(url, timeout=25, retries=2, cookie=None):
    return http_get2(url, timeout=timeout, retries=retries, cookie=cookie)[0]


def http_get2(url, timeout=25, retries=2, cookie=None):
    """Like http_get but returns (body, headers) so callers can read integrity headers such as
    WooCommerce's X-WP-Total / X-WP-TotalPages. Same retry/timeout/403->Blocked semantics."""
    hdrs = {"User-Agent": UA, "Accept": "*/*"}
    if cookie:
        hdrs["Cookie"] = cookie          # e.g. a consent-gate flag ("amino_age_verified=1")
    req = urllib.request.Request(url, headers=hdrs)
    last = None
    for _ in range(retries + 1):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read().decode("utf-8", "ignore"), r.headers
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


def _detect_gate_collapse(resmap, n_products):
    """Detect a GATE COLLAPSE in a built resmap: many DISTINCT product permalinks redirecting onto
    ONE shared destination — the fingerprint of an account-gated catalog. Vital Core did exactly
    this: every /product/<x>/ 302s to vital-core-researcher-access/, so 27 distinct products
    collapsed onto one path. Every collapsed row would then inherit that single gate slug,
    permanently erasing product identity from the data — and X-WP-Total, the variation guard, and
    the row-drop floor all pass, so it reads as ordinary churn (31 removed / 27 added).

    Threshold — separate a gate from LEGITIMATE canonicalization. A slug migration, or a
    discontinued item redirecting to its replacement, merges a SMALL number of URLs (2-3); a gate
    collapses a large SHARE of the catalog. So a destination is a gate iff it is the resolution
    target of MORE THAN ONE distinct source AND its group is >= max(3, ceil(0.30 * n_products)).
    That fires on Vital Core (27 of 27 -> 100%) and any wholly/largely gated catalog, while a 2-3
    URL legitimate merge on a catalog of any size stays clear (and a 3-way merge only trips on a
    tiny <=10-product catalog, where 3 of <=10 collapsing to one URL is itself worth a look). A
    partial gate absorbing <30% would slip — but a gate redirects ALL product URLs, so partial
    collapse is not the observed failure mode. n_products=0 -> floor of 3 (never divide into empty).

    Returns {gate_destination: [source_permalinks...]} — empty dict when there is no gate. Pure and
    side-effect-free so it can be unit-tested against Vital Core's known behavior without a re-pull."""
    if not resmap:
        return {}
    groups = defaultdict(list)
    for pl, (path, _note) in resmap.items():
        groups[path].append(pl)
    threshold = max(3, math.ceil(0.30 * n_products)) if n_products else 3
    return {dest: pls for dest, pls in groups.items() if len(pls) >= threshold}


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
    expected_total = None   # X-WP-Total: the catalog size the API itself claims (integrity check)
    for pg in range(1, max_pages + 1):
        txt, resp_hdrs = http_get2(f"{base}/products?per_page={per_page}&page={pg}", cookie=cookie)
        if pg == 1:
            t = resp_hdrs.get("X-WP-Total")
            expected_total = int(t) if t and str(t).isdigit() else None
        page = json.loads(txt)
        if not isinstance(page, list) or not page:
            break
        products += page
        if len(page) < per_page:
            break
    # ROOT-CAUSE GUARD (truncation): the loop above treats any short page as the last page, so a
    # degraded/cached HTTP 200 returning fewer items than really exist looks identical to a small
    # catalog — no error, and the pull silently truncates (la-peptides 75->23, nextgen 79->27 both
    # reproduced live). The API states its own size in X-WP-Total; if we fetched fewer, we KNOW the
    # pull is incomplete. Refuse at any percentage — a real, smaller catalog reports a smaller
    # X-WP-Total too, so this fires only on truncation, never on a genuine delisting.
    if expected_total is not None and len(products) < expected_total:
        raise IncompletePull(f"[woo:{domain}] fetched {len(products)} of {expected_total} products "
                             f"(X-WP-Total) — incomplete pull (degraded page / rate-limit). Retry; not written.")

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
    # ROOT-CAUSE GUARD (per-page failure): _fetch_var swallows a failed variation fetch to None,
    # after which the product loop silently falls back to the PARENT price — a wrong per-size price
    # that no row count would reveal. A pull that failed to fetch a page it needed must not write.
    var_failures = sum(1 for vf in vfmap.values() if vf is None)
    if var_failures:
        raise IncompletePull(f"[woo:{domain}] {var_failures} of {len(vids)} variation page fetch(es) "
                             f"failed all retries — per-size prices would fall back to parent. Retry; not written.")

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

    # COLLAPSE GUARD (gated catalog) — see _detect_gate_collapse. When a vendor gates its catalog,
    # every product URL redirects onto one destination and every row would inherit that gate slug;
    # the other guards all pass, so it reads as ordinary churn. For each collapsed product, keep the
    # RAW Store-API `product/<name>/` path (which still names the product and is recoverable later —
    # a slug that names the gate is not) instead of the collapsed destination, and warn LOUDLY in the
    # IncompletePull style. This does NOT refuse the write: a gated catalog still returns valid
    # prices, only the deep-links break, so keeping raw paths and warning beats discarding good price
    # data. The loud warning lets a human hold the --write if the churn also looks wrong.
    gate_groups = _detect_gate_collapse(resmap, len(products))
    if gate_groups:
        collapsed = sum(len(pls) for pls in gate_groups.values())
        print(f"[collapse] {domain}: GATE COLLAPSE — {collapsed} distinct product URL(s) redirect onto "
              f"{len(gate_groups)} shared destination(s) (account-gated catalog?). Resolution FAILED for "
              f"these; keeping raw Store-API paths so product identity survives. Prices ARE written — "
              f"review the churn before trusting the write:", file=sys.stderr)
        for dest, pls in sorted(gate_groups.items(), key=lambda kv: -len(kv[1])):
            print(f"    {len(pls)} products -> /{dest}", file=sys.stderr)
            for pl in pls:
                raw = _url_path(pl)
                resmap[pl] = (raw, f"gate collapse ({len(pls)} URLs -> {dest}) — kept raw {raw}")

    out = []
    slug_misses = []   # variation size values that fell back to an unresolved slugified-decimal (Rule C)
    for p in products:
        pr = p.get('prices', {})
        # RULE C: WooCommerce stores a variation's attribute as the term SLUG — "552.18 mg | Batch
        # 1708 | 99.8% Purity" becomes "552-18-mg-batch-1708-99-8-purity", which destroys the decimal
        # so parse_size later reads "18mg". The decimal-preserving DISPLAY lives in the product's
        # attributes[].terms[].name; build a (attr-name, term-slug) -> term-name map and resolve each
        # variation value through it BEFORE it reaches parse_size.
        term_name = {}
        for a in p.get('attributes', []):
            an = a.get('name', '')
            for t in (a.get('terms') or []):
                if t.get('slug') and t.get('name'):
                    term_name[(an, t['slug'])] = t['name']
        variations = []
        for v in p.get('variations', []):
            vf = vfmap.get(v['id'])
            attrs = []
            for a in v.get('attributes', []):
                an, val = a.get('name', ''), a.get('value', '')
                disp = term_name.get((an, val))
                if disp is None:
                    # MISS: no matching term — fall back to the raw value, but NEVER silently when it
                    # is a slugified decimal ("552-18-mg"), which would reintroduce the mis-parse. The
                    # slug is unrecoverable (parse_size can only grab a wrong fragment), so surface it.
                    if val and re.search(r'\d-\d.*?(mg|mcg)\b', val, re.I):
                        slug_misses.append((p.get('slug', ''), an, val))
                    disp = val
                attrs.append((an, disp))
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
                    # currency_code from the Store API — carried through so the build_vendor currency
                    # guard can refuse non-USD vendors (priced in USD only). Absent → treated as USD.
                    'currency': (pr.get('currency_code') or '').upper(),
                    'description': html.unescape(p.get('description', '') + ' ' + p.get('short_description', ''))})
    if slug_misses:
        print(f"[woo:{domain}] ⚠ {len(slug_misses)} variation size(s) fell back to an UNRESOLVED "
              f"slugified-decimal value (a term lookup missed; parse_size will mis-read these):", file=sys.stderr)
        for slug, an, val in slug_misses[:12]:
            print(f"    {slug} [{an}] = {val!r}", file=sys.stderr)
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


# ----------------------------------------------------------------- Payload CMS (99 Purity)

def _pp99_size_from_sku(sku):
    """Size from a 99-Purity variant SKU. Grammar: <PREFIX>-<SIZE>[-K<vials>] — SIZE is a bare
    number = mg (sprays carry an explicit 'mcg'); the -K5/-K10 kit suffix is stripped first.
    Returns e.g. '10mg' / '100mcg', or None (blends GLOW/KLOW, IGF-1-LR3-S, BAC-WATER-3ML)."""
    if not sku:
        return None
    _z = lambda n: (n.lstrip('0') or '0') if n.isdigit() else n   # "05" -> "5" (leading-zero fix)
    m = re.search(r'(\d+(?:\.\d+)?)\s*(mg|mcg)\b', sku, re.I)     # explicit unit (TIRZ-10MG, ...-100mcg)
    if m:
        return _z(m.group(1)) + m.group(2).lower()
    core = re.sub(r'-K\d+$', '', sku, flags=re.I)                 # strip the kit suffix
    m = re.search(r'-(\d+(?:\.\d+)?)$', core)                     # trailing bare number = mg
    return (_z(m.group(1)) + 'mg') if m else None


# 99 Purity's variant-less products carry no size in SKU or name. For NON-SPRAY vials only, we
# size from the description IFF it states exactly ONE mg/mcg figure that is NOT in a per-ml /
# per-dose / per-serving / reconstitution / dilution context (a concentration or protocol number
# is not a vial size). This mirrors the accepted Modern-Aminos single-dose rule but adds the
# stricter context guard, and is SCOPED TO THIS ADAPTER: the shared extract_rows generic desc
# fallback is untouched and no other vendor inherits this stricter variant.
_PP99_BADCTX = re.compile(r'per\s*ml|/\s*ml|mg\s*/\s*ml|per\s*dose|per\s*serving|reconstitut|dilut', re.I)


def _pp99_size_from_desc(desc):
    if not desc:
        return None
    text = re.sub(r'<[^>]+>', ' ', desc)
    figs = re.findall(r'\d+(?:\.\d+)?\s*(?:mg|mcg)\b', text, re.I)
    distinct = {f.lower().replace(' ', '') for f in figs}
    if len(distinct) != 1:
        return None                                              # zero or >1 figure -> not a vial size
    for m in re.finditer(r'\d+(?:\.\d+)?\s*(?:mg|mcg)\b', text, re.I):
        if _PP99_BADCTX.search(text[max(0, m.start() - 25):m.end() + 25]):
            return None                                          # concentration / protocol number
    return next(iter(distinct))


def payload_99purity(domain, path="/api/products", limit=100):
    """99 Purity Peptides — Next.js + Payload CMS on Vercel (NOT WooCommerce/CINC; the old
    'wc/store 403' note pointed at an API that doesn't exist here). The storefront's own public
    REST endpoint /api/products returns the whole catalog as {"docs":[...]} with no key/auth.

    CURRENCY: the API has NO currency field and there are no Payload globals, but the storefront
    states verbatim 'All prices are in USD' (the ETH/USDT selector is a checkout payment rail, not
    the list currency). USD is therefore carried EXPLICITLY here as a recorded basis, not inherited
    from the silent per-adapter default. PRICES are whole DOLLARS (not cents) — emitted as-is.

    SIZE: variant SKU (_pp99_size_from_sku); variant-less NON-spray vials via the guarded
    description rule (_pp99_size_from_desc). KITS: variant.isKit (== the -K5/-K10 suffix, verified
    0 mismatches; K5/K10 priced exactly 5x/10x the single) -> marked '<n>-vial kit' so extract_rows
    drops them in favor of the single. SPRAYS: sized ones (SKU) flow to the spray section; variant-
    less sprays carry no size and are DROPPED here (never name/desc-guessed — a format we exclude)."""
    data = json.loads(http_get(f"https://{domain}{path}?limit={limit}"))
    docs = data.get('docs', data if isinstance(data, list) else [])
    out, dropped_sprays = [], []
    for p in docs:
        name = (p.get('name') or '').strip()
        slug = p.get('slug') or ''
        desc = p.get('description') or ''
        is_spray = 'spray' in name.lower()
        # Multi-compound blends (name has "/" or "+") carry a CONCATENATED component-dose code in the
        # SKU (TIPA-0603 = 6mg+3mg, BPCTB-0505 = 5mg+5mg) that is NOT a vial size — suppress it so the
        # blend track shows total-mg-from-name (or "—") instead of a garbage "0603mg".
        is_blend = ('/' in name) or ('+' in name)
        variants = p.get('variants') or []
        rows = []
        if variants:
            for v in variants:
                sku = v.get('sku') or ''
                size = None if is_blend else _pp99_size_from_sku(sku)
                attrs = [("Size", size or "")]
                if v.get('isKit') or re.search(r'-K\d+$', sku, re.I):
                    kc = re.search(r'-K(\d+)$', sku, re.I)
                    attrs.append(("Pack", f"{kc.group(1) if kc else ''}-vial kit"))
                vprice, vsale = v.get('price'), v.get('salePrice')
                cur = vsale if (vsale is not None and vprice is not None and vsale < vprice) else vprice
                rows.append({'attrs': attrs, 'price': cur, 'regular': vprice,
                             'in_stock': (v.get('stock') or 0) > 0})
        else:
            if is_spray:                                          # variant-less spray = no size -> drop
                dropped_sprays.append(name)
                continue
            nm = re.search(r'(\d+(?:\.\d+)?)\s*(mg|mcg)\b', name, re.I)
            # blends: no name/desc size (route to blend track by name); else name-mg, then guarded desc.
            size = "" if is_blend else ((nm.group(1) + nm.group(2).lower()) if nm else _pp99_size_from_desc(desc))
            pprice, psale = p.get('price'), p.get('salePrice')
            cur = psale if (psale is not None and pprice is not None and psale < pprice) else pprice
            rows.append({'attrs': [("Size", size or "")], 'price': cur, 'regular': pprice,
                         'in_stock': (p.get('stock') or 0) > 0})
        if not rows:
            continue
        out.append({'name': name, 'slug': f"products/{slug}", 'description': desc,
                    'currency': 'USD',   # explicit basis: storefront states "All prices are in USD"
                    'price': rows[0]['price'], 'regular': rows[0]['regular'],
                    'in_stock': any(r['in_stock'] for r in rows), 'variations': rows})
    if dropped_sprays:
        print(f"[payload_99purity] {domain}: dropped {len(dropped_sprays)} variant-less spray(s) "
              f"(no SKU/name size, never desc-guessed): {', '.join(dropped_sprays)}", file=sys.stderr)
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
            'nextjs_feed': nextjs_feed, 'gatsby_pagedata': gatsby_pagedata,
            'payload_99purity': payload_99purity}


def fetch(adapter, domain, **opts):
    return ADAPTERS[adapter](domain, **opts)
