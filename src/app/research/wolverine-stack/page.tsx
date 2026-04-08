import Link from "next/link";

export const metadata = {
  title: "Wolverine Stack Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "4 key Wolverine Stack studies summarized in plain English. Covers BPC-157 and TB-500 complementary mechanisms and orthopaedic combination rationale.",
};

const studies = [
  {
    title: "Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review",
    authors: "Vasireddi N, Hahamyan H, Salata MJ, et al.",
    journal: "Sports Health / PMC",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/",
    summary: "The most current systematic review of BPC-157 for musculoskeletal injuries \u2014 directly relevant to the Wolverine Stack\u2019s primary use case. The review found consistent evidence across 36 studies that BPC-157 promotes healing of muscle, tendon, ligament, and bone injuries by upregulating growth factors and reducing inflammation. BPC-157\u2019s mechanism in musculoskeletal tissue involves FAK-paxillin signaling, VEGFR2-Akt-eNOS activation, and nitric oxide modulation \u2014 pathways that are distinct from TB-500\u2019s actin-based mechanism, providing the rationale for combining them.",
  },
  {
    title: "Thymosin Beta-4: A Multi-Functional Regenerative Peptide \u2014 Basic Properties and Clinical Applications",
    authors: "Goldstein AL, Hannappel E, Kleinman HK",
    journal: "Expert Opinion on Biological Therapy",
    year: "2012",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/22074294/",
    summary: "The foundational review for TB-500\u2019s contribution to the Wolverine Stack. The paper documents Thymosin Beta-4\u2019s role in actin-mediated cell migration, stem cell mobilization, and angiogenesis \u2014 mechanisms that are upstream and complementary to BPC-157\u2019s downstream signaling effects on tissue repair. The two peptides together target both the cellular migration phase of healing (TB-500) and the tissue remodeling and vascularization phase (BPC-157), which is the mechanistic argument for using them in combination.",
  },
  {
    title: "Therapeutic Peptides in Orthopaedics: Applications, Challenges, and Future Directions",
    authors: "PMC Research Group",
    journal: "PMC / Journal of the American Academy of Orthopaedic Surgeons",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12753158/",
    summary: "A 2025 orthopaedic review that specifically discusses both BPC-157 and TB-500 together as wound-healing peptides acting on complementary molecular signaling networks. The paper notes that BPC-157 acts on PI3K/Akt, MAPK, and VEGF pathways, while TB-500 targets actin dynamics and integrin-mediated matrix remodeling \u2014 two parallel but distinct repair cascades. This is the closest thing to a published scientific justification for the combination stack, as it explicitly describes the two compounds\u2019 complementary mechanisms in the same research context.",
  },
  {
    title: "Stable Gastric Pentadecapeptide BPC 157 and Wound Healing",
    authors: "Sikiric P, et al.",
    journal: "Frontiers in Pharmacology",
    year: "2021",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full",
    summary: "A comprehensive review of BPC-157\u2019s wound healing evidence that helps contextualize how it fits alongside TB-500 in a combination protocol. The paper covers BPC-157\u2019s role in accelerating wound closure, promoting collagen deposition, and maintaining vascular integrity \u2014 the downstream tissue remodeling effects that complement TB-500\u2019s upstream role in recruiting progenitor cells and promoting cell migration to the injury site. Together these two phases of healing \u2014 cellular recruitment followed by structural repair \u2014 represent the biological rationale for the Wolverine Stack.",
  },
];

export default function WolverineStackResearchPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Research</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Wolverine Stack Research</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed max-w-xl">
        The Wolverine Stack combines BPC-157 and TB-500 for synergistic tissue repair. There are no studies specifically examining the combination \u2014 research on the stack is based on the individual evidence for each peptide and their complementary mechanisms. Each summary is written in plain English. Click any title to read the full article.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-8 text-xs text-amber-800">
        There are currently no published human clinical trials examining BPC-157 and TB-500 in combination. The research basis for the Wolverine Stack comes from the individual evidence for each compound. For BPC-157 specific research, see the{" "}
        <Link href="/research/bpc-157" className="underline font-medium">BPC-157 Research page</Link>. For TB-500 specific research, see the{" "}
        <Link href="/research/tb-500" className="underline font-medium">TB-500 Research page</Link>.
      </div>

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
        <p className="text-sm font-medium text-gray-700 mb-1">View the full Wolverine Stack profile</p>
        <p className="text-xs text-gray-500 mb-3">How BPC-157 and TB-500 work together, synergy mechanisms, and research limitations.</p>
        <Link href="/peptides/wolverine-stack" className="btn-primary text-sm">Wolverine Stack Profile</Link>
      </div>
    </div>
  );
}
