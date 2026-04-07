import Link from "next/link";

export const metadata = {
  title: "Wolverine Stack Research Profile | Prof. Peptide",
  description:
    "Wolverine Stack (BPC-157 + TB-500) research profile — how these two peptides combine for synergistic tissue repair, key research, benefits, and limitations.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "The Wolverine Stack is the popular name for the combination of BPC-157 and TB-500 (Thymosin Beta-4 fragment), two of the most widely studied tissue-repair peptides in preclinical research. Named for its association with rapid healing, the stack pairs two peptides that operate through distinct but complementary biological mechanisms — BPC-157 primarily through growth factor modulation and nitric oxide signalling, and TB-500 through actin regulation and cellular migration. The rationale is that by activating different arms of the repair cascade simultaneously, the combination may produce additive or synergistic effects beyond what either peptide achieves alone. This stack is not a single compound but a research protocol combining two separate peptides.",
  },
  {
    id: "how-they-work-together",
    title: "How They Work Together",
    content:
      "BPC-157 and TB-500 target tissue repair from different angles. BPC-157 focuses on the biochemical signalling environment — upregulating growth factors (VEGF, EGR-1), modulating nitric oxide pathways, and stimulating collagen synthesis. TB-500 focuses on the structural and cellular level — regulating actin polymerisation to enable cytoskeletal remodelling, accelerating cell migration into damaged areas, and promoting angiogenesis through endothelial cell proliferation. Together, they address both the signalling that initiates repair and the cellular mechanics that carry it out. This dual-pathway approach is the theoretical basis for the stack's popularity in recovery-focused research protocols.",
  },
  {
    id: "bpc-157-role",
    title: "BPC-157 Role",
    content:
      "Body Protection Compound-157 is a synthetic pentadecapeptide (15 amino acids) derived from a protective protein found in human gastric juice. In the Wolverine Stack, BPC-157 serves as the primary signalling peptide. It modulates nitric oxide (NO) synthesis — upregulating eNOS in vascular tissue while attenuating excessive iNOS in inflammatory states. It upregulates growth factor expression including VEGF and EGR-1, promoting angiogenesis and fibroblast proliferation. BPC-157 also enhances collagen synthesis and tendon-to-bone insertion remodelling through FAK-paxillin pathway activation. Additionally, it interacts with dopaminergic and serotonergic systems, which may contribute neuroprotective effects. It is notably stable across a wide pH range (1-11) and has demonstrated oral bioavailability in animal models.",
  },
  {
    id: "tb-500-role",
    title: "TB-500 Role",
    content:
      "TB-500 is a synthetic analog of Thymosin Beta-4, a naturally occurring 43-amino acid peptide found in virtually all mammalian cells. In the Wolverine Stack, TB-500 serves as the primary structural repair peptide. Its core mechanism involves high-affinity binding to monomeric G-actin, sequestering actin monomers to maintain a ready pool for rapid cytoskeletal remodelling. This is critical for directed cellular migration — moving progenitor cells, endothelial cells, keratinocytes, and fibroblasts toward injury sites. TB-500 also upregulates matrix metalloproteinase (MMP) production, promotes angiogenesis through endothelial tube formation, reduces apoptosis, modulates inflammatory cascades, decreases myofibroblast activity (reducing scarring), and mobilises stem and progenitor cells to injury sites.",
  },
  {
    id: "synergy",
    title: "The Synergy",
    body: [
      "Complementary angiogenesis — BPC-157 drives new blood vessel formation via VEGF upregulation while TB-500 promotes it through endothelial cell migration and tube formation, attacking vascularisation from both the signalling and structural sides.",
      "Parallel anti-inflammatory pathways — BPC-157 modulates NO-mediated inflammation while TB-500 reduces inflammatory cascades and apoptosis through separate mechanisms, providing broader anti-inflammatory coverage.",
      "Collagen + migration — BPC-157 stimulates collagen synthesis and fibroblast proliferation while TB-500 accelerates the migration of those fibroblasts into the wound site, pairing production with delivery.",
      "Broader tissue coverage — BPC-157 has strongest preclinical evidence in gastrointestinal and tendon models while TB-500 shows particular strength in dermal wound healing, cardiac tissue, and corneal repair, giving the combination a wider tissue reach.",
      "Reduced scarring potential — TB-500's ability to decrease myofibroblast numbers combined with BPC-157's growth factor modulation may reduce fibrotic scar formation compared to unassisted healing.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Tendon and ligament repair — Both peptides independently show accelerated healing in Achilles and rotator-cuff injury models. The combination is the most commonly studied pairing in musculoskeletal recovery research.",
      "Muscle injury recovery — BPC-157 accelerates functional recovery in crush-injury models while TB-500 promotes the cellular migration necessary for muscle fibre regeneration.",
      "Wound healing — TB-500 demonstrated 42-61% improvement in wound healing rates vs. controls in preclinical models. BPC-157 adds growth factor support and anti-inflammatory modulation.",
      "Post-surgical recovery — The stack is frequently referenced in research protocols examining recovery from soft-tissue surgical procedures in animal models.",
      "Gastrointestinal repair — BPC-157 has robust evidence for gastroprotection and gut healing; TB-500's anti-inflammatory and anti-apoptotic effects may complement GI protocols.",
      "Joint and connective tissue — Both peptides have been studied in models of cartilage damage, with BPC-157 promoting collagen synthesis and TB-500 supporting cellular remodelling.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits",
    body: [
      "Accelerated soft-tissue and tendon healing rates in preclinical injury models",
      "Enhanced angiogenesis through dual-pathway activation (VEGF + endothelial migration)",
      "Broader anti-inflammatory coverage via complementary NO and cytokine modulation",
      "Improved cellular migration and fibroblast delivery to injury sites",
      "Increased collagen synthesis paired with structural remodelling capacity",
      "Reduced scar formation and fibrosis compared to unassisted healing in animal models",
      "Stem cell mobilisation and differentiation at injury sites (TB-500 contribution)",
      "Gastroprotective effects and gut healing support (BPC-157 contribution)",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "Important caveats apply to the Wolverine Stack: (1) Nearly all evidence for both peptides is from preclinical animal models — no completed randomised controlled human trials exist for either peptide individually or in combination as of 2025. (2) While the theoretical rationale for synergy is strong, direct head-to-head studies comparing the combination vs. each peptide alone are limited. (3) Much of the BPC-157 literature originates from a single Croatian research group (Sikiric et al.), creating concentration-of-source bias. (4) Optimal dosing ratios, timing, administration routes, and cycle lengths for the combination are unknown in humans. (5) Long-term safety data is absent. (6) Neither peptide is approved by the FDA, EMA, or any major regulatory body for therapeutic use. Both are prohibited in sport by WADA. Neither BPC-157 nor TB-500 is FDA approved for any medical use. (7) Anecdotal reports, while extensive, cannot substitute for controlled clinical evidence.",
  },
  {
    id: "individual-profiles",
    title: "Individual Peptide Profiles",
    links: [
      { name: "BPC-157 Full Research Profile", href: "/peptides/bpc-157" },
      { name: "TB-500 Full Research Profile", href: "/peptides/tb-500" },
    ],
  },
  {
    id: "references",
    title: "References",
    body: [
      "Sikiric P, et al. (2018). Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications. Curr Neuropharmacol. 16(10):1401-1425.",
      "Chang CH, et al. (2011). The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration. J Appl Physiol. 110(3):774-780.",
      "Gwyer D, et al. (2019). Gastric pentadecapeptide body protection compound BPC 157 and its role in healing disorders. Front Pharmacol. 10:1523.",
      "Goldstein AL, Kleinman HK. (2011). Thymosin β4: a multi-functional regenerative peptide. Basic properties and clinical applications. Expert Opin Biol Ther. 11(4):421-429.",
      "Malinda KM, et al. (1999). Thymosin β4 accelerates wound healing. J Invest Dermatol. 113(3):364-368.",
      "Sosne G, et al. (2007). Thymosin beta-4 and corneal wound healing: visions of the future. Ann N Y Acad Sci. 1112:142-152.",
      "GlobalRPH. (2025). BPC-157 and TB-500: Background, Indications, Efficacy, and Safety.",
      "Staresinic M, et al. (2006). Gastric pentadecapeptide BPC 157 accelerates healing of transected rat Achilles tendon. J Orthop Res. 21(6):976-983.",
    ],
  },
];

export default function WolverineStackPage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0D7377] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Wolverine Stack</h1>
        <span className="tag">BPC-157 + TB-500</span>
        <span className="tag">Combination Stack</span>
        <span className="tag">Preclinical</span>
      </div>

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
            {s.links && (
              <div className="space-y-2">
                {s.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-[#0D7377] hover:underline"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D7377] flex-shrink-0" />
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Recovery", "Tissue Repair", "Combination Stack", "Preclinical"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
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
