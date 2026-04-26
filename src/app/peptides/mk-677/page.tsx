import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/mk-677" },
  title: "MK-677 (Ibutamoren) — Oral GH Secretagogue, Dosing, Effects | Prof. Peptide",
  description:
    "MK-677 (ibutamoren) research profile: oral ghrelin receptor mechanism, 24-hour GH/IGF-1 elevation, dosing protocol, side effects, WADA status.",
};

const faqs = [
  {
    q: "Is MK-677 a peptide?",
    a: "Technically no — MK-677 is a non-peptide small molecule that mimics ghrelin at the GHS-R1a receptor. It's included on Prof. Peptide because it acts on the same GH/IGF-1 axis as peptide secretagogues (sermorelin, ipamorelin, tesamorelin) and is commonly compared to them. The functional effects (pulsatile GH stimulation, IGF-1 elevation) are similar despite the structural difference.",
  },
  {
    q: "Is MK-677 FDA-approved?",
    a: "No. MK-677 (ibutamoren) reached Phase 2 clinical trials with Merck but was never FDA-approved. Merck did not pursue full approval, partially due to side effect profile concerns (appetite, water retention) for the original GH deficiency indication. Research-grade MK-677 is sold as a research compound — quality varies by source.",
  },
  {
    q: "How is MK-677 different from injectable GH secretagogues?",
    a: "Two main differences. (1) Route — MK-677 is oral; sermorelin/ipamorelin/tesamorelin are injectable. (2) Duration — MK-677 produces 24-hour sustained GH/IGF-1 elevation per dose; injectable secretagogues produce sharper, shorter pulses tied to dose timing. The oral convenience is a major advantage; the trade-off is the more sustained (less pulsatile) GH environment, which some users find produces more side effects.",
  },
  {
    q: "Will MK-677 cause weight gain?",
    a: "Yes, in most users. MK-677 increases appetite (ghrelin receptor activation in the hypothalamus) and causes water retention in the first 2–4 weeks. The 1-year RCT in healthy older adults showed increased fat-free mass without change in fat mass — but real-world weight gain is common, particularly for users not actively managing calorie intake during the initial appetite spike.",
  },
  {
    q: "Does MK-677 affect blood sugar?",
    a: "Yes, mildly. MK-677 elevates fasting glucose and may decrease insulin sensitivity slightly during use. The 1-year RCT data showed acceptable tolerability at 25 mg/day in healthy older adults, but pre-diabetic individuals should monitor glucose closely. Insulin sensitivity supports (e.g., metformin if prescribed) are sometimes used to counter this effect.",
  },
  {
    q: "How long until I see results?",
    a: "GH/IGF-1 elevation: measurable within hours of the first dose. Subjective effects (improved sleep, increased appetite, faster recovery): 1–2 weeks. Lean mass changes: 8–12 weeks measurable. Skin/hair quality changes: 12+ weeks.",
  },
  {
    q: "Is MK-677 banned by WADA?",
    a: "Yes. MK-677 is on the WADA Prohibited List under Section S2 (Hormones — Growth Hormone Releasers). Tested athletes should NOT use MK-677. Detection methods exist for the compound and its metabolites.",
  },
  {
    q: "Where can I buy MK-677?",
    a: (
      <>
        MK-677 is sold as a research compound by specialty vendors. Quality varies dramatically — third-party HPLC and mass spectrometric testing is essential. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "Ghrelin Receptor Agonism [1] — Selective non-peptide agonist at GHS-R1a (growth hormone secretagogue receptor) in the hypothalamus and pituitary. Mimics ghrelin's GH-stimulating action with much greater receptor selectivity than endogenous ghrelin.",
      "Pulsatile GH Release [2] — Triggers physiological pulsatile GH secretion from the anterior pituitary. The pattern matches deep-sleep and exercise-induced GH pulses. Up to 50–100% above baseline GH levels per dose.",
      "IGF-1 Elevation [3] — GH stimulates hepatic IGF-1 production. Sustained IGF-1 elevation drives anabolic effects: protein synthesis, nitrogen retention, collagen formation, lipolysis. The sustained 24-hour pattern is distinct from injectable GHRPs.",
      "Multi-Pathway Action [4] — Increases GHRH signaling, decreases somatostatin (which normally inhibits GH), promotes GHRH receptor activation, and restrains somatostatin receptor signaling. Net effect: amplified GH secretion through coordinated upstream regulation.",
      "Appetite Stimulation — Ghrelin receptor activation in the hypothalamus increases hunger. This is a significant side effect (or benefit, depending on goals) and the primary reason Merck did not pursue MK-677 approval for the original GH deficiency indication.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Healthy Older Adults RCT [5] — Merck Phase 2: 65 healthy adults aged 60–81, 1-year RCT, 25 mg/day vs placebo. MK-677 increased GH and IGF-1 to levels of healthy young adults. Increased fat-free mass. No change in visceral fat. Acceptable tolerability.",
      "Hip Fracture Recovery — Trials in elderly hip fracture patients showed improved functional recovery in some endpoints. Interest stemmed from the potential to support healing in elderly populations with reduced GH/IGF-1.",
      "Body Composition (Athletes) [6] — Anecdotal community use shows lean mass gains, increased recovery, and improved sleep. Limited controlled athlete data — most evidence in this population is observational.",
      "Sleep Architecture — Independent studies have shown increased REM and slow-wave sleep duration with MK-677. Sleep quality improvements are among the most consistently reported subjective effects.",
      "GH Deficiency — Original Merck development pathway. Never reached approval, partially due to appetite/water retention concerns making it unsuitable for the target population.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "GH/IGF-1 elevation: measurable within hours of the first dose. Subjective effects (sleep, appetite, recovery): 1–2 weeks. Lean mass changes: 8–12 weeks measurable. Skin/hair quality: 12+ weeks. Discontinuation effects: GH/IGF-1 returns to baseline within days of stopping. No HPG axis suppression like AAS — no need for post-cycle therapy.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          MK-677 is taken orally as a capsule or liquid solution. The 24-hour sustained GH/IGF-1 elevation per dose makes single bedtime dosing the standard protocol.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standard research dose: 25 mg/day orally, taken at bedtime.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Some users start at 12.5 mg/day for 1–2 weeks to assess tolerance.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Time of day: bedtime — leverages natural GH pulse during deep sleep.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 8–16 weeks typical. Some users run extended protocols (6+ months) given continued IGF-1 elevation without HPG axis suppression.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Continuous daily dosing is the norm — unlike injectable secretagogues, no need for &ldquo;pulse&rdquo; timing.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Don&apos;t split daily dose — single bedtime dose maintains sustained 24-hour elevation.</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Discontinuation: GH/IGF-1 returns to baseline within days of stopping. No HPG axis suppression like anabolic-androgenic steroids — no need for post-cycle therapy.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Increased appetite (significant — primary side effect)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Water retention (transient first 2–4 weeks)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild lethargy</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Vivid dreams</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Slight numbness or tingling in extremities (peripheral edema)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Elevated fasting glucose</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild blood pressure changes</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Insulin resistance / pre-diabetic glucose elevation in long-term high-dose use</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical concerns: cardiovascular hypertrophy at supraphysiological IGF-1 levels (not documented at standard doses)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cortisol elevation (mild but measurable)</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          MK-677 elevates cortisol slightly and can elevate fasting glucose. Pre-diabetic individuals should monitor closely. The 1-year RCT data showed acceptable tolerability in healthy older adults at 25 mg/day. Long-term safety beyond 2 years is not formally characterized in healthy adults.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Oral. Capsule or liquid solution.",
      "Time of day: bedtime. Leverages natural sleep-onset GH pulse.",
      "With or without food: either. Empty stomach may produce faster absorption.",
      "Don't split daily dose — single bedtime dose maintains sustained 24-hour elevation.",
      "Missed dose: take when remembered if same evening; skip and resume next bedtime if morning.",
      "Storage: capsules at room temperature, dry, dark. Liquid solutions refrigerate after opening.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Standalone — MK-677's 24-hour sustained effect doesn't require pairing with other GH peptides for efficacy.",
      "Avoid combining with: high-dose injectable GH secretagogues (sermorelin, ipamorelin, tesamorelin) — redundant pathway, no additive benefit.",
      "BPC-157 — different mechanism, generally compatible.",
      "Insulin sensitivity supports (berberine, metformin if prescribed) — to counter MK-677's glucose-elevation effect.",
      "Strength training — leverages elevated IGF-1 for hypertrophy.",
      "Adequate protein (1.6–2.2 g/kg bodyweight) — necessary to capture the anabolic potential.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Insulin and antidiabetic drugs — MK-677 may increase insulin resistance. Monitor glucose.",
      "Corticosteroids — MK-677 raises cortisol modestly; combination amplifies cortisol load.",
      "Other GH secretagogues — redundant via the same pathway, not recommended.",
      "SSRIs and CNS medications — limited data; no documented major interactions.",
      "Direct HGH — combining is generally unnecessary and may produce supraphysiological IGF-1 levels.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Capsules: room temperature, dry, dark.",
      "Liquid solutions: refrigerate after opening.",
      "Don't expose to extreme heat or light.",
      "Keep in original container.",
      "Discard liquid solutions if cloudy or discolored.",
      "Check expiration date — MK-677 can degrade in solution over time.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          MK-677 (ibutamoren) is NOT FDA-approved despite reaching Phase 2 trials. Merck did not pursue full approval, partially due to side effect profile concerns (appetite, water retention) for the original GH deficiency indication.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade MK-677 is sold as a &ldquo;research compound&rdquo; — quality varies by source. Independent third-party testing (HPLC, mass spectrometry) recommended.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Some bodybuilding contexts have raised concerns about cardiovascular hypertrophy at supraphysiological IGF-1 levels — not documented at standard 25 mg doses but worth flagging. Long-term safety beyond 2 years is not formally characterized in healthy adults.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: MK-677 IS on the WADA Prohibited List (S2 Hormones — Growth Hormone Releasers). Tested athletes should NOT use.
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
          Wikipedia. Ibutamoren.{" "}
          <a href="https://en.wikipedia.org/wiki/Ibutamoren" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Ibutamoren
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Nass R, Pezzoli SS, Oliveri MC, et al. Effects of an oral ghrelin mimetic on body composition and clinical outcomes in healthy older adults: a randomized trial. Ann Intern Med. 2008;149(9):601-11.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2757071/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC2757071/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Murphy MG, et al. MK-677 ibutamoren mechanism in humans. Endocrinology research.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Garcia JM, et al. Ibutamoren mesylate for cachexia and muscle wasting research.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Chapman IM, Bach MA, Van Cauter E, et al. Stimulation of the growth hormone (GH)-insulin-like growth factor I axis by daily oral administration of a GH secretagogue (MK-677) in healthy elderly subjects. J Clin Endocrinol Metab. 1996;81(12):4249-57.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          WADA Prohibited List 2026. World Anti-Doping Agency.
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function MK677Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"MK-677 (Ibutamoren)","description":"MK-677 (ibutamoren) research profile: oral ghrelin receptor mechanism, 24-hour GH/IGF-1 elevation, dosing protocol, side effects, WADA status.","url":"https://profpeptide.com/peptides/mk-677","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"MK-677"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">MK-677</h1>
        <span className="tag">Performance &amp; Energy</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Ibutamoren, Ibutamoren Mesylate, MK-0677, L-163,191, LUM-201, formerly Oratrope
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            MK-677 (ibutamoren) is an orally active, non-peptide ghrelin receptor agonist developed by Merck in the 1990s as a potential treatment for growth hormone deficiency, muscle wasting, and osteoporosis. Despite Phase 2 trial data showing 24-hour sustained elevation of GH and IGF-1, MK-677 was never FDA-approved and remains an investigational compound. Unlike injectable GH secretagogues (sermorelin, ipamorelin, tesamorelin), MK-677 is taken orally — a major convenience advantage. It mimics ghrelin at the GHS-R1a receptor, triggering pulsatile GH release that preserves natural feedback loops, unlike exogenous GH injection which suppresses endogenous production. Note: MK-677 is technically NOT a peptide — it&apos;s a non-peptide small molecule ghrelin mimetic — but is included on Prof. Peptide because it acts on the same GH/IGF-1 axis as peptide secretagogues and is commonly compared to them.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Sustained GH and IGF-1 elevation (24-hour duration per dose)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Increased lean body mass without change in fat mass (1-year RCT data)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improved sleep quality (deeper slow-wave sleep)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Increased appetite (useful for muscle gain, problematic for cutting)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Oral administration — no injections</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Bone density improvement (1-year RCT)</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Standard research dose: 25 mg/day orally, taken at bedtime. This is the dose used in Merck&apos;s 1-year RCT in healthy older adults. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> MK-677 is not FDA-approved and is sold as a research compound by specialty vendors. MK-677 is on the WADA Prohibited List — tested athletes should NOT use. See{" "}
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
        {["Performance & Energy", "Oral GH Secretagogue", "WADA-Prohibited", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295</Link>
        <Link href="/peptides/sermorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Sermorelin</Link>
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
