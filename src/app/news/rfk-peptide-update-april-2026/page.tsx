import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "RFK\u2019s Peptide Ruling: Where Things Stand in April 2026 | Prof. Peptide",
  description:
    "RFK Jr. announced 14 peptides would return to legal compounding status \u2014 but the FDA hasn\u2019t published the official list yet. Here\u2019s what we know, what\u2019s still pending, and what it means for researchers.",
  openGraph: {
    title: "RFK\u2019s Peptide Ruling: Where Things Stand in April 2026",
    description: "RFK Jr. announced 14 peptides would return to legal compounding status \u2014 but the FDA hasn\u2019t published the official list yet.",
    url: "https://profpeptide.com/news/rfk-peptide-update-april-2026",
    images: [{ url: "https://profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "RFK\u2019s Peptide Ruling: Where Things Stand in April 2026",
    description: "RFK Jr. announced 14 peptides would return to legal compounding status \u2014 but the FDA hasn\u2019t published the official list yet.",
    images: ["https://profpeptide.com/og-image.png"],
  },
};

export default function RFKPeptideUpdatePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "RFK\u2019s Peptide Ruling: Where Things Stand in April 2026",
        "description": "RFK Jr. announced 14 peptides would return to legal compounding status \u2014 but the FDA hasn\u2019t published the official list yet.",
        "datePublished": "2026-04-12",
        "dateModified": "2026-04-12",
        "url": "https://profpeptide.com/news/rfk-peptide-update-april-2026",
        "publisher": { "@type": "Organization", "name": "Prof. Peptide", "url": "https://profpeptide.com" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "News", "item": "https://profpeptide.com/news" },
          { "@type": "ListItem", "position": 3, "name": "RFK\u2019s Peptide Ruling: Where Things Stand in April 2026" },
        ],
      }} />
      <div className="section max-w-3xl">
        <Link href="/news" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">April 12, 2026 &middot; Last updated: April 12, 2026</p>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6">
          RFK&rsquo;s Peptide Ruling: Where Things Stand in April 2026
        </h1>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <p>
            In February 2026, HHS Secretary Robert F. Kennedy Jr. made a landmark announcement on the Joe Rogan Experience: approximately 14 of the 19 peptides placed on the FDA&rsquo;s Category 2 restricted list in 2023 would be moved back to Category 1 &mdash; restoring legal access through licensed compounding pharmacies with a physician&rsquo;s prescription.
          </p>
          <p>
            It was the biggest shift in peptide regulation in years. But as of April 2026, the formal FDA reclassification has not been published. Here&rsquo;s where things actually stand.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What RFK Announced</h2>
          <p>
            On February 27, 2026, Kennedy stated that the FDA would move roughly 14 of the 19 restricted peptides back to Category 1 status &mdash; meaning compounding pharmacies could once again prepare them legally under physician prescription. The announcement generated widespread coverage and significant optimism across the peptide research community.
          </p>
          <p>
            The peptides widely expected to return to legal compounding status include BPC-157, TB-500, Thymosin Alpha-1, CJC-1295, Ipamorelin, AOD-9604, Semax, Selank, GHK-Cu, and several others that were pulled from compounding pharmacy shelves in 2023.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What Hasn&rsquo;t Happened Yet</h2>
          <p>
            The announcement was a statement of intent &mdash; not a regulatory action. For the reclassification to take effect, the FDA must formally publish an updated list of Category 1 bulk drug substances. That paperwork has not appeared.
          </p>
          <p>
            Compounding pharmacies are in a holding pattern. Many are preparing to resume peptide compounding as soon as written guidance is issued, but most are waiting for explicit FDA clearance before filling orders. Until the formal list is published, the Category 2 designations remain in effect.
          </p>
          <p>
            It is also important to understand what reclassification does and does not mean. Moving a peptide from Category 2 to Category 1 restores its eligibility for compounding under physician prescription &mdash; it does not constitute FDA approval. Compounded peptides would still require a valid prescription, still lack formal FDA approval as finished drug products, and still carry no standardized dosing guidelines.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Why the Delay Matters</h2>
          <p>
            The gray market fills the gap. Since the 2023 restrictions, researchers have largely turned to vendors selling peptides labeled &ldquo;for research use only&rdquo; &mdash; the category that Prof. Peptide&rsquo;s{" "}
            <Link href="/best-peptide-vendors" className="text-[#0891b2] hover:underline">vetted vendor network</Link>{" "}
            operates in. Demand has not decreased; it simply moved outside the compounding pharmacy system.
          </p>
          <p>
            When the formal reclassification does arrive, compounding pharmacies will need time to source pharmaceutical-grade ingredients and ramp up production. Industry groups have warned that even after a formal announcement, supply through compounding channels may take weeks or months to stabilize.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What to Watch For</h2>
          <p>
            The FDA&rsquo;s formal updated bulk drug substance list is the key document to watch. When it is published, it will confirm exactly which of the 19 peptides are moving to Category 1, the timeline for compounding pharmacies to begin preparations, and any conditions or requirements attached to the reclassification.
          </p>
          <p>
            Prof. Peptide will update this article as developments occur.
          </p>
        </div>

        <div className="mt-8 p-4 bg-[#0891b2]/10 border border-[#0891b2]/20 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-slate-300">
            Read our original breakdown: <Link href="/news/rfk-peptide-ban-2026" className="text-[#0891b2] hover:underline font-medium">RFK Jr. Announces 14 Peptides Coming Off FDA Restricted List &rarr;</Link>
          </p>
        </div>

        <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            This article is for educational and informational purposes only. Nothing constitutes medical or legal advice. Always verify current legal status with a licensed healthcare provider.
          </p>
        </div>

        <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/peptides" className="btn-primary text-sm">Explore Compound Profiles</Link>
            <Link href="/best-peptide-vendors" className="btn-outline text-sm">Best Peptide Vendors</Link>
            <Link href="/coupons" className="btn-outline text-sm">Browse Discount Codes</Link>
          </div>
        </div>
      </div>
    </>
  );
}
