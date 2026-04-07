import Link from "next/link";

export const metadata = {
  title: "Tesamorelin Research | Prof. Peptide",
  description: "Key peer-reviewed studies on Tesamorelin with plain-English summaries.",
};

const studies = [
  {
    title: "Effects of Tesamorelin in HIV-Infected Patients with Excess Abdominal Fat \u2014 Pooled Analysis of Two Phase 3 Trials",
    authors: "Falutz J, Mamputu JC, Potvin D, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism / PubMed",
    year: "2010",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/20554713/",
    summary: "The pivotal Phase 3 trial data that led to tesamorelin\u2019s FDA approval. The pooled analysis of 806 HIV-infected patients with lipodystrophy showed that daily tesamorelin 2mg reduced visceral adipose tissue (VAT) by 17.5% at 26 weeks \u2014 and maintained that reduction at 52 weeks with continued treatment. Waist circumference decreased 3.4 cm, triglycerides dropped significantly, and body image improved. IGF-1 increased by a mean of 108 ng/ml. Critically, glucose parameters remained stable \u2014 addressing a key concern about GH axis stimulation in patients with metabolic complications. This paper established tesamorelin as the evidence standard for GHRH-based visceral fat reduction.",
  },
  {
    title: "Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development",
    authors: "Ishida J, Saitoh M, Ebner N, et al.",
    journal: "JCSM Rapid Communications / Wiley",
    year: "2020",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9",
    summary: "A comprehensive review covering tesamorelin\u2019s development and approval in the context of the broader GH secretagogue class. The paper explains how tesamorelin\u2019s N-terminal modification (trans-3-hexenoyl group) protects it from DPP-4 enzyme degradation \u2014 giving it a longer half-life than native GHRH or sermorelin. It also covers tesamorelin\u2019s favorable Phase 2 and 3 clinical data showing reduced trunk and visceral fat, increased lean body mass, decreased waist circumference, and improvements in triglycerides and cholesterol. A key reference for understanding how tesamorelin differs from other GHRH analogs at the molecular and clinical level.",
  },
  {
    title: "GHRH Effects on Brain GABA Levels in Mild Cognitive Impairment and Healthy Aging",
    authors: "Friedman SD, Baker LD, Borson S, et al.",
    journal: "PMC / JAMA Neurology",
    year: "2013",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3764915/",
    summary: "A 20-week randomized trial in which healthy older adults and adults with mild cognitive impairment self-administered daily tesamorelin. The study found that tesamorelin altered brain neurochemical levels \u2014 specifically GABA, an inhibitory neurotransmitter \u2014 and documented cognitive improvements. The research team\u2019s prior trial with sermorelin had shown improvements in working memory, planning, and selective attention; this trial extended those findings using tesamorelin and MRI brain spectroscopy to measure actual neurochemical changes, providing a plausible biological mechanism for GH secretagogues\u2019 cognitive effects.",
  },
  {
    title: "Tesamorelin Reduces Liver Fat Content in HIV Patients with NAFLD",
    authors: "ScienceDirect / Pharmacological Research",
    journal: "ScienceDirect / Pharmacological Research",
    year: "2018",
    access: "Paywalled",
    url: "https://www.sciencedirect.com/topics/medicine-and-dentistry/tesamorelin",
    summary: "Clinical trial evidence showing that tesamorelin reduced liver fat content and prevented liver inflammation and fibrosis progression in HIV patients with non-alcoholic fatty liver disease (NAFLD). This extended tesamorelin\u2019s clinical relevance beyond visceral fat reduction and into liver disease \u2014 one of the most common and serious metabolic complications in HIV-treated patients. A prospective Phase II trial in non-HIV NAFLD patients subsequently began (NCT03375788), suggesting tesamorelin\u2019s liver protective effects may have broader applications beyond the HIV-lipodystrophy population.",
  },
];

export default function TesamorelinResearchPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Tesamorelin Research</h1>
        <span className="tag">Growth Hormone</span>
      </div>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-xl">Key peer-reviewed studies on Tesamorelin (Egrifta), a stabilized synthetic analog of GHRH(1-44). Tesamorelin is the only GHRH analog currently FDA-approved \u2014 approved in 2010 for the reduction of excess abdominal fat in HIV-infected patients with lipodystrophy. It has also been studied for cognitive function and metabolic health. Each summary is written in plain English. Click any title to read the full article.</p>
      <div className="space-y-6">
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 rounded-xl p-5 hover:border-[#0D7377] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 text-gray-500"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1e2d3d] hover:text-[#0D7377] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 mb-3">{s.authors}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <p className="text-sm font-medium text-gray-700 mb-1">View the full Tesamorelin profile</p>
        <p className="text-xs text-gray-500 mb-3">Mechanism of action, FDA approval, visceral fat reduction data, and cognitive research.</p>
        <Link href="/peptides/tesamorelin" className="btn-primary text-sm">Tesamorelin Profile</Link>
      </div>
    </div>
  );
}
