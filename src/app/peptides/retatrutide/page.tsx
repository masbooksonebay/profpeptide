import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/retatrutide",
  title: "Retatrutide — Research Profile, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Retatrutide (LY3437943) research profile: mechanism, Phase 3 TRIUMPH trial results, dosing protocol, side effects, FAQ, and current regulatory status.",
});

const faqs = [
  {
    q: "Is retatrutide FDA-approved?",
    a: "No. Retatrutide is investigational and not approved by the FDA, EMA, or any major regulatory body. It is in Phase 3 clinical trials as of May 2026, with potential approval in 2027 or 2028.",
  },
  {
    q: "How does retatrutide compare to semaglutide and tirzepatide?",
    a: (
      <>
        <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>{" "}
        activates one receptor (GLP-1).{" "}
        <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link>{" "}
        activates two (GLP-1 + GIP). Retatrutide activates three (GLP-1 + GIP + glucagon). Trial weight loss has been progressively higher with each: semaglutide around 15%, tirzepatide around 22%, retatrutide around 28.7% at the highest doses. Retatrutide also has a unique side effect &mdash; dysesthesia (skin sensation changes) &mdash; that doesn&apos;t appear with the other two.
      </>
    ),
  },
  {
    q: "How long does retatrutide take to work?",
    a: "Most users notice reduced appetite within 1–2 weeks. Modest weight loss appears by week 4. Significant weight loss accumulates over the dose-escalation phase. Average weight loss was about 17% by week 24, 24% by week 48, and 28.7% by week 68 in trials.",
  },
  {
    q: "Does retatrutide cause muscle loss?",
    a: "Like all GLP-1-class drugs, retatrutide can cause loss of lean muscle alongside fat loss, especially during rapid weight reduction. Resistance training and adequate protein intake (typically 1.2–1.6 g/kg body weight per day) significantly reduce muscle loss.",
  },
  {
    q: "What is dysesthesia and should I be concerned?",
    a: (
      <>
        Dysesthesia means abnormal skin sensations &mdash; tingling, burning, or pins-and-needles feeling. It was reported in about 21% of participants at the 12 mg dose in TRIUMPH-4. The effects were generally mild and rarely led to discontinuation. It&apos;s specific to retatrutide and not seen with{" "}
        <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>{" "}
        or{" "}
        <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>. The mechanism is not fully understood but is thought to relate to glucagon-receptor activity.
      </>
    ),
  },
  {
    q: "What happens if I stop retatrutide?",
    a: "Long-term data on what happens after stopping is still limited. Based on data from semaglutide and tirzepatide, partial weight regain is expected after discontinuation. The TRIUMPH-6 trial is studying maintenance strategies including dose reduction; results are expected in 2026.",
  },
  {
    q: "Can I drink alcohol on retatrutide?",
    a: "Alcohol compounds nausea and dehydration. Most users find it best to avoid alcohol for at least 48 hours after each weekly injection, when medication levels peak. Alcohol also increases hypoglycemia risk in users with type 2 diabetes.",
  },
  {
    q: "Where can I get retatrutide?",
    a: (
      <>
        Retatrutide is investigational and not available by prescription. Research-grade product is sold by peptide vendors for laboratory use only. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Triple-Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial",
    authors: "Jastreboff AM, Kaplan LM, Frías JP, et al. — Retatrutide Phase 2 Obesity Trial Investigators",
    journal: "New England Journal of Medicine",
    year: "2023",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2301972",
    summary: "The landmark Phase 2 trial of retatrutide in 338 adults with obesity. At the highest dose (12mg), participants lost an average of 24.2% of their body weight over 48 weeks — with weight loss curves that had not yet plateaued at trial end, suggesting even greater losses with longer treatment. Every single participant in the 12mg group achieved at least 5% weight loss, and 62% achieved 20% or more. These are the highest weight loss numbers ever recorded in a pharmacological trial and exceed those of bariatric surgery in some comparisons.",
  },
  {
    title: "Retatrutide for People with Type 2 Diabetes — A Phase 2 Trial",
    authors: "Rosenstock J, Frias JP, Jastreboff AM, et al.",
    journal: "New England Journal of Medicine",
    year: "2023",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2302972",
    summary: "Companion Phase 2 trial of retatrutide in 281 adults with type 2 diabetes. Retatrutide produced significant reductions in HbA1c (up to 2.02 percentage points) and body weight (up to 16.94%) compared to placebo over 36 weeks. The triple agonist mechanism improved glycemic control more than existing single and dual agonists, while also producing substantial weight loss — establishing the metabolic breadth of the compound beyond obesity alone.",
  },
  {
    title: "TRIUMPH Phase 3 Program — Trial Status and Design",
    authors: "ClinicalTrials.gov",
    journal: "ClinicalTrials.gov",
    year: "2024–2026 (ongoing)",
    access: "Open Access",
    url: "https://clinicaltrials.gov/search?term=retatrutide+TRIUMPH",
    summary: "Retatrutide entered Phase 3 clinical trials under the TRIUMPH program in 2024, with seven trials evaluating it across obesity, type 2 diabetes, cardiovascular outcomes, and related metabolic conditions. As of early 2026 Phase 3 results are beginning to emerge. If the Phase 3 data replicates the Phase 2 findings, retatrutide would represent the most effective pharmacological weight loss treatment ever approved. This page will be updated as Phase 3 results are published.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Retatrutide work?",
    intro: (
      <>
        Retatrutide hits three metabolic receptors at once &mdash; GLP-1, GIP, and glucagon &mdash; whereas{" "}
        <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>{" "}
        hits just one and{" "}
        <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>{" "}
        hits two. The first two receptors slow the stomach and reduce appetite (the well-known GLP-1 effects); the third receptor &mdash; glucagon &mdash; adds a separate energy-expenditure boost on top, encouraging the body to burn more fat at rest. The triple-pathway design is the reason retatrutide produces the largest weight losses ever recorded in pharmacological trials, and it&rsquo;s also why it has a unique side-effect signature not seen with the dual or single agonists.
      </>
    ),
    body: [
      "GLP-1 Receptor Activation [1]. Retatrutide activates the GLP-1 receptor, which slows stomach emptying, reduces appetite, and improves insulin release in response to food. This is the same pathway used by semaglutide (Ozempic, Wegovy).",
      "GIP Receptor Activation [1]. The peptide also activates the GIP receptor, which enhances insulin signaling and supports fat metabolism. Adding GIP to GLP-1 activation is what made tirzepatide (Mounjaro, Zepbound) more effective than semaglutide.",
      "Glucagon Receptor Activation [1][2]. Retatrutide adds a third receptor — glucagon — which increases the body’s energy expenditure and encourages fat oxidation. This is the mechanism that distinguishes retatrutide from all other approved GLP-1-class drugs and explains the larger weight loss seen in trials.",
      "Combined Triple-Agonist Effect [2]. The three receptors work together to reduce appetite, slow digestion, improve insulin response, and burn more fat at rest. The dose-response curve in trials suggests retatrutide produces continued weight loss even at the 68-week mark, suggesting a plateau may not have been reached.",
    ],
  },
  {
    id: "research",
    title: "What is Retatrutide used for?",
    intro:
      "Retatrutide is in active Phase 3 clinical trials under Eli Lilly’s TRIUMPH program. As of mid-2026, two key Phase 3 readouts have landed: TRIUMPH-4 (obesity + knee osteoarthritis) and TRANSCEND-T2D-1 (type 2 diabetes). Additional Phase 3 readouts on cardiovascular outcomes, sleep apnea, and metabolic liver disease are expected through 2026 and into 2027 — making retatrutide a moving research target with results adding rapidly.",
    body: [
      "Obesity and Weight Management [1][3]. The TRIUMPH Phase 3 program is testing retatrutide across multiple obesity populations. TRIUMPH-4 (Dec 2025) reported 28.7% average weight loss at the 12 mg dose over 68 weeks in adults with obesity and knee osteoarthritis.",
      "Type 2 Diabetes [4]. TRANSCEND-T2D-1 (Mar 2026) reported 2.0% A1C reduction and 16.8% weight loss at 12 mg over 40 weeks in people with type 2 diabetes.",
      "Knee Osteoarthritis [3]. TRIUMPH-4 also reported significant reductions in knee osteoarthritis pain (44-point improvement on the WOMAC pain subscale), suggesting weight loss may translate to functional improvements in joint disease.",
      "Cardiovascular Risk [5]. TRIUMPH-3 is an ongoing cardiovascular outcomes trial in patients with established cardiovascular disease. Results are expected in 2027 or later.",
      "Fatty Liver Disease (MASH) [6]. Phase 2 data showed significant reductions in liver fat and improvements in insulin sensitivity. A dedicated MASH Phase 3 trial is underway.",
      "Sleep Apnea [5]. Phase 2 data showed a 42% reduction in the apnea-hypopnea index. A dedicated obstructive sleep apnea Phase 3 trial is in the TRIUMPH program.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Retatrutide take to work?",
    intro:
      "Retatrutide effects build progressively over weeks and months. Most users notice appetite reduction in the first 1–2 weeks. Meaningful weight loss accumulates over the dose-escalation phase — usually 5–7 months of steady increases. Trial data shows the weight-loss curve was still declining at the 68-week mark, suggesting plateau happens later than with semaglutide or tirzepatide.",
    content:
      "In trials, most participants noticed reduced appetite within the first 1–2 weeks of starting. Modest weight loss (about 2–3% of body weight) typically appeared by week 4 at the 2 mg starting dose. Significant weight loss accumulated over the dose-escalation phase as the dose was increased every 4 weeks. By 24 weeks, average weight loss was around 17%; by 48 weeks, around 24%; and by 68 weeks (TRIUMPH-4), around 28.7% at the highest dose. The weight-loss curve was still declining at the end of the longest trials, suggesting full effects may take longer than 68 weeks to plateau.",
  },
  {
    id: "dosing",
    title: "How is Retatrutide dosed?",
    intro:
      "Retatrutide is administered as a once-weekly subcutaneous injection. Phase 3 TRIUMPH trials use a stepwise dose-escalation protocol — starting at 2 mg and increasing every 4 weeks — to give the body time to adapt and reduce gastrointestinal side effects. The slow titration is non-negotiable; Phase 2 data showed that starting at a higher dose (4 mg) significantly increased side-effect rates without improving outcomes.",
    node: (
      <div className="space-y-3">
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Standard escalation schedule (Phase 3 TRIUMPH protocol):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 1–4.</span> 2 mg once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 5–8.</span> 4 mg once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 9–12.</span> 6 mg once weekly (TRIUMPH-3+ protocol).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 13–16.</span> 9 mg once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 17+.</span> 12 mg once weekly (maintenance, max dose tested).</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Phase 2 trials tested doses from 0.5 mg to 12 mg weekly. Phase 3 (TRIUMPH-4) tested 9 mg and 12 mg as maintenance doses, with full Phase 3 results pending for the 4 mg lower-dose maintenance arm. Half-life is approximately 6 days, supporting once-weekly dosing with steady state reached in 4–5 weeks at each dose level.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          If side effects are difficult to tolerate at any step, holding at the current dose for an additional 4 weeks is standard practice and does not appear to reduce long-term outcomes. Some users in research settings split doses into 2–3 smaller injections per week to reduce side effects, though this is not the protocol used in clinical trials.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Retatrutide is not FDA-approved and is investigational. Dosing protocols outside of clinical trials are derived from trial data and user reports — there are no approved retail dosing standards.
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
    title: "How is Retatrutide administered?",
    intro:
      "Retatrutide is given as a subcutaneous injection — under the skin, not into muscle — once weekly, using a small insulin syringe. The injection routine, timing, and supporting habits (hydration, eating pattern, alcohol management) matter as much as the dose for tolerability. The points below cover the practical details that experienced users converge on.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection, once weekly. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Any time, but consistent. Many users inject in the morning or before bed depending on side-effect timing.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each week to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> If less than 5 days late, take as soon as remembered. If more than 5 days late, skip the missed dose and resume on the next scheduled day. Do not double-dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Alcohol.</span> Avoid for at least 48 hours after injection — alcohol compounds nausea and dehydration.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hydration.</span> Drink water consistently. The medication blunts thirst signals, so set a daily water target rather than waiting for thirst.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Eating pattern.</span> Small meals every 3–4 hours rather than waiting for hunger, which is suppressed. Empty-stomach nausea is the most common trigger for vomiting.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Retatrutide is administered once weekly via subcutaneous injection. Unlike short-acting GH-axis peptides, Retatrutide does not require empty-stomach administration — its long half-life produces steady-state receptor activation independent of meal timing. The two timing variables that matter most are weekly consistency (same day each week supports stable plasma levels) and time of day (many researchers inject in the evening to sleep through peak GI side effects, especially during titration).
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Evening often preferred — sleep through peak GI side effects (especially during titration)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No fasting required; inject with or without food</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Injection site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Rotate between abdomen, thigh, upper arm — avoid same site twice within 2 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0 pt-2">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Week</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Typical dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1–4</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.5–1 mg weekly</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Initial titration; assess GI tolerance</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">5–8</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 mg weekly</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">First dose increase if titration is tolerated</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">9–12</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 mg weekly</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Second escalation</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">13+</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6–12 mg weekly</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Maintenance, dose-dependent on protocol goal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          *Phase 3 trial doses ranged 1–12 mg weekly. Lower doses (1–4 mg) targeted weight reduction in obesity studies; higher doses (8–12 mg) were used in maximum-effect arms. Titrate slowly to manage GI side effects.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. The standard convention is 2 mL for most peptides because it gives whole-number unit math; for Retatrutide, 1 mL is often preferred because higher dose tiers (4–8 mg) require larger draws that would exceed insulin syringe capacity at lower concentrations. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table below assumes a 10 mg vial — adjust proportionally for 5 mg or 20 mg vials.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">2 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">4 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">8 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">80 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">80 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">3.33 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          *Draw exceeds standard 100-unit insulin syringe capacity at this reconstitution volume — would require split injections or a different reconstitution volume.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> Each unit drawn delivers 100 mcg of Retatrutide at 1 mL reconstitution, 50 mcg at 2 mL, and 33 mcg at 3 mL — the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Retatrutide stack well with?",
    intro:
      "Retatrutide’s triple-agonist mechanism is strong enough that standalone use is the most common research protocol — additional incretin-class peptides usually amplify side effects without proportional benefit. The cleanest additions are non-peptide: resistance training, adequate protein, and metformin in diabetes contexts. The things to avoid are other GLP-1-class compounds and stacks that would compound the same receptor pathways.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> The most common research protocol. Retatrutide&apos;s triple-agonist effect is strong enough that stacking with other GLP-1-class peptides is unnecessary and can compound side effects.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Metformin.</span> Commonly used together in type 2 diabetes for additive blood-sugar control. Standard practice in clinical settings.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + 1.2–1.6 g/kg protein.</span> Recommended to preserve lean muscle mass during rapid weight loss. Without this, GLP-1-class drugs can cause significant muscle loss alongside fat loss.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GH-axis peptides for lean-mass preservation.</span>{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
          (CJC-1295 + Ipamorelin) or{" "}
          <Link href="/peptides/mk-677" className="text-[#0891b2] hover:underline">MK-677</Link>{" "}
          are sometimes added during caloric restriction to support lean-mass retention via elevated IGF-1. Side-effect profiles do not overlap meaningfully with retatrutide.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Tissue-repair peptides during rapid weight loss.</span>{" "}
          <Link href="/peptides/wolverine-stack" className="text-[#0891b2] hover:underline">Wolverine Stack</Link>{" "}
          (BPC-157 + TB-500) or the broader{" "}
          <Link href="/peptides/glow" className="text-[#0891b2] hover:underline">GLOW</Link>{" "}
          /{" "}
          <Link href="/peptides/klow" className="text-[#0891b2] hover:underline">KLOW</Link>{" "}
          blends are sometimes used for joint and connective-tissue support during the higher-strain phase of significant weight loss.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: other GLP-1 agonists.</span>{" "}
          <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>,{" "}
          <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>, or liraglutide should not be combined with retatrutide. Combining incretin-based drugs significantly increases GI side effects without proportional benefit.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: CagriSema or standalone cagrilintide on top.</span>{" "}
          <Link href="/peptides/cagrisema" className="text-[#0891b2] hover:underline">CagriSema</Link>{" "}
          (semaglutide + cagrilintide) overlaps with retatrutide&apos;s GLP-1 arm.{" "}
          <Link href="/peptides/cagrilintide" className="text-[#0891b2] hover:underline">Cagrilintide</Link>{" "}
          alone is amylin-based and is less directly overlapping but has limited combination data with retatrutide.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Retatrutide?",
    intro:
      "Retatrutide’s side-effect profile resembles other GLP-1-class drugs — gastrointestinal effects dominate, especially during dose escalation — with one important difference: dysesthesia (abnormal skin sensations) was reported in about 21% of participants at the 12 mg dose in TRIUMPH-4. This is unique to retatrutide and not seen with semaglutide or tirzepatide. The mechanism is thought to relate to glucagon-receptor activity.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nausea.</span> Most common, especially during dose escalation; affected up to 60% at 12 mg in Phase 2.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diarrhea.</span> Affected 15–33% of users at higher doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Constipation.</span> Affected 11–25% of users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vomiting.</span> Affected 21–26% of users at higher doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Decreased appetite.</span> Expected effect, but can be excessive in some users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation in up to 8% of users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dysesthesia.</span> Abnormal skin sensations including tingling, burning, or prickling. Reported in about 21% of participants at 12 mg in TRIUMPH-4. Specific to retatrutide and not seen with semaglutide or tirzepatide.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Increased heart rate.</span> Average increase of 5–10 beats per minute, peaking around week 24 and then declining.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache and fatigue.</span> Typically mild, common in the 48–72 hours after injection.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild liver enzyme elevations.</span> Transient ALT increases in about 1% of users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare — call a doctor)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pancreatitis.</span> About 0.4% in Phase 2 trials. Symptoms: severe abdominal pain radiating to the back, persistent vomiting, fever.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Gallbladder problems.</span> About 1.1% in trials. Symptoms: severe pain in upper right abdomen, jaundice, fever.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe allergic reactions.</span> Rare. Symptoms: difficulty breathing, swelling of face/throat, hives. Seek emergency care.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Heart rhythm changes.</span> Slightly more common with retatrutide (about 6% vs 3% placebo).</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most side effects are mild to moderate and improve as the body adapts. Discontinuation due to side effects ranged from 6% to 16% in Phase 2 trials, with most discontinuations during the escalation phase. The serious adverse event rate was 4% — the same as placebo.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Retatrutide interact with other drugs?",
    intro:
      "Retatrutide has several important drug interactions, most notably with other blood-sugar-lowering medications (insulin, sulfonylureas), oral medications that depend on stomach emptying for absorption, and other GLP-1-class drugs. Alcohol compounds nausea and dehydration. The interactions below are the ones most relevant in research and clinical contexts.",
    body: [
      "Insulin and sulfonylureas. Risk of hypoglycemia (low blood sugar) increases when retatrutide is combined with insulin, glipizide, glyburide, or other blood-sugar-lowering drugs. Dose adjustment is typically needed.",
      "Oral medications. Retatrutide slows stomach emptying, which can affect the absorption of oral medications. Particularly relevant for medications with a narrow therapeutic window (warfarin, levothyroxine, certain antibiotics).",
      "Birth control pills. Slowed gastric emptying may reduce absorption. Some manufacturers recommend backup contraception during the first 4 weeks of treatment and 4 weeks after each dose increase.",
      "GLP-1 agonists (semaglutide, tirzepatide, liraglutide). Should not be combined.",
      "Alcohol. Compounds nausea, dehydration, and hypoglycemia risk.",
    ],
  },
  {
    id: "storage",
    title: "How should Retatrutide be stored?",
    body: [
      "Lyophilized (powder) form: Store at 2–8°C (refrigerated). Stable for the manufacturer’s stated shelf life when sealed.",
      "Reconstituted solution: Store at 2–8°C. Most research-grade preparations are stable for 28–30 days after reconstitution; check vendor’s product specifications.",
      "Reconstitution: Use bacteriostatic water for injection (BAC water) at the volume specified by the dose calculator. Swirl gently — do not shake.",
      "Do not freeze. Freezing damages the peptide and renders it inactive.",
      "Protect from light — store in the original container or a light-protective container.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Retatrutide research?",
    intro:
      "Retatrutide is an investigational drug, not approved by the FDA, EMA, or any major regulatory body. As of May 2026, it is in Phase 3 trials with potential approval in 2027 or 2028. Long-term safety data beyond 72 weeks does not yet exist. The dysesthesia signal at higher doses is unique to retatrutide and the safety concern being monitored most closely.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Retatrutide is an investigational drug and is NOT approved by the FDA, EMA, or any major regulatory body. As of May 2026, it is in Phase 3 clinical trials. Eli Lilly&rsquo;s Phase 3 TRIUMPH program is expected to complete additional readouts throughout 2026, with regulatory submission to the FDA targeted for late 2026 and potential approval in 2027 or 2028.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term safety data beyond 72 weeks does not yet exist — all current trials are 48 to 68 weeks. Cardiovascular outcomes trial (TRIUMPH-3) results are not expected until 2027 or later. The dysesthesia signal observed in Phase 3 (about 21% at 12 mg) is unique to retatrutide and is being monitored closely.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Retatrutide is not currently a scheduled controlled substance in the US, but it is also not approved for human use. Research-grade product is sold in a regulatory gray area, typically labeled &ldquo;for research use only, not for human consumption.&rdquo; The World Anti-Doping Agency prohibits all GLP-1-class drugs in sport. Legal status varies by country.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Retatrutide",
    intro:
      "Retatrutide is investigational and not available by prescription. Research-grade product is sold by specialty peptide vendors for laboratory use only. The three vendors highlighted below carry Retatrutide and have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners", note: "Sold as 'GLP-3 Retatrutide'" },
            { slug: "ascension-peptides", note: "Sold as R-10 / R-30" },
            { slug: "vital-core-research" },
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
    title: "Retatrutide FAQ",
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
          Jastreboff AM, Kaplan LM, Frías JP, et al. Triple-Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial. N Engl J Med. 2023;389:514-526.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2301972"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2301972
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Coskun T, Urva S, Roell WC, et al. LY3437943, a novel triple glucagon, GIP, and GLP-1 receptor agonist for glycemic control and weight loss. Cell Metab. 2022;34(9):1234-1247.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/35987205/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/35987205/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Eli Lilly. Lilly&apos;s triple agonist, retatrutide, delivered weight loss of up to an average of 71.2 lbs along with substantial relief from osteoarthritis pain in first successful Phase 3 trial (TRIUMPH-4). December 11, 2025.{" "}
          <a
            href="https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-weight-loss-average"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-weight-loss-average
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Eli Lilly. TRANSCEND-T2D-1 Phase 3 Topline Results. March 19, 2026.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Eli Lilly. TRIUMPH Phase 3 Clinical Trial Program.{" "}
          <a
            href="https://www.lilly.com/discovery/clinical-development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.lilly.com/discovery/clinical-development
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sanyal AJ, Kaplan LM, Frías JP, et al. Retatrutide for adults with metabolic dysfunction-associated steatotic liver disease: a Phase 2 trial. Nat Med. 2024;30:1235-1244.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/38509328/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/38509328/
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

export default function RetatrutidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Retatrutide","description":"Retatrutide (LY3437943) research profile: mechanism, Phase 3 TRIUMPH trial results, dosing protocol, side effects, FAQ, and current regulatory status.","url":"https://profpeptide.com/peptides/retatrutide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Retatrutide"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Retatrutide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">Investigational</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 17, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> LY3437943, Triple Hormone Receptor Agonist, GIP/GLP-1/Glucagon Triple Agonist
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Triple Hormone Receptor Agonist (GLP-1 / GIP / Glucagon)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Investigational — Phase 3 trials, not FDA-approved
        </p>
      </div>

      <div className="mb-8 p-4 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Latest research:</span> Phase 3 TRIUMPH-1 results released May 21, 2026 &mdash; 30.3% average weight loss at 104 weeks, comparable to bariatric surgery outcomes.{" "}
          <Link href="/news/retatrutide-triumph-1-phase-3-results" className="text-[#0891b2] hover:underline">Read the full breakdown &rarr;</Link>
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Retatrutide?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Retatrutide (LY3437943) is a once-weekly injectable peptide developed by Eli Lilly that activates three different hormone receptors at once: GLP-1, GIP, and glucagon. The first two are the receptors targeted by existing weight-loss drugs &mdash;{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>{" "}
            (Ozempic, Wegovy) hits GLP-1;{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link>{" "}
            (Mounjaro, Zepbound) hits both GLP-1 and GIP &mdash; but retatrutide adds a third, glucagon, which boosts resting energy expenditure on top of the appetite-suppression effects shared across the class. That third receptor is the reason retatrutide has produced the largest weight losses ever recorded in a pharmacological trial: roughly 24% of body weight at 48 weeks in Phase 2 obesity research, with the weight-loss curve still declining at trial end. As of mid-2026, the drug is in Phase 3 trials under Eli Lilly&rsquo;s TRIUMPH program, with regulatory submission targeted for late 2026 and potential approval in 2027 or 2028.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Significant body weight reduction in Phase 2 obesity trials (averaging ~24% at 48 weeks at the highest dose)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved glycemic control in Phase 2 type 2 diabetes trials (HbA1c reductions around 2.2%)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Appetite suppression and reduced food intake</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improvements in liver fat markers in early MASLD substudy data</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improvements in blood pressure and lipid profiles alongside weight loss</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Once-weekly dosing (half-life around 6 days)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Published Phase 2 protocols ranged from 2 mg to 12 mg subcutaneously once weekly, with the highest weight-loss figures observed at the 12 mg dose. Protocols followed in research and user communities draw from these published dose escalations and from animal research, not from finalized human clinical guidelines.
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
        {["Weight Loss", "Metabolic Health", "Triple Agonist", "Investigational"].map((tag) => (
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
        <Link href="/peptides/tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">Tirzepatide</Link>
        <Link href="/peptides/semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide</Link>
        <Link href="/peptides/cagrilintide" className="text-sm font-medium text-[#0891b2] hover:underline">Cagrilintide</Link>
        <Link href="/peptides/cagrisema" className="text-sm font-medium text-[#0891b2] hover:underline">CagriSema</Link>
        <Link href="/peptides/mk-677" className="text-sm font-medium text-[#0891b2] hover:underline">MK-677</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#0891b2] hover:underline">Wolverine Stack</Link>
        <Link href="/peptides/gh-stack" className="text-sm font-medium text-[#0891b2] hover:underline">GH Stack</Link>
        <Link href="/peptides/glow" className="text-sm font-medium text-[#0891b2] hover:underline">GLOW</Link>
        <Link href="/peptides/klow" className="text-sm font-medium text-[#0891b2] hover:underline">KLOW</Link>
        </div>
      </div>

      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/retatrutide-vs-tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide vs Tirzepatide &rarr;</Link>
        <Link href="/compare/retatrutide-vs-semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide vs Semaglutide &rarr;</Link>
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
    <ContactLink pageName="Retatrutide" pagePath="/peptides/retatrutide" />
    </div>
    </>
  );
}
