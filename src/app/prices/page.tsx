import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { PRICES_UPDATED_DATE } from "@/data/prices";
import PricesMaster from "@/components/PricesMaster";

export const metadata = buildPageMetadata({
  path: "/prices",
  title: "Peptide Price Comparison — Cheapest Vendors by $/mg | Prof. Peptide",
  description:
    "Compare research-peptide prices across vetted vendors — post-code pricing, per-mg normalization across vial sizes, and cheapest-first sorting. Updated regularly.",
});

export default function PricesPage() {
  return (
    <div className="section max-w-4xl">
      <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20 p-3">
        <p className="text-sm text-amber-900 dark:text-amber-200">
          <span className="font-semibold">Placeholder data:</span> these are not real prices &mdash; the section is being built and the numbers below are placeholders for layout review.
        </p>
      </div>

      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-2">Peptide Price Comparison</h1>
      <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-2 max-w-2xl">
        Compare research-peptide prices across vetted vendors. Post-code pricing is shown first (base price struck-through), normalized to price-per-mg so you can compare across vial sizes, and sorted cheapest-first.
      </p>
      <p className="text-sm text-gray-400 dark:text-slate-500 mb-4">Prices updated {PRICES_UPDATED_DATE}</p>

      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8 border-l-2 border-gray-200 dark:border-slate-700 pl-3">
        Comparing on price alone isn&apos;t enough &mdash; for independent third-party purity testing of research peptides, see{" "}
        <a href="https://finnrick.com" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">Finnrick</a>{" "}
        as a purity resource. We link it as a reference; we do not republish their data.
      </p>

      <PricesMaster />

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed mt-10">
        For educational and research purposes only. Prices and availability change frequently; always confirm on the vendor&apos;s site. We may earn affiliate commissions through vendor links at no additional cost to you.
      </p>
    </div>
  );
}
