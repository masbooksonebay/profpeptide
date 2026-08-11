import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PRICES_UPDATED_DATE, priceCompounds, compoundRows, compoundVendorCount, priceBlends, blendPriceRows, blendVendorCount } from "@/data/prices";
import { hasProfile } from "@/data/peptideCategories";
import CompoundPriceTable from "@/components/CompoundPriceTable";
import BlendPriceTable from "@/components/BlendPriceTable";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

type Entry = { slug: string; name: string; kind: "compound" } | { slug: string; name: string; kind: "blend"; config: string };

export function generateStaticParams() {
  // Cover ALL compounds AND blends so no URL 404s; only the robots directive is conditional.
  return [...priceCompounds().map((c) => ({ compound: c.slug })), ...priceBlends().map((b) => ({ compound: b.slug }))];
}

function lookup(slug: string): Entry | null {
  const c = priceCompounds().find((x) => x.slug === slug);
  if (c) return { ...c, kind: "compound" };
  const b = priceBlends().find((x) => x.slug === slug);
  if (b) return { slug: b.slug, name: b.name, kind: "blend", config: b.config };
  return null;
}

export function generateMetadata({ params }: { params: { compound: string } }): Metadata {
  const c = lookup(params.compound);
  if (!c) return {};
  const vendorCount = c.kind === "blend" ? blendVendorCount(c.slug) : compoundVendorCount(c.slug);
  const v = vendorCount === 1 ? "vendor" : "vendors";
  const prices = (c.kind === "blend" ? blendPriceRows(c.slug) : compoundRows(c.slug)).map((r) => r.effectivePrice);
  const low = prices.length ? Math.min(...prices) : null;
  const high = prices.length ? Math.max(...prices) : null;
  const range =
    low != null ? (low === high ? ` Priced at $${low.toFixed(2)}.` : ` Prices from $${low!.toFixed(2)} to $${high!.toFixed(2)}.`) : "";
  const description =
    c.kind === "blend"
      ? `Compare ${c.name} blend prices from ${vendorCount} research-peptide ${v} — total price at the standard ${c.config} configuration.${range}`
      : `Compare ${c.name} prices from ${vendorCount} research-peptide ${v} — find the lowest price and cost per mg, normalized across vial sizes.${range}`;
  return {
    ...buildPageMetadata({
      path: `/prices/${c.slug}`,
      // Title leads neutral but keeps "Cheapest" for search matching; H1 (below) drops it.
      title: `${c.name} Price Comparison — Cheapest Prices from ${vendorCount} Vendor${vendorCount === 1 ? "" : "s"} | Prof. Peptide`,
      description,
      // Defer OG to this segment's opengraph-image.tsx (content-generic vial card).
      useDefaultOgImage: false,
    }),
    // ≥3 vendors → indexable; thinner pages stay noindex,follow (still crawlable/linked).
    robots: vendorCount >= 3 ? undefined : { index: false, follow: true },
  };
}

export default function CompoundPricePage({ params }: { params: { compound: string } }) {
  const c = lookup(params.compound);
  if (!c) notFound();
  const profiled = hasProfile(c.slug);

  return (
    <div className="section max-w-4xl">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Prices", path: "/prices" }, { name: c.name }])} />
      <Link href="/prices" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
        &larr; Back to Price Comparison
      </Link>

      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-2">{c.name} Price Comparison</h1>
      <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-2 max-w-2xl">
        {c.kind === "blend"
          ? `${c.name} prices across vendors — post-code pricing (base struck through where a code applies), compared as total price at the standard ${c.config} configuration, sorted by lowest price.`
          : `${c.name} prices across vendors — post-code pricing (base struck through where a code applies), normalized to price-per-mg, sorted by lowest price.`}
      </p>
      <p className="text-sm text-gray-400 dark:text-slate-500 mb-4">Prices updated {PRICES_UPDATED_DATE}</p>

      {profiled && (
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
          <Link href={`/peptides/${c.slug}`} className="text-[#3A759F] hover:underline font-medium">
            Read the {c.name} research profile &rarr;
          </Link>
        </div>
      )}

      {c.kind === "blend" ? (
        <BlendPriceTable blendSlug={c.slug} config={c.config} />
      ) : (
        <CompoundPriceTable compoundSlug={c.slug} compoundName={c.name} />
      )}

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed mt-10 border-t border-gray-100 dark:border-slate-800 pt-6">
        <strong className="font-semibold text-gray-500 dark:text-slate-400">Affiliate disclosure:</strong> Prof. Peptide is independently operated and may earn affiliate commissions when you use our discount codes or buy through our links, at no additional cost to you. Affiliate relationships never determine vendor inclusion, ranking, verification, or our editorial conclusions. Prices and availability change frequently; always confirm on the vendor&apos;s site.
      </p>
    </div>
  );
}
