import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PRICES_UPDATED_DATE, priceCompounds } from "@/data/prices";
import CompoundPriceTable from "@/components/CompoundPriceTable";

export function generateStaticParams() {
  return priceCompounds().map((c) => ({ compound: c.slug }));
}

function lookup(slug: string) {
  return priceCompounds().find((c) => c.slug === slug) ?? null;
}

export function generateMetadata({ params }: { params: { compound: string } }): Metadata {
  const c = lookup(params.compound);
  if (!c) return {};
  return buildPageMetadata({
    path: `/prices/${c.slug}`,
    title: `${c.name} Price Comparison — Cheapest Vendors by $/mg | Prof. Peptide`,
    description: `Compare ${c.name} prices across vetted vendors — post-code pricing, per-mg normalization across vial sizes, and cheapest-first sorting. Updated regularly.`,
  });
}

export default function CompoundPricePage({ params }: { params: { compound: string } }) {
  const c = lookup(params.compound);
  if (!c) notFound();

  return (
    <div className="section max-w-3xl">
      <Link href="/prices" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
        &larr; Back to Price Comparison
      </Link>

      <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20 p-3">
        <p className="text-sm text-amber-900 dark:text-amber-200">
          <span className="font-semibold">Placeholder data:</span> these are not real prices &mdash; placeholders for layout review.
        </p>
      </div>

      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-2">{c.name} Price Comparison</h1>
      <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-2 max-w-2xl">
        {c.name} prices across vetted vendors — post-code pricing (base struck-through), normalized to price-per-mg, sorted cheapest-first.
      </p>
      <p className="text-sm text-gray-400 dark:text-slate-500 mb-4">Prices updated {PRICES_UPDATED_DATE}</p>

      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
        <Link href={`/peptides/${c.slug}`} className="text-[#0891b2] hover:underline font-medium">
          Read the {c.name} research profile &rarr;
        </Link>
        <a href="https://finnrick.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-slate-400 hover:text-[#0891b2]">
          Purity testing: Finnrick &rarr;
        </a>
      </div>

      <CompoundPriceTable compoundSlug={c.slug} />

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed mt-10">
        For educational and research purposes only. Prices and availability change frequently; always confirm on the vendor&apos;s site. We may earn affiliate commissions through vendor links at no additional cost to you.
      </p>
    </div>
  );
}
