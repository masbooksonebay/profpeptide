import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/semaglutide",
  title: "Semaglutide — Ozempic, Wegovy, Mechanism, Dosage, Side Effects | Prof. Peptide",
  description:
    "Semaglutide (Ozempic/Wegovy/Rybelsus) research profile: mechanism, STEP trial results, SELECT cardiovascular data, dosing protocol, side effects, and FAQ.",
});

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
    a: (
      <>
        For weight loss, no &mdash; head-to-head in SURMOUNT-5 (NEJM 2025),{" "}
        <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>{" "}
        produced 20.2% average weight loss vs 13.7% with semaglutide. However, semaglutide has the longer safety record (8+ years vs 4 years), proven cardiovascular benefit (SELECT trial reduced major cardiovascular events by 20%), and broader list of approved indications including kidney disease, HFpEF, and adolescent obesity.
      </>
    ),
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
    q: "Where can I get semaglutide?",
    a: (
      <>
        Brand-name Ozempic, Wegovy, and Rybelsus require a prescription from a US-licensed provider. Some telehealth services prescribe and ship; some compounded versions are available through specialty pharmacies (though FDA has restricted compounding as of 2024&ndash;2025 since the shortage ended). Research-grade semaglutide is also sold by specialty peptide vendors for laboratory use only &mdash; see{" "}
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
    title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1)",
    authors: "Wilding JPH, Batterham RL, Calanna S, et al. — STEP 1 Study Group",
    journal: "New England Journal of Medicine",
    year: "2021",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
    summary: "The landmark trial that put semaglutide on the map for weight loss. In this 68-week study of 1,961 adults with obesity or overweight (without diabetes), those taking weekly semaglutide 2.4mg lost an average of 14.9% of their body weight — compared to just 2.4% in the placebo group. Nearly 70% of semaglutide participants lost at least 10% of their body weight. This was the first major trial showing a non-surgical treatment could achieve weight loss approaching that of bariatric surgery.",
  },
  {
    title: "Two-Year Effects of Semaglutide in Adults with Overweight or Obesity (STEP 5)",
    authors: "Garvey WT, Batterham RL, Bhatta M, et al. — STEP 5 Study Group",
    journal: "Nature Medicine",
    year: "2022",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/36216945/",
    summary: "STEP 5 extended the original trial to two years, enrolling 304 adults with obesity. Participants on semaglutide maintained an average 15.2% weight loss at 104 weeks versus just 2.6% with placebo — demonstrating that the weight loss is durable with continued treatment. This was important evidence that semaglutide is not just a short-term intervention but a sustained metabolic treatment.",
  },
  {
    title: "Semaglutide and Cardiovascular Outcomes in Obesity Without Diabetes (SELECT)",
    authors: "Lincoff AM, Brown-Frandsen K, Colhoun HM, et al.",
    journal: "New England Journal of Medicine",
    year: "2023",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2307563",
    summary: "The SELECT trial enrolled over 17,600 adults with obesity and established cardiovascular disease but no diabetes. Those on semaglutide 2.4mg had a 20% lower risk of major adverse cardiovascular events (heart attack, stroke, cardiovascular death) compared to placebo over approximately 3 years. This trial elevated semaglutide from a weight loss drug to a cardiovascular disease treatment and was one of the most significant findings in metabolic medicine in 2023.",
  },
  {
    title: "Semaglutide for the Treatment of Overweight and Obesity — A Review of the STEP Program",
    authors: "Bergmann NC, Davies MJ, Lingvay I, Knop FK",
    journal: "Diabetes, Obesity and Metabolism",
    year: "2023",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10092086/",
    summary: "A comprehensive review synthesizing results across the full STEP clinical trial program. Across STEP 1, 3, 4, and 8, semaglutide 2.4mg produced average weight losses of 14.9–17.4% over 68 weeks in people without diabetes, with 69–79% of participants achieving at least 10% weight loss. The review also covers cardiometabolic improvements and the safety profile across thousands of trial participants — providing the clearest overall picture of what semaglutide does in clinical practice.",
  },
  {
    title: "SUSTAIN-6 — Cardiovascular Outcomes with Semaglutide in Type 2 Diabetes",
    authors: "Marso SP, Daniels GH, Brown-Frandsen K, et al.",
    journal: "New England Journal of Medicine",
    year: "2016",
    access: "Open Access",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1607141",
    summary: "The original cardiovascular outcomes trial for semaglutide in 3,297 high-risk type 2 diabetes patients. Semaglutide reduced major adverse cardiovascular events by 26% compared to placebo — the finding that first established semaglutide's cardiovascular benefit beyond glucose control, and the foundation for all subsequent cardiovascular research in this class.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Semaglutide work?",
    intro: (
      <>
        Semaglutide mimics GLP-1, a hormone the gut releases after eating, and activates the GLP-1 receptor to slow stomach emptying, suppress appetite, and improve insulin response.{" "}
        <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link>{" "}
        adds a second receptor (GIP) and{" "}
        <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">Retatrutide</Link>{" "}
        adds a third (glucagon) &mdash; but semaglutide&rsquo;s single-receptor design is the most-studied of the three, with over eight years of clinical use and the broadest list of approved indications.
      </>
    ),
    body: [
      "GLP-1 Receptor Activation [1]. Semaglutide mimics GLP-1, a hormone produced in the gut after eating. By activating the GLP-1 receptor, it triggers insulin release, suppresses appetite, and slows stomach emptying. This is the foundational mechanism behind every GLP-class drug, but semaglutide was the first to demonstrate sustained 15% weight loss.",
      "Slowed Gastric Emptying [1]. Semaglutide significantly delays how quickly food leaves the stomach, which prolongs satiety after meals. This is a major contributor to the reduced food intake observed in trials.",
      "Reduced Appetite Signaling [2]. Semaglutide acts on receptors in the hypothalamus and brain stem to reduce hunger and food cravings. Trial participants commonly report a reduced interest in food as well as smaller portion sizes.",
      "Improved Insulin Response [1]. In response to elevated blood sugar after meals, semaglutide stimulates the pancreas to release insulin while suppressing glucagon (which raises blood sugar). This dual action is why semaglutide is so effective for type 2 diabetes.",
      "Cardiovascular Effects [3]. Semaglutide reduces inflammatory markers, improves blood pressure, and lowers LDL cholesterol. The SELECT trial established a 20% reduction in heart attacks, strokes, and cardiovascular death in adults with obesity and established cardiovascular disease — independent of weight loss.",
    ],
  },
  {
    id: "research",
    title: "What is Semaglutide used for?",
    intro:
      "Semaglutide is FDA-approved across seven distinct indications — more than any other GLP-class drug. The clinical evidence spans type 2 diabetes (Ozempic 2017), oral type 2 diabetes (Rybelsus 2019), chronic weight management (Wegovy 2021), adolescent obesity (2022), cardiovascular risk reduction (2024), HFpEF (2024), and kidney disease in diabetes (2025). The research below covers each.",
    body: [
      "Obesity and Weight Management [1][4]. The STEP Phase 3 trial program established semaglutide as the first medication to produce sustained 15% weight loss. STEP 1 (NEJM 2021) showed average 14.9% weight loss at 2.4 mg over 68 weeks. STEP 3 (with intensive behavioral therapy) showed 16.0%. Real-world data shows 8–12% on average due to lower adherence and lower maintenance doses.",
      "Type 2 Diabetes [9]. The SUSTAIN program supported FDA approval for type 2 diabetes in 2017 (Ozempic). Semaglutide reduces A1C by 1–2% and is now considered first-line GLP-1 therapy for type 2 diabetes. The PIONEER program supported approval of the oral form (Rybelsus, 2019) — the first oral GLP-1 agonist on market.",
      "Cardiovascular Risk [3]. SELECT (NEJM 2023) is one of the most significant cardiovascular outcomes trials of the past decade. In 17,604 adults with obesity or overweight and established cardiovascular disease (without diabetes), semaglutide reduced the composite endpoint of cardiovascular death, non-fatal heart attack, and non-fatal stroke by 20% over a mean of 40 months.",
      "Kidney Disease [6]. A pre-specified analysis of SELECT found that semaglutide reduced the composite kidney endpoint (eGFR decline, dialysis initiation, kidney death) by 22%. FDA approval for kidney disease in type 2 diabetes followed in 2025.",
      "Diabetes Prevention [3]. Among SELECT participants without diabetes at baseline, semaglutide reduced new diabetes diagnoses by 73% over 4 years.",
      "Adolescent Obesity [7]. STEP TEENS (NEJM 2022) showed 73% of adolescents (ages 12–17) with obesity achieved at least 5% weight loss on semaglutide vs 18% on placebo over 68 weeks. FDA approved Wegovy for adolescents aged 12+ in 2022.",
      "Heart Failure [8]. STEP-HFpEF showed semaglutide improved heart failure symptoms in adults with obesity-related HFpEF. Approved indication added in 2024.",
    ],
  },
  {
    id: "timeline",
    title: "How long does Semaglutide take to work?",
    intro:
      "Semaglutide effects build progressively as the dose escalates. Most users notice reduced appetite within the first 1–2 weeks at the 0.25 mg starting dose. Meaningful weight loss accumulates over the 16-week titration to 2.4 mg, then continues for another year before plateauing. Real-world results run noticeably below trial averages due to adherence, dose-holding, and lower maintenance doses.",
    content:
      "In trials, most participants noticed reduced appetite and smaller portion sizes within the first 1–2 weeks at the 0.25 mg starting dose, but significant weight loss required reaching higher maintenance doses. Typical timeline at the full 2.4 mg dose: about 6% weight loss by week 20, 11–12% by week 40, and 14.9% by week 68 (STEP 1 average). Most users plateau between weeks 60 and 80. Real-world results average 8–12% over 12 months — meaningfully lower than trial data due to adherence challenges, dose-holding from side effects, and lack of structured nutrition support. Blood sugar improvements in users with type 2 diabetes appear within the first few weeks.",
  },
  {
    id: "dosing",
    title: "How is Semaglutide dosed?",
    intro:
      "Semaglutide is administered as a once-weekly subcutaneous injection (Wegovy/Ozempic) or as a daily oral tablet (Rybelsus, for type 2 diabetes only). Injectable dosing follows a stepwise 16-week escalation from 0.25 mg → 2.4 mg, with each step lasting 4 weeks to let the body adapt and reduce gastrointestinal side effects. The slow titration is non-negotiable; trying to escalate faster significantly increases side-effect rates without improving outcomes.",
    node: (
      <div className="space-y-3">
        <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 pt-2">
          Standard Wegovy escalation schedule (weight management):
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 1–4.</span> 0.25 mg once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 5–8.</span> 0.5 mg once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 9–12.</span> 1.0 mg once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 13–16.</span> 1.7 mg once weekly.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weeks 17+.</span> 2.4 mg once weekly (maintenance dose).</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Most users continue increasing through the schedule until they reach the 2.4 mg maintenance dose or hit dose-limiting side effects. Holding at the current dose for an additional 4 weeks if side effects are difficult to tolerate is standard practice and does not appear to reduce long-term outcomes. The 1.7 mg dose is sometimes used as the long-term maintenance dose if 2.4 mg is poorly tolerated.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          For type 2 diabetes (Ozempic), the maximum approved dose is 2.0 mg weekly. The escalation is similar: 0.25 → 0.5 → 1.0 → 2.0 mg, with each step lasting at least 4 weeks.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Rybelsus (oral semaglutide) is approved only for type 2 diabetes. Doses are 3 mg, 7 mg, or 14 mg taken once daily on an empty stomach with no more than 4 oz of plain water, then waiting at least 30 minutes before eating. Oral bioavailability is low (about 1%), which is why the doses are larger than the injectable form.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Half-life is approximately 165 hours (~7 days), supporting once-weekly dosing with steady state reached in about 4 weeks at each dose level. Dose adjustments aren&rsquo;t typically needed for kidney or liver impairment, though dehydration from GI side effects can affect kidney function and should be monitored.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          For research-grade semaglutide outside FDA-approved use, dosing protocols mirror the approved schedule. There are no separate research-grade dosing standards.
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
    title: "How is Semaglutide administered?",
    intro: (
      <>
        Semaglutide is given as a subcutaneous injection &mdash; under the skin, not into muscle &mdash; once weekly, using a small insulin syringe or a pre-filled pen (Wegovy/Ozempic). The injection routine, timing, and supporting habits (hydration, eating pattern, alcohol management) matter as much as the dose for tolerability. For the practical mechanics of insulin syringes, units vs mcg conversion, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Route.</span> Subcutaneous injection, once weekly. Common sites are the abdomen (avoiding a 2-inch radius around the navel), upper outer thighs, and back of the upper arms.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Any time, but consistent. Many users inject at the same day and time each week.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Either is fine for injectable. Rybelsus (oral) must be taken on an empty stomach with no more than 4 oz of plain water, then wait at least 30 minutes before eating, drinking, or taking other medications.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Use a different site each week to reduce localized irritation. Stay at least 1 inch from previous injection sites.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Missed dose.</span> If less than 5 days late, take as soon as remembered. If 5 or more days late, skip the missed dose and resume on the next scheduled day. Do not double-dose.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pen handling.</span> Wegovy and Ozempic pens come pre-filled. Store refrigerated until use. Allow to warm to room temperature for 30 minutes before injecting to reduce sting.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Eating pattern.</span> Smaller, more frequent meals reduce nausea. Avoid large fatty meals especially in the 24 hours after injection.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hydration.</span> Drink water consistently. Semaglutide blunts thirst signals, so set a daily water target rather than waiting for thirst.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Alcohol.</span> Avoid for at least 48 hours after injection &mdash; alcohol compounds nausea and dehydration.</li>
      </ol>
    ),
  },
  {
    id: "stacks",
    title: "What does Semaglutide stack well with?",
    intro:
      "Semaglutide&rsquo;s GLP-1 mechanism is well-characterized, so the stacking question is straightforward: pair with non-overlapping interventions (resistance training, protein, metformin in diabetes contexts) and avoid other GLP-class drugs. The cleanest additions are non-peptide. The things to avoid are anything that compounds the same incretin pathway.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standalone use.</span> The most common protocol and what FDA approval supports. Semaglutide produces meaningful weight loss and metabolic improvement on its own.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Metformin.</span> Commonly combined for type 2 diabetes. Standard practice in clinical settings; additive blood-sugar control without overlapping mechanism.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + 1.2–1.6 g/kg protein.</span> Recommended to preserve lean muscle mass during rapid weight loss. Without this, GLP-class drugs can cause significant muscle loss alongside fat loss.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GH-axis peptides for lean-mass preservation.</span>{" "}
          <Link href="/peptides/gh-stack" className="text-[#0891b2] hover:underline">GH Stack</Link>{" "}
          (CJC-1295 + Ipamorelin) or{" "}
          <Link href="/peptides/mk-677" className="text-[#0891b2] hover:underline">MK-677</Link>{" "}
          are sometimes added during caloric restriction to support lean-mass retention. Side-effect profiles do not overlap meaningfully with semaglutide.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">SGLT2 inhibitors (empagliflozin, dapagliflozin).</span> Used together in some type 2 diabetes protocols for additive cardiovascular and weight benefits.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Statins.</span> Frequently co-prescribed for cardiovascular risk reduction in users on semaglutide for SELECT-indicated populations.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Avoid: other GLP-class drugs.</span>{" "}
          <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">Tirzepatide</Link>,{" "}
          <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">retatrutide</Link>, and liraglutide should not be combined with semaglutide. Combining incretin-based drugs significantly increases GI side effects without proportional benefit.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">CagriSema as an alternative, not a stack.</span>{" "}
          <Link href="/peptides/cagrisema" className="text-[#0891b2] hover:underline">CagriSema</Link>{" "}
          (semaglutide + cagrilintide) is a single combination product, not something to add on top of standalone semaglutide. The amylin component ({" "}
          <Link href="/peptides/cagrilintide" className="text-[#0891b2] hover:underline">cagrilintide</Link>
          ) adds an independent satiety mechanism.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of Semaglutide?",
    intro: (
      <>
        Semaglutide&rsquo;s side-effect profile is well-characterized after eight years of clinical use and the largest GLP-1 trial population in the field. Gastrointestinal effects dominate &mdash; especially during dose escalation &mdash; and resolve in most users as the body adapts. The serious adverse event rate in trials is comparable to placebo. Notably, in head-to-head SURMOUNT-5, GI-related discontinuation was higher with semaglutide than{" "}
        <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>{" "}
        (5.6% vs 2.7%).
      </>
    ),
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nausea.</span> Most common side effect, especially during dose escalation. Affects 44% of users in trials, mostly in the first few weeks.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diarrhea.</span> Affects 30% of users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vomiting.</span> Affects 24%.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Constipation.</span> Affects 24%.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Abdominal pain.</span> Affects 20%.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Common, often related to reduced food intake or dehydration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fatigue.</span> Common in first few weeks.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Decreased appetite.</span> Expected effect, sometimes excessive.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Indigestion and acid reflux.</span> Common in the first weeks.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Belching and bloating.</span> Related to slowed gastric emptying.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dizziness.</span> Typically mild, often related to dehydration or rapid weight loss.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hair shedding.</span> Reported during rapid weight loss phases (similar to other rapid-weight-loss interventions).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild liver enzyme elevations.</span> Usually resolve without intervention.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypoglycemia.</span> Primarily when combined with insulin or sulfonylureas in users with diabetes.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare — call a doctor)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pancreatitis.</span> Rare but reported. Symptoms: severe abdominal pain radiating to the back, persistent vomiting, fever.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Gallbladder problems.</span> Risk of cholelithiasis (gallstones) ~2% in trials. Symptoms: severe pain in upper right abdomen, jaundice, fever.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe allergic reactions.</span> Rare. Symptoms: difficulty breathing, swelling of face/throat, hives. Seek emergency care.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Thyroid C-cell tumors.</span> Observed in rats; not confirmed in humans. Semaglutide carries a boxed warning. Tell your doctor if you have a personal or family history of medullary thyroid carcinoma or MEN-2 syndrome.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Acute kidney injury.</span> Risk increases if severe vomiting/diarrhea cause dehydration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diabetic retinopathy worsening.</span> Observed in some users with pre-existing retinopathy and rapid blood sugar improvement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Suicidal ideation.</span> Investigated by FDA; no causal relationship established but reported in post-market surveillance.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          About 5% of trial participants discontinued semaglutide due to side effects. Semaglutide carries a boxed warning for thyroid C-cell tumors based on rodent studies; this risk in humans is not established but is the basis for not using semaglutide in users with personal or family history of medullary thyroid carcinoma.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does Semaglutide interact with other drugs?",
    intro:
      "Semaglutide&rsquo;s most important interactions are with other blood-sugar-lowering medications (insulin, sulfonylureas), oral medications that depend on stomach emptying for absorption, and other GLP-class drugs. Alcohol compounds nausea and dehydration. The interactions below are the ones most relevant in research and clinical contexts.",
    body: [
      "Insulin and sulfonylureas. Risk of hypoglycemia increases when semaglutide is combined with insulin, glipizide, glyburide, or other blood-sugar-lowering drugs. Dose adjustment of insulin/sulfonylureas is typically needed when starting semaglutide.",
      "Oral medications. Semaglutide slows stomach emptying, which can affect the absorption of oral drugs. Particularly relevant for medications with a narrow therapeutic window (warfarin, levothyroxine, certain antibiotics).",
      "Birth control pills. Slowed gastric emptying may reduce absorption. Backup contraception is recommended for some users, particularly during dose escalation.",
      "GLP-class agonists (tirzepatide, retatrutide, liraglutide). Should not be combined — overlapping incretin mechanism compounds side effects without proportional benefit.",
      "DPP-4 inhibitors (sitagliptin, etc.). Should not be combined with semaglutide; the mechanisms overlap.",
      "Alcohol. Compounds nausea, dehydration, and hypoglycemia risk.",
    ],
  },
  {
    id: "storage",
    title: "How should Semaglutide be stored?",
    body: [
      "Pre-filled pens (Wegovy/Ozempic): Store refrigerated at 36–46°F (2–8°C) until first use. After first use, can be kept at room temperature up to 86°F (30°C) for up to 56 days.",
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
    title: "What are the limitations of Semaglutide research?",
    intro:
      "Semaglutide is the most-studied GLP-1 agonist on the market, with eight-plus years of clinical use and seven FDA-approved indications. The remaining open questions are around long-term safety beyond five years, the thyroid C-cell tumor signal observed in rodents, and post-market reports of suicidal ideation that the FDA has investigated without establishing causality.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Semaglutide is FDA-approved for type 2 diabetes (Ozempic, December 2017), oral type 2 diabetes (Rybelsus, September 2019), chronic weight management in adults (Wegovy, June 2021), chronic weight management in adolescents 12+ (Wegovy expansion, December 2022), cardiovascular risk reduction in adults with obesity and established cardiovascular disease (Wegovy expansion, March 2024), kidney disease in type 2 diabetes (Ozempic expansion, 2025), and HFpEF (Wegovy expansion, 2024). It is also approved by the European Medicines Agency (EMA) and by regulators in most major markets.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Long-term safety data extends to about 4 years for some users in extension trials of SELECT. The thyroid C-cell tumor signal observed in rats has not been confirmed in humans and is the basis for the boxed warning rather than a documented human risk. Post-market surveillance has investigated reports of suicidal ideation; no causal relationship has been established.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Research-grade semaglutide sold by specialty peptide vendors is intended for laboratory research use only and is not approved for human consumption. The World Anti-Doping Agency prohibits semaglutide and other GLP-class drugs in sport. Pricing varies by formulation and insurance coverage; brand-name retail in the US runs roughly $1,000–$1,400 per month without insurance.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Semaglutide",
    intro:
      "Semaglutide is sold by prescription as Ozempic, Wegovy, and Rybelsus. Research-grade product is also sold by specialty peptide vendors for laboratory use only. The three vendors highlighted below carry Semaglutide and have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "peptide-partners" },
            { slug: "ascension-peptides", note: "Sold as S-5" },
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
    title: "Semaglutide FAQ",
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
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Marso SP, Daniels GH, Brown-Frandsen K, et al. Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes (SUSTAIN-6). N Engl J Med. 2016;375:1834-1844.{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa1607141"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0891b2] hover:underline break-words"
          >
            https://www.nejm.org/doi/full/10.1056/NEJMoa1607141
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
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 18, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Ozempic, Wegovy, Rybelsus, GLP-1 Receptor Agonist
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> GLP-1 Receptor Agonist (mono-agonist)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> FDA-approved &mdash; type 2 diabetes (Ozempic, Dec 2017), obesity (Wegovy, Jun 2021), HFpEF (2024), kidney disease (2025); EMA-approved
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Semaglutide?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Semaglutide is an FDA-approved peptide that mimics GLP-1, a hormone the gut releases after eating, to slow stomach emptying, suppress appetite, and improve insulin response. It is the active ingredient in three branded medications &mdash; Ozempic (type 2 diabetes, approved 2017), Wegovy (chronic weight management, approved 2021), and Rybelsus (oral type 2 diabetes, approved 2019). With eight-plus years of clinical use and seven FDA-approved indications, it has the longest safety record and largest body of clinical evidence of any GLP-class medication. Sibling compounds{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>{" "}
            (dual GLP-1/GIP) and{" "}
            <Link href="/peptides/retatrutide" className="text-[#0891b2] hover:underline">retatrutide</Link>{" "}
            (triple GLP-1/GIP/glucagon) build on the same receptor pathway with additional targets. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Average 14.9% body weight loss over 68 weeks at the 2.4 mg dose (STEP 1 trial)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">20% reduction in major adverse cardiovascular events in adults with obesity and established heart disease (SELECT trial)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Lower blood sugar and A1C in type 2 diabetes (1–2% reduction)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced appetite and slower stomach emptying</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Slowed progression of kidney disease in users with diabetes</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">73% reduction in new diabetes diagnoses in SELECT participants without diabetes at baseline</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Once-weekly dosing (half-life around 7 days)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> FDA-approved dosing for weight management starts at 0.25 mg once weekly and escalates every 4 weeks (0.25 → 0.5 → 1.0 → 1.7 → 2.4 mg) up to a maximum of 2.4 mg weekly. For type 2 diabetes (Ozempic), maximum dose is 2.0 mg weekly. Research-grade dosing protocols mirror the approved schedule.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Brand-name Ozempic, Wegovy, and Rybelsus require a prescription. Research-grade semaglutide is sold by specialty peptide vendors for laboratory use only. PP maintains a vetted list of vendors with verified discount codes. See{" "}
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
        <Link href="/peptides/cagrisema" className="text-sm font-medium text-[#0891b2] hover:underline">CagriSema</Link>
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

      <PageDisclaimer />
    <ContactLink pageName="Semaglutide" pagePath="/peptides/semaglutide" />
    </div>
    </>
  );
}
