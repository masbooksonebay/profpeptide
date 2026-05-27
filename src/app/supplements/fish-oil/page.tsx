import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/fish-oil",
  title: "Fish Oil: EPA + DHA for Inflammation, Triglycerides, Brain Health",
  description:
    "Fish oil dosing (1–4 g EPA+DHA), the REDUCE-IT vs STRENGTH trial divergence, the AFib signal at high doses, and how it stacks with BPC-157 healing protocols.",
});

const faqs = [
  {
    q: "How much fish oil should I take?",
    a: "Depends on goal. For general health (anti-inflammatory baseline): 1–2 g combined EPA+DHA daily. For elevated triglycerides or active inflammatory conditions: 2–4 g combined EPA+DHA daily. For cardiovascular risk reduction (REDUCE-IT protocol): 4 g daily of high-purity EPA (icosapent ethyl, prescription Vascepa). Read the label for EPA+DHA content per serving — most fish oil products contain only 300–600 mg EPA+DHA per 1 g of total fish oil (the rest is other fats). To hit 2 g EPA+DHA you may need 4–6 capsules of typical products.",
  },
  {
    q: "What's the difference between fish oil, krill oil, and algae oil?",
    a: "Different sources with different profiles. Fish oil (from fatty fish bodies) is the most-studied form — typically 18% EPA + 12% DHA in standard products, or higher concentrations in re-esterified or concentrated forms. Krill oil (from Antarctic krill) contains phospholipid-bound omega-3s (claimed better absorption) plus astaxanthin — but at much lower per-capsule EPA+DHA, making it cost-inefficient at therapeutic doses. Algae oil (vegan source, microalgae) is mostly DHA with limited EPA — useful for vegetarians but not equivalent for the EPA-dominant anti-inflammatory and cardiovascular evidence. Practical default: high-purity concentrated fish oil with 60%+ EPA+DHA combined.",
  },
  {
    q: "What's the deal with REDUCE-IT vs STRENGTH trial divergence?",
    a: "Two large cardiovascular trials produced opposite results, leaving the omega-3 + CV outcome question more nuanced than the marketing suggests. REDUCE-IT (Bhatt 2019, n=8,179, Vascepa 4g pure EPA in high-CV-risk patients on statins) found 25% reduction in major adverse cardiovascular events. STRENGTH (2020, n=13,078, omega-3 carboxylic acid 4g EPA+DHA in similar population) found no CV benefit. The divergence may be explained by: (1) EPA-only vs EPA+DHA mixed product differences; (2) placebo choice (REDUCE-IT used mineral oil, possibly biologically active and increasing CV events in placebo group, inflating relative benefit); (3) population differences. Honest framing: high-dose pure EPA may have CV benefit in specific populations (high triglycerides, on statins, high CV risk); generic EPA+DHA fish oil for primary prevention in healthy adults has thinner outcome evidence than expected.",
  },
  {
    q: "Is there really an atrial fibrillation signal at high doses?",
    a: "Yes, modest but real. Several large omega-3 trials (REDUCE-IT, STRENGTH, OMEMI) have documented modest increased rates of atrial fibrillation in the active-treatment arms at doses of 1+ g/day EPA+DHA. The 2024 meta-analyses consistently confirm this signal. Absolute risk increase is small (~1% absolute over years of treatment), but real. Practical implications: (1) For users without AFib history or family history, the benefit-risk balance at 1–2 g/day is favorable. (2) For users with AFib history, paroxysmal AFib, or strong family history, coordinate with cardiologist before high-dose omega-3 supplementation. (3) The AFib signal is dose-dependent — modest doses (1 g/day or less) have minimal AFib signal.",
  },
  {
    q: "Can I stack fish oil with BPC-157 or other healing peptides?",
    a: (
      <>
        Yes — and the stack is mechanistically natural for users targeting tissue recovery and inflammation modulation.{" "}
        <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
        is a healing peptide that accelerates tissue repair through angiogenic and growth-factor signaling — particularly relevant for tendon, ligament, and gut injuries. Fish oil operates at a different layer: EPA-derived resolvins and protectins actively resolve inflammation (rather than just blocking it like NSAIDs), and DHA supports membrane fluidity in healing tissues. The peptides drive tissue repair signaling; omega-3s reduce inflammatory background that limits healing. Mechanistically complementary, no known negative interactions. Particularly useful in tendon/ligament/gut healing contexts where chronic inflammation is the limiting factor for repair.{" "}
        <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
        is a third compatible healing-cluster peptide.
      </>
    ),
  },
  {
    q: "Do I need fish oil if I eat fish regularly?",
    a: "Depends on what fish and how much. A serving of fatty fish (salmon, mackerel, sardines, herring) 2-3× per week provides approximately the 1 g/day EPA+DHA baseline that general-health protocols target. The American Heart Association recommends this dietary pattern as the first-line approach. If your fish consumption is lower than 2 servings/week, or if you're targeting therapeutic doses (2-4 g/day for inflammation or triglycerides), supplementation makes more sense. White fish (cod, tilapia, tuna) is much lower in omega-3 than fatty fish — counts as protein but doesn't meaningfully shift omega-3 status. Practical assessment: omega-3 index blood test ($50-100 retail) measures your actual EPA+DHA membrane content and removes guesswork.",
  },
  {
    q: "How do I avoid the fishy burps and aftertaste?",
    a: "Several practical mitigations: (1) Take with meals containing fat — both improves absorption and reduces GI upset. (2) Refrigerate after opening — keeps fish oil from oxidizing and reduces fishy aftertaste. (3) Enteric-coated capsules — release in small intestine rather than stomach, significantly reducing reflux. (4) Burp-free formulations with citrus or mint coatings. (5) Concentrated products at higher EPA+DHA per capsule — fewer capsules per dose means less total fish protein/oil for reflux. (6) Check freshness — rancid fish oil produces strong fishy odor and is the most common cause of bad burps. Practical default: high-concentration capsules taken with dinner, store opened bottle in fridge.",
  },
  {
    q: "Is fish oil oxidation a real problem?",
    a: "Yes, and it's the most-overlooked quality issue in this category. Oxidized fish oil contains lipid peroxides that may be biologically harmful rather than beneficial — potentially pro-inflammatory at the dose-response point where fresh fish oil is anti-inflammatory. Independent testing (Consumer Reports, ConsumerLab, Labdoor) has found oxidation levels above international standards in significant fractions of commercial products. Mitigations: (1) Buy products that disclose TOTOX (total oxidation) values below 26 mEq/kg (the standard). (2) Avoid products with strong fishy odor when opened (rancidity indicator). (3) Refrigerate after opening. (4) Use within 3 months of opening. (5) Buy smaller bottles and consume faster rather than mega-bottles. Quality matters more in fish oil than in most supplements.",
  },
];

