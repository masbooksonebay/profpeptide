import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/l-citrulline-malate",
  title: "L-Citrulline Malate: 8 g Pre-Workout, Pérez-Guisado 52.92% Reps",
  description:
    "L-citrulline malate at 6–8 g pre-workout — the Pérez-Guisado 2010 trial (52.92% more reps, 40% less soreness), the malate Krebs-cycle contribution, and how it differs from pure L-citrulline.",
});

const faqs = [
  {
    q: "L-citrulline malate vs pure L-citrulline — which should I take?",
    a: (
      <>
        Depends on goal. For pre-workout pump, resistance-training volume, and reduced post-exercise soreness:{" "}
        <span className="font-semibold">L-citrulline malate at 6–8 g</span>{" "}
        is the trial-validated pre-workout protocol (Pérez-Guisado 2010, Rhim 2020 meta-analysis). The malate component contributes Krebs-cycle support and acid-base buffering during high-intensity exercise — additive to citrulline&apos;s NO-mediated vasodilation. For chronic vascular health, erectile dysfunction, or blood pressure support: pure{" "}
        <Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">L-citrulline</Link>{" "}
        at 1.5–6 g/day is sufficient and more cost-efficient — the malate contribution is exercise-specific. Both reach the NO pathway through the same kidney conversion step. For ED specifically, Cormio 2011 used pure L-citrulline at 1.5 g/day; using citrulline malate adds malic acid you don&apos;t need for that pathway.
      </>
    ),
  },
  {
    q: "How much L-citrulline malate should I take pre-workout?",
    a: "6–8 g of the 2:1 form, taken 30–60 minutes before training. Pérez-Guisado 2010 used 8 g — this is the dose with the strongest evidence base. 6 g is the common commercial dose; 8 g is the trial-validated dose. The 2:1 form means 2 parts L-citrulline to 1 part malic acid by mass, so 8 g of citrulline malate provides approximately 5.3 g of citrulline content and 2.7 g of malic acid. Take with water or pre-workout drink on a relatively empty stomach for fastest absorption (no first-pass metabolism penalty like L-arginine, but a fuller stomach slows absorption modestly).",
  },
  {
    q: "What does the malate component actually do?",
    a: "Malic acid (malate) is an intermediate in the Krebs cycle (citric acid cycle) — the central pathway by which mitochondria produce ATP from carbohydrate, fat, and amino acid substrates. Supplemental malate may support aerobic ATP production during exercise (replenishing Krebs-cycle intermediates that get depleted under high turnover) and contributes to acid-base buffering by neutralizing exercise-induced lactic acid accumulation. Whether these mechanisms produce meaningful additive ergogenic effects beyond the citrulline NO pathway is debated — some research attributes all of citrulline malate's pre-workout effects to the citrulline component, others identify independent malate contributions. The practical outcome: the trial evidence is for the malate-bonded form, not pure citrulline, in pre-workout context.",
  },
  {
    q: "Will citrulline malate give me a real pump or is it just marketing?",
    a: "Real pump, but the mechanism is more about training volume than the visual effect. Citrulline malate increases blood flow to working muscles via NO-mediated vasodilation — this contributes to the pump sensation. More importantly, citrulline malate increases the number of repetitions you can complete before failure across a resistance training session (Pérez-Guisado 2010: 52.92% more reps in the citrulline malate group vs placebo). The increased volume itself is what drives most of the training adaptation, not the pump appearance. The reduced post-exercise soreness (40% reduction at 24 and 48 hours in Pérez-Guisado) is a separate measurable effect on recovery.",
  },
  {
    q: "When during my workout day should I take it?",
    a: "30–60 minutes pre-training is the standard protocol. Citrulline plasma levels peak approximately 60 minutes after oral dosing. Pérez-Guisado 2010 used 60 minutes pre-workout. Some users prefer 45 minutes for faster onset. Taking it post-workout is less useful — the pump and rep-volume mechanism is intra-workout. Consistency matters less for citrulline malate than for chronic NO supplements — the acute pre-exercise effect is what's well-evidenced, not chronic adaptation.",
  },
  {
    q: "Can I stack citrulline malate with caffeine and beta-alanine?",
    a: (
      <>
        Yes — this is the canonical &quot;evidenced pre-workout stack&quot; with three different mechanisms that combine well. Citrulline malate (6–8 g) handles blood flow and rep volume via NO. Caffeine (200–400 mg) handles central nervous system arousal and perceived effort. Beta-alanine (3–5 g daily, chronic dosing — not acute) handles muscle carnosine buffering for high-intensity work. None of these mechanisms overlap; the combination is mechanistically rational and well-studied.{" "}
        <Link href="/supplements/creatine" className="text-[#0891b2] hover:underline">Creatine</Link>{" "}
        (5 g daily, chronic) is the fourth pillar — adds phosphocreatine substrate for high-intensity work. Citrulline malate + caffeine + beta-alanine + creatine is the most-evidenced four-component pre-workout stack.
      </>
    ),
  },
  {
    q: "Are there side effects from citrulline malate at 8 g?",
    a: "Generally well-tolerated. The two most common dose-related issues: (1) Mild GI discomfort at 8+ g single doses — taking it with a small amount of carbohydrate or splitting across 2 servings 30 min apart can help. (2) Modest blood pressure reduction — generally favorable but relevant for users on antihypertensives. No documented serious adverse events at trial doses. No herpes-outbreak risk like L-arginine. Safe for daily pre-workout use during training blocks. Don&apos;t combine with nitrate medications (additive cGMP).",
  },
  {
    q: "Does citrulline malate work for endurance athletes too?",
    a: "Yes, with somewhat different effect profile. Resistance-training trials show the strongest effects (Pérez-Guisado 2010 — 8 g pre-resistance training). Endurance research shows modest improvements in cycling time-trial performance and reduced perceived effort at 3–6 g/day. The mechanism overlap is real (NO-mediated vascular function + Krebs-cycle support), but the effect size in endurance is smaller than in resistance training. Endurance athletes who prefer chronic daily dosing rather than pre-workout acute dosing often switch to pure L-citrulline at 3–6 g/day — the malate component is most useful when paired with the high-intensity intra-set demands of resistance training.",
  },
];

