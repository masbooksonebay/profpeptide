import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/igf-1-lr3" },
  title: "IGF-1 LR3 — Long R3 IGF-1 Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "IGF-1 LR3 research profile: PI3K/Akt mechanism, dosing protocol, hypoglycemia risk, satellite cell activation, and clinical evidence.",
};

const faqs = [
  {
    q: "How is IGF-1 LR3 different from native IGF-1?",
    a: "Native IGF-1 has a half-life of minutes because it's rapidly bound and deactivated by IGF binding proteins (IGFBPs). IGF-1 LR3 has two structural modifications — an arginine substitution at position 3 and a 13-amino-acid N-terminal extension — that drastically reduce IGFBP binding. The result: 20–30 hour half-life and ~3x greater potency than native IGF-1.",
  },
  {
    q: "Does IGF-1 LR3 cause hyperplasia (new muscle fibers)?",
    a: "Animal studies show IGF-1 LR3 stimulates satellite cell proliferation, which is the cellular basis for hyperplasia (new muscle fiber formation). Hyperplasia is rare among muscle-building compounds — most drive hypertrophy (existing fiber growth) only. Whether this translates to meaningful new fiber formation in adult humans is not formally established, but the satellite cell mechanism is consistent across species.",
  },
  {
    q: "Why do I need to eat with IGF-1 LR3?",
    a: "IGF-1 LR3 has insulin-like effects on glucose uptake, which can cause significant blood sugar drops if injected without food. Always inject within 30 minutes of a meal containing protein and carbohydrates. Hypoglycemia symptoms (shakiness, sweating, confusion) are the most common adverse effect when this guideline isn't followed.",
  },
  {
    q: "Should I inject post-workout or pre-workout?",
    a: "Post-workout is the standard approach. Resistance training creates a temporary spike in growth hormone and increases IGF-1 receptor sensitivity in worked muscles. Injecting within 30–60 minutes post-workout capitalizes on this window. Research suggests post-workout IGF-1 administration increases muscle protein synthesis rates by an additional ~35% vs rest-day administration.",
  },
  {
    q: "Do I need post-cycle therapy (PCT)?",
    a: "No. IGF-1 LR3 doesn't suppress natural testosterone or growth hormone production, so PCT is unnecessary. The only post-cycle consideration is the 4-week off period to allow IGF-1 receptor sensitivity to reset.",
  },
  {
    q: "Can IGF-1 LR3 be stacked with steroids?",
    a: "Theoretically yes — they work through different mechanisms (IGF-1 receptor vs androgen receptor). However, this combination significantly increases overall side effect risk and isn't supported by controlled human data. Mainstream peptide research focuses on IGF-1 LR3 as a standalone or paired with other peptides (GH secretagogues, Follistatin) rather than steroids.",
  },
  {
    q: "Is IGF-1 LR3 safe long-term?",
    a: "Limited human safety data exists. The most well-documented concerns are hypoglycemia risk during use and theoretical risk of accelerated tumor growth in users with cancer history. Most users follow 4–6 week cycles with 4+ week breaks rather than continuous use, both for safety conservatism and to maintain receptor sensitivity.",
  },
  {
    q: "Where can I buy IGF-1 LR3?",
    a: (
      <>
        IGF-1 LR3 is sold by specialty research peptide vendors. Counterfeit and underdosed product is common — verify Certificate of Analysis before purchase. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "IGF-1 Receptor Activation [1] — IGF-1 LR3 binds directly to IGF-1 receptors (IGF-1R) on muscle and other tissues with high affinity, initiating tyrosine kinase signaling. This is the same receptor activated by native IGF-1, but at sustained levels for 20–30 hours.",
      "PI3K/Akt/mTOR Pathway [2] — Receptor activation triggers the PI3K/Akt signaling cascade, which activates mTOR — the master regulator of protein synthesis. This increases translation of mRNA into muscle proteins, drives hypertrophy, and inhibits muscle protein breakdown.",
      "Reduced IGFBP Binding [3] — The Arg3 substitution and N-terminal extension drastically reduce IGF-1 LR3's affinity for IGF binding proteins (IGFBPs), particularly IGFBP-3. Native IGF-1 is rapidly bound by IGFBPs, which deactivate it within minutes. IGF-1 LR3 escapes this regulation, remaining bioactive in circulation up to 100 times longer.",
      "Satellite Cell Activation [4] — IGF-1 LR3 activates satellite cells (muscle stem cells responsible for repair and growth), enabling true hypertrophy through both increased fiber size and potentially new fiber formation (hyperplasia). Most muscle-building compounds drive hypertrophy only.",
      "MAPK/ERK Pathway [2] — Parallel to PI3K/Akt, IGF-1 LR3 activates the MAPK/ERK pathway, which drives cellular proliferation and differentiation. This is critical for the satellite cell activation and tissue regeneration effects.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Skeletal Muscle Hypertrophy [4][5] — Animal studies and preclinical research consistently show IGF-1 LR3 increases muscle protein synthesis, satellite cell proliferation, and muscle fiber growth. Effects are most pronounced when combined with mechanical loading (resistance training).",
      "Muscle Regeneration After Injury [4] — Direct injection of recombinant IGF-1 enhanced muscle healing in lacerated, contused, and strain-injured mouse muscle models, with measurable improvements at 2, 5, and 7 days post-injury. Effects on tetanic and fast-twitch strength were observed in human muscle strain studies.",
      "Bone Mineral Density [6] — IGF-1 stimulates bone formation via direct effects on osteoblasts. Higher serum IGF-1 levels correlate with greater bone mineral density in older subjects. Treatment with GH and IGF-1 increases BMD in adults.",
      "Cognitive and Neuroprotective Effects [7] — IGF-1 supports neuronal survival, synaptic plasticity, and neurogenesis. Limited research has explored IGF-1 LR3 specifically for cognitive applications, though native IGF-1 has neuroprotective effects in animal models.",
      "Sarcopenia and Aging Models [4] — IGF-1 LR3 is studied in aging muscle wasting models for its ability to support satellite cell function and reverse age-related declines in muscle protein synthesis.",
      "Cardiac Tissue [3] — Preclinical studies show IGF-1 LR3 stimulates fetal cardiomyocyte proliferation through both ERK and PI3K signaling pathways, suggesting potential cardiac repair applications.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "IGF-1 LR3 effects develop progressively. Most users notice improved recovery from workouts within 3–5 days as muscle repair accelerates. Visible muscle fullness appears by week 2 due to increased glycogen and water retention. Measurable strength gains typically emerge by week 3 as the anabolic effects compound. Full hypertrophy effects develop over the 4–6 week cycle when paired with consistent resistance training and adequate protein intake.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          IGF-1 LR3 is administered as a once-daily subcutaneous (or intramuscular) injection. The 20–30 hour half-life makes once-daily dosing sufficient to maintain stable blood levels. Timing relative to training matters more than time of day.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Beginner range: 20–30 mcg per day for the first cycle to assess tolerance</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standard range: 30–50 mcg per day for established users</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Anabolic ceiling: ~40–50 mcg/day appears to be the practical upper limit; doses above 50 mcg significantly increase hypoglycemia risk</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 4–6 weeks on, followed by minimum 4 weeks off to allow IGF-1 receptor sensitivity to reset</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Some users follow 5 days on, 2 days off within the cycle to reduce receptor downregulation</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Training-day timing: inject within 30–60 minutes post-workout when muscles are primed for nutrient uptake and IGF-1 receptors are temporarily upregulated. Have a meal containing protein and carbohydrates ready within 30 minutes to prevent hypoglycemia and maximize anabolic effect. Rest-day timing: inject with morning meal. Do NOT inject fasted unless very experienced — IGF-1 LR3 can cause significant blood sugar drops.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hypoglycemia — most common side effect, especially if injected without food</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fatigue or sleepiness following injection</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild injection site reactions</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Joint pain or stiffness during cycles</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Bloating or fluid retention</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild numbness or tingling (carpal-tunnel-like symptoms)</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Severe hypoglycemia — risk increases significantly above 50 mcg/day. Symptoms: shakiness, sweating, confusion, fainting</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical risk of accelerated growth in pre-existing tumors due to IGF-1's effects on cell proliferation</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Receptor desensitization with sustained high-dose use, reducing future effectiveness</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Critical contraindications: active cancer or cancer history (IGF-1 stimulates cell growth including potentially cancerous cells), pregnancy or breastfeeding, diabetic retinopathy (IGF-1 may accelerate eye blood vessel growth), uncontrolled diabetes, and age under 21 (can affect growth plate closure). Always have food available when injecting. Most experienced users keep glucose tabs or simple sugar nearby during the first weeks of a cycle.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin) or intramuscular for site-specific effect. Common SubQ sites: abdomen, thigh, upper arm.",
      "Time of day: Immediately post-workout on training days. Morning with food on rest days. Never inject fasted.",
      "Food required: Always inject with a meal containing protein and carbohydrates within 30 minutes. Failure to eat reliably causes hypoglycemia.",
      "Site rotation: Use a different site each day to reduce irritation.",
      "Post-injection: keep glucose tabs nearby for the first weeks. If you feel shaky, sweaty, or confused, eat simple carbohydrates immediately.",
      "Reconstitution: Use bacteriostatic water for injection. A typical reconstitution is 1 mg vial + 2 mL BAC water = 500 mcg/mL. Standard 30 mcg dose = 0.06 mL on a U-100 insulin syringe.",
      "Missed dose: Skip and resume next day. Do not double-dose.",
      "Cycle: Most users run 4–6 weeks on, 4+ weeks off.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Resistance training — essential. IGF-1 LR3 amplifies the response to mechanical loading; without training stimulus, results are minimal.",
      "GH secretagogues (CJC-1295, Ipamorelin, MK-677) — common pairing. GH peptides drive endogenous IGF-1 production while IGF-1 LR3 provides direct receptor activation. Inject IGF-1 LR3 at least 2–3 hours apart from GH peptides to avoid receptor competition.",
      "BPC-157 / TB-500 — paired for recovery support during anabolic cycles. The healing peptides accelerate tissue repair while IGF-1 LR3 drives hypertrophy.",
      "Follistatin — direct synergy. IGF-1 LR3 drives growth signal; Follistatin removes the myostatin growth ceiling. Often paired in advanced muscle-building protocols.",
      "Adequate protein and calories — non-negotiable. Insufficient protein or calorie intake limits IGF-1 LR3's ability to build muscle. Aim for 1.6–2.2 g protein per kg bodyweight.",
      "MGF (Mechano Growth Factor) — sometimes combined for theoretical synergistic effects on muscle growth, though research is limited.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Insulin and diabetes medications — high risk of hypoglycemia. IGF-1 LR3 has insulin-like effects on glucose uptake. Diabetics should not use without medical supervision.",
      "Growth hormone (HGH) — competes for IGF-1 receptors when injected close together. Space injections at least 2–3 hours apart.",
      "Anabolic-androgenic steroids — combination is theoretical synergy but increases overall side effect risk. No controlled human data.",
      "Thyroid hormones — IGF-1 affects thyroid hormone metabolism; theoretical interaction in users on thyroid medication.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at 2–8°C (refrigerator) for up to 1 month; freeze at -20°C for long-term storage.",
      "Reconstituted solution: Refrigerate at 2–8°C; use within 28–30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Inject solvent slowly against the glass wall. Swirl gently — do not shake.",
      "Never freeze reconstituted solution — ice crystals destroy peptide structure.",
      "Protect from light. Store in original carton.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          IGF-1 LR3 is not FDA-approved for any human use. The recombinant IGF-1 form (mecasermin/Increlex) is FDA-approved for severe primary IGF-1 deficiency in children, but IGF-1 LR3 specifically is not approved for any indication.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Most research evidence comes from animal studies and preclinical research settings. Native IGF-1 has been studied extensively in humans for clinical applications; IGF-1 LR3 specifically has limited human controlled-trial data. Long-term safety data for sustained or high-dose use is absent.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits IGF-1 LR3 in sport under Section S2 (peptide hormones). Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Counterfeit and underdosed IGF-1 LR3 is common in the gray market — purity verification via Certificate of Analysis is critical.
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
          Wikipedia. Long arginine 3-IGF-1 (IGF-1 LR3).{" "}
          <a href="https://en.wikipedia.org/wiki/IGF-1_LR3" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/IGF-1_LR3
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Florini JR, Ewton DZ, Coolican SA. Growth hormone and the insulin-like growth factor system in myogenesis. Annu Rev Physiol. 1991;53:201-16.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/2042959/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/2042959/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Yakar S, Pennisi P, Wu Y, et al. Circulating levels of IGF-1 directly regulate bone growth and density. J Clin Invest. 2002;110(6):771-81.{" "}
          <a href="https://www.jci.org/articles/view/15463" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.jci.org/articles/view/15463
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Adams GR, Haddad F. The relationships among IGF-1, DNA content, and protein accumulation during skeletal muscle hypertrophy. J Appl Physiol. 1996;81(6):2509-16.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9018499/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9018499/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Philippou A, Maridaki M, Halapas A, Koutsilieris M. The role of the insulin-like growth factor 1 (IGF-1) in skeletal muscle physiology. In Vivo. 2007;21(1):45-54.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17354613/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17354613/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Bikle DD, Tahimic C, Chang W, et al. Role of IGF-I signaling in muscle bone interactions. Bone. 2015;80:79-88.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4665094/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC4665094/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Fernandez AM, Torres-Aleman I. The many faces of insulin-like peptide signalling in the brain. Nat Rev Neurosci. 2012;13(4):225-39.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22430016/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22430016/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function IGF1LR3Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"IGF-1 LR3","description":"IGF-1 LR3 research profile: PI3K/Akt mechanism, dosing protocol, hypoglycemia risk, satellite cell activation, and clinical evidence.","url":"https://profpeptide.com/peptides/igf-1-lr3","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"IGF-1 LR3"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">IGF-1 LR3</h1>
        <span className="tag">Performance &amp; Energy</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Long Arg3 IGF-1, LR3-IGF-1, Insulin-like Growth Factor 1 Long R3
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            IGF-1 LR3 is a synthetic 83-amino-acid analog of human insulin-like growth factor 1 (IGF-1). It contains two structural modifications: an arginine substitution at position 3 (&ldquo;Arg3&rdquo;) and a 13-amino-acid N-terminal extension (&ldquo;Long&rdquo;), producing a peptide with dramatically reduced binding to IGF binding proteins (IGFBPs) and a much longer half-life. Native IGF-1 has a half-life of minutes; IGF-1 LR3 has a half-life of 20–30 hours. The extended bioavailability and ~3x greater potency than native IGF-1 make it one of the most-studied research peptides for muscle hypertrophy, recovery, and metabolic research.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Activates IGF-1 receptors directly, bypassing the GH/IGF-1 axis</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates muscle protein synthesis via PI3K/Akt/mTOR pathway</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Promotes hyperplasia (new muscle fiber formation) — rare among research compounds</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Activates satellite cells for enhanced muscle repair and growth</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improves glucose and amino acid uptake into muscle tissue</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">20–30 hour half-life enables once-daily dosing</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols use 20–50 mcg per day administered subcutaneously, often immediately post-workout. Cycles typically run 4–6 weeks followed by a 4-week off period. Doses above 50 mcg/day significantly increase hypoglycemia risk without proportional muscle-building benefit. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> IGF-1 LR3 is not FDA-approved for performance enhancement and is sold only as a research-grade peptide. See{" "}
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
        {["Muscle Growth", "Anabolic", "IGF-1", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/follistatin" className="text-sm font-medium text-[#0891b2] hover:underline">Follistatin</Link>
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
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
            href="https://www.amazon.com/s?k=performance+energy+supplements&tag=profpeptide-20"
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
