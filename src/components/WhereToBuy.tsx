import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { vendors, regionFlag } from "@/data/vendors";
import peptideVendorsData from "@/data/peptide-vendors.json";

type VendorEntry = { slug: string; note: string | null };
type PeptideEntry = { displayName: string; vendors: VendorEntry[] };
const peptides = (peptideVendorsData as { peptides: Record<string, PeptideEntry> }).peptides;

function VendorCard({ slug, note }: VendorEntry) {
  const v = vendors[slug];
  if (!v) return null;
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-600 bg-white dark:bg-[#0f172a] hover:shadow-md hover:border-[#0891b2]/40 transition-all">
      <div className="px-4 py-3 flex items-center justify-between gap-2 border-b border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-[#1e293b]">
        <Link
          href={v.detailPage}
          className="text-sm font-bold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-tight"
        >
          {v.name}
        </Link>
        <span className="text-[11px] font-bold text-[#0891b2] bg-[#0891b2]/15 px-2 py-0.5 rounded-full whitespace-nowrap">
          {v.discount}
        </span>
      </div>
      <div className="px-4 py-3 space-y-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {v.editorsPick && (
            <span className="text-[10px] bg-[#eab308] text-[#1c1917] border border-[#ca8a04] px-1.5 py-0.5 rounded-full font-semibold">
              Editor&apos;s Pick
            </span>
          )}
          {v.bestDeal && (
            <span className="text-[10px] bg-green-100 text-green-800 border border-green-300 px-1.5 py-0.5 rounded-full font-medium">
              Best Deal
            </span>
          )}
          <span className="text-[10px] bg-gray-50 dark:bg-[#1e293b] text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-600 px-1.5 py-0.5 rounded-full">
            {regionFlag[v.region]} {v.region}
          </span>
        </div>
        {note && (
          <p className="text-xs text-gray-500 dark:text-slate-400 leading-snug">{note}</p>
        )}
        {v.code ? (
          <p className="text-[11px] text-gray-400 dark:text-slate-500">
            Code:{" "}
            <span className="font-mono font-semibold text-[#1e2d3d] dark:text-slate-100 tracking-wider">
              {v.code}
            </span>
          </p>
        ) : (
          <p className="text-[11px] text-gray-400 dark:text-slate-500 italic">Code coming soon</p>
        )}
        <div className="flex items-center gap-2 pt-1">
          <Link
            href={v.detailPage}
            className="text-[11px] font-medium text-[#0891b2] hover:underline"
          >
            Learn more &rarr;
          </Link>
          {!v.comingSoon && (
            <a
              href={v.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="text-[11px] font-medium text-[#0891b2] hover:underline ml-auto"
            >
              Shop &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WhereToBuy({ peptide }: { peptide: string }) {
  const entry = peptides[peptide];
  if (!entry) return null;
  const { displayName, vendors: entries } = entry;
  const vendorNames = entries.map((e) => vendors[e.slug]?.name).filter(Boolean);
  const topThree = vendorNames.slice(0, 3).join(", ");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Where can I buy ${displayName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            `${entries.length} research suppliers on the Prof. Peptide vetted vendor list carry ${displayName}, including ${topThree}. All vendors listed are third-party tested with published Certificates of Analysis.`,
        },
      },
    ],
  };

  return (
    <section className="mt-10">
      <JsonLd data={faqSchema} />
      <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
        Where to buy {displayName}
      </h2>
      <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-5 max-w-xl">
        {entries.length} research suppliers on our vetted list carry {displayName}. All are third-party tested with published Certificates of Analysis.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {entries.map((e) => (
          <VendorCard key={e.slug} slug={e.slug} note={e.note} />
        ))}
      </div>
      <Link
        href="/best-peptide-vendors"
        className="text-sm font-medium text-[#0891b2] hover:underline"
      >
        Compare all vendors in our full guide &rarr;
      </Link>
    </section>
  );
}
