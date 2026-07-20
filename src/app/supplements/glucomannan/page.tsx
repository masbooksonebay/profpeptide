import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/glucomannan",
  title: "Glucomannan: Does It Work? Benefits, Dosage & Safety",
  description:
    "What glucomannan actually does: modest cholesterol benefit, contested weight loss, how to dose it (1–4 g), and the choking risk you must avoid. Evidence-based.",
});

const faqs = [
  {
    q: "Does glucomannan actually cause weight loss?",
    a: "Contested — the evidence is more mixed than the marketing suggests. EFSA approved a weight-loss claim for glucomannan at 3 g/day in an energy-restricted diet based on earlier trials. BUT Onakpoya 2014 systematic review and meta-analysis of RCTs found NO statistically significant weight loss vs placebo. Earlier individual trials (Sood 2008 and others) suggested modest effect, but the meta-analytic picture is weaker. Honest framing: glucomannan may produce modest satiety effects that could support weight loss as part of an energy-restricted diet — but the standalone weight-loss benefit is contested. Don't expect dramatic results from glucomannan alone. Dietary intervention, exercise, and overall caloric balance are the dominant levers. For users specifically using glucomannan for weight management: take 1 g approximately 30 minutes before meals with ample water; energy-restricted diet is critical for any benefit.",
  },
  {
    q: "Is glucomannan a choking hazard?",
    a: "Yes, this is the central safety concern — and the reason this page surfaces it prominently. Glucomannan is a soluble fiber that absorbs up to 50 times its weight in water, forming a gel. If glucomannan is taken without ample water OR if a tablet expands in the esophagus before reaching the stomach, it can cause esophageal obstruction — a medical emergency. The FDA has cited cases; some markets restrict glucomannan tablet sales for this reason; Australia required warning labels on glucomannan tablets. Critical safety practices: (1) NEVER take glucomannan tablets without first drinking a large glass of water (8+ oz). (2) Powder or capsule forms are generally safer than tablets — less expansion risk in the esophagus. (3) Take 30+ minutes before meals to allow gastric expansion before food. (4) Do not take with limited fluid intake. (5) Users with swallowing difficulties (dysphagia) should avoid glucomannan entirely. (6) Stop and seek immediate medical attention if chest pain or difficulty swallowing develops after taking.",
  },
  {
    q: "How much glucomannan should I take?",
    a: "1–4 g/day, taken 30 minutes before meals with plenty of water. For cholesterol-lowering: EFSA-approved claim at 4 g/day for blood cholesterol maintenance. For weight management (contested): EFSA-approved claim at 3 g/day in an energy-restricted diet — though the Onakpoya 2014 meta-analysis didn't confirm significant weight loss. Practical protocol: 1 g (or one serving) 30 minutes before each major meal, taken with 8+ oz of water. Start with lower dose to assess GI tolerance — full doses commonly cause gas and bloating. Don't exceed 4 g/day. Powder form (mixed in water) is safer than tablets for esophageal expansion risk.",
  },
  {
    q: "What does glucomannan do for cholesterol?",
    a: "Modestly reduces LDL cholesterol — Moderate evidence. EFSA approved a health claim for glucomannan maintaining normal blood cholesterol at 4 g/day. Mechanism: glucomannan is a viscous soluble fiber that binds bile acids in the intestine, preventing reabsorption and increasing fecal excretion. The liver synthesizes new bile acids from cholesterol, reducing LDL. Effect sizes are modest — typically 5–10% LDL reduction. Comparable to other soluble fibers (psyllium). Sood 2008 meta documented ~16 mg/dL LDL reduction across trials. Practical positioning: glucomannan is a reasonable adjunct for LDL management, especially in users with mild cholesterol elevation who want a dietary intervention. Not a substitute for statins in users with high cardiovascular risk.",
  },
  {
    q: "Why does glucomannan make me bloated and gassy?",
    a: "Because soluble viscous fibers ferment in the colon, producing gas as a byproduct of bacterial fermentation (similar mechanism to prebiotics). This is unavoidable in principle — the fiber's mechanism of action produces these GI effects. Practical mitigations: (1) Start with lower dose (0.5–1 g) and build up over 2–4 weeks; gut microbiome adapts and gas typically reduces. (2) Take with ample water (also critical for choking safety). (3) Split daily total across multiple doses with meals rather than one large dose. (4) Accept some persistent GI effects — they're part of how the supplement works. If gas/bloating remains severe after adaptation, glucomannan may not be tolerable for you; psyllium or other soluble fibers may be alternatives.",
  },
  {
    q: "Will glucomannan help with constipation?",
    a: "Yes, reasonably effective. Glucomannan is a bulking soluble fiber that absorbs water in the colon, increasing stool bulk and softness — improving bowel movement frequency and consistency. Effect is well-documented and generally reliable. Practical dose for constipation: 3–4 g/day split across meals, with ample water (water is critical for the fiber to work properly). Effect emerges over 1–2 weeks. Glucomannan works alongside other constipation interventions (adequate hydration, dietary fiber, physical activity). Other soluble fibers (psyllium) have similar effect; choice is largely preference. Critical: take with water to prevent the esophageal obstruction risk and to support the bulking mechanism.",
  },
  {
    q: "Is glucomannan the same as konjac?",
    a: "Yes — glucomannan IS the dominant polysaccharide in konjac root (Amorphophallus konjac), a tuber traditionally used in East Asian cuisine. Konjac flour, shirataki noodles, and konjac gel are all glucomannan-based foods. Supplemental glucomannan is the concentrated and purified fiber extracted from konjac root. Whole-food konjac (shirataki noodles, konjac flour) provides similar fiber benefits with less concentrated dosing — a food approach to glucomannan intake. Practical hierarchy: shirataki noodles or konjac flour as food inclusions; supplemental glucomannan capsules/powder for concentrated dosing. Whole-food konjac has lower choking risk than supplemental tablets/capsules because the gel is already formed in food preparation.",
  },
  {
    q: "Are there other safety concerns besides choking?",
    a: "Several practical considerations: (1) Choking/esophageal obstruction (covered above) — the central concern. (2) Drug absorption interference — glucomannan can bind oral medications and reduce absorption. Separate medication timing by 2+ hours. (3) Hypoglycemia in diabetic users — modest glucose-lowering effect may compound with diabetes medications. Monitor. (4) Pregnancy and breastfeeding safety not well-characterized; coordinate with obstetrician. (5) Bowel obstruction risk in users with pre-existing motility disorders or partial obstruction. (6) Mineral absorption — viscous fibers can modestly reduce mineral absorption; ensure separation from mineral supplements (calcium, iron, zinc). For typical healthy users taking standard doses with ample water: glucomannan is generally well-tolerated. The choking and drug-interference issues are the main practical concerns.",
  },
];

