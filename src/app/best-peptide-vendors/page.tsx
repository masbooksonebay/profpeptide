import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/best-peptide-vendors" },
  title: "Best Peptide Vendors (April 2026) — Vetted Research Suppliers | Prof. Peptide",
  description:
    "Alphabetical list of the peptide vendors we've vetted for third-party testing, published COAs, purity standards, shipping reliability, and community reputation. Not a ranking.",
  openGraph: {
    title: "Best Peptide Vendors (April 2026) — Vetted Research Suppliers",
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
    name: "Almighty Peptides",
    slug: "almighty-peptides",
    url: "https://www.almightypeptides.com/?sld=profpeptide",
    code: "PROFPEPTIDE",
    discount: "20% off",
    description:
      "US research supplier offering 20% off with our code. Catalog covers the full range of commonly studied research peptides with COAs available on request.",
    strengths: ["20% off with code", "Full research catalog", "COAs on request", "US-based shipping"],
  },
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
    name: "Behemoth Labz",
    slug: "behemoth-labz",
    url: "https://behemothlabz.com/aff/208/",
    code: "PROF10",
    discount: "10% off",
    description:
      "Founded 2014. US supplier covering SARMs, peptides, nootropics, and prohormones for research. Every product is third-party tested by Colmaric Analyticals with publicly published COAs consistently returning above 99% purity.",
    strengths: ["Colmaric Analyticals tested", "Public COAs", "10+ years in market", "Subscription discounts"],
  },
  {
    name: "BioCollex",
    slug: "biocollex",
    url: "https://biocollexresearch.com/?ref=profpeptidehq",
    code: "PROFPEPTIDE",
    discount: "10% off",
    description:
      "US-based supplier operating C-GMP certified manufacturing with same-day shipping and 99% purity standards. Emphasis on reliability and documentation.",
    strengths: ["C-GMP certified", "99% purity", "Same-day shipping", "Documented supply chain"],
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
    name: "PureRawz",
    slug: "purerawz",
    url: "https://purerawz.co/?ref=1901",
    code: "PROF10",
    discount: "10% off",
    description:
      "Broad US-based research compound supplier with a catalog spanning peptides, SARMs, nootropics, and PCT compounds. Maintains a minimum 99% purity standard across peptides with COAs published directly on product pages.",
    strengths: ["99% minimum purity", "COAs on product pages", "Multiple formats", "Free US shipping over $100"],
  },
  {
    name: "Spartan Peptides",
    slug: "spartan-peptides",
    url: "https://spartanpeptides.com/?a_aid=profpeptide&a_bid=ce6347d0",
    code: "PROFPEPTIDE",
    discount: "10% off",
    description:
      "US-based research peptide supplier backed by an internal team of biochemists, QA specialists, and peptide researchers. HPLC + mass spectrometry testing on every batch, minimum \u226598% purity required before release, and COAs provided with every order.",
    strengths: ["HPLC + MS dual testing", "\u226598% purity minimum", "Third-party lab verified", "Broad research catalog"],
  },
  {
    name: "Vital Core Research",
    slug: "vital-core-research",
    url: "https://vitalcoreresearch.com/?ref=nbwnvhnu",
    code: "PROFPEPTIDE",
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
        "headline": "Best Peptide Vendors for Research (April 2026)",
        "description": "Alphabetical list of the peptide vendors Prof. Peptide has vetted for third-party testing, COA transparency, purity standards, shipping reliability, and community reputation.",
        "datePublished": "2026-04-16",
        "dateModified": "2026-04-17",
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
        <span className="tag mb-3 inline-block">Updated April 2026</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-4">
          Best Peptide Vendors for Research (April 2026)
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
