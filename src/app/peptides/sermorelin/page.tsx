import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/sermorelin" },
  title: "Sermorelin — GHRH(1-29), Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Sermorelin research profile: native GHRH(1-29) mechanism, dosing protocol, FDA history (Geref), ipamorelin stack, side effects.",
};

const faqs = [
  {
    q: "Is sermorelin FDA-approved?",
    a: "Sermorelin was FDA-approved as Geref in 1990 for pediatric GH deficiency. The brand was discontinued in 2008. The FDA later confirmed the discontinuation was NOT for safety or efficacy reasons. Sermorelin is currently available through licensed compounding pharmacies (with prescription) or as research-grade peptide.",
  },
  {
    q: "What's the difference between sermorelin and CJC-1295?",
    a: "Sermorelin is the natural GHRH(1-29) fragment. CJC-1295 (without DAC) is the same fragment with four amino acid substitutions (D-Ala2, Gln8, Ala15, Leu27) that resist DPP-IV degradation. This makes CJC-1295 more stable and longer-lasting. Sermorelin produces gentler, more physiological pulses; CJC-1295 produces stronger, longer effects.",
  },
  {
    q: "Should I use sermorelin or CJC-1295?",
    a: "Sermorelin if you prefer the most natural/gentle option with the longest FDA safety record. CJC-1295 (without DAC) if you prefer a slightly stronger and more durable effect. CJC-1295 with DAC if you want weekly rather than daily dosing. All three work through the same receptor — the choice is mostly about pharmacokinetics.",
  },
  {
    q: "How long until I see results from sermorelin?",
    a: "IGF-1 elevation appears within 1–2 weeks. Sleep improvements within 2–4 weeks. Body composition changes (lean mass, fat reduction) over 3–6 months. Sermorelin's effects are slower than CJC-1295 because of the shorter half-life and gentler per-dose effect.",
  },
  {
    q: "Why bedtime dosing?",
    a: "The body releases the majority of its daily GH during the first 90 minutes of deep sleep. Sermorelin's short half-life means bedtime injection captures and amplifies this natural peak. Dosing earlier in the day still works but produces smaller effects.",
  },
  {
    q: "Can sermorelin be used long-term?",
    a: "Sermorelin has a longer track record of long-term human use than other GHRH analogs because of its decades of FDA-approved clinical use. Many adult anti-aging protocols use it for 6–12 months continuously under medical supervision. Monitoring for IGF-1 elevation, glucose tolerance, and thyroid function is recommended for sustained use.",
  },
  {
    q: "Is sermorelin safer than direct HGH?",
    a: "Yes, mechanistically. Sermorelin works upstream of the pituitary, preserving the body's natural feedback loops. The GH it releases is endogenous and pulsatile, matching natural physiology. Direct HGH bypasses these regulatory mechanisms and can cause supraphysiologic GH levels that lead to side effects like edema, joint pain, and insulin resistance more readily than sermorelin.",
  },
  {
    q: "Where can I buy sermorelin?",
    a: (
      <>
        Through licensed US compounding pharmacies with a prescription, or through specialty research peptide vendors as research-grade material. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "GHRH Receptor Activation [1] — Sermorelin activates the GHRH receptor (GHRH-R) on pituitary somatotroph cells with the same affinity and downstream signaling as endogenous GHRH. The receptor is a Gαq-coupled GPCR that triggers cAMP/PKA signaling, driving GH synthesis and release.",
      "Pulsatile GH Release [2] — Sermorelin amplifies the natural pulsatile GH secretion pattern. Because the peptide is rapidly cleared (~10–20 minute half-life), it produces sharp, physiologic GH pulses rather than continuous elevation.",
      "Native GHRH Sequence [1] — Unlike CJC-1295 (which has 4 amino acid substitutions for DPP-IV resistance), sermorelin is the natural GHRH(1-29) sequence. This gives it a clean physiological profile but also makes it more rapidly degraded — the trade-off of using a more 'natural' peptide.",
      "IGF-1 Elevation [3] — Sustained sermorelin therapy raises IGF-1 levels through GH-mediated hepatic IGF-1 production. IGF-1 mediates many of the downstream anabolic and lipolytic effects.",
      "Hypothalamic Feedback Preserved — Because sermorelin works upstream of the pituitary (rather than directly replacing GH), the natural feedback loops involving somatostatin and IGF-1 remain intact. This is mechanistically safer than direct GH administration.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Pediatric Growth Hormone Deficiency [4] — Original FDA approval indication. Geref (sermorelin) was used for both diagnosis and treatment of GH deficiency in children with idiopathic short stature. Demonstrated growth velocity improvements in pediatric trials.",
      "Adult GHRH Replacement [5] — Studies in older adults show sermorelin restores pulsatile GH/IGF-1 patterns toward youthful levels. A randomized placebo-controlled trial in older men (Vittone et al., 1997) showed measurable improvements in body composition and lipid profile.",
      "Cognitive Effects in Older Adults [5] — Baker et al. (2012) studied a related GHRH analog in older adults with mild cognitive impairment, with improvements in cognitive function reported.",
      "Body Composition — Sermorelin therapy in adults produces gradual increases in lean muscle mass and decreases in body fat over 4–6 month protocols. Effects are modest compared to direct HGH but with cleaner safety profile.",
      "Sleep Quality — Most subjective effects of sermorelin therapy involve improved sleep quality and recovery, likely tied to alignment of dosing with natural GH circadian peaks.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Sermorelin effects develop slowly. IGF-1 elevation appears within 1–2 weeks of consistent dosing. Sleep quality improvements often appear within 2–4 weeks. Body composition changes (lean mass, fat reduction) typically emerge over 3–6 months. Sermorelin's effects are generally more gradual than CJC-1295 due to the shorter half-life and lower per-dose potency.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Sermorelin is administered as a subcutaneous injection. The short 10–20 minute half-life means effects depend entirely on dose timing. Most protocols target alignment with natural GH peaks during sleep.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Standard dose: 200–500 mcg subcutaneously once daily at bedtime</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Higher dose: up to 1000 mcg per dose for patients with more severe GHRH-axis decline</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Empty stomach: insulin spikes from food blunt GH release — wait 2+ hours after eating, 30 min before next meal</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 3–6 months is common for adult GHRH-replacement protocols; some patients use continuously under clinical supervision</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Some protocols stack sermorelin with a GHRP like ipamorelin to amplify GH release</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Sermorelin produces gentler, more physiological effects than CJC-1295 with DAC because of the shorter half-life. Most users describe sermorelin as feeling &ldquo;cleaner&rdquo; than direct HGH or longer-acting analogs. The trade-off is slower onset and need for daily dosing — patients who prefer convenience often choose CJC-1295 instead.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild facial flushing or warmth (transient)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Headache (especially first doses)</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fluid retention</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Joint pain or stiffness</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild numbness or tingling (uncommon)</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Allergic reactions (uncommon — was FDA-approved with established safety)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical risk of accelerated growth in pre-existing tumors due to GH/IGF-1 elevation</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hypothyroidism — rare; monitored in long-term protocols</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Sermorelin had over 18 years of FDA-approved clinical use as Geref before the brand was discontinued (for commercial reasons, not safety or efficacy). It has the most established human safety profile of any GHRH analog discussed in research peptide contexts. The discontinuation of Geref was confirmed by the FDA as not being for safety or effectiveness reasons.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin). Common injection sites: abdomen, thigh, upper arm.",
      "Time of day: Bedtime is strongly preferred. Inject 30–60 minutes before sleep to align with natural GH peak.",
      "With or without food: Empty stomach. Wait 2+ hours after eating, 30 min before next meal.",
      "Site rotation: Use a different site each injection.",
      "Reconstitution: Use bacteriostatic water for injection. A typical reconstitution is 5 mg vial + 2 mL BAC water = 2.5 mg/mL (250 mcg per 0.1 mL on U-100 insulin syringe).",
      "Missed dose: Skip and resume next scheduled dose. Do not double-dose.",
      "Cycle: 3–6 months is most common for adult GHRH replacement; continuous use under clinical supervision is also documented.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Ipamorelin — the most popular pairing. Sermorelin (GHRH receptor) + ipamorelin (ghrelin receptor) produces synergistic GH release through dual-pathway activation. See{" "}
          <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">
            Ipamorelin
          </Link>
          .
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">BPC-157 / TB-500 — paired for recovery support.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">IGF-1 LR3 — combined for direct IGF-1 receptor activation alongside endogenous GH stimulation.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">CJC-1295 — generally NOT stacked. Both target the GHRH receptor — combining is redundant. Choose one based on dosing convenience and feel.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Resistance training — exercise-induced GH release amplified when paired with sermorelin.</li>
      </ol>
    ),
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Insulin and corticosteroids — both blunt GH release; time injections away from meals and steroid administration.",
      "Other GHRH analogs (CJC-1295) — redundant mechanism, do not combine.",
      "Direct HGH — combining is generally unnecessary.",
      "Thyroid hormones — sermorelin may affect thyroid function in long-term use; monitor in protocols beyond 6 months.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: Store at 2–8°C; use within 14–28 days (sermorelin is less stable than CJC-1295 once reconstituted).",
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
          Sermorelin was FDA-approved as Geref in 1990 for pediatric GH deficiency and discontinued in 2008. The FDA later confirmed the discontinuation was NOT for safety or efficacy reasons, but for commercial reasons. Sermorelin remains accessible through licensed compounding pharmacies in the US (with prescription) and as a research-grade peptide.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Most published clinical evidence is from older studies (1990s–2000s) using sermorelin in pediatric and adult GH deficiency contexts. Anti-aging and longevity uses are off-label and not formally validated through controlled trials.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits sermorelin in sport under Section S2 (peptide hormones). Research-grade material sold outside compounding pharmacy channels is intended for laboratory use only and is not approved for human consumption.
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
          Walker RF. Sermorelin: a better approach to management of adult-onset growth hormone insufficiency? Clin Interv Aging. 2006;1(4):307-8.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2682417/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC2682417/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Prakash A, Goa KL. Sermorelin: a review of its use in the diagnosis and treatment of children with idiopathic growth hormone deficiency. BioDrugs. 1999;12(2):139-57.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18031173/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18031173/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Khorram O, Laughlin GA, Yen SS. Endocrine and metabolic effects of long-term administration of [Nle27]growth hormone-releasing hormone-(1-29)-NH2 in older men and women. J Clin Endocrinol Metab. 1997;82(5):1472-9.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9141537/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9141537/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Aimaretti G, Bellone S, Bellone J, et al. Short-term therapy with growth hormone (GH)-releasing hormone in children with partial GH insufficiency. Horm Res. 1995;43(3):113-20.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/7782059/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/7782059/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Vittone J, Blackman MR, Busby-Whitehead J, et al. Effects of single nightly injections of growth hormone-releasing hormone (GHRH 1-29) in healthy elderly men. Metabolism. 1997;46(1):89-96.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9005976/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9005976/
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function SermorelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Sermorelin","description":"Sermorelin research profile: native GHRH(1-29) mechanism, dosing protocol, FDA history (Geref), ipamorelin stack, side effects.","url":"https://profpeptide.com/peptides/sermorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Sermorelin"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Sermorelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: GRF (1-29), Geref (discontinued brand), GHRH(1-29) NH2
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Sermorelin is a synthetic 29-amino-acid analog of growth hormone-releasing hormone (GHRH) — specifically the first 29 amino acids of native GHRH, which contain the entire biological activity of the parent hormone. It was originally developed by Serono and FDA-approved as Geref in 1990 for diagnosis of growth hormone deficiency in children. The brand was discontinued in 2008 (not for safety or efficacy reasons), but sermorelin remains widely used in compounding pharmacy and research-grade contexts. It stimulates pulsatile GH release through GHRH receptor activation, with a short half-life (~10–20 minutes) requiring frequent dosing.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates natural pulsatile growth hormone release via GHRH receptor</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Increases IGF-1 through GH-mediated pathway</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Supports lean muscle growth, fat reduction, recovery (downstream of GH)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improved sleep quality reported with bedtime dosing</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Bone density support in clinical research</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Generally cleaner safety profile than other GHRH analogs (was FDA-approved)</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols use 200–500 mcg subcutaneously once daily, typically at bedtime. Cycle length is typically 8–12 weeks. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Sermorelin&apos;s brand product (Geref) was discontinued in 2008. It is currently available through compounding pharmacies (with prescription) or as research-grade peptide. See{" "}
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
        {["Growth Hormone", "GHRH Analog", "Anti-Aging", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
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
