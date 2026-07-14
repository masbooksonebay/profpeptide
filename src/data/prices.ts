import { vendors } from "./vendors";

/**
 * Month/year the price data was last checked. SINGLE SOURCE of truth for the
 * "Prices updated …" stamp across the price-comparison section — update this ONE
 * line when prices are refreshed. Mirrors the CODES_VERIFIED_DATE pattern in
 * vendors.ts.
 */
export const PRICES_UPDATED_DATE = "July 2026";

/**
 * ⚠️ PLACEHOLDER DATA — these are NOT real prices. Round placeholder numbers are
 * used so the mechanics (per-mg, with-code derivation, cheapest-first sort) are
 * testable. `vendor` keys and `compound` slugs are REAL (they match vendors.ts
 * and /peptides/<slug>) so the with-code derivation and internal links work.
 * Replace basePrice/sizeMg/inStock with verified data before going live.
 */
export interface PriceEntry {
  /** peptide profile slug — must match /peptides/<compound> */
  compound: string;
  /** display name for the compound */
  compoundName: string;
  /** vendor key — must match a key in vendors.ts (drives code/discount + /coupons link) */
  vendor: string;
  /** vial size in mg */
  sizeMg: number;
  /** list price in USD, BEFORE the affiliate code (placeholder) */
  basePrice: number;
  inStock: boolean;
}

export const priceEntries: PriceEntry[] = [
  // Retatrutide (placeholder prices)
  { compound: "retatrutide", compoundName: "Retatrutide", vendor: "aero-peptides", sizeMg: 6, basePrice: 180, inStock: true },
  { compound: "retatrutide", compoundName: "Retatrutide", vendor: "aero-peptides", sizeMg: 12, basePrice: 300, inStock: true },
  { compound: "retatrutide", compoundName: "Retatrutide", vendor: "ameano-peptides", sizeMg: 6, basePrice: 190, inStock: true },
  { compound: "retatrutide", compoundName: "Retatrutide", vendor: "ameano-peptides", sizeMg: 12, basePrice: 320, inStock: false },
  { compound: "retatrutide", compoundName: "Retatrutide", vendor: "amino-club", sizeMg: 12, basePrice: 310, inStock: true },
  // BPC-157 (placeholder prices)
  { compound: "bpc-157", compoundName: "BPC-157", vendor: "aero-peptides", sizeMg: 5, basePrice: 45, inStock: true },
  { compound: "bpc-157", compoundName: "BPC-157", vendor: "aero-peptides", sizeMg: 10, basePrice: 75, inStock: true },
  { compound: "bpc-157", compoundName: "BPC-157", vendor: "ameano-peptides", sizeMg: 5, basePrice: 50, inStock: true },
  { compound: "bpc-157", compoundName: "BPC-157", vendor: "amino-club", sizeMg: 5, basePrice: 42, inStock: true },
  { compound: "bpc-157", compoundName: "BPC-157", vendor: "amino-club", sizeMg: 10, basePrice: 70, inStock: false },
  // Tirzepatide (placeholder prices)
  { compound: "tirzepatide", compoundName: "Tirzepatide", vendor: "aero-peptides", sizeMg: 10, basePrice: 90, inStock: true },
  { compound: "tirzepatide", compoundName: "Tirzepatide", vendor: "aero-peptides", sizeMg: 30, basePrice: 210, inStock: true },
  { compound: "tirzepatide", compoundName: "Tirzepatide", vendor: "ameano-peptides", sizeMg: 10, basePrice: 95, inStock: true },
  { compound: "tirzepatide", compoundName: "Tirzepatide", vendor: "amino-club", sizeMg: 30, basePrice: 200, inStock: true },
];

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
