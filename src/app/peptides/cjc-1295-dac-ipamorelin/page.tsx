import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/cjc-1295-dac-ipamorelin",
  title: "CJC-1295 DAC + Ipamorelin Research Profile, Dosing | Prof. Peptide",
  description:
    "CJC-1295 DAC + Ipamorelin research profile: once-weekly DAC variant of the GH secretagogue stack. DAC vs no-DAC mechanism, sustained GH bleed, dosing protocol, side effects, FAQ.",
});

const faqs = [
  {
    q: "What is the CJC-1295 DAC + Ipamorelin stack?",
    a: (
      <>
        CJC-1295 DAC + Ipamorelin is a 2-component growth hormone secretagogue blend:{" "}
        <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295 with DAC</Link>{" "}
        (a long-acting GHRH analog, half-life ~6&ndash;8 days) +{" "}
        <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
        (a selective GHS-R1a / ghrelin-receptor GHRP, half-life ~2 hours). CJC-1295 DAC binds serum albumin via a maleimide Drug Affinity Complex, producing sustained baseline GH and IGF-1 elevation from a single weekly injection. Ipamorelin is dosed separately 1&ndash;3&times; daily to add pulsatile GH signals on top of the long-acting foundation. Unlike the standard{" "}
        <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (no-DAC)</Link>
        , the two components of this stack do NOT synchronize by half-life &mdash; the DAC provides the baseline, Ipamorelin provides the pulse.
      </>
    ),
  },
  {
    q: "What's the difference between CJC-1295 DAC and the no-DAC GH Stack?",
    a: (
      <>
        This is the most important distinction in GH secretagogue research. The{" "}
        <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">standard GH Stack</Link>{" "}
        uses CJC-1295 <span className="font-semibold">without DAC</span> (Modified GRF 1-29), which has a ~30-minute half-life, is dosed 100&ndash;300 mcg 2&ndash;3&times; daily, and synchronizes with Ipamorelin&apos;s ~2-hour half-life to produce discrete, physiologically pulsatile GH spikes.{" "}
        <span className="font-semibold">CJC-1295 with DAC</span> attaches a maleimide Drug Affinity Complex that binds the peptide to serum albumin, extending the half-life to ~6&ndash;8 days. This means a single 1&ndash;2 mg injection once weekly maintains persistently elevated baseline GH and IGF-1 &mdash; a &ldquo;GH bleed&rdquo; pattern rather than discrete pulses. The trade-off: dosing convenience (once weekly) at the cost of reduced pulsatility. Some researchers consider the loss of pulsatility a downside due to potential feedback dampening and GH-axis desensitization concerns.
      </>
    ),
  },
  {
    q: "Why is Ipamorelin still dosed daily even with once-weekly CJC-1295 DAC?",
    a: (
      <>
        Ipamorelin&apos;s ~2-hour half-life means it clears within a few hours of each injection. It does not accumulate to match the week-long presence of CJC-1295 DAC. Researchers using this stack continue daily (or up to 3&times; daily) Ipamorelin dosing because it adds pulsatile GHS-R1a stimulation on top of the sustained GHRHR background from the DAC. This is a key dosing nuance compared to the{" "}
        <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">no-DAC GH Stack</Link>
        , where both peptides are dosed at the same frequency and their half-lives roughly synchronize to produce a well-timed single pulse. In the DAC variant, there is a deliberate and persistent half-life mismatch &mdash; the DAC provides ongoing GHRH-receptor priming while Ipamorelin delivers the ghrelin-receptor pulse signal throughout the week.
      </>
    ),
  },
  {
    q: "Is CJC-1295 DAC + Ipamorelin FDA-approved?",
    a: (
      <>
        No. Neither CJC-1295 (with or without DAC) nor Ipamorelin is FDA-approved for human use. Both are research-use-only (RUO) compounds sold for laboratory research. The closest regulatory analog for the GHRH-pathway component is{" "}
        <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>
        , a short-acting GHRH analog with approved clinical use through compounding pharmacies for adult GH deficiency. Both CJC-1295 and Ipamorelin are prohibited under WADA Section S2 (peptide hormones and growth factors). Tested athletes should not use this stack in any form.
      </>
    ),
  },
  {
    q: "Is there a risk of GH-axis desensitization with sustained DAC use?",
    a: "This is the primary mechanistic concern with CJC-1295 DAC that does not apply equally to the no-DAC form. Continuous, non-pulsatile GHRH-receptor stimulation over multiple weeks can downregulate pituitary somatotroph responsiveness — the normal feedback mechanism that dampens the GH axis when stimulation is persistent. Standard research cycling protocols (8–16 weeks active, then an equal off-period) are used to mitigate this risk. Some researchers prefer the no-DAC form specifically because its short half-life preserves the receptor reset between daily doses. There are no controlled human trials definitively quantifying the desensitization difference between forms.",
  },
  {
    q: "What are the side effects most associated with the DAC variant specifically?",
    a: "The sustained GH elevation from CJC-1295 DAC tends to produce more pronounced and longer-lasting versions of GH-related side effects compared to the pulsatile no-DAC protocol. Water retention, numbness and tingling in the hands and feet (carpal-tunnel-like fluid-retention effect), and mild fasting glucose elevation are more commonly reported with the DAC form because GH is elevated around the clock rather than for a 1–2 hour post-dose window. These effects typically resolve on cycle-off but can persist for several days after the last DAC injection due to the long half-life.",
  },
  {
    q: "Where can I buy CJC-1295 DAC and Ipamorelin?",
    a: (
      <>
        CJC-1295 DAC and Ipamorelin are sold by specialty research peptide vendors for laboratory research use only. They are typically purchased as two separate vials because the DAC&apos;s once-weekly dosing does not combine cleanly with a daily blend. Verify that the vendor explicitly labels the CJC-1295 product as &ldquo;with DAC&rdquo; &mdash; many vendors carry both forms and labeling can be ambiguous. Prof. Peptide maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Prolonged Stimulation of Growth Hormone and IGF-I Secretion by CJC-1295 in Healthy Adults",
    authors: "Teichman SL, Neale A, Lawrence B, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: "2006",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
    summary: "The primary human pharmacokinetic and pharmacodynamic study of CJC-1295 with DAC. Single and repeated subcutaneous doses of 0.03–0.1 mg/kg produced dose-dependent GH and IGF-1 elevation lasting 6–8 days. IGF-1 increased 1.5&ndash;3 fold above baseline and remained elevated for the full inter-dose interval. The albumin-binding DAC mechanism — a maleimide group that covalently attaches the peptide to circulating serum albumin — is directly responsible for the extended half-life and the resulting sustained &ldquo;GH bleed&rdquo; pattern. This study is the empirical foundation for the once-weekly CJC-1295 DAC dosing protocol used in research today.",
  },
  {
    title: "Pulsatile Secretion of Growth Hormone Persists During Continuous Stimulation by CJC-1295",
    authors: "Ionescu M, Frohman LA",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: "2006",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/17018654/",
    summary: "A companion analysis of the Teichman 2006 dataset examining GH pulsatility during sustained CJC-1295 DAC stimulation. The paper found that spontaneous GH pulses are detectable throughout the inter-dose interval, though the amplitude of basal GH is persistently elevated. This nuance is important for the DAC vs no-DAC comparison: the DAC form does not eliminate pulsatility entirely, but it raises the &ldquo;floor&rdquo; of baseline GH substantially, which changes the physiology of the GH axis compared to the discrete spikes produced by no-DAC / Modified GRF 1-29 dosing.",
  },
  {
    title: "Ipamorelin, the First Selective Growth Hormone Secretagogue",
    authors: "Raun K, Hansen BS, Johansen NL, et al.",
    journal: "European Journal of Endocrinology",
    year: "1998",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
    summary: "The landmark selectivity study for Ipamorelin. Established that Ipamorelin produces robust GH release with approximately 90% less cortisol elevation and no meaningful ACTH or prolactin response compared to older GHRPs (GHRP-2, GHRP-6, Hexarelin). This clean hormonal profile is why Ipamorelin remained the preferred GHRP partner in both the DAC and no-DAC GH stack variants despite the half-life mismatch with CJC-1295 DAC: it adds ghrelin-receptor pulse triggering without the cortisol and appetite penalties of older GHRPs.",
  },
  {
    title: "Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development",
    authors: "Ishida J, Saitoh M, Ebner N, et al.",
    journal: "JCSM Rapid Communications",
    year: "2020",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9",
    summary: "A comprehensive review of the GH secretagogue class providing clinical context for both DAC and no-DAC CJC-1295 + Ipamorelin protocols. The review covers the mechanistic evolution from native GHRH and ghrelin to long-acting analogs, documenting the rationale for dual-pathway stimulation and addressing why sustained versus pulsatile GH profiles produce different clinical trade-offs. It also contextualizes why the combination is considered safer than direct HGH administration — preserving endogenous feedback even with sustained stimulation.",
  },
  {
    title: "GH-Releasing Peptide Stimulates GH Release in Normal Men and Acts Synergistically with GH-Releasing Hormone",
    authors: "Bowers CY, Reynolds GA, Durham D, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: "1990",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/2108187/",
    summary: "Mechanistic study demonstrating supra-additive GH release when GHRH analogs and GHSR (ghrelin receptor) agonists are co-administered — the scientific foundation for combining any GHRH analog with a GHRP like Ipamorelin. Co-administration produced 2&ndash;4&times; greater GH area under the curve compared to either compound alone. In the context of the DAC stack, this synergy persists even without half-life synchronization: the sustained GHRHR priming from CJC-1295 DAC potentiates each Ipamorelin pulse, while Ipamorelin&apos;s GHS-R1a activation adds to the elevated GH floor.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does CJC-1295 DAC + Ipamorelin work?",
    intro:
      "CJC-1295 DAC + Ipamorelin uses the same dual-pathway pituitary mechanism as the standard GH Stack, but the long-acting DAC chemistry fundamentally changes the GH release pattern. Instead of discrete daily pulses, the DAC variant produces a sustained elevated baseline &mdash; a &ldquo;GH bleed&rdquo; &mdash; with Ipamorelin adding pulsatile spikes on top throughout the week. Understanding the DAC mechanism is essential for evaluating the trade-offs between this stack and the no-DAC alternative.",
    body: [
      "CJC-1295 with DAC — Albumin-Binding GHRH Analog [1]. CJC-1295 is a synthetic analog of native growth hormone-releasing hormone (GHRH). The DAC modification attaches a maleimide Drug Affinity Complex to the peptide backbone. After subcutaneous injection, this maleimide group covalently binds to cysteine-34 of circulating serum albumin — creating an albumin-peptide conjugate with a plasma half-life of approximately 6–8 days. The peptide slowly dissociates from albumin and activates GHRH receptors on anterior pituitary somatotrophs via the Gs-coupled cAMP/PKA pathway, driving continuous GH gene transcription and sustained GH release.",
      "Ipamorelin — GHS-R1a Pulse Signal [3]. Ipamorelin selectively activates the ghrelin receptor (GHS-R1a) on the same pituitary somatotrophs via a Gq-coupled phospholipase C / IP3 / calcium / PKC cascade. With a ~2-hour half-life, each Ipamorelin injection produces a discrete GH pulse lasting 1–2 hours. Critically, Ipamorelin does not accumulate between daily doses — it clears completely before the next injection. This means Ipamorelin&apos;s daily dosing schedule operates independently of the week-long CJC-1295 DAC presence.",
      "Half-Life Mismatch — The Key DAC Nuance [1][2]. Unlike the standard GH Stack (no-DAC), where CJC-1295 (Modified GRF 1-29, ~30-min half-life) and Ipamorelin (~2-hour half-life) are co-administered at the same frequency to produce synchronized pulses, the DAC variant has a deliberate and persistent half-life mismatch. CJC-1295 DAC (~6–8 days) is dosed once weekly; Ipamorelin is dosed 1–3× daily. The result: the DAC provides week-long GHRH-receptor priming that potentiates each Ipamorelin pulse throughout the inter-dose interval.",
      "Sustained GH Bleed vs Pulsatile GH [2]. The DAC form produces what researchers call a &ldquo;GH bleed&rdquo; — persistently elevated baseline GH and IGF-1 throughout the weekly interval. Spontaneous pulsatility is not eliminated (some endogenous pulses persist), but the GH &ldquo;floor&rdquo; is substantially raised. The no-DAC GH Stack, by contrast, produces discrete GH spikes with a return to near-baseline between injections, closely mimicking the physiological pulsatile pattern. Some researchers consider the DAC&apos;s reduced pulsatility a downside due to potential feedback dampening and pituitary desensitization concerns with long-term continuous stimulation.",
      "Downstream IGF-1 Elevation [4]. Both forms of the GH Stack elevate hepatic IGF-1 production, which carries most systemic anabolic and tissue-repair effects. The DAC form maintains persistently elevated IGF-1 throughout the weekly cycle — IGF-1 increases of 1.5–3 fold above baseline sustained for the full inter-dose interval were documented in Teichman 2006. The no-DAC form drives IGF-1 that peaks post-injection and partially returns to baseline between multi-daily doses.",
    ],
  },
  {
    id: "research",
    title: "What is CJC-1295 DAC + Ipamorelin used for?",
    intro:
      "Research applications for CJC-1295 DAC + Ipamorelin are similar to the standard GH Stack but oriented toward protocols where dosing convenience is prioritized and sustained IGF-1 elevation is the primary goal rather than mimicking physiological pulsatile GH. The DAC variant is particularly referenced in longer-cycle GH-axis optimization research.",
    body: [
      "Body Composition [4]. Persistently elevated GH and sustained IGF-1 above baseline across the entire weekly interval support lean muscle synthesis, visceral fat metabolism, and overall body composition. The sustained IGF-1 pattern from the DAC may provide a more consistent anabolic signal compared to the peak-and-trough pattern of no-DAC protocols, though direct comparative trials do not exist.",
      "GH-Axis Optimization in Somatopause [1]. Age-related decline in GH axis activity is one of the primary research motivations for GH secretagogue use. The DAC variant&apos;s once-weekly dosing reduces adherence burden in longer-term research cycles studying somatopause reversal, which may partially explain its use in this context despite the pulsatility trade-off.",
      "Sleep Quality and Recovery [1][4]. As with the no-DAC stack, elevated GH and IGF-1 support slow-wave sleep quality, tissue repair, and post-exercise recovery. The DAC form maintains GH elevation through the week, including during overnight sleep, rather than concentrating it in a post-injection window.",
      "Connective Tissue and Joint Support. IGF-1-mediated collagen synthesis and connective tissue maintenance are a noted research application. The sustained IGF-1 elevation from the DAC form provides continuous signaling for this application throughout the weekly dosing cycle.",
      "Lean Mass and Anti-Sarcopenia Research [4]. GH secretagogues are studied for preserving lean mass during aging and caloric restriction. The DAC variant&apos;s once-weekly schedule is a practical advantage in long-cycle (12+ week) protocols compared to multi-daily no-DAC injections.",
    ],
  },
  {
    id: "timeline",
    title: "How long does CJC-1295 DAC + Ipamorelin take to work?",
    intro:
      "The DAC variant builds effect more gradually than the no-DAC stack because the albumin-bound CJC-1295 takes several days post-injection to reach peak activity as it dissociates from albumin and accumulates in the pituitary signaling compartment. Steady-state GH and IGF-1 elevation is typically reached by the third or fourth weekly dose.",
    content:
      "Measurable IGF-1 elevation above baseline appears within the first week for most research subjects. Subjective sleep quality and recovery improvements typically emerge within 2–3 weeks. Body composition changes (lean mass accrual, fat distribution shifts) require 12–24 weeks to become measurable. Standard research cycles for the DAC variant run 8–16 weeks active with a similar off-period. The long half-life of CJC-1295 DAC means washout after the last injection takes approximately 2–3 weeks — IGF-1 remains elevated for this period. Off-cycle pituitary recovery timelines should account for the extended washout compared to the no-DAC form.",
  },
  {
    id: "dosing",
    title: "How is CJC-1295 DAC + Ipamorelin dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          CJC-1295 DAC + Ipamorelin is administered as two separate subcutaneous injections on different schedules. The DAC&apos;s long half-life and Ipamorelin&apos;s short half-life are fundamentally incompatible with a fixed-ratio pre-blend &mdash; they are almost always purchased and dosed as separate vials. This is a key practical difference from the{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">no-DAC GH Stack</Link>
          , which is commonly available as a pre-blended 1:1 vial.
        </p>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          CJC-1295 with DAC protocol:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dose.</span> 1&ndash;2 mg subcutaneously once weekly. Start at 1 mg; increase to 2 mg after 2&ndash;4 weeks if well tolerated.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Frequency.</span> Once weekly (every 7 days). The ~6&ndash;8 day half-life means a second injection before day 7 risks accumulation above intended levels.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing.</span> Day and time of week can be consistent (e.g., every Monday morning). Food timing does not significantly affect the CJC-1295 DAC response given its multi-day activity window.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> Lyophilized CJC-1295 DAC is reconstituted with bacteriostatic water (BAC water). A common reconstitution for a 2 mg vial is 2 mL BAC water (1 mg/mL), so a 1 mg dose = 1 mL draw; a 2 mg dose = 2 mL draw (use a larger syringe). Swirl gently &mdash; do not shake.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle.</span> 8&ndash;16 weeks active, with an equal or longer off-period. Longer active cycles are more common with the DAC variant (vs 8&ndash;12 weeks for no-DAC) due to its steady-state kinetics, but the off-period should account for the ~2&ndash;3 week washout tail.</li>
        </ol>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-3">
          Ipamorelin protocol (alongside CJC-1295 DAC):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dose.</span> 200&ndash;300 mcg per injection subcutaneously. Start at 100&ndash;150 mcg and titrate up over 2&ndash;3 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Frequency.</span> 1&ndash;3&times; daily. Pre-bed dosing is the standard single-dose protocol. Researchers using 2&ndash;3 daily doses typically add a post-workout and/or upon-waking dose. Unlike the CJC-1295 DAC, Ipamorelin clears within ~4&ndash;6 hours, so each injection is independent.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing constraints.</span> Empty stomach for at least 2 hours before injection. Elevated insulin and somatostatin from a recent meal blunt the Ipamorelin GH pulse response. This timing rule applies to each Ipamorelin injection throughout the week, even though CJC-1295 DAC is active continuously.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> Lyophilized Ipamorelin (typically 2&ndash;5 mg vials) is reconstituted with BAC water. A 5 mg vial + 2 mL BAC water = 2.5 mg/mL. A 200 mcg dose = 8 units on a U-100 insulin syringe; a 300 mcg dose = 12 units.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Reconstitution reference &mdash; CJC-1295 DAC (2 mg vial)
          </h3>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water added</th>
                  <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                  <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg dose</th>
                  <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1.5 mg dose</th>
                  <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">2 mg dose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                  <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 mg/mL</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">50 units</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">75 units</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 units (full vial)</td>
                </tr>
                <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                  <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1 mg/mL</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 units</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">150 units (use 1.5 mL syringe)</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">Full vial</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed pt-2">
            Units are on a U-100 insulin syringe (100 units = 1 mL). For Ipamorelin reconstitution math or non-standard vial sizes, use the{" "}
            <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator</Link>
            .
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Neither CJC-1295 DAC nor Ipamorelin is FDA-approved. Dosing is derived from each component&apos;s individual research literature, most importantly Teichman et al. 2006 for the DAC pharmacokinetics, and Raun et al. 1998 for Ipamorelin. There are no approved retail dosing standards for the combination.
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
    title: "How is CJC-1295 DAC + Ipamorelin administered?",
    intro:
      "Both components are administered by subcutaneous injection using a small insulin syringe. Because they are dosed on different schedules, they are kept as separate vials and injected separately. CJC-1295 DAC is injected once weekly at any time; Ipamorelin is injected 1–3× daily on an empty stomach.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection for both components. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">CJC-1295 DAC injection day.</span> Once weekly on a consistent day. Time of day is less critical than for Ipamorelin because the multi-day half-life means food timing has minimal impact on the DAC&apos;s sustained activity.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Ipamorelin: empty stomach rule.</span> At least 2 hours after the last meal before each Ipamorelin injection. Elevated insulin and somatostatin from food consumption blunt the acute GH pulse response. This is the most important timing rule for Ipamorelin regardless of whether the DAC is being used simultaneously.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Ipamorelin pre-bed default.</span> Pre-bed (30&ndash;60 minutes before sleep) is the standard primary dose timing. Reinforces the natural overnight GH pulse. Add a second dose post-workout if running a 2&times; daily protocol.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Alternate sites each injection. Stay at least 1 inch from previous injection sites. Track CJC-1295 DAC injection sites separately from daily Ipamorelin rotation.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed CJC-1295 DAC dose.</span> If a weekly dose is missed by 1&ndash;2 days, resume on the next intended day. Do not double the dose. The long half-life provides a buffer &mdash; GH and IGF-1 will remain partially elevated even if an injection is delayed by a few days.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> Use bacteriostatic water for injection (BAC water) for both components. Swirl gently &mdash; do not shake &mdash; to avoid damaging the lyophilized peptides. Reconstituted CJC-1295 DAC and Ipamorelin solutions should be stored separately at 2&ndash;8&deg;C and used within 30 days.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycling.</span> 8&ndash;16 weeks active, equal or longer off-period. Account for the ~2&ndash;3 week CJC-1295 DAC washout tail when calculating off-cycle duration &mdash; the pituitary is not fully free of DAC influence until roughly 3 weeks after the last injection.</li>
        </ol>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">CJC-1295 DAC</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Ipamorelin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~6&ndash;8 days (albumin-bound)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~2 hours</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Dose frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once weekly</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1&ndash;3&times; daily</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Common research dose</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1&ndash;2 mg/week</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">200&ndash;300 mcg/injection</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food timing</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not critical (multi-day activity)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Empty stomach 2+ hours</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">GH release pattern</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Sustained &ldquo;GH bleed&rdquo; baseline</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Discrete pulses on top of DAC baseline</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Washout</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~2&ndash;3 weeks after last injection</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~4&ndash;6 hours per dose</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Comparing this to the{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">standard no-DAC GH Stack</Link>
          : that protocol doses both CJC-1295 (no-DAC) and Ipamorelin at the same frequency (1&ndash;3&times; daily, co-administered), synchronizing their half-lives to produce a discrete pulsatile GH spike per injection. The DAC stack intentionally separates the two schedules &mdash; weekly CJC-1295 DAC for the sustained backbone, daily Ipamorelin for the pulsatile layer.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does CJC-1295 DAC + Ipamorelin stack well with?",
    intro:
      "CJC-1295 DAC + Ipamorelin pairs well with tissue-repair peptides and metabolic compounds where sustained GH and IGF-1 elevation provides a systemic anabolic background. The things to avoid are additional GH secretagogues (stacking the GH axis twice) or using standalone CJC-1295 DAC or Ipamorelin in parallel with this stack.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Tissue-repair peptides.</span> The most common pairing.{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
          +{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
          (or the{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>
          ) for combined local + systemic tissue repair. The sustained IGF-1 elevation from CJC-1295 DAC amplifies the substrate for local healing peptides throughout the week.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Metabolic / weight peptides.</span>{" "}
          <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>{" "}
          or{" "}
          <Link href="/peptides/cagrilintide" className="text-[#0891b2] hover:underline">cagrilintide</Link>{" "}
          for fat-loss protocols where GH-mediated lean-mass preservation is a goal during caloric restriction.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Considering the no-DAC alternative.</span> Researchers who prefer physiological pulsatility should consider the{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">standard GH Stack (no-DAC)</Link>{" "}
          instead. The no-DAC form is dosed multiple times daily but preserves GH pulse patterns that more closely mirror natural secretion. The choice between DAC and no-DAC is the central decision point for GH-secretagogue stack design.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Beginner alternative.</span> Researchers new to GH secretagogues may prefer{" "}
          <Link href="/peptides/sermorelin-ipamorelin" className="text-[#0891b2] hover:underline">Sermorelin + Ipamorelin</Link>
          , where Sermorelin&apos;s FDA-compounding approval and short half-life provide a lower-risk introduction to the GHRH + GHRP combination concept.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + adequate protein.</span> Required for GH-mediated anabolic effect. GH and IGF-1 elevation without mechanical loading and protein substrate produces reduced lean-mass benefit.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: MK-677.</span>{" "}
          <Link href="/peptides/mk-677" className="text-[#0891b2] hover:underline">MK-677</Link>{" "}
          (ibutamoren) is another GHS-R1a agonist &mdash; stacking with Ipamorelin doubles the ghrelin-receptor stimulation without proportional benefit and amplifies appetite and cortisol risk.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: standalone CJC-1295 DAC or Ipamorelin protocols in parallel.</span> This stack already contains both. Adding standalone{" "}
          <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
          or{" "}
          <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
          doses doubles the GH axis stimulus without independent benefit.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of CJC-1295 DAC + Ipamorelin?",
    intro:
      "Side effects broadly mirror those of the standard GH Stack but with one important difference: the sustained GH elevation from CJC-1295 DAC tends to produce more persistent and prominent GH-related effects (water retention, numbness, glucose changes) because GH is elevated around the clock rather than only during a 1–2 hour post-dose window. Ipamorelin&apos;s selectivity keeps cortisol and prolactin effects minimal.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Water retention.</span> GH-mediated sodium and water retention is more prominent with the DAC form than with pulsatile no-DAC protocols because GH is persistently elevated. Mild peripheral edema, particularly in the hands, face, and ankles, is commonly reported.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Numbness and tingling in hands and feet.</span> Carpal-tunnel-like sensations from GH-related fluid retention and nerve compression. More frequently reported with the DAC variant than with no-DAC protocols due to continuous GH elevation. Usually resolves on cycle-off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild injection site reactions.</span> Redness, irritation, or transient pinkness at injection sites. Common to both components.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild head rush or flushing.</span> Most common with the first few Ipamorelin doses. Usually resolves with continued use.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fasting glucose elevation.</span> GH counter-regulates insulin. Persistently elevated GH from the DAC form can produce more sustained fasting glucose elevation compared to the transient post-dose spikes from the no-DAC protocol. Monitoring fasting glucose during longer cycles is warranted.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Typically mild, more common during initial weeks and on dose increases.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fatigue on days following the weekly CJC-1295 DAC injection.</span> The initial surge in GH/IGF-1 after the weekly dose can produce transient lethargy. Usually adapts by week 2&ndash;3.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vivid dreams or disrupted sleep onset.</span> Reported with pre-bed Ipamorelin dosing in some subjects. Usually adapts within 1&ndash;2 weeks.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare or theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pituitary desensitization.</span> Continuous GHRH-receptor stimulation from CJC-1295 DAC (as opposed to the intermittent stimulation of the no-DAC form) may cause greater downregulation of pituitary somatotroph responsiveness over time. Standard cycling with adequate off-periods is the primary mitigation strategy.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Insulin resistance with chronic use.</span> Sustained GH-axis activation promotes insulin counter-regulation. More pronounced concern with the DAC form due to persistent GH elevation. Cycling 8&ndash;16 weeks on with an equal off-period is the standard mitigation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical mitogenic risk.</span> Chronic IGF-1 elevation has theoretical tumor-stimulation concern from epidemiological associations with certain cancer types. No safety signals have appeared in research-community use, but the sustained IGF-1 elevation of the DAC form is a theoretical concern not equally shared by the pulsatile no-DAC protocol.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-doping prohibition.</span> Both CJC-1295 (with or without DAC) and Ipamorelin are on the WADA prohibited list (Section S2, peptide hormones / growth factors). Tested athletes should not use this stack in any form.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Researchers sensitive to the GH-related water and fluid effects (water retention, numbness, glucose) may prefer the{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">standard no-DAC GH Stack</Link>
          , where these effects are more transient and peak-dependent rather than sustained around the clock.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does CJC-1295 DAC + Ipamorelin interact with other drugs?",
    intro:
      "The interaction profile mirrors the standard GH Stack with one amplification: the persistent GH elevation from CJC-1295 DAC produces more sustained GH counter-regulatory effects on insulin, fluid balance, and thyroid hormone conversion than the pulsatile no-DAC protocol. Users on relevant medications should monitor more closely.",
    body: [
      "Insulin and oral hypoglycemics. GH persistently counter-regulates insulin with the DAC form. Users on insulin, metformin, or other diabetes medications may require closer monitoring and dose adjustment than they would on the no-DAC protocol.",
      "Corticosteroids. Chronic corticosteroid use can suppress GH-axis responsiveness at the pituitary level, potentially blunting the GH Stack response. No acute safety concern documented.",
      "Other GH-axis compounds. MK-677, HGH, IGF-1 LR3 — overlapping mechanisms increase IGF-1 elevation without proportional benefit and amplify side effects. Avoid stacking.",
      "Levothyroxine. GH-axis activation shifts T4-to-T3 conversion. Persistent GH elevation from the DAC form may produce more consistent effects on thyroid hormone balance compared to the pulsatile no-DAC. Users on thyroid replacement should monitor adequacy during the cycle.",
      "Component-level interactions. Cross-reference the CJC-1295 and Ipamorelin individual peptide pages for full per-component interaction details.",
    ],
  },
  {
    id: "storage",
    title: "How should CJC-1295 DAC and Ipamorelin be stored?",
    body: [
      "Lyophilized (powder) form: -20°C long-term, 2–8°C short-term (refrigerated).",
      "Reconstituted solution: 2–8°C, use within 30 days.",
      "Reconstitution: bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze the reconstituted solution. Freezing damages the peptides and renders them inactive.",
      "Protect from light — store in the original container or amber vial.",
      "CJC-1295 DAC and Ipamorelin are stored as separate reconstituted solutions. Do not mix them in the same vial.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of CJC-1295 DAC + Ipamorelin research?",
    intro:
      "Most evidence on the CJC-1295 DAC + Ipamorelin combination comes from each component’s individual pharmacokinetic and pharmacodynamic literature, with the key human DAC study (Teichman 2006) providing the foundation. The combination as a stack has no controlled clinical trial. The DAC variant is also less widely researched than the no-DAC form in the contemporary research literature.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          CJC-1295 DAC + Ipamorelin is NOT FDA-approved. Neither component has approved human use. The closest regulatory analogs are{" "}
          <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>{" "}
          (FDA-approved compounded GHRH analog, short-acting, no DAC) and Tesamorelin (FDA-approved GHRH analog for HIV-associated lipodystrophy). These approved forms are both short-acting; there is no regulatory precedent for a long-acting DAC-form GHRH analog in clinical use.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The Teichman 2006 study is the primary human evidence for CJC-1295 DAC pharmacokinetics. It was conducted by the peptide&apos;s original developer and focused on pharmacodynamics, not clinical outcomes. Long-term effects of continuous weekly CJC-1295 DAC dosing &mdash; particularly the desensitization and sustained IGF-1 elevation concerns &mdash; are not established in controlled human trials. Most evidence on the combination is extrapolated from each component&apos;s individual literature plus research-community use.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The no-DAC vs DAC pulsatility debate remains unresolved in the research literature. There are no controlled human trials directly comparing physiological outcomes between the DAC and no-DAC forms at equivalent GH exposure. The theoretical preference for pulsatile GH (better feedback preservation, lower desensitization risk) vs sustained GH (dosing convenience, consistent IGF-1) is mechanistically argued but not definitively proven in this context.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Vendor labeling ambiguity is a real quality concern: many research peptide vendors sell both CJC-1295 with DAC and CJC-1295 without DAC, and labels are sometimes ambiguous. Third-party HPLC testing to confirm the DAC modification is strongly recommended before use.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: Both CJC-1295 (with or without DAC) and Ipamorelin are on the WADA prohibited list (Section S2). Tested athletes should not use this stack in any form.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source CJC-1295 DAC and Ipamorelin",
    intro:
      "Neither CJC-1295 DAC nor Ipamorelin is FDA-approved. Both are sold by specialty peptide vendors for laboratory research use only, almost always as separate vials (due to their incompatible dosing schedules). When sourcing CJC-1295, confirm with the vendor explicitly that the product is the with-DAC form — many vendors carry both variants and labeling can be ambiguous. The vendors highlighted below carry CJC-1295 DAC and Ipamorelin and have been vetted for transparent third-party testing and traceable batch documentation.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners" },
            { slug: "spartan-peptides", note: "Carries CJC-1295 DAC and Ipamorelin" },
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
    title: "CJC-1295 DAC + Ipamorelin FAQ",
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
          Teichman SL, Neale A, Lawrence B, et al. Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults. J Clin Endocrinol Metab. 2006;91(3):799-805.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16352683/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16352683/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ionescu M, Frohman LA. Pulsatile secretion of growth hormone (GH) persists during continuous stimulation by CJC-1295, a long-acting GH-releasing hormone analog. J Clin Endocrinol Metab. 2006;91(12):4792-4797.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17018654/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17018654/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Raun K, Hansen BS, Johansen NL, et al. Ipamorelin, the first selective growth hormone secretagogue. Eur J Endocrinol. 1998;139(5):552-561.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9849822/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9849822/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ishida J, Saitoh M, Ebner N, et al. Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development. JCSM Rapid Commun. 2020;3(1):25-37.{" "}
          <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bowers CY, Reynolds GA, Durham D, et al. Growth hormone (GH)-releasing peptide stimulates GH release in normal men and acts synergistically with GH-releasing hormone. J Clin Endocrinol Metab. 1990;70(4):975-82.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/2108187/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/2108187/
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
          CJC-1295 DAC + Ipamorelin has no controlled trial as a combination. The studies below are the key peer-reviewed sources for each component and for the synergy rationale. The Teichman 2006 study is the foundational evidence for the DAC form specifically.
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

export default function CJC1295DACIpamorelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"CJC-1295 DAC + Ipamorelin","description":"CJC-1295 DAC + Ipamorelin research profile: once-weekly DAC variant of the GH secretagogue stack. DAC vs no-DAC mechanism, sustained GH bleed, dosing protocol, side effects, FAQ.","url":"https://profpeptide.com/peptides/cjc-1295-dac-ipamorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"CJC-1295 DAC + Ipamorelin"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">CJC-1295 DAC + Ipamorelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">Research-Grade</span>
        <span className="tag">Combination Blend</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 28, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> CJC-1295 with DAC + Ipamorelin, Long-Acting GH Stack, DAC-Ipa Stack
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Growth Hormone Secretagogue Blend (2-component, long-acting GHRH + GHRP)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research-grade only &mdash; not FDA-approved; WADA S2 prohibited
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is CJC-1295 DAC + Ipamorelin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            CJC-1295 DAC + Ipamorelin is the long-acting variant of the GH secretagogue stack. It pairs{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295 with Drug Affinity Complex (DAC)</Link>
            {" "}&mdash; a GHRH analog whose maleimide group binds serum albumin to extend the half-life to approximately 6&ndash;8 days, enabling once-weekly dosing &mdash; with{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>
            , a selective GHS-R1a / ghrelin-receptor GHRP dosed 1&ndash;3&times; daily. The result is a sustained &ldquo;GH bleed&rdquo; pattern: CJC-1295 DAC maintains persistently elevated baseline GH and IGF-1 throughout the week, while each Ipamorelin injection adds a pulsatile GH spike on top of that elevated floor.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            The central distinction from the{" "}
            <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">standard GH Stack (CJC-1295 no-DAC + Ipamorelin)</Link>
            {" "}is the DAC modification. The no-DAC form (Modified GRF 1-29) has a ~30-minute half-life, is dosed at the same frequency as Ipamorelin (1&ndash;3&times; daily), and preserves physiologically pulsatile GH release. The DAC form sacrifices that pulsatility for dosing convenience: one weekly injection instead of multiple daily injections for the GHRH component. The trade-off is real &mdash; some researchers consider the loss of pulsatility a meaningful downside due to potential feedback dampening and desensitization concerns with continuous GHRH-receptor stimulation.
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
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sustained baseline GH and IGF-1 elevation throughout the weekly dosing interval (1.5&ndash;3&times; above baseline IGF-1 documented in human studies)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Once-weekly CJC-1295 DAC injection reduces adherence burden vs multi-daily no-DAC dosing</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Dual-pathway GH axis stimulation: GHRHR (CJC-1295 DAC) + GHS-R1a (Ipamorelin) for synergistic GH output</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Ipamorelin selectivity: no significant cortisol, ACTH, or prolactin elevation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Body composition, lean mass support, and recovery via sustained IGF-1 elevation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sleep quality enhancement through GH-mediated slow-wave sleep support</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> CJC-1295 DAC 1&ndash;2 mg subcutaneously once weekly + Ipamorelin 200&ndash;300 mcg subcutaneously 1&ndash;3&times; daily on empty stomach. Administered as two separate vials (incompatible half-lives prevent pre-blending).
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Sold as separate research-grade vials by specialty peptide vendors. Neither component is FDA-approved. See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current vetted options.
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
        {["GH Axis", "Growth Hormone Secretagogue", "Long-Acting GHRH", "Combination Blend", "Preclinical"].map((tag) => (
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
          <Link href="/peptides/sermorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Sermorelin</Link>
          <Link href="/peptides/mk-677" className="text-sm font-medium text-[#0891b2] hover:underline">MK-677</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/peptides/gh-stack" className="text-sm font-medium text-[#0891b2] hover:underline">GH Stack (no-DAC CJC-1295 + Ipamorelin)</Link>
          <Link href="/peptides/sermorelin-ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Sermorelin + Ipamorelin</Link>
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
      <ContactLink pageName="CJC-1295 DAC + Ipamorelin" pagePath="/peptides/cjc-1295-dac-ipamorelin" />
    </div>
    </>
  );
}
