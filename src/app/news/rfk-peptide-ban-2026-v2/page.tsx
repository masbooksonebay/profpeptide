import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List | Prof. Peptide",
  description:
    "HHS Secretary Robert F. Kennedy Jr. announced that 14 of 19 previously restricted peptides will be moved off the FDA\u2019s \u201Cdo not compound\u201D list \u2014 the largest regulatory reversal in U.S. peptide history.",
  openGraph: {
    title: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List",
    description: "14 of 19 restricted peptides will be moved off the FDA\u2019s \u201Cdo not compound\u201D list \u2014 the largest regulatory reversal in U.S. peptide history.",
    url: "https://www.profpeptide.com/news/rfk-peptide-ban-2026-v2",
    images: [{ url: "https://www.profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List",
    description: "14 of 19 restricted peptides coming off the FDA restricted list.",
    images: ["https://www.profpeptide.com/og-image.png"],
  },
};

export default function RFKPeptideBanPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List",
        "description": "HHS Secretary Robert F. Kennedy Jr. announced that 14 of 19 previously restricted peptides will be moved off the FDA\u2019s \u201Cdo not compound\u201D list.",
        "datePublished": "2026-04-10",
        "url": "https://www.profpeptide.com/news/rfk-peptide-ban-2026-v2",
        "publisher": {
          "@type": "Organization",
          "name": "Prof. Peptide",
          "url": "https://www.profpeptide.com",
        },
        "author": {
          "@type": "Organization",
          "name": "Prof. Peptide",
        },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "News", "item": "https://www.profpeptide.com/news" },
          { "@type": "ListItem", "position": 3, "name": "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List" },
        ],
      }} />
      <div className="section max-w-3xl">
        <Link href="/news" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">April 10, 2026</p>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6">
          RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List
        </h1>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <p>
            In a landmark announcement on February 27, 2026, HHS Secretary Robert F. Kennedy Jr. stated that approximately 14 of the 19 peptides currently on the FDA&rsquo;s Category 2 &ldquo;do not compound&rdquo; list would be reclassified &mdash; making them eligible for legal compounding through licensed pharmacies once again.
          </p>
          <p>
            The announcement, made on the Joe Rogan Experience podcast, represents the single largest reversal of peptide restrictions in U.S. regulatory history.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Background: The 2023 FDA Peptide Ban</h2>
          <p>
            In late 2023, the FDA placed numerous research peptides on a restricted compounding list, citing safety concerns and lack of clinical trial data. The move affected some of the most widely researched compounds in the longevity, recovery, and metabolic health space &mdash; including <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>, <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>, and others.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What RFK Jr. Announced</h2>
          <p>
            Kennedy indicated that approximately 14 of the 19 restricted peptides would move from Category 2 to Category 1, restoring their eligibility for licensed compounding pharmacies. Compounds expected to be affected include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li><Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link></li>
            <li><Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link></li>
            <li><Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link></li>
            <li><Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link></li>
            <li><Link href="/peptides/thymosin-alpha-1" className="text-[#0891b2] hover:underline">Thymosin Alpha-1</Link></li>
            <li><Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link></li>
            <li><Link href="/peptides/tesamorelin" className="text-[#0891b2] hover:underline">Tesamorelin</Link></li>
            <li><Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link></li>
            <li><Link href="/peptides/selank" className="text-[#0891b2] hover:underline">Selank</Link></li>
            <li><Link href="/peptides/semax" className="text-[#0891b2] hover:underline">Semax</Link></li>
          </ul>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Important Caveats</h2>
          <p>
            As of publication, no formal FDA rule change has been published in the Federal Register. Kennedy&rsquo;s announcement was made through a media appearance, not an official regulatory filing. Researchers should continue to monitor FDA official communications for formal guidance.
          </p>
        </div>

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            This article is for educational and informational purposes only. Nothing constitutes medical or legal advice. Always verify current legal status with a licensed healthcare provider.
          </p>
        </div>

        <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/peptides" className="btn-primary text-sm">Explore Compound Profiles</Link>
            <Link href="/app" className="btn-outline text-sm">Download the App</Link>
            <Link href="/coupons" className="btn-outline text-sm">Browse Discount Codes</Link>
          </div>
        </div>
      </div>
    </>
  );
}
