import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/cjc-1295" },
  title: "CJC-1295 — DAC and Mod GRF 1-29, Mechanism, Dosage | Prof. Peptide",
  description:
    "CJC-1295 (with DAC and without DAC) research profile: GHRH receptor mechanism, dosing protocol, ipamorelin stack, side effects.",
};

const faqs = [
  {
    q: "Should I get CJC-1295 with DAC or without DAC?",
    a: "Without DAC is more commonly preferred by experienced users because it preserves pulsatile GH dynamics that more closely match natural physiology. The DAC version is more convenient (weekly vs daily dosing) but produces a more sustained, less pulsatile GH environment. Both are effective; most research-grade users start with the no-DAC version paired with ipamorelin.",
  },
  {
    q: "What's the difference between CJC-1295 and Sermorelin?",
    a: "Sermorelin is the natural GHRH(1-29) fragment with native amino acids. CJC-1295 (without DAC) is the same fragment with four amino acid substitutions (D-Ala2, Gln8, Ala15, Leu27) that resist DPP-IV degradation. CJC-1295 is therefore more stable and produces longer-lasting effects than sermorelin. The DAC version goes further with albumin binding.",
  },
  {
    q: "Why combine CJC-1295 with ipamorelin?",
    a: "They activate different receptor pathways. CJC-1295 activates the GHRH receptor; ipamorelin activates the ghrelin (GHSR-1a) receptor. Both pathways converge on GH release but through different mechanisms. Combining produces greater GH release than either alone — the dual-pathway activation is synergistic, not additive.",
  },
  {
    q: "How often do I inject CJC-1295?",
    a: "With DAC: once or twice weekly (long half-life). Without DAC: 2–3 times daily (short half-life). The DAC version is more convenient; the no-DAC version produces sharper pulses that better match physiology.",
  },
  {
    q: "Why empty stomach dosing?",
    a: "Insulin spikes from food blunt GH release. To maximize GH response to CJC-1295, dose 2+ hours after eating and wait 30 minutes before the next meal. Bedtime dosing usually satisfies this naturally.",
  },
  {
    q: "How long until I see results?",
    a: "IGF-1 elevation appears within 1–2 days. Sleep improvements within 1–2 weeks. Body composition changes (lean mass, fat reduction) over 4–8 weeks. Most users notice subjective benefits before measurable changes.",
  },
  {
    q: "Is CJC-1295 safe long-term?",
    a: "Long-term safety beyond a few months has not been established in clinical trials. The Phase 2 program included one subject death attributed to unrelated heart disease, but this contributed to development being halted. Most users follow 8–12 week cycles with breaks rather than continuous use, both for safety conservatism and to maintain effectiveness.",
  },
  {
    q: "Where can I buy CJC-1295?",
    a: (
      <>
        CJC-1295 is sold by specialty research peptide vendors. Verify whether you&apos;re buying with DAC or without DAC — labeling is sometimes inconsistent. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "GHRH Receptor Activation [1] — CJC-1295 activates the GHRH receptor (GHRH-R) on anterior pituitary somatotroph cells. This is the same receptor activated by endogenous GHRH from the hypothalamus. Activation triggers cAMP/PKA signaling that drives both GH synthesis and release.",
      "DAC Albumin Binding [2] — The DAC modification adds a maleimidopropionyl-lysine residue at the C-terminus that covalently binds to serum albumin after subcutaneous injection. This dramatically extends the peptide's half-life from ~30 minutes (without DAC) to 6–8 days (with DAC).",
      "Pulsatile GH Amplification [3] — CJC-1295 amplifies the natural pulsatile pattern of GH secretion rather than causing continuous GH elevation. The endogenous somatostatin feedback loop continues to regulate the rhythm — CJC-1295 just makes each pulse larger.",
      "DPP-IV Resistance [1] — CJC-1295 has four amino acid substitutions (D-Ala2, Gln8, Ala15, Leu27) that protect it from rapid breakdown by DPP-IV (the enzyme that quickly degrades native GHRH). Even without DAC, these substitutions extend functional duration.",
      "Sustained IGF-1 Elevation [4] — A single CJC-1295 DAC injection produces 2–10x baseline GH levels for 6+ days and elevates IGF-1 by 0.5–3x for 9–11 days. Multiple doses sustain IGF-1 elevation for up to 28 days in human subjects.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "GHRH Replacement Therapy [4][5] — Phase 1 and 2 clinical studies in healthy adults showed dose-dependent GH and IGF-1 elevation following single and multiple subcutaneous injections, with sustained IGF-1 elevation for 6–14 days. Generally well-tolerated at doses up to 120 mcg/kg.",
      "GHRH Knockout Models [5] — In GHRH-knockout mice, daily CJC-1295 injection normalized growth and body composition. Doses every 48 or 72 hours produced intermediate effects, demonstrating the importance of dose frequency.",
      "Lipodystrophy Investigation — CJC-1295 was originally investigated for visceral fat reduction in HIV-associated lipodystrophy. Development was discontinued before completion of Phase 3.",
      "GH Deficiency Research — CJC-1295 has been studied as a potential treatment for adult and pediatric GH deficiency due to its ability to restore GH/IGF-1 levels with weekly dosing.",
      "Pulsatile GH Preservation [3] — Studies confirm CJC-1295 preserves pulsatile GH secretion patterns rather than producing continuous GH elevation, which is mechanistically safer than direct GH administration.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "CJC-1295 effects develop progressively. IGF-1 elevation appears within 1–2 days of the first dose. Body composition changes (lean muscle gain, fat reduction) typically emerge over 4–8 weeks. Sleep and recovery improvements are often the first subjective effects users report, appearing within 1–2 weeks. The DAC version produces a more sustained baseline effect; the non-DAC version produces sharper, more pulsatile responses tied to dose timing.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          CJC-1295 dosing depends on whether DAC is included. With DAC, the long half-life allows weekly dosing. Without DAC (Modified GRF 1-29), the short half-life requires multiple daily doses, typically paired with a GHRP like ipamorelin.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">CJC-1295 with DAC: 1–2 mg subcutaneously once or twice weekly; sustained GH elevation between doses</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">CJC-1295 without DAC (Modified GRF 1-29): 100 mcg per dose, 2–3 times daily, ideally 30+ minutes after a meal</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Stack dosing: 100 mcg CJC-1295 (no DAC) + 100–300 mcg ipamorelin together at bedtime is the most common protocol</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 8–12 weeks on, with at least 4 weeks off</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Empty stomach: insulin spikes from food blunt GH release — dose 2+ hours after eating and wait 30 min before next meal</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          DAC vs no-DAC choice: most experienced users prefer CJC-1295 without DAC because it preserves pulsatile GH dynamics that more closely mimic physiology. The DAC version produces a more &ldquo;flooded&rdquo; GH environment, which some users prefer for convenience but others find produces more side effects. Both are effective.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild facial flushing or warmth (transient, due to vasodilation)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Headache (especially with first doses or higher doses)</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild fluid retention or bloating</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Numbness or tingling (carpal-tunnel-like, similar to direct GH use)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Joint pain or stiffness</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Long-term cardiovascular safety not established</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Theoretical risk of accelerated growth in pre-existing tumors due to GH/IGF-1 elevation</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">One Phase 2 trial subject death — investigation concluded the cause was unrelated coronary artery disease, not CJC-1295 itself</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          CJC-1295 was generally well-tolerated in human Phase 1 and 2 trials. The Phase 2 trial subject death noted above was investigated and the attending physician concluded the most likely cause was asymptomatic coronary artery disease unrelated to treatment. However, this incident contributed to the discontinuation of clinical development. Long-term safety data beyond Phase 2 trials does not exist.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin). Common injection sites: abdomen, thigh, upper arm.",
      "Time of day: Bedtime is most common (aligns with natural GH peaks). Modified GRF 1-29 requires multiple daily doses.",
      "With or without food: Empty stomach. Wait 2+ hours after eating, and 30+ minutes before next meal.",
      "Site rotation: Use a different site each injection to reduce irritation.",
      "Reconstitution: Use bacteriostatic water for injection. CJC-1295 with DAC: 5 mg vial + 2.5 mL BAC water = 2 mg/mL. Modified GRF 1-29: 2 mg vial + 2 mL BAC water = 1 mg/mL.",
      "Missed dose (DAC): If less than 2 days late, take as soon as remembered; if more, skip and resume next scheduled dose.",
      "Missed dose (no DAC): Skip and resume next scheduled dose.",
      "Cycle: 8–12 weeks on, 4+ weeks off.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Ipamorelin — the most popular pairing. Ipamorelin (ghrelin receptor) + CJC-1295 (GHRH receptor) produces synergistic GH release through dual-pathway activation. See{" "}
          <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">
            Ipamorelin
          </Link>
          .
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">BPC-157 / TB-500 — paired for recovery support during anabolic protocols.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">IGF-1 LR3 — combined for direct IGF-1 receptor activation alongside endogenous GH stimulation. Different mechanisms, additive effects.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Sermorelin — generally NOT stacked with CJC-1295. Both target the GHRH receptor — combining is redundant. Choose one.</li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Resistance training — exercise-induced GH release amplified when paired with CJC-1295.</li>
      </ol>
    ),
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Insulin and corticosteroids — both blunt GH release; time injections away from meals and steroid administration.",
      "Sermorelin or other GHRH analogs — redundant mechanism, do not combine.",
      "Direct HGH — combining is generally unnecessary.",
      "No major drug-drug interactions reported in clinical studies.",
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
          CJC-1295 is not FDA-approved for any human use. Development by ConjuChem reached Phase 2 trials but was discontinued. The Phase 2 program included one subject death, attributed by the attending physician to unrelated coronary artery disease — but the incident contributed to halting development.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Most clinical evidence comes from short-term Phase 1 and 2 studies (typically 28-day exposure). Long-term safety data beyond a few months does not exist. Cardiovascular safety with sustained use has not been established.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits CJC-1295 (with or without DAC) in sport under Section S2 (peptide hormones). Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Note that CJC-1295 and Modified GRF (1-29) are sometimes confused in commercial labeling. Strict definitions: CJC-1295 with DAC includes the maleimidopropionyl-lysine extension; Modified GRF (1-29), also called CJC-1295 without DAC, lacks this extension. Verify the form before purchase.
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
          Wikipedia. CJC-1295.{" "}
          <a href="https://en.wikipedia.org/wiki/CJC-1295" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/CJC-1295
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Teichman SL, Neale A, Lawrence B, et al. Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295 in healthy adults. J Clin Endocrinol Metab. 2006;91(3):799-805.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16352683/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16352683/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Ionescu M, Frohman LA. Pulsatile secretion of growth hormone (GH) persists during continuous stimulation by CJC-1295, a long-acting GHRH analog. J Clin Endocrinol Metab. 2006;91(12):4792-7.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17018654/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17018654/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Sackmann-Sala L, Ding J, Frohman LA, Kopchick JJ. Activation of the GH/IGF-1 axis by CJC-1295, a long-acting GHRH analog, results in serum protein profile changes in normal adult subjects. Growth Horm IGF Res. 2009;19(6):471-7.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/19467607/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/19467607/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Alba M, Fintini D, Sagazio A, et al. Once-daily administration of CJC-1295, a long-acting growth hormone-releasing hormone (GHRH) analog, normalizes growth in the GHRH knockout mouse. Am J Physiol Endocrinol Metab. 2006;291(6):E1290-4.{" "}
          <a href="https://journals.physiology.org/doi/full/10.1152/ajpendo.00201.2006" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://journals.physiology.org/doi/full/10.1152/ajpendo.00201.2006
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function CJC1295Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"CJC-1295","description":"CJC-1295 (with DAC and without DAC) research profile: GHRH receptor mechanism, dosing protocol, ipamorelin stack, side effects.","url":"https://profpeptide.com/peptides/cjc-1295","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"CJC-1295"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">CJC-1295</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: DAC:GRF, Modified GRF (1-29) without DAC, GHRH Analog
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            CJC-1295 is a synthetic 30-amino-acid analog of growth hormone-releasing hormone (GHRH) developed by ConjuChem Biotechnologies. It exists in two forms: CJC-1295 with DAC (Drug Affinity Complex) and CJC-1295 without DAC (also called Modified GRF 1-29). The DAC modification binds the peptide to serum albumin, extending its half-life from ~30 minutes to 6–8 days. Both forms stimulate pulsatile GH release via the GHRH receptor on pituitary somatotroph cells. CJC-1295 reached Phase 2 clinical trials before development was discontinued. It remains one of the most-studied research peptides for GH-axis stimulation, especially when stacked with ipamorelin or other GHRPs.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates pulsatile growth hormone release via GHRH receptor activation</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Increases IGF-1 levels with sustained elevation (6–14 days for DAC version)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Preserves natural physiological GH rhythm vs continuous GH administration</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Supports lean muscle growth, fat reduction, and recovery (downstream of GH)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Synergizes strongly with GHRPs like ipamorelin for amplified GH release</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">DAC version requires only 1–2 injections per week vs daily for non-DAC</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> With DAC: typically 1–2 mg subcutaneously once or twice weekly. Without DAC (Modified GRF 1-29): typically 100 mcg per dose, multiple times daily. Cycle length 8–12 weeks. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> CJC-1295 is not FDA-approved and is sold only as a research-grade peptide. See{" "}
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
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
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
