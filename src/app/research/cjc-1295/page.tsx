import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "CJC-1295 Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "4 key CJC-1295 studies summarized in plain English. Covers human GH/IGF-1 elevation, pulsatility preservation, and GH secretagogue development.",
};

const studies = [
  {
    title: "Prolonged Stimulation of Growth Hormone and IGF-I Secretion by CJC-1295, a Long-Acting Analog of GH-Releasing Hormone, in Healthy Adults",
    authors: "Ionescu M, Frohman LA",
    journal: "Journal of Clinical Endocrinology & Metabolism / PubMed",
    year: "2006",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
    summary: "The landmark human trial of CJC-1295 in healthy adults ages 21\u201361. Participants received single or repeated subcutaneous injections of CJC-1295 or placebo in two randomized, placebo-controlled, double-blind trials. CJC-1295 produced sustained, dose-dependent increases in both GH and IGF-1 levels \u2014 with mean IGF-1 concentrations increasing 1.5 to 3-fold above baseline. Crucially, these elevations persisted for 6\u20138 days after a single injection due to CJC-1295\u2019s albumin-binding mechanism, which extends its half-life far beyond native GHRH. The compound was safe and well tolerated at doses of 30\u201360 mcg/kg. This is the primary human pharmacokinetics and pharmacodynamics study that established CJC-1295\u2019s clinical research profile.",
  },
  {
    title: "Pulsatile Secretion of Growth Hormone Persists During Continuous Stimulation by CJC-1295",
    authors: "Jett\u00E9 L, Harvey L, Eugeni K, Levens N",
    journal: "Journal of Clinical Endocrinology & Metabolism / PubMed",
    year: "2005",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/17018654/",
    summary: "A critical mechanistic study examining whether CJC-1295\u2019s prolonged GHRH stimulation disrupts the natural pulsatile pattern of GH secretion \u2014 a key safety concern with continuous GH axis stimulation. The study found that CJC-1295 increased both trough and mean GH secretion and elevated IGF-1, while preserving natural GH pulsatility. The maintenance of pulsatile GH release is significant because pulsatile secretion is considered important for many of GH\u2019s physiological effects. This paper established that CJC-1295 enhances GH output without flattening the natural secretion rhythm \u2014 a meaningful advantage over direct GH administration.",
  },
  {
    title: "Once-Daily Administration of CJC-1295 Normalizes Growth in the GHRH Knockout Mouse",
    authors: "Jett\u00E9 L, et al.",
    journal: "American Journal of Physiology \u2014 Endocrinology and Metabolism",
    year: "2005",
    access: "Open Access",
    url: "https://journals.physiology.org/doi/abs/10.1152/ajpendo.00201.2006",
    summary: "A preclinical study examining CJC-1295 in GHRH knockout mice \u2014 animals that cannot produce their own GHRH and therefore cannot generate growth hormone normally. Once-daily CJC-1295 completely normalized body weight, body length, and bone growth in these animals. The study also documented that CJC-1295 increased total pituitary RNA and GH mRNA, suggesting proliferation of somatotroph cells \u2014 meaning the peptide may not just stimulate GH release but may actually expand the pituitary\u2019s GH-producing capacity. These findings support the potential therapeutic utility of CJC-1295 in GH deficiency states.",
  },
  {
    title: "Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development",
    authors: "Ishida J, Saitoh M, Ebner N, et al.",
    journal: "JCSM Rapid Communications / Wiley",
    year: "2020",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9",
    summary: "A comprehensive review placing CJC-1295 in the broader context of GH secretagogue development. The paper traces the evolution from native GHRH through to long-acting analogs including CJC-1295 and tesamorelin, explaining how albumin-binding and structural modifications extended half-life and improved clinical utility. It also reviews the clinical development landscape \u2014 noting that while tesamorelin achieved FDA approval for lipodystrophy, CJC-1295 remains investigational. A useful reference for understanding where CJC-1295 sits relative to approved GHRH analogs and what the regulatory path for this class of compounds looks like.",
  },
];

export default function CJC1295ResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"CJC-1295 Research","description":"4 key CJC-1295 studies summarized in plain English. Covers human GH/IGF-1 elevation, pulsatility preservation, and GH secretagogue development.","url":"https://www.profpeptide.com/research/cjc-1295","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://www.profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"CJC-1295 Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">CJC-1295 Research</h1>
        <span className="tag">Growth Hormone</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">Key peer-reviewed studies on CJC-1295, a long-acting synthetic analog of growth hormone-releasing hormone (GHRH). CJC-1295 is not FDA approved and is banned by WADA. Research is primarily human and animal studies. Each summary is written in plain English. Click any title to read the full article.</p>
      <div className="space-y-6">
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full CJC-1295 profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, DAC vs non-DAC, pharmacokinetics, and Ipamorelin synergy.</p>
        <Link href="/peptides/cjc-1295" className="btn-primary text-sm">CJC-1295 Profile</Link>
      </div>
    </div>
    </>
  );
}
