import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/electrolyte-powders",
  title: "Electrolyte Powders: Sodium-First Hydration, LMNT vs Balanced, Hyponatremia Risk",
  description:
    "Electrolyte powders for endurance and hot-weather hydration — sodium-first protocol (500–1000 mg/hour), the LMNT high-sodium vs Skratch/Nuun balanced philosophies, and the exercise-associated hyponatremia risk from overdrinking plain water.",
});

const faqs = [
  {
    q: "Do I actually need electrolyte powders, or is water enough?",
    a: "Depends on duration, intensity, heat, and your sweat rate. For typical short sessions (under 60 minutes) in cool conditions, plain water is fine. For exercise lasting 60+ minutes, hot or humid conditions, or anyone who sweats heavily, electrolyte replacement becomes meaningful. The most important consideration is sodium: prolonged sweating without sodium replacement can produce exercise-associated hyponatremia (dangerously low blood sodium), particularly in endurance athletes who drink large volumes of plain water. Hew-Butler 2015 EAH consensus documented this is a real and occasionally fatal condition. Sedentary daily users in normal climate generally don't need supplementation — dietary sodium intake is typically more than adequate. Practical guidance: water for short workouts; electrolyte powders for endurance, hot conditions, or heavy sweat losses.",
  },
  {
    q: "LMNT vs Skratch vs Nuun vs Liquid IV — which philosophy is right?",
    a: (
      <>
        Different products represent different hydration philosophies, and the &quot;right&quot; choice depends on the context. <span className="font-semibold">LMNT</span> (1000 mg sodium per stick, no sugar) pioneered the high-sodium philosophy — built for endurance athletes, hot-weather workers, heavy sweaters, and low-carb/keto users (who lose more sodium due to lower insulin-mediated sodium retention). Best for genuinely high sweat losses or sodium-restricted dietary contexts. <span className="font-semibold">Skratch Labs</span> (~380 mg sodium per serving, some carbohydrate) — balanced for moderate-duration endurance with carbohydrate fuel. <span className="font-semibold">Nuun Sport</span> (~300 mg sodium per tablet, low/no carb) — convenient tablet form, balanced for general training. <span className="font-semibold">Liquid IV</span> (~500 mg sodium plus significant sugar) — marketed as &quot;hydration multiplier&quot; using the WHO ORS-style glucose-sodium co-transport mechanism; effective for rapid rehydration but the sugar content makes it less suited for daily use. Practical guidance: LMNT philosophy for endurance, heat, heavy sweat losses, or low-carb dietary context; balanced lower-sodium options (Skratch, Nuun) for general training and moderate sweat losses; avoid high-sugar &quot;hydration&quot; products for daily use.
      </>
    ),
  },
  {
    q: "How much sodium do I actually lose in sweat?",
    a: "Highly variable — 200 to 2000 mg sodium per liter of sweat. Most users fall in the 400–1000 mg/L range. &quot;Salty sweaters&quot; (typically marked by visible white salt deposits on clothing/skin after workouts) lose toward the upper end (1500+ mg/L). Sweat rates also vary widely (0.5 to 2+ liters/hour during sustained endurance exercise in heat). Combined sweat rate × sodium concentration produces dramatic individual variation in total hourly sodium losses. Sweat testing (Levelen, Precision Hydration, Gatorade Sweat Patch) measures your personal sodium concentration; useful for endurance athletes targeting precise replacement. Practical default for general users: 500–1000 mg sodium per hour of sustained sweat-producing exercise. Salty sweaters may need 1500+ mg/hour.",
  },
  {
    q: "What is exercise-associated hyponatremia and should I worry about it?",
    a: "Exercise-associated hyponatremia (EAH) is dangerously low blood sodium during or after prolonged exercise, caused by drinking too much plain water relative to sweat losses. Hew-Butler 2015 consensus statement documented EAH causes weakness, confusion, seizures, and in severe cases, death from cerebral edema. Most cases occur in marathon and ultra-endurance contexts where well-meaning athletes drink large volumes of plain water without sodium replacement. Practical prevention: (1) Don't drink to excess — &quot;drink to thirst&quot; rather than mandated volumes. (2) Include sodium in drinks during prolonged exercise (500–1000 mg/hour). (3) Don't pre-hydrate aggressively before events. (4) Be especially careful in long-duration cool-weather events where thirst signals can be misleading. Risk is low for typical training sessions; meaningful risk in marathons, ultras, and military / occupational endurance contexts.",
  },
  {
    q: "Will electrolytes prevent muscle cramps?",
    a: "Sometimes, particularly in heat and prolonged exercise. Muscle cramp etiology is more complex than &quot;electrolyte depletion = cramps&quot; — newer research (Schwellnus and others) suggests neuromuscular fatigue from altered motor neuron control is a major driver, separate from electrolyte status. That said, sodium and magnesium depletion do contribute to cramp risk in heavy-sweat-loss contexts. Practical guidance: if you cramp during endurance/heat exercise, sodium replacement is a reasonable first intervention (500–1000 mg/hour). Magnesium supplementation may help in deficient users but the evidence is weaker than for sodium. If cramps persist with adequate hydration and sodium, the issue may be training-load-related rather than electrolyte-related — addressing training intensity progression matters.",
  },
  {
    q: "Are sugar-containing sports drinks like Gatorade actually useful?",
    a: "Yes for fueling endurance, no for general hydration. Sports drinks (Gatorade, Powerade) deliver carbohydrate (6–8% solution) plus electrolytes — the carbohydrate provides fuel for sustained efforts and uses the glucose-sodium co-transport mechanism (the same mechanism that makes WHO ORS oral rehydration solution work for cholera). For endurance events 60+ minutes where fueling matters, sports drinks are useful. For general daily hydration, the sugar content is unnecessary and contributes to caloric load. Pure electrolyte powders (LMNT, sugar-free Nuun, Skratch sugar-free options) provide hydration support without unnecessary carbohydrate. Practical guidance: sports drinks for endurance fueling contexts; sugar-free electrolyte powders for hydration without fueling.",
  },
  {
    q: "Are electrolyte powders safe for users with high blood pressure?",
    a: "Generally yes during sustained exercise, but caution for sedentary daily use at high-sodium doses. For hypertensive users, the 1500–2300 mg/day sodium recommendation from cardiology guidelines focuses on chronic intake. Sodium consumed during meaningful exercise (when sweat losses are high) doesn't necessarily contribute to chronic sodium burden the same way that dietary sodium does. However: sedentary daily use of high-sodium electrolyte powders (e.g., LMNT 1000 mg sodium daily without significant exercise) DOES contribute to chronic sodium load and may worsen BP in hypertensive users. Practical guidance: hypertensive users — use electrolyte powders during meaningful sweat-producing exercise; avoid daily sedentary use of high-sodium formulas; coordinate with cardiology on overall sodium intake. Balanced lower-sodium options may be appropriate even during exercise.",
  },
  {
    q: "Can I just use table salt and a banana instead of expensive powders?",
    a: (
      <>
        Functionally yes, with caveats. Table salt (sodium chloride) is approximately 40% sodium by mass — 1/4 teaspoon = ~575 mg sodium. A banana provides ~400 mg potassium. The combination delivers basic electrolyte replacement at a fraction of the cost of commercial powders. However: (1) Magnesium is harder to deliver from food in workout contexts — a small{" "}
        <Link href="/supplements/magnesium" className="text-[#3A759F] hover:underline">magnesium supplement</Link>{" "}
        fills this gap. (2) Salt water on its own is unpalatable; mixing with electrolyte powders or sports drinks is more drinkable. (3) Convenience matters during competition or long training. (4) The commercial powders provide precise dosing and consistent ratios. For users wanting to DIY: 1/4 tsp table salt + banana + magnesium tablet covers the main bases. For users wanting convenience or precise endurance dosing: commercial powders are worth the premium.
      </>
    ),
  },
];

