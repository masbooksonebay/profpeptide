import { vendors, regionFlag } from "@/data/vendors";

/**
 * Region pill for a vendor's /coupons/[slug] detail page.
 *
 * Region and its flag are DERIVED from the registry (src/data/vendors.ts) by
 * slug — single source of truth, mirroring the /coupons hub's pill treatment
 * (`${regionFlag[region]} ${region}`). Rule: the region pill ALWAYS shows the
 * flag; the flag comes from the `regionFlag` map, never hardcoded per page, so
 * a region change in the registry updates every surface at once.
 *
 * Renders nothing if the slug isn't in the registry.
 */
export function RegionPill({ slug }: { slug: string }) {
  const vendor = vendors[slug];
  if (!vendor) return null;
  return (
    <span className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-[#D9DEE4] dark:border-slate-600 px-2 py-0.5 rounded-full">
      {regionFlag[vendor.region]} {vendor.region}
    </span>
  );
}
