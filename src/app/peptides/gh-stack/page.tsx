import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/gh-stack",
  title: "GH Stack — CJC-1295 + Ipamorelin Research Profile, Dosing | Prof. Peptide",
  description:
    "GH Stack (CJC-1295 + Ipamorelin) research profile: dual-pathway growth hormone secretagogue mechanism, with-DAC vs no-DAC differentiation, dosing protocol, side effects, FAQ.",
});

const faqs = [
  {
    q: "What is the GH Stack?",
    a: (
      <>
        The GH Stack is a 2-component growth hormone secretagogue blend:{" "}
        <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
        (a GHRH analog) +{" "}
        <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>{" "}
        (a selective GHRP). Together they stimulate growth hormone release through two distinct pituitary receptor pathways simultaneously, producing larger and more pulsatile GH output than either compound alone. It&apos;s the most popular GH secretagogue blend in the research-grade market.
      </>
    ),
  },
  {
    q: "What's the difference between CJC-1295 with DAC and without DAC?",
    a: (
      <>
        DAC stands for Drug Affinity Complex — a maleimide group attached to CJC-1295 that binds it to serum albumin in the bloodstream. <span className="font-semibold">CJC-1295 with DAC</span> has a half-life of approximately 6–8 days and is dosed 1–2 mg once weekly. <span className="font-semibold">CJC-1295 without DAC</span> (also called Modified GRF 1-29) has a half-life of approximately 30 minutes and is dosed 100–300 mcg 2–3× daily. Pre-blended GH Stack products almost always use CJC-1295 <span className="font-semibold">without DAC</span> because its short half-life synchronizes with Ipamorelin&apos;s ~2-hour half-life to preserve physiological pulsatile GH release.
      </>
    ),
  },
  {
    q: "Why is Ipamorelin the preferred GHRP partner?",
    a: "Ipamorelin is selective for the ghrelin / GHS-R1a receptor — it triggers GH release without meaningfully elevating cortisol, ACTH, prolactin, FSH, LH, or TSH. Older GHRPs like GHRP-2, GHRP-6, and Hexarelin produced GH release but also drove cortisol and appetite increases. Ipamorelin's clean hormonal profile is the reason it became the default GHRP for stacking with GHRH analogs like CJC-1295 and Sermorelin.",
  },
  {
    q: "Is the GH Stack FDA-approved?",
    a: (
      <>
        No. Neither CJC-1295 nor Ipamorelin is FDA-approved for human use.{" "}
        <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>{" "}
        — a similar GHRH analog with a short half-life — has approved clinical use through compounding pharmacies, providing the closest regulatory analog. Both CJC-1295 and Ipamorelin are prohibited by WADA (Section S2 for peptide hormones / growth factors). Research-grade product is sold for laboratory use only.
      </>
    ),
  },
  {
    q: "When should I take the GH Stack?",
    a: "Pre-bed dosing is the most common research protocol. Growth hormone naturally pulses during slow-wave sleep, and a CJC-1295 (no-DAC) + Ipamorelin injection 30–60 minutes before bed reinforces that overnight GH pulse. Some protocols add a second daily dose 4–6 hours later (typically post-workout). Empty stomach for at least 2 hours before injection is the standard recommendation because elevated insulin and somatostatin can blunt the GH response.",
  },
  {
    q: "How long until I see results?",
    a: "GH secretagogue stacks build effect over weeks. Sleep quality improvements (deeper slow-wave sleep, better recovery) often appear within 1–2 weeks. Subjective recovery and joint changes typically emerge over 4–8 weeks. Body composition changes (lean mass, fat distribution) accumulate over 12–24 weeks. Standard research cycles run 8–16 weeks active with a similar off-period to avoid receptor desensitization.",
  },
  {
    q: "Can I stack the GH Stack with other peptides?",
    a: (
      <>
        Compatible additions include{" "}
        <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
        /{" "}
        <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>{" "}
        for tissue repair on top of GH-mediated systemic recovery, and{" "}
        <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">cagrilintide</Link>{" "}
        or{" "}
        <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">semaglutide</Link>{" "}
        for fat-loss work. Avoid stacking with{" "}
        <Link href="/peptides/mk-677" className="text-[#3A759F] hover:underline">MK-677</Link>{" "}
        (another GH secretagogue with overlapping mechanism) or with full-dose standalone CJC-1295 or Ipamorelin.
      </>
    ),
  },
  {
    q: "Where can I buy the GH Stack?",
    a: (
      <>
        Sold pre-blended (typically as a 10 mg vial containing 5 mg CJC-1295 no-DAC + 5 mg Ipamorelin) by some research peptide vendors. Many users buy CJC-1295 and Ipamorelin separately. PP maintains a list of vetted vendors with verified discount codes — see{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const studies = [
  {
    title: "Prolonged Stimulation of GH and IGF-I Secretion by CJC-1295 in Healthy Adults",
    authors: "Teichman SL, Neale A, Lawrence B, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: "2006",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
    summary: "The primary human study of CJC-1295 with DAC — the long-acting GHRH analog form. Demonstrated sustained, dose-dependent GH and IGF-1 elevation lasting 6–8 days from a single injection, with IGF-1 increasing 1.5–3 fold above baseline. The albumin-binding DAC mechanism provides the prolonged &ldquo;GH amplitude amplification&rdquo; that defines the long-acting form. The no-DAC variant used in most pre-blended GH Stacks shares the same GHRH-receptor mechanism but with a 30-minute half-life that fits a multi-daily dosing pattern.",
  },
  {
    title: "Ipamorelin, the First Selective Growth Hormone Secretagogue",
    authors: "Raun K, Hansen BS, Johansen NL, et al.",
    journal: "European Journal of Endocrinology",
    year: "1998",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
    summary: "The landmark selectivity study for Ipamorelin. Established that Ipamorelin produces robust GH release with approximately 90% less cortisol elevation and no meaningful ACTH or prolactin response compared to older GHRPs (GHRP-2, GHRP-6, Hexarelin). This clean hormonal profile is why Ipamorelin became the default GHRP for stacking — it adds GH pulse triggering through the ghrelin receptor without the cortisol and appetite side effects of older GHRPs.",
  },
  {
    title: "GH-Releasing Peptide Stimulates GH Release in Normal Men and Acts Synergistically with GH-Releasing Hormone",
    authors: "Bowers CY, Reynolds GA, Durham D, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: "1990",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/2108187/",
    summary: "Mechanistic study demonstrating supra-additive GH release when GHRH analogs and GHSR (ghrelin receptor) agonists are co-administered — the scientific foundation for the GH Stack's design. Co-administration produced 2–4× greater GH area under the curve compared to either compound alone, with the effect being additive to synergistic depending on timing. The cAMP pathway (CJC-1295 / GHRHR) and the calcium/PKC pathway (Ipamorelin / GHS-R1a) converge at the somatotroph, where simultaneous activation amplifies the secretory response beyond what either signal produces alone.",
  },
  {
    title: "Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development",
    authors: "Ishida J, Saitoh M, Ebner N, et al.",
    journal: "JCSM Rapid Communications",
    year: "2020",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9",
    summary: "A comprehensive review of the GH secretagogue class providing clinical context for the CJC-1295 + Ipamorelin combination. The paper covers the evolution from native GHRH and ghrelin to long-acting analogs and selective GHRPs, documenting how the dual-pathway approach became the preferred research and clinical protocol for GH axis optimization. It also addresses why the combination is considered safer than direct HGH administration — stimulating endogenous production preserves natural feedback mechanisms and avoids supraphysiological IGF-1 spikes.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does the GH Stack work?",
    intro:
      "The GH Stack combines two peptides that hit the same gland through different doors. CJC-1295 is a GHRH analog — it activates the GHRH receptor on pituitary somatotrophs, the same receptor the body's natural growth hormone-releasing hormone uses. Ipamorelin is a GHRP (growth hormone-releasing peptide), selective for the ghrelin / GHS-R1a receptor on the same cells. When both receptors fire at once, the pituitary releases more GH than either signal triggers alone — and in a pulsatile pattern that mirrors physiological GH secretion rather than producing a sustained, unphysiologic flood.",
    body: [
      "CJC-1295 — GHRH Pathway Activation [1]. CJC-1295 binds the GHRH receptor on anterior pituitary somatotrophs. Activation triggers a Gs-coupled cAMP/PKA cascade that drives GH gene transcription and primes the somatotroph for GH release. The CJC-1295 with DAC variant binds serum albumin via a maleimide group, extending the half-life to 6–8 days. The CJC-1295 without DAC variant (Modified GRF 1-29) has a 30-minute half-life — the form used in pre-blended GH Stack products.",
      "Ipamorelin — GHS-R1a Pathway Activation [2]. Ipamorelin selectively activates the growth hormone secretagogue receptor (GHS-R1a, the ghrelin receptor) on the same pituitary somatotrophs. Activation triggers a Gq-coupled phospholipase C / IP3 / calcium / PKC cascade that drives immediate GH release. Ipamorelin's defining feature is selectivity: it does this without meaningfully elevating cortisol, ACTH, prolactin, FSH, LH, or TSH, distinguishing it from older GHRPs.",
      "Dual-Pathway Synergy [3]. Simultaneous activation of GHRHR (cAMP / PKA) and GHS-R1a (calcium / PKC) converges at the somatotroph secretory machinery. The two second-messenger cascades amplify each other — co-administration produces 2–4× greater GH area under the curve than either compound given alone. This supra-additive synergy is the scientific foundation for the GH Stack's design.",
      "Pulsatile vs Continuous Release [4]. The short half-lives of CJC-1295 (no-DAC) and Ipamorelin produce a discrete GH pulse over 1–2 hours, then return to baseline. This mirrors the body's natural overnight and post-exercise GH pulses, preserving feedback regulation and avoiding the sustained supraphysiological IGF-1 elevations seen with exogenous HGH administration. The CJC-1295 with DAC variant produces sustained &ldquo;GH bleed&rdquo; with less pulsatility — researchers choosing the with-DAC form trade physiological pulsatility for dosing convenience.",
      "Downstream IGF-1 Elevation [4]. The increased pituitary GH output drives elevated hepatic IGF-1 production, which carries most of the systemic anabolic and tissue-repair effects (lean mass support, recovery, joint and connective tissue effects). Both forms of the GH Stack drive measurable IGF-1 elevation in human research.",
    ],
  },
  {
    id: "research",
    title: "What is the GH Stack used for?",
    intro:
      "The GH Stack is the most popular research-grade approach to GH axis support. Where direct HGH administration produces a flat, sustained elevation, the GH Stack triggers the body's own pituitary to release GH in pulses — preserving feedback regulation. Researchers use it for body composition, recovery, sleep quality, and age-related GH-axis decline.",
    body: [
      "Body Composition [4]. Elevated GH and downstream IGF-1 support lean muscle synthesis, visceral fat metabolism, and overall body composition. The most-cited GH Stack use case in the research and biohacking communities.",
      "Sleep Quality [1]. Growth hormone is predominantly secreted during slow-wave sleep. Pre-bed GH Stack dosing reinforces the natural overnight GH pulse and is studied for slow-wave sleep enhancement. Subjective sleep quality improvements often appear within 1–2 weeks.",
      "Recovery and Tissue Repair. Elevated GH and IGF-1 support faster recovery from exercise-induced muscle damage and injury through enhanced protein synthesis and cellular repair mechanisms. Researchers sometimes stack GH Stack with BPC-157 and TB-500 for combined local + systemic tissue-repair coverage.",
      "Anti-Aging and Sarcopenia Prevention [4]. GH axis activity declines significantly with age. The GH Stack is studied as a means of supporting GH axis function in older adults to counteract age-related muscle loss, fat accumulation, and metabolic decline. Sermorelin (a similar GHRH analog) has approved clinical use for adult GH deficiency, providing the closest regulatory and safety analog.",
      "Joint and Connective Tissue Support. IGF-1 supports collagen synthesis and connective tissue maintenance. Common research application alongside resistance training and tissue-repair peptide stacks.",
    ],
  },
  {
    id: "timeline",
    title: "How long does the GH Stack take to work?",
    intro:
      "GH Stack effects build over weeks. Sleep quality and subjective recovery improve fastest — often within the first 1–2 weeks. Subjective joint, connective-tissue, and recovery effects accumulate over 4–8 weeks. Body composition changes (lean mass, fat distribution) take 12–24 weeks to become visually measurable.",
    content:
      "IGF-1 elevation is measurable in serum within days of starting the stack. The GH Stack does not produce dramatic short-term changes — it produces gradual, accumulating effects driven by sustained but pulsatile elevation of endogenous GH and downstream IGF-1. Standard research cycles run 8–16 weeks active with a similar off-period to avoid pituitary receptor desensitization. Sermorelin clinical data on similar GHRH-pathway compounds shows continued benefit through multi-month treatment with appropriate cycling.",
  },
  {
    id: "dosing",
    title: "How is the GH Stack dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The GH Stack is administered as a subcutaneous injection. Dosing depends critically on which form of CJC-1295 is used — the with-DAC and without-DAC variants have fundamentally different half-lives and dosing frequencies.
        </p>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          CJC-1295 without DAC + Ipamorelin (standard pre-blended protocol):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dose.</span> 100–300 mcg CJC-1295 no-DAC + 100–300 mcg Ipamorelin per injection.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Frequency.</span> 1–3× daily subcutaneously. Pre-bed is the most common single-dose protocol; researchers running 2–3× daily often add a post-workout and an upon-waking dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle.</span> 8–12 weeks active, 4-week break before re-cycle.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Titration.</span> Start at 100 mcg of each peptide daily, increase by ~50 mcg every 1–2 weeks if tolerated, target 200–300 mcg of each by weeks 5–12.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing constraints.</span> Empty stomach for 2 hours before injection — elevated insulin and somatostatin blunt the GH response.</li>
        </ol>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-3">
          CJC-1295 with DAC + Ipamorelin (long-acting alternative):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">CJC-1295 with DAC.</span> 1–2 mg subcutaneously once weekly (6–8 day half-life from albumin binding).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Ipamorelin.</span> 100–300 mcg subcutaneously once daily (CJC-1295 with DAC produces sustained elevation, but Ipamorelin's daily pulse adds the pulsatile signal).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle.</span> 8–16 weeks active, similar off-period.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Pre-blended formulations (research-grade vials)
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Standard SKU.</span> Most pre-blended GH Stack vials are 10 mg total: 5 mg CJC-1295 (without DAC) + 5 mg Ipamorelin. The vial label always shows the combined milligrams of both components.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">CJC-1295 form matters.</span> Pre-blended GH Stack products almost always contain CJC-1295 <span className="font-semibold">without DAC</span>. The reason: CJC-1295 with DAC has a 6–8 day half-life that doesn&apos;t fit a daily-blend pattern, while no-DAC&apos;s 30-minute half-life synchronizes well with Ipamorelin&apos;s ~2-hour half-life for daily pulsatile dosing. If a pre-blend label says &ldquo;CJC-1295 DAC,&rdquo; verify with the vendor — most are no-DAC despite ambiguous labeling.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Ratio variants.</span> Some vendors offer non-1:1 blends (for example, 5 mg CJC-1295 + 2 mg Ipamorelin). The 1:1 ratio is the most common and is the default for daily pulsatile dosing.
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          The GH Stack is not FDA-approved. Dosing is derived from each component's individual research literature plus extensive research-community use — there are no approved retail dosing standards for the combination.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is the GH Stack administered?",
    intro:
      "The GH Stack is administered by subcutaneous injection using a small insulin syringe. Pre-bed dosing on an empty stomach is the standard research protocol because it synchronizes with the body's natural overnight GH pulse. Some protocols add a second daily dose post-workout or upon waking.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Pre-bed is the default &mdash; 30&ndash;60 minutes before sleep. Some protocols add a second dose post-workout or upon waking.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Empty stomach.</span> At least 2 hours after the last meal. Elevated insulin and somatostatin blunt the GH response &mdash; this is the most important timing rule for the GH Stack.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Alternate sites each injection. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Resume on the next scheduled dose. Do not double-dose. For weekly CJC-1295 with DAC, shift the next dose by 1&ndash;2 days if needed.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> Use bacteriostatic water for injection (BAC water) at the volume specified by the dosing calculator. Swirl gently &mdash; do not shake &mdash; to avoid damaging the peptides.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycling.</span> 8&ndash;12 weeks on, 4-week minimum break. Cycling avoids pituitary receptor desensitization and preserves GH-axis responsiveness.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> The GH Stack is dosed to reinforce the body&rsquo;s own growth-hormone pulses &mdash; pre-bed, on an empty stomach, is the canonical protocol. Unlike the once-weekly GLP-class peptides, the no-DAC blend is short-acting and timing-sensitive: insulin and somatostatin from a recent meal will blunt the GH response. The table below summarizes the timing variables that most affect the result.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1&ndash;3&times; daily (no-DAC + Ipa) or 1&times; weekly CJC-DAC + 1&times; daily Ipa</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Pre-bed (30&ndash;60 min before sleep); optional second dose post-workout or upon waking</td>
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">CJC-1295 no-DAC ~30 min; Ipamorelin ~2 hours; CJC-1295 with DAC ~6&ndash;8 days</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Sleep quality 1&ndash;2 weeks; recovery 4&ndash;8 weeks; body composition 12&ndash;24 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> The table below assumes the canonical pre-blended 10 mg vial &mdash; 5 mg CJC-1295 (no-DAC) + 5 mg Ipamorelin at a 1:1 ratio. Because the ratio is 1:1, every drawn unit delivers an equal dose of both peptides. Pick a bacteriostatic water volume, then read the syringe units for your target per-peptide dose. All draws are measured on a U-100 insulin syringe (100 units = 1 mL).
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration (each)</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">100 / 100 mcg</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">150 / 150</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">200 / 200</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">250 / 250</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">300 / 300</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL each</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL each</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">8 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL each</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">9 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">18 units</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          For non-1:1 ratio blends (e.g., 5 mg CJC + 2 mg Ipa) or different vial totals, per-peptide math diverges &mdash; use the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator</Link>{" "}
          for ratio-specific math.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> The table above reads in insulin-syringe units &mdash; on a U-100 syringe, 1 unit = 0.01 mL. Because the GH Stack is a 1:1 blend, each drawn unit delivers the same mcg of both CJC-1295 and Ipamorelin: 50 mcg of each per unit at 1 mL reconstitution, 25 mcg at 2 mL, and ~16.7 mcg at 3 mL. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does the GH Stack stack well with?",
    intro:
      "The GH Stack pairs well with tissue-repair peptides and metabolic compounds — the GH-mediated systemic anabolic effect amplifies the local effects of other interventions. The thing to avoid is double-dosing the GH axis by adding another GH secretagogue (MK-677), or doubling either component via standalone protocols.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Tissue-repair peptides.</span> The most common pairing.{" "}
          <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
          +{" "}
          <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>{" "}
          (or the{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#3A759F] hover:underline">Wolverine Stack</Link>) for combined local + systemic tissue repair. Elevated IGF-1 amplifies the substrate for the local healing peptides.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Metabolic/weight peptides.</span>{" "}
          <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>,{" "}
          <Link href="/peptides/cagrilintide" className="text-[#3A759F] hover:underline">cagrilintide</Link>, or{" "}
          <Link href="/peptides/cagrisema" className="text-[#3A759F] hover:underline">CagriSema</Link>{" "}
          for fat-loss work where GH-mediated lean-mass preservation is a goal during caloric restriction.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Sermorelin substitution.</span>{" "}
          <Link href="/peptides/sermorelin" className="text-[#3A759F] hover:underline">Sermorelin</Link>{" "}
          can substitute for CJC-1295 (no-DAC) — both are short-acting GHRH analogs with similar half-lives. Sermorelin has the advantage of FDA-approved compounded clinical use.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Tesamorelin substitution.</span>{" "}
          <Link href="/peptides/tesamorelin" className="text-[#3A759F] hover:underline">Tesamorelin</Link>{" "}
          (FDA-approved GHRH analog for HIV-associated lipodystrophy) is a regulatory-cleaner option for the GHRH-pathway component, particularly for visceral fat targeting.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + adequate protein.</span> Required for GH-mediated anabolic effect. GH and IGF-1 elevation without mechanical loading and protein substrate produces less lean-mass benefit.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: MK-677.</span>{" "}
          <Link href="/peptides/mk-677" className="text-[#3A759F] hover:underline">MK-677</Link>{" "}
          (ibutamoren) is another GH secretagogue (ghrelin receptor agonist) — stacking with Ipamorelin doubles the GHS-R1a activation without proportional benefit and increases appetite/cortisol risk.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: full-dose standalone CJC-1295 or Ipamorelin.</span> The GH Stack already contains both at meaningful doses. Stacking with standalone{" "}
          <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
          or{" "}
          <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>{" "}
          protocols doubles the dose without independent benefit.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of the GH Stack?",
    intro:
      "Most reported GH Stack side effects are mild and reflect the GH axis's natural effects on water balance and tissue growth — water retention, mild appetite changes, transient injection-site reactions. Ipamorelin's selectivity makes it cleaner than older GHRPs, which is why this combination became the default stack. The theoretical long-term concerns are insulin resistance and receptor desensitization from sustained GH-axis activation.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild injection site reactions.</span> Redness, irritation, or transient pinkness.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild water retention.</span> Reflects normal GH-mediated sodium and water effects.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient appetite changes.</span> Generally mild with Ipamorelin (selective) compared to older GHRPs.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild head rush / flushing.</span> Most common with the first few doses, typically resolves with continued use.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Numbness / tingling in hands.</span> Mild carpal-tunnel-like sensations from GH-related fluid retention. Resolves on cycle-off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fasting glucose elevation.</span> Reflects GH's normal counter-regulatory effects on insulin sensitivity. Worth monitoring during longer cycles.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Typically mild, more common during dose titration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vivid dreams / disrupted sleep onset.</span> Reported with pre-bed dosing in some users. Usually adapts within 1–2 weeks.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare or theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Insulin resistance with chronic use.</span> Sustained GH-axis activation can promote insulin resistance. The theoretical reason for cycling — 8–12 weeks on, 4-week minimum off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Receptor desensitization.</span> Continuous GH-axis stimulation without breaks can downregulate pituitary receptor responsiveness. Avoided by standard cycling protocols.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical mitogenic risk.</span> Chronic IGF-1 elevation has theoretical tumor-stimulation concern from epidemiological associations of high baseline IGF-1 with certain cancer types. No signals have appeared in GH Stack research-community use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-doping prohibition.</span> Both CJC-1295 and Ipamorelin are on the WADA prohibited list (Section S2, peptide hormones / growth factors). Tested athletes should not use the GH Stack in any form.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most side effects are mild and resolve with dose adjustment or cycle-off. Ipamorelin's selectivity profile means the combination avoids the cortisol elevation, prolactin elevation, and excessive appetite that older GHRP stacks produced.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does the GH Stack interact with other drugs?",
    intro:
      "The GH Stack has limited well-documented systemic drug interactions, but several theoretical concerns apply because GH and IGF-1 affect insulin sensitivity, fluid balance, and tissue growth. The most material is the potential interaction with insulin and oral diabetes medications in users with diabetes or pre-diabetes.",
    body: [
      "Insulin and oral hypoglycemics. GH counter-regulates insulin. Users on insulin, metformin, or other diabetes medications may need dose adjustment. Fasting glucose worth monitoring during GH Stack cycles.",
      "Corticosteroids. Chronic corticosteroid use can suppress the GH axis at the pituitary level — potentially blunting the GH Stack response. No acute safety concern documented.",
      "Other GH-axis compounds. MK-677, HGH itself, IGF-1 LR3 — overlapping mechanisms increase IGF-1 elevation without proportional benefit and amplify side effects. Avoid stacking.",
      "Levothyroxine. GH-axis activation can shift T4-to-T3 conversion. Users on thyroid replacement may notice dose adequacy changes during GH Stack cycles.",
      "Component-level interactions. Cross-reference the CJC-1295 and Ipamorelin individual peptide pages for full per-component interaction details.",
    ],
  },
  {
    id: "storage",
    title: "How should the GH Stack be stored?",
    body: [
      "Lyophilized (powder) form: -20°C long-term, 2–8°C short-term (refrigerated).",
      "Reconstituted solution: 2–8°C, use within 30 days.",
      "Reconstitution: bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze the reconstituted solution. Freezing damages the peptides and renders them inactive.",
      "Protect from light — store in the original container or amber vial.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of GH Stack research?",
    intro:
      "Most evidence on the GH Stack comes from preclinical models and small human studies of each component individually. The combination is widely used in the research community but has no controlled trial as a single product. The closest regulatory analog is Sermorelin — an FDA-cleared GHRH analog with similar mechanism that supports the safety class.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The GH Stack is NOT FDA-approved. Neither CJC-1295 nor Ipamorelin has approved human use. Sermorelin and Tesamorelin — both GHRH analogs with similar mechanism — have approved clinical use through compounding pharmacies and as branded pharmaceuticals (Egrifta for tesamorelin), providing regulatory analogs for safety class but not for the combination itself.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most evidence on the combination is mechanistic and short-term human pharmacodynamic data. Long-term effects of sustained dual-pathway GH-axis stimulation are not fully established — theoretical concerns include insulin resistance, receptor desensitization, and chronic IGF-1 elevation effects. Standard cycling (8–12 weeks on, 4-week minimum off) is the research-community mitigation.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Compounded blends are sold as &ldquo;research peptides.&rdquo; Quality varies dramatically by source — particularly for distinguishing between CJC-1295 with DAC and without DAC, which is the single most important specification for the GH Stack. Third-party HPLC testing is strongly recommended.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: Both CJC-1295 (DAC and no-DAC) and Ipamorelin are on the WADA prohibited list (Section S2). Tested athletes should not use the GH Stack in any form.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source GH Stack",
    intro:
      "The GH Stack is not FDA-approved and is sold by specialty peptide vendors for laboratory research use only — pre-blended as a fixed CJC-1295 + Ipamorelin vial, or as separate components. The vendors highlighted below carry a pre-blended GH Stack and have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners" },
            { slug: "spartan-peptides", note: "Spartan Strong pre-formulated blend" },
            { slug: "midwest-peptide" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#3A759F] hover:underline">
            See all {activeVendorCount} verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "GH Stack FAQ",
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
          Ionescu M, Frohman LA. Pulsatile secretion of growth hormone (GH) persists during continuous stimulation by CJC-1295, a long-acting GH-releasing hormone analog. J Clin Endocrinol Metab. 2006;91(12):4792-4797.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17018654/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17018654/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Raun K, Hansen BS, Johansen NL, et al. Ipamorelin, the first selective growth hormone secretagogue. Eur J Endocrinol. 1998;139(5):552-561.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9849822/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9849822/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bowers CY, Reynolds GA, Durham D, et al. Growth hormone (GH)-releasing peptide stimulates GH release in normal men and acts synergistically with GH-releasing hormone. J Clin Endocrinol Metab. 1990;70(4):975-82.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/2108187/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/2108187/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ishida J, Saitoh M, Ebner N, et al. Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development. JCSM Rapid Commun. 2020;3(1):25-37.{" "}
          <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Teichman SL, Neale A, Lawrence B, et al. Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295 (a long-acting analog of GH-releasing hormone). J Clin Endocrinol Metab. 2006;91(3):799-805.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16352683/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16352683/
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
          The GH Stack has no controlled trial as a combination, but each component has well-characterized human pharmacodynamic data and the synergy is mechanistically established. The studies below are the key peer-reviewed sources for each component and for the combination's mechanistic rationale.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function GHStackPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"GH Stack","description":"GH Stack (CJC-1295 + Ipamorelin) research profile: dual-pathway growth hormone secretagogue mechanism, with-DAC vs no-DAC differentiation, dosing protocol, side effects, FAQ.","url":"https://profpeptide.com/peptides/gh-stack","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"GH Stack"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">GH Stack</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">Research-Grade</span>
        <span className="tag">Combination Blend</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 15, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> CJC-1295 / Ipamorelin Stack, CJC/Ipa Blend, GH Stack
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Growth Hormone Secretagogue Blend (2-component)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research-grade only
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is the GH Stack?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            The GH Stack is a 2-component growth hormone secretagogue blend combining{" "}
            <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
            (a synthetic GHRH analog) and{" "}
            <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>{" "}
            (a selective GHRP). Activating both the GHRH receptor and the ghrelin / GHS-R1a receptor on pituitary somatotrophs at the same time produces supra-additive growth hormone release — 2–4× greater than either compound alone — while preserving the physiological pulsatile pattern of natural GH secretion. The stack is the most popular GH secretagogue blend in the research-grade market, and Ipamorelin's selectivity (no cortisol, ACTH, prolactin, or appetite spike) is the reason this particular combination became dominant over older GHRH/GHRP pairings.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Synergistic GH amplification beyond individual compound effects (2–4× greater AUC vs monotherapy)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Physiologically pulsatile GH release pattern (preserves feedback regulation)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Elevated IGF-1 supporting anabolic and metabolic processes</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No significant cortisol, ACTH, or prolactin elevation (Ipamorelin's selectivity advantage)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Enhanced sleep quality through GH-mediated slow-wave sleep support</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Body composition, recovery, and connective-tissue effects studied across multiple research applications</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> 100–300 mcg CJC-1295 (without DAC) + 100–300 mcg Ipamorelin per injection, 1–3× daily subcutaneously, pre-bed and empty stomach. Pre-blended vials typically 10 mg total (5 mg + 5 mg) at fixed 1:1 ratio. CJC-1295 with DAC follows a different protocol (1–2 mg once weekly).
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Sold pre-blended by some research peptide vendors; many researchers buy CJC-1295 and Ipamorelin separately. Neither component is FDA-approved. See{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">
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
        {["GH Axis", "Growth Hormone Secretagogue", "Recovery", "Combination Blend", "Preclinical"].map((tag) => (
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
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#3A759F] hover:underline">CJC-1295</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Ipamorelin</Link>
        <Link href="/peptides/sermorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Sermorelin</Link>
        <Link href="/peptides/tesamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Tesamorelin</Link>
        <Link href="/peptides/mk-677" className="text-sm font-medium text-[#3A759F] hover:underline">MK-677</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#3A759F]/20 bg-[#3A759F]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/cjc-1295-vs-sermorelin-vs-ipamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">CJC-1295 vs Sermorelin vs Ipamorelin &rarr;</Link>
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
    <ContactLink pageName="GH Stack" pagePath="/peptides/gh-stack" />
    </div>
    </>
  );
}
