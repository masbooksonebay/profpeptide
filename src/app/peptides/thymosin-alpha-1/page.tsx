import Link from "next/link";

export const metadata = {
  title: "Thymosin Alpha-1 — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Thymosin Alpha-1 research profile covering immune modulation mechanism, TLR activation, hepatitis treatment, and cancer immunotherapy data.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Thymosin Alpha-1 is a naturally occurring 28-amino acid peptide hormone produced by the thymus gland \u2014 the primary organ responsible for T-cell maturation and immune education. It was first isolated from thymosin fraction 5, a crude extract of bovine thymus glands, by Dr. Allan Goldstein and colleagues in the 1977 \u2014 a landmark discovery that opened an entirely new field of thymic hormone research. The synthetic version of Thymosin Alpha-1 (brand name Zadaxin, generic name thymalfasin) has been approved in over 35 countries for treatment of hepatitis B, hepatitis C, and various immunodeficiency conditions, and was widely used in China for treatment of severe COVID-19. It is not FDA approved in the United States, though it has been studied in multiple US clinical trials. Thymosin Alpha-1 is classified as a biological response modifier \u2014 it does not directly fight pathogens but rather restores, enhances, and regulates the immune system's own capacity to respond. Its defining characteristic is immune balance: it can upregulate immune responses in immunocompromised states while simultaneously modulating excessive immune activation in conditions like sepsis and autoimmune disease. This dual regulatory capacity is rare among immunological agents and makes Thymosin Alpha-1 one of the most clinically studied peptides in existence.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Toll-Like Receptor Activation [1] \u2014 Thymosin Alpha-1 acts primarily through Toll-like receptors TLR2 and TLR9 on myeloid and plasmacytoid dendritic cells, triggering the activation and differentiation of dendritic cells and T cells, and initiating production of key cytokines including interferon-gamma (IFN-\u03B3) and interleukin-2 (IL-2).",
      "T-Cell Differentiation and Maturation [2] \u2014 Thymosin Alpha-1 promotes the differentiation and maturation of T-cell progenitor cells in the thymus, enhancing the production of mature, functional T lymphocytes. It supports both helper T cells (CD4+) and cytotoxic T cells (CD8+), and prevents apoptosis (programmed cell death) of CD4+CD8+ thymocytes \u2014 preserving the thymic T-cell pool.",
      "Dendritic Cell and Natural Killer Cell Activation [3] \u2014 Beyond T-cell effects, Thymosin Alpha-1 activates dendritic cells \u2014 the master regulators of adaptive immune responses \u2014 and natural killer (NK) cells, which provide frontline innate immune defense against viral infections and tumor cells.",
      "Immune Balance and Restoration [4] \u2014 Thymosin Alpha-1's defining characteristic is bidirectional immune modulation. In immunocompromised states it upregulates immune function, restoring depleted lymphocyte counts and immune responsiveness. In states of excessive immune activation (cytokine storm, sepsis) it modulates and dampens overactivation, reducing harmful inflammatory responses. This balance mechanism is the basis of its use across both immunodeficiency and hyperinflammatory conditions.",
      "Thymic Output Enhancement [4] \u2014 As the thymus involutes (shrinks) with age \u2014 a process that begins in puberty and accelerates significantly after age 50 \u2014 T-cell production declines dramatically, contributing to immunosenescence. Thymosin Alpha-1 enhances thymic output and stimulates T-cell differentiation, partially compensating for age-related thymic decline.",
      "Antioxidant and Anti-inflammatory Properties [4] \u2014 Beyond direct immune effects, Thymosin Alpha-1 exhibits antioxidant properties and modulates inflammatory cascades, reducing oxidative damage and chronic low-grade inflammation associated with aging and chronic disease.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Hepatitis B and C [1] \u2014 Thymosin Alpha-1 has been studied extensively as adjunctive therapy for chronic hepatitis B and C, where it enhances antiviral immune responses and improves response rates to interferon therapy. Multiple clinical trials support its use in these indications and it is approved for hepatitis B in numerous countries.",
      "COVID-19 \u2014 Severe Disease [2] \u2014 Thymosin Alpha-1 was used in China for general treatment of COVID-19 patients from April 2020. A retrospective study of 76 severe COVID-19 cases found that Thymosin Alpha-1 reduced mortality by restoring lymphocytopenia (low lymphocyte counts) and reversing T-cell exhaustion markers \u2014 key immune dysfunction patterns in severe COVID-19.",
      "Sepsis and Critical Illness [1] \u2014 Multiple studies have examined Thymosin Alpha-1 for reducing morbidity and mortality in sepsis \u2014 a condition of immune dysfunction characterized by both excessive initial inflammation and subsequent immunosuppression. Its bidirectional modulation makes it uniquely suited for this complex immune state.",
      "Cancer Immunotherapy [3] \u2014 Thymosin Alpha-1 has been studied as an immune enhancer in cancer treatment, activating CD8+ T cells for antitumor responses via MHC class I expression upregulation. It has been evaluated as adjunctive therapy alongside interferon alfa and dacarbazine in metastatic melanoma trials.",
      "Tuberculosis \u2014 Adjunctive Therapy [5] \u2014 A 2024 review identified 21 clinical cohort studies examining Thymosin Alpha-1 as adjunctive therapy for tuberculosis, finding improvements in immune parameters and clinical outcomes when combined with standard anti-tuberculosis chemotherapy.",
      "Aging and Immunosenescence [4] \u2014 A 2025 review established Thymosin Alpha-1's potential for counteracting age-related immune decline, demonstrating improvements in vaccine response in elderly subjects and mitigation of immunosenescence through thymic output enhancement.",
      "Severe Acute Pancreatitis [6] \u2014 A 2025 systematic review and meta-analysis found that Thymosin Alpha-1 alleviates inflammation and prevents infection in severe acute pancreatitis patients through immune regulation, demonstrating improved CD4+ and CD8+ T cell percentages compared to standard treatment.",
      "Vaccine Enhancement [4] \u2014 Studies show Thymosin Alpha-1 enhances vaccine immunogenicity, particularly in immunocompromised and elderly populations. A pilot study demonstrated that Zadaxin enhanced immunogenicity of pandemic H1N1 influenza vaccine in hemodialysis patients.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Restored lymphocyte counts and reduced T-cell exhaustion in severe COVID-19",
      "Reduced mortality in sepsis and critical illness",
      "Improved response rates to hepatitis B and C antiviral therapy",
      "Enhanced vaccine immunogenicity in immunocompromised populations",
      "Reduced infection risk and inflammation in severe acute pancreatitis",
      "Activation of dendritic cells, NK cells, and T-cell subsets",
      "Partial compensation for age-related thymic involution and immunosenescence",
      "Antitumor immune enhancement as adjunct in cancer immunotherapy protocols",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: 28 amino acid peptide \u2014 N-terminal acetylation critical for stability and function",
      "Molecular weight: Approximately 3,108 Daltons",
      "Half-life: Under 2 hours (native peptide); extended fusion proteins under development",
      "Administration: Subcutaneous injection (standard clinical use)",
      "Stability: N-terminal acetyl group provides protection against proteolytic degradation",
    ],
  },
  {
    id: "fda-status",
    title: "FDA Approval Status",
    content:
      "Thymosin Alpha-1 (Zadaxin/thymalfasin) is not FDA approved in the United States. It has been approved in over 35 countries including China, Italy, and the Philippines for treatment of hepatitis B, hepatitis C, and various immunodeficiency conditions. Multiple US clinical trials have been conducted. It is not a controlled substance in the US and has been studied under IND (Investigational New Drug) applications.",
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) Despite approval in 35+ countries and extensive clinical use, Thymosin Alpha-1 has not completed the Phase 3 trial requirements for FDA approval in the US. (2) Clinical trial results have been mixed \u2014 a 2021 retrospective COVID-19 study found no beneficial effect on restoring T-lymphocyte counts, contrasting with other positive findings, highlighting heterogeneity in study populations and protocols. (3) Short half-life under 2 hours limits clinical convenience \u2014 extended half-life formulations (T\u03B11-Fc fusion proteins) are under development. (4) Optimal dosing, duration, and patient selection criteria for various indications are not fully standardized. (5) Cost and accessibility outside approved countries can be a barrier.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "Thymosin Alpha-1 is studied as a standalone immune modulator. In broader wellness and longevity protocols it is sometimes combined with BPC-157 for its gut and systemic healing properties, and with Epitalon for comprehensive immune and longevity support.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "PMC. Thymosin alpha 1: A comprehensive review of the literature. 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7747025/",
      "FDA Regulations.gov. Thymosin Alpha-1 TA1 Thymalfasin Zadaxin \u2014 Immune Supportive Peptide. https://downloads.regulations.gov/FDA-2024-N-4777-0003/attachment_5.pdf",
      "Nature/Scientific Reports. Thymosin Alpha1-Fc Modulates the Immune System and Down-regulates Progression of Melanoma and Breast Cancer. 2018. https://www.nature.com/articles/s41598-018-30956-y",
      "MDPI. Aging and Thymosin Alpha-1. 2025. https://www.mdpi.com/1422-0067/26/23/11470",
      "Journal of Biological Regulators. The Efficacy and Immune Mechanism of Thymosin Alpha 1 as Adjunctive Therapy for Tuberculosis. 2024. https://aber.apacsci.com/index.php/JBRHA/article/view/8089",
      "Frontiers in Immunology. Thymosin alpha 1 alleviates inflammation and prevents infection in severe acute pancreatitis. 2025. https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2025.1571456/full",
    ],
  },
];

export default function ThymosinAlpha1Page() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Thymosin Alpha-1</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
        <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved in US — Approved in 35+ Countries
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: T&alpha;1, TA-1, Thymalfasin, Zadaxin
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
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Immunity", "T-Cell", "Thymus", "Approved Internationally"].map((tag) => (
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
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">Where to Buy</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/coupons" className="btn-primary text-sm text-center">
            View Verified Discount Codes &rarr;
          </Link>
          <a
            href="https://www.amazon.com/s?k=gut+health+immunity+supplements&tag=profpeptide-20"
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
  );
}
