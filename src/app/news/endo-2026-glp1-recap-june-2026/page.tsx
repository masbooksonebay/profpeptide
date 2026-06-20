import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/news/endo-2026-glp1-recap-june-2026",
  title: "ENDO 2026 Recap — GLP-1 and Peptide Readouts from the Endocrine Society Meeting | Prof. Peptide",
  description:
    "Recap of ENDO 2026 (Chicago, June 13–16): GLP-1s and physical activity, male fertility data, a CagriSema meta-analysis, real-world adherence, and Entera Bio's preclinical oral peptides.",
  ogTitle: "ENDO 2026 Recap — GLP-1 and Peptide Readouts from the Endocrine Society Meeting",
  ogDescription:
    "Recap of ENDO 2026 (Chicago, June 13–16): GLP-1s and physical activity, male fertility data, a CagriSema meta-analysis, real-world adherence, and Entera Bio's preclinical oral peptides.",
  ogImage: { url: "https://profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" },
});

export default function Endo2026Glp1RecapJune2026Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "ENDO 2026 Recap — GLP-1 and Peptide Readouts from the Endocrine Society Meeting",
        "description": "Recap of ENDO 2026 (Chicago, June 13–16): GLP-1s and physical activity, male fertility data, a CagriSema meta-analysis, real-world adherence, and Entera Bio's preclinical oral peptides.",
        "datePublished": "2026-06-16T00:00:00Z",
        "dateModified": "2026-06-16T00:00:00Z",
        "url": "https://profpeptide.com/news/endo-2026-glp1-recap-june-2026",
        "publisher": { "@type": "Organization", "name": "Prof. Peptide", "url": "https://profpeptide.com" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "News", "item": "https://profpeptide.com/news" },
          { "@type": "ListItem", "position": 3, "name": "ENDO 2026 Recap — GLP-1 and Peptide Readouts from the Endocrine Society Meeting" },
        ],
      }} />

      <div className="section max-w-3xl">
        <Link href="/news" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">June 16, 2026 &middot; Last updated: June 16, 2026</p>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6">
          ENDO 2026 Recap &mdash; GLP-1 and Peptide Readouts from the Endocrine Society Meeting
        </h1>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <p>
            ENDO 2026, the Endocrine Society&rsquo;s annual meeting, ran June 13&ndash;16, 2026, in Chicago, Illinois (<a href="https://endo2026.endocrine.org/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">ENDO 2026 program</a>). Several of the most discussed presentations centered on GLP-1 receptor agonists and next-generation metabolic peptides &mdash; spanning behavior, safety, combination efficacy, real-world adherence, and early-stage oral formulations. A note before the readouts: most of the items below are <strong>conference presentations, posters, and abstracts</strong>, many of which are <strong>not yet peer-reviewed or published in full</strong>. We label each item&rsquo;s evidence stage and report numbers exactly as the primary source states them.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Physical Activity Fell After Starting a GLP-1 &mdash; the Muscle-Preservation Angle</h2>
          <p>
            A retrospective cohort study found that adults with obesity moved <em>less</em>, not more, after starting a GLP-1 medication such as{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link> or{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>. The team, led by Sajana Maharjan, M.D., of HSHS St. John&rsquo;s Hospital (Springfield, Illinois), used the NIH&rsquo;s All of Us Research Program, which links electronic health records with participants&rsquo; Fitbit data.
          </p>
          <p>
            Of 1,950 adults with obesity who started a GLP-1, 753 had enough wearable-device data to analyze (78.6% female; mean age 52.7 years). Over the pre-vs-post comparison:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>Mean daily steps fell from 5,047 to 4,487 &mdash; a decline of 560 steps per day</li>
            <li>Moderate-to-vigorous physical activity fell from about 28 to 22 minutes per day &mdash; a decline of roughly 6 minutes per day</li>
          </ul>
          <p>
            Why it matters: GLP-1 therapy reduces lean (muscle) mass alongside fat, so a drop in activity compounds the muscle-preservation challenge rather than offsetting it. As Maharjan put it, &ldquo;While many assume that weight loss leads naturally to increased physical activity, our study suggests otherwise.&rdquo;
          </p>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            <strong>Evidence stage:</strong> Observational, retrospective pre-post cohort &mdash; shows an <em>association</em>, not causation, and cannot prove the medication caused the activity drop. Presented at ENDO 2026; not yet peer-reviewed. Source:{" "}
            <a href="https://www.endocrine.org/news-and-advocacy/news-room/2026/maharjan-press-release-endo-2026" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">Endocrine Society press release</a>.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">GLP-1s and Male Fertility &mdash; No Long-Term Harm, Possible Benefit</h2>
          <p>
            A systematic review of randomized controlled trials concluded that GLP-1s do not harm male hormones, sexual function, or sperm quality after longer-term use &mdash; and may help in men with obesity-related low testosterone. The work, led by Pratibha Natesh, M.B.B.S., of Warwick Medical School and University Hospitals Coventry and Warwickshire (UK), screened published RCTs comparing GLP-1s with another treatment or placebo in men aged 18&ndash;65.
          </p>
          <p>
            Five trials met the eligibility criteria. Reported findings:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>No negative impact on hormones, sexual function, or sperm quality across the trials</li>
            <li>Liraglutide (16 weeks): increases in testosterone and related hormones</li>
            <li>Semaglutide (24 weeks): testosterone and hormone levels stayed stable</li>
            <li>Semaglutide: improvements in sperm shape and cholesterol</li>
          </ul>
          <p>
            Natesh framed it as support for &ldquo;a shift away from prescribing testosterone replacement in men with obesity and low testosterone and toward treating the underlying cause &mdash; excess weight and poor metabolic health.&rdquo;
          </p>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            <strong>Evidence stage:</strong> Systematic review of existing RCTs &mdash; only five trials, small and with varying results; the authors note benefits are likely <em>indirect</em> (via weight loss) and that GLP-1s were not evaluated as treatments for male infertility. Larger, better-designed studies are still needed. Presented at ENDO 2026. Source:{" "}
            <a href="https://www.endocrine.org/news-and-advocacy/news-room/2026/natesh-press-release-endo-2026" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">Endocrine Society press release</a>.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">CagriSema Meta-Analysis (Abstract SUN-726)</h2>
          <p>
            A systematic review and meta-analysis pooled randomized trial data on{" "}
            <Link href="/peptides/cagrisema" className="text-[#0891b2] hover:underline">CagriSema</Link> &mdash; the once-weekly combination of the amylin analog{" "}
            <Link href="/peptides/cagrilintide" className="text-[#0891b2] hover:underline">cagrilintide</Link> and semaglutide &mdash; for obesity, evaluating both efficacy and safety. The poster (abstract SUN-726, Burkhardt da Silveira et al., Northwestern Medicine McHenry Hospital / Rosalind Franklin University) reported that, across the pooled RCTs, CagriSema produced greater weight loss than semaglutide alone, with a tolerability profile consistent with the GLP-1/amylin class (predominantly gastrointestinal side effects).
          </p>
          <p>
            For the underlying trial magnitudes, the pivotal REDEFINE program data were published in the{" "}
            <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2502081" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">New England Journal of Medicine</a>. We are not quoting a single pooled effect size here because we could not confirm SUN-726&rsquo;s specific pooled numbers against a primary source.
          </p>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            <strong>Evidence stage:</strong> Meta-analysis of <em>existing</em> randomized controlled trials &mdash; a secondary, pooled analysis, not new trial data. Presented as a poster at ENDO 2026. Source:{" "}
            <a href="https://endo2026.endocrine.org/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">ENDO 2026 abstract program (SUN-726)</a>.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Real-World Adherence &mdash; GLP-1 Use Is More Start-and-Stop Than Assumed</h2>
          <p>
            One of the larger real-world readouts came from Sainikhil Sontha, M.S., of Boston University School of Public Health, using Komodo Health U.S. claims data (January 2019&ndash;June 2025) on more than 60,000 adults aged 18&ndash;64 with type 2 diabetes and a BMI of 25 kg/m&sup2; or higher who were taking liraglutide, semaglutide, or tirzepatide.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>Of those who stopped, 41.5% restarted within one year, and 58% restarted within two years</li>
            <li>Patients on tirzepatide were 41% less likely to discontinue than those on liraglutide</li>
            <li>Patients on semaglutide were 28% less likely to discontinue than those on liraglutide</li>
          </ul>
          <p>
            Sontha&rsquo;s takeaway was that GLP-1 &ldquo;use is more start-and-stop than most people assumed,&rdquo; and that stopping early may mean &ldquo;missed opportunities&rdquo; to prevent downstream cardiovascular and kidney complications.
          </p>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            <strong>Evidence stage:</strong> Retrospective insurance-claims cohort &mdash; an <em>association</em> in administrative data, not a controlled trial. Presented at ENDO 2026. Source:{" "}
            <a href="https://www.endocrine.org/news-and-advocacy/news-room/2026/sontha-press-release-endo-2026" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">Endocrine Society press release</a>.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Entera Bio &mdash; Preclinical Oral Peptides (EB618 and EB612)</h2>
          <p>
            Entera Bio brought early-stage data on two oral peptide tablets built on its oral-delivery platform, co-developed with OPKO Health:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li><strong>EB618</strong> &mdash; a first-in-class oral GLP-1/glucagon dual agonist (oxyntomodulin) for obesity. Entera reported pharmacokinetic data for the oral tablet in non-human primates, describing dose-proportional pharmacokinetics and an effect on blood glucose.</li>
            <li><strong>EB612</strong> &mdash; a first-in-class oral long-acting PTH(1-34) tablet for hypoparathyroidism, reported to show robust bioavailability and sustained increases in calcium across three preclinical models, with an IND filing expected in late 2026.</li>
          </ul>
          <p>
            Entera separately had single-tablet data for EB613 (its oral PTH(1-34) anabolic for osteoporosis) selected as a late-breaking oral presentation.
          </p>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            <strong>Evidence stage:</strong> <em>Preclinical</em> &mdash; the EB618 and EB612 data are from animal/non-human-primate models, the earliest research stage, with no human efficacy data for these programs yet. Sources: Entera Bio{" "}
            <a href="https://www.globenewswire.com/news-release/2026/05/08/3291323/0/en/Entera-Announces-First-Quarter-2026-Financial-Results-and-Updates-Across-its-Oral-Peptide-Programs.html" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">Q1 2026 update</a>{" "}
            and{" "}
            <a href="https://www.manilatimes.net/2026/06/16/tmt-newswire/globenewswire/entera-reports-robust-preclinical-data-for-eb612-oral-la-pth1-34-for-hypoparathyroidism-and-eb618-oral-glp-1glucagon-for-obesity-at-endo-2026/2366598" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">ENDO 2026 data release (GlobeNewswire)</a>.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What It Means</h2>
          <p>
            <strong>The conversation is shifting from &ldquo;how much weight&rdquo; to &ldquo;how well.&rdquo;</strong> The headline efficacy questions are largely settled for this class; ENDO 2026&rsquo;s most useful signals were about <em>quality</em> of weight loss (muscle preservation, the activity decline), safety reassurance (male fertility), and durability (adherence and restart patterns).
          </p>
          <p>
            <strong>Combination and triple-agonist momentum continues.</strong> The CagriSema meta-analysis adds pooled context to the amylin-plus-GLP-1 approach, while the broader field keeps moving toward multi-receptor agonists &mdash; see our coverage of{" "}
            <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">retatrutide</Link>&rsquo;s{" "}
            <Link href="/news/retatrutide-triumph-1-phase-3-results" className="text-[#0891b2] hover:underline">TRIUMPH-1 Phase 3 results</Link>.
          </p>
          <p>
            <strong>Oral formulations are the next frontier &mdash; at very different maturities.</strong> The oral GLP-1 readouts from{" "}
            <Link href="/news/eco2026-oral-glp1-recap-may-2026" className="text-[#0891b2] hover:underline">ECO2026</Link> were clinical-stage; Entera&rsquo;s oral peptides are still preclinical. Both point the same direction, but they are not at the same evidence level.
          </p>
          <p>
            <strong>Access and policy remain the backdrop.</strong> Much of the U.S. debate this year has been regulatory rather than clinical &mdash; for example, the{" "}
            <Link href="/news/fda-503b-glp1-bulk-compounding-2026" className="text-[#0891b2] hover:underline">FDA&rsquo;s move on 503B bulk-compounding of GLP-1s</Link>.
          </p>
          <p>
            As always with conference data: abstracts and posters are early disclosures. Treat the findings above as provisional until they appear as peer-reviewed, full-length publications.
          </p>
        </div>

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            For research and educational purposes only. This article reports on publicly disclosed conference presentations, abstracts, and pharmaceutical company announcements &mdash; several not yet peer-reviewed. Nothing in this article constitutes medical advice, and no dosing or usage recommendations are made or implied. Always consult a qualified healthcare provider regarding any medical decision.
          </p>
        </div>

        <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/peptides/semaglutide" className="btn-primary text-sm">Semaglutide Profile</Link>
            <Link href="/peptides/cagrisema" className="btn-outline text-sm">CagriSema Profile</Link>
            <Link href="/news" className="btn-outline text-sm">More News</Link>
          </div>
        </div>
        <ContactLink pageName="ENDO 2026 Recap — GLP-1 and Peptide Readouts from the Endocrine Society Meeting" pagePath="/news/endo-2026-glp1-recap-june-2026" />
      </div>
    </>
  );
}
