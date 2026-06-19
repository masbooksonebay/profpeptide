import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/sermorelin-ipamorelin",
  title: "Sermorelin + Ipamorelin Stack — Beginner GH Secretagogue Research Profile | Prof. Peptide",
  description:
    "Sermorelin + Ipamorelin research profile: dual-pathway GH secretagogue stack, beginner-friendly with the strongest regulatory footing. Mechanism, dosing protocol, side effects, FAQ.",
});

const faqs = [
  {
    q: "What is the Sermorelin + Ipamorelin stack?",
    a: (
      <>
        The Sermorelin + Ipamorelin stack is a 2-component growth hormone secretagogue blend:{" "}
        <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>{" "}
        (a GHRH 1-29 analog, the GHRH-pathway partner) +{" "}
        <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
        (a selective GHS-R1a / ghrelin receptor agonist, the pulse trigger). Together they stimulate growth hormone release through two distinct pituitary receptor pathways simultaneously, producing larger and more pulsatile GH output than either compound alone. Both have short half-lives (&sim;10&ndash;20 min for Sermorelin, &sim;2 h for Ipamorelin), preserving physiological pulsatile GH release. It&apos;s the recommended entry-point stack before stepping up to CJC-1295-based protocols.
      </>
    ),
  },
  {
    q: "Should I start with Sermorelin + Ipamorelin or the GH Stack?",
    a: (
      <>
        Sermorelin + Ipamorelin is the recommended starting point. Both stacks hit the same dual-pathway mechanism (GHRH receptor + GHS-R1a), and both use short-acting components that preserve pulsatile GH release. The key distinction is regulatory footing:{" "}
        <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>{" "}
        has FDA-recognized clinical history as Geref (approved for pediatric GH deficiency diagnostics; now available via compounding pharmacies for adult GH deficiency), giving it the strongest safety and regulatory pedigree of the GHRH analogs. The{" "}
        <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (CJC-1295 no-DAC + Ipamorelin)</Link>{" "}
        uses CJC-1295, which has a slightly longer half-life (&sim;30 min vs &sim;10&ndash;20 min) but no approved clinical analog. Researchers confident with GH secretagogue protocols and seeking slightly longer action per dose can step up to the GH Stack after establishing tolerability here.
      </>
    ),
  },
  {
    q: "What is Sermorelin's regulatory history?",
    a: (
      <>
        Sermorelin (GHRH 1-29) was FDA-approved as Geref (sermorelin acetate) for stimulation of GH release in children with GH deficiency and as a GH-axis diagnostic tool. The branded product was withdrawn from the US market in 2002 for business reasons, not safety — it was not pulled due to safety signals. Sermorelin remains available through licensed compounding pharmacies for adult GH deficiency, making it the only GHRH analog with an approved clinical-use pathway in the US. This is why researchers position Sermorelin + Ipamorelin as the most accessible and beginner-appropriate GH secretagogue stack: the GHRH-pathway component has real-world clinical exposure data. Ipamorelin has no FDA approval and both compounds are prohibited by WADA (Section S2). Research-grade product is sold for laboratory use only.
      </>
    ),
  },
  {
    q: "Why is Ipamorelin the preferred GHRP partner for Sermorelin?",
    a: "Ipamorelin is selective for the ghrelin / GHS-R1a receptor — it triggers GH release without meaningfully elevating cortisol, ACTH, prolactin, FSH, LH, or TSH. Older GHRPs (GHRP-2, GHRP-6, Hexarelin) produced GH release but also drove cortisol and appetite increases, which undercut the clean GH-axis profile that makes a GHRH+GHRP stack useful. Ipamorelin&apos;s selectivity means the combination avoids these side effects, producing a cleaner hormonal response.",
  },
  {
    q: "When should I take Sermorelin + Ipamorelin?",
    a: "Pre-bed dosing on an empty stomach is the standard research protocol. Growth hormone naturally pulses during slow-wave sleep, and both Sermorelin and Ipamorelin injected 30–60 minutes before bed reinforce that overnight GH pulse. An empty stomach (at least 2 hours after the last meal) is the most important timing constraint — elevated insulin and somatostatin from a recent meal will blunt the GH response. Some protocols add a second daily dose post-workout.",
  },
  {
    q: "How does Sermorelin + Ipamorelin compare to CJC-1295 DAC + Ipamorelin?",
    a: (
      <>
        The main differences are half-life and dosing convenience. Sermorelin has a half-life of &sim;10&ndash;20 minutes; CJC-1295 no-DAC &sim;30 minutes; CJC-1295 with DAC &sim;6&ndash;8 days. The DAC variant (see{" "}
        <Link href="/peptides/cjc-1295-dac-ipamorelin" className="text-[#0891b2] hover:underline">CJC-1295 DAC + Ipamorelin</Link>
        ) only requires 1&ndash;2 mg subcutaneously once weekly, making it convenient for researchers who prefer minimal injection frequency. The trade-off is that the long-acting DAC form produces sustained, non-pulsatile GH elevation rather than physiological pulses, and it lacks the regulatory analog that Sermorelin&apos;s clinical history provides. The Sermorelin + Ipamorelin stack is the most beginner-friendly and physiologically conservative option; CJC-1295 DAC + Ipamorelin is the most convenient once tolerability is established.
      </>
    ),
  },
  {
    q: "How long until results appear?",
    a: "GH secretagogue stacks build effect over weeks, not days. Sleep quality improvements (deeper slow-wave sleep, better recovery) often appear within 1–2 weeks. Subjective recovery, joint, and connective-tissue changes typically emerge over 4–8 weeks. Body composition changes (lean mass support, fat distribution) accumulate over 12–24 weeks. Standard research cycles run 8–16 weeks active with a similar off-period to avoid pituitary receptor desensitization.",
  },
];

