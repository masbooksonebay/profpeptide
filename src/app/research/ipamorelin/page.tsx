import Link from "next/link";
import JsonLd from "@/components/JsonLd";

import WhereToBuy from "@/components/WhereToBuy";
export const metadata = {
  alternates: { canonical: "/research/ipamorelin" },
  title: "Ipamorelin Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "4 key Ipamorelin studies summarized in plain English. Covers selective GH release, body composition, human pharmacokinetics, and hypogonadal males.",
};

const studies = [
  {
    title: "Ipamorelin, the First Selective Growth Hormone Secretagogue",
    authors: "Raun K, Hansen BS, Johansen NL, et al.",
    journal: "European Journal of Endocrinology / PubMed",
    year: "1998",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
    summary: "The landmark study establishing Ipamorelin as the first growth hormone secretagogue with high selectivity for GH release \u2014 meaning it stimulates GH without significantly raising cortisol, prolactin, or ACTH. The study demonstrated that Ipamorelin produced robust GH release in rats comparable to GHRP-6 and hexarelin, but with approximately 90% less cortisol response and no meaningful ACTH elevation. This selectivity profile is what distinguishes Ipamorelin from older GHRPs and makes it the preferred GHRP for stacking with GHRH analogs like CJC-1295. This paper is the foundation of Ipamorelin\u2019s reputation as the \u201Ccleanest\u201D growth hormone secretagogue.",
  },
  {
    title: "Ipamorelin \u2014 Effects on Bone Mineral Density and Body Composition in Aged Rats",
    authors: "Hansen BS, et al.",
    journal: "Growth Hormone & IGF Research / PubMed",
    year: "1999",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/10352464/",
    summary: "A 12-week study examining Ipamorelin\u2019s effects on body composition and bone health in aged rats \u2014 directly relevant to its research application in age-related metabolic decline. Findings included significant increases in bone mineral content, reduced adiposity, and increased lean mass, all attributed to sustained GH/IGF-1 axis activation. This study expanded Ipamorelin\u2019s research profile beyond simply stimulating GH release to demonstrating tangible downstream effects on body composition \u2014 establishing the biological rationale for its use in anti-aging and body recomposition research.",
  },
  {
    title: "Pharmacokinetic-Pharmacodynamic Modeling of Ipamorelin, a Growth Hormone Releasing Peptide, in Human Volunteers",
    authors: "Gobburu JVS, et al.",
    journal: "Pharmaceutical Research / PubMed",
    year: "1999",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/10496653/",
    summary: "One of the few human pharmacokinetic studies of Ipamorelin, characterizing how it behaves in the human body. The study modeled the relationship between Ipamorelin plasma concentrations and GH release kinetics in healthy volunteers \u2014 confirming that the dose-response relationship seen in animal models translates to humans. The paper established Ipamorelin\u2019s approximate half-life and the timing of its GH release peak, which informs research dosing protocols. This is a foundational reference for understanding Ipamorelin\u2019s human pharmacology.",
  },
  {
    title: "Beyond the Androgen Receptor \u2014 The Role of Growth Hormone Secretagogues in Hypogonadal Males",
    authors: "Sigalos JT, Pastuszak AW",
    journal: "PMC / Sexual Medicine Reviews",
    year: "2018",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7108996/",
    summary: "A clinical review examining Ipamorelin alongside other GH secretagogues for applications in metabolic syndrome and hypogonadism. The paper summarizes Ipamorelin\u2019s selectivity advantage over GHRP-2 and GHRP-6 and reviews its potential role as an adjunct to testosterone therapy for improving body composition in hypogonadal males. It also covers the synergistic GH response when Ipamorelin is combined with GHRH analogs \u2014 documenting 2\u20134x greater GH AUC compared to either compound in isolation. A useful clinical context paper for understanding where Ipamorelin fits in therapeutic applications.",
  },
];

export default function IpamorelinResearchPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Ipamorelin Research","description":"4 key Ipamorelin studies summarized in plain English. Covers selective GH release, body composition, human pharmacokinetics, and hypogonadal males.","url":"https://profpeptide.com/research/ipamorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://profpeptide.com/research"},{"@type":"ListItem","position":3,"name":"Ipamorelin Research"}]}} />
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Ipamorelin Research</h1>
        <span className="tag">Growth Hormone</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">Key peer-reviewed studies on Ipamorelin, a selective growth hormone secretagogue and ghrelin receptor agonist. Ipamorelin is not FDA approved and is banned by WADA. Research is primarily animal studies with limited human data. Each summary is written in plain English. Click any title to read the full article.</p>
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full Ipamorelin profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, selectivity data, pharmacokinetics, and CJC-1295 synergy.</p>
        <Link href="/peptides/ipamorelin" className="btn-primary text-sm">Ipamorelin Profile</Link>
      </div>

      <WhereToBuy peptide="ipamorelin" />
    </div>
    </>
  );
}
