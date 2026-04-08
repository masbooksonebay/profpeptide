import Link from "next/link";

export const metadata = {
  title: "Melanotan II Research | Prof. Peptide",
  description: "Key peer-reviewed studies on Melanotan II with plain-English summaries.",
};

const studies = [
  {
    title: "Evaluation of Melanotan-II \u2014 A Superpotent Cyclic Melanotropic Peptide \u2014 in a Pilot Phase I Clinical Study",
    authors: "Dorr RT, Lines R, Levine N, et al.",
    journal: "Life Sciences / PubMed",
    year: "1996",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/8622573/",
    summary: "The first human Phase I clinical trial of Melanotan II, conducted at the University of Arizona. Researchers evaluated safety, pharmacokinetics, and tanning effects of subcutaneous MT-II in healthy volunteers. The trial confirmed that MT-II produced visible tanning within 5 doses without UV exposure \u2014 establishing proof of concept for its primary intended application. The study also documented the now well-known side effects: nausea, facial flushing, fatigue, yawning, and spontaneous penile erections \u2014 the last of which redirected subsequent research toward MT-II\u2019s effects on sexual function. This trial is the origin point of the entire Melanotan II research and commercial history.",
  },
  {
    title: "Discovery That a Melanocortin Regulates Sexual Functions in Male and Female Humans",
    authors: "Hadley ME",
    journal: "Peptides / PubMed",
    year: "2005",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/15996790/",
    summary: "The paper documenting the accidental discovery that Melanotan II enhances sexual function in both males and females \u2014 an observation first noted during tanning trials. MT-II was shown to enhance erectile activity in men and increase sexual desire and genital arousal in women, working at the level of the brain through melanocortin receptor activation rather than through peripheral vascular effects. This discovery was significant because it demonstrated a central nervous system pathway for sexual arousal modulation \u2014 directly leading to the development of bremelanotide (PT-141), a more selective MC4R agonist that is now FDA-approved for female sexual dysfunction.",
  },
  {
    title: "Melanocortin Peptide Therapeutics \u2014 Historical Milestones, Clinical Studies and Commercialization",
    authors: "Hadley ME, Dorr RT",
    journal: "Peptides / PubMed",
    year: "2006",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/16412534/",
    summary: "A comprehensive review of the full Melanotan program \u2014 from initial discovery through clinical development and the pivot toward commercialization. The paper traces MT-I (afamelanotide) and MT-II development, documents the clinical trial history for tanning and erectile dysfunction indications, and describes the development of PT-141 (bremelanotide) as a more selective derivative of MT-II. A key finding: while MT-II showed efficacy for erectile dysfunction in clinical studies, its non-selective receptor binding profile and side effect burden led researchers to develop PT-141 as a cleaner next-generation compound. This paper represents the most complete scientific history of the Melanotan program available in the English-language literature.",
  },
  {
    title: "An Overview of Benefits and Risks of Chronic Melanocortin-1 Receptor Activation",
    authors: "PMC Research Group",
    journal: "PMC / British Journal of Dermatology",
    year: "2024",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11664455/",
    summary: "The most current and balanced risk assessment of Melanotan II, documenting five reported cases of melanoma occurring during or after MT-II use \u2014 all in individuals with additional risk factors including fair skin, tanning bed use, and/or family history of melanoma. The review explains the biological mechanism of concern: MT-II stimulates melanocyte activity through MC1R, which can accelerate melanocytic activity in pre-existing nevi (moles). It also covers the non-selective receptor activation profile of MT-II \u2014 unlike selective MC1R agonists, MT-II crosses the blood-brain barrier and activates MC3R and MC4R, producing appetite suppression, fatigue, and erections as off-target effects. The authors recommend against the use of unlicensed melanocortin agents.",
  },
];

export default function MelanotanIIResearchPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Melanotan II Research</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
      </div>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed max-w-xl">Key peer-reviewed studies on Melanotan II (MT-II), a synthetic cyclic analog of alpha-melanocyte-stimulating hormone. Melanotan II is NOT approved by the FDA or any regulatory agency and has significant safety concerns including potential melanoma risk. It is illegal to sell for human use in many countries. Research is included here for educational purposes only. Each summary is written in plain English. Click any title to read the full article.</p>

      <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-8 text-xs text-red-800">
        Melanotan II carries meaningful safety risks including reported cases of melanoma, mole changes, priapism, rhabdomyolysis, and cardiovascular effects. It is not FDA approved and is not legal to sell for human use in the US, UK, or EU. Researchers and clinicians should be aware of these risks.
      </div>

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
        <p className="text-sm font-medium text-gray-700 mb-1">View the full Melanotan II profile</p>
        <p className="text-xs text-gray-500 mb-3">Mechanism of action, receptor binding, safety concerns, and relationship to PT-141.</p>
        <Link href="/peptides/melanotan-ii" className="btn-primary text-sm">Melanotan II Profile</Link>
      </div>
    </div>
  );
}
