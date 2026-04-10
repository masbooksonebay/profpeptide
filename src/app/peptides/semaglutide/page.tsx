import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Semaglutide — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Semaglutide research profile covering GLP-1 mechanism, STEP trial weight loss data, cardiovascular benefits, FDA approval status, and dosage guidance.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Semaglutide is a long-acting synthetic analogue of glucagon-like peptide-1 (GLP-1), a naturally occurring incretin hormone produced in the gut. Originally developed by Novo Nordisk for the treatment of type 2 diabetes, semaglutide has since become one of the most prescribed and extensively studied medications in the world, driven by its remarkable efficacy in weight reduction and broad metabolic benefits. It is available in both subcutaneous injectable form (once weekly) and oral form (once daily). As of 2025, semaglutide holds FDA approval for type 2 diabetes management, obesity treatment, cardiovascular risk reduction, and chronic kidney disease progression — making it one of the most versatile agents in modern medicine.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "GLP-1 Receptor Agonism [1] — Semaglutide binds to and activates GLP-1 receptors throughout the body with high affinity and specificity. GLP-1 receptors are expressed in the pancreas, brain, heart, kidneys, liver, and gastrointestinal tract, explaining semaglutide's broad systemic effects.",
      "Appetite Suppression via Central Nervous System [2] — GLP-1 receptors in the hypothalamus and brainstem regulate appetite and satiety signaling. Semaglutide activates these receptors to reduce hunger, increase feelings of fullness, and decrease food intake — often described as reducing \"food noise.\"",
      "Glucose-Dependent Insulin Secretion [1] — Semaglutide stimulates insulin secretion from pancreatic beta cells in a glucose-dependent manner — meaning it only triggers insulin release when blood glucose is elevated, significantly reducing the risk of hypoglycemia compared to other diabetes medications.",
      "Glucagon Suppression [1] — Semaglutide suppresses glucagon release from pancreatic alpha cells, reducing hepatic glucose production and lowering fasting blood glucose levels.",
      "Gastric Emptying Delay [3] — By slowing gastric emptying, semaglutide reduces the rate at which glucose enters the bloodstream after meals, blunting post-meal glucose spikes and contributing to satiety.",
      "Prolonged Half-Life [3] — Semaglutide is engineered with a fatty acid side chain enabling strong albumin binding, extending its half-life to approximately one week and enabling once-weekly dosing.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Weight Loss — STEP Trials [4] — The landmark STEP trial program demonstrated that subcutaneous semaglutide 2.4mg weekly produced an average weight loss of 15.2% body weight over 68 weeks in adults with obesity without diabetes — substantially superior to any previously approved weight loss medication.",
      "Cardiovascular Protection — SELECT Trial [4] — The SELECT trial demonstrated that semaglutide reduced the risk of major adverse cardiovascular events by approximately 20% in overweight and obese adults with established cardiovascular disease but without diabetes, leading to FDA approval for cardiovascular risk reduction.",
      "Type 2 Diabetes — SUSTAIN and PIONEER Trials [1] — The SUSTAIN program (subcutaneous) and PIONEER program (oral) comprehensively established semaglutide's efficacy and safety in type 2 diabetes, demonstrating superior HbA1c reductions of 1.5–2.0% and significant weight loss compared to other diabetes medications.",
      "Chronic Kidney Disease — FLOW Trial [2] — The FLOW trial demonstrated that semaglutide significantly slowed the progression of chronic kidney disease in people with type 2 diabetes, leading to FDA approval for this indication in January 2025 — the first GLP-1 agent approved for CKD.",
      "Liver Disease [2] — A 2025 Phase 3 trial published in the New England Journal of Medicine demonstrated semaglutide's efficacy in metabolic dysfunction-associated steatohepatitis (MASH), showing significant improvement in liver inflammation and fibrosis.",
      "Emerging Research Areas [2] — Active research is exploring semaglutide's potential in Alzheimer's disease (70% reduced risk observed in large-scale studies), Parkinson's disease, alcohol use disorder, obstructive sleep apnea, polycystic ovary syndrome, and osteoarthritis pain.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Average 15% body weight reduction in obesity trials",
      "20% reduction in major cardiovascular events (SELECT trial)",
      "HbA1c reductions of 1.5–2.0% in type 2 diabetes",
      "Significant slowing of chronic kidney disease progression",
      "Improvement in liver inflammation and fibrosis in MASH",
      "Reduction in knee osteoarthritis pain",
      "Reduced risk of alcohol intoxication and opioid overdose in observational studies",
      "Potential neuroprotective effects in Alzheimer's and Parkinson's disease research",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Half-life: Approximately 1 week (subcutaneous and oral)",
      "Administration: Subcutaneous injection once weekly (Ozempic, Wegovy); oral tablet once daily (Rybelsus)",
      "Dose escalation: Started at low dose, increased every 4 weeks to minimize GI side effects",
      "Metabolism: Proteolytic cleavage of the peptide backbone and sequential beta-oxidation of the fatty acid chain",
      "Excretion: Renal and fecal",
    ],
  },
  {
    id: "fda-status",
    title: "FDA Approval Status",
    content:
      "Semaglutide is FDA approved under the following brand names: Ozempic (subcutaneous) — type 2 diabetes management, cardiovascular risk reduction, and chronic kidney disease progression. Wegovy (subcutaneous, higher dose) — chronic weight management in adults with obesity or overweight with weight-related comorbidities and cardiovascular risk reduction. Rybelsus (oral) — type 2 diabetes management.",
  },
  {
    id: "limitations",
    title: "Side Effects and Limitations",
    content:
      "The most common side effects are gastrointestinal, occurring primarily during dose escalation: nausea, vomiting, diarrhea, constipation (reported in approximately 75% of users at some point), decreased appetite. Rare but serious: pancreatitis, gallbladder disease, increased heart rate. Contraindications: personal or family history of medullary thyroid carcinoma, multiple endocrine neoplasia syndrome type 2, pregnancy. Important limitation: weight regain is common after discontinuation — ongoing treatment is typically required to maintain weight loss.",
  },
  {
    id: "related",
    title: "Related Peptides",
    links: [
      { name: "Tirzepatide — dual GLP-1/GIP receptor agonist with superior weight loss data", href: "/peptides/tirzepatide" },
      { name: "Retatrutide — triple agonist (GLP-1/GIP/glucagon) in Phase 3 trials showing even greater weight loss", href: "/peptides/retatrutide" },
    ],
  },
  {
    id: "references",
    title: "References",
    body: [
      "PMC. Semaglutide as a GLP-1 Agonist: A Breakthrough in Obesity Treatment. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC11944337/",
      "PMC. Emerging Frontiers in GLP-1 Therapeutics: A Comprehensive Evidence Base. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12389369/",
      "PMC. Semaglutide: Double-edged Sword with Risks and Benefits. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC11790292/",
      "NEJM. Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes (SELECT Trial). 2023. https://www.nejm.org/doi/full/10.1056/NEJMoa2307563",
    ],
  },
];

export default function SemaglutidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Semaglutide","description":"Semaglutide research profile covering GLP-1 mechanism, STEP trial weight loss data, cardiovascular benefits, FDA approval status, and dosage guidance.","url":"https://www.profpeptide.com/peptides/semaglutide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://www.profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://www.profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Semaglutide"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Semaglutide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full font-medium">
          FDA Approved
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Ozempic, Wegovy, Rybelsus
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
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
            {s.links && (
              <div className="space-y-2">
                {s.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-[#0891b2] hover:underline"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0891b2] flex-shrink-0" />
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["GLP-1", "Weight Loss", "Diabetes", "Cardiovascular", "FDA Approved"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>
      <div className="mt-10 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How Does Semaglutide Compare?</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300 mb-3">See how Semaglutide compares to Tirzepatide and Retatrutide in our side-by-side GLP-1 comparison.</p>
        <Link href="/compare/semaglutide-vs-tirzepatide-vs-retatrutide" className="text-sm font-medium text-[#0891b2] hover:underline">Semaglutide vs Tirzepatide vs Retatrutide &rarr;</Link>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
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
