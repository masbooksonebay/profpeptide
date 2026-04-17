import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Tirzepatide — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Tirzepatide research profile covering dual GIP/GLP-1 mechanism, SURMOUNT trial data, head-to-head vs semaglutide, FDA approval, and dosage guidance.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Tirzepatide is a first-in-class dual glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptor agonist — often called a \"twincretin\" — developed by Eli Lilly. It was approved by the FDA in May 2022 for type 2 diabetes (Mounjaro) and subsequently for chronic weight management (Zepbound) and obstructive sleep apnea. By simultaneously activating both GIP and GLP-1 receptors, tirzepatide achieves superior glycemic control and weight loss compared to selective GLP-1 receptor agonists like semaglutide. In Phase 3 trials, tirzepatide produced weight loss of 16.5% to 22.4% over 72 weeks — the largest weight loss results ever recorded for an approved obesity medication at the time.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Dual GIP and GLP-1 Receptor Agonism [1] — Tirzepatide is engineered to activate both the GIP receptor (GIPR) and the GLP-1 receptor (GLP-1R) simultaneously. It is described as an \"imbalanced\" agonist — with higher affinity and potency at the GIP receptor than at the GLP-1 receptor. GIP and GLP-1 receptors are expressed in the pancreas, brain, adipose tissue, and other organs.",
      "Biased GLP-1 Receptor Signaling [2] — Unlike native GLP-1 or selective GLP-1 receptor agonists, tirzepatide demonstrates biased agonism at the GLP-1 receptor — favoring the cAMP signaling pathway over beta-arrestin recruitment. This may optimize insulin secretion by preserving GLP-1 receptor surface expression and enhancing cellular response.",
      "Glucose-Dependent Insulin Secretion [1] — Tirzepatide stimulates insulin secretion from pancreatic beta cells in a glucose-dependent manner, reducing hypoglycemia risk compared to insulin-based therapies.",
      "Glucagon Suppression [3] — Tirzepatide suppresses glucagon release, reducing hepatic glucose production and lowering fasting blood glucose.",
      "Appetite Suppression and Satiety [1] — Both GIP and GLP-1 receptors are expressed in the hypothalamus and brainstem. Tirzepatide activates these central pathways to reduce appetite, decrease food intake, and increase feelings of fullness.",
      "Improved Insulin Sensitivity [1] — Tirzepatide improves insulin sensitivity to a greater extent than semaglutide, associated with lower prandial insulin and glucagon concentrations. GIP agonism also increases adiponectin levels, improving adipose tissue function.",
      "Prolonged Half-Life [2] — A C20 fatty diacid moiety enables albumin binding, extending tirzepatide's half-life to approximately one week for once-weekly dosing.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Weight Loss — SURMOUNT Trials [3] — The SURMOUNT program demonstrated that tirzepatide 5–15mg weekly produced weight loss of 16.5% to 22.4% over 72 weeks in adults with obesity without diabetes — substantially greater than any previously approved obesity medication and superior to semaglutide in head-to-head comparisons.",
      "Type 2 Diabetes — SURPASS Trials [1] — The SURPASS program (5 trials) demonstrated that tirzepatide reduced HbA1c by 1.24% to 2.58% and body weight by 5.4–11.7 kg — more than any other single diabetes agent. Between 23% and 62.4% of patients reached normal HbA1c levels below 5.7%.",
      "Heart Failure — SUMMIT Trial [4] — Tirzepatide significantly reduced left ventricular mass and paracardiac adipose tissue in patients with heart failure with preserved ejection fraction (HFpEF), leading to improvements in heart failure symptoms and physical limitations.",
      "Obstructive Sleep Apnea [2] — Tirzepatide received FDA approval in 2024 for treatment of moderate-to-severe obstructive sleep apnea in adults with obesity — the first medication approved for this indication.",
      "Liver Disease [4] — Tirzepatide has demonstrated efficacy in metabolic dysfunction-associated steatohepatitis (MASH), with ongoing Phase 3 trials evaluating its full hepatic benefits.",
      "Emerging Research [4] — Active research is exploring tirzepatide's potential in chronic kidney disease, cardiovascular outcomes, Alzheimer's disease, and Parkinson's disease.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Weight loss of 16.5% to 22.4% over 72 weeks in obesity trials",
      "HbA1c reductions of 1.24% to 2.58% in type 2 diabetes",
      "Superior weight loss compared to semaglutide in head-to-head studies",
      "23% to 62.4% of diabetes patients achieving normal HbA1c levels",
      "Significant improvements in heart failure symptoms",
      "FDA-approved for obstructive sleep apnea treatment",
      "Improvements in liver inflammation and fat accumulation",
      "Reductions in cardiovascular risk markers",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Half-life: Approximately 1 week",
      "Administration: Subcutaneous injection once weekly",
      "Doses: 2.5mg, 5mg, 7.5mg, 10mg, 12.5mg, 15mg (escalated gradually)",
      "Metabolism: Proteolytic cleavage and fatty acid beta-oxidation",
      "Excretion: Renal and fecal",
    ],
  },
  {
    id: "fda-status",
    title: "FDA Approval Status",
    content:
      "Tirzepatide is FDA approved as Mounjaro (subcutaneous) for type 2 diabetes management, and as Zepbound (subcutaneous) for chronic weight management in adults with obesity or overweight with weight-related comorbidities, and for moderate-to-severe obstructive sleep apnea in adults with obesity.",
  },
  {
    id: "limitations",
    title: "Side Effects and Limitations",
    content:
      "Most common side effects are gastrointestinal, particularly during dose escalation: nausea, vomiting, diarrhea, constipation, decreased appetite. Rare but serious: pancreatitis, gallbladder disease, increased heart rate. Contraindications: personal or family history of medullary thyroid carcinoma, multiple endocrine neoplasia syndrome type 2, pregnancy. Weight regain is common after discontinuation — ongoing treatment is typically required.",
  },
  {
    id: "related",
    title: "Related Peptides",
    links: [
      { name: "Semaglutide — selective GLP-1 receptor agonist, established cardiovascular outcomes data", href: "/peptides/semaglutide" },
      { name: "Retatrutide — next-generation triple agonist (GLP-1/GIP/glucagon) in Phase 3 trials", href: "/peptides/retatrutide" },
    ],
  },
  {
    id: "references",
    title: "References",
    body: [
      "PubMed. Tirzepatide, a dual GIP/GLP-1 receptor co-agonist for the treatment of type 2 diabetes. 2022. https://pubmed.ncbi.nlm.nih.gov/36050763/",
      "Springer. Insights into the Mechanism of Action of Tirzepatide. 2025. https://link.springer.com/article/10.1007/s13300-025-01804-w",
      "NCBI Bookshelf. Tirzepatide — StatPearls. 2024. https://www.ncbi.nlm.nih.gov/books/NBK585056/",
      "PMC. Unveiling Tirzepatide's Therapeutic Spectrum. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12507501/",
    ],
  },
];

export default function TirzepatidePage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Tirzepatide","description":"Tirzepatide research profile covering dual GIP/GLP-1 mechanism, SURMOUNT trial data, head-to-head vs semaglutide, FDA approval, and dosage guidance.","url":"https://profpeptide.com/peptides/tirzepatide","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Tirzepatide"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Tirzepatide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full font-medium">
          FDA Approved
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Mounjaro, Zepbound
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
        {["GIP/GLP-1", "Weight Loss", "Diabetes", "Sleep Apnea", "FDA Approved"].map((tag) => (
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
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">How Does Tirzepatide Compare?</h2>
        <p className="text-sm text-gray-600 dark:text-slate-300 mb-3">See how Tirzepatide compares to Semaglutide and Retatrutide in our side-by-side GLP-1 comparison.</p>
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