const studies = [
  {
    title: "Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia (REDUCE-IT)",
    authors: "Bhatt DL, Steg PG, Miller M, et al.",
    journal: "New England Journal of Medicine",
    year: "2019",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/30415628/",
    summary: "A double-blind RCT of 4 g/day icosapent ethyl (pure prescription EPA, Vascepa) vs mineral oil placebo in 8,179 statin-treated patients with elevated triglycerides and high cardiovascular risk. Icosapent ethyl significantly reduced major adverse cardiovascular events by 25% over 4.9 years of follow-up. The REDUCE-IT trial is the foundational evidence for high-dose pure-EPA cardiovascular benefit and the basis for Vascepa's FDA approval. Note: the choice of mineral oil placebo (possibly biologically active in raising LDL/inflammation) has been criticized as potentially inflating the relative benefit by harming the placebo arm.",
  },
  {
    title: "Effect of High-Dose Omega-3 Fatty Acids vs Corn Oil on Major Adverse Cardiovascular Events in Patients at High Cardiovascular Risk (STRENGTH)",
    authors: "Nicholls SJ, Lincoff AM, Garcia M, et al.",
    journal: "JAMA",
    year: "2020",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/33190147/",
    summary: "A double-blind RCT of 4 g/day omega-3 carboxylic acid (mixed EPA + DHA) vs corn oil placebo in 13,078 high-CV-risk statin-treated patients. STRENGTH found NO cardiovascular benefit from omega-3 supplementation, terminated early for futility. The opposite result from REDUCE-IT triggered ongoing debate about whether the divergence is due to EPA-only vs EPA+DHA, placebo choice (mineral oil vs corn oil), or other factors. The STRENGTH null result cools the case for routine high-dose omega-3 cardiovascular supplementation in primary prevention contexts.",
  },
  {
    title: "Omega-3 Fatty Acids and Inflammatory Processes: From Molecules to Man",
    authors: "Calder PC",
    journal: "Biochemical Society Transactions",
    year: "2017",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/29150525/",
    summary: "A comprehensive review of omega-3 anti-inflammatory mechanisms — EPA-derived eicosanoids vs arachidonic-acid-derived eicosanoids (omega-6), resolvin and protectin production (specialized pro-resolving mediators), membrane composition effects, and clinical evidence in inflammatory conditions. The Calder 2017 review is the most-cited single-source mechanism reference for omega-3 anti-inflammatory effects and frames the resolvin/protectin SPM mechanism that distinguishes omega-3s from generic anti-inflammatories.",
  },
  {
    title: "Effects of Omega-3 Fatty Acid Supplementation on Cognitive Function in Older Adults: A Meta-Analysis",
    authors: "Yurko-Mauro K, Alexander DD, Van Elswyk ME",
    journal: "PLOS ONE",
    year: "2015",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/25786262/",
    summary: "A meta-analysis of 5 RCTs (n=1,070) of DHA supplementation in older adults with mild cognitive impairment or age-related cognitive decline. DHA supplementation produced statistically significant improvements in episodic memory function vs placebo. Effect sizes were modest but consistent. The Yurko-Mauro 2015 meta-analysis supports the DHA cognitive-maintenance use case in older populations.",
  },
  {
    title: "Triglyceride Reduction with Omega-3 Fatty Acids: A Meta-Analysis",
    authors: "Eslick GD, Howe PR, Smith C, Priest R, Bensoussan A",
    journal: "International Journal of Cardiology",
    year: "2009",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/18774613/",
    summary: "A meta-analysis of 47 RCTs of omega-3 supplementation on triglyceride levels. Omega-3 (EPA+DHA) significantly reduced triglycerides in a dose-dependent manner, with 4 g/day producing approximately 25–30% triglyceride reduction. This is the most-cited triglyceride-effect summary and supports the FDA-approved indication for prescription omega-3 in severe hypertriglyceridemia.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does fish oil work?",
    intro:
      "Fish oil works through EPA and DHA — long-chain omega-3 fatty acids that incorporate into cell membranes and produce anti-inflammatory eicosanoids and specialized pro-resolving mediators (resolvins, protectins, maresins). The anti-inflammatory mechanism is distinct from NSAIDs: omega-3-derived SPMs actively resolve inflammation rather than just blocking inflammatory pathway production.",
    body: [
      "EPA and DHA membrane incorporation. EPA and DHA replace some of the arachidonic acid (omega-6) in cell membranes throughout the body — particularly in brain, retina, heart, and immune cells. This shifts the substrate available for eicosanoid production from pro-inflammatory omega-6 derived to anti-inflammatory or neutral omega-3 derived.",
      "Eicosanoid balance shift. Arachidonic acid (omega-6) produces pro-inflammatory eicosanoids (PGE2, LTB4, TXA2). EPA produces structurally similar but functionally less inflammatory or anti-inflammatory eicosanoids (PGE3, LTB5, TXA3). Higher EPA:AA ratio shifts the inflammatory tone of the entire eicosanoid system.",
      "Resolvin and protectin production (specialized pro-resolving mediators). EPA and DHA are precursors to SPMs — resolvins (D-series from DHA, E-series from EPA), protectins, and maresins — that actively promote resolution of inflammation and tissue repair. This is mechanistically distinct from NSAIDs (which block inflammation production); SPMs turn off inflammatory processes that are already in motion.",
      "Triglyceride reduction. EPA and DHA reduce hepatic triglyceride synthesis (via SREBP-1c inhibition) and increase triglyceride clearance from circulation. The triglyceride-lowering effect is the strongest and most consistent clinical finding for fish oil — Eslick 2009 meta-analysis of 47 RCTs documents 25–30% triglyceride reduction at 4 g/day.",
      "DHA structural role in brain and retina. DHA is the dominant structural omega-3 in neuronal cell membranes (~30% of brain phospholipid omega-3 content) and the retina (~50% of retinal omega-3). Adequate DHA supports membrane fluidity, neurotransmitter receptor function, and synaptic plasticity.",
      "Anti-arrhythmic effects (mixed). Omega-3s have documented anti-arrhythmic effects at the cellular level, but the clinical translation is mixed — small benefit for some arrhythmias, modest increased risk for atrial fibrillation at high doses (1+ g/day). The AFib signal is the central recent safety consideration.",
      "Insulin sensitivity and inflammation. Omega-3 incorporation into immune cell membranes reduces pro-inflammatory cytokine production (TNF-α, IL-6, IL-1β) and improves insulin sensitivity modestly. Mechanism overlaps with the broader anti-inflammatory pathway.",
    ],
  },
  {
    id: "research",
    title: "What does fish oil actually do?",
    intro:
      "Fish oil has one of the deepest evidence bases of any supplement — but the clinical-outcome picture is more nuanced than the marketing suggests. Triglyceride reduction is unambiguous and clinically meaningful. Cardiovascular outcome benefit is divergent (REDUCE-IT positive for pure-EPA in specific high-risk population; STRENGTH null for mixed EPA+DHA in similar population). Anti-inflammatory effects are well-documented. Cognitive effects in older adults are modest.",
    body: [
      "Triglyceride reduction (Strong). Eslick 2009 meta-analysis of 47 RCTs documents 25–30% triglyceride reduction at 4 g/day. Prescription EPA (Vascepa) and prescription EPA+DHA (Lovaza) are FDA-approved for severe hypertriglyceridemia. Most consistent clinical finding for fish oil.",
      "Cardiovascular outcomes (Mixed — REDUCE-IT vs STRENGTH divergence). REDUCE-IT (Bhatt 2019) showed 25% MACE reduction with 4 g/day pure EPA in high-CV-risk statin-treated patients. STRENGTH (2020) showed NO CV benefit with 4 g/day EPA+DHA in similar population. The divergence remains unresolved — placebo choice (mineral oil vs corn oil), EPA-only vs EPA+DHA, and population differences may all contribute.",
      "Atrial fibrillation signal (Modest but real, dose-dependent). Multiple large trials document increased AFib incidence at 1+ g/day EPA+DHA doses. Absolute risk increase is small (~1% over years) but consistent across the trial base. Most relevant for users with AFib history or family history.",
      "Anti-inflammatory biomarkers (Strong). Calder 2017 review summarizes consistent reductions in CRP, IL-6, TNF-α across multiple inflammatory conditions. Resolvin and protectin production from EPA/DHA is the active resolution mechanism.",
      "Cognitive function in older adults (Moderate). Yurko-Mauro 2015 meta-analysis of DHA in older adults with cognitive complaints documented significant episodic memory improvement. Effect sizes are modest but consistent.",
      "Depression (Moderate, particularly for EPA-dominant supplementation). Multiple meta-analyses suggest omega-3 (particularly EPA-dominant) provides modest antidepressant effects, larger when used as adjunct to standard treatment.",
      "Rheumatoid arthritis and inflammatory conditions (Moderate). Modest symptom reduction in inflammatory autoimmune conditions with chronic omega-3 supplementation (3–4 g/day for several months).",
      "Pregnancy and fetal brain development (Moderate). DHA supplementation during pregnancy supports fetal brain and retinal development. Standard prenatal omega-3 recommendations are well-established.",
      "Cardiovascular outcomes in primary prevention (Mixed/Weak). Routine omega-3 supplementation for primary prevention of cardiovascular disease in healthy adults has less robust evidence than the secondary-prevention REDUCE-IT trial suggests.",
    ],
  },
  {
    id: "dosing",
    title: "How is fish oil dosed?",
    intro:
      "Fish oil dosing depends on goal. For general anti-inflammatory baseline: 1–2 g EPA+DHA daily. For elevated triglycerides or active inflammatory conditions: 2–4 g EPA+DHA daily. For cardiovascular risk reduction per REDUCE-IT: 4 g/day high-purity EPA (prescription Vascepa). Read product labels for actual EPA+DHA content per serving — many fish oil products contain only 300–600 mg per gram of total oil.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">General anti-inflammatory baseline.</span> 1–2 g combined EPA+DHA daily. The dose range AHA recommends for general cardiovascular health.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-inflammatory therapeutic dose.</span> 2–4 g EPA+DHA daily for active inflammatory conditions (rheumatoid arthritis, IBD adjunct, depression adjunct). Effect builds over 8–12 weeks.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Triglyceride reduction.</span> 2–4 g EPA+DHA daily (Eslick 2009 dose-response). For severe hypertriglyceridemia: prescription omega-3 (Vascepa, Lovaza) at 4 g/day under cardiologist supervision.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cardiovascular risk reduction (REDUCE-IT protocol).</span> 4 g/day high-purity EPA (icosapent ethyl, prescription Vascepa) in statin-treated patients with elevated triglycerides and high CV risk. This is the specific population REDUCE-IT validated.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pregnancy DHA support.</span> 200–300 mg/day DHA — standard prenatal omega-3 recommendation. Algae-derived DHA is the vegan option.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">AFib caveat.</span> Users with AFib history or strong family history — coordinate with cardiologist before exceeding 1 g/day. The AFib signal is dose-dependent.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: triglyceride and inflammatory marker effects emerge over 4–8 weeks. Cognitive and depression effects 8–12 weeks. Cardiovascular event reduction (where applicable) requires years of consistent supplementation.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> &ldquo;Fish oil 1,000 mg per capsule&rdquo; typically means 1,000 mg total oil containing 300–600 mg EPA+DHA. Read &ldquo;EPA + DHA per serving&rdquo; explicitly. Concentrated products at 60%+ EPA+DHA require fewer capsules per therapeutic dose. Pure EPA prescriptions (Vascepa) are ~96% EPA per capsule.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take fish oil",
    intro:
      "Fish oil is taken orally as softgels or liquid. The practical considerations are EPA+DHA concentration (read the label), fat coadministration (improves absorption and reduces fishy burps), refrigeration after opening (prevents oxidation), and quality (oxidation is a real industry quality issue).",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Once or twice daily depending on dose. Split AM + PM for higher doses (3+ g) to maintain steady absorption and reduce GI load.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">With largest fat-containing meal — typically dinner. Pre-bed dosing is acceptable; avoid empty stomach (fishy burps).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">ALWAYS with fat-containing meal — significantly improves absorption of fat-soluble omega-3s and reduces fishy reflux. Empty stomach wastes much of the dose and increases fishy burps.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Concentrated fish oil softgels (60%+ EPA+DHA per gram) are the practical default. Triglyceride form (TG) and re-esterified triglyceride form (rTG) absorb better than ethyl ester (EE) form per some studies. Krill oil for users who tolerate fish oil poorly; algae oil for vegans. Prescription pure-EPA Vascepa for users meeting REDUCE-IT clinical criteria.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for &ldquo;EPA + DHA per serving&rdquo; explicitly disclosed (60%+ of total oil is the concentrated form). TOTOX (total oxidation) values below 26 mEq/kg for freshness. Third-party tested for heavy metals (mercury, lead, cadmium) and PCBs (organochlorines). IFOS, USP, NSF, or ConsumerLab certifications. Reputable brands: Nordic Naturals, Carlson, Thorne, Pure Encapsulations.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / storage</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">No cycling needed — chronic daily use is the trial-validated norm. CRITICAL: refrigerate after opening to prevent oxidation; use within 3 months of opening; smaller bottles preferred over mega-bottles for fast turnover. Discard if strong fishy odor (rancidity indicator).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does fish oil stack with?",
    intro:
      "Fish oil pairs naturally with the broader anti-inflammatory and recovery toolkit. The EPA/DHA mechanism complements peptide-level tissue repair, other anti-inflammatory supplements, and cardiovascular adjuncts. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Fish oil pairs naturally with the healing peptide cluster — particularly via the inflammation-resolution axis.{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">BPC-157</Link>{" "}
            is a healing peptide that accelerates tissue repair through angiogenic and growth-factor signaling — particularly relevant for tendon, ligament, and gut injuries.{" "}
            <Link href="/peptides/tb-500" className="text-[#0891b2] hover:underline">TB-500</Link>{" "}
            (thymosin beta-4 fragment) supports cell migration, wound healing, and tissue regeneration.{" "}
            <Link href="/peptides/kpv" className="text-[#0891b2] hover:underline">KPV</Link>{" "}
            (anti-inflammatory tripeptide) reduces tissue inflammation via melanocortin pathway. Fish oil operates at a different mechanism layer: EPA-derived resolvins and protectins actively resolve inflammation (not just block it like NSAIDs); DHA supports membrane fluidity in healing tissues. The peptides drive tissue repair signaling; omega-3 reduces inflammatory background that limits healing. Mechanistically complementary, no known negative interactions. Particularly useful in tendon/ligament/gut healing contexts where chronic inflammation is the limiting factor for repair.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/vitamin-d3" className="text-[#0891b2] hover:underline">Vitamin D3</Link>{" "}
              — both are fat-soluble; take together with fat-containing meal. Compatible cardiovascular + immune support pairing. Note: VITAL trial (vitamin D + omega-3 + cancer + CV outcomes in primary prevention) was largely null on hard endpoints despite mechanism plausibility.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/curcumin" className="text-[#0891b2] hover:underline">Curcumin</Link>{" "}
              — NF-κB inhibition complements omega-3&apos;s eicosanoid-balance and SPM-production arms. Powerful combined anti-inflammatory stack.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/collagen-peptides" className="text-[#0891b2] hover:underline">Collagen peptides</Link>{" "}
              — connective tissue substrate. Pair with omega-3 anti-inflammatory environment for joint and tendon recovery protocols.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/coq10" className="text-[#0891b2] hover:underline">CoQ10</Link>{" "}
              — mitochondrial cofactor and antioxidant. Compatible cardiovascular pairing (Q-SYMBIO heart failure trial used CoQ10; KiSel-10 used CoQ10 + selenium).
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/magnesium" className="text-[#0891b2] hover:underline">Magnesium</Link>{" "}
              — broad cardiovascular and metabolic support. Common foundational supplement pairing.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/quercetin" className="text-[#0891b2] hover:underline">Quercetin</Link>{" "}
              — additional anti-inflammatory flavonoid. Compatible for chronic inflammation contexts.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              Astaxanthin — protects omega-3s from oxidation in vivo; some krill oil products include it naturally. Compatible standalone supplement.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Take with fat-containing meals.</span> Both improves absorption and reduces fishy reflux. Dinner is the practical default.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Refrigerate after opening.</span> Critical for preventing oxidation. Use within 3 months. Discard if strong fishy odor (rancidity indicator).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Dietary omega-3 alongside.</span> Fatty fish 2–3× per week provides foundational omega-3 intake; supplements add on top. Don&apos;t treat supplements as substitute for dietary fish.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reduce omega-6 intake.</span> Vegetable oils (soybean, corn, sunflower) and ultra-processed foods are high in omega-6. Lower omega-6:omega-3 ratio matters as much as raw omega-3 supplementation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Pre-surgical washout.</span> Stop fish oil 1–2 weeks before scheduled surgery — modest antiplatelet effect can increase bleeding. Add to your pre-op checklist.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Omega-3 index blood testing.</span> Measures actual EPA+DHA membrane content. Target range 8–12%. Removes guesswork about whether your dose is adequate.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "Fish oil is generally well-tolerated. The main practical considerations are fishy reflux (preventable), modest antiplatelet effect (relevant for surgery and anticoagulant users), the atrial fibrillation signal at high doses, and the oxidation quality issue.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Fishy burps / aftertaste — common, particularly with empty stomach or lower-quality products. Mitigated by food coadministration, refrigeration, enteric coating, smaller doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort — nausea, loose stools at higher doses. Resolves with food coadministration or dose reduction.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard supplemental doses across the deep RCT base.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Atrial fibrillation signal at high doses.</span> Multiple large trials document modest increased AFib incidence at 1+ g/day EPA+DHA. Absolute risk increase small (~1% over years) but consistent. Most relevant for users with AFib history or strong family history.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Antiplatelet effect.</span> Mild but documented; relevant for surgical pre-op washout (1–2 weeks) and chronic anticoagulant users.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild BP reduction.</span> Modest hypotensive effect at higher doses; relevant if on antihypertensives.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oxidized fish oil concern.</span> Rancid fish oil may be biologically harmful rather than beneficial (pro-inflammatory at the same dose where fresh is anti-inflammatory). Quality matters — third-party testing and proper storage are mitigations.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Heavy-metal contamination — mercury, lead, cadmium documented in some products. Third-party testing is the relevant screen.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anticoagulants (warfarin, apixaban, rivaroxaban) and antiplatelets (clopidogrel).</span> Additive antiplatelet effect. Monitor for unusual bruising; coordinate with prescribing clinician for chronic high-dose use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">NSAIDs (chronic high-dose).</span> Additive bleeding risk. Generally tolerated but worth flagging.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Antihypertensive medications — modest additive BP-lowering effect. Monitor during titration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Statins — generally compatible and often beneficial pairing. REDUCE-IT was specifically in statin-treated patients.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Vitamin E — modest interaction; both are fat-soluble and compete for some absorption pathways.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy and breastfeeding — fish oil DHA supplementation is well-established and recommended (typically 200–300 mg DHA/day). Avoid mercury-contaminated sources.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about fish oil",
    intro:
      "Fish oil has one of the deepest supplement evidence bases, but several recent developments (REDUCE-IT vs STRENGTH divergence, AFib signal, primary prevention null trials) have made the picture more nuanced than the broad marketing suggests.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">REDUCE-IT vs STRENGTH divergence.</span> The two large CV outcome trials produced opposite results with similar populations and doses. Whether the divergence is due to pure EPA vs EPA+DHA, mineral oil vs corn oil placebo (mineral oil possibly biologically active), or other factors remains unresolved. The implication: high-dose pure EPA may have CV benefit in specific populations; generic EPA+DHA fish oil for primary prevention has thinner outcome evidence than expected.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Atrial fibrillation signal.</span> Modest increased AFib incidence at 1+ g/day EPA+DHA across multiple large trials. Mechanism isn&apos;t fully characterized (possibly related to membrane stabilization effects). Practical significance for individual users varies by AFib risk profile. The dose-response curve for AFib risk isn&apos;t precisely characterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Primary prevention CV outcomes.</span> VITAL trial (vitamin D + omega-3 in primary prevention, 25,000+ adults) and related trials have been largely null on hard cardiovascular endpoints in healthy adults despite mechanism plausibility. Routine omega-3 supplementation for primary prevention in healthy adults has less robust evidence than the secondary-prevention REDUCE-IT picture suggests.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Product oxidation prevalence and clinical significance.</span> Independent testing has documented oxidation levels above international standards in significant fractions of commercial products. The clinical significance of consumption of moderately oxidized fish oil isn&apos;t precisely characterized — possibly pro-inflammatory rather than anti-inflammatory at the same dose. Third-party testing is the practical mitigation but the prevalence problem isn&apos;t fully resolved.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">EPA vs DHA differential effects.</span> Some research suggests EPA-dominant supplementation has stronger anti-inflammatory and cardiovascular effects; DHA-dominant has stronger cognitive and structural effects. Whether the EPA:DHA ratio meaningfully affects clinical outcomes is mechanistically reasonable but not precisely characterized in head-to-head trials.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Krill oil vs fish oil bioequivalence.</span> Krill oil contains phospholipid-bound omega-3s with claimed better absorption per gram. Whether the absorption advantage translates to better clinical outcomes per dollar (krill is significantly more expensive per EPA+DHA mg) is unclear.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Algae oil (vegan source) clinical equivalence.</span> Algae-derived DHA is well-characterized; EPA from algae is less concentrated. Whether vegan algae-oil supplementation at equivalent doses produces equivalent clinical outcomes is mechanistically plausible but not as well-tested as fish oil.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy fish oil",
    intro:
      "Fish oil is widely available, but quality varies significantly — oxidation, heavy-metal contamination, and EPA+DHA concentration are real industry quality issues. Third-party testing is more important for fish oil than for most supplements. The screen below is what we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">EPA + DHA per serving explicitly disclosed</span> — read past &ldquo;fish oil 1,000 mg&rdquo; to the actual EPA+DHA content. Concentrated products at 60%+ EPA+DHA mean fewer capsules per dose.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested for purity and oxidation</span> — IFOS (International Fish Oil Standards), USP, NSF, ConsumerLab certifications. TOTOX values below 26 mEq/kg.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mercury, lead, cadmium, PCB testing disclosed</span> — particularly relevant for fish-sourced supplements. Below international standards.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Triglyceride (TG) or re-esterified triglyceride (rTG) form</span> preferred over ethyl ester (EE) form — better absorption per some studies. Most premium brands use TG/rTG form.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reputable brands</span> — Nordic Naturals, Carlson, Thorne, Pure Encapsulations, Life Extension have stronger quality control than generic brands.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Wild-caught small fish source</span> — anchovies, sardines, mackerel preferred over large predator fish (lower mercury bioaccumulation).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Smaller bottles for fast turnover</span> — fish oil oxidizes after opening; use within 3 months. Mega-bottles encourage slower consumption and more oxidation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">For vegans:</span> algae-derived DHA + EPA (Schizochytrium sp. or similar microalgae source). Cost-prohibitive at high therapeutic doses but evidence-supported for DHA-focused use cases.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid strong fishy odor</span> — rancidity indicator. Quality fish oil should have mild, clean smell.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=fish+oil+omega+3+concentrated&tag=profpeptide-20" label="Fish Oil" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Fish Oil FAQ",
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
          Bhatt DL, Steg PG, Miller M, et al. Cardiovascular risk reduction with icosapent ethyl for hypertriglyceridemia. N Engl J Med. 2019;380(1):11-22.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/30415628/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/30415628/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Nicholls SJ, Lincoff AM, Garcia M, et al. Effect of high-dose omega-3 fatty acids vs corn oil on major adverse cardiovascular events in patients at high cardiovascular risk: the STRENGTH randomized clinical trial. JAMA. 2020;324(22):2268-2280.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/33190147/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/33190147/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Calder PC. Omega-3 fatty acids and inflammatory processes: from molecules to man. Biochem Soc Trans. 2017;45(5):1105-1115.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29150525/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29150525/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Yurko-Mauro K, Alexander DD, Van Elswyk ME. Docosahexaenoic acid and adult memory: a systematic review and meta-analysis. PLoS One. 2015;10(3):e0120391.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/25786262/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/25786262/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Eslick GD, Howe PR, Smith C, Priest R, Bensoussan A. Benefits of fish oil supplementation in hyperlipidemia: a systematic review and meta-analysis. Int J Cardiol. 2009;136(1):4-16.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/18774613/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/18774613/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Manson JE, Cook NR, Lee IM, et al. Marine n-3 fatty acids and prevention of cardiovascular disease and cancer (VITAL trial). N Engl J Med. 2019;380(1):23-32.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/30415637/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/30415637/
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
      "name": "How much fish oil should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depends on goal. For general health (anti-inflammatory baseline): 1–2 g combined EPA+DHA daily. For elevated triglycerides or active inflammatory conditions: 2–4 g combined EPA+DHA daily. For cardiovascular risk reduction (REDUCE-IT protocol): 4 g daily of high-purity EPA (icosapent ethyl, prescription Vascepa). Read the label for EPA+DHA content per serving — most fish oil products contain only 300–600 mg EPA+DHA per 1 g of total fish oil."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between fish oil, krill oil, and algae oil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different sources with different profiles. Fish oil is the most-studied form. Krill oil contains phospholipid-bound omega-3s plus astaxanthin — but at much lower per-capsule EPA+DHA, making it cost-inefficient at therapeutic doses. Algae oil (vegan source) is mostly DHA with limited EPA — useful for vegetarians but not equivalent for the EPA-dominant anti-inflammatory and cardiovascular evidence. Practical default: high-purity concentrated fish oil with 60%+ EPA+DHA combined."
      }
    },
    {
      "@type": "Question",
      "name": "What's the deal with REDUCE-IT vs STRENGTH trial divergence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Two large cardiovascular trials produced opposite results. REDUCE-IT (Bhatt 2019, Vascepa 4g pure EPA in high-CV-risk patients on statins) found 25% reduction in major adverse cardiovascular events. STRENGTH (2020, omega-3 carboxylic acid 4g EPA+DHA in similar population) found no CV benefit. The divergence may be explained by EPA-only vs EPA+DHA mixed product differences, placebo choice (mineral oil possibly biologically active), or population differences. Honest framing: high-dose pure EPA may have CV benefit in specific populations; generic EPA+DHA fish oil for primary prevention in healthy adults has thinner outcome evidence."
      }
    },
    {
      "@type": "Question",
      "name": "Is there really an atrial fibrillation signal at high doses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, modest but real. Several large omega-3 trials have documented modest increased rates of atrial fibrillation in the active-treatment arms at doses of 1+ g/day EPA+DHA. The 2024 meta-analyses consistently confirm this signal. Absolute risk increase is small (~1% absolute over years of treatment), but real. For users with AFib history, paroxysmal AFib, or strong family history, coordinate with cardiologist before high-dose omega-3 supplementation. The AFib signal is dose-dependent — modest doses (1 g/day or less) have minimal AFib signal."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack fish oil with BPC-157 or other healing peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the stack is mechanistically natural for users targeting tissue recovery and inflammation modulation. BPC-157 is a healing peptide that accelerates tissue repair. Fish oil operates at a different layer: EPA-derived resolvins and protectins actively resolve inflammation (rather than just blocking it like NSAIDs), and DHA supports membrane fluidity in healing tissues. The peptides drive tissue repair signaling; omega-3s reduce inflammatory background that limits healing. Mechanistically complementary."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need fish oil if I eat fish regularly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depends on what fish and how much. A serving of fatty fish (salmon, mackerel, sardines, herring) 2-3× per week provides approximately the 1 g/day EPA+DHA baseline that general-health protocols target. The American Heart Association recommends this dietary pattern as the first-line approach. If your fish consumption is lower than 2 servings/week, or if you're targeting therapeutic doses (2-4 g/day), supplementation makes more sense. White fish is much lower in omega-3 than fatty fish."
      }
    },
    {
      "@type": "Question",
      "name": "How do I avoid the fishy burps and aftertaste?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Several practical mitigations: (1) Take with meals containing fat. (2) Refrigerate after opening — reduces oxidation and fishy aftertaste. (3) Enteric-coated capsules — release in small intestine. (4) Burp-free formulations with citrus or mint coatings. (5) Concentrated products at higher EPA+DHA per capsule — fewer capsules per dose. (6) Check freshness — rancid fish oil produces strong fishy odor and is the most common cause of bad burps."
      }
    },
    {
      "@type": "Question",
      "name": "Is fish oil oxidation a real problem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and it's the most-overlooked quality issue in this category. Oxidized fish oil contains lipid peroxides that may be biologically harmful rather than beneficial — potentially pro-inflammatory at the dose-response point where fresh fish oil is anti-inflammatory. Independent testing has found oxidation levels above international standards in significant fractions of commercial products. Mitigations: Buy products that disclose TOTOX values below 26 mEq/kg; avoid products with strong fishy odor; refrigerate after opening; use within 3 months; buy smaller bottles."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Fish Oil: EPA + DHA for Inflammation, Triglycerides, Brain Health",
  "description": "Fish oil dosing (1–4 g EPA+DHA), the REDUCE-IT vs STRENGTH trial divergence, the AFib signal at high doses, and how it stacks with BPC-157 healing protocols.",
  "url": "https://profpeptide.com/supplements/fish-oil",
  "datePublished": "2026-04-07T00:00:00Z",
  "dateModified": "2026-05-26T00:00:00Z",
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
    { "@type": "ListItem", "position": 3, "name": "Fish Oil" }
  ]
};

export default function FishOilPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Fish Oil</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Omega-3, EPA, DHA, omega-3 fatty acids, marine omega-3, icosapent ethyl (prescription pure EPA / Vascepa), omega-3 ethyl esters (Lovaza)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Long-chain omega-3 polyunsaturated fatty acids (EPA + DHA) / membrane phospholipid component / resolvin and protectin precursor / triglyceride-lowering agent
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Strong (triglyceride reduction, anti-inflammatory biomarkers) — Eslick 2009 meta-analysis (47 RCTs); Calder 2017 mechanism review. Mixed (cardiovascular outcomes) — REDUCE-IT 2019 (pure EPA) positive vs STRENGTH 2020 (EPA+DHA) null in similar populations. Modest atrial fibrillation signal at 1+ g/day across multiple trials. Modest cognitive evidence (Yurko-Mauro 2015 DHA in older adults). One of the deepest supplement evidence bases but more nuanced than marketing suggests.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is fish oil?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Fish oil is a rich source of long-chain omega-3 polyunsaturated fatty acids — primarily eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA). These essential fatty acids incorporate into cell membranes throughout the body — particularly brain, retina, heart, and immune cells — where they influence membrane fluidity, eicosanoid production, and the synthesis of specialized pro-resolving mediators (resolvins, protectins, maresins) that actively resolve inflammation. The Western diet is severely deficient in omega-3s relative to omega-6 fatty acids — typical ratios of 15:1 to 20:1 vs the ancestral ratio of approximately 4:1 — driving chronic low-grade inflammation that underlies cardiovascular disease, metabolic syndrome, and accelerated aging. Fish oil has one of the deepest supplement evidence bases in existence, but recent developments have made the picture more nuanced: REDUCE-IT (Bhatt 2019) showed 25% MACE reduction with 4 g/day pure EPA in high-CV-risk statin-treated patients, but STRENGTH (2020) showed NO benefit with 4 g/day EPA+DHA in similar population. Multiple trials document modest atrial fibrillation signal at 1+ g/day. Triglyceride reduction (25–30% at 4 g/day) and anti-inflammatory biomarker effects remain unambiguously strong. Fish oil pairs naturally with{" "}
            <Link href="/peptides/bpc-157" className="text-[#0891b2] hover:underline">healing peptides like BPC-157 and TB-500</Link>{" "}
            via the inflammation-resolution axis — particularly useful in tendon/ligament/gut healing contexts.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Triglyceride reduction (25–30% at 4 g/day; Eslick 2009 meta-analysis of 47 RCTs)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cardiovascular event reduction in specific high-risk populations (REDUCE-IT 2019 pure EPA)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory biomarker reductions (CRP, IL-6, TNF-α) via eicosanoid balance + resolvin production</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Cognitive maintenance in older adults (Yurko-Mauro 2015 DHA meta-analysis)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Antidepressant adjunct effect (particularly EPA-dominant)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy DHA supplementation for fetal brain and retinal development</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Rheumatoid arthritis and inflammatory condition symptom reduction</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Gut microbiome diversity support</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 1–2 g combined EPA+DHA daily for general anti-inflammatory baseline; 2–4 g for active inflammatory conditions or triglyceride reduction; 4 g/day pure EPA (prescription Vascepa) for REDUCE-IT cardiovascular protocol. Read labels carefully — most fish oil products contain only 300–600 mg EPA+DHA per 1 g total oil. Always with fat-containing meals.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Watch for:</span> Atrial fibrillation signal at 1+ g/day (modest but real; coordinate with cardiologist if AFib history); antiplatelet effect (1–2 week pre-op washout); oxidized fish oil (rancid products may be pro-inflammatory rather than anti-inflammatory — quality matters more here than most supplements); refrigerate after opening; use within 3 months.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=fish+oil+omega+3+concentrated&tag=profpeptide-20" label="Fish Oil" />
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
        {["Omega-3", "EPA", "DHA", "Triglycerides", "Resolvins", "REDUCE-IT", "AFib Signal"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/vitamin-d3" className="text-sm font-medium text-[#0891b2] hover:underline">Vitamin D3</Link>
          <Link href="/supplements/curcumin" className="text-sm font-medium text-[#0891b2] hover:underline">Curcumin</Link>
          <Link href="/supplements/collagen-peptides" className="text-sm font-medium text-[#0891b2] hover:underline">Collagen Peptides</Link>
          <Link href="/supplements/coq10" className="text-sm font-medium text-[#0891b2] hover:underline">CoQ10</Link>
          <Link href="/supplements/magnesium" className="text-sm font-medium text-[#0891b2] hover:underline">Magnesium</Link>
          <Link href="/supplements/quercetin" className="text-sm font-medium text-[#0891b2] hover:underline">Quercetin</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Fish Oil" pagePath="/supplements/fish-oil" />
    </div>
    </>
  );
}
