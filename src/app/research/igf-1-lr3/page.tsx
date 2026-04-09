import Link from "next/link";

export const metadata = {
  title: "IGF-1 LR3 Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "4 key IGF-1 LR3 studies summarized in plain English. Covers muscle therapeutics, mTOR signaling, doping pharmacology, and performance research.",
};

const studies = [
  {
    title: "Optimizing IGF-I for Skeletal Muscle Therapeutics",
    authors: "Rodino-Klapac LR, Mendell JR, Sahenk Z",
    journal: "PMC / Molecular Therapy",
    year: "2015",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4665094/",
    summary: "A comprehensive review of IGF-1 and its analogs for muscle therapeutic applications, directly relevant to understanding IGF-1 LR3\u2019s research context. The paper examines how structural modifications to native IGF-1 \u2014 including those that produced IGF-1 LR3 \u2014 affect its biological activity, binding protein interactions, and therapeutic potential. It covers the PI3K/Akt/mTOR signaling cascade that drives muscle protein synthesis and explains why reduced binding to IGF-binding proteins (IGFBPs) \u2014 IGF-1 LR3\u2019s key modification \u2014 produces more sustained and potent anabolic signaling than native IGF-1.",
  },
  {
    title: "IGF-1 LR3 \u2014 Properties, Mechanisms, and Applications in Muscle Physiology",
    authors: "The Peptide University Research Team",
    journal: "The Peptide University",
    year: "2026",
    access: "Open Access",
    url: "https://thepeptideuniversity.com/blogs/articles/igf-1-lr3-properties-mechanisms-and-applications-in-muscle-physiology",
    summary: "A detailed mechanistic overview of IGF-1 LR3\u2019s action in skeletal muscle. The paper explains how IGF-1 LR3 activates the IGF-1 receptor (IGF-1R), triggering two key downstream cascades \u2014 the PI3K/Akt/mTOR pathway (driving protein synthesis and hypertrophy) and the MAPK/ERK pathway (driving cell proliferation and differentiation). It also covers IGF-1 LR3\u2019s nutrient partitioning effects \u2014 preferentially directing glucose and amino acids toward muscle tissue rather than fat \u2014 and its role in satellite cell activation critical for muscle repair.",
  },
  {
    title: "IGF-1 and Long Chain IGF (LR3IGF-1) \u2014 Doping Biology and Pharmacology",
    authors: "Sepp\u00E4l\u00E4 T \u2014 Finnish Center for Integrity in Sports (FINCIS)",
    journal: "Dopinglinkki",
    year: "2019",
    access: "Open Access",
    url: "https://dopinglinkki.fi/en/info-bank/doping-substances/insulin-like-growth-factor-1-igf-1-and-long-chain-igf-ir3igf-1/",
    summary: "A clear-eyed analysis of IGF-1 LR3 from a sports medicine and anti-doping perspective. The paper explains how LR3IGF-1 is physiologically stronger and longer-lasting than native IGF-1, why it is banned in competitive sports, and what the known adverse effects include \u2014 particularly hypoglycemia (low blood sugar) from its insulin-like activity. It notes that the risk of adverse effects increases significantly with doses above 60\u201380 \u00B5g/kg/day, and that most adverse effects parallel those of native IGF-1. An important resource for understanding why WADA prohibits IGF-1 LR3.",
  },
  {
    title: "Emerging Anabolic and Regenerative Peptides in Athletic Body Recomposition \u2014 IGF-1 LR3 Section",
    authors: "Genesis Publications Research Group",
    journal: "Journal of Strength and Conditioning Research",
    year: "2025",
    access: "Open Access",
    url: "https://www.genesispub.org/jscr/emerging-anabolic-and-regenerative-peptides-in-athletic-body-re-composition-and-bodybuilding-mechanisms-of-action-dosing-strategies-and-evidence-review",
    summary: "A 2025 evidence review covering IGF-1 LR3 in the context of performance peptides. The paper confirms IGF-1 LR3\u2019s well-defined molecular mechanism \u2014 acting as a powerful anabolic agent through IGF-1R/IRS1/PI3K/Akt cascade activation \u2014 while being direct about the evidence gap: no human clinical trials exist, all efficacy data comes from preclinical models, and the compound carries real metabolic and proliferative risks. The review also discusses typical research protocols (20\u2013100 \u00B5g/day, 4\u20136 week cycles with rest periods to prevent receptor desensitization) and notes that IGF-1 LR3 is prohibited by WADA and not FDA approved for human use.",
  },
];

export default function IGF1LR3ResearchPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">IGF-1 LR3 Research</h1>
        <span className="tag">Performance &amp; Energy</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on IGF-1 LR3 (Long Arginine 3 Insulin-like Growth Factor-1). Research is primarily preclinical \u2014 human clinical data is limited. IGF-1 LR3 is banned by WADA and not FDA approved. Each summary is written in plain English. Click any title to read the full article.
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full IGF-1 LR3 profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, pharmacokinetics, research limitations, and WADA status.</p>
        <Link href="/peptides/igf-1-lr3" className="btn-primary text-sm">IGF-1 LR3 Profile</Link>
      </div>
    </div>
  );
}
