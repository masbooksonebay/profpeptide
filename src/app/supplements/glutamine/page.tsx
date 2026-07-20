import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/glutamine",
  title: "Glutamine: Strong for Gut Barrier and ICU, Modest for Healthy-Athlete Recovery",
  description:
    "Glutamine dosing (5–20 g) — strong evidence for gut barrier integrity and critical-illness immunonutrition, modest evidence for healthy-athlete muscle recovery, and the enterocyte-fuel mechanism.",
});

const faqs = [
  {
    q: "Does glutamine actually help athletic recovery?",
    a: "Modestly, and only in specific contexts. The honest summary: glutamine's strong evidence base is in critical illness, post-surgical recovery, and inflammatory bowel conditions — not in healthy athletes with adequate protein intake. Multiple RCTs in healthy resistance-trained athletes consuming adequate dietary protein have shown minimal effect of glutamine supplementation on muscle protein synthesis, body composition, or recovery markers. Where glutamine does show athletic benefit: very high training volumes (Olympic-level loads, military training), endurance overtraining contexts, illness-prone athletes with frequent URTI episodes, and athletes on caloric restriction (cutting phases) where total amino acid pool may be limited. For typical resistance training with 1.6+ g/kg protein intake, glutamine supplementation is largely redundant.",
  },
  {
    q: "Will glutamine help my gut health or leaky gut?",
    a: "Yes, with moderate evidence — and this is actually glutamine's strongest non-clinical use case. Glutamine is the primary energy source for enterocytes (intestinal lining cells), and depleted glutamine levels compromise gut barrier integrity by reducing tight junction protein expression. Clinical research documents oral glutamine reduces intestinal permeability markers (lactulose:mannitol ratio, zonulin) in athletes during intense training and in patients with inflammatory bowel conditions. Mechanism is well-characterized; effect size is moderate. Dosing for gut applications is typically higher than for general supplementation (10–20 g/day in divided doses). Effect emerges over 4–8 weeks of consistent supplementation. Better-evidenced than most &quot;leaky gut&quot; supplements but not a complete solution — gut barrier issues are multifactorial.",
  },
  {
    q: "How much glutamine should I take?",
    a: "Depends on goal. For general healthy-athlete recovery: 5–10 g daily (post-workout and/or pre-bed). For gut barrier support: 10–20 g daily in 2–3 divided doses. For high training volume / endurance overtraining: 10–20 g daily. For post-surgical recovery or inflammatory bowel adjunct: clinically supervised dosing 20–30+ g/day. For ICU/critical illness: intravenous or enteral nutrition formulations at much higher doses under medical management. GI tolerance is excellent across this range — glutamine has one of the highest tolerable doses of any amino acid supplement.",
  },
  {
    q: "Is glutamine the same thing as glutamic acid or glutamate?",
    a: "Related but distinct. Glutamic acid (glutamate) is the amino acid in the &quot;family.&quot; Glutamine is the amide form — glutamic acid with an amide group replacing the second carboxyl. Biologically, glutamine and glutamate interconvert via glutaminase and glutamine synthetase enzymes, and the body manages glutamine/glutamate balance carefully. For supplementation purposes: L-glutamine is what's typically sold, and what most research uses. &quot;Glutamine peptide&quot; products (glutamine bound in dipeptides like alanyl-glutamine) are more stable in solution and used in some clinical contexts but are not necessary for typical oral supplementation. Monosodium glutamate (MSG) is the sodium salt of glutamic acid — it's a flavoring agent, not the same as glutamine supplements.",
  },
  {
    q: "Can glutamine help with chemotherapy side effects?",
    a: "Possibly — and this is a specialized clinical context. Some clinical research documents oral glutamine (15–30 g/day) reduces chemotherapy-induced mucositis (mouth/throat inflammation), peripheral neuropathy, and diarrhea in cancer patients receiving certain chemotherapy regimens. The evidence is mixed and specific to certain chemo agents (5-fluorouracil, oxaliplatin, paclitaxel-associated). Critical caveat: some tumors are glutamine-dependent (use glutamine as a primary fuel source for rapid proliferation), and there has been concern about whether glutamine supplementation could feed cancer growth. The clinical research has not consistently shown adverse effects on cancer outcomes from supportive glutamine, but this is a context where supplementation should only happen under oncology supervision — not as a self-supplementation decision.",
  },
  {
    q: "When should I take glutamine?",
    a: "For general supplementation: post-workout and/or pre-bed are popular timing windows. Post-workout pairs with the dietary protein you're already eating; pre-bed pairs with overnight muscle protein synthesis. Neither is strongly evidenced as superior to other times. For gut barrier support: split into 2–3 divided doses across the day to maintain steadier intestinal glutamine exposure. For illness/recovery: spread across the day. Glutamine is well-tolerated and can be taken with or without food. Note: glutamine is unstable in solution at higher temperatures — don't dissolve in hot beverages or pre-mix and store for hours.",
  },
  {
    q: "Is glutamine safe long-term?",
    a: "Yes, with excellent safety profile. Glutamine is the most abundant amino acid in the human body — endogenous production typically exceeds intake from any reasonable supplemental dose. Trials at 20–30 g/day for several months document no significant adverse events. Long-term (years) safety data at typical supplemental doses (5–10 g) is supported by the natural-abundance biology — no mechanism for accumulation or toxicity. Specific caveats: kidney disease patients should coordinate with nephrology (high amino acid intake can affect renal clearance); cancer patients should coordinate with oncology (glutamine-dependent tumors); rare genetic conditions involving glutamine metabolism are absolute contraindications.",
  },
  {
    q: "Can I stack glutamine with creatine and protein powder?",
    a: (
      <>
        Yes — these are mechanistically complementary rather than redundant. Protein powder (whey, casein, plant proteins) provides the full amino acid spectrum including some glutamine.{" "}
        <Link href="/supplements/creatine" className="text-[#3A759F] hover:underline">Creatine</Link>{" "}
        provides phosphocreatine substrate for high-intensity work — different mechanism. Glutamine adds gut barrier and immune cell substrate support — particularly relevant for high-volume training or illness-prone athletes. This is a reasonable foundational stack for serious athletes. For healthy athletes with adequate protein intake (1.6+ g/kg), the marginal contribution of glutamine to muscle protein synthesis is small — most of glutamine&apos;s value in this stack is in gut/immune support rather than direct hypertrophy.
      </>
    ),
  },
];

