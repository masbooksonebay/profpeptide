import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ContactLink from "@/components/ContactLink";

export const metadata = {
  alternates: { canonical: "/news/fda-503b-glp1-bulk-compounding-2026" },
  title: "FDA Moves to Bar Outsourcing Facilities From Bulk-Compounding Semaglutide, Tirzepatide, and Liraglutide | Prof. Peptide",
  description:
    "The agency found no clinical need to keep the three leading GLP-1 drugs available for large-scale 503B bulk compounding. A public comment window runs through June 29 — here's what the proposal does, and doesn't, cover.",
  openGraph: {
    title: "FDA Moves to Bar Outsourcing Facilities From Bulk-Compounding Semaglutide, Tirzepatide, and Liraglutide",
    description:
      "The agency found no clinical need to keep the three leading GLP-1 drugs available for large-scale 503B bulk compounding. A public comment window runs through June 29 — here's what the proposal does, and doesn't, cover.",
    url: "https://profpeptide.com/news/fda-503b-glp1-bulk-compounding-2026",
    images: [{ url: "https://profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "FDA Moves to Bar Outsourcing Facilities From Bulk-Compounding Semaglutide, Tirzepatide, and Liraglutide",
    description:
      "The agency found no clinical need to keep the three leading GLP-1 drugs available for large-scale 503B bulk compounding. A public comment window runs through June 29 — here's what the proposal does, and doesn't, cover.",
    images: ["https://profpeptide.com/og-image.png"],
  },
};

export default function FDA503BGLP1BulkCompounding2026Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "FDA Moves to Bar Outsourcing Facilities From Bulk-Compounding Semaglutide, Tirzepatide, and Liraglutide",
        "description": "The agency found no clinical need to keep the three leading GLP-1 drugs available for large-scale 503B bulk compounding. A public comment window runs through June 29 — here's what the proposal does, and doesn't, cover.",
        "datePublished": "2026-06-05T00:00:00Z",
        "dateModified": "2026-06-05T00:00:00Z",
        "url": "https://profpeptide.com/news/fda-503b-glp1-bulk-compounding-2026",
        "publisher": { "@type": "Organization", "name": "Prof. Peptide", "url": "https://profpeptide.com" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "News", "item": "https://profpeptide.com/news" },
          { "@type": "ListItem", "position": 3, "name": "FDA Moves to Bar Outsourcing Facilities From Bulk-Compounding Semaglutide, Tirzepatide, and Liraglutide" },
        ],
      }} />

      <div className="section max-w-3xl">
        <Link href="/news" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">June 5, 2026 &middot; Last updated: June 5, 2026</p>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-4">
          FDA Moves to Bar Outsourcing Facilities From Bulk-Compounding Semaglutide, Tirzepatide, and Liraglutide
        </h1>
        <p className="text-base font-medium text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
          The agency found no clinical need to keep the three leading GLP-1 drugs available for large-scale 503B bulk compounding. A public comment window runs through June 29 &mdash; here&rsquo;s what the proposal does, and doesn&rsquo;t, cover.
        </p>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <p>
            On April 30, 2026, the FDA proposed to exclude{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>,{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>, and liraglutide from the 503B bulks list, the regulatory mechanism that governs which active ingredients FDA-registered outsourcing facilities may use in large-scale compounding. After reviewing the nominations for all three, the agency said it found no demonstrated clinical need for outsourcing facilities to compound them from bulk substances. The proposal was formalized in a May 1 Federal Register notice (91 Fed. Reg. 23431).
          </p>

          <p>
            The mechanics matter. A 503B outsourcing facility can generally only compound from a bulk substance if that substance is on the 503B bulks list, or if the finished drug is on the FDA&rsquo;s shortage list. Semaglutide came off the shortage list in 2025 and tirzepatide in 2024 &mdash; so for those two, excluding them from the bulks list removes the last remaining pathway for bulk compounding. Liraglutide injection currently remains on the shortage list, so it can still be compounded by 503B facilities for now despite its absence from the bulks list.
          </p>

          <p>
            What the proposal does not touch is just as important: it applies to 503B outsourcing facilities, not 503A compounding pharmacies, and it doesn&rsquo;t change the shortage-era rules. FDA Commissioner Marty Makary framed the action around the principle that when FDA-approved drugs are available, outsourcing facilities cannot lawfully compound from bulk substances &ldquo;unless there is a clear clinical need.&rdquo;
          </p>

          <p>
            The safety backdrop is part of the agency&rsquo;s rationale &mdash; adverse-event reports tied to compounded GLP-1s, dosing errors from multi-dose vials, manufacturer litigation alleging impurities in compounded semaglutide, and warning letters to telehealth firms marketing compounded copies as equivalent to the branded drugs.
          </p>

          <p>
            For the research community, two things are worth keeping straight. This is a distinct regulatory track from the Category 2 peptide compounding question headed to the FDA&rsquo;s July advisory committee, and separate again from the broader peptide-access shifts under discussion this year. And it has no bearing on{" "}
            <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">retatrutide</Link>, which was never eligible for compounding in the first place &mdash; there&rsquo;s no approved version, so no shortage pathway ever applied.
          </p>

          <p>
            The comment window runs through June 29, 2026, after which the FDA will weigh the input before a final determination.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Sources</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>
              <a
                href="https://www.fda.gov/news-events/press-announcements/fda-proposes-exclude-semaglutide-tirzepatide-and-liraglutide-503b-bulks-list"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0891b2] hover:underline break-words"
              >
                FDA Proposes to Exclude Semaglutide, Tirzepatide, and Liraglutide on 503B Bulks List (FDA, Apr 30, 2026)
              </a>
            </li>
            <li>
              <a
                href="https://www.federalregister.gov/documents/2026/05/01/2026-08552/list-of-bulk-drug-substances-for-which-there-is-a-clinical-need-under-section-503b-of-the-federal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0891b2] hover:underline break-words"
              >
                List of Bulk Drug Substances for Which There Is a Clinical Need Under Section 503B&hellip;, 91 Fed. Reg. 23431 (May 1, 2026)
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            This article is for informational and educational purposes only and does not constitute medical or legal advice. It summarizes a proposed FDA action that is open for public comment and is not a final rule. All research compounds referenced are for laboratory use only.
          </p>
        </div>

        <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/peptides/semaglutide" className="btn-primary text-sm">Semaglutide Profile</Link>
            <Link href="/coupons" className="btn-outline text-sm">Browse Discount Codes</Link>
            <Link href="/news" className="btn-outline text-sm">More News</Link>
          </div>
        </div>
        <ContactLink pageName="FDA Moves to Bar Outsourcing Facilities From Bulk-Compounding Semaglutide, Tirzepatide, and Liraglutide" pagePath="/news/fda-503b-glp1-bulk-compounding-2026" />
      </div>
    </>
  );
}
