import { buildPageMetadata } from "@/lib/seo";
import { PRICES_UPDATED_DATE } from "@/data/prices";
import PricesMaster from "@/components/PricesMaster";

export const metadata = {
  ...buildPageMetadata({
    path: "/prices",
    title: "Peptide Price Comparison — Compare Vendor Prices | Prof. Peptide",
    description:
      "Compare research-peptide prices across vendors — post-code pricing, per-mg normalization across vial sizes, and cheapest-first sorting. Updated regularly.",
  }),
};

export default function PricesPage() {
  return (
    <div className="section max-w-4xl">
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-2">Peptide Price Comparison</h1>
      <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-2 max-w-2xl">
        Compare research-peptide prices across vendors. Prices are shown post-code (after each vendor&apos;s discount, where one applies), normalized to price-per-mg so you can compare across vial sizes, and sorted cheapest-first.
      </p>
      <p className="text-sm text-gray-400 dark:text-slate-500 mb-6">Prices updated {PRICES_UPDATED_DATE}</p>

      <PricesMaster />

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed mt-10 border-t border-gray-100 dark:border-slate-800 pt-6">
        <strong className="font-semibold text-gray-500 dark:text-slate-400">Affiliate disclosure:</strong> Prof. Peptide is independently operated and may earn affiliate commissions when you use our discount codes or buy through our links, at no additional cost to you. Affiliate relationships never determine vendor inclusion, ranking, verification, or our editorial conclusions. Prices and availability change frequently; always confirm on the vendor&apos;s site.
      </p>
    </div>
  );
}