const studies = [
  {
    title: "The Use of Glucomannan as a Dietary Supplement for Body Weight Reduction: A Systematic Review of Randomised Clinical Trials",
    authors: "Onakpoya I, Posadzki P, Ernst E",
    journal: "British Journal of Nutrition",
    year: "2014",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/24326129/",
    summary: "A systematic review and meta-analysis of 9 RCTs (n=391) of glucomannan supplementation for weight loss. Found NO statistically significant effect on body weight vs placebo. The foundational evidence-based refutation of the popular weight-loss claim — contrasts with EFSA's earlier approval of a 3 g/day weight-loss claim that the subsequent meta-analytic evidence didn't support.",
  },
  {
    title: "Effect of Glucomannan on Plasma Lipid and Glucose Concentrations, Body Weight, and Blood Pressure: Systematic Review and Meta-Analysis",
    authors: "Sood N, Baker WL, Coleman CI",
    journal: "American Journal of Clinical Nutrition",
    year: "2008",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/18842808/",
    summary: "A meta-analysis of 14 RCTs documenting glucomannan supplementation produces meaningful reductions in total cholesterol (~19 mg/dL) and LDL cholesterol (~16 mg/dL), as well as modest reductions in body weight (~0.8 kg) and fasting glucose. The cholesterol-lowering effects are the more robust finding; weight loss effects are smaller and were contradicted by the later Onakpoya 2014 meta.",
  },
  {
    title: "EFSA Scientific Opinion on Glucomannan",
    authors: "EFSA Panel on Dietetic Products, Nutrition and Allergies",
    journal: "EFSA Journal",
    year: "2010",
    access: "Open Access",
    url: "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2010.1798",
    summary: "EFSA approved a health claim for glucomannan at 3 g/day in an energy-restricted diet contributing to weight loss, and at 4 g/day for maintaining normal blood cholesterol concentrations. This regulatory approval predates the Onakpoya 2014 meta that found no significant weight effect. Foundational reference for the regulatory framing of glucomannan health claims.",
  },
  {
    title: "Beneficial Health Characteristics of Native and Hydrolysed Konjac Glucomannan",
    authors: "Tester RF, Al-Ghazzewi FH",
    journal: "Journal of the Science of Food and Agriculture",
    year: "2016",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/27931870/",
    summary: "A review of konjac glucomannan effects on metabolic markers including antioxidant status, lipid profile, and glucose tolerance. Documents the bile-acid-binding mechanism behind the cholesterol-lowering effect and the satiety mechanism behind weight-management claims. Provides mechanistic context for both established and contested clinical claims.",
  },
  {
    title: "Esophageal Obstruction from a Glucomannan-Containing Diet Pill",
    authors: "Vanderbeek PB, Fasano C, O'Malley G, Hornstein J",
    journal: "Clinical Toxicology",
    year: "2007",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18072150/",
    summary: "A case report of esophageal obstruction from a glucomannan-containing weight-loss tablet — the type of clinical case that underlies the safety concern around tablet formulations and inadequate water intake. The fiber's water-absorbing and gel-forming properties create real obstruction risk when ingested without ample water or when taken in slow-dissolving tablet form. Foundational reference for the practical choking safety guidance.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does glucomannan work?",
    intro:
      "Glucomannan is a viscous soluble fiber from konjac root that absorbs up to 50 times its weight in water, forming a gel. The mechanism centers on three effects: gastric expansion and satiety, bile acid binding and cholesterol reduction, and bulking/laxation. The water-absorbing property is also the basis of the central safety concern (choking/esophageal obstruction).",
    body: [
      "Water absorption and gel formation. Glucomannan absorbs water at up to 50 times its weight, forming a viscous gel. This property drives the mechanism — and the safety concern. In the stomach, gel formation produces gastric expansion and satiety signaling. In the colon, the gel provides stool bulk and softening.",
      "Satiety mechanism. Gastric expansion from the glucomannan gel triggers stretch-receptor signaling and slows gastric emptying — both contribute to satiety. Mechanism for the satiety claims; clinical translation to weight loss is more modest than the mechanism suggests.",
      "Bile acid binding and cholesterol reduction. Glucomannan binds bile acids in the intestine, preventing their reabsorption in the terminal ileum and increasing fecal bile acid excretion. The liver synthesizes new bile acids from cholesterol, reducing circulating LDL. This is the mechanism behind the Sood 2008 meta documenting ~16 mg/dL LDL reduction.",
      "Modest glucose-modulating effects. The viscous gel slows carbohydrate absorption, modestly reducing postprandial glucose response. Bile acid binding may also modulate hepatic glucose metabolism. Effect smaller than for established glucose-lowering interventions.",
      "Colonic fermentation. Some glucomannan is fermented by colonic bacteria, producing short-chain fatty acids (SCFAs) similar to other prebiotic fibers. Mechanism for some gut health benefits and the gas/bloating side effects.",
      "Choking and esophageal obstruction mechanism (safety concern). If glucomannan expands in the esophagus before reaching the stomach — as can happen with slow-dissolving tablets or inadequate water intake — the gel can obstruct the esophagus, a medical emergency. The very property that drives the satiety mechanism is also the safety concern.",
      "Modest mineral absorption interference. Like other viscous fibers, glucomannan can reduce absorption of some minerals (iron, zinc, calcium). Separate timing from mineral supplements.",
      "Drug absorption interference. Glucomannan can bind oral medications and reduce absorption. Separate timing by 2+ hours from medications.",
    ],
  },
  {
    id: "research",
    title: "What does glucomannan actually do?",
    intro:
      "Glucomannan has Moderate evidence for cholesterol reduction and constipation relief, Contested evidence for weight loss (regulatory approval vs subsequent meta-analytic null finding), and a real choking safety signal. Honest framing matters because the popular weight-loss claim significantly exceeds the meta-analytic evidence.",
    body: [
      "LDL and total cholesterol reduction (Moderate). Sood 2008 meta of 14 RCTs documented ~16 mg/dL LDL reduction and ~19 mg/dL total cholesterol reduction. EFSA approved cholesterol-maintenance health claim at 4 g/day. Effect is modest but consistent.",
      "Weight loss (Contested — EFSA approved claim vs Onakpoya 2014 meta null). EFSA approved a 3 g/day claim in energy-restricted diets. Sood 2008 meta documented modest ~0.8 kg weight loss. Onakpoya 2014 systematic review and meta-analysis of 9 RCTs found NO statistically significant weight loss vs placebo. Practical implication: glucomannan as a standalone weight loss tool has weak support; possible modest benefit as part of an energy-restricted diet.",
      "Constipation relief (Moderate). Glucomannan's bulking and water-binding effects reliably improve stool frequency and consistency. Comparable to other soluble fibers (psyllium).",
      "Satiety and appetite suppression (Moderate). Subjective satiety improvements consistently documented; translation to weight loss is more variable.",
      "Modest glucose tolerance improvement (Modest). Reduced postprandial glucose response documented. Effect smaller than dedicated glycemic-control supplements.",
      "Blood pressure (Modest). Some meta-analyses show modest BP reductions; smaller and less consistent than for direct BP-lowering interventions.",
      "Type 2 diabetes adjunct (Moderate). Combination of glucose response reduction and modest weight effects useful in diabetic populations as part of comprehensive management.",
      "Pediatric constipation (Modest). Some pediatric trials document benefit; pediatrician supervision recommended.",
      "Choking / esophageal obstruction (Real safety signal). FDA case reports; tablet formulations restricted in some markets; Vanderbeek 2007 and similar case reports. The bulking mechanism that drives the satiety effect also creates the safety concern. Practical mitigation: powder/capsule preferred over tablets; always take with ample water.",
      "Cancer prevention (Speculative). Some preclinical evidence for cancer prevention via bile acid binding mechanisms; clinical outcome translation is limited.",
    ],
  },
  {
    id: "dosing",
    title: "How is glucomannan dosed?",
    intro:
      "Glucomannan dosing depends on indication but always requires ample water co-administration. EFSA-approved doses: 4 g/day for cholesterol-maintenance; 3 g/day for weight management in energy-restricted diet. Standard protocol: 1 g 30 minutes before each major meal with 8+ oz water.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cholesterol management (EFSA cholesterol-maintenance claim).</span> 4 g/day total, split across 3 doses before meals. Each dose with 8+ oz water. Effect on LDL emerges over 8–12 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weight management (EFSA claim; contested by Onakpoya 2014 meta).</span> 3 g/day before meals in an energy-restricted diet. Manage expectations — meta-analytic evidence is null for significant weight loss.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Constipation.</span> 3–4 g/day split across meals with ample water. Effect emerges over 1–2 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Initiation protocol.</span> Start at 0.5–1 g/day for first week; build to target over 2–4 weeks to assess GI tolerance (gas, bloating common).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing.</span> 30 minutes before meals for satiety/weight management. Anytime with water for cholesterol/constipation indications.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Water co-administration: critical.</span> 8+ oz water with each dose. NEVER dry-swallow tablets. Inadequate water creates choking risk.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Form: powder or capsules preferred over tablets.</span> Powder mixed in water before consumption is safest. Capsules expand more slowly than tablets but still require water. Tablets carry the highest esophageal obstruction risk.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Medication separation.</span> 2+ hours apart from oral medications (binding interference).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Maximum daily dose.</span> Don't exceed 4 g/day routinely.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: cholesterol effects 8–12 weeks. Constipation effects 1–2 weeks. Satiety effects acute (with each dose). Weight outcomes (where they occur): 8–12 weeks in conjunction with dietary intervention.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Food alternative.</span> Shirataki noodles, konjac flour, and konjac gel provide glucomannan in food form with lower choking risk (gel pre-formed in food prep). Whole-food approach is reasonable for users who don&apos;t need concentrated supplemental doses.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take glucomannan",
    intro:
      "Glucomannan is taken orally as powder, capsules, or tablets. The single most important practical consideration is water co-administration — never take any form of glucomannan without ample water (8+ oz). Powder or capsules are preferred over tablets due to esophageal obstruction risk.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">2–3× daily before meals. Split daily total across servings rather than one large dose.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">30 minutes before each major meal — allows gastric expansion before food and supports satiety mechanism.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Water</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">8+ oz water with EVERY dose — non-negotiable. The choking and esophageal obstruction risk is real with inadequate water. NEVER dry-swallow tablets.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Powder (mix in water before consuming) is safest. Capsules acceptable. Tablets carry the highest esophageal obstruction risk and are restricted in some markets — generally avoid.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Konjac glucomannan content disclosed (high-purity products are 90%+ glucomannan). cGMP-certified manufacturing. Third-party tested. Reputable brands: Now Foods, Solgar, NutriCost.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling required. Store in dry conditions; glucomannan is hygroscopic. Discontinue if difficulty swallowing or chest pain develop.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does glucomannan stack with?",
    intro:
      "Glucomannan pairs naturally with the cardiovascular and metabolic supplement clusters. Avoid stacking with oral medications close in time (binding interference) and other fibers that compound bulking effects without additive benefit.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Glucomannan is metabolic/cardiovascular foundational support that doesn&apos;t directly interact with peptide pharmacology. GLP-1 receptor agonists (semaglutide, tirzepatide) for weight management work through central appetite regulation — glucomannan&apos;s satiety mechanism is peripheral (gastric expansion). The combination is mechanistically distinct without strong evidence for additive benefit; GLP-1 agonists provide much larger effect sizes than glucomannan for weight management.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/fish-oil" className="text-[#3A759F] hover:underline">Fish oil</Link>{" "}
              — cardiovascular co-supplementation. Different mechanism. Compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/berberine" className="text-[#3A759F] hover:underline">Berberine</Link>{" "}
              — additional cholesterol-lowering mechanism. Compatible metabolic pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/green-tea-extract" className="text-[#3A759F] hover:underline">Green tea extract</Link>{" "}
              — thermogenic mechanism. Both modest individually; combination is modest plus modest.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/prebiotics" className="text-[#3A759F] hover:underline">Prebiotics</Link>{" "}
              — glucomannan is itself a partially-prebiotic fiber. Additional prebiotic fibers add to gas/bloating without strong additive benefit.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/probiotics" className="text-[#3A759F] hover:underline">Probiotics</Link>{" "}
              — gut microbiome support. Compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/chromium" className="text-[#3A759F] hover:underline">Chromium</Link>{" "}
              — metabolic stacking. Compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Avoid stacking with iron, calcium, zinc supplements close in time</span> — viscous fibers reduce mineral absorption. Separate by 2+ hours.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Don&apos;t double up on viscous fibers</span> — psyllium + glucomannan together compounds bulking effects without additive cholesterol benefit.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Energy-restricted diet (if using for weight loss).</span> Per EFSA-approved 3 g/day claim and the most-positive trials — weight loss benefit is conditional on caloric deficit, not standalone.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Ample water intake throughout the day.</span> Beyond per-dose water — overall hydration supports fiber function and safety.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Don&apos;t expect dramatic weight loss.</span> Onakpoya 2014 meta is null. Manage expectations.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Consider whole-food konjac alternatives.</span> Shirataki noodles, konjac flour. Safer delivery vehicle with similar fiber benefits.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Discontinue if difficulty swallowing develops.</span> Seek immediate medical attention for chest pain after dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid tablet formulations.</span> Powder or capsules preferred for safety.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Coordinate timing with medications.</span> 2+ hours separation for oral medications.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Glucomannan is generally safe at standard doses with adequate water co-administration. The central safety concern is choking/esophageal obstruction without sufficient water — particularly with tablet forms. Other practical considerations include GI bloating and drug absorption interference.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Gas and bloating — particularly during initial weeks. Builds with gradual dose increase.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Loose stools or modest diarrhea at higher doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sensation of fullness (the intended satiety mechanism).</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">CHOKING / esophageal obstruction.</span> The central safety concern. FDA case reports; tablet forms restricted in some markets; Vanderbeek 2007 case-report literature. Prevention: ample water (8+ oz) with EVERY dose; avoid tablets; users with dysphagia avoid entirely; seek immediate medical attention for chest pain or difficulty swallowing after dosing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Bowel obstruction.</span> Risk in users with pre-existing motility disorders, partial obstruction, or post-surgical bowel changes. Coordinate with GI.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pregnancy and breastfeeding.</span> Safety not well-characterized; coordinate with obstetrician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pediatric use.</span> Choking risk higher in children; only use under pediatrician supervision for specific indications.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Severe diarrhea at very high doses</span> — rare but possible.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral medications generally.</span> Glucomannan binds oral medications and reduces absorption. Separate by 2+ hours.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diabetes medications (insulin, sulfonylureas).</span> Additive glucose-lowering effect. Monitor blood glucose; may need dose adjustment.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Levothyroxine and thyroid medications.</span> Reduced absorption. Take 4+ hours apart.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anticoagulants (warfarin).</span> Modest interaction; consistent intake matters for INR stability.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Iron, zinc, calcium supplements — separate by 2+ hours (mineral absorption interference).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Fat-soluble vitamins — modest absorption interference; separate timing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other fibers (psyllium, methylcellulose) — additive bulking; usually no additive cholesterol benefit.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about glucomannan",
    intro:
      "Glucomannan has been studied moderately but several practical questions remain — particularly around the EFSA vs Onakpoya weight-loss evidence discrepancy and optimal formulation/dosing for safety.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">EFSA weight-loss claim vs Onakpoya 2014 meta null finding.</span> EFSA approved a health claim based on earlier evidence; the subsequent meta-analysis found no significant weight loss. Whether the regulatory claim should be revised, or whether specific subgroups respond meaningfully where the broader population doesn&apos;t, isn&apos;t fully resolved.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term outcomes for cholesterol reduction.</span> Modest LDL reduction is documented in 8–12 week trials. Whether this translates to meaningful cardiovascular event reduction over years isn&apos;t demonstrated at hard-outcome trial scale.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal formulation for safety.</span> Powder is safer than capsules which are safer than tablets for choking risk. Whether further formulation innovation could reduce the obstruction risk while preserving efficacy isn&apos;t well-characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Glucomannan vs other soluble fibers head-to-head.</span> Psyllium has similar cholesterol effects with less choking concern. Whether glucomannan offers any clear advantage over psyllium for general cardiovascular/cholesterol management isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Whole-food konjac vs supplemental glucomannan.</span> Shirataki noodles and konjac flour deliver glucomannan with lower safety risk. Whether food-form intake produces equivalent metabolic outcomes at matched fiber content isn&apos;t well-characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Individual responder identification.</span> Some users see meaningful satiety/weight effects; others see minimal effect. Determinants of response aren&apos;t precisely characterized.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy glucomannan",
    intro:
      "Glucomannan is widely available but form selection matters for safety. Powder or capsules are preferred over tablets due to esophageal obstruction risk. EFSA-claim-equivalent doses (3–4 g/day) require multi-capsule daily consumption — powder is more cost-efficient at these doses.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">High-purity konjac glucomannan (90%+ glucomannan content)</span> disclosed on label.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Powder form preferred for safety</span> — mix in water before consumption; pre-formed gel reduces esophageal expansion risk.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Capsules acceptable</span> — but still require ample water co-administration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">AVOID tablet formulations</span> — highest esophageal obstruction risk; restricted in some markets.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested for purity</span> — heavy metals, microbial.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — Now Foods (powder available), Solgar, NutriCost, BulkSupplements (cost-efficient powder).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Whole-food alternatives</span> — shirataki noodles (Skinny Pasta, House Foods), konjac flour (Anthony&apos;s Goods). Food-form delivery with lower safety risk.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid weight-loss-blend products</span> — combine sub-therapeutic glucomannan with stimulants without trial validation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cost note:</span> at 3–4 g/day target, powder is dramatically more cost-efficient than capsules (capsules would require 6–10 per day).</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=glucomannan+powder+konjac&tag=profpeptide-20" label="Glucomannan" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Glucomannan FAQ",
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
          Onakpoya I, Posadzki P, Ernst E. The use of glucomannan as a dietary supplement for body weight reduction: a systematic review of randomised clinical trials. Br J Nutr. 2014;111(8):1326-1336.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24326129/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24326129/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sood N, Baker WL, Coleman CI. Effect of glucomannan on plasma lipid and glucose concentrations, body weight, and blood pressure: systematic review and meta-analysis. Am J Clin Nutr. 2008;88(4):1167-1175.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18842808/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18842808/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific opinion on the substantiation of health claims related to konjac mannan (glucomannan). EFSA Journal. 2010;8(10):1798.{" "}
          <a href="https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2010.1798" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2010.1798
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Vanderbeek PB, Fasano C, O&apos;Malley G, Hornstein J. Esophageal obstruction from a hygroscopic pharmacobezoar containing glucomannan. Clin Toxicol. 2007;45(1):80-82.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18072150/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18072150/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tester RF, Al-Ghazzewi FH. Beneficial health characteristics of native and hydrolysed konjac (Amorphophallus konjac) glucomannan. J Sci Food Agric. 2016;96(10):3283-3291.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/27931870/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/27931870/
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
      "name": "Does glucomannan actually cause weight loss?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contested. EFSA approved a 3 g/day weight-loss claim in an energy-restricted diet based on earlier trials. Onakpoya 2014 systematic review and meta-analysis of RCTs found NO statistically significant weight loss vs placebo. Don't expect dramatic results from glucomannan alone."
      }
    },
    {
      "@type": "Question",
      "name": "Is glucomannan a choking hazard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is the central safety concern. Glucomannan absorbs up to 50 times its weight in water, forming a gel. If taken without ample water OR if a tablet expands in the esophagus before reaching the stomach, it can cause esophageal obstruction. ALWAYS take with 8+ oz water. Powder/capsules safer than tablets."
      }
    },
    {
      "@type": "Question",
      "name": "How much glucomannan should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1–4 g/day, taken 30 minutes before meals with plenty of water. EFSA-approved doses: 4 g/day for cholesterol-maintenance; 3 g/day for weight management in energy-restricted diet. Start with lower dose to assess GI tolerance."
      }
    },
    {
      "@type": "Question",
      "name": "Does glucomannan help cholesterol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modestly. EFSA approved a health claim for blood cholesterol maintenance at 4 g/day. Glucomannan binds bile acids in the intestine; liver synthesizes new bile acids from cholesterol. Sood 2008 meta confirmed ~16 mg/dL LDL reduction. Effect smaller than statins."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Glucomannan: Cholesterol Lowering (Moderate), Weight Loss (Contested), Choking Risk",
  "description": "Glucomannan dosing (1–4 g) — Moderate LDL-cholesterol reduction (EFSA cholesterol-maintenance claim); weight loss CONTESTED (Onakpoya 2014 meta null vs EFSA 3 g/day claim); critical choking/esophageal obstruction safety with inadequate water.",
  "url": "https://profpeptide.com/supplements/glucomannan",
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
    { "@type": "ListItem", "position": 3, "name": "Glucomannan" }
  ]
};

export default function GlucomannanPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Glucomannan</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 28, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> Konjac glucomannan, konjac mannan, konjac root fiber (Amorphophallus konjac); food-form delivery: shirataki noodles, konjac flour, konjac gel
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Supplement Class:</span> Viscous soluble fiber / bile acid binder / appetite/satiety supplement via gastric expansion / 50x water-absorbing gel-forming polysaccharide / choking-risk supplement at inadequate water intake (tablet forms restricted in some markets)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Evidence Tier:</span> Moderate cholesterol-lowering (Sood 2008 meta — ~16 mg/dL LDL reduction; EFSA-approved cholesterol-maintenance claim at 4 g/day). Moderate constipation relief. Moderate satiety/appetite suppression. <span className="font-semibold">CONTESTED weight loss</span> — EFSA approved 3 g/day weight-loss claim in energy-restricted diet, BUT Onakpoya 2014 systematic review and meta-analysis of 9 RCTs found NO statistically significant weight loss vs placebo. Modest glycemic control. <span className="font-semibold">Critical safety signal</span>: esophageal obstruction / choking risk if taken without ample water — particularly with tablet forms (FDA case reports; restricted in some markets; Vanderbeek 2007 representative case-report literature).
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is glucomannan?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Glucomannan is a viscous soluble fiber extracted from the root of the konjac plant (Amorphophallus konjac) — the dominant polysaccharide in konjac, used in East Asian cuisine for centuries as shirataki noodles, konjac flour, and konjac gel. Supplemental glucomannan is the concentrated and purified fiber, sold as powder, capsules, and (more problematically) tablets. The defining physical property is extraordinary water absorption: glucomannan can absorb up to 50 times its weight in water, forming a viscous gel. This property drives both the mechanism of action and the central safety concern. In the gastrointestinal tract, gel formation produces gastric expansion and satiety, binds bile acids reducing LDL cholesterol, and provides stool bulking for constipation relief. The honest evidence summary requires careful nuance because the popular reputation diverges from the meta-analytic evidence on several points. <span className="font-semibold">Moderate evidence</span> covers LDL and total cholesterol reduction (Sood 2008 meta of 14 RCTs documented ~16 mg/dL LDL reduction; EFSA approved a cholesterol-maintenance claim at 4 g/day), constipation relief, and modest satiety/appetite suppression. <span className="font-semibold">CONTESTED evidence</span> covers weight loss — and this nuance is load-bearing. EFSA approved a weight-loss claim for glucomannan at 3 g/day in an energy-restricted diet, but the subsequent <span className="font-semibold">Onakpoya 2014 systematic review and meta-analysis of 9 RCTs (n=391) found NO statistically significant weight loss vs placebo</span>. The regulatory claim and the subsequent meta-analytic evidence diverge. Practical implication: don&apos;t expect dramatic standalone weight loss from glucomannan; any benefit is modest, conditional on an energy-restricted diet, and not robustly supported by the meta-analytic evidence. <span className="font-semibold">The central safety concern is choking and esophageal obstruction</span>: the same water-absorbing gel-forming property that drives the mechanism creates real risk if glucomannan is taken without ample water OR if a tablet expands in the esophagus before reaching the stomach. FDA case reports exist; some markets restrict glucomannan tablet sales; Vanderbeek 2007 and similar case-report literature document esophageal obstruction events. Australia requires warning labels on glucomannan tablets. Critical safety practices: (1) ALWAYS take with 8+ oz water — non-negotiable. (2) Powder or capsule forms are preferred over tablets. (3) Take 30+ minutes before meals to allow gastric expansion before food. (4) Users with swallowing difficulties should avoid glucomannan entirely. (5) Stop and seek medical attention if chest pain or difficulty swallowing develops. Standard supplemental dose: 1–4 g/day split before meals with ample water. Whole-food konjac (shirataki noodles, konjac flour) provides glucomannan in food form with lower safety risk — a reasonable alternative for users who don&apos;t need concentrated supplemental doses.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">LDL and total cholesterol reduction (Sood 2008 meta; EFSA cholesterol-maintenance claim at 4 g/day)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Constipation relief via bulking and water-binding</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest satiety and appetite suppression (gastric expansion mechanism)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Weight loss in energy-restricted diet (EFSA claim — but CONTESTED by Onakpoya 2014 meta null finding)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest glycemic control improvement (reduced postprandial glucose)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest blood pressure reduction</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pediatric constipation (pediatrician supervision)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common dose:</span> 1–4 g/day, taken 30 minutes before meals with 8+ oz water. Cholesterol management: 4 g/day total split across meals (EFSA cholesterol claim). Weight management (contested): 3 g/day in energy-restricted diet. Powder form preferred for safety; capsules acceptable; AVOID tablets.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Watch for:</span> CHOKING / esophageal obstruction (always 8+ oz water; avoid tablets; users with dysphagia avoid entirely); gas and bloating during initial weeks; drug absorption interference (separate by 2+ hours); diabetes medication interaction (additive glucose-lowering — monitor); levothyroxine absorption reduction (separate by 4+ hours); pre-existing bowel obstruction or motility disorder; pregnancy/breastfeeding not well-characterized; weight-loss expectations should be modest (Onakpoya 2014 meta null vs EFSA claim).
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=glucomannan+powder+konjac&tag=profpeptide-20" label="Glucomannan" />
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
        {["Konjac", "Soluble Fiber", "Cholesterol", "Weight Loss Contested", "Onakpoya 2014", "Choking Risk"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/fish-oil" className="text-sm font-medium text-[#3A759F] hover:underline">Fish Oil</Link>
          <Link href="/supplements/berberine" className="text-sm font-medium text-[#3A759F] hover:underline">Berberine</Link>
          <Link href="/supplements/green-tea-extract" className="text-sm font-medium text-[#3A759F] hover:underline">Green Tea Extract</Link>
          <Link href="/supplements/prebiotics" className="text-sm font-medium text-[#3A759F] hover:underline">Prebiotics</Link>
          <Link href="/supplements/probiotics" className="text-sm font-medium text-[#3A759F] hover:underline">Probiotics</Link>
          <Link href="/supplements/chromium" className="text-sm font-medium text-[#3A759F] hover:underline">Chromium</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Glucomannan" pagePath="/supplements/glucomannan" />
    </div>
    </>
  );
}