const studies = [
  {
    title: "Ipamorelin, the First Selective Growth Hormone Secretagogue",
    authors: "Raun K, Hansen BS, Johansen NL, et al.",
    journal: "European Journal of Endocrinology",
    year: "1998",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
    summary: "The landmark selectivity study for Ipamorelin — the GHRP component of this stack. Established that Ipamorelin produces robust GH release with approximately 90% less cortisol elevation and no meaningful ACTH or prolactin response compared to older GHRPs (GHRP-2, GHRP-6, Hexarelin). This clean hormonal profile is exactly why Ipamorelin was selected as the GHS-R1a partner for both Sermorelin and CJC-1295 stacks — it adds GH pulse triggering through the ghrelin receptor without the cortisol and appetite side effects of earlier GHRPs.",
  },
  {
    title: "GH-Releasing Peptide Stimulates GH Release in Normal Men and Acts Synergistically with GH-Releasing Hormone",
    authors: "Bowers CY, Reynolds GA, Durham D, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: "1990",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/2108187/",
    summary: "Mechanistic study demonstrating supra-additive GH release when GHRH analogs and GHSR (ghrelin receptor) agonists are co-administered — the scientific foundation for the Sermorelin + Ipamorelin stack&apos;s design. Co-administration produced 2–4× greater GH area under the curve compared to either compound alone. The cAMP pathway (Sermorelin / GHRHR) and the calcium/PKC pathway (Ipamorelin / GHS-R1a) converge at the somatotroph, where simultaneous activation amplifies the secretory response beyond what either signal produces alone.",
  },
  {
    title: "Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development",
    authors: "Ishida J, Saitoh M, Ebner N, et al.",
    journal: "JCSM Rapid Communications",
    year: "2020",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9",
    summary: "A comprehensive review of the GH secretagogue class providing clinical context for the Sermorelin + Ipamorelin combination. Covers the evolution from native GHRH to stable analogs like Sermorelin (GHRH 1-29), documenting how the dual-pathway approach became the preferred research protocol for GH axis optimization. Also addresses why secretagogue stacks are considered preferable to direct HGH — stimulating endogenous production preserves natural feedback mechanisms and avoids supraphysiological IGF-1 spikes.",
  },
  {
    title: "Sermorelin: A Better Approach to Management of Adult-Onset Growth Hormone Insufficiency",
    authors: "Walker RF",
    journal: "Clinical Interventions in Aging",
    year: "2006",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/18046908/",
    summary: "A clinical review of Sermorelin&apos;s mechanism, pharmacology, and historical use as Geref. Documents Sermorelin&apos;s FDA-recognized clinical history for GH deficiency diagnostics and pediatric GH deficiency treatment, and its availability through compounding pharmacies for adult use — the regulatory foundation for positioning it as the most accessible GHRH analog. The paper establishes the short half-life (~10–20 minutes), dose-dependent GH stimulation, and the preservation of pituitary feedback regulation that distinguishes Sermorelin from longer-acting GHRH analogs.",
  },
  {
    title: "Effects of Growth Hormone-Releasing Hormone and Somatostatin on Sleep EEG and Nocturnal Hormone Secretion in Humans",
    authors: "Steiger A, Guldner J, Hemmeter U, et al.",
    journal: "Neuroendocrinology",
    year: "1992",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/1361964/",
    summary: "Human study establishing the connection between GHRH administration and enhanced slow-wave sleep — the mechanistic basis for pre-bed dosing of GHRH analogs like Sermorelin. GHRH administration increased slow-wave sleep duration and reinforced the natural nocturnal GH pulse. This study underpins the pre-bed dosing protocol used across all GHRH analog research stacks: timing the injection to synchronize with the body&apos;s sleep-onset GH surge produces the largest amplitude GH pulse and drives the sleep-quality improvements that are among the earliest subjective effects reported by researchers.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Sermorelin + Ipamorelin work?",
    intro:
      "Sermorelin + Ipamorelin combines two peptides that hit the same pituitary gland through different receptor doors. Sermorelin is a GHRH 1-29 analog — it activates the GHRH receptor on pituitary somatotrophs, the same receptor the body&apos;s natural growth hormone-releasing hormone uses. Ipamorelin is a selective GHRP, activating the ghrelin / GHS-R1a receptor on the same cells. When both receptors fire simultaneously, the pituitary releases more GH than either signal triggers alone — in a pulsatile pattern that mirrors physiological GH secretion.",
    body: [
      "Sermorelin — GHRH Pathway Activation [1][4]. Sermorelin (GHRH 1-29) binds the GHRH receptor on anterior pituitary somatotrophs. Activation triggers a Gs-coupled cAMP/PKA cascade that drives GH gene transcription and primes the somatotroph for GH release. Half-life is approximately 10–20 minutes — even shorter than CJC-1295 without DAC (~30 min) — making it the most rapidly cleared of the GHRH analogs and the one that most tightly preserves discrete, pulsatile GH release.",
      "Ipamorelin — GHS-R1a Pathway Activation [1][2]. Ipamorelin selectively activates the growth hormone secretagogue receptor (GHS-R1a, the ghrelin receptor) on the same pituitary somatotrophs. Activation triggers a Gq-coupled phospholipase C / IP3 / calcium / PKC cascade that drives immediate GH release. Ipamorelin&apos;s half-life is approximately 2 hours. Its defining feature is selectivity: GH pulse without meaningful cortisol, ACTH, prolactin, FSH, LH, or TSH elevation — distinguishing it from older GHRPs.",
      "Dual-Pathway Synergy [2]. Simultaneous GHRHR activation (cAMP/PKA cascade from Sermorelin) and GHS-R1a activation (calcium/PKC cascade from Ipamorelin) converge at the somatotroph secretory machinery. The two second-messenger cascades amplify each other — co-administration produces 2–4× greater GH area under the curve than either compound alone. This supra-additive synergy is the core rationale for combining a GHRH analog with a GHRP.",
      "Physiological Pulsatility [3]. The short half-lives of both Sermorelin (~10–20 min) and Ipamorelin (~2 h) produce a discrete GH pulse over 1–2 hours, then return to baseline. This mirrors the body&apos;s natural overnight and post-exercise GH pulses, preserving feedback regulation (somatostatin inhibition, IGF-1 feedback) and avoiding the sustained, non-pulsatile GH elevation produced by DAC-conjugated analogs or exogenous HGH. Pulsatile GH is how the pituitary naturally operates.",
      "Downstream IGF-1 Elevation [3]. The amplified pituitary GH output drives elevated hepatic IGF-1 production. IGF-1 carries most of the systemic anabolic and tissue-repair effects — lean mass support, recovery enhancement, joint and connective tissue benefit. Both Sermorelin and CJC-1295 (no-DAC) drive measurable IGF-1 elevation within days of starting a stack protocol.",
    ],
  },
  {
    id: "research",
    title: "What is Sermorelin + Ipamorelin used for?",
    intro:
      "The Sermorelin + Ipamorelin stack is used for the same GH-axis research applications as the GH Stack (CJC-1295 + Ipamorelin), with the additional context that Sermorelin&apos;s clinical history provides a closer regulatory analog for safety class. Researchers use it for body composition, recovery, sleep quality, and GH-axis support in the context of age-related GH decline.",
    body: [
      "Sleep Quality [5]. GHRH administration (including Sermorelin analogs) enhances slow-wave sleep and reinforces the natural nocturnal GH pulse. Pre-bed dosing of Sermorelin + Ipamorelin is studied for sleep-quality improvement. Subjective sleep improvements are among the first effects reported, often within 1–2 weeks.",
      "Body Composition [3]. Elevated GH and downstream IGF-1 support lean muscle synthesis, visceral fat metabolism, and overall body composition. The most-cited GH secretagogue use case in the research and biohacking communities. Effects accumulate over 12–24 weeks of active research protocol.",
      "Recovery and Tissue Repair. Elevated GH and IGF-1 support faster recovery from exercise-induced muscle damage through enhanced protein synthesis and cellular repair mechanisms. Often stacked with BPC-157 and TB-500 for combined local + systemic tissue-repair coverage.",
      "GH-Axis Support in Aging [4]. GH axis activity declines significantly with age. Sermorelin has compounding-pharmacy approval for adult GH deficiency — providing the closest clinical analog for GH secretagogue use in this context. The stack is researched as a means of supporting GH axis function to counteract age-related muscle loss, fat accumulation, and metabolic decline.",
      "Joint and Connective Tissue Support. IGF-1 supports collagen synthesis and connective tissue maintenance. Common research application alongside resistance training and tissue-repair peptide stacks.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Sermorelin + Ipamorelin take to work?",
    intro:
      "Effects build over weeks. Sleep quality and subjective recovery improvements often appear within the first 1–2 weeks. Subjective joint, connective-tissue, and recovery effects accumulate over 4–8 weeks. Body composition changes take 12–24 weeks to become measurable.",
    content:
      "IGF-1 elevation is detectable in serum within days of starting the stack. The Sermorelin + Ipamorelin combination does not produce dramatic short-term changes — it produces gradual, accumulating effects driven by sustained pulsatile elevation of endogenous GH and downstream IGF-1. Standard research cycles run 8–16 weeks active with a similar off-period to avoid pituitary receptor desensitization. Sermorelin&apos;s clinical data in GH deficiency shows continued benefit through multi-month treatment with appropriate cycling.",
  },
  {
    id: "dosing",
    title: "How is Sermorelin + Ipamorelin dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sermorelin + Ipamorelin is administered as a subcutaneous injection. Both components are short-acting, so daily (or twice-daily) dosing is required. The protocol below is derived from each compound&apos;s individual research literature and community use — there is no controlled trial of the combination as a single product.
        </p>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Standard research protocol:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sermorelin dose.</span> 100&ndash;300 mcg subcutaneously per injection.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Ipamorelin dose.</span> 200&ndash;300 mcg subcutaneously per injection (same injection or separate syringe).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Frequency.</span> Once daily (pre-bed preferred) or twice daily (pre-bed + post-workout). Pre-bed is the recommended starting point for new researchers.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing.</span> Empty stomach, at least 2 hours after the last meal. Elevated insulin and somatostatin blunt the GH response &mdash; this is the most important timing constraint.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Titration.</span> Start at the lower end (Sermorelin 100 mcg + Ipamorelin 200 mcg once daily pre-bed) for weeks 1&ndash;2, then increase by ~50 mcg each peptide every 1&ndash;2 weeks as tolerated toward target doses.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle.</span> 8&ndash;12 weeks active, 4-week minimum off-period before re-cycling.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Vial formats and reconstitution math
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Common SKUs.</span> Sermorelin is typically sold in 2 mg or 5 mg lyophilized vials; Ipamorelin in 2 mg or 5 mg lyophilized vials. Some vendors offer a pre-blended Sermorelin + Ipamorelin vial (e.g., 5 mg total: 2 mg Sermorelin + 3 mg Ipamorelin, or equal-weight formulations). Check the vendor&apos;s label carefully for component weights.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Reconstitution.</span> Use bacteriostatic water for injection (BAC water). A standard approach: add 2 mL BAC water to a 2 mg Sermorelin vial (1 mg/mL = 1,000 mcg/mL), giving 10 units per 100 mcg dose on a U-100 insulin syringe. Add 2 mL BAC water to a 2 mg Ipamorelin vial (1 mg/mL), giving 20 units per 200 mcg dose. Swirl gently &mdash; do not shake &mdash; to avoid damaging the peptides.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Separate vials vs pre-blend.</span> Most researchers buy Sermorelin and Ipamorelin as separate vials — this lets them adjust each peptide&apos;s dose independently and stagger titration. A pre-blended vial locks the ratio, which is acceptable if that ratio matches the target protocol.
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0 pt-2">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Conc. (2 mg vial)</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">100 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">150 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">200 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">300 mcg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 mg/mL (2,000 mcg/mL)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">7.5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1 mg/mL (1,000 mcg/mL)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          Table above applies to a 2 mg single-peptide vial. For different vial sizes or pre-blended vials, use the{" "}
          <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator</Link>{" "}
          for ratio-specific math.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Sermorelin + Ipamorelin is not FDA-approved as a research blend. Dosing is derived from each component&apos;s individual literature plus research-community protocols — there are no approved retail dosing standards for the combination.
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
    title: "How is Sermorelin + Ipamorelin administered?",
    intro:
      "Both peptides are administered by subcutaneous injection using a small insulin syringe. Pre-bed dosing on an empty stomach is the canonical protocol because it synchronizes with the body&apos;s natural overnight GH pulse and the sleep-stage-dependent GH secretion pattern.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Pre-bed is the default &mdash; 30&ndash;60 minutes before sleep on an empty stomach. An optional second dose may be added post-workout if running a 2&times; daily protocol.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Empty stomach.</span> At least 2 hours after the last meal. Elevated insulin and somatostatin blunt the GH response &mdash; this is the most important timing rule for this stack.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Same injection or separate syringes.</span> If using separate vials, both peptides may be drawn into the same insulin syringe for a single injection, or administered as separate injections at the same site-rotation point. Do not mix in the same vial storage.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Alternate injection sites each dose. Stay at least 1 inch from previous injection sites to minimize injection-site reactions.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> Use bacteriostatic water for injection (BAC water). Swirl gently &mdash; do not shake &mdash; to avoid damaging the lyophilized peptides.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Resume on the next scheduled dose. Do not double-dose. For once-daily protocols, a single missed night has minimal impact; consistency over weeks matters more than any single injection.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycling.</span> 8&ndash;12 weeks on, 4-week minimum off. Cycling avoids pituitary receptor desensitization and preserves GH-axis responsiveness over repeated research cycles.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Unlike once-weekly GLP-class peptides, Sermorelin and Ipamorelin are both short-acting and timing-sensitive: insulin and somatostatin from a recent meal will blunt the GH response. The table below summarizes the timing variables that most affect the stack&apos;s GH output.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1&ndash;2&times; daily (pre-bed primary; post-workout optional 2nd dose)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Pre-bed, 30&ndash;60 min before sleep — aligns with natural nocturnal GH pulse and slow-wave sleep onset</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Empty stomach, 2+ hours after last meal (insulin + somatostatin blunt GH response)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Abdomen (avoid 2-inch radius around navel), upper outer thighs, back of upper arms &mdash; alternate per injection</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-lives</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Sermorelin ~10&ndash;20 min; Ipamorelin ~2 h — both short-acting, daily or twice-daily dosing required</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state timeline</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Sleep quality 1&ndash;2 weeks; recovery 4&ndash;8 weeks; body composition 12&ndash;24 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Sermorelin + Ipamorelin stack well with?",
    intro:
      "The stack pairs well with tissue-repair peptides and metabolic compounds — GH-mediated systemic IGF-1 elevation amplifies the local effects of other interventions. Avoid double-dosing the GH axis by adding another GH secretagogue (MK-677, CJC-1295) or running standalone Sermorelin or Ipamorelin protocols on top of this combination.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Tissue-repair peptides.</span> The most common pairing.{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
          +{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
          (or the{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>
          ) for combined local + systemic tissue repair. Elevated IGF-1 amplifies the substrate for local healing peptides.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Stepping up to the GH Stack.</span> Researchers who have established tolerability with Sermorelin + Ipamorelin and want slightly longer GHRH action per dose can step up to{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (CJC-1295 no-DAC + Ipamorelin)</Link>.{" "}
          The CJC-1295 no-DAC half-life of ~30 min allows slightly longer pituitary priming per injection versus Sermorelin&apos;s ~10&ndash;20 min.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Metabolic / weight peptides.</span>{" "}
          GH-axis activation provides lean-mass preservation during caloric restriction — Sermorelin + Ipamorelin is sometimes run alongside fat-loss protocols. Elevated IGF-1 helps offset catabolism.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Tesamorelin substitution.</span>{" "}
          <Link href="/peptides/tesamorelin" className="text-[#0891b2] hover:underline">Tesamorelin</Link>{" "}
          (FDA-approved GHRH analog for HIV-associated lipodystrophy) is the other regulatory-clean GHRH analog. Researchers targeting visceral fat specifically sometimes substitute Tesamorelin for Sermorelin in this stack format.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + adequate protein.</span> Required for GH-mediated anabolic effect. GH and IGF-1 elevation without mechanical loading and protein substrate produces less lean-mass benefit. Recommended: 1.2&ndash;1.6 g protein/kg body weight throughout the research cycle.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: MK-677.</span>{" "}
          <Link href="/peptides/mk-677" className="text-[#0891b2] hover:underline">MK-677</Link>{" "}
          (ibutamoren) is another GH secretagogue (ghrelin receptor agonist) — stacking with Ipamorelin doubles the GHS-R1a activation without proportional benefit and increases appetite and potential cortisol side effects.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: full-dose standalone CJC-1295 or Sermorelin.</span> Adding a standalone{" "}
          <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
          or Sermorelin protocol on top of this stack doubles the GHRH-pathway activation without independent benefit. Choose one GHRH analog per protocol.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Sermorelin + Ipamorelin?",
    intro:
      "Most reported side effects are mild and reflect GH-axis physiology — water retention, transient flushing, injection-site reactions, and early sleep changes. Ipamorelin&apos;s selectivity keeps the profile cleaner than older GHRP stacks. Theoretical long-term concerns are insulin resistance and receptor desensitization from sustained GH-axis activation. Sermorelin&apos;s clinical use history provides the most reassuring real-world safety context of the GHRH analogs.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection-site reactions.</span> Redness, mild irritation, or transient pinkness at the subcutaneous injection site. The most commonly reported effect; resolved by site rotation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient flushing / head rush.</span> Mild warmth or head rush shortly after injection, most common with the first few doses. Usually resolves within the first 1&ndash;2 weeks of continued dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild water retention.</span> Reflects normal GH-mediated sodium and fluid effects. Typically mild and resolves on cycle-off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient appetite changes.</span> Generally mild with Ipamorelin (selective) compared to older GHRPs that produced pronounced appetite spikes.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Numbness / tingling in hands.</span> Mild carpal-tunnel-like sensations from GH-related fluid retention. Common with prolonged cycles; resolves on cycle-off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fasting glucose elevation.</span> GH counter-regulates insulin. Worth monitoring with fasting glucose checks during longer research cycles, particularly in pre-diabetic subjects.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Typically mild and more common during dose titration. Usually resolves after the first 1&ndash;2 weeks at a given dose level.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vivid dreams or disrupted sleep onset.</span> Reported with pre-bed dosing in some researchers. Usually adapts within the first 1&ndash;2 weeks of the cycle.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare or theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Insulin resistance with chronic use.</span> Sustained GH-axis activation can promote insulin resistance. The primary theoretical reason for cycling &mdash; 8&ndash;12 weeks on, 4-week minimum off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pituitary receptor desensitization.</span> Continuous GH-axis stimulation without breaks can downregulate receptor responsiveness. Standard cycling protocols are the mitigation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical mitogenic risk.</span> Chronic IGF-1 elevation has a theoretical tumor-stimulation concern from epidemiological associations of high baseline IGF-1 with certain cancer types. No signals have appeared in Sermorelin clinical-use data or GH secretagogue research-community use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-doping prohibition.</span> Both Sermorelin and Ipamorelin are on the WADA prohibited list (Section S2, peptide hormones / growth factors). Tested athletes should not use this stack in any form.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sermorelin&apos;s compounding-pharmacy clinical use provides the most reassuring real-world safety data of any GHRH analog research stack component. Ipamorelin&apos;s selectivity profile means the combination avoids the cortisol elevation, prolactin elevation, and excessive appetite that older GHRP stacks produced.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Sermorelin + Ipamorelin interact with other drugs?",
    intro:
      "The stack has limited well-documented systemic drug interactions, but several theoretical concerns apply because GH and IGF-1 affect insulin sensitivity, fluid balance, and tissue growth. Sermorelin&apos;s clinical use history means interaction data for the GHRH-pathway component is more developed than for CJC-1295.",
    body: [
      "Insulin and oral hypoglycemics. GH counter-regulates insulin. Users on insulin, metformin, or other diabetes medications may need dose adjustment. Fasting glucose is worth monitoring during cycles.",
      "Corticosteroids. Chronic corticosteroid use can suppress the GH axis at the pituitary level, potentially blunting the response to the Sermorelin component. No acute safety concern documented.",
      "Other GH-axis compounds. MK-677, HGH itself, IGF-1 LR3, CJC-1295 — overlapping mechanisms increase IGF-1 elevation without proportional benefit and amplify side effects. Avoid stacking with other GH secretagogues.",
      "Levothyroxine. GH-axis activation can shift T4-to-T3 conversion. Users on thyroid replacement medication may notice adequacy changes during GH secretagogue cycles.",
      "Component-level interactions. Cross-reference the Sermorelin and Ipamorelin individual peptide pages for full per-component interaction details.",
    ],
  },
  {
    id: "storage",
    title: "How should Sermorelin + Ipamorelin be stored?",
    body: [
      "Lyophilized (powder) form: -20°C long-term, 2–8°C short-term (refrigerated). Sermorelin is somewhat less stable than CJC-1295 at room temperature — keep refrigerated consistently.",
      "Reconstituted solution: 2–8°C, use within 30 days.",
      "Reconstitution: bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze the reconstituted solution. Freezing damages the peptide structure and renders it inactive.",
      "Protect from light — store in the original container or amber vial.",
      "Discard if the solution is cloudy, discolored, or contains visible particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Sermorelin + Ipamorelin research?",
    intro:
      "Most evidence comes from preclinical models and small human studies of each component individually. The combination is widely discussed in the research community but has no controlled trial as a single product. Sermorelin&apos;s clinical-use history is the closest regulatory analog for the GHRH-pathway component.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The Sermorelin + Ipamorelin stack is NOT FDA-approved as a combination. Sermorelin has approved compounding-pharmacy use for adult GH deficiency (the GHRH-analog with the strongest regulatory history); Ipamorelin has no FDA approval. There is no controlled clinical trial of the two-peptide combination as a single product — synergy claims rest on the mechanistic GHRH+GHRP literature and each compound&apos;s individual pharmacodynamic data.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most evidence on combination GH secretagogue stacks is mechanistic and short-term human pharmacodynamic data. Long-term effects of sustained dual-pathway GH-axis stimulation are not fully established — theoretical concerns include insulin resistance, pituitary receptor desensitization, and chronic IGF-1 elevation effects. Standard cycling (8&ndash;12 weeks on, 4-week minimum off) is the research-community mitigation strategy.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade peptide quality varies by source. Sermorelin is less stable than some GHRH analogs and more susceptible to degradation from improper storage or shipping. Third-party HPLC testing and verified cold-chain handling are strongly recommended.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: Both Sermorelin and Ipamorelin are on the WADA prohibited list (Section S2, peptide hormones and growth factors). Tested athletes should not use this stack in any form.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Sermorelin + Ipamorelin",
    intro:
      "Neither Sermorelin (as research-grade injectable) nor Ipamorelin is FDA-approved for over-the-counter retail sale. Both are sold by specialty research peptide vendors for laboratory use only — typically as separate vials (allowing independent dose titration) or occasionally as a pre-blended combination vial. The vendors highlighted below carry both components and have been vetted for transparent third-party testing and traceable batch documentation.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners" },
            { slug: "spartan-peptides", note: "Carries Sermorelin and Ipamorelin" },
            { slug: "glacier-aminos" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#0891b2] hover:underline">
            See all verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Sermorelin + Ipamorelin FAQ",
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
          Raun K, Hansen BS, Johansen NL, et al. Ipamorelin, the first selective growth hormone secretagogue. Eur J Endocrinol. 1998;139(5):552-561.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9849822/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9849822/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bowers CY, Reynolds GA, Durham D, et al. Growth hormone (GH)-releasing peptide stimulates GH release in normal men and acts synergistically with GH-releasing hormone. J Clin Endocrinol Metab. 1990;70(4):975-82.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/2108187/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/2108187/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ishida J, Saitoh M, Ebner N, et al. Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development. JCSM Rapid Commun. 2020;3(1):25-37.{" "}
          <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Walker RF. Sermorelin: a better approach to management of adult-onset growth hormone insufficiency? Clin Interv Aging. 2006;1(4):307-308.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18046908/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18046908/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Steiger A, Guldner J, Hemmeter U, et al. Effects of growth hormone-releasing hormone and somatostatin on sleep EEG and nocturnal hormone secretion in male controls. Neuroendocrinology. 1992;56(2):211-220.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/1361964/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/1361964/
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
          The Sermorelin + Ipamorelin combination has no controlled trial as a single product. The studies below are the key peer-reviewed sources for each component and for the dual-pathway mechanistic rationale — the empirical basis for this blend.
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

export default function SermorelinIpamorelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Sermorelin + Ipamorelin","description":"Sermorelin + Ipamorelin research profile: dual-pathway GH secretagogue blend, beginner-friendly with the strongest regulatory footing of the GHRH analog stacks. Mechanism, dosing, side effects, FAQ.","url":"https://profpeptide.com/peptides/sermorelin-ipamorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Sermorelin + Ipamorelin"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Sermorelin + Ipamorelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">Research-Grade</span>
        <span className="tag">Combination Blend</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 28, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Sermorelin / Ipamorelin Stack, Serm + Ipa Blend, Beginner GH Stack
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Growth Hormone Secretagogue Blend (2-component)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Sermorelin available via compounding pharmacy (Rx); Ipamorelin research-grade only; combination research-grade only
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Sermorelin + Ipamorelin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Sermorelin + Ipamorelin is a 2-component growth hormone secretagogue blend combining{" "}
            <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>{" "}
            (a GHRH 1-29 analog, ~10&ndash;20 min half-life) and{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
            (a selective GHS-R1a / ghrelin receptor agonist, ~2 h half-life). Like the{" "}
            <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (CJC-1295 + Ipamorelin)</Link>,{" "}
            it activates both the GHRH receptor and the ghrelin receptor on pituitary somatotrophs simultaneously, producing supra-additive growth hormone release (2&ndash;4&times; greater than either compound alone) in a pulsatile pattern that mirrors physiological GH secretion. What distinguishes this stack is its regulatory footing: Sermorelin was FDA-approved as Geref for pediatric GH deficiency and is available via compounding pharmacies for adult GH deficiency — giving it the strongest safety and regulatory pedigree of the GHRH analogs. Both components are short-acting, preserving physiological pulsatile GH release, and both are WADA S2 prohibited.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            This is the recommended starting point on the GH secretagogue stack progression: Sermorelin + Ipamorelin &rarr;{" "}
            <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (CJC-1295 no-DAC + Ipamorelin)</Link>{" "}
            &rarr;{" "}
            <Link href="/peptides/cjc-1295-dac-ipamorelin" className="text-[#0891b2] hover:underline">CJC-1295 DAC + Ipamorelin</Link>{" "}
            (once-weekly convenience, non-pulsatile).
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Synergistic GH amplification beyond individual compound effects (2&ndash;4&times; greater AUC vs monotherapy)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Physiologically pulsatile GH release pattern (both components short-acting — preserves natural feedback regulation)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Elevated IGF-1 supporting anabolic, metabolic, and tissue-repair processes</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No significant cortisol, ACTH, or prolactin elevation (Ipamorelin&apos;s selectivity advantage vs older GHRPs)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Enhanced slow-wave sleep through GH-mediated nocturnal GH pulse reinforcement</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Strongest regulatory footing of any GHRH+GHRP stack — Sermorelin&apos;s compounding-pharmacy approval provides real-world clinical exposure data</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Sermorelin 100&ndash;300 mcg + Ipamorelin 200&ndash;300 mcg subcutaneously, pre-bed on an empty stomach, once daily (optional second dose post-workout). Titrate up from lower doses over weeks 1&ndash;2.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Typically sold as separate vials; some vendors offer a pre-blended Sermorelin + Ipamorelin vial. Neither component is FDA-approved at research-grade doses. See{" "}
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
        {["GH Axis", "Growth Hormone Secretagogue", "Recovery", "Combination Blend", "Beginner-Friendly"].map((tag) => (
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
          <Link href="/peptides/sermorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Sermorelin</Link>
          <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
          <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295</Link>
          <Link href="/peptides/mk-677" className="text-sm font-medium text-[#0891b2] hover:underline">MK-677</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/peptides/gh-stack" className="text-sm font-medium text-[#0891b2] hover:underline">GH Stack (CJC-1295 + Ipamorelin)</Link>
          <Link href="/peptides/cjc-1295-dac-ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295 DAC + Ipamorelin</Link>
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
      <ContactLink pageName="Sermorelin + Ipamorelin" pagePath="/peptides/sermorelin-ipamorelin" />
    </div>
    </>
  );
}
