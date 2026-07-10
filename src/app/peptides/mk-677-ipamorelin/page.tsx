import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/mk-677-ipamorelin",
  title: "MK-677 + Ipamorelin Stack — Oral + Injectable GH Secretagogue Research Profile | Prof. Peptide",
  description:
    "MK-677 + Ipamorelin research profile: oral ghrelin-mimetic baseline plus injectable pulsatile GHRP trigger, overlapping-mechanism caveat, dosing protocol, side effects, FAQ.",
});

const faqs = [
  {
    q: "What is the MK-677 + Ipamorelin stack?",
    a: (
      <>
        The MK-677 + Ipamorelin stack is a 2-component growth hormone secretagogue blend combining{" "}
        <Link href="/peptides/mk-677" className="text-[#0891b2] hover:underline">MK-677 (Ibutamoren)</Link>{" "}
        &mdash; a non-peptide, orally bioavailable ghrelin mimetic with an ~24-hour half-life that provides a
        sustained 24 h GH/IGF-1 baseline &mdash; with{" "}
        <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
        (a selective injectable GHRP, ~2 h half-life, clean pulsatile trigger). The thesis is that MK-677
        delivers once-daily oral convenience and sustained IGF-1 elevation while Ipamorelin adds a sharper
        pre-bed GH pulse. Both compounds are prohibited by WADA (Section S2) and neither is FDA-approved.
      </>
    ),
  },
  {
    q: "Don't both compounds act on the same receptor? Is there redundancy?",
    a: (
      <>
        Yes &mdash; this is the central mechanistic caveat of this stack. Both MK-677 and Ipamorelin are
        agonists at the <span className="font-semibold">GHS-R1a (ghrelin receptor)</span>. Unlike the{" "}
        <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (CJC-1295 + Ipamorelin)</Link>{" "}
        which hits <span className="italic">two distinct</span> receptor pathways (GHRHR + GHS-R1a) for
        documented supra-additive synergy, MK-677 and Ipamorelin compete for the same receptor. Whether
        Ipamorelin adds meaningful incremental GH output on top of a saturating MK-677 dose is debated in
        the research community. The complementary argument rests on pharmacokinetics rather than mechanism:
        MK-677&apos;s long half-life provides a sustained 24 h baseline elevation, while Ipamorelin&apos;s
        short half-life generates a sharper, more physiologically pulsatile overnight spike. Researchers
        who prioritize dual-pathway synergy should consider{" "}
        <Link href="/peptides/sermorelin-ipamorelin" className="text-[#0891b2] hover:underline">Sermorelin + Ipamorelin</Link>{" "}
        or the{" "}
        <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
        instead.
      </>
    ),
  },
  {
    q: "Why combine MK-677 with Ipamorelin at all if the mechanism overlaps?",
    a: "The rationale is pharmacokinetic rather than mechanistic. MK-677's ~24-hour half-life produces a sustained but blunted trough-to-peak GH profile — it raises the GH/IGF-1 baseline around the clock but does not reliably produce a sharp nocturnal GH spike. Ipamorelin, dosed pre-bed, adds a discrete 1–2 hour GH pulse that mimics the physiological overnight GH surge better than MK-677 alone. In this model, MK-677 handles sustained IGF-1 elevation (anabolic substrate) and Ipamorelin handles pulsatile GH timing (sleep-quality, nocturnal repair). The size of Ipamorelin's additive GH increment on top of MK-677 varies by individual receptor saturation and is not established in controlled human trials.",
  },
  {
    q: "Is MK-677 a peptide?",
    a: (
      <>
        No &mdash; MK-677 (Ibutamoren) is a <span className="font-semibold">non-peptide small molecule</span>{" "}
        that mimics ghrelin and activates the GHS-R1a receptor. It is orally bioavailable (capsule or liquid
        form, no reconstitution required) and does not require refrigeration in its stable dry form. This
        distinguishes it from{" "}
        <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>,
        which is a true peptide: lyophilized, reconstituted with bacteriostatic water, and administered
        by subcutaneous injection. In this stack, MK-677 is oral and Ipamorelin is injectable.
      </>
    ),
  },
  {
    q: "When should each component be taken?",
    a: "MK-677 is most commonly dosed once daily in the evening with or without food — its long half-life makes timing less critical than short-acting peptides, though pre-bed dosing is preferred to ride the natural overnight GH pulse and to manage the appetite increase (it is easier to sleep through than to manage during the day). Ipamorelin is dosed subcutaneously 30–60 minutes before bed on an empty stomach (at least 2 hours after the last meal). Elevated insulin and somatostatin will blunt Ipamorelin's GH response even though MK-677 is less sensitive to meal timing.",
  },
  {
    q: "What are MK-677's notable side effects compared to injectable GHRPs?",
    a: "MK-677's most clinically significant unique side effects are: (1) pronounced increase in appetite — it stimulates ghrelin signaling broadly, not just at the pituitary; (2) water retention and transient edema, often more marked than injectable GHRPs; (3) mild fasting glucose elevation and early insulin resistance from chronic GH counter-regulatory effects; (4) lethargy and morning fatigue, especially early in use. These are more pronounced than the Ipamorelin-only side-effect profile because MK-677 drives sustained 24 h GH/ghrelin activity rather than a brief pulse. Ipamorelin adds mild injection-site reactions and transient head rush. Both are WADA S2 prohibited.",
  },
  {
    q: "How does this stack compare to the GH Stack (CJC-1295 + Ipamorelin)?",
    a: (
      <>
        The core difference is mechanistic. The{" "}
        <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (CJC-1295 no-DAC + Ipamorelin)</Link>{" "}
        activates two distinct receptor pathways &mdash; GHRHR (cAMP/PKA via CJC-1295) and GHS-R1a
        (calcium/PKC via Ipamorelin) &mdash; producing documented supra-additive GH release of 2&ndash;4&times;
        vs monotherapy. MK-677 + Ipamorelin both act on GHS-R1a, so dual-pathway synergy does not apply.
        The practical advantage of MK-677 + Ipamorelin is oral convenience for the baseline compound:
        MK-677 requires no reconstitution, no refrigeration, and no injection. Researchers who want
        dual-pathway synergy should use the GH Stack or{" "}
        <Link href="/peptides/sermorelin-ipamorelin" className="text-[#0891b2] hover:underline">Sermorelin + Ipamorelin</Link>;
        researchers who want oral convenience + injectable pulse triggering may prefer MK-677 + Ipamorelin
        with the overlapping-mechanism caveat clearly in view.
      </>
    ),
  },
];

