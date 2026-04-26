import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/tirzepatide" },
  title: "Tirzepatide — Mounjaro, Zepbound, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Tirzepatide (Mounjaro/Zepbound) research profile: mechanism, SURMOUNT trial results, dosing protocol, side effects, FAQ, and FDA approval status.",
};

const faqs = [
  {
    q: "Is tirzepatide better than semaglutide?",
    a: "For weight loss, yes — head-to-head in SURMOUNT-5 (NEJM 2025), tirzepatide produced 20.2% average weight loss vs 13.7% with semaglutide over 72 weeks at maximum doses. About 32% of tirzepatide users achieved at least 25% weight loss vs 16% on semaglutide. Tirzepatide also showed greater reductions in waist circumference, blood pressure, A1C, and triglycerides. Semaglutide has the longer safety record and more established cardiovascular benefit (SELECT trial).",
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
    q: "Where can I buy tirzepatide?",
    a: (
      <>
        Brand-name Mounjaro and Zepbound require a prescription from a US-licensed provider. Some telehealth services prescribe and ship; some compounded versions are available through specialty pharmacies. Research-grade tirzepatide is also sold by specialty peptide vendors. PP maintains a list of vetted vendors with verified discount codes — see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const sections = [
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "GLP-1 Receptor Activation [1] — Tirzepatide activates the GLP-1 receptor, which slows stomach emptying, reduces appetite, and triggers insulin release in response to food. This is the same receptor pathway used by semaglutide.",
      "GIP Receptor Activation [1][2] — Tirzepatide also activates the GIP receptor, which enhances insulin signaling and improves how the body processes fat. Adding GIP to GLP-1 activation is what makes tirzepatide more effective than semaglutide for weight loss in head-to-head trials.",
      "Combined Dual-Agonist Effect [3] — The two receptors work together to reduce hunger more effectively, slow digestion, improve insulin response, and support fat loss. This combined action is the basis for the SURMOUNT trial outcomes showing greater weight loss than single-receptor drugs.",
      "Slowed Gastric Emptying [1] — By delaying how quickly food leaves the stomach, tirzepatide increases feelings of fullness after meals and reduces overall food intake. This effect is most pronounced during the first weeks of dose escalation.",
      "Improved Insulin Sensitivity [2] — Tirzepatide improves how the body responds to its own insulin, which is part of why it lowers blood sugar so effectively in people with type 2 diabetes.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Obesity and Weight Management [3][4] — The SURMOUNT Phase 3 program established tirzepatide as a leading weight-loss medication. SURMOUNT-1 (NEJM 2022) showed average 20.9% weight loss at 15 mg over 72 weeks. SURMOUNT-5 (NEJM 2025) head-to-head against semaglutide showed 20.2% with tirzepatide vs 13.7% with semaglutide.",
      "Type 2 Diabetes [5] — The SURPASS Phase 3 program supported FDA approval for type 2 diabetes. Tirzepatide reduced A1C by 2.0–2.5% in trials, more than semaglutide and other GLP-1 drugs in similar populations.",
      "Cardiovascular Risk [6] — SURPASS-CVOT is an ongoing cardiovascular outcomes trial in patients with type 2 diabetes and established cardiovascular disease. Post-hoc analysis of SURMOUNT-5 projected greater 10-year cardiovascular risk reduction with tirzepatide than semaglutide.",
      "Sleep Apnea [7] — SURMOUNT-OSA showed significant reductions in obstructive sleep apnea severity. FDA approved tirzepatide for moderate-to-severe OSA in adults with obesity in 2024.",
      "Heart Failure [8] — SUMMIT trial reported improvements in heart failure with preserved ejection fraction (HFpEF) symptoms in obese patients.",
      "Fatty Liver Disease (MASH) [9] — Phase 2 SYNERGY-NASH showed significant resolution of metabolic dysfunction-associated steatohepatitis. Phase 3 trial underway.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Tirzepatide effects build gradually. Most users notice reduced appetite within the first 1–2 weeks at the 2.5 mg starting dose. Modest weight loss (about 2–5%) typically appears by week 4. Significant weight loss accumulates as the dose is increased every 4 weeks. By 24 weeks, average weight loss is around 12%; by 52 weeks, around 18%; and by 72 weeks (SURMOUNT-1, max dose), around 20.9%. Most users reach a plateau between weeks 60–72. Blood sugar improvements in users with type 2 diabetes appear within the first few weeks and continue improving as the dose increases.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Tirzepatide is administered as a once-weekly subcutaneous injection. The FDA-approved titration schedule starts at 2.5 mg and increases every 4 weeks to allow the body to adapt and minimize gastrointestinal side effects. Maintenance doses range from 5 mg to 15 mg weekly depending on individual tolerance and goals.
        </p>
        <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          FDA-approved escalation schedule:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 1–4: 2.5 mg once weekly (initiation dose, not for chronic use)</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 5–8: 5 mg once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 9–12: 7.5 mg once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 13–16: 10 mg once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 17–20: 12.5 mg once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 21+: 15 mg once weekly (maximum dose)</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Maintenance doses are 5, 10, or 15 mg weekly. Most users continue increasing through the schedule until they reach their target weight loss or hit dose-limiting side effects. Holding at a current dose for an additional 4 weeks if side effects are difficult to tolerate is standard practice and does not appear to reduce long-term outcomes.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The medication has a half-life of about 5 days, supporting once-weekly dosing with steady state reached in roughly 4 weeks at each dose level. Dose adjustments aren&apos;t typically needed for kidney or liver impairment, though dehydration from GI side effects can affect kidney function and should be monitored.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          For research-grade tirzepatide outside FDA-approved use, dosing protocols mirror the approved schedule. There are no separate research-grade dosing standards.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side Effects & Safety",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Nausea — most common, especially during dose escalation. Affects 18–33% of users at peak doses.</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Diarrhea — affects 12–23% of users</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Constipation — affects 6–17%</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Vomiting — affects 8–13%</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Decreased appetite — expected effect, sometimes excessive</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Injection site reactions — mild redness or irritation</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Fatigue — common in the 48–72 hours after injection</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Indigestion and acid reflux — common in the first weeks</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Dizziness — typically mild, often related to reduced food intake</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hair shedding — reported during rapid weight loss phases (similar to other rapid-weight-loss interventions)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild liver enzyme elevations — usually resolve without intervention</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hypoglycemia — primarily when combined with insulin or sulfonylureas</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare — call a doctor)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Pancreatitis — rare but reported. Symptoms: severe abdominal pain radiating to the back, persistent vomiting, fever</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Gallbladder problems — increased risk in trials. Symptoms: severe pain in upper right abdomen, jaundice, fever</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Severe allergic reactions — rare. Symptoms: difficulty breathing, swelling of face/throat, hives</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Thyroid C-cell tumors — observed in rats; not confirmed in humans. Tirzepatide carries a boxed warning. Tell your doctor if you have a personal or family history of medullary thyroid carcinoma or MEN-2 syndrome</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Acute kidney injury — risk increases if severe vomiting/diarrhea cause dehydration</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Vision changes — rare but reported, including diabetic retinopathy worsening in users with pre-existing retinopathy</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Most side effects are mild to moderate and improve as the body adapts. SURMOUNT-5 reported lower discontinuation rates with tirzepatide (2.7%) than semaglutide (5.6%) due to GI events. Tirzepatide carries a boxed warning for thyroid C-cell tumors based on rodent studies; this risk in humans is not established but is the basis for not using tirzepatide in users with personal or family history of medullary thyroid carcinoma.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin), once weekly. Common injection sites are the abdomen (avoiding 2 inches around the navel), upper outer thighs, and back of the upper arms.",
      "Time of day: Any time, but consistent. Many users inject at the same day and time each week (e.g., Sunday mornings).",
      "With or without food: Either is fine.",
      "Site rotation: Use a different site each week to reduce irritation. Stay at least 1 inch from previous injection sites.",
      "Missed dose: If less than 4 days late, take as soon as remembered. If 4 or more days late, skip the missed dose and resume on the next scheduled day. Do not double-dose.",
      "Pen handling: Mounjaro/Zepbound pens come pre-filled. Store refrigerated until use. Allow to warm to room temperature for 30 minutes before injecting to reduce sting.",
      "Eating pattern: Smaller, more frequent meals reduce nausea. Avoid large fatty meals especially in the 24 hours after injection.",
      "Hydration: Drink water consistently. Tirzepatide blunts thirst signals.",
      "Alcohol: Limit alcohol especially in the first 48 hours after injection — it compounds nausea and dehydration.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Standalone use — most common and what FDA approval supports.",
      "Metformin — commonly combined for type 2 diabetes. Standard practice in clinical settings.",
      "Resistance training + adequate protein — recommended to preserve lean muscle during rapid weight loss. Without this, GLP-class drugs cause significant muscle loss alongside fat loss. Aim for 1.2–1.6 g protein per kg body weight per day.",
      "SGLT2 inhibitors (empagliflozin, dapagliflozin) — used together in some type 2 diabetes protocols for additive cardiovascular and weight benefits.",
      "Avoid stacking with other GLP-class drugs (semaglutide, retatrutide, liraglutide). Combining incretin-based medications significantly increases side effects without proportional benefit.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Insulin and sulfonylureas — risk of hypoglycemia increases. Dose adjustment of insulin/sulfonylureas typically needed when starting tirzepatide.",
      "Oral medications — tirzepatide slows stomach emptying, which can affect absorption of oral drugs. Particularly relevant for warfarin, levothyroxine, and certain antibiotics.",
      "Birth control pills — slowed gastric emptying may reduce absorption. The FDA recommends backup contraception for 4 weeks after starting and 4 weeks after each dose increase.",
      "GLP-class agonists (semaglutide, retatrutide, liraglutide) — should not be combined.",
      "Alcohol — compounds nausea, dehydration, and hypoglycemia risk.",
      "DPP-4 inhibitors (sitagliptin, etc.) — should not be combined with tirzepatide; the mechanisms overlap.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Pre-filled pens (Mounjaro/Zepbound): Store refrigerated at 36–46°F (2–8°C). Can be kept at room temperature up to 77°F (25°C) for up to 21 days.",
      "Lyophilized (powder) form, research-grade: Store at 2–8°C sealed; freeze at -20°C for long-term storage.",
      "Reconstituted research-grade solution: Store at 2–8°C; typically stable for 28–30 days; check vendor's product specifications.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Do not freeze pre-filled pens. Freezing damages the medication.",
      "Protect from light — store in original carton.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Tirzepatide is FDA-approved for type 2 diabetes (Mounjaro, May 2022), chronic weight management (Zepbound, November 2023), and moderate-to-severe obstructive sleep apnea in adults with obesity (Zepbound expanded approval, December 2024). It is also approved by the European Medicines Agency (EMA) and by regulators in most major markets.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term safety data extends to about 4 years for some users in extension trials. Cardiovascular outcomes trial results from SURPASS-CVOT are pending. The thyroid C-cell tumor signal observed in rats has not been confirmed in humans and is the basis for the boxed warning rather than a documented human risk.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade tirzepatide sold by specialty peptide vendors is intended for laboratory research use only and is not approved for human consumption. The World Anti-Doping Agency prohibits tirzepatide and other GLP-class drugs in sport. Pricing varies by formulation and insurance coverage; brand-name retail in the US runs roughly $1,000–$1,300 per month without insurance.
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
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Coskun T, Sloop KW, Loghin C, et al. LY3298176, a novel dual GIP and GLP-1 receptor agonist for the treatment of type 2 diabetes mellitus: From discovery to clinical proof of concept. Mol Metab. 2018;18:3-14.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/30122483/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/30122483/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function TirzepatidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Tirzepatide","description":"Tirzepatide (Mounjaro/Zepbound) research profile: mechanism, SURMOUNT trial results, dosing protocol, side effects, FAQ, and FDA approval status.","url":"https://profpeptide.com/peptides/tirzepatide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Tirzepatide"}]}} />
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: LY3298176, Mounjaro, Zepbound, GIP/GLP-1 Dual Agonist
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Tirzepatide is an FDA-approved peptide for type 2 diabetes (sold as Mounjaro) and chronic weight management (sold as Zepbound). Unlike older GLP-1 drugs that target one receptor, tirzepatide activates two — GLP-1 and GIP — which is why head-to-head trials show it producing more weight loss than semaglutide. It&apos;s the most-prescribed weight loss medication in the United States as of 2026.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Significant weight loss (average 20.2% over 72 weeks at max dose in SURMOUNT-5)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Lower blood sugar and A1C in type 2 diabetes</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduced appetite and slower stomach emptying</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Improvements in cholesterol and blood pressure</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Better insulin sensitivity</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Roughly 47% more weight loss than semaglutide head-to-head (SURMOUNT-5)</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> FDA-approved dosing starts at 2.5 mg once weekly by subcutaneous injection, then increases every 4 weeks (2.5 mg → 5 mg → 7.5 mg → 10 mg → 12.5 mg → 15 mg) up to a maximum of 15 mg weekly. Most users settle at maintenance doses between 10 mg and 15 mg. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for the full schedule.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Tirzepatide is available by prescription as Mounjaro (diabetes) or Zepbound (weight loss) through licensed pharmacies. Research-grade tirzepatide is also widely available through specialty peptide vendors with verified discount codes. See{" "}
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
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/coupons" className="btn-primary text-sm text-center">
            View Verified Discount Codes &rarr;
          </Link>
          <a
            href="https://www.amazon.com/s?k=metabolic+weight+loss+supplements&tag=profpeptide-20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm text-center"
          >
            Search Related Supplements on Amazon &rarr;
          </a>
        </div>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
    </>
  );
}
