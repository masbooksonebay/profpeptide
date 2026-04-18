import Link from "next/link";
import JsonLd from "@/components/JsonLd";

import WhereToBuy from "@/components/WhereToBuy";
export const metadata = {
  title: "MOTS-c Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "4 key MOTS-c studies summarized in plain English. Covers mitochondrial exercise mimicry, insulin resistance, aging, and cardiac metabolism.",
};

const studies = [
  {
    title: "The Mitochondrial-Derived Peptide MOTS-c Promotes Metabolic Homeostasis and Reduces Obesity and Insulin Resistance",
    authors: "Lee C, Zeng J, Drew BG, et al.",
    journal: "Cell Metabolism",
    year: "2015",
    access: "Open Access via PMC",
    url: "https://pubmed.ncbi.nlm.nih.gov/25738459/",
    summary: "The foundational study that first identified MOTS-c and established its role in metabolic regulation. Researchers found that MOTS-c is encoded by mitochondrial DNA, is released into circulation in response to metabolic stress, and acts on skeletal muscle to improve glucose uptake via AMPK activation. In mice fed a high-fat diet, MOTS-c treatment significantly reduced obesity and insulin resistance without altering food intake \u2014 suggesting a direct effect on metabolic rate. This paper established MOTS-c as a novel mitochondrial-derived hormone with broad metabolic relevance.",
  },
  {
    title: "MOTS-c is an Exercise-Induced Mitochondrial-Encoded Regulator of Age-Dependent Physical Decline and Muscle Homeostasis",
    authors: "Reynolds JC, Lai RW, Woodhead JST, et al.",
    journal: "Nature Communications",
    year: "2021",
    access: "Open Access",
    url: "https://www.nature.com/articles/s41467-020-20790-0",
    summary: "This study established MOTS-c as an exercise-induced peptide \u2014 showing that MOTS-c levels increase 11.9-fold in skeletal muscle after exercise in humans. More strikingly, MOTS-c treatment significantly enhanced physical performance in young, middle-aged, and old mice. When treatment was started very late in life (equivalent to human old age), it still improved physical capacity and healthspan \u2014 suggesting therapeutic potential even when initiated after decline has begun. This positions MOTS-c as a potential exercise mimetic for aging populations with limited mobility.",
  },
  {
    title: "MOTS-c: A Promising Mitochondrial-Derived Peptide for Therapeutic Exploitation",
    authors: "Zhu Y, Gu L, Lin X, et al.",
    journal: "Frontiers in Endocrinology",
    year: "2023",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9905433/",
    summary: "A comprehensive review synthesizing a decade of MOTS-c research across multiple disease models. The review covers MOTS-c\u2019s mechanisms including AMPK activation, nuclear translocation during stress, anti-inflammatory effects, and insulin sensitization. It documents lower MOTS-c levels in type 2 diabetes, gestational diabetes, and obese children \u2014 establishing clinical associations between MOTS-c deficiency and metabolic disease. The paper also discusses MOTS-c\u2019s cardiovascular protective effects and its potential applications in aging, noting that no effective clinical application method has yet been established.",
  },
  {
    title: "Mitochondria-Derived Peptide MOTS-c Restores Mitochondrial Respiration in Type 2 Diabetic Heart",
    authors: "Lim YX, et al.",
    journal: "Frontiers in Physiology",
    year: "2025",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1602271/full",
    summary: "One of the most recent MOTS-c studies, examining its effects in a type 2 diabetic heart model. MOTS-c treatment restored mitochondrial respiratory function, reduced cardiac oxidative stress, and delayed weight gain in diabetic rats \u2014 without affecting food intake. The study confirms that MOTS-c directly increases whole-body metabolic rate rather than simply reducing appetite, and extends its relevance beyond skeletal muscle to cardiac metabolic function \u2014 a significant finding given that heart failure is the leading cause of death in type 2 diabetes.",
  },
];

export default function MOTSCResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"MOTS-c Research","description":"4 key MOTS-c studies summarized in plain English. Covers mitochondrial exercise mimicry, insulin resistance, aging, and cardiac metabolism.","url":"https://profpeptide.com/research/mots-c","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"MOTS-c Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">MOTS-c Research</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on MOTS-c (mitochondrial-derived peptide). Research is primarily preclinical and early human studies as of 2025. Each summary is written in plain English. Click any title to read the full article.
      </p>

      <div className="space-y-6">
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-green-50 text-green-700 border border-green-200">
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full MOTS-c profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, exercise mimicry, pharmacokinetics, and WADA status.</p>
        <Link href="/peptides/mots-c" className="btn-primary text-sm">MOTS-c Profile</Link>
      </div>

      <WhereToBuy peptide="mots-c" />
    </div>
    </>
  );
}
