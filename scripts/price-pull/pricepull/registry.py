"""Vendor registry — maps each of the 25 pulled vendors to its adapter, variation
model, coded-name handling, and quirks. Plus the permanently/partially blocked set.

Per master-doc RULE 5, `code` and `discount` are NOT hardcoded here — they are read
from src/data/vendors.ts at render time (see load_registry_meta). This file carries
only what the registry can't: platform, variation model, and vendor quirks.

`variation_model` is documentation (the detector in variation_models auto-handles all
five shapes); it records what each vendor actually uses so a maintainer knows what to
expect. `coded_decoder` is True when pricepull.decoders has a per-vendor decoder.
`sale_posture` is a short human note re-checked each refresh (product-level sale_price
vs cart-level auto-coupon; whether the code stacks or is exclusive).
"""
import re
from pathlib import Path

REPO = Path(__file__).resolve().parents[3]
VENDORS_TS = REPO / "src" / "data" / "vendors.ts"
DOC = REPO / "docs" / "PP_PRICE_DATA_MASTER_v1.md"

# =====================================================================================
# WHAT COUNTS AS A PRICE (the sale-vs-coupon rule — settled, do not relitigate)
# -------------------------------------------------------------------------------------
# A price shown on PP is what a buyer pays WITHOUT ENTERING ANY CODE.
#   • Automatic discounts ARE priced — both product-level sale_price AND cart-level
#     auto-discounts that apply with no code entry. Reference INCLUDE: Biolongevity's
#     sitewide 50% (automatic, no code; storefront renders it as a sale, regular struck).
#   • Coupon-gated promotions are NEVER modelled — anything that requires typing a code
#     is excluded regardless of size. Reference EXCLUDE: Amino Club's ENJOY30 (30%, code
#     required) — evaluated this cycle and deliberately NOT applied (see its entry).
#   • PP's OWN affiliate code is the only code represented, applied on top of the no-code
#     price (see prices.ts effectivePrice). We do NOT track, detect, or model any vendor's
#     own coupon codes — do not build anything that tries to.
#
# `sitewide_sale` (float 0..1): a vendor-wide markdown that is applied AUTOMATICALLY at
#   checkout with NO code entry and is invisible in product data (a cart-level auto-coupon).
#   base = current price x (1 - sitewide_sale). ONLY for no-code automatic discounts —
#   NEVER for coupon-gated promotions (those are excluded per the rule above). Re-verify
#   the live cart each refresh: the %, and that it still requires no code.
# =====================================================================================

