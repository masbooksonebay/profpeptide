import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import ContactLink from "@/components/ContactLink";
import ArticleCorrection from "@/components/ArticleCorrection";
import BackLink from "@/components/BackLink";

export const metadata = {
  alternates: { canonical: "/news/rfk-peptide-ban-2026" },
  title: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List | Prof. Peptide",
  description:
    "HHS Secretary Robert F. Kennedy Jr. announced an intent to move about 14 of 19 restricted peptides off the FDA\u2019s Category 2 \u201Cdo not compound\u201D list \u2014 but removal from Category 2 is not placement in Category 1, and no peptide is yet confirmed legally compoundable.",
  openGraph: {
    title: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List",
    description: "RFK Jr. announced an intent to move about 14 of 19 peptides off the FDA\u2019s Category 2 \u201Cdo not compound\u201D list \u2014 but removal from Category 2 is not Category 1 placement, and none is yet confirmed compoundable.",
    url: "https://profpeptide.com/news/rfk-peptide-ban-2026",
    // No images here: the file-based opengraph-image.tsx provides the per-article card.
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List",
    description: "RFK Jr. announced an intent to move about 14 of 19 peptides off the FDA’s Category 2 list — removal from Category 2 is not Category 1 placement.",
    // No images here: the file-based twitter-image.tsx provides the per-article card.
  },
};

export default function RFKPeptideBanPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List",
        "description": "HHS Secretary Robert F. Kennedy Jr. announced an intent to move about 14 of 19 restricted peptides off the FDA\u2019s Category 2 \u201Cdo not compound\u201D list; removal from Category 2 is not placement in Category 1, and no peptide is yet confirmed compoundable.",
        "datePublished": "2026-04-10",
        "dateModified": "2026-08-20",
        "url": "https://profpeptide.com/news/rfk-peptide-ban-2026",
        "publisher": { "@type": "Organization", "@id": "https://profpeptide.com/#organization", "name": "Prof. Peptide", "url": "https://profpeptide.com", "logo": "https://profpeptide.com/icon.png" },
        "author": {
          "@type": "Organization",
          "name": "Prof. Peptide",
        },
      }} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "News", path: "/news" }, { name: "RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List" }])} />
      <div className="section max-w-3xl">
        <BackLink href="/news">Back to News</BackLink>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">April 10, 2026</p>
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-6">
          RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List
        </h1>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <ArticleCorrection date="August 20, 2026">
            An earlier version of this article described Secretary Kennedy&rsquo;s February 27 announcement as a completed reclassification that made these peptides eligible for compounding. That was inaccurate. Removing a peptide from the FDA&rsquo;s Category 2 &ldquo;do not compound&rdquo; list is not the same as adding it to Category 1 &mdash; the list of bulk substances a pharmacy may actually compound. The FDA has published no such Category 1 addition, and none of the 19 peptides is confirmed legally compoundable. The announcement remains a statement of intent, not a regulatory action; the article has been corrected to reflect that distinction.
          </ArticleCorrection>
          <p>
            In an announcement on February 27, 2026, HHS Secretary Robert F. Kennedy Jr. stated that approximately 14 of the 19 peptides currently on the FDA&rsquo;s Category 2 &ldquo;do not compound&rdquo; list would be removed from that list. Removing a peptide from Category 2 is not the same as adding it to Category 1 &mdash; the list of bulk substances a compounding pharmacy may actually prepare. A peptide becomes eligible for compounding only once the FDA formally adds it to Category 1, and to date none of these compounds has been added.
          </p>
          <p>
            The announcement, made on the Joe Rogan Experience podcast, would mark a significant shift in peptide compounding policy &mdash; but it was a statement of intent, not a completed regulatory action, and as of this writing no peptide has changed compounding status.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">Background: The 2023 FDA Peptide Ban</h2>
          <p>
            In late 2023, the FDA placed numerous research peptides on a restricted compounding list, citing safety concerns and lack of clinical trial data. The move affected some of the most widely researched compounds in the longevity, recovery, and metabolic health space &mdash; including <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>, <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>, <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>, and others.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">What RFK Jr. Announced</h2>
          <p>
            Kennedy indicated that approximately 14 of the 19 restricted peptides would be removed from Category 2. He framed this as restoring their eligibility for licensed compounding &mdash; but that eligibility depends on the FDA formally adding each compound to the Category 1 bulk-substances list, and to date none of the 19 has been added to Category 1. Compounds named in the announcement include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li><Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link></li>
            <li><Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link></li>
            <li><Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link></li>
            <li><Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link></li>
            <li><Link href="/peptides/thymosin-alpha-1" className="text-[#3A759F] hover:underline">Thymosin Alpha-1</Link></li>
            <li><Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link></li>
            <li><Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link></li>
            <li><Link href="/peptides/epitalon" className="text-[#3A759F] hover:underline">Epitalon</Link></li>
            <li><Link href="/peptides/selank" className="text-[#3A759F] hover:underline">Selank</Link></li>
            <li><Link href="/peptides/semax" className="text-[#3A759F] hover:underline">Semax</Link></li>
          </ul>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">Important Caveats</h2>
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
          <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-3">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/peptides" className="btn-primary text-sm">Explore Compound Profiles</Link>
            <Link href="/app" className="btn-outline text-sm">Download the App</Link>
            <Link href="/coupons" className="btn-outline text-sm">Browse Discount Codes</Link>
          </div>
        </div>
      <ContactLink pageName="RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List" pagePath="/news/rfk-peptide-ban-2026" />
      </div>
    </>
  );
}
