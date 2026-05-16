import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/cagrisema",
  title: "CagriSema — Research Profile, Mechanism, Dosage, Phase 3 Results | Prof. Peptide",
  description:
    "CagriSema (cagrilintide + semaglutide) research profile: dual amylin/GLP-1 mechanism, REDEFINE 1 and REDEFINE 2 Phase 3 results, dosing protocol, side effects, FAQ, and FDA regulatory status.",
});

const faqs = [
  {
    q: "Is CagriSema FDA-approved?",
    a: "No. As of May 2026, CagriSema is investigational. Novo Nordisk filed a New Drug Application (NDA) with the FDA on December 18, 2025, and the FDA review is expected to conclude in 2026. If approved, CagriSema would be the first injectable GLP-1 + amylin combination treatment.",
  },
  {
    q: "How does CagriSema compare to semaglutide alone?",
    a: "In REDEFINE 1, CagriSema produced 22.7% mean weight loss (trial product estimand) at 68 weeks versus 14.9% with semaglutide alone — about a 50% greater reduction. In REIMAGINE 2 (type 2 diabetes), CagriSema produced 14.2% weight loss and a 1.91-point HbA1c reduction versus 10.2% and 1.76 points with semaglutide. The added cagrilintide component activates amylin receptors in the brainstem, a different appetite pathway than the GLP-1 receptor, which is why the combination outperforms either compound alone.",
  },
  {
    q: "How long does CagriSema take to work?",
    a: "Most research participants noticed reduced appetite within the first 1–2 weeks of starting. Modest weight loss typically appeared by week 4. The 16-week synchronized titration brings users to the maintenance 2.4 mg / 2.4 mg dose at week 17, with weight loss continuing to accumulate through the 68-week trial. In REDEFINE 1, no weight-loss plateau was observed at week 68 — the curve was still declining at trial end.",
  },
  {
    q: "Does CagriSema cause muscle loss?",
    a: "Like all GLP-1-class therapies, CagriSema can cause loss of lean muscle alongside fat loss during rapid weight reduction. Resistance training and adequate protein intake (typically 1.2–1.6 g/kg body weight per day) significantly reduce muscle loss. Cagrilintide may modestly attenuate this effect compared to GLP-1 monotherapy in some preclinical work, but human data on body composition with CagriSema specifically is still limited.",
  },
  {
    q: "Can I stack CagriSema with semaglutide or tirzepatide?",
    a: "No. CagriSema already contains semaglutide 2.4 mg, so adding additional semaglutide, tirzepatide, retatrutide, or any other GLP-1-class compound risks severe gastrointestinal side effects and compounded hypoglycemia without additional benefit. Likewise, do not add standalone cagrilintide — it is already in the formulation at the maintenance dose.",
  },
  {
    q: "What happens if I stop CagriSema?",
    a: "Long-term data on what happens after stopping CagriSema is not yet published. Based on data from semaglutide (STEP 1 extension) and tirzepatide (SURMOUNT-4), partial weight regain is expected after discontinuation. Ongoing extension studies in the REDEFINE program are expected to clarify maintenance strategies in 2026 and beyond.",
  },
  {
    q: "Can I drink alcohol on CagriSema?",
    a: "Alcohol compounds nausea, dehydration, and hypoglycemia risk in users with type 2 diabetes. Most users find it best to avoid alcohol for at least 48 hours after each weekly injection, when medication levels peak. Slowed gastric emptying can also unpredictably change how alcohol is absorbed.",
  },
  {
    q: "Where can I get CagriSema?",
    a: (
      <>
        CagriSema is investigational and not available by prescription. Research-grade pre-blended product is sold by specialty peptide vendors for laboratory use only. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
    title: "Coadministered Cagrilintide and Semaglutide in Adults with Overweight or Obesity (REDEFINE 1)",
    authors: "Garvey WT, Blüher M, Osorto Contreras CK, et al. — REDEFINE 1 Trial Investigators",
    journal: "New England Journal of Medicine",
    year: "2025",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2502081",
    summary: "The landmark Phase 3 trial of CagriSema in 3,417 adults with overweight or obesity (without type 2 diabetes) over 68 weeks. CagriSema produced 22.7% mean weight loss when all participants adhered to treatment (trial product estimand), and 20.4% under the treatment policy estimand — versus 14.9% with semaglutide alone, 11.5% with cagrilintide alone, and 2.3% with placebo. 91.9% of CagriSema participants achieved at least 5% weight loss, 60% achieved at least 20%, and 23% achieved at least 30%. The result established CagriSema as the most effective injectable GLP-1-class combination tested to date and formed the basis of Novo Nordisk's December 2025 NDA submission to the FDA.",
  },
  {
    title: "Cagrilintide–Semaglutide in Adults with Overweight or Obesity and Type 2 Diabetes (REDEFINE 2)",
    authors: "Davies MJ, Aroda VR, Bajaj HS, et al. — REDEFINE 2 Trial Investigators",
    journal: "New England Journal of Medicine",
    year: "2025",
    access: "Open Access",
    url: "https://www.nejm.org/doi/abs/10.1056/NEJMoa2502082",
    summary: "The Phase 3 companion trial of CagriSema in 1,206 adults with overweight or obesity and type 2 diabetes over 68 weeks. CagriSema produced 15.7% mean weight loss versus approximately 3.1% with placebo — a substantially larger effect than semaglutide alone has produced in comparable T2D populations (around 9–10% in STEP 2). Weight loss in T2D populations is typically lower than in non-diabetic populations for all GLP-1-class drugs, and the REDEFINE 2 result follows that pattern while still exceeding any prior amylin- or GLP-1-monotherapy benchmark in this group.",
  },
  {
    title: "CagriSema 2.4/2.4 mg in Type 2 Diabetes: REIMAGINE 2 Topline Results",
    authors: "Novo Nordisk press release — full publication pending",
    journal: "Novo Nordisk Investor Communications",
    year: "2026",
    access: "Open Access",
    url: "https://www.novonordisk.com/content/nncorp/global/en/news-and-media/news-and-ir-materials/news-details.html?id=916481",
    summary: "REIMAGINE 2 was a 68-week Phase 3 trial in 2,728 adults with type 2 diabetes inadequately controlled on metformin (with or without an SGLT2 inhibitor). CagriSema 2.4 mg / 2.4 mg produced a 1.91 percentage-point reduction in HbA1c versus 1.76 with semaglutide 2.4 mg from a baseline of 8.2%, and 14.2% weight loss versus 10.2% with semaglutide from a baseline of 101 kg. No weight-loss plateau was observed at week 68. The trial supported CagriSema's positioning as superior to semaglutide on both glycemic and weight endpoints in T2D.",
  },
  {
    title: "Once-weekly cagrilintide for weight management in people with overweight and obesity: a Phase 2 trial",
    authors: "Lau DCW, Erichsen L, Francisco AM, et al.",
    journal: "The Lancet",
    year: "2021",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/34798060/",
    summary: "The dose-finding Phase 2 trial of cagrilintide as a monotherapy — the amylin half of CagriSema. Over 26 weeks, cagrilintide produced dose-dependent weight loss reaching 10.8% at the 4.5 mg dose, versus 3.0% with placebo and 9.0% with liraglutide 3.0 mg daily. The trial established cagrilintide as the first long-acting amylin analogue with clinically meaningful weight reduction as monotherapy, providing the foundation for testing the cagrilintide + semaglutide combination that became CagriSema.",
  },
  {
    title: "Co-administered cagrilintide 2.4 mg with semaglutide 2.4 mg in Type 2 Diabetes: Phase 2 Trial",
    authors: "Frias JP, Deenadayalan S, Erichsen L, et al.",
    journal: "The Lancet",
    year: "2023",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/37364590/",
    summary: "The first prospective Phase 2 trial of CagriSema in 92 adults with type 2 diabetes over 32 weeks. CagriSema produced 15.6% weight loss compared to 5.1% with semaglutide and 8.1% with cagrilintide monotherapy. HbA1c reductions were 2.2 percentage points with CagriSema versus 1.8 with semaglutide and 0.9 with cagrilintide. Side effects were mostly mild-to-moderate gastrointestinal events and only one participant withdrew across all groups. The result motivated the larger Phase 3 REDEFINE and REIMAGINE programs.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Amylin Receptor Activation [4][1] — Cagrilintide is a long-acting amylin analogue that binds amylin receptors concentrated in the brainstem — primarily the area postrema and the nucleus of the solitary tract. Amylin signaling reduces meal size, slows gastric emptying, and promotes satiety through a pathway anatomically and pharmacologically distinct from the GLP-1 receptor system.",
      "GLP-1 Receptor Activation [1][5] — Semaglutide is a long-acting GLP-1 receptor agonist that activates GLP-1 receptors on pancreatic beta cells, in the gut, and in hypothalamic appetite centers. Activation increases glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, and reduces food intake.",
      "Non-Redundant Brain Targets [1] — Amylin and GLP-1 act on different neuronal populations and signaling pathways. Both ultimately reduce food intake, but through complementary rather than overlapping circuits. The combination produces larger and more durable weight loss than either compound alone — confirmed by REDEFINE 1, where CagriSema (22.7% trial product estimand) outperformed semaglutide alone (14.9%) and cagrilintide alone (11.5%).",
      "Once-Weekly Half-Lives [4][5] — Both cagrilintide and semaglutide use engineered fatty-acid albumin-binding to extend their plasma half-lives to approximately 7 days each, supporting synchronized once-weekly subcutaneous dosing. The two compounds are formulated together in a single pre-blended injection in the Novo Nordisk product, simplifying administration.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Obesity Without Diabetes [1] — REDEFINE 1 enrolled 3,417 adults with overweight or obesity and at least one weight-related comorbidity but without type 2 diabetes. Over 68 weeks, CagriSema produced 22.7% mean weight loss (trial product estimand) and 20.4% under the treatment-policy estimand, versus 2.3% with placebo. 91.9% of participants achieved at least 5% weight loss, 60% at least 20%, and 23% at least 30%.",
      "Obesity With Type 2 Diabetes [2] — REDEFINE 2 enrolled 1,206 adults with overweight or obesity and type 2 diabetes. Over 68 weeks, CagriSema produced 15.7% mean weight loss versus approximately 3.1% with placebo. Weight loss in T2D populations is typically lower than non-diabetic populations across the GLP-1 class.",
      "Glycemic Control in Type 2 Diabetes [3] — REIMAGINE 2 enrolled 2,728 adults with type 2 diabetes inadequately controlled on metformin. From a baseline HbA1c of 8.2%, CagriSema 2.4/2.4 mg produced a 1.91 percentage-point HbA1c reduction versus 1.76 with semaglutide 2.4 mg alone, and 14.2% weight loss versus 10.2% with semaglutide alone.",
      "Cardiovascular Outcomes [6] — REDEFINE 3 is an ongoing event-driven cardiovascular outcomes trial enrolling approximately 7,000 adults with established cardiovascular disease (with or without type 2 diabetes), treating for 156 weeks. Results are expected later in the decade.",
      "Long-Duration Obesity [6] — REDEFINE 11 is an ongoing Phase 3 trial in 600 adults with BMI ≥30, designed to extend the maintenance evidence base. Initial results are expected in the first half of 2027.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "CagriSema effects build gradually across the 16-week synchronized titration and the maintenance period that follows. In REDEFINE 1, most participants noticed reduced appetite within the first 1–2 weeks. Modest weight loss appeared by week 4 at the lowest titration step (0.25 mg / 0.25 mg). Weight loss accumulated through escalation, reaching meaningful levels by the time participants hit the 2.4 mg / 2.4 mg maintenance dose at week 17. Through weeks 17–68, weight loss continued to deepen — and importantly, no weight-loss plateau was observed at week 68 in either REDEFINE 1 or REIMAGINE 2, suggesting full effects may take longer than 68 weeks to fully express. Gastrointestinal side effects are typically most prominent during the early escalation steps and improve as the body adapts.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          CagriSema is administered as a once-weekly subcutaneous injection of a fixed 1:1 ratio of cagrilintide and semaglutide. The Phase 3 protocol uses a 16-week synchronized titration to allow gastrointestinal adaptation, followed by a 2.4 mg / 2.4 mg weekly maintenance dose. Both compounds are dose-escalated together at every step.
        </p>
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Standard escalation schedule (REDEFINE Phase 3 protocol):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 1–4: 0.25 mg cagrilintide + 0.25 mg semaglutide once weekly</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 5–8: 0.5 mg + 0.5 mg once weekly</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 9–12: 1.0 mg + 1.0 mg once weekly</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 13–16: 1.7 mg + 1.7 mg once weekly</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 17+: 2.4 mg + 2.4 mg once weekly (maintenance)</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          If side effects are difficult to tolerate at any step, holding at the current dose for an additional 4 weeks is the standard mitigation. In REDEFINE 2, 61.9% of participants reached the highest maintenance dose by week 68 under a flexible-dosing protocol — meaning a substantial minority held at a lower dose for the duration of the trial and still produced meaningful weight loss.
        </p>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Pre-blended formulations (research-grade vials)
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Research-grade CagriSema is sold by specialty peptide vendors as pre-blended vials in a 1:1 ratio of cagrilintide to semaglutide. Common label sizes are 5 mg total (2.5 mg + 2.5 mg), 10 mg total (5 mg + 5 mg), and 20 mg total (10 mg + 10 mg). The label always shows the combined total milligrams of both compounds.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            When reconstituting, use the combined total label as the vial size in the dosing calculator. Because the ratio is fixed at 1:1, every drawn dose contains equal amounts of each compound. For example, a 20 mg vial (10 mg cagrilintide + 10 mg semaglutide) drawn for a 4.8 mg total weekly dose delivers 2.4 mg of each compound — the maintenance dose used in REDEFINE 1.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
            Researchers who want a non-1:1 ratio — for example, to preferentially escalate the amylin component or to maintain cagrilintide while reducing semaglutide — should buy the two components separately rather than using a pre-blended product. Pre-blended vials lock the ratio at the labeled 1:1.
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          CagriSema is not FDA-approved. Dosing protocols outside of clinical trials are derived from REDEFINE/REIMAGINE trial data — there are no approved retail dosing standards.
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
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin), once weekly. Common injection sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.",
      "Time of day: Any time, but consistent. Many users inject in the evening to sleep through the strongest nausea window after dose increases.",
      "With or without food: Either is fine. Both cagrilintide and semaglutide are administered without regard to meals.",
      "Site rotation: Use a different site each week to reduce localized irritation. Stay at least 1 inch from previous injection sites — injection site reactions were reported in approximately 12% of CagriSema participants in REDEFINE 1.",
      "Missed dose: If less than 5 days late, take as soon as remembered. If more than 5 days late, skip the missed dose and resume on the next scheduled day. Do not double-dose.",
      "Alcohol: Avoid for at least 48 hours after injection — alcohol compounds nausea and dehydration, and increases hypoglycemia risk in users with type 2 diabetes.",
      "Hydration: Drink water consistently. The medication blunts thirst signals, so set a daily water target rather than waiting for thirst.",
      "Eating pattern: Small meals every 3–4 hours rather than waiting for hunger, which is suppressed. Empty-stomach nausea is the most common trigger for vomiting.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Standalone use — the standard protocol. CagriSema already contains both semaglutide and cagrilintide at full maintenance doses, so stacking with other GLP-1- or amylin-class peptides is unnecessary and increases side-effect risk without proportional benefit.",
      "Resistance training + 1.2–1.6 g/kg protein per day — recommended throughout the dose-escalation and maintenance phases to preserve lean muscle mass during rapid weight loss. Without this, GLP-1-class regimens can cause significant muscle loss alongside fat loss.",
      "Metformin (in type 2 diabetes) — commonly continued alongside CagriSema for additive glycemic control. REIMAGINE 2 enrolled participants on metformin with or without an SGLT2 inhibitor; CagriSema is compatible with both.",
      "Avoid stacking with other GLP-1 agonists (semaglutide standalone, tirzepatide, retatrutide, liraglutide) — CagriSema already contains semaglutide 2.4 mg.",
      "Avoid stacking with standalone cagrilintide or other amylin analogues (pramlintide) — CagriSema already contains cagrilintide 2.4 mg.",
    ],
  },
  {
    id: "side-effects",
    title: "Side Effects & Safety",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (REDEFINE 1, CagriSema vs placebo)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Any gastrointestinal event — 79.6% with CagriSema vs 39.9% placebo</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Nausea — 55% vs 12.6%; most prominent during titration, generally transient</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Constipation — 30.7% vs 11.6%</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Vomiting — 26.1% vs 4.1%</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Decreased appetite — expected effect, but occasionally excessive</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Injection site reactions — approximately 12% of CagriSema participants</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increased heart rate — typical of the GLP-1 class, average increase of a few beats per minute</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Headache and fatigue — typically mild, more common after dose increases</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Diabetic retinopathy worsening — observed across the GLP-1 class, particularly with rapid HbA1c reduction in type 2 diabetes</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare — call a doctor)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pancreatitis — class-wide risk for GLP-1 receptor agonists. Symptoms: severe abdominal pain radiating to the back, persistent vomiting, fever.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Gallbladder problems — including cholelithiasis and cholecystitis. Symptoms: severe upper-right abdominal pain, jaundice, fever.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Thyroid C-cell tumors — semaglutide carries a boxed warning based on rodent data. Not confirmed in humans, but contraindicated in personal or family history of medullary thyroid carcinoma or MEN 2. CagriSema inherits this warning.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Severe allergic reactions — rare. Symptoms: difficulty breathing, swelling of face/throat, hives. Seek emergency care.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Discontinuation due to side effects was 5.9% with CagriSema versus 3.5% with placebo in REDEFINE 1, and 8.4% versus 3% in REDEFINE 2. Most discontinuations occurred during the early escalation phase. The overall safety profile in trials was consistent with what is known about each component drug.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Insulin and sulfonylureas — risk of hypoglycemia (low blood sugar) increases when CagriSema is combined with insulin, glipizide, glyburide, or other blood-sugar-lowering drugs. Dose adjustment of the background diabetes therapy is typically needed.",
      "Oral medications — both cagrilintide and semaglutide slow gastric emptying, which can affect the absorption of oral medications. Particularly relevant for narrow-therapeutic-window drugs (warfarin, levothyroxine, certain antibiotics).",
      "Birth control pills — slowed gastric emptying may reduce absorption. Backup contraception is commonly recommended during the first 4 weeks of treatment and the 4 weeks after each dose increase.",
      "Other GLP-1 receptor agonists (semaglutide, tirzepatide, retatrutide, liraglutide) — should not be combined with CagriSema, which already contains semaglutide.",
      "Other amylin analogues (pramlintide) — should not be combined with CagriSema, which already contains cagrilintide.",
      "Alcohol — compounds nausea, dehydration, and hypoglycemia risk.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at 2–8°C (refrigerated). Stable for the manufacturer's stated shelf life when sealed.",
      "Reconstituted solution: Store at 2–8°C. Most research-grade preparations are stable for 28–30 days after reconstitution; check vendor's product specifications.",
      "Reconstitution: Use bacteriostatic water for injection (BAC water) at the volume specified by the dose calculator. Swirl gently — do not shake.",
      "Do not freeze. Freezing damages the peptide and renders it inactive.",
      "Protect from light — store in the original container or a light-protective container.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          CagriSema is an investigational drug and is NOT approved by the FDA, EMA, or any major regulatory body as of May 2026. Novo Nordisk filed a New Drug Application (NDA) with the FDA on December 18, 2025, based primarily on REDEFINE 1 data. The FDA decision is expected in 2026. If approved, CagriSema would be the first injectable GLP-1 receptor agonist and amylin analogue combination treatment.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term safety data beyond 68 weeks is not yet published. The cardiovascular outcomes trial (REDEFINE 3) is ongoing, with results expected later in the decade. Body-composition data (lean mass preservation), durability of weight loss after discontinuation, and pediatric data have not yet been reported. The REDEFINE 11 trial (longer-duration obesity) is expected to report initial results in the first half of 2027.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          CagriSema is not a scheduled controlled substance in the US, but it is also not approved for human use. Research-grade pre-blended product is sold in a regulatory gray area, typically labeled &ldquo;for research use only, not for human consumption.&rdquo; The World Anti-Doping Agency prohibits all GLP-1-class drugs in sport. Legal status varies by country.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          A separate REDEFINE trial (CagriSema vs tirzepatide) reported in early 2026 that CagriSema failed to demonstrate superiority on the primary weight-loss endpoint against tirzepatide. The two drugs produced comparable weight reduction in that head-to-head comparison; tirzepatide remains the most effective approved GLP-1-class drug pending FDA action on CagriSema.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
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
          Garvey WT, Blüher M, Osorto Contreras CK, et al. Coadministered Cagrilintide and Semaglutide in Adults with Overweight or Obesity (REDEFINE 1). N Engl J Med. 2025;393:635-647.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2502081"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2502081
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Davies MJ, Aroda VR, Bajaj HS, et al. Cagrilintide–Semaglutide in Adults with Overweight or Obesity and Type 2 Diabetes (REDEFINE 2). N Engl J Med. 2025.{" "}
          <a
            href="https://www.nejm.org/doi/abs/10.1056/NEJMoa2502082"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/abs/10.1056/NEJMoa2502082
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Novo Nordisk. CagriSema demonstrated superior HbA1c reduction of 1.91%-points and weight loss of 14.2% in adults with type 2 diabetes in the REIMAGINE 2 trial. February 2, 2026.{" "}
          <a
            href="https://www.novonordisk.com/content/nncorp/global/en/news-and-media/news-and-ir-materials/news-details.html?id=916481"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.novonordisk.com/content/nncorp/global/en/news-and-media/news-and-ir-materials/news-details.html?id=916481
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Lau DCW, Erichsen L, Francisco AM, et al. Once-weekly cagrilintide for weight management in people with overweight and obesity: a Phase 2 trial. Lancet. 2021;398(10317):2160-2172.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/34798060/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/34798060/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Frias JP, Deenadayalan S, Erichsen L, et al. Efficacy and safety of co-administered once-weekly cagrilintide 2.4 mg with once-weekly semaglutide 2.4 mg in type 2 diabetes: a Phase 2 trial. Lancet. 2023;402(10403):720-730.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/37364590/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/37364590/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Novo Nordisk. Novo Nordisk files for FDA approval of CagriSema, the first once-weekly combination of GLP-1 and amylin analogues for weight management. December 18, 2025.{" "}
          <a
            href="https://www.prnewswire.com/news-releases/novo-nordisk-files-for-fda-approval-of-cagrisema-the-first-once-weekly-combination-of-glp1-and-amylin-analogues-for-weight-management-302645862.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.prnewswire.com/news-releases/novo-nordisk-files-for-fda-approval-of-cagrisema-the-first-once-weekly-combination-of-glp1-and-amylin-analogues-for-weight-management-302645862.html
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          ClinicalTrials.gov. REDEFINE 3 — A Research Study to See How Well CagriSema Reduces the Risk of Cardiovascular Events. NCT05669755.{" "}
          <a
            href="https://clinicaltrials.gov/study/NCT05669755"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://clinicaltrials.gov/study/NCT05669755
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

