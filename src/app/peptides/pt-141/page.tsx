import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/pt-141" },
  title: "PT-141 (Bremelanotide / Vyleesi) — FDA-Approved Sexual Health Peptide | Prof. Peptide",
  description:
    "PT-141 (Bremelanotide, Vyleesi) research profile: FDA-approved for HSDD, MC4R mechanism, on-demand dosing, off-label male ED use, side effects.",
};

const faqs = [
  {
    q: "Is PT-141 FDA-approved?",
    a: "Yes — PT-141 (brand name Vyleesi, made by Palatin Technologies) is FDA-approved as of June 2019 for acquired, generalized hypoactive sexual desire disorder (HSDD) in premenopausal women. It is the first FDA-approved peptide acting on sexual desire through brain pathways. Use in men, postmenopausal women, or for sexual performance enhancement is OFF-LABEL.",
  },
  {
    q: "How does PT-141 differ from Viagra?",
    a: "Completely different mechanisms. Viagra (sildenafil) is a PDE5 inhibitor that works peripherally on vascular nitric oxide signaling — it improves blood flow but doesn't affect desire. PT-141 acts centrally on melanocortin receptors (MC4R) in the brain to enhance sexual desire and arousal. PT-141 works in cases where Viagra fails (PDE5-resistant ED). Some clinicians combine the two off-label.",
  },
  {
    q: "Will PT-141 work for men?",
    a: "Vyleesi is not FDA-approved for men. However, off-label use in men with erectile dysfunction is documented. Earlier intranasal PT-141 trials showed 34% of men with ED achieved erection sufficient for intercourse vs 9% on placebo. Off-label combination with sildenafil produces stronger erectile response than either alone in PDE5-resistant cases.",
  },
  {
    q: "What about the nausea?",
    a: "Nausea is the most common side effect (~40% in Phase 3). It's usually mild to moderate and most pronounced with the first dose. Many users find it tolerable after 1–2 doses, or manageable with eating a light snack before injection or taking oral ondansetron 30 minutes prior. Starting with a lower dose (1 mg or 500 mcg) helps assess tolerance.",
  },
  {
    q: "Why is there a monthly dose limit?",
    a: "The 8-doses-per-month limit exists to minimize hyperpigmentation risk. Frequent PT-141 use can cause focal skin darkening on the face, gums, or breasts that may NOT resolve after stopping the drug. Using more than 8 doses per month substantially increases this risk.",
  },
  {
    q: "How long do effects last?",
    a: "Onset is ~45–60 minutes after subcutaneous injection. Peak effects on sexual desire and arousal occur around 1–2 hours. Total effect duration is 4–6 hours per dose. PT-141 is on-demand, not daily — take it before, not after, the activity window.",
  },
  {
    q: "Can PT-141 cause blood pressure problems?",
    a: "Yes — PT-141 causes transient blood pressure elevation averaging 6 mmHg systolic and 3 mmHg diastolic. It is contraindicated in uncontrolled hypertension and cardiovascular disease. Patients on antihypertensive medications should be monitored. The effect is transient and not expected to cause severe BP elevation when used at the standard 1.75 mg dose.",
  },
  {
    q: "Where can I buy PT-141?",
    a: (
      <>
        The FDA-approved version (Vyleesi) is a prescription drug from specialty pharmacies — premenopausal women with HSDD only. Off-label and research-grade PT-141 is sold by specialty peptide vendors. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "Melanocortin Receptor Agonism [1] — PT-141 is a non-selective agonist of melanocortin receptors (MC1R through MC5R, except MC2R which binds full ACTH). At therapeutic doses, MC4R activation is most clinically relevant — neurons expressing MC4R are present throughout the central nervous system, particularly in hypothalamic and limbic regions involved in sexual arousal.",
      "Central vs Peripheral Mechanism [2] — Unlike PDE5 inhibitors (sildenafil, tadalafil) which work peripherally on vascular nitric oxide signaling, PT-141 acts centrally to enhance sexual desire and arousal. This is the clinical rationale for use in cases where vascular drugs fail or are contraindicated.",
      "Dopamine Pathway Activation — Mechanistic studies suggest MC4R activation in hypothalamic circuits enhances dopamine signaling linked to sexual desire. The exact downstream pathway by which Vyleesi improves HSDD is not fully characterized in the FDA labeling.",
      "Cyclic Heptapeptide Structure — PT-141 is a cyclic 7-amino-acid peptide derived from melanotan II. The cyclization confers metabolic stability. Removal of the C-terminal amide compared to melanotan II eliminates the strong melanocyte-stimulating effect (tanning), while preserving sexual response.",
      "Pharmacokinetics — Subcutaneous bioavailability ~100%. Peak plasma levels ~1 hour post-injection. Plasma half-life 2.7 hours (range 1.9–4.0). Excretion: 64.8% urine, 22.8% feces. Effects on sexual desire last 4–6 hours.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Premenopausal HSDD [3] — FDA approval indication. Two identical Phase 3 clinical trials (n=1,202 total premenopausal women with HSDD) showed Vyleesi improved sexual desire and reduced sexual distress vs placebo. Approval granted June 2019.",
      "Male Erectile Dysfunction (Off-Label) [4] — Earlier intranasal PT-141 trials in men with ED showed 34% achieving erection sufficient for intercourse vs 9% on placebo. Combination studies with sildenafil showed stronger erectile response than either drug alone — basis for off-label 'Viagra reboot' protocols in PDE5-resistant patients.",
      "Postmenopausal HSDD (Off-Label) — Vyleesi is FDA-approved only for premenopausal women, but clinical practice has extended use to postmenopausal patients. Small case series report favorable outcomes; formal trials in this population are limited.",
      "SSRI-Induced Sexual Dysfunction (Off-Label) — Off-label use for restoring sexual function in patients with SSRI-related sexual side effects. Limited published evidence but reported clinically.",
      "Calorie Reduction Side Effect — A trial analysis found obese women on PT-141 reduced calorie intake and lost weight. Setmelanotide, another MC4R agonist, is FDA-approved for rare types of obesity — suggesting MC4R agonism has appetite-modulating effects.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "PT-141 effects develop on a per-dose basis. Subjective effects on sexual desire and arousal typically peak around 45–60 minutes after subcutaneous injection. Effects last 4–6 hours per dose. The FDA-approved Vyleesi label requires assessment of efficacy at 8 weeks; if no improvement in sexual desire and distress, treatment should be discontinued. Unlike flibanserin (continuous daily dosing), PT-141 is purely on-demand.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          PT-141 is administered as a subcutaneous injection on-demand. The FDA-approved Vyleesi product comes pre-dosed in an autoinjector. Research-grade PT-141 is sold as lyophilized powder for reconstitution.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">FDA-approved dose (Vyleesi): 1.75 mg subcutaneously, ~45 minutes before anticipated sexual activity. Maximum 1 dose per 24 hours, maximum 8 doses per month.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Research-grade typical range: 1–2 mg subcutaneously per dose.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Lower starting dose: 1 mg (or even 250–500 mcg) for first-time use to test tolerance — particularly to assess nausea response.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Off-label male ED protocol: 1.75–2 mg SC, 30–60 minutes before activity. Some clinicians combine with low-dose sildenafil (25 mg) for PDE5-resistant cases.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Discontinue if no improvement in sexual desire and distress after 8 weeks of use (per FDA label).</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          PT-141 is strictly on-demand, NOT a daily medication. Repeated dosing greater than 8 times per month increases hyperpigmentation risk. Always allow at least 24 hours between doses. The FDA approval labels Vyleesi specifically for premenopausal women — all other uses (men, postmenopausal women, SSRI-induced dysfunction) are off-label.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Nausea — most common side effect, occurs in ~40% of users in Phase 3 trials. Often most pronounced with first dose; many users find it tolerable after 1–2 doses or manageable with anti-nausea medication.</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Flushing — facial warmth and redness in ~20% of users, usually mild and transient.</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Injection site reactions — redness, pain, swelling in ~13% of users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Headache (~11%) and dizziness</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Vomiting (~5%), cough (~3%), fatigue (~3%)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hot flashes, paresthesia, mild nasal congestion</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hyperpigmentation — focal skin darkening on face, gums, or breasts. Risk increases with frequent use (&gt;8 doses per month). May not resolve after discontinuation.</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Transient blood pressure elevation — average 6 mmHg systolic, 3 mmHg diastolic. Contraindicated in uncontrolled hypertension and cardiovascular disease.</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Rare acute liver injury — single case of acute hepatitis after 10 doses over a year reported (LiverTox classification: D — possible rare cause).</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          PT-141 is contraindicated in patients with uncontrolled hypertension or cardiovascular disease due to transient blood pressure rises. The 8-doses-per-month limit exists to minimize hyperpigmentation risk — exceeding it raises the chance of skin darkening that may persist after stopping the drug. PT-141 reduces oral absorption (bioavailability) of certain medications (e.g., naltrexone, indomethacin) by slowing gastric motility — relevant for patients on chronic oral medications. Pregnancy contraindicated based on animal teratogenicity data.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin). Vyleesi autoinjector targets the abdomen or thigh.",
      "Time of day: ~45 minutes before anticipated sexual activity. On-demand only — not daily.",
      "With or without food: Either is fine. Eating a light snack before may help reduce nausea.",
      "Maximum frequency: 1 dose per 24 hours; maximum 8 doses per month.",
      "Reconstitution (research-grade): 10 mg vial + 2 mL bacteriostatic water = 5 mg/mL. For 1.75 mg dose, draw 0.35 mL (35 units on U-100 insulin syringe). For 2 mg, draw 0.4 mL (40 units).",
      "Vyleesi autoinjector: pre-dosed at 1.75 mg, no reconstitution required.",
      "Storage of reconstituted solution: refrigerate at 2–8°C, use within 30 days, never freeze.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Sildenafil (off-label, men) — combination shows stronger erectile response than either alone in research data. Used in PDE5-resistant ED. Cardiovascular risk additive — requires medical screening.",
      "Oxytocin — anecdotally combined for emotional bonding aspect of intimacy. Limited research on combination but generally considered safe.",
      "BPC-157 — different mechanism (healing/gut) — no direct interaction. Compatible in general protocols.",
      "Melanotan II — DO NOT combine. Both act on melanocortin receptors. Stacking increases nausea, blood pressure changes, and hyperpigmentation risk.",
      "Anti-nausea protocol: Some users take oral ondansetron 30 minutes before injection. Ginger tablets are a non-prescription alternative.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Naltrexone, indomethacin, and other oral medications — PT-141 slows gastric motility, reducing oral bioavailability of these drugs. Schedule oral meds away from PT-141 doses.",
      "Antihypertensives — PT-141 raises blood pressure transiently. Effects on patients on BP medications are unpredictable; medical supervision recommended.",
      "Other melanocortin agonists (melanotan II, setmelanotide) — additive side effects. Avoid combination.",
      "Alcohol — minimal interaction (unlike flibanserin). Safe in moderate amounts.",
      "PDE5 inhibitors (sildenafil, tadalafil) — off-label combination shows stronger erectile response in men. Cardiovascular monitoring required.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Vyleesi autoinjector: refrigerate at 2–8°C in original carton until use. Do not freeze.",
      "Lyophilized research-grade powder: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: Store at 2–8°C; use within 30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Never freeze reconstituted solution. Protect from light.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          PT-141 (brand name Vyleesi) is FDA-approved ONLY for acquired, generalized hypoactive sexual desire disorder (HSDD) in premenopausal women. The FDA labeling specifically excludes men, postmenopausal women, and use to enhance sexual performance.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          ALL OFF-LABEL USES — including male ED, postmenopausal HSDD, and SSRI-induced dysfunction — are not FDA-approved. Off-label prescribing is legal under physician judgment but lacks the controlled trial evidence supporting the approved indication.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Researchers have questioned the relevance and effect sizes of the rating scales used in Phase 3 trials. The drug&apos;s clinical benefit was statistically significant but considered modest by some reviewers. Treatment should be discontinued after 8 weeks if no improvement in sexual desire and distress.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          PT-141 is contraindicated in pregnancy (animal teratogenicity), uncontrolled hypertension, and cardiovascular disease. Hyperpigmentation risk increases with use beyond 8 doses per month and may not resolve after stopping the drug.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency does not currently include PT-141 on the prohibited list.
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
          Vyleesi (bremelanotide injection) FDA Prescribing Information. 2019.{" "}
          <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/210557s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/210557s000lbl.pdf
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Bremelanotide.{" "}
          <a href="https://en.wikipedia.org/wiki/Bremelanotide" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Bremelanotide
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kingsberg SA, Clayton AH, Portman D, et al. Bremelanotide for the treatment of hypoactive sexual desire disorder: two randomized phase 3 trials. Obstet Gynecol. 2019;134(5):899-908.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/31599840/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/31599840/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Diamond LE, Earle DC, Rosen RC, et al. Double-blind, placebo-controlled evaluation of the safety, pharmacokinetic properties and pharmacodynamic effects of intranasal PT-141, a melanocortin receptor agonist, in healthy males and patients with mild-to-moderate erectile dysfunction. Int J Impot Res. 2004;16(1):51-9.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/14963471/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/14963471/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Dhillon S, Keam SJ. Bremelanotide: First Approval. Drugs. 2019;79(14):1599-1606.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/31429064/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/31429064/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          LiverTox: Clinical and Research Information on Drug-Induced Liver Injury. Bremelanotide. NCBI Bookshelf.{" "}
          <a href="https://www.ncbi.nlm.nih.gov/books/NBK573221/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.ncbi.nlm.nih.gov/books/NBK573221/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function PT141Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"PT-141 (Bremelanotide / Vyleesi)","description":"PT-141 (Bremelanotide, Vyleesi) research profile: FDA-approved for HSDD, MC4R mechanism, on-demand dosing, off-label male ED use, side effects.","url":"https://profpeptide.com/peptides/pt-141","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"PT-141"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">PT-141</h1>
        <span className="tag">Sexual Health</span>
        <span className="tag">FDA-Approved</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Bremelanotide, Vyleesi, MC4R Agonist
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            PT-141 (bremelanotide, brand name Vyleesi) is a synthetic cyclic heptapeptide melanocortin receptor agonist developed by Palatin Technologies. It was derived from melanotan II by removing the C-terminal amide group, eliminating the strong tanning effect while preserving sexual desire and arousal effects. The FDA approved PT-141 as Vyleesi in June 2019 for treatment of acquired, generalized hypoactive sexual desire disorder (HSDD) in premenopausal women — making it the first FDA-approved peptide that targets sexual desire through brain pathways rather than peripheral vascular mechanisms. Off-label use in men with erectile dysfunction is also documented.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">FDA-approved for HSDD in premenopausal women (Vyleesi, June 2019)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Acts on central nervous system (MC3R/MC4R) rather than vascular system</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">~45-minute onset, on-demand dosing</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Erection support in men (off-label) including PDE5-resistant cases</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No interaction with alcohol (unlike flibanserin)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Effects last 4–6 hours from a single dose</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> FDA-approved dose: 1.75 mg subcutaneously via Vyleesi autoinjector, ~45 minutes before anticipated sexual activity. Maximum 1 dose per 24 hours, maximum 8 doses per month. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> PT-141 is FDA-approved as Vyleesi (prescription, premenopausal women with HSDD only). Off-label and research-grade PT-141 is sold by specialty peptide vendors. See{" "}
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
        {["Sexual Health", "Melanocortin Agonist", "FDA-Approved", "On-Demand"].map((tag) => (
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
        <Link href="/peptides/melanotan-ii" className="text-sm font-medium text-[#0891b2] hover:underline">Melanotan II</Link>
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157</Link>
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
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
            href="https://www.amazon.com/s?k=sexual+health+supplements&tag=profpeptide-20"
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
