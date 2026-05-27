import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/alpha-lipoic-acid",
  title: "Alpha Lipoic Acid: Universal Antioxidant + Neuropathy Evidence",
  description:
    "Alpha lipoic acid dosing, R-ALA vs racemic, the diabetic neuropathy RCT evidence, and how it stacks with mitochondrial peptides like MOTS-c and NAD+.",
});

const faqs = [
  {
    q: "R-ALA vs racemic ALA — which form should I take?",
    a: "R-ALA (R-alpha lipoic acid) is the naturally occurring stereoisomer and roughly 12× more bioavailable than the unnatural S-ALA enantiomer. Standard racemic ALA is a 50/50 mixture of R-ALA + S-ALA — the S-ALA half is essentially inert and may even compete with R-ALA absorption. For equivalent serum R-ALA: 200–300 mg R-ALA ≈ 600 mg racemic ALA. Practical default: stabilized R-ALA (Na-R-ALA / sodium R-lipoate) at 300–600 mg/day for metabolic/antioxidant use. Standard racemic ALA at 600–1,200 mg/day is acceptable budget option but less efficient. R-ALA is what the European diabetic neuropathy clinical use is built on.",
  },
  {
    q: "Why take alpha lipoic acid on an empty stomach?",
    a: "Food reduces ALA absorption by up to 30% because ALA competes with dietary amino acids for transporter-mediated gut absorption. The conservative protocol: 30–60 minutes before meals, twice daily. Practical version: take morning dose 30 minutes before breakfast; second dose 30+ minutes before lunch or dinner. The empty-stomach effect is real but not catastrophic — if you can only take ALA with food, take it with the lowest-protein meal. Some users report mild GI discomfort on empty stomach; resolves with smaller doses or split timing.",
  },
  {
    q: "Does ALA actually help diabetic neuropathy?",
    a: "Yes — and it's actually approved for this indication in Germany and other European countries. Multiple RCTs and meta-analyses (Ziegler 1995, Ziegler 2006, Mijnhout 2012) demonstrate ALA significantly reduces neuropathy symptoms (pain, burning, numbness, paresthesia) in diabetic peripheral neuropathy. Intravenous ALA (600 mg/day for 3 weeks) produces the most dramatic effects; oral ALA (600–1,800 mg/day for 4–8 weeks) produces moderate but consistent benefits. This is the most clinically-validated ALA application. For US users without prescription IV ALA access, oral 600 mg twice daily for 8+ weeks is the practical protocol — coordinate with prescribing clinician.",
  },
  {
    q: "Will ALA help with weight loss?",
    a: "Modestly. A 2018 meta-analysis (Namazi et al.) of 12 RCTs found ALA produced statistically significant weight reduction vs placebo, with greater effects at higher doses (1,200+ mg/day). The mechanism is likely AMPK activation (similar pathway as berberine and metformin) plus modest appetite reduction. Effect sizes are clinically meaningful but small (~1.5 kg average across trials). This isn't GLP-1 peptide weight-loss territory; ALA is a 1–2% nudge in the right direction. Useful adjunct in metabolic weight protocols, not a standalone weight-loss intervention.",
  },
  {
    q: "Can I stack ALA with MOTS-c or NAD+ peptide?",
    a: (
      <>
        Yes — the stack is mechanistically natural for users targeting mitochondrial function and metabolic health.{" "}
        <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">MOTS-c</Link>{" "}
        is a mitochondrial-derived peptide that activates AMPK, improves insulin sensitivity, and supports mitochondrial biogenesis at the genetic/regulatory level.{" "}
        <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+ peptide</Link>{" "}
        delivers the essential cofactor for sirtuins and the electron donor for Complex I of the electron transport chain. ALA operates at multiple layers: AMPK activation (overlapping with MOTS-c mechanism), mitochondrial cofactor activity (pyruvate dehydrogenase and α-ketoglutarate dehydrogenase substrates), universal antioxidant protection of mitochondrial membranes, and regeneration of CoQ10, glutathione, and vitamins C/E. The three converge on mitochondrial bioenergetics from different angles — MOTS-c on biogenesis and AMPK signaling, NAD+ peptide on cofactor supply, ALA on cofactor activity + antioxidant protection. Mechanistically additive, no known negative interactions.
      </>
    ),
  },
  {
    q: "Can I take ALA with metformin or other diabetes medications?",
    a: "Yes, but monitor blood glucose more carefully. ALA's AMPK activation overlaps with metformin's primary mechanism; the combination produces additive glucose-lowering effect. The Mijnhout 2012 meta-analysis specifically included patients on metformin and other diabetes medications; the combination was effective without unusual safety concerns. The practical implication: starting ALA while on metformin/sulfonylureas/insulin may modestly drop your glucose; coordinate with prescribing clinician for potential dose adjustment of diabetes meds downward. Same monitoring principle applies to combining ALA with berberine, GLP-1 peptides, or chromium.",
  },
  {
    q: "ALA + biotin — should I worry about the interaction?",
    a: "Yes, modestly. ALA can compete with biotin for cellular uptake at high doses and over chronic use — long-term ALA supplementation (months to years) at 600+ mg/day may reduce biotin status. The practical mitigation: take a standard B-complex or 30–100 mcg biotin daily alongside chronic ALA supplementation. For acute or short-term ALA use (8–12 weeks), the biotin interaction isn't clinically meaningful. Not a contraindication, just a watchlist item for users on indefinite ALA protocols.",
  },
  {
    q: "How long until I notice ALA's effects?",
    a: "For neuropathy: 4–8 weeks of consistent dosing. The Ziegler IV ALA trials showed effects within 3 weeks; oral takes longer. For insulin sensitivity: 4–6 weeks. For weight loss: 8–12 weeks for the meaningful effect to emerge. ALA is not an acute supplement — antioxidant effects build over weeks of consistent dosing. If you've taken R-ALA 300–600 mg/day for 8–12 weeks with no perceived effect on your target endpoint, ALA probably isn't your lever for that specific issue.",
  },
];