const studies = [
  {
    title: "Citrulline Malate Enhances Athletic Anaerobic Performance and Relieves Muscle Soreness",
    authors: "Pérez-Guisado J, Jakeman PM",
    journal: "Journal of Strength and Conditioning Research",
    year: "2010",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/20386132/",
    summary: "A double-blind RCT of 8 g L-citrulline malate (2:1 form) vs placebo before an upper-body resistance training session (8 sets of bench press to failure). The citrulline malate group performed 52.92% more repetitions across the workout. Muscle soreness at 24 hours was 40% lower in the citrulline malate group; at 48 hours, also 40% lower. The foundational pre-workout citrulline malate trial. Pérez-Guisado 2010 is the most-cited single-source reference for the 8 g pre-workout dose and the rep-volume + soreness-reduction effect pair.",
  },
  {
    title: "Effect of Citrulline on Post-Exercise Rating of Perceived Exertion, Muscle Soreness, and Blood Lactate Levels: A Systematic Review and Meta-Analysis",
    authors: "Rhim HC, Kim SJ, Park J, Jang KM",
    journal: "Journal of Sport and Health Science",
    year: "2020",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/33308806/",
    summary: "A meta-analysis of 13 RCTs of citrulline (malate and pure forms) on exercise-related outcomes. Citrulline supplementation significantly reduced post-exercise rating of perceived exertion (RPE) and muscle soreness vs placebo. Effects were larger with citrulline malate than pure citrulline for resistance exercise outcomes. The most comprehensive single-source summary of citrulline's ergogenic evidence base and the strongest support for the pre-workout dosing protocol.",
  },
  {
    title: "Pharmacokinetic and Pharmacodynamic Properties of Oral L-citrulline and L-arginine: Impact on Nitric Oxide Metabolism",
    authors: "Schwedhelm E, Maas R, Freese R, et al.",
    journal: "British Journal of Clinical Pharmacology",
    year: "2008",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/17919250/",
    summary: "A pharmacokinetic crossover comparing oral L-arginine vs L-citrulline. L-citrulline produced higher and longer-lasting plasma arginine elevations than equimolar L-arginine due to escape from first-pass intestinal/hepatic arginase metabolism. Foundational pharmacokinetic reference explaining why oral citrulline (in any form) outperforms oral arginine for raising plasma arginine and supporting NO synthesis.",
  },
  {
    title: "Acute L-Citrulline Supplementation Increases Nitric Oxide Bioavailability but Not Inspiratory Muscle Oxygenation and Respiratory Performance",
    authors: "Bailey SJ, Blackwell JR, Williams E, et al.",
    journal: "Nitric Oxide",
    year: "2016",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/26877070/",
    summary: "An RCT of acute pure L-citrulline (6 g) on respiratory exercise performance. Plasma NO bioavailability increased significantly with citrulline vs placebo. However, inspiratory muscle oxygenation and respiratory performance metrics didn't improve. Useful reference for the honest framing that citrulline reliably raises NO but the translation to specific performance outcomes is context-dependent — bigger effects in resistance training (Pérez-Guisado) than in some endurance/respiratory contexts.",
  },
  {
    title: "Citrulline/Malate Promotes Aerobic Energy Production in Human Exercising Muscle",
    authors: "Bendahan D, Mattei JP, Ghattas B, Confort-Gouny S, Le Guern ME, Cozzone PJ",
    journal: "British Journal of Sports Medicine",
    year: "2002",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/12145119/",
    summary: "A 31-phosphorus magnetic resonance spectroscopy study examining citrulline malate effects on muscle energy metabolism during exercise. Citrulline malate supplementation produced a 34% increase in the rate of oxidative ATP production and a 20% increase in phosphocreatine recovery rate after exercise — direct evidence that the malate component contributes to aerobic energy production beyond the citrulline NO pathway. Foundational reference for the malate mechanism contribution.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does L-citrulline malate work?",
    intro:
      "L-citrulline malate works through two mechanistic arms: the citrulline component drives the same NO/vasodilation pathway covered on the parent L-citrulline page (kidney conversion to arginine → NOS → NO → cGMP → smooth muscle relaxation), and the malate component supports Krebs-cycle ATP production and acid-base buffering during high-intensity exercise. The pre-workout-specific evidence base is for the malate-bonded form, not pure citrulline.",
    body: [
      "Citrulline → arginine → nitric oxide. Oral citrulline escapes first-pass arginase metabolism (the central pharmacokinetic advantage covered in detail on the parent page), reaches the kidneys, and is converted to L-arginine. Plasma arginine elevation supports NOS activity throughout the vasculature — increased NO production drives vasodilation in working muscle, improving oxygen and nutrient delivery during exercise.",
      "Malate as Krebs-cycle intermediate. Malic acid is one of the citric acid cycle intermediates (the step between fumarate and oxaloacetate). Krebs-cycle intermediates can be depleted during high-rate ATP turnover; supplemental malate replenishes the pool, supporting aerobic ATP regeneration. Bendahan 2002 used 31-P MRS to document 34% increase in oxidative ATP production rate during exercise with citrulline malate supplementation.",
      "Acid-base buffering during high-intensity work. High-intensity resistance and anaerobic exercise produces lactic acid; pH drops; muscle contraction efficiency degrades. Malate can neutralize hydrogen ions and buffer intracellular pH, potentially supporting sustained high-intensity work. The contribution is modest but additive to citrulline's NO arm.",
      "Ammonia clearance. Citrulline is part of the urea cycle and supports ammonia clearance — ammonia accumulation contributes to exercise fatigue. Faster ammonia clearance is one of the proposed mechanisms behind citrulline's reduced perceived-exertion effect (Rhim 2020 meta-analysis confirmed reduced RPE).",
      "Increased training volume → adaptation amplification. The practical pre-workout outcome documented in Pérez-Guisado 2010 — 52.92% more repetitions across a resistance training session — is the dominant ergogenic mechanism. Most resistance training adaptation is driven by total training volume; supplementation that meaningfully increases volume amplifies all downstream adaptations (strength, hypertrophy).",
      "Reduced muscle soreness. Pérez-Guisado 2010 documented 40% lower DOMS at 24 and 48 hours. The mechanism likely involves improved blood flow + clearance of metabolic byproducts + reduced inflammatory cascade in damaged muscle. Practical effect: faster between-session recovery, enabling higher weekly training volumes.",
      "Limited overlap with caffeine, creatine, and beta-alanine. Citrulline malate operates on vascular and metabolic substrate mechanisms that don't overlap with caffeine (CNS adenosine), creatine (phosphocreatine ATP buffering), or beta-alanine (muscle carnosine pH buffering). Pre-workout stacks combining these address four distinct ergogenic mechanisms.",
    ],
  },
  {
    id: "research",
    title: "What does L-citrulline malate actually do?",
    intro:
      "L-citrulline malate has one of the strongest pre-workout supplement evidence bases for resistance training outcomes — rep volume, perceived exertion, and post-exercise soreness all measurably improve with 6–8 g pre-workout. The Pérez-Guisado 2010 trial is foundational; the Rhim 2020 meta-analysis confirmed the effect across the broader trial base.",
    body: [
      "Resistance training rep volume (Strong). Pérez-Guisado 2010: 8 g citrulline malate produced 52.92% more reps across an upper-body resistance training session vs placebo. Multiple subsequent trials replicate the rep-volume effect at 6–8 g pre-workout.",
      "Post-exercise muscle soreness reduction (Strong). Pérez-Guisado 2010: 40% reduction in DOMS at both 24 and 48 hours post-exercise. Rhim 2020 meta-analysis confirms reduced soreness across the trial base.",
      "Rating of perceived exertion reduction (Strong — meta-analysis). Rhim 2020 meta-analysis of 13 RCTs: citrulline supplementation significantly reduced post-exercise RPE. Mechanism is multifactorial — improved blood flow, ammonia clearance, malate Krebs-cycle support.",
      "Oxidative ATP production rate (Moderate). Bendahan 2002 31-P MRS study: 34% increase in oxidative ATP production rate during exercise with citrulline malate supplementation. Direct in vivo evidence of metabolic effect.",
      "Phosphocreatine recovery rate (Moderate). Bendahan 2002: 20% faster phosphocreatine recovery after exercise. Mechanistically relevant for repeated-effort training (multiple sets, HIIT, repeated sprints).",
      "Endurance / cycling performance (Modest). Smaller effect sizes than resistance training. Some cycling time-trial improvements documented at 3–6 g/day pre-exercise. Bailey 2016 noted plasma NO rises but specific respiratory performance metrics don't always improve — context matters.",
      "Plasma arginine elevation (Strong — same mechanism as parent L-citrulline). Schwedhelm 2008 documents the first-pass-escape advantage. The malate form delivers citrulline through the same kidney conversion pathway as pure L-citrulline.",
      "Blood pressure reduction (Modest — primarily a chronic-dose effect). Acute pre-workout dosing produces some transient BP reduction; chronic daily dosing produces the BP effects covered on the parent L-citrulline page (Mirenayat 2018 meta-analysis at 3–6 g/day).",
      "Sexual health and erectile function (Modest). Same NO mechanism as parent L-citrulline. For ED-specific use, pure L-citrulline at 1.5–3 g/day (Cormio 2011) is the standard protocol — citrulline malate adds malic acid that's not relevant for this indication.",
    ],
  },
  {
    id: "dosing",
    title: "How is L-citrulline malate dosed?",
    intro:
      "L-citrulline malate dosing is straightforward and acute: 6–8 g of the 2:1 form, taken 30–60 minutes pre-workout. Pérez-Guisado 2010 used 8 g — this is the trial-validated dose. 6 g is the common commercial pre-workout product dose. Doses below 6 g produce smaller and less consistent effects.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-workout (resistance training).</span> 6–8 g L-citrulline malate (2:1 form) taken 30–60 minutes before training. 8 g is the Pérez-Guisado trial-validated dose; 6 g is the common commercial dose. Below 6 g, effects diminish.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-workout (endurance / cycling).</span> 6 g 30–60 minutes pre-exercise. Effect size smaller than resistance training but consistent in trials.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Daily dosing (training block).</span> Some users dose 6 g daily during high-volume training blocks rather than only on training days. Modest additional benefit; mostly a convenience preference.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">For non-exercise NO/vascular goals:</span> use pure{" "}<Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">L-citrulline</Link>{" "}at 1.5–3 g (ED) or 3–6 g (BP/endothelial function). The malate component is exercise-specific.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid pure L-citrulline for resistance training:</span> the malate-bonded form has the trial evidence. Pure L-citrulline at 3–4 g pre-workout is acceptable as a budget alternative but less-studied for ergogenic outcomes.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: ergogenic effects are acute — single-dose 30–60 minutes before training. Pump and rep-volume effects emerge within the workout itself. Recovery/soreness benefits emerge over 24–48 hours post-workout. No chronic loading period required (unlike creatine).
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Form math.</span> 2:1 citrulline malate means 2 parts L-citrulline + 1 part malic acid by mass. 8 g citrulline malate → approximately 5.3 g citrulline + 2.7 g malic acid. 6 g citrulline malate → approximately 4 g citrulline + 2 g malic acid. Read product labels for the citrulline-to-malate ratio — some products use 1:1 ratios that deliver less citrulline per gram.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take L-citrulline malate",
    intro:
      "L-citrulline malate is taken orally as powder mixed in water or a pre-workout drink. The practical considerations are timing (30–60 min pre-workout), form selection (2:1 ratio), and dose splitting at the higher end of the range to reduce GI discomfort. The malate-bonded form has a tart citrus-like taste that's reasonably palatable on its own and blends well with pre-workout drinks.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1× pre-workout (only on training days). No chronic daily dosing required unless using during a high-volume training block.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">30–60 minutes before training. Plasma citrulline peaks ~60 minutes post-dose. Pérez-Guisado 2010 used 60 minutes pre-workout.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With or without food per tolerance. A small amount of carbohydrate can speed gastric emptying and reduce mild GI discomfort. Don't take with a heavy meal — gastric emptying delays absorption.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">2:1 L-citrulline malate (2 parts citrulline to 1 part malic acid). Some products use 1:1 ratios that deliver less citrulline per gram — read the label. Powder is the standard form (capsules are inefficient at 6–8 g doses — too many pills).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Pharmaceutical-grade L-citrulline malate (2:1) from cGMP-certified facility. Third-party tested for purity. Reputable brands: Now Foods, Thorne, Bulk Supplements, NutraBio, Nutricost.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling required — acute pre-workout dosing on training days. Store in cool dry conditions; powder is hygroscopic and will clump in humid environments.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does L-citrulline malate stack with?",
    intro:
      "L-citrulline malate is one of the foundational components of evidenced pre-workout stacks. It pairs naturally with caffeine, beta-alanine, and creatine — four different mechanisms that combine without redundancy. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            L-citrulline malate's pre-workout context is mostly supplement-based, not peptide-based. The natural peptide pairings are with the GH-secretagogue cluster for users targeting training-driven hypertrophy:{" "}
            <Link href="/peptides/cjc-1295" className="text-[#0891b2] hover:underline">CJC-1295</Link>{" "}
            and{" "}
            <Link href="/peptides/ipamorelin" className="text-[#0891b2] hover:underline">ipamorelin</Link>{" "}
            (typically dosed pre-bed for GH pulse alignment) work on hormonal axis for recovery and tissue adaptation; citrulline malate works acutely on training volume during the workout itself. Mechanistically complementary without overlap.{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
            for tendon/joint healing in heavy-training users — citrulline malate doesn't directly affect tendon healing but the improved training capacity it enables creates more recovery demand.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/creatine" className="text-[#0891b2] hover:underline">Creatine monohydrate</Link>{" "}
              — 5 g daily chronic dosing. Different mechanism (phosphocreatine ATP buffering vs NO-mediated blood flow). The foundational pairing — most-evidenced two-component performance stack.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Beta-alanine — 3–5 g daily chronic dosing (not acute pre-workout). Builds muscle carnosine for pH buffering during high-intensity sustained work. Mechanistically distinct from citrulline malate.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Caffeine — 200–400 mg pre-workout. CNS-mediated arousal, reduced perceived effort. No mechanism overlap with citrulline malate.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Beetroot / dietary nitrate — additional NO pathway (nitrate → nitrite → NO) independent of the arginine pathway. Combination provides "double NO" stack.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/electrolyte-powders" className="text-[#0891b2] hover:underline">Electrolyte powders</Link>{" "}
              — common pre-workout drink base. Compatible with citrulline malate dissolved in same drink.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/bcaas" className="text-[#0891b2] hover:underline">BCAAs</Link>{" "}
              or intra-workout EAA — protein synthesis substrate during long training sessions. Compatible but not synergistic in mechanism.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">Pure L-citrulline</Link>{" "}
              for chronic daily dosing alongside pre-workout citrulline malate is redundant — pick one.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Match training type.</span> Citrulline malate has the strongest evidence in resistance training. For pure endurance (long-duration cycling, running), the malate component is less central — pure L-citrulline at 3–6 g is comparable.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Consistent training timing.</span> Citrulline malate effect is acute and dose-timed. Aim for consistent 30–60 min pre-workout dosing across training sessions.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Adequate hydration.</span> NO-mediated vasodilation works best with adequate plasma volume. Pre-workout water + electrolytes is foundational.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Adequate sleep and protein.</span> Training-volume increase only translates to adaptation if recovery and protein intake support the additional stimulus.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Skip on rest days.</span> No chronic-loading requirement; the molecule clears the same day. Don&apos;t waste it.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">BP monitoring if on antihypertensives.</span> Acute pre-workout dose produces transient BP reduction.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "L-citrulline malate is exceptionally well-tolerated at trial doses. The two main practical considerations are mild GI discomfort at single doses above 8 g (split dosing helps) and modest blood pressure reduction (favorable but relevant with antihypertensives).",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort at single doses above 8 g — splitting dose into 2 servings 30 min apart eliminates this.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest acute blood pressure reduction — generally favorable, relevant with antihypertensive medications.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard supplemental doses in healthy adults.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No herpes outbreak risk.</span> Unlike L-arginine, citrulline doesn&apos;t compete with lysine for cellular transport.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No post-MI mortality signal.</span> The VINTAGE-MI safety finding is specific to L-arginine. Citrulline has not shown an analogous adverse signal.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pregnancy and breastfeeding safety isn't well-characterized.</span> Limited trial data — coordinate with obstetrician if pregnant or nursing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Combining with stim-heavy pre-workouts.</span> Citrulline malate is non-stim; if combined with high-caffeine pre-workouts, monitor heart rate and BP during sessions.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nitrate medications (nitroglycerin, isosorbide). DO NOT COMBINE.</span> Same NO/cGMP convergence as PDE5 inhibitors + nitrates — combination produces dangerous hypotension.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">PDE5 inhibitors (sildenafil, tadalafil).</span> Additive vasodilation — generally tolerated but coordinate with prescriber.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Antihypertensive medications.</span> Additive acute BP-lowering during the pre-workout dosing window. Monitor.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anticoagulants and antiplatelets — modest theoretical bleeding risk via NO-mediated platelet inhibition. Generally tolerated.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other NO-pathway supplements (pure L-citrulline, L-arginine, beetroot) — additive. Pick one citrulline source; beetroot is a separate pathway and can stack.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about L-citrulline malate",
    intro:
      "L-citrulline malate has one of the strongest pre-workout supplement evidence bases, but several questions remain about the malate-specific contribution, optimal dosing, and translation to long-term training outcomes.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Malate-specific contribution.</span> Some research attributes citrulline malate's pre-workout effects entirely to the citrulline component; others (Bendahan 2002) document direct metabolic effects of the malate component. Head-to-head trials of equimolar pure L-citrulline vs L-citrulline malate in resistance training contexts are limited.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term training outcomes.</span> The acute pre-workout effects (rep volume, soreness) are well-documented in trials lasting weeks. Whether chronic use translates to measurably larger strength gains or hypertrophy over months/years isn&apos;t precisely characterized in long-term RCTs.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal dose ceiling.</span> 8 g is the trial-validated dose. Whether higher doses (10–12 g) produce additional benefit isn&apos;t systematically studied — GI tolerance becomes the limiting factor.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Individual response variability.</span> Most users see measurable rep-volume increases at 6–8 g pre-workout; some don&apos;t. Determinants of response (training experience, baseline NO/eNOS function, gut microbiome) aren&apos;t fully characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Endurance vs resistance training effect size differential.</span> Resistance training shows the largest effects; endurance training shows smaller effects. Why the differential exists (training-volume mechanism is more relevant in resistance training) is mechanistically reasonable but not precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Stacking with caffeine and creatine — independent effect sizes.</span> The four-component pre-workout stack (citrulline malate + caffeine + beta-alanine + creatine) is mechanistically rational. Quantifying the marginal contribution of each component in the stacked form vs sum of individual effects isn&apos;t precisely characterized in head-to-head trials.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy L-citrulline malate",
    intro:
      "L-citrulline malate is widely available as pharmaceutical-grade powder. The main quality consideration is the citrulline-to-malate ratio (2:1 is the trial-validated form; some products use 1:1 ratios that deliver less citrulline per gram). Powder is the practical form at 6–8 g doses; capsules require many pills per dose.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">2:1 L-citrulline malate ratio</span> — 2 parts citrulline to 1 part malic acid. The Pérez-Guisado trial-validated form. Some products use 1:1 ratios that deliver less citrulline per gram.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested for purity</span> — heavy metals, microbial. USP, NSF, or ConsumerLab certifications.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Powder form for therapeutic doses</span> — 6–8 g is impractical as capsules (too many pills). Pre-workout mixing in water or pre-workout drink is the standard delivery.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — Now Foods, Thorne, Bulk Supplements, NutraBio, Nutricost. Brand premium is mostly QC transparency.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">For non-exercise NO/vascular goals:</span> use pure{" "}<Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">L-citrulline</Link>{" "}— malate adds cost and isn&apos;t needed for vascular/sexual health applications.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid "NO booster" proprietary pre-workout blends</span> — they usually combine sub-therapeutic doses of citrulline, arginine, and beet powder with stim ingredients. Buy citrulline malate as a single ingredient and combine deliberately.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Read serving size carefully</span> — some products list "6 g per serving" where the serving is 2 scoops; check whether you'd need 1 or 2 scoops to reach 6–8 g.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=l-citrulline+malate+2%3A1+powder&tag=profpeptide-20" label="L-Citrulline Malate" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "L-Citrulline Malate FAQ",
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
          Pérez-Guisado J, Jakeman PM. Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness. J Strength Cond Res. 2010;24(5):1215-1222.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20386132/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20386132/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Rhim HC, Kim SJ, Park J, Jang KM. Effect of citrulline on post-exercise rating of perceived exertion, muscle soreness, and blood lactate levels: a systematic review and meta-analysis. J Sport Health Sci. 2020;9(6):553-561.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/33308806/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/33308806/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Schwedhelm E, Maas R, Freese R, et al. Pharmacokinetic and pharmacodynamic properties of oral L-citrulline and L-arginine: impact on nitric oxide metabolism. Br J Clin Pharmacol. 2008;65(1):51-59.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17919250/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17919250/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bailey SJ, Blackwell JR, Williams E, et al. Acute L-citrulline supplementation increases nitric oxide bioavailability but not inspiratory muscle oxygenation and respiratory performance. Nitric Oxide. 2016;52:36-44.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/26877070/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/26877070/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bendahan D, Mattei JP, Ghattas B, Confort-Gouny S, Le Guern ME, Cozzone PJ. Citrulline/malate promotes aerobic energy production in human exercising muscle. Br J Sports Med. 2002;36(4):282-289.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12145119/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12145119/
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
      "name": "L-citrulline malate vs pure L-citrulline — which should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For pre-workout pump, resistance-training volume, and reduced post-exercise soreness: L-citrulline malate at 6–8 g is the trial-validated pre-workout protocol (Pérez-Guisado 2010, Rhim 2020 meta-analysis). The malate component contributes Krebs-cycle support and acid-base buffering during high-intensity exercise. For chronic vascular health, erectile dysfunction, or blood pressure support: pure L-citrulline at 1.5–6 g/day is sufficient — the malate contribution is exercise-specific."
      }
    },
    {
      "@type": "Question",
      "name": "How much L-citrulline malate should I take pre-workout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "6–8 g of the 2:1 form, taken 30–60 minutes before training. Pérez-Guisado 2010 used 8 g — this is the dose with the strongest evidence base. 6 g is the common commercial dose; 8 g is the trial-validated dose. The 2:1 form means 2 parts L-citrulline to 1 part malic acid by mass, so 8 g of citrulline malate provides approximately 5.3 g of citrulline content and 2.7 g of malic acid."
      }
    },
    {
      "@type": "Question",
      "name": "What does the malate component actually do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Malic acid is an intermediate in the Krebs cycle. Supplemental malate may support aerobic ATP production during exercise (replenishing Krebs-cycle intermediates that get depleted under high turnover) and contributes to acid-base buffering by neutralizing exercise-induced lactic acid accumulation. Bendahan 2002 documented 34% increase in oxidative ATP production rate during exercise with citrulline malate supplementation."
      }
    },
    {
      "@type": "Question",
      "name": "Will citrulline malate give me a real pump?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but the mechanism is more about training volume than the visual effect. Citrulline malate increases the number of repetitions you can complete before failure across a resistance training session (Pérez-Guisado 2010: 52.92% more reps vs placebo). The increased volume itself drives most of the training adaptation. The reduced post-exercise soreness (40% reduction at 24 and 48 hours) is a separate measurable effect on recovery."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "L-Citrulline Malate: 8 g Pre-Workout, Pérez-Guisado 52.92% Reps",
  "description": "L-citrulline malate at 6–8 g pre-workout — the Pérez-Guisado 2010 trial (52.92% more reps, 40% less soreness), the malate Krebs-cycle contribution, and how it differs from pure L-citrulline.",
  "url": "https://profpeptide.com/supplements/l-citrulline-malate",
  "datePublished": "2026-04-12T00:00:00Z",
  "dateModified": "2026-05-27T00:00:00Z",
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
    { "@type": "ListItem", "position": 3, "name": "L-Citrulline Malate" }
  ]
};

