import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/news/retatrutide-triumph-1-phase-3-results",
  title: "Retatrutide Hits 30.3% Average Weight Loss in TRIUMPH-1 Phase 3 Trial | Prof. Peptide",
  description:
    "Eli Lilly's investigational triple agonist retatrutide produced 30.3% average weight loss at 104 weeks in the TRIUMPH-1 Phase 3 trial — comparable to bariatric surgery outcomes. Analysts project 2027 FDA approval.",
  ogTitle: "Retatrutide Hits 30.3% Average Weight Loss in TRIUMPH-1 Phase 3 Trial",
  ogDescription:
    "Eli Lilly's investigational triple agonist retatrutide produced 30.3% average weight loss at 104 weeks in the TRIUMPH-1 Phase 3 trial — comparable to bariatric surgery outcomes. Analysts project 2027 FDA approval.",
  ogImage: { url: "https://profpeptide.com/og-image.png", width: 1200, height: 630, alt: "Prof. Peptide" },
});

export default function RetatrutideTriumph1Phase3ResultsPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Retatrutide Hits 30.3% Average Weight Loss in TRIUMPH-1 Phase 3 Trial",
        "description": "Eli Lilly's investigational triple agonist retatrutide produced 30.3% average weight loss at 104 weeks in the TRIUMPH-1 Phase 3 trial — comparable to bariatric surgery outcomes. Analysts project 2027 FDA approval.",
        "datePublished": "2026-05-21T00:00:00Z",
        "dateModified": "2026-05-21T00:00:00Z",
        "url": "https://profpeptide.com/news/retatrutide-triumph-1-phase-3-results",
        "publisher": { "@type": "Organization", "name": "Prof. Peptide", "url": "https://profpeptide.com" },
        "author": { "@type": "Organization", "name": "Prof. Peptide" },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
          { "@type": "ListItem", "position": 2, "name": "News", "item": "https://profpeptide.com/news" },
          { "@type": "ListItem", "position": 3, "name": "Retatrutide Hits 30.3% Average Weight Loss in TRIUMPH-1 Phase 3 Trial" },
        ],
      }} />

      <div className="section max-w-3xl">
        <Link href="/news" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>

        <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">May 21, 2026 &middot; Last updated: May 21, 2026</p>
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6">
          Retatrutide Hits 30.3% Average Weight Loss in TRIUMPH-1 Phase 3 Trial
        </h1>

        <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">TL;DR</h2>
          <p>
            Eli Lilly announced positive topline results from TRIUMPH-1, the pivotal Phase 3 trial of{" "}
            <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">retatrutide</Link>, an investigational first-in-class triple hormone receptor agonist. At 80 weeks, the 12 mg dose produced average weight loss of 28.3% (70.3 lbs). In an extension among participants with BMI &ge;35, the same dose produced 30.3% average weight loss (85 lbs) at 104 weeks &mdash; a result Lilly compared to bariatric surgery outcomes. Analysts now project a 2027 FDA approval decision.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What is retatrutide?</h2>
          <p>
            Retatrutide (LY3437943) is a first-in-class triple hormone receptor agonist targeting GIP, GLP-1, and glucagon receptors. Unlike single-agonist drugs like{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>{" "}
            (GLP-1 only) or dual-agonist drugs like{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>{" "}
            (GIP + GLP-1), retatrutide&rsquo;s third receptor target &mdash; glucagon &mdash; drives additional fat metabolism and energy expenditure on top of appetite suppression and improved glucose handling.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">TRIUMPH-1 study design</h2>
          <p>
            TRIUMPH-1 enrolled 2,339 adults with obesity (BMI &ge;30) or overweight (BMI &ge;27) plus at least one weight-related comorbidity. Participants without diabetes received once-weekly injections of retatrutide at 4 mg, 9 mg, or 12 mg, or placebo. The primary phase ran 80 weeks. A pre-specified blinded extension continued select participants with baseline BMI &ge;35 through 104 weeks.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">80-week primary results</h2>
          <p>Mean weight loss versus baseline:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li><span className="font-semibold">12 mg dose:</span> 28.3% (70.3 lbs)</li>
            <li><span className="font-semibold">9 mg dose:</span> 25.9% (64.4 lbs)</li>
            <li><span className="font-semibold">4 mg dose:</span> 19.0% (47.2 lbs)</li>
            <li><span className="font-semibold">Placebo:</span> 2.2% (5.5 lbs)</li>
          </ul>
          <p>
            In the 12 mg group, 45.3% of participants lost at least 30% of their body weight &mdash; a threshold long associated with bariatric surgery rather than pharmaceutical intervention. Additionally, 65.3% of participants in the 12 mg group reached a BMI below 30, dropping under the clinical obesity threshold by week 80. Among participants who started with class 3 obesity (BMI &ge;40), 37.5% reached a BMI below 30 by the end of the primary phase.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">104-week extension results</h2>
          <p>
            The pre-specified extension continued participants with baseline BMI &ge;35 on the 12 mg dose through week 104. Average weight loss climbed to 30.3% (85.0 lbs). The curve had not yet plateaued at study end, suggesting additional weight loss would have continued with longer follow-up.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">How retatrutide compares to current GLP-1 leaders</h2>
          <p>
            In benchmark Phase 3 trials, semaglutide (marketed as Wegovy and Ozempic) produced approximately 15-17% weight loss over comparable durations, and tirzepatide (marketed as Zepbound and Mounjaro) produced approximately 21-25%. Retatrutide&rsquo;s 28.3% at 80 weeks &mdash; and 30.3% at 104 weeks &mdash; positions the triple agonist as the most effective weight-loss pharmaceutical in late-stage development. BMO Capital Markets called the profile &ldquo;supremely strong&rdquo; in a Thursday research note. Truist Securities described the numbers as &ldquo;a new benchmark for anti-obesity medications.&rdquo;
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Cardiometabolic benefits beyond weight loss</h2>
          <p>
            TRIUMPH-1 reported significant improvements from baseline across multiple cardiovascular risk markers in retatrutide-treated participants:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>Waist circumference</li>
            <li>Non-HDL cholesterol</li>
            <li>Triglycerides</li>
            <li>Systolic blood pressure</li>
            <li>High-sensitivity C-reactive protein (hsCRP)</li>
          </ul>
          <p>
            These secondary endpoints suggest retatrutide&rsquo;s benefits extend beyond body weight to broader cardiometabolic health &mdash; consistent with mechanism-based expectations from the triple-agonist receptor profile.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Safety and tolerability</h2>
          <p>
            The safety profile mirrored earlier-phase data. Gastrointestinal events (nausea, vomiting, diarrhea) were the most common adverse events and more frequent than placebo. Some sensory and urinary events also occurred more frequently than placebo.
          </p>
          <p>Discontinuation rates due to adverse events were dose-dependent:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li><span className="font-semibold">4 mg:</span> 4.1%</li>
            <li><span className="font-semibold">9 mg:</span> 12.2%</li>
            <li><span className="font-semibold">12 mg:</span> 18.2%</li>
            <li><span className="font-semibold">Placebo:</span> 4.0%</li>
          </ul>
          <p>
            Notably, the 4 mg dose &mdash; reached with only a single dose escalation step &mdash; achieved 19.0% weight loss with discontinuation rates comparable to placebo. This likely positions 4 mg as the entry-level option for patients prioritizing tolerability over maximum efficacy.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">What&rsquo;s next</h2>
          <p>
            Lilly has seven additional Phase 3 readouts expected through 2026, covering retatrutide across obesity, type 2 diabetes, and osteoarthritis populations. TRIUMPH-4 reported in December 2025, showing 28.7% weight loss plus substantial knee osteoarthritis pain relief in patients with both conditions.
          </p>
          <p>
            Analysts project an FDA approval decision in 2027, with retatrutide expected to launch as Lilly&rsquo;s flagship next-generation obesity therapy. Full TRIUMPH-1 results will be presented at a future medical conference and published in a peer-reviewed journal.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Implications for the research peptide community</h2>
          <p>
            Retatrutide remains an investigational compound &mdash; not approved for human therapeutic use anywhere in the world as of this writing. Within the research peptide community, retatrutide has been available from third-party vendors for several years preceding Lilly&rsquo;s anticipated commercial launch. The TRIUMPH-1 data formally validates the triple-agonist mechanism as a meaningful step beyond single and dual GLP-1 receptor agonism, and confirms the compound&rsquo;s place alongside{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>{" "}
            and{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>{" "}
            as one of the three pivotal compounds in this rapidly evolving therapeutic space.
          </p>

          <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">Sources</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-slate-300">
            <li>
              <a
                href="https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0891b2] hover:underline break-words"
              >
                Eli Lilly investor release, May 21, 2026
              </a>
            </li>
            <li>
              <a
                href="https://www.cnbc.com/2026/05/21/eli-lilly-weight-loss-drug-retatrutide-clears-obesity-trial.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0891b2] hover:underline break-words"
              >
                CNBC: Eli Lilly weight loss drug retatrutide clears obesity trial
              </a>
            </li>
            <li>
              <a
                href="https://www.biospace.com/drug-development/lillys-triple-agonist-shows-bariatric-surgery-like-weight-loss-results"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0891b2] hover:underline break-words"
              >
                BioSpace: Lilly&rsquo;s triple agonist shows bariatric surgery&ndash;like weight loss results
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg">
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            This article is for informational and educational purposes only and does not constitute medical advice. Retatrutide remains an investigational compound under active Phase 3 evaluation and is not FDA-approved for any indication. All research compounds referenced are for laboratory use only.
          </p>
        </div>

        <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/peptides/retatrutide" className="btn-primary text-sm">Retatrutide Profile</Link>
            <Link href="/coupons" className="btn-outline text-sm">Browse Discount Codes</Link>
            <Link href="/news" className="btn-outline text-sm">More News</Link>
          </div>
        </div>
        <ContactLink pageName="Retatrutide Hits 30.3% Average Weight Loss in TRIUMPH-1 Phase 3 Trial" pagePath="/news/retatrutide-triumph-1-phase-3-results" />
      </div>
    </>
  );
}
