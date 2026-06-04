import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/best-peptide-vendors" },
  title: "Best Peptide Vendors (June 2026) — Vetted Research Suppliers | Prof. Peptide",
  description:
    "Alphabetical list of the peptide vendors we've vetted for third-party testing, published COAs, purity standards, shipping reliability, and community reputation. Not a ranking.",
  openGraph: {
    title: "Best Peptide Vendors (June 2026) — Vetted Research Suppliers",
    description:
      "Alphabetical list of vetted peptide research suppliers — third-party tested, COA-backed, and reviewed by Prof. Peptide.",
    url: "https://profpeptide.com/best-peptide-vendors",
    images: [{ url: "https://profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    images: ["https://profpeptide.com/og-image.png"],
  },
};

interface HubVendor {
  name: string;
  slug: string;
  url: string;
  code: string;
  discount: string;
  description: string;
  strengths: string[];
}

const vendors: HubVendor[] = [
  {
    name: "Ascension Peptides",
    slug: "ascension-peptides",
    url: "https://ascensionpeptides.com/ref/profpeptide/",
    code: "PROFPEPTIDE",
    discount: "50% off",
    description:
      "US-based, third-party tested supplier with aggressive bulk pricing. 50% off storewide with our code.",
    strengths: ["50% off storewide", "Third-party tested", "Competitive bulk pricing", "US-based"],
  },
  {
    name: "EZ Peptides",
    slug: "ez-peptides",
    url: "https://ezpeptides.com/?ref=nldbbgvs",
    code: "PROFPEPTIDE",
    discount: "10% off",
    description:
      "US-based supplier in Albuquerque, New Mexico, known for fast fulfillment \u2014 orders ship within 0\u20132 business days with same-day shipping available. Every batch is independently third-party tested with a Certificate of Analysis, and the company holds a 4.7/5 rating across 176+ reviews.",
    strengths: ["Third-party tested, COA per batch", "Ships in 0\u20132 business days", "4.7/5 across 176+ reviews", "10% off with code"],
  },
  {
    name: "Oasis Labs",
    slug: "oasis-labs",
    url: "https://myoasislabs.com/?sld=profpeptide",
    code: "PROF15",
    discount: "15% off",
    description:
      "Veteran-owned, Las Vegas-based supplier with in-house fulfillment. Every batch is third-party tested at US labs to a guaranteed 99% purity, with a public COA Library plus a unique QR code on each vial for point-of-use COA access. Cold-shield shipping with same-day processing.",
    strengths: ["Third-party tested, 99% purity", "Per-vial QR-code COAs", "Veteran-owned, in-house fulfillment", "15% off with code"],
  },
  {
    name: "Peptide Partners",
    slug: "peptide-partners",
    url: "https://peptide.partners/ref/48/",
    code: "PROFPEPTIDE",
    discount: "10% off",
    description:
      "US research peptide supplier that runs four independent test types per batch: purity, endotoxin, heavy metals, and sterility. Extensive transparency on test data and documentation.",
    strengths: ["Four independent batch tests", "Endotoxin + sterility tested", "Published COAs", "Transparent test data"],
  },
  {
    name: "Peptides.gg",
    slug: "peptides-gg",
    url: "https://peptides.gg/?coupon=prof15",
    code: "PROF15",
    discount: "15% off",
    description:
      "US-made supplier with a deep catalog of 90+ products available as vials, liquids, and capsules. Every batch is third-party tested with published COAs where each sample ID links to the full lab report, at 98\u201399%+ purity depending on product. Same-day shipping and free shipping over $200.",
    strengths: ["Per-batch COAs, sample-ID linked", "98\u201399%+ purity", "90+ products: vials, liquids, capsules", "15% off with code"],
  },
  {
    name: "Vital Core Research",
    slug: "vital-core-research",
    url: "https://vitalcoreresearch.com/?ref=nbwnvhnu",
    code: "PROF20",
    discount: "20% off",
    description:
      "US research compound supplier with 20% off via our code. Straightforward catalog with COA availability and responsive fulfillment.",
    strengths: ["20% off with code", "COA availability", "Responsive fulfillment", "US-based"],
  },
];

export default function BestPeptideVendorsPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Peptide Vendors for Research (June 2026)",
        "description": "Alphabetical list of the peptide vendors Prof. Peptide has vetted for third-party testing, COA transparency, purity standards, shipping reliability, and community reputation.",
        "datePublished": "2026-04-16",
        "dateModified": "2026-06-03",
        "url": "https://profpeptide.com/best-peptide-vendors",
        "publisher": { "@type": "Organization", "name": "Prof. Peptide", "url": "https://profpeptide.com" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "Best Peptide Vendors" },
        ],
      }} />

      <div className="section max-w-3xl">
        <span className="tag mb-3 inline-block">Updated June 2026</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-4">
          Best Peptide Vendors for Research (June 2026)
        </h1>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6 max-w-xl">
          Below is a list of the research peptide vendors we&rsquo;ve vetted and recommend. To make our list, a vendor must provide third-party lab testing with published Certificates of Analysis, meet documented purity standards, offer transparent shipping, maintain responsive customer service, and hold a positive reputation in the research community.
        </p>

        <div className="mb-8 p-4 bg-[#0891b2]/5 border border-[#0891b2]/20 rounded-lg flex items-start gap-3 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <p className="text-sm text-gray-700 dark:text-slate-200 font-medium mb-1">Looking for active discounts?</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
              This page covers vendor quality. Current codes and promotions live on our codes page.
            </p>
          </div>
          <Link href="/coupons" className="text-sm font-medium text-[#0891b2] hover:underline whitespace-nowrap">
            See current codes &rarr;
          </Link>
        </div>

        <div className="space-y-6">
          {vendors.map((v) => (
            <div
              key={v.slug}
              className="border border-gray-200 dark:border-slate-700 rounded-xl p-6 bg-white dark:bg-[#0f172a] hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100">
                  <Link href={`/coupons/${v.slug}`} className="hover:text-[#0891b2] transition-colors">
                    {v.name}
                  </Link>
                </h2>
                <span className="text-xs font-bold text-[#0891b2] bg-[#0891b2]/15 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {v.discount}
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                {v.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {v.strengths.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-gray-50 dark:bg-[#1e293b] text-gray-600 dark:text-slate-300 border border-gray-200 dark:border-slate-600 px-2.5 py-0.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="text-xs text-gray-500 dark:text-slate-400">
                  Code:{" "}
                  <span className="font-mono font-semibold text-[#1e2d3d] dark:text-slate-100 tracking-wider">
                    {v.code}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/coupons/${v.slug}`}
                    className="text-xs font-medium text-[#0891b2] hover:underline"
                  >
                    Read full review &rarr;
                  </Link>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-4 py-2"
                  >
                    Shop {v.name} &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How We Vet Vendors</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Every vendor on this page is evaluated against the same criteria: third-party lab testing, published Certificates of Analysis, documented purity standards, catalog breadth, transparent shipping, responsive customer service, and reputation in the research community. Meeting all of them gets a vendor on the list &mdash; we don&rsquo;t score beyond that. We update this list regularly as the market changes.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Looking for <Link href="/coupons" className="text-[#0891b2] hover:underline">active discount codes</Link> or our <Link href="/peptides" className="text-[#0891b2] hover:underline">peptide research library</Link>?
          </p>
        </div>

        <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            All products are research compounds intended for laboratory use only.
          </p>
        </div>
      </div>
    </>
  );
}
