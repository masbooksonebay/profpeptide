import Link from "next/link";

export const metadata = {
  title: "AOD-9604 Research | Prof. Peptide",
  description: "Key peer-reviewed studies on AOD-9604 with plain-English summaries.",
};

const studies = [
  {
    title: "Metabolic Studies of a Synthetic Lipolytic Domain (AOD9604) of Human Growth Hormone",
    authors: "Ng FM, Sun J, Sharma L, et al.",
    journal: "Hormone Research in Paediatrics",
    year: "2000",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/10965310/",
    summary: "One of the foundational animal studies establishing AOD-9604\u2019s lipolytic mechanism. Researchers confirmed that the C-terminal fragment of growth hormone specifically activates fat breakdown in adipose tissue without affecting IGF-1 levels or insulin sensitivity \u2014 the core design hypothesis of the compound. These results in obese rodent models generated the scientific rationale for advancing to human clinical trials.",
  },
  {
    title: "The Effects of Human GH and its Lipolytic Fragment (AOD9604) on Lipid Metabolism Following Chronic Treatment in Obese Mice and Beta(3)-AR Knock-Out Mice",
    authors: "Heffernan M, et al.",
    journal: "Endocrinology",
    year: "2001",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/11713242/",
    summary: "This study examined AOD-9604\u2019s fat-burning mechanism more deeply in obese mice \u2014 including mice without functioning beta-3 adrenergic receptors. The findings confirmed that AOD-9604 reduces fat accumulation and promotes fat oxidation, and that while some of its effects involve beta-3 adrenergic signaling, additional pathways are also involved. The persistence of some effects in knock-out mice suggested a more complex mechanism than initially thought.",
  },
  {
    title: "Safety and Tolerability of the Hexadecapeptide AOD9604 in Humans",
    authors: "Stier H, Vos E, Kenley D",
    journal: "Journal of Endocrinology and Metabolism",
    year: "2013",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/23943793/",
    summary: "The key human safety study of AOD-9604, reporting findings from trials involving over 900 participants across six studies. AOD-9604 was found to be well tolerated with no significant effects on glucose levels, IGF-1, or other metabolic markers \u2014 confirming the selective mechanism designed to avoid growth hormone\u2019s side effects. The clean safety profile remains one of AOD-9604\u2019s genuine strengths even after its weight loss efficacy failed to be demonstrated in the pivotal Phase 2b trial.",
  },
  {
    title: "AOD-9604: Lessons From a Discontinued Peptide Drug Candidate",
    authors: "Emirati Times \u2014 Research Summary",
    journal: "Emirati Times",
    year: "2025",
    access: "Open Access",
    url: "https://emiratitimes.com/lessons-from-a-discontinued-aod-9604-research-peptide/",
    summary: "A 2025 analysis examining the full arc of AOD-9604\u2019s development \u2014 from promising preclinical data to clinical failure and discontinuation. The article documents how a 24-week Phase 2b trial in 536 subjects found no statistically significant weight loss difference from placebo, leading Metabolic Pharmaceuticals to terminate the obesity development program in 2007. It also covers the FDA\u2019s December 2024 determination that AOD-9604 should not be included on the 503A compounding bulks list, and the pivot toward cartilage repair as an emerging research direction. An important case study in how promising animal data can fail to translate to human clinical outcomes.",
  },
];

export default function AOD9604ResearchPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">AOD-9604 Research</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on AOD-9604 (GH fragment 176-191). This compound completed Phase 2 clinical trials but pharmaceutical development was discontinued in 2007 after failing to meet primary endpoints in humans. Each summary is written in plain English. Click any title to read the full article.
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
        <p className="text-sm font-medium text-gray-700 mb-1">View the full AOD-9604 profile</p>
        <p className="text-xs text-gray-500 mb-3">Mechanism of action, clinical trial history, regulatory status, and WADA status.</p>
        <Link href="/peptides/aod-9604" className="btn-primary text-sm">AOD-9604 Profile</Link>
      </div>
    </div>
  );
}
