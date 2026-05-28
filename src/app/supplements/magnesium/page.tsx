import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/magnesium",
  title: "Magnesium: Forms Compared (Glycinate vs Citrate vs Threonate), Migraine, Cramps Myth",
  description:
    "Magnesium dosing (200–400 mg elemental) — sub-tier evidence (Strong: deficiency, constipation, migraine, eclampsia; Moderate: BP, glycemic control; Mixed: sleep, cramps per Cochrane null), and forms-compared central (glycinate, citrate, oxide, threonate, malate).",
});

const faqs = [
  {
    q: "Glycinate vs citrate vs oxide vs threonate — which magnesium form should I take?",
    a: (
      <>
        Depends entirely on your goal — this is the central practical decision. <span className="font-semibold">Magnesium glycinate (bisglycinate)</span> is gentle on GI, well-absorbed, and the default choice for general supplementation, sleep/anxiety contexts, and users who want magnesium without laxative effect. <span className="font-semibold">Magnesium citrate</span> is well-absorbed and produces mild osmotic laxative effect — useful when constipation is part of the goal. <span className="font-semibold">Magnesium oxide</span> has poor elemental bioavailability (~4%) but very strong osmotic effect — cheap and effective specifically for constipation, poor for general status correction. <span className="font-semibold">Magnesium L-threonate</span> is marketed for cognitive applications based on Liu 2010 rodent data showing brain magnesium increases; human evidence is thin (Liu 2016 small trial) and the form is much more expensive than alternatives. <span className="font-semibold">Magnesium malate</span> combines magnesium with malic acid — common in fatigue and fibromyalgia contexts. Practical default: glycinate for general use and sleep; citrate if constipation is also a goal; threonate only if specifically targeting cognitive applications and you accept the thin evidence + cost.
      </>
    ),
  },
  {
    q: "How much magnesium should I take?",
    a: "200–400 mg elemental magnesium daily for general supplementation. The RDA is 320 mg for women and 420 mg for men (total intake including diet). Most users don't reach RDA from diet alone — surveys suggest 45–68% of Americans fall short. Supplemental 200–400 mg covers the gap without exceeding the supplemental tolerable upper limit (UL) of 350 mg/day from supplements. The UL specifically targets supplemental magnesium (where laxative effect kicks in) — it does NOT cap dietary magnesium intake, which has no documented toxicity ceiling in healthy users. Migraine prophylaxis protocol: 400–600 mg/day per AAN/AHS Level B recommendation (above UL but specifically for the migraine indication; coordinate with neurology). Higher doses are used in specific clinical contexts (eclampsia/pre-eclampsia uses IV magnesium sulfate under obstetric supervision). Practical guidance: 200–400 mg/day glycinate or citrate is the standard supplemental dose.",
  },
  {
    q: "Will magnesium actually help me sleep?",
    a: "Honestly, the evidence is thinner than the popular reputation suggests. The most-cited trial is Abbasi 2012 in 46 elderly insomniacs (small sample) — documented modest sleep quality improvement at 500 mg/day. Subsequent meta-analyses include limited RCTs with mixed results. The mechanism (GABA-A receptor potentiation, NMDA antagonism, calming effect) is biologically plausible. The honest framing: magnesium's sleep evidence is Emerging/Modest — not Strong despite the popular reputation. Effect is more pronounced in users who are deficient at baseline. If you're hoping for a sleep miracle, manage expectations — magnesium may modestly help, but it's not as robustly evidenced as the marketing suggests. Glycinate form is most commonly used for sleep applications. Take pre-bed if using for sleep.",
  },
  {
    q: "Will magnesium help with muscle cramps?",
    a: "For general/idiopathic muscle cramps in adults: NO, despite the popular reputation. Garrison 2020 Cochrane systematic review of 11 RCTs found magnesium supplementation did NOT significantly reduce cramp frequency, intensity, or duration in adults with idiopathic muscle cramps. This is the foundational evidence base — and it's negative. Where magnesium DOES help with cramps: (1) Pregnancy leg cramps — moderate evidence; (2) Exercise-associated cramps in users with documented deficiency — modest evidence. For typical adult muscle cramps without deficiency: magnesium is not the right tool. Cramp causality is more complex than just electrolyte depletion (see Schwellnus 2009 critique on the broader cramp-mechanism question). Honest framing: don't expect magnesium to solve generic muscle cramping.",
  },
  {
    q: "Does magnesium help prevent migraines?",
    a: "Yes — this is one of magnesium's better-evidenced applications. The American Academy of Neurology and American Headache Society give magnesium a Level B (probably effective) recommendation for migraine prophylaxis in their joint guideline. Standard dose: 400–600 mg/day elemental magnesium for 8–12 weeks to assess effect. Mechanism likely involves NMDA receptor modulation, vasodilation, and platelet aggregation effects. Migraine sufferers often have lower magnesium status than non-sufferers. The dose for migraine prophylaxis exceeds the general UL of 350 mg/day — coordinate with neurology if pursuing this protocol. Citrate, glycinate, or oxide forms have all been used in trials. Effect is preventive, not acute — magnesium during an active migraine doesn't abort it (though IV magnesium sulfate is used in some emergency department migraine protocols).",
  },
  {
    q: "What's the deal with magnesium L-threonate and cognition?",
    a: "Promising mechanism, thin human evidence, expensive form. Magnesium L-threonate was developed specifically to cross the blood-brain barrier and raise brain magnesium concentrations. Liu 2010 documented brain magnesium increases and learning/memory improvements in aged rats. Liu 2016 — the most-cited human trial — found modest cognitive improvements in older adults with cognitive impairment, but the trial was small (44 subjects) and industry-funded. Whether magnesium threonate produces meaningfully better cognitive outcomes than equivalent doses of other magnesium forms in healthy users isn't well-characterized. The form costs 5–10x more per mg of elemental magnesium than glycinate or citrate. Practical positioning: if you specifically target cognitive applications and accept the thin evidence + premium cost, threonate is the form designed for this. For general supplementation, the cost premium isn't justified. Threonate doesn't replace evidence-based cognitive interventions (sleep, exercise, social engagement, cardiovascular health).",
  },
  {
    q: "Can magnesium lower my blood pressure?",
    a: "Modestly — Moderate evidence. Zhang 2016 meta-analysis of 34 RCTs documented systolic BP reduction of approximately 2 mmHg and diastolic of approximately 1.78 mmHg with magnesium supplementation. Effect is larger in hypertensive populations and users with baseline magnesium insufficiency. Magnesium acts as a natural calcium channel blocker — regulating vascular smooth muscle tone. Effect size is modest compared to antihypertensive medications but additive to lifestyle interventions. Practical positioning: magnesium is reasonable as part of a comprehensive BP-management approach (DASH diet, exercise, weight management, potassium intake) rather than as a standalone BP intervention. Don't expect dramatic effects.",
  },
  {
    q: "Is magnesium safe? Any major contraindications?",
    a: "Generally very safe at standard supplemental doses in users with normal kidney function. The main practical considerations: (1) Tolerable upper limit from supplements is 350 mg/day — above this, laxative/diarrhea effect kicks in. Doesn't cap dietary intake. (2) Kidney disease — impaired magnesium clearance. Coordinate with nephrology before supplementing in chronic kidney disease. (3) Antibiotic interactions — magnesium chelates with quinolones, tetracyclines, and some others. Separate dosing by 2+ hours. (4) Bisphosphonates — magnesium reduces absorption. Separate by 2+ hours. (5) Heart block / bradycardia — high-dose magnesium can theoretically worsen. Generally not a concern at supplemental doses. (6) Magnesium toxicity (hypermagnesemia) is rare in users with normal kidneys but serious — causes muscle weakness, hypotension, respiratory depression. Almost exclusively occurs in kidney failure contexts or massive overdose.",
  },
];