export default function CagriSemaPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"CagriSema","description":"CagriSema (cagrilintide + semaglutide) research profile: dual amylin/GLP-1 mechanism, REDEFINE 1 and REDEFINE 2 Phase 3 results, dosing protocol, side effects, FAQ, and FDA regulatory status.","url":"https://profpeptide.com/peptides/cagrisema","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"CagriSema"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">CagriSema</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">Investigational</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Cagri-Sema, CagriSema 2.4/2.4, Amylin-GLP-1 Combination
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            CagriSema is a once-weekly injectable fixed-dose combination of{" "}
            <Link href="/peptides/cagrilintide" className="text-[#0891b2] hover:underline">cagrilintide</Link>{" "}
            (a long-acting amylin analogue) and{" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>{" "}
            (a GLP-1 receptor agonist), developed by Novo Nordisk. The two compounds act on non-overlapping appetite pathways — amylin receptors in the brainstem and GLP-1 receptors in the gut, pancreas, and hypothalamus — and together produce larger weight reduction than either compound alone. In the Phase 3 REDEFINE 1 trial, CagriSema 2.4 mg / 2.4 mg produced 22.7% mean weight loss at 68 weeks, the largest result published for an injectable GLP-1-class combination as of May 2026.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">22.7% mean weight loss at 68 weeks in REDEFINE 1 (trial product estimand); 20.4% under the treatment-policy estimand</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">91.9% of REDEFINE 1 participants achieved at least 5% weight loss; 60% achieved 20%; 23% achieved 30%</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">15.7% weight loss in adults with overweight/obesity and type 2 diabetes (REDEFINE 2)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Superior HbA1c reduction (1.91 percentage points) versus semaglutide alone in type 2 diabetes (REIMAGINE 2)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No weight-loss plateau observed at 68 weeks in either REDEFINE 1 or REIMAGINE 2</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Once-weekly dosing (both components have half-lives of approximately 7 days)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> The REDEFINE Phase 3 protocol uses a 16-week synchronized titration from 0.25 mg + 0.25 mg up to a 2.4 mg + 2.4 mg maintenance dose, once weekly subcutaneously. Research-grade pre-blended vials are typically sold in 5 mg, 10 mg, or 20 mg total combined-mg labels at a fixed 1:1 ratio.
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
        {["Weight Loss", "Metabolic Health", "Amylin-GLP-1 Combination", "Investigational"].map((tag) => (
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
        <Link href="/peptides/cagrilintide" className="text-sm font-medium text-[#0891b2] hover:underline">Cagrilintide</Link>
        <Link href="/peptides/tirzepatide" className="text-sm font-medium text-[#0891b2] hover:underline">Tirzepatide</Link>
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
    <ContactLink pageName="CagriSema" pagePath="/peptides/cagrisema" />
    </div>
    </>
  );
}
