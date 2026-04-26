import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/cagrilintide" },
  title: "Cagrilintide — Amylin Analog, CagriSema, Mechanism, Dosage | Prof. Peptide",
  description:
    "Cagrilintide research profile: amylin/calcitonin receptor mechanism, REDEFINE trial results, CagriSema combination, dosing, side effects.",
};

const faqs = [
  {
    q: "What is cagrilintide?",
    a: "Cagrilintide is an investigational long-acting amylin analogue developed by Novo Nordisk for chronic weight management. Amylin is a hormone naturally co-released with insulin from pancreatic beta cells; cagrilintide mimics this hormone with a much longer duration of action. It is most often combined with semaglutide as CagriSema, which is currently under FDA review.",
  },
  {
    q: "How is cagrilintide different from semaglutide?",
    a: "Semaglutide activates GLP-1 receptors. Cagrilintide activates amylin and calcitonin receptors. The two work through different brain pathways to suppress appetite and slow gastric emptying. They are typically combined (CagriSema) because the mechanisms are additive — combination trials show greater weight loss than either component alone, with potentially better lean mass preservation.",
  },
  {
    q: "Does CagriSema beat tirzepatide for weight loss?",
    a: "Possibly, in adherent users. REDEFINE 1 (NEJM 2025) showed CagriSema produced 20.4% average weight loss over 68 weeks, with up to 23% per-protocol — comparable to tirzepatide's 20.2% in SURMOUNT-5 at the same timepoint. No head-to-head trial has been published. Both fall short of retatrutide's 28.7% in TRIUMPH-4.",
  },
  {
    q: "Is cagrilintide alone effective for weight loss?",
    a: "Yes, but modestly compared to combination therapy. Phase 2 cagrilintide monotherapy at 4.5 mg produced 6–10% weight loss over 26 weeks. Most ongoing development is on the CagriSema combination because of its substantially greater efficacy.",
  },
  {
    q: "What are the side effects?",
    a: "Most common are gastrointestinal: nausea, vomiting, diarrhea, and constipation. The REDEFINE trials reported low single-digit discontinuation rates due to adverse events, lower than some GLP-class drugs. About 72.5% of CagriSema participants reported at least one GI adverse event — most transient and mild to moderate.",
  },
  {
    q: "When will the FDA approve CagriSema?",
    a: "Novo Nordisk filed the New Drug Application in December 2025. Standard FDA review for NDAs typically takes 10–12 months, putting potential approval in late 2026.",
  },
  {
    q: "Can cagrilintide be combined with tirzepatide?",
    a: "There is no published clinical data on this combination. Stacking would be experimental and would likely add side effects without proportional benefit. The validated combination is CagriSema (cagrilintide + semaglutide).",
  },
  {
    q: "Where can I buy cagrilintide?",
    a: (
      <>
        Cagrilintide is not yet FDA-approved. Research-grade cagrilintide is sold by specialty peptide vendors. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "Amylin Receptor Activation [1] — Cagrilintide mimics amylin, a hormone naturally co-secreted with insulin from pancreatic beta cells. By activating amylin receptors in the brain stem (area postrema), it suppresses appetite and slows gastric emptying.",
      "Calcitonin Receptor Activation [1] — Cagrilintide also activates calcitonin receptors. The dual amylin/calcitonin receptor agonist activity is what defines the class. Acts on different brain pathways than GLP-1 drugs.",
      "Slowed Gastric Emptying [2] — Like GLP-class drugs, cagrilintide significantly slows how quickly food leaves the stomach. The mechanism is independent of GLP-1 pathways, which is why combining the two produces additive effects.",
      "Synergy with GLP-1 Receptor Agonists [3] — In preclinical research, combining amylin analogs with GLP-1 receptor agonists produces greater food intake reduction and body weight loss than either alone, while preserving lean mass.",
      "Lean Mass Preservation [4] — Preclinical data in non-human primates and rodents shows amylin/GLP-1 combinations target fat mass while preserving lean mass — an advantage over GLP-1 monotherapy where 20–40% of weight lost is lean tissue.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "REDEFINE 1 (CagriSema for Obesity) [3] — Phase 3, 68-week trial in 3,417 adults with obesity. CagriSema produced 20.4% average weight loss (up to 23% per-protocol) vs 3.0% placebo. Published in NEJM 2025.",
      "REDEFINE 2 (CagriSema for Type 2 Diabetes) [5] — Phase 3 trial in adults with T2D. CagriSema produced significant weight loss and A1C reductions, supporting dual-indication potential.",
      "Cagrilintide Monotherapy — Earlier Phase 2 trials of cagrilintide alone produced 6–10% weight loss over 26 weeks at the highest 4.5 mg dose, supporting continued investigation.",
      "Synergy With Semaglutide — The CagriSema combination produces greater weight loss than either component alone, validating the dual amylin/GLP-1 receptor approach.",
      "FDA NDA Submission — Novo Nordisk submitted the CagriSema New Drug Application to the FDA in December 2025; approval decision expected in 2026.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Cagrilintide effects build gradually similar to GLP-class drugs. In CagriSema trials, most weight loss accumulated through the first 60 weeks, with plateaus around weeks 60–68. The dose escalation across 16+ weeks is designed to minimize gastrointestinal side effects. Most users notice reduced appetite within the first 1–2 weeks at the starting dose.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Cagrilintide is administered as a once-weekly subcutaneous injection. The dose escalates every 4 weeks to allow tolerance. CagriSema combines cagrilintide and semaglutide in a single fixed-dose injection.
        </p>
        <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Cagrilintide escalation schedule:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 1–4: 0.16 mg or 0.30 mg once weekly (initiation)</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 5–8: 0.30 mg or 0.60 mg</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 9–12: 1.20 mg</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 13–16: 2.40 mg (target maintenance)</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          CagriSema 2.4 mg/2.4 mg is the FDA-submitted formulation, combining cagrilintide 2.4 mg and semaglutide 2.4 mg in a single weekly injection. Research-grade cagrilintide is dosed similarly to the trial schedule.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Nausea — most common, dose-dependent. Affects similar percentage as GLP-class drugs.</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Vomiting</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Diarrhea</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Constipation</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Decreased appetite</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Injection site reactions</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Indigestion and bloating</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Fatigue</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Headache</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare — call a doctor)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Pancreatitis — class-effect concern with appetite-suppressing peptides</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Gallbladder problems</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Severe allergic reactions</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hypoglycemia in users with diabetes on insulin/sulfonylureas</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          REDEFINE 1 and REDEFINE 2 trials reported low single-digit discontinuation rates due to adverse events with CagriSema, lower than some GLP-class drugs. 72.5% of CagriSema participants reported at least one GI adverse event — most transient and mild to moderate.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin), once weekly. Common injection sites are the abdomen (avoiding 2 inches around the navel), upper outer thighs, and back of the upper arms.",
      "Time of day: Any time, but consistent. Many users inject at the same day and time each week.",
      "With or without food: Either is fine.",
      "Site rotation: Use a different site each week to reduce irritation. Stay at least 1 inch from previous injection sites.",
      "Missed dose: If less than 5 days late, take as soon as remembered. If 5 or more days late, skip the missed dose and resume on the next scheduled day. Do not double-dose.",
      "Reconstitution (research-grade): Use bacteriostatic water for injection. Swirl gently — do not shake.",
      "Eating pattern: Smaller, more frequent meals reduce nausea. Avoid large fatty meals especially in the 24 hours after injection.",
      "Hydration: Drink water consistently. Amylin pathway slows gastric emptying.",
      "Alcohol: Limit alcohol especially in the first 48 hours after injection — it compounds nausea and dehydration.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "CagriSema combination — cagrilintide + semaglutide as a fixed-dose combination is the validated stack. Phase 3 REDEFINE program produced 20.4% average weight loss with this combination.",
      "Cagrilintide monotherapy — historically tested in Phase 2 alone with 6–10% weight loss; less common in current research.",
      "Resistance training + adequate protein — recommended to preserve lean muscle during rapid weight loss. Aim for 1.2–1.6 g protein per kg body weight per day. Amylin/GLP-1 combinations may preserve lean mass better than GLP-1 alone, but training and protein remain important.",
      "Avoid stacking with other GLP-class drugs separately — CagriSema already includes semaglutide; adding tirzepatide or retatrutide on top would be redundant and increase side effects without proportional benefit.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Insulin and sulfonylureas — risk of hypoglycemia increases when combined with these in users with diabetes. Dose adjustment typically needed.",
      "Oral medications — cagrilintide slows stomach emptying, which can affect absorption of oral drugs. Particularly relevant for warfarin, levothyroxine, and certain antibiotics.",
      "GLP-class agonists (when used outside CagriSema) — combining adds side effects without proportional benefit; the CagriSema combination is the studied form.",
      "Birth control pills — slowed gastric emptying may reduce absorption.",
      "Alcohol — compounds nausea and dehydration.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at 2–8°C sealed; freeze at -20°C for long-term storage.",
      "Reconstituted solution: Store at 2–8°C; typically stable for 28–30 days; check vendor's product specifications.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze reconstituted solution.",
      "Protect from light — store in original container.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Cagrilintide is investigational and not approved by the FDA, EMA, or any major regulatory body. Novo Nordisk submitted a New Drug Application for CagriSema (cagrilintide + semaglutide) to the FDA in December 2025. Cagrilintide monotherapy is not currently in active development for approval; the focus is the combination product.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term safety data extends to 68 weeks from REDEFINE 1. Cardiovascular outcomes data is not yet available. The amylin/calcitonin pathway has been used clinically (pramlintide is FDA-approved for diabetes), so the mechanism class has an established safety record, but the long-acting cagrilintide molecule is newer.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade cagrilintide sold by specialty peptide vendors is intended for laboratory research use only and is not approved for human consumption. The World Anti-Doping Agency prohibits cagrilintide and other peptide hormones in sport.
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
          Lau DCW, Erichsen L, Francisco AM, et al. Once-weekly cagrilintide for weight management in people with overweight and obesity: a multicentre, randomised, double-blind, placebo-controlled and active-controlled, dose-finding phase 2 trial. Lancet. 2021;398(10317):2160-72.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/34798060/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/34798060/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Enebo LB, Berthelsen KK, Kankam M, et al. Safety, tolerability, pharmacokinetics, and pharmacodynamics of concomitant administration of multiple doses of cagrilintide with semaglutide 2·4 mg. Lancet. 2021;397(10286):1736-48.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/33894838/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/33894838/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Garvey WT, Birkenfeld AL, Dicker D, et al. Once-Weekly CagriSema for the Treatment of Obesity (REDEFINE 1). N Engl J Med. 2025.{" "}
          <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2502486" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.nejm.org/doi/full/10.1056/NEJMoa2502486
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Frias JP, Dahl D, Aronne LJ, et al. Preclinical and clinical evidence for amylin/GLP-1 combination therapy advantages. The Innovation Medicine. 2025.{" "}
          <a href="https://www.the-innovation.org/article/doi/10.59717/j.xinn-med.2025.100150" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.the-innovation.org/article/doi/10.59717/j.xinn-med.2025.100150
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Davies M, Pratley R, et al. Once-Weekly CagriSema in Adults with Obesity and Type 2 Diabetes (REDEFINE 2). N Engl J Med. 2025.
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function CagrilintidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Cagrilintide","description":"Cagrilintide research profile: amylin/calcitonin receptor mechanism, REDEFINE trial results, CagriSema combination, dosing, side effects.","url":"https://profpeptide.com/peptides/cagrilintide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Cagrilintide"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Cagrilintide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">Investigational</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: AM833, Long-acting Amylin Analogue
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Cagrilintide is an investigational long-acting amylin analogue developed by Novo Nordisk for chronic weight management. It works by mimicking amylin, a hormone the pancreas releases alongside insulin after meals. Combined with semaglutide as CagriSema, it produced 20.4% average weight loss in the Phase 3 REDEFINE 1 trial (NEJM 2025) — competitive with tirzepatide and approaching retatrutide&apos;s efficacy. Novo Nordisk filed an FDA New Drug Application for CagriSema in December 2025.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">20.4% body weight loss with CagriSema combination over 68 weeks (REDEFINE 1, NEJM 2025)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Up to 23% weight loss when participants stayed on treatment as planned</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduced appetite and slower stomach emptying via amylin pathway</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Preserves lean mass better than GLP-class drugs alone in preclinical data</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improvements in blood pressure, lipids, and glycemic markers</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Lower discontinuation rates than tirzepatide in REDEFINE trials</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Cagrilintide is dosed at 0.16 mg, 0.30 mg, 0.60 mg, 1.20 mg, or 2.40 mg once weekly via subcutaneous injection. Dose escalation occurs every 4 weeks. CagriSema (the FDA-submitted formulation) uses cagrilintide 2.4 mg + semaglutide 2.4 mg as a fixed-dose combination. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Cagrilintide is not yet FDA-approved. CagriSema is under FDA review (NDA filed December 2025). Research-grade cagrilintide is available through specialty peptide vendors with verified discount codes. See{" "}
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
        {["Weight Loss", "Amylin Analog", "Investigational", "Combination Therapy"].map((tag) => (
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
        <Link href="/peptides/semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide</Link>
        <Link href="/peptides/tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">Tirzepatide</Link>
        <Link href="/peptides/retatrutide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide</Link>
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
