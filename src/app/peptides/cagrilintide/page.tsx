import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/cagrilintide",
  title: "Cagrilintide — Amylin Analog, CagriSema, Mechanism, Dosage | Prof. Peptide",
  description:
    "Cagrilintide research profile: amylin/calcitonin receptor mechanism, REDEFINE trial results, CagriSema combination, dosing, side effects, FAQ.",
});

const faqs = [
  {
    q: "What is cagrilintide?",
    a: (
      <>
        Cagrilintide is an investigational long-acting amylin analogue developed by Novo Nordisk for chronic weight management. Amylin is a hormone naturally co-released with insulin from pancreatic beta cells; cagrilintide mimics this hormone with a much longer duration of action. It is most often combined with{" "}
        <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>{" "}
        as{" "}
        <Link href="/peptides/cagrisema" className="text-[#0891b2] hover:underline">CagriSema</Link>
        , which is currently under FDA review.
      </>
    ),
  },
  {
    q: "How is cagrilintide different from semaglutide?",
    a: (
      <>
        <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">Semaglutide</Link>{" "}
        activates GLP-1 receptors. Cagrilintide activates amylin and calcitonin receptors. The two work through different brain pathways to suppress appetite and slow gastric emptying. They are typically combined (CagriSema) because the mechanisms are additive — combination trials show greater weight loss than either component alone, with potentially better lean mass preservation.
      </>
    ),
  },
  {
    q: "Does CagriSema beat tirzepatide for weight loss?",
    a: (
      <>
        Possibly, in adherent users. REDEFINE 1 (NEJM 2025) showed CagriSema produced 20.4% average weight loss over 68 weeks, with up to 23% per-protocol — comparable to{" "}
        <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>
        &apos;s 20.2% in SURMOUNT-5 at the same timepoint. No head-to-head trial has been published. Both fall short of{" "}
        <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">retatrutide</Link>
        &apos;s 28.7% in TRIUMPH-4.
      </>
    ),
  },
  {
    q: "Is cagrilintide alone effective for weight loss?",
    a: "Yes, but modestly compared to combination therapy. Phase 2 cagrilintide monotherapy at 4.5 mg produced 6–10% weight loss over 26 weeks. Most ongoing development is on the CagriSema combination because of its substantially greater efficacy.",
  },
  {
    q: "What are the side effects?",
    a: "Most common are gastrointestinal: nausea, vomiting, diarrhea, and constipation. The REDEFINE trials reported low single-digit discontinuation rates due to adverse events, lower than some GLP-class drugs. About 72.5% of CagriSema participants reported at least one GI adverse event — most transient and mild to moderate.",
  },
  {
    q: "When will the FDA approve CagriSema?",
    a: "Novo Nordisk filed the New Drug Application in December 2025. Standard FDA review for NDAs typically takes 10–12 months, putting potential approval in late 2026.",
  },
  {
    q: "Can cagrilintide be combined with tirzepatide?",
    a: "There is no published clinical data on this combination. Stacking would be experimental and would likely add side effects without proportional benefit. The validated combination is CagriSema (cagrilintide + semaglutide).",
  },
  {
    q: "Where can I buy cagrilintide?",
    a: (
      <>
        Cagrilintide is not yet FDA-approved. Research-grade cagrilintide is sold by specialty peptide vendors. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Once-weekly cagrilintide for weight management in people with overweight and obesity",
    authors: "Lau DCW, Erichsen L, Francisco AM, et al.",
    journal: "The Lancet",
    year: "2021",
    access: "Open Access",
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01751-7/fulltext",
    summary: "The first Phase 2 trial of cagrilintide as monotherapy for obesity. Over 26 weeks, participants on 2.4 mg cagrilintide lost a mean of 10.8% of body weight vs 3.0% on placebo. The trial established cagrilintide's dose-dependent weight loss profile and informed the design of subsequent combination trials with semaglutide.",
  },
  {
    title: "Safety, tolerability, pharmacokinetics, and pharmacodynamics of concomitant cagrilintide with semaglutide 2·4 mg",
    authors: "Enebo LB, Berthelsen KK, Kankam M, et al.",
    journal: "The Lancet",
    year: "2021",
    access: "Open Access",
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00845-X/fulltext",
    summary: "Phase 1b trial examining the combination of cagrilintide and semaglutide. The study confirmed that co-administration was well-tolerated and produced pharmacokinetics consistent with once-weekly dosing for both compounds. This study established the safety foundation for the CagriSema Phase 2 and Phase 3 programs.",
  },
  {
    title: "Efficacy and safety of co-administered cagrilintide 2·4 mg with semaglutide 2·4 mg in type 2 diabetes",
    authors: "Frias JP, Deenadayalan S, Erichsen L, et al.",
    journal: "The Lancet",
    year: "2023",
    access: "Open Access",
    url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)01163-7/fulltext",
    summary: "Phase 2 trial of CagriSema in patients with type 2 diabetes. The combination produced superior HbA1c reduction and weight loss compared to semaglutide alone, supporting the hypothesis that amylin and GLP-1 pathways act synergistically.",
  },
  {
    title: "Once-Weekly CagriSema for the Treatment of Obesity (REDEFINE 1)",
    authors: "Garvey WT, Birkenfeld AL, Dicker D, et al.",
    journal: "New England Journal of Medicine",
    year: "2025",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2502486",
    summary: "The pivotal Phase 3 trial of CagriSema (cagrilintide + semaglutide combination) for obesity. In 3,417 adults over 68 weeks, CagriSema produced 20.4% average weight loss (up to 23% per-protocol) compared to 3.0% on placebo. This is the trial result that drove Novo Nordisk's December 2025 FDA New Drug Application filing.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Cagrilintide work?",
    intro:
      "Cagrilintide activates amylin and calcitonin receptors in the brain stem (area postrema) — a pathway distinct from GLP-1 — to suppress appetite and slow gastric emptying. The dual amylin/calcitonin receptor agonist activity defines the class. When combined with semaglutide (CagriSema), the non-overlapping mechanisms produce additive effects with potentially better lean-mass preservation than GLP-1 monotherapy.",
    body: [
      "Amylin Receptor Activation [1]. Cagrilintide mimics amylin, a hormone naturally co-secreted with insulin from pancreatic beta cells. By activating amylin receptors in the brain stem (area postrema), it suppresses appetite and slows gastric emptying.",
      "Calcitonin Receptor Activation [1]. Cagrilintide also activates calcitonin receptors. The dual amylin/calcitonin receptor agonist activity is what defines the class. Acts on different brain pathways than GLP-1 drugs.",
      "Slowed Gastric Emptying [2]. Like GLP-class drugs, cagrilintide significantly slows how quickly food leaves the stomach. The mechanism is independent of GLP-1 pathways, which is why combining the two produces additive effects.",
      "Synergy with GLP-1 Receptor Agonists [3]. In preclinical research, combining amylin analogs with GLP-1 receptor agonists produces greater food intake reduction and body weight loss than either alone, while preserving lean mass.",
      "Lean Mass Preservation [4]. Preclinical data in non-human primates and rodents shows amylin/GLP-1 combinations target fat mass while preserving lean mass — an advantage over GLP-1 monotherapy where 20–40% of weight lost is lean tissue.",
    ],
  },
  {
    id: "research",
    title: "What is Cagrilintide used for?",
    intro:
      "Cagrilintide's evidence base centers on the REDEFINE Phase 3 program for CagriSema (cagrilintide + semaglutide combination) — REDEFINE 1 in obesity and REDEFINE 2 in type 2 diabetes. Cagrilintide monotherapy reached Phase 2 (6–10% weight loss at the highest dose) but most ongoing development is on the combination because of its substantially greater efficacy. Novo Nordisk filed the CagriSema NDA in December 2025.",
    body: [
      "REDEFINE 1 (CagriSema for Obesity) [3]. Phase 3, 68-week trial in 3,417 adults with obesity. CagriSema produced 20.4% average weight loss (up to 23% per-protocol) vs 3.0% placebo. Published in NEJM 2025.",
      "REDEFINE 2 (CagriSema for Type 2 Diabetes) [5]. Phase 3 trial in adults with T2D. CagriSema produced significant weight loss and A1C reductions, supporting dual-indication potential.",
      "Cagrilintide Monotherapy. Earlier Phase 2 trials of cagrilintide alone produced 6–10% weight loss over 26 weeks at the highest 4.5 mg dose, supporting continued investigation.",
      "Synergy With Semaglutide. The CagriSema combination produces greater weight loss than either component alone, validating the dual amylin/GLP-1 receptor approach.",
      "FDA NDA Submission. Novo Nordisk submitted the CagriSema New Drug Application to the FDA in December 2025; approval decision expected in 2026.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Cagrilintide take to work?",
    intro:
      "Cagrilintide effects build gradually similar to GLP-class drugs. In CagriSema trials, most weight loss accumulated through the first 60 weeks, with plateaus around weeks 60–68. The dose escalation across 16+ weeks is designed to minimize gastrointestinal side effects. Most users notice reduced appetite within the first 1–2 weeks at the starting dose.",
    content:
      "Most users notice reduced appetite within the first 1–2 weeks at the starting dose. In CagriSema trials, weight loss accumulated through the first 60 weeks with plateaus around weeks 60–68. The dose escalation across 16+ weeks is designed to minimize gastrointestinal side effects — escalating too quickly significantly increases the GI burden without improving outcomes.",
  },
  {
    id: "dosing",
    title: "How is Cagrilintide dosed?",
    intro:
      "Cagrilintide is administered as a once-weekly subcutaneous injection. Dose escalates every 4 weeks across five steps (0.16 → 0.30 → 0.60 → 1.20 → 2.40 mg) over ~16 weeks to allow tolerance. CagriSema combines cagrilintide 2.4 mg and semaglutide 2.4 mg in a single fixed-dose injection — the FDA-submitted formulation under review (NDA filed December 2025).",
    node: (
      <div className="space-y-3">
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Cagrilintide escalation schedule:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 1–4.</span> 0.16 mg or 0.30 mg once weekly (initiation).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 5–8.</span> 0.30 mg or 0.60 mg.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 9–12.</span> 1.20 mg.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 13–16.</span> 2.40 mg (target maintenance).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">CagriSema fixed-dose.</span> 2.4 mg cagrilintide + 2.4 mg semaglutide in a single weekly injection (FDA-submitted formulation).</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Holding at the current dose for an additional 4 weeks if side effects are difficult to tolerate is standard practice and does not appear to reduce long-term outcomes &mdash; consistent with GLP-class titration practice.
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
    title: "How is Cagrilintide administered?",
    intro: (
      <>
        Cagrilintide is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; once weekly, using a small insulin syringe. The dose escalates every 4 weeks across five steps to allow GI tolerance. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection, once weekly. Common sites are the abdomen (avoiding 2 inches around the navel), upper outer thighs, and back of the upper arms.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Any consistent time. Many users inject at the same day and time each week.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine; no fasting requirement.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each week to reduce localized irritation.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> If less than 5 days late, take as soon as remembered. If 5 or more days late, skip the missed dose and resume on the next scheduled day. Do not double-dose.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Eating pattern.</span> Smaller, more frequent meals reduce nausea. Avoid large fatty meals especially in the 24 hours after injection.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Alcohol.</span> Limit alcohol especially in the first 48 hours after injection &mdash; compounds nausea and dehydration.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> Cagrilintide&apos;s long half-life produces steady-state receptor activation independent of meal timing &mdash; like GLP-class drugs, no fasting is required. The two timing variables that matter most are weekly consistency (same day each week supports stable plasma levels) and time of day (some users inject in the evening to sleep through peak GI side effects, especially during titration).
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Any consistent time &mdash; evening often preferred to sleep through GI side effects during titration</td>
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">~178 hours (~7 days) &mdash; supports once-weekly dosing</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Reached in ~4–5 weeks at each dose level</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Dose escalation schedule.</span> Cagrilintide&apos;s weekly dose escalates every 4 weeks across 5 tiers. Holding at any step for an extra 4 weeks is standard practice if GI side effects are difficult to tolerate.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.16 mg or 0.30 mg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Initiation; assess GI tolerance</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">5–8</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.30 mg or 0.60 mg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">First dose increase</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">9–12</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.20 mg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Second escalation</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">13+</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.40 mg</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Target maintenance dose</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. Cagrilintide research vials are typically 5 mg. Because doses are small (0.16–2.4 mg weekly), 2 mL reconstitution is the common research convention &mdash; it gives clean whole-number units across the dose range. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 5 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">0.3 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">0.6 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">1.2 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">2.4 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">6 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">24 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">48 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">24 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">48 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">96 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1.67 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">18 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">36 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">72 units</td>
                <td className="px-4 py-3 text-gray-500 dark:text-slate-500 whitespace-nowrap italic">n/a*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 italic leading-relaxed">
          *Draw exceeds standard 100-unit insulin syringe capacity at this reconstitution volume &mdash; would require split injections or a lower reconstitution volume.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 5 mg vial, each unit drawn delivers 50 mcg of Cagrilintide at 1 mL reconstitution, 25 mcg at 2 mL, and 16.7 mcg at 3 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does Cagrilintide stack well with?",
    intro:
      "Cagrilintide's canonical pairing is with semaglutide as CagriSema — the validated fixed-dose combination with 20.4% weight loss in REDEFINE 1. The amylin + GLP-1 dual-mechanism approach produces additive effects with potentially better lean-mass preservation. Avoid stacking with other GLP-class drugs separately — CagriSema already includes semaglutide, so adding tirzepatide or retatrutide on top is redundant.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">CagriSema combination.</span>{" "}
          <Link href="/peptides/cagrisema" className="text-[#0891b2] hover:underline">CagriSema</Link>{" "}
          (cagrilintide + semaglutide) as a fixed-dose combination is the validated stack. Phase 3 REDEFINE program produced 20.4% average weight loss with this combination.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cagrilintide monotherapy.</span> Historically tested in Phase 2 alone with 6–10% weight loss; less common in current research given combination efficacy advantage.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + 1.2–1.6 g/kg protein.</span> Recommended to preserve lean muscle during rapid weight loss. Amylin/GLP-1 combinations may preserve lean mass better than GLP-1 alone, but training and protein remain important.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: other GLP-class drugs separately.</span>{" "}
          <Link href="/peptides/cagrisema" className="text-[#0891b2] hover:underline">CagriSema</Link>{" "}
          already includes semaglutide; adding{" "}
          <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>{" "}
          or{" "}
          <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">retatrutide</Link>{" "}
          on top would be redundant and increase side effects without proportional benefit.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Cagrilintide?",
    intro:
      "REDEFINE 1 and REDEFINE 2 reported low single-digit discontinuation rates due to adverse events with CagriSema — lower than some GLP-class drugs. About 72.5% of CagriSema participants reported at least one GI adverse event (most transient and mild to moderate). The amylin/calcitonin pathway has been used clinically (pramlintide is FDA-approved for diabetes), so the mechanism class has an established safety record, but the long-acting cagrilintide molecule is newer.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nausea.</span> Most common, dose-dependent. Affects similar percentage as GLP-class drugs.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vomiting.</span> Especially during titration phase.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diarrhea.</span> Common throughout therapy.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Constipation.</span> Common with slowed gastric emptying.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Decreased appetite.</span> Expected effect.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection site reactions.</span> Mild redness or irritation.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Indigestion and bloating.</span> Common in the first weeks.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fatigue.</span> Common in first few weeks.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Often related to reduced food intake or dehydration.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare &mdash; call a doctor)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pancreatitis.</span> Class-effect concern with appetite-suppressing peptides.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Gallbladder problems.</span> Risk with rapid weight loss.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe allergic reactions.</span> Rare and not commonly reported.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypoglycemia.</span> In users with diabetes on insulin/sulfonylureas.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          REDEFINE 1 and REDEFINE 2 trials reported low single-digit discontinuation rates due to adverse events with CagriSema, lower than some GLP-class drugs. 72.5% of CagriSema participants reported at least one GI adverse event &mdash; most transient and mild to moderate.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Cagrilintide interact with other drugs?",
    intro:
      "Cagrilintide's most relevant interactions parallel GLP-class drugs: insulin/sulfonylureas (hypoglycemia risk in diabetes), oral medications with narrow therapeutic windows (slowed gastric emptying affects absorption), other GLP-class drugs (redundant outside the CagriSema combination), and alcohol (compounds nausea/dehydration).",
    body: [
      "Insulin and sulfonylureas. Risk of hypoglycemia increases when combined with these in users with diabetes. Dose adjustment typically needed.",
      "Oral medications. Cagrilintide slows stomach emptying, which can affect absorption of oral drugs. Particularly relevant for warfarin, levothyroxine, and certain antibiotics.",
      "GLP-class agonists (when used outside CagriSema). Combining adds side effects without proportional benefit; the CagriSema combination is the studied form.",
      "Birth control pills. Slowed gastric emptying may reduce absorption.",
      "Alcohol. Compounds nausea and dehydration.",
    ],
  },
  {
    id: "storage",
    title: "How should Cagrilintide be stored?",
    body: [
      "Lyophilized (powder) form: Store at 2–8°C sealed; freeze at -20°C for long-term storage.",
      "Reconstituted solution: Store at 2–8°C; typically stable for 28–30 days; check vendor's product specifications.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze reconstituted solution.",
      "Protect from light — store in original container.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Cagrilintide research?",
    intro:
      "Cagrilintide is investigational and not approved by the FDA, EMA, or any major regulatory body. Novo Nordisk submitted the CagriSema NDA in December 2025; approval decision expected in 2026. Long-term safety data extends to 68 weeks from REDEFINE 1; cardiovascular outcomes data is not yet available. The amylin/calcitonin pathway has clinical precedent (pramlintide is FDA-approved for diabetes) but the long-acting cagrilintide molecule is newer. WADA-prohibited.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cagrilintide is investigational and not approved by the FDA, EMA, or any major regulatory body. Novo Nordisk submitted a New Drug Application for CagriSema (cagrilintide + semaglutide) to the FDA in December 2025. Cagrilintide monotherapy is not currently in active development for approval; the focus is the combination product.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term safety data extends to 68 weeks from REDEFINE 1. Cardiovascular outcomes data is not yet available. The amylin/calcitonin pathway has been used clinically (pramlintide is FDA-approved for diabetes), so the mechanism class has an established safety record, but the long-acting cagrilintide molecule is newer.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade cagrilintide sold by specialty peptide vendors is intended for laboratory research use only and is not approved for human consumption. The World Anti-Doping Agency prohibits cagrilintide and other peptide hormones in sport.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Cagrilintide",
    intro:
      "Cagrilintide is investigational and not available by prescription. CagriSema is under FDA review (NDA filed December 2025). Research-grade product is sold by specialty peptide vendors for laboratory use only. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "ascension-peptides", note: "Sold as C-10" },
            { slug: "purerawz", note: "Sold as 'AM833'" },
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
    title: "Cagrilintide FAQ",
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
          Lau DCW, Erichsen L, Francisco AM, et al. Once-weekly cagrilintide for weight management in people with overweight and obesity: a multicentre, randomised, double-blind, placebo-controlled and active-controlled, dose-finding phase 2 trial. Lancet. 2021;398(10317):2160-72.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/34798060/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/34798060/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Enebo LB, Berthelsen KK, Kankam M, et al. Safety, tolerability, pharmacokinetics, and pharmacodynamics of concomitant administration of multiple doses of cagrilintide with semaglutide 2·4 mg. Lancet. 2021;397(10286):1736-48.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/33894838/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/33894838/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Garvey WT, Birkenfeld AL, Dicker D, et al. Once-Weekly CagriSema for the Treatment of Obesity (REDEFINE 1). N Engl J Med. 2025.{" "}
          <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2502486" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.nejm.org/doi/full/10.1056/NEJMoa2502486
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Frias JP, Dahl D, Aronne LJ, et al. Preclinical and clinical evidence for amylin/GLP-1 combination therapy advantages. The Innovation Medicine. 2025.{" "}
          <a href="https://www.the-innovation.org/article/doi/10.59717/j.xinn-med.2025.100150" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://www.the-innovation.org/article/doi/10.59717/j.xinn-med.2025.100150
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Davies M, Pratley R, et al. Once-Weekly CagriSema in Adults with Obesity and Type 2 Diabetes (REDEFINE 2). N Engl J Med. 2025.
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

export default function CagrilintidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Cagrilintide","description":"Cagrilintide research profile: amylin/calcitonin receptor mechanism, REDEFINE trial results, CagriSema combination, dosing, side effects, FAQ.","url":"https://profpeptide.com/peptides/cagrilintide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Cagrilintide"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Cagrilintide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">Investigational</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 23, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> AM833, Long-acting Amylin Analogue
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Long-Acting Amylin Analogue &mdash; Dual Amylin / Calcitonin Receptor Agonist
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Investigational &mdash; CagriSema NDA filed Dec 2025, approval decision expected 2026. WADA-prohibited.
        </p>
      </div>

      <div className="mb-8 p-4 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Latest research:</span> REDEFINE 1 Phase 3 results published in NEJM (2025) showed CagriSema produced 20.4% average weight loss over 68 weeks (up to 23% per-protocol). Novo Nordisk filed the FDA NDA in December 2025; approval decision expected in 2026.{" "}
          <Link href="/peptides/cagrisema" className="text-[#0891b2] hover:underline">See CagriSema profile &rarr;</Link>
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Cagrilintide?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Cagrilintide is an investigational long-acting amylin analogue developed by Novo Nordisk for chronic weight management. It works by mimicking amylin, a hormone the pancreas releases alongside insulin after meals. Combined with{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>{" "}
            as{" "}
            <Link href="/peptides/cagrisema" className="text-[#0891b2] hover:underline">CagriSema</Link>
            , it produced 20.4% average weight loss in the Phase 3 REDEFINE 1 trial (NEJM 2025) &mdash; competitive with{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>{" "}
            and approaching{" "}
            <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">retatrutide</Link>
            &apos;s efficacy. Novo Nordisk filed an FDA New Drug Application for CagriSema in December 2025. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">20.4% body weight loss with CagriSema combination over 68 weeks (REDEFINE 1, NEJM 2025)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Up to 23% weight loss when participants stayed on treatment as planned</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced appetite and slower stomach emptying via amylin pathway</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Preserves lean mass better than GLP-class drugs alone in preclinical data</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improvements in blood pressure, lipids, and glycemic markers</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Lower discontinuation rates than tirzepatide in REDEFINE trials</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Cagrilintide is dosed at 0.16 mg, 0.30 mg, 0.60 mg, 1.20 mg, or 2.40 mg once weekly via subcutaneous injection. Dose escalation occurs every 4 weeks. CagriSema (the FDA-submitted formulation) uses cagrilintide 2.4 mg + semaglutide 2.4 mg as a fixed-dose combination.
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
        {["Weight Loss", "Amylin Analog", "Investigational", "Combination Therapy"].map((tag) => (
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
        <Link href="/peptides/semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide</Link>
        <Link href="/peptides/tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">Tirzepatide</Link>
        <Link href="/peptides/retatrutide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/cagrisema" className="text-sm font-medium text-[#0891b2] hover:underline">CagriSema</Link>
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
    <ContactLink pageName="Cagrilintide" pagePath="/peptides/cagrilintide" />
    </div>
    </>
  );
}
