import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/tesamorelin-ipamorelin",
  title: "Tesamorelin + Ipamorelin Stack — Visceral-Fat & GH-Axis Research Profile | Prof. Peptide",
  description:
    "Tesamorelin + Ipamorelin research profile: FDA-referenced GHRH analog + selective GHRP dual-pathway blend, visceral-fat reduction angle, IGF-1 elevation, dosing protocol, side effects, FAQ.",
});

const faqs = [
  {
    q: "What is the Tesamorelin + Ipamorelin stack?",
    a: (
      <>
        The Tesamorelin + Ipamorelin stack is a 2-component growth hormone secretagogue blend:{" "}
        <Link href="/peptides/tesamorelin" className="text-[#0891b2] hover:underline">Tesamorelin</Link>{" "}
        (a stabilized GHRH analog — the GHRH-pathway partner) +{" "}
        <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
        (a selective GHS-R1a / ghrelin receptor agonist — the pulse trigger). Together they stimulate growth hormone release through two distinct pituitary receptor pathways simultaneously, producing supra-additive GH output in a pulsatile pattern. The distinguishing angle of this stack versus other GH secretagogue blends is Tesamorelin&apos;s FDA-approved visceral adipose tissue (VAT) reduction data — making it the GH-axis blend with the strongest clinical evidence base for body-composition and visceral-fat-focused research.
      </>
    ),
  },
  {
    q: "Is Tesamorelin FDA-approved? What is Egrifta?",
    a: (
      <>
        Yes — Tesamorelin is FDA-approved as <span className="font-semibold">Egrifta</span> (tesamorelin acetate for injection) for the reduction of excess abdominal fat in HIV-infected patients with lipodystrophy. This makes it the only GHRH analog with a formal FDA approval for visceral adipose tissue (VAT) reduction. The pivotal trials (Falutz et al., NEJM 2010; JAIDS follow-ups) demonstrated significant VAT reduction and IGF-1 elevation over 26 weeks versus placebo. Research-grade Tesamorelin sold by specialty peptide vendors is <span className="font-semibold">not</span> the approved Egrifta product — it is lyophilized peptide manufactured for laboratory use only, without pharmaceutical-grade manufacturing controls or approved clinical indication. The FDA approval provides a mechanistic and safety reference class, not regulatory cover for research-grade product use.
      </>
    ),
  },
  {
    q: "How does this stack compare to the GH Stack (CJC-1295 + Ipamorelin)?",
    a: (
      <>
        Both stacks use the same dual-pathway architecture: a GHRH analog (GHRHR activation) + Ipamorelin (GHS-R1a activation). The key differences are the GHRH-pathway component. The{" "}
        <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
        uses CJC-1295 (no-DAC, ~30 min half-life) — a research-grade GHRH analog with no approved clinical use. This stack uses Tesamorelin (~26 min half-life) — an FDA-approved GHRH analog with documented VAT-reduction and IGF-1-elevation data from human randomized controlled trials. The trade-off: Tesamorelin carries the strongest clinical evidence base for visceral-fat-focused body composition work, while CJC-1295 (no-DAC or with DAC) offers more dosing-frequency flexibility and is more widely available pre-blended. Both are WADA S2 prohibited. Researchers with a visceral-fat-reduction primary endpoint should favor this stack; researchers primarily targeting GH-axis recovery or sleep quality can use the GH Stack equivalently.
      </>
    ),
  },
  {
    q: "Why is Ipamorelin the preferred GHRP partner for Tesamorelin?",
    a: "Ipamorelin is selective for the ghrelin / GHS-R1a receptor — it triggers GH release without meaningfully elevating cortisol, ACTH, prolactin, FSH, LH, or TSH. Older GHRPs (GHRP-2, GHRP-6, Hexarelin) produced GH release but also drove cortisol and appetite increases, which undercut the clean hormonal profile that makes a GHRH+GHRP stack useful for metabolic research. Ipamorelin&apos;s selectivity means the combination preserves Tesamorelin&apos;s clinical hormonal profile — GH and IGF-1 elevation without confounding cortisol elevation — making it the appropriate GHS-R1a partner.",
  },
  {
    q: "When should Tesamorelin + Ipamorelin be dosed?",
    a: "Pre-bed dosing on an empty stomach is the standard research protocol. Growth hormone naturally pulses during slow-wave sleep, and both Tesamorelin and Ipamorelin injected 30–60 minutes before bed reinforce that overnight GH pulse. An empty stomach (at least 2 hours after the last meal) is the most important timing constraint — elevated insulin and somatostatin from a recent meal will blunt the GH response. The Egrifta prescribing information notes once-daily subcutaneous dosing; the same once-daily structure is the canonical research-grade protocol.",
  },
  {
    q: "How long does it take to see visceral-fat changes?",
    a: "In the pivotal Falutz et al. human RCTs, statistically significant VAT reduction versus placebo emerged at 26 weeks. Shorter research cycles (8–12 weeks) may show measurable IGF-1 elevation and subjective body-composition changes (bloat reduction, improved definition) before imaging-confirmed VAT changes are quantifiable. Sleep quality improvements often appear within 1–2 weeks. Body-composition changes measurable by DEXA or trunk-fat assessments typically require 12–24 weeks of consistent daily dosing.",
  },
  {
    q: "What are the most important side effects to monitor?",
    a: (
      <>
        The Tesamorelin clinical trial data (Egrifta prescribing information; Falutz 2010 NEJM) documented several effects worth monitoring: arthralgia (joint pain) and peripheral edema (fluid retention) — more common with Tesamorelin than with shorter-half-life GHRH analogs in some trials. Transient fasting glucose elevation and insulin sensitivity changes are class effects of GH-axis stimulation. IGF-1 elevation should be tracked — the Egrifta label recommends IGF-1 monitoring during therapy. Numbness and tingling (carpal-tunnel-like) from GH-related fluid retention is reported. Injection-site reactions (redness, irritation) are the most common local effect. Both Tesamorelin and Ipamorelin are WADA S2 prohibited — tested athletes should not use this stack. See the full{" "}
        <Link href="/peptides/tesamorelin" className="text-[#0891b2] hover:underline">Tesamorelin profile</Link>{" "}
        and{" "}
        <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin profile</Link>{" "}
        for per-component detail.
      </>
    ),
  },
];