export default function LCitrullineMalatePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">L-Citrulline Malate</h1>
        <span className="tag">Performance &amp; Energy</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 27, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Citrulline malate, CM, L-citrulline DL-malate (2:1); parent profile:{" "}<Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">L-citrulline</Link>{" "}for non-exercise NO/vascular applications
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Pre-workout ergogenic / nitric oxide pathway precursor (citrulline arm) + Krebs-cycle intermediate and pH buffer (malate arm) / two-mechanism resistance-training performance compound
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Strong for resistance-training rep volume and post-exercise soreness reduction (Pérez-Guisado 2010 — 52.92% more reps, 40% less DOMS at 8 g pre-workout; Rhim 2020 meta-analysis of 13 RCTs confirms reduced RPE and soreness). Moderate for oxidative ATP production rate (Bendahan 2002 — 34% increase via 31-P MRS). Strong pharmacokinetic case for citrulline-based NO elevation vs L-arginine (Schwedhelm 2008). Endurance effect sizes smaller than resistance training.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is L-citrulline malate?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            L-citrulline malate is the amino acid L-citrulline bonded to malic acid in a 2:1 ratio — two parts citrulline to one part malate by mass. The citrulline arm reaches the nitric oxide pathway through the same kidney-conversion route covered in detail on the{" "}
            <Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">parent L-citrulline profile</Link>{" "}
            (oral citrulline escapes first-pass intestinal/hepatic arginase metabolism, reaches the kidneys, is converted to arginine, which serves as NOS substrate — producing NO that vasodilates working muscle). The malate arm contributes its own mechanism: malic acid is a Krebs-cycle intermediate that may support aerobic ATP production during high-intensity exercise and provides acid-base buffering against exercise-induced lactic acid accumulation. The trial evidence base for the malate-bonded form is concentrated in pre-workout resistance training contexts. Pérez-Guisado 2010 — the foundational trial — documented that 8 g L-citrulline malate before an upper-body resistance training session produced 52.92% more repetitions and 40% lower muscle soreness at 24 and 48 hours post-exercise. Rhim 2020 meta-analysis of 13 RCTs confirmed reduced rating of perceived exertion and reduced muscle soreness across the broader trial base. Bendahan 2002 used 31-phosphorus magnetic resonance spectroscopy to directly measure 34% higher oxidative ATP production rate and 20% faster phosphocreatine recovery with citrulline malate supplementation. This is one of the strongest pre-workout supplement evidence bases — citrulline malate stacks naturally with caffeine, creatine, and beta-alanine in evidenced pre-workout protocols. For non-exercise NO applications (erectile dysfunction, blood pressure, endothelial function), pure L-citrulline is sufficient and more cost-efficient.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increased resistance-training rep volume (52.92% more reps in Pérez-Guisado 2010 at 8 g pre-workout)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced post-exercise muscle soreness (40% reduction at 24 and 48 hours; Pérez-Guisado 2010)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced rating of perceived exertion (Rhim 2020 meta-analysis of 13 RCTs)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increased oxidative ATP production rate (34% per 31-P MRS; Bendahan 2002)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Faster phosphocreatine recovery post-exercise (20% in Bendahan 2002)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved muscle pump via NO-mediated vasodilation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Faster ammonia clearance during exercise (fatigue-byproduct mechanism)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest endurance benefits (cycling time-trial improvements at 3–6 g/day)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 6–8 g L-citrulline malate (2:1 form) taken 30–60 minutes before training. 8 g is the Pérez-Guisado 2010 trial-validated dose. Pre-workout only — no chronic loading required. For non-exercise NO/vascular applications, use pure{" "}<Link href="/supplements/l-citrulline" className="text-[#0891b2] hover:underline">L-citrulline</Link>{" "}— the malate component is exercise-specific.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Watch for:</span> Mild GI discomfort at single doses above 8 g (split dosing helps); modest acute blood pressure reduction during the pre-workout window (favorable but relevant with antihypertensives); do not combine with nitrate medications (additive cGMP/hypotension); no herpes outbreak risk like L-arginine.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=l-citrulline+malate+2%3A1+powder&tag=profpeptide-20" label="L-Citrulline Malate" />
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
        {["Pre-Workout", "Nitric Oxide", "Rep Volume", "Muscle Soreness", "Pérez-Guisado 2010", "Krebs Cycle"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/l-citrulline" className="text-sm font-medium text-[#0891b2] hover:underline">L-Citrulline</Link>
          <Link href="/supplements/creatine" className="text-sm font-medium text-[#0891b2] hover:underline">Creatine</Link>
          <Link href="/supplements/beta-alanine" className="text-sm font-medium text-[#0891b2] hover:underline">Beta-Alanine</Link>
          <Link href="/supplements/bcaas" className="text-sm font-medium text-[#0891b2] hover:underline">BCAAs</Link>
          <Link href="/supplements/electrolyte-powders" className="text-sm font-medium text-[#0891b2] hover:underline">Electrolyte Powders</Link>
          <Link href="/supplements/l-arginine" className="text-sm font-medium text-[#0891b2] hover:underline">L-Arginine</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="L-Citrulline Malate" pagePath="/supplements/l-citrulline-malate" />
    </div>
    </>
  );
}
