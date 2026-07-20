import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/news/amgen-maritide-glp1-gip-explainer-2026",
  title: "What Is MariTide? Amgen's Once-Monthly GLP-1/GIP Drug Heads Into a Six-Study Phase 3 Program | Prof. Peptide",
  description:
    "A peptide-antibody conjugate that activates GLP-1 while blocking GIP — the mirror image of tirzepatide — MariTide is now in an expanding Phase 3 program, including a trial switching patients off weekly GLP-1s.",
  ogTitle: "What Is MariTide? Amgen's Once-Monthly GLP-1/GIP Drug Heads Into a Six-Study Phase 3 Program",
  ogDescription:
    "A peptide-antibody conjugate that activates GLP-1 while blocking GIP — the mirror image of tirzepatide — MariTide is now in an expanding Phase 3 program, including a trial switching patients off weekly GLP-1s.",
  ogImage: { url: "https://profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" },
});

export default function AmgenMariTideGLP1GIPExplainer2026Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "What Is MariTide? Amgen's Once-Monthly GLP-1/GIP Drug Heads Into a Six-Study Phase 3 Program",
        "description": "A peptide-antibody conjugate that activates GLP-1 while blocking GIP — the mirror image of tirzepatide — MariTide is now in an expanding Phase 3 program, including a trial switching patients off weekly GLP-1s.",
        "datePublished": "2026-06-05T00:00:00Z",
        "dateModified": "2026-06-05T00:00:00Z",
        "url": "https://profpeptide.com/news/amgen-maritide-glp1-gip-explainer-2026",
        "publisher": { "@type": "Organization", "name": "Prof. Peptide", "url": "https://profpeptide.com" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "News", "item": "https://profpeptide.com/news" },
          { "@type": "ListItem", "position": 3, "name": "What Is MariTide? Amgen's Once-Monthly GLP-1/GIP Drug Heads Into a Six-Study Phase 3 Program" },
        ],
      }} />

      <div className="section max-w-3xl">
        <Link href="/news" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">June 5, 2026 &middot; Last updated: June 5, 2026</p>
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-4">
          What Is MariTide? Amgen&rsquo;s Once-Monthly GLP-1/GIP Drug Heads Into a Six-Study Phase 3 Program
        </h1>
        <p className="text-base font-medium text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
          A peptide-antibody conjugate that activates GLP-1 while blocking GIP &mdash; the mirror image of tirzepatide &mdash; MariTide is now in an expanding Phase 3 program, including a trial switching patients off weekly GLP-1s.
        </p>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <p>
            MariTide (maridebart cafraglutide, formerly AMG 133) is Amgen&rsquo;s entry into the obesity-drug race, and it&rsquo;s built differently from the Wegovy/Zepbound class. It&rsquo;s a long-acting peptide-antibody conjugate &mdash; two GLP-1 peptide analogs attached to a monoclonal antibody &mdash; given subcutaneously once monthly or less frequently, versus the weekly injections of{" "}
            <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">semaglutide</Link>{" "}
            and{" "}
            <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">tirzepatide</Link>.
          </p>

          <p>
            The mechanistic twist is the headline. MariTide activates the GLP-1 receptor (like the existing drugs) but antagonizes the GIP receptor &mdash; the opposite of tirzepatide, which activates GIP. Two opposing approaches to the same receptor, both producing weight loss, which is part of why the drug has drawn scientific attention.
          </p>

          <p>
            In its Phase 2 trial (NCT05669599, published in the New England Journal of Medicine), MariTide produced mean weight reductions of up to roughly 20% in participants with obesity without type 2 diabetes, and up to about 17% in those with both obesity and diabetes, over 52 weeks &mdash; and notably, the curve had not plateaued by the end of the study.
          </p>

          <p>
            The news peg: on its April 30, 2026 earnings call, Amgen detailed an expanding Phase 3 program. The company has initiated six global Phase 3 studies spanning four areas &mdash; chronic weight management, cardiovascular outcomes, heart failure, and obstructive sleep apnea &mdash; and added a study evaluating patients switching from weekly GLP-1 therapies, a direct competitive move against the established players.
          </p>

          <p>
            MariTide is not FDA-approved; it remains investigational, with access limited to its trials. But between the monthly dosing, the distinct GIP-antagonist mechanism, and a Phase 3 footprint reaching well beyond weight loss, it&rsquo;s one of the more closely watched peptide-based assets in the pipeline.
          </p>

          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">Sources</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>
              <a
                href="https://investors.amgen.com/news-releases/news-release-details/results-amgens-phase-2-obesity-study-monthly-maritide-presented"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A759F] hover:underline break-words"
              >
                Results From Amgen&rsquo;s Phase 2 Obesity Study of Monthly MariTide Presented at the ADA 85th Scientific Sessions (Amgen)
              </a>
            </li>
            <li>
              <a
                href="https://doi.org/10.1056/NEJMoa2504214"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A759F] hover:underline break-words"
              >
                Jastreboff AM, et al., &ldquo;Once-Monthly Maridebart Cafraglutide for the Treatment of Obesity &mdash; A Phase 2 Trial,&rdquo; New England Journal of Medicine
              </a>
            </li>
            <li>Amgen Inc., Form DEF</li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            This article is for informational and educational purposes only and does not constitute medical advice. MariTide (maridebart cafraglutide) remains an investigational compound under active Phase 3 evaluation and is not FDA-approved for any indication. All research compounds referenced are for laboratory use only.
          </p>
        </div>

        <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-3">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/peptides/tirzepatide" className="btn-primary text-sm">Tirzepatide Profile</Link>
            <Link href="/coupons" className="btn-outline text-sm">Browse Discount Codes</Link>
            <Link href="/news" className="btn-outline text-sm">More News</Link>
          </div>
        </div>
        <ContactLink pageName="What Is MariTide? Amgen's Once-Monthly GLP-1/GIP Drug Heads Into a Six-Study Phase 3 Program" pagePath="/news/amgen-maritide-glp1-gip-explainer-2026" />
      </div>
    </>
  );
}
