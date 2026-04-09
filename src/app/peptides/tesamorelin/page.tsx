import Link from "next/link";

export const metadata = {
  title: "Tesamorelin — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Tesamorelin research profile covering FDA-approved GHRH analog mechanism, visceral fat reduction data, cognitive research, and clinical evidence.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Tesamorelin is a synthetic analog of growth hormone-releasing hormone (GHRH) featuring a distinctive trans-3-hexenoic acid modification at its N-terminal tyrosine residue. Developed by Theratechnologies Inc. in Canada, this single structural modification dramatically increases tesamorelin's stability against the proteolytic enzymes that rapidly destroy native GHRH, while also tightening its binding affinity at the pituitary GHRH receptor. The result is the most clinically validated GHRH analog available — the only GHRH analog with FDA approval, granted in November 2010 under the brand name Egrifta for reducing excess visceral abdominal fat in HIV-infected patients with lipodystrophy. Beyond its approved indication, tesamorelin has generated substantial research interest for visceral fat reduction in the general population, liver fat reduction (hepatic steatosis), cognitive function in older adults, and body composition optimization. Its FDA approval provides a level of clinical safety and efficacy data virtually unique among research peptides.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "GHRH Receptor Agonism with Enhanced Stability [1] — Tesamorelin binds to GHRH receptors on anterior pituitary somatotroph cells with higher affinity than native GHRH, stimulating cAMP production and GH gene transcription. The trans-3-hexenoic acid modification at Tyr1 resists degradation by dipeptidyl aminopeptidase-IV (DPP-IV), the enzyme responsible for rapidly inactivating native GHRH.",
      "Pulsatile GH Release [2] — Like other GHRH analogs, tesamorelin produces pulsatile GH secretion rather than the continuous elevation seen with exogenous rhGH. This preserves the physiological GH rhythm and maintains pituitary responsiveness.",
      "Downstream IGF-1 Elevation [1] — GH released via tesamorelin stimulation increases hepatic IGF-1 production over weeks of dosing, mediating anabolic and metabolic effects on body composition.",
      "Visceral Fat Reduction [2] — Elevated GH promotes lipolysis (fat breakdown) preferentially in visceral adipose tissue. Clinical trials demonstrated significant reduction in visceral adipose tissue (VAT) in HIV-associated lipodystrophy, with effects maintained over 52 weeks of treatment.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "HIV-Associated Lipodystrophy — Pivotal Trials [2] — Two Phase 3 clinical trials established the efficacy and safety of tesamorelin for reducing excess visceral fat in HIV-infected patients on antiretroviral therapy. These trials led to FDA approval in November 2010 — making tesamorelin the only GHRH analog with an approved clinical indication.",
      "Hepatic Steatosis (Liver Fat) [1] — Research by Stanley et al. demonstrated that tesamorelin significantly reduced liver fat content in patients with HIV-associated liver disease, generating interest in its application for non-alcoholic fatty liver disease (NAFLD) in broader populations.",
      "Cognitive Function in Older Adults [1] — Studies have investigated tesamorelin's effects on cognitive function in healthy older adults and those with mild cognitive impairment, examining whether GH/IGF-1 elevation can support brain function and reduce age-related cognitive decline.",
      "Body Composition in Non-HIV Populations [2] — Off-label research examines tesamorelin's potential for visceral fat reduction, lean mass improvement, and metabolic health optimization in adults without HIV — the primary driver of its growing use in anti-aging and functional medicine.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Significant reduction in visceral adipose tissue in FDA-approved indication",
      "Effects on VAT maintained over 52 weeks in clinical trials",
      "Reduction in liver fat content in HIV-associated steatosis research",
      "Dose-dependent GH and IGF-1 elevation",
      "Potential improvements in cognitive function in older adults",
      "Lean mass improvements alongside visceral fat reduction",
      "Physiological pulsatile GH release preserving pituitary function",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: 44-amino acid GHRH analog with trans-3-hexenoic acid N-terminal modification",
      "Half-life: Approximately 26 minutes (plasma) — but GH pulse lasts 2–4 hours",
      "Administration: Subcutaneous injection once daily",
      "Onset: GH pulse begins within minutes; IGF-1 elevation accumulates over weeks",
      "Stability: Significantly more stable than native GHRH or sermorelin due to N-terminal modification",
    ],
  },
  {
    id: "fda-status",
    title: "FDA Approval Status",
    content:
      "Tesamorelin is FDA approved as Egrifta (later reformulated as Egrifta SV) for reduction of excess abdominal fat in HIV-infected adults with lipodystrophy. It is the first and only FDA-approved GHRH analog for reducing excess abdominal adiposity. Off-label use for general visceral fat reduction, body composition, and anti-aging is common in clinical practice and legally permissible when prescribed by a licensed provider.",
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) The FDA-approved indication is specifically HIV-associated lipodystrophy — evidence for non-HIV populations is more limited. (2) Effects on VAT diminish after discontinuation — ongoing treatment required to maintain benefits. (3) Transient side effects including injection site reactions, fluid retention, joint pain, and glucose elevation are reported. (4) Theoretical concerns about sustained IGF-1 elevation and mitogenic effects with long-term use. (5) Cost is substantially higher than non-approved research peptides.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "Tesamorelin is studied as a standalone GHRH analog due to its specific visceral fat reduction evidence base. In broader protocols it may be combined with Ipamorelin for complementary GHRH + GHRP synergy, similar to the CJC-1295 + Ipamorelin GH Stack.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "Loti Labs. Tesamorelin: GHRH Analogue Research, Mechanism of Action and Metabolic Studies. 2026. https://lotilabs.com/resources/tesamorelin-peptide-ghrh-analogue-research-guide",
      "Wiley. Growth hormone secretagogues: history, mechanism of action, and clinical development. 2020. https://onlinelibrary.wiley.com/doi/full/10.1002/rco2.9",
      "FDA. Tesamorelin NDA Application Review — Egrifta. 2010. https://www.accessdata.fda.gov/drugsatfda_docs/nda/2010/022505Orig1s000MedR.pdf",
    ],
  },
];

export default function TesamorelinPage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0D7377] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Tesamorelin</h1>
        <span className="tag">Growth Hormone</span>
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full font-medium">
          FDA Approved — HIV-Associated Lipodystrophy
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        Also Known As: Egrifta, Egrifta SV, TH9507
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
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["GH Axis", "GHRH", "Visceral Fat", "FDA Approved"].map((tag) => (
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
      <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-3">Where to Buy</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/coupons" className="btn-primary text-sm text-center">
            View Verified Discount Codes &rarr;
          </Link>
          <a
            href="https://www.amazon.com/s?k=growth+hormone+supplements&tag=profpeptide-20"
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