const studies = [
  {
    title: "Glutamine: Metabolism and Immune Function, Supplementation and Clinical Translation",
    authors: "Cruzat V, Macedo Rogero M, Noel Keane K, Curi R, Newsholme P",
    journal: "Nutrients",
    year: "2018",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/30360490/",
    summary: "A comprehensive review of glutamine biology and clinical applications. Covers glutamine's role as immune cell fuel (lymphocytes, macrophages, neutrophils have high glutamine demand), enterocyte fuel for gut barrier maintenance, conditionally essential status during catabolic stress, and clinical evidence in critical illness, surgery, and athletic populations. The Cruzat 2018 review is the most-cited single-source summary of glutamine mechanism and clinical translation framing.",
  },
  {
    title: "Why Is L-Glutamine Metabolism Important to Cells of the Immune System in Health, Post-Injury, Surgery or Infection?",
    authors: "Newsholme P",
    journal: "Journal of Nutrition",
    year: "2001",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/11533319/",
    summary: "A foundational review by Newsholme establishing glutamine's role as an immune cell fuel — lymphocytes, macrophages, and neutrophils use glutamine at rates comparable to glucose during immune activation. Documents that glutamine becomes conditionally essential during catabolic stress (illness, surgery, severe injury) when demand exceeds endogenous production. Foundational reference for the &quot;conditionally essential&quot; framing that anchors most clinical glutamine applications.",
  },
  {
    title: "Glutamine Supplementation Decreases Intestinal Permeability and Preserves Gut Mucosa Integrity",
    authors: "Wang B, Wu G, Zhou Z, Dai Z, et al.",
    journal: "Amino Acids",
    year: "2015",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/26072126/",
    summary: "A review of clinical and experimental evidence on glutamine's effects on gut barrier function. Documents that glutamine supplementation reduces intestinal permeability markers (lactulose:mannitol ratio, zonulin) in athletes during intense training, in patients with inflammatory bowel conditions, and in critical illness contexts. Mechanism: glutamine is the primary energy substrate for enterocytes and supports expression of tight junction proteins (occludin, claudin, ZO-1).",
  },
  {
    title: "Glutamine and Antioxidants in the Critically Ill Patient: The REDOXS Trial",
    authors: "Heyland D, Muscedere J, Wischmeyer PE, et al.",
    journal: "New England Journal of Medicine",
    year: "2013",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/23594003/",
    summary: "The REDOXS trial — a large RCT (n=1,223) of high-dose intravenous + enteral glutamine plus antioxidants vs placebo in critically ill ICU patients on mechanical ventilation. The trial found INCREASED mortality at 28 days in the glutamine group (32.4% vs 27.2%). This complicates the older clinical glutamine evidence base — high-dose pharmaco-nutrition with glutamine in shock/MOF patients may be harmful rather than beneficial. Practical framing: critical illness glutamine use should be tailored, not routine, and supervised by ICU specialists.",
  },
  {
    title: "Effect of Glutamine Supplementation on Recovery Following Resistance Training in Resistance-Trained Men",
    authors: "Candow DG, Chilibeck PD, Burke DG, et al.",
    journal: "European Journal of Applied Physiology",
    year: "2001",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/11822473/",
    summary: "A 6-week RCT of glutamine supplementation (0.9 g/kg per day, roughly 60+ g for typical subjects) vs placebo in resistance-trained men following a structured training program. No significant difference between groups in muscle mass, strength, or muscle protein degradation markers. One of several similar negative or null trials in healthy athletes with adequate dietary protein — the foundational evidence base supporting modest direct hypertrophy/strength effects in non-stressed athletic populations.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does glutamine work?",
    intro:
      "Glutamine works through three main mechanisms: it's the primary energy source for enterocytes (gut barrier integrity), the primary energy source for rapidly dividing immune cells (immune function), and a conditionally essential amino acid during severe metabolic stress (surgery, burns, sepsis, major injury). Direct muscle protein synthesis effects are smaller than other amino acids; glutamine's biggest practical roles are in gut and immune compartments.",
    body: [
      "Enterocyte fuel and gut barrier integrity. Enterocytes — the cells lining the intestinal wall — preferentially use glutamine as an energy source rather than glucose. During catabolic stress, intense exercise, or illness, glutamine demand exceeds supply, gut barrier integrity is compromised, and intestinal permeability increases. Supplementation supports tight junction protein expression (occludin, claudin, ZO-1) and maintains barrier integrity. This is glutamine's strongest non-critical-care use case.",
      "Immune cell fuel. Lymphocytes, macrophages, and neutrophils use glutamine at rates comparable to glucose during immune activation. Newsholme 2001 documented immune cells become functionally glutamine-dependent during proliferation and pathogen response. Glutamine depletion during overtraining or illness impairs immune function — possibly explaining the URTI susceptibility in overtrained athletes.",
      "Conditionally essential during catabolic stress. Under normal conditions, the body synthesizes adequate glutamine. During severe stress (surgery, burns, sepsis, major trauma), endogenous synthesis cannot match demand and plasma glutamine drops — making it conditionally essential. Clinical immunonutrition formulas include glutamine for this reason.",
      "Nitrogen transport. Glutamine carries amino acid nitrogen between tissues — releasing it where needed for new amino acid synthesis, nucleotide production, and protein turnover. This transport function is critical during high amino acid demand contexts (immune response, wound healing).",
      "Glutathione synthesis precursor. Glutamine is converted to glutamate, which is a direct precursor to glutathione (GSH) — the body's master antioxidant. Glutamine supplementation supports glutathione status in contexts where GSH is rapidly consumed (exercise, illness, oxidative stress).",
      "Acid-base buffering (kidney). Glutamine plays a role in renal acid-base balance via the glutaminase/glutamine synthetase axis in kidney tubules. Relevant in metabolic acidosis contexts.",
      "Limited direct muscle protein synthesis effect. Despite glutamine being abundant in muscle tissue, supplemental glutamine in healthy athletes with adequate protein intake has shown limited direct effects on muscle protein synthesis or hypertrophy in multiple trials. The leucine/EAA pathway is the dominant driver of MPS; glutamine's role in muscle is more about endurance/recovery substrate than direct anabolic signaling.",
    ],
  },
  {
    id: "research",
    title: "What does glutamine actually do?",
    intro:
      "Glutamine has a clear two-tier evidence base — strong in clinical/stress contexts, modest in healthy-athlete contexts. The honest framing: gut barrier integrity, critical-illness immunonutrition, and conditionally-essential applications during major stress have robust evidence. Direct effects on muscle protein synthesis, hypertrophy, or strength in well-fed healthy athletes are smaller and inconsistent.",
    body: [
      "Gut barrier / intestinal permeability (Moderate-to-Strong). Wang 2015 review documents consistent reductions in permeability markers (lactulose:mannitol ratio, zonulin) with glutamine supplementation in athletes during intense training, IBD patients, and critical illness. Strongest non-clinical use case.",
      "Immune cell function during catabolic stress (Strong, mechanistically). Newsholme 2001 documents immune cells become functionally glutamine-dependent during proliferation. Practical translation: glutamine supports immune function during overtraining, illness, or stress — less relevant for stable healthy athletes.",
      "Critical-illness immunonutrition (Tier-dependent; was Strong, now Mixed after REDOXS). Older RCTs supported parenteral glutamine in ICU contexts for reduced infections and length of stay. The 2013 REDOXS trial complicated this — high-dose pharmaco-nutrition with glutamine in shock/MOF patients showed increased mortality. Current clinical practice has shifted toward tailored rather than routine glutamine in ICU — supervised by ICU specialists.",
      "Post-surgical recovery (Moderate). Glutamine-containing immunonutrition formulas (typically combined with arginine, omega-3, and antioxidant micronutrients) reduce post-operative infections in upper-GI and head-and-neck surgery contexts.",
      "Inflammatory bowel disease (Moderate). Clinical research documents oral glutamine reduces intestinal permeability and may reduce IBD symptoms — supportive evidence, not first-line therapy.",
      "Wound healing in burns and trauma (Moderate). Glutamine supports the rapid amino acid demand of healing tissue. Standard component of burn and trauma nutrition protocols.",
      "Reduction in URTI incidence in athletes (Modest). Some trials in endurance athletes and military training contexts document reduced upper respiratory tract infection incidence with glutamine supplementation during heavy training blocks.",
      "Muscle protein synthesis in healthy athletes (Weak). Multiple trials (Candow 2001, others) show limited direct effects of glutamine on MPS, strength, or hypertrophy in resistance-trained athletes consuming adequate protein.",
      "Body composition (Weak). Similar — most trials show no significant effect in healthy athletes with adequate dietary protein.",
      "Glycogen replenishment (Modest). Older research suggested glutamine improved muscle glycogen resynthesis post-exercise. Effect size is modest and largely supplanted by attention to carbohydrate timing.",
      "Chemotherapy-induced mucositis and side effects (Moderate in specific regimens). Glutamine has shown benefit for mucositis, neuropathy, and diarrhea in 5-FU, oxaliplatin, and paclitaxel chemotherapy — under oncology supervision only.",
    ],
  },
  {
    id: "dosing",
    title: "How is glutamine dosed?",
    intro:
      "Glutamine dosing scales with intent: low for general healthy-athlete use, higher for gut barrier targeting, much higher for clinical contexts under supervision. GI tolerance is excellent across the supplemental range — glutamine has one of the highest tolerable doses of any amino acid.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">General healthy-athlete recovery.</span> 5–10 g daily, often post-workout and/or pre-bed. Modest direct hypertrophy/strength benefit in well-fed athletes — most value is in gut and immune support.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Gut barrier / intestinal permeability support.</span> 10–20 g daily in 2–3 divided doses. Effect emerges over 4–8 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">High training volume / endurance overtraining.</span> 10–20 g daily, often split 5 g post-workout + 5–10 g pre-bed.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">URTI prevention during heavy training blocks.</span> 5–10 g daily during the high-volume window.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Post-surgical recovery (clinical context).</span> 15–30 g daily under medical supervision, often as part of immunonutrition formulas alongside arginine, omega-3s, and antioxidants.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Inflammatory bowel disease (adjunct).</span> 10–30 g daily under gastroenterology supervision.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Critical illness / ICU contexts.</span> Specialist-managed — current evidence does not support routine high-dose glutamine in shock/MOF (REDOXS findings).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Chemotherapy side-effect support.</span> 15–30 g/day under oncology supervision for specific regimens (5-FU, oxaliplatin, paclitaxel).</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: gut barrier effects build over 4–8 weeks. URTI/immune effects relevant during the supplemented window. No acute single-dose performance effect — glutamine is not a pre-workout supplement. Effects are subtle and chronic.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Form note.</span> L-glutamine free amino acid is the standard form. Alanyl-glutamine (a dipeptide) is more stable in solution and used in some clinical contexts but is not necessary for typical oral supplementation. Glutamine is unstable at high temperature in solution — don&apos;t mix into hot beverages.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take glutamine",
    intro:
      "Glutamine is taken orally as powder (the standard form at typical doses) or capsules. The practical considerations are dose splitting for gut applications, avoiding hot solutions (heat instability), and consistency for chronic effects.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">1–3× daily depending on dose. For gut barrier support (10–20 g/day), split into 2–3 servings to maintain steadier intestinal exposure. For general recovery (5–10 g), 1× post-workout or pre-bed is fine.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Post-workout pairs with dietary protein. Pre-bed pairs with overnight muscle protein synthesis. For gut support, spread doses across the day. Neither timing has strong evidence over the other for general use.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With or without food per tolerance. Mix into room-temperature water or cold beverages. Avoid hot beverages — glutamine is heat-unstable in solution.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">L-glutamine free amino acid powder is the standard form and what most research uses. Capsules acceptable at low doses (5 g requires ~10 capsules). Alanyl-glutamine dipeptide is more stable in solution but typically not necessary for oral use.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Pharmaceutical-grade L-glutamine from cGMP-certified facility. Third-party tested for purity. Reputable brands: Now Foods, Thorne, Pure Encapsulations, Bulk Supplements, Optimum Nutrition.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling required. Store in cool dry conditions. Don&apos;t pre-mix solutions and leave them sitting — degrades at room temperature in water over hours.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does glutamine stack with?",
    intro:
      "Glutamine pairs naturally with the broader recovery and gut-health supplement clusters. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Glutamine pairs naturally with the gut-healing peptide cluster — particularly{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
            for gut healing applications. BPC-157 is a peptide derived from gastric protective protein that has documented healing effects on gut tissue, gastric ulcers, and intestinal injury; glutamine provides enterocyte fuel for the cells doing the healing. Mechanism-complementary — BPC-157 drives the healing signal; glutamine supplies the energy substrate.{" "}
            <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>{" "}
            (anti-inflammatory tripeptide) reduces gut inflammation through melanocortin pathway; can stack with glutamine for inflammatory bowel contexts.{" "}
            <Link href="/peptides/larazotide" className="text-[#3A759F] hover:underline">Larazotide</Link>{" "}
            (zonulin antagonist for tight junction regulation in celiac disease) is being studied alongside glutamine for gut barrier applications. None of these combinations have formal RCT validation but the mechanistic rationale is straightforward.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/collagen-peptides" className="text-[#3A759F] hover:underline">Collagen peptides</Link>{" "}
              — connective tissue substrate including for the gut lining&apos;s structural matrix. Complementary gut-health pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/zinc-carnosine" className="text-[#3A759F] hover:underline">Zinc carnosine</Link>{" "}
              — specifically for upper-GI mucosal healing (Helicobacter pylori, gastric ulcers, NSAID gastropathy). Complementary mechanism — zinc carnosine for upper GI; glutamine for whole gut.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/probiotics" className="text-[#3A759F] hover:underline">Probiotics</Link>{" "}
              — gut microbiome support. Different mechanism (microbial composition vs enterocyte fuel) but complementary for gut barrier protocols.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/vitamin-d3" className="text-[#3A759F] hover:underline">Vitamin D3</Link>{" "}
              — immune function foundational supplement. Compatible.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/creatine" className="text-[#3A759F] hover:underline">Creatine</Link>{" "}
              — different mechanism, no overlap, fine to stack for athletic populations.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/vitamin-c" className="text-[#3A759F] hover:underline">Vitamin C</Link>{" "}
              and{" "}
              <Link href="/supplements/zinc" className="text-[#3A759F] hover:underline">zinc</Link>{" "}
              — surgical immunonutrition co-supplements. Standard clinical formulas combine these with glutamine.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Protein powder — provides full amino acid spectrum including some glutamine. Adequate dietary protein (1.6+ g/kg) makes most of the marginal direct-MPS contribution from supplemental glutamine redundant.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Adequate dietary protein.</span> 1.6+ g/kg dietary protein provides ~5–8 g endogenous glutamine from food. Supplementation is most useful when training stress exceeds this baseline.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Address gut barrier drivers.</span> Chronic NSAID use, high alcohol intake, ultra-processed diet, and chronic stress all compromise gut barrier — supplementation works alongside lifestyle factors, not instead of them.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sleep and recovery.</span> Overtraining contexts where glutamine helps are also contexts where sleep optimization helps more.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Consistency.</span> Effects are chronic, not acute. Daily use during the relevant window (training block, illness recovery, gut healing protocol).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hydration.</span> Adequate water intake supports gut barrier function and overall recovery; glutamine doesn&apos;t replace hydration.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Glutamine has one of the cleanest safety profiles of any amino acid supplement. No serious adverse events documented at typical supplemental doses up to 20–30 g/day. The main practical considerations are kidney disease (high amino acid intake), cancer history (glutamine-dependent tumors), and rare genetic conditions.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort at very high single doses (30+ g) — rare; splitting dose resolves.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard supplemental doses in healthy adults.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Kidney disease.</span> High amino acid intake can affect renal nitrogen handling. Coordinate with nephrology if you have CKD or chronic kidney conditions.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Active cancer / cancer history.</span> Some tumors are glutamine-dependent — glutamine supplementation in active cancer should only happen under oncology supervision. The chemotherapy-side-effect protocols are clinician-managed.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Critical illness / ICU contexts.</span> REDOXS trial documented harm from high-dose pharmaco-nutrition in shock/MOF — routine high-dose glutamine in critically ill patients is no longer recommended; specialist-managed only.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Rare glutamine metabolism genetic conditions.</span> Hyperammonemic syndromes related to urea cycle dysfunction — absolute contraindication.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hepatic encephalopathy.</span> Glutamine is metabolized to ammonia in some pathways — caution in advanced liver disease.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented significant pharmacokinetic interactions at typical doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Chemotherapy regimens — coordinate with oncology. Some specific oncology contexts use glutamine therapeutically (chemo side-effect management); others avoid it.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-seizure medications — theoretical concern at very high doses (glutamine → glutamate could affect glutamatergic signaling in seizure disorders). Coordinate with neurology if epilepsy history.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Lactulose (for hepatic encephalopathy) — counterproductive combination; lactulose reduces ammonia, glutamine can increase it.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy and breastfeeding — generally well-tolerated; coordinate with obstetrician for high doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Other amino acid supplements — no significant interactions; routinely combined in clinical immunonutrition formulas.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about glutamine",
    intro:
      "Glutamine biology is well-characterized, but the translation from clear mechanism to clinical-outcome benefit in healthy populations has been more variable than the mechanism predicts.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Healthy-athlete benefit ceiling.</span> Why glutamine&apos;s strong gut/immune mechanism doesn&apos;t translate to substantial direct athletic-performance benefits in well-fed healthy athletes isn&apos;t precisely characterized — likely related to baseline glutamine adequacy from dietary protein and endogenous synthesis. The marginal benefit emerges in specific contexts (overtraining, illness, caloric restriction).
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">REDOXS surprise in critical care.</span> The REDOXS finding of increased mortality with high-dose glutamine in shock/MOF was unexpected given older positive ICU evidence. Whether the harm was specific to the patient population (shock, multi-organ failure), the dosing approach (very high pharmaco-nutritional doses), or other factors isn&apos;t fully resolved. Current practice favors tailored rather than routine ICU glutamine.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Optimal dose for gut barrier.</span> Trials range from 5 to 30 g/day. Dose-response isn&apos;t precisely characterized for intestinal permeability outcomes — 10 g/day is reasonable for most users but optimal dose for specific IBD or athlete contexts may differ.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cancer biology interaction.</span> Glutamine-dependent tumor metabolism is well-documented. Whether supplemental glutamine accelerates cancer growth, has no effect, or is even protective in some contexts is an active oncology research question. Practical guidance: oncology supervision in active cancer.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Stand-alone vs immunonutrition formulas.</span> Most clinical evidence is for glutamine as part of multi-ingredient formulas (Impact, Oxepa) alongside arginine, omega-3, and antioxidants. Stand-alone supplemental glutamine in healthy users may have different effects than the combination formulas&apos; clinical outcomes.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Mental health and CNS effects.</span> Glutamine is the precursor to glutamate, the main excitatory neurotransmitter. Whether supplemental glutamine has subtle CNS effects (anxiety, mood) isn&apos;t precisely characterized in trials.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term very-high-dose safety.</span> 20–30 g/day for months has trial-grade safety data. Years of continuous high-dose use isn&apos;t as well-characterized; the natural-abundance biology suggests safety but long-term trials are limited.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy glutamine",
    intro:
      "Glutamine is widely available as pharmaceutical-grade powder or capsules. Quality is more uniform than in botanical supplements — the active ingredient is a defined amino acid. Cost varies several-fold between brands with negligible quality difference. Powder is dramatically more cost-efficient than capsules at therapeutic doses.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">L-glutamine pharmaceutical grade</span> — the standard form used in clinical and athletic research. Free amino acid form is fine for oral supplementation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested for purity</span> — heavy metals, microbial. USP, NSF, or ConsumerLab certifications add confidence.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Powder for therapeutic doses</span> — 10–20 g/day is dramatically cheaper from powder than capsules (would require 20+ capsules per dose). Mix into cold water; avoid hot beverages.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — Now Foods, Thorne, Pure Encapsulations, Bulk Supplements, Optimum Nutrition, NutraBio, Nutricost. Premium brand price differences are mostly QC transparency, not active ingredient.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Alanyl-glutamine (dipeptide) form</span> is more stable in solution but typically not necessary for oral use — relevant for IV/clinical contexts.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid &quot;proprietary blends&quot; with sub-therapeutic glutamine</span> — many recovery/BCAA products list glutamine in trace amounts. Buy as single ingredient and combine deliberately.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Read serving size carefully</span> — some products list 5 g per serving where serving is 2 scoops; check whether you need 1 or 2 scoops to hit your target dose.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=l-glutamine+powder+pharmaceutical+grade&tag=profpeptide-20" label="Glutamine" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Glutamine FAQ",
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
          Cruzat V, Macedo Rogero M, Noel Keane K, Curi R, Newsholme P. Glutamine: metabolism and immune function, supplementation and clinical translation. Nutrients. 2018;10(11):1564.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/30360490/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/30360490/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Newsholme P. Why is L-glutamine metabolism important to cells of the immune system in health, post-injury, surgery or infection? J Nutr. 2001;131(9 Suppl):2515S-2522S.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11533319/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11533319/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wang B, Wu G, Zhou Z, Dai Z, et al. Glutamine and intestinal barrier function. Amino Acids. 2015;47(10):2143-2154.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/26072126/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/26072126/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Heyland D, Muscedere J, Wischmeyer PE, et al. A randomized trial of glutamine and antioxidants in critically ill patients. N Engl J Med. 2013;368(16):1489-1497.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23594003/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23594003/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Candow DG, Chilibeck PD, Burke DG, Davison KS, Smith-Palmer T. Effect of glutamine supplementation combined with resistance training in young adults. Eur J Appl Physiol. 2001;86(2):142-149.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11822473/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11822473/
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
      "name": "Does glutamine actually help athletic recovery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modestly, and only in specific contexts. Glutamine's strong evidence base is in critical illness, post-surgical recovery, and inflammatory bowel conditions — not in healthy athletes with adequate protein intake. Where glutamine does show athletic benefit: very high training volumes (Olympic-level loads, military training), endurance overtraining contexts, illness-prone athletes, and athletes on caloric restriction. For typical resistance training with 1.6+ g/kg protein intake, glutamine supplementation is largely redundant."
      }
    },
    {
      "@type": "Question",
      "name": "Will glutamine help my gut health or leaky gut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, with moderate evidence. Glutamine is the primary energy source for enterocytes (intestinal lining cells). Clinical research documents oral glutamine reduces intestinal permeability markers in athletes during intense training and in patients with inflammatory bowel conditions. Dosing for gut applications is typically 10–20 g/day in divided doses. Effect emerges over 4–8 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "How much glutamine should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For general healthy-athlete recovery: 5–10 g daily. For gut barrier support: 10–20 g daily in 2–3 divided doses. For high training volume / endurance overtraining: 10–20 g daily. For post-surgical recovery or inflammatory bowel adjunct: clinically supervised dosing 20–30+ g/day. GI tolerance is excellent across this range."
      }
    },
    {
      "@type": "Question",
      "name": "Is glutamine safe long-term?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, with excellent safety profile. Glutamine is the most abundant amino acid in the human body. Trials at 20–30 g/day for several months document no significant adverse events. Specific caveats: kidney disease patients should coordinate with nephrology; cancer patients should coordinate with oncology (glutamine-dependent tumors); rare genetic conditions involving glutamine metabolism are absolute contraindications."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Glutamine: Strong for Gut Barrier and ICU, Modest for Healthy-Athlete Recovery",
  "description": "Glutamine dosing (5–20 g) — strong evidence for gut barrier integrity and critical-illness immunonutrition, modest evidence for healthy-athlete muscle recovery, and the enterocyte-fuel mechanism.",
  "url": "https://profpeptide.com/supplements/glutamine",
  "datePublished": "2026-04-18T00:00:00Z",
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
    { "@type": "ListItem", "position": 3, "name": "Glutamine" }
  ]
};

export default function GlutaminePage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Glutamine</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 27, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> L-glutamine, glutamine monohydrate; clinical dipeptide form: alanyl-glutamine
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Supplement Class:</span> Conditionally essential amino acid / primary enterocyte fuel (gut barrier integrity) / primary immune cell fuel during proliferation / nitrogen transport molecule / glutathione precursor
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Evidence Tier:</span> Two-tier evidence base. <span className="font-semibold">Gut barrier integrity</span> (Moderate-to-Strong; Wang 2015 review): consistent reductions in intestinal permeability markers in athletes and IBD patients at 10–20 g/day. <span className="font-semibold">Critical-illness / surgical immunonutrition</span> (Mixed; REDOXS 2013 documented harm from high-dose pharmaco-nutrition in shock/MOF — routine ICU use no longer recommended). <span className="font-semibold">Healthy-athlete muscle recovery</span> (Modest-to-Weak; Candow 2001 and related trials show limited direct effects in well-fed athletes; benefit emerges in overtraining/illness contexts). Mechanism review: Cruzat 2018, Newsholme 2001.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is glutamine?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Glutamine is the most abundant amino acid in the human body and the primary fuel source for two cell populations that matter disproportionately for health and recovery: enterocytes (the cells lining the intestinal wall) and rapidly dividing immune cells (lymphocytes, macrophages, neutrophils). Under normal conditions, the body synthesizes adequate glutamine to meet these demands — making it &quot;non-essential.&quot; During catabolic stress (surgery, burns, sepsis, major injury, prolonged intense exercise), glutamine demand exceeds endogenous production capacity and plasma glutamine drops — making it conditionally essential. This biology shapes glutamine&apos;s practical evidence base, which is best understood as two distinct tiers rather than a single unified picture. The strong tier covers gut barrier integrity (Wang 2015 review documents consistent reductions in intestinal permeability markers with 10–20 g/day in athletes during heavy training and IBD patients) and critical-illness immunonutrition (older RCTs in surgical and ICU contexts — though the 2013 REDOXS trial complicated routine high-dose ICU glutamine by documenting increased mortality in shock/MOF patients, shifting current practice toward tailored rather than routine use). The modest tier covers healthy-athlete muscle protein synthesis, body composition, and hypertrophy outcomes — multiple RCTs (Candow 2001 and others) in resistance-trained men with adequate dietary protein show limited direct effects of supplemental glutamine on these endpoints. The practical implication for healthy users: glutamine is one of the better-evidenced supplements for gut barrier targeting, immune support during overtraining or illness, and post-surgical recovery contexts — but it is not a primary muscle-building or strength-building supplement in well-fed athletes. The Cruzat 2018 and Newsholme 2001 reviews are the foundational mechanism references. Glutamine pairs naturally with{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
            for gut healing applications — BPC-157 drives the healing signal; glutamine supplies enterocyte fuel.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Gut barrier integrity and reduced intestinal permeability (Wang 2015; 10–20 g/day in divided doses)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Immune cell function support during catabolic stress (Newsholme 2001)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced upper respiratory tract infection incidence in heavy-training athletes</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Post-surgical recovery support (immunonutrition formulas)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Chemotherapy-induced mucositis, neuropathy, and diarrhea support (specific regimens, oncology supervision)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Inflammatory bowel disease adjunct (under gastroenterology supervision)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Glutathione synthesis support during oxidative stress</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Nitrogen transport and amino acid availability during high-demand contexts</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common dose:</span> 5–10 g daily for general use; 10–20 g daily in 2–3 divided doses for gut barrier support; 15–30+ g daily under clinical supervision for surgical recovery, IBD adjunct, or chemo side-effect support. Mix into cold water (heat-unstable in solution). No acute single-dose performance effect — chronic supplementation only.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Watch for:</span> Cancer history (glutamine-dependent tumors — oncology supervision in active cancer); kidney disease (high amino acid intake — nephrology coordination); critical illness/ICU contexts (REDOXS findings; specialist-managed only); rare glutamine metabolism genetic conditions (absolute contraindication); generally exceptional safety profile in healthy adults.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=l-glutamine+powder+pharmaceutical+grade&tag=profpeptide-20" label="Glutamine" />
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
        {["Gut Barrier", "Immune Function", "Conditionally Essential", "Enterocyte Fuel", "Critical Care", "REDOXS"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/collagen-peptides" className="text-sm font-medium text-[#3A759F] hover:underline">Collagen Peptides</Link>
          <Link href="/supplements/zinc-carnosine" className="text-sm font-medium text-[#3A759F] hover:underline">Zinc Carnosine</Link>
          <Link href="/supplements/probiotics" className="text-sm font-medium text-[#3A759F] hover:underline">Probiotics</Link>
          <Link href="/supplements/hyaluronic-acid" className="text-sm font-medium text-[#3A759F] hover:underline">Hyaluronic Acid</Link>
          <Link href="/supplements/vitamin-c" className="text-sm font-medium text-[#3A759F] hover:underline">Vitamin C</Link>
          <Link href="/supplements/zinc" className="text-sm font-medium text-[#3A759F] hover:underline">Zinc</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Glutamine" pagePath="/supplements/glutamine" />
    </div>
    </>
  );
}
