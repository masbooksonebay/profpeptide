import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/mots-c",
  title: "MOTS-c — Mitochondrial Peptide, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "MOTS-c (mitochondrial-derived peptide) research profile: AMPK mechanism, insulin sensitivity research, dosing protocols, side effects, FAQ, and longevity applications.",
});

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
    a: (
      <>
        Indirectly. MOTS-c improves metabolism through AMPK activation rather than appetite suppression. It does not produce GLP-class weight loss like{" "}
        <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>{" "}
        or{" "}
        <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>
        . Its primary use cases are improving insulin sensitivity, preserving muscle mass, and supporting mitochondrial function rather than direct weight reduction.
      </>
    ),
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
        MOTS-c is sold by specialty research peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const studies = [
  {
    title: "The Mitochondrial-Derived Peptide MOTS-c Promotes Metabolic Homeostasis and Reduces Obesity and Insulin Resistance",
    authors: "Lee C, Zeng J, Drew BG, et al.",
    journal: "Cell Metabolism",
    year: "2015",
    access: "Open Access via PMC",
    url: "https://pubmed.ncbi.nlm.nih.gov/25738459/",
    summary: "The foundational study that first identified MOTS-c and established its role in metabolic regulation. Researchers found that MOTS-c is encoded by mitochondrial DNA, is released into circulation in response to metabolic stress, and acts on skeletal muscle to improve glucose uptake via AMPK activation. In mice fed a high-fat diet, MOTS-c treatment significantly reduced obesity and insulin resistance without altering food intake.",
  },
  {
    title: "MOTS-c is an Exercise-Induced Mitochondrial-Encoded Regulator of Age-Dependent Physical Decline and Muscle Homeostasis",
    authors: "Reynolds JC, Lai RW, Woodhead JST, et al.",
    journal: "Nature Communications",
    year: "2021",
    access: "Open Access",
    url: "https://www.nature.com/articles/s41467-020-20790-0",
    summary: "This study established MOTS-c as an exercise-induced peptide — showing that MOTS-c levels increase 11.9-fold in skeletal muscle after exercise in humans. MOTS-c treatment significantly enhanced physical performance in young, middle-aged, and old mice — even when treatment was started very late in life (equivalent to human old age). This positions MOTS-c as a potential exercise mimetic for aging populations with limited mobility.",
  },
  {
    title: "MOTS-c: A Promising Mitochondrial-Derived Peptide for Therapeutic Exploitation",
    authors: "Zhu Y, Gu L, Lin X, et al.",
    journal: "Frontiers in Endocrinology",
    year: "2023",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9905433/",
    summary: "A comprehensive review synthesizing a decade of MOTS-c research across multiple disease models. The review covers MOTS-c's mechanisms including AMPK activation, nuclear translocation during stress, anti-inflammatory effects, and insulin sensitization. It documents lower MOTS-c levels in type 2 diabetes, gestational diabetes, and obese children — establishing clinical associations between MOTS-c deficiency and metabolic disease.",
  },
  {
    title: "Mitochondria-Derived Peptide MOTS-c Restores Mitochondrial Respiration in Type 2 Diabetic Heart",
    authors: "Lim YX, et al.",
    journal: "Frontiers in Physiology",
    year: "2025",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1602271/full",
    summary: "One of the most recent MOTS-c studies, examining its effects in a type 2 diabetic heart model. MOTS-c treatment restored mitochondrial respiratory function, reduced cardiac oxidative stress, and delayed weight gain in diabetic rats — without affecting food intake. The study confirms that MOTS-c directly increases whole-body metabolic rate rather than simply reducing appetite, and extends its relevance to cardiac metabolic function.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does MOTS-c work?",
    intro:
      "MOTS-c activates AMPK (AMP-activated protein kinase), the same master energy regulator activated by metformin and exercise. It's encoded inside the mitochondrial genome itself (12S rRNA region) and acts as a retrograde signal from mitochondria to the nucleus, regulating which nuclear genes are expressed during metabolic stress. The mitochondrial origin is unique among research peptides and is why MOTS-c sits at the intersection of metabolic and longevity research.",
    body: [
      "AMPK Pathway Activation [1]. MOTS-c activates AMPK (AMP-activated protein kinase), a master regulator of cellular energy. AMPK activation is the same pathway used by metformin and triggered by exercise, leading to increased glucose uptake and improved metabolism.",
      "Mitochondrial Communication [2]. MOTS-c is encoded in the mitochondrial genome (12S rRNA region) and acts as a retrograde signal from mitochondria to the nucleus. It regulates which nuclear genes are expressed during metabolic stress.",
      "Skeletal Muscle Glucose Uptake [1]. In skeletal muscle, MOTS-c upregulates GLUT4 expression and enhances insulin-independent glucose uptake. This is a primary mechanism for the insulin sensitivity improvements observed in animal models.",
      "Muscle Atrophy Prevention [3]. MOTS-c reduces myostatin (a negative regulator of muscle mass) and other muscle-wasting signaling. In animal studies, it prevented atrophy associated with aging and metabolic disease.",
      "Cardiac Function Restoration [4]. In rat models of type 2 diabetic heart disease, daily MOTS-c (15 mg/kg for 3 weeks) restored mitochondrial respiration and reduced left ventricular wall thickness.",
    ],
  },
  {
    id: "research",
    title: "What is MOTS-c used for?",
    intro:
      "MOTS-c's research evidence base spans type 2 diabetes and insulin sensitivity (the originating area), mitochondrial disease (MELAS syndrome), sarcopenia and muscle aging, cardiovascular disease in diabetic models, and pancreatic beta-cell senescence. Phase 1 clinical trials have begun. The bulk of evidence remains animal and cell-based.",
    body: [
      "Type 2 Diabetes [1][5]. MOTS-c improves insulin sensitivity in animal models. Human studies show MOTS-c blood levels are lower in T2D, gestational diabetes, and obese children. Phase 1 clinical trials have begun.",
      "Mitochondrial Disease [2]. Investigated for MELAS syndrome (mitochondrial encephalopathy), a severe genetic mitochondrial disorder. Effects on mtDNA mutation models are mixed.",
      "Sarcopenia and Muscle Aging [3]. Reduces myostatin, prevents muscle atrophy in obesity and aging models. Of interest for age-related muscle loss.",
      "Cardiovascular Disease [4]. Restores mitochondrial respiration in diabetic heart tissue. May offer cardioprotective effects via NRG1-ErbB4 pathway.",
      "Pancreatic Beta-Cell Senescence [5]. A 2025 Experimental & Molecular Medicine study showed MOTS-c reduces beta-cell senescence in aged mice, slowing glucose intolerance progression.",
    ],
  },
  {
    id: "timeline",
    title: "How long does MOTS-c take to work?",
    intro:
      "MOTS-c is mechanism-driven rather than producing dramatic short-term effects. In animal studies, daily dosing for 3 weeks restored mitochondrial function. Human clinical effects are not well characterized. Most users report subtle changes in energy and recovery rather than acute effects — consistent with a mitochondrial-function-restoration mechanism rather than acute appetite suppression or hormonal stimulation.",
    content:
      "MOTS-c is mechanism-driven rather than producing dramatic short-term effects. In animal studies, daily dosing for 3 weeks restored mitochondrial function. Human clinical effects are not well characterized. Most users report subtle changes in energy and recovery rather than acute effects — consistent with a mitochondrial-function-restoration mechanism rather than acute appetite suppression or hormonal stimulation. Effects in research protocols accumulate over 4–12 weeks of consistent daily dosing.",
  },
  {
    id: "dosing",
    title: "How is MOTS-c dosed?",
    intro:
      "MOTS-c is administered as a daily subcutaneous injection in research protocols. There are no FDA-approved dosing standards because MOTS-c is not approved for human use. Common research-grade dose is 5–10 mg subcutaneously once daily; some protocols use 5 mg twice weekly for maintenance. Animal studies have ranged 0.5–15 mg/kg/day. Cycle length 4–12 weeks is common.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard research-grade dose.</span> 5–10 mg subcutaneously once daily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Maintenance protocols.</span> Some protocols use 5 mg twice weekly for maintenance.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Animal study range.</span> 0.5–15 mg/kg/day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 4–12 weeks is common; some longevity protocols use extended use.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          MOTS-c is one of the largest peptides commonly used at this dose range, which makes per-dose cost relatively high compared to smaller peptides like{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
          or{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>
          .
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is MOTS-c administered?",
    intro: (
      <>
        MOTS-c is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; once daily using a small insulin syringe. Morning dosing is most common in research protocols, often before exercise (since endogenous MOTS-c is exercise-induced). For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection, once daily. Common sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Morning dosing is most common, often before exercise where used in metabolic research &mdash; aligns with endogenous exercise-induced MOTS-c release.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine; no fasting requirement.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each day to reduce localized irritation.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> If less than 12 hours late, take as soon as remembered. Otherwise skip and resume on the next scheduled day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 4–12 weeks typical; some longevity protocols use extended cycles.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> MOTS-c is endogenously exercise-induced &mdash; skeletal muscle MOTS-c levels rise 11.9-fold after exercise in humans. Research-grade administration aligned with training (morning, pre-workout) is a deliberate choice to layer exogenous dosing onto the natural exercise-induced pulse. The pharmacokinetic profile of exogenous MOTS-c in humans is not well characterized.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily during the cycle (4–12 weeks typical)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Morning, often pre-workout to align with endogenous exercise-induced MOTS-c pulse</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required; inject with or without food</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not well characterized in humans; once-daily dosing is research convention</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Effects accumulate over weeks of daily dosing &mdash; mitochondrial-function restoration is gradual</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. MOTS-c research vials are typically 10 mg. Because per-dose amounts are large (5–10 mg), 1 mL reconstitution keeps syringe draws within insulin syringe capacity. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 10 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">2.5 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">5 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">10 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">25 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">50 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">50 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">75 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          *Draw exceeds standard 100-unit insulin syringe capacity at this reconstitution volume &mdash; would require split injections or a lower reconstitution volume.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 10 mg vial, each unit drawn delivers 100 mcg of MOTS-c at 1 mL reconstitution, 50 mcg at 2 mL, and 33 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does MOTS-c stack well with?",
    intro:
      "MOTS-c is most commonly used standalone in research. Notable pairings include NAD+ precursors (NMN, NR) for mitochondrial-focused research, GLP-class drugs (semaglutide, tirzepatide, retatrutide) for muscle preservation during rapid weight loss (theoretical based on myostatin suppression — no clinical validation), and resistance training (which is the natural endogenous trigger). Metformin shares the AMPK activation pathway — combined use is theoretical.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> Most common in MOTS-c research.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">NAD+ precursors.</span>{" "}
          <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+</Link>{" "}
          and NMN/NR are combined in mitochondrial-focused research; both target mitochondrial function through different pathways.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GLP-class drugs.</span>{" "}
          <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>,{" "}
          <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>,{" "}
          <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">retatrutide</Link>{" "}
          proposed combination during weight loss to preserve muscle mass via MOTS-c&apos;s myostatin-suppressing effect, though no clinical data validates this combination.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training.</span> Natural pairing since endogenous MOTS-c levels rise 11.9-fold with exercise &mdash; exogenous MOTS-c amplifies the exercise-induced metabolic benefits.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Metformin.</span> Mechanistic overlap (both activate AMPK), so combined use is theoretical rather than established.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of MOTS-c?",
    intro:
      "MOTS-c has limited human clinical data. The peptide is endogenously produced, which suggests low immunogenicity, but long-term exogenous administration safety has not been established. The most-reported user effects are mild injection-site reactions. Mild headache and fatigue are uncommon. No documented serious adverse events at researched doses, but the data set is small.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Minor &mdash; mild redness or irritation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No common systemic effects.</span> Most users report no acute systemic effects.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache.</span> Inconsistent across users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fatigue.</span> Inconsistent across users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nausea.</span> Uncommon.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term safety data limited.</span> Most evidence is preclinical.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe allergic reactions.</span> Theoretical, not commonly reported.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          MOTS-c has limited human clinical data. The peptide is endogenously produced, which suggests low immunogenicity, but long-term exogenous administration safety has not been established.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does MOTS-c interact with other drugs?",
    intro:
      "MOTS-c's relevant interactions are with diabetes medications (theoretically lower insulin or sulfonylurea requirements over time as insulin sensitivity improves — monitor blood glucose), metformin (overlapping AMPK pathway), and mitochondrial-targeted therapies (NAD+ precursors, CoQ10 — mechanism overlap, research-stage). No major drug interactions reported in early human clinical exposure.",
    body: [
      "Diabetes medications. MOTS-c may improve insulin sensitivity in animal models, theoretically lowering insulin or sulfonylurea requirements over time. Monitor blood glucose.",
      "Metformin. Overlapping AMPK activation pathway; theoretical synergy but no clinical validation.",
      "Mitochondrial-targeted therapies (NAD+ precursors, CoQ10). Overlap in mechanism; combined use is research-stage.",
      "No major drug interactions reported in early human clinical exposure.",
    ],
  },
  {
    id: "storage",
    title: "How should MOTS-c be stored?",
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
    title: "What are the limitations of MOTS-c research?",
    intro:
      "MOTS-c is investigational and not approved by the FDA, EMA, or any major regulatory body for therapeutic use. Phase 1 clinical trials have begun, but no Phase 2 or Phase 3 efficacy trials have been completed. The bulk of research evidence remains in animal models and cell-based studies. WADA status is currently uncertain — MOTS-c is not specifically named on the prohibited list but could fall under broader peptide hormone categories.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          MOTS-c is investigational and not approved by the FDA, EMA, or any major regulatory body for therapeutic use. Phase 1 clinical trials have begun, but no Phase 2 or Phase 3 efficacy trials have been completed. The bulk of research evidence remains in animal models and cell-based studies.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term human safety data is limited. Because MOTS-c is endogenously produced, immunogenicity risk is theoretically low, but long-term exogenous administration safety has not been established. Anti-doping status is currently uncertain &mdash; MOTS-c is not specifically named on the WADA prohibited list but could fall under broader peptide hormone categories.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade MOTS-c sold by specialty peptide vendors is intended for laboratory research use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source MOTS-c",
    intro:
      "MOTS-c is not FDA-approved and is sold only as a research-grade peptide. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes — including a nasal-spray format option that's interesting for the metabolic research context.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "ascension-peptides" },
            { slug: "behemoth-labz" },
            { slug: "purerawz", note: "Nasal spray format" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#0891b2] hover:underline">
            See all 17 verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "MOTS-c FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Lee C, Zeng J, Drew BG, et al. The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance. Cell Metab. 2015;21(3):443-54.{" "}
          <a href="https://www.cell.com/article/S1550-4131(15)00061-3/fulltext" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.cell.com/article/S1550-4131(15)00061-3/fulltext
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kim SJ, Mehta HH, Wan J, et al. Mitochondrial peptides modulate mitochondrial function during cellular senescence. Aging (Albany NY). 2018;10(6):1239-56.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kumagai H, Coelho AR, Wan J, et al. MOTS-c reduces myostatin and muscle atrophy signaling. Am J Physiol Endocrinol Metab. 2021;320(4):E680-90.{" "}
          <a href="https://journals.physiology.org/doi/full/10.1152/ajpendo.00275.2020" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://journals.physiology.org/doi/full/10.1152/ajpendo.00275.2020
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Pham AH, Wei Y, Koleva M, et al. Mitochondria-derived peptide MOTS-c restores mitochondrial respiration in type 2 diabetic heart. Front Physiol. 2025.{" "}
          <a href="https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1602271/full" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1602271/full
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cha YJ, Mehta HH, Hollander MR, et al. Mitochondrial-encoded peptide MOTS-c prevents pancreatic islet cell senescence to delay diabetes. Exp Mol Med. 2025.{" "}
          <a href="https://www.nature.com/articles/s12276-025-01521-1" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.nature.com/articles/s12276-025-01521-1
          </a>
        </li>
      </ol>
    ),
  },
  {
    id: "studies",
    title: "Published Studies",
    node: (
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function MOTScPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"MOTS-c","description":"MOTS-c (mitochondrial-derived peptide) research profile: AMPK mechanism, insulin sensitivity research, dosing protocols, side effects, FAQ, and longevity applications.","url":"https://profpeptide.com/peptides/mots-c","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 23, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Mitochondrial ORF of the 12S rRNA Type-c, MOTSc
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Mitochondrial-Derived Peptide (MDP) &mdash; AMPK Activator / Exercise Mimetic
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use only. Phase 1 trials begun. WADA status uncertain (not specifically named on prohibited list).
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is MOTS-c?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            MOTS-c is a 16-amino-acid peptide encoded inside the mitochondrial genome itself &mdash; making it one of the first known mitochondria-derived peptides. Discovered in 2015 at USC, it acts as a hormone-like signal from mitochondria to the rest of the body, regulating metabolism through AMPK pathways (the same master energy regulator activated by metformin and exercise). Research interest has focused on insulin resistance, type 2 diabetes, muscle preservation, and cellular aging. MOTS-c blood levels naturally decline with age, which has made it a candidate for longevity research. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved insulin sensitivity and glucose uptake in skeletal muscle (preclinical)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">AMPK pathway activation similar to metformin and exercise</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced muscle wasting through suppression of myostatin signaling</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cardiovascular protection in diabetic models</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Potential anti-aging effects through mitochondrial function support</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No significant side effects in early clinical exposure</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> MOTS-c is in early-stage clinical research. Animal studies use 0.5–15 mg/kg/day. Common research-grade human dose is 5–10 mg subcutaneously once daily, though there is no validated clinical dosing standard.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current options.
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
            {s.intro && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                {s.intro}
              </p>
            )}
            {s.node && s.node}
            {s.content && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <Link href="/peptides/epitalon" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon</Link>
        <Link href="/peptides/semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide</Link>
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

      <PageDisclaimer />
    <ContactLink pageName="MOTS-c" pagePath="/peptides/mots-c" />
    </div>
    </>
  );
}