const studies = [
  {
    title: "Fluid and Electrolyte Needs for Training, Competition, and Recovery",
    authors: "Shirreffs SM, Sawka MN",
    journal: "Journal of Sports Sciences",
    year: "2011",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/22150428/",
    summary: "Foundational sports nutrition review covering fluid and electrolyte recommendations for training and competition. Documents individual variability in sweat rates (0.5–2+ L/hour) and sodium losses (200–2000 mg/L). Establishes the practical sodium-replacement target of approximately 500–700 mg/hour for typical sustained sweat-producing exercise, with higher targets for heavy sweaters and hot conditions. The most-cited single source for evidence-based electrolyte replacement protocols.",
  },
  {
    title: "Statement of the Third International Exercise-Associated Hyponatremia Consensus Development Conference",
    authors: "Hew-Butler T, Loi V, Pani A, Rosner MH",
    journal: "Clinical Journal of Sport Medicine",
    year: "2015",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/26102445/",
    summary: "The foundational consensus statement on exercise-associated hyponatremia (EAH) — dangerously low blood sodium caused by excessive plain water consumption during prolonged exercise. Documents EAH causes weakness, confusion, seizures, and in severe cases death from cerebral edema. Recommendations: drink to thirst rather than mandated volumes; include sodium in fluids during prolonged exercise; avoid aggressive pre-hydration. The most-cited reference for the &quot;overdrinking is the danger&quot; framing that contextualizes electrolyte supplementation.",
  },
  {
    title: "American College of Sports Medicine Position Stand: Exercise and Fluid Replacement",
    authors: "Sawka MN, Burke LM, Eichner ER, Maughan RJ, Montain SJ, Stachenfeld NS",
    journal: "Medicine and Science in Sports and Exercise",
    year: "2007",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/17277604/",
    summary: "The ACSM position stand on exercise fluid replacement. Documents that sodium-containing drinks improve fluid retention compared to plain water (sodium drives plasma volume retention via osmotic mechanisms). Recommends 0.5–0.7 g sodium per liter of fluid for sustained endurance exercise. Practical reference for sodium-fluid-ratio guidance.",
  },
  {
    title: "Sodium Intake and Hypertension",
    authors: "Grillo A, Salvi L, Coruzzi P, Salvi P, Parati G",
    journal: "Nutrients",
    year: "2019",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/31438636/",
    summary: "A comprehensive review of sodium intake and blood pressure outcomes — relevant for hypertensive users considering electrolyte supplementation. Documents that chronic high sodium intake contributes to hypertension in salt-sensitive individuals. Practical implication: high-sodium electrolyte supplementation during meaningful exercise (when sweat losses are high) differs from chronic sedentary high-sodium intake. Hypertensive users should coordinate overall sodium load with cardiology.",
  },
  {
    title: "Cause of Exercise Associated Muscle Cramps (EAMC) — Altered Neuromuscular Control, Dehydration or Electrolyte Depletion?",
    authors: "Schwellnus MP",
    journal: "British Journal of Sports Medicine",
    year: "2009",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/19211611/",
    summary: "A critical review challenging the simplistic &quot;electrolyte depletion causes cramps&quot; model. Documents that exercise-associated muscle cramps in marathon and endurance contexts are more strongly associated with altered neuromuscular control and fatigue than with electrolyte status. Doesn&apos;t negate electrolyte replacement value for performance and hyponatremia prevention; does suggest the cramp-prevention claim should be qualified. Useful nuance reference.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How do electrolyte powders work?",
    intro:
      "Electrolyte powders work by replacing the sodium, potassium, magnesium, and chloride lost through sweat during exercise. Sodium is the primary actor — it drives plasma volume retention, triggers thirst, and maintains the extracellular fluid balance that supports cardiovascular function during exercise. Without sodium replacement, prolonged sweating produces volume depletion (cardiovascular strain) and, in severe cases, exercise-associated hyponatremia (dangerous dilution from overdrinking plain water).",
    body: [
      "Sodium and plasma volume maintenance. Sodium is the dominant extracellular cation and primary determinant of plasma osmolality. Sweat losses without sodium replacement deplete extracellular fluid, contracting plasma volume and increasing cardiovascular strain (heart rate rises to maintain cardiac output as stroke volume falls). Sodium replacement maintains plasma volume and cardiovascular performance during prolonged exercise.",
      "Sodium-glucose co-transport (WHO ORS mechanism). Sodium and glucose share a co-transporter (SGLT1) in the small intestine — glucose &quot;pulls&quot; sodium across the intestinal epithelium, and water follows osmotically. This is the basis of the WHO oral rehydration solution that has saved millions of lives in cholera contexts. Sports drinks (Gatorade, etc.) exploit this mechanism for rapid rehydration during exercise. Sugar-free electrolyte powders don&apos;t use this mechanism but still deliver sodium effectively via passive uptake.",
      "Thirst signaling. Sodium concentration affects hypothalamic osmoreceptors that drive thirst. Replacing sodium during sustained exercise maintains appropriate thirst signaling — overdrinking plain water suppresses thirst and can lead to hyponatremia.",
      "Potassium and intracellular electrolyte balance. Potassium is the dominant intracellular cation. Sweat potassium losses are smaller than sodium losses (~5–10 mmol/L vs 30–70 mmol/L sodium), so acute potassium replacement is less critical during exercise. Potassium contributes to neuromuscular function and the sodium-potassium ATPase that maintains membrane potentials.",
      "Magnesium and ATP production / muscle relaxation. Magnesium is involved in 300+ enzymatic reactions, including ATP synthesis and muscle relaxation. Sweat losses are modest but contribute over time in heavy-sweat contexts. Deficiency contributes to muscle cramping in deficient users.",
      "Chloride and acid-base balance. Chloride accompanies sodium in sweat (as sodium chloride). Replacement is automatic in any sodium-containing supplement. Contributes to gastric acid production and bicarbonate handling.",
      "Calcium contribution (minor). Calcium in some electrolyte products supports neuromuscular function but is not the primary sweat-loss concern. Most calcium needs are met from dietary sources.",
      "Glucose addition (in sports drinks). Sports drinks add carbohydrate (~6–8% solution) for fuel during sustained endurance exercise. Provides ~60 g carbohydrate per hour at typical drinking rates. Useful for fueling endurance; unnecessary for short workouts or general hydration.",
      "Individual sweat composition variability. Sweat sodium concentration varies from ~200 to 2000 mg/L between individuals (&quot;salty sweaters&quot; vs normal). Sweat rate varies from ~0.5 to 2+ L/hour. The product of these two determines total hourly sodium loss — a critical individual variable that determines replacement needs.",
    ],
  },
  {
    id: "research",
    title: "What do electrolyte powders actually do?",
    intro:
      "Electrolyte powder evidence is highly context-dependent. Strong evidence for hyponatremia prevention and fluid retention during sustained endurance exercise; modest evidence for cramp prevention (cramps are more complex than just electrolyte depletion per Schwellnus 2009); minimal evidence for value in short low-intensity workouts where plain water suffices.",
    body: [
      "Hyponatremia prevention during prolonged endurance (Strong). Hew-Butler 2015 consensus documents sodium replacement is the key intervention to prevent EAH in marathon, ultra, and military contexts. Most clinically important application of electrolyte supplementation.",
      "Plasma volume retention during sustained exercise (Strong). Sawka 2007 ACSM position stand: sodium-containing drinks improve fluid retention compared to plain water. Mechanistic basis for cardiovascular performance maintenance during prolonged efforts.",
      "Endurance performance in hot conditions (Strong). Sodium and fluid replacement protocols documented to maintain performance during 60+ minute efforts in heat. Effect smaller in cool conditions and shorter efforts.",
      "Sodium-glucose co-transport rehydration (Strong, WHO ORS). Sports drinks and electrolyte products using the SGLT1 co-transport mechanism produce more rapid fluid restoration than plain water in dehydration contexts.",
      "Exercise-associated muscle cramps (Modest, contested). Schwellnus 2009 critical review documented EAMC are more strongly associated with neuromuscular fatigue than electrolyte status. Sodium replacement may help in heavy-sweat-loss contexts but the cramp-prevention claim should be qualified.",
      "Cognitive performance during prolonged exercise (Moderate). Hydration and electrolyte maintenance supports cognitive function during sustained efforts. Effect documented in endurance and military performance contexts.",
      "Daily general hydration in sedentary users (Weak). Typical dietary sodium intake (often 3000+ mg/day in Western diets) far exceeds sweat-loss replacement needs in sedentary contexts. Routine daily electrolyte supplementation in sedentary users is not strongly supported.",
      "Low-carb / keto users and sodium status (Moderate). Low-insulin states reduce kidney sodium retention, increasing sodium losses in urine. This is the basis for the LMNT-style high-sodium electrolyte targeting of low-carb users — empirically supports sodium repletion in this population.",
      "Salty sweaters (Strong, individual basis). Users with high sweat sodium concentrations (&quot;salty sweaters,&quot; cystic fibrosis carriers, certain genetic variants) have measurably higher replacement needs. Sweat testing can personalize.",
      "Heat acclimatization and electrolyte conservation (Moderate). Trained users in hot conditions develop sweat-sodium conservation over 7–14 days of heat acclimatization. Reduces sodium replacement needs for adapted athletes.",
      "Hospitality and travel rehydration (Moderate, real-world use). Liquid IV-style products marketed for hangover, jet lag, and general rehydration use the WHO ORS-style co-transport mechanism. Useful in these contexts; the sugar content is the trade-off for daily use.",
    ],
  },
  {
    id: "dosing",
    title: "How are electrolytes dosed?",
    intro:
      "Electrolyte dosing during exercise depends on duration, conditions, sweat rate, and individual sodium concentration. The practical default for typical users: 500–1000 mg sodium per hour of sustained sweat-producing exercise. Salty sweaters may need 1500+ mg/hour. For general hydration outside exercise, dietary sodium is usually adequate.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sustained endurance exercise (60+ min).</span> 500–1000 mg sodium per hour. Potassium 200–400 mg/serving. Magnesium 50–150 mg/serving. Drink to thirst, not to mandated volume.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hot weather / heavy sweat loss.</span> 1000–1500 mg sodium per hour. Increase per individual sweat composition.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Salty sweaters (heavy sweat sodium loss).</span> 1500–2500 mg sodium per hour for sustained exercise. LMNT-style high-sodium philosophy. Consider sweat testing for personalization.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Short workouts (under 60 min) in cool conditions.</span> Plain water typically adequate. Electrolyte supplementation marginal.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Low-carb / keto daily use.</span> 1000–2000 mg sodium daily (split across day or pre-/post-workout) supports the increased sodium losses from low-insulin states. Common LMNT use case.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Endurance event fueling.</span> Use carbohydrate-containing sports drinks (6–8% glucose) for events 60+ min where fueling matters. Adds 30–60 g carbohydrate per hour.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hangover / travel rehydration.</span> WHO ORS-style products (Liquid IV, Pedialyte) work well for acute rehydration.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypertensive users / cardiovascular caution.</span> Use during meaningful sweat-producing exercise; avoid daily high-sodium use; coordinate with cardiology on overall sodium load.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Post-workout recovery.</span> Sodium-containing drinks improve fluid retention vs plain water during 2–4 hour recovery window.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: electrolyte effects are acute (intra-workout and recovery). No chronic loading. Sweat testing for personalization yields a precise sodium concentration ([Na+] in sweat) that, multiplied by sweat rate, gives your personal hourly sodium loss target.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">LMNT vs balanced philosophy positioning.</span> LMNT (1000 mg sodium per stick) — built for endurance, heat, heavy sweat loss, or low-carb users. Balanced lower-sodium options (Skratch Labs ~380 mg, Nuun ~300 mg) — moderate-duration training, lighter sweat losses, general hydration. Both philosophies are evidence-based for their respective use cases. Neither is universally correct.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take electrolyte powders",
    intro:
      "Electrolyte powders are taken orally as powder dissolved in water during or after exercise. The practical considerations are timing (during sustained sweat-producing exercise), drink-to-thirst rather than mandated volumes (to avoid hyponatremia), and matching philosophy to use case (LMNT-style high-sodium for heavy losses; balanced for moderate use).",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Per hour during sustained sweat-producing exercise. 1 serving daily (or split) for low-carb baseline use. Not a chronic round-the-clock supplement for general users.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Intra-workout during endurance. Pre-workout for hot weather acclimatization. Post-workout for recovery. Throughout the day for low-carb daily use. Drink-to-thirst during exercise rather than mandated volumes.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">During exercise: with water as the primary delivery vehicle. With food acceptable. WHO ORS-style rehydration: glucose-containing products work better for acute rehydration.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Powder or stick packs (LMNT, Skratch, Liquid IV) — convenient, precise dosing. Tablets (Nuun) — portable. Tablets and stick packs are more travel-friendly than bulk powder. Avoid high-sugar sports drinks for daily/general hydration use.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Specific sodium content disclosed per serving. Potassium, magnesium content disclosed. cGMP-certified manufacturing. Reputable brands: LMNT, Skratch Labs, Nuun, Liquid IV, Pedialyte, GU Hydration, Tailwind Nutrition.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling — use as needed based on exercise and sweat-loss context. Store in cool dry conditions. Stick packs and tablets are travel-stable.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What do electrolytes stack with?",
    intro:
      "Electrolyte powders are foundational hydration support — they pair with virtually any other supplement category. Most relevant pairings are with intra-workout supplements (creatine, beta-alanine, citrulline malate) and recovery/sleep supplements. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Electrolyte powders are foundational hydration support — they don&apos;t directly interact with peptide pharmacology but provide infrastructure that supports the training and recovery contexts where peptides are typically used. Endurance and heavy-training users on GH-secretagogue peptides like{" "}
            <Link href="/peptides/cjc-1295" className="text-[#3A759F] hover:underline">CJC-1295</Link>{" "}
            and{" "}
            <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">ipamorelin</Link>{" "}
            benefit from adequate hydration and sodium status to support the increased training volumes those peptides enable. No mechanism-specific peptide-electrolyte interaction; just foundational hydration support.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/creatine" className="text-[#3A759F] hover:underline">Creatine monohydrate</Link>{" "}
              — creatine draws intracellular water; adequate hydration and electrolyte status supports this. Compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/beta-alanine" className="text-[#3A759F] hover:underline">Beta-alanine</Link>{" "}
              — common intra-workout pairing for high-intensity training.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/l-citrulline-malate" className="text-[#3A759F] hover:underline">L-citrulline malate</Link>{" "}
              — NO-mediated vasodilation works best with adequate hydration.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Caffeine — increases sweat rate modestly; pairs with electrolyte replacement for endurance.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/magnesium" className="text-[#3A759F] hover:underline">Magnesium supplements</Link>{" "}
              — daily magnesium beyond what electrolyte powders contain is reasonable for general magnesium status; electrolyte powders cover acute sweat-loss replacement.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/protein-powder" className="text-[#3A759F] hover:underline">Protein powder</Link>{" "}
              — post-workout recovery; sodium in electrolyte powder supports plasma volume restoration alongside protein.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/bcaas" className="text-[#3A759F] hover:underline">BCAAs</Link>{" "}
              — common intra-workout combination for endurance contexts.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Sodium bicarbonate — bicarbonate buffering for high-intensity efforts. Take separately from electrolyte powders (GI tolerance differs).
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/glutamine" className="text-[#3A759F] hover:underline">Glutamine</Link>{" "}
              — gut/immune support during heavy training blocks. Compatible.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Match to sweat rate and conditions.</span> Cool weather short workout = plain water often fine. Hot weather endurance = electrolyte replacement matters.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Drink to thirst.</span> Hew-Butler 2015 guidance — overdrinking plain water during prolonged exercise is more dangerous than under-drinking. Trust thirst signals.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Heat acclimatization.</span> 7–14 days of regular heat exposure improves sweat-sodium conservation. Reduces electrolyte replacement needs.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sweat testing for endurance athletes.</span> Levelen, Precision Hydration, Gatorade Sweat Patch — measure personal sweat sodium concentration. Useful for marathon, triathlon, ultra contexts.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Low-carb / keto context.</span> Reduced insulin → reduced renal sodium retention → increased sodium losses. LMNT-style higher daily sodium intake is supported.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypertension management.</span> Use during meaningful exercise; avoid daily sedentary high-sodium dosing. Coordinate with cardiology on overall sodium load.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Travel and time-zone changes.</span> WHO ORS-style products (Liquid IV, Pedialyte) for acute rehydration during/after travel.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Don&apos;t replace whole-food sodium with supplements.</span> Most users meet sodium needs from food; supplementation fills exercise-specific gaps.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Electrolyte powders are generally safe when used appropriately. The main practical considerations are hypertension management (sodium intake), GI tolerance (magnesium can cause diarrhea at high doses), and the more serious hyponatremia risk from overdrinking plain water in endurance contexts.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort with high-magnesium products — magnesium can cause loose stools.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Salt taste with high-sodium products — affects palatability; flavored versions mask this.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at appropriate doses.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypertension and chronic high-sodium intake.</span> Sedentary daily use of high-sodium electrolyte powders contributes to chronic sodium load. May worsen BP in salt-sensitive hypertensive users. Coordinate with cardiology.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Exercise-associated hyponatremia from overdrinking.</span> Drinking large volumes of plain water during prolonged exercise without sodium replacement is more dangerous than adequate sodium-containing fluid intake. Drink to thirst.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Kidney disease.</span> Compromised electrolyte handling. Coordinate with nephrology on electrolyte supplementation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Congestive heart failure.</span> Sodium and fluid retention are managed in CHF; electrolyte supplementation needs cardiology oversight.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">High-dose magnesium in users with kidney disease.</span> Reduced clearance can cause hypermagnesemia.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">High-sugar sports drinks for daily use.</span> Caloric load and dental health considerations. Choose sugar-free for general hydration.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Antihypertensive medications.</span> Sodium intake interacts with BP medication dosing. Coordinate with prescriber.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diuretics.</span> Electrolyte losses from diuretics affect supplementation needs. Coordinate with prescriber.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">ACE inhibitors / potassium-sparing diuretics.</span> May elevate potassium; coordinate before adding potassium-containing electrolyte products.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Lithium — sodium status affects lithium clearance. Coordinate with psychiatry.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Corticosteroids — sodium retention; relevant for chronic users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy and breastfeeding — electrolyte balance during pregnancy supports plasma volume expansion; generally compatible with normal use.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about electrolyte powders",
    intro:
      "Electrolyte replacement during exercise has a mature evidence base, but several practical questions remain — particularly around the LMNT high-sodium vs balanced philosophy debate, optimal individual personalization, and effects outside endurance contexts.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal sodium per hour for general users.</span> Established guidelines (500–700 mg/hour per Shirreffs 2011) are population averages. Individual optimal dose depends on sweat composition and rate, which vary 10-fold between users. Most users don&apos;t know their personal numbers without sweat testing.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">LMNT high-sodium vs balanced philosophy resolution.</span> LMNT&apos;s 1000 mg/serving philosophy is empirically supported for endurance, heat, salty sweaters, and low-carb contexts. Balanced lower-sodium products are appropriate for moderate use. The boundary between &quot;legitimate sodium-loading&quot; and &quot;unnecessary sodium intake&quot; isn&apos;t precisely characterized for typical recreational users.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cramp prevention causality.</span> Schwellnus 2009 critique documented exercise-associated muscle cramps are more strongly associated with neuromuscular fatigue than electrolyte status. The cramp-prevention claim of electrolyte products is overstated relative to evidence.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Daily low-carb / keto sodium needs.</span> The LMNT-popularized daily sodium intake target for low-carb users (1500–2500 mg/day) is empirically supported but not precisely characterized for different stages of ketosis adaptation.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Magnesium contribution.</span> Most electrolyte products contain 50–150 mg magnesium per serving. Whether this dose meaningfully affects cramping, recovery, or performance in non-deficient users isn&apos;t precisely characterized at electrolyte-supplement doses.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Sweat composition individual variability.</span> Sweat sodium 200–2000 mg/L is documented. Determinants of individual variability (genetics, heat acclimatization, hydration history, diet, training status) aren&apos;t fully characterized at the level needed for purely predictive personalization.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Hangover and travel rehydration optimal protocols.</span> Liquid IV and similar products use WHO ORS-style mechanisms; whether their specific formulations are optimal for non-clinical rehydration contexts isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Heat acclimatization sodium conservation rate.</span> Heat-acclimatized athletes conserve more sodium. Precise rate of conservation and how it changes electrolyte replacement needs over an acclimatization window isn&apos;t precisely characterized.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy electrolyte powders",
    intro:
      "Electrolyte powders are widely available with substantial variation in sodium content per serving — the key quality variable. Match product philosophy to your use case: high-sodium for endurance/heat/heavy sweat losses; balanced lower-sodium for moderate use; WHO ORS-style for acute rehydration.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sodium content disclosed per serving</span> — the most important variable. Match to use case.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">High-sodium philosophy (1000 mg/serving): LMNT</span> — for endurance, heat, heavy sweat losses, low-carb users, salty sweaters.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Balanced philosophy (300–500 mg/serving): Skratch Labs, Nuun, Tailwind</span> — for moderate-duration training, lighter sweat losses, general hydration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">WHO ORS-style with glucose: Liquid IV, Pedialyte</span> — for acute rehydration (travel, hangover, illness). Sugar content makes them less suited for daily use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sports drinks with carbohydrate (6–8%): Gatorade, Powerade</span> — for endurance fueling 60+ min where carb fueling matters.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sugar-free options for daily hydration</span> — LMNT, sugar-free Nuun, Skratch sugar-free.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Potassium 200–400 mg/serving</span> — supports the sodium balance.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Magnesium 50–150 mg/serving</span> — supports muscle and metabolic function during prolonged exercise.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing</span> — minimum bar. Third-party testing for competitive athletes (Informed Sport).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stick packs or tablets for portability</span> — easier than bulk powder for race-day or travel.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — LMNT, Skratch Labs, Nuun Sport, Liquid IV, Pedialyte, GU Hydration, Tailwind Nutrition, Precision Hydration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">DIY budget option</span> — 1/4 tsp table salt + banana + small{" "}<Link href="/supplements/magnesium" className="text-[#3A759F] hover:underline">magnesium supplement</Link>{" "}provides functional electrolyte replacement at minimal cost. Less palatable and convenient than commercial powders.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=electrolyte+powder+lmnt+nuun+skratch&tag=profpeptide-20" label="Electrolyte Powders" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Electrolyte Powders FAQ",
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
          Shirreffs SM, Sawka MN. Fluid and electrolyte needs for training, competition, and recovery. J Sports Sci. 2011;29 Suppl 1:S39-S46.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22150428/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22150428/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hew-Butler T, Loi V, Pani A, Rosner MH. Exercise-associated hyponatremia: 2017 update. Front Med (Lausanne). 2017;4:21.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/26102445/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/26102445/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sawka MN, Burke LM, Eichner ER, Maughan RJ, Montain SJ, Stachenfeld NS. American College of Sports Medicine position stand: exercise and fluid replacement. Med Sci Sports Exerc. 2007;39(2):377-390.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17277604/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17277604/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Grillo A, Salvi L, Coruzzi P, Salvi P, Parati G. Sodium intake and hypertension. Nutrients. 2019;11(9):1970.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/31438636/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/31438636/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Schwellnus MP. Cause of exercise associated muscle cramps (EAMC) — altered neuromuscular control, dehydration or electrolyte depletion? Br J Sports Med. 2009;43(6):401-408.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/19211611/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/19211611/
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
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
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
      "name": "Do I actually need electrolyte powders, or is water enough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depends on duration, intensity, heat, and sweat rate. For typical short sessions in cool conditions, plain water is fine. For 60+ minute exercise, hot conditions, or heavy sweaters, electrolyte replacement becomes meaningful. The most important consideration is sodium: prolonged sweating without sodium replacement can produce exercise-associated hyponatremia, particularly in endurance athletes who drink large volumes of plain water."
      }
    },
    {
      "@type": "Question",
      "name": "LMNT vs Skratch vs Nuun — which philosophy is right?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different products represent different hydration philosophies. LMNT (1000 mg sodium per stick) — built for endurance, heat, heavy sweat losses, low-carb users. Skratch Labs (~380 mg sodium) — balanced for moderate-duration endurance. Nuun Sport (~300 mg sodium) — convenient tablet, balanced for general training. Liquid IV (~500 mg sodium plus sugar) — WHO ORS-style rapid rehydration. LMNT for high sweat losses; balanced for moderate use."
      }
    },
    {
      "@type": "Question",
      "name": "What is exercise-associated hyponatremia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Exercise-associated hyponatremia (EAH) is dangerously low blood sodium during or after prolonged exercise, caused by drinking too much plain water relative to sweat losses. Hew-Butler 2015 consensus documented EAH causes weakness, confusion, seizures, and in severe cases death from cerebral edema. Prevention: drink to thirst, include sodium in fluids during prolonged exercise, don't pre-hydrate aggressively."
      }
    },
    {
      "@type": "Question",
      "name": "Will electrolytes prevent muscle cramps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes, particularly in heat and prolonged exercise. Muscle cramp etiology is more complex than electrolyte depletion — Schwellnus 2009 suggests neuromuscular fatigue from altered motor neuron control is a major driver. Sodium replacement is a reasonable first intervention for cramping during endurance exercise. If cramps persist with adequate hydration and sodium, the issue may be training-load-related."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Electrolyte Powders: Sodium-First Hydration, LMNT vs Balanced, Hyponatremia Risk",
  "description": "Electrolyte powders for endurance and hot-weather hydration — sodium-first protocol (500–1000 mg/hour), the LMNT high-sodium vs Skratch/Nuun balanced philosophies, and the exercise-associated hyponatremia risk from overdrinking plain water.",
  "url": "https://profpeptide.com/supplements/electrolyte-powders",
  "datePublished": "2026-05-08T00:00:00Z",
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
    { "@type": "ListItem", "position": 3, "name": "Electrolyte Powders" }
  ]
};

export default function ElectrolytePowdersPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Electrolyte Powders</h1>
        <span className="tag">Performance &amp; Energy</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 28, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Electrolytes, hydration powders, sports drinks (with carbs), oral rehydration solutions (ORS), mineral supplements; brand philosophy categories: LMNT (high-sodium), Skratch Labs / Nuun (balanced), Liquid IV / Pedialyte (WHO ORS-style with glucose), Gatorade / Powerade (sports drinks with carbohydrate)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Multi-mineral hydration supplement / sodium-led plasma volume support / sweat-loss replacement / exercise-associated hyponatremia prevention / category page covering products from low-sodium balanced (Nuun) to high-sodium endurance (LMNT) philosophies
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Context-dependent. <span className="font-semibold">Strong for endurance exercise (60+ min) and hot conditions</span> — Shirreffs 2011, Sawka 2007 ACSM position stand document plasma volume retention and performance maintenance with sodium replacement. <span className="font-semibold">Strong for exercise-associated hyponatremia prevention</span> in endurance contexts (Hew-Butler 2015 EAH consensus). <span className="font-semibold">Modest for muscle cramp prevention</span> — Schwellnus 2009 critique documents cramps are more strongly associated with neuromuscular fatigue than electrolyte status alone. <span className="font-semibold">Modest for low-carb / keto users</span> (LMNT-popularized high-sodium philosophy empirically supported). <span className="font-semibold">Weak for sedentary daily users</span> — dietary sodium typically adequate.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What are electrolyte powders?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Electrolytes are electrically charged minerals dissolved in body fluids — sodium, potassium, magnesium, chloride, and others — essential for nerve conduction, muscle contraction, fluid balance, and pH regulation. Electrolyte powders are concentrated mineral supplements designed to replace the losses that occur through sweat during exercise, hot weather exposure, or illness. The category includes a wide range of products spanning meaningfully different philosophies: <span className="font-semibold">LMNT</span> (1000 mg sodium per stick, no sugar) pioneered the high-sodium philosophy aimed at endurance athletes, hot-weather workers, salty sweaters, and low-carb/keto users (who lose more sodium due to reduced insulin-mediated renal retention); <span className="font-semibold">Skratch Labs</span> (~380 mg sodium per serving) and <span className="font-semibold">Nuun Sport</span> (~300 mg sodium per tablet) represent the balanced lower-sodium philosophy suited for moderate-duration training and lighter sweat losses; <span className="font-semibold">Liquid IV and Pedialyte</span> use WHO ORS-style glucose-sodium co-transport for rapid rehydration in clinical and travel contexts; <span className="font-semibold">Gatorade and Powerade</span> are sports drinks adding 6–8% carbohydrate for endurance fueling. The single most important practical consideration is sodium: sodium drives plasma volume retention and triggers thirst, making it the cornerstone of effective hydration during exercise. Sweat losses vary dramatically between individuals: sweat sodium concentration ranges from 200 to 2000 mg/L; sweat rate from 0.5 to 2+ L/hour. The product of these two variables determines personal hourly sodium loss — a 10-fold range across users. &quot;Salty sweaters&quot; (often visible by white salt deposits on clothing after workouts) lose toward the upper end and have correspondingly higher replacement needs. The most consequential clinical concern is <span className="font-semibold">exercise-associated hyponatremia (EAH)</span> — dangerously low blood sodium during prolonged exercise caused by drinking large volumes of plain water without sodium replacement. Hew-Butler 2015 consensus documented EAH causes weakness, confusion, seizures, and in severe cases death from cerebral edema. The Hew-Butler &quot;drink to thirst&quot; guidance — rather than mandated volumes — is the foundational prevention principle. The honest evidence-tier summary: Strong evidence for electrolyte supplementation during sustained endurance exercise (60+ minutes), in hot conditions, and for EAH prevention; modest evidence for muscle cramp prevention (Schwellnus 2009 documents cramps are more strongly associated with neuromuscular fatigue than electrolyte status alone); modest support for daily low-carb/keto sodium intake; minimal evidence for routine sedentary daily use where dietary sodium intake is typically adequate.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Plasma volume maintenance during prolonged exercise (Sawka 2007 ACSM)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Exercise-associated hyponatremia prevention (Hew-Butler 2015)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved endurance performance in hot conditions</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cognitive function maintenance during prolonged exercise</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest reduction in cramp risk during heavy sweat-loss contexts</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Sodium support for low-carb / keto dietary contexts (LMNT philosophy)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Rapid rehydration via WHO ORS-style glucose-sodium co-transport</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Recovery support after heavy sweating</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 500–1000 mg sodium per hour during sustained sweat-producing exercise; potassium 200–400 mg/serving; magnesium 50–150 mg/serving. Salty sweaters or heavy-heat contexts: 1000–1500+ mg sodium per hour. Drink to thirst rather than mandated volumes. LMNT-style high-sodium for endurance/heat/salty sweaters/low-carb; balanced lower-sodium (Nuun, Skratch) for moderate use.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Watch for:</span> Hypertension and chronic high-sodium intake (use during exercise, avoid daily sedentary high-sodium use); exercise-associated hyponatremia from overdrinking plain water; kidney disease coordination (electrolyte handling impaired); high-magnesium products can cause loose stools; ACE inhibitor / potassium-sparing diuretic interactions with potassium content; high-sugar sports drinks unnecessary for general hydration use.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=electrolyte+powder+lmnt+nuun+skratch&tag=profpeptide-20" label="Electrolyte Powders" />
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
        {["Sodium", "Hydration", "LMNT", "Hyponatremia", "Endurance", "Sweat Losses"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/magnesium" className="text-sm font-medium text-[#3A759F] hover:underline">Magnesium</Link>
          <Link href="/supplements/creatine" className="text-sm font-medium text-[#3A759F] hover:underline">Creatine</Link>
          <Link href="/supplements/beta-alanine" className="text-sm font-medium text-[#3A759F] hover:underline">Beta-Alanine</Link>
          <Link href="/supplements/l-citrulline-malate" className="text-sm font-medium text-[#3A759F] hover:underline">L-Citrulline Malate</Link>
          <Link href="/supplements/protein-powder" className="text-sm font-medium text-[#3A759F] hover:underline">Protein Powder</Link>
          <Link href="/supplements/bcaas" className="text-sm font-medium text-[#3A759F] hover:underline">BCAAs</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Electrolyte Powders" pagePath="/supplements/electrolyte-powders" />
    </div>
    </>
  );
}
