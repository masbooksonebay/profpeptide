import Link from "next/link";

export const metadata = {
  title: "Retatrutide — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Retatrutide research profile covering triple GIP/GLP-1/glucagon mechanism, 28.7% Phase 3 weight loss, liver fat reduction, and clinical trial status.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Retatrutide is a first-in-class investigational triple hormone receptor agonist developed by Eli Lilly that simultaneously activates three receptors — GIP, GLP-1, and glucagon. It represents the next generation of incretin-based therapies beyond semaglutide (GLP-1 only) and tirzepatide (GLP-1/GIP dual). By adding glucagon receptor agonism to the dual-agonist framework, retatrutide not only suppresses appetite and improves insulin sensitivity but also increases energy expenditure — producing the most dramatic weight loss results ever recorded in a Phase 3 obesity trial. In December 2025, the Phase 3 TRIUMPH-4 trial reported average weight loss of 28.7% equivalent to approximately 71 lbs over 68 weeks. Retatrutide is not FDA approved and is not legally available outside of clinical trials. FDA approval is projected around 2027.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Triple Receptor Agonism [1] — Retatrutide activates three hormone receptors simultaneously: GIP receptor, GLP-1 receptor, and glucagon receptor. It is most potent at the GIP receptor, moderately potent at the GLP-1 receptor, and mildest at the glucagon receptor. This graduated activation profile is intentional — providing glucagon's metabolic benefits while limiting its hyperglycemic effects.",
      "Appetite Suppression and Satiety [2] — Like semaglutide and tirzepatide, retatrutide activates GLP-1 and GIP receptors in the hypothalamus and brainstem to reduce appetite, increase satiety, and decrease food intake.",
      "Increased Energy Expenditure via Glucagon Agonism [3] — The key differentiator from semaglutide and tirzepatide is glucagon receptor activation. Glucagon increases energy expenditure and drives fat oxidation in the liver, shifting metabolism toward active fat burning rather than simply suppressing appetite. This is why retatrutide produces substantially greater weight loss than dual agonists.",
      "Hepatic Fat Reduction [3] — Glucagon agonism drives dramatic reductions in liver fat. A Phase 2 substudy published in Nature Medicine in 2024 found that the 12mg dose reduced liver fat content by 82.4% at 24 weeks — the most dramatic hepatic fat reduction ever reported for a pharmacological agent.",
      "Glucose-Dependent Insulin Secretion [2] — GIP and GLP-1 receptor activation stimulates insulin secretion in a glucose-dependent manner, reducing hypoglycemia risk while improving glycemic control.",
      "Prolonged Half-Life [1] — Like tirzepatide, retatrutide uses a fatty acid conjugation enabling albumin binding, extending its half-life to approximately 6 days for once-weekly dosing.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Weight Loss — Phase 2 Trial NEJM 2023 [2] — The Phase 2 trial published in the New England Journal of Medicine demonstrated that retatrutide 12mg produced 24.2% mean weight loss after 48 weeks in adults with obesity — substantially greater than Phase 2 results for either semaglutide or tirzepatide at comparable timepoints.",
      "Weight Loss — Phase 3 TRIUMPH-4 Trial December 2025 [3] — The first successful Phase 3 trial reported that retatrutide produced average weight loss of 26.4% at 9mg and 28.7% at 12mg over 68 weeks — approximately 71 lbs — among the largest weight loss results ever reported in a Phase 3 obesity drug trial.",
      "Type 2 Diabetes — Phase 2 Trial Lancet 2023 [4] — In adults with type 2 diabetes, retatrutide reduced HbA1c by 2.2% and 77–82% of participants achieved euglycemia after 36 weeks — superior to dulaglutide, a widely used GLP-1 receptor agonist.",
      "Liver Disease — Nature Medicine 2024 [3] — A Phase 2 substudy found that retatrutide reduced liver fat content by 82.4% at 24 weeks in patients with non-alcoholic fatty liver disease — more than 90% of participants achieved normalization of liver fat at the highest dose.",
      "Knee Osteoarthritis — TRIUMPH-4 [3] — The Phase 3 TRIUMPH-4 trial demonstrated substantial relief from osteoarthritis knee pain alongside weight loss, with retatrutide reducing WOMAC pain scores by up to 75.8%.",
      "Ongoing Phase 3 Program [3] — Seven additional Phase 3 readouts are expected in 2026 evaluating retatrutide in obesity, type 2 diabetes, obstructive sleep apnea, chronic low back pain, cardiovascular and renal outcomes, and metabolic-associated steatotic liver disease.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Average 28.7% body weight loss over 68 weeks in Phase 3 trial equivalent to approximately 71 lbs",
      "24.2% weight loss over 48 weeks in Phase 2 trial",
      "82.4% reduction in liver fat content at 24 weeks",
      "HbA1c reduction of 2.2% in type 2 diabetes",
      "77–82% of diabetes patients achieving normal blood sugar levels",
      "Substantial reduction in knee osteoarthritis pain",
      "Reductions in non-HDL cholesterol, triglycerides, and inflammatory markers",
      "Systolic blood pressure reduction of 14.0 mmHg at highest dose",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Half-life: Approximately 6 days",
      "Administration: Subcutaneous injection once weekly (investigational)",
      "Doses studied: 4mg, 8mg, 9mg, 12mg",
      "Built on a GIP peptide backbone with fatty acid conjugation for albumin binding",
      "Metabolism: Similar to other incretin-based therapies",
    ],
  },
  {
    id: "fda-status",
    title: "FDA Approval Status",
    content:
      "Retatrutide is not FDA approved. It is an investigational drug currently in Phase 3 clinical trials. The first successful Phase 3 trial TRIUMPH-4 reported positive results in December 2025. FDA approval is projected by analysts around 2027. The only legitimate access to retatrutide is through enrollment in a clinical trial.",
  },
  {
    id: "limitations",
    title: "Side Effects and Limitations",
    content:
      "Most common side effects are gastrointestinal — nausea 38–43%, diarrhea 33–35%, constipation 22–25%, vomiting 20–21% — consistent with other incretin-based therapies. A notable new finding is dysesthesia (abnormal skin sensations) reported in up to 21% of Phase 2 participants — a signal not seen with semaglutide or tirzepatide that requires monitoring in ongoing Phase 3 trials. Discontinuation rates due to adverse events were 12–18%, higher than Lilly's other weight loss candidates, correlated with baseline BMI and rate of weight loss. Contraindications will likely mirror those of semaglutide and tirzepatide once approved.",
  },
  {
    id: "related",
    title: "Related Peptides",
    links: [
      { name: "Semaglutide — selective GLP-1 receptor agonist, FDA approved", href: "/peptides/semaglutide" },
      { name: "Tirzepatide — dual GLP-1/GIP receptor agonist, FDA approved", href: "/peptides/tirzepatide" },
    ],
  },
  {
    id: "references",
    title: "References",
    body: [
      "PMC. Efficacy and safety of retatrutide for obesity treatment: systematic review and meta-analysis. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12026077/",
      "PMC. Triple Agonism Based Therapies for Obesity. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12304053/",
      "Eli Lilly. Phase 3 TRIUMPH-4 Trial Results. December 2025. https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-weight-loss-average",
      "NEJM. Triple-Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial. 2023. https://www.nejm.org/doi/full/10.1056/NEJMoa2301972",
    ],
  },
];

