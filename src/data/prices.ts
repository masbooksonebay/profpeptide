import { vendors } from "./vendors";
import { generatedPriceEntries, GENERATED_PRICES_UPDATED } from "./prices.generated";

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
  /** list price in USD, BEFORE the affiliate code */
  basePrice: number;
  inStock: boolean;
  /** vendor's coded product name, when a decoded compound is sold under a code
   *  (e.g. "GLP-3 RT" → Retatrutide). Renders as "Retatrutide (listed as GLP-3 RT)". */
  listedAs?: string;
}

/**
 * Real per-vendor single-compound prices, GENERATED from the master doc by
 * scripts/price-pull/to_prices.py. Hand-edit the doc + regenerate, never this array.
 */
export const priceEntries: PriceEntry[] = generatedPriceEntries;

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
  /** /coupons/<slug> — PP coupon page for this vendor (affiliate ecosystem tie-in) */
  couponPage: string;
  /** vendor's affiliate URL from vendors.ts */
  affiliateUrl: string;
  code: string;
  discountPct: number;
  basePrice: number;
  /** price after applying the vendor's code (placeholder base × (1 − discount)) */
  codePrice: number;
  basePerMg: number;
  codePerMg: number;
  inStock: boolean;
}

/** Enrich + derive with-code price and per-mg for one compound's entries. */
export function compoundRows(compoundSlug: string): PriceRow[] {
  return priceEntries
    .filter((e) => e.compound === compoundSlug)
    .map((entry) => {
      const v = vendors[entry.vendor];
      const discountPct = vendorDiscountPct(entry.vendor);
      const codePrice = Math.round(entry.basePrice * (1 - discountPct / 100) * 100) / 100;
      return {
        entry,
        vendorName: v?.name ?? entry.vendor,
        couponPage: v?.detailPage ?? "/coupons",
        affiliateUrl: v?.url ?? "/coupons",
        code: v?.code ?? "",
        discountPct,
        basePrice: entry.basePrice,
        codePrice,
        basePerMg: Math.round((entry.basePrice / entry.sizeMg) * 100) / 100,
        codePerMg: Math.round((codePrice / entry.sizeMg) * 100) / 100,
        inStock: entry.inStock,
      };
    });
}

/** Distinct compounds present in the price data (for the master list + static params). */
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
