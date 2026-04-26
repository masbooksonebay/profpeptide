import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/melanotan-ii" },
  title: "Melanotan II — Melanocortin Agonist, Tanning Peptide, Risks | Prof. Peptide",
  description:
    "Melanotan II research profile: melanocortin receptor mechanism, tanning effect, documented serious risks (rhabdomyolysis, mole darkening), dosing, regulatory warnings.",
};

const faqs = [
  {
    q: "Is Melanotan II FDA-approved?",
    a: "No — and health agencies in the US, UK, Australia, and EU have issued explicit warnings against its use. Multiple case reports document serious adverse events including rhabdomyolysis, renal injury, and severe sympathomimetic toxicity. PT-141 (bremelanotide / Vyleesi) is the only FDA-approved derivative, and it was specifically engineered to remove MT-II's strong tanning effect.",
  },
  {
    q: "How is MT-II different from PT-141?",
    a: "PT-141 was derived from MT-II by removing the C-terminal amide group. This single structural change eliminates the strong melanocyte-stimulating effect (tanning) while preserving the sexual arousal effects. PT-141 is FDA-approved (Vyleesi, June 2019) for HSDD in premenopausal women; MT-II is not FDA-approved for any indication and carries multiple regulatory warnings. PT-141 represents the cleaner pharmacology that MT-II's non-selective melanocortin profile lacks.",
  },
  {
    q: "Is sunless tanning from MT-II safe?",
    a: "There is no documented safety basis for MT-II as a tanning agent. Reversible darkening of moles, formation of new moles, and reported melanoma cases (causation unclear) are documented in the literature. The original developers at the University of Arizona did not pursue MT-II for sunless tanning specifically because of these concerns. Health authorities worldwide have warned against this use case.",
  },
  {
    q: "Will MT-II protect against UV damage?",
    a: "No. The skin darkening from MT-II is from increased melanin production, but this does NOT replace the protective effects of avoiding UV exposure. Users should NOT assume MT-II-induced tan provides equivalent UV protection — it doesn't. UV damage to skin and DNA still accumulates regardless of MT-II-induced pigmentation.",
  },
  {
    q: "What is the most dangerous MT-II side effect?",
    a: "Rhabdomyolysis with renal failure is the most dangerous documented side effect. Multiple published case reports describe MT-II users requiring ICU admission for severe muscle breakdown and acute kidney injury. One published case described a 39-year-old male injecting 6 mg (six times the typical research dose) who developed severe rhabdomyolysis. Renal infarction has also been reported.",
  },
  {
    q: "Can MT-II cause melanoma?",
    a: "Reported melanoma cases exist in the MT-II literature. Causation is debated — some researchers attribute these cases to UV behavior in users (people who use MT-II often spend more time in the sun) rather than to direct MT-II carcinogenicity. The drug certainly causes mole darkening and new mole formation, which makes melanoma surveillance more difficult. The combined risk profile is a strong argument for avoiding MT-II.",
  },
  {
    q: "How does MT-II affect appetite?",
    a: "MT-II reduces appetite via MC4R activation in the arcuate nucleus of the hypothalamus. This is part of the basis for setmelanotide's FDA approval for rare forms of obesity (POMC, LEPR mutations). The combination of tanning + appetite suppression earned MT-II its informal nickname \"Barbie drug.\" Note that decreased appetite + nausea is a common compound side effect.",
  },
  {
    q: "Where can I buy Melanotan II?",
    a: (
      <>
        MT-II is sold by specialty research peptide vendors as research-grade material despite regulatory warnings from multiple health agencies. We strongly recommend reading the full Side Effects &amp; Safety section before considering use. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "Non-Selective Melanocortin Agonism [1] — Activates MC1R, MC3R, MC4R, and MC5R. Each receptor has distinct effects: MC1R (skin pigmentation), MC3R/MC4R (appetite + sexual arousal + cardiovascular), MC5R (exocrine glands). The non-selective profile is responsible for both the desired effects and the broad side-effect profile.",
      "Melanin Production [2] — MC1R activation in melanocytes triggers eumelanin synthesis. This produces UV-independent skin darkening — sometimes called 'sunless tanning' — but does NOT confer the protective effects of avoiding UV exposure.",
      "Sexual Arousal [3] — MC4R activation in hypothalamus produces sexual desire and erection effects (male) and arousal (female). This is the basis for PT-141 / Vyleesi development — PT-141 retains this effect while removing the tanning effect through structural modification.",
      "Appetite Suppression [4] — MC4R in the arcuate nucleus reduces food intake. Effect contributes to MT-II's 'Barbie drug' profile (tanning + thinness). Setmelanotide, an FDA-approved selective MC4R agonist, uses this same pathway for rare obesity.",
      "Cardiovascular Effects — Sympathomimetic activation can increase blood pressure and heart rate. This is a major safety concern at higher doses and contributes to the documented rhabdomyolysis and renal injury cases in case reports.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Sunless Tanning [5] — University of Arizona Phase 1 trials in the 1990s established the tanning effect. Tan develops over 5+ doses. Originally pursued as a cosmetic by Clinuvel; abandoned due to regulatory restrictions.",
      "Erectile Dysfunction Research [6] — Wessells et al. early trials in men with ED showed initiation of erections. This research line spawned PT-141 / bremelanotide development. PT-141 is now FDA-approved; MT-II is not.",
      "Adverse Event Case Reports — Multiple published case reports of rhabdomyolysis, renal infarction, and renal failure following MT-II use. Two notable cases: a 39-year-old male injecting 6 mg (severe rhabdomyolysis, ICU admission), and a 27 mg cumulative dose case with renal infarction.",
      "Mole Darkening — Reversible darkening of pigmented lesions and new mole formation are documented in case reports. This complicates melanoma surveillance and is a primary reason dermatology authorities warn against MT-II use.",
      "Setmelanotide Development — FDA-approved selective MC4R agonist for rare forms of obesity (POMC, LEPR mutations). Represents the cleaner pharmacology that MT-II's non-selective profile lacks. The selectivity of setmelanotide and PT-141 suggests pharma research has moved past MT-II's non-selective approach.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "MT-II effects develop on multiple timescales. Tan development: 5–10 doses over 2–3 weeks for visible darkening. Sexual effects: 30–60 minutes after a single dose. Side effects (nausea, flushing, mole changes): 30–90 minutes after injection. Mole darkening can persist after discontinuation. Reported melanoma cases generally emerge over months to years of use.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          MT-II is administered as a subcutaneous injection. Given the documented serious adverse events at higher doses, conservative starting and maintenance doses are critical.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">STARTING DOSE: 0.1 mg subcutaneously to assess tolerance. ALWAYS START LOW.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Loading phase (typical research protocol): 0.25–0.5 mg per dose, 3–5 days per week, 2–4 weeks.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Maintenance: 0.5 mg, 1–2× per week to maintain tan.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">NEVER exceed 1 mg per dose. The 6 mg case report describes near-fatal toxicity.</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Avoid combining with concurrent UV exposure timing. MT-II effects are independent of UV.</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          MT-II is NOT FDA-approved. The risk profile is meaningfully worse than typical research peptides. Reading the full Side Effects &amp; Safety section before any use is strongly recommended.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Nausea (40–65% at doses &gt;0.5 mg)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Flushing</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mole darkening</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Decreased appetite</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Spontaneous erections in males</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hyperpigmentation (face, gums, breasts)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Persistent mole changes</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Headache, dizziness</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild blood pressure elevation</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (documented in case reports)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Rhabdomyolysis with renal failure — ICU admission documented in published case reports</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Renal infarction</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Sympathomimetic toxicity</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Priapism (prolonged erection requiring medical intervention)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reported melanoma cases (causation unclear, may relate to UV behavior in users)</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          MT-II is NOT FDA-approved. Health authorities in the US, UK, Australia, and EU have issued warnings. PT-141 (Vyleesi) is the only FDA-approved derivative for sexual arousal indications. The combined risk profile — documented rhabdomyolysis, renal injury, mole darkening, theoretical melanoma risk — makes MT-II one of the higher-risk research peptides commonly available.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Subcutaneous injection. Standard insulin syringe.",
      "Reconstitution: 10 mg vial + 1–2 mL bacteriostatic water = 5–10 mg/mL.",
      "Start with 0.1 mg test dose to assess tolerance.",
      "Time of day: any, but avoid evening if nausea-sensitive.",
      "Site rotation: abdomen, thigh, upper arm.",
      "Never share needles.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Generally NOT recommended to stack — MT-II's risk profile favors caution as standalone.",
      "PT-141 — DO NOT stack with MT-II. Both are melanocortin agonists; combination produces additive cardiovascular and side-effect risk.",
      "PDE5 inhibitors (sildenafil) — theoretical additive cardiovascular effect; monitor.",
      "Other peptides (BPC-157, TB-500) — no documented interaction; generally safe to use in separate protocols.",
      "Anti-nausea protocol — some users take oral ondansetron 30 minutes before injection. Ginger tablets are a non-prescription alternative.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Sympathomimetic medications (decongestants, ADHD stimulants) — additive cardiovascular effects. AVOID combination.",
      "Antihypertensives — MT-II raises BP transiently; effects on patients on BP meds are unpredictable.",
      "PT-141 (bremelanotide) — DO NOT combine. Same receptor system, additive risk.",
      "Setmelanotide — DO NOT combine. Same receptor system.",
      "Alcohol — additive nausea, dehydration, and cardiovascular effects.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized: -20°C long-term, 2–8°C short-term.",
      "Reconstituted: 2–8°C, 14–30 days max.",
      "Light-sensitive — store in original carton.",
      "Discard if cloudy or discolored.",
      "Reconstitute with bacteriostatic water for injection. Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Melanotan II is NOT FDA-approved for any human use. Health agencies in the US, UK, Australia, EU, and elsewhere have issued warnings against its use.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Multiple published case reports document serious adverse events including rhabdomyolysis, renal injury, severe sympathomimetic toxicity, priapism, and reported melanoma cases. The &ldquo;research peptide&rdquo; market for MT-II is largely unregulated — purity and potency vary widely.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term safety data are limited and concerning for melanoma risk (though causation vs UV behavior remains debated). PT-141 (bremelanotide) is the FDA-approved derivative for sexual arousal applications and represents the cleaner pharmacology that MT-II&apos;s non-selectivity lacks.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: not currently on the WADA prohibited list. We strongly recommend reading the full Side Effects &amp; Safety section before considering use.
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
          Wikipedia. Melanotan II.{" "}
          <a href="https://en.wikipedia.org/wiki/Melanotan_II" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Melanotan_II
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Hadley ME, Dorr RT. Melanocortin peptide therapeutics: historical milestones, clinical studies and commercialization. Peptides. 2006;27(4):921-30.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wessells H, Levine N, Hadley ME, et al. Melanocortin receptor agonists, penile erection, and sexual motivation. Int J Impot Res. 2000;12 Suppl 4:S74-9.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Nelson ME, Bryant SM, Aks SE. Melanotan II injection resulting in systemic toxicity and rhabdomyolysis. Clin Toxicol. 2012;50(10):1169-73.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23121206/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23121206/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          DermNet NZ. Melanotan II.{" "}
          <a href="https://dermnetnz.org/topics/melanotan-ii" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://dermnetnz.org/topics/melanotan-ii
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Renal infarction case report. PMC.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7148395/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC7148395/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Dorr RT, Lines R, Levine N, et al. Evaluation of melanotan-II, a superpotent cyclic melanotropic peptide. Life Sci. 1996;58(20):1777-84.
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function MelanotanIIPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Melanotan II","description":"Melanotan II research profile: melanocortin receptor mechanism, tanning effect, documented serious risks (rhabdomyolysis, mole darkening), dosing, regulatory warnings.","url":"https://profpeptide.com/peptides/melanotan-ii","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Melanotan II"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Melanotan II</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: MT-II, MT2, Barbie Drug, Melanocyte-Stimulating Hormone Analog
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Melanotan II is a synthetic cyclic heptapeptide and non-selective agonist of the melanocortin receptors (MC1R, MC3R, MC4R, MC5R). It was developed in the 1980s at the University of Arizona as a successor to Melanotan I (afamelanotide, FDA-approved as Scenesse for erythropoietic protoporphyria). Originally developed as a sunless tanning agent, MT-II also produces strong sexual arousal effects (via MC4R) and appetite suppression. It is NOT FDA-approved for any indication, and health agencies in multiple countries have warned against its use. PT-141 (bremelanotide / Vyleesi) was specifically derived from MT-II by removing the C-terminal amide group — eliminating the strong tanning effect while preserving sexual arousal effects. MT-II is associated with documented serious adverse events including rhabdomyolysis, renal injury, and reversible darkening of moles.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Sunless tanning (skin darkening via MC1R-mediated melanin production)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Appetite suppression (MC4R activation)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Sexual arousal / erection support in males (MC3R/MC4R)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduced UV exposure required for tan development</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Reported risks (genuinely worth flagging upfront):</span> Mole darkening, new moles, reported melanoma cases (causation unclear), rhabdomyolysis, renal infarction, sympathomimetic toxicity, severe nausea, priapism. See the full Side Effects &amp; Safety section.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Starting dose: 0.1 mg subcutaneously to assess tolerance. Typical research range: 0.25–1 mg per dose, 2–3 times per week during loading phase, then weekly maintenance. NEVER exceed 1 mg per dose in research contexts. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> MT-II is sold by specialty research peptide vendors despite regulatory warnings. See{" "}
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
        {["Skin Health & Anti-Aging", "Melanocortin Agonist", "Tanning", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/pt-141" className="text-sm font-medium text-[#0891b2] hover:underline">PT-141</Link>
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/glow" className="text-sm font-medium text-[#0891b2] hover:underline">GLOW</Link>
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
            href="https://www.amazon.com/s?k=skin+anti+aging+supplements&tag=profpeptide-20"
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
