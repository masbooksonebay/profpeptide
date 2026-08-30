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
import NavLink from "@/components/NavLink";

export const metadata = buildPageMetadata({
  path: "/peptides/survodutide",
  title: "Survodutide — Research Profile, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Survodutide (BI 456906) research profile: glucagon/GLP-1 dual-agonist mechanism, Phase 2 obesity, MASH, and type 2 diabetes trial results, dosing, side effects, FAQ, and current regulatory status.",
});

const faqs = [
  {
    q: "Is survodutide FDA-approved?",
    a: "No. Survodutide is investigational and is not approved by the FDA, EMA, or any regulatory body anywhere in the world. Its Phase 3 obesity program (SYNCHRONIZE) and MASH program (LIVERAGE) are ongoing as of 2026. The US FDA granted survodutide Breakthrough Therapy designation for MASH with moderate-to-advanced fibrosis in September 2024, but a designation is not an approval.",
  },
  {
    q: "How does survodutide differ from semaglutide and tirzepatide?",
    a: (
      <>
        <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>{" "}
        activates one receptor (GLP-1).{" "}
        <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>{" "}
        activates two (GLP-1 + GIP). Survodutide also activates two, but a different pair: GLP-1 and glucagon. The glucagon arm is the key distinction &mdash; it raises resting energy expenditure and promotes fat oxidation in the liver, which is why survodutide&rsquo;s development leans heavily toward metabolic liver disease (MASH) in addition to obesity.
      </>
    ),
  },
  {
    q: "How much weight loss did survodutide produce in trials?",
    a: "In the peer-reviewed Phase 2 obesity trial (Lancet Diabetes & Endocrinology, 2024), participants who reached the 4.8 mg weekly dose lost an average of 14.9% of their body weight over 46 weeks, versus 2.8% on placebo, under the trial's primary treatment-policy analysis. Phase 3 SYNCHRONIZE results are not yet peer-reviewed and are not reported here.",
  },
  {
    q: "Why is survodutide being studied for liver disease?",
    a: "The glucagon-receptor arm acts directly on the liver to increase fat oxidation and reduce hepatic fat, on top of the weight loss driven by the GLP-1 arm. In the Phase 2 MASH trial (NEJM, 2024), 62% of participants on the 4.8 mg dose achieved histologic improvement of MASH without worsening of fibrosis, compared with 14% on placebo.",
  },
  {
    q: "Does survodutide cause muscle loss?",
    a: "Like other incretin-based agents, survodutide can reduce lean mass alongside fat mass during rapid weight loss. Resistance training and adequate protein intake (typically 1.2–1.6 g/kg body weight per day) are commonly used in research contexts to reduce lean-mass loss. There are no approved retail guidelines for survodutide.",
  },
  {
    q: "What are the most common side effects?",
    a: "Gastrointestinal effects dominate — nausea, vomiting, diarrhea, and decreased appetite — and are most pronounced during dose escalation. These are consistent with the GLP-1 class. Slow, stepwise titration is used specifically to reduce their severity.",
  },
  {
    q: "Can I drink alcohol on survodutide?",
    a: "Alcohol compounds the nausea and dehydration associated with GLP-1-class compounds, and it independently stresses the liver — relevant given survodutide's liver-directed mechanism. In research contexts, alcohol is commonly avoided around the weekly injection.",
  },
  {
    q: "Where can I get survodutide?",
    a: (
      <>
        Survodutide is investigational and is not available by prescription anywhere. Research-grade material is sold by specialty peptide vendors for laboratory use only. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <NavLink href="/coupons" className="text-[#3A759F] hover:underline">Verified Discount Codes</NavLink>
        .
      </>
    ),
  },
];

