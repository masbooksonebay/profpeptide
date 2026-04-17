import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Best Peptide Vendors (April 2026) — Top Rated Suppliers | Prof. Peptide",
  description:
    "Curated list of the best peptide vendors for research in 2026 — evaluated on third-party testing, COAs, catalog depth, shipping, and reputation. All codes verified April 2026.",
  openGraph: {
    title: "Best Peptide Vendors (April 2026) — Top Rated Suppliers",
    description:
      "Curated list of the best peptide vendors for research in 2026 — third-party tested, COA-backed, and verified.",
    url: "https://www.profpeptide.com/best-peptide-vendors",
    images: [{ url: "https://www.profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    images: ["https://www.profpeptide.com/og-image.png"],
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
    name: "Peptide Partners",
    slug: "peptide-partners",
    url: "https://peptide.partners/ref/48/",
    code: "PROFPEPTIDE",
    discount: "10% off",
    description:
      "US research peptide supplier notable for running four independent test types per batch: purity, endotoxin, heavy metals, and sterility. Extensive transparency on test data and documentation. One of our Editor&rsquo;s Picks.",
    strengths: ["Four independent batch tests", "Endotoxin + sterility tested", "Published COAs", "Editor\u2019s Pick"],
  },
  {
    name: "Ascension Peptides",
    slug: "ascension-peptides",
    url: "https://ascensionpeptides.com/ref/profpeptide/",
    code: "PROFPEPTIDE",
    discount: "50% off",
    description:
      "Deepest discount in our network with 50% off storewide using our code. US-based, third-party tested, and known for aggressive pricing on bulk research quantities without compromising batch documentation.",
    strengths: ["50% off storewide", "Third-party tested", "Competitive bulk pricing", "Best Deal pick"],
  },
  {
    name: "Almighty Peptides",
    slug: "almighty-peptides",
    url: "https://www.almightypeptides.com/?sld=profpeptide",
    code: "PROFPEPTIDE",
    discount: "20% off",
    description:
      "US research supplier offering 20% off with our code \u2014 one of the better all-around discounts in the space. Catalog covers the full range of commonly studied research peptides with COAs available on request.",
    strengths: ["20% off with code", "Full research catalog", "COAs on request", "US-based shipping"],
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
      "US-based supplier operating C-GMP certified manufacturing with same-day shipping and 99% purity standards. A strong middle-of-the-pack choice when reliability and documentation matter more than headline discount size.",
    strengths: ["C-GMP certified", "99% purity", "Same-day shipping", "Documented supply chain"],
  },
  {
    name: "Vital Core Research",
    slug: "vital-core-research",
    url: "https://vitalcoreresearch.com/?ref=nbwnvhnu",
    code: "PROFPEPTIDE",
    discount: "20% off",
    description:
      "US research compound supplier with 20% off via our code. Straightforward catalog with COA availability and responsive fulfillment. A reliable second-source option alongside our Featured vendors.",
    strengths: ["20% off with code", "COA availability", "Reliable fulfillment", "US-based"],
  },
];

export default function BestPeptideVendorsPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Peptide Vendors for Research (April 2026)",
        "description": "Curated list of the best peptide vendors for research in 2026, evaluated on third-party testing, COA transparency, catalog depth, shipping reliability, and community reputation.",
        "datePublished": "2026-04-16",
        "dateModified": "2026-04-16",
        "url": "https://www.profpeptide.com/best-peptide-vendors",
        "publisher": { "@type": "Organization", "name": "Prof. Peptide", "url": "https://www.profpeptide.com" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "Best Peptide Vendors" },
        ],
      }} />

      <div className="section max-w-3xl">
        <span className="tag mb-3 inline-block">Updated April 2026</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-4">
          Best Peptide Vendors for Research (April 2026)
        </h1>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-6 max-w-xl">
          Finding a reliable peptide supplier requires more than a Google search. Quality varies dramatically across vendors &mdash; from rigorous third-party tested compounds with published COAs, to unverified products with no documentation. At Prof. Peptide, we&rsquo;ve done the research so you don&rsquo;t have to. Below is our curated list of the best peptide vendors for research in 2026, evaluated on third-party testing standards, COA transparency, catalog depth, shipping reliability, and community reputation. All codes verified as of April 2026.
        </p>

        <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed mb-8 max-w-xl">
          Looking for the full discount code list? Visit our <Link href="/coupons" className="text-[#0891b2] hover:underline">verified discount codes</Link> page.
        </p>

        <div className="flex items-center justify-center gap-2.5 mb-8 py-3.5 px-4 bg-[#0891b2]/10 border border-[#0891b2]/30 rounded-lg">
          <svg className="w-5 h-5 text-[#0891b2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-base font-bold text-[#1e2d3d] dark:text-white tracking-tight">
            All codes verified working &mdash; April 2026
          </p>
        </div>

        <div className="space-y-6">
          {vendors.map((v, idx) => (
            <div
              key={v.slug}
              className="border border-gray-200 dark:border-slate-700 rounded-xl p-6 bg-white dark:bg-[#0f172a] hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#0891b2]/10 text-[#0891b2] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100">
                    <Link href={`/coupons/${v.slug}`} className="hover:text-[#0891b2] transition-colors">
                      {v.name}
                    </Link>
                  </h2>
                </div>
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
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How We Rank Peptide Vendors</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Every vendor on this page is evaluated against a consistent rubric: third-party lab testing, published Certificates of Analysis, minimum purity standards, catalog breadth, shipping reliability, and community reputation. We update this list regularly as the market changes. See all <Link href="/coupons" className="text-[#0891b2] hover:underline">verified discount codes</Link> or browse our <Link href="/peptides" className="text-[#0891b2] hover:underline">peptide research library</Link>.
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