# slug -> {name, domain, adapter, variation_model, coded_decoder, sitemap?, sale_posture, notes}
VENDORS = {
    # ---- pilot ----
    "amino-club": dict(name="Amino Club", domain="www.aminoclub.com", adapter="nextjs",
        discover="sitemap", sitemap="sitemap.xml", url_pattern=r"/us/products/[^/]+$",
        cookie="amino_age_verified=1", variation_model="dosage", coded_decoder=True,
        sale_posture="ENJOY30 (30% off) is COUPON-GATED — requires typing the code, so it is EXCLUDED under "
                     "the sale-vs-coupon rule (see top of file). Evaluated 2026-07 and deliberately NOT applied "
                     "(no sitewide_sale) — do NOT 'rediscover' it as an oversight. base = no-code price "
                     "(original_amount). If ENJOY30 ever becomes an automatic no-code cart discount, only then set "
                     "sitewide_sale.",
        notes="Seed vendor, MIGRATED off WooCommerce -> Next.js/Medusa on Vercel (www.aminoclub.com). "
              "Products behind a server-enforced /age-verify researcher-consent gate; the pull sends the "
              "authorized accept flag as a cookie (amino_age_verified=1) so a scripted urllib request "
              "reaches product content (Mark-authorized, every-pull). Per-size prices are server-rendered "
              "in the RSC flight (adapter shape 1d: main-product variants[] + nested calculated_price, "
              "scoped by handle==slug to drop the recommended-products carousel). GLP-3 (RT)=Retatrutide "
              "(LY3437943 + 39-aa triple agonist GIP/GLP-1/glucagon; CAS 2381089-83-2). /us/coa is JS-gated "
              "(no per-product COA PDF)."),
    "alpha-peptides": dict(name="Alpha Peptides", domain="alpha-peptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="Product-level sale_price on ~25/59; code STACKS.",
        notes="GLP coded GLP-1 SM/GLP-2 TZ/GLP-3 RT — COA-verified."),
    "science-based-peptides": dict(name="Science Based Peptides", domain="sciencebasedpeptides.com",
        adapter="nextjs", sitemap="sitemap.xml", url_pattern=r"/products/[^/]+$",
        variation_model="dosage", coded_decoder=True,
        sale_posture="No sitewide sale (compareAt null).",
        notes="Next.js custom; products under /products/ (incl. uppercase/parens slugs like GLP3-(RT)). "
              "Variant objects use size/price/compareAt/stockQty. GLP 3-(RT)=Retatrutide COA-verified."),
    "biolongevity-labs": dict(name="Biolongevity Labs", domain="biolongevitylabs.com", adapter="woo",
        variation_model="dosage", coded_decoder=False, sitewide_sale=0.50,
        sale_posture="⚠️ Sitewide CART-LEVEL auto-coupon 'longevityvip' (50% off) — invisible in product data, "
                     "so applied here via sitewide_sale=0.50 (base = list x 0.50). Registry previously noted the "
                     "coupon as EXCLUSIVE with the PP code; per Mark (2026-07) PP codes STACK, so the code applies on "
                     "top. Re-check the live cart each refresh (coupon %, and whether stacking still holds).",
        notes="Sitewide 50% is a cart auto-coupon; product prices show no markdown (on_sale flag is unreliable). Publishes blend ratios."),
    # ---- batch 1 ----
    "almighty-peptides": dict(name="Almighty Peptides", domain="www.almightypeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=False, sale_posture="Product sale 2/61; code stacks.",
        notes="Large mixed catalog — SARMs/Rx excluded by scope filter."),
    "ameano-peptides": dict(name="Ameano Peptides", domain="ameanopeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=False, sale_posture="No sale.", notes="Cosmetics excluded."),
    "amino-x": dict(name="Amino X", domain="aminox.net", adapter="woo",
        variation_model="dosage", coded_decoder=True, sale_posture="No sale.",
        notes="GLP coded AX-RT/AX-TR — COA-verified (formula+CAS)."),
    "ascension-peptides": dict(name="Ascension Peptides", domain="ascensionpeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="⚠️ Near-sitewide product-level sale_price (39/42); base=regular_price; code STACKS.",
        notes="Single-letter GLP codes R/T/C/S with embedded mg (R-30 = 30mg)."),
    "behemoth-labz": dict(name="Behemoth Labz", domain="behemothlabz.com", adapter="woo",
        variation_model="dosage", coded_decoder=False, sale_posture="Product sale 20/100; code stacks.",
        notes="Large research-chem catalog — heavy scope filtering."),
    "biocollex": dict(name="BioCollex", domain="biocollexresearch.com", adapter="woo",
        variation_model="pack-size", coded_decoder=True, sale_posture="No sale.",
        notes="Variations are Pack Size (vial-count); mg from NAME, base = single-vial. CJC/IPA 5/5 ratio published."),
    "ez-peptides": dict(name="EZ Peptides", domain="ezpeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=True, sale_posture="No sale.",
        notes="GLP coded EZP-1P/2P/3P/CG — Janoshik COA-verified. TB4=TB-500."),
    "glacier-aminos": dict(name="Glacier Aminos", domain="glacieraminos.shop", adapter="woo",
        variation_model="dosage", coded_decoder=True, sale_posture="Product sale 1/70.",
        notes="⚠️ GLA-* GLP codes UNVERIFIED (no COA/MW). Sprays split out."),
    # ---- batch 2 ----
    "ignite-peptides": dict(name="Ignite Peptides", domain="ignitepeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=True, sale_posture="Product sale 5/34; code stacks.",
        notes="GLP-3(RT) COA-verified; GLP-2(TZ)/GLP-1(S) product-page identity."),
    "integrative-peptides": dict(name="Integrative Peptides", domain="integrativepeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=False, sale_posture="Product sale 1/73.",
        notes="Mostly oral/topical wellness — small peptide overlap."),
    "oasis-labs": dict(name="Oasis Labs", domain="myoasislabs.com", adapter="woo",
        variation_model="dosage", coded_decoder=True, sale_posture="Product sale 7/54; code stacks.",
        notes="GLP3(R) COA-verified (Bioviridian MW 4731.6)."),
    "peptide-partners": dict(name="Peptide Partners", domain="peptide.partners", adapter="woo",
        variation_model="dosage", coded_decoder=True, sale_posture="Product sale 16/38; code stacks.",
        notes="GLPs self-identify ('GLP-1 Semaglutide')."),
    "peptides-gg": dict(name="Peptides.gg", domain="peptides.gg", adapter="woo",
        variation_model="dosage", coded_decoder=False, sale_posture="No sale.", notes="GLPs named plainly."),
    "purerawz": dict(name="PureRawz", domain="purerawz.co", adapter="woo",
        variation_model="form-strength", coded_decoder=True, sale_posture="Product sale 28/200; code stacks.",
        notes="Form+Strength variations — mg from Strength; Nasal Spray split out. ⚠️ GLP-1.x codes UNVERIFIED. Big SARM catalog."),
    "royal-peptides": dict(name="Royal Peptides", domain="royal-peptides.com", adapter="woo",
        variation_model="ten-vial-kit", coded_decoder=False, sale_posture="No sale.",
        notes="Sells 10-VIAL KITS ('5mgx10vials') — per-vial = kit/10. GLPs named plainly."),
    "swiss-chems": dict(name="Swiss Chems", domain="swisschems.is", adapter="woo",
        variation_model="vial-kit-axis", coded_decoder=False, sale_posture="Product sale 46/145; code stacks.",
        notes="Vial vs KIT(10 vials) axis — mg from NAME, single-vial base. GLPs named plainly."),
    # ---- batch 3 ----
    "synthesis-peptides": dict(name="Synthesis Peptides", domain="synthesispeptides.co", adapter="nextjs",
        discover="catalog", variation_model="dosage", coded_decoder=True,
        sale_posture="No product-level sale (single price per variant).",
        notes="Migrated .io->.co: Next.js/Medusa storefront, no woo API and no XML sitemap. "
              "Products discovered via /catalog/<area> flight data; variants are label/inStock/price ($$). "
              "GLP-1S/2T/3R VERIFIED by product-page spec (CAS + MW/formula + Lilly dev code) -> Sema/Tirz/Reta."),
    "vital-core-research": dict(name="Vital Core Research", domain="vitalcoreresearch.com", adapter="woo",
        variation_model="dosage", coded_decoder=True, sale_posture="No sale.",
        notes="⚠️ GLP-1/2/3 UNVERIFIED (COA labels only the vendor code, HPLC purity, no MW/name)."),
    "purity-peptides": dict(name="Purity Peptides", domain="puritypeptides.is", adapter="purity_api",
        variation_model="dosage", coded_decoder=True, sale_posture="No sale (single price per product).",
        notes="Custom /api/products; mg in name. GLPs self-identify — GLP-1 (Semaglutide)."),
    "midwest-peptide": dict(name="Midwest Peptide", domain="midwestpeptide.com", adapter="nextjs",
        variation_model="dosage", coded_decoder=True, sale_posture="No cart auto-coupon; anchors compare_at — base = current price.",
        notes="Two shapes: JSON-LD Offer (single) + RSC variants[] (multi-size). GLP-3 RT/GLP-2 TZ verified by SPEC. DSIP/KPV/PT-141/GLP-2 TZ have no size in structured data."),
    # ---- CINC read-only (Cloudflare-blocked Store API; storefront JSON usable) ----
    "aero-peptides": dict(name="Aero Peptides", domain="aeropeptides.com", adapter="cinc",
        variation_model="dosage", coded_decoder=True,
        sale_posture="No sale (on_sale=false / standing prices).",
        notes="⚠️ Store API Cloudflare-403'd — CINC read-only from embedded product JSON on each page. "
              "TB-500/Sermorelin variable prices are AJAX-only. GLPs self-identify ('GLP3 – Reta')."),
}

# permanently or partially unpullable — do NOT keep retrying (see doc's blocked section)
BLOCKED = {
    "limitless-biotech": "PERMANENTLY EXCLUDED — BigCommerce B2B store; all prices login-gated behind "
                         "'Professional Pricing', no public retail price. Cannot be pulled read-only.",
    "spartan-peptides": "PARTIAL — client-rendered React storefront (no /wp-json); ~10/30 captured, "
                        "remainder behind a 21+ age gate (a consent modal — not to be clicked). Prices are RANGES "
                        "(low=smallest size, high=bulk kit) — match sizes to each end before $/mg.",
}


def load_registry_meta():
    """Read code/discount/url/retired for every vendor from src/data/vendors.ts (RULE 5)."""
    t = VENDORS_TS.read_text()
    meta = {}
    for slug, body in re.findall(r'"?([a-z0-9-]+)"?:\s*\{(.*?)\},', t, re.S):
        if 'name:' not in body:
            continue
        def g(k):
            m = re.search(rf'{k}:\s*"([^"]+)"', body)
            return m.group(1) if m else None
        meta[slug] = {'name': g('name'), 'code': g('code'), 'discount': g('discount'),
                      'url': g('url'), 'retired': 'retired: true' in body}
    return meta
