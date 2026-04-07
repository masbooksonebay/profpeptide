import Link from "next/link";

export const metadata = {
  title: "Tirzepatide Research | Prof. Peptide",
  description: "Key peer-reviewed studies on Tirzepatide with plain-English summaries.",
};

const studies = [
  {
    title: "Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1)",
    authors: "Jastreboff AM, Aronne LJ, Ahmad NN, et al. \u2014 SURMOUNT-1 Investigators",
    journal: "New England Journal of Medicine",
    year: "2022",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
    summary: "The pivotal trial establishing tirzepatide for obesity treatment. In 2,539 adults with obesity (without diabetes) over 72 weeks, tirzepatide produced average weight losses of 15.0% (5mg), 19.5% (10mg), and 20.9% (15mg) \u2014 compared to 3.1% with placebo. At the highest dose, 57% of participants lost 20% or more of their body weight \u2014 a level of weight loss previously achievable only through bariatric surgery. This was the first trial demonstrating the dual GIP/GLP-1 mechanism\u2019s superior weight loss over single GLP-1 agonists.",
  },
  {
    title: "Tirzepatide for Obesity Treatment and Diabetes Prevention \u2014 SURMOUNT-1 3-Year Results",
    authors: "Jastreboff AM, le Roux CW, Stefanski A, et al. \u2014 SURMOUNT-1 Investigators",
    journal: "New England Journal of Medicine",
    year: "2025",
    access: "Open Access",
    url: "https://www.nejm.org/doi/abs/10.1056/NEJMoa2410819",
    summary: "Three-year follow-up of SURMOUNT-1 participants with prediabetes. Tirzepatide maintained 19.7% weight loss at 176 weeks and dramatically reduced diabetes progression \u2014 only 1.3% of tirzepatide participants developed type 2 diabetes compared to 13.3% of those on placebo, representing a 93% relative risk reduction. Even 17 weeks after stopping treatment, the protection against diabetes development persisted \u2014 suggesting the weight loss itself is driving lasting metabolic benefit.",
  },
  {
    title: "Tirzepatide as Compared with Semaglutide for the Treatment of Obesity (SURMOUNT-5)",
    authors: "Aronne LJ, Bade Horn D, le Roux CW, et al. \u2014 SURMOUNT-5 Investigators",
    journal: "New England Journal of Medicine",
    year: "2025",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2416394",
    summary: "The first direct head-to-head comparison of tirzepatide and semaglutide for obesity. In 751 adults with obesity over 72 weeks, tirzepatide produced 20.2% average weight loss compared to 13.7% with semaglutide \u2014 a clinically meaningful difference of 6.5 percentage points favoring tirzepatide. Waist circumference reductions were also significantly greater with tirzepatide. This trial established tirzepatide as the more potent weight loss agent when the two are compared directly at maximum tolerated doses.",
  },
  {
    title: "Tirzepatide and Heart Failure with Preserved Ejection Fraction (SUMMIT)",
    authors: "Bhatt DL, Raman SV, et al.",
    journal: "New England Journal of Medicine",
    year: "2024",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2410402",
    summary: "The SUMMIT trial enrolled 731 adults with obesity-related heart failure with preserved ejection fraction (HFpEF) \u2014 a condition with very limited treatment options. Tirzepatide significantly improved exercise capacity, reduced symptoms, and led to greater weight loss compared to placebo. This extended tirzepatide\u2019s clinical evidence base to heart failure, one of obesity\u2019s most serious cardiovascular complications.",
  },
];

export default function TirzepatideResearchPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Tirzepatide Research</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on Tirzepatide (dual GIP/GLP-1 receptor agonist). Each summary is written in plain English. Click any title to read the full article.
      </p>

      <div className="space-y-6">
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 rounded-xl p-5 hover:border-[#0D7377] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 text-gray-500"}`}>
                {s.access}
              </span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1e2d3d] hover:text-[#0D7377] transition-colors leading-snug block mb-1">
              {s.title} &rarr;
            </a>
            <p className="text-xs text-gray-400 mb-3">{s.authors}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <p className="text-sm font-medium text-gray-700 mb-1">View the full Tirzepatide profile</p>
        <p className="text-xs text-gray-500 mb-3">Mechanism of action, FDA approval status, pharmacokinetics, and side effects.</p>
        <Link href="/peptides/tirzepatide" className="btn-primary text-sm">Tirzepatide Profile</Link>
      </div>
    </div>
  );
}
