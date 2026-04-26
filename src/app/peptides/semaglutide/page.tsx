import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/semaglutide" },
  title: "Semaglutide — Ozempic, Wegovy, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Semaglutide (Ozempic/Wegovy/Rybelsus) research profile: mechanism, STEP trial results, SELECT cardiovascular data, dosing protocol, side effects, and FAQ.",
};

const faqs = [
  {
    q: "Is semaglutide the same as Ozempic and Wegovy?",
    a: "Yes. Semaglutide is the active ingredient in three branded medications: Ozempic (for type 2 diabetes, max dose 2.0 mg), Wegovy (for chronic weight management, max dose 2.4 mg), and Rybelsus (oral form for type 2 diabetes only). All three contain the same molecule with different doses and indications.",
  },
  {
    q: "How long does semaglutide take to work?",
    a: "Most users notice reduced appetite within the first 1–2 weeks. Modest weight loss appears by week 4 at the 0.25 mg starting dose. Average weight loss reaches about 6% by week 20, 11–12% by week 40, and 14.9% by week 68 at the 2.4 mg maintenance dose.",
  },
  {
    q: "Can I stop taking semaglutide once I lose weight?",
    a: "Most users regain a significant portion of lost weight after stopping. The STEP 4 trial showed that participants who switched from semaglutide to placebo regained about 11.6% of body weight over 48 weeks, while those who continued maintained their loss. Semaglutide is generally considered a long-term medication for weight management, similar to medications for blood pressure or cholesterol.",
  },
  {
    q: "Does semaglutide cause muscle loss?",
    a: "All GLP-class drugs can cause loss of lean mass alongside fat loss, especially during rapid weight reduction. Estimates suggest 25–40% of weight lost on semaglutide is from lean tissue. Resistance training and adequate protein intake (1.2–1.6 g/kg body weight per day) significantly reduce muscle loss.",
  },
  {
    q: "Is semaglutide better than tirzepatide?",
    a: "For weight loss, no — head-to-head in SURMOUNT-5 (NEJM 2025), tirzepatide produced 20.2% average weight loss vs 13.7% with semaglutide. However, semaglutide has the longer safety record (8+ years vs 4 years), proven cardiovascular benefit (SELECT trial reduced major cardiovascular events by 20%), and broader list of approved indications including kidney disease, HFpEF, and adolescent obesity.",
  },
  {
    q: "Can I drink alcohol on semaglutide?",
    a: "Alcohol compounds nausea and dehydration, and can increase hypoglycemia risk. Most users find it best to avoid alcohol or drink minimally, especially in the first 48 hours after each weekly injection.",
  },
  {
    q: "Why are real-world results lower than trial results?",
    a: "STEP 1 trial participants averaged 14.9% weight loss; real-world studies show 8–12%. The main drivers are lower adherence, more dose-holding due to side effects, less structured nutrition counseling, and a meaningful share of patients staying on lower maintenance doses (1.0 or 1.7 mg) due to cost or insurance limits.",
  },
  {
    q: "Where can I buy semaglutide?",
    a: (
      <>
        Brand-name Ozempic, Wegovy, and Rybelsus require a prescription from a US-licensed provider. Some telehealth services prescribe and ship; some compounded versions are available through specialty pharmacies (though FDA has restricted compounding as of 2024–2025 since the shortage ended). Research-grade semaglutide is also sold by specialty peptide vendors. PP maintains a list of vetted vendors with verified discount codes — see{" "}
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
      "GLP-1 Receptor Activation [1] — Semaglutide mimics GLP-1, a hormone produced in the gut after eating. By activating the GLP-1 receptor, it triggers insulin release, suppresses appetite, and slows stomach emptying. This is the foundational mechanism behind every GLP-class drug, but semaglutide was the first to demonstrate sustained 15% weight loss.",
      "Slowed Gastric Emptying [1] — Semaglutide significantly delays how quickly food leaves the stomach, which prolongs satiety after meals. This is a major contributor to the reduced food intake observed in trials.",
      "Reduced Appetite Signaling [2] — Semaglutide acts on receptors in the hypothalamus and brain stem to reduce hunger and food cravings. Trial participants commonly report a reduced interest in food as well as smaller portion sizes.",
      "Improved Insulin Response [1] — In response to elevated blood sugar after meals, semaglutide stimulates the pancreas to release insulin while suppressing glucagon (which raises blood sugar). This dual action is why semaglutide is so effective for type 2 diabetes.",
      "Cardiovascular Effects [3] — Semaglutide reduces inflammatory markers, improves blood pressure, and lowers LDL cholesterol. The SELECT trial established a 20% reduction in heart attacks, strokes, and cardiovascular death in adults with obesity and established cardiovascular disease — independent of weight loss.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Obesity and Weight Management [4][5] — The STEP Phase 3 trial program established semaglutide as the first medication to produce sustained 15% weight loss. STEP 1 (NEJM 2021) showed average 14.9% weight loss at 2.4 mg over 68 weeks. STEP 3 (with intensive behavioral therapy) showed 16.0%. Real-world data shows 8–12% on average due to lower adherence and lower maintenance doses.",
      "Type 2 Diabetes [1] — The SUSTAIN program supported FDA approval for type 2 diabetes in 2017 (Ozempic). Semaglutide reduces A1C by 1–2% and is now considered first-line GLP-1 therapy for type 2 diabetes.",
      "Cardiovascular Risk [3] — SELECT (NEJM 2023) is one of the most significant cardiovascular outcomes trials of the past decade. In 17,604 adults with obesity or overweight and established cardiovascular disease (without diabetes), semaglutide reduced the composite endpoint of cardiovascular death, non-fatal heart attack, and non-fatal stroke by 20% over a mean of 40 months.",
      "Kidney Disease [6] — A pre-specified analysis of SELECT found that semaglutide reduced the composite kidney endpoint (eGFR decline, dialysis initiation, kidney death) by 22%. FDA approval for kidney disease in type 2 diabetes followed in 2025.",
      "Diabetes Prevention [3] — Among SELECT participants without diabetes at baseline, semaglutide reduced new diabetes diagnoses by 73% over 4 years.",
      "Adolescent Obesity [7] — STEP TEENS (NEJM 2022) showed 73% of adolescents (ages 12–17) with obesity achieved at least 5% weight loss on semaglutide vs 18% on placebo over 68 weeks. FDA approved Wegovy for adolescents aged 12+ in 2022.",
      "Heart Failure [8] — STEP-HFpEF showed semaglutide improved heart failure symptoms in adults with obesity-related HFpEF. Approved indication added in 2024.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "Semaglutide effects build gradually as the dose increases. Most users notice reduced appetite and smaller portion sizes within the first 1–2 weeks at the 0.25 mg starting dose, but significant weight loss requires reaching higher maintenance doses. Typical timeline at the full 2.4 mg dose: about 6% weight loss by week 20, 11–12% by week 40, and 14.9% by week 68 (STEP 1 average). Most users plateau between weeks 60 and 80. Real-world results average 8–12% over 12 months — meaningfully lower than trial data due to adherence challenges, dose-holding from side effects, and lack of structured nutrition support. Blood sugar improvements in users with type 2 diabetes appear within the first few weeks.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Semaglutide is administered as a once-weekly subcutaneous injection (Wegovy/Ozempic) or as a daily oral tablet (Rybelsus, for type 2 diabetes only). Injectable dosing escalates every 4 weeks to allow the body to adapt and minimize gastrointestinal side effects.
        </p>
        <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Wegovy (weight management) escalation schedule:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 1–4: 0.25 mg once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 5–8: 0.5 mg once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 9–12: 1.0 mg once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 13–16: 1.7 mg once weekly</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Weeks 17+: 2.4 mg once weekly (maintenance dose)</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Most users continue increasing through the schedule until they reach the 2.4 mg maintenance dose or hit dose-limiting side effects. Holding at a current dose for an additional 4 weeks if side effects are difficult to tolerate is standard practice. The 1.7 mg dose is sometimes used as the long-term maintenance dose if the 2.4 mg dose is poorly tolerated.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          For type 2 diabetes (Ozempic), the maximum approved dose is 2.0 mg weekly. The escalation is similar: 0.25 → 0.5 → 1.0 → 2.0 mg, with each step lasting at least 4 weeks.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Rybelsus (oral semaglutide) is approved only for type 2 diabetes. Doses are 3 mg, 7 mg, or 14 mg taken once daily on an empty stomach with no more than 4 oz of plain water, then waiting at least 30 minutes before eating. Oral bioavailability is low (about 1%), which is why the doses are larger than the injectable form.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The medication has a half-life of about 7 days, supporting once-weekly dosing with steady state reached in about 4 weeks at each dose level. Dose adjustments aren&apos;t typically needed for kidney or liver impairment, though dehydration from GI side effects can affect kidney function and should be monitored.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          For research-grade semaglutide outside FDA-approved use, dosing protocols mirror the approved schedule. There are no separate research-grade dosing standards.
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
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Nausea — most common side effect, especially during dose escalation. Affects 44% of users in trials, mostly in the first few weeks.</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Diarrhea — affects 30% of users</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Vomiting — affects 24%</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Constipation — affects 24%</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Abdominal pain — affects 20%</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Headache — common, often related to reduced food intake or dehydration</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Fatigue — common in first few weeks</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Decreased appetite — expected effect, sometimes excessive</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Indigestion and acid reflux — common in the first weeks</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Belching and bloating</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Dizziness — typically mild, often related to dehydration or rapid weight loss</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hair shedding — reported during rapid weight loss phases (similar to other rapid-weight-loss interventions)</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild liver enzyme elevations — usually resolve without intervention</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Hypoglycemia — primarily when combined with insulin or sulfonylureas in users with diabetes</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare — call a doctor)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Pancreatitis — rare but reported. Symptoms: severe abdominal pain radiating to the back, persistent vomiting, fever</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Gallbladder problems — risk of cholelithiasis (gallstones) ~2% in trials. Symptoms: severe pain in upper right abdomen, jaundice, fever</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Severe allergic reactions — rare. Symptoms: difficulty breathing, swelling of face/throat, hives</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Thyroid C-cell tumors — observed in rats; not confirmed in humans. Semaglutide carries a boxed warning. Tell your doctor if you have a personal or family history of medullary thyroid carcinoma or MEN-2 syndrome</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Acute kidney injury — risk increases if severe vomiting/diarrhea cause dehydration</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Diabetic retinopathy worsening — observed in some users with pre-existing retinopathy and rapid blood sugar improvement</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Suicidal ideation — investigated by FDA; no causal relationship established but reported in post-market surveillance</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          About 5% of trial participants discontinued semaglutide due to side effects. SURMOUNT-5 reported slightly higher discontinuation rates with semaglutide (5.6%) than tirzepatide (2.7%) due to GI events. Semaglutide carries a boxed warning for thyroid C-cell tumors based on rodent studies; this risk in humans is not established but is the basis for not using semaglutide in users with personal or family history of medullary thyroid carcinoma.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin), once weekly. Common injection sites are the abdomen (avoiding 2 inches around the navel), upper outer thighs, and back of the upper arms.",
      "Time of day: Any time, but consistent. Many users inject at the same day and time each week.",
      "With or without food: Either is fine for injectable. Rybelsus (oral) must be taken on an empty stomach with no more than 4 oz of plain water, then wait at least 30 minutes before eating, drinking, or taking other medications.",
      "Site rotation: Use a different site each week to reduce irritation. Stay at least 1 inch from previous injection sites.",
      "Missed dose: If less than 5 days late, take as soon as remembered. If 5 or more days late, skip the missed dose and resume on the next scheduled day. Do not double-dose.",
      "Pen handling: Wegovy and Ozempic pens come pre-filled. Store refrigerated until use. Allow to warm to room temperature for 30 minutes before injecting to reduce sting.",
      "Eating pattern: Smaller, more frequent meals reduce nausea. Avoid large fatty meals especially in the 24 hours after injection.",
      "Hydration: Drink water consistently. Semaglutide blunts thirst signals.",
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
      "Statins — frequently co-prescribed for cardiovascular risk reduction in users on semaglutide for SELECT-indicated populations.",
      "Avoid stacking with other GLP-class drugs (tirzepatide, retatrutide, liraglutide). Combining incretin-based medications significantly increases side effects without proportional benefit.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "Insulin and sulfonylureas — risk of hypoglycemia increases. Dose adjustment of insulin/sulfonylureas typically needed when starting semaglutide.",
      "Oral medications — semaglutide slows stomach emptying, which can affect absorption of oral drugs. Particularly relevant for warfarin, levothyroxine, and certain antibiotics.",
      "Birth control pills — slowed gastric emptying may reduce absorption. Backup contraception is recommended for some users, particularly during dose escalation.",
      "GLP-class agonists (tirzepatide, retatrutide, liraglutide) — should not be combined.",
      "DPP-4 inhibitors (sitagliptin, etc.) — should not be combined with semaglutide; the mechanisms overlap.",
      "Alcohol — compounds nausea, dehydration, and hypoglycemia risk.",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Pre-filled pens (Wegovy/Ozempic): Store refrigerated at 36–46°F (2–8°C) until first use. After first use, can be kept at room temperature up to 86°F (30°C) for up to 56 days.",
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
          Semaglutide is FDA-approved for type 2 diabetes (Ozempic, December 2017), oral type 2 diabetes (Rybelsus, September 2019), chronic weight management in adults (Wegovy, June 2021), chronic weight management in adolescents 12+ (Wegovy expansion, December 2022), cardiovascular risk reduction in adults with obesity and established cardiovascular disease (Wegovy expansion, March 2024), kidney disease in type 2 diabetes (Ozempic expansion, 2025), and HFpEF (Wegovy expansion, 2024). It is also approved by the European Medicines Agency (EMA) and by regulators in most major markets.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term safety data extends to about 4 years for some users in extension trials of SELECT. The thyroid C-cell tumor signal observed in rats has not been confirmed in humans and is the basis for the boxed warning rather than a documented human risk. Post-market surveillance has investigated reports of suicidal ideation; no causal relationship has been established.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade semaglutide sold by specialty peptide vendors is intended for laboratory research use only and is not approved for human consumption. The World Anti-Doping Agency prohibits semaglutide and other GLP-class drugs in sport. Pricing varies by formulation and insurance coverage; brand-name retail in the US runs roughly $1,000–$1,400 per month without insurance.
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
          Wilding JPH, Batterham RL, Calanna S, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1). N Engl J Med. 2021;384:989-1002.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2032183
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wadden TA, Bailey TS, Billings LK, et al. Effect of Subcutaneous Semaglutide vs Placebo as an Adjunct to Intensive Behavioral Therapy on Body Weight in Adults with Overweight or Obesity (STEP 3). JAMA. 2021;325(14):1403-1413.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/33625476/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/33625476/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Lincoff AM, Brown-Frandsen K, Colhoun HM, et al. Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes (SELECT). N Engl J Med. 2023;389:2221-2232.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2307563"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2307563
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
          Kushner RF, Calanna S, Davies M, et al. Semaglutide 2.4 mg for the Treatment of Obesity: Key Elements of the STEP Trials 1 to 5. Obesity. 2020;28(6):1050-1061.{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/32441890/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://pubmed.ncbi.nlm.nih.gov/32441890/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Colhoun HM, Lingvay I, Brown PM, et al. Long-term Kidney Outcomes of Semaglutide in Obesity and Cardiovascular Disease in the SELECT trial. Nat Med. 2024.{" "}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11271413/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11271413/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Weghuber D, Barrett T, Barrientos-Pérez M, et al. Once-Weekly Semaglutide in Adolescents with Obesity (STEP TEENS). N Engl J Med. 2022;387:2245-2257.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2208601"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2208601
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Kosiborod MN, Abildstrøm SZ, Borlaug BA, et al. Semaglutide in Patients with Heart Failure with Preserved Ejection Fraction and Obesity (STEP-HFpEF). N Engl J Med. 2023;389:1069-1084.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2306963"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa2306963
          </a>
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function SemaglutidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Semaglutide","description":"Semaglutide (Ozempic/Wegovy/Rybelsus) research profile: mechanism, STEP trial results, SELECT cardiovascular data, dosing protocol, side effects, and FAQ.","url":"https://profpeptide.com/peptides/semaglutide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Semaglutide"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Semaglutide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">FDA-Approved</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Ozempic, Wegovy, Rybelsus, GLP-1 Receptor Agonist
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Semaglutide is an FDA-approved peptide for type 2 diabetes (sold as Ozempic), chronic weight management (sold as Wegovy), and oral type 2 diabetes treatment (sold as Rybelsus). It works by mimicking GLP-1, a hormone the body naturally produces after eating. Approved in 2017 for diabetes and 2021 for obesity, it has the longest safety record and largest body of clinical evidence of any GLP-class medication.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Average 14.9% body weight loss over 68 weeks at the 2.4 mg dose (STEP 1 trial)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">20% reduction in major adverse cardiovascular events in adults with obesity and established heart disease (SELECT trial)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Lower blood sugar and A1C in type 2 diabetes (1–2% reduction)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Reduced appetite and slower stomach emptying</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Slowed progression of kidney disease in users with diabetes</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">73% reduction in new diabetes diagnoses in SELECT participants without diabetes at baseline</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> FDA-approved dosing for weight management starts at 0.25 mg once weekly and escalates every 4 weeks (0.25 → 0.5 → 1.0 → 1.7 → 2.4 mg) up to a maximum of 2.4 mg weekly. For type 2 diabetes (Ozempic), maximum dose is 2.0 mg weekly. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for the full schedule.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Semaglutide is available by prescription as Ozempic (diabetes), Wegovy (weight loss), or Rybelsus (oral diabetes) through licensed pharmacies. Research-grade semaglutide is also widely available through specialty peptide vendors with verified discount codes. See{" "}
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
        {["Weight Loss", "Diabetes", "FDA-Approved", "Cardiovascular"].map((tag) => (
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
        <Link href="/peptides/retatrutide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide</Link>
        <Link href="/peptides/cagrilintide" className="text-sm font-medium text-[#0891b2] hover:underline">Cagrilintide</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/retatrutide-vs-semaglutide" className="text-sm font-medium text-[#0891b2] hover:underline">Retatrutide vs Semaglutide &rarr;</Link>
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
