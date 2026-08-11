import { vendors } from "./vendors";
import { generatedPriceEntries, GENERATED_PRICES_UPDATED, generatedVendorNames } from "./prices.generated";
import { categoryOrder, libraryCategoryOf, hasProfile } from "./peptideCategories";
import pricesIndex from "./prices.index.json";
import { LISTED, PROVEN } from "./attribution";

/**
 * Category assignment for price compounds NOT in the /peptides library taxonomy —
 * hand-maintained, using ONLY existing library category names (never a new one).
 * Covers profile pages outside the library nav (adamax, cibinetide, ghrp-2/6,
 * hexarelin, igf-1-des, mgf, adipotide) + profile-less compounds. Approved by Mark.
 * pnc-27 (oncology) and klotho (native protein) were REMOVED as out of editorial
 * scope — excluded upstream in to_prices.py (OUT_OF_SCOPE); see README scope rule.
 */
export const PRICE_CATEGORY_OVERRIDES: Record<string, string> = {
  // Metabolic & Weight Loss
  adipotide: "Metabolic & Weight Loss", mazdutide: "Metabolic & Weight Loss",
  survodutide: "Metabolic & Weight Loss", tesofensine: "Metabolic & Weight Loss",
  "slu-pp-332": "Metabolic & Weight Loss", "hgh-fragment-176-191": "Metabolic & Weight Loss",
  orforglipron: "Metabolic & Weight Loss", "slu-pp-915": "Metabolic & Weight Loss",
  // Recovery & Tissue Repair
  cibinetide: "Recovery & Tissue Repair",
  // Performance & Energy
  "igf-1-des": "Performance & Energy", mgf: "Performance & Energy",
  // Growth Hormone
  "ghrp-2": "Growth Hormone", "ghrp-6": "Growth Hormone", hexarelin: "Growth Hormone",
  // Cognitive & Nootropic
  adamax: "Cognitive & Nootropic", dihexa: "Cognitive & Nootropic",
  // Skin Health & Anti-Aging
  "snap-8": "Skin Health & Anti-Aging",
  // Longevity  (klotho + pnc-27 removed — out of editorial scope, see OUT_OF_SCOPE in to_prices.py)
  humanin: "Longevity", "foxo4-dri": "Longevity",
  // Bioregulators (Khavinson short-peptide bioregulators)
  bronchogen: "Bioregulators", cartalax: "Bioregulators", chonluten: "Bioregulators",
  livagen: "Bioregulators", ovagen: "Bioregulators", pancragen: "Bioregulators",
  prostamax: "Bioregulators", testagen: "Bioregulators", thymalin: "Bioregulators",
  thymulin: "Bioregulators", vesilute: "Bioregulators", vesugen: "Bioregulators",
  vilon: "Bioregulators",
};

/** Library category name for a compound, or the price-specific override. */
export function categoryForCompound(slug: string): string | null {
  return libraryCategoryOf[slug] ?? PRICE_CATEGORY_OVERRIDES[slug] ?? null;
}

/** True when the vendor is retired in vendors.ts (excluded from render, kept in data). */
function isRetired(vendorKey: string): boolean {
  return vendors[vendorKey]?.retired === true;
}

/** Affiliate vendor = has a discount code we can apply. Non-affiliate → single price. */
export function isAffiliateVendor(vendorKey: string): boolean {
  const v = vendors[vendorKey];
  return !!(v && v.code && vendorDiscountPct(vendorKey) > 0);
}

/**
 * Date the price data was last pulled. Emitted from the master doc's
 * PRICES_UPDATED header by scripts/price-pull/to_prices.py, so the doc and the
 * site stamp can never diverge. (Consumed by the /prices routes.)
 */
export const PRICES_UPDATED_DATE = GENERATED_PRICES_UPDATED;

export interface PriceEntry {
  /** compound slug — canonical; a /peptides/<compound> profile may or may not exist (derive at render) */
  compound: string;
  /** display name for the compound */
  compoundName: string;
  /** vendor key — must match a key in vendors.ts (drives code/discount + /coupons link) */
  vendor: string;
  /** vial size in mg (500mcg = 0.5) */
  sizeMg: number;
  /** current EFFECTIVE price in USD a buyer pays BEFORE the PP code — i.e. the vendor's
   *  sale price (incl. sitewide cart-coupons like Biolongevity's) when on sale, else list. */
  basePrice: number;
  inStock: boolean;
  /** the standing list price, present ONLY when this row is on sale (basePrice < regularPrice). */
  regularPrice?: number;
  /** true when basePrice reflects a markdown off regularPrice. */
  onSale?: boolean;
  /** vendor's coded product name, when a decoded compound is sold under a code
   *  (e.g. "GLP-3 RT" → Retatrutide). Renders as "Retatrutide (listed as GLP-3 RT)". */
  listedAs?: string;
  /** the vendor's OWN product slug (not PP's), captured by the pull for deep links —
   *  e.g. amino-club's "ara-290" for cibinetide. Present only for vendors/adapters that
   *  expose it (Medusa/nextjs). Used to build `/us/products/<vendorSlug>` shop links. */
  vendorSlug?: string;
}