const studies = [
  {
    title: "Treatment of Symptomatic Diabetic Polyneuropathy with the Antioxidant Alpha-Lipoic Acid (ALADIN Study)",
    authors: "Ziegler D, Hanefeld M, Ruhnau KJ, et al.",
    journal: "Diabetologia",
    year: "1995",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/8821658/",
    summary: "A multicenter randomized double-blind placebo-controlled trial of intravenous alpha-lipoic acid (600 mg or 1,200 mg daily for 3 weeks) in 328 patients with diabetic peripheral neuropathy. Both ALA doses significantly improved Total Symptom Score (pain, burning, paresthesia, numbness) versus placebo. The ALADIN trial established ALA as a clinically meaningful intervention for diabetic neuropathy and led to its medical approval in Germany. The foundational evidence for the European clinical use of ALA in neuropathy.",
  },
  {
    title: "Alpha-Lipoic Acid in the Treatment of Diabetic Peripheral and Cardiac Autonomic Neuropathy: A Meta-Analysis",
    authors: "Mijnhout GS, Kollen BJ, Alkhalaf A, Kleefstra N, Bilo HJ",
    journal: "International Journal of Endocrinology",
    year: "2012",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/22319396/",
    summary: "A systematic review and meta-analysis of 15 RCTs of ALA in diabetic peripheral neuropathy. IV ALA (600 mg/day for 3 weeks) significantly reduced neuropathy symptoms; oral ALA (600–1,800 mg/day for 3–5 weeks) produced moderate symptom reduction. Effect sizes were clinically meaningful and consistent across trials. The Mijnhout 2012 meta-analysis is the cleanest evidence summary for ALA in diabetic neuropathy and the reference document for both IV and oral protocol guidance.",
  },
  {
    title: "Effects of Alpha-Lipoic Acid Supplementation on Body Weight: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
    authors: "Namazi N, Larijani B, Azadbakht L",
    journal: "Pharmacological Research",
    year: "2018",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/29438781/",
    summary: "A meta-analysis of 12 RCTs (n=634) of ALA supplementation on body weight and BMI. ALA produced statistically significant weight reduction (mean -1.52 kg) and BMI reduction versus placebo. Effects were greater at higher doses (1,200+ mg/day) and longer durations. Modest but real effect; useful adjunct in metabolic weight protocols.",
  },
  {
    title: "Alpha-Lipoic Acid Treatment Decreases Serum Inflammatory Markers in Patients with Metabolic Syndrome",
    authors: "Zhang Y, Han P, Wu N, et al.",
    journal: "Saudi Medical Journal",
    year: "2011",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/22159371/",
    summary: "A trial of ALA (600 mg twice daily for 4 weeks) in 102 patients with metabolic syndrome. ALA significantly reduced inflammatory markers (TNF-α, IL-6, CRP) and improved insulin sensitivity (HOMA-IR) versus placebo. Supports the anti-inflammatory + insulin-sensitization use case beyond the diabetic neuropathy core indication.",
  },
  {
    title: "Insulin Resistance and Antioxidant Treatment with Alpha-Lipoic Acid in the Insulin-Resistant State",
    authors: "Jacob S, Henriksen EJ, Schiemann AL, et al.",
    journal: "Diabetes",
    year: "1999",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/9851461/",
    summary: "An RCT of ALA in 74 patients with type 2 diabetes. ALA (600 mg twice daily orally for 4 weeks) improved insulin-mediated glucose disposal by 27% versus placebo, as measured by hyperinsulinemic-euglycemic clamp. The Jacob 1999 trial provided gold-standard methodology (clamp) evidence for ALA's insulin-sensitization effects and is widely cited in the metabolic-supplement literature.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does alpha lipoic acid work?",
    intro:
      "Alpha lipoic acid works through multiple parallel mechanisms — universal antioxidant activity (fat and water soluble, regenerates other antioxidants), AMPK activation (overlapping with metformin and berberine), mitochondrial cofactor activity (pyruvate dehydrogenase and α-ketoglutarate dehydrogenase complexes), and nerve-tissue protection. The combination is what makes it uniquely effective for diabetic neuropathy where multiple of these pathways converge.",
    body: [
      "Universal antioxidant — fat AND water soluble. ALA&apos;s small molecular size and disulfide bond structure make it active in both lipid membranes and aqueous cellular compartments — unusual for an antioxidant. It directly scavenges hydroxyl radicals, hypochlorous acid, singlet oxygen, and peroxynitrite. This comprehensive antioxidant coverage distinguishes ALA from vitamin C (water-soluble only) or vitamin E (fat-soluble only).",
      "Antioxidant regeneration network. ALA regenerates oxidized forms of vitamin C, vitamin E, glutathione, and CoQ10 back to their active reduced forms. This amplifies the effective antioxidant capacity of the entire endogenous antioxidant network, not just ALA&apos;s own free-radical scavenging.",
      "AMPK activation. ALA activates AMP-activated protein kinase, the master metabolic switch that improves insulin sensitivity, increases glucose uptake in muscle and fat, and reduces hepatic gluconeogenesis. This is the same mechanism class as metformin and berberine, and the basis for ALA&apos;s metabolic and weight-loss effects.",
      "Mitochondrial enzyme cofactor. ALA is an essential cofactor for pyruvate dehydrogenase and α-ketoglutarate dehydrogenase — two key enzymes in the citric acid cycle that connect glycolysis to mitochondrial energy production. Supplementation supports the efficiency of this energy-conversion machinery, particularly in tissues with high mitochondrial demand.",
      "Nerve tissue protection. In diabetic peripheral neuropathy, ALA reduces oxidative stress in nerve tissue, improves nerve conduction velocity, and reduces hyperglycemia-induced microvascular damage to peripheral nerves. This is the most clinically validated ALA application, with multiple European RCTs and a meta-analysis supporting the use case.",
      "Anti-inflammatory effects. ALA reduces NF-κB activation and downstream inflammatory cytokines (TNF-α, IL-6, CRP). This is mechanistically secondary to the antioxidant arm but contributes to ALA&apos;s effects in metabolic syndrome and chronic-inflammation contexts.",
    ],
  },
  {
    id: "research",
    title: "What does alpha lipoic acid actually do?",
    intro:
      "ALA has one of the deeper European medical-supplement evidence bases. Strongest evidence is for diabetic peripheral neuropathy (IV and oral RCTs + meta-analyses); moderate evidence for insulin sensitivity and modest weight loss; emerging evidence for inflammation and metabolic syndrome adjunct.",
    body: [
      "Diabetic peripheral neuropathy (Strong). ALADIN study (Ziegler 1995, n=328) established IV ALA at 600 mg/day for 3 weeks produces significant Total Symptom Score reduction. Mijnhout 2012 meta-analysis (15 RCTs) confirms oral ALA at 600–1,800 mg/day for 3–5 weeks produces moderate but consistent symptom relief. This is the European medical-approval indication.",
      "Insulin sensitivity (Strong-Moderate). Jacob 1999 used hyperinsulinemic-euglycemic clamp (gold standard) to demonstrate 27% improvement in glucose disposal with 600 mg twice daily oral ALA in T2D patients. Multiple subsequent trials confirm the insulin-sensitization effect.",
      "Body weight reduction (Moderate). Namazi 2018 meta-analysis (12 RCTs, n=634) found ALA produced statistically significant weight reduction (-1.52 kg average), with greater effect at 1,200+ mg/day. Modest but real; AMPK-mediated mechanism overlaps with metformin and berberine.",
      "Inflammatory marker reduction (Moderate). Zhang 2011 and others document TNF-α, IL-6, CRP reductions in metabolic syndrome patients with ALA supplementation. Anti-inflammatory effect is consistent across trials.",
      "Glucose control in T2D (Moderate). HbA1c and fasting glucose reductions documented in multiple trials, particularly when combined with metformin or other glucose-lowering medications.",
      "Cognitive function in MS / cognitive aging (Emerging). Some trials suggest cognitive function preservation in multiple sclerosis and modest improvements in cognitive aging populations. Evidence base is thinner than the neuropathy/metabolic case.",
      "Autonomic neuropathy (Moderate). Cardiac autonomic neuropathy in diabetics shows symptomatic improvement in some trials. Useful clinical indication beyond peripheral neuropathy.",
      "Liver disease (Emerging). NAFLD and metabolic-associated steatotic liver disease trials show some hepatoprotective signal. Evidence is preliminary.",
    ],
  },
  {
    id: "dosing",
    title: "How is alpha lipoic acid dosed?",
    intro:
      "ALA dosing depends on goal and form. For metabolic / antioxidant baseline: 300–600 mg/day R-ALA (or 600–1,200 mg/day racemic ALA). For diabetic neuropathy: 600–1,800 mg/day oral (typically split as 600 mg twice or three times daily). For weight loss: higher doses (1,200–1,800 mg/day) per Namazi 2018 dose-response. Always 30–60 minutes before meals for optimal absorption.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Metabolic / antioxidant baseline (R-ALA).</span> 300–600 mg/day stabilized R-ALA (Na-R-ALA / sodium R-lipoate), split AM + PM, on empty stomach.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Metabolic / antioxidant baseline (racemic ALA).</span> 600–1,200 mg/day racemic ALA — roughly 2× the R-ALA dose due to lower bioavailability of the S-ALA half.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diabetic neuropathy (oral).</span> 600 mg two or three times daily (1,200–1,800 mg/day total), 30 minutes before meals, for 4–8 weeks minimum. Coordinate with prescribing clinician — often combined with B-vitamins for comprehensive neuropathy protocol.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Weight loss adjunct.</span> 1,200–1,800 mg/day per Namazi 2018 meta-analytic dose-response. The effective range for the meta-analytic effect.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">IV ALA (medical only).</span> 600 mg/day infusion for 3 weeks — the ALADIN protocol. Used in European clinical practice for diabetic neuropathy; not self-administered.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Timeline: neuropathy effects 4–8 weeks (faster for IV); insulin sensitivity 4–6 weeks; weight loss 8–12 weeks. ALA is a chronic-use supplement — antioxidant and AMPK effects build over weeks.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Label math.</span> &ldquo;Alpha lipoic acid 600 mg&rdquo; usually means racemic ALA (300 mg R-ALA + 300 mg less-active S-ALA). &ldquo;R-ALA 300 mg&rdquo; or &ldquo;Na-R-ALA / sodium R-lipoate 300 mg&rdquo; means 300 mg of the active stereoisomer — roughly equivalent to 600 mg racemic. Read for the form explicitly.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to take alpha lipoic acid",
    intro:
      "ALA is taken orally as capsules or tablets. The two practical considerations are empty-stomach timing (food reduces absorption by ~30%) and form choice (R-ALA vs racemic). The points below cover the details experienced users converge on.",
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
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Twice daily for baseline use; three times daily for higher-dose neuropathy protocols. Split dosing maintains steadier antioxidant coverage.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">30–60 minutes before meals (empty stomach) — food reduces absorption by up to 30%. Morning before breakfast + 30 min before lunch or dinner is the practical default.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Empty stomach preferred — competes with dietary amino acids for transporter-mediated gut absorption. If GI upset, small low-protein snack OK.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Form</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">R-ALA (R-alpha lipoic acid) or stabilized Na-R-ALA (sodium R-lipoate) — the bioactive stereoisomer, ~12× more bioavailable than S-ALA. Racemic ALA (50/50 R+S) is cheaper but less efficient. Avoid pure S-ALA (essentially inactive).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Standardization marker</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Look for &ldquo;R-ALA,&rdquo; &ldquo;R-alpha lipoic acid,&rdquo; or &ldquo;Na-R-ALA / sodium R-lipoate&rdquo; explicitly — these denote the bioactive stereoisomer. &ldquo;Alpha lipoic acid&rdquo; without R/S designation is typically racemic (50/50). Third-party tested for stereoisomer purity is the relevant screen.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Cycling / B-vitamin pairing</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">For chronic long-term use (6+ months at 600+ mg/day), add a standard B-complex or 30–100 mcg biotin daily to offset ALA&apos;s competitive biotin uptake. Not required for shorter courses.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does alpha lipoic acid stack with?",
    intro:
      "ALA pairs naturally with the broader mitochondrial bioenergetics and metabolic toolkit. The mechanism spans antioxidant, AMPK activation, and mitochondrial cofactor activity — which complements peptides operating on mitochondrial biogenesis, NAD+ supply, and broader metabolic peptide protocols. The three areas below cover the natural stacking categories.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With peptides</h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            ALA pairs naturally with the mitochondrial peptide cluster.{" "}
            <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">MOTS-c</Link>{" "}
            is a mitochondrial-derived peptide that activates AMPK, improves insulin sensitivity, and supports mitochondrial biogenesis at the genetic/regulatory level — direct mechanism overlap with ALA&apos;s AMPK arm but at a different layer (peptide-level signaling vs small-molecule modulator).{" "}
            <Link href="/peptides/nad-plus" className="text-[#0891b2] hover:underline">NAD+ peptide</Link>{" "}
            delivers NAD+ — the cofactor for sirtuins and the electron donor for Complex I of the electron transport chain. ALA operates at multiple layers: AMPK activation, mitochondrial enzyme cofactor activity (pyruvate dehydrogenase, α-ketoglutarate dehydrogenase), universal antioxidant protection of mitochondrial membranes, and regeneration of CoQ10/glutathione/vitamins C and E. The three converge on mitochondrial bioenergetics from different angles — MOTS-c on biogenesis signaling, NAD+ peptide on cofactor supply, ALA on cofactor activity + antioxidant protection. Mechanistically additive, no known negative interactions. For users on GLP-1 peptides ({" "}
            <Link href="/peptides/semaglutide" className="text-[#0891b2] hover:underline">semaglutide</Link>,{" "}
            <Link href="/peptides/tirzepatide" className="text-[#0891b2] hover:underline">tirzepatide</Link>{" "}
            ), ALA is a compatible metabolic adjunct that adds AMPK-mediated insulin-sensitization to the GLP receptor-agonist mechanism.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With supplements</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/coq10" className="text-[#0891b2] hover:underline">CoQ10</Link>{" "}
              — ALA regenerates oxidized CoQ10 back to its active form. Mechanistically natural pairing for mitochondrial protection.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/berberine" className="text-[#0891b2] hover:underline">Berberine</Link>{" "}
              — additional AMPK activator with metformin-comparable glycemic effects. Common metabolic-stack co-occupant; complementary AMPK activation.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/chromium" className="text-[#0891b2] hover:underline">Chromium</Link>{" "}
              — insulin-receptor amplification via chromodulin. Different mechanism from ALA&apos;s AMPK activation; complementary glycemic support.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/magnesium" className="text-[#0891b2] hover:underline">Magnesium</Link>{" "}
              — cofactor for hundreds of enzymes including glucose metabolism. Deficiency correction supports the system ALA operates within.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/vitamin-c" className="text-[#0891b2] hover:underline">Vitamin C</Link>{" "}
              — ALA regenerates oxidized vitamin C; complementary antioxidant network.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <Link href="/supplements/biotin" className="text-[#0891b2] hover:underline">Biotin</Link>{" "}
              (30–100 mcg daily) — offsets ALA&apos;s competitive biotin uptake over chronic long-term use. Add B-complex for comprehensive coverage.
            </li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              B1 (benfotiamine) — particularly relevant for diabetic neuropathy stacks; benfotiamine is a fat-soluble B1 derivative that complements ALA&apos;s neuroprotective effects.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">With lifestyle</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">30 minutes before meals.</span> Empty-stomach absorption is meaningfully better. Plan dosing around meal timing.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Glucose monitoring during dose titration.</span> Particularly relevant if combining with metformin, sulfonylureas, insulin, berberine, or GLP peptides. Hypoglycemia risk during the first 4–6 weeks of combined use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">B-vitamin supplementation for chronic use.</span> Long-term high-dose ALA may compete with biotin uptake; standard B-complex or 30–100 mcg biotin daily is a low-cost mitigation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training and aerobic exercise.</span> Exercise independently activates AMPK; ALA + exercise produces additive mitochondrial benefit.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Whole-foods anti-inflammatory diet.</span> ALA works on top of dietary foundation. Mediterranean-style eating supports the metabolic and antioxidant context ALA operates within.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side effects and interactions",
    intro:
      "ALA has a favorable safety profile at standard supplemental doses. The main practical considerations are GI effects, hypoglycemia risk when combined with diabetes medications, biotin-competition over chronic use, and rare skin/allergic reactions.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Common (mostly transient)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mild GI discomfort — nausea, abdominal pain, particularly on empty stomach. Resolves with small low-protein snack if needed.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Garlic / sulfur-like body odor — ALA is an organosulfur compound; some users report mild distinctive odor.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Headache — occasional, generally mild and dose-related.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No documented serious adverse events at standard supplemental doses across the human RCT base.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Less common (watch-list)</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Hypoglycemia — when combined with insulin, sulfonylureas, metformin, GLP peptides, or other glucose-lowering supplements. Monitor glucose during titration.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Biotin competition — chronic long-term ALA (6+ months at 600+ mg/day) may reduce biotin status via competitive transporter uptake. Add standard B-complex as buffer.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Thiamine deficiency in malnourished users — ALA&apos;s mitochondrial enzyme cofactor activity competes with thiamine. Rare; relevant in alcoholic or malnourished populations.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Skin rash or allergic reactions — rare; discontinue if persistent.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Insulin autoimmune syndrome — very rare; mostly reported in Asian populations with specific HLA genotypes.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Drug and supplement interactions</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Diabetes medications (metformin, sulfonylureas, insulin).</span> Additive glucose-lowering. Monitor glucose; clinician may adjust diabetes medication doses.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">GLP-1 peptides (semaglutide, tirzepatide).</span> Compatible; mechanistically additive on insulin sensitivity. Watch hypoglycemia if also on sulfonylureas/insulin.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Thyroid medication (levothyroxine).</span> ALA may modestly affect thyroid hormone metabolism at high doses; coordinate with prescribing clinician.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Chemotherapy — ALA may affect some chemotherapy regimens via antioxidant interference with treatment-induced oxidative damage. Coordinate with oncologist.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Heavy metal chelation — ALA has mild chelation activity. Don&apos;t use in conjunction with active mercury/lead chelation therapy without specialist guidance.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Pregnancy and breastfeeding — insufficient supplemental-dose data; defer to clinician.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "What we don't know yet about alpha lipoic acid",
    intro:
      "ALA has solid European medical-supplement evidence in diabetic neuropathy, but several open questions affect how confidently it can be recommended for broader use cases.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">R-ALA vs racemic head-to-head outcomes.</span> R-ALA is ~12× more bioavailable per gram, but most large clinical trials used racemic ALA at higher gram-equivalents. Whether R-ALA at lower doses produces equivalent clinical outcomes is mechanistically plausible but not rigorously head-to-head RCT-tested at scale.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Healthy young-adult metabolic transfer.</span> The strongest evidence is in T2D, diabetic neuropathy, metabolic syndrome, and insulin-resistant populations. Whether ALA produces meaningful benefit in metabolically healthy adults under 40 is less directly supported by trial data.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Long-term high-dose safety.</span> Most trial data extends to 8–12 weeks at 600–1,800 mg/day. Multi-year continuous use at the higher doses is not characterized in controlled trials — though the safety profile of moderate dosing is reassuring.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Biotin competition clinical significance.</span> Mechanism is documented; clinical relevance over multi-year use isn&apos;t well-quantified. Standard mitigation (add B-complex) is low-cost; whether all chronic users need it isn&apos;t precisely known.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Cognitive and neurodegenerative applications.</span> Preclinical evidence is encouraging for Alzheimer&apos;s, Parkinson&apos;s, multiple sclerosis; human RCT outcomes have been mixed. Whether higher doses or different formulations would produce reliable cognitive benefit is open.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Insulin autoimmune syndrome risk in Asian populations.</span> Rare case reports of insulin autoimmune syndrome in Asian users with specific HLA genotypes. Risk magnitude isn&apos;t well-characterized; relevant for users of East Asian descent.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Weight-loss clinical significance.</span> Namazi 2018 meta-analytic effect is statistically significant (-1.52 kg) but small in absolute terms. Whether ALA adds meaningfully to weight-loss protocols already employing GLP peptides or other established interventions is unclear.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to buy alpha lipoic acid",
    intro:
      "Alpha lipoic acid is widely available over-the-counter. Quality varies — particularly around stereoisomer disclosure (R-ALA vs racemic vs S-ALA), stabilization (R-ALA without sodium stabilization degrades quickly), and source authentication. The screen below is what we use before clicking through.",
    node: (
      <div className="space-y-4">
        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers to look for</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stabilized R-ALA (Na-R-ALA / sodium R-lipoate)</span> — the bioactive stereoisomer in its shelf-stable form. ~12× more bioavailable than S-ALA.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Or racemic ALA</span> as cheaper option — accept lower per-mg efficiency. Adjust dose upward (~2× R-ALA dose).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Stereoisomer explicitly disclosed</span> — &ldquo;R-ALA,&rdquo; &ldquo;R-alpha lipoic acid,&rdquo; &ldquo;Na-R-ALA,&rdquo; or &ldquo;sodium R-lipoate.&rdquo; Avoid plain &ldquo;alpha lipoic acid&rdquo; products that don&apos;t disclose stereoisomer composition.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification. HPLC verification of stereoisomer purity is the relevant test.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary blends</span> that obscure the actual ALA dose or stereoisomer composition alongside fillers.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fresh manufacture date</span> — unstabilized R-ALA degrades with heat and humidity; avoid jars sitting on warehouse shelves &gt;12 months. Na-R-ALA is more stable.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Capsule preferred over powder</span> for ALA — encapsulation protects from oxidation and moisture.</li>
          </ul>
        </div>
        <AmazonCTAButton href="https://www.amazon.com/s?k=R-alpha+lipoic+acid&tag=profpeptide-20" label="Alpha Lipoic Acid" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Alpha Lipoic Acid FAQ",
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
          Ziegler D, Hanefeld M, Ruhnau KJ, et al. Treatment of symptomatic diabetic peripheral neuropathy with the antioxidant alpha-lipoic acid. A 3-week multicentre randomized controlled trial (ALADIN Study). Diabetologia. 1995;38(12):1425-1433.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/8821658/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/8821658/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mijnhout GS, Kollen BJ, Alkhalaf A, Kleefstra N, Bilo HJ. Alpha lipoic acid for symptomatic peripheral neuropathy in patients with diabetes: a meta-analysis of randomized controlled trials. Int J Endocrinol. 2012;2012:456279.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22319396/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22319396/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Namazi N, Larijani B, Azadbakht L. Alpha-lipoic acid supplement in obesity treatment: a systematic review and meta-analysis of clinical trials. Clin Nutr. 2018;37(2):419-428.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29438781/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29438781/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Jacob S, Henriksen EJ, Schiemann AL, et al. Enhancement of glucose disposal in patients with type 2 diabetes by alpha-lipoic acid. Arzneimittelforschung. 1995;45(8):872-874.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/9851461/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/9851461/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Zhang Y, Han P, Wu N, et al. Amelioration of lipid abnormalities by α-lipoic acid through antioxidative and anti-inflammatory effects. Obesity. 2011;19(8):1647-1653.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22159371/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22159371/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Golbidi S, Badran M, Laher I. Diabetes and alpha lipoic acid. Front Pharmacol. 2011;2:69.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22125537/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22125537/
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
      "name": "R-ALA vs racemic ALA — which form should I take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "R-ALA (R-alpha lipoic acid) is the naturally occurring stereoisomer and roughly 12× more bioavailable than the unnatural S-ALA enantiomer. Standard racemic ALA is a 50/50 mixture of R-ALA + S-ALA — the S-ALA half is essentially inert and may even compete with R-ALA absorption. For equivalent serum R-ALA: 200–300 mg R-ALA ≈ 600 mg racemic ALA. Practical default: stabilized R-ALA (Na-R-ALA / sodium R-lipoate) at 300–600 mg/day for metabolic/antioxidant use."
      }
    },
    {
      "@type": "Question",
      "name": "Why take alpha lipoic acid on an empty stomach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Food reduces ALA absorption by up to 30% because ALA competes with dietary amino acids for transporter-mediated gut absorption. The conservative protocol: 30–60 minutes before meals, twice daily. Practical version: take morning dose 30 minutes before breakfast; second dose 30+ minutes before lunch or dinner."
      }
    },
    {
      "@type": "Question",
      "name": "Does ALA actually help diabetic neuropathy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and it's actually approved for this indication in Germany and other European countries. Multiple RCTs and meta-analyses (Ziegler 1995, Ziegler 2006, Mijnhout 2012) demonstrate ALA significantly reduces neuropathy symptoms (pain, burning, numbness, paresthesia) in diabetic peripheral neuropathy. Intravenous ALA (600 mg/day for 3 weeks) produces the most dramatic effects; oral ALA (600–1,800 mg/day for 4–8 weeks) produces moderate but consistent benefits. This is the most clinically-validated ALA application."
      }
    },
    {
      "@type": "Question",
      "name": "Will ALA help with weight loss?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modestly. A 2018 meta-analysis (Namazi et al.) of 12 RCTs found ALA produced statistically significant weight reduction vs placebo, with greater effects at higher doses (1,200+ mg/day). The mechanism is likely AMPK activation (similar pathway as berberine and metformin) plus modest appetite reduction. Effect sizes are clinically meaningful but small (~1.5 kg average across trials). This isn't GLP-1 peptide weight-loss territory; ALA is a 1–2% nudge in the right direction."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack ALA with MOTS-c or NAD+ peptide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the stack is mechanistically natural for users targeting mitochondrial function and metabolic health. MOTS-c is a mitochondrial-derived peptide that activates AMPK, improves insulin sensitivity, and supports mitochondrial biogenesis. NAD+ peptide delivers the essential cofactor for sirtuins and electron transport. ALA operates at multiple layers: AMPK activation, mitochondrial enzyme cofactor activity, universal antioxidant protection of mitochondrial membranes, and regeneration of CoQ10/glutathione/vitamins C and E. Mechanistically additive, no known negative interactions."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take ALA with metformin or other diabetes medications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but monitor blood glucose more carefully. ALA's AMPK activation overlaps with metformin's primary mechanism; the combination produces additive glucose-lowering effect. The Mijnhout 2012 meta-analysis specifically included patients on metformin and other diabetes medications; the combination was effective without unusual safety concerns. The practical implication: starting ALA while on metformin/sulfonylureas/insulin may modestly drop your glucose; coordinate with prescribing clinician for potential dose adjustment of diabetes meds downward."
      }
    },
    {
      "@type": "Question",
      "name": "ALA + biotin — should I worry about the interaction?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, modestly. ALA can compete with biotin for cellular uptake at high doses and over chronic use — long-term ALA supplementation (months to years) at 600+ mg/day may reduce biotin status. The practical mitigation: take a standard B-complex or 30–100 mcg biotin daily alongside chronic ALA supplementation. For acute or short-term ALA use (8–12 weeks), the biotin interaction isn't clinically meaningful."
      }
    },
    {
      "@type": "Question",
      "name": "How long until I notice ALA's effects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For neuropathy: 4–8 weeks of consistent dosing. The Ziegler IV ALA trials showed effects within 3 weeks; oral takes longer. For insulin sensitivity: 4–6 weeks. For weight loss: 8–12 weeks for the meaningful effect to emerge. ALA is not an acute supplement — antioxidant effects build over weeks of consistent dosing."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Alpha Lipoic Acid: Universal Antioxidant + Neuropathy Evidence",
  "description": "Alpha lipoic acid dosing, R-ALA vs racemic, the diabetic neuropathy RCT evidence, and how it stacks with mitochondrial peptides like MOTS-c and NAD+.",
  "url": "https://profpeptide.com/supplements/alpha-lipoic-acid",
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
    { "@type": "ListItem", "position": 3, "name": "Alpha Lipoic Acid" }
  ]
};

export default function AlphaLipoicAcidPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Alpha Lipoic Acid</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> ALA, thioctic acid, lipoic acid, R-ALA (bioactive stereoisomer), Na-R-ALA / sodium R-lipoate (stabilized R-ALA)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Supplement Class:</span> Organosulfur compound / universal antioxidant (fat + water soluble) / AMPK activator / mitochondrial enzyme cofactor (pyruvate dehydrogenase, α-ketoglutarate dehydrogenase)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Evidence Tier:</span> Strong — ALADIN study (Ziegler 1995, n=328) + Mijnhout 2012 meta-analysis (15 RCTs) for diabetic peripheral neuropathy (approved as medical treatment in Germany); Jacob 1999 hyperinsulinemic-euglycemic clamp for insulin sensitization; Namazi 2018 meta-analysis (12 RCTs) for modest weight loss; Zhang 2011 for metabolic syndrome biomarkers
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is alpha lipoic acid?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Alpha lipoic acid (ALA) is a naturally occurring organosulfur compound produced in small amounts by the body and found in trace amounts in red meat, spinach, and broccoli. Its supplement profile is built on a unique combination: it&apos;s a universal antioxidant active in both fat-soluble and water-soluble environments (unusual — most antioxidants work in only one), it activates AMPK (the same metabolic master switch metformin and berberine target), it&apos;s a mitochondrial enzyme cofactor for pyruvate dehydrogenase and α-ketoglutarate dehydrogenase, and it regenerates other antioxidants (vitamins C, E, glutathione, CoQ10) back to their active forms. The most clinically validated application is diabetic peripheral neuropathy — ALA is approved as medical treatment in Germany and other European countries based on the ALADIN study (Ziegler 1995) and subsequent meta-analyses (Mijnhout 2012). Secondary evidence supports insulin sensitization (Jacob 1999 hyperinsulinemic-euglycemic clamp showed 27% glucose-disposal improvement), modest weight loss (Namazi 2018 meta-analysis), and anti-inflammatory effects in metabolic syndrome. The practical considerations are stereoisomer choice (R-ALA is ~12× more bioavailable than racemic S-ALA half) and empty-stomach timing (food reduces absorption by ~30%). ALA pairs naturally with{" "}
            <Link href="/peptides/mots-c" className="text-[#0891b2] hover:underline">mitochondrial peptides like MOTS-c and NAD+ peptide</Link>{" "}
            — overlapping AMPK and cofactor mechanisms at different signaling layers.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Significant diabetic peripheral neuropathy symptom reduction (ALADIN study, Mijnhout 2012 meta-analysis — European medical approval)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Insulin sensitization (27% glucose-disposal improvement per Jacob 1999 clamp methodology)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modest weight loss (-1.52 kg average per Namazi 2018 meta-analysis, 12 RCTs)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced inflammatory markers (TNF-α, IL-6, CRP) in metabolic syndrome (Zhang 2011)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Universal antioxidant activity across fat-soluble and water-soluble cellular compartments</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Regenerates oxidized vitamin C, vitamin E, glutathione, CoQ10 back to active forms</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">AMPK activation (same mechanism class as metformin and berberine)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Mitochondrial enzyme cofactor for pyruvate dehydrogenase and α-ketoglutarate dehydrogenase</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common dose:</span> 300–600 mg/day stabilized R-ALA (Na-R-ALA / sodium R-lipoate) for metabolic/antioxidant baseline; 600–1,200 mg/day racemic ALA as cheaper alternative. For diabetic neuropathy: 600–1,800 mg/day oral, split AM + PM + lunch, for 4–8 weeks minimum (coordinate with clinician). Take 30–60 minutes before meals — food reduces absorption by ~30%.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Watch for:</span> Hypoglycemia when combined with metformin / sulfonylureas / insulin / GLP peptides — monitor glucose. Biotin competition over chronic long-term use (6+ months at 600+ mg/day) — add standard B-complex as buffer.
          </p>
          <AmazonCTAButton href="https://www.amazon.com/s?k=R-alpha+lipoic+acid&tag=profpeptide-20" label="Alpha Lipoic Acid" />
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
        {["Universal Antioxidant", "Diabetic Neuropathy", "AMPK Activator", "Mitochondrial Cofactor", "R-ALA", "Insulin Sensitization"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Supplements</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/berberine" className="text-sm font-medium text-[#0891b2] hover:underline">Berberine</Link>
          <Link href="/supplements/chromium" className="text-sm font-medium text-[#0891b2] hover:underline">Chromium</Link>
          <Link href="/supplements/coq10" className="text-sm font-medium text-[#0891b2] hover:underline">CoQ10</Link>
          <Link href="/supplements/magnesium" className="text-sm font-medium text-[#0891b2] hover:underline">Magnesium</Link>
          <Link href="/supplements/vitamin-c" className="text-sm font-medium text-[#0891b2] hover:underline">Vitamin C</Link>
          <Link href="/supplements/biotin" className="text-sm font-medium text-[#0891b2] hover:underline">Biotin</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Alpha Lipoic Acid" pagePath="/supplements/alpha-lipoic-acid" />
    </div>
    </>
  );
}