const studies = [
  {
    title: "The Importance of Magnesium in Clinical Healthcare",
    authors: "Schwalfenberg GK, Genuis SJ",
    journal: "Scientifica",
    year: "2017",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29093983/",
    summary: "A comprehensive review of magnesium biology and clinical applications. Documents magnesium's role as cofactor for 300+ enzymatic reactions; common deficiency prevalence (45–68% of US adults below RDA); clinical indications spanning cardiovascular, neurological, metabolic, and gastrointestinal applications. Foundational reference for the multi-indication evidence base.",
  },
  {
    title: "Effects of Magnesium Supplementation on Blood Pressure: A Meta-Analysis of Randomized Double-Blind Placebo-Controlled Trials",
    authors: "Zhang X, Li Y, Del Gobbo LC, et al.",
    journal: "Hypertension",
    year: "2016",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/27402922/",
    summary: "A meta-analysis of 34 RCTs (2,028 participants) documenting magnesium supplementation reduced systolic BP by ~2 mmHg and diastolic BP by ~1.78 mmHg. Effect was larger in hypertensive populations and at doses of 300+ mg/day. The most-cited single source for magnesium's modest-but-real BP-lowering effect.",
  },
  {
    title: "Magnesium for Skeletal Muscle Cramps",
    authors: "Garrison SR, Korownyk CS, Kolber MR, et al.",
    journal: "Cochrane Database of Systematic Reviews",
    year: "2020",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/32956536/",
    summary: "A Cochrane systematic review of 11 RCTs testing magnesium supplementation for skeletal muscle cramps in adults. Found NO statistically significant or clinically meaningful effect on cramp frequency, intensity, or duration in adults with idiopathic muscle cramps. The foundational evidence-based debunking of the popular &quot;magnesium for cramps&quot; claim in general adult populations. Pregnancy leg cramps and exercise-deficiency contexts may differ.",
  },
  {
    title: "Evidence-Based Guideline Update: Pharmacologic Treatment for Episodic Migraine Prevention in Adults",
    authors: "Pringsheim T, Davenport WJ, Mackie G, et al.",
    journal: "Neurology / Headache",
    year: "2012",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/22529202/",
    summary: "The American Academy of Neurology and American Headache Society joint guideline on migraine prophylaxis. Magnesium received a Level B recommendation (probably effective) at 400–600 mg/day. The foundational guideline reference for magnesium in migraine prophylaxis — one of the better-evidenced complementary medicine indications for this population.",
  },
  {
    title: "Magnesium L-Threonate for the Treatment of Cognitive Impairment in Adults",
    authors: "Liu G, Weinger JG, Lu ZL, Xue F, Sadeghpour S",
    journal: "Neuropharmacology",
    year: "2016",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/26677804/",
    summary: "A small (n=44) 12-week trial of magnesium L-threonate in older adults with cognitive impairment. Documented modest improvements in cognitive function (memory, attention, processing speed). The most-cited human trial for magnesium L-threonate cognition claims; small sample, industry funding, and limited replication temper enthusiasm. The form's premium pricing isn't supported by strong human evidence vs other magnesium forms.",
  },
  {
    title: "The Effect of Magnesium Supplementation on Primary Insomnia in Elderly: A Double-Blind Placebo-Controlled Clinical Trial",
    authors: "Abbasi B, Kimiagar M, Sadeghniiat K, et al.",
    journal: "Journal of Research in Medical Sciences",
    year: "2012",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/23853635/",
    summary: "The most-cited human trial for magnesium and sleep — a small (n=46) trial in elderly insomniacs documenting modest sleep quality improvements at 500 mg/day for 8 weeks. Small sample size and limited generalizability temper the evidence base. The popular reputation of magnesium for sleep significantly exceeds the underlying RCT base.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does magnesium work?",
    intro:
      "Magnesium is an essential mineral and the fourth most abundant cation in the body. It serves as a cofactor for over 300 enzymatic reactions including ATP production, DNA synthesis, protein synthesis, muscle contraction, nerve transmission, and blood glucose regulation. Approximately 50–60% of total body magnesium is stored in bone; the rest is intracellular (predominantly muscle) with a small extracellular fraction.",
    body: [
      "ATP production and energy currency. ATP must be bound to magnesium to function as cellular energy currency — Mg-ATP is the active form. This makes magnesium foundational for every energy-requiring process in the body. Deficiency impairs ATP function broadly.",
      "Cofactor for 300+ enzymatic reactions. Magnesium is required for enzymes in glycolysis, the citric acid cycle, fatty acid oxidation, amino acid synthesis, nucleic acid synthesis, and protein synthesis. Foundational metabolic role.",
      "GABA receptor potentiation. Magnesium activates GABA-A receptors (the inhibitory neurotransmitter receptor) and antagonizes NMDA receptors (excitatory) — producing calming, anti-anxiety, and sleep-promoting effects. Mechanism for the sleep/anxiety applications.",
      "Calcium channel regulation. Magnesium acts as a natural calcium channel blocker — regulating calcium entry into cardiac, vascular smooth muscle, and other cells. Mechanism for the modest blood pressure reduction and antiarrhythmic effects.",
      "Insulin signaling cofactor. Magnesium is required for insulin receptor tyrosine kinase activity — proper insulin signal transduction depends on adequate intracellular magnesium. Deficiency contributes to insulin resistance.",
      "Osmotic gut effect (form-dependent). Magnesium ions in the intestine draw water into the lumen via osmotic action — particularly strong with poorly-absorbed forms (oxide) and well-absorbed-but-osmotic forms (citrate). Mechanism for the constipation indication and the dose-limiting diarrhea side effect.",
      "NMDA receptor modulation in CNS. Beyond GABA potentiation, magnesium blocks NMDA glutamate receptors at physiological levels — preventing excessive excitatory signaling. Relevant for migraine prevention, anxiety, and possibly cognitive applications.",
      "Bone mineralization (storage role). 50–60% of body magnesium is in bone alongside calcium. Magnesium contributes to bone matrix formation; deficiency affects bone density.",
      "Magnesium L-threonate brain penetration (specific form). Threonate form was developed specifically to cross the blood-brain barrier more effectively than other forms. Liu 2010 documented brain magnesium increases and learning/memory effects in rodents; Liu 2016 small human trial showed cognitive improvement; broader human evidence is thin.",
      "Cardiovascular and arrhythmia effects. Magnesium supports normal cardiac electrophysiology. IV magnesium sulfate is used in specific clinical contexts (torsades de pointes, refractory atrial fibrillation, eclampsia) — these are emergency medicine applications, not general supplementation.",
    ],
  },
  {
    id: "research",
    title: "What does magnesium actually do?",
    intro:
      "Magnesium has a multi-tier evidence base requiring honest sub-tier breakdown — the same parent-pattern approach used in vitamin C and vitamin D3 profiles. Several applications have Strong evidence, several Moderate, and several have popular reputation that exceeds the actual RCT support.",
    body: [
      "Deficiency correction (Strong, foundational). Essential mineral; 45–68% of US adults below RDA per surveys. Supplementation reliably corrects deficiency and prevents downstream consequences.",
      "Constipation — osmotic forms (Strong). Magnesium citrate and oxide reliably produce laxative effect via osmotic mechanism. Well-established for both acute and chronic constipation management.",
      "Migraine prophylaxis (Strong). Pringsheim 2012 AAN/AHS Level B recommendation at 400–600 mg/day. One of the better-evidenced complementary interventions for episodic migraine prevention.",
      "Eclampsia and pre-eclampsia (Strong, clinical context). IV magnesium sulfate is standard of care for eclampsia prevention and seizure prophylaxis in pre-eclampsia. Obstetric specialty context.",
      "Blood pressure reduction (Moderate). Zhang 2016 meta of 34 RCTs: ~2 mmHg systolic, ~1.78 mmHg diastolic reduction. Larger in hypertensive populations.",
      "Glycemic control and insulin sensitivity (Moderate). Documented improvements in fasting glucose, HbA1c, and insulin sensitivity in users with type 2 diabetes or insulin resistance, particularly in those with baseline deficiency.",
      "Pregnancy leg cramps (Moderate). Modest reduction in leg cramp frequency in pregnant women. Specific pregnancy context where the evidence supports use.",
      "Sleep quality (Emerging/Modest — popular reputation exceeds RCT base). Abbasi 2012 small trial in elderly insomniacs is the most-cited. Limited subsequent RCT replication. Effect more pronounced in deficient users. Honest framing: thinner evidence than the marketing suggests.",
      "General/idiopathic muscle cramps in adults (Negative — Cochrane null). Garrison 2020 Cochrane systematic review of 11 RCTs found NO statistically significant or clinically meaningful effect on cramp frequency, intensity, or duration in adults with idiopathic muscle cramps. This is the definitive evidence-based debunking of the popular cramps claim.",
      "Magnesium L-threonate for cognition (Emerging/thin human data). Liu 2010 rodent data; Liu 2016 small (n=44) human trial with modest cognitive improvement in older adults with cognitive impairment. Premium-priced form; broader human evidence is limited.",
      "Anxiety and depression (Modest). Some trials suggest magnesium supplementation modestly improves anxiety and depression scores, particularly in deficient users. Evidence base thinner than for established treatments.",
      "Cardiac arrhythmia adjunct (Strong in specific clinical contexts). IV magnesium for torsades de pointes and select atrial fibrillation contexts. Specialty clinical context.",
      "Asthma exacerbation adjunct (Moderate). IV magnesium sulfate has documented bronchodilator effect in severe asthma exacerbations. Emergency medicine context.",
      "PMS symptom reduction (Modest). Some evidence for magnesium reducing PMS symptoms (mood, bloating, cramping).",
      "Bone density (Modest). Magnesium contributes to bone matrix; deficiency impairs bone density. Supplementation in adequate-intake users has smaller effect than calcium/vitamin D combination.",
      "Exercise recovery in deficient athletes (Modest). Benefit specific to users with documented deficiency; not a generic ergogenic.",
    ],
  },
  {
    id: "dosing",
    title: "How is magnesium dosed?",
    intro:
      "Magnesium dosing depends on form (different bioavailability and effects), indication (general supplementation vs specific clinical applications), and tolerance (laxative dose-limit). The forms-compared decision is the central practical choice in this category.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">General supplementation.</span> 200–400 mg elemental magnesium daily. RDA: 320 mg women / 420 mg men (total intake including diet). Supplemental UL: 350 mg/day (laxative threshold).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep / anxiety.</span> 200–400 mg glycinate form, taken pre-bed. Evidence is modest per Abbasi 2012; manage expectations.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Migraine prophylaxis (Pringsheim 2012 AAN Level B).</span> 400–600 mg/day for 8–12 weeks to assess effect. Above general UL — coordinate with neurology.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Constipation.</span> Magnesium citrate 200–400 mg or magnesium oxide 400 mg, titrate to stool consistency. Acute constipation: higher doses of citrate (500–1000 mg) under guidance.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Blood pressure.</span> 300+ mg/day; effect builds over 4–12 weeks (Zhang 2016 meta).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Glycemic control.</span> 300–400 mg/day; effect emerges over 8–12 weeks, particularly in deficient diabetic users.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pregnancy leg cramps.</span> 300 mg/day under obstetric supervision.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Magnesium L-threonate cognition (if pursuing).</span> 2 g/day threonate compound (approximately 144 mg elemental magnesium) per Liu 2016 protocol. Thin human evidence; expensive.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">IV magnesium sulfate (clinical contexts).</span> Eclampsia/pre-eclampsia prophylaxis, torsades de pointes, severe asthma — emergency medicine/obstetric protocols, not general supplementation.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: gut-motility effects acute (within hours for citrate/oxide). BP and glycemic effects over 4–12 weeks. Migraine prophylaxis effects 8–12 weeks. Sleep effects (if any) within 2–4 weeks.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">UL clarification.</span> The 350 mg/day supplemental tolerable upper intake level applies specifically to magnesium from supplements where the laxative threshold becomes problematic. Dietary magnesium has no documented toxicity ceiling in users with normal kidney function. Migraine and clinical-context protocols at 400+ mg/day intentionally exceed the UL for specific therapeutic purpose.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Elemental magnesium content varies by form.</span> Magnesium oxide is ~60% elemental magnesium by mass; magnesium citrate ~16%; magnesium glycinate ~14%; magnesium L-threonate ~7%. Read labels for elemental magnesium content, not just compound weight. A 200 mg dose of magnesium glycinate compound contains less elemental magnesium than 200 mg of magnesium oxide compound.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take magnesium",
    intro:
      "Magnesium is taken orally as capsules, tablets, powder, or liquid. The practical considerations are form selection (matched to goal), elemental magnesium content (varies dramatically across forms), GI tolerance (split dosing for higher amounts), and timing (pre-bed for sleep applications).",
    node: (
      <div className="space-y-4">
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1–2× daily. Split 300+ mg doses into 2 servings to reduce GI/laxative effect and maintain steadier plasma levels.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">For sleep/anxiety: pre-bed (glycinate). For constipation: morning (citrate or oxide). For general use: with largest meal of the day.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With food reduces GI distress. Avoid taking with calcium supplements or high-calcium foods (compete for absorption). Avoid with high-phytate foods.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Glycinate for general use, sleep, anxiety (gentle GI). Citrate for general use + mild laxative effect. Oxide for cheap laxative only. Threonate for cognition (thin evidence + premium price). Malate for fatigue contexts. Sulfate (Epsom salt) for transdermal/bath use.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Elemental magnesium content disclosed (not just compound weight). Form clearly identified. cGMP-certified manufacturing. Third-party tested. Reputable brands: Now Foods, Thorne, Pure Encapsulations, Doctor&apos;s Best, Klaire Labs, Jigsaw Health, BulkSupplements.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling required — chronic daily use is the trial-validated norm. Store in cool dry conditions; some forms (citrate) are hygroscopic.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "forms",
    title: "Which magnesium form should you choose?",
    intro:
      "Form selection is the central practical decision in magnesium supplementation. Different forms have substantially different bioavailability, gut effects, and clinical applications. The table below summarizes the practical use cases.",
    node: (
      <div className="space-y-3">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Form</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Bioavailability</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Best use case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Glycinate (bisglycinate)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">High — chelated, gentle on GI</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">General supplementation, sleep/anxiety, users with sensitive GI. The practical default.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Citrate</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">High — well-absorbed</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">General supplementation with mild laxative effect; constipation management; cost-efficient.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Oxide</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Poor (~4% elemental Mg absorbed)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Cheap, strong laxative effect. Best for constipation specifically; poor choice for general magnesium status correction.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">L-Threonate</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Moderate, designed for blood-brain barrier penetration</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Cognitive applications. Liu 2016 small human trial; premium-priced; thin evidence base. Only relevant if specifically targeting cognition.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Malate</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">High</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Fatigue and fibromyalgia contexts; malic acid adds Krebs-cycle substrate. Modest evidence base for these applications.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Sulfate (Epsom salt)</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Poor orally; IV form clinical</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Epsom salt baths (transdermal claims have weak evidence); IV magnesium sulfate for clinical applications (eclampsia, torsades). Not a general oral supplement.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Lactate, taurate, orotate</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Moderate-high</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Less common forms. Taurate marketed for cardiovascular; orotate marketed for cellular uptake. Smaller evidence bases than glycinate/citrate.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Practical hierarchy.</span> Glycinate for general use and sleep. Citrate for cost-efficient general use with mild laxative tolerance. Oxide for cheap constipation management only. Threonate only if specifically targeting cognition and accepting thin evidence + premium price. Avoid &quot;magnesium blend&quot; products with multiple forms in proprietary amounts.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does magnesium stack with?",
    intro:
      "Magnesium is foundational mineral support that pairs naturally with vitamin D3 (activation cofactor), zinc (often deficient together), calcium (with caveats), and the broader sleep, cardiovascular, and metabolic supplement clusters. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Magnesium is foundational mineral support across peptide protocols rather than a mechanism-specific peptide partner. Sleep-related contexts (GH-secretagogue peptides like{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
            and{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">ipamorelin</Link>{" "}
            dosed pre-bed for GH pulse alignment) benefit from adequate magnesium status supporting sleep quality. Healing peptides like{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
            for tissue repair work alongside magnesium&apos;s metabolic foundational role.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/vitamin-d3" className="text-[#0891b2] hover:underline">Vitamin D3</Link>{" "}
              — magnesium is the cofactor for vitamin D activation enzymes. Adequate magnesium status is required for normal vitamin D response. Common foundational pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/zinc" className="text-[#0891b2] hover:underline">Zinc</Link>{" "}
              — both often deficient together. Foundational mineral pairing. Take separately or with food to manage competition for absorption sites.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Calcium — vitamin D-mediated calcium absorption requires magnesium cofactor. Caution: take separately by 2+ hours (compete for absorption); high-calcium intake can suppress magnesium absorption.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/zma" className="text-[#0891b2] hover:underline">ZMA (Zinc + Magnesium + B6)</Link>{" "}
              — bedtime supplement formulation; combines magnesium with zinc and B6.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/melatonin" className="text-[#0891b2] hover:underline">Melatonin</Link>{" "}
              — sleep stacking; different mechanism (circadian) than magnesium (GABA). Compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/glycine" className="text-[#0891b2] hover:underline">Glycine</Link>{" "}
              — sleep and recovery; complementary to magnesium&apos;s GABA effects.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-theanine" className="text-[#0891b2] hover:underline">L-theanine</Link>{" "}
              — calming/anxiety support; complementary mechanism.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/electrolyte-powders" className="text-[#0891b2] hover:underline">Electrolyte powders</Link>{" "}
              — most contain modest magnesium amounts. Compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/creatine" className="text-[#0891b2] hover:underline">Creatine</Link>{" "}
              — different mechanism, foundational athletic stacking.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dietary magnesium sources.</span> Leafy greens, nuts, seeds (pumpkin seeds especially high), whole grains, legumes, dark chocolate. 320–420 mg/day RDA can be met from diet; many users fall short.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reduce magnesium losses.</span> Alcohol, caffeine (modest), diuretics, and excessive sweating increase magnesium losses. Match supplementation to losses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stress management.</span> Chronic stress depletes magnesium. Supplementation alongside stress reduction is more effective than supplementation alone.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep hygiene.</span> Magnesium for sleep works best as adjunct to sleep hygiene (consistent bedtime, dark room, limited screens). Not a substitute.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hydration.</span> Adequate water intake supports magnesium function and reduces constipation independent of supplementation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cardiovascular and DASH-style diet.</span> Magnesium effects on BP work best alongside potassium, dietary nitrate, and the broader Mediterranean/DASH eating pattern.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Athletes and high sweat losses.</span> Increased requirements during heavy training blocks and heat exposure.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Magnesium is exceptionally safe at standard supplemental doses in users with normal kidney function. The main practical considerations are the dose-dependent laxative effect, kidney disease contexts, and specific drug interactions.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diarrhea and loose stools.</span> Dose-dependent. Form-dependent (oxide most, glycinate least). The UL of 350 mg/day from supplements is set by laxative threshold. Reduce dose or switch to glycinate to resolve.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort at high doses or with empty stomach.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard supplemental doses in healthy adults.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Kidney disease.</span> Impaired magnesium clearance. Hypermagnesemia risk. Coordinate with nephrology before supplementing in CKD.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypermagnesemia.</span> Rare with normal kidneys but serious — muscle weakness, hypotension, respiratory depression, cardiac arrest at extreme levels. Almost exclusively occurs in kidney failure or massive overdose.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Heart block / bradycardia.</span> High-dose magnesium can theoretically worsen conduction abnormalities. Generally not a concern at supplemental doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pregnancy and breastfeeding.</span> Generally safe at standard supplemental doses; coordinate with obstetrician for higher doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Myasthenia gravis.</span> May worsen neuromuscular weakness. Avoid supplementation; coordinate with neurology.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Antibiotics (quinolones, tetracyclines).</span> Magnesium chelates with these antibiotics, reducing absorption. Separate by 2+ hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Bisphosphonates (osteoporosis medications).</span> Magnesium reduces absorption. Separate by 2+ hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diuretics.</span> Loop and thiazide diuretics increase magnesium losses; users on chronic diuretics often need supplementation. Potassium-sparing diuretics may increase magnesium retention.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Proton pump inhibitors (PPIs).</span> Long-term PPI use is associated with hypomagnesemia. Users on chronic PPIs often need supplementation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Calcium supplements.</span> Compete for absorption. Separate timing by 2+ hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Antihypertensive medications — modest additive BP-lowering effect. Monitor.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Diabetes medications — modest additive glucose-lowering effect. Monitor.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about magnesium",
    intro:
      "Magnesium biology is well-characterized but several open questions remain — particularly around individual status assessment, the form-specificity of effects beyond bioavailability, and the disconnect between popular reputation and RCT evidence in some applications.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Magnesium status assessment is imperfect.</span> Serum magnesium is poorly correlated with intracellular and total body magnesium — most magnesium is intracellular, and serum is tightly regulated. Red blood cell magnesium and ionized magnesium are slightly better but not widely available. Practical individual-status determination is harder than it sounds.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Form-specific effects beyond bioavailability.</span> Different forms have similar elemental magnesium delivery (corrected for bioavailability), but anecdotal experience suggests they may have qualitatively different effects (glycinate for calm, citrate for laxation, threonate for cognition). Whether these qualitative differences hold up in rigorous head-to-head trials isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Sleep evidence base depth.</span> The popular reputation for magnesium as a sleep aid significantly exceeds the underlying RCT base. Whether the practical sleep benefit users report reflects modest real effect, placebo, deficiency correction in users who didn&apos;t know they were deficient, or some combination isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Threonate cognition evidence depth.</span> Liu 2016 small trial is the main human reference. Whether magnesium L-threonate produces measurably better cognitive outcomes than other forms at equivalent elemental magnesium content isn&apos;t well-characterized in head-to-head trials. The premium pricing isn&apos;t robustly supported.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Transdermal magnesium (Epsom salt, magnesium oil).</span> Marketing claims for transdermal magnesium absorption are not well-supported by absorption studies. Epsom salt baths feel pleasant but the magnesium absorbed transdermally is much less than oral intake at typical bath concentrations.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cardiovascular outcome trials at scale.</span> Magnesium-rich diets are associated with reduced cardiovascular events; whether magnesium supplementation produces similar event reduction in hard outcome trials at REDUCE-IT scale isn&apos;t established.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal individual dose.</span> RDA-based and general supplementation doses are population averages. Optimal individual dose depends on baseline status, kidney function, dietary intake, losses (sweat, alcohol, diuretics), and indication — and isn&apos;t systematically guided by current practice.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy magnesium",
    intro:
      "Magnesium is widely available with substantial variation in form. The key quality variable is matching the form to your goal (glycinate, citrate, oxide, threonate, malate all serve different use cases). Elemental magnesium content disclosure is essential — compound weight varies widely across forms.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Form clearly disclosed</span> — magnesium glycinate (bisglycinate), citrate, oxide, L-threonate, malate, etc. Generic &quot;magnesium&quot; without form is a yellow flag.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Elemental magnesium content disclosed</span> — read past compound weight. 200 mg of magnesium glycinate compound contains less elemental magnesium than 200 mg of magnesium oxide compound.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Glycinate for general use</span> — practical default. Capsules at 100–200 mg elemental magnesium per serving.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Citrate for general + mild laxative</span> — cost-efficient general option.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oxide for constipation only</span> — cheap and effective for that indication; poor for general status correction.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">L-Threonate (Magtein brand)</span> only if specifically targeting cognition — accept thin evidence + premium price.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">USP / NSF / ConsumerLab certified</span> — third-party verification of label claims.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — Now Foods, Thorne, Pure Encapsulations, Doctor&apos;s Best (high-absorption glycinate is well-regarded), Klaire Labs, Jigsaw Health, BulkSupplements, Magtein-licensed brands for threonate.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid &quot;magnesium blend&quot; products</span> with multiple forms in proprietary undisclosed amounts.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Topical / transdermal magnesium products</span> (oil, lotion, Epsom salt) — limited absorption evidence. Bath use is pleasant but not equivalent to oral supplementation.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=magnesium+glycinate+bisglycinate&tag=profpeptide-20" label="Magnesium" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Magnesium FAQ",
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
          Schwalfenberg GK, Genuis SJ. The importance of magnesium in clinical healthcare. Scientifica. 2017;2017:4179326.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29093983/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29093983/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Zhang X, Li Y, Del Gobbo LC, et al. Effects of magnesium supplementation on blood pressure: a meta-analysis of randomized double-blind placebo-controlled trials. Hypertension. 2016;68(2):324-333.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27402922/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27402922/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Garrison SR, Korownyk CS, Kolber MR, et al. Magnesium for skeletal muscle cramps. Cochrane Database Syst Rev. 2020;9(9):CD009402.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/32956536/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/32956536/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Pringsheim T, Davenport WJ, Mackie G, et al. Canadian Headache Society guideline for migraine prophylaxis. Can J Neurol Sci. 2012;39(2 Suppl 2):S1-59.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22529202/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22529202/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Liu G, Weinger JG, Lu ZL, Xue F, Sadeghpour S. Efficacy and safety of MMFS-01, a synapse density enhancer, for treating cognitive impairment in older adults: a randomized, double-blind, placebo-controlled trial. J Alzheimers Dis. 2016;49(4):971-990.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/26677804/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/26677804/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Abbasi B, Kimiagar M, Sadeghniiat K, et al. The effect of magnesium supplementation on primary insomnia in elderly: a double-blind placebo-controlled clinical trial. J Res Med Sci. 2012;17(12):1161-1169.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23853635/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23853635/
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

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Glycinate vs citrate vs oxide vs threonate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depends on goal. Glycinate is gentle on GI, well-absorbed — default for general use and sleep. Citrate is well-absorbed with mild osmotic laxative effect — useful when constipation is also a goal. Oxide has poor bioavailability (~4%) but strong osmotic effect — cheap for constipation specifically. L-threonate is marketed for cognition based on Liu 2010 rodent data; human evidence is thin (Liu 2016 small trial), premium-priced. Malate combines with malic acid for fatigue contexts."
      }
    },
    {
      "@type": "Question",
      "name": "Will magnesium help with muscle cramps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For general adult muscle cramps: no, despite the popular reputation. Garrison 2020 Cochrane systematic review of 11 RCTs found magnesium did NOT significantly reduce cramp frequency, intensity, or duration in adults with idiopathic muscle cramps. Where it does help: pregnancy leg cramps (moderate evidence) and exercise-associated cramps in users with documented deficiency."
      }
    },
    {
      "@type": "Question",
      "name": "Will magnesium actually help me sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The evidence is thinner than the popular reputation suggests. Abbasi 2012 small trial in 46 elderly insomniacs documented modest sleep quality improvement at 500 mg/day. Subsequent RCT replication is limited. Mechanism is plausible. Honest framing: Emerging/Modest evidence, not Strong despite the marketing. Effect more pronounced in deficient users."
      }
    },
    {
      "@type": "Question",
      "name": "Does magnesium prevent migraines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — one of magnesium's better-evidenced applications. AAN/AHS Level B recommendation (probably effective) at 400–600 mg/day for prophylaxis. Effect is preventive, not acute. The dose exceeds the general UL of 350 mg/day for the migraine-specific indication; coordinate with neurology."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Magnesium: Forms Compared (Glycinate vs Citrate vs Threonate), Migraine, Cramps Myth",
  "description": "Magnesium dosing (200–400 mg elemental) — sub-tier evidence (Strong: deficiency, constipation, migraine, eclampsia; Moderate: BP, glycemic control; Mixed: sleep, cramps per Cochrane null), and forms-compared central (glycinate, citrate, oxide, threonate, malate).",
  "url": "https://profpeptide.com/supplements/magnesium",
  "datePublished": "2026-05-22T00:00:00Z",
  "dateModified": "2026-05-28T00:00:00Z",
  "author": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "reviewedBy": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Prof. Peptide",
    "url": "https://profpeptide.com"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
    { "@type": "ListItem", "position": 2, "name": "Supplements", "item": "https://profpeptide.com/supplements" },
    { "@type": "ListItem", "position": 3, "name": "Magnesium" }
  ]
};

export default function MagnesiumPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Magnesium</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 28, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Mg, Mg²⁺; supplemental forms — magnesium glycinate / bisglycinate (general default), magnesium citrate (general + mild laxative), magnesium oxide (cheap laxative, poor general absorption), magnesium L-threonate (marketed for cognition, Magtein brand), magnesium malate, magnesium sulfate (Epsom salt + IV clinical), magnesium taurate, magnesium lactate, magnesium orotate
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Essential mineral / cofactor for 300+ enzymatic reactions / Mg-ATP active energy currency / GABA-A receptor potentiator / NMDA receptor antagonist / natural calcium channel modulator / insulin signaling cofactor / vitamin D activation cofactor
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Sub-tier breakdown. <span className="font-semibold">Strong</span>: deficiency correction; constipation (citrate/oxide via osmotic mechanism); migraine prophylaxis (AAN/AHS Level B at 400–600 mg/day per Pringsheim 2012); eclampsia / pre-eclampsia (IV magnesium sulfate, obstetric context). <span className="font-semibold">Moderate</span>: blood pressure reduction (~2 mmHg systolic per Zhang 2016 meta of 34 RCTs); glycemic control / insulin sensitivity (in deficient or diabetic users); pregnancy leg cramps. <span className="font-semibold">Emerging/Modest — popular reputation exceeds RCT base</span>: sleep quality (Abbasi 2012 small trial in 46 elderly; limited RCT replication). <span className="font-semibold">Negative</span>: idiopathic muscle cramps in adults (Garrison 2020 Cochrane systematic review of 11 RCTs found NO significant effect). <span className="font-semibold">Emerging / thin human data</span>: magnesium L-threonate for cognition (Liu 2016 small trial; premium-priced form).
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is magnesium?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Magnesium is an essential mineral and the fourth most abundant cation in the human body, serving as cofactor for over 300 enzymatic reactions including ATP production (Mg-ATP is the active energy currency), DNA synthesis, protein synthesis, muscle contraction, nerve transmission, and blood glucose regulation. Approximately 50–60% of total body magnesium is stored in bone; the rest is intracellular (predominantly muscle) with a small tightly-regulated extracellular fraction. Magnesium deficiency is remarkably common — surveys suggest 45–68% of US adults fall short of the RDA from dietary intake alone — and chronic insufficient intake is associated with increased risk of hypertension, type 2 diabetes, cardiovascular disease, migraine, and impaired immune function. The evidence base for magnesium supplementation requires honest sub-tier breakdown — the same parent-pattern approach used in the{" "}
            <Link href="/supplements/vitamin-c" className="text-[#0891b2] hover:underline">vitamin C</Link>{" "}
            and{" "}
            <Link href="/supplements/vitamin-d3" className="text-[#0891b2] hover:underline">vitamin D3</Link>{" "}
            profiles. <span className="font-semibold">Strong evidence</span> covers deficiency correction (foundational essential mineral), constipation management via osmotic mechanism (citrate and oxide forms), migraine prophylaxis (AAN/AHS Level B recommendation at 400–600 mg/day per Pringsheim 2012), and IV magnesium sulfate for eclampsia/pre-eclampsia (obstetric specialty context). <span className="font-semibold">Moderate evidence</span> covers blood pressure reduction (Zhang 2016 meta of 34 RCTs: ~2 mmHg systolic reduction), glycemic control and insulin sensitivity (particularly in users with diabetes or deficiency), and pregnancy leg cramps. <span className="font-semibold">Emerging/Modest evidence with popular reputation exceeding RCT base</span> covers sleep quality (Abbasi 2012 small trial in 46 elderly insomniacs is the most-cited; subsequent RCT replication is limited; effect may be most pronounced in baseline-deficient users), magnesium L-threonate for cognition (Liu 2016 small trial; premium-priced form with thin human evidence). <span className="font-semibold">Negative evidence (popular claim debunked)</span> covers idiopathic muscle cramps in adults — Garrison 2020 Cochrane systematic review of 11 RCTs found magnesium did NOT significantly reduce cramp frequency, intensity, or duration in adults with idiopathic muscle cramps. This is the definitive evidence-based refutation of the popular &quot;magnesium for cramps&quot; claim in general adult populations (pregnancy leg cramps and exercise-deficiency contexts differ). The central practical decision in this category is <span className="font-semibold">form selection</span> — different magnesium forms have substantially different bioavailability, gut effects, and clinical applications. Glycinate (bisglycinate) is gentle on GI and the default for general supplementation, sleep, and anxiety; citrate is well-absorbed with mild osmotic laxative effect; oxide has poor bioavailability (~4% elemental Mg absorbed) but strong osmotic effect for constipation specifically; L-threonate is marketed for cognition based on Liu 2010 rodent brain-magnesium data with thin human evidence and premium pricing; malate combines with malic acid for fatigue contexts. Standard supplemental dose: 200–400 mg elemental magnesium daily. Supplemental tolerable upper intake level: 350 mg/day (set by laxative threshold, not toxicity — does NOT cap dietary intake). Migraine prophylaxis protocol at 400–600 mg/day intentionally exceeds the UL for that specific therapeutic indication, under neurology supervision.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits (per evidence tier):
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Deficiency correction (foundational essential mineral; 45–68% of US adults below RDA)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Constipation relief via osmotic mechanism (citrate, oxide)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Migraine prophylaxis (Pringsheim 2012 AAN/AHS Level B at 400–600 mg/day)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Eclampsia / pre-eclampsia prevention (IV magnesium sulfate, obstetric)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest blood pressure reduction (Zhang 2016 meta — ~2 mmHg systolic)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Insulin sensitivity and glycemic control support in diabetic/deficient users</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy leg cramp reduction</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest sleep quality improvement in deficient users (Abbasi 2012)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Vitamin D activation cofactor (common cause of vitamin D non-response)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 200–400 mg elemental magnesium daily for general use. RDA 320 mg women / 420 mg men (total intake including diet). Supplemental UL 350 mg/day from supplements (laxative threshold). Migraine prophylaxis: 400–600 mg/day (above UL, neurology context). Form: glycinate (default), citrate (with mild laxative), oxide (constipation only), threonate (cognition, thin evidence + premium price).
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Watch for:</span> Diarrhea/loose stools at high doses (dose- and form-dependent — UL set by this threshold); kidney disease (impaired clearance — coordinate with nephrology); antibiotic interactions (quinolones, tetracyclines — separate by 2+ hours); bisphosphonates (separate by 2+ hours); PPI long-term use causes hypomagnesemia; popular cramp reputation NOT supported by Cochrane evidence; popular sleep reputation exceeds RCT base; magnesium L-threonate cognition evidence is thin and form is premium-priced.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=magnesium+glycinate+bisglycinate&tag=profpeptide-20" label="Magnesium" />
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
        {["Glycinate", "Citrate", "Migraine", "Cramps Cochrane Null", "Threonate Thin", "Sleep Modest"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/vitamin-d3" className="text-sm font-medium text-[#0891b2] hover:underline">Vitamin D3</Link>
          <Link href="/supplements/zinc" className="text-sm font-medium text-[#0891b2] hover:underline">Zinc</Link>
          <Link href="/supplements/zma" className="text-sm font-medium text-[#0891b2] hover:underline">ZMA</Link>
          <Link href="/supplements/melatonin" className="text-sm font-medium text-[#0891b2] hover:underline">Melatonin</Link>
          <Link href="/supplements/glycine" className="text-sm font-medium text-[#0891b2] hover:underline">Glycine</Link>
          <Link href="/supplements/electrolyte-powders" className="text-sm font-medium text-[#0891b2] hover:underline">Electrolyte Powders</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Magnesium" pagePath="/supplements/magnesium" />
    </div>
    </>
  );
}
