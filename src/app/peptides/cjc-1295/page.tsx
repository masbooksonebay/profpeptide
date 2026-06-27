import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/cjc-1295",
  title: "CJC-1295 — DAC and Mod GRF 1-29, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "CJC-1295 (with DAC and without DAC) research profile: GHRH receptor mechanism, dosing protocol, ipamorelin stack, side effects, FAQ, and regulatory status.",
});

const faqs = [
  {
    q: "Should I get CJC-1295 with DAC or without DAC?",
    a: "Without DAC is more commonly preferred by experienced users because it preserves pulsatile GH dynamics that more closely match natural physiology. The DAC version is more convenient (weekly vs daily dosing) but produces a more sustained, less pulsatile GH environment. Both are effective; most research-grade users start with the no-DAC version paired with ipamorelin.",
  },
  {
    q: "What's the difference between CJC-1295 and Sermorelin?",
    a: (
      <>
        <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>{" "}
        is the natural GHRH(1-29) fragment with native amino acids. CJC-1295 (without DAC) is the same fragment with four amino acid substitutions (D-Ala2, Gln8, Ala15, Leu27) that resist DPP-IV degradation. CJC-1295 is therefore more stable and produces longer-lasting effects than sermorelin. The DAC version goes further with albumin binding. See the{" "}
        <Link href="/compare/cjc-1295-vs-sermorelin-vs-ipamorelin" className="text-[#0891b2] hover:underline">CJC-1295 vs Sermorelin vs Ipamorelin comparison</Link>{" "}
        for a side-by-side breakdown.
      </>
    ),
  },
  {
    q: "Why combine CJC-1295 with ipamorelin?",
    a: (
      <>
        They activate different receptor pathways. CJC-1295 activates the GHRH receptor;{" "}
        <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">ipamorelin</Link>{" "}
        activates the ghrelin (GHSR-1a) receptor. Both pathways converge on GH release but through different mechanisms. Combining produces greater GH release than either alone &mdash; the dual-pathway activation is synergistic, not additive. This pairing is the{" "}
        <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>
        .
      </>
    ),
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
        CJC-1295 is sold by specialty research peptide vendors. Verify whether you&apos;re buying with DAC or without DAC &mdash; labeling is sometimes inconsistent. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Prolonged Stimulation of Growth Hormone and IGF-I Secretion by CJC-1295, a Long-Acting Analog of GH-Releasing Hormone, in Healthy Adults",
    authors: "Teichman SL, Neale A, Lawrence B, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism / PubMed",
    year: "2006",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
    summary: "The landmark human trial of CJC-1295 in healthy adults ages 21–61. Participants received single or repeated subcutaneous injections of CJC-1295 or placebo in two randomized, placebo-controlled, double-blind trials. CJC-1295 produced sustained, dose-dependent increases in both GH and IGF-1 levels — with mean IGF-1 concentrations increasing 1.5 to 3-fold above baseline. Crucially, these elevations persisted for 6–8 days after a single injection due to CJC-1295’s albumin-binding mechanism, which extends its half-life far beyond native GHRH. The compound was safe and well tolerated at doses of 30–60 mcg/kg.",
  },
  {
    title: "Pulsatile Secretion of Growth Hormone Persists During Continuous Stimulation by CJC-1295",
    authors: "Ionescu M, Frohman LA",
    journal: "Journal of Clinical Endocrinology & Metabolism / PubMed",
    year: "2006",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/17018654/",
    summary: "A critical mechanistic study examining whether CJC-1295’s prolonged GHRH stimulation disrupts the natural pulsatile pattern of GH secretion — a key safety concern with continuous GH axis stimulation. The study found that CJC-1295 increased both trough and mean GH secretion and elevated IGF-1, while preserving natural GH pulsatility. The maintenance of pulsatile GH release is significant because pulsatile secretion is considered important for many of GH’s physiological effects.",
  },
  {
    title: "Once-Daily Administration of CJC-1295 Normalizes Growth in the GHRH Knockout Mouse",
    authors: "Jetté L, et al.",
    journal: "American Journal of Physiology — Endocrinology and Metabolism",
    year: "2005",
    access: "Open Access",
    url: "https://journals.physiology.org/doi/abs/10.1152/ajpendo.00201.2006",
    summary: "A preclinical study examining CJC-1295 in GHRH knockout mice — animals that cannot produce their own GHRH and therefore cannot generate growth hormone normally. Once-daily CJC-1295 completely normalized body weight, body length, and bone growth in these animals. The study also documented that CJC-1295 increased total pituitary RNA and GH mRNA, suggesting proliferation of somatotroph cells — meaning the peptide may not just stimulate GH release but may actually expand the pituitary’s GH-producing capacity.",
  },
  {
    title: "Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development",
    authors: "Ishida J, Saitoh M, Ebner N, et al.",
    journal: "JCSM Rapid Communications / Wiley",
    year: "2020",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9",
    summary: "A comprehensive review placing CJC-1295 in the broader context of GH secretagogue development. The paper traces the evolution from native GHRH through to long-acting analogs including CJC-1295 and tesamorelin, explaining how albumin-binding and structural modifications extended half-life and improved clinical utility. A useful reference for understanding where CJC-1295 sits relative to approved GHRH analogs.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does CJC-1295 work?",
    intro:
      "CJC-1295 activates the GHRH receptor on pituitary somatotroph cells, triggering pulsatile growth hormone release through the same pathway used by endogenous GHRH. The DAC modification adds albumin binding that extends half-life from ~30 minutes to 6–8 days. Four amino acid substitutions (D-Ala2, Gln8, Ala15, Leu27) provide DPP-IV resistance. Critically, CJC-1295 amplifies the natural pulsatile GH rhythm rather than producing continuous GH elevation — pulsatility is considered safer than direct GH administration.",
    body: [
      "GHRH Receptor Activation [1]. CJC-1295 activates the GHRH receptor (GHRH-R) on anterior pituitary somatotroph cells. This is the same receptor activated by endogenous GHRH from the hypothalamus. Activation triggers cAMP/PKA signaling that drives both GH synthesis and release.",
      "DAC Albumin Binding [2]. The DAC modification adds a maleimidopropionyl-lysine residue at the C-terminus that covalently binds to serum albumin after subcutaneous injection. This dramatically extends the peptide's half-life from ~30 minutes (without DAC) to 6–8 days (with DAC).",
      "Pulsatile GH Amplification [3]. CJC-1295 amplifies the natural pulsatile pattern of GH secretion rather than causing continuous GH elevation. The endogenous somatostatin feedback loop continues to regulate the rhythm — CJC-1295 just makes each pulse larger.",
      "DPP-IV Resistance [1]. CJC-1295 has four amino acid substitutions (D-Ala2, Gln8, Ala15, Leu27) that protect it from rapid breakdown by DPP-IV (the enzyme that quickly degrades native GHRH). Even without DAC, these substitutions extend functional duration.",
      "Sustained IGF-1 Elevation [4]. A single CJC-1295 DAC injection produces 2–10x baseline GH levels for 6+ days and elevates IGF-1 by 0.5–3x for 9–11 days. Multiple doses sustain IGF-1 elevation for up to 28 days in human subjects.",
    ],
  },
  {
    id: "research",
    title: "What is CJC-1295 used for?",
    intro:
      "CJC-1295's research evidence base spans GHRH replacement, GHRH knockout normalization in mice, lipodystrophy investigation (Phase 2, discontinued), and adult/pediatric GH deficiency. The Phase 1 and 2 human trials in healthy adults established the safety and pharmacokinetic profile. Development was discontinued before reaching Phase 3, in part due to a single subject death attributed by investigators to unrelated cardiovascular disease.",
    body: [
      "GHRH Replacement Therapy [4][5]. Phase 1 and 2 clinical studies in healthy adults showed dose-dependent GH and IGF-1 elevation following single and multiple subcutaneous injections, with sustained IGF-1 elevation for 6–14 days. Generally well-tolerated at doses up to 120 mcg/kg.",
      "GHRH Knockout Models [5]. In GHRH-knockout mice, daily CJC-1295 injection normalized growth and body composition. Doses every 48 or 72 hours produced intermediate effects, demonstrating the importance of dose frequency.",
      "Lipodystrophy Investigation. CJC-1295 was originally investigated for visceral fat reduction in HIV-associated lipodystrophy. Development was discontinued before completion of Phase 3.",
      "GH Deficiency Research. CJC-1295 has been studied as a potential treatment for adult and pediatric GH deficiency due to its ability to restore GH/IGF-1 levels with weekly dosing.",
      "Pulsatile GH Preservation [3]. Studies confirm CJC-1295 preserves pulsatile GH secretion patterns rather than producing continuous GH elevation, which is mechanistically safer than direct GH administration.",
    ],
  },
  {
    id: "timeline",
    title: "How long does CJC-1295 take to work?",
    intro:
      "CJC-1295 effects develop progressively. IGF-1 elevation appears within 1–2 days of the first dose. Sleep and recovery improvements are often the first subjective effects, appearing within 1–2 weeks. Body composition changes (lean muscle gain, fat reduction) emerge over 4–8 weeks. The DAC version produces a more sustained baseline effect; the non-DAC version produces sharper, more pulsatile responses tied to dose timing.",
    content:
      "IGF-1 elevation appears within 1–2 days of the first dose. Body composition changes (lean muscle gain, fat reduction) typically emerge over 4–8 weeks. Sleep and recovery improvements are often the first subjective effects users report, appearing within 1–2 weeks. The DAC version produces a more sustained baseline effect; the non-DAC version produces sharper, more pulsatile responses tied to dose timing — many users prefer the non-DAC + ipamorelin stack for the cleaner physiological mimicry.",
  },
  {
    id: "dosing",
    title: "How is CJC-1295 dosed?",
    intro:
      "CJC-1295 dosing depends on whether DAC is included. With DAC, the long half-life allows weekly dosing (1–2 mg once or twice weekly). Without DAC (Modified GRF 1-29), the short half-life requires multiple daily doses (100 mcg, 2–3 times daily), typically paired with a GHRP like ipamorelin. Empty-stomach dosing maximizes GH response — insulin spikes from food blunt the GH signal.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">CJC-1295 with DAC.</span> 1–2 mg subcutaneously once or twice weekly; sustained GH elevation between doses.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">CJC-1295 without DAC (Modified GRF 1-29).</span> 100 mcg per dose, 2–3 times daily, ideally 30+ minutes after a meal.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stack dosing.</span> 100 mcg CJC-1295 (no DAC) + 100–300 mcg ipamorelin together at bedtime is the most common protocol.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 8–12 weeks on, with at least 4 weeks off.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Empty stomach.</span> Insulin spikes from food blunt GH release &mdash; dose 2+ hours after eating and wait 30 min before next meal.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          DAC vs no-DAC choice: most experienced users prefer CJC-1295 without DAC because it preserves pulsatile GH dynamics that more closely mimic physiology. The DAC version produces a more &ldquo;flooded&rdquo; GH environment, which some users prefer for convenience but others find produces more side effects. Both are effective.
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
    title: "How is CJC-1295 administered?",
    intro: (
      <>
        CJC-1295 is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; using a small insulin syringe. Dosing frequency depends on whether you have the DAC version (1–2× weekly) or the no-DAC version (2–3× daily). Empty-stomach timing is unique to the GH-axis peptides: insulin spikes from food blunt GH release. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Bedtime is most common (aligns with natural GH peaks). Modified GRF 1-29 requires multiple daily doses spread through the day.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Empty stomach. Wait 2+ hours after eating, and 30+ minutes before next meal.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each injection to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose (DAC).</span> If less than 2 days late, take as soon as remembered; if more, skip and resume next scheduled dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose (no DAC).</span> Skip and resume next scheduled dose &mdash; the short half-life makes catch-up dosing unnecessary.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 8–12 weeks on, 4+ weeks off.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> CJC-1295 is unusual among research peptides in requiring empty-stomach dosing. Insulin secreted in response to food binds somatostatin pathways that blunt the GH pulse CJC-1295 is meant to amplify. Bedtime dosing naturally satisfies the empty-stomach window (4+ hours since last meal in most people) and aligns with the natural overnight GH peak.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">DAC: 1–2× weekly. No-DAC: 2–3× daily.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Bedtime preferred &mdash; aligns with natural overnight GH peak and naturally satisfies empty-stomach window</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Empty stomach required &mdash; 2+ hours after eating, 30+ min before next meal</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm &mdash; avoid same site on consecutive injections</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">DAC: 6–8 days. No-DAC: ~30 minutes.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">DAC: ~4 weeks for full IGF-1 plateau. No-DAC: per-pulse effect, no traditional steady-state</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. CJC-1295 research vials are typically 5 mg. Because the dose range spans 100 mcg (no-DAC) up to 2 mg (DAC) per injection, the reconstitution choice depends on which variant you have. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">100 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">250 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">2 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">80 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          *Draw exceeds standard 100-unit insulin syringe capacity at this reconstitution volume &mdash; would require split injections or a lower reconstitution volume.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit drawn delivers 50 mcg of CJC-1295 at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does CJC-1295 stack well with?",
    intro:
      "CJC-1295's most-studied pairing is with ipamorelin — the canonical GH Stack. The two activate different receptor pathways (GHRH vs ghrelin) that converge on GH release, producing greater output than either alone. The pairing with BPC-157/TB-500 supports recovery during anabolic protocols. CJC-1295 should NOT be combined with sermorelin (same receptor pathway, redundant) or direct GH (unnecessary doubling of the axis).",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Ipamorelin (GH Stack).</span> The most popular pairing.{" "}
          <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
          (ghrelin receptor) + CJC-1295 (GHRH receptor) produces synergistic GH release through dual-pathway activation. See the{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
          page for the combined protocol.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157 / TB-500.</span>{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
          paired for recovery support during anabolic protocols. Different mechanisms, no contraindications.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">IGF-1 LR3.</span>{" "}
          <Link href="/peptides/igf-1-lr3" className="text-[#0891b2] hover:underline">IGF-1 LR3</Link>{" "}
          combined for direct IGF-1 receptor activation alongside endogenous GH stimulation. Different mechanisms, additive effects &mdash; space injections 2–3 hours apart to avoid receptor competition.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: Sermorelin or other GHRH analogs.</span>{" "}
          <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>{" "}
          and{" "}
          <Link href="/peptides/tesamorelin" className="text-[#0891b2] hover:underline">tesamorelin</Link>{" "}
          target the same GHRH receptor &mdash; combining with CJC-1295 is redundant. Choose one.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training.</span> Exercise-induced GH release amplified when paired with CJC-1295 &mdash; non-peptide intervention but mechanistically the cleanest amplifier.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of CJC-1295?",
    intro:
      "CJC-1295 was generally well-tolerated in human Phase 1 and 2 trials. The most-reported user effects are mild injection-site reactions, transient facial flushing (vasodilation), and mild headache especially with first or higher doses. Less common moderate effects (fluid retention, carpal-tunnel-like numbness) are consistent with the GH/IGF-1 elevation. One Phase 2 trial subject death contributed to discontinuation but was investigated and attributed to unrelated coronary artery disease.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation, typically resolves within hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild facial flushing or warmth.</span> Transient, due to vasodilation; resolves within ~30 minutes.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Especially with first doses or higher doses; typically mild.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fluid retention or bloating.</span> Consistent with GH/IGF-1 elevation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Numbness or tingling.</span> Carpal-tunnel-like symptoms, similar to direct GH use; related to fluid retention.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Joint pain or stiffness.</span> Common during anabolic phases of GH-axis cycling.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term cardiovascular safety not established.</span> Phase 2 data extends to ~28-day exposure only.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical tumor growth risk.</span> GH/IGF-1 elevation could accelerate pre-existing tumors. Contraindicated with active malignancy.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Phase 2 trial subject death.</span> One subject death in the Phase 2 program was investigated; the attending physician concluded the most likely cause was asymptomatic coronary artery disease unrelated to treatment.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          CJC-1295 was generally well-tolerated in human Phase 1 and 2 trials. The Phase 2 trial subject death noted above was investigated and the attending physician concluded the most likely cause was asymptomatic coronary artery disease unrelated to treatment. However, this incident contributed to the discontinuation of clinical development. Long-term safety data beyond Phase 2 trials does not exist.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does CJC-1295 interact with other drugs?",
    intro:
      "CJC-1295's most important interactions are with anything that blunts GH release (insulin, corticosteroids) and with other GHRH analogs (redundant mechanism). The empty-stomach dosing requirement exists specifically because food-triggered insulin blunts the GH response. No major drug-drug pharmacokinetic interactions have been reported in clinical studies.",
    body: [
      "Insulin and corticosteroids. Both blunt GH release; time injections away from meals and steroid administration.",
      "Sermorelin or other GHRH analogs. Redundant mechanism, do not combine. Choose one GHRH analog.",
      "Direct HGH. Combining is generally unnecessary — CJC-1295 is meant to stimulate endogenous GH; adding exogenous GH is duplicative.",
      "No major drug-drug interactions reported in clinical studies.",
    ],
  },
  {
    id: "storage",
    title: "How should CJC-1295 be stored?",
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
    title: "What are the limitations of CJC-1295 research?",
    intro:
      "CJC-1295 is not FDA-approved for any human use. Development by ConjuChem reached Phase 2 trials but was discontinued. Most clinical evidence comes from short-term Phase 1 and 2 studies (typically 28-day exposure). Long-term safety beyond a few months does not exist. WADA prohibits CJC-1295 in sport under Section S2. Verify DAC vs no-DAC labeling before purchase — labeling is sometimes inconsistent.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          CJC-1295 is not FDA-approved for any human use. Development by ConjuChem reached Phase 2 trials but was discontinued. The Phase 2 program included one subject death, attributed by the attending physician to unrelated coronary artery disease &mdash; but the incident contributed to halting development.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most clinical evidence comes from short-term Phase 1 and 2 studies (typically 28-day exposure). Long-term safety data beyond a few months does not exist. Cardiovascular safety with sustained use has not been established.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits CJC-1295 (with or without DAC) in sport under Section S2 (peptide hormones). Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Note that CJC-1295 and Modified GRF (1-29) are sometimes confused in commercial labeling. Strict definitions: CJC-1295 with DAC includes the maleimidopropionyl-lysine extension; Modified GRF (1-29), also called CJC-1295 without DAC, lacks this extension. Verify the form before purchase.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source CJC-1295",
    intro:
      "CJC-1295 is not FDA-approved and is sold only as a research-grade peptide. Verify whether you're buying with DAC or without DAC — labeling is sometimes inconsistent. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes — with explicit DAC/no-DAC variant labeling noted.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "almighty-peptides", note: "DAC + no-DAC variants" },
            { slug: "ascension-peptides", note: "No-DAC variant" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#0891b2] hover:underline">
            See all {activeVendorCount} verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "CJC-1295 FAQ",
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
          Wikipedia. CJC-1295.{" "}
          <a href="https://en.wikipedia.org/wiki/CJC-1295" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/CJC-1295
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Teichman SL, Neale A, Lawrence B, et al. Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295 in healthy adults. J Clin Endocrinol Metab. 2006;91(3):799-805.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16352683/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16352683/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ionescu M, Frohman LA. Pulsatile secretion of growth hormone (GH) persists during continuous stimulation by CJC-1295, a long-acting GHRH analog. J Clin Endocrinol Metab. 2006;91(12):4792-7.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17018654/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17018654/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sackmann-Sala L, Ding J, Frohman LA, Kopchick JJ. Activation of the GH/IGF-1 axis by CJC-1295, a long-acting GHRH analog, results in serum protein profile changes in normal adult subjects. Growth Horm IGF Res. 2009;19(6):471-7.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/19386527/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/19386527/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Alba M, Fintini D, Sagazio A, et al. Once-daily administration of CJC-1295, a long-acting growth hormone-releasing hormone (GHRH) analog, normalizes growth in the GHRH knockout mouse. Am J Physiol Endocrinol Metab. 2006;291(6):E1290-4.{" "}
          <a href="https://journals.physiology.org/doi/full/10.1152/ajpendo.00201.2006" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://journals.physiology.org/doi/full/10.1152/ajpendo.00201.2006
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

export default function CJC1295Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"CJC-1295","description":"CJC-1295 (with DAC and without DAC) research profile: GHRH receptor mechanism, dosing protocol, ipamorelin stack, side effects, FAQ, and regulatory status.","url":"https://profpeptide.com/peptides/cjc-1295","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 23, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> DAC:GRF, Modified GRF (1-29) without DAC, GHRH Analog
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Synthetic GHRH Analog &mdash; GHRH Receptor Agonist (DAC and no-DAC variants)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use only. WADA-prohibited (Section S2). Phase 2 development discontinued.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is CJC-1295?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            CJC-1295 is a synthetic 30-amino-acid analog of growth hormone-releasing hormone (GHRH) developed by ConjuChem Biotechnologies. It exists in two forms: CJC-1295 with DAC (Drug Affinity Complex) and CJC-1295 without DAC (also called Modified GRF 1-29). The DAC modification binds the peptide to serum albumin, extending its half-life from ~30 minutes to 6–8 days. Both forms stimulate pulsatile GH release via the GHRH receptor on pituitary somatotroph cells. CJC-1295 reached Phase 2 clinical trials before development was discontinued. It remains one of the most-studied research peptides for GH-axis stimulation, especially when stacked with{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">ipamorelin</Link>{" "}
            as the{" "}
            <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>
            . New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates pulsatile growth hormone release via GHRH receptor activation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increases IGF-1 levels with sustained elevation (6–14 days for DAC version)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Preserves natural physiological GH rhythm vs continuous GH administration</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Supports lean muscle growth, fat reduction, and recovery (downstream of GH)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Synergizes strongly with GHRPs like ipamorelin for amplified GH release</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">DAC version requires only 1–2 injections per week vs daily for non-DAC</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> With DAC: typically 1–2 mg subcutaneously once or twice weekly. Without DAC (Modified GRF 1-29): typically 100 mcg per dose, multiple times daily. Cycle length 8–12 weeks. Empty-stomach dosing is non-negotiable for full GH response.
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
        <Link href="/peptides/mk-677" className="text-sm font-medium text-[#0891b2] hover:underline">MK-677</Link>
        <Link href="/peptides/igf-1-lr3" className="text-sm font-medium text-[#0891b2] hover:underline">IGF-1 LR3</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/gh-stack" className="text-sm font-medium text-[#0891b2] hover:underline">GH Stack</Link>
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
        </div>
      </div>

      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/cjc-1295-vs-sermorelin-vs-ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295 vs Sermorelin vs Ipamorelin &rarr;</Link>
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
    <ContactLink pageName="CJC-1295" pagePath="/peptides/cjc-1295" />
    </div>
    </>
  );
}
