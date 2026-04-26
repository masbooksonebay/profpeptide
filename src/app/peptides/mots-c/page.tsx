import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/mots-c" },
  title: "MOTS-c — Mitochondrial Peptide, Mechanism, Dosage, Research | Prof. Peptide",
  description:
    "MOTS-c (mitochondrial-derived peptide) research profile: AMPK mechanism, insulin sensitivity research, dosing protocols, side effects, and longevity applications.",
};

const faqs = [
  {
    q: "What is MOTS-c?",
    a: "MOTS-c is a 16-amino-acid peptide encoded inside the mitochondrial genome itself, making it one of the first known mitochondria-derived peptides. Discovered at USC in 2015, it acts as a hormone-like signal from mitochondria to the rest of the body, regulating metabolism through AMPK pathways.",
  },
  {
    q: "How does MOTS-c improve insulin sensitivity?",
    a: "MOTS-c activates AMPK in skeletal muscle, which is the same pathway used by metformin and triggered by exercise. It also upregulates GLUT4 expression, which enhances glucose uptake into muscle cells. In animal studies, this translates to measurably improved insulin sensitivity, especially in obesity and type 2 diabetes models.",
  },
  {
    q: "Is MOTS-c FDA-approved?",
    a: "No. MOTS-c is investigational and sold only as a research-grade peptide for laboratory use. Phase 1 clinical trials have begun, but no Phase 2 or Phase 3 efficacy trials have been completed.",
  },
  {
    q: "Does MOTS-c help with weight loss?",
    a: "Indirectly. MOTS-c improves metabolism through AMPK activation rather than appetite suppression. It does not produce GLP-class weight loss. Its primary use cases are improving insulin sensitivity, preserving muscle mass, and supporting mitochondrial function rather than direct weight reduction.",
  },
  {
    q: "Can MOTS-c help preserve muscle during weight loss?",
    a: "Possibly. Animal studies show MOTS-c reduces myostatin (a negative regulator of muscle mass) and prevents atrophy in obesity and aging models. This has led to research interest in pairing MOTS-c with GLP-class drugs to preserve lean tissue during rapid weight loss, though no controlled human data validates this combination.",
  },
  {
    q: "Is MOTS-c safe?",
    a: "Limited human safety data exists. Because MOTS-c is endogenously produced, immunogenicity risk is theoretically low. Animal studies have not reported significant toxicity at researched doses. Long-term human exogenous administration safety has not been established.",
  },
  {
    q: "What is the connection to anti-aging research?",
    a: "MOTS-c blood levels naturally decline with age, and the peptide supports mitochondrial function — both linked to aging biology. A 2025 Experimental & Molecular Medicine study showed MOTS-c reduces pancreatic beta-cell senescence in aged mice, slowing glucose intolerance progression. This is hypothesis-generating, not clinically established.",
  },
  {
    q: "Where can I buy MOTS-c?",
    a: (
      <>
        MOTS-c is sold by specialty research peptide vendors. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "AMPK Pathway Activation [1] — MOTS-c activates AMPK (AMP-activated protein kinase), a master regulator of cellular energy. AMPK activation is the same pathway used by metformin and triggered by exercise, leading to increased glucose uptake and improved metabolism.",
      "Mitochondrial Communication [2] — MOTS-c is encoded in the mitochondrial genome (12S rRNA region) and acts as a retrograde signal from mitochondria to the nucleus. It regulates which nuclear genes are expressed during metabolic stress.",
      "Skeletal Muscle Glucose Uptake [1] — In skeletal muscle, MOTS-c upregulates GLUT4 expression and enhances insulin-independent glucose uptake. This is a primary mechanism for the insulin sensitivity improvements observed in animal models.",
      "Muscle Atrophy Prevention [3] — MOTS-c reduces myostatin (a negative regulator of muscle mass) and other muscle-wasting signaling. In animal studies, it prevented atrophy associated with aging and metabolic disease.",
      "Cardiac Function Restoration [4] — In rat models of type 2 diabetic heart disease, daily MOTS-c (15 mg/kg for 3 weeks) restored mitochondrial respiration and reduced left ventricular wall thickness.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Type 2 Diabetes [1][5] — MOTS-c improves insulin sensitivity in animal models. Human studies show MOTS-c blood levels are lower in T2D, gestational diabetes, and obese children. Phase 1 clinical trials have begun.",
      "Mitochondrial Disease [2] — Investigated for MELAS syndrome (mitochondrial encephalopathy), a severe genetic mitochondrial disorder. Effects on mtDNA mutation models are mixed.",
      "Sarcopenia and Muscle Aging [3] — Reduces myostatin, prevents muscle atrophy in obesity and aging models. Of interest for age-related muscle loss.",
      "Cardiovascular Disease [4] — Restores mitochondrial respiration in diabetic heart tissue. May offer cardioprotective effects via NRG1-ErbB4 pathway.",
      "Pancreatic Beta-Cell Senescence [5] — A 2025 Experimental & Molecular Medicine study showed MOTS-c reduces beta-cell senescence in aged mice, slowing glucose intolerance progression.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "MOTS-c is mechanism-driven rather than producing dramatic short-term effects. In animal studies, daily dosing for 3 weeks restored mitochondrial function. Human clinical effects are not well characterized. Most users report subtle changes in energy and recovery rather than acute effects.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          MOTS-c is administered as a daily subcutaneous injection in research protocols. There are no FDA-approved dosing standards because MOTS-c is not approved for human use.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Common research-grade dose: 5–10 mg subcutaneously once daily</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Some protocols use 5 mg twice weekly for maintenance</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Animal study doses ranged from 0.5–15 mg/kg/day</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 4–12 weeks is common, with extended use in some longevity protocols</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          MOTS-c is one of the largest peptides commonly used at this dose range, which makes per-dose cost relatively high compared to smaller peptides like BPC-157 or TB-500.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Injection site reactions — minor</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Most users report no acute systemic effects</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Fatigue</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Nausea — uncommon</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Long-term human safety data is limited</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Severe allergic reactions — theoretical, not commonly reported</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          MOTS-c has limited human clinical data. The peptide is endogenously produced, which suggests low immunogenicity, but long-term exogenous administration safety has not been established.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin), once daily. Common injection sites are the abdomen, thigh, and upper arm.",
      "Time of day: Morning dosing is most common in research protocols, often before exercise where used in metabolic research.",
      "With or without food: Either is fine.",
      "Site rotation: Use a different site each day to reduce irritation.",
      "Missed dose: If less than 12 hours late, take as soon as remembered. Otherwise skip and resume on the next scheduled day.",
      "Reconstitution: Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Cycle: Most research protocols run 4–12 weeks. Some longevity protocols use longer cycles.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Standalone use — most common in MOTS-c research.",
      "NAD+ precursors (NMN, NR) — combined in mitochondrial-focused research; both target mitochondrial function through different pathways.",
      "GLP-class drugs (semaglutide, tirzepatide, retatrutide) — proposed combination during weight loss to preserve muscle mass via MOTS-c's myostatin-suppressing effect, though no clinical data validates this combination.",
      "Resistance training — natural pairing since endogenous MOTS-c levels rise with exercise, suggesting it amplifies exercise-induced metabolic benefits.",
      "Metformin — mechanistic overlap (both activate AMPK), so combined use is theoretical rather than established.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Diabetes medications — MOTS-c may improve insulin sensitivity in animal models, theoretically lowering insulin or sulfonylurea requirements over time. Monitor blood glucose.",
      "Metformin — overlapping AMPK activation pathway; theoretical synergy but no clinical validation.",
      "Mitochondrial-targeted therapies (NAD+ precursors, CoQ10) — overlap in mechanism; combined use is research-stage.",
      "No major drug interactions reported in early human clinical exposure.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at 2–8°C sealed; freeze at -20°C for long-term storage.",
      "Reconstituted solution: Store at 2–8°C; typically stable for 28–30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Protect from light.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          MOTS-c is investigational and not approved by the FDA, EMA, or any major regulatory body for therapeutic use. Phase 1 clinical trials have begun, but no Phase 2 or Phase 3 efficacy trials have been completed. The bulk of research evidence remains in animal models and cell-based studies.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term human safety data is limited. Because MOTS-c is endogenously produced, immunogenicity risk is theoretically low, but long-term exogenous administration safety has not been established. Anti-doping status is currently uncertain — MOTS-c is not specifically named on the WADA prohibited list but could fall under broader peptide hormone categories.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade MOTS-c sold by specialty peptide vendors is intended for laboratory research use only and is not approved for human consumption.
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
          Lee C, Zeng J, Drew BG, et al. The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance. Cell Metab. 2015;21(3):443-54.{" "}
          <a href="https://www.cell.com/article/S1550-4131(15)00061-3/fulltext" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.cell.com/article/S1550-4131(15)00061-3/fulltext
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kim SJ, Mehta HH, Wan J, et al. Mitochondrial peptides modulate mitochondrial function during cellular senescence. Aging (Albany NY). 2018;10(6):1239-56.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kumagai H, Coelho AR, Wan J, et al. MOTS-c reduces myostatin and muscle atrophy signaling. Am J Physiol Endocrinol Metab. 2021;320(4):E680-90.{" "}
          <a href="https://journals.physiology.org/doi/full/10.1152/ajpendo.00275.2020" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://journals.physiology.org/doi/full/10.1152/ajpendo.00275.2020
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Pham AH, Wei Y, Koleva M, et al. Mitochondria-derived peptide MOTS-c restores mitochondrial respiration in type 2 diabetic heart. Front Physiol. 2025.{" "}
          <a href="https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1602271/full" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1602271/full
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Cha YJ, Mehta HH, Hollander MR, et al. Mitochondrial-encoded peptide MOTS-c prevents pancreatic islet cell senescence to delay diabetes. Exp Mol Med. 2025.{" "}
          <a href="https://www.nature.com/articles/s12276-025-01521-1" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.nature.com/articles/s12276-025-01521-1
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function MOTScPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"MOTS-c","description":"MOTS-c (mitochondrial-derived peptide) research profile: AMPK mechanism, insulin sensitivity research, dosing protocols, side effects, and longevity applications.","url":"https://profpeptide.com/peptides/mots-c","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"MOTS-c"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">MOTS-c</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Mitochondrial ORF of the 12S rRNA Type-c, MOTSc
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            MOTS-c is a 16-amino-acid peptide encoded inside the mitochondrial genome itself — making it one of the first known mitochondria-derived peptides. Discovered in 2015 at USC, it acts as a hormone-like signal from mitochondria to the rest of the body, regulating metabolism through AMPK pathways. Research interest has focused on insulin resistance, type 2 diabetes, muscle preservation, and cellular aging. MOTS-c blood levels naturally decline with age, which has made it a candidate for longevity research.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improved insulin sensitivity and glucose uptake in skeletal muscle (preclinical)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">AMPK pathway activation similar to metformin and exercise</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduced muscle wasting through suppression of myostatin signaling</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cardiovascular protection in diabetic models</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Potential anti-aging effects through mitochondrial function support</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No significant side effects in early clinical exposure</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> MOTS-c is in early-stage clinical research. Animal studies use 0.5–15 mg/kg/day. Common research-grade human dose is 5–10 mg subcutaneously once daily, though there is no validated clinical dosing standard. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> MOTS-c is not FDA-approved and is sold only as a research-grade peptide. See{" "}
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
        {["Mitochondrial", "Insulin Sensitivity", "Anti-Aging", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/cagrilintide" className="text-sm font-medium text-[#0891b2] hover:underline">Cagrilintide</Link>
        <Link href="/peptides/aod-9604" className="text-sm font-medium text-[#0891b2] hover:underline">AOD-9604</Link>
        <Link href="/peptides/nad-plus" className="text-sm font-medium text-[#0891b2] hover:underline">NAD+</Link>
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
            href="https://www.amazon.com/s?k=metabolic+weight+loss+supplements&tag=profpeptide-20"
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