const studies = [
  {
    title: "Effects of an Oral Growth Hormone Secretagogue (MK-677) on Body Composition and Functional Ability of Older Adults",
    authors: "Nass R, Pezzoli SS, Oliveri MC, et al.",
    journal: "Annals of Internal Medicine",
    year: "2008",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18981485/",
    summary: "A randomized controlled trial of MK-677 (25 mg orally once daily) in healthy adults over 60 years old. MK-677 significantly increased IGF-1 and GH levels, lean body mass, and improved functional measures over a 2-year period, with the most notable effect being sustained IGF-1 elevation comparable to young-adult physiological levels. The study also documented the primary side effects: water retention (transient, resolving within the first few weeks), increased fasting glucose, and fatigue. This is the landmark long-term MK-677 human study and the most-cited reference for the compound's GH/IGF-1 elevation profile in a research context.",
  },
  {
    title: "MK-677, an Orally Active Growth Hormone Secretagogue, Reverses Diet-Induced Catabolism",
    authors: "Murphy MG, Bach MA, Plotkin D, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: "1998",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/9467534/",
    summary: "A placebo-controlled crossover trial demonstrating that MK-677 (25 mg orally) reversed diet-induced protein catabolism in healthy volunteers by increasing GH pulsatility and sustained IGF-1 elevation. The study established MK-677's oral bioavailability, once-daily dosing adequacy, and dose-dependent GH/IGF-1 elevation profile. It confirmed that MK-677 acts through the ghrelin receptor (GHS-R1a) to amplify endogenous GH pulse frequency and amplitude without significantly elevating cortisol or prolactin at standard research doses, providing the mechanistic and pharmacokinetic foundation for its use in research stacks.",
  },
  {
    title: "Ipamorelin, the First Selective Growth Hormone Secretagogue",
    authors: "Raun K, Hansen BS, Johansen NL, et al.",
    journal: "European Journal of Endocrinology",
    year: "1998",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
    summary: "The landmark selectivity study for Ipamorelin &mdash; the injectable component of this stack. Established that Ipamorelin produces robust GH release with approximately 90% less cortisol elevation and no meaningful ACTH or prolactin response compared to older GHRPs (GHRP-2, GHRP-6, Hexarelin). Ipamorelin&apos;s selectivity for GHS-R1a and its short half-life (~2 h) define its role as a pulse trigger: a sharp, clean GH surge without the appetite and cortisol side effects of earlier ghrelin mimetics. This is the key paper distinguishing Ipamorelin&apos;s hormonal profile from that of MK-677 (which drives broader ghrelin signaling and pronounced appetite stimulation).",
  },
  {
    title: "Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development",
    authors: "Ishida J, Saitoh M, Ebner N, et al.",
    journal: "JCSM Rapid Communications",
    year: "2020",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9",
    summary: "A comprehensive review of the GH secretagogue class covering both small-molecule ghrelin mimetics (MK-677/Ibutamoren class) and peptide GHRPs (Ipamorelin class). The paper documents how both act on GHS-R1a and contextualizes the distinction between sustained-elevation secretagogues (oral, long-acting, like MK-677) and pulsatile-trigger secretagogues (injectable, short-acting, like Ipamorelin). It provides the clinical-development history, pharmacodynamic profiles, and the mechanistic overlap discussion that underlies the informed use of GHS-R1a agonist combinations &mdash; the key reference for understanding the redundancy caveat of this stack vs dual-pathway GHRH+GHRP approaches.",
  },
  {
    title: "Two-Month Treatment of Obese Subjects with the Oral Growth Hormone (GH) Secretagogue MK-677 Increases GH Secretion, Fat-Free Mass, and Energy Expenditure",
    authors: "Svensson J, Lönn L, Jansson JO, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: "1998",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/9467542/",
    summary: "A short-term controlled trial of MK-677 in obese subjects documenting significant increases in GH secretion, fat-free mass, and basal metabolic rate over 8 weeks. The study demonstrated that MK-677&apos;s oral route does not compromise efficacy: GH secretion increased by 82% and IGF-1 by 52% vs placebo. The paper also documented MK-677&apos;s effect on insulin sensitivity: fasting insulin and glucose increased, consistent with GH counter-regulation of insulin action. This study underpins the metabolic side-effect warnings for MK-677 that apply equally in the MK-677 + Ipamorelin stack context.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does the MK-677 + Ipamorelin stack work?",
    intro:
      "MK-677 + Ipamorelin combines two GH secretagogues that both act on the ghrelin receptor — but through different pharmacokinetic profiles that researchers argue provide complementary roles. MK-677 is a non-peptide oral ghrelin mimetic with an ~24-hour half-life that sustains GH/IGF-1 elevation around the clock. Ipamorelin is a selective injectable GHRP with an ~2-hour half-life that generates a sharp, pulsatile GH spike. The important mechanistic caveat is that this is a same-receptor stack, not a dual-pathway stack.",
    body: [
      "MK-677 — Sustained Oral GHS-R1a Activation [1][2]. MK-677 (Ibutamoren) is a non-peptide small molecule that mimics ghrelin and binds the GHS-R1a receptor on pituitary somatotrophs. Unlike peptide GHRPs, it is orally bioavailable — absorbed through the gut, no injection required. Its ~24-hour half-life allows once-daily dosing and produces a sustained baseline elevation of both GH pulse amplitude and IGF-1 over 24 h. MK-677 also activates GHS-R1a in the hypothalamus and elsewhere in the body, which is why it drives pronounced appetite stimulation beyond what injectable GHRPs produce.",
      "Ipamorelin — Selective Injectable GHS-R1a Pulse [3]. Ipamorelin selectively binds GHS-R1a on pituitary somatotrophs. Its ~2-hour half-life produces a discrete GH pulse rather than sustained elevation. Ipamorelin's defining feature is hormonal selectivity: GH release without meaningful cortisol, ACTH, or prolactin elevation. Dosed pre-bed, it triggers a sharp nocturnal GH surge that MK-677's sustained, flatter profile does not reliably produce on its own.",
      "Overlapping-Mechanism Caveat [4]. Both MK-677 and Ipamorelin are GHS-R1a agonists — they compete for the same receptor rather than activating complementary pathways. This is mechanistically different from GHRH+GHRP stacks (e.g., CJC-1295 + Ipamorelin) where two distinct receptor-cascade systems converge to produce supra-additive synergy. The incremental GH benefit of adding Ipamorelin on top of MK-677 is not established in controlled human trials and is debated in the research community. Receptor saturation by MK-677 may limit Ipamorelin's additional GH contribution.",
      "Pharmacokinetic Complementarity Argument [4]. The case for this stack rests on kinetics rather than mechanism. MK-677 produces a sustained GH/IGF-1 trough (anabolic substrate, bone density support, fat metabolism) while Ipamorelin adds a sharper nocturnal pulse (sleep-quality improvement, physiological GH-secretion pattern, overnight tissue repair). In this model, MK-677 is the 24 h base layer and Ipamorelin is the pre-bed pulse amplifier.",
      "Downstream IGF-1 Elevation [1][2][5]. Both compounds drive elevated hepatic IGF-1 production via pituitary GH output. MK-677's sustained action typically produces a larger absolute IGF-1 increase (often 40–80% above baseline in human trials at 25 mg daily) than short-acting injectable GHRPs. Combined use does not guarantee proportionally greater IGF-1 elevation given the overlapping receptor target.",
    ],
  },
  {
    id: "research",
    title: "What is MK-677 + Ipamorelin used for?",
    intro:
      "The stack is used for GH-axis research applications where the convenience of once-daily oral MK-677 is valued alongside the clean pulsatile trigger of injectable Ipamorelin. Research applications mirror those of all GH secretagogue stacks — body composition, recovery, sleep quality, and GH-axis support in the context of age-related GH decline.",
    body: [
      "Body Composition [1][2][5]. MK-677 at 25 mg daily has demonstrated significant increases in lean body mass and fat-free mass in human trials. Elevated GH and downstream IGF-1 support lean muscle synthesis, visceral fat metabolism, and overall body recomposition. This is the most-cited use case in the research community for MK-677 specifically.",
      "Sleep Quality [3]. Pre-bed Ipamorelin dosing reinforces the natural overnight GH pulse and is studied for slow-wave sleep enhancement. MK-677 has independently shown increased REM sleep in human studies. Combined pre-bed dosing of both compounds represents the most common research protocol for sleep-quality optimization with GH secretagogues.",
      "Recovery and Tissue Repair. Elevated GH and IGF-1 support faster recovery from exercise-induced muscle damage through enhanced protein synthesis and cellular repair. MK-677's 24 h sustained IGF-1 elevation may provide a more consistent anabolic repair substrate than short-acting injectable stacks that return to baseline between doses.",
      "Anti-Aging and Sarcopenia Prevention [1]. MK-677 has the most robust human data for GH-axis support in older adults. The Nass et al. 2008 trial over 2 years demonstrated sustained IGF-1 elevation comparable to young-adult physiological levels, with significant lean mass preservation and functional improvements in adults over 60. The combination with Ipamorelin for additional pulsatile signaling is a research extrapolation from these individual-compound data.",
      "Anti-Catabolism During Caloric Deficit [2]. Murphy et al. demonstrated MK-677 reverses diet-induced protein catabolism in healthy volunteers. The combination with Ipamorelin is researched for lean-mass preservation during caloric restriction, where sustained IGF-1 elevation helps offset the catabolic signal of negative energy balance.",
    ],
  },
  {
    id: "timeline",
    title: "How long does MK-677 + Ipamorelin take to work?",
    intro:
      "MK-677's effects build faster than injectable GHRH+GHRP stacks because it produces sustained 24 h GH/IGF-1 elevation from day one rather than only spiking around injection times. IGF-1 elevation is measurable within the first week. However, body composition changes remain a multi-month process regardless of secretagogue type.",
    content:
      "Appetite increase and water retention from MK-677 typically appear within the first 1–2 weeks — often before anabolic effects become subjectively noticeable. Sleep quality improvements (from pre-bed Ipamorelin + evening MK-677) often appear within 1–2 weeks. Recovery and subjective performance changes accumulate over 4–8 weeks. Body composition changes (lean mass, fat distribution) require 12–24 weeks of consistent protocol. Standard research cycles for MK-677 run 8–16 weeks with a 4-week minimum off-period; cycles longer than 16 weeks raise insulin-resistance concerns and are generally not recommended without metabolic monitoring. Ipamorelin is cycled identically to other short-acting injectable GHRPs: 8–12 weeks on, 4-week off.",
  },
  {
    id: "dosing",
    title: "How is MK-677 + Ipamorelin dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          This stack is unique among GH secretagogue blends because one component (MK-677) is oral and the
          other (Ipamorelin) is injectable. The two components are dosed independently on separate schedules.
        </p>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          MK-677 (oral):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dose.</span> 10&ndash;25 mg orally once daily. 10 mg is the typical starting dose; 25 mg is the most-studied dose in human clinical trials. Most researchers start at 10&ndash;12.5 mg and titrate upward over 2&ndash;4 weeks based on appetite and water retention tolerance.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing.</span> Once daily, typically in the evening or before bed. Evening dosing helps manage appetite stimulation (sleeping through the peak appetite window) and aligns with the natural nocturnal GH pulse.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Food.</span> MK-677 may be taken with or without food &mdash; unlike injectable GHRPs, its oral GH response is less suppressed by elevated insulin.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Form.</span> Capsule or oral liquid (no reconstitution required, no injection, no bacteriostatic water). Stored at room temperature in dry stable form.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle.</span> 8&ndash;16 weeks active, 4-week minimum off-period. Longer cycles increase insulin-resistance risk &mdash; fasting glucose monitoring is recommended during cycles exceeding 12 weeks.</li>
        </ol>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-3">
          Ipamorelin (subcutaneous injectable):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dose.</span> 200&ndash;300 mcg subcutaneously per injection. Start at 200 mcg and titrate to 300 mcg if tolerated.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Frequency.</span> 1&ndash;2&times; daily. Pre-bed (30&ndash;60 min before sleep, empty stomach) is the primary dose. Some researchers add a second dose post-workout.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing constraint.</span> Empty stomach for at least 2 hours before injection &mdash; elevated insulin and somatostatin blunt the Ipamorelin GH response.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> Lyophilized vial; reconstitute with bacteriostatic water for injection (BAC water). Swirl gently, do not shake.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle.</span> 8&ndash;12 weeks active, 4-week minimum off-period.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Ipamorelin reconstitution math (5 mg vial)
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            All units refer to a U-100 insulin syringe (100 units = 1 mL). MK-677 requires no syringe &mdash; it is swallowed as a capsule or measured oral liquid.
          </p>
        </div>
        <div className="overflow-x-auto -mx-4 sm:mx-0 pt-2">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Conc. (5 mg vial)</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">200 mcg</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">250 mcg</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">300 mcg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL (5,000 mcg/mL)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL (2,500 mcg/mL)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">8 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL (1,667 mcg/mL)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">18 units</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          For 2 mg Ipamorelin vials or non-standard sizes, use the{" "}
          <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator</Link>{" "}
          for accurate reconstitution math.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Neither MK-677 nor Ipamorelin is FDA-approved. Research doses are derived from each compound&apos;s
          individual clinical and preclinical literature &mdash; there are no controlled trials of the combination
          as a defined product.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your Ipamorelin dose? Use the{" "}
          <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is MK-677 + Ipamorelin administered?",
    intro:
      "MK-677 is oral — taken as a capsule or oral liquid once daily, typically in the evening. Ipamorelin is administered by subcutaneous injection using a small insulin syringe, pre-bed on an empty stomach. This is a split-route protocol: one compound is swallowed, the other is injected.",
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed font-semibold text-[#1e2d3d] dark:text-slate-100">
          MK-677 (oral):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Oral capsule or liquid. No reconstitution, no injection equipment, no bacteriostatic water required.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing.</span> Once daily in the evening or before bed. Meal timing matters less than for injectable GHRPs &mdash; MK-677 can be taken with food if appetite management is a concern, though empty-stomach dosing maximizes GH response.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Appetite management.</span> MK-677&apos;s pronounced appetite stimulation is the most common tolerability challenge. Pre-bed dosing helps &mdash; sleeping through the appetite peak is easier than managing it during the day. Starting at 10 mg allows assessment of appetite response before dose escalation.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Ipamorelin (subcutaneous injection):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites: abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, back of upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Pre-bed, 30&ndash;60 minutes before sleep, on an empty stomach (2+ hours after last meal).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Empty stomach.</span> Critical for Ipamorelin: elevated insulin and somatostatin blunt the GH response. MK-677&apos;s oral dose (taken earlier in the evening) does not block Ipamorelin&apos;s injectable response because MK-677&apos;s GHS-R1a action precedes the injection window.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Alternate injection sites each dose. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> Use bacteriostatic water for injection (BAC water). Swirl gently &mdash; do not shake &mdash; to avoid damaging the lyophilized peptide. Reconstituted solution: refrigerate at 2&ndash;8&deg;C and use within 30 days.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed Ipamorelin dose.</span> Resume on the next scheduled dose. Do not double-dose. MK-677&apos;s 24 h half-life means missing a single MK-677 oral dose has minimal impact on the overall GH/IGF-1 baseline.</li>
        </ol>

        <div className="overflow-x-auto -mx-4 sm:mx-0 pt-2">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">MK-677</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Ipamorelin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Route</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Oral (capsule or liquid)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Subcutaneous injection</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1&ndash;2&times; daily</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Timing</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Evening / pre-bed (with or without food)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Pre-bed, empty stomach (2 h post-meal)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~24 hours (sustained baseline)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~2 hours (acute pulse)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Reconstitution</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not required</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">BAC water; refrigerate after reconstitution</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycle length</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">8&ndash;16 weeks on, 4-week off</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">8&ndash;12 weeks on, 4-week off</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does MK-677 + Ipamorelin stack well with?",
    intro:
      "The stack pairs well with tissue-repair peptides and resistance training. Avoid adding any other GH secretagogue — this stack already applies dual GHS-R1a stimulation (MK-677 + Ipamorelin), and a third GH-axis compound adds side-effect burden without a proportional benefit ceiling. Researchers seeking dual-pathway GH amplification should use the GH Stack or Sermorelin + Ipamorelin instead of adding a GHRH analog on top of this combination.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Tissue-repair peptides.</span>{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
          +{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
          for combined local + systemic tissue repair. MK-677&apos;s sustained IGF-1 elevation provides a consistent anabolic repair substrate that amplifies the local effects of healing peptides.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Resistance training + adequate protein.</span> Required for GH-mediated anabolic effect. MK-677&apos;s lean-mass and anti-catabolic effects in human trials were observed with adequate protein intake. Recommended: 1.2&ndash;1.6 g protein per kg body weight throughout the research cycle.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Metabolic monitoring.</span> Not a stack partner &mdash; a required co-intervention. MK-677&apos;s insulin-resistance effect warrants fasting glucose monitoring (and optionally HbA1c) during cycles exceeding 8 weeks, especially in pre-diabetic or insulin-resistant subjects.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Consider switching to a dual-pathway alternative.</span> Researchers who want supra-additive dual-pathway GH synergy can substitute MK-677 with a GHRH analog: the{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (CJC-1295 + Ipamorelin)</Link>{" "}
          or{" "}
          <Link href="/peptides/sermorelin-ipamorelin" className="text-[#0891b2] hover:underline">Sermorelin + Ipamorelin</Link>{" "}
          both hit GHRHR + GHS-R1a for documented supra-additive synergy. The trade-off is losing MK-677&apos;s oral route.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: additional GH secretagogues.</span> Adding{" "}
          <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>,{" "}
          <Link href="/peptides/sermorelin" className="text-[#0891b2] hover:underline">Sermorelin</Link>,{" "}
          or any GHRP on top of this stack compounds side effects (appetite, water retention, insulin resistance, IGF-1 overshoot) without a clear incremental benefit ceiling.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: direct HGH.</span> MK-677&apos;s sustained IGF-1 elevation plus exogenous HGH risks supraphysiological IGF-1 levels and accelerated insulin resistance. Avoid combination.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of MK-677 + Ipamorelin?",
    intro:
      "MK-677's side-effect profile dominates this stack because its sustained 24 h GHS-R1a activity produces broader effects than short-acting injectable GHRPs. Ipamorelin's selectivity (no cortisol, no prolactin) limits its contribution to mild injection-site reactions and transient flushing. The main clinically significant concern unique to MK-677 is metabolic: appetite stimulation, water retention, and insulin resistance are more pronounced and sustained than with injectable GHRP stacks.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Increased appetite (MK-677).</span> The most common and often most disruptive side effect. MK-677 activates ghrelin signaling broadly &mdash; not only at the pituitary but also in the hypothalamus and gut. Appetite stimulation can be pronounced, especially in the first 1&ndash;4 weeks. Pre-bed dosing and dietary planning are the primary management strategies.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Water retention / edema (MK-677).</span> Often more marked than with injectable GH secretagogue stacks. Reflects GH-mediated sodium and water retention. Typically peaks in the first 2&ndash;4 weeks and partially resolves with continued use; fully resolves on cycle-off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Lethargy / morning fatigue (MK-677).</span> Reported early in cycles, especially at higher doses (25 mg). Usually improves after 1&ndash;2 weeks. Pre-bed dosing helps by allowing the peak lethargic effect to occur during sleep.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection-site reactions (Ipamorelin).</span> Mild redness, irritation, or transient pinkness at the subcutaneous injection site. Managed with site rotation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient flushing / head rush (Ipamorelin).</span> Most common with the first few doses. Typically resolves within 1&ndash;2 weeks of continued use.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fasting glucose elevation (MK-677).</span> GH counter-regulates insulin &mdash; sustained 24 h GH elevation from MK-677 can progressively raise fasting glucose. More clinically significant than with short-acting injectable stacks. Fasting glucose monitoring is recommended during MK-677 cycles, particularly beyond 8 weeks.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Numbness / tingling in hands.</span> Mild carpal-tunnel-like sensations from GH-related fluid retention. More common at higher MK-677 doses (25 mg). Resolves on cycle-off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Typically mild, more common during dose titration for both compounds.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vivid dreams / disrupted sleep onset.</span> Reported with pre-bed dosing of GH secretagogues. Usually adapts within 1&ndash;2 weeks. MK-677 has independently increased REM sleep duration in some studies, which some researchers report as a benefit.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare or theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Insulin resistance with chronic use (MK-677).</span> The most clinically significant concern unique to MK-677. Sustained 24 h GH counter-regulation of insulin can produce progressive insulin resistance with prolonged cycles. Svensson et al. 1998 documented increased fasting insulin and glucose in obese subjects at 8 weeks; Nass et al. 2008 noted the same over 2 years. At-risk subjects (pre-diabetic, metabolic syndrome) should exercise particular caution and monitor fasting glucose.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pituitary receptor desensitization.</span> Continuous dual GHS-R1a stimulation from MK-677 (24 h) + Ipamorelin (daily pulse) may accelerate receptor desensitization compared to shorter-acting stacks. Standard cycling (off-periods) is the mitigation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical mitogenic risk.</span> Chronic elevated IGF-1 has theoretical tumor-stimulation associations from epidemiological data. MK-677&apos;s sustained IGF-1 elevation profile raises this concern more than short-acting stacks. No direct causal signal has appeared in MK-677 human trial data.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-doping prohibition.</span> Both MK-677 and Ipamorelin are on the WADA prohibited list (Section S2, peptide hormones and growth factors). Tested athletes should not use this stack in any form.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The appetite stimulation and insulin-resistance profile of MK-677 is the most important differentiator
          from injectable GHRH+GHRP stacks. Researchers who want GH-axis support with a cleaner metabolic
          profile should consider the{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (CJC-1295 + Ipamorelin)</Link>{" "}
          or{" "}
          <Link href="/peptides/sermorelin-ipamorelin" className="text-[#0891b2] hover:underline">Sermorelin + Ipamorelin</Link>{" "}
          instead.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does MK-677 + Ipamorelin interact with other drugs?",
    intro:
      "MK-677's sustained GH/ghrelin activity creates more drug-interaction surface than short-acting injectable GHRPs. The most clinically significant interaction is with insulin and hypoglycemic agents. Ipamorelin adds relatively few independent interaction concerns beyond GH-axis effects shared with MK-677.",
    body: [
      "Insulin and oral hypoglycemics. MK-677's sustained GH counter-regulation of insulin is the most material interaction. Users on insulin, metformin, sulfonylureas, or GLP-1 agonists may need dose adjustments. Fasting glucose monitoring is strongly recommended. This concern is amplified compared to short-acting GHRP stacks because MK-677 produces 24 h GH elevation rather than a brief pulse.",
      "Corticosteroids. Chronic corticosteroid use can suppress the GH axis at the pituitary level, potentially blunting the GH response to both MK-677 and Ipamorelin. No acute safety concern documented, but efficacy may be reduced.",
      "Levothyroxine. GH-axis activation can shift T4-to-T3 conversion. MK-677's sustained GH elevation may produce a larger shift in thyroid hormone balance than short-acting stacks. Users on thyroid replacement medication should monitor adequacy during MK-677 cycles.",
      "Other GH-axis compounds. Adding HGH, IGF-1 LR3, or additional GH secretagogues to this stack risks supraphysiological IGF-1 levels and compounded insulin resistance. Avoid all additional GH-axis compounds.",
      "CYP3A4 substrates. MK-677 is metabolized primarily via CYP3A4. Co-administration with strong CYP3A4 inhibitors (ketoconazole, clarithromycin) may increase MK-677 exposure; inducers (rifampicin, carbamazepine) may reduce it. Ipamorelin does not share this metabolic pathway.",
      "Component-level interactions. Cross-reference the MK-677 and Ipamorelin individual peptide pages for full per-compound interaction details.",
    ],
  },
  {
    id: "storage",
    title: "How should MK-677 + Ipamorelin be stored?",
    body: [
      "MK-677 (oral capsule/liquid): Store at room temperature (15–25°C) in a dry, dark location. Dry capsule form is stable at room temperature; oral liquid formulations may require refrigeration — check vendor specification.",
      "Ipamorelin lyophilized (powder) form: -20°C long-term, 2–8°C short-term (refrigerated). Protect from light.",
      "Ipamorelin reconstituted solution: 2–8°C, use within 30 days of reconstitution.",
      "Reconstitution (Ipamorelin only): Use bacteriostatic water for injection (BAC water). Swirl gently — do not shake — to avoid damaging the lyophilized peptide.",
      "Do not freeze reconstituted Ipamorelin solution. Freezing damages the peptide structure and renders it inactive.",
      "Discard Ipamorelin if the reconstituted solution is cloudy, discolored, or contains visible particles.",
      "MK-677 requires no reconstitution or cold chain. Ipamorelin requires full peptide storage and reconstitution protocol.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of MK-677 + Ipamorelin research?",
    intro:
      "The combination has no controlled clinical trial as a defined product. MK-677 has the most robust individual human trial data of any GH secretagogue (including a 2-year RCT), but the additive benefit of Ipamorelin on top of MK-677 has not been studied in a controlled trial. The mechanistic overlap between the two compounds (both GHS-R1a agonists) is the fundamental limitation of this stack vs GHRH+GHRP alternatives.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The MK-677 + Ipamorelin combination is NOT FDA-approved. MK-677 is a research chemical (not
          approved for any human use in any jurisdiction). Ipamorelin is research-grade only. Neither
          compound has a compounding-pharmacy approval pathway comparable to Sermorelin or Tesamorelin.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The core research limitation is the <span className="font-semibold">same-receptor mechanism</span>:
          both compounds act on GHS-R1a, so the dual-pathway supra-additive GH synergy documented for
          GHRH+GHRP stacks does not apply. Whether Ipamorelin adds meaningful incremental GH output on
          top of MK-677&apos;s sustained GHS-R1a activation is not established in controlled human data.
          The pharmacokinetic complementarity argument (sustained baseline + acute pulse) is biologically
          plausible but unvalidated in head-to-head comparison with dual-pathway alternatives.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          MK-677&apos;s metabolic side-effect profile (insulin resistance, fasting glucose elevation) is
          the most studied concern in this compound class. The Nass et al. 2008 two-year RCT documented
          sustained insulin resistance as an adverse finding. Researchers with pre-existing metabolic
          risk should consider dual-pathway injectable stacks (GH Stack or Sermorelin + Ipamorelin)
          that do not carry MK-677&apos;s chronic insulin-sensitivity burden.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: Both MK-677 and Ipamorelin are on the WADA prohibited list (Section S2,
          peptide hormones and growth factors). Tested athletes must not use this stack in any form.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source MK-677 + Ipamorelin",
    intro:
      "Neither MK-677 nor Ipamorelin is FDA-approved and both are sold for laboratory research use only. MK-677 is typically sold as oral capsules or liquid; Ipamorelin as lyophilized vials. The vendors highlighted below carry both compounds and have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners" },
            { slug: "spartan-peptides", note: "Carries MK-677 and Ipamorelin" },
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
    title: "MK-677 + Ipamorelin FAQ",
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
          Nass R, Pezzoli SS, Oliveri MC, et al. Effects of an oral ghrelin mimetic on body composition and
          clinical outcomes in healthy older adults. Ann Intern Med. 2008;149(9):601-611.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18981485/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18981485/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Murphy MG, Bach MA, Plotkin D, et al. Oral administration of the growth hormone secretagogue
          MK-677 increases markers of bone turnover in obese and functionally impaired elderly adults.
          J Clin Endocrinol Metab. 1998;84(3):946-952.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10404019/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/10404019/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Raun K, Hansen BS, Johansen NL, et al. Ipamorelin, the first selective growth hormone secretagogue.
          Eur J Endocrinol. 1998;139(5):552-561.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9849822/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9849822/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ishida J, Saitoh M, Ebner N, et al. Growth hormone secretagogues: history, mechanism of action,
          and clinical development. JCSM Rapid Commun. 2020;3(1):25-37.{" "}
          <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Svensson J, L&ouml;nn L, Jansson JO, et al. Two-month treatment of obese subjects with the oral
          growth hormone (GH) secretagogue MK-677 increases GH secretion, fat-free mass, and energy
          expenditure. J Clin Endocrinol Metab. 1998;83(2):362-369.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9467542/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9467542/
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
          The MK-677 + Ipamorelin combination has no controlled trial as a single product. MK-677 has the
          most robust individual human trial data of any GH secretagogue &mdash; including a 2-year RCT
          (Nass et al.) &mdash; while Ipamorelin&apos;s selectivity is established in Raun et al. 1998.
          The studies below are the key peer-reviewed sources for each compound and for the GH-secretagogue
          class mechanistic context.
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

export default function MK677IpamorelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"MK-677 + Ipamorelin","description":"MK-677 + Ipamorelin research profile: oral ghrelin-mimetic baseline plus injectable selective GHRP pulse trigger. Overlapping GHS-R1a mechanism, dosing protocol, side effects, FAQ.","url":"https://profpeptide.com/peptides/mk-677-ipamorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"MK-677 + Ipamorelin"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">MK-677 + Ipamorelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">Research-Grade</span>
        <span className="tag">Combination Blend</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 29, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Ibutamoren + Ipamorelin Stack, MK-677 / Ipa Blend, Oral GH Secretagogue Stack
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Growth Hormone Secretagogue Blend &mdash; Non-peptide GHS-R1a mimetic (MK-677, oral) + Selective GHRP (Ipamorelin, injectable)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research-grade only; both WADA S2 prohibited
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is MK-677 + Ipamorelin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            MK-677 + Ipamorelin is a GH secretagogue stack combining{" "}
            <Link href="/peptides/mk-677" className="text-[#0891b2] hover:underline">MK-677 (Ibutamoren)</Link>{" "}
            &mdash; a non-peptide, orally bioavailable ghrelin mimetic with an ~24-hour half-life &mdash; and{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
            (a selective injectable GHRP, ~2-hour half-life). MK-677 provides a sustained 24 h baseline elevation of
            GH/IGF-1 via once-daily oral dosing; Ipamorelin adds a sharp, clean pre-bed pulsatile GH spike via
            subcutaneous injection. The stack&apos;s primary appeal is oral convenience for the baseline compound.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Key mechanistic caveat:</span> Unlike the{" "}
            <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (CJC-1295 + Ipamorelin)</Link>{" "}
            or{" "}
            <Link href="/peptides/sermorelin-ipamorelin" className="text-[#0891b2] hover:underline">Sermorelin + Ipamorelin</Link>{" "}
            &mdash; which each combine a GHRH analog (GHRHR pathway) with a GHRP (GHS-R1a pathway) for documented
            supra-additive dual-pathway synergy &mdash; MK-677 and Ipamorelin both act on the <span className="font-semibold">same GHS-R1a receptor</span>.
            This means dual-pathway synergy does not apply; the two compounds compete at the ghrelin receptor rather than
            amplifying two distinct cascades. Whether Ipamorelin&apos;s acute pulse adds meaningful incremental GH output
            on top of MK-677&apos;s sustained GHS-R1a activation is debated. The complementary argument is pharmacokinetic:
            MK-677 delivers a sustained 24 h base and Ipamorelin delivers a sharper nocturnal pulse.
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
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sustained 24 h GH/IGF-1 baseline elevation via once-daily oral MK-677 (no injection required for the baseline component)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Acute pulsatile pre-bed GH spike via Ipamorelin (clean hormonal profile &mdash; no cortisol, prolactin, or ACTH elevation)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Robust IGF-1 elevation supporting lean-mass synthesis, anti-catabolism, and fat metabolism (most established for MK-677 monotherapy in human RCTs)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sleep-quality improvement through GH-mediated nocturnal pulse reinforcement (both compounds active pre-bed)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-catabolic effect during caloric restriction (demonstrated for MK-677 alone; Ipamorelin contribution additive by pharmacokinetic argument)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span>{" "}
            MK-677 10&ndash;25 mg orally once daily (evening/pre-bed) + Ipamorelin 200&ndash;300 mcg subcutaneously
            1&ndash;2&times; daily (primarily pre-bed, empty stomach). MK-677 requires no reconstitution; Ipamorelin
            requires lyophilized vial reconstitution with bacteriostatic water.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Typically sold as
            separate products &mdash; MK-677 as oral capsules or liquid, Ipamorelin as lyophilized injectable vial.
            Neither is FDA-approved. See{" "}
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
        {["GH Axis", "Growth Hormone Secretagogue", "Recovery", "Combination Blend", "Oral + Injectable"].map((tag) => (
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
          <Link href="/peptides/mk-677" className="text-sm font-medium text-[#0891b2] hover:underline">MK-677</Link>
          <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
          <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295</Link>
          <Link href="/peptides/sermorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Sermorelin</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/peptides/gh-stack" className="text-sm font-medium text-[#0891b2] hover:underline">GH Stack (CJC-1295 + Ipamorelin)</Link>
          <Link href="/peptides/sermorelin-ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Sermorelin + Ipamorelin</Link>
          <Link href="/peptides/cjc-1295-dac-ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295 DAC + Ipamorelin</Link>
        </div>
      </div>

      <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          Need to calculate a dose?
        </p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate Ipamorelin reconstitution
          and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>

      <PageDisclaimer />
      <ContactLink pageName="MK-677 + Ipamorelin" pagePath="/peptides/mk-677-ipamorelin" />
    </div>
    </>
  );
}
