import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/ipamorelin",
  title: "Ipamorelin — Selective GHRP, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Ipamorelin research profile: selective GHSR-1a agonist mechanism, dosing protocol, CJC-1295 stack, side effects, FAQ, and regulatory status.",
});

const faqs = [
  {
    q: "How is ipamorelin different from GHRP-2 or GHRP-6?",
    a: "All three are growth hormone-releasing peptides that activate the ghrelin receptor. The critical difference is selectivity. GHRP-2 and GHRP-6 also raise cortisol, prolactin, and ACTH alongside GH. Ipamorelin raises only GH — no significant effect on other pituitary hormones even at very high doses. This makes ipamorelin the cleanest GHRP for long-term use.",
  },
  {
    q: "Should I stack ipamorelin with CJC-1295?",
    a: (
      <>
        It&apos;s the most popular and synergistic stack in the GH peptide space. Ipamorelin activates the ghrelin receptor;{" "}
        <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
        activates the GHRH receptor. Combined, they produce greater GH release than either alone. Most research protocols use ipamorelin + CJC-1295 (often without DAC) injected together at bedtime &mdash; see the{" "}
        <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
        page for the combined protocol.
      </>
    ),
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
        Ipamorelin is sold by specialty research peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Ipamorelin, the First Selective Growth Hormone Secretagogue",
    authors: "Raun K, Hansen BS, Johansen NL, et al.",
    journal: "European Journal of Endocrinology / PubMed",
    year: "1998",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
    summary: "The landmark study establishing Ipamorelin as the first growth hormone secretagogue with high selectivity for GH release — meaning it stimulates GH without significantly raising cortisol, prolactin, or ACTH. The study demonstrated that Ipamorelin produced robust GH release in rats comparable to GHRP-6 and hexarelin, but with approximately 90% less cortisol response and no meaningful ACTH elevation. This selectivity profile is what distinguishes Ipamorelin from older GHRPs and makes it the preferred GHRP for stacking with GHRH analogs like CJC-1295.",
  },
  {
    title: "Ipamorelin — Effects on Bone Mineral Density and Body Composition in Aged Rats",
    authors: "Hansen BS, et al.",
    journal: "Growth Hormone & IGF Research / PubMed",
    year: "1999",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/10352464/",
    summary: "A 12-week study examining Ipamorelin's effects on body composition and bone health in aged rats — directly relevant to its research application in age-related metabolic decline. Findings included significant increases in bone mineral content, reduced adiposity, and increased lean mass, all attributed to sustained GH/IGF-1 axis activation.",
  },
  {
    title: "Pharmacokinetic-Pharmacodynamic Modeling of Ipamorelin in Human Volunteers",
    authors: "Gobburu JVS, et al.",
    journal: "Pharmaceutical Research / PubMed",
    year: "1999",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/10496653/",
    summary: "One of the few human pharmacokinetic studies of Ipamorelin, characterizing how it behaves in the human body. The study modeled the relationship between Ipamorelin plasma concentrations and GH release kinetics in healthy volunteers — confirming that the dose-response relationship seen in animal models translates to humans.",
  },
  {
    title: "Beyond the Androgen Receptor — The Role of Growth Hormone Secretagogues in Hypogonadal Males",
    authors: "Sigalos JT, Pastuszak AW",
    journal: "PMC / Sexual Medicine Reviews",
    year: "2018",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7108996/",
    summary: "A clinical review examining Ipamorelin alongside other GH secretagogues for applications in metabolic syndrome and hypogonadism. The paper summarizes Ipamorelin's selectivity advantage over GHRP-2 and GHRP-6 and reviews the synergistic GH response when Ipamorelin is combined with GHRH analogs — documenting 2–4x greater GH AUC compared to either compound in isolation.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Ipamorelin work?",
    intro:
      "Ipamorelin selectively binds the ghrelin/growth hormone secretagogue receptor (GHSR-1a) on pituitary somatotrophs, triggering pulsatile GH release through the cAMP/PKA pathway. Unlike GHRP-2 and GHRP-6, ipamorelin does NOT stimulate cortisol, ACTH, prolactin, or TSH — even at doses 200x above the GH-releasing dose. This selectivity is its primary clinical advantage and the reason it pairs cleanly with CJC-1295 (which works through a different receptor) for synergistic GH release.",
    body: [
      "GHSR-1a Receptor Activation [1]. Ipamorelin selectively binds the growth hormone secretagogue receptor (GHSR-1a, the ghrelin receptor) on pituitary somatotroph cells and hypothalamic neurons. This is the same receptor activated by endogenous ghrelin — ipamorelin acts as a synthetic ghrelin mimic with much greater receptor selectivity.",
      "cAMP/PKA Signaling [2]. Receptor activation triggers a Gαq-coupled signaling cascade that increases intracellular calcium and cAMP production, activating protein kinase A. This drives the synthesis and release of stored growth hormone from somatotrophs.",
      "Pulsatile GH Release [1]. Ipamorelin amplifies the natural pulsatile pattern of GH secretion rather than creating a continuous flood. This preserves the hypothalamic-pituitary feedback loops that regulate GH homeostasis, which is mechanistically safer than direct GH administration.",
      "Selectivity for GH [1][3]. Unlike GHRP-2 and GHRP-6, ipamorelin does NOT stimulate cortisol, ACTH, prolactin, FSH, LH, or TSH release. Even at doses 200x higher than the GH-releasing dose, no meaningful effect on these other hormones is observed. This selectivity is its primary clinical advantage.",
      "Somatostatin Antagonism [4]. Ipamorelin reduces the inhibitory effect of somatostatin (GH-inhibiting hormone), allowing the pituitary's GH-releasing activity to remain elevated longer than it would otherwise.",
    ],
  },
  {
    id: "research",
    title: "What is Ipamorelin used for?",
    intro:
      "Ipamorelin's research evidence base spans GH stimulation (animal and human PK studies), body composition (downstream of GH/IGF-1), bone formation (counters glucocorticoid-induced bone loss), postoperative ileus (Phase 2, discontinued for lack of efficacy in that specific indication), and cognitive/sleep applications. Most evidence is from animal models and the discontinued Phase 2 program; long-term controlled human trials are limited.",
    body: [
      "Growth Hormone Stimulation [1][3]. Multiple animal and human studies confirm ipamorelin produces GH release with potency comparable to GHRP-6 but greater selectivity. Effects observed in primary rat pituitary cells (EC50 ~1.3 nmol/L) and pentobarbital-anaesthetized rat models.",
      "Body Composition Research. IGF-1 elevation downstream of ipamorelin-induced GH release supports lean muscle synthesis and lipolysis. Most ipamorelin body composition data comes from clinical practice rather than controlled trials.",
      "Bone Formation [4]. In adult female rats, ipamorelin counteracted glucocorticoid-induced decreases in bone formation. The GH secretagogues ipamorelin and GHRP-6 increased bone mineral content in adult female rats.",
      "Postoperative Ileus (Discontinued). Helsinn Therapeutics took ipamorelin through Phase 2 trials for postoperative ileus but discontinued for lack of efficacy in that specific indication. The compound itself was safe — it just didn't address that specific problem effectively.",
      "Cognitive and Sleep Research. Anecdotal and clinical observations suggest improved sleep quality with bedtime dosing, likely due to alignment with natural GH circadian peaks. Limited controlled human data.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Ipamorelin take to work?",
    intro:
      "Ipamorelin effects build over weeks of consistent dosing. Most users notice improved sleep within 1–2 weeks. Body composition changes (increased lean mass, reduced fat) typically emerge over 8–12 weeks. IGF-1 elevation can be measured within days of starting therapy. Half-life is short (~2 hours), so effects depend on consistent dose timing rather than sustained blood levels.",
    content:
      "Most users notice improved sleep quality within 1–2 weeks of consistent bedtime dosing — often the first noticeable subjective effect. Body composition changes (increased lean mass, reduced fat) typically emerge over 8–12 weeks. IGF-1 elevation can be measured in blood work within days of starting therapy. Half-life is short (~2 hours), so effects depend on consistent timing rather than sustained blood levels — bedtime dosing maintains alignment with the natural overnight GH peak.",
  },
  {
    id: "dosing",
    title: "How is Ipamorelin dosed?",
    intro:
      "Ipamorelin is administered as a subcutaneous injection. The 2-hour half-life means effects depend on dose timing rather than continuous coverage. Standard dosing is 200–300 mcg subcutaneously per injection, with bedtime as the most common protocol (aligns with natural overnight GH peak). Frequently stacked with CJC-1295 (with or without DAC) for synergistic dual-pathway GH release.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard dose.</span> 200–300 mcg subcutaneously per injection.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Bedtime dosing.</span> 200–300 mcg before sleep &mdash; most common protocol, aligns with natural GH peak during deep sleep.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Multiple daily dosing.</span> 200 mcg 2–3x per day (morning, mid-day, bedtime) for users targeting sustained effect.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-workout dosing.</span> Some users add a 200 mcg dose 30–60 minutes before training to amplify exercise-induced GH release.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 8–12 weeks on, with at least 4 weeks off; some protocols run continuously for 6+ months under clinical supervision.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Ipamorelin is frequently stacked with{" "}
          <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
          (with or without DAC). The combination produces greater GH release than either alone because they activate different receptor pathways simultaneously &mdash; ipamorelin via GHSR-1a, CJC-1295 via GHRH receptor. See the{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
          page for the combined protocol.
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
    title: "How is Ipamorelin administered?",
    intro: (
      <>
        Ipamorelin is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; 1–3 times daily using a small insulin syringe. Bedtime dosing aligns with the natural overnight GH peak. Empty-stomach timing maximizes the GH response &mdash; insulin from food blunts GH release. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection. Common sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Bedtime is most common. Inject 30–60 minutes before sleep on an empty stomach.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Best on empty stomach (2+ hours after eating, no food for 30 min after) to maximize GH release. Food spikes insulin, which blunts GH secretion.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each injection to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hunger spike.</span> Brief increase in appetite is expected for 30–60 minutes after injection (ghrelin receptor activation). Bedtime dosing lets you sleep through this.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> Skip and resume next scheduled dose. Do not double-dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 8–12 weeks on, 4+ weeks off.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Ipamorelin&apos;s 2-hour half-life means each dose produces a discrete GH pulse rather than sustained elevation. The body&apos;s largest natural GH release happens in the first 90 minutes of deep sleep &mdash; bedtime dosing (30–60 min before sleep) stacks the ipamorelin pulse onto this natural peak. Empty-stomach timing matters more than time of day in absolute terms: insulin secreted in response to food blunts the GH response substantially.
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1–3× daily during the cycle (most users dose once at bedtime)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Bedtime preferred &mdash; aligns with natural overnight GH peak</td>
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~2 hours</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Per-pulse effect rather than traditional steady-state &mdash; each dose triggers a discrete GH pulse</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. Ipamorelin research vials are typically 5 mg. Because doses are small (200–300 mcg), 2 mL or 3 mL reconstitution is common &mdash; it gives more precise unit draws at low dose. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">100 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">200 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">300 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">500 mcg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">8 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">18 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit drawn delivers 50 mcg of Ipamorelin at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Ipamorelin stack well with?",
    intro:
      "Ipamorelin's canonical pairing is CJC-1295 — the dual-pathway GH Stack (ghrelin receptor + GHRH receptor) produces synergistic GH release greater than either alone. The recovery peptides (BPC-157, TB-500) pair cleanly for systemic recovery during anabolic protocols. IGF-1 LR3 stacks for direct receptor activation alongside endogenous GH stimulation — space injections 2–3 hours apart to avoid receptor competition. Avoid other GHRPs (GHRP-2, GHRP-6, MK-677) — redundant ghrelin-pathway mechanism.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">CJC-1295 (GH Stack).</span> The most popular pairing.{" "}
          <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
          activates the GHRH receptor while ipamorelin activates the ghrelin receptor &mdash; dual-pathway activation produces synergistic GH release. See the{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
          page for the combined protocol.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157 / TB-500.</span>{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
          paired for recovery support. The healing peptides accelerate tissue repair while ipamorelin supports the GH-driven anabolic environment.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">IGF-1 LR3.</span>{" "}
          <Link href="/peptides/igf-1-lr3" className="text-[#0891b2] hover:underline">IGF-1 LR3</Link>{" "}
          combined for direct IGF-1 receptor activation alongside endogenous GH stimulation. Inject IGF-1 LR3 at least 2–3 hours apart from ipamorelin to avoid receptor competition.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training.</span> Natural pairing &mdash; exercise-induced GH release is amplified when paired with ipamorelin&apos;s pulse.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: other GHRPs.</span> GHRP-2, GHRP-6, and{" "}
          <Link href="/peptides/mk-677" className="text-[#0891b2] hover:underline">MK-677</Link>{" "}
          all activate the same ghrelin receptor &mdash; combination is redundant with no additive benefit.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Ipamorelin?",
    intro:
      "Ipamorelin has one of the cleanest safety profiles of any GHRP because of its selectivity. It does NOT raise cortisol (a problem with GHRP-2 and GHRP-6) and does not affect prolactin or other pituitary hormones. The most-reported user effects are mild injection-site reactions and a brief hunger spike (ghrelin receptor activation, 30–60 minutes post-injection). Long-term safety data beyond 12 weeks is limited.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation, typically resolves within hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Increased hunger.</span> Transient (30–60 minutes post-injection) due to ghrelin receptor activation; diminishes with continued use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fatigue or sleepiness.</span> Often appears in the hour following injection &mdash; one reason bedtime dosing is preferred.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache.</span> Inconsistent across users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Slight numbness or tingling.</span> Uncommon; related to GH-induced fluid retention.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fluid retention.</span> Inconsistent; typically appears with long-term use.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term safety data beyond 12 weeks is limited.</span> Most controlled studies were short-duration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical tumor growth risk.</span> GH/IGF-1 elevation could accelerate pre-existing tumors. Contraindicated with active malignancy.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe allergic reactions.</span> Rare and not commonly reported.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ipamorelin has one of the cleanest safety profiles of any GHRP because of its selectivity. It does NOT raise cortisol (a problem with GHRP-2 and GHRP-6) and does not affect prolactin or other pituitary hormones. Long-term use should be monitored for IGF-1 elevation and glucose tolerance &mdash; both rise modestly with sustained GH stimulation.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Ipamorelin interact with other drugs?",
    intro:
      "Ipamorelin's interactions are mostly about avoiding redundancy with other GHRPs (GHRP-2, GHRP-6, MK-677 — same ghrelin receptor) or with direct GH (which bypasses the regulatory feedback that makes ipamorelin safer). Insulin and corticosteroids blunt GH release; time dosing away from meals and steroid administration. No significant drug-drug pharmacokinetic interactions reported.",
    body: [
      "Insulin and corticosteroids. Both blunt GH release; consider timing dosing away from meals and steroid administration.",
      "Other GH secretagogues (GHRP-2, GHRP-6, MK-677). Combination is redundant via the same receptor; no additive benefit.",
      "Direct human growth hormone (HGH). Combining is generally unnecessary; ipamorelin stimulates endogenous GH and adding exogenous HGH bypasses the regulatory feedback that makes ipamorelin safer.",
      "No significant drug-drug interactions reported in published research.",
    ],
  },
  {
    id: "storage",
    title: "How should Ipamorelin be stored?",
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
    title: "What are the limitations of Ipamorelin research?",
    intro:
      "Ipamorelin is not FDA-approved for any human use. It was investigated in Phase 2 trials for postoperative ileus by Helsinn Therapeutics but development was discontinued in 2014 due to lack of efficacy in that specific indication — the compound itself was found safe. Most evidence for anti-aging and body composition uses comes from animal models and clinical practice observations rather than controlled human trials. WADA prohibits ipamorelin in sport under Section S2.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Ipamorelin is not FDA-approved for any human use. It was investigated in Phase 2 clinical trials for postoperative ileus by Helsinn Therapeutics but development was discontinued in 2014 due to lack of efficacy in that specific indication. The compound itself was found safe &mdash; the trial outcome reflected the unsuitability of the indication, not safety problems.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most evidence for ipamorelin&apos;s anti-aging and body composition uses comes from animal models, small-scale clinical practice observations, and individual case reports rather than controlled human trials. Long-term safety data beyond 12 weeks is limited.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits ipamorelin in sport under Section S2 (peptide hormones). Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Ipamorelin",
    intro:
      "Ipamorelin is not FDA-approved for any human use and is sold only as a research-grade peptide. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes — including pre-mixed CJC-1295/Ipamorelin combo options for the canonical GH Stack pairing.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "behemoth-labz", note: "Nasal + vial formats" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#0891b2] hover:underline">
            See all 17 verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Ipamorelin FAQ",
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
          Raun K, Hansen BS, Johansen NL, et al. Ipamorelin, the first selective growth hormone secretagogue. Eur J Endocrinol. 1998;139(5):552-61.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9849822/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9849822/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Ipamorelin.{" "}
          <a href="https://en.wikipedia.org/wiki/Ipamorelin" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://en.wikipedia.org/wiki/Ipamorelin
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Johansen PB, Segev Y, Raun K, et al. Ipamorelin, a new growth-hormone-releasing peptide, induces longitudinal bone growth in rats. Growth Horm IGF Res. 1999;9(2):106-13.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10373343/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/10373343/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Andersen NB, Malmlöf K, Johansen PB, et al. The growth hormone secretagogue ipamorelin counteracts glucocorticoid-induced decrease in bone formation of adult rats. Growth Horm IGF Res. 2001;11(5):266-72.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11735237/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11735237/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Svensson J, Lall S, Dickson SL, et al. The GH secretagogues ipamorelin and GH-releasing peptide-6 increase bone mineral content in adult female rats. J Endocrinol. 2000;165(3):569-77.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10860573/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/10860573/
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

export default function IpamorelinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Ipamorelin","description":"Ipamorelin research profile: selective GHSR-1a agonist mechanism, dosing protocol, CJC-1295 stack, side effects, FAQ, and regulatory status.","url":"https://profpeptide.com/peptides/ipamorelin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 23, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> NNC 26-0161, GHRP, Selective Growth Hormone Secretagogue
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Synthetic Pentapeptide &mdash; Selective GHSR-1a (Ghrelin Receptor) Agonist
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use only. WADA-prohibited (Section S2). Phase 2 development discontinued.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Ipamorelin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Ipamorelin is a synthetic pentapeptide (Aib-His-D-2-Nal-D-Phe-Lys-NH2) developed by Novo Nordisk in the late 1990s as a selective agonist of the ghrelin/growth hormone secretagogue receptor (GHSR-1a). Unlike other GHRPs (GHRP-2, GHRP-6), ipamorelin stimulates growth hormone release without elevating cortisol, prolactin, ACTH, FSH, LH, or TSH &mdash; making it the most selective GHRP available. It was investigated in Phase 2 trials for postoperative ileus but discontinued for lack of efficacy in that specific indication. Often paired with{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
            as the{" "}
            <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
            &mdash; the two activate different receptor pathways and produce synergistic GH release. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates pulsatile growth hormone release via the ghrelin receptor pathway</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Highly selective for GH &mdash; does not affect cortisol, prolactin, or other pituitary hormones</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increases IGF-1 levels through GH-mediated pathway</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Supports lean muscle growth and fat reduction (downstream of GH)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved sleep quality reported, especially with bedtime dosing</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Bone formation support (counters glucocorticoid-induced bone loss in animal models)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Most research protocols use 200–300 mcg subcutaneously, 1–3 times daily. Bedtime dosing is most common to align with natural GH circadian peaks. Cycle length is typically 8–12 weeks. Empty-stomach dosing is required for full GH response.
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
    <ContactLink pageName="Ipamorelin" pagePath="/peptides/ipamorelin" />
    </div>
    </>
  );
}
