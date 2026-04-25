import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/peptides/bpc-157" },
  title: "BPC-157 — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "BPC-157 (Body Protection Compound-157) research profile: mechanism, key research areas, dosing context, and regulatory status.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    node: (
      <div className="space-y-4">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          BPC-157 is a synthetic peptide that researchers study for its effects on healing. It comes from a small protein originally found in human stomach fluid, and it stays stable in conditions that break down most peptides — including stomach acid. People in the peptide research community use BPC-157 to support recovery from injuries to muscles, tendons, joints, and the gut. Most of the evidence comes from animal studies, and no completed human clinical trials have been published.
        </p>
        <div>
          <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Reported benefits:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Faster recovery from tendon, ligament, and muscle injuries
            </li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Healing of joint and cartilage damage
            </li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Gastrointestinal protection (ulcers, IBD, leaky gut)
            </li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Reduction of systemic inflammation
            </li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Improved recovery between training sessions
            </li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
              Support for nerve and brain injury recovery
            </li>
          </ul>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Roughly 250–500 mcg per day, often split into two subcutaneous injections near the area being treated, in cycles of 4–8 weeks. Dosing protocols are derived from animal research and user reports — there are no validated human clinical dosing standards.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
          <Link href="/coupons" className="text-[#0891b2] hover:underline">
            Verified Discount Codes &rarr;
          </Link>{" "}
          for current options.
        </p>
      </div>
    ),
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "VEGFR2 Activation and Angiogenesis [1][2] — BPC-157 upregulates expression of vascular endothelial growth factor receptor 2 (VEGFR2) in vascular endothelial cells without increasing VEGF-A itself. This receptor sensitization promotes endothelial cell migration, proliferation, and tube formation, accelerating new blood vessel formation at sites of tissue damage. The angiogenic effect is self-limiting and does not produce the pathological vessel formation associated with exogenous VEGF administration.",
      "Nitric Oxide System Modulation [2][3] — BPC-157 acts on the nitric oxide (NO) system through two complementary pathways. The VEGFR2–Akt–eNOS axis drives NO production downstream of VEGFR2 sensitization, while a VEGF-independent Src–Caveolin-1–eNOS pathway disrupts the inhibitory caveolin-1/eNOS complex, releasing endothelial nitric oxide synthase to produce NO directly. Notably, BPC-157 does not produce uncontrolled NO increases — its effects are modulatory, raising NO when deficient and counteracting it when excessive.",
      "FAK–Paxillin Signaling [1] — BPC-157 activates focal adhesion kinase (FAK) and paxillin phosphorylation, accelerating cytoskeletal reorganization required for fibroblast and endothelial cell migration. This mechanism contributes to tendon healing and tendon-to-bone insertion remodeling observed in injury models.",
      "ERK1/2 Pathway Engagement [1] — BPC-157 activates extracellular signal-regulated kinase (ERK1/2) signaling, supporting cell proliferation and tissue repair across multiple cell types including fibroblasts, endothelial cells, and myocytes.",
      "Anti-Inflammatory and Cytoprotective Effects [1][4] — BPC-157 upregulates cytoprotective factors including heme oxygenase-1 (HO-1) and heat shock proteins, preserves mitochondrial integrity, and reduces oxidative stress. These mechanisms underlie its broad gastroprotective and organoprotective effects in models of NSAID injury, alcohol-induced damage, and ischemia-reperfusion.",
      "Neurotransmitter System Interactions [4] — BPC-157 interacts with dopaminergic, serotonergic, and glutamatergic systems in rodent models, contributing to reported neuroprotective effects in models of Parkinson-like and Alzheimer-like disturbances. It restores glutamatergic signaling after NMDA-receptor overactivation and modulates adrenergic balance.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Tendon and Ligament Healing [1][5] — Multiple animal studies demonstrate accelerated healing of transected Achilles tendons, rotator cuff injuries, and medial collateral ligament damage. BPC-157-treated subjects show increased tendon load-to-failure and faster functional recovery.",
      "Muscle Repair [1] — Blunt-force and crush-injury models show accelerated functional recovery and improved myofiber regeneration with BPC-157 administration. Effects extend to muscle-to-tendon junction healing.",
      "Bone Healing [1] — Fracture and osteonecrosis models demonstrate improved mineralization rates and bone matrix deposition, attributed to angiogenesis within bone tissue and enhanced osteoblast activity via VEGFR2-NO signaling.",
      "Gastrointestinal Protection [4] — The most robust preclinical evidence is in GI models, including protection against NSAID-induced gastric lesions, inflammatory bowel disease, esophagogastric anastomosis healing, and fistula closure. This research base reflects BPC-157's origin as a gastric juice protein fragment.",
      "Central and Peripheral Nervous System Repair [4] — Spinal cord crush, sciatic nerve transection, traumatic brain injury, and stroke models show neuroprotective and regenerative effects. BPC-157 also counteracts neurotoxin-induced movement disorders in rodent models.",
      "Cardiovascular Effects [3] — Vessel occlusion models show BPC-157 prevents and reverses thrombus formation, counteracts thrombocytopenia, and activates collateral pathways to bypass occluded vessels without affecting basal coagulation parameters. The peptide does not affect basal blood pressure but counteracts both L-NAME-induced hypertension and L-arginine-induced hypotension.",
      "Corneal and Soft-Tissue Repair [4] — Corneal injury models demonstrate accelerated healing without inducing pathological neovascularization, an unusual property given the peptide's angiogenic activity in other tissues.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Accelerated soft-tissue and tendon healing in animal injury models",
      "Robust gastroprotection against NSAID, alcohol, and stress-induced ulcers",
      "Reduced systemic inflammation markers",
      "Improved peripheral nerve conduction recovery after crush injury",
      "Cytoprotective effects in liver and heart ischemia-reperfusion models",
      "Modulation of vascular tone without affecting baseline blood pressure",
      "Counteraction of dopamine-depletion behaviors in movement-disorder models",
      "Stability across pH 1–11, including survival in gastric acid",
    ],
  },
  {
    id: "halflife",
    title: "Half-Life & Stability",
    body: [
      "Molecular weight: 1,419.53 g/mol",
      "Sequence: Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
      "Plasma half-life: under 30 minutes in rodent pharmacokinetic studies; sustained biological effects outlast plasma clearance, suggesting local tissue depot activity or downstream gene-expression changes",
      "Notably stable across pH 1–11, consistent with survival in gastric acid and documented oral activity in animal models",
      "Lyophilized powder stable at -20°C for extended periods; reconstituted solution stored at 2–8°C, typical use within 21–28 days",
      "Administration routes studied: subcutaneous injection, intramuscular, oral, intraperitoneal, topical",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    content:
      "The vast majority of BPC-157 evidence comes from rodent models, and direct extrapolation to humans carries significant uncertainty. As of 2026, no completed randomized controlled human trials have been published. The most relevant human data point is the registration of NCT02637284 — Safety and Pharmacokinetics of PCO-02 (BPC-157) in Healthy Volunteers — sponsored by PharmaCotherapia d.o.o. and registered in December 2015. The trial's status is listed as “Unknown” on ClinicalTrials.gov, and no results have been posted. A small 2025 IV safety pilot examined BPC-157 in healthy adults but was limited to a sample size of two. A pilot study of intra-articular BPC-157 for chronic knee pain reported relief in 7 of 12 patients but was not placebo-controlled. A substantial portion of the BPC-157 research base originates from a single Croatian research group (Sikiric et al.), creating a concentration-of-source bias. Optimal human dosing, administration route, and cycle length remain unestablished, and long-term safety data in humans is absent. BPC-157 is not approved by the FDA, EMA, or any major regulatory body for therapeutic use. The FDA has placed BPC-157 on its Category 2 bulk drug substance list, meaning it cannot be compounded by commercial pharmacies. The World Anti-Doping Agency prohibits BPC-157 in sport under category S0 (non-approved substances).",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    body: [
      "TB-500 (Thymosin Beta-4 fragment) — the most studied combination, paired for complementary mechanisms targeting actin-driven cell migration plus angiogenesis. Animal studies suggest additive effects on tendon and muscle repair; no human combination-therapy trial data exists.",
      "KPV and other anti-inflammatory peptides — sometimes combined in GI protocols where inflammation modulation is the primary research objective.",
      "GHK-Cu — paired for systemic recovery research where collagen remodeling and gene-expression effects are added to BPC-157's angiogenic and cytoprotective profile.",
      "Growth hormone secretagogues such as Ipamorelin — included in broader recovery-focused research protocols.",
    ],
  },
  {
    id: "references",
    title: "References",
    body: [
      "Vasireddi N, Hahamyan H, Salata MJ, et al. Regeneration or Risk? A Narrative Review of BPC-157 for Musculoskeletal Healing. PMC. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/",
      "Hsieh MJ, et al. Modulatory effects of BPC 157 on vasomotor tone and the activation of Src-Caveolin-1-endothelial nitric oxide synthase pathway. Scientific Reports. 2020. https://www.nature.com/articles/s41598-020-74022-y",
      "Sikiric P, et al. BPC 157 Therapy: Targeting Angiogenesis and Nitric Oxide's Cytotoxic and Damaging Actions. Pharmaceuticals (MDPI). 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12567428/",
      "Sikiric P, et al. Brain-Gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications. Curr Neuropharmacol. 2018;16(10):1401-1425. https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/",
      "Chang CH, et al. The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration. J Appl Physiol. 2011;110(3):774-780.",
      "ClinicalTrials.gov. NCT02637284 — Safety and Pharmacokinetics of PCO-02 (BPC-157) in Healthy Volunteers. Sponsor: PharmaCotherapia d.o.o. Registered December 2015, status “Unknown”, no results posted. https://classic.clinicaltrials.gov/ct2/show/study/NCT02637284",
    ],
  },
];

export default function BPC157Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"BPC-157","description":"BPC-157 (Body Protection Compound-157) research profile: mechanism, key research areas, dosing context, and regulatory status.","url":"https://profpeptide.com/peptides/bpc-157","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
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
        <span className="tag">Preclinical</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Body Protection Compound-157, PL-14736, Pentadecapeptide BPC 157
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.node && s.node}
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                {s.content}
              </p>
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
        {["Recovery", "Tissue Repair", "Angiogenesis", "Preclinical"].map(
          (tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          )
        )}
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
