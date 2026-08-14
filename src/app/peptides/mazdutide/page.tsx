import Link from "next/link";
import ProfileNews from "@/components/ProfileNews";
import { articlesForPeptide } from "@/data/news";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ProfileTOC from "@/components/ProfileTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/mazdutide",
  title: "Mazdutide — Research Profile, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Mazdutide (IBI362, LY3305677) research profile: GLP-1/glucagon dual-agonist mechanism, Phase 3 GLORY trial results in Chinese adults, dosing, side effects, FAQ, and China NMPA vs FDA regulatory status.",
});

const faqs = [
  {
    q: "Is mazdutide FDA-approved?",
    a: "No. Mazdutide is not approved by the US FDA or the EMA. It is approved only in China, where the NMPA cleared it for chronic weight management (June 27, 2025) and for glycemic control in type 2 diabetes (September 19, 2025). Outside China it remains investigational.",
  },
  {
    q: "Who makes mazdutide?",
    a: "Mazdutide is developed by Innovent Biologics in China, from a molecule licensed from Eli Lilly. Its development codes are IBI362 and LY3305677. It is a once-weekly peptide and was the world's first dual glucagon/GLP-1 receptor agonist to win regulatory approval.",
  },
  {
    q: "Where was mazdutide's efficacy data generated?",
    a: "In Chinese adults. Both pivotal Phase 3 trials — GLORY-1 (NEJM, 2025) and GLORY-2 (JAMA, 2026) — enrolled Chinese adults with obesity or overweight. The weight-loss figures below come specifically from these Chinese cohorts, and generalization to other populations has not been established in the published literature.",
  },
  {
    q: "How does mazdutide differ from semaglutide and tirzepatide?",
    a: (
      <>
        <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>{" "}
        activates one receptor (GLP-1).{" "}
        <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>{" "}
        activates GLP-1 and GIP. Mazdutide activates GLP-1 and glucagon &mdash; the same receptor pair as{" "}
        <Link href="/peptides/survodutide" className="text-[#3A759F] hover:underline">survodutide</Link>. The glucagon arm adds energy expenditure and liver-fat effects on top of appetite suppression. Mazdutide is an oxyntomodulin analog, structurally distinct from the GLP-1/GIP agonists.
      </>
    ),
  },
  {
    q: "How much weight loss did mazdutide produce in trials?",
    a: "In GLORY-1 (610 Chinese adults), the 6 mg dose produced a 14.01% mean body-weight reduction at week 48, versus a 0.30% gain on placebo. In GLORY-2 (461 Chinese adults), the 9 mg dose produced a 16.65% mean reduction at week 60, versus 1.50% on placebo — a between-group difference of 15.15%.",
  },
  {
    q: "Does mazdutide cause muscle loss?",
    a: "As with other incretin-based agents, mazdutide can reduce lean mass alongside fat mass during rapid weight loss. Resistance training and adequate protein intake (typically 1.2–1.6 g/kg body weight per day) are commonly used in research contexts to limit lean-mass loss.",
  },
  {
    q: "What are the most common side effects?",
    a: "Gastrointestinal effects — nausea, diarrhea, vomiting, and decreased appetite — dominate and are most pronounced during dose escalation, consistent with the GLP-1 class. Slow, stepwise titration is used to reduce their severity.",
  },
  {
    q: "Where can I get mazdutide?",
    a: (
      <>
        Mazdutide is approved as a prescription medicine only in China and is investigational elsewhere. Research-grade material is sold by specialty peptide vendors for laboratory use only. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Once-Weekly Mazdutide in Chinese Adults with Obesity or Overweight (GLORY-1)",
    authors: "Ji L, Jiang H, Bi Y, et al.; GLORY-1 Investigators",
    journal: "New England Journal of Medicine",
    year: "2025",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/40421736/",
    summary: "The pivotal Phase 3 GLORY-1 trial in 610 Chinese adults with obesity (BMI ≥28) or overweight (BMI 24–28) with at least one weight-related comorbidity, randomized to once-weekly subcutaneous mazdutide 4 mg, 6 mg, or placebo for 48 weeks. The co-primary endpoints were percentage body-weight change and the proportion achieving ≥5% weight reduction at week 32. At week 48, mean body-weight change was −11.00% (4 mg) and −14.01% (6 mg), versus +0.30% on placebo. Gastrointestinal effects were the most common adverse events and were mostly mild-to-moderate and concentrated during escalation. GLORY-1 supported the NMPA approval of mazdutide for chronic weight management in China. Results are specific to a Chinese population.",
  },
  {
    title: "Treatment With 9-mg Mazdutide for Weight Reduction in Chinese Adults With Obesity: The GLORY-2 Randomized Clinical Trial",
    authors: "Gao L, Jiang H, Cai H, et al.",
    journal: "JAMA",
    year: "2026",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/42251595/",
    summary: "A Phase 3 randomized trial in 461 Chinese adults with moderate-to-severe obesity (mean age 33.9 years; 64% female; 16.1% with type 2 diabetes), randomized to once-weekly subcutaneous mazdutide 9 mg or placebo for 60 weeks. The primary endpoint — mean percentage body-weight change — was −16.65% on mazdutide versus −1.50% on placebo, a between-group difference of −15.15% (P<0.001). 84.3% of mazdutide recipients achieved at least 5% weight reduction, versus 33.1% on placebo. GLORY-2 extended the evidence to a higher 9 mg dose and a longer 60-week horizon, again in a Chinese cohort. As with GLORY-1, the findings have not been replicated in non-Chinese populations in the published literature.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Mazdutide work?",
    intro: (
      <>
        Mazdutide activates two metabolic hormone receptors at once &mdash; GLP-1 and glucagon &mdash; the same receptor pair as{" "}
        <Link href="/peptides/survodutide" className="text-[#3A759F] hover:underline">survodutide</Link>. It is an analog of oxyntomodulin, a natural gut hormone that itself hits both receptors. The GLP-1 arm reduces appetite and slows gastric emptying; the glucagon arm adds energy expenditure and acts on the liver to promote fat oxidation.
      </>
    ),
    body: [
      "GLP-1 receptor activation. Mazdutide activates the GLP-1 receptor, slowing gastric emptying, reducing appetite, and enhancing glucose-dependent insulin secretion — the pathway shared with semaglutide.",
      "Glucagon receptor activation. The second arm activates the glucagon receptor, increasing energy expenditure and promoting hepatic fat oxidation. The GLP-1 arm's glucose-lowering effect counterbalances glucagon's tendency to raise blood sugar, so net glycemic control is maintained.",
      "Oxyntomodulin-based design. Unlike the GIP-based agonists, mazdutide is built on the oxyntomodulin scaffold, which naturally engages both the GLP-1 and glucagon receptors — the structural basis for its dual activity.",
      "Metabolic breadth. Beyond weight and glucose, the glucagon arm has been associated with effects on hepatic and lipid parameters, which is why the dual-agonist class is of interest for metabolic liver disease in addition to obesity and diabetes.",
    ],
  },
  {
    id: "research",
    title: "What is Mazdutide used for?",
    intro:
      "Mazdutide is approved in China for chronic weight management and for glycemic control in type 2 diabetes; outside China it is investigational. Its published Phase 3 evidence comes entirely from Chinese adult cohorts. Only peer-reviewed results are reported below.",
    body: [
      "Chronic weight management [1][2]. In GLORY-1, once-weekly mazdutide 6 mg produced a 14.01% mean body-weight reduction at week 48 in Chinese adults; in GLORY-2, the 9 mg dose produced a 16.65% reduction at week 60. China's NMPA approved mazdutide for chronic weight management on June 27, 2025.",
      "Glycemic control in type 2 diabetes [1]. The GLP-1 arm lowers glucose while the glucagon arm's counter-regulatory effect is offset, yielding net glycemic benefit. China's NMPA approved mazdutide for glycemic control in adults with type 2 diabetes on September 19, 2025 — the first dual glucagon/GLP-1 agonist approved for this use.",
      "Population note. Both pivotal trials enrolled Chinese adults. The efficacy figures above describe those cohorts specifically; the published literature does not establish equivalent results in other populations.",
      "Metabolic markers [2]. Alongside weight loss, the GLORY trials reported improvements in metabolic parameters. Dedicated cardiovascular-outcomes data for mazdutide is not yet available in the peer-reviewed literature.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Mazdutide take to work?",
    intro:
      "Mazdutide's effects build over a stepwise titration. Appetite reduction generally appears within the first weeks of dosing, while the largest weight-loss figures were measured after months of treatment at the maintenance dose.",
    content:
      "In the GLORY trials, mazdutide was escalated over the opening weeks before reaching the maintenance dose. Appetite reduction typically appeared early, while weight loss accumulated over the trial: GLORY-1 measured its co-primary weight endpoint at week 32 and reported the −14.01% figure (6 mg) at week 48, and GLORY-2 reported −16.65% (9 mg) at week 60. Because mazdutide is only approved in China and is investigational elsewhere, onset-of-effect expectations outside those trial protocols are not established.",
  },
  {
    id: "dosing",
    title: "How is Mazdutide dosed?",
    intro:
      "Mazdutide is administered as a once-weekly subcutaneous injection using a stepwise dose-escalation protocol, as is standard for the GLP-1 class, to reduce gastrointestinal side effects. The doses below are the maintenance doses studied in the Phase 3 GLORY trials.",
    node: (
      <div className="space-y-3">
        <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">
          Doses studied in the Phase 3 GLORY trials:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">GLORY-1.</span> Once-weekly subcutaneous 4 mg and 6 mg maintenance doses, reached by escalation, over 48 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">GLORY-2.</span> A higher once-weekly 9 mg maintenance dose over 60 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Titration.</span> Doses are escalated gradually rather than started at maintenance level; gastrointestinal tolerability is the limiting factor early in a protocol.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Mazdutide is long-acting, supporting once-weekly administration. In China, dosing follows the approved product labeling; elsewhere the compound is investigational and any dosing is derived from published trial data rather than an approved label.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate a dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is Mazdutide administered?",
    intro:
      "Mazdutide is given as a subcutaneous injection — under the skin, not into muscle — once weekly. As with other incretin-class injectables, consistent weekly timing, hydration, and eating pattern matter for tolerability. The points below cover the practical details common to research protocols.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection, once weekly. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Any time, but consistent from week to week. Many researchers inject in the evening to sleep through peak GI effects during titration.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine; the long half-life makes meal timing largely irrelevant to absorption.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each week to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> If a few days late, take as soon as remembered; if closer to the next scheduled dose, skip and resume on schedule. Do not double-dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hydration and eating pattern.</span> The GLP-1 arm blunts thirst and hunger signals; a set daily water target and small, regular meals reduce nausea and empty-stomach discomfort.</li>
        </ol>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once weekly, same day each week</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Evening often preferred — sleep through peak GI effects, especially during titration</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required; inject with or without food</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate abdomen, thigh, upper arm — avoid the same site within 2 weeks</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Titration</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Slow, stepwise escalation over weeks; hold at a step if GI effects are hard to tolerate</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Missed dose</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">A few days late: take it. Closer to next dose: skip and resume. Never double-dose.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 10 mg vial — adjust proportionally for a 5 mg or 15 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">4 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">6 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">9 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">90 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">80 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">n/a*</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          *Draw exceeds standard 100-unit insulin syringe capacity at this reconstitution volume — use a higher concentration (less BAC water) or split the injection. Trial maintenance doses were 4, 6, and 9 mg weekly; titrate slowly.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Mazdutide stack well with?",
    intro:
      "Mazdutide's dual-agonist mechanism is potent on its own, and stacking it with other GLP-1-class compounds amplifies gastrointestinal side effects without proportional benefit. The cleanest additions are non-peptide: resistance training and adequate protein. The compounds to avoid overlap the same incretin pathways.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> The most common protocol. The dual-agonist effect is strong enough that adding other GLP-1-class peptides is generally unnecessary and compounds side effects.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + 1.2–1.6 g/kg protein.</span> Used to preserve lean mass during rapid weight loss, as with all incretin-class agents.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: other GLP-1-class agonists.</span>{" "}
          Combining mazdutide with{" "}
          <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">semaglutide</Link>,{" "}
          <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">tirzepatide</Link>,{" "}
          <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">retatrutide</Link>, or{" "}
          <Link href="/peptides/survodutide" className="text-[#3A759F] hover:underline">survodutide</Link>{" "}
          stacks the same receptor pathways and sharply increases GI side effects without added benefit.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Mazdutide?",
    intro:
      "Mazdutide's side-effect profile is dominated by gastrointestinal effects, consistent with the GLP-1 class, and these are most pronounced during dose escalation. The glucagon-receptor arm introduces mechanism-specific considerations, including modest heart-rate increases and the counter-regulatory glucose effect that the GLP-1 arm is designed to offset.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nausea.</span> The most common effect, especially while escalating the dose.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diarrhea and vomiting.</span> Common at higher doses and during titration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Decreased appetite.</span> An expected pharmacologic effect that can be excessive in some individuals.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Constipation.</span> Reported alongside the other GI effects.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection-site reactions.</span> Mild redness or irritation at the injection site.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Increased heart rate.</span> Modest heart-rate increases are seen across the class and are relevant to the glucagon arm.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache and fatigue.</span> Typically mild, most noticeable in the days after a dose increase.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Blood-glucose effects.</span> Glucagon raises blood glucose in isolation; mazdutide's GLP-1 arm offsets this, and the diabetes indication reflects net glycemic benefit. Glucose is monitored.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (rare — call a doctor)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pancreatitis.</span> A class-level concern for GLP-1-based agents. Symptoms: severe abdominal pain radiating to the back, persistent vomiting.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Gallbladder problems.</span> Rapid weight loss raises gallstone risk across the class. Symptoms: severe upper-right abdominal pain, jaundice, fever.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe allergic reactions.</span> Rare. Symptoms: difficulty breathing, facial or throat swelling, hives. Seek emergency care.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          In the GLORY trials, most adverse events were gastrointestinal, mild-to-moderate, and concentrated during escalation; slow titration is the primary mitigation. The published safety data is drawn from Chinese cohorts over 48–60 weeks.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Mazdutide interact with other drugs?",
    intro:
      "As an incretin-based agent that slows gastric emptying and lowers blood glucose, mazdutide carries the same interaction considerations as the GLP-1 class: additive hypoglycemia risk with other glucose-lowering drugs, and altered absorption of oral medications.",
    body: [
      "Insulin and sulfonylureas. Combining mazdutide with insulin or sulfonylureas increases the risk of hypoglycemia; dose adjustment of the background therapy is typically needed.",
      "Oral medications. Slowed gastric emptying can affect the absorption of oral drugs, most relevant for those with a narrow therapeutic window (e.g., warfarin, levothyroxine).",
      "Other GLP-1-class agonists. Should not be combined — overlapping pathways increase side effects without added benefit.",
      "Alcohol. Compounds nausea and dehydration and increases hypoglycemia risk in people with type 2 diabetes.",
    ],
  },
  {
    id: "storage",
    title: "How should Mazdutide be stored?",
    body: [
      "Approved product in China: follow the manufacturer's labeled storage conditions.",
      "Research-grade lyophilized (powder) form: store at 2–8°C (refrigerated), sealed, for the supplier's stated shelf life.",
      "Reconstituted solution: store at 2–8°C. Research-grade preparations are commonly used within about 28–30 days of reconstitution; follow the supplier's product specifications.",
      "Reconstitution: use bacteriostatic water for injection at the volume specified by the dose calculator. Swirl gently — do not shake.",
      "Do not freeze, protect from light, and discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Mazdutide research?",
    intro:
      "Mazdutide is approved only in China and is investigational everywhere else. Its published efficacy data comes entirely from Chinese adult cohorts, which is the central limitation on generalizing the figures. Long-term outcomes beyond the trial horizons are not yet established in the peer-reviewed literature.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mazdutide is approved by China&rsquo;s NMPA for chronic weight management (June 27, 2025) and glycemic control in type 2 diabetes (September 19, 2025). It is NOT approved by the US FDA or the EMA, and is investigational outside China. It is developed by Innovent Biologics from a molecule licensed from Eli Lilly (codes IBI362 and LY3305677).
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The pivotal Phase 3 trials — GLORY-1 (NEJM, 2025) and GLORY-2 (JAMA, 2026) — both enrolled Chinese adults. The reported weight-loss figures (14.01% at 6 mg over 48 weeks; 16.65% at 9 mg over 60 weeks) describe those cohorts. Equivalent results in other populations have not been published, and cardiovascular-outcomes data is not yet available.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Outside China, mazdutide is not an approved medicine. Research-grade material is sold in a regulatory gray area, typically labeled &ldquo;for research use only, not for human consumption.&rdquo; Legal status varies by country, and GLP-1-class compounds are prohibited in sport by the World Anti-Doping Agency.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Mazdutide",
    intro:
      "Mazdutide is a prescription medicine only in China and is investigational elsewhere. Research-grade material is sold by specialty peptide vendors for laboratory use only. The vendors surfaced below are drawn from PP's attribution-verified list based on demonstrable price coverage for this compound.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock compoundSlug="mazdutide" />
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
    title: "Mazdutide FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-1">
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
          Ji L, Jiang H, Bi Y, et al; GLORY-1 Investigators. Once-Weekly Mazdutide in Chinese Adults with Obesity or Overweight. N Engl J Med. 2025;392(22):2215-2225.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/40421736/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/40421736/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Gao L, Jiang H, Cai H, et al. Treatment With 9-mg Mazdutide for Weight Reduction in Chinese Adults With Obesity: The GLORY-2 Randomized Clinical Trial. JAMA. 2026;336(5):377-388.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/42251595/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/42251595/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Innovent Biologics. Mazdutide, first dual GCG/GLP-1 receptor agonist, received approval from China&apos;s NMPA for chronic weight management. June 2025.{" "}
          <a
            href="https://www.prnewswire.com/news-releases/innovent-announces-mazdutide-first-dual-gcgglp-1-receptor-agonist-received-approval-from-chinas-nmpa-for-chronic-weight-management-302493152.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://www.prnewswire.com/news-releases/innovent-announces-mazdutide-first-dual-gcgglp-1-receptor-agonist-received-approval-from-chinas-nmpa-for-chronic-weight-management-302493152.html
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Innovent Biologics. Mazdutide received approval from China&apos;s NMPA for glycemic control in adults with type 2 diabetes. September 2025.{" "}
          <a
            href="https://www.prnewswire.com/news-releases/innovent-announces-mazdutide-received-approval-from-chinas-nmpa-for-glycemic-control-in-adults-with-type-2-diabetes-302561434.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://www.prnewswire.com/news-releases/innovent-announces-mazdutide-received-approval-from-chinas-nmpa-for-glycemic-control-in-adults-with-type-2-diabetes-302561434.html
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
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const peptideNews = articlesForPeptide("mazdutide");
if (peptideNews.length) sections.push({ id: "news", title: "In the News", node: <ProfileNews articles={peptideNews} /> });

const tocSections = [
  { id: "overview", title: "What is Mazdutide?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function MazdutidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Mazdutide","description":"Mazdutide (IBI362, LY3305677) research profile: GLP-1/glucagon dual-agonist mechanism, Phase 3 GLORY trial results in Chinese adults, dosing, side effects, FAQ, and China NMPA vs FDA regulatory status.","url":"https://profpeptide.com/peptides/mazdutide","publisher": { "@type": "Organization", "@id": "https://profpeptide.com/#organization", "name": "Prof. Peptide", "url": "https://profpeptide.com", "logo": "https://profpeptide.com/icon.png" }}} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Peptides", path: "/peptides" }, { name: "Mazdutide" }])} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">Mazdutide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">Approved in China</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">
        Last reviewed: August 13, 2026
      </p>

      {/* Quick Facts — key facts already present on this page, in a scannable grid */}
      <section aria-label="Quick Facts" className="panel-card mb-10 overflow-hidden">
        <div className="px-5 py-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-[#16181B] dark:text-slate-100 mb-3">
            Quick Facts
          </h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">What it is</dt>
              <dd className="text-base text-[#16181B] dark:text-slate-100">A lab-made oxyntomodulin analog (IBI362) that activates two metabolic hormone receptors at once &mdash; GLP-1 and glucagon &mdash; studied for obesity and type 2 diabetes.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Also known as</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">IBI362, LY3305677</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Subcutaneous injection, once weekly</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Long-acting &mdash; supports once-weekly dosing</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Weekly, escalated stepwise to 4–6 mg (GLORY-1) or 9 mg (GLORY-2)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Approved in China (NMPA, 2025) for weight management and type 2 diabetes; NOT FDA-approved &mdash; investigational elsewhere.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mobile "Jump to section" (collapses cleanly; rail TOC is hidden on mobile) */}
      <ProfileTOC sections={tocSections} variant="mobile" />

      {/* Two-column: primary content + right rail */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 lg:items-start">
        <main className="min-w-0">

      <div id="overview" className="scroll-mt-24">
        <h2 className="section-heading mb-3">What is Mazdutide?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Mazdutide (IBI362, LY3305677) is a once-weekly injectable peptide developed by Innovent Biologics from a molecule licensed from Eli Lilly. It is an oxyntomodulin analog that activates two metabolic hormone receptors at once: GLP-1 and glucagon &mdash; the same receptor pair as{" "}
            <Link href="/peptides/survodutide" className="text-[#3A759F] hover:underline">survodutide</Link>. The GLP-1 arm reduces appetite and slows gastric emptying, the pathway behind{" "}
            <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">semaglutide</Link>; the glucagon arm adds energy expenditure and liver-fat effects, distinguishing it from the GLP-1/GIP agonist{" "}
            <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">tirzepatide</Link>{" "}
            and the triple agonist{" "}
            <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">retatrutide</Link>. Mazdutide&rsquo;s pivotal evidence comes from Phase 3 trials in Chinese adults, and it was the world&rsquo;s first dual glucagon/GLP-1 agonist to win regulatory approval &mdash; from China&rsquo;s NMPA. It is not approved by the US FDA.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits (from peer-reviewed Phase 3 trials in Chinese adults):
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mean body-weight reduction of 14.01% at 6 mg over 48 weeks (GLORY-1)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mean body-weight reduction of 16.65% at 9 mg over 60 weeks (GLORY-2)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">84.3% of participants achieving at least 5% weight reduction at 9 mg (vs 33.1% placebo)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Glycemic benefit sufficient for a China NMPA type 2 diabetes indication</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Once-weekly subcutaneous dosing</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> The Phase 3 GLORY trials used once-weekly subcutaneous maintenance doses of 4–6 mg (GLORY-1) and 9 mg (GLORY-2), reached by stepwise escalation. In China, dosing follows the approved label; elsewhere the compound is investigational.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current options.
          </p>
        </div>
      </div>

      {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-24 mt-12 border-t-2 border-brand/30 pt-12">
            <h2 className="section-heading mb-3">
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

      <div className="flex flex-wrap gap-2 mt-8">
        {["Weight Loss", "Metabolic Health", "Type 2 Diabetes", "Dual Agonist", "Approved in China"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/survodutide" className="text-sm font-medium text-[#3A759F] hover:underline">Survodutide</Link>
        <Link href="/peptides/retatrutide" className="text-sm font-medium text-[#3A759F] hover:underline">Retatrutide</Link>
        <Link href="/peptides/tirzepatide" className="text-sm font-medium text-[#3A759F] hover:underline">Tirzepatide</Link>
        <Link href="/peptides/semaglutide" className="text-sm font-medium text-[#3A759F] hover:underline">Semaglutide</Link>
        <Link href="/peptides/cagrilintide" className="text-sm font-medium text-[#3A759F] hover:underline">Cagrilintide</Link>
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
    <ContactLink pageName="Mazdutide" pagePath="/peptides/mazdutide" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
