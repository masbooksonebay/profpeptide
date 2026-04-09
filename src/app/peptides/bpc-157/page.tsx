import Link from "next/link";

export const metadata = {
  title: "BPC-157 — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "BPC-157 research profile covering tissue repair mechanism, gut healing evidence, tendon recovery studies, dosage protocols, and safety considerations.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Body Protection Compound-157 (BPC-157) is a synthetic pentadecapeptide (15 amino acids) derived from a protective protein found in human gastric juice. Originally isolated by researchers studying gastroprotective mechanisms, it has become one of the most extensively studied peptides in preclinical tissue-repair research. Its chemical stability at physiological pH and oral bioavailability in animal models distinguish it from many other research peptides.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    content:
      "BPC-157 appears to exert its effects through multiple overlapping pathways. It modulates nitric oxide (NO) synthesis — both upregulating eNOS in vascular tissue and attenuating excessive iNOS activity in inflammatory states. It upregulates growth factor expression including VEGF and EGR-1, promoting angiogenesis and fibroblast proliferation. BPC-157 also interacts with dopaminergic and serotonergic neurotransmitter systems, which may account for reported neuroprotective and mood-stabilising effects in rodent models. Collagen synthesis and tendon-to-bone insertion remodelling are enhanced through FAK-paxillin pathway activation.",
  },
  {
    id: "research",
    title: "Key Research Areas",
    content:
      "The majority of published research is preclinical (rodent models). Key areas include: (1) Tendon and ligament healing — multiple studies report accelerated Achilles and rotator-cuff repair. (2) Muscle repair — blunt-force and crush-injury models show faster functional recovery. (3) Bone healing — fracture models demonstrate improved mineralisation rates. (4) Gastrointestinal protection — robust evidence for protection against NSAID-induced gastric lesions, IBD models, and fistula closure. (5) CNS and peripheral nerve repair — spinal cord crush, sciatic nerve transection, and traumatic brain injury models. (6) Corneal tissue repair. As of 2025 there are no completed Phase II or III human clinical trials.",
  },
  {
    id: "benefits",
    title: "Observed Benefits",
    content:
      "In animal studies the most consistently observed benefits are: accelerated soft-tissue and tendon healing (often 30-50% faster in injury models); gastroprotection against NSAID, alcohol, and stress-induced ulcers; reduced systemic inflammation markers; partial reversal of dopamine-depletion behaviours in movement-disorder models; improved peripheral nerve conduction after crush injury; and cytoprotective effects in liver and heart ischaemia-reperfusion models. These results have not yet been replicated in controlled human trials.",
  },
  {
    id: "halflife",
    title: "Half-Life and Stability",
    content:
      "BPC-157 has a very short systemic half-life, estimated at under 30 minutes in rodent pharmacokinetic studies. Despite this, studies show sustained biological effects that outlast plasma clearance, suggesting local tissue depot activity or downstream gene-expression changes. The peptide is notably stable across a wide pH range (1-11), consistent with its survival in gastric acid and its documented oral efficacy in animal models. Lyophilised powder is stable at -20 degrees C for extended periods; reconstituted solution should be stored at 4 degrees C and used within 2-4 weeks.",
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "Several important caveats apply to the BPC-157 literature: (1) Almost all evidence is from rodent models; direct extrapolation to humans carries significant uncertainty. (2) No completed randomised controlled human trials exist as of 2025. (3) Many studies originate from a single Croatian research group (Sikiric et al.), creating a concentration-of-source bias. (4) Optimal human dosing, administration route, and cycle length are unknown. (5) Long-term safety data in humans is absent. (6) BPC-157 is not approved by the FDA, EMA, or any major regulatory body for therapeutic use. It is not scheduled as a controlled substance in most countries but is prohibited in sport by WADA. BPC-157 is not FDA approved for any medical use and is classified as a Category 2 bulk drug substance, meaning it cannot be compounded by commercial pharmacies.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "In preclinical and anecdotal research contexts, BPC-157 is frequently combined with: TB-500 (Thymosin Beta-4 fragment) for complementary musculoskeletal repair — different mechanisms targeting actin polymerisation and cell migration; KPV or other anti-inflammatory peptides for GI protocols; and GHRPs such as Ipamorelin where systemic recovery is the research objective. The BPC-157 + TB-500 pairing is the most studied combination, with rodent studies suggesting additive effects on tendon and muscle repair. No human combination-therapy trial data exists.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "Sikiric P, et al. (2018). Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications. Curr Neuropharmacol. 16(10):1401-1425.",
      "Chang CH, et al. (2011). The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration. J Appl Physiol. 110(3):774-780.",
      "Gwyer D, et al. (2019). Gastric pentadecapeptide body protection compound BPC 157 and its role in healing disorders. Front Pharmacol. 10:1523.",
      "Tkalcevic VI, et al. (2007). Enhancement by PL 14736 of granulation and angiogenesis in rats. Eur J Pharmacol. 570(1-3):212-221.",
      "Seiwerth S, et al. (2014). BPC 157 and Standard Angiogenesis. Curr Pharm Des. 20(7):1126-1135.",
      "Staresinic M, et al. (2006). Gastric pentadecapeptide BPC 157 accelerates healing of transected rat Achilles tendon. J Orthop Res. 21(6):976-983.",
      "Vukojevic J, et al. (2018). Pentadecapeptide BPC 157 and the central nervous system. Prog Neuropsychopharmacol Biol Psychiatry. 84(Pt B):363-372.",
    ],
  },
];

export default function BPC157Page() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">BPC-157</h1>
        <span className="tag">Tissue Repair Peptide</span>
        <span className="tag">Preclinical</span>
      </div>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((ref, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                    {ref}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Recovery", "Tissue Repair", "Preclinical"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/coupons" className="btn-primary text-sm text-center">
            View Verified Discount Codes &rarr;
          </Link>
          <a
            href="https://www.amazon.com/s?k=recovery+tissue+repair+supplements&tag=profpeptide-20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm text-center"
          >
            Search Related Supplements on Amazon &rarr;
          </a>
        </div>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
  );
}