export default function RetatrutidePage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0D7377] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Retatrutide</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Phase 3 Trials
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        Also Known As: LY3437943, informally called GLP-3 (not an official designation)
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">
              {s.title}
            </h2>
            {s.content && (
              <p className="text-sm text-gray-600 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 leading-relaxed">
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
                    className="flex items-center gap-2 text-sm font-medium text-[#0D7377] hover:underline"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D7377] flex-shrink-0" />
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["GIP/GLP-1/Glucagon", "Weight Loss", "Liver Fat", "Phase 3", "Investigational"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <p className="text-sm font-medium text-gray-700 mb-1">Need to calculate a dose?</p>
        <p className="text-xs text-gray-500 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>
      <div className="mt-10 p-5 border border-[#d0eeef] bg-[#f0fafa] rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-2">How Does Retatrutide Compare?</h2>
        <p className="text-sm text-gray-600 mb-3">See how Retatrutide compares to Semaglutide and Tirzepatide in our side-by-side GLP-1 comparison.</p>
        <Link href="/compare/semaglutide-vs-tirzepatide-vs-retatrutide" className="text-sm font-medium text-[#0D7377] hover:underline">Semaglutide vs Tirzepatide vs Retatrutide &rarr;</Link>
      </div>

      <div className="mt-6 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-3">Where to Buy</h2>
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
        <p className="text-xs text-gray-400 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
  );
}
