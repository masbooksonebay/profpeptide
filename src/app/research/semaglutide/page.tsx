import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Semaglutide Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "5 key Semaglutide studies summarized in plain English. Covers STEP weight loss trials, SELECT cardiovascular outcomes, and SUSTAIN diabetes data.",
};

const studies = [
  {
    title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1)",
    authors: "Wilding JPH, Batterham RL, Calanna S, et al. \u2014 STEP 1 Study Group",
    journal: "New England Journal of Medicine",
    year: "2021",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
    summary: "The landmark trial that put semaglutide on the map for weight loss. In this 68-week study of 1,961 adults with obesity or overweight (without diabetes), those taking weekly semaglutide 2.4mg lost an average of 14.9% of their body weight \u2014 compared to just 2.4% in the placebo group. Nearly 70% of semaglutide participants lost at least 10% of their body weight. This was the first major trial showing a non-surgical treatment could achieve weight loss approaching that of bariatric surgery.",
  },
  {
    title: "Two-Year Effects of Semaglutide in Adults with Overweight or Obesity (STEP 5)",
    authors: "Garvey WT, Batterham RL, Bhatta M, et al. \u2014 STEP 5 Study Group",
    journal: "Nature Medicine",
    year: "2022",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/36216945/",
    summary: "STEP 5 extended the original trial to two years, enrolling 304 adults with obesity. Participants on semaglutide maintained an average 15.2% weight loss at 104 weeks versus just 2.6% with placebo \u2014 demonstrating that the weight loss is durable with continued treatment. This was important evidence that semaglutide is not just a short-term intervention but a sustained metabolic treatment.",
  },
  {
    title: "Semaglutide and Cardiovascular Outcomes in Obesity Without Diabetes (SELECT)",
    authors: "Lincoff AM, Brown-Frandsen K, Colhoun HM, et al.",
    journal: "New England Journal of Medicine",
    year: "2023",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2307563",
    summary: "The SELECT trial enrolled over 17,600 adults with obesity and established cardiovascular disease but no diabetes. Those on semaglutide 2.4mg had a 20% lower risk of major adverse cardiovascular events (heart attack, stroke, cardiovascular death) compared to placebo over approximately 3 years. This trial elevated semaglutide from a weight loss drug to a cardiovascular disease treatment and was one of the most significant findings in metabolic medicine in 2023.",
  },
  {
    title: "Semaglutide for the Treatment of Overweight and Obesity \u2014 A Review of the STEP Program",
    authors: "Bergmann NC, Davies MJ, Lingvay I, Knop FK",
    journal: "Diabetes, Obesity and Metabolism",
    year: "2023",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10092086/",
    summary: "A comprehensive review synthesizing results across the full STEP clinical trial program. Across STEP 1, 3, 4, and 8, semaglutide 2.4mg produced average weight losses of 14.9\u201317.4% over 68 weeks in people without diabetes, with 69\u201379% of participants achieving at least 10% weight loss. The review also covers cardiometabolic improvements and the safety profile across thousands of trial participants \u2014 providing the clearest overall picture of what semaglutide does in clinical practice.",
  },
  {
    title: "SUSTAIN-6 \u2014 Cardiovascular Outcomes with Semaglutide in Type 2 Diabetes",
    authors: "Marso SP, Daniels GH, Brown-Frandsen K, et al.",
    journal: "New England Journal of Medicine",
    year: "2016",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1607141",
    summary: "The original cardiovascular outcomes trial for semaglutide in 3,297 high-risk type 2 diabetes patients. Semaglutide reduced major adverse cardiovascular events by 26% compared to placebo \u2014 the finding that first established semaglutide\u2019s cardiovascular benefit beyond glucose control, and the foundation for all subsequent cardiovascular research in this class.",
  },
];

export default function SemaglutideResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Semaglutide Research","description":"5 key Semaglutide studies summarized in plain English. Covers STEP weight loss trials, SELECT cardiovascular outcomes, and SUSTAIN diabetes data.","url":"https://profpeptide.com/research/semaglutide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"Semaglutide Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Semaglutide Research</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on Semaglutide (GLP-1 receptor agonist). Each summary is written in plain English. Click any title to read the full article.
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full Semaglutide profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, FDA approval status, pharmacokinetics, and side effects.</p>
        <Link href="/peptides/semaglutide" className="btn-primary text-sm">Semaglutide Profile</Link>
      </div>

      <div className="mt-6 p-5 border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Where to buy Semaglutide</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Every vendor on our vetted list is third-party tested with published Certificates of Analysis. See which research suppliers carry Semaglutide.</p>
        <Link href="/best-peptide-vendors" className="text-sm font-medium text-[#0891b2] hover:underline">See vendors that carry Semaglutide in our full list &rarr;</Link>
      </div>
    </div>
    </>
  );
}
