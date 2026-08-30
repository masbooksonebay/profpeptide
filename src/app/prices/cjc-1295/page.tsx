import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PRICES_UPDATED_DATE, priceDisambiguation, compoundVendorCount } from "@/data/prices";
import { hasProfile } from "@/data/peptideCategories";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import BackLink from "@/components/BackLink";
import NavLink from "@/components/NavLink";

// /prices/cjc-1295 is a DISAMBIGUATION hub, not a price table. "CJC-1295" is sold as two
// different molecules (DAC vs no-DAC / Mod GRF 1-29) with different half-lives; this page
// asserts neither and routes the visitor to the form-specific comparison. Indexable: it is
// an existing ranking URL and "CJC-1295 price" is a real generic query. A dedicated static
// route (not the [compound] dynamic route) so it never renders a merged table.
const DISAMBIG = priceDisambiguation("cjc-1295")!;

export function generateMetadata(): Metadata {
  const counts = DISAMBIG.forms.map((f) => `${f.label} (${compoundVendorCount(f.slug)} vendors)`).join(" and ");
  return buildPageMetadata({
    path: "/prices/cjc-1295",
    title: "CJC-1295 Price Comparison — DAC vs no-DAC (Mod GRF 1-29) | Prof. Peptide",
    description: `“CJC-1295” is sold as two different molecules with different half-lives. Compare prices within the right form: ${counts}.`,
    useDefaultOgImage: false,
  });
  // No robots override → indexable, as an established ranking URL should be.
}

export default function CjcDisambiguationPage() {
  return (
    <div className="section max-w-4xl">
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Prices", path: "/prices" }, { name: "CJC-1295" }])}
      />
      <BackLink href="/prices">Back to Price Comparison</BackLink>

      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-2">CJC-1295 Price Comparison</h1>
      <p className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-2 max-w-2xl">{DISAMBIG.note}</p>
      <p className="text-sm text-gray-400 dark:text-slate-500 mb-6">Prices updated {PRICES_UPDATED_DATE}</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {DISAMBIG.forms.map((f) => {
          const n = compoundVendorCount(f.slug);
          return (
            <Link
              key={f.slug}
              href={`/prices/${f.slug}`}
              className="block rounded-xl border border-gray-200 dark:border-slate-700 p-5 hover:border-[#3A759F] hover:shadow-sm transition"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-lg font-semibold text-[#16181B] dark:text-slate-100">{f.label}</span>
                <span className="text-sm text-gray-400 dark:text-slate-500 whitespace-nowrap">
                  {n} vendor{n === 1 ? "" : "s"}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-2 leading-relaxed">{f.blurb}</p>
              <span className="text-sm text-[#3A759F] font-medium mt-3 inline-block">
                Compare {f.label} prices &rarr;
              </span>
            </Link>
          );
        })}
      </div>

      {hasProfile("cjc-1295") && (
        <NavLink href="/peptides/cjc-1295" className="text-sm text-[#3A759F] hover:underline font-medium">Read the CJC-1295 research profile (DAC vs no-DAC explained)</NavLink>
      )}

      <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed mt-10 border-t border-gray-100 dark:border-slate-800 pt-6">
        <strong className="font-semibold text-gray-500 dark:text-slate-400">Affiliate disclosure:</strong> Prof.
        Peptide is independently operated and may earn affiliate commissions when you use our discount codes or buy
        through our links, at no additional cost to you. Affiliate relationships never determine vendor inclusion,
        ranking, verification, or our editorial conclusions. Prices and availability change frequently; always confirm
        on the vendor&apos;s site.
      </p>
    </div>
  );
}
