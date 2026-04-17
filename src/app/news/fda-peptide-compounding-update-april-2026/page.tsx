import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "FDA Moves to Restore Peptide Access — What Researchers Need to Know (April 2026) | Prof. Peptide",
  description:
    "The FDA posted a Federal Register notice in April 2026 considering lifting restrictions on seven Category 2 peptides. Here\u2019s what researchers need to know about the compounding pharmacy framework and what happens next.",
  openGraph: {
    title: "FDA Moves to Restore Peptide Access \u2014 What Researchers Need to Know (April 2026)",
    description:
      "The FDA posted a Federal Register notice in April 2026 considering lifting restrictions on seven Category 2 peptides.",
    url: "https://profpeptide.com/news/fda-peptide-compounding-update-april-2026",
    images: [{ url: "https://profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "FDA Moves to Restore Peptide Access \u2014 What Researchers Need to Know (April 2026)",
    description:
      "The FDA posted a Federal Register notice in April 2026 considering lifting restrictions on seven Category 2 peptides.",
    images: ["https://profpeptide.com/og-image.png"],
  },
};

export default function FDAPeptideCompoundingUpdatePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "FDA Moves to Restore Access to Key Peptides \u2014 Here\u2019s What It Means",
        "description": "The FDA posted a Federal Register notice in April 2026 considering lifting restrictions on seven Category 2 peptides. What researchers need to know.",
        "datePublished": "2026-04-16",
        "dateModified": "2026-04-16",
        "url": "https://profpeptide.com/news/fda-peptide-compounding-update-april-2026",
        "publisher": { "@type": "Organization", "name": "Prof. Peptide", "url": "https://profpeptide.com" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "News", "item": "https://profpeptide.com/news" },
          { "@type": "ListItem", "position": 3, "name": "FDA Moves to Restore Access to Key Peptides" },
        ],
      }} />

      <div className="section max-w-3xl">
        <Link href="/news" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">April 16, 2026 &middot; Last updated: April 16, 2026</p>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6">
          FDA Moves to Restore Access to Key Peptides &mdash; Here&rsquo;s What It Means
        </h1>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <p>
            If you&rsquo;ve been following the peptide research space over the past few years, you know the regulatory landscape has been anything but stable. But as of April 2026, there&rsquo;s real reason for optimism &mdash; and it&rsquo;s worth breaking down exactly what&rsquo;s happening and what it means for the research community.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What the FDA Announced</h2>
          <p>
            On April 15, 2026, the FDA posted a notice in the Federal Register indicating it is considering lifting restrictions on certain peptide injections currently classified as Category 2 compounds &mdash; meaning they&rsquo;ve been restricted from compounding pharmacies since 2023. The FDA&rsquo;s expert advisory panel on pharmacy compounding is scheduled to meet in late July 2026 to formally discuss the approval of seven peptides for compounding.
          </p>
          <p>
            This follows a broader policy shift that began in early 2026 when HHS Secretary Robert F. Kennedy Jr. &mdash; a self-described &ldquo;big fan&rdquo; of peptide therapies &mdash; announced plans to reverse a Biden-era decision that moved 19 peptides to Category 2 in 2023.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">A Quick Refresher on the Category System</h2>
          <p>
            The FDA uses a two-tier system for evaluating compounds that compounding pharmacies want to produce:
          </p>
          <p>
            <strong>Category 1</strong> &mdash; The compound is considered safe enough for compounding while still under FDA review. Compounding pharmacies can legally produce it with a valid prescription.
          </p>
          <p>
            <strong>Category 2</strong> &mdash; The FDA has flagged significant safety concerns. Compounding pharmacies cannot produce it under the standard 503A framework.
          </p>
          <p>
            In 2023, 19 widely-used research peptides were moved to Category 2, effectively removing them from legal compounding access. The current FDA action is the first formal step toward reversing that decision.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Which Peptides Are Affected?</h2>
          <p>
            The FDA&rsquo;s current focus is on seven peptides being considered for compounding, targeting conditions including ulcerative colitis, wound healing, obesity, and insomnia. The broader RFK Jr. initiative has focused on 14 of the original 19 restricted peptides &mdash; including compounds like BPC-157, TB-500, CJC-1295, Ipamorelin, and Semax. As of April 2026, five of the original 19 peptides have already been removed from Category 2.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What This Means for the Research Community</h2>
          <p>
            This is not a done deal &mdash; yet. The July advisory panel meeting is a necessary step, not a final ruling. Formal rule changes could take until 2027 or beyond. But the direction is clear &mdash; between the RFK Jr. announcement in February, the five compounds already removed from Category 2, and now this Federal Register notice, the regulatory trajectory is unmistakably moving toward broader access.
          </p>
          <p>
            Quality still matters. Regardless of regulatory status, researchers should always source compounds from vendors with verified{" "}
            <Link href="/best-peptide-vendors" className="text-[#0891b2] hover:underline">third-party testing</Link>{" "}
            and published Certificates of Analysis. Regulatory change doesn&rsquo;t change the importance of compound quality and documentation.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Our Take</h2>
          <p>
            At Prof. Peptide, we&rsquo;ve always believed that access to rigorously tested, transparently documented research compounds is important for the scientific community. This FDA development is a meaningful step in the right direction &mdash; one that acknowledges years of research and legitimate scientific interest in these compounds. We&rsquo;ll continue tracking every regulatory development and updating our{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">vendor recommendations</Link>{" "}
            accordingly.
          </p>
        </div>

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            This article is for informational purposes only and does not constitute medical or legal advice. All compounds referenced are research chemicals intended for laboratory use only.
          </p>
        </div>

        <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/best-peptide-vendors" className="btn-primary text-sm">Best Peptide Vendors</Link>
            <Link href="/coupons" className="btn-outline text-sm">Discount Codes</Link>
            <Link href="/news" className="btn-outline text-sm">More News</Link>
          </div>
        </div>
      </div>
    </>
  );
}