/**
 * Real per-vendor single-compound prices, GENERATED from the master doc by
 * scripts/price-pull/to_prices.py. Hand-edit the doc + regenerate, never this array.
 */
export const priceEntries: PriceEntry[] = generatedPriceEntries;

/** One purchasable line = a vendor's compound at a specific size (for a product-row grid). */
export interface VendorProductRow {
  /** PP compound slug — the internal /peptides/<compound> link target. */
  compound: string;
  compoundName: string;
  /** true when a /peptides/<compound> profile exists (else render the name as plain text). */
  hasProfile: boolean;
  /** the vendor's OWN product slug (for the deep-link shop URL); may be absent. */
  vendorSlug?: string;
  sizeMg: number;
  /** list price BEFORE the vendor's code — the post-code figure is derived at render. */
  basePrice: number;
  inStock: boolean;
}

/**
 * A vendor's single-compound price rows, one row PER compound+size (1:1 with the price
 * data — no grouping), sorted by compound display name then size ascending. Reusable for
 * any vendor's product-row grid; the caller derives the post-code price (base × discount)
 * and builds the shop URL from `vendorSlug`.
 */
export function vendorProductRows(vendorKey: string): VendorProductRow[] {
  return priceEntries
    .filter((e) => e.vendor === vendorKey)
    .map((e) => ({
      compound: e.compound,
      compoundName: e.compoundName,
      hasProfile: hasProfile(e.compound),
      vendorSlug: e.vendorSlug,
      sizeMg: e.sizeMg,
      basePrice: e.basePrice,
      inStock: e.inStock,
    }))
    .sort((a, b) => a.compoundName.localeCompare(b.compoundName) || a.sizeMg - b.sizeMg);
}

/**
 * True when the vendor's affiliate URL carries an explicit discount parameter
 * (`coupon=` or `code=`) that the cart applies AUTOMATICALLY — so the post-code figure
 * the grid shows is genuinely pre-applied and "your price after the code" is accurate.
 * Every other vendor's link is attribution-only (`ref`/`sld`/`aff`/…): the discount is
 * real but the buyer must type the code at checkout, so the copy must say so.
 *
 * Derived from the URL itself (not a hand-set field) so the flag can never drift from
 * the actual link. Today only amino-club (`code=`), amino-x and peptides-gg (`coupon=`)
 * qualify; see the Phase-1 recon for the full param audit.
 */
export function codeAutoApplies(vendorKey: string): boolean {
  const url = vendors[vendorKey]?.url ?? "";
  try {
    const params = new URL(url).searchParams;
    return params.has("coupon") || params.has("code");
  } catch {
    return false;
  }
}

/**
 * Compose a product DEEP LINK for a vendor from its affiliate URL + the product's permalink
 * path (vendorSlug, captured by the pull). Returns null when the affiliate URL is on a
 * different host than the store and can't carry a product path — the caller then falls back
 * to the affiliate homepage. Derived entirely from the stored URL — no hardcoded vendor list.
 *
 * CINC verified (2026-07-29) that BOTH affiliate shapes compose onto a product URL — the
 * referral appends AFTER the product path — so there is no "path-based → exclude" rule:
 *   query-param:  https://<host>/<vendorSlug>?<query>        e.g. .../product/glp-3/?ref=x
 *   path-based:   https://<host>/<vendorSlug>/<affPath>/     e.g. .../product/bpc-157/ref/48/
 * (verbatim match to Peptide Partners' own AffiliateWP generator output.)
 *
 * Trailing slash: the path-based form always ends in "/" (CINC's working URLs all did). The
 * query form keeps whatever trailing slash vendorSlug carries — woo permalinks keep it
 * (product/glp-3/), Medusa/nextjs (amino-club) has none (us/products/mots-c) — so each
 * vendor's canonical form is preserved.
 *
 * The one real exclusion — biolongevity: go.biolongevitylabs.com/aff_c?… is a redirect
 * endpoint on a DIFFERENT HOST than the store (biolongevitylabs.com), not a suffix on it, so
 * it can't compose. Detected from the URL: after stripping a leading "www.", the affiliate
 * host still has an extra subdomain label (go.) → not the store host → null. (Every current
 * vendor sits on a single-label TLD, so "> 2 labels after www" cleanly isolates this case.)
 */
