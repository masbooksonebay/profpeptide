import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/l-citrulline",
  title: "L-Citrulline: The NO Precursor That Beats Arginine for Plasma Arginine",
  description:
    "L-citrulline dosing (3–6 g), the first-pass-escape mechanism, Cormio 2011 erectile-function evidence, Figueroa flow-mediated dilation work, and the citrulline-malate variant for pre-workout.",
});

const faqs = [
  {
    q: "Why is L-citrulline better than L-arginine for nitric oxide?",
    a: (
      <>
        Oral L-arginine is largely degraded by arginase in the intestine and liver before reaching systemic circulation — so a substantial proportion of an oral dose never makes it into the bloodstream. L-citrulline is not a substrate for arginase. It passes through gut and liver intact, reaches the kidneys, and is converted to arginine by argininosuccinate synthetase/lyase enzymes — outside the first-pass arginase exposure. The counterintuitive result: supplementing the precursor (citrulline) raises plasma arginine higher and longer than supplementing arginine itself. Schwedhelm 2008 and Moinard 2008 are the foundational pharmacokinetic comparisons. This is why contemporary nitric oxide research has largely shifted to L-citrulline. See the{" "}
        <Link href="/supplements/l-arginine" className="text-[#3A759F] hover:underline">L-arginine profile</Link>{" "}
        for the full bioavailability discussion.
      </>
    ),
  },
  {
    q: "What's the difference between L-citrulline and L-citrulline malate?",
    a: (
      <>
        Pure{" "}
        <span className="font-semibold">L-citrulline</span>{" "}
        is the standalone amino acid — best for vascular/sexual health applications where the NO/cGMP pathway is the target.{" "}
        <Link href="/supplements/l-citrulline-malate" className="text-[#3A759F] hover:underline">L-citrulline malate</Link>{" "}
        bonds L-citrulline to malic acid (typically in a 2:1 ratio) — adding acid-base buffering, an additional Krebs-cycle substrate, and the strongest evidence base for pre-workout/resistance-training performance. For NO-mediated vascular goals (chronic vasodilation, ED, blood pressure), pure L-citrulline at 3 g produces equivalent effects to ~2 g of citrulline content from citrulline malate. For pre-workout pump and resistance training: citrulline malate at 6–8 g is the well-studied dose (Pérez-Guisado 2010). Both reach the NO pathway through the same kidney conversion step.
      </>
    ),
  },
  {
    q: "How much L-citrulline should I take?",
    a: "Depends on goal. For erectile dysfunction / sexual health: 1.5–3 g daily (Cormio 2011 protocol). For chronic vascular support / blood pressure: 3–6 g daily — most consistent endothelial-function results emerge at 6 g. For pre-workout performance: pure L-citrulline at 3–4 g 30–60 min pre-exercise, or L-citrulline malate at 6–8 g. Effects are partly acute (NO elevation peaks 1–2 hours post-dose) and partly chronic (endothelial function improvements build over 4–8 weeks). GI tolerance is excellent across this range.",
  },
  {
    q: "Can L-citrulline really help with erectile dysfunction?",
    a: (
      <>
        Yes, with modest but real effect. The Cormio 2011 single-blind RCT documented 1.5 g/day for 1 month produced &ldquo;improved erection hardness&rdquo; in 50% of the citrulline group vs 8.3% of placebo controls in men with mild ED. Mechanism is straightforward: citrulline raises plasma arginine → NOS produces more NO → cGMP rises in cavernous smooth muscle → vasodilation and engorgement. PDE5 inhibitors (sildenafil, tadalafil) work downstream by preserving cGMP — citrulline works upstream by raising NO substrate. Effect size is smaller than PDE5 inhibitors but the safety profile is much better, and the mechanisms are complementary — combination protocols have been studied. For users with mild ED who want a non-prescription first step, citrulline at 1.5–3 g/day is the most-evidenced option. For moderate-to-severe ED, urology workup and PDE5 inhibitors remain the standard.
      </>
    ),
  },
  {
    q: "Does L-citrulline lower blood pressure?",
    a: "Modestly, yes. Meta-analyses of L-citrulline supplementation in hypertensive and pre-hypertensive populations document systolic BP reductions of approximately 4–8 mmHg and diastolic reductions of 2–4 mmHg at doses of 3–6 g/day over 4–12 weeks. Effect is more pronounced in older adults and in users with elevated baseline BP — younger normotensive users show smaller changes. Mechanism is the same NO/cGMP pathway that drives the sexual-health benefits — vasodilation extends throughout the vascular system, not just the genital vasculature. Practical note: additive with antihypertensive medications, so monitor BP if you start citrulline while on prescribed BP meds.",
  },
  {
    q: "Can I stack L-citrulline with PDE5 inhibitors like sildenafil?",
    a: "Yes — and the mechanisms are complementary rather than redundant. PDE5 inhibitors (sildenafil/Viagra, tadalafil/Cialis) preserve cGMP by blocking phosphodiesterase-5 — the enzyme that breaks cGMP down. L-citrulline works upstream by raising plasma arginine and supporting NO production, which drives cGMP synthesis in the first place. Together they raise both NO/cGMP production and preservation. Some clinical research has examined the combination for cases where PDE5 inhibitors alone are insufficient. Coordinate with prescribing clinician — both produce additive vasodilation, which can be useful or excessive depending on baseline BP and comorbidities. Do not combine with nitrate medications (nitroglycerin, isosorbide) regardless — the combination causes dangerous hypotension.",
  },
  {
    q: "Are there any side effects I should know about?",
    a: "L-citrulline has one of the cleanest safety profiles of any vascular-acting supplement. No serious adverse events documented in trials at doses up to 10–15 g/day. Common side effects are mild and dose-related: rare GI discomfort at single doses above 6 g (split dosing eliminates this), and modest blood pressure reduction (typically favorable but relevant if on antihypertensives). No herpes-outbreak risk like L-arginine — citrulline doesn't compete with lysine for cellular transport. No documented post-MI safety signal like the VINTAGE-MI finding for arginine. Pregnancy and breastfeeding safety isn't well-characterized in trial data — coordinate with obstetrician.",
  },
  {
    q: "How long until I notice effects?",
    a: "Depends on the goal. NO/plasma-arginine elevation is acute — peaks 1–2 hours post-dose and returns toward baseline by 4–6 hours. Erectile-function effects build over 2–4 weeks of daily use (Cormio 2011 dosed for 1 month). Blood pressure effects emerge over 4–8 weeks. Endothelial function improvements (flow-mediated dilation) typically require 6–8 weeks of consistent supplementation to reach plateau. Pre-workout pump effect is acute — 30–60 minute timing pre-exercise.",
  },
];

