import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/bpc-157" },
  title: "BPC-157 — Body Protection Compound, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "BPC-157 research profile: tendon healing mechanism, dosing protocol, side effects, FDA Category 2 status, and clinical evidence.",
};

const faqs = [
  {
    q: "Does BPC-157 actually heal injuries?",
    a: "In animal models, consistently yes — 30+ years of preclinical research show accelerated tendon, ligament, muscle, and gut tissue healing. In humans, evidence is anecdotal: user reports describe meaningful pain reduction and mobility improvements within 5–10 days, with structural healing over 2–8 weeks. No completed Phase 2 or 3 human trials have been published, so the magnitude of effect in humans is not formally established.",
  },
  {
    q: "How is BPC-157 different from TB-500?",
    a: (
      <>
        BPC-157 works through growth factor signaling, nitric oxide modulation, and angiogenesis. TB-500 works through actin polymerization and cellular migration. The two are commonly stacked because their mechanisms are complementary rather than overlapping. See the{" "}
        <Link href="/compare/bpc-157-vs-tb-500" className="text-[#0891b2] hover:underline">
          BPC-157 vs TB-500 comparison
        </Link>
        {" "}for a side-by-side breakdown.
      </>
    ),
  },
  {
    q: "Should I inject near my injury or in my abdomen?",
    a: "For localized injuries (tendons, joints, muscle bellies), injecting near the injury site (within 0.5–1 inch) tends to produce stronger effects in animal models. For systemic effects (gut healing, general recovery), abdominal subcutaneous injection is standard. Both routes work; localized is preferred when the injury is at a specific site.",
  },
  {
    q: "Is BPC-157 safe long-term?",
    a: "Animal studies have not identified a toxic dose across 30+ years of research, which is unusual for any compound. However, no completed long-term human safety trials exist. Most user protocols use 4–8 week cycles followed by 4+ week off periods rather than continuous use, both for safety conservatism and to maintain effectiveness.",
  },
  {
    q: "Can I take BPC-157 orally?",
    a: "Yes, for gut-related applications. BPC-157 is unusually stable in gastric acid, which allows it to remain active when taken orally. For tendon, joint, or muscle injuries, injection is significantly more effective because oral bioavailability for systemic effects isn't well established.",
  },
  {
    q: "Why did the FDA restrict BPC-157?",
    a: "In 2023, the FDA classified BPC-157 as a Category 2 bulk drug substance, citing concerns about peptide impurities, lack of completed human safety trials, and safety risks. This restricts its availability through compounding pharmacies in the US. It can still be sold as a research-grade peptide for laboratory use.",
  },
  {
    q: "What's the typical cycle?",
    a: "Most users run 4–8 week cycles followed by 4+ week breaks. Chronic conditions or post-surgical recovery sometimes use 8–12 week cycles. Continuous long-term use isn't well studied. The Huberman protocol recommends 8 weeks on, 8–10 weeks off.",
  },
  {
    q: "Where can I buy BPC-157?",
    a: (
      <>
        BPC-157 is sold by specialty research peptide vendors. PP maintains a list of vetted vendors with verified discount codes — see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const sections = [
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Angiogenesis Promotion [1] — BPC-157 upregulates vascular endothelial growth factor (VEGF) and endothelial nitric oxide synthase (eNOS), which stimulate new blood vessel formation. This improves oxygen and nutrient delivery to injured tissue and is a primary mechanism for accelerated wound healing.",
      "Growth Factor Modulation [2] — BPC-157 increases expression of EGR-1 and other growth factors that drive fibroblast proliferation and collagen synthesis. Fibroblasts are the cells responsible for rebuilding connective tissue after injury.",
      "FAK-Paxillin Pathway Activation [3] — In tendon and ligament tissue, BPC-157 activates the FAK-paxillin signaling pathway, which enhances tendon-to-bone insertion strength and improves collagen organization during repair.",
      "Nitric Oxide Modulation [4] — BPC-157 modulates nitric oxide synthesis bidirectionally — upregulating eNOS in vascular tissue while attenuating excessive iNOS activity in inflammatory states. This provides anti-inflammatory effects without compromising vascular function.",
      "Gut-Brain Axis Effects [5] — BPC-157 interacts with dopaminergic and serotonergic neurotransmitter systems, which is why animal studies show neuroprotective effects in models of Parkinson's disease, depression, and traumatic brain injury alongside its gut-healing effects.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Tendon and Ligament Repair [3][6] — Multiple rat studies show 30–50% faster Achilles tendon and rotator cuff healing. A 2025 systematic review in Orthopaedic Journal of Sports Medicine analyzed 36 studies and found consistent benefits across musculoskeletal models.",
      "Muscle Injury Recovery [7] — Crush-injury and blunt-force models show accelerated functional recovery. BPC-157 supports muscle fiber regeneration and reduces fibrotic scar formation.",
      "Gastrointestinal Protection [5][8] — The most established research area. BPC-157 protects against NSAID-induced gastric lesions, accelerates ulcer healing, supports inflammatory bowel disease (IBD) models, and promotes intestinal anastomosis healing after surgery.",
      "Bone Healing — Fracture models demonstrate improved mineralization rates and faster bone callus formation.",
      "CNS and Peripheral Nerve Repair [9] — Sciatic nerve transection, spinal cord crush, and traumatic brain injury models show accelerated recovery. BPC-157 also reverses dopamine depletion behaviors in Parkinson's models.",
      "Phase 1 Human Trial — NCT02637284 was a Phase 1 safety and pharmacokinetics trial of oral BPC-157 (PCO-02). The trial is registered but no peer-reviewed results have been published.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "BPC-157 effects develop over time. Most users report no immediate sensation. Pain reduction and improved mobility commonly appear within 5–10 days when dosing is consistent. Tendon, ligament, and structural healing improvements typically emerge over 2–8 weeks. Gut protocols often produce noticeable digestive improvements within the first week. Effects are reported to be more pronounced when injected near the site of injury for localized soft-tissue applications.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          BPC-157 is administered by subcutaneous injection or oral dosing. Injection produces stronger systemic effects and is preferred for musculoskeletal injuries. Oral dosing is preferred for gastrointestinal applications because BPC-157&apos;s unusual gastric acid stability allows it to act locally on gut tissue.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standard injectable: 250 mcg subcutaneously once daily, or 250 mcg twice daily for stronger effect</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Higher injectable: 500 mcg once or twice daily for severe injuries or post-surgical recovery</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Localized injection: Injecting subcutaneously near the injury site (tendon, joint capsule, muscle belly) is more effective for localized injuries than abdominal injection</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weight-based reference: Research literature uses 2.5–3.75 mcg/kg twice daily — for most adults this is 300–400 mcg/day</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 4–8 weeks for routine recovery; up to 12 weeks for chronic conditions or post-surgical protocols</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Oral dosing: 250–500 mcg once or twice daily on an empty stomach for gut-related research</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Plasma half-life is under 30 minutes, but biological effects extend well beyond plasma clearance — likely due to local tissue depot activity and downstream gene expression changes. Dose titration is common, starting at 250 mcg daily and increasing as tolerated. The Huberman protocol recommends 300–500 mcg subcutaneously, two to three times per week for 8 weeks, followed by an 8–10 week off period.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side Effects & Safety",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild injection site reactions</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No common systemic side effects in animal studies</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Most users report no acute side effects</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild dizziness on initial doses (uncommon)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Slight changes in heart rate (uncommon)</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Long-term human safety data is absent — no completed Phase 2 or 3 trials</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical risk of unexplained tumor stimulation due to angiogenesis activity, though no reports of this in animal or human studies</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Severe allergic reactions — rare and not commonly reported</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          BPC-157 has one of the cleanest safety profiles of any research peptide in animal studies — researchers have not identified a toxic dose (no LD1) in tested species across 30+ years of research. However, no completed human safety trials confirm long-term safety in humans. The FDA classified BPC-157 as a Category 2 bulk drug substance in 2023, restricting its availability through compounding pharmacies.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin) for systemic effects, or near the injury site for localized injuries (tendons, joints, muscle bellies). Common injection sites: abdomen, thigh, upper arm.",
      "Time of day: Morning or post-workout is most common in user protocols. Some users prefer pre-bed for overnight repair.",
      "With or without food: Subcutaneous BPC-157 is unaffected by food. Oral BPC-157 is best on an empty stomach.",
      "Site rotation: Use a different site each day to reduce irritation. Stay at least 1 inch from previous injection sites.",
      "Localized injection: For tendon or joint injuries, inject 0.5–1 inch from the injured area. Avoid injecting directly into the tendon or joint space.",
      "Reconstitution: Use bacteriostatic water for injection. A typical reconstitution is 5 mg vial + 2 mL BAC water = 2.5 mg/mL (250 mcg per 0.1 mL).",
      "Missed dose: If less than 12 hours late, take as soon as remembered. Otherwise skip and resume on the next scheduled day.",
      "Cycle: Most users run 4–8 week cycles followed by 4+ week off periods.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standalone use — most common in research.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          TB-500 (Wolverine Stack) — the most popular pairing for musculoskeletal recovery. BPC-157 + TB-500 work through complementary mechanisms (growth factor signaling vs cellular migration). See{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">
            Wolverine Stack
          </Link>
          .
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">GHK-Cu — combined for skin and connective tissue repair. Different mechanisms with theoretical synergy.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">KPV — combined for inflammatory bowel research protocols where BPC-157 provides healing and KPV provides anti-inflammatory effects.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">GHRPs (CJC-1295, Ipamorelin) — combined for systemic recovery research where growth hormone signaling supplements BPC-157&apos;s local healing effects.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Resistance training — natural pairing for athletic recovery research; mechanical loading is necessary for proper tendon and muscle remodeling.</li>
      </ol>
    ),
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "NSAIDs — BPC-157 protects against NSAID-induced gut damage in animal models. The combination is studied directly rather than avoided.",
      "Anticoagulants — theoretical concern due to BPC-157's effects on angiogenesis and vascular function. Not clinically validated.",
      "No major drug interactions reported in animal studies",
      "Insulin and diabetes medications — no documented interactions",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: Store at 2–8°C; use within 28–30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Inject solvent slowly against the glass wall of the vial. Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
      "Protect from light. Store in original carton.",
      "Solution should be clear and colorless. Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          BPC-157 is not FDA-approved and is classified as a Category 2 bulk drug substance, meaning it cannot be compounded by commercial pharmacies in the US. This restriction was finalized in 2023.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Almost all evidence for BPC-157 is from rodent models. No completed Phase 2 or Phase 3 human clinical trials exist. A Phase 1 safety and pharmacokinetics trial (NCT02637284) was registered but published peer-reviewed results are not available.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Much of the published research originates from a single Croatian research group (Sikiric et al.), creating concentration-of-source bias. Independent replication is limited.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits BPC-157 in sport under Section S0 (non-approved substances). Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              {f.a}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "references",
    title: "References",
    node: (
      <ol className="list-decimal list-inside space-y-2">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Seiwerth S, Brcic L, Vuletic LB, et al. BPC 157 and Standard Angiogenesis. Curr Pharm Des. 2014;20(7):1126-35.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23782146/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23782146/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Tkalcevic VI, Cuzic S, Brajsa K, et al. Enhancement by PL 14736 of granulation and angiogenesis in rats. Eur J Pharmacol. 2007;570(1-3):212-21.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17588561/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17588561/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Chang CH, Tsai WC, Lin MS, et al. The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration. J Appl Physiol. 2011;110(3):774-80.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21030672/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21030672/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Sikiric P, Hahm KB, Blagaic AB, et al. Stable Gastric Pentadecapeptide BPC 157, Robust Vascular Therapy in Ischemia/Reperfusion Injury. Front Pharmacol. 2018;9:1383.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Sikiric P, Seiwerth S, Brcic L, et al. Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications. Curr Neuropharmacol. 2018;16(10):1401-25.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Vasireddi S, Vasireddi A, Sikiric P, et al. Pentadecapeptide BPC 157 in tendon and ligament injuries — systematic review of preclinical evidence. Orthopaedic Journal of Sports Medicine. 2025.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Hsieh MJ, Liu HT, Wang CN, et al. Therapeutic potential of BPC-157 on muscle injury healing. Sci Rep. 2020;10(1):17502.{" "}
          <a href="https://www.nature.com/articles/s41598-020-74552-5" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.nature.com/articles/s41598-020-74552-5
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Vukojevic J, Sikiric P, Strbe S, et al. Pentadecapeptide BPC 157 and the central nervous system. Prog Neuropsychopharmacol Biol Psychiatry. 2018;84(Pt B):363-72.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29017966/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29017966/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function BPC157Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"BPC-157","description":"BPC-157 research profile: tendon healing mechanism, dosing protocol, side effects, FDA Category 2 status, and clinical evidence.","url":"https://profpeptide.com/peptides/bpc-157","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"BPC-157"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">BPC-157</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Body Protection Compound-157, BPC 15, Pentadecapeptide BPC 157, PL 14736
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            BPC-157 is a 15-amino-acid synthetic peptide derived from a protective protein found in human gastric juice. Researchers have studied it for over 30 years for its remarkable wound healing, tendon repair, and gut protection effects in animal models. Despite 544+ published research articles between 1993 and 2024, no Phase 2 or Phase 3 human clinical trials have been completed. It remains one of the most popular research peptides for soft tissue recovery, with a notable safety profile and unusual stability across a wide pH range.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Accelerated tendon, ligament, and muscle healing in animal models (often 30–50% faster)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Gastroprotection against NSAIDs, alcohol, and stress-induced ulcers</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduced systemic inflammation markers</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Stable across wide pH range (1–11), allowing oral and injectable delivery</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improved peripheral nerve recovery in crush-injury models</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reported reduction in pain and improved mobility within 5–10 days in user reports</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols use 250–500 mcg subcutaneously once or twice daily. Typical cycle length is 4–8 weeks, sometimes extended to 12 weeks for chronic conditions. Oral formulations exist for gut-related research, though injectable produces stronger systemic effects. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> BPC-157 is not FDA-approved and is sold only as a research-grade peptide. The FDA classifies it as a Category 2 bulk drug substance, meaning it cannot be compounded by commercial pharmacies. See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current research-grade options.
          </p>
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.node && s.node}
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Tissue Repair", "Tendon Healing", "Gut Protection", "Research-Grade"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>


      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/tb-500" className="text-sm font-medium text-[#0891b2] hover:underline">TB-500</Link>
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/bpc-157-vs-tb-500" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157 vs TB-500 &rarr;</Link>
        <Link href="/compare/bpc-157-vs-ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157 vs GHK-Cu &rarr;</Link>
        </div>
      </div>

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          Need to calculate a dose?
        </p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution
          and dosing math.
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
    </>
  );
}
