import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageTOC from "@/components/PageTOC";

export const metadata = {
  alternates: { canonical: "/peptides/aod-9604" },
  title: "AOD-9604 — Mechanism, Dosage, Research, Side Effects | Prof. Peptide",
  description:
    "AOD-9604 (hGH Fragment 176-191) research profile: mechanism, clinical trial history, dosing, side effects, and FDA regulatory status.",
};

const faqs = [
  {
    q: "Does AOD-9604 actually work for weight loss?",
    a: "Modestly, at best. The original 12-week trial showed 2.6 kg average weight loss vs 0.8 kg placebo. The longer 24-week trial in 536 participants did not show statistically significant weight loss when intensive diet and exercise were added. AOD-9604 produces real lipolysis, but the magnitude of weight loss is far below GLP-class drugs (14–25%). It is not a substitute for semaglutide or tirzepatide for clinically meaningful weight loss.",
  },
  {
    q: "Is AOD-9604 the same as growth hormone?",
    a: "No. AOD-9604 is the C-terminal fragment of growth hormone (amino acids 176–191) with a stabilizing tyrosine. It captures growth hormone's fat-burning effect but does not stimulate IGF-1 production, does not affect insulin sensitivity, and does not have growth hormone's broader endocrine effects.",
  },
  {
    q: "Why was AOD-9604 development discontinued?",
    a: "The Phase 2b 24-week trial in 536 participants failed to show statistically significant weight loss vs placebo when intensive diet and exercise were added. Without a clear efficacy signal, Metabolic Pharmaceuticals terminated the obesity drug program in 2007. The peptide was not unsafe — it was simply not effective enough to justify continued development as a drug.",
  },
  {
    q: "Is AOD-9604 safe?",
    a: "Short-term, yes. Six randomized, controlled trials in over 900 participants showed AOD-9604 is well-tolerated with no meaningful changes in IGF-1, blood glucose, blood pressure, or other monitored parameters. However, long-term data beyond 24 weeks does not exist, and the FDA cited unresolved concerns in 2024.",
  },
  {
    q: "Can I take AOD-9604 with semaglutide or tirzepatide?",
    a: "Some clinics promote this combination, but no controlled human data supports it. The mechanisms are different (lipolysis vs appetite suppression), so theoretical synergy exists. However, you would essentially be paying for a peptide whose modest effects are dwarfed by the GLP-class drug's effects.",
  },
  {
    q: "Does AOD-9604 cause side effects?",
    a: "Reported side effects in clinical trials are rare. The peptide is one of the better-tolerated compounds in obesity research. Mild injection site reactions are the most common report from real-world users.",
  },
  {
    q: "Is AOD-9604 legal?",
    a: "AOD-9604 is sold legally in the US as a research chemical for laboratory use only. It is not approved for human consumption. The FDA declined to include it on the 503A Bulks List in December 2024, restricting compounding pharmacy availability. Some non-US jurisdictions allow more flexible use.",
  },
  {
    q: "Where can I buy AOD-9604?",
    a: (
      <>
        AOD-9604 is sold through specialty research peptide vendors. PP maintains a list of vetted vendors with verified discount codes — see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const sections = [
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Selective Lipolysis [1] — AOD-9604 mimics the fat-burning portion of human growth hormone without activating the receptor regions responsible for IGF-1 production or insulin resistance. It targets adipose tissue specifically, breaking down stored triglycerides into glycerol and free fatty acids.",
      "Beta-3 Adrenergic Receptor Activation [2] — In animal models, AOD-9604 appears to upregulate beta-3 adrenergic receptors expressed primarily in white and brown adipose tissue. Activating these receptors triggers a cAMP-dependent cascade that activates hormone-sensitive lipase, which hydrolyzes stored fat.",
      "No IGF-1 Stimulation [3] — Unlike full-length growth hormone, AOD-9604 does not stimulate IGF-1 production in any tested system. This avoids the growth-promoting effects of growth hormone that complicate long-term obesity treatment.",
      "Independent of Glucose Metabolism [3] — AOD-9604 produces fat reduction without inducing insulin resistance or affecting blood glucose. This is a meaningful contrast to full-length growth hormone, which causes hyperglycemia.",
      "Inhibits Lipogenesis [1] — In addition to stimulating fat breakdown, AOD-9604 has been shown to inhibit the formation of new fat cells in animal studies.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Obesity (Failed Development) [4][5] — The Phase 2a 12-week trial in 300 participants showed modest weight loss (2.6 kg vs 0.8 kg placebo, statistically significant). The Phase 2b 24-week trial in 536 participants failed to show statistically significant weight loss vs placebo when an intensive diet and exercise regimen was added. Development was terminated in 2007.",
      "Cartilage Repair and Joint Health [6] — AOD-9604 has been investigated for cartilage regeneration and osteoarthritis applications. Some studies suggest it may stimulate cartilage matrix production. This research is preliminary.",
      "Visceral Fat Reduction [7] — A 2024 Phase 2b trial in metabolic syndrome patients reported 16.3% reduction in visceral adipose tissue over 12 weeks, without changes in fasting glucose or HbA1c.",
      "Safety Database [4] — Six randomized, double-blind, placebo-controlled trials with over 900 participants establish AOD-9604 as well-tolerated. No meaningful elevation in IGF-1, no changes in insulin sensitivity, no immunogenicity reactions.",
      "Mechanism Research — AOD-9604 remains useful in laboratory research as a tool for studying selective lipolytic signaling without growth hormone's broader endocrine effects.",
    ],
  },
  {
    id: "timeline",
    title: "What to Expect (Timeline)",
    content:
      "AOD-9604 effects are gradual. Most users report no immediate sensation. In the original 12-week Phase 2a trial, weight loss averaged 2.6 kg (about 1% of starting weight) on the most effective dose. Real-world reports vary widely, with some users reporting modest fat loss over 8–12 weeks and others reporting no measurable change. Effects on visceral fat (abdominal fat around organs) appear to develop more reliably than total body weight loss. AOD-9604 is generally considered modest in efficacy compared to GLP-class drugs.",
  },
  {
    id: "dosing",
    title: "Dosing & Protocols",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          AOD-9604 was tested in clinical trials in both oral and subcutaneous formulations. Research-grade material is typically used by subcutaneous injection. There is no FDA-approved dose because AOD-9604 was discontinued before approval.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Common research-grade injectable dose: 250–500 mcg subcutaneously once daily</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Some protocols use 2–3 mg per week split into multiple injections</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Historical oral trial doses: 0.25 mg, 0.5 mg, and 1.0 mg daily</li>
          <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Cycle length: 8–12 weeks is the most common, though there is no established standard</li>
        </ol>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Half-life is roughly 30 minutes when administered subcutaneously, which is why daily dosing is standard. Some users dose twice daily for more sustained effects. Oral bioavailability is poor, which is why research has shifted toward injectable formulations.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          There is no separate research-grade dosing standard validated by clinical evidence. Most online dosing guidance is extrapolated from the original Metabolic Pharmaceuticals trial protocols and may not produce comparable results.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "Side Effects & Safety",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild injection site reactions — redness or irritation at injection sites</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No common systemic side effects reported in trials</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Headache — reported infrequently</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Mild dizziness — uncommon</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Fatigue — uncommon</li>
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Severe allergic reactions — rare. Symptoms: difficulty breathing, swelling, hives. No anti-AOD-9604 antibodies were detected in any clinical trial, suggesting low immunogenicity.</li>
            <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Long-term effects unknown — no data beyond 24 weeks</li>
          </ol>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          AOD-9604 has one of the cleanest short-term safety profiles of any peptide tested in obesity trials. The Phase 2 program found no meaningful elevation in IGF-1, blood glucose, blood pressure, heart rate, or other monitored parameters. However, long-term safety data beyond 24 weeks does not exist, and the FDA cited concerns about peptide impurities and potential immunogenicity in declining 503A bulks list inclusion in December 2024.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How to Take",
    body: [
      "Route: Subcutaneous injection (under the skin), once or twice daily. Common injection sites are the abdomen, thigh, and upper arm.",
      "Time of day: Research protocols typically use morning dosing on an empty stomach to maximize lipolytic effect, though this is convention rather than evidence-based.",
      "With or without food: Subcutaneous AOD-9604 is unaffected by food. Historical oral trials used dosing on an empty stomach.",
      "Site rotation: Use a different site each day to reduce irritation.",
      "Missed dose: If less than 12 hours late, take as soon as remembered. Otherwise skip and resume on the next scheduled day.",
      "Reconstitution: Reconstitute with bacteriostatic water for injection. A typical reconstitution is 5 mg vial + 2 mL BAC water = 2.5 mg/mL.",
      "Cycle: Most research protocols run 8–12 weeks. There is no established break period.",
    ],
  },
  {
    id: "stacks",
    title: "Common Stacks",
    body: [
      "Standalone use — historically the most common in clinical trials.",
      "Resistance training + caloric deficit — reasonable theoretical synergy but not clinically validated.",
      "GLP-class drugs (semaglutide, tirzepatide) — some clinics promote stacking for additive fat loss, but no controlled human data supports the combination.",
      "Growth hormone secretagogues (CJC-1295, ipamorelin) — sometimes combined for synergistic fat loss in research protocols, though evidence is limited.",
      "Avoid combining with full-length growth hormone — defeats the purpose of using AOD-9604 specifically to avoid growth hormone's systemic effects.",
    ],
  },
  {
    id: "interactions",
    title: "Drug & Peptide Interactions",
    body: [
      "No known significant drug interactions in trials",
      "Beta-blockers — theoretical concern that beta-blockers could blunt the beta-3 adrenergic receptor activation pathway, but no clinical evidence",
      "Diabetes medications — AOD-9604 does not affect blood glucose, so dose adjustment is not typically required",
      "Full-length growth hormone — should not be combined; the receptor pathways overlap",
    ],
  },
  {
    id: "storage",
    title: "Storage & Handling",
    body: [
      "Lyophilized (powder) form: Store at 2–8°C sealed; freeze at -20°C for long-term storage",
      "Reconstituted solution: Store at 2–8°C; typically stable for 28–30 days",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Protect from light",
      "Discard if cloudy, discolored, or contains particles",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations & Regulatory Status",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          AOD-9604 is not FDA-approved by the United States, EMA in Europe, or the TGA in Australia. Development as an obesity drug was terminated in 2007 after the Phase 2b trial failed to demonstrate statistically significant weight loss versus placebo when intensive diet and exercise were added.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          In December 2024, the FDA declined to include AOD-9604 (both free base and acetate forms) on the 503A Bulks List, citing concerns about long-term safety, peptide impurities, and potential immunogenicity. This restricts the peptide&apos;s availability through compounding pharmacies in the US.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          AOD-9604 received GRAS (Generally Recognized as Safe) status conditional on publication of safety data for use in foods and dietary supplements at low doses, but this status does not authorize it for therapeutic use.
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          The World Anti-Doping Agency prohibits AOD-9604 in sport as a growth hormone fragment. Research-grade material is sold for laboratory use only and is not approved for human consumption.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
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
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Heffernan MA, Thorburn AW, Fam B, et al. Increase of fat oxidation and weight loss in obese mice caused by chronic treatment with human growth hormone or a modified C-terminal fragment. Int J Obes. 2001.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11713213/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11713213/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Ng FM, Sun J, Sharma L, et al. Metabolic studies of a synthetic lipolytic domain (AOD9604) of human growth hormone. Horm Res. 2000;53(6):274-8.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11146367/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11146367/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Stier H, Vos E, Kenley D. Safety and Tolerability of the Hexadecapeptide AOD9604 in Humans. J Endocrinol Metab. 2013;3(1-2):7-15.{" "}
          <a href="https://jofem.org/index.php/jofem/article/view/213/278" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://jofem.org/index.php/jofem/article/view/213/278
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Wittert GA, Caterson ID, Bouchard C, et al. AOD9604, an orally active synthetic peptide derivative of human growth hormone, induced significant fat loss in obese subjects. Phase 2 trials, Metabolic Pharmaceuticals Ltd. 2003-2007.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Misra M. Obesity pharmacotherapy: current perspectives and future directions. Curr Drug Targets. 2013;14(7):739-43.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3584306/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC3584306/
          </a>
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          Cartilage repair Phase 2 investigation. Metabolic Pharmaceuticals (Calzada Limited) program disclosures.
        </li>
        <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          AOD-9604 visceral adipose tissue 2024 Phase 2b metabolic syndrome trial. Industry research disclosure.
        </li>
      </ol>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function AOD9604Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"AOD-9604","description":"AOD-9604 (hGH Fragment 176-191) research profile: mechanism, clinical trial history, dosing, side effects, and FDA regulatory status.","url":"https://profpeptide.com/peptides/aod-9604","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"AOD-9604"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">AOD-9604</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Anti-Obesity Drug 9604, hGH Fragment 176-191, Tyr-hGH 177-191
      </p>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Overview</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            AOD-9604 is a synthetic peptide fragment of human growth hormone, specifically the 16-amino-acid C-terminal sequence (amino acids 176-191) with a stabilizing tyrosine added at the front. It was developed in Australia in the 1990s to capture growth hormone&apos;s fat-burning effects without the broader hormonal side effects of full-length growth hormone. Despite six clinical trials in over 900 participants, it failed to demonstrate consistent weight loss in larger Phase 2b studies and was discontinued as a drug candidate in 2007. It remains available as a research peptide and has renewed interest for cartilage repair applications.
          </p>
          <div>
            <p className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates lipolysis (fat breakdown) without raising blood sugar or IGF-1</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Modest weight reduction in early trials (2.6 kg vs 0.8 kg placebo over 12 weeks)</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Selective fat-mobilization without growth hormone&apos;s broader endocrine effects</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Well-tolerated safety profile across 900+ trial participants</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">Investigational interest in cartilage repair and joint applications</li>
              <li className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">No measurable effect on insulin sensitivity or glucose homeostasis</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Historical clinical trials used oral doses of 0.25 mg, 0.5 mg, and 1.0 mg daily, plus subcutaneous formulations. Research-grade injectable AOD-9604 is typically dosed at 250–500 mcg subcutaneously once daily. See{" "}
            <a href="#dosing" className="text-[#0891b2] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below for details.
          </p>
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> AOD-9604 is not FDA-approved and is sold only as a research-grade peptide through specialty vendors. The FDA declined to add AOD-9604 to the 503A Bulks List in December 2024, restricting compounding pharmacy availability. See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current research-grade options.
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
            {s.node && s.node}
            {s.content && (
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Lipolysis", "Fat Loss", "Research-Grade", "GH Fragment"].map((tag) => (
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
        <Link href="/peptides/mots-c" className="text-sm font-medium text-[#0891b2] hover:underline">MOTS-c</Link>
        <Link href="/peptides/cagrilintide" className="text-sm font-medium text-[#0891b2] hover:underline">Cagrilintide</Link>
        <Link href="/peptides/igf-1-lr3" className="text-sm font-medium text-[#0891b2] hover:underline">IGF-1 LR3</Link>
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
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/coupons" className="btn-primary text-sm text-center">
            View Verified Discount Codes &rarr;
          </Link>
          <a
            href="https://www.amazon.com/s?k=metabolic+weight+loss+supplements&tag=profpeptide-20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm text-center"
          >
            Search Related Supplements on Amazon &rarr;
          </a>
        </div>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
    </>
  );
}
