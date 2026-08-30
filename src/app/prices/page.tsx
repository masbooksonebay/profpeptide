import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { PRICES_UPDATED_DATE, priceVendorCount, priceBlends } from "@/data/prices";
import PricesMaster from "@/components/PricesMaster";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import NavLink from "@/components/NavLink";

const VENDOR_N = priceVendorCount();

export const metadata = {
  ...buildPageMetadata({
    path: "/prices",
    title: `Peptide Price Comparison — Compare Prices Across ${VENDOR_N} Vendors With Published Pricing | Prof. Peptide`,
    description:
      `Compare research-peptide prices across ${VENDOR_N} vendors with published pricing — post-code pricing, per-mg normalization across vial sizes, and lowest-price-first sorting. Updated regularly.`,
    // Defer OG to this segment's opengraph-image.tsx (content-generic vial card).
    useDefaultOgImage: false,
  }),
};

export default function PricesPage() {
  return (
    <div className="section max-w-4xl">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Prices" }])} />
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-2">Peptide Price Comparison</h1>
      <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-2 max-w-2xl">
        Compare research-peptide prices across vendors. Prices are shown post-code (after each vendor&apos;s discount, where one applies), normalized to price-per-mg so you can compare across vial sizes, and sorted by lowest price.
      </p>
      <p className="text-sm text-gray-400 dark:text-slate-500 mb-6">Prices updated {PRICES_UPDATED_DATE}</p>

      <PricesMaster />

      {/* Blends & stacks price on a separate total-price surface (not $/mg). Surfaced here so the
          blend price pages are reachable from the hub, not orphaned to the sitemap. */}
      <section className="mt-10">
        <h2 className="text-lg font-bold text-[#16181B] dark:text-slate-100 mb-1">Blend &amp; Stack Prices</h2>
        <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">
          Multi-compound blends compared by total price at each standard configuration (per-mg isn&apos;t meaningful across ratios).
        </p>
        <div className="space-y-2">
          {priceBlends().map((b) => (
            <div key={b.slug} className="panel-card px-4 py-3 grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,1fr)_6rem_8rem_7.5rem] items-center gap-x-4 gap-y-1 text-left">
              <Link href={`/peptides/${b.slug}`} className="text-sm font-semibold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors min-w-0 truncate">
                {b.name}
              </Link>
              <span className="hidden sm:block text-xs text-gray-500 dark:text-slate-400 whitespace-nowrap">
                {b.vendors} vendor{b.vendors === 1 ? "" : "s"}
              </span>
              <span className="text-xs text-gray-500 dark:text-slate-400 whitespace-nowrap justify-self-end sm:justify-self-start">
                {b.configs.map((c) => c.config).join(" · ")}
              </span>
              <NavLink href={`/prices/${b.slug}`} className="col-span-2 sm:col-span-1 justify-self-start text-sm font-medium text-[#3A759F] hover:underline whitespace-nowrap">Compare</NavLink>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed mt-10 border-t border-gray-100 dark:border-slate-800 pt-6">
        <strong className="font-semibold text-gray-500 dark:text-slate-400">Affiliate disclosure:</strong> Prof. Peptide is independently operated and may earn affiliate commissions when you use our discount codes or buy through our links, at no additional cost to you. Affiliate relationships never determine vendor inclusion, ranking, verification, or our editorial conclusions. Prices and availability change frequently; always confirm on the vendor&apos;s site.
      </p>
    </div>
  );
}
