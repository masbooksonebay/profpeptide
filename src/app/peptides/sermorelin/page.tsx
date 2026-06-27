import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/sermorelin",
  title: "Sermorelin — GHRH(1-29), Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Sermorelin research profile: native GHRH(1-29) mechanism, dosing protocol, FDA history (Geref), ipamorelin stack, side effects, FAQ, and regulatory status.",
});

const faqs = [
  {
    q: "Is sermorelin FDA-approved?",
    a: "Sermorelin was FDA-approved as Geref in 1990 for pediatric GH deficiency. The brand was discontinued in 2008. The FDA later confirmed the discontinuation was NOT for safety or efficacy reasons. Sermorelin is currently available through licensed compounding pharmacies (with prescription) or as research-grade peptide.",
  },
  {
    q: "What's the difference between sermorelin and CJC-1295?",
    a: (
      <>
        Sermorelin is the natural GHRH(1-29) fragment.{" "}
        <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
        (without DAC) is the same fragment with four amino acid substitutions (D-Ala2, Gln8, Ala15, Leu27) that resist DPP-IV degradation. This makes CJC-1295 more stable and longer-lasting. Sermorelin produces gentler, more physiological pulses; CJC-1295 produces stronger, longer effects. See the{" "}
        <Link href="/compare/cjc-1295-vs-sermorelin-vs-ipamorelin" className="text-[#0891b2] hover:underline">CJC-1295 vs Sermorelin vs Ipamorelin comparison</Link>{" "}
        for a side-by-side breakdown.
      </>
    ),
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
        Through licensed US compounding pharmacies with a prescription, or through specialty research peptide vendors as research-grade material. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Sermorelin: A Better Approach to Management of Adult-Onset Growth Hormone Insufficiency?",
    authors: "Walker RF",
    journal: "Clinical Interventions in Aging / PMC",
    year: "2006",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2699646/",
    summary: "The most widely cited review arguing for sermorelin as a safer alternative to direct growth hormone replacement therapy (GHRT). The paper explains a key advantage of sermorelin over exogenous GH: because sermorelin stimulates the pituitary to produce its own GH rather than administering GH directly, the natural negative feedback mechanisms (somatostatin regulation) remain intact — making overdose essentially impossible. Walker argues this represents a more physiologically appropriate approach than rhGH.",
  },
  {
    title: "Effects of Sermorelin on GH and IGF-1 in Elderly Men — Dose-Response Study",
    authors: "Corpas E, Harman SM, Pineyro MA, et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism",
    year: "1992",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/1379256/",
    summary: "One of the foundational human studies of sermorelin in elderly men ages 60–78. High-dose sermorelin elevated mean 24-hour GH levels, peak GH amplitude, and GH area under the curve. Strikingly, elderly men who had lower baseline IGF-1 levels than young controls saw IGF-1 rise toward youthful levels with sermorelin treatment — and these elevations persisted above baseline for two weeks after stopping treatment, suggesting lasting pituitary sensitization.",
  },
  {
    title: "Growth Hormone-Releasing Hormone Effects on Brain GABA Levels in Mild Cognitive Impairment and Healthy Aging",
    authors: "Friedman SD, Baker LD, Borson S, et al.",
    journal: "PMC / JAMA Neurology",
    year: "2013",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3764915/",
    summary: "A randomized clinical trial examining GHRH's effects on brain neurochemistry and cognitive function in healthy older adults and adults with mild cognitive impairment (MCI). Participants self-administered daily tesamorelin (a GHRH analog equivalent to sermorelin for this purpose) for 20 weeks. The study found changes in brain GABA levels and cognitive performance improvements.",
  },
  {
    title: "Beyond the Androgen Receptor — Growth Hormone Secretagogues in the Management of Hypogonadal Males",
    authors: "Sinha DK, Balasubramanian A, Tatem AJ, et al.",
    journal: "PMC / Translational Andrology and Urology",
    year: "2020",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7108996/",
    summary: "A clinical review covering sermorelin's role in treating hypogonadal males with metabolic syndrome. The paper documents a unique finding from sermorelin research: unlike other GH secretagogues which work via the ghrelin pathway, sermorelin uniquely stimulates FSH and LH release — implying a potential role in supporting endogenous testosterone production alongside GH stimulation.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Sermorelin work?",
    intro:
      "Sermorelin activates the GHRH receptor on pituitary somatotrophs with the same affinity and downstream signaling as endogenous GHRH — it IS the natural GHRH(1-29) sequence with no amino acid substitutions. The receptor is a Gαq-coupled GPCR triggering cAMP/PKA signaling. The short ~10–20 minute half-life produces sharp, physiologic GH pulses rather than continuous elevation, which is one reason sermorelin retains a cleaner safety profile than direct GH administration. Hypothalamic-pituitary feedback loops remain intact.",
    body: [
      "GHRH Receptor Activation [1]. Sermorelin activates the GHRH receptor (GHRH-R) on pituitary somatotroph cells with the same affinity and downstream signaling as endogenous GHRH. The receptor is a Gαq-coupled GPCR that triggers cAMP/PKA signaling, driving GH synthesis and release.",
      "Pulsatile GH Release [2]. Sermorelin amplifies the natural pulsatile GH secretion pattern. Because the peptide is rapidly cleared (~10–20 minute half-life), it produces sharp, physiologic GH pulses rather than continuous elevation.",
      "Native GHRH Sequence [1]. Unlike CJC-1295 (which has 4 amino acid substitutions for DPP-IV resistance), sermorelin is the natural GHRH(1-29) sequence. This gives it a clean physiological profile but also makes it more rapidly degraded — the trade-off of using a more 'natural' peptide.",
      "IGF-1 Elevation [3]. Sustained sermorelin therapy raises IGF-1 levels through GH-mediated hepatic IGF-1 production. IGF-1 mediates many of the downstream anabolic and lipolytic effects.",
      "Hypothalamic Feedback Preserved. Because sermorelin works upstream of the pituitary (rather than directly replacing GH), the natural feedback loops involving somatostatin and IGF-1 remain intact. This is mechanistically safer than direct GH administration.",
    ],
  },
  {
    id: "research",
    title: "What is Sermorelin used for?",
    intro:
      "Sermorelin's research evidence base spans pediatric GH deficiency (original FDA-approval indication as Geref), adult GHRH replacement, cognitive effects in older adults, body composition, and sleep quality. Sermorelin has the longest FDA safety record of any GHRH analog discussed in research peptide contexts — most controlled human data predates the Geref discontinuation in 2008.",
    body: [
      "Pediatric Growth Hormone Deficiency [2]. Original FDA approval indication. Geref (sermorelin) was used for both diagnosis and treatment of GH deficiency in children with idiopathic short stature. Demonstrated growth velocity improvements in pediatric trials.",
      "Adult GHRH Replacement [4]. Studies in older adults show sermorelin restores pulsatile GH/IGF-1 patterns toward youthful levels. A randomized placebo-controlled trial in older men (Vittone et al., 1997) showed measurable improvements in body composition and lipid profile.",
      "Cognitive Effects in Older Adults [4]. Baker et al. (2012) studied a related GHRH analog in older adults with mild cognitive impairment, with improvements in cognitive function reported.",
      "Body Composition. Sermorelin therapy in adults produces gradual increases in lean muscle mass and decreases in body fat over 4–6 month protocols. Effects are modest compared to direct HGH but with cleaner safety profile.",
      "Sleep Quality. Most subjective effects of sermorelin therapy involve improved sleep quality and recovery, likely tied to alignment of dosing with natural GH circadian peaks.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Sermorelin take to work?",
    intro:
      "Sermorelin effects develop slowly. IGF-1 elevation appears within 1–2 weeks of consistent dosing. Sleep quality improvements often appear within 2–4 weeks. Body composition changes (lean mass, fat reduction) typically emerge over 3–6 months. Sermorelin's effects are generally more gradual than CJC-1295 due to the shorter half-life and lower per-dose potency.",
    content:
      "IGF-1 elevation appears within 1–2 weeks of consistent bedtime dosing. Sleep quality improvements often appear within 2–4 weeks — often the first noticeable subjective effect. Body composition changes (lean muscle gain, fat reduction) typically emerge over 3–6 months. Sermorelin's effects are generally more gradual than CJC-1295 due to the shorter half-life and lower per-dose potency — users who prefer convenience often switch to CJC-1295; users who prefer the most natural/gentle option stay with sermorelin.",
  },
  {
    id: "dosing",
    title: "How is Sermorelin dosed?",
    intro:
      "Sermorelin is administered as a subcutaneous injection. The short 10–20 minute half-life means effects depend entirely on dose timing. Standard dosing is 200–500 mcg once daily at bedtime. Cycle length is typically 3–6 months for adult GHRH-replacement protocols; some patients use continuously under clinical supervision. Empty-stomach dosing is non-negotiable for full GH response.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard dose.</span> 200–500 mcg subcutaneously once daily at bedtime.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Higher dose.</span> Up to 1000 mcg per dose for patients with more severe GHRH-axis decline.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Empty stomach.</span> Insulin spikes from food blunt GH release &mdash; wait 2+ hours after eating, 30 min before next meal.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 3–6 months is common for adult GHRH-replacement protocols; some patients use continuously under clinical supervision.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sermorelin + GHRP stack.</span> Some protocols pair sermorelin with{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">ipamorelin</Link>{" "}
            to amplify GH release via dual-pathway activation.
          </li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Sermorelin produces gentler, more physiological effects than CJC-1295 with DAC because of the shorter half-life. Most users describe sermorelin as feeling &ldquo;cleaner&rdquo; than direct HGH or longer-acting analogs. The trade-off is slower onset and need for daily dosing &mdash; patients who prefer convenience often choose CJC-1295 instead.
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
    title: "How is Sermorelin administered?",
    intro: (
      <>
        Sermorelin is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; once daily at bedtime using a small insulin syringe. The short half-life makes bedtime alignment with natural overnight GH peaks essential. Empty-stomach dosing is required for full GH response. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Bedtime is strongly preferred. Inject 30–60 minutes before sleep to align with natural overnight GH peak.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Empty stomach. Wait 2+ hours after eating, 30 min before next meal.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each injection to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume next scheduled dose &mdash; short half-life makes catch-up unnecessary.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 3–6 months common; continuous use under clinical supervision also documented.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Sermorelin&apos;s ~10–20 minute half-life makes timing critical. The body&apos;s largest natural GH release happens in the first 90 minutes of deep sleep &mdash; bedtime dosing (30–60 min before sleep) stacks the sermorelin pulse onto this natural peak. Empty-stomach timing matters because insulin from food blunts the GH response.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once daily during the cycle (3–6 months typical)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Bedtime &mdash; aligns with natural overnight GH peak</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Empty stomach required &mdash; 2+ hours after eating, 30+ min before next meal</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~10–20 minutes</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Per-pulse effect rather than traditional steady-state &mdash; each dose triggers a discrete GH pulse</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. Sermorelin research vials are typically 5 mg. Because doses are 200–500 mcg (sometimes up to 1 mg), 2 mL reconstitution is the common research convention &mdash; it gives clean whole-number units across the typical dose range. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">100 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">250 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">500 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit drawn delivers 50 mcg of Sermorelin at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Sermorelin stack well with?",
    intro:
      "Sermorelin's canonical pairing is ipamorelin — the dual-pathway combination (GHRH receptor + ghrelin receptor) produces synergistic GH release. Recovery peptides (BPC-157, TB-500) pair cleanly for systemic recovery. IGF-1 LR3 stacks for direct receptor activation alongside endogenous GH stimulation. Avoid CJC-1295 — same GHRH receptor, redundant mechanism.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Ipamorelin.</span> The most popular pairing.{" "}
          <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">Ipamorelin</Link>{" "}
          (ghrelin receptor) + sermorelin (GHRH receptor) produces synergistic GH release through dual-pathway activation &mdash; conceptually equivalent to the{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
          (which uses CJC-1295 instead of sermorelin).
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157 / TB-500.</span>{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
          paired for recovery support during anabolic protocols.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">IGF-1 LR3.</span>{" "}
          <Link href="/peptides/igf-1-lr3" className="text-[#0891b2] hover:underline">IGF-1 LR3</Link>{" "}
          combined for direct IGF-1 receptor activation alongside endogenous GH stimulation.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: CJC-1295 or other GHRH analogs.</span>{" "}
          <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
          targets the same GHRH receptor &mdash; combining is redundant. Choose one based on dosing convenience and feel.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training.</span> Exercise-induced GH release amplified when paired with sermorelin.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Sermorelin?",
    intro:
      "Sermorelin had over 18 years of FDA-approved clinical use as Geref before the brand was discontinued (for commercial reasons, not safety or efficacy). It has the most established human safety profile of any GHRH analog discussed in research peptide contexts. The most-reported user effects are mild injection-site reactions, transient facial flushing, and mild headache especially with first doses.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation, typically resolves within hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild facial flushing or warmth.</span> Transient (vasodilation); resolves within ~30 minutes.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Especially first doses; typically mild.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fluid retention.</span> Consistent with GH/IGF-1 elevation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Joint pain or stiffness.</span> Common during anabolic phases of GH-axis cycling.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild numbness or tingling.</span> Uncommon; related to fluid retention.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Allergic reactions.</span> Uncommon &mdash; was FDA-approved with established safety profile.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical tumor growth risk.</span> GH/IGF-1 elevation could accelerate pre-existing tumors. Contraindicated with active malignancy.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypothyroidism.</span> Rare; monitored in long-term protocols.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sermorelin had over 18 years of FDA-approved clinical use as Geref before the brand was discontinued (for commercial reasons, not safety or efficacy). It has the most established human safety profile of any GHRH analog discussed in research peptide contexts. The discontinuation of Geref was confirmed by the FDA as not being for safety or effectiveness reasons.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Sermorelin interact with other drugs?",
    intro:
      "Sermorelin's most important interactions are with anything that blunts GH release (insulin, corticosteroids) and with other GHRH analogs (redundant mechanism). Thyroid hormones may be affected in long-term use — monitor in protocols beyond 6 months. No major drug-drug pharmacokinetic interactions have been reported.",
    body: [
      "Insulin and corticosteroids. Both blunt GH release; time injections away from meals and steroid administration.",
      "Other GHRH analogs (CJC-1295). Redundant mechanism, do not combine. Choose one GHRH analog.",
      "Direct HGH. Combining is generally unnecessary — sermorelin stimulates endogenous GH; adding exogenous GH is duplicative.",
      "Thyroid hormones. Sermorelin may affect thyroid function in long-term use; monitor in protocols beyond 6 months.",
    ],
  },
  {
    id: "storage",
    title: "How should Sermorelin be stored?",
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
    title: "What are the limitations of Sermorelin research?",
    intro:
      "Sermorelin was FDA-approved as Geref in 1990 for pediatric GH deficiency and discontinued in 2008. The FDA confirmed the discontinuation was NOT for safety or efficacy reasons. Sermorelin remains accessible through licensed US compounding pharmacies with a prescription, and as research-grade peptide. Most published clinical evidence is from older studies; anti-aging and longevity uses are off-label. WADA prohibits sermorelin in sport under Section S2.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sermorelin was FDA-approved as Geref in 1990 for pediatric GH deficiency and discontinued in 2008. The FDA later confirmed the discontinuation was NOT for safety or efficacy reasons, but for commercial reasons. Sermorelin remains accessible through licensed compounding pharmacies in the US (with prescription) and as a research-grade peptide.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most published clinical evidence is from older studies (1990s–2000s) using sermorelin in pediatric and adult GH deficiency contexts. Anti-aging and longevity uses are off-label and not formally validated through controlled trials.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits sermorelin in sport under Section S2 (peptide hormones). Research-grade material sold outside compounding pharmacy channels is intended for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Sermorelin",
    intro:
      "Sermorelin's brand product (Geref) was discontinued in 2008 (not for safety/efficacy reasons). It is currently available through licensed US compounding pharmacies with a prescription, or as research-grade peptide. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "purerawz", note: "Sermorelin + GHRP-2 blend" },
            { slug: "ascension-peptides" },
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
    title: "Sermorelin FAQ",
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
          Walker RF. Sermorelin: a better approach to management of adult-onset growth hormone insufficiency? Clin Interv Aging. 2006;1(4):307-8.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2699646/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC2699646/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Prakash A, Goa KL. Sermorelin: a review of its use in the diagnosis and treatment of children with idiopathic growth hormone deficiency. BioDrugs. 1999;12(2):139-57.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18031173/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18031173/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Khorram O, Laughlin GA, Yen SS. Endocrine and metabolic effects of long-term administration of [Nle27]growth hormone-releasing hormone-(1-29)-NH2 in older men and women. J Clin Endocrinol Metab. 1997;82(5):1472-9.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9141536/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9141536/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Vittone J, Blackman MR, Busby-Whitehead J, et al. Effects of single nightly injections of growth hormone-releasing hormone (GHRH 1-29) in healthy elderly men. Metabolism. 1997;46(1):89-96.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9005976/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9005976/
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

export default function SermorelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Sermorelin","description":"Sermorelin research profile: native GHRH(1-29) mechanism, dosing protocol, FDA history (Geref), ipamorelin stack, side effects, FAQ, and regulatory status.","url":"https://profpeptide.com/peptides/sermorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 23, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> GRF (1-29), Geref (discontinued brand), GHRH(1-29) NH2
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Native GHRH Fragment &mdash; GHRH Receptor Agonist (29-amino-acid active fragment)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Geref FDA-approved 1990 (pediatric GHD), brand discontinued 2008 for commercial reasons. Available via compounding pharmacy or research-grade. WADA-prohibited (Section S2).
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Sermorelin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Sermorelin is a synthetic 29-amino-acid analog of growth hormone-releasing hormone (GHRH) &mdash; specifically the first 29 amino acids of native GHRH, which contain the entire biological activity of the parent hormone. It was originally developed by Serono and FDA-approved as Geref in 1990 for diagnosis of growth hormone deficiency in children. The brand was discontinued in 2008 (not for safety or efficacy reasons), but sermorelin remains widely used in compounding pharmacy and research-grade contexts. It stimulates pulsatile GH release through GHRH receptor activation, with a short half-life (~10–20 minutes) requiring frequent dosing. Often paired with{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">ipamorelin</Link>{" "}
            for dual-pathway GH amplification, conceptually similar to the{" "}
            <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
            (which uses CJC-1295 in place of sermorelin). New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates natural pulsatile growth hormone release via GHRH receptor</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increases IGF-1 through GH-mediated pathway</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Supports lean muscle growth, fat reduction, recovery (downstream of GH)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved sleep quality reported with bedtime dosing</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Bone density support in clinical research</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Generally cleaner safety profile than other GHRH analogs (was FDA-approved)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols use 200–500 mcg subcutaneously once daily, typically at bedtime. Cycle length is typically 3–6 months for adult GHRH-replacement protocols. Empty-stomach dosing required for full GH response.
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
        <Link href="/peptides/cjc-1295" className="text-sm font-medium text-[#0891b2] hover:underline">CJC-1295</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#0891b2] hover:underline">Ipamorelin</Link>
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
    <ContactLink pageName="Sermorelin" pagePath="/peptides/sermorelin" />
    </div>
    </>
  );
}