const studies = [
  {
    title: "Oral L-Citrulline Supplementation Improves Erection Hardness in Men with Mild Erectile Dysfunction",
    authors: "Cormio L, De Siati M, Lorusso F, et al.",
    journal: "Urology",
    year: "2011",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/21195829/",
    summary: "A single-blind RCT of L-citrulline (1.5 g/day) for 1 month in 24 men with mild erectile dysfunction. 50% of the citrulline group reported improved erection hardness vs 8.3% of placebo controls — a clinically meaningful difference. The foundational reference for L-citrulline ED protocols. Notable for the modest dose (1.5 g, much lower than arginine ED protocols at 5+ g) — citrulline's pharmacokinetic advantage enables clinically significant effects at smaller doses.",
  },
  {
    title: "Pharmacokinetic and Pharmacodynamic Properties of Oral L-citrulline and L-arginine: Impact on Nitric Oxide Metabolism",
    authors: "Schwedhelm E, Maas R, Freese R, et al.",
    journal: "British Journal of Clinical Pharmacology",
    year: "2008",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/17919250/",
    summary: "A pharmacokinetic crossover comparing oral L-arginine vs L-citrulline in healthy volunteers. L-citrulline produced higher and longer-lasting plasma arginine elevations than equimolar L-arginine. The mechanism — citrulline escapes first-pass arginase metabolism in intestine and liver. This is the foundational reference explaining why contemporary NO research has shifted to citrulline and why citrulline works at lower doses than arginine.",
  },
  {
    title: "Effect of L-Citrulline Supplementation on Blood Pressure: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
    authors: "Mirenayat MS, Moradi S, Mohammadi H, Rouhani MH",
    journal: "Current Hypertension Reports",
    year: "2018",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/29744600/",
    summary: "A meta-analysis of 8 RCTs of L-citrulline supplementation on blood pressure outcomes. Citrulline produced statistically significant reductions in systolic BP (~4–8 mmHg) and diastolic BP (~2–4 mmHg) across trials. Effects were more pronounced in older adults and hypertensive populations. The most-cited single-source summary of citrulline's BP-lowering effect.",
  },
  {
    title: "Influence of L-Citrulline and Watermelon Supplementation on Vascular Function and Exercise Performance",
    authors: "Figueroa A, Wong A, Jaime SJ, Gonzales JU",
    journal: "Current Opinion in Clinical Nutrition and Metabolic Care",
    year: "2017",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/27749691/",
    summary: "A review of L-citrulline and watermelon (natural citrulline source) supplementation effects on flow-mediated dilation (an endothelial function marker), blood pressure, and exercise performance. Citrulline supplementation at 3–6 g/day consistently improved endothelial function and reduced BP, particularly in older or hypertensive subjects. Practical framing reference for citrulline's chronic vascular benefits.",
  },
  {
    title: "Citrulline Malate Enhances Athletic Anaerobic Performance and Relieves Muscle Soreness",
    authors: "Pérez-Guisado J, Jakeman PM",
    journal: "Journal of Strength and Conditioning Research",
    year: "2010",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/20386132/",
    summary: "An RCT of 8 g L-citrulline malate (2:1 form) vs placebo before an upper-body resistance training session. The citrulline malate group performed 52.92% more repetitions across the workout and reported 40% less muscle soreness at 24 and 48 hours post-exercise. The foundational pre-workout citrulline malate trial. Cited here to anchor the L-citrulline-malate variant — see that page for the full ergogenic discussion.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does L-citrulline work?",
    intro:
      "L-citrulline works through a single elegantly counterintuitive pathway: oral citrulline is absorbed efficiently, escapes first-pass arginase metabolism in intestine and liver, reaches the kidneys, and is converted to L-arginine — which then serves as substrate for nitric oxide synthase (NOS) to produce NO. The result is higher and longer-lasting plasma arginine elevations than from oral L-arginine itself.",
    body: [
      "First-pass arginase escape. Oral L-arginine is largely degraded by intestinal and hepatic arginase before reaching systemic circulation — a substantial proportion never makes it to the bloodstream. L-citrulline is not a substrate for arginase. It passes through gut and liver intact, reaches the kidneys, and is converted to L-arginine there — outside the first-pass arginase exposure. Schwedhelm 2008 is the foundational pharmacokinetic comparison.",
      "Kidney conversion to arginine. In the proximal tubule of the kidney, citrulline is converted to arginine via argininosuccinate synthetase (citrulline + aspartate → argininosuccinate) and argininosuccinate lyase (argininosuccinate → arginine + fumarate). Newly-formed arginine then enters systemic circulation and is available as NOS substrate throughout the vasculature.",
      "Nitric oxide synthesis. Plasma arginine reaching endothelial cells is taken up and used by endothelial nitric oxide synthase (eNOS) to produce NO + citrulline (yes, citrulline is recycled). NO diffuses to adjacent smooth muscle cells, activates guanylyl cyclase, raises cGMP, and causes smooth muscle relaxation — vasodilation. This is the same downstream pathway PDE5 inhibitors target.",
      "Endothelial function support. Chronic citrulline supplementation improves flow-mediated dilation (FMD) — a standard measure of endothelial health (Figueroa 2017 review). Improving FMD is mechanistically relevant for both cardiovascular outcomes and sexual function, since vascular endothelium is shared infrastructure.",
      "Urea cycle integration. Citrulline is naturally produced in the urea cycle as a step between ornithine and arginine. Supplemental citrulline integrates with this pathway, supporting nitrogen clearance and arginine homeostasis without the dosing ceiling that limits arginine.",
      "Aspartate consumption (minor mechanistic note). The citrulline→arginine kidney conversion consumes aspartate. Very high citrulline doses (>15 g) may transiently lower plasma aspartate. Not clinically significant at typical supplemental doses but worth noting for very high-dose research protocols.",
      "Independent malate effects (in citrulline malate). The malate component of citrulline malate has its own mechanism — Krebs-cycle intermediate supporting aerobic ATP production and acid-base buffering during high-intensity exercise. This is what differentiates the malate variant from pure L-citrulline for resistance-training pump and endurance applications.",
    ],
  },
  {
    id: "research",
    title: "What does L-citrulline actually do?",
    intro:
      "L-citrulline has a moderate evidence base across erectile dysfunction, blood pressure, endothelial function, and (in the malate form) exercise performance. The honest summary: mechanism plausibility is strong, effect sizes are modest-to-moderate, safety is excellent, and citrulline outperforms equimolar L-arginine on plasma arginine elevation — which is the practical reason to use it.",
    body: [
      "Erectile dysfunction (Moderate). Cormio 2011 single-blind RCT in mild ED: 1.5 g/day citrulline for 1 month produced improved erection hardness in 50% of citrulline group vs 8.3% placebo. Effect size smaller than PDE5 inhibitors but mechanism is complementary and side-effect profile is much better. Most-evidenced non-prescription option for mild ED.",
      "Blood pressure reduction (Moderate). Mirenayat 2018 meta-analysis of 8 RCTs: systolic BP reduction of ~4–8 mmHg and diastolic reduction of ~2–4 mmHg at 3–6 g/day over 4–12 weeks. More pronounced effect in older adults and hypertensive populations.",
      "Endothelial function (Moderate). Figueroa 2017 review documents consistent flow-mediated dilation improvements with chronic citrulline supplementation — a marker of endothelial health predictive of cardiovascular outcomes.",
      "Exercise performance in pre-workout context (Strong for citrulline malate form). Pérez-Guisado 2010 documented 52.92% more repetitions and 40% less muscle soreness with 8 g citrulline malate pre-resistance-training. Meta-analyses (Rhim 2020) support the ergogenic effect. The malate-bonded form has the strongest ergogenic evidence; pure L-citrulline has been studied less in pre-workout contexts.",
      "Plasma arginine elevation vs oral L-arginine (Strong). Schwedhelm 2008 documents citrulline raises plasma arginine higher and longer than equimolar L-arginine. This is the foundational pharmacokinetic finding that anchors all the other applications.",
      "Pulmonary hypertension (Moderate, specialized clinical use). Citrulline has been studied as adjunct therapy in pulmonary arterial hypertension, with modest improvements in pulmonary vascular resistance. This is specialized cardiology use, not general supplementation.",
      "Recovery from heart surgery (Modest, clinical context). Several trials in cardiac surgery patients document reduced post-operative pulmonary hypertension and improved hemodynamics with perioperative citrulline.",
      "Athletic endurance (Moderate). Cycling time trial improvements and reduced perceived exertion at 3–6 g/day. Mechanism is NO-mediated vasodilation improving exercise blood flow plus citrulline malate's ammonia-clearance contribution.",
      "Male fertility (Modest, limited data). A handful of trials suggest citrulline supplementation modestly improves sperm motility — likely through endothelial-function-mediated improvements in testicular blood flow. Smaller evidence base than arginine for this indication.",
    ],
  },
  {
    id: "dosing",
    title: "How is L-citrulline dosed?",
    intro:
      "L-citrulline dosing depends on goal and varies more by application than by individual. For erectile dysfunction: 1.5–3 g daily. For blood pressure / chronic vascular support: 3–6 g daily. For pre-workout performance: use L-citrulline malate at 6–8 g. GI tolerance is excellent across this range — there's no functional bioavailability ceiling like with L-arginine.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Erectile dysfunction / sexual health.</span> 1.5–3 g daily. Cormio 2011 used 1.5 g/day for 1 month. 3 g/day is the upper range used in subsequent trials.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Blood pressure / chronic vascular support.</span> 3–6 g daily, often split AM/PM. Most consistent endothelial-function improvements emerge at 6 g/day in older or hypertensive populations.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-workout performance.</span> Use{" "}<Link href="/supplements/l-citrulline-malate" className="text-[#3A759F] hover:underline">L-citrulline malate</Link>{" "}at 6–8 g 30–60 minutes pre-training — the malate form has the Pérez-Guisado evidence base for resistance training. Pure L-citrulline at 3–4 g is acceptable but less-studied for ergogenic use.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Endurance performance.</span> 3–6 g pure L-citrulline pre-exercise. Modest cycling/running benefits in trials.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Combined with PDE5 inhibitors.</span> Standard daily citrulline dose (3 g) alongside as-needed PDE5 medication. Coordinate with prescriber.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pulmonary hypertension / clinical contexts.</span> Specialist-supervised dosing in cardiology contexts, typically 3–9 g/day in divided doses.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: NO/plasma-arginine elevation is acute (peaks 1–2 hours post-dose). Erectile function effects build over 2–4 weeks. Blood pressure effects emerge over 4–8 weeks. Endothelial function (flow-mediated dilation) reaches plateau over 6–8 weeks. Pre-workout pump effect is acute (single-dose timing).
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Equivalence note.</span> 1 g L-citrulline → roughly 1 g effective plasma arginine over its absorption window. Compare to 1 g oral L-arginine → much less due to first-pass arginase metabolism. This is the practical bioavailability advantage, not a chemical difference in the NO pathway itself.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take L-citrulline",
    intro:
      "L-citrulline is taken orally as powder or capsules. The practical considerations are timing (chronic daily for vascular/sexual health, acute pre-workout for performance), form selection (pure L-citrulline vs L-citrulline malate), and dose splitting at the higher end of the range.",
    node: (
      <div className="space-y-4">
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Chronic daily for vascular/sexual health (1–2× daily). Acute pre-workout only for performance protocols. Split 6 g+ doses into 2 servings to maintain steadier plasma levels.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">For vascular/sexual health: morning or split AM/PM — no specific window required. For pre-workout: 30–60 minutes before exercise. Not specifically a pre-bed supplement (unlike L-arginine for GH).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With or without food per tolerance. Empty-stomach absorption is slightly faster but full absorption is reliable either way — no first-pass metabolism penalty like L-arginine.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Pure L-citrulline for vascular/sexual health (cost-efficient, exact dose).{" "}<Link href="/supplements/l-citrulline-malate" className="text-[#3A759F] hover:underline">L-citrulline malate (2:1)</Link>{" "}for pre-workout performance — adds malic acid acid-base buffering with the Pérez-Guisado evidence base. Watermelon extract is a natural source but cost-inefficient at supplemental doses.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Pharmaceutical-grade L-citrulline from cGMP-certified facility. Third-party tested for purity. Reputable brands: Now Foods, Thorne, Pure Encapsulations, Bulk Supplements, NutraBio. Avoid &quot;NO booster&quot; proprietary blends.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling required — chronic daily use is the trial-validated norm for vascular outcomes. Store in cool dry conditions; powder is hygroscopic.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does L-citrulline stack with?",
    intro:
      "L-citrulline pairs naturally with the cardiovascular and sexual-health supplement clusters. The mechanism (NO/cGMP elevation) is shared infrastructure with PDE5 inhibitors, beetroot, and pine bark extract — these stack rather than redundantly overlap. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            L-citrulline stacks with peptides that benefit from improved vascular function or tissue perfusion. Healing peptides like{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
            and{" "}
            <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>{" "}
            work in part through angiogenesis (new blood vessel formation); citrulline supports the function of existing vasculature through NO-mediated vasodilation — mechanistically complementary. PT-141 (bremelanotide) for sexual function works through melanocortin receptor signaling in the brain — citrulline operates downstream at the vascular level; the combination addresses both central and peripheral mechanisms. None of these combinations have formal RCT validation but the mechanistic rationale is straightforward.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-citrulline-malate" className="text-[#3A759F] hover:underline">L-citrulline malate</Link>{" "}
              — for pre-workout pump/performance, swap pure L-citrulline for the malate form. Adds the Pérez-Guisado ergogenic evidence base.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Beetroot / nitrate — the dietary nitrate → nitrite → NO pathway is independent of the arginine→NO pathway and stacks additively. Beetroot + citrulline pre-workout is a classical &quot;double NO&quot; stack.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Pycnogenol (pine bark extract) — eNOS-enhancing flavonoid complex; combination products with arginine/citrulline are commercially common for sexual health applications.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/maca-root" className="text-[#3A759F] hover:underline">Maca root</Link>{" "}
              and{" "}
              <Link href="/supplements/tongkat-ali" className="text-[#3A759F] hover:underline">Tongkat Ali</Link>{" "}
              — different mechanisms for sexual health (libido/hormonal vs vascular). Citrulline addresses the physical erectile mechanism; maca and tongkat ali address libido and endocrine status. Complementary stacking for comprehensive sexual health support.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/coq10" className="text-[#3A759F] hover:underline">CoQ10</Link>{" "}
              — endothelial-function complement. CoQ10 supports mitochondrial function in vascular smooth muscle and eNOS coupling.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/magnesium" className="text-[#3A759F] hover:underline">Magnesium</Link>{" "}
              — cardiovascular foundational supplement; broad compatibility with citrulline.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Consistent daily timing.</span> Chronic vascular benefits build over weeks of daily supplementation — irregular use produces only the acute NO elevation, not the endothelial function improvements.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cardiovascular exercise.</span> Aerobic exercise is the strongest non-pharmacological enhancer of endothelial function — citrulline complements rather than replaces this.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mediterranean / DASH-style diet.</span> High in dietary nitrates and arginine substrate. Citrulline adds to the same vascular pathway.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hydration.</span> NO-mediated vasodilation works best with adequate plasma volume.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid combination with nitrate medications.</span> Nitroglycerin and isosorbide already maximally activate the NO/cGMP pathway — adding citrulline produces no benefit and is theoretically contraindicated (additive hypotension).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">BP monitoring if on antihypertensives.</span> Citrulline produces additive BP reduction. Monitor during titration.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "L-citrulline has one of the cleanest safety profiles among vascular-acting supplements. No serious adverse events at typical doses. The main practical considerations are modest blood pressure reduction (favorable but relevant with antihypertensives) and avoidance of nitrate medications.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort at single doses above 6 g — split dosing eliminates this.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest blood pressure reduction — generally favorable, relevant with antihypertensive medications.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard supplemental doses in healthy adults.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No herpes outbreak risk.</span> Unlike L-arginine, citrulline doesn&apos;t compete with lysine for cellular transport — HSV-susceptible users can use citrulline safely.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No post-MI mortality signal.</span> The VINTAGE-MI safety signal is specific to L-arginine; citrulline has not shown an analogous adverse signal. Still, post-MI supplementation initiation should be coordinated with cardiology.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pregnancy and breastfeeding safety isn&apos;t well-characterized.</span> Limited trial data — coordinate with obstetrician if pregnant or nursing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Rare hypotension reports at very high doses combined with antihypertensives.</span> Generally well-tolerated but monitor BP in vulnerable users.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Nitrate medications (nitroglycerin, isosorbide). DO NOT COMBINE.</span> Both pathways converge on cGMP elevation; combination produces dangerous hypotension. This is the same contraindication as PDE5 inhibitors with nitrates.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">PDE5 inhibitors (sildenafil, tadalafil).</span> Additive but generally well-tolerated — both target the same NO/cGMP pathway from different points. Coordinate with prescriber.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Antihypertensive medications.</span> Additive BP-lowering. Monitor during titration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anticoagulants and antiplatelets — modest theoretical bleeding risk via NO-mediated platelet inhibition. Generally tolerated.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy — limited data; obstetric supervision.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about L-citrulline",
    intro:
      "L-citrulline's NO pathway pharmacology is well-characterized, but several questions remain about long-term outcomes, individual variability, and whether the modest effect sizes scale to clinically meaningful hard endpoints.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term cardiovascular outcome data.</span> Citrulline improves surrogate markers (BP, FMD) consistently — but large outcome trials examining hard cardiovascular endpoints (MI, stroke, mortality) with chronic citrulline supplementation don&apos;t exist at REDUCE-IT scale. The clinical benefit at hard-endpoint level is plausible from mechanism but not formally proven.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Individual responder variability.</span> Some users see substantial vascular and erectile-function improvements; others see little. Determinants of response (baseline endothelial function, gut microbiome, NOS polymorphisms, ADMA levels) aren&apos;t fully characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Aging-related arginine deficiency state.</span> Some research suggests aging is associated with functional arginine deficiency at the endothelial level (driven by elevated ADMA — asymmetric dimethylarginine — that competes with arginine at NOS). Whether older adults are functionally better citrulline responders due to this isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal dose for sexual health.</span> Cormio 2011 used 1.5 g/day; some subsequent protocols use 3 g/day. Whether 3 g produces meaningfully better outcomes than 1.5 g for ED specifically isn&apos;t precisely characterized in head-to-head trials.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Pure citrulline vs citrulline malate for non-exercise outcomes.</span> Citrulline malate&apos;s evidence base is concentrated in pre-workout/resistance training. Whether the malate component adds vascular benefit beyond pure citrulline at equimolar citrulline content isn&apos;t precisely characterized for non-exercise outcomes.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Watermelon extract bioequivalence.</span> Watermelon is the natural citrulline source, but commercially available watermelon extracts vary in citrulline concentration. Whether watermelon-extract supplements produce equivalent effects to pharmaceutical-grade L-citrulline at matched citrulline content is variable and product-dependent.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy L-citrulline",
    intro:
      "L-citrulline is widely available as pharmaceutical-grade powder or capsules. Like other amino acid supplements, quality is more uniform than in botanical extracts — the active ingredient is a defined molecule. Cost varies several-fold between brands; powder is more cost-efficient than capsules at supplemental doses.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pure L-citrulline (free amino acid)</span> — clean dose for vascular/sexual health use. Read the label for grams of L-citrulline per serving.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">For pre-workout: L-citrulline malate (2:1 form)</span> — note that 8 g citrulline malate provides approximately 5.3 g pure citrulline + 2.7 g malic acid.{" "}<Link href="/supplements/l-citrulline-malate" className="text-[#3A759F] hover:underline">See the citrulline malate page</Link>{" "}for the ergogenic discussion.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested for purity</span> — USP, NSF, or ConsumerLab certifications. Heavy metals and microbial testing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Powder for therapeutic doses</span> — 3–6 g/day is cheaper from powder than from capsules. Mixes well in water or juice.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — Now Foods, Thorne, Pure Encapsulations, Bulk Supplements, NutraBio, Nutricost. Brand premium is mostly QC transparency.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Watermelon extract is acceptable but variable</span> — standardized to citrulline content if listed. Cost-inefficient at supplemental doses vs pure L-citrulline.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid &quot;NO booster&quot; proprietary blends</span> — these usually combine small doses of citrulline, arginine, beet powder, and stim ingredients without delivering trial-validated single-ingredient doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid &quot;DL-citrulline&quot; — racemic mixtures</span> are not bioactive equivalents to L-citrulline. The L-form is the biologically active enantiomer.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=l-citrulline+pure+pharmaceutical+grade&tag=profpeptide-20" label="L-Citrulline" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "L-Citrulline FAQ",
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
          Cormio L, De Siati M, Lorusso F, et al. Oral L-citrulline supplementation improves erection hardness in men with mild erectile dysfunction. Urology. 2011;77(1):119-122.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21195829/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21195829/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Schwedhelm E, Maas R, Freese R, et al. Pharmacokinetic and pharmacodynamic properties of oral L-citrulline and L-arginine: impact on nitric oxide metabolism. Br J Clin Pharmacol. 2008;65(1):51-59.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17919250/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17919250/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mirenayat MS, Moradi S, Mohammadi H, Rouhani MH. Effect of L-citrulline supplementation on blood pressure: a systematic review and meta-analysis of randomized controlled trials. Curr Hypertens Rep. 2018;20(11):98.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29744600/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29744600/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Figueroa A, Wong A, Jaime SJ, Gonzales JU. Influence of L-citrulline and watermelon supplementation on vascular function and exercise performance. Curr Opin Clin Nutr Metab Care. 2017;20(1):92-98.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27749691/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27749691/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Pérez-Guisado J, Jakeman PM. Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness. J Strength Cond Res. 2010;24(5):1215-1222.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20386132/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20386132/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Moinard C, Nicolis I, Neveux N, Darquy S, Bénazeth S, Cynober L. Dose-ranging effects of citrulline administration on plasma amino acids and hormonal patterns in healthy subjects: the Citrudose pharmacokinetic study. Br J Nutr. 2008;99(4):855-862.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17953788/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17953788/
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

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is L-citrulline better than L-arginine for nitric oxide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oral L-arginine is largely degraded by arginase in the intestine and liver before reaching systemic circulation. L-citrulline is not a substrate for arginase. It passes through gut and liver intact, reaches the kidneys, and is converted to arginine there — outside the first-pass arginase exposure. The counterintuitive result: supplementing citrulline raises plasma arginine higher and longer than supplementing arginine itself. Schwedhelm 2008 is the foundational pharmacokinetic comparison."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between L-citrulline and L-citrulline malate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pure L-citrulline is the standalone amino acid — best for vascular/sexual health applications where the NO/cGMP pathway is the target. L-citrulline malate bonds L-citrulline to malic acid (2:1 ratio) — adding acid-base buffering and the strongest evidence base for pre-workout/resistance-training performance. For NO-mediated vascular goals, pure L-citrulline at 3 g is sufficient. For pre-workout pump and resistance training: citrulline malate at 6–8 g is the well-studied dose."
      }
    },
    {
      "@type": "Question",
      "name": "How much L-citrulline should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For erectile dysfunction / sexual health: 1.5–3 g daily (Cormio 2011 protocol). For chronic vascular support / blood pressure: 3–6 g daily. For pre-workout performance: pure L-citrulline at 3–4 g 30–60 min pre-exercise, or L-citrulline malate at 6–8 g. GI tolerance is excellent across this range."
      }
    },
    {
      "@type": "Question",
      "name": "Can L-citrulline help with erectile dysfunction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, with modest but real effect. Cormio 2011 single-blind RCT documented 1.5 g/day for 1 month produced improved erection hardness in 50% of citrulline group vs 8.3% of placebo controls in men with mild ED. Mechanism: citrulline raises plasma arginine → NOS produces more NO → cGMP rises in cavernous smooth muscle → vasodilation. Effect size smaller than PDE5 inhibitors but safety profile is much better. Most-evidenced non-prescription option for mild ED."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "L-Citrulline: The NO Precursor That Beats Arginine for Plasma Arginine",
  "description": "L-citrulline dosing (3–6 g), the first-pass-escape mechanism, Cormio 2011 erectile-function evidence, Figueroa flow-mediated dilation work, and the citrulline-malate variant for pre-workout.",
  "url": "https://profpeptide.com/supplements/l-citrulline",
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
    { "@type": "ListItem", "position": 3, "name": "L-Citrulline" }
  ]
};

export default function LCitrullinePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">L-Citrulline</h1>
        <span className="tag">Sexual Health</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 27, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> Citrulline, L-citrulline powder, watermelon extract (natural source); related variant:{" "}<Link href="/supplements/l-citrulline-malate" className="text-[#3A759F] hover:underline">L-citrulline malate</Link>
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Supplement Class:</span> Non-essential amino acid / nitric oxide pathway precursor / urea cycle intermediate / endothelial function support / first-pass arginase escape (preferred over L-arginine for NO applications)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Evidence Tier:</span> Moderate across erectile dysfunction (Cormio 2011 — 1.5 g/day for 1 month), blood pressure reduction (Mirenayat 2018 meta-analysis — 4–8 mmHg systolic at 3–6 g/day), endothelial function (Figueroa 2017 review — flow-mediated dilation improvements), and exercise performance in citrulline malate form (Pérez-Guisado 2010). Strong pharmacokinetic evidence for superiority over L-arginine (Schwedhelm 2008). Hard cardiovascular outcome trials at REDUCE-IT scale don&apos;t exist — surrogate-marker evidence base, not hard-endpoint base.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is L-citrulline?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            L-citrulline is a non-essential amino acid found in high concentrations in watermelon — from which it takes its name (Citrullus lanatus) — and produced endogenously as part of the urea cycle. Its supplemental significance comes from an elegant counterintuitive pharmacology: oral citrulline raises plasma arginine higher and longer than oral L-arginine itself, because citrulline escapes the first-pass intestinal and hepatic arginase metabolism that degrades much of an oral arginine dose before it reaches circulation. Citrulline passes through gut and liver intact, reaches the kidneys, and is converted to arginine there — which then serves as substrate for nitric oxide synthase (NOS) throughout the vasculature, producing NO. NO activates guanylyl cyclase in vascular smooth muscle, raises cGMP, and drives vasodilation — the same downstream pathway that PDE5 inhibitors (sildenafil, tadalafil) target by preserving cGMP. This NO/cGMP mechanism is the physiology of erection and a foundational pathway of cardiovascular health. The Cormio 2011 RCT documented 1.5 g/day for 1 month improved erection hardness in 50% of mild-ED users vs 8.3% placebo. Mirenayat 2018 meta-analysis documents 4–8 mmHg systolic BP reductions at 3–6 g/day. For pre-workout pump and resistance-training performance, the malate-bonded variant —{" "}
            <Link href="/supplements/l-citrulline-malate" className="text-[#3A759F] hover:underline">L-citrulline malate</Link>{" "}
            — adds acid-base buffering and Krebs-cycle substrate to the citrulline NO pathway, with the Pérez-Guisado 2010 evidence base.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improves erection hardness in men with mild ED (Cormio 2011 — 1.5 g/day for 1 month)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest blood pressure reduction (~4–8 mmHg systolic at 3–6 g/day; Mirenayat 2018 meta-analysis)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improves flow-mediated dilation (endothelial function marker; Figueroa 2017)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Raises plasma arginine more effectively than oral L-arginine (Schwedhelm 2008)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pre-workout performance (use{" "}<Link href="/supplements/l-citrulline-malate" className="text-[#3A759F] hover:underline">citrulline malate form</Link>; Pérez-Guisado 2010)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Adjunct in pulmonary hypertension (specialized cardiology context)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cardiac surgery perioperative support (modest hemodynamic improvements)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest improvements in male fertility / sperm motility</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common dose:</span> 1.5–3 g daily for sexual health/ED; 3–6 g daily (often split AM/PM) for blood pressure and endothelial function; 3–4 g pure citrulline OR 6–8 g L-citrulline malate pre-workout for performance. GI tolerance is excellent across this range — no functional absorption ceiling like L-arginine.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Watch for:</span> Do not combine with nitrate medications (nitroglycerin, isosorbide) — additive cGMP elevation can produce dangerous hypotension; additive BP-lowering with antihypertensives (monitor during titration); pregnancy and breastfeeding safety not well-characterized; no herpes outbreak risk like L-arginine.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=l-citrulline+pure+pharmaceutical+grade&tag=profpeptide-20" label="L-Citrulline" />
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
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
        {["Nitric Oxide", "Erectile Function", "Endothelial Function", "Blood Pressure", "First-Pass Escape", "Cormio 2011"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/l-citrulline-malate" className="text-sm font-medium text-[#3A759F] hover:underline">L-Citrulline Malate</Link>
          <Link href="/supplements/l-arginine" className="text-sm font-medium text-[#3A759F] hover:underline">L-Arginine</Link>
          <Link href="/supplements/maca-root" className="text-sm font-medium text-[#3A759F] hover:underline">Maca Root</Link>
          <Link href="/supplements/tongkat-ali" className="text-sm font-medium text-[#3A759F] hover:underline">Tongkat Ali</Link>
          <Link href="/supplements/coq10" className="text-sm font-medium text-[#3A759F] hover:underline">CoQ10</Link>
          <Link href="/supplements/magnesium" className="text-sm font-medium text-[#3A759F] hover:underline">Magnesium</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="L-Citrulline" pagePath="/supplements/l-citrulline" />
    </div>
    </>
  );
}
