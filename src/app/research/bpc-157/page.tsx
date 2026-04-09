import Link from "next/link";

export const metadata = {
  title: "BPC-157 Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "5 key BPC-157 studies summarized in plain English. Covers tissue repair, gut healing, musculoskeletal recovery, and orthopedic sports medicine.",
};

const studies = [
  {
    title: "Stable Gastric Pentadecapeptide BPC 157 and Wound Healing",
    authors: "Sikiric P, Seiwerth S, Rucman R, et al.",
    journal: "Frontiers in Pharmacology",
    year: "2021",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full",
    summary: "One of the most comprehensive reviews of BPC-157\u2019s wound healing properties, covering over 25 years of research. The review documents BPC-157\u2019s ability to heal skin wounds, burns, diabetic ulcers, and complex fistulas in animal models through a combination of mechanisms \u2014 promoting angiogenesis (new blood vessel growth), stimulating collagen deposition, modulating the nitric oxide system, and accelerating re-epithelialization. A key finding is that BPC-157 appears to work regardless of administration route (oral, topical, or injected) and at the same effective dose range across different injury types \u2014 an unusual property that suggests it acts on fundamental repair pathways.",
  },
  {
    title: "Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review",
    authors: "Vasireddi N, Hahamyan H, Salata MJ, et al.",
    journal: "Sports Health / PMC",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/",
    summary: "The most current systematic review of BPC-157 specifically for musculoskeletal injuries \u2014 covering 36 studies from 1993 to 2024. The review found consistent evidence in animal models for BPC-157 promoting healing of muscle, tendon, ligament, and bone injuries by upregulating growth factors and reducing inflammation. Notably, one human study found 7 out of 12 patients with chronic knee pain reported relief lasting over 6 months after a single BPC-157 knee injection. The authors concluded that while results are promising, risks exist due to unregulated manufacturing and the absence of formal human clinical safety data.",
  },
  {
    title: "Multifunctionality and Possible Medical Application of the BPC 157 Peptide \u2014 Literature and Patent Review",
    authors: "Gwyer D, et al.",
    journal: "Pharmaceuticals (MDPI)",
    year: "2025",
    access: "Open Access",
    url: "https://www.mdpi.com/1424-8247/18/2/185",
    summary: "A comprehensive literature and patent review summarizing BPC-157\u2019s broad biological activities across tissue types. The review covers its effects on the GI tract, liver, pancreas, heart, and nerves \u2014 along with musculoskeletal repair. It addresses the regulatory status directly: BPC-157 was temporarily banned by WADA in 2022 (no longer listed as banned), has not been FDA approved due to the absence of comprehensive human clinical trials, and had a Phase 1 human trial initiated in 2015 that was cancelled before results were submitted. The review calls for more extensive human-oriented studies to establish therapeutic and toxicity profiles.",
  },
  {
    title: "Brain-Gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications",
    authors: "Sikiric P, et al.",
    journal: "PMC / Journal of Physiology and Pharmacology",
    year: "2017",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/",
    summary: "This review examines BPC-157\u2019s effects on the gut-brain axis \u2014 the bidirectional communication network between the gastrointestinal tract and the central nervous system. The paper documents BPC-157\u2019s success in treating GI conditions including ulcerative colitis, liver lesions, and gut fistulas, as well as its corresponding effects on the brain \u2014 including anxiolytic, antidepressant, and neuroprotective properties in animal models. This study is the basis for BPC-157\u2019s reputation as both a gut-healing peptide and a potential CNS-protective compound \u2014 two seemingly unrelated applications that connect through the gut-brain axis.",
  },
  {
    title: "BPC-157 as an Emerging Adjunct to Gastrointestinal Therapies \u2014 A Systematic Review",
    authors: "American College of Gastroenterology Research Group",
    journal: "American Journal of Gastroenterology (ACG)",
    year: "2025",
    access: "Abstract available",
    url: "https://journals.lww.com/ajg/fulltext/2025/10002/s808_oral_peptide_bpc_157_an_emerging_adjunct_to.809.aspx",
    summary: "A 2025 systematic review from gastroenterology specialists examining BPC-157\u2019s potential for GI conditions \u2014 including mucosal protection, wound healing, inflammatory bowel disease, and NSAID-induced GI injury. The reviewers concluded that BPC-157 shows promise from preclinical studies for a range of GI pathologies, but that its use remains investigational and should not yet be considered standard evidence-based therapy. The review represents mainstream gastroenterology\u2019s first formal acknowledgment of BPC-157\u2019s potential clinical relevance.",
  },
];

export default function BPC157ResearchPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">BPC-157 Research</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
        Key peer-reviewed studies on BPC-157 (Body Protection Compound-157). The majority of research is preclinical \u2014 animal models and in vitro studies. Human clinical data remains limited. Each summary is written in plain English. Click any title to read the full article.
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
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full BPC-157 profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, research limitations, stacking, and references.</p>
        <Link href="/peptides/bpc-157" className="btn-primary text-sm">BPC-157 Profile</Link>
      </div>
    </div>
  );
}
