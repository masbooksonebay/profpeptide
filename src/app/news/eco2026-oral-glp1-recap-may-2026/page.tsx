import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/news/eco2026-oral-glp1-recap-may-2026",
  title: "ECO2026 Recap — Oral GLP-1 Data from Novo, Lilly, and Viking | Prof. Peptide",
  description:
    "Recap of ECO2026 oral GLP-1 readouts from Novo Nordisk, Eli Lilly, and Viking Therapeutics — Wegovy pill, Foundayo, and VK2735.",
  ogTitle: "ECO2026 Recap — Oral GLP-1 Data from Novo, Lilly, and Viking",
  ogDescription:
    "Recap of ECO2026 oral GLP-1 readouts from Novo Nordisk, Eli Lilly, and Viking Therapeutics — Wegovy pill, Foundayo, and VK2735.",
  ogImage: { url: "https://profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" },
});

export default function Eco2026OralGlp1RecapMay2026Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "ECO2026 Recap — Oral GLP-1 Data from Novo, Lilly, and Viking",
        "description": "Recap of ECO2026 oral GLP-1 readouts from Novo Nordisk, Eli Lilly, and Viking Therapeutics — Wegovy pill, Foundayo, and VK2735.",
        "datePublished": "2026-05-17T00:00:00Z",
        "dateModified": "2026-05-17T00:00:00Z",
        "url": "https://profpeptide.com/news/eco2026-oral-glp1-recap-may-2026",
        "publisher": { "@type": "Organization", "name": "Prof. Peptide", "url": "https://profpeptide.com" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "News", "item": "https://profpeptide.com/news" },
          { "@type": "ListItem", "position": 3, "name": "ECO2026 Recap — Oral GLP-1 Data from Novo, Lilly, and Viking" },
        ],
      }} />

      <div className="section max-w-3xl">
        <Link href="/news" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">May 17, 2026 &middot; Last updated: May 17, 2026</p>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6">
          ECO2026 Recap &mdash; Oral GLP-1 Data from Novo, Lilly, and Viking
        </h1>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <p>
            The European Congress on Obesity (ECO2026) ran May 12-15, 2026, in Istanbul, T&uuml;rkiye. Three companies &mdash; Novo Nordisk, Eli Lilly, and Viking Therapeutics &mdash; presented new data on oral GLP-1 receptor agonists, advancing what has historically been an injectable-dominated category. Here&rsquo;s a breakdown of what each company showed and how the data fits into the broader landscape.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Novo Nordisk &mdash; Wegovy Pill (Oral Semaglutide 25mg)</h2>
          <p>
            Novo Nordisk presented sub-analyses from its Phase 3 OASIS 4 trial on May 13. The headline finding centered on early responders &mdash; patients who achieved at least 10% weight loss by week 16 of treatment.
          </p>
          <p>
            Key results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>28.8% of patients met the early responder criteria</li>
            <li>Early responders had achieved 13.2% weight loss by week 16</li>
            <li>By week 64 (end of trial), early responders achieved 21.6% weight loss</li>
            <li>Non-early-responders still achieved 11.5% weight loss at week 64</li>
          </ul>
          <p>
            Novo also presented two additional studies:
          </p>
          <p>
            <strong>ORION</strong> &mdash; an indirect treatment comparison study comparing Wegovy pill to Eli Lilly&rsquo;s orforglipron (brand name Foundayo). Per Novo, Wegovy pill demonstrated greater weight loss and lower odds of treatment discontinuation due to side effects. Indirect comparisons carry methodological limitations relative to head-to-head trials, but the data provides a useful early benchmark while a true head-to-head study remains absent from the category.
          </p>
          <p>
            <strong>OPTIC</strong> &mdash; a late-breaking patient preference study examining what patients value in obesity medications.
          </p>
          <p>
            Wegovy pill is currently the only FDA-approved oral GLP-1 receptor agonist for weight management.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Eli Lilly &mdash; ATTAIN-MAINTAIN and SURMOUNT-MAINTAIN</h2>
          <p>
            Lilly&rsquo;s ECO2026 presentations focused on a different clinical question: can oral GLP-1 drugs maintain weight loss after a patient stops taking injectable therapy?
          </p>
          <p>
            <strong>ATTAIN-MAINTAIN</strong> enrolled patients who had completed an initial weight loss course on injectable Wegovy (semaglutide) or Zepbound (tirzepatide). Participants were then switched to either:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>Foundayo (orforglipron &mdash; Lilly&rsquo;s oral GLP-1)</li>
            <li>Low-dose Zepbound (maintenance injectable)</li>
          </ul>
          <p>
            Over 52 weeks of maintenance therapy:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>Patients on low-dose Zepbound regained an average of just 0.9 kg</li>
            <li>Patients on Foundayo regained an average of 5.0 kg</li>
          </ul>
          <p>
            <strong>SURMOUNT-MAINTAIN</strong> showed a similar pattern &mdash; most of the weight loss achieved on full-dose Zepbound was retained when patients moved to the low-dose maintenance formulation.
          </p>
          <p>
            The maintenance angle is clinically significant. One of the well-documented challenges of GLP-1 therapy is weight regain after discontinuation. These trials suggest oral GLP-1s could play a role as long-term maintenance drugs following an initial course of injectable treatment.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Viking Therapeutics &mdash; VK2735 Phase 2</h2>
          <p>
            Viking Therapeutics presented additional data from its Phase 2 VENTURE-Oral Dosing trial on May 12. VK2735 is a dual GLP-1/GIP receptor agonist &mdash; the same receptor combination as tirzepatide &mdash; with both subcutaneous and oral formulations in development.
          </p>
          <p>
            The oral tablet formulation places Viking in direct competition with Novo&rsquo;s Wegovy pill and Lilly&rsquo;s Foundayo. The oral GLP-1 category is no longer a two-horse race. Viking has not yet announced Phase 3 timing for the oral formulation, but the program continues to advance as a credible third entrant.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">MFN Pricing Context</h2>
          <p>
            In parallel with the clinical readouts, Novo Nordisk and Eli Lilly both struck &ldquo;most favored nation&rdquo; (MFN) pricing deals with the Trump administration. Both companies agreed to lower prices for their GLP-1 medications for Medicare and Medicaid recipients via the TrumpRx platform, which launched in January 2026. The pricing structure affects both injectable and oral formulations across the category.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What It Means</h2>
          <p>
            Several themes emerge from ECO2026:
          </p>
          <p>
            <strong>Oral GLP-1s are no longer experimental.</strong> With Wegovy pill on the market, Foundayo recently approved, and Viking&rsquo;s VK2735 advancing through Phase 2, oral formulations are becoming a serious commercial category rather than a research aspiration.
          </p>
          <p>
            <strong>Maintenance therapy is a new clinical frontier.</strong> The injectable-then-oral handoff pattern shown in Lilly&rsquo;s MAINTAIN trials addresses one of the most persistent problems in obesity care &mdash; weight regain after discontinuation.
          </p>
          <p>
            <strong>The race is now three-way, not two-way.</strong> Viking&rsquo;s entry materially changes the competitive landscape that has been defined by the Novo&ndash;Lilly duopoly.
          </p>
          <p>
            <strong>Pricing is moving down across the category.</strong> MFN deals plus competition from oral formulations are creating downward pressure on what has historically been a premium-priced drug class.
          </p>
          <p>
            The next major readout window for the category is expected later in 2026 as Lilly&rsquo;s Phase 3 orforglipron program matures and Viking&rsquo;s Phase 3 trials advance.
          </p>
        </div>

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            For research and educational purposes only. This article reports on publicly disclosed clinical trial data and pharmaceutical company announcements. Nothing in this article constitutes medical advice. Always consult a qualified healthcare provider regarding any medical decision.
          </p>
        </div>

        <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/peptides/semaglutide" className="btn-primary text-sm">Semaglutide Profile</Link>
            <Link href="/peptides/tirzepatide" className="btn-outline text-sm">Tirzepatide Profile</Link>
            <Link href="/news" className="btn-outline text-sm">More News</Link>
          </div>
        </div>
        <ContactLink pageName="ECO2026 Recap — Oral GLP-1 Data from Novo, Lilly, and Viking" pagePath="/news/eco2026-oral-glp1-recap-may-2026" />
      </div>
    </>
  );
}