export function vendorDeepLink(vendorKey: string, vendorSlug: string): string | null {
  const v = vendors[vendorKey];
  if (!v || !vendorSlug) return null;
  let u: URL;
  try {
    u = new URL(v.url);
  } catch {
    return null;
  }
  // Cross-host redirect endpoint (go.<domain>/aff_c) → can't carry a product path.
  if (u.host.replace(/^www\./, "").split(".").length > 2) return null;

  const base = `${u.protocol}//${u.host}`;
  const slug = vendorSlug.replace(/^\/+/, ""); // never a leading slash
  const rootPath = u.pathname === "/" || u.pathname === "";
  if (rootPath) {
    // query-param shape: attribution rides as the query on the product URL
    return `${base}/${slug}${u.search}`;
  }
  // path-based shape: the affiliate path segment appends AFTER the product path, trailing "/"
  const affPath = u.pathname.replace(/^\/+|\/+$/g, "");
  return `${base}/${slug.replace(/\/+$/, "")}/${affPath}/`;
}

/** Parse the integer discount percent from a vendor's `discount` string ("15% off" → 15). */
export function vendorDiscountPct(vendorKey: string): number {
  const v = vendors[vendorKey];
  if (!v) return 0;
  const m = v.discount.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export interface PriceRow {
  entry: PriceEntry;
  vendorName: string;
  /** true when we have an affiliate code for this vendor (drives dual vs single pricing) */
  isAffiliate: boolean;
  /** /coupons/<slug> when the vendor has a PP coupon page, else null (non-affiliate) */
  couponPage: string | null;
  /** vendor's affiliate URL, else null (non-affiliate → no affiliate link) */
  affiliateUrl: string | null;
  code: string;
  discountPct: number;
  basePrice: number;
  /** price after the vendor's code (affiliates only; == basePrice for non-affiliates) */
  codePrice: number;
  basePerMg: number;
  codePerMg: number;
  /** the price we RANK on: with-code for affiliates, base for non-affiliates */
  effectivePrice: number;
  effectivePerMg: number;
  inStock: boolean;
  /** true when basePrice is a sale price (a deeper markdown off the vendor's list price). */
  onSale: boolean;
}

/**
 * Enrich one compound's entries: derive with-code + per-mg, resolve vendor identity.
 * Retired vendors (vendors.ts `retired: true`) are FILTERED OUT here — visibility is a
 * render concern; the generated data stays complete. Non-affiliate vendors (absent from
 * vendors.ts or no code) get a single price, no affiliate link, and rank on base price.
 */
export function compoundRows(compoundSlug: string): PriceRow[] {
  return priceEntries
    .filter((e) => e.compound === compoundSlug && !isRetired(e.vendor))
    .map((entry) => {
      const v = vendors[entry.vendor];
      const affiliate = isAffiliateVendor(entry.vendor);
      const discountPct = affiliate ? vendorDiscountPct(entry.vendor) : 0;
      const codePrice = Math.round(entry.basePrice * (1 - discountPct / 100) * 100) / 100;
      const basePerMg = Math.round((entry.basePrice / entry.sizeMg) * 100) / 100;
      const codePerMg = Math.round((codePrice / entry.sizeMg) * 100) / 100;
      return {
        entry,
        vendorName: v?.name ?? generatedVendorNames[entry.vendor] ?? entry.vendor,
        isAffiliate: affiliate,
        couponPage: affiliate ? (v?.detailPage ?? null) : null,
        affiliateUrl: affiliate ? (v?.url ?? null) : null,
        code: affiliate ? (v?.code ?? "") : "",
        discountPct,
        basePrice: entry.basePrice,
        codePrice,
        basePerMg,
        codePerMg,
        effectivePrice: affiliate ? codePrice : entry.basePrice,
        effectivePerMg: affiliate ? codePerMg : basePerMg,
        inStock: entry.inStock,
        onSale: entry.onSale ?? false,
      };
    });
}

/** Distinct non-retired vendors carrying a compound — the ungating count (≥3 → indexable). */
export function compoundVendorCount(compoundSlug: string): number {
  return new Set(compoundRows(compoundSlug).map((r) => r.entry.vendor)).size;
}

/**
 * The profile vendor block, DERIVED from price rows instead of hand-curated: the LISTED
 * (attribution-proven/graced) vendors that demonstrably carry `compoundSlug` — i.e. have a
 * real price row — ranked proven-tier → editor's pick → best deal → stable alpha, capped at
 * `limit`. A price row proves the vendor stocks the compound, so this can never invent a
 * pairing. Returns [] when the grid holds no LISTED vendor for the compound (notably blends /
 * combos, which the per-compound grid doesn't track): the caller then falls back to any
 * hand-curated highlights, and blends without curation render nothing.
 */
export function deriveHighlightVendors(compoundSlug: string, limit = 3): string[] {
  const slugs = Array.from(new Set(compoundRows(compoundSlug).map((r) => r.entry.vendor))).filter(
    (s) => LISTED.has(s),
  );
  slugs.sort((a, b) => {
    const va = vendors[a];
    const vb = vendors[b];
    const provA = PROVEN.has(a) ? 0 : 1;
    const provB = PROVEN.has(b) ? 0 : 1;
    if (provA !== provB) return provA - provB;
    const epA = va?.editorsPick ? 0 : 1;
    const epB = vb?.editorsPick ? 0 : 1;
    if (epA !== epB) return epA - epB;
    const bdA = va?.bestDeal ? 0 : 1;
    const bdB = vb?.bestDeal ? 0 : 1;
    if (bdA !== bdB) return bdA - bdB;
    return a.localeCompare(b);
  });
  return slugs.slice(0, limit);
}

/** Distinct non-retired vendors across the whole price dataset (for the master title). */
export function priceVendorCount(): number {
  return new Set(priceEntries.filter((e) => !isRetired(e.vendor)).map((e) => e.vendor)).size;
}

/**
 * Number of compounds with an indexable /prices/<slug> page — i.e. compounds a visitor can
 * actually comparison-shop (≥3 vendors carry them; the `indexable` flag in prices.index.json).
 * The canonical "compounds compared" count. Every surface that cites it calls this rather than
 * re-filtering the index inline, so the number has one definition. NOTE: this is a count of
 * COMPOUNDS, not price rows (there are ~1,580 rows) — the homepage stat is labelled accordingly.
 */
export function indexablePriceCount(): number {
  return (pricesIndex as { indexable: boolean }[]).filter((c) => c.indexable).length;
}

/** Distinct compounds present in the price data (for static params — covers ALL, no 404s). */
export function priceCompounds(): { slug: string; name: string }[] {
  const out: { slug: string; name: string }[] = [];
  const seen = new Set<string>();
  for (const e of priceEntries) {
    if (!seen.has(e.compound)) {
      seen.add(e.compound);
      out.push({ slug: e.compound, name: e.compoundName });
    }
  }
  return out;
}

export type Unit = "total" | "permg";

export interface IndexCompound {
  slug: string;
  name: string;
  vendorCount: number;
  hasProfile: boolean;
  /** cheapest post-code figure in the active unit (in-stock preferred), or null */
  cheapest: number | null;
}

export interface IndexCategory {
  category: string;
  compounds: IndexCompound[];
}

/**
 * The master compound index, grouped by the /peptides library taxonomy (exact names +
 * display order) with price-specific overrides for compounds outside the library.
 * Compounds sort ALPHABETICALLY within each category. `cheapest` is the lowest post-code
 * figure in the active unit, preferring in-stock rows.
 */
export function priceIndexByCategory(unit: Unit): IndexCategory[] {
  const byCat = new Map<string, IndexCompound[]>();
  for (const { slug, name } of priceCompounds()) {
    const rows = compoundRows(slug);
    if (rows.length === 0) continue; // fully retired-out → not shown
    const cat = categoryForCompound(slug) ?? "Bioregulators"; // every price compound is assigned
    const pick = (rs: PriceRow[]) =>
      Math.min(...rs.map((r) => (unit === "permg" ? r.effectivePerMg : r.effectivePrice)));
    const inStock = rows.filter((r) => r.inStock);
    const cheapest = inStock.length ? pick(inStock) : pick(rows);
    const ic: IndexCompound = {
      slug, name, vendorCount: new Set(rows.map((r) => r.entry.vendor)).size,
      hasProfile: hasProfile(slug), cheapest,
    };
    if (!byCat.has(cat)) byCat.set(cat, []);
    byCat.get(cat)!.push(ic);
  }
  return categoryOrder
    .filter((c) => byCat.has(c))
    .map((c) => ({
      category: c,
      compounds: byCat.get(c)!.sort((a, b) => a.name.localeCompare(b.name)),
    }));
}