const studies = [
  {
    title: "Glucagon and GLP-1 receptor dual agonist survodutide for obesity: a randomised, double-blind, placebo-controlled, dose-finding phase 2 trial",
    authors: "le Roux CW, Steen O, Lucas KJ, et al.",
    journal: "Lancet Diabetes & Endocrinology",
    year: "2024",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/38330987/",
    summary: "The Phase 2 dose-finding obesity trial of survodutide in 386 adults (survodutide n=309; placebo n=77) with overweight or obesity. After a 20-week dose-escalation and 26-week maintenance period, mean body weight change to week 46 under the primary treatment-policy analysis was −6.2% (0.6 mg), −12.5% (2.4 mg), −13.2% (3.6 mg), and −14.9% (4.8 mg), versus −2.8% on placebo. Up to 40% of participants reaching the two highest doses lost at least 20% of body weight. Gastrointestinal effects were the most common adverse events and were mitigated by slow titration. This established survodutide's dose-response and set the doses carried into the Phase 3 SYNCHRONIZE obesity program.",
  },
  {
    title: "A Phase 2 Randomized Trial of Survodutide in MASH and Fibrosis",
    authors: "Sanyal AJ, Bedossa P, Fraessdorf M, et al.",
    journal: "New England Journal of Medicine",
    year: "2024",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/38847460/",
    summary: "A 48-week Phase 2 trial in 293 adults with biopsy-confirmed metabolic dysfunction-associated steatohepatitis (MASH) and fibrosis. The primary endpoint — histologic improvement of MASH with no worsening of fibrosis — was met by 47% (2.4 mg), 62% (4.8 mg), and 43% (6.0 mg) of survodutide-treated participants, versus 14% on placebo (P<0.001), with a quadratic dose-response best fitting the 4.8 mg dose. The result is the clinical basis for survodutide's liver-directed development and its US FDA Breakthrough Therapy designation for MASH. It reflects the glucagon-receptor arm's direct action on hepatic fat, distinct from the appetite-driven weight loss of the GLP-1 arm.",
  },
  {
    title: "Dose-response effects on HbA1c and bodyweight reduction of survodutide, a dual glucagon/GLP-1 receptor agonist, compared with placebo and open-label semaglutide in people with type 2 diabetes",
    authors: "Blüher M, Rosenstock J, Hoefler J, Manuel R, Hennige AM.",
    journal: "Diabetologia",
    year: "2024",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/38095657/",
    summary: "A 16-week Phase 2 dose-finding trial in 413 adults with type 2 diabetes, comparing multiple survodutide titration schemes against placebo and open-label semaglutide. At the highest survodutide dose, HbA1c fell by 1.68 percentage points and body weight by 8.7% from baseline. Body-weight reduction at the higher survodutide doses exceeded that of the semaglutide comparator arm over the short study period. The trial demonstrated survodutide's glycemic and weight effects in a diabetes population and informed titration design, while its short duration limits conclusions about durability.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Survodutide work?",
    intro: (
      <>
        Survodutide activates two metabolic hormone receptors at once &mdash; GLP-1 and glucagon. The GLP-1 arm is the familiar satiety pathway shared with{" "}
        <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">semaglutide</Link>{" "}
        and one of the two receptors hit by{" "}
        <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">tirzepatide</Link>: it slows gastric emptying, reduces appetite, and improves glucose-dependent insulin release. The second arm &mdash; glucagon-receptor activation &mdash; is what sets survodutide apart from the GLP-1/GIP agonists, adding an energy-expenditure and liver-fat effect on top of appetite suppression.
      </>
    ),
    body: [
      "GLP-1 receptor activation. Survodutide activates the GLP-1 receptor, slowing gastric emptying, reducing appetite, and enhancing glucose-dependent insulin secretion. This is the same pathway used by semaglutide (Ozempic, Wegovy).",
      "Glucagon receptor activation. The second arm activates the glucagon receptor, which increases resting energy expenditure and drives fat oxidation in the liver. This hepatic action is the mechanistic reason survodutide is being developed for metabolic liver disease (MASH), not just obesity.",
      "Balanced dual agonism. Survodutide is engineered as a balanced glucagon/GLP-1 co-agonist so the glucagon arm's energy-expenditure and liver-fat benefits are captured while the GLP-1 arm offsets glucagon's tendency to raise blood glucose. This balance is central to the compound's design.",
      "Distinct from GIP-based agonists. Because survodutide pairs GLP-1 with glucagon rather than GIP, its mechanism and its most-studied indication (MASH) differ from tirzepatide's GLP-1/GIP profile, even though both are once-weekly incretin-class injectables.",
    ],
  },
  {
    id: "research",
    title: "What is Survodutide used for?",
    intro:
      "Survodutide is investigational and approved for no use anywhere. In research, it has been studied across three metabolic areas in peer-reviewed Phase 2 trials — obesity, metabolic liver disease (MASH), and type 2 diabetes — with Phase 3 programs (SYNCHRONIZE for obesity, LIVERAGE for MASH) now ongoing. Only the peer-reviewed Phase 2 results are reported below.",
    body: [
      "Obesity and weight management [1]. In the Phase 2 dose-finding obesity trial, participants who reached the 4.8 mg weekly dose lost an average of 14.9% of body weight over 46 weeks, versus 2.8% on placebo, under the primary treatment-policy analysis. The Phase 3 SYNCHRONIZE obesity program is ongoing.",
      "Metabolic liver disease / MASH [2]. In a 48-week Phase 2 trial, 62% of participants on the 4.8 mg dose achieved histologic improvement of MASH without worsening of fibrosis, versus 14% on placebo. This is survodutide's flagship indication and the basis for its FDA Breakthrough Therapy designation; the Phase 3 LIVERAGE and LIVERAGE-Cirrhosis trials are ongoing.",
      "Type 2 diabetes [3]. In a 16-week Phase 2 trial, the highest survodutide dose reduced HbA1c by 1.68 percentage points and body weight by 8.7%. The short duration limits conclusions about durability.",
      "Cardiovascular and metabolic risk factors [1][3]. Across the Phase 2 trials, weight loss was accompanied by improvements in glycemic and metabolic markers. Dedicated cardiovascular-outcomes data for survodutide is not yet available.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Survodutide take to work?",
    intro:
      "Survodutide's effects build gradually over a long titration. Appetite reduction typically appears within the first weeks, but the doses that produced the largest trial effects were only reached after months of stepwise escalation. In the Phase 2 obesity trial the weight-loss curve was still developing across the 46-week study.",
    content:
      "In the Phase 2 obesity trial, survodutide was escalated over 20 weeks before a 26-week maintenance phase — so the full 4.8 mg dose was only reached partway through the study. Appetite reduction generally appeared within the first weeks of dosing, while meaningful weight loss accumulated over the escalation and maintenance phases, reaching a mean of 14.9% at the 4.8 mg dose by week 46. Because survodutide is investigational, there are no approved onset-of-effect expectations outside the trial protocols; timelines observed in research reflect the specific escalation schedules used.",
  },
  {
    id: "dosing",
    title: "How is Survodutide dosed?",
    intro:
      "Survodutide is administered as a once-weekly subcutaneous injection using a stepwise dose-escalation protocol. The slow titration exists to let the body adapt and to reduce gastrointestinal side effects — the Phase 2 obesity trial escalated over 20 weeks before maintenance. Survodutide is not FDA-approved; the doses below are drawn from published trial protocols, not from any approved label.",
    node: (
      <div className="space-y-3">
        <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">
          Doses studied in Phase 2 trials:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Obesity trial.</span> Weekly subcutaneous doses of 0.6, 2.4, 3.6, and 4.8 mg, reached by escalation over 20 weeks followed by 26 weeks of maintenance.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">MASH trial.</span> Weekly subcutaneous doses up to 6.0 mg, with the 4.8 mg dose producing the strongest histologic response.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Type 2 diabetes trial.</span> A 16-week dose-finding study of several titration schemes, establishing glycemic and weight effects at the higher doses.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Survodutide is long-acting, supporting once-weekly administration. Escalation is deliberately slow: gastrointestinal tolerability, not efficacy, is the limiting factor early in a protocol, and holding at a step until side effects settle is standard practice in the trial designs.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Survodutide is investigational. Any dosing outside a clinical trial is derived from published trial data, not from approved retail guidelines, which do not exist for this compound.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate a dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <NavLink href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator</NavLink>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is Survodutide administered?",
    intro:
      "Survodutide is given as a subcutaneous injection — under the skin, not into muscle — once weekly. As with other incretin-class injectables, the supporting routine (consistent weekly timing, hydration, eating pattern) matters for tolerability as much as the dose itself. The points below cover the practical details common to research protocols.",
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
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">2.4 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">3.6 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">4.8 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">6 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">24 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">36 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">48 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">48 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">72 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">96 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">72 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          *Draw exceeds standard 100-unit insulin syringe capacity at this reconstitution volume — use a higher concentration (less BAC water) or split the injection. Trial doses ranged 0.6–6 mg weekly; titrate slowly.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Survodutide stack well with?",
    intro:
      "Survodutide's dual-agonist mechanism is potent on its own, and stacking it with other GLP-1-class compounds tends to amplify gastrointestinal side effects without proportional benefit. The cleanest additions are non-peptide: resistance training, adequate protein, and — given the liver-directed mechanism — attention to alcohol and hepatotoxic exposures. The items to avoid overlap the same incretin pathways.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> The most common research protocol. The dual-agonist effect is strong enough that adding other GLP-1-class peptides is generally unnecessary and compounds side effects.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + 1.2–1.6 g/kg protein.</span> Used to preserve lean mass during rapid weight loss, as with all incretin-class agents.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Liver-supportive habits.</span> Because the glucagon arm acts on the liver, minimizing alcohol and other hepatic stressors is a logical accompaniment in research contexts.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: other GLP-1-class agonists.</span>{" "}
          Combining survodutide with{" "}
          <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">semaglutide</Link>,{" "}
          <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">tirzepatide</Link>,{" "}
          <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">retatrutide</Link>, or{" "}
          <Link href="/peptides/mazdutide" className="text-[#3A759F] hover:underline">mazdutide</Link>{" "}
          stacks the same receptor pathways and sharply increases GI side effects without added benefit.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Survodutide?",
    intro:
      "Survodutide's side-effect profile is dominated by gastrointestinal effects, consistent with the GLP-1 class, and these are most pronounced during dose escalation. The glucagon-receptor arm introduces a small number of mechanism-specific considerations, including modest heart-rate increases and the theoretical effect on blood glucose that the balanced GLP-1 arm is designed to offset.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nausea.</span> The most common effect, especially while escalating the dose.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vomiting and diarrhea.</span> Common at higher doses and during titration.</li>
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
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Increased heart rate.</span> Modest heart-rate increases have been observed with the class and are relevant to the glucagon arm.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache and fatigue.</span> Typically mild, most noticeable in the days after a dose increase.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Blood-glucose effects.</span> Glucagon raises blood glucose in isolation; survodutide's balanced GLP-1 arm is designed to offset this, and the Phase 2 diabetes trial showed net HbA1c reduction. Glucose is monitored in trials.</li>
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
          Most side effects in the Phase 2 trials were mild to moderate and concentrated during escalation; slow titration is the primary mitigation. Survodutide's long-term safety profile is still being established in the ongoing Phase 3 program.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Survodutide interact with other drugs?",
    intro:
      "As an incretin-based agent that slows gastric emptying and lowers blood glucose, survodutide carries the same interaction considerations as the GLP-1 class: additive hypoglycemia risk with other glucose-lowering drugs, and altered absorption of oral medications. The list below reflects mechanism-based expectations, since survodutide has no approved label.",
    body: [
      "Insulin and sulfonylureas. Combining survodutide with insulin or sulfonylureas increases the risk of hypoglycemia; dose adjustment of the background therapy is typically needed in clinical contexts.",
      "Oral medications. Slowed gastric emptying can affect the absorption of oral drugs, most relevant for those with a narrow therapeutic window (e.g., warfarin, levothyroxine).",
      "Other GLP-1-class agonists. Should not be combined — overlapping pathways increase side effects without added benefit.",
      "Alcohol. Compounds nausea and dehydration and adds hepatic stress, which is relevant given the liver-directed mechanism.",
    ],
  },
  {
    id: "storage",
    title: "How should Survodutide be stored?",
    body: [
      "Lyophilized (powder) form: store at 2–8°C (refrigerated), sealed, for the supplier's stated shelf life.",
      "Reconstituted solution: store at 2–8°C. Research-grade preparations are commonly used within about 28–30 days of reconstitution; follow the supplier's product specifications.",
      "Reconstitution: use bacteriostatic water for injection at the volume specified by the dose calculator. Swirl gently — do not shake.",
      "Do not freeze. Freezing damages the peptide and renders it inactive.",
      "Protect from light and discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Survodutide research?",
    intro:
      "Survodutide is an investigational drug approved for no use anywhere. Its strongest peer-reviewed evidence is Phase 2, and the Phase 3 obesity and MASH programs are ongoing, so long-term efficacy and safety are not yet established. Reported figures come from dose-finding trials with specific populations and durations.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Survodutide is NOT approved by the FDA, EMA, or any regulatory body. The US FDA granted it Breakthrough Therapy designation for MASH with moderate-to-advanced fibrosis in September 2024 — a designation that expedites review but is not an approval. Boehringer Ingelheim develops survodutide under license from Zealand Pharma.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The peer-reviewed efficacy data is Phase 2: a 46-week obesity trial, a 48-week MASH trial, and a 16-week diabetes trial. The Phase 3 SYNCHRONIZE obesity trials and LIVERAGE MASH trials are ongoing; their results were not yet published in the peer-reviewed literature at the time of writing and are therefore not reported on this page. Company topline announcements are not a substitute for peer-reviewed publication.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Survodutide is not an approved medicine. Research-grade material is sold in a regulatory gray area, typically labeled &ldquo;for research use only, not for human consumption.&rdquo; Legal status varies by country, and GLP-1-class compounds are prohibited in sport by the World Anti-Doping Agency.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Survodutide",
    intro:
      "Survodutide is investigational and not available by prescription. Research-grade material is sold by specialty peptide vendors for laboratory use only. The vendors surfaced below are drawn from PP's attribution-verified list based on demonstrable price coverage for this compound.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock compoundSlug="survodutide" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <NavLink href="/coupons" className="text-[#3A759F] hover:underline">See all {activeVendorCount} verified vendors</NavLink>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Survodutide FAQ",
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
          le Roux CW, Steen O, Lucas KJ, et al. Glucagon and GLP-1 receptor dual agonist survodutide for obesity: a randomised, double-blind, placebo-controlled, dose-finding phase 2 trial. Lancet Diabetes Endocrinol. 2024;12(3):162-173.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/38330987/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/38330987/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sanyal AJ, Bedossa P, Fraessdorf M, et al. A Phase 2 Randomized Trial of Survodutide in MASH and Fibrosis. N Engl J Med. 2024;391(4):311-319.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/38847460/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/38847460/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Blüher M, Rosenstock J, Hoefler J, Manuel R, Hennige AM. Dose-response effects on HbA1c and bodyweight reduction of survodutide, a dual glucagon/GLP-1 receptor agonist, compared with placebo and open-label semaglutide in people with type 2 diabetes: a randomised clinical trial. Diabetologia. 2024;67(3):470-482.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/38095657/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/38095657/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Boehringer Ingelheim. Survodutide granted US FDA Breakthrough Therapy designation for people living with MASH and moderate-to-advanced fibrosis. September 2024.{" "}
          <a
            href="https://www.boehringer-ingelheim.com/human-health/metabolic-diseases/survodutide-us-fda-breakthrough-therapy-phase-3-trials-mash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A759F] hover:underline break-words"
          >
            https://www.boehringer-ingelheim.com/human-health/metabolic-diseases/survodutide-us-fda-breakthrough-therapy-phase-3-trials-mash
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

const peptideNews = articlesForPeptide("survodutide");
if (peptideNews.length) sections.push({ id: "news", title: "In the News", node: <ProfileNews articles={peptideNews} /> });

const tocSections = [
  ...sections.filter((s) => s.id === "where-to-buy").map((s) => ({ id: s.id, title: s.title })),
  { id: "overview", title: "What is Survodutide?" },
  ...sections.filter((s) => s.id !== "where-to-buy").map((s) => ({ id: s.id, title: s.title })),
];

export default function SurvodutidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Survodutide","description":"Survodutide (BI 456906) research profile: glucagon/GLP-1 dual-agonist mechanism, Phase 2 obesity, MASH, and type 2 diabetes trial results, dosing, side effects, FAQ, and current regulatory status.","url":"https://profpeptide.com/peptides/survodutide","publisher": { "@type": "Organization", "@id": "https://profpeptide.com/#organization", "name": "Prof. Peptide", "url": "https://profpeptide.com", "logo": "https://profpeptide.com/icon.png" }}} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Peptides", path: "/peptides" }, { name: "Survodutide" }])} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">Survodutide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">Investigational</span>
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
              <dd className="text-base text-[#16181B] dark:text-slate-100">A lab-made peptide (BI 456906) that activates two metabolic hormone receptors at once &mdash; GLP-1 and glucagon &mdash; studied for obesity, metabolic liver disease (MASH), and type 2 diabetes.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Also known as</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">BI 456906</dd>
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
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Weekly, escalated stepwise toward 4.8 mg (up to 6 mg in the MASH trial)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Not approved anywhere &mdash; investigational (Phase 3 ongoing); FDA Breakthrough Therapy for MASH; research use only.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mobile "Jump to section" (collapses cleanly; rail TOC is hidden on mobile) */}
      <ProfileTOC sections={tocSections} variant="mobile" />

      {/* Two-column: primary content + right rail */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 lg:items-start">
        <main className="min-w-0">
      {sections.filter((s) => s.id === "where-to-buy").map((s) => (
        <div key={s.id} id={s.id} className="scroll-mt-24 mb-12">
          <h2 className="section-heading mb-3">{s.title}</h2>
          {s.intro && (
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">{s.intro}</p>
          )}
          {s.node}
        </div>
      ))}


      <div id="overview" className="scroll-mt-24">
        <h2 className="section-heading mb-3">What is Survodutide?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Survodutide (BI 456906) is a once-weekly injectable peptide developed by Boehringer Ingelheim, under license from Zealand Pharma, that activates two metabolic hormone receptors at once: GLP-1 and glucagon. The GLP-1 arm is the same pathway behind{" "}
            <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">semaglutide</Link>{" "}
            (Ozempic, Wegovy) and one of the two receptors hit by{" "}
            <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">tirzepatide</Link>{" "}
            (Mounjaro, Zepbound); survodutide pairs it with glucagon-receptor activation, which raises energy expenditure and drives fat oxidation in the liver. That places it in the same incretin class as the triple agonist{" "}
            <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">retatrutide</Link>{" "}
            and the GLP-1/glucagon agonist{" "}
            <Link href="/peptides/mazdutide" className="text-[#3A759F] hover:underline">mazdutide</Link>, but with a development program weighted heavily toward metabolic liver disease (MASH) alongside obesity. As of 2026 it is investigational and approved for no use anywhere, with Phase 3 trials ongoing.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits (from peer-reviewed Phase 2 trials):
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mean body-weight reduction of 14.9% at the 4.8 mg dose over 46 weeks in Phase 2 obesity research</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Histologic improvement of MASH without worsening fibrosis in 62% of participants at 4.8 mg (vs 14% placebo)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">HbA1c reduction of 1.68 percentage points and 8.7% weight loss at the top dose in a 16-week diabetes trial</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Direct liver-fat reduction via the glucagon arm, on top of appetite-driven weight loss</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Once-weekly subcutaneous dosing</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> Published Phase 2 protocols escalated weekly subcutaneous doses stepwise to 4.8 mg (obesity) or up to 6 mg (MASH). Protocols used in research draw from these published escalations; there are no approved retail dosing guidelines.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
            <NavLink href="/coupons" className="text-[#3A759F] hover:underline">Verified Discount Codes</NavLink>{" "}
            for current options.
          </p>
        </div>
      </div>

      {sections.filter((s) => s.id !== "where-to-buy").map((s) => (
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
        {["Weight Loss", "Metabolic Health", "MASH", "Dual Agonist", "Investigational"].map((tag) => (
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
        <Link href="/peptides/mazdutide" className="text-sm font-medium text-[#3A759F] hover:underline">Mazdutide</Link>
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
    <ContactLink pageName="Survodutide" pagePath="/peptides/survodutide" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
