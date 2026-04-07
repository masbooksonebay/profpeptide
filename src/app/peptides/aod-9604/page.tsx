import Link from "next/link";

export const metadata = {
  title: "AOD-9604 Research Profile | Prof. Peptide",
  description:
    "AOD-9604 research profile \u2014 GH fragment 176-191, selective lipolysis, failed Phase IIb trial, cartilage repair pivot, regulatory status, and references.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "AOD-9604 is a synthetic 16-amino acid peptide fragment derived from the C-terminal domain of human growth hormone \u2014 specifically amino acids 176\u2013191 \u2014 with a stabilizing tyrosine substitution at the N-terminus. It was developed by Metabolic Pharmaceuticals in Australia during the 1990s with a compelling premise: isolate the lipolytic (fat-burning) region of growth hormone while removing the regions responsible for IGF-1 elevation, anabolic effects, and glucose dysregulation. The name stands for \"Advanced Obesity Drug 9604.\" The early animal data was genuinely impressive \u2014 significant reductions in body fat in obese rodent models without affecting IGF-1 levels or insulin sensitivity. However, despite completing six human clinical trials involving over 900 participants, AOD-9604 failed to achieve statistical significance for weight loss in its largest Phase IIb trial and pharmaceutical development was terminated in 2007. This makes AOD-9604 a notable case study in translational pharmacology \u2014 strong mechanistic rationale and compelling preclinical data that did not translate to clinically meaningful human outcomes. It is not FDA approved for any indication, was placed on the WADA prohibited list, and the FDA determined in December 2024 that it should not be included on the 503A compounding bulks list. It remains available as a research compound with ongoing interest in cartilage repair applications \u2014 a pivot from its original obesity indication.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Selective Lipolysis Stimulation [1] \u2014 AOD-9604 is designed to activate the lipolytic signaling of growth hormone without engaging the full GH receptor. It stimulates lipolysis (fat breakdown) in adipose tissue through beta-3 adrenergic receptor-related pathways and direct effects on adipocyte lipase activity \u2014 promoting the release of stored fatty acids for oxidation.",
      "No IGF-1 Activation [2] \u2014 Unlike full-length growth hormone, AOD-9604 does not activate IGF-1 pathways, does not stimulate growth of bone, muscle, or other tissues, and does not impair glucose tolerance or insulin sensitivity. This selectivity was the core design rationale \u2014 a growth hormone fragment that burns fat without the metabolic side effects of GH.",
      "Anti-lipogenic Effects [1] \u2014 In addition to stimulating fat breakdown, AOD-9604 inhibits lipogenesis \u2014 the conversion of carbohydrates and other substrates into new fat \u2014 potentially reducing fat accumulation alongside increasing fat oxidation.",
      "Cartilage Repair \u2014 Emerging Application [3] \u2014 Following the failure of the obesity indication, Metabolic Pharmaceuticals licensed AOD-9604 for osteoarthritis research. Preclinical data suggests AOD-9604 may stimulate cartilage repair and proteoglycan synthesis in joint tissue \u2014 an entirely separate mechanism from its lipolytic effects that represents the primary ongoing research direction.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Animal Studies \u2014 Fat Loss [2] \u2014 Early studies in obese Zucker rats and mice showed AOD-9604 reduced body fat gain significantly without affecting IGF-1 levels, lean mass, or insulin sensitivity. In obese mice, the peptide reduced body weight by 50% more than placebo over 19 days in some studies \u2014 results that generated substantial early enthusiasm.",
      "Human Clinical Trials \u2014 Mixed Results [3] \u2014 Six human clinical trials involving over 900 participants were conducted between 2001 and 2007. A Phase IIa trial in 300 participants showed modest weight reduction (2.6 kg vs 0.8 kg placebo) over 12 weeks suggesting some activity. However the larger Phase IIb trial in 536 subjects over 24 weeks found no statistically significant weight loss difference from placebo \u2014 leading to termination of pharmaceutical development.",
      "Safety Profile [3] \u2014 A published safety trial found AOD-9604 was well tolerated with no significant effects on glucose, IGF-1, or other metabolic markers. The favorable safety profile across over 900 human trial participants is one of the compound's genuine strengths \u2014 even though efficacy for weight loss was not demonstrated.",
      "Cartilage and Joint Research [1] \u2014 Post-development research has explored AOD-9604 for intra-articular injection in osteoarthritis. Preliminary data suggests cartilage repair properties through mechanisms distinct from its lipolytic effects. This represents the most active current research direction for the compound.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Strong lipolytic effects in obese animal models without IGF-1 elevation",
      "No impairment of glucose tolerance or insulin sensitivity",
      "Well-tolerated safety profile across 900+ human trial participants",
      "Modest weight reduction signal in Phase IIa trial (2.6 kg vs 0.8 kg)",
      "Emerging cartilage repair data in osteoarthritis research",
      "Fat-specific effects \u2014 lean mass preserved while adipose tissue reduced in animals",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: 16 amino acid peptide \u2014 C-terminal fragment of hGH (aa 176\u2013191) with N-terminal tyrosine modification",
      "Molecular Formula: C\u2087\u2088H\u2081\u2082\u2083N\u2082\u2083O\u2082\u2083S\u2082",
      "Administration: Subcutaneous injection (research use); oral formulations studied historically",
      "Metabolism: Rapid degradation via amino-terminal truncation",
      "Detection: Detectable in plasma and urine via LC/MS/MS for several days post-administration",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory Status",
    content:
      "AOD-9604 has no regulatory approval from any major health authority worldwide including the FDA, EMA, or TGA. Pharmaceutical development for obesity was terminated in 2007 following Phase IIb trial failure. The FDA determined in December 2024 that AOD-9604 should not be included on the 503A compounding bulks list, citing limited long-term safety data, peptide impurities, and potential immunogenicity concerns. WADA lists AOD-9604 as a prohibited substance under S2 Peptide Hormones, Growth Factors, and Related Substances. It remains available as a research chemical.",
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) Failed its pivotal Phase IIb human clinical trial for weight loss \u2014 the primary intended indication. (2) Pharmaceutical development was permanently discontinued \u2014 no ongoing clinical development program exists. (3) Not FDA approved and restricted from compounding pharmacies since 2024 FDA determination. (4) WADA prohibited \u2014 banned in competitive sport. (5) Cartilage repair applications are early-stage with limited human data. (6) The translational gap between animal fat loss data and human outcomes remains unexplained \u2014 a cautionary example in peptide research.",
  },
  {
    id: "wada",
    title: "WADA Status",
    content:
      "AOD-9604 is listed on the WADA prohibited list under S2 substances and is banned in competitive sport.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "PMC. Obesity Pharmacotherapy: Current Perspectives and Future Directions. https://pmc.ncbi.nlm.nih.gov/articles/PMC3584306/",
      "Peptides Insider. AOD-9604 for Fat Loss: Does the Research Actually Support It? 2026. https://peptidesinsider.com/blog/aod-9604-fat-loss-research",
      "Paragon Sports Medicine. AOD-9604 Peptide \u2014 Weight Support and Joint Health. https://www.paragonsportsmedicine.com/peptides/aod-9604",
    ],
  },
];

export default function AOD9604Page() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0D7377] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">AOD-9604</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="text-xs bg-red-50 text-red-700 border border-red-200 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Development Discontinued 2007
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        Also Known As: Advanced Obesity Drug 9604, GH fragment 176-191, hGH 177-191 fragment
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">
              {s.title}
            </h2>
            {s.content && (
              <p className="text-sm text-gray-600 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["GH Fragment", "Lipolysis", "Failed Phase IIb", "WADA Prohibited"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <p className="text-sm font-medium text-gray-700 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>
    </div>
  );
}
