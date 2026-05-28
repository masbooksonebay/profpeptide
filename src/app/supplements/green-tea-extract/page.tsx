import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/green-tea-extract",
  title: "Green Tea Extract: EGCG-Caffeine Thermogenesis vs the EFSA 800 mg Hepatotoxicity Signal",
  description:
    "Green tea extract dosing — modest fat oxidation and weight maintenance with catechin-caffeine combination per Hursel 2009. Prominent EFSA 2018 hepatotoxicity caveat at EGCG ≥800 mg/day; brewed tea is safe, concentrated extract carries dose-dependent liver injury risk.",
});

const faqs = [
  {
    q: "Is green tea extract actually dangerous for my liver?",
    a: "It can be at high doses — this is the central practical safety issue. EFSA 2018 scientific opinion flagged EGCG intake at or above 800 mg/day from supplements as associated with increased risk of liver injury. The case-report literature documents acute liver injury (Mazzanti 2009 review and subsequent updates) from concentrated green tea extracts, particularly on empty stomach. Critical distinction: brewed green tea (3–4 cups/day delivers approximately 200–300 mg total catechins) has not been associated with hepatotoxicity. The risk is specifically concentrated supplemental extracts at high doses. Practical safety guidance: (1) Cap supplemental EGCG below 800 mg/day. (2) Take with food, not on empty stomach. (3) Avoid combination weight-loss products with high-dose EGCG plus stimulants. (4) Stop and consult a clinician if jaundice, dark urine, abdominal pain, or unusual fatigue develops. (5) Pre-existing liver disease: avoid supplemental extract entirely. The popular reputation overstates safety; honest framing matters.",
  },
  {
    q: "How much green tea extract should I take?",
    a: "Supplemental dose: 250–500 mg standardized green tea extract daily (typically standardized to 45%+ EGCG), providing approximately 100–250 mg EGCG. Stay well below the EFSA 800 mg EGCG/day safety threshold. The Hursel 2009 meta-analysis documented modest weight management effects with catechin-caffeine combinations at typical doses (90–300 mg EGCG combined with 100–200 mg caffeine). Higher doses don't produce proportional efficacy gains and increase hepatotoxicity risk. Take with food (reduces hepatotoxicity risk vs empty stomach). If you can substitute brewed green tea (3–4 cups/day) for the supplement, that's a safer delivery vehicle with no documented hepatotoxicity signal at typical consumption.",
  },
  {
    q: "Does green tea extract actually cause weight loss?",
    a: "Modestly, and primarily as a catechin-caffeine combination. Hursel 2009 meta-analysis of 11 RCTs documented modest weight loss and weight-maintenance benefit with catechin-caffeine mixtures — effect sizes are small (typically <1 kg over 12 weeks) and most consistent in moderate-caffeine users. Phung 2010 meta also documented modest effects. The thermogenic mechanism (EGCG inhibits catechol-O-methyltransferase, prolonging norepinephrine action; combined with caffeine's adenosine antagonism) is real but small. Honest framing: green tea extract is NOT a meaningful weight-loss tool independent of diet and exercise. Effect is modest, requires ongoing intake, and tolerance to the thermogenic effect may develop. For weight management, dietary intervention and exercise are the dominant levers; green tea extract is at best a small adjunct.",
  },
  {
    q: "Is brewed green tea as good as the extract?",
    a: "For most purposes, yes — and it's safer. Brewed green tea (3–4 cups/day) delivers approximately 200–300 mg total catechins (~150–200 mg EGCG) along with L-theanine and the typical 50–70 mg caffeine per cup. This provides much of the cardiovascular, modest metabolic, and antioxidant benefit attributed to green tea catechins, with no documented hepatotoxicity at typical consumption levels. The concentrated extract delivers higher catechin doses faster but at the cost of the EFSA-flagged hepatotoxicity signal at higher doses. Practical hierarchy: brewed tea for daily background catechin intake (safer, includes synergistic compounds like L-theanine); supplemental extract for users specifically targeting therapeutic doses with awareness of the dose-dependent hepatotoxicity caveat. Matcha (whole-leaf powdered green tea) provides a higher per-serving catechin dose than brewed tea while preserving the food-matrix safety advantage.",
  },
  {
    q: "What's the EGCG–caffeine synergy mechanism?",
    a: "Two complementary effects on the catecholamine pathway. Caffeine antagonizes adenosine receptors, increasing sympathetic nervous system activity and norepinephrine release. EGCG inhibits catechol-O-methyltransferase (COMT) — the enzyme that breaks down norepinephrine — prolonging norepinephrine's stimulatory and lipolytic effects. The combined effect is greater than either alone for thermogenesis and fat oxidation (Dulloo 1999 mechanistic work). This is the basis for caffeine + EGCG being more effective than either alone in Hursel 2009 meta-analysis. Practical implication: most evidence-based thermogenic supplements combine caffeine with green tea catechins. Effect is modest but mechanistically real.",
  },
  {
    q: "Does green tea extract have cancer prevention benefits?",
    a: "Promising mechanism, mixed evidence at the clinical-outcome level. EGCG has documented anticancer effects in cell culture and animal models — apoptosis induction in cancer cells, antiangiogenic effects, antioxidant mechanisms. Observational data associate high green tea consumption with reduced cancer risk in some populations (particularly East Asian cohorts where regular consumption is high). Clinical trials of green tea extract for cancer prevention or treatment have been mixed and generally not definitive. Honest framing: the cancer prevention claim is biologically plausible but not RCT-confirmed at clinically meaningful effect sizes for supplemental use. Don't rely on green tea extract as a cancer prevention strategy. For most users, the cardiovascular and modest metabolic benefits are the more established applications.",
  },
  {
    q: "Can I take green tea extract on a low-carb diet or fasted?",
    a: "Avoid fasted/empty-stomach dosing — this is the riskier protocol from a hepatotoxicity standpoint. EFSA 2018 noted increased hepatotoxicity risk associated with empty-stomach dosing. Concentrated extract on empty stomach produces higher peak EGCG plasma concentrations and apparently higher liver-injury risk. Take with food (any food — adds protective food matrix and slows absorption). On low-carb diets specifically, green tea extract is sometimes marketed as a fat-burner adjunct; the modest effect doesn't justify the elevated safety risk of fasted dosing. Take with the first meal of the day if you eat breakfast; take with whatever your first eating window is on intermittent fasting protocols.",
  },
  {
    q: "Does green tea extract help with brain health?",
    a: "Modestly. EGCG has documented neuroprotective effects in cell culture and animal models — reduced beta-amyloid aggregation, antioxidant protection, anti-inflammatory effects in neural tissue. Human evidence is suggestive — observational studies in regular green tea drinkers show modest associations with reduced cognitive decline. Clinical trials of green tea extract for cognitive function or Alzheimer's prevention are limited. The L-theanine component (in brewed tea, less in standardized extracts) contributes its own calm-focus effects via GABA modulation. Practical positioning: brewed green tea is a reasonable foundational cognitive/longevity inclusion (L-theanine + modest catechin contribution); supplemental extract for cognitive purposes specifically has thinner evidence and the hepatotoxicity caveat.",
  },
];

