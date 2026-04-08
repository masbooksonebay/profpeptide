import Link from "next/link";

export const metadata = {
  title: "TB-500 Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "5 key TB-500 studies summarized in plain English. Covers wound healing, muscle regeneration, cardiac repair, and developmental biology.",
};

const studies = [
  {
    title: "Thymosin Beta4 Accelerates Wound Healing",
    authors: "Malinda KM, Goldstein AL, Kleinman HK",
    journal: "FASEB Journal / PubMed",
    year: "1999",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/10469335/",
    summary: "The foundational study establishing Thymosin Beta-4 (the parent molecule of TB-500) as a potent wound healing factor. In a rat full-thickness wound model, Thymosin Beta-4 administered topically or systemically increased wound re-epithelialization by 42% at day 4 and 61% at day 7 compared to saline controls. Treated wounds also contracted at least 11% more than controls. The researchers found that even tiny concentrations (as little as 10 picograms) stimulated keratinocyte migration up to 300% above baseline in the Boyden chamber assay. This was the paper that first characterized Thymosin Beta-4 as a multi-activity wound healing compound with clinical potential.",
  },
  {
    title: "Thymosin Beta-4: A Multi-Functional Regenerative Peptide \u2014 Basic Properties and Clinical Applications",
    authors: "Goldstein AL, Hannappel E, Kleinman HK",
    journal: "Expert Opinion on Biological Therapy",
    year: "2012",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/22074294/",
    summary: "A landmark review establishing the scientific foundation for Thymosin Beta-4 clinical development. The paper documents the peptide\u2019s multiple mechanisms \u2014 actin sequestration promoting cell migration, stem/progenitor cell mobilization to injury sites, angiogenesis stimulation, anti-inflammatory modulation, and reduction of myofibroblast activity (which reduces scarring). The review notes that these properties provide the scientific rationale for clinical trials in dermal wounds, corneal injuries, cardiac tissue regeneration after ischemic insult, and CNS trauma recovery. This review remains one of the most cited foundational papers for TB-500 research.",
  },
  {
    title: "Muscle Injury-Induced Thymosin Beta-4 Acts as a Chemoattractant for Myoblasts",
    authors: "Hara T, et al.",
    journal: "Journal of Cell Science / PubMed",
    year: "2011",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/20880960/",
    summary: "This study specifically examined Thymosin Beta-4\u2019s role in skeletal muscle regeneration \u2014 directly relevant to TB-500\u2019s applications in sports recovery research. The researchers found that T\u03B24 mRNA was upregulated in regenerating muscle fibers following injury, and that both T\u03B24 and its sulphoxidized form significantly accelerated wound closure and increased chemotaxis (directed migration) of muscle progenitor cells (myoblasts) toward the injury site. The study established that Thymosin Beta-4 is not just a passive wound healing molecule but an active recruiter of the cells needed to rebuild damaged muscle tissue.",
  },
  {
    title: "Utilizing Developmentally Essential Secreted Peptides Such as Thymosin Beta-4 to Remind Adult Organs of Their Embryonic State \u2014 New Directions in Anti-Aging Regenerative Therapies",
    authors: "Maar K, et al.",
    journal: "PMC / International Journal of Molecular Sciences",
    year: "2021",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8228050/",
    summary: "A compelling 2021 review examining Thymosin Beta-4\u2019s regenerative potential from a developmental biology perspective. The paper documents how T\u03B24 is expressed at high levels during embryonic development across the heart, brain, limb buds, and muscles \u2014 and how supplementing adult tissue with T\u03B24 may reactivate these developmental repair programs. It covers TB-500\u2019s anti-inflammatory mechanism (blocking neutrophil chemotaxis, reducing cytochrome c release, decreasing caspase activation), its role in cardiac regeneration after ischemia, corneal wound healing, and its potential as an anti-aging therapeutic. The paper also acknowledges ongoing research into TB-500\u2019s use as a performance-enhancing compound in sports.",
  },
  {
    title: "Therapeutic Peptides in Orthopaedics: Applications, Challenges, and Future Directions",
    authors: "PMC Research Group",
    journal: "PMC / Journal of the American Academy of Orthopaedic Surgeons",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12753158/",
    summary: "A 2025 review placing TB-500 in the broader context of therapeutic peptides for orthopaedic injuries. The paper summarizes TB-500\u2019s mechanisms \u2014 actin polymerization promotion, progenitor cell recruitment, enhanced cellular migration, anti-inflammatory effects, and proangiogenic activity \u2014 and notes its parallels with BPC-157 in terms of tissue repair mechanisms. The review identifies TB-500 as one of several emerging peptides with potential for tendon and muscle repair applications, while acknowledging that formal clinical evidence in humans remains limited and that these compounds are being used ahead of regulatory approval.",
  },
];

export default function TB500ResearchPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">TB-500 Research</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on TB-500 (synthetic fragment of Thymosin Beta-4). Research spans wound healing, muscle repair, cardiac regeneration, and anti-inflammatory applications \u2014 primarily in preclinical models. Human clinical data is limited. Each summary is written in plain English. Click any title to read the full article.
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
        <p className="text-sm font-medium text-gray-700 mb-1">View the full TB-500 profile</p>
        <p className="text-xs text-gray-500 mb-3">Mechanism of action, research limitations, stacking, and references.</p>
        <Link href="/peptides/tb-500" className="btn-primary text-sm">TB-500 Profile</Link>
      </div>
    </div>
  );
}