const studies = [
  {
    title: "Metabolic Effects of a Growth Hormone-Releasing Factor in Patients with HIV",
    authors: "Falutz J, Allas S, Blot K, et al.",
    journal: "New England Journal of Medicine",
    year: "2007",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18057338/",
    summary: "One of the pivotal Phase 3 RCTs supporting Tesamorelin&apos;s FDA approval as Egrifta. Tesamorelin 2 mg SC once daily produced significant visceral adipose tissue (VAT) reduction vs placebo over 26 weeks, with accompanying IGF-1 elevation. Provides the strongest human RCT evidence base for Tesamorelin&apos;s VAT-reduction mechanism — the distinguishing clinical angle for this blend versus other GH secretagogue stacks. Reported adverse events included arthralgia, peripheral edema, and transient glucose effects, establishing the safety reference class for this component.",
  },
  {
    title: "Tesamorelin, a GHRH Analog, Reduces Visceral Fat and IGF-1 in HIV-Associated Lipodystrophy: Earlier Phase Data",
    authors: "Falutz J, Allas S, Mamputu J-C, et al.",
    journal: "AIDS",
    year: "2008",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18690162/",
    summary: "Phase 2 data establishing Tesamorelin&apos;s dose-dependent VAT reduction and IGF-1 elevation in HIV-associated lipodystrophy — the mechanistic foundation for the FDA approval and the primary human evidence for Tesamorelin&apos;s GHRH-receptor-driven body-composition effect. Confirms that once-daily SC dosing produces pulsatile GH release with downstream metabolic effects on visceral fat distinct from direct HGH administration.",
  },
  {
    title: "Ipamorelin, the First Selective Growth Hormone Secretagogue",
    authors: "Raun K, Hansen BS, Johansen NL, et al.",
    journal: "European Journal of Endocrinology",
    year: "1998",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
    summary: "The landmark selectivity study for Ipamorelin — the GHRP component of this stack. Established that Ipamorelin produces robust GH release with approximately 90% less cortisol elevation and no meaningful ACTH or prolactin response compared to older GHRPs (GHRP-2, GHRP-6, Hexarelin). This clean hormonal profile is why Ipamorelin became the default GHRP for stacking with GHRH analogs — it adds GH pulse triggering through the ghrelin receptor without cortisol and appetite side effects. Combined with Tesamorelin&apos;s documented VAT-reduction data, Ipamorelin&apos;s selectivity makes this the cleanest dual-pathway GH blend for metabolic research.",
  },
  {
    title: "Growth Hormone Secretagogues: History, Mechanism of Action, and Clinical Development",
    authors: "Ishida J, Saitoh M, Ebner N, et al.",
    journal: "JCSM Rapid Communications",
    year: "2020",
    access: "Open Access",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9",
    summary: "A comprehensive review of the GH secretagogue class providing clinical context for GHRH analog + GHRP combination strategies. The paper covers the mechanistic rationale for dual-pathway GH-axis activation, documenting how simultaneous GHRH receptor (cAMP/PKA) and GHS-R1a (calcium/PKC) activation produces supra-additive GH release and why this approach is preferred over direct HGH administration for preserving physiological feedback regulation. Tesamorelin is discussed as the most clinically validated GHRH analog for body-composition endpoints.",
  },
  {
    title: "GH-Releasing Peptide Stimulates GH Release in Normal Men and Acts Synergistically with GH-Releasing Hormone",
    authors: "Bowers CY, Reynolds GA, Durham D, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: "1990",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/2108187/",
    summary: "Mechanistic study demonstrating supra-additive GH release when GHRH analogs and GHSR (ghrelin receptor) agonists are co-administered — the scientific foundation for any GHRH analog + GHRP blend including Tesamorelin + Ipamorelin. Co-administration produced 2–4× greater GH area under the curve compared to either compound alone. The cAMP pathway (Tesamorelin / GHRHR) and the calcium/PKC pathway (Ipamorelin / GHS-R1a) converge at the somatotroph, where simultaneous activation amplifies the secretory response beyond what either signal produces alone.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Tesamorelin + Ipamorelin work?",
    intro:
      "Tesamorelin + Ipamorelin combines two peptides that hit the same pituitary gland through different receptor doors. Tesamorelin is a stabilized GHRH analog — it activates the GHRH receptor on pituitary somatotrophs, the same receptor the body&apos;s natural growth hormone-releasing hormone uses. Ipamorelin is a selective GHRP (growth hormone-releasing peptide), activating the ghrelin / GHS-R1a receptor on the same cells. When both receptors fire simultaneously, the pituitary releases more GH than either signal triggers alone — in a pulsatile pattern that mirrors physiological GH secretion rather than producing a sustained, supraphysiological flood.",
    body: [
      "Tesamorelin — GHRH Pathway Activation [1][2]. Tesamorelin is a modified form of GHRH(1-44) with a trans-3-hexadecanoic acid moiety attached to the N-terminal tyrosine, which stabilizes the peptide against dipeptidyl peptidase IV (DPP-IV) degradation and extends its plasma half-life to approximately 26 minutes — longer than native GHRH but shorter than CJC-1295 no-DAC. It binds the GHRH receptor on anterior pituitary somatotrophs, triggering a Gs-coupled cAMP/PKA cascade that drives GH gene transcription and primes the somatotroph for GH release. The downstream IGF-1 elevation and VAT-reduction effects are documented in human Phase 2/3 trials (Egrifta). Both peptides are short-acting, producing pulsatile GH release rather than a sustained, non-pulsatile GH elevation.",
      "Ipamorelin — GHS-R1a Pathway Activation [3]. Ipamorelin selectively activates the growth hormone secretagogue receptor (GHS-R1a, the ghrelin receptor) on the same pituitary somatotrophs. Activation triggers a Gq-coupled phospholipase C / IP3 / calcium / PKC cascade that drives immediate GH release. Ipamorelin&apos;s half-life is approximately 2 hours. Its defining feature is selectivity: it triggers GH release without meaningfully elevating cortisol, ACTH, prolactin, FSH, LH, or TSH — distinguishing it from older GHRPs and making it the preferred GHRP partner for metabolic research stacks.",
      "Dual-Pathway Synergy [4][5]. Simultaneous GHRHR activation (cAMP/PKA cascade from Tesamorelin) and GHS-R1a activation (calcium/PKC cascade from Ipamorelin) converge at the somatotroph secretory machinery. The two second-messenger cascades amplify each other — co-administration produces 2–4× greater GH area under the curve than either compound alone. This supra-additive synergy is the core rationale for combining any GHRH analog with a GHRP.",
      "Visceral Adipose Tissue (VAT) Reduction — the Tesamorelin Angle [1][2]. The GH-axis activation produced by Tesamorelin drives lipolysis in visceral adipose tissue through the GH receptor / JAK2-STAT5 pathway in adipocytes. Tesamorelin&apos;s FDA approval for HIV-associated lipodystrophy is specifically for VAT reduction — a body-composition endpoint not formally validated for other research-grade GHRH analogs. The addition of Ipamorelin&apos;s GH pulse trigger amplifies the total GH AUC, potentially enhancing the VAT-metabolizing signal beyond Tesamorelin monotherapy.",
      "Downstream IGF-1 Elevation [1][4]. Increased pituitary GH output drives elevated hepatic IGF-1 production. The Egrifta trials documented mean IGF-1 elevation of approximately 60–80% above baseline at the 2 mg dose. IGF-1 carries most of the systemic anabolic and tissue-repair effects — lean mass support, recovery, connective tissue maintenance. Monitoring IGF-1 during research cycles is recommended; the Egrifta prescribing label explicitly recommends IGF-1 monitoring.",
    ],
  },
  {
    id: "research",
    title: "What is Tesamorelin + Ipamorelin used for?",
    intro:
      "This is the GH-axis blend with the strongest clinical evidence base for visceral-fat reduction and body-composition research. Where the GH Stack (CJC-1295 + Ipamorelin) and Sermorelin + Ipamorelin are positioned for general GH-axis recovery and anti-aging research, Tesamorelin + Ipamorelin carries specific, human RCT-validated data for VAT reduction — the primary differentiating angle for this combination.",
    body: [
      "Visceral Fat Reduction (VAT) [1][2]. Tesamorelin&apos;s pivotal RCTs demonstrated statistically significant VAT reduction vs placebo over 26 weeks at 2 mg SC once daily. Adding Ipamorelin&apos;s GH pulse trigger amplifies total GH secretion beyond monotherapy, potentially enhancing the lipolytic signal to visceral adipose tissue. This is the primary research angle that distinguishes this blend from other GH secretagogue stacks.",
      "IGF-1 Elevation and Lean-Mass Support [1][4]. Both GH-axis activation pathways drive IGF-1 production. Elevated IGF-1 supports lean muscle protein synthesis and preserves lean mass during caloric restriction or fat-loss protocols — relevant for researchers running body-composition work where VAT reduction is the goal alongside lean-mass preservation.",
      "Body Composition Research [1][4]. GH and IGF-1 elevation support improved overall body composition: reduced fat mass (particularly visceral), preserved or increased lean mass, and metabolic rate support. The most-cited GH secretagogue use case, and the use case where Tesamorelin&apos;s human trial data provides the most direct evidence.",
      "Sleep Quality [4]. GHRH-pathway activation reinforces the natural nocturnal GH pulse during slow-wave sleep. Pre-bed dosing of GHRH analogs + GHRP stacks is studied for slow-wave sleep enhancement. Subjective sleep-quality improvements are among the first effects reported by researchers, often within 1–2 weeks.",
      "Recovery and Tissue Repair [4]. Elevated GH and IGF-1 support faster recovery from exercise-induced muscle damage through enhanced protein synthesis and cellular repair. Researchers sometimes stack GHRH+GHRP protocols with BPC-157 and TB-500 for combined local + systemic tissue-repair coverage.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Tesamorelin + Ipamorelin take to work?",
    intro:
      "GH secretagogue stacks build effect over weeks. Sleep quality and subjective recovery improvements often appear within 1–2 weeks. Subjective body-composition changes (reduced bloating, improved trunk definition) may be noticed over 4–8 weeks. Imaging-confirmed or DEXA-quantified VAT changes — the primary Tesamorelin endpoint in clinical trials — emerged at 26 weeks in the pivotal RCTs.",
    content:
      "IGF-1 elevation is measurable in serum within days of starting the stack. GH-mediated changes to visceral fat are driven by cumulative lipolytic signaling — daily consistent dosing over months is required to reproduce the magnitude of VAT reduction seen in Tesamorelin trials. Standard research cycles run 8–16 weeks active with a similar off-period to avoid pituitary receptor desensitization, though the Egrifta clinical data used 26-week active periods. IGF-1 should be monitored during longer cycles; the Egrifta label explicitly recommends IGF-1 monitoring to assess treatment response and guide dose decisions.",
  },
  {
    id: "dosing",
    title: "How is Tesamorelin + Ipamorelin dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Both components are administered by subcutaneous injection. Both are short-acting, so daily dosing is required to maintain pulsatile GH stimulation. The protocol below is derived from Tesamorelin&apos;s clinical trial data (Egrifta prescribing information), Ipamorelin&apos;s pharmacodynamic literature, and research-community protocols.
        </p>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Standard research protocol:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Tesamorelin dose.</span> 1&ndash;2 mg subcutaneously once daily. The Egrifta approved dose is 2 mg SC once daily; research protocols commonly start at 1 mg and titrate up.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Ipamorelin dose.</span> 200&ndash;300 mcg subcutaneously per injection (same injection event, separate syringe or mixed into same draw as Tesamorelin).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Frequency.</span> Once daily (pre-bed preferred) is the canonical protocol. Some research protocols add a second Ipamorelin dose post-workout while keeping Tesamorelin once daily.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing.</span> Empty stomach, at least 2 hours after the last meal. Elevated insulin and somatostatin blunt the GH response &mdash; the most important timing constraint for both components.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Titration.</span> Start at Tesamorelin 1 mg + Ipamorelin 200 mcg once daily pre-bed for weeks 1&ndash;2, then increase Tesamorelin to 2 mg and/or Ipamorelin to 300 mcg if tolerated. Monitor IGF-1 at baseline and at 4&ndash;8 week intervals.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle.</span> 8&ndash;16 weeks active, 4&ndash;8 week off-period before re-cycling. The Egrifta trials used 26-week active periods; standard research cycling is shorter to avoid receptor desensitization.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Vial formats and reconstitution math
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold">Common SKUs.</span> Tesamorelin is typically sold in 2 mg lyophilized vials (matching the Egrifta dose); Ipamorelin in 2 mg or 5 mg lyophilized vials. Some vendors offer pre-blended Tesamorelin + Ipamorelin vials &mdash; check the label carefully for component weights and ratio.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Reconstitution.</span> Use bacteriostatic water for injection (BAC water). Swirl gently &mdash; do not shake &mdash; to avoid damaging the lyophilized peptides. A standard Tesamorelin reconstitution: add 1 mL BAC water to a 2 mg vial = 2 mg/mL (2,000 mcg/mL); each 0.1 mL (10 units on a U-100 syringe) = 200 mcg of Tesamorelin. For 1 mg dose: draw 5 units; for 2 mg dose: draw 10 units.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold">Separate vials vs pre-blend.</span> Most researchers use separate vials &mdash; this allows independent dose adjustment of each peptide (especially important when Tesamorelin dosing follows a different mg scale than Ipamorelin mcg dosing). Both peptides can be drawn into the same insulin syringe for a single injection.
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0 pt-2">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Vial</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC Water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Conc.</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg / 200 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">2 mg / 300 mcg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">Tesamorelin</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 mg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units (1 mg)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units (2 mg)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">Ipamorelin</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 mg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1 mg/mL (1,000 mcg/mL)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units (200 mcg)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units (300 mcg)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          Table above applies to standard single-peptide vials at indicated reconstitution volumes. For different vial sizes or pre-blended formulations, use the{" "}
          <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator</Link>{" "}
          for ratio-specific math.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Tesamorelin + Ipamorelin is not FDA-approved as a research-grade combination. Dosing is derived from Tesamorelin&apos;s clinical trial data, Ipamorelin&apos;s pharmacodynamic literature, and research-community protocols — there are no approved retail dosing standards for the combination.
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
    title: "How is Tesamorelin + Ipamorelin administered?",
    intro:
      "Both peptides are administered by subcutaneous injection using a small insulin syringe. Pre-bed dosing on an empty stomach is the canonical protocol — it synchronizes with the body&apos;s natural overnight GH pulse and the sleep-stage-dependent GH secretion pattern. Both components are short-acting: daily dosing is required (unlike once-weekly peptides such as CJC-1295 with DAC).",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Pre-bed is the default &mdash; 30&ndash;60 minutes before sleep on an empty stomach. An optional second Ipamorelin dose may be added post-workout if running a twice-daily Ipamorelin protocol.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Empty stomach.</span> At least 2 hours after the last meal. Elevated insulin and somatostatin blunt the GH response &mdash; this is the most important timing rule for this stack.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Same injection or separate syringes.</span> Both peptides may be drawn into the same insulin syringe for a single injection, or administered as separate injections. Do not mix in the same vial for storage.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Alternate injection sites each dose. Stay at least 1 inch from previous injection sites to minimize injection-site reactions.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> Use bacteriostatic water for injection (BAC water). Swirl gently &mdash; do not shake &mdash; to avoid damaging the lyophilized peptides. Tesamorelin should be reconstituted with the volume specified on the vial or as calculated for the target dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Resume on the next scheduled dose. Do not double-dose. For once-daily protocols, a single missed injection has minimal impact; consistency over weeks matters more than any individual dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycling.</span> 8&ndash;16 weeks active, 4&ndash;8 week minimum off-period. Cycling avoids pituitary receptor desensitization and preserves GH-axis responsiveness over repeated research cycles.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Unlike once-weekly GLP-class or DAC-conjugated peptides, Tesamorelin and Ipamorelin are both short-acting and timing-sensitive. The table below summarizes the key administration variables.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Tesamorelin once daily; Ipamorelin once daily (pre-bed) or twice daily (pre-bed + post-workout)</td>
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Tesamorelin ~26 min; Ipamorelin ~2 h &mdash; both short-acting, daily dosing required</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">IGF-1 monitoring</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Recommended at baseline and every 4&ndash;8 weeks; Egrifta prescribing label recommends IGF-1 monitoring during therapy</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state timeline</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Sleep quality 1&ndash;2 weeks; recovery/composition changes 4&ndash;8 weeks; VAT changes 12&ndash;26 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Tesamorelin + Ipamorelin stack well with?",
    intro:
      "The stack pairs well with metabolic peptides and tissue-repair compounds — Tesamorelin&apos;s VAT-reduction signal and the combined GH/IGF-1 elevation amplify the context for both fat-loss and recovery-focused research. Avoid double-dosing the GH axis by adding another GH secretagogue (MK-677, CJC-1295, or Sermorelin on top of Tesamorelin).",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Fat-loss peptides for combined VAT + systemic fat metabolism.</span>{" "}
          <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>{" "}
          addresses appetite and systemic fat loss through GLP-1R; Tesamorelin + Ipamorelin addresses GH-axis-driven VAT reduction and lean-mass preservation. The mechanisms are complementary and non-overlapping — a combination relevant for body-composition research where preservation of lean mass during caloric restriction is a goal alongside fat reduction.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Tissue-repair peptides.</span>{" "}
          <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
          +{" "}
          <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
          for combined local + systemic tissue repair alongside GH-mediated anabolic elevation. Elevated IGF-1 amplifies the substrate for local healing peptides.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Resistance training + adequate protein.</span> Required for GH-mediated anabolic effect. GH and IGF-1 elevation without mechanical loading and protein substrate produces less lean-mass benefit. Recommended: 1.2&ndash;1.6 g protein/kg body weight throughout the research cycle.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GH Stack comparison.</span> Researchers seeking a general GH-axis recovery and sleep-quality focus without the VAT-specific framing can substitute{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (CJC-1295 no-DAC + Ipamorelin)</Link>{" "}
          or{" "}
          <Link href="/peptides/sermorelin-ipamorelin" className="text-[#0891b2] hover:underline">Sermorelin + Ipamorelin</Link>.{" "}
          This stack is the appropriate choice when body-composition and VAT-reduction endpoints are primary.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: MK-677.</span>{" "}
          <Link href="/peptides/mk-677" className="text-[#0891b2] hover:underline">MK-677</Link>{" "}
          (ibutamoren) is another GH secretagogue (ghrelin receptor agonist) — stacking with Ipamorelin doubles the GHS-R1a activation without proportional benefit and increases appetite and potential cortisol side effects.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: additional standalone GHRH analogs.</span> Adding standalone{" "}
          <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
          or Sermorelin on top of Tesamorelin doubles the GHRH-pathway activation without independent benefit. Use one GHRH analog per protocol.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Tesamorelin + Ipamorelin?",
    intro:
      "The Tesamorelin clinical trial data (Egrifta prescribing information; Falutz et al. 2010) provides an unusually detailed human adverse event profile for the GHRH-pathway component — more comprehensive than exists for research-grade-only GHRH analogs. The most notable Tesamorelin-specific effects are arthralgia (joint pain) and peripheral edema (fluid retention), which appeared at higher rates in some Egrifta trials versus other GHRH analogs. Ipamorelin&apos;s selectivity keeps the hormonal profile clean — no cortisol, prolactin, or ACTH elevation.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection-site reactions.</span> Redness, mild irritation, or transient pinkness at the subcutaneous injection site. Resolved by site rotation. The most commonly reported local effect in both research-grade use and Egrifta trials.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild water retention / peripheral edema.</span> GH-mediated sodium and fluid retention. Egrifta trials noted peripheral edema as a meaningful adverse event; typically mild and resolves on cycle-off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient flushing / head rush.</span> Mild warmth or head rush shortly after injection, most common with the first few doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">IGF-1 elevation.</span> An expected pharmacodynamic effect, not adverse per se, but warrants monitoring. Supratherapeutic IGF-1 is the basis for IGF-1 monitoring recommendations in the Egrifta label.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Arthralgia (joint pain).</span> Documented in Egrifta trials, particularly at 2 mg doses. GH-mediated effects on fluid distribution and connective tissue. Monitor and reduce dose if significant joint pain appears.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Numbness / tingling in hands and feet.</span> Carpal-tunnel-like sensations from GH-related fluid retention and nerve compression. Common with prolonged GH-axis activation; resolves on cycle-off.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient fasting glucose elevation.</span> GH counter-regulates insulin. Worth monitoring fasting glucose during longer research cycles, particularly in pre-diabetic subjects. Egrifta label includes glucose monitoring guidance.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Typically mild and more common during dose titration. Usually resolves after the first 1&ndash;2 weeks at a given dose level.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vivid dreams / disrupted sleep onset.</span> Reported with pre-bed GH secretagogue dosing in some researchers. Usually adapts within the first 1&ndash;2 weeks.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare or theoretical)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Insulin resistance with chronic use.</span> Sustained GH-axis activation can promote insulin resistance. The primary theoretical reason for cycling &mdash; 8&ndash;16 weeks on, off-period before re-cycling. Monitor fasting glucose and HbA1c during long cycles.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pituitary receptor desensitization.</span> Continuous GH-axis stimulation without breaks can downregulate receptor responsiveness. Standard cycling protocols are the mitigation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical mitogenic risk.</span> Chronic IGF-1 elevation has a theoretical tumor-stimulation concern from epidemiological associations of high baseline IGF-1 with certain cancer types. IGF-1 monitoring is the practical risk-management measure; no signals appeared in Egrifta clinical trial data.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-doping prohibition.</span> Both Tesamorelin and Ipamorelin are on the WADA prohibited list (Section S2, peptide hormones / growth factors). Tested athletes should not use this stack in any form.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tesamorelin&apos;s FDA approval provides unusually detailed human adverse-event data for a GHRH analog research stack component. Ipamorelin&apos;s selectivity profile keeps the combination free from the cortisol, prolactin, and appetite side effects that older GHRP stacks produced.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Tesamorelin + Ipamorelin interact with other drugs?",
    intro:
      "The stack has limited well-documented systemic drug interactions, but several theoretical concerns apply because GH and IGF-1 affect insulin sensitivity, fluid balance, and tissue growth. The Egrifta prescribing information provides the most detailed interaction guidance available for the GHRH-pathway component of this blend.",
    body: [
      "Insulin and oral hypoglycemics. GH counter-regulates insulin. Users on insulin, metformin, sulfonylureas, or other diabetes medications may need dose adjustment during a cycle. Fasting glucose and HbA1c monitoring is recommended. Egrifta label includes warnings about glucose metabolism effects.",
      "Corticosteroids. Chronic corticosteroid use can suppress the GH axis at the pituitary level, potentially blunting the response to Tesamorelin. No acute safety concern documented, but GH-axis suppression may reduce efficacy.",
      "Other GH-axis compounds. MK-677, HGH itself, IGF-1 LR3, CJC-1295, Sermorelin — overlapping mechanisms increase IGF-1 elevation without proportional benefit and amplify side effects. Avoid stacking with other GH secretagogues.",
      "Levothyroxine. GH-axis activation can shift T4-to-T3 conversion. Users on thyroid replacement medication may notice adequacy changes during GH secretagogue cycles. Egrifta label notes this interaction.",
      "Semaglutide / GLP-1 agonists. Non-overlapping mechanisms — GLP-1R agonists do not interact with GH-axis signaling at the pituitary level. Combination for body-composition research is discussed under stacks above. No known adverse pharmacological interaction.",
      "Component-level interactions. Cross-reference the Tesamorelin and Ipamorelin individual peptide pages for full per-component interaction details.",
    ],
  },
  {
    id: "storage",
    title: "How should Tesamorelin + Ipamorelin be stored?",
    body: [
      "Lyophilized (powder) form: -20°C long-term, 2–8°C short-term (refrigerated). Tesamorelin is relatively stable when properly stored; maintain cold chain from vendor to refrigerator.",
      "Reconstituted solution: 2–8°C, use within 28–30 days. The Egrifta prescribing information specifies 28 days for reconstituted product.",
      "Reconstitution: bacteriostatic water for injection (BAC water). Swirl gently — do not shake — to avoid damaging the lyophilized peptides.",
      "Do not freeze the reconstituted solution. Freezing damages peptide structure and renders it inactive.",
      "Protect from light — store in the original container or amber vial.",
      "Discard if the solution is cloudy, discolored, or contains visible particles after reconstitution.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Tesamorelin + Ipamorelin research?",
    intro:
      "Tesamorelin has the most robust human clinical evidence of any GHRH analog used in research-grade peptide markets — its VAT-reduction data comes from Phase 3 RCTs, not preclinical models. Ipamorelin has strong selectivity data but limited human trial data compared to approved clinical compounds. The combination as a single research product has no controlled trial.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The Tesamorelin + Ipamorelin combination is NOT FDA-approved. Tesamorelin is FDA-approved as Egrifta for HIV-associated lipodystrophy at 2 mg SC once daily — this provides the strongest human clinical evidence base for the GHRH-pathway component, but research-grade Tesamorelin is not the approved Egrifta product and is sold for laboratory use only without pharmaceutical-grade manufacturing controls.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The VAT-reduction data from Egrifta trials was generated in HIV-infected patients with lipodystrophy — a specific metabolic phenotype. Extrapolating Tesamorelin&apos;s VAT-reduction magnitude to metabolically healthy individuals is not directly supported by the clinical literature. The mechanism is sound and applicable, but effect sizes in non-lipodystrophic populations are not established by controlled trial data.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ipamorelin has robust selectivity data in preclinical models and pharmacodynamic data in humans but no approved clinical use. Its long-term safety profile is less documented than Tesamorelin&apos;s. The combination has no controlled trial — synergy claims rest on the well-established GHRH+GHRP mechanistic literature and each compound&apos;s individual data.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade peptide quality varies by source. Third-party HPLC testing and verified cold-chain handling are strongly recommended, particularly for Tesamorelin given its relatively complex stabilized structure.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: Both Tesamorelin and Ipamorelin are on the WADA prohibited list (Section S2, peptide hormones and growth factors). Tested athletes should not use this stack in any form.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Tesamorelin + Ipamorelin",
    intro:
      "Research-grade Tesamorelin and Ipamorelin are sold by specialty peptide vendors for laboratory use only — typically as separate lyophilized vials. Neither is FDA-approved at research-grade doses (Egrifta is the approved pharmaceutical Tesamorelin product). The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners" },
            { slug: "spartan-peptides", note: "Carries Tesamorelin and Ipamorelin" },
            { slug: "glacier-aminos" },
            { slug: "oasis-labs" },
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
    title: "Tesamorelin + Ipamorelin FAQ",
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
          Falutz J, Allas S, Blot K, et al. Metabolic effects of a growth hormone-releasing factor in patients with HIV. N Engl J Med. 2007;357(23):2359-70.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18057338/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18057338/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Falutz J, Allas S, Mamputu J-C, et al. Long-term safety and effects of tesamorelin, a growth hormone-releasing factor analogue, in HIV patients with abdominal fat accumulation. AIDS. 2008;22(14):1719-1728.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18690162/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18690162/
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
          Tesamorelin + Ipamorelin has no controlled trial as a combination, but Tesamorelin has an unusually robust human Phase 3 RCT evidence base for the GHRH-pathway component — the strongest of any GHRH analog used in the research-grade market. The studies below are the key peer-reviewed sources for both components and for the dual-pathway synergy rationale.
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

export default function TesaIpamorelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Tesamorelin + Ipamorelin","description":"Tesamorelin + Ipamorelin research profile: FDA-referenced GHRH analog + selective GHRP dual-pathway blend, visceral-fat reduction angle, IGF-1 elevation, dosing protocol, side effects, FAQ.","url":"https://profpeptide.com/peptides/tesamorelin-ipamorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Tesamorelin + Ipamorelin"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Tesamorelin + Ipamorelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="tag">Research-Grade</span>
        <span className="tag">Combination Blend</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 29, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Tesa + Ipa Blend, Tesamorelin / Ipamorelin Stack, VAT Reduction GH Stack
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Growth Hormone Secretagogue Blend (2-component: GHRH analog + selective GHRP)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Tesamorelin FDA-approved as Egrifta (HIV lipodystrophy); research-grade Tesamorelin and Ipamorelin sold for laboratory use only; combination research-grade only; both WADA S2 prohibited
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Tesamorelin + Ipamorelin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Tesamorelin + Ipamorelin is a 2-component growth hormone secretagogue blend combining{" "}
            <Link href="/peptides/tesamorelin" className="text-[#0891b2] hover:underline">Tesamorelin</Link>{" "}
            (a stabilized GHRH analog with a ~26-minute half-life and FDA approval as Egrifta for visceral adipose tissue reduction) and{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
            (a selective GHS-R1a / ghrelin receptor agonist, ~2-hour half-life). Like the{" "}
            <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack (CJC-1295 + Ipamorelin)</Link>{" "}
            and{" "}
            <Link href="/peptides/sermorelin-ipamorelin" className="text-[#0891b2] hover:underline">Sermorelin + Ipamorelin</Link>,{" "}
            it activates both the GHRH receptor and the ghrelin receptor on pituitary somatotrophs simultaneously, producing supra-additive GH release (2&ndash;4&times; greater than either compound alone) in a pulsatile pattern that preserves physiological GH feedback regulation. The distinguishing angle is Tesamorelin&apos;s FDA-backed visceral-fat-reduction data: this is the GH-axis blend most directly supported by human RCT evidence for body-composition and VAT-focused research. Both components are short-acting, requiring daily subcutaneous dosing — commonly pre-bed on an empty stomach. Both are WADA S2 prohibited.
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
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Visceral adipose tissue (VAT) reduction — the strongest clinical evidence base of any GHRH analog blend for this endpoint</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">IGF-1 elevation (~60&ndash;80% above baseline in Egrifta trials at 2 mg dose) supporting lean-mass and metabolic effects</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Physiologically pulsatile GH release pattern (both components short-acting — preserves natural feedback regulation)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No significant cortisol, ACTH, or prolactin elevation (Ipamorelin&apos;s selectivity advantage vs older GHRPs)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Enhanced slow-wave sleep through GH-mediated nocturnal GH pulse reinforcement</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Body composition, recovery, and connective-tissue support studied across GH-axis research applications</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Tesamorelin 1&ndash;2 mg SC once daily + Ipamorelin 200&ndash;300 mcg SC daily (commonly pre-bed, empty stomach). Titrate Tesamorelin from 1 mg; monitor IGF-1 at baseline and every 4&ndash;8 weeks.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Typically sold as separate lyophilized vials by research peptide vendors. Neither research-grade Tesamorelin nor Ipamorelin is FDA-approved at research-grade doses. See{" "}
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
        {["GH Axis", "Growth Hormone Secretagogue", "Visceral Fat", "Body Composition", "Combination Blend", "FDA-Referenced"].map((tag) => (
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
          <Link href="/peptides/tesamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Tesamorelin</Link>
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
          Use the Prof. Peptide dosage calculator for accurate reconstitution
          and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>

      <PageDisclaimer />
      <ContactLink pageName="Tesamorelin + Ipamorelin" pagePath="/peptides/tesamorelin-ipamorelin" />
    </div>
    </>
  );
}
