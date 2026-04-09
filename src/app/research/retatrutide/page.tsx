import Link from "next/link";

export const metadata = {
  title: "Retatrutide Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "3 key Retatrutide studies summarized in plain English. Covers Phase 2 obesity and diabetes trials plus TRIUMPH Phase 3 program status.",
};

const studies = [
  {
    title: "Triple-Hormone-Receptor Agonist Retatrutide for Obesity \u2014 A Phase 2 Trial",
    authors: "Jastreboff AM, Kaplan LM, Fr\u00EDas JP, et al. \u2014 Retatrutide Phase 2 Obesity Trial Investigators",
    journal: "New England Journal of Medicine",
    year: "2023",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2301972",
    summary: "The landmark Phase 2 trial of retatrutide in 338 adults with obesity. At the highest dose (12mg), participants lost an average of 24.2% of their body weight over 48 weeks \u2014 with weight loss curves that had not yet plateaued at trial end, suggesting even greater losses with longer treatment. Every single participant in the 12mg group achieved at least 5% weight loss, and 62% achieved 20% or more. These are the highest weight loss numbers ever recorded in a pharmacological trial and exceed those of bariatric surgery in some comparisons.",
  },
  {
    title: "Retatrutide for People with Type 2 Diabetes \u2014 A Phase 2 Trial",
    authors: "Rosenstock J, Frias JP, Jastreboff AM, et al.",
    journal: "New England Journal of Medicine",
    year: "2023",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2302972",
    summary: "Companion Phase 2 trial of retatrutide in 281 adults with type 2 diabetes. Retatrutide produced significant reductions in HbA1c (up to 2.02 percentage points) and body weight (up to 16.94%) compared to placebo over 36 weeks. The triple agonist mechanism improved glycemic control more than existing single and dual agonists, while also producing substantial weight loss \u2014 establishing the metabolic breadth of the compound beyond obesity alone.",
  },
  {
    title: "TRIUMPH Phase 3 Program \u2014 Trial Status and Design",
    authors: "ClinicalTrials.gov",
    journal: "ClinicalTrials.gov",
    year: "2024\u20132026 (ongoing)",
    access: "Open Access",
    url: "https://clinicaltrials.gov/search?term=retatrutide+TRIUMPH",
    summary: "Retatrutide entered Phase 3 clinical trials under the TRIUMPH program in 2024, with seven trials evaluating it across obesity, type 2 diabetes, cardiovascular outcomes, and related metabolic conditions. As of early 2026 Phase 3 results are beginning to emerge. If the Phase 3 data replicates the Phase 2 findings, retatrutide would represent the most effective pharmacological weight loss treatment ever approved. This page will be updated as Phase 3 results are published.",
  },
];

export default function RetatrutideResearchPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Retatrutide Research</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on Retatrutide (triple GIP/GLP-1/glucagon receptor agonist). Phase 3 trials ongoing as of 2026. Each summary is written in plain English. Click any title to read the full article.
      </p>

      <div className="space-y-6">
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>
                {s.access}
              </span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">
              {s.title} &rarr;
            </a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full Retatrutide profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, TRIUMPH trial data, pharmacokinetics, and side effects.</p>
        <Link href="/peptides/retatrutide" className="btn-primary text-sm">Retatrutide Profile</Link>
      </div>
    </div>
  );
}
