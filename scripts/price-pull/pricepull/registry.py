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
              "scoped by handle==slug to drop the recommended-products carousel). Coded GLPs, all decoded "
              "from their OWN product-page spec blocks (CAS/formula/MW — suffix is NOT evidence): "
              "GLP-3 (RT)=Retatrutide (LY3437943 + 39-aa triple agonist GIP/GLP-1/glucagon; CAS 2381089-83-2); "
              "GLP-2 (TR)=Tirzepatide (CAS 2023788-19-2 + C225H348N48O68; matches our amino-x AX-TR); "
              "GLP-1 (SM)=Semaglutide (CAS 910463-68-2 + C187H291N45O59 + MW 4113.58). /us/coa is JS-gated "
              "(no per-product COA PDF). "
              "RE-PULL CADENCE: this vendor adds products FASTER than the roster default — GLP-2/GLP-1 "
              "appeared within days of the 2026-07-31 pull, and its banner advertises rolling weekly "
              "additions. As PP's highest-value page (~32% of impressions), re-pull it more often than "
              "others so new coded GLPs are decoded (or held UNVERIFIED) promptly rather than silently "
              "excluded. Also present but out of current PP scope: AHK-Cu (copper hair peptide, no profile), "
              "amino-h2o (0.9% saline supply)."),
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
    "capstone-peptides": dict(name="Capstone Peptides", domain="capstonepeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="No sitewide sale observed; PP code (10%, PROFPEPTIDE) stacks.",
        notes="Onboarded 2026-08. Woo Store API PUBLIC (wc/store/v1/products, per_page=100 -> 27 SKUs). "
              "ALL SKUs are 'simple' — size is in the NAME, not a variation. Coded metabolic line "
              "self-decodes in the name (key on the compound WORD: GLP-1S Semaglutide, GLP-2T Tirzepatide, "
              "GLP-3R Retatrutide; C-Amylin Cagrilintide/GLP-1S Semaglutide = CagriSema). Accumark Labs "
              "COAs. 2 bacteriostatic-water SKUs fall out via scope."),
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
    "la-peptides": dict(name="LA Peptides", domain="lapeptides.net", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="Check product-level sale_price each refresh; PP code stacks.",
        notes="Onboarded 2026-07. GLP-(S/T/R) codes UNVERIFIED — product pages carry no "
              "mechanism/CAS/name. Age-verify modal is soft (Store API + HTML readable)."),
    "licensed-peptides": dict(name="Licensed Peptides", domain="licensedpeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=True,  # size from the variation Size attr ("10mg" etc.)
        sale_posture="Check product-level sale_price each refresh; PP code (5%) stacks.",
        notes="Woo Store API PUBLIC (catalog + prices; per_page=100 surfaces all 91 products — the "
              "supplies-first ordering the backlog note flagged is a default-sort artifact, not a gate). "
              "USD only. Coded GLPs LP3-R=Retatrutide (vial CAS 2381089-83-2) and LP2-T=Tirzepatide "
              "(vial CAS 2023788-19-2) — the SAME CAS already COA-verified for amino-x AX-RT/AX-TR. Nasal "
              "sprays, capsules (MK677/5-Amino-1MQ/SLU-PP-332/Glow caps), '(10 vials)'/'(10 btls.)' bulk "
              "multipacks, BAC water, and add-ons (cold packs, tips, VIP, shipping protection) fall out via "
              "the scope + oral-form + count-pack filters."),
    "mile-high-compounds": dict(name="Mile High Compounds", domain="milehighcompounds.is", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="Check product-level sale_price each refresh; PP code stacks.",
        notes="Onboarded 2026-07. MHC-N SM/TRZ/RT codes UNVERIFIED — descriptions are generic "
              "(testing specs only, no mechanism/CAS/name). Cloudflare soft-gate. Merch (Tee) filtered."),
    "nextgen-peptides": dict(name="NextGen Peptides", domain="ngpeptide.com", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="Check product-level sale_price each refresh; PP code stacks.",
        notes="Onboarded 2026-07. TRZ-2 = Tirzepatide (VERIFIED: CAS 2023788-19-2 / C225H348N48O68 / "
              "MW ~4813). Bulk '(N vials)' packs EXCLUDED (not single-vial; kit price is not a clean 10x — "
              "GLP-3 kit $300 vs single $42). GLP-3 single UNVERIFIED. Orals/droppers/creams/merch scope-filtered. 21+ soft gate."),
    "peptidology": dict(name="Peptidology", domain="peptidology.co", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="Check product-level sale_price each refresh; PP code stacks.",
        notes="Onboarded 2026-07. GLP1/2/3 (PGL codes) UNVERIFIED — empty product descriptions. "
              "Out-of-scope carried: PNC-27 + Klotho (OUT_OF_SCOPE), ACE-031 + Gonadorelin (scope filter). "
              "Login + Cloudflare soft-gate (Store API readable)."),
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
    # ---- session-auth (login-gated Store API) ----
    "modern-aminos": dict(name="Modern Aminos", domain="modernaminos.com", adapter="woo",
        session_auth=True, variation_model="dosage", coded_decoder=True,
        sale_posture="Product-level markdown: the 20% GLP-1/Amylin discount populates "
                     "on_sale/sale_price/regular_price in the Store API (visible without a code), so per "
                     "PP_PRICES v2 Locked Rule 1 that IS the price and regular_price is the struck list. "
                     "⚠️ The banner also advertises 40% off GW-501516/MK-2866, but those show on_sale=false "
                     "with no markdown in the data — the banner overstates; both are SARMs and out of scope anyway.",
        notes="LOGIN-GATED — the Store API is only reachable with a WordPress session cookie "
              "(session_auth=True; the cookie is read from the gitignored scripts/price-pull/.session-cookie, "
              "NEVER the registry — it's a live credential, ~14-day expiry, protected by the >50% row-drop floor). "
              "153 products across 2 pages; canonical /product/<slug>/ URLs with no redirect. Slugs often differ "
              "from names (BPC-157/PDA at /product/pentadecapeptide/, NAD+ at /product/nad-20ml/). Coded SKUs: "
              "MA-1P=Petrelintide (ZP8396; CAS 2766385-23-1, C185H305N49O61, MW 4191.69 — stated on the page) and "
              "MA-3RT=Retatrutide (their /product/retatrutide/ redirects to the MA-3RT page; image 'GLP/GIP/GLUCAGON') "
              "are VERIFIED; MA-2TZ/MA-1S stay coded (no CAS/formula/MW/name on their pages). Singles only per "
              "Locked Rule 4 — MA's blends (Cartalax Blend, GHK-Cu/KPV, Glow, KLOW, 4x, MOTS-C/5-Amino) route to the "
              "blend track; SARMs/nootropics/supplements/topicals/insurance drop via the scope filter."),
    # ---- batch 4 ----
    # purerx-peptides REMOVED 2026-08-19 — affiliate program discontinued (permanent exit).
    "peptide-giants": dict(name="Peptide Giants", domain="peptidegiants.com", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="Check product-level sale_price each refresh; PP code stacks.",
        notes="Onboarded 2026-08. WooCommerce, Store API readable (59 products, 1 page); mg in NAME. "
              "Sells 10-vial KITS alongside singles ('(10 Vials/Kit)') -> EXCLUDED (bulk, not single-vial), "
              "same class as Crush/Spartan bundles. Coded GLP SKUs PG-1SG/PG-2TZ/PG-3RT/PG-3RT+C and GLP-3R "
              "are [coded, UNVERIFIED]: product pages state NO identity (no CAS/formula/name), so NOT decoded "
              "by analogy (Mark's rule) — they document in the doc but carry no PP compound, so they don't "
              "reach the grid. Janoshik-tested. Query-param affiliate (?ref) -> deep links. Out-of-scope: "
              "AICAR, FOXO4-DRI, Adipotide, PEG-MGF, Gonadorelin, Botulinum Toxin, Acetic Acid, Optimizer, "
              "Lipo-C, Reconstitution Water."),
    "treasure-coast-peptides": dict(name="Treasure Coast", domain="treasurecoastpeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=False,
        sale_posture="Check product-level sale_price each refresh; PP code stacks.",
        notes="Onboarded 2026-07. WooCommerce, Store API readable (47 products, 1 page); mg in NAME. "
              "21+ age gate is a SOFT overlay — does not block the Store API. GLPs named plainly (no "
              "coded SKUs). AHK-Cu/Research Solution filtered by scope."),
    # ---- Next.js single-flight feed (whole catalog in one /shop RSC flight) ----
    "crush-research": dict(name="Crush Research", domain="crushresearch.shop", adapter="nextjs_feed",
        feed_path="/shop", array_key="initialProducts", product_base="product",
        variation_model="dosage", coded_decoder=True,
        sale_posture="No product-level sale (originalPrice null across the catalog); PP code is a query-param "
                     "affiliate ref (?ref=), applied at checkout, not an automatic markdown — so base = lowestPrice.",
        notes="Onboarded 2026-07 (previously BLOCKED — reversed once Mark confirmed via the site's own network "
              "requests that Supabase is SERVER-SIDE ONLY, no browser REST calls). The FULL catalog is "
              "server-rendered into /shop's RSC flight as a single 'initialProducts' JSON array — adapter "
              "nextjs_feed reads it in one GET, no per-product fetch, no sitemap, no database access. Fields: "
              "name (mg in name), slug, mgPerVial (explicit size), lowestPrice/originalPrice (cents), inStock+"
              "stockCount. pricePerMg in the data == our price/mg (verified 0 mismatches at recon). Out-of-stock "
              "items carry lowestPrice:0 -> dropped by the price<=0 guard. Deep links at /product/<slug> (200). "
              "Coded SKUs: 'Double Agonist'=Tirzepatide, 'Triple Agonist'=Retatrutide — stated on their own "
              "product pages (mechanism-tier: dual GIP/GLP-1 vs triple GLP-1/GIP/glucagon). Blends (BPC-157/"
              "TB-500, GHK-Cu/KPV, KLOW, CJC-1295/Ipamorelin) route to the blend track; Antimicrobial Dilution "
              "Solution filtered by scope. Flight shape is a frontend detail — adapter FAILS LOUD (raises) on a "
              "redeploy that changes it rather than returning an empty catalog; >50% row-drop floor also guards."),
    # ---- Gatsby page-data catalog (whole catalog in one listing-page JSON) ----
    "spartan-peptides": dict(name="Spartan Peptides", domain="spartanpeptides.com", adapter="gatsby_pagedata",
        page_path="/page-data/all-peptides/page-data.json", product_base="products",
        variation_model="vial-kit-axis", coded_decoder=True,
        sale_posture="Per-variant regular_price is in the data (base = single-vial current price; on-sale when "
                     "regular>price). Multi-vial (2/4) kits dropped. PP code applied at checkout (a_aid affiliate "
                     "query param, not an automatic markdown). NOTE — MOTS-c is the one row in this pull classified "
                     "by PATTERN not field: its three variants are all named '10mg' with no vial count, priced at the "
                     "1 / 1.8 / 3.2x ladder (= 1/2/4 vials), so the single vial was inferred as the lowest ($149); "
                     "every other row's single-vial was read from an explicit ', 1' vial count.",
        notes="Onboarded 2026-07 (previously BLOCKED — the 'prices are RANGES' reason was a UI artifact: the ranges "
              "are only the client-side variant selector; per-variant prices were PUBLIC all along). Gatsby storefront "
              "(headless WordPress backend). The FULL 27-product catalog with per-variant price/regular_price/stock is "
              "in ONE public static file, /page-data/all-peptides/page-data.json — adapter gatsby_pagedata reads it in "
              "one GET (no per-product fetch, no DB access). The 21+ overlay is client-side only and does not gate the "
              "JSON (like Treasure Coast). Each product_variations[] entry is named '<size>, <vials>'; only vials=1 is a "
              "single, 2/4-vial entries are bulk kits (dropped — same class as MA packs / Crush bundles). MOTS-c is a "
              "data quirk: three '10mg' variants with no vial count at the 1/1.8/3.2x (=1/2/4-vial) price ladder — the "
              "lowest total is the single vial. Coded GLPs self-identify in-title: GLP-1(Sema)=Semaglutide, "
              "GLP-2(Tirz)=Tirzepatide, GLP-3(Reta)=Retatrutide. Product NAME is taken before the first '|' (titles are "
              "'<Compound> <size> | <marketing subtitle>'; the subtitle would mis-match, e.g. 'AOD-9604 | HGH Fragment'). "
              "Named stacks (Wolverine, Skinny Fit, Energizer Bunny, Spartan Strong, etc.) have no variation axis and "
              "route to the blend track / Rule-4 exclusion. Deep links at /products/<slug>/. Gatsby page-data paths can "
              "change on rebuild — adapter FAILS LOUD (raises) on a 404 / non-JSON body / missing slug+product_variations "
              "keys rather than returning an empty catalog."),
    # ---- CINC read-only (Cloudflare-blocked Store API; storefront JSON usable) ----
    "aero-peptides": dict(name="Aero Peptides", domain="aeropeptides.com", adapter="cinc",
        variation_model="dosage", coded_decoder=True,
        sale_posture="No sale (on_sale=false / standing prices).",
        notes="⚠️ Store API Cloudflare-403'd — CINC read-only from embedded product JSON on each page. "
              "TB-500/Sermorelin variable prices are AJAX-only. GLPs self-identify ('GLP3 – Reta')."),
    # ---- batch: recent coupon-page vendors (onboarding to the price pull) ----
    "nura-peptide": dict(name="Nura Peptide", domain="nurapeptide.com", adapter="woo",
        variation_model="pack-size", coded_decoder=True,  # Quantity attr (1-vial/3-vials/...); mg from the name.
        # NB: 3 products carry a misspelled "Quanity" attribute; the detector still treats them as pack-size.
        sale_posture="No known cart-level auto-coupon; product-level sale_price priced if present (re-verify at write).",
        notes="Coded GLP SKUs (GLP-3R, GLP-2T, GLP-1SG-10) left [coded, UNVERIFIED]: product descriptions are "
              "generic boilerplate with NO mechanistic identity (no triple/dual-agonist spec, no CAS/formula/name), "
              "so NOT decoded by analogy (Mark's rule). GLP-3R/CAG is a coded blend. Affiliate URL is query-param "
              "(?ref=profpeptide) — handled TS-side at grid-wire time."),
    "ion-peptide": dict(name="Ion Peptide", domain="ionpeptide.com", adapter="woo",
        variation_model="dosage", coded_decoder=True,  # size from the Variant/Variation/Size attr ("10mg" etc.)
        sale_posture="Confirm at write — product-level sale_price priced if present.",
        notes="Woo Store API is PUBLIC (catalog + prices); the 'Wholesale Research Supply Portal' login gates "
              "CHECKOUT only, not the catalog — the pull is unauthenticated (plain ?ref= link). USD only. Coded "
              "GLPs DECODED via Mark's first-hand confirmation (2026-08): ION-1S=Semaglutide, ION-2T=Tirzepatide, "
              "ION-3R=Retatrutide (same basis as Nura's GLP line). Accessories/supplies (vial caps, vial cases, "
              "acetic acid, BAC/saline, raw 1g powders) fall out via the scope filter."),
    "legendary-peptides": dict(name="Legendary Peptides", domain="www.legendarypeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="No known cart-level auto-coupon; free shipping over $200 (not a price discount). Re-verify at write.",
        notes="Reta=Retatrutide, Tirz=Tirzepatide — VERIFIED by unique mechanistic spec in the vendor's own product "
              "descriptions ('triple agonist GLP-1/GIP/glucagon' is uniquely Reta; 'dual agonist GIP/GLP-1' is uniquely "
              "Tirz), NOT by the abbreviation. KIT variants EXCLUDED (multi-vial, not single). Note www host + "
              "?affiliate= URL param (TS-side at grid-wire)."),
    "nova-labs": dict(name="NOVA Labs", domain="nova-biolabs.com", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="No known cart-level auto-coupon; re-verify at write.",
        notes="First UAE/GCC vendor. GLP-3 (RT)=Retatrutide VERIFIED (product desc 'triple agonist' — uniquely Reta); "
              "'Tirzepatide' is self-named (no decode). Also sells Pen (pre-filled) and nasal-spray forms alongside "
              "vials — see dry-run for how the variation detector groups them. Publishes public per-batch COAs "
              "(Janoshik/Uzorak). Query-param ?ref= URL (TS-side at grid-wire)."),
    # ---- Payload CMS storefront (public /api/products) ----
    "99-purity-peptides": dict(name="99 Purity Peptides", domain="99puritypeptides.com", adapter="payload_99purity",
        variation_model="dosage", coded_decoder=False,
        sale_posture="No product-level sale in the API (salePrice null across the catalog); re-verify at write.",
        notes="Onboarded 2026-08 (previously mislabeled 'cinc/Cloudflare-403' — WRONG: it is NOT WooCommerce. Platform is "
              "Next.js + Payload CMS on Vercel; the wc/store 403 was a non-existent API, not a wall). Full 62-product "
              "catalog is public at /api/products as {\"docs\":[...]}, no key/auth (adapter payload_99purity). "
              "CURRENCY: API has NO currency field and no Payload globals, but the storefront states 'All prices are in USD' "
              "(ETH/USDT are checkout payment rails, not list currency) — carried explicitly as USD, prices are whole DOLLARS "
              "(not cents). SIZE: variant SKU '<PREFIX>-<mg>[-K5/-K10]' (sprays -<n>mcg); variant-less NON-spray vials via a "
              "guarded single-description-mg rule (rejects >1 figure or per-ml/dose/serving/recon/dilute context) — SCOPED to "
              "this adapter, not the shared fallback. KITS: variant.isKit == the -K5/-K10 suffix (0 mismatches; K5/K10 priced "
              "exactly 5x/10x the single) -> dropped. SPRAYS: 5 SKU-sized -> spray section; 8 variant-less sprays dropped (no "
              "size guessing). Affiliate URL is PATH-BASED (/ref/profpeptide). GRID DISCOUNT NOTE: prices computed 'after 10%' "
              "per Mark's published figure even though their dashboard shows 15% — deliberate (understating is safe); do NOT "
              "'correct' without new evidence."),
    "biopure-peptides": dict(name="BioPure Peptides", domain="biopurepeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=False,
        sale_posture="No product-level sale (on_sale=false across all 38); re-verify at write.",
        notes="Onboarded 2026-08 (previously 'cinc/Cloudflare-403' — the wc/store Store API is actually REACHABLE with a "
              "browser UA: 200 x4 consecutive, standard woo shape, 38 simple products, all USD; the earlier 403 was a "
              "transient Cloudflare bot-challenge, not a permanent wall). Standard woo adapter, no new code. "
              "⚠️ IP-DEPENDENCE: the pass may be IP- as well as UA-dependent (Cloudflare weights ASN/IP reputation; GitHub "
              "Actions runs on Azure datacenter IPs that are challenged harder than residential). The PULL runs locally so "
              "onboarding is fine, but if check:vendors (monthly CI) 403s the biopure link, treat it as a possible "
              "Cloudflare-vs-datacenter block, NOT a vendor outage — re-verify from another IP before concluding it's down. "
              "⚠️ Coded GLPs (BioLean GLP-1, GLP-2 GIP, GLP-3 GGG) stay [coded, UNVERIFIED] and OUT of the grid: their Store-API "
              "descriptions are generic boilerplate with no CAS/formula/mechanism/name — that does NOT clear the decode "
              "hierarchy. Do NOT decode by the GIP/GGG suffix; a per-page + COA check happens separately. Affiliate URL uses ?sld=."),
    # ---- 2026-08 price-grid backlog clear (real / amp / improved) ----
    "real-peptides": dict(name="Real Peptides", domain="realpeptides.co", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="No cart-level auto-discount; base = current price (product sale_price auto-applied per rule). Re-verify at write.",
        notes="Onboarded 2026-08 (price-grid backlog). Standard woo Store API, 75 products, all USD. Coded/blend handling in "
              "decoders._real: GLYCON-X = Tirzepatide (product page: 'dual-agonist GLP-1 + GIP' — uniquely Tirz, mechanism-tier); "
              "Trinity-X self-names 'Retatrutide' in-title (match() maps it, no decode). SHB/HHB/LC-526 are multi-compound "
              "amino/B-complex/lipotropic blends -> excluded. Serums/'Cosmetic'/LIPO-C -> scope out-of-scope; Bundles/Stacks -> "
              "is_kit_name; Tablets/Capsules -> oral form excluded; Liquid Sprays -> spray kind. P21/PE-22-28 have no PP profile "
              "-> UNMAPPED/excluded."),
    "amp-peptides": dict(name="AMP Peptides", domain="amp-peptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="No product sale_price / no auto cart discount observed; base = list. Re-verify at write.",
        notes="Onboarded 2026-08 (price-grid backlog). Standard woo Store API, 19 products, all USD. decoders._amp EXCLUDES the "
              "three 'GLP3RT — … Supply' multi-vial supply packs (6/3/2 vials — a supply price is not a per-vial price). "
              "One-time GLP3RT = [coded, UNVERIFIED] (page has no CAS/formula/MW/mechanism/name; 'RT' suffix is not evidence) — "
              "NOT mapped to Retatrutide, stays off the grid."),
    "improved-peptides": dict(name="Improved Peptides", domain="improvedpeptides.com", adapter="woo",
        variation_model="dosage", coded_decoder=True,
        sale_posture="BOGO 'buy 2 get 1 free' is CODE-EXCLUSIVE (does not stack with promo codes) and is a cart quantity offer, "
                     "NOT a per-vial markdown — so it is NOT modeled; base = single-vial LIST (the code-eligible price). No "
                     "product sale_price. The Store API returns single-vial list prices (BOGO is cart-level, no separate SKUs).",
        notes="Onboarded 2026-08 (price-grid backlog). Standard woo Store API, 27 simple products, all USD. decoders._improved "
              "verifies the coded GLPs by unique mechanism in the vendor's OWN descriptions: GLP-3R=Retatrutide (triple "
              "GLP-1/GIP/glucagon), GLP-2T=Tirzepatide (dual GIP/GLP-1), GLP-1S=Semaglutide (mono-GLP-1 tier of the coherent "
              "1S/2T/3R scheme). Cooler + Bacteriostatic Water -> scope supply/out-of-scope."),
}

# permanently or partially unpullable — do NOT keep retrying (see doc's blocked section)
BLOCKED = {
    "limitless-biotech": "PERMANENTLY EXCLUDED — BigCommerce B2B store; all prices login-gated behind "
                         "'Professional Pricing', no public retail price. Cannot be pulled read-only.",
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
