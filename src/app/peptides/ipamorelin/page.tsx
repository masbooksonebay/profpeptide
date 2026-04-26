import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/ipamorelin" },
  title: "Ipamorelin — Selective GHRP, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Ipamorelin research profile: selective GHSR-1a agonist mechanism, dosing protocol, CJC-1295 stack, side effects, and clinical evidence.",
};

const faqs = [
  {
    q: "How is ipamorelin different from GHRP-2 or GHRP-6?",
    a: "All three are growth hormone-releasing peptides that activate the ghrelin receptor. The critical difference is selectivity. GHRP-2 and GHRP-6 also raise cortisol, prolactin, and ACTH alongside GH. Ipamorelin raises only GH — no significant effect on other pituitary hormones even at very high doses. This makes ipamorelin the cleanest GHRP for long-term use.",
  },
  {
    q: "Should I stack ipamorelin with CJC-1295?",
    a: "It's the most popular and synergistic stack in the GH peptide space. Ipamorelin activates the ghrelin receptor; CJC-1295 activates the GHRH receptor. Combined, they produce greater GH release than either alone. Most research protocols use ipamorelin + CJC-1295 (often without DAC) injected together at bedtime.",
  },
  {
    q: "Why bedtime dosing?",
    a: "Your body releases the majority of its daily GH during the first 90 minutes of deep sleep. Injecting ipamorelin 30–60 minutes before sleep capitalizes on and amplifies this natural GH peak. Dosing at other times still works but produces smaller GH pulses.",
  },
  {
    q: "Will ipamorelin make me hungry?",
    a: "Yes, briefly. Ipamorelin activates the ghrelin receptor (ghrelin is the body's primary hunger hormone). Many users report increased appetite for 30–60 minutes after injection. This is part of why bedtime dosing is preferred — you can sleep through the hunger spike. The effect tends to diminish over weeks of consistent use.",
  },
  {
    q: "Does ipamorelin raise cortisol?",
    a: "No — this is one of its main advantages over other GHRPs. Even at doses 200x higher than the GH-releasing dose, ipamorelin does not raise cortisol or ACTH. GHRP-2 and GHRP-6 do raise these hormones, which is why ipamorelin is preferred for long-term use.",
  },
  {
    q: "How long until I see results?",
    a: "Sleep quality improvements often appear within 1–2 weeks. Body composition changes (increased lean mass, reduced fat) typically emerge over 8–12 weeks. IGF-1 elevation can be detected in blood work within days of starting consistent therapy.",
  },
  {
    q: "Can I take ipamorelin during the day?",
    a: "Yes, though bedtime alignment with natural GH peaks is most efficient. Some users add a pre-workout dose (30–60 min before training) to amplify exercise-induced GH release. Multiple daily dosing (morning + mid-day + bedtime) is sometimes used for sustained effect, but bedtime alone produces most of the benefit.",
  },
  {
    q: "Where can I buy ipamorelin?",
    a: (
      <>
        Ipamorelin is sold by specialty research peptide vendors. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "GHSR-1a Receptor Activation [1] — Ipamorelin selectively binds the growth hormone secretagogue receptor (GHSR-1a, the ghrelin receptor) on pituitary somatotroph cells and hypothalamic neurons. This is the same receptor activated by endogenous ghrelin — ipamorelin acts as a synthetic ghrelin mimic with much greater receptor selectivity.",
      "cAMP/PKA Signaling [2] — Receptor activation triggers a Gαq-coupled signaling cascade that increases intracellular calcium and cAMP production, activating protein kinase A. This drives the synthesis and release of stored growth hormone from somatotrophs.",
      "Pulsatile GH Release [1] — Ipamorelin amplifies the natural pulsatile pattern of GH secretion rather than creating a continuous flood. This preserves the hypothalamic-pituitary feedback loops that regulate GH homeostasis, which is mechanistically safer than direct GH administration.",
      "Selectivity for GH [1][3] — Unlike GHRP-2 and GHRP-6, ipamorelin does NOT stimulate cortisol, ACTH, prolactin, FSH, LH, or TSH release. Even at doses 200x higher than the GH-releasing dose, no meaningful effect on these other hormones is observed. This selectivity is its primary clinical advantage.",
      "Somatostatin Antagonism [4] — Ipamorelin reduces the inhibitory effect of somatostatin (GH-inhibiting hormone), allowing the pituitary's GH-releasing activity to remain elevated longer than it would otherwise.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Growth Hormone Stimulation [1][3] — Multiple animal and human studies confirm ipamorelin produces GH release with potency comparable to GHRP-6 but greater selectivity. Effects observed in primary rat pituitary cells (EC50 ~1.3 nmol/L) and pentobarbital-anaesthetized rat models.",
      "Body Composition Research — IGF-1 elevation downstream of ipamorelin-induced GH release supports lean muscle synthesis and lipolysis. Most ipamorelin body composition data comes from clinical practice rather than controlled trials.",
      "Bone Formation [4] — In adult female rats, ipamorelin counteracted glucocorticoid-induced decreases in bone formation. The GH secretagogues ipamorelin and GHRP-6 increased bone mineral content in adult female rats.",
      "Postoperative Ileus (Discontinued) — Helsinn Therapeutics took ipamorelin through Phase 2 trials for postoperative ileus but discontinued for lack of efficacy in that specific indication. The compound itself was safe — it just didn't address that specific problem effectively.",
      "Cognitive and Sleep Research — Anecdotal and clinical observations suggest improved sleep quality with bedtime dosing, likely due to alignment with natural GH circadian peaks. Limited controlled human data.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Ipamorelin effects build over weeks. Most users notice improved sleep within 1–2 weeks of consistent dosing. Body composition changes (increased lean mass, reduced fat) typically emerge over 8–12 weeks. IGF-1 elevation can be measured within days of starting therapy. Half-life is short (~2 hours), so effects depend on consistent timing rather than sustained blood levels.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Ipamorelin is administered as a subcutaneous injection. The 2-hour half-life means effects depend on dose timing rather than continuous coverage. Most protocols target alignment with natural GH circadian peaks (sleep).
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standard dose: 200–300 mcg subcutaneously per injection</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Bedtime dosing: 200–300 mcg before sleep — most common protocol, aligns with natural GH peak during deep sleep</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Multiple daily dosing: 200 mcg 2–3x per day (morning, mid-day, bedtime) for users targeting sustained effect</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Pre-workout dosing: some users add a 200 mcg dose 30–60 minutes before training to amplify exercise-induced GH release</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 8–12 weeks on, with at least 4 weeks off; some protocols run continuously for 6+ months under clinical supervision</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Ipamorelin is frequently stacked with CJC-1295 (with or without DAC). The combination produces greater GH release than either alone because they activate different receptor pathways simultaneously — ipamorelin via GHSR-1a, CJC-1295 via GHRH receptor. The two together produce a more robust GH pulse than either component.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Increased hunger (transient — ipamorelin activates the ghrelin receptor)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fatigue or sleepiness following injection</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Slight numbness or tingling (uncommon)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fluid retention with long-term use</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Long-term safety data beyond 12 weeks is limited</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical risk of accelerated growth in pre-existing tumors due to GH/IGF-1 elevation</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Severe allergic reactions — rare and not commonly reported</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Ipamorelin has one of the cleanest safety profiles of any GHRP because of its selectivity. It does NOT raise cortisol (a problem with GHRP-2 and GHRP-6) and does not affect prolactin or other pituitary hormones. Long-term use should be monitored for IGF-1 elevation and glucose tolerance — both rise modestly with sustained GH stimulation.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin). Common injection sites: abdomen, thigh, upper arm.",
      "Time of day: Bedtime is most common. Inject 30–60 minutes before sleep on an empty stomach.",
      "With or without food: Best on empty stomach (2+ hours after eating, no food for 30 min after) to maximize GH release. Food spikes insulin, which blunts GH secretion.",
      "Site rotation: Use a different site each injection to reduce irritation.",
      "Reconstitution: Use bacteriostatic water for injection. A typical reconstitution is 5 mg vial + 2.5 mL BAC water = 2 mg/mL (200 mcg per 0.1 mL on U-100 insulin syringe).",
      "Missed dose: Skip and resume next scheduled dose. Do not double-dose.",
      "Cycle: 8–12 weeks on, 4+ weeks off.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          CJC-1295 (with or without DAC) — the most popular pairing. CJC-1295 activates the GHRH receptor while ipamorelin activates the ghrelin receptor — the dual-pathway activation produces synergistic GH release. See{" "}
          <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">
            CJC-1295
          </Link>
          .
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">BPC-157 / TB-500 — paired for recovery support. The healing peptides accelerate tissue repair while ipamorelin supports the GH-driven anabolic environment.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">IGF-1 LR3 — combined for direct IGF-1 receptor activation alongside endogenous GH stimulation. Inject IGF-1 LR3 at least 2–3 hours apart from ipamorelin to avoid receptor competition.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Resistance training — natural pairing. Exercise-induced GH release is amplified when paired with ipamorelin&apos;s pulse.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Adequate sleep and protein — non-negotiable. GH effects depend on adequate recovery and substrate availability.</li>
      </ol>
    ),
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Insulin and corticosteroids — both blunt GH release; consider timing dosing away from meals and steroid administration.",
      "Other GH secretagogues (GHRP-2, GHRP-6, MK-677) — combination is redundant via the same receptor; no additive benefit.",
      "Direct human growth hormone (HGH) — combining is generally unnecessary; ipamorelin stimulates endogenous GH and adding exogenous HGH bypasses the regulatory feedback that makes ipamorelin safer.",
      "No significant drug-drug interactions reported in published research.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: Store at 2–8°C; use within 28–30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
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
          Ipamorelin is not FDA-approved for any human use. It was investigated in Phase 2 clinical trials for postoperative ileus by Helsinn Therapeutics but development was discontinued in 2014 due to lack of efficacy in that specific indication. The compound itself was found safe — the trial outcome reflected the unsuitability of the indication, not safety problems.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Most evidence for ipamorelin&apos;s anti-aging and body composition uses comes from animal models, small-scale clinical practice observations, and individual case reports rather than controlled human trials. Long-term safety data beyond 12 weeks is limited.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits ipamorelin in sport under Section S2 (peptide hormones). Research-grade material is sold for laboratory use only and is not approved for human consumption.
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
          Raun K, Hansen BS, Johansen NL, et al. Ipamorelin, the first selective growth hormone secretagogue. Eur J Endocrinol. 1998;139(5):552-61.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9849822/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9849822/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Ipamorelin.{" "}
          <a href="https://en.wikipedia.org/wiki/Ipamorelin" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Ipamorelin
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Johansen PB, Segev Y, Raun K, et al. Ipamorelin, a new growth-hormone-releasing peptide, induces longitudinal bone growth in rats. Growth Horm IGF Res. 1999;9(2):106-13.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10373343/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/10373343/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Andersen NB, Malmlöf K, Johansen PB, et al. The growth hormone secretagogue ipamorelin counteracts glucocorticoid-induced decrease in bone formation of adult rats. Growth Horm IGF Res. 2001;11(5):266-72.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11735237/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11735237/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Svensson J, Lall S, Dickson SL, et al. The GH secretagogues ipamorelin and GH-releasing peptide-6 increase bone mineral content in adult female rats. J Endocrinol. 2000;165(3):569-77.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10860573/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/10860573/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function IpamorelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Ipamorelin","description":"Ipamorelin research profile: selective GHSR-1a agonist mechanism, dosing protocol, CJC-1295 stack, side effects, and clinical evidence.","url":"https://profpeptide.com/peptides/ipamorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Ipamorelin"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Ipamorelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: NNC 26-0161, GHRP, Selective Growth Hormone Secretagogue
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Ipamorelin is a synthetic pentapeptide (Aib-His-D-2-Nal-D-Phe-Lys-NH2) developed by Novo Nordisk in the late 1990s as a selective agonist of the ghrelin/growth hormone secretagogue receptor (GHSR-1a). Unlike other GHRPs (GHRP-2, GHRP-6), ipamorelin stimulates growth hormone release without elevating cortisol, prolactin, ACTH, FSH, LH, or TSH — making it the most selective GHRP available. It was investigated in Phase 2 trials for postoperative ileus but discontinued for lack of efficacy in that specific indication. It remains widely studied for body composition, recovery, and anti-aging research.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates pulsatile growth hormone release via the ghrelin receptor pathway</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Highly selective for GH — does not affect cortisol, prolactin, or other pituitary hormones</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Increases IGF-1 levels through GH-mediated pathway</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Supports lean muscle growth and fat reduction (downstream of GH)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improved sleep quality reported, especially with bedtime dosing</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Bone formation support (counters glucocorticoid-induced bone loss in animal models)</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols use 200–300 mcg subcutaneously, 1–3 times daily. Bedtime dosing is most common to align with natural GH circadian peaks. Cycle length is typically 8–12 weeks. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Ipamorelin is not FDA-approved for any human use and is sold only as a research-grade peptide. See{" "}
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
        {["Growth Hormone", "GHRP", "GHSR Agonist", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295</Link>
        <Link href="/peptides/sermorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Sermorelin</Link>
        <Link href="/peptides/tesamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Tesamorelin</Link>
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
            href="https://www.amazon.com/s?k=growth+hormone+supplements&tag=profpeptide-20"
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
