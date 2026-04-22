import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WhereToBuy from "@/components/WhereToBuy";

export const metadata = {
  alternates: { canonical: "/research/cagrilintide" },
  title: "Cagrilintide Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "Key peer-reviewed studies on Cagrilintide, a long-acting amylin analog developed by Novo Nordisk. Covers monotherapy, CagriSema combination, and Phase 1b/2 trial data.",
};

const studies = [
  {
    title: "Once-weekly cagrilintide for weight management in people with overweight and obesity",
    authors: "Lau DCW, Erichsen L, Francisco AM, et al.",
    journal: "The Lancet",
    year: "2021",
    access: "Open Access",
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01751-7/fulltext",
    summary:
      "The first Phase 2 trial of cagrilintide as monotherapy for obesity. Over 26 weeks, participants on 2.4 mg cagrilintide lost a mean of 10.8% of body weight vs 3.0% on placebo. The trial established cagrilintide\u2019s dose-dependent weight loss profile and informed the design of subsequent combination trials with semaglutide.",
  },
  {
    title:
      "Safety, tolerability, pharmacokinetics, and pharmacodynamics of concomitant cagrilintide with semaglutide 2\u00B74 mg",
    authors: "Enebo LB, Berthelsen KK, Kankam M, et al.",
    journal: "The Lancet",
    year: "2021",
    access: "Open Access",
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00845-X/fulltext",
    summary:
      "Phase 1b trial examining the combination of cagrilintide and semaglutide. The study confirmed that co-administration was well-tolerated and produced pharmacokinetics consistent with once-weekly dosing for both compounds. This study established the safety foundation for the CagriSema Phase 2 and Phase 3 programs.",
  },
  {
    title:
      "Efficacy and safety of co-administered cagrilintide 2\u00B74 mg with semaglutide 2\u00B74 mg in type 2 diabetes",
    authors: "Frias JP, Deenadayalan S, Erichsen L, et al.",
    journal: "The Lancet",
    year: "2023",
    access: "Open Access",
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)01163-7/fulltext",
    summary:
      "Phase 2 trial of CagriSema in patients with type 2 diabetes. The combination produced superior HbA1c reduction and weight loss compared to semaglutide alone, supporting the hypothesis that amylin and GLP-1 pathways act synergistically.",
  },
  {
    title: "Development of Cagrilintide, a Long-Acting Amylin Analogue",
    authors: "Kruse T, Hansen JL, Dahl K, et al.",
    journal: "Journal of Medicinal Chemistry",
    year: "2021",
    access: "Abstract available",
    url: "https://pubs.acs.org/doi/10.1021/acs.jmedchem.1c00565",
    summary:
      "The foundational medicinal chemistry paper from Novo Nordisk describing the design and development of cagrilintide. The paper details the amino acid substitutions and fatty acid modifications that produced a compound with the potency and half-life needed for once-weekly human dosing.",
  },
];

export default function CagrilintideResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Cagrilintide Research","description":"Key peer-reviewed studies on Cagrilintide, a long-acting amylin analog developed by Novo Nordisk. Covers monotherapy, CagriSema combination, and Phase 1b/2 trial data.","url":"https://profpeptide.com/research/cagrilintide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"Cagrilintide Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Cagrilintide Research</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on Cagrilintide, a long-acting amylin analog developed by Novo Nordisk. Research to date focuses primarily on combination therapy with semaglutide for obesity and type 2 diabetes. Each summary is written in plain English.
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full Cagrilintide profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, REDEFINE trial program, pharmacokinetics, and research limitations.</p>
        <Link href="/peptides/cagrilintide" className="btn-primary text-sm">Cagrilintide Profile</Link>
      </div>

      <WhereToBuy peptide="cagrilintide" />
    </div>
    </>
  );
}