const studies = [
  {
    title: "The Effects of Green Tea on Weight Loss and Weight Maintenance: A Meta-Analysis",
    authors: "Hursel R, Viechtbauer W, Westerterp-Plantenga MS",
    journal: "International Journal of Obesity",
    year: "2009",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/19597519/",
    summary: "A meta-analysis of 11 RCTs of catechin-caffeine mixtures for weight loss and weight maintenance. Documented modest but statistically significant weight loss (~1.3 kg) and improved weight maintenance after weight loss. Effect was most consistent in catechin-caffeine combinations (not catechins alone). The most-cited single source for green tea extract's weight management evidence base. Effect sizes are modest.",
  },
  {
    title: "EFSA Scientific Opinion on the Safety of Green Tea Catechins from Dietary Sources",
    authors: "EFSA Panel on Food Additives and Nutrient Sources Added to Food",
    journal: "EFSA Journal",
    year: "2018",
    access: "Open Access",
    url: "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2018.5239",
    summary: "The European Food Safety Authority scientific opinion concluding that EGCG intake at or above 800 mg/day from supplements is associated with increased risk of hepatotoxicity (liver injury). Documented dose-dependent relationship and elevated risk with empty-stomach dosing. Brewed green tea at typical consumption levels was NOT associated with hepatotoxicity. Foundational regulatory reference for the safety caveat that distinguishes concentrated extract from brewed tea.",
  },
  {
    title: "Hepatotoxicity from Green Tea: A Review of the Literature and Two Unpublished Cases",
    authors: "Mazzanti G, Menniti-Ippolito F, Moro PA, et al.",
    journal: "European Journal of Clinical Pharmacology",
    year: "2009",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/19198822/",
    summary: "A comprehensive review of green tea-associated hepatotoxicity case reports, documenting acute liver injury in users of concentrated green tea extract supplements. Most cases reversible with discontinuation; some required hospitalization. The case-report literature underlies the EFSA 2018 regulatory action. Reinforces the distinction between brewed tea (safe) and concentrated extract (dose-dependent risk).",
  },
  {
    title: "Efficacy of Green Tea on Weight Loss and Weight Maintenance in Overweight or Obese Adults: A Systematic Review and Meta-Analysis",
    authors: "Phung OJ, Baker WL, Matthews LJ, et al.",
    journal: "American Journal of Clinical Nutrition",
    year: "2010",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/20071648/",
    summary: "A meta-analysis of 15 RCTs of green tea catechins in overweight/obese adults. Documented modest reductions in body weight and BMI compared to placebo. Effect sizes were small (<1 kg in many trials) and clinical significance is limited. Supporting reference for the modest-but-real weight management evidence.",
  },
  {
    title: "Efficacy of a Green Tea Extract on Glucose Tolerance, Body Composition, and Markers of Health Status",
    authors: "Cardoso GA, Salgado JM, Cesar MdeC, Donado-Pestana CM",
    journal: "Journal of Medicinal Food",
    year: "2013",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/23859041/",
    summary: "An RCT of green tea extract in overweight women documenting modest improvements in glucose tolerance, body composition, and CV markers over 8 weeks. Useful reference for the broader metabolic-health applications beyond pure weight loss. Effect sizes are modest.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does green tea extract work?",
    intro:
      "Green tea extract is concentrated polyphenol content from Camellia sinensis leaves, standardized primarily for epigallocatechin gallate (EGCG) — the dominant catechin and most-studied bioactive. EGCG works through catechol-O-methyltransferase (COMT) inhibition extending norepinephrine action, antioxidant activity, and modulation of multiple signaling pathways. The thermogenic mechanism is synergistic with caffeine — the basis for catechin-caffeine combination weight management products.",
    body: [
      "COMT inhibition and prolonged norepinephrine action. EGCG inhibits catechol-O-methyltransferase (COMT), the enzyme that breaks down catecholamines including norepinephrine. Extended norepinephrine action increases sympathetic nervous system signaling, thermogenesis, and lipolysis. Mechanism for the modest fat oxidation and weight management effects.",
      "Caffeine synergy via adenosine antagonism. Caffeine antagonizes adenosine receptors, increasing sympathetic activity and norepinephrine release. Combined with EGCG&apos;s COMT inhibition, the catechin-caffeine combination produces greater thermogenic effect than either alone. Dulloo 1999 documented this mechanistic synergy; Hursel 2009 meta-analyzed the clinical effect.",
      "Fat oxidation and lipolysis. Indirectly via prolonged norepinephrine action on β-adrenergic receptors and direct effects on adipocyte lipolysis pathways. Modest effect on resting metabolic rate documented in some trials.",
      "Antioxidant activity. EGCG and other green tea catechins are potent antioxidants with high ORAC values. Mechanism for cardiovascular protective effects (oxidized LDL reduction), neuroprotective effects, and the broad cancer-prevention mechanistic rationale.",
      "Anti-inflammatory signaling. NF-κB pathway modulation, reduced inflammatory cytokine production. Contributes to cardiovascular and broader health effects.",
      "Lipid profile effects. Modest reductions in LDL cholesterol and triglycerides in supplementation trials. Effect smaller than statins but real.",
      "Insulin sensitivity. Modest improvements in glucose tolerance and insulin sensitivity in some trials, particularly in overweight populations.",
      "Hepatotoxicity mechanism at high doses. The mechanism of EGCG-associated liver injury isn&apos;t fully characterized but appears to involve oxidative stress in hepatocytes at high plasma concentrations, mitochondrial dysfunction, and possibly idiosyncratic immune response. Empty-stomach dosing produces higher peak plasma EGCG concentrations and apparently higher liver-injury risk per EFSA 2018.",
      "L-theanine contribution (brewed tea more than extract). Brewed green tea contains L-theanine, which modulates GABA signaling and provides calm-focus effects. Most standardized extracts are catechin-focused and contain little L-theanine. Practical implication: brewed tea offers L-theanine bonus; extract delivers concentrated catechins without it.",
      "Cancer prevention mechanism (preclinical). EGCG has documented apoptosis induction, antiangiogenic effects, and other mechanisms in cell culture and animal cancer models. Clinical translation for prevention or treatment is limited.",
    ],
  },
  {
    id: "research",
    title: "What does green tea extract actually do?",
    intro:
      "Green tea extract has moderate evidence for several applications and weak evidence for others. The honest summary: modest fat oxidation and weight management as a catechin-caffeine combination per Hursel 2009 meta; cardiovascular markers improvement; modest LDL reduction; mostly preclinical cancer evidence; and a meaningful hepatotoxicity safety signal at high concentrated doses per EFSA 2018.",
    body: [
      "Weight loss and maintenance — catechin-caffeine combination (Moderate). Hursel 2009 meta: modest weight loss (~1.3 kg) and improved post-loss weight maintenance with catechin-caffeine combinations. Effect sizes are small.",
      "Resting metabolic rate / thermogenesis (Modest). Documented modest increases in 24-hour energy expenditure and fat oxidation in acute trials. Translation to long-term weight outcomes is more modest.",
      "Cardiovascular markers (Moderate). Modest reductions in total cholesterol, LDL, and blood pressure in some meta-analyses. Effects smaller than statins but additive to lifestyle.",
      "Antioxidant biomarkers (Moderate). Consistent reductions in oxidative stress markers with supplementation.",
      "Anti-inflammatory effects (Moderate). Reductions in CRP and inflammatory cytokines in some trials.",
      "Insulin sensitivity / glucose tolerance (Modest). Cardoso 2013 and similar trials document modest glucose tolerance improvements in overweight populations.",
      "Cognitive function (Modest). Observational and small RCT evidence for cognitive support. Brewed tea (L-theanine + caffeine + modest catechin contribution) has clearer evidence than concentrated extract for cognitive applications.",
      "Cancer prevention (Mixed). Preclinical evidence is robust; clinical outcome evidence is mixed. Observational studies in high-tea-consuming populations associate with reduced cancer risk.",
      "Skin photoaging (Modest, mostly topical). Topical green tea catechin formulations show modest photoprotective effects.",
      "Cognitive decline prevention (Mixed). Observational studies suggest modest benefit; intervention trials limited.",
      "Dental health (Moderate). Antimicrobial and anti-inflammatory effects beneficial for oral health.",
      "Type 2 diabetes prevention (Mixed). Observational data suggestive; intervention trials small.",
      "Hepatotoxicity at high doses (Real safety signal). EFSA 2018 flagged EGCG intake ≥800 mg/day from supplements as associated with increased liver injury risk. Case-report literature (Mazzanti 2009 and updates) documents acute liver injury cases. Brewed tea at typical consumption: not associated with this risk.",
    ],
  },
  {
    id: "dosing",
    title: "How is green tea extract dosed?",
    intro:
      "Green tea extract dosing should respect the EFSA 800 mg EGCG/day safety threshold. Typical supplemental doses fall well below this. The decision tree is whether to use concentrated extract at all vs brewed green tea for daily background catechin intake.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">General supplementation.</span> 250–500 mg standardized green tea extract daily (typically 45%+ EGCG), providing approximately 100–250 mg EGCG. Stay well below 800 mg EGCG/day. Take with food.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weight management (catechin-caffeine combination per Hursel 2009).</span> 90–300 mg EGCG + 100–200 mg caffeine daily. Effect size is modest; manage expectations.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cardiovascular markers.</span> 250–500 mg standardized extract daily. Effects on LDL and BP markers emerge over 8–12 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Antioxidant / general health.</span> 200–400 mg standardized extract daily, OR 3–4 cups brewed green tea daily for the safer food-matrix delivery.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Brewed green tea alternative.</span> 3–4 cups/day delivers approximately 200–300 mg total catechins (~150–200 mg EGCG) plus L-theanine. No documented hepatotoxicity at typical consumption.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Matcha.</span> 1–2 teaspoons of matcha powder daily delivers concentrated whole-leaf catechins (~120–250 mg per teaspoon) plus L-theanine. Food-matrix safety advantage over extract.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Decaffeinated extract.</span> Loses the catechin-caffeine thermogenic synergy. Reasonable for users specifically avoiding caffeine.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">DO NOT exceed 800 mg EGCG/day from supplements.</span> EFSA 2018 hepatotoxicity threshold.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: thermogenic effects acute (within hours). Weight management effects emerge over 8–12 weeks. Cardiovascular markers improve over 8–12 weeks. Tolerance to thermogenic effect may develop over weeks of consistent use.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Empty-stomach caution.</span> EFSA 2018 noted increased hepatotoxicity risk with empty-stomach dosing. ALWAYS take with food. Don&apos;t take fasted, regardless of intermittent fasting protocol.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take green tea extract",
    intro:
      "Green tea extract is taken orally as capsules or tablets. The practical considerations are taking with food (hepatotoxicity mitigation), standardization to EGCG content (read labels), and considering whether brewed tea might be the better delivery vehicle.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1–2× daily with meals. Split higher doses across day.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With first meal of the day. AVOID evening dosing (caffeine content can disrupt sleep). AVOID empty-stomach dosing (hepatotoxicity risk per EFSA 2018).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">ALWAYS with food. Critical for hepatotoxicity mitigation. Don&apos;t take fasted regardless of dietary protocol.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Standardized extract capsules (45%+ EGCG content). Or brewed green tea / matcha for the food-matrix delivery vehicle. Avoid &quot;weight loss blend&quot; products combining high-dose EGCG with stimulants.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">EGCG content disclosed per serving. Standardization to 45%+ EGCG is typical. cGMP-certified manufacturing. Third-party tested. Reputable brands: Now Foods, Jarrow, Life Extension, Solgar, Pure Encapsulations.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Consider periodic breaks. No formal cycling required. Stop and consult clinician if liver symptoms develop (jaundice, dark urine, abdominal pain, unusual fatigue). Store cool and dry.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does green tea extract stack with?",
    intro:
      "Green tea extract pairs naturally with caffeine (the canonical thermogenic combination) and with the broader cardiovascular and metabolic supplement clusters. Avoid stacking with other hepatotoxicity-risk supplements.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Green tea extract is foundational metabolic support that doesn&apos;t directly interact with peptide pharmacology but provides modest thermogenic and cardiovascular adjunct effects. GLP-1 receptor agonists (semaglutide, tirzepatide) for weight management work at a different mechanism layer than catechin-caffeine thermogenesis — combination is mechanistically distinct, no direct interaction concern. Tesofensine and similar appetite-modulating compounds may have additive thermogenic effects with caffeine; coordinate with prescriber.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/caffeine" className="text-[#0891b2] hover:underline">Caffeine</Link>{" "}
              — the canonical thermogenic combination. Hursel 2009 documented catechin-caffeine combinations outperform either alone for weight management.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/caffeine-l-theanine" className="text-[#0891b2] hover:underline">Caffeine + L-theanine</Link>{" "}
              — adds the L-theanine calming effect typically lost in concentrated extracts.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/fish-oil" className="text-[#0891b2] hover:underline">Fish oil</Link>{" "}
              — complementary cardiovascular and anti-inflammatory pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/curcumin" className="text-[#0891b2] hover:underline">Curcumin</Link>{" "}
              — polyphenol/anti-inflammatory stacking. Compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/resveratrol" className="text-[#0891b2] hover:underline">Resveratrol</Link>{" "}
              — polyphenol longevity stacking. Compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/quercetin" className="text-[#0891b2] hover:underline">Quercetin</Link>{" "}
              — flavonoid stacking; compatible polyphenol pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/berberine" className="text-[#0891b2] hover:underline">Berberine</Link>{" "}
              — metabolic stacking. Compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Avoid stacking with other hepatotoxicity-risk supplements</span> — kava, comfrey, high-dose niacin. Don&apos;t compound liver risk.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Avoid stim-heavy &quot;weight loss&quot; blends</span> with EGCG + high-dose caffeine + synephrine + yohimbine — these products combine hepatotoxicity risk with cardiovascular risk.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Brewed green tea daily.</span> 3–4 cups/day provides much of the catechin benefit with no hepatotoxicity at typical consumption. Foundational beverage choice.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Matcha for higher per-serving catechin.</span> Whole-leaf preparation delivers more catechins per serving than brewed tea while preserving food-matrix safety advantage.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Don&apos;t rely on green tea for weight loss.</span> Effect is modest. Dietary intervention and exercise are dominant levers.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Limit alcohol if using supplemental extract.</span> Liver burden additive.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stop and check labs if liver symptoms develop.</span> Jaundice, dark urine, abdominal pain, unusual fatigue → discontinue and consult clinician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Take with food, never fasted.</span> Critical safety practice.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-existing liver disease: avoid supplemental extract entirely.</span> Brewed tea may still be acceptable; coordinate with hepatology.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Green tea extract has a real and dose-dependent hepatotoxicity signal at high concentrated doses per EFSA 2018 — this is the central safety consideration that distinguishes the supplement from brewed tea. Other considerations include caffeine-related effects, drug interactions, and the broader hepatotoxicity-mitigation practices.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI upset, nausea — particularly on empty stomach. Take with food.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Caffeine-related effects (insomnia, anxiety, jitters) if extract contains caffeine.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild headache in some users during initial adaptation.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">HEPATOTOXICITY at high doses (EFSA 2018, Mazzanti 2009).</span> EGCG intake ≥800 mg/day from supplements associated with increased liver injury risk. Case reports of acute liver injury, occasionally severe. Always take with food. Avoid in pre-existing liver disease. Stop and check labs if jaundice, dark urine, abdominal pain, or unusual fatigue develop.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Iron absorption reduction.</span> Catechins bind non-heme iron, reducing absorption. Separate iron supplementation from green tea/extract by 2+ hours. Relevant for users with iron deficiency anemia.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pregnancy and breastfeeding.</span> Brewed tea in moderation acceptable; concentrated extract not recommended. Coordinate with obstetrician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anxiety disorders.</span> Caffeine content may worsen. Choose decaffeinated extract or brewed decaf tea.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cardiovascular conditions sensitive to caffeine.</span> Choose decaffeinated extract.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anticoagulants (warfarin).</span> Vitamin K content in green tea may reduce warfarin effectiveness. Consistent intake matters.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Iron supplements.</span> Catechins chelate non-heme iron — separate by 2+ hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Beta-blockers.</span> Caffeine in extract may interact.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hepatotoxic medications.</span> Don&apos;t stack with other liver-stressing medications (chronic high-dose acetaminophen, certain antibiotics, methotrexate).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">CYP450-metabolized medications.</span> EGCG modulates several CYP enzymes; potential effects on drug metabolism. Coordinate with prescriber for complex regimens.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stimulants and other thermogenics.</span> Additive caffeine and sympathomimetic effects.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Bortezomib (chemotherapy) — EGCG may inhibit bortezomib&apos;s anticancer effect. Avoid during this chemotherapy.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about green tea extract",
    intro:
      "Green tea extract has been extensively studied but several practical questions remain — particularly around hepatotoxicity mechanism, individual responder susceptibility, and clinical-outcome translation for some claimed benefits.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Hepatotoxicity mechanism and individual susceptibility.</span> Why some users develop liver injury at supplemental EGCG doses while most do not isn&apos;t fully characterized. Genetic factors in EGCG metabolism, baseline liver status, and other susceptibility factors are areas of ongoing research.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term cancer prevention effects.</span> Observational studies in high-tea-consuming East Asian populations suggest cancer prevention benefit. Whether supplemental extract produces equivalent effects, or whether the food-matrix benefits of brewed tea are specifically protective, isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal EGCG dose for various indications.</span> Different applications likely have different optimal doses; current trials have used variable doses without precise dose-response characterization.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Tolerance development to thermogenic effect.</span> Some evidence suggests thermogenic response to catechin-caffeine combinations diminishes with chronic use. Optimal cycling vs continuous use isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Decaffeinated extract effect size.</span> Loss of catechin-caffeine synergy means decaf extract should have smaller thermogenic effect. Quantitative magnitude isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cardiovascular outcome trials at scale.</span> Surrogate markers (LDL, BP, antioxidant markers) improve with supplementation; large hard-outcome cardiovascular trials at REDUCE-IT scale don&apos;t exist.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Brewed tea vs extract head-to-head for chronic outcomes.</span> Both are used in different populations and contexts; direct head-to-head trials at matched catechin doses are limited.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy green tea extract",
    intro:
      "Green tea extract is widely available but the safety considerations narrow the practical decision: choose modest-dose standardized extracts from reputable brands, or consider brewed tea / matcha as safer delivery alternatives. AVOID weight-loss-blend products with high-dose EGCG plus stimulants.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">EGCG content disclosed per serving</span> — standardization to 45%+ EGCG is typical. Avoid products without clear EGCG content disclosure.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stay below 800 mg EGCG/day total intake</span> from supplements — EFSA 2018 hepatotoxicity threshold.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Take with food, not fasted</span> — fasted dosing increases hepatotoxicity risk per EFSA 2018.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested for purity and contaminants</span> — USP, NSF, ConsumerLab.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — Now Foods, Jarrow, Life Extension, Solgar, Pure Encapsulations, Nature&apos;s Way.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Brewed green tea</span> as primary delivery vehicle — 3–4 cups/day. Sencha, gyokuro, dragonwell, jasmine — quality teas vary. No documented hepatotoxicity at typical consumption.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Matcha (whole-leaf powdered)</span> — higher catechin per serving than brewed; food-matrix safety advantage over concentrated extract.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">AVOID weight-loss-blend products</span> combining high-dose EGCG with caffeine, synephrine, yohimbine, or DMAA. Hepatotoxicity risk plus cardiovascular risk.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid &quot;fat burner&quot; proprietary blends</span> — often combine sub-therapeutic doses of multiple ingredients with hepatotoxicity-risk profile.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Decaffeinated extract</span> for caffeine-sensitive users — accepts smaller thermogenic effect for safety.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=green+tea+extract+egcg+standardized&tag=profpeptide-20" label="Green Tea Extract" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Green Tea Extract FAQ",
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
          Hursel R, Viechtbauer W, Westerterp-Plantenga MS. The effects of green tea on weight loss and weight maintenance: a meta-analysis. Int J Obes. 2009;33(9):956-961.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/19597519/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/19597519/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          EFSA Panel on Food Additives and Nutrient Sources Added to Food. Scientific opinion on the safety of green tea catechins. EFSA Journal. 2018;16(4):e05239.{" "}
          <a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2018.5239" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2018.5239
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mazzanti G, Menniti-Ippolito F, Moro PA, et al. Hepatotoxicity from green tea: a review of the literature and two unpublished cases. Eur J Clin Pharmacol. 2009;65(4):331-341.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/19198822/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/19198822/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Phung OJ, Baker WL, Matthews LJ, et al. Effect of green tea catechins with or without caffeine on anthropometric measures: a systematic review and meta-analysis. Am J Clin Nutr. 2010;91(1):73-81.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20071648/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20071648/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Cardoso GA, Salgado JM, Cesar MdeC, Donado-Pestana CM. The effects of green tea consumption and resistance training on body composition and resting metabolic rate in overweight or obese women. J Med Food. 2013;16(2):120-127.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23859041/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23859041/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Dulloo AG, Duret C, Rohrer D, et al. Efficacy of a green tea extract rich in catechin polyphenols and caffeine in increasing 24-h energy expenditure and fat oxidation in humans. Am J Clin Nutr. 1999;70(6):1040-1045.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10584049/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/10584049/
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
      "name": "Is green tea extract dangerous for my liver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It can be at high doses. EFSA 2018 flagged EGCG intake at or above 800 mg/day from supplements as associated with increased liver injury risk. Case-report literature documents acute liver injury from concentrated extracts, particularly on empty stomach. Brewed green tea is not associated with this risk. Practical safety: cap supplemental EGCG below 800 mg/day, take with food, avoid pre-existing liver disease, stop and consult clinician if jaundice or dark urine develop."
      }
    },
    {
      "@type": "Question",
      "name": "Does green tea extract actually cause weight loss?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modestly, and primarily as a catechin-caffeine combination. Hursel 2009 meta-analysis documented modest weight loss and weight-maintenance benefit. Effect sizes are small (typically <1 kg over 12 weeks). Green tea extract is NOT a meaningful weight-loss tool independent of diet and exercise. For weight management, dietary intervention and exercise are dominant levers."
      }
    },
    {
      "@type": "Question",
      "name": "Is brewed green tea as good as the extract?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most purposes yes — and it's safer. Brewed green tea (3–4 cups/day) delivers approximately 200–300 mg total catechins along with L-theanine. No documented hepatotoxicity at typical consumption. The concentrated extract delivers higher doses faster but at the cost of the EFSA-flagged hepatotoxicity signal."
      }
    },
    {
      "@type": "Question",
      "name": "How much green tea extract should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "250–500 mg standardized extract daily (45%+ EGCG), providing ~100–250 mg EGCG. Stay well below 800 mg EGCG/day per EFSA safety threshold. Take with food. Brewed tea is a safer alternative delivery vehicle."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Green Tea Extract: EGCG-Caffeine Thermogenesis vs the EFSA 800 mg Hepatotoxicity Signal",
  "description": "Green tea extract dosing — modest fat oxidation and weight maintenance with catechin-caffeine combination per Hursel 2009. Prominent EFSA 2018 hepatotoxicity caveat at EGCG ≥800 mg/day; brewed tea is safe, concentrated extract carries dose-dependent liver injury risk.",
  "url": "https://profpeptide.com/supplements/green-tea-extract",
  "datePublished": "2026-05-23T00:00:00Z",
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
    { "@type": "ListItem", "position": 3, "name": "Green Tea Extract" }
  ]
};

export default function GreenTeaExtractPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Green Tea Extract</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 28, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> GTE, EGCG (epigallocatechin gallate, the dominant catechin), Camellia sinensis extract, standardized green tea polyphenols; food-matrix alternatives: brewed green tea, matcha (whole-leaf powdered)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Concentrated polyphenol extract / catechol-O-methyltransferase (COMT) inhibitor extending norepinephrine action / antioxidant / catechin-caffeine combination thermogenic / dose-dependent hepatotoxicity-risk supplement at high concentrated doses
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Moderate efficacy with prominent safety caveat. <span className="font-semibold">Moderate</span>: modest fat oxidation and thermogenesis (catechin-caffeine combination per Hursel 2009 meta of 11 RCTs); modest weight loss and weight-maintenance benefit (Phung 2010 confirms); cardiovascular markers (LDL, BP); antioxidant biomarkers; anti-inflammatory effects. <span className="font-semibold">Modest</span>: cognitive function, glycemic control. <span className="font-semibold">Mixed</span>: cancer prevention (preclinical evidence robust; clinical translation limited). <span className="font-semibold">Critical SAFETY signal</span>: EFSA 2018 scientific opinion flagged EGCG intake ≥800 mg/day from supplements as associated with increased hepatotoxicity risk (Mazzanti 2009 case-report literature documents acute liver injury cases). <span className="font-semibold">Brewed green tea at typical consumption (3–4 cups/day): not associated with hepatotoxicity</span> — the food-matrix distinguishes safe daily consumption from concentrated extract risk.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is green tea extract?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Green tea extract is a concentrated form of bioactive polyphenols from Camellia sinensis leaves, typically standardized for epigallocatechin gallate (EGCG) — the dominant catechin and primary driver of green tea&apos;s metabolic and cardiovascular effects. Green tea has been consumed in Asia for over a thousand years; the past 30 years of research have documented modest metabolic, cardiovascular, antioxidant, and possible cognitive benefits. The honest evidence summary: <span className="font-semibold">Moderate effects</span> on fat oxidation, thermogenesis, and weight management as a catechin-caffeine combination per Hursel 2009 meta-analysis (modest effect sizes — typically &lt;1 kg weight loss over 12 weeks; not a meaningful weight-loss tool independent of diet and exercise); cardiovascular markers (LDL, BP); antioxidant biomarkers; anti-inflammatory effects. <span className="font-semibold">Modest</span> for cognitive function and glycemic control. <span className="font-semibold">Mixed</span> for cancer prevention (preclinical evidence is robust but clinical outcome translation is limited). The central safety issue distinguishing this supplement from most others — and the reason this page surfaces it prominently — is the <span className="font-semibold">dose-dependent hepatotoxicity signal at high concentrated doses</span>. <span className="font-semibold">EFSA 2018 scientific opinion flagged EGCG intake at or above 800 mg/day from supplements as associated with increased risk of liver injury</span> (Mazzanti 2009 review and subsequent updates document acute liver injury case reports). Risk is dose-dependent and elevated with empty-stomach dosing. Critical distinction: <span className="font-semibold">brewed green tea at typical consumption (3–4 cups/day delivers ~200–300 mg total catechins) has NOT been associated with hepatotoxicity</span>. The risk is specifically with concentrated supplemental extract at high doses. Practical safety guidance: (1) Cap supplemental EGCG well below 800 mg/day. (2) Take with food (never fasted). (3) Avoid combination weight-loss products with high-dose EGCG plus stimulants (compounded liver and cardiovascular risk). (4) Stop and consult clinician if jaundice, dark urine, abdominal pain, or unusual fatigue develops. (5) Pre-existing liver disease: avoid supplemental extract entirely. (6) Consider brewed green tea or matcha as safer delivery vehicles for daily catechin intake. The thermogenic mechanism is synergistic between EGCG (COMT inhibition, prolonging norepinephrine action) and caffeine (adenosine antagonism, increasing sympathetic activity) — basis for catechin-caffeine combinations outperforming either alone in Hursel 2009. Standard supplemental dose: 250–500 mg standardized extract (typically 45%+ EGCG) providing approximately 100–250 mg EGCG.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest weight loss and weight-maintenance support (catechin-caffeine combination per Hursel 2009)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest fat oxidation and thermogenesis (Dulloo 1999 mechanism)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cardiovascular markers: LDL reduction, modest BP reduction</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Antioxidant protection (high ORAC values)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory effects (CRP, inflammatory cytokine reduction)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest glycemic control improvement in overweight/diabetic populations</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Possible neuroprotective effects (mostly preclinical)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Dental health (antimicrobial)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 250–500 mg standardized green tea extract daily (45%+ EGCG; provides ~100–250 mg EGCG). Stay well below 800 mg EGCG/day per EFSA safety threshold. ALWAYS take with food. Alternative delivery: 3–4 cups brewed green tea daily (safer food-matrix vehicle, no documented hepatotoxicity).
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Watch for:</span> HEPATOTOXICITY at high doses (EFSA 2018 — EGCG ≥800 mg/day associated with liver injury); empty-stomach dosing increases risk; pre-existing liver disease (avoid extract entirely); iron absorption reduction (separate iron supplements by 2+ hours); caffeine-related effects (insomnia, anxiety) with caffeinated extract; avoid stim-heavy weight-loss blends combining EGCG + caffeine + synephrine + yohimbine; pregnancy/breastfeeding extract not recommended (brewed tea moderate consumption acceptable); CYP450 medication interactions; bortezomib chemotherapy interaction.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=green+tea+extract+egcg+standardized&tag=profpeptide-20" label="Green Tea Extract" />
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
        {["EGCG", "Catechin-Caffeine", "EFSA 2018", "Hepatotoxicity", "Thermogenesis", "Hursel 2009"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/caffeine" className="text-sm font-medium text-[#0891b2] hover:underline">Caffeine</Link>
          <Link href="/supplements/caffeine-l-theanine" className="text-sm font-medium text-[#0891b2] hover:underline">Caffeine + L-Theanine</Link>
          <Link href="/supplements/curcumin" className="text-sm font-medium text-[#0891b2] hover:underline">Curcumin</Link>
          <Link href="/supplements/resveratrol" className="text-sm font-medium text-[#0891b2] hover:underline">Resveratrol</Link>
          <Link href="/supplements/quercetin" className="text-sm font-medium text-[#0891b2] hover:underline">Quercetin</Link>
          <Link href="/supplements/berberine" className="text-sm font-medium text-[#0891b2] hover:underline">Berberine</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Green Tea Extract" pagePath="/supplements/green-tea-extract" />
    </div>
    </>
  );
}
