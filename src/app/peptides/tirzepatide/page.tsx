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
  path: "/peptides/tirzepatide",
  title: "Tirzepatide — Mounjaro, Zepbound, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Tirzepatide (Mounjaro/Zepbound) research profile: mechanism, SURMOUNT trial results, dosing protocol, side effects, FAQ, and FDA approval status.",
});

const faqs = [
  {
    q: "Is tirzepatide better than semaglutide?",
    a: (
      <>
        For weight loss, yes &mdash; head-to-head in SURMOUNT-5 (NEJM 2025), tirzepatide produced 20.2% average weight loss vs 13.7% with{" "}
        <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>{" "}
        over 72 weeks at maximum doses. About 32% of tirzepatide users achieved at least 25% weight loss vs 16% on semaglutide. Tirzepatide also showed greater reductions in waist circumference, blood pressure, A1C, and triglycerides. Semaglutide has the longer safety record and more established cardiovascular benefit (SELECT trial).
      </>
    ),
  },
  {
    q: "How long does tirzepatide take to work?",
    a: "Most users notice reduced appetite within the first 1–2 weeks. Modest weight loss appears by week 4 at the 2.5 mg starting dose. Average weight loss reaches about 12% by 24 weeks, 18% by 52 weeks, and 20.9% by 72 weeks at the 15 mg maintenance dose.",
  },
  {
    q: "What happens if I stop tirzepatide?",
    a: "Most users regain a significant portion of lost weight after stopping. The SURMOUNT-4 trial showed that participants who stopped tirzepatide regained about 14% of body weight over 52 weeks, while those who continued maintained their loss. Tirzepatide is generally considered a long-term medication for weight management, similar to medications for blood pressure or cholesterol.",
  },
  {
    q: "Does tirzepatide cause muscle loss?",
    a: "All GLP-class drugs can cause loss of lean mass alongside fat loss, especially during rapid weight reduction. Estimates suggest 20–40% of weight lost on tirzepatide is from lean tissue. Resistance training and adequate protein intake (1.2–1.6 g/kg body weight per day) significantly reduce muscle loss.",
  },
  {
    q: "Can I drink alcohol on tirzepatide?",
    a: "Alcohol compounds nausea and dehydration, and can increase hypoglycemia risk. Most users find it best to avoid alcohol or drink minimally, especially in the first 48 hours after each weekly injection. Alcohol can also worsen reflux and gastric symptoms.",
  },
  {
    q: "Is tirzepatide covered by insurance?",
    a: "Mounjaro (diabetes indication) is generally covered by most insurance plans for type 2 diabetes. Zepbound (weight loss indication) coverage varies widely — some commercial insurance plans cover it; Medicare does not currently cover weight-loss drugs. Cash pay is roughly $1,000–$1,300 per month at retail pharmacies, with manufacturer savings cards available for some users.",
  },
  {
    q: "What is the difference between Mounjaro and Zepbound?",
    a: "They are the same medication (tirzepatide) sold under different brand names for different FDA-approved uses. Mounjaro is for type 2 diabetes; Zepbound is for chronic weight management and obstructive sleep apnea in adults with obesity. The dose schedules are identical.",
  },
  {
    q: "Where can I get tirzepatide?",
    a: (
      <>
        Brand-name Mounjaro and Zepbound require a prescription from a US-licensed provider. Some telehealth services prescribe and ship; some compounded versions are available through specialty pharmacies. Research-grade tirzepatide is also sold by specialty peptide vendors for laboratory use only &mdash; see{" "}
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
    title: "Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1)",
    authors: "Jastreboff AM, Aronne LJ, Ahmad NN, et al. — SURMOUNT-1 Investigators",
    journal: "New England Journal of Medicine",
    year: "2022",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
    summary: "The pivotal trial establishing tirzepatide for obesity treatment. In 2,539 adults with obesity (without diabetes) over 72 weeks, tirzepatide produced average weight losses of 15.0% (5mg), 19.5% (10mg), and 20.9% (15mg) — compared to 3.1% with placebo. At the highest dose, 57% of participants lost 20% or more of their body weight — a level of weight loss previously achievable only through bariatric surgery. This was the first trial demonstrating the dual GIP/GLP-1 mechanism's superior weight loss over single GLP-1 agonists.",
  },
  {
    title: "Tirzepatide for Obesity Treatment and Diabetes Prevention — SURMOUNT-1 3-Year Results",
    authors: "Jastreboff AM, le Roux CW, Stefanski A, et al. — SURMOUNT-1 Investigators",
    journal: "New England Journal of Medicine",
    year: "2025",
    access: "Open Access",
    url: "https://www.nejm.org/doi/abs/10.1056/NEJMoa2410819",
    summary: "Three-year follow-up of SURMOUNT-1 participants with prediabetes. Tirzepatide maintained 19.7% weight loss at 176 weeks and dramatically reduced diabetes progression — only 1.3% of tirzepatide participants developed type 2 diabetes compared to 13.3% of those on placebo, representing a 93% relative risk reduction. Even 17 weeks after stopping treatment, the protection against diabetes development persisted — suggesting the weight loss itself is driving lasting metabolic benefit.",
  },
  {
    title: "Tirzepatide as Compared with Semaglutide for the Treatment of Obesity (SURMOUNT-5)",
    authors: "Aronne LJ, Bade Horn D, le Roux CW, et al. — SURMOUNT-5 Investigators",
    journal: "New England Journal of Medicine",
    year: "2025",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2416394",
    summary: "The first direct head-to-head comparison of tirzepatide and semaglutide for obesity. In 751 adults with obesity over 72 weeks, tirzepatide produced 20.2% average weight loss compared to 13.7% with semaglutide — a clinically meaningful difference of 6.5 percentage points favoring tirzepatide. Waist circumference reductions were also significantly greater with tirzepatide. This trial established tirzepatide as the more potent weight loss agent when the two are compared directly at maximum tolerated doses.",
  },
  {
    title: "Tirzepatide and Heart Failure with Preserved Ejection Fraction (SUMMIT)",
    authors: "Bhatt DL, Raman SV, et al.",
    journal: "New England Journal of Medicine",
    year: "2024",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2410402",
    summary: "The SUMMIT trial enrolled 731 adults with obesity-related heart failure with preserved ejection fraction (HFpEF) — a condition with very limited treatment options. Tirzepatide significantly improved exercise capacity, reduced symptoms, and led to greater weight loss compared to placebo. This extended tirzepatide's clinical evidence base to heart failure, one of obesity's most serious cardiovascular complications.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Tirzepatide work?",
    intro: (
      <>
        Tirzepatide is a dual-receptor agonist that activates both GLP-1 and GIP receptors. The GLP-1 arm slows stomach emptying and suppresses appetite (the same pathway used by{" "}
        <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>
        ); the GIP arm adds enhanced insulin signaling and improved fat metabolism on top. The dual-pathway design is the reason head-to-head trials show tirzepatide producing more weight loss than semaglutide.{" "}
        <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link>{" "}
        extends the same architecture with a third receptor (glucagon).
      </>
    ),
    body: [
      "GLP-1 Receptor Activation [1]. Tirzepatide activates the GLP-1 receptor, which slows stomach emptying, reduces appetite, and triggers insulin release in response to food. This is the same receptor pathway used by semaglutide.",
      "GIP Receptor Activation [1][2]. Tirzepatide also activates the GIP receptor, which enhances insulin signaling and improves how the body processes fat. Adding GIP to GLP-1 activation is what makes tirzepatide more effective than semaglutide for weight loss in head-to-head trials.",
      "Combined Dual-Agonist Effect [3]. The two receptors work together to reduce hunger more effectively, slow digestion, improve insulin response, and support fat loss. This combined action is the basis for the SURMOUNT trial outcomes showing greater weight loss than single-receptor drugs.",
      "Slowed Gastric Emptying [1]. By delaying how quickly food leaves the stomach, tirzepatide increases feelings of fullness after meals and reduces overall food intake. This effect is most pronounced during the first weeks of dose escalation.",
      "Improved Insulin Sensitivity [2]. Tirzepatide improves how the body responds to its own insulin, which is part of why it lowers blood sugar so effectively in people with type 2 diabetes.",
    ],
  },
  {
    id: "research",
    title: "What is Tirzepatide used for?",
    intro:
      "Tirzepatide is FDA-approved for type 2 diabetes (Mounjaro, May 2022), chronic weight management (Zepbound, November 2023), and moderate-to-severe obstructive sleep apnea in adults with obesity (Zepbound expansion, December 2024). The SURPASS program supported the diabetes approval; the SURMOUNT program supported the obesity and OSA approvals. Additional research is ongoing across cardiovascular outcomes, heart failure, and metabolic liver disease.",
    body: [
      "Obesity and Weight Management [3][4]. The SURMOUNT Phase 3 program established tirzepatide as a leading weight-loss medication. SURMOUNT-1 (NEJM 2022) showed average 20.9% weight loss at 15 mg over 72 weeks. SURMOUNT-5 (NEJM 2025) head-to-head against semaglutide showed 20.2% with tirzepatide vs 13.7% with semaglutide.",
      "Type 2 Diabetes [5]. The SURPASS Phase 3 program supported FDA approval for type 2 diabetes. Tirzepatide reduced A1C by 2.0–2.5% in trials, more than semaglutide and other GLP-1 drugs in similar populations.",
      "Cardiovascular Risk [6]. SURPASS-CVOT is an ongoing cardiovascular outcomes trial in patients with type 2 diabetes and established cardiovascular disease. Post-hoc analysis of SURMOUNT-5 projected greater 10-year cardiovascular risk reduction with tirzepatide than semaglutide.",
      "Sleep Apnea [7]. SURMOUNT-OSA showed significant reductions in obstructive sleep apnea severity. FDA approved tirzepatide for moderate-to-severe OSA in adults with obesity in 2024.",
      "Heart Failure [8]. SUMMIT trial reported improvements in heart failure with preserved ejection fraction (HFpEF) symptoms in obese patients.",
      "Fatty Liver Disease (MASH) [9]. Phase 2 SYNERGY-NASH showed significant resolution of metabolic dysfunction-associated steatohepatitis. Phase 3 trial underway.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Tirzepatide take to work?",
    intro:
      "Tirzepatide effects build progressively as the dose escalates. Most users notice reduced appetite within 1–2 weeks at the 2.5 mg starting dose. Significant weight loss accumulates over the 20-week titration to 15 mg, then continues for another year before plateauing. Real-world results track close to trial averages when adherence is consistent.",
    content:
      "In trials, most users notice reduced appetite within the first 1–2 weeks at the 2.5 mg starting dose. Modest weight loss (about 2–5%) typically appears by week 4. Significant weight loss accumulates as the dose is increased every 4 weeks. By 24 weeks, average weight loss is around 12%; by 52 weeks, around 18%; and by 72 weeks (SURMOUNT-1, max dose), around 20.9%. Most users reach a plateau between weeks 60–72. Blood sugar improvements in users with type 2 diabetes appear within the first few weeks and continue improving as the dose increases.",
  },
  {
    id: "dosing",
    title: "How is Tirzepatide dosed?",
    intro:
      "Tirzepatide is administered as a once-weekly subcutaneous injection. The FDA-approved titration schedule starts at 2.5 mg and increases every 4 weeks through six dose tiers (2.5 → 5 → 7.5 → 10 → 12.5 → 15 mg) over 20 weeks. Maintenance doses are 5, 10, or 15 mg weekly depending on tolerance and goals. The slow titration is non-negotiable; faster escalation significantly increases GI side effects without improving outcomes.",
    node: (
      <div className="space-y-3">
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          FDA-approved escalation schedule (SURMOUNT-1 protocol):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 1–4.</span> 2.5 mg once weekly (initiation dose, not for chronic use).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 5–8.</span> 5 mg once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 9–12.</span> 7.5 mg once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 13–16.</span> 10 mg once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 17–20.</span> 12.5 mg once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 21+.</span> 15 mg once weekly (maximum dose).</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Maintenance doses are 5, 10, or 15 mg weekly. Most users continue increasing through the schedule until they reach their target weight loss or hit dose-limiting side effects. Holding at the current dose for an additional 4 weeks if side effects are difficult to tolerate is standard practice and does not appear to reduce long-term outcomes.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Half-life is approximately 5 days (~120 hours), supporting once-weekly dosing with steady state reached in roughly 4 weeks at each dose level. Dose adjustments aren&rsquo;t typically needed for kidney or liver impairment, though dehydration from GI side effects can affect kidney function and should be monitored.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          For research-grade tirzepatide outside FDA-approved use, dosing protocols mirror the approved schedule. There are no separate research-grade dosing standards.
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
    title: "How is Tirzepatide administered?",
    intro: (
      <>
        Tirzepatide is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; once weekly, using a small insulin syringe or a pre-filled pen (Mounjaro/Zepbound). The injection routine, timing, and supporting habits (hydration, eating pattern, alcohol management) matter as much as the dose for tolerability. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection, once weekly. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Any time, but consistent. Many users inject at the same day and time each week (e.g., Sunday mornings).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each week to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> If less than 4 days late, take as soon as remembered. If 4 or more days late, skip the missed dose and resume on the next scheduled day. Do not double-dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pen handling.</span> Mounjaro/Zepbound pens come pre-filled. Store refrigerated until use. Allow to warm to room temperature for 30 minutes before injecting to reduce sting.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Eating pattern.</span> Smaller, more frequent meals reduce nausea. Avoid large fatty meals especially in the 24 hours after injection.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hydration.</span> Drink water consistently. Tirzepatide blunts thirst signals, so set a daily water target rather than waiting for thirst.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Alcohol.</span> Avoid for at least 48 hours after injection &mdash; alcohol compounds nausea and dehydration.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Tirzepatide is administered once weekly via subcutaneous injection. Its long half-life produces steady-state receptor activation independent of meal timing &mdash; no fasting is required. The two timing variables that matter most are weekly consistency (same day each week supports stable plasma levels) and time of day (many researchers inject in the evening to sleep through peak GI side effects, especially during titration).
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once weekly, same day each week</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Any consistent time &mdash; many users inject in the evening to sleep through peak GI side effects during titration</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required; inject with or without food</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm &mdash; avoid same site twice within 2 weeks</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~5 days (~120 hours)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Reached in ~4 weeks at each dose level</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. Tirzepatide research vials are commonly 5 mg, 10 mg, or 15 mg. Because Tirz doses range up to 15 mg weekly, higher-concentration reconstitution (1 mL) is often necessary to keep draws within insulin syringe capacity. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table below assumes a 15 mg vial &mdash; for a 10 mg vial multiply unit values by 1.5; for a 5 mg vial multiply by 3.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">2.5 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">5 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">10 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">15 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">17 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">33 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">67 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">7.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">33 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">67 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">50 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          *Draw exceeds standard 100-unit insulin syringe capacity at this reconstitution volume &mdash; would require split injections or a lower reconstitution volume.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 15 mg vial, each unit drawn delivers 150 mcg of Tirzepatide at 1 mL reconstitution, 75 mcg at 2 mL, and 50 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a 10 mg vial, multiply those mcg-per-unit values by 2/3; for a 5 mg vial, multiply by 1/3. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Tirzepatide stack well with?",
    intro:
      "Tirzepatide&rsquo;s dual GLP-1/GIP mechanism is well-characterized, so the stacking question is straightforward: pair with non-overlapping interventions (resistance training, protein, metformin in diabetes contexts) and avoid other GLP-class drugs. The cleanest additions are non-peptide. The things to avoid are anything that compounds the same incretin pathway.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> The most common protocol and what FDA approval supports. Tirzepatide produces substantial weight loss and metabolic improvement on its own.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Metformin.</span> Commonly combined for type 2 diabetes. Standard practice in clinical settings; additive blood-sugar control without overlapping mechanism.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + 1.2–1.6 g/kg protein.</span> Recommended to preserve lean muscle mass during rapid weight loss. Without this, GLP-class drugs can cause significant muscle loss alongside fat loss.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GH-axis peptides for lean-mass preservation.</span>{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
          (CJC-1295 + Ipamorelin) or{" "}
          <Link href="/peptides/mk-677" className="text-[#0891b2] hover:underline">MK-677</Link>{" "}
          are sometimes added during caloric restriction to support lean-mass retention. Side-effect profiles do not overlap meaningfully with tirzepatide.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">SGLT2 inhibitors (empagliflozin, dapagliflozin).</span> Used together in some type 2 diabetes protocols for additive cardiovascular and weight benefits.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Tissue-repair peptides during rapid weight loss.</span>{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
          (BPC-157 + TB-500) is sometimes used for joint and connective-tissue support during the higher-strain phase of significant weight loss.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: other GLP-class drugs.</span>{" "}
          <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>,{" "}
          <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">retatrutide</Link>, and liraglutide should not be combined with tirzepatide. Combining incretin-based drugs significantly increases GI side effects without proportional benefit.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: standalone cagrilintide on top.</span>{" "}
          <Link href="/peptides/cagrilintide" className="text-[#0891b2] hover:underline">Cagrilintide</Link>{" "}
          (amylin agonist) was developed for combination with semaglutide as{" "}
          <Link href="/peptides/cagrisema" className="text-[#0891b2] hover:underline">CagriSema</Link>{" "}
          &mdash; combination data with tirzepatide is limited and adds another mechanism on top of an already strong dual-agonist effect.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Tirzepatide?",
    intro: (
      <>
        Tirzepatide&rsquo;s side-effect profile resembles other GLP-class drugs &mdash; gastrointestinal effects dominate, especially during dose escalation &mdash; with notably lower discontinuation rates than{" "}
        <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>{" "}
        in head-to-head SURMOUNT-5 (2.7% vs 5.6%). Most effects are mild to moderate and resolve as the body adapts. Serious adverse event rates in trials were comparable to placebo.
      </>
    ),
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nausea.</span> Most common, especially during dose escalation. Affects 18–33% of users at peak doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diarrhea.</span> Affects 12–23% of users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Constipation.</span> Affects 6–17%.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vomiting.</span> Affects 8–13%.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Decreased appetite.</span> Expected effect, sometimes excessive.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fatigue.</span> Common in the 48–72 hours after injection.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Indigestion and acid reflux.</span> Common in the first weeks.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dizziness.</span> Typically mild, often related to reduced food intake.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hair shedding.</span> Reported during rapid weight loss phases (similar to other rapid-weight-loss interventions).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild liver enzyme elevations.</span> Usually resolve without intervention.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypoglycemia.</span> Primarily when combined with insulin or sulfonylureas.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare — call a doctor)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pancreatitis.</span> Rare but reported. Symptoms: severe abdominal pain radiating to the back, persistent vomiting, fever.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Gallbladder problems.</span> Increased risk in trials. Symptoms: severe pain in upper right abdomen, jaundice, fever.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe allergic reactions.</span> Rare. Symptoms: difficulty breathing, swelling of face/throat, hives. Seek emergency care.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Thyroid C-cell tumors.</span> Observed in rats; not confirmed in humans. Tirzepatide carries a boxed warning. Tell your doctor if you have a personal or family history of medullary thyroid carcinoma or MEN-2 syndrome.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Acute kidney injury.</span> Risk increases if severe vomiting/diarrhea cause dehydration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vision changes.</span> Rare but reported, including diabetic retinopathy worsening in users with pre-existing retinopathy.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most side effects are mild to moderate and improve as the body adapts. SURMOUNT-5 reported lower discontinuation rates with tirzepatide (2.7%) than semaglutide (5.6%) due to GI events. Tirzepatide carries a boxed warning for thyroid C-cell tumors based on rodent studies; this risk in humans is not established but is the basis for not using tirzepatide in users with personal or family history of medullary thyroid carcinoma.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Tirzepatide interact with other drugs?",
    intro:
      "Tirzepatide&rsquo;s most important interactions are with other blood-sugar-lowering medications (insulin, sulfonylureas), oral medications that depend on stomach emptying for absorption, and other GLP-class drugs. The FDA also flags birth control absorption specifically &mdash; backup contraception is recommended after dose changes. Alcohol compounds nausea and dehydration.",
    body: [
      "Insulin and sulfonylureas. Risk of hypoglycemia increases when tirzepatide is combined with insulin, glipizide, glyburide, or other blood-sugar-lowering drugs. Dose adjustment of insulin/sulfonylureas is typically needed when starting tirzepatide.",
      "Oral medications. Tirzepatide slows stomach emptying, which can affect the absorption of oral drugs. Particularly relevant for medications with a narrow therapeutic window (warfarin, levothyroxine, certain antibiotics).",
      "Birth control pills. Slowed gastric emptying may reduce absorption. The FDA recommends backup contraception for 4 weeks after starting and 4 weeks after each dose increase.",
      "GLP-class agonists (semaglutide, retatrutide, liraglutide). Should not be combined — overlapping incretin mechanism compounds side effects without proportional benefit.",
      "Alcohol. Compounds nausea, dehydration, and hypoglycemia risk.",
      "DPP-4 inhibitors (sitagliptin, etc.). Should not be combined with tirzepatide; the mechanisms overlap.",
    ],
  },
  {
    id: "storage",
    title: "How should Tirzepatide be stored?",
    body: [
      "Pre-filled pens (Mounjaro/Zepbound): Store refrigerated at 36–46°F (2–8°C). Can be kept at room temperature up to 77°F (25°C) for up to 21 days.",
      "Lyophilized (powder) form, research-grade: Store at 2–8°C sealed; freeze at -20°C for long-term storage.",
      "Reconstituted research-grade solution: Store at 2–8°C; typically stable for 28–30 days; check vendor's product specifications.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze pre-filled pens. Freezing damages the medication.",
      "Protect from light — store in original carton or a light-protective container.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Tirzepatide research?",
    intro:
      "Tirzepatide has roughly 4 years of post-approval clinical use and a deep Phase 3 trial library (SURMOUNT for obesity, SURPASS for diabetes, SUMMIT for HFpEF, SURMOUNT-OSA for sleep apnea). The open questions are cardiovascular outcomes (SURPASS-CVOT pending), the long-term thyroid C-cell tumor signal observed in rodents (not confirmed in humans), and how durable the weight loss is beyond the 3-year SURMOUNT-1 extension.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tirzepatide is FDA-approved for type 2 diabetes (Mounjaro, May 2022), chronic weight management (Zepbound, November 2023), and moderate-to-severe obstructive sleep apnea in adults with obesity (Zepbound expanded approval, December 2024). It is also approved by the European Medicines Agency (EMA) and by regulators in most major markets.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term safety data extends to about 4 years for some users in extension trials. Cardiovascular outcomes trial results from SURPASS-CVOT are pending. The thyroid C-cell tumor signal observed in rats has not been confirmed in humans and is the basis for the boxed warning rather than a documented human risk.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade tirzepatide sold by specialty peptide vendors is intended for laboratory research use only and is not approved for human consumption. The World Anti-Doping Agency prohibits tirzepatide and other GLP-class drugs in sport. Pricing varies by formulation and insurance coverage; brand-name retail in the US runs roughly $1,000–$1,300 per month without insurance.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Tirzepatide",
    intro:
      "Tirzepatide is sold by prescription as Mounjaro and Zepbound. Research-grade product is also sold by specialty peptide vendors for laboratory use only. The three vendors highlighted below carry Tirzepatide and have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners", note: "Sold as 'GLP-2 Tirzepatide'" },
            { slug: "ascension-peptides", note: "Sold as T-10 / T-30" },
            { slug: "vital-core-research" },
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
    title: "Tirzepatide FAQ",
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
          Frias JP, Davies MJ, Rosenstock J, et al. Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes. N Engl J Med. 2021;385:503-515.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2107519"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2107519
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Coskun T, Sloop KW, Loghin C, et al. LY3298176, a novel dual GIP and GLP-1 receptor agonist for the treatment of type 2 diabetes mellitus: From discovery to clinical proof of concept. Mol Metab. 2018;18:3-14.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/30473097/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/30473097/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Jastreboff AM, Aronne LJ, Ahmad NN, et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). N Engl J Med. 2022;387:205-216.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2206038
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Aronne LJ, Horn DB, le Roux CW, et al. Tirzepatide as Compared with Semaglutide for the Treatment of Obesity (SURMOUNT-5). N Engl J Med. 2025.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2502212"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2502212
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Rosenstock J, Wysham C, Frías JP, et al. Efficacy and safety of a novel dual GIP and GLP-1 receptor agonist tirzepatide in patients with type 2 diabetes (SURPASS-1). Lancet. 2021;398(10295):143-155.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/34186022/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/34186022/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Eli Lilly. SURPASS-CVOT cardiovascular outcomes trial. ClinicalTrials.gov NCT04255433.{" "}
          <a
            href="https://clinicaltrials.gov/study/NCT04255433"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://clinicaltrials.gov/study/NCT04255433
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Malhotra A, Grunstein RR, Fietze I, et al. Tirzepatide for the Treatment of Obstructive Sleep Apnea and Obesity (SURMOUNT-OSA). N Engl J Med. 2024;391:1193-1205.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2404881"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2404881
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Packer M, Zile MR, Kramer CM, et al. Tirzepatide for Heart Failure with Preserved Ejection Fraction and Obesity (SUMMIT). N Engl J Med. 2024.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2410027"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2410027
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Loomba R, Hartman ML, Lawitz EJ, et al. Tirzepatide for Metabolic Dysfunction-Associated Steatohepatitis (SYNERGY-NASH). N Engl J Med. 2024;391:299-310.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2401943"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2401943
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

export default function TirzepatidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Tirzepatide","description":"Tirzepatide (Mounjaro/Zepbound) research profile: mechanism, SURMOUNT trial results, dosing protocol, side effects, FAQ, and FDA approval status.","url":"https://profpeptide.com/peptides/tirzepatide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Tirzepatide"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Tirzepatide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">FDA-Approved</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 18, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> LY3298176, Mounjaro, Zepbound, GIP/GLP-1 Dual Agonist
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> GIP/GLP-1 Dual Receptor Agonist
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> FDA-approved &mdash; type 2 diabetes (Mounjaro, May 2022), obesity (Zepbound, Nov 2023), obstructive sleep apnea (Dec 2024); EMA-approved
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Tirzepatide?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Tirzepatide (LY3298176) is an FDA-approved peptide that activates two metabolic receptors at once &mdash; GLP-1 and GIP &mdash; making it the first dual incretin agonist on market. It is the active ingredient in two branded medications: Mounjaro (type 2 diabetes, approved May 2022) and Zepbound (chronic weight management, approved November 2023; obstructive sleep apnea expansion December 2024). Unlike older GLP-1 drugs like{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>{" "}
            that target one receptor, tirzepatide&rsquo;s dual mechanism produced significantly more weight loss in head-to-head SURMOUNT-5 (20.2% vs 13.7% over 72 weeks).{" "}
            <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link>{" "}
            extends the same architecture with a third receptor (glucagon) and is in Phase 3 trials. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Significant weight loss (average 20.2% over 72 weeks at max dose in SURMOUNT-5)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Lower blood sugar and A1C in type 2 diabetes (2.0–2.5% reduction)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced appetite and slower stomach emptying</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improvements in cholesterol and blood pressure</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Better insulin sensitivity</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced obstructive sleep apnea severity (SURMOUNT-OSA)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Once-weekly dosing (half-life around 5 days)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> FDA-approved dosing starts at 2.5 mg once weekly by subcutaneous injection, then increases every 4 weeks (2.5 → 5 → 7.5 → 10 → 12.5 → 15 mg) up to a maximum of 15 mg weekly. Most users settle at maintenance doses between 10 mg and 15 mg. Research-grade dosing protocols mirror the approved schedule.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Brand-name Mounjaro and Zepbound require a prescription. Research-grade tirzepatide is sold by specialty peptide vendors for laboratory use only. PP maintains a vetted list of vendors with verified discount codes. See{" "}
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
        {["Weight Loss", "Diabetes", "FDA-Approved", "Dual Agonist"].map((tag) => (
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
        <Link href="/peptides/retatrutide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide</Link>
        <Link href="/peptides/semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide</Link>
        <Link href="/peptides/cagrilintide" className="text-sm font-medium text-[#0891b2] hover:underline">Cagrilintide</Link>
        <Link href="/peptides/cagrisema" className="text-sm font-medium text-[#0891b2] hover:underline">CagriSema</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/retatrutide-vs-tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide vs Tirzepatide &rarr;</Link>
        <Link href="/compare/semaglutide-vs-tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide vs Tirzepatide &rarr;</Link>
        <Link href="/compare/semaglutide-vs-tirzepatide-vs-retatrutide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide vs Tirzepatide vs Retatrutide &rarr;</Link>
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
    <ContactLink pageName="Tirzepatide" pagePath="/peptides/tirzepatide" />
    </div>
    </>
  );
}
