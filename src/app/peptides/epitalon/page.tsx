import Link from "next/link";

export const metadata = {
  title: "Epitalon — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "Epitalon research profile covering telomerase activation, telomere lengthening evidence, pineal gland regulation, and longevity research.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "Epitalon is a synthetic tetrapeptide with the amino acid sequence Ala-Glu-Asp-Gly (AEDG) \u2014 just four amino acids \u2014 developed by Vladimir Khavinson and the St. Petersburg Institute of Bioregulation and Gerontology based on the composition of Epithalamin, a polypeptide extract from bovine pineal glands. First synthesized in the 1980s, Epitalon has been the subject of over 25 years of research examining its potential geroprotective (aging-protective) effects, primarily through two proposed mechanisms: activation of telomerase to maintain telomere length, and regulation of pineal gland function to restore melatonin secretion. Epitalon occupies a unique position in longevity research \u2014 it is small enough (0.39 kDa) to directly interact with DNA and act as a regulatory factor, and has demonstrated telomere lengthening in human cell lines, human blood cells, and animal models. It is approved for use and available clinically in Russia, and has been studied in human clinical trials. Outside Russia it is not FDA approved and is classified as a research compound. Epitalon presents what researchers call the \"Epitalon Paradox\" \u2014 it activates telomerase and extends telomeres (normally associated with cancer risk) yet animal studies consistently show reduced tumor incidence, not increased. This paradox makes it a scientifically compelling but not fully understood compound.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Telomerase Activation [1] \u2014 Epitalon's best-documented mechanism in vitro is induction of telomerase enzyme activity in human somatic cells. Addition of Epitalon to telomerase-negative human fetal fibroblast cultures induced expression of the catalytic subunit of telomerase (hTERT), enzymatic activity of telomerase, and telomere elongation \u2014 sufficient to surpass the Hayflick limit (the normal cellular replication ceiling) in cell cultures. A 2025 study confirmed telomerase activation in bovine cumulus cells and oocytes.",
      "Telomere Length Maintenance [2] \u2014 Telomeres are repetitive DNA sequences at chromosome ends that shorten with each cell division. Short telomeres trigger cellular senescence or apoptosis. By activating telomerase, Epitalon enables telomere length extension in aging cells, potentially delaying cellular senescence. Human clinical studies showed significant telomere length increases in blood cells of patients aged 60\u201365 and 75\u201380 years.",
      "Pineal Gland Regulation and Melatonin Restoration [3] \u2014 Epitalon was derived from pineal gland extracts and appears to act on the hypothalamic-pituitary axis to regulate pineal function. Studies show Epitalon restores melatonin secretion by the pineal gland in both aged monkeys and humans \u2014 a significant finding given that melatonin declines substantially with age and plays a critical role in circadian rhythm regulation, antioxidant defense, and neuroprotection.",
      "DNA Interaction and Epigenetic Regulation [2] \u2014 At only 0.39 kDa, Epitalon is small enough to directly interact with DNA. Research demonstrates it influences chromatin structure and gene expression, including modulation of hTERT promoter activity, IL-2 mRNA levels, and neurogenic differentiation markers in stem cells.",
      "Antioxidant and Mitochondrial Protection [3] \u2014 Epitalon enhanced mitochondrial health and reduced intracellular reactive oxygen species in treated cells, demonstrated by improved JC-1 staining (a mitochondrial membrane potential indicator). It also increased activities of antioxidant enzymes superoxide dismutase, glutathione peroxidase, and glutathione-S-transferase in aging rats.",
      "Neuroprotective Effects [2] \u2014 Epitalon reduced 8-hydroxydeoxyguanosine (8-OHdG) \u2014 a key marker of oxidative DNA damage \u2014 in neurons, and increased the quantity and length of dendrites. It also increased BDNF and cyclic-AMP responsive element binding protein 1 by regulating melatonin synthesis and circadian gene expression.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Telomere Lengthening \u2014 Cell and Human Studies [1] \u2014 The foundational 2003 study published in Experimental Gerontology established Epitalon's ability to induce telomerase activity and telomere elongation in human fetal fibroblasts. A 2025 study in Biogerontology confirmed dose-dependent telomere length extension in multiple human cell lines including normal epithelial cells and fibroblasts, through both telomerase upregulation and Alternative Lengthening of Telomeres (ALT) mechanisms.",
      "Human Clinical Trials \u2014 Telomere Length and Aging [4] \u2014 Human clinical studies conducted in Russia demonstrated that both Epitalon and Epithalamin significantly increased telomere lengths in blood cells of patients aged 60\u201365 and 75\u201380 years, establishing human evidence for its telomere-lengthening effects.",
      "Biological Age Reduction \u2014 Case Report [4] \u2014 A 2024 case report documented that a combination protocol including Epitalon (5 mg subcutaneously for 10 consecutive days) reduced a patient's biological age by 7.9 years (from 75.93 to 68.03) and increased telomere length from 6.45 to 6.59 kb over one year of treatment, alongside improvements in cognitive function.",
      "Cancer Research \u2014 The Epitalon Paradox [2] \u2014 Multiple animal studies report that Epitalon reduced spontaneous tumor incidence, reduced metastases, and delayed tumor development in cancer-prone mouse models \u2014 despite its telomerase-activating properties. This apparent contradiction with established telomere-cancer biology remains an active area of investigation, with proposed explanations involving epigenetic gating of oncogenic pathways or melatonin-mediated oncostatic effects.",
      "Circadian Rhythm and Melatonin [3] \u2014 Epitalon restored melatonin secretion patterns in aged monkeys and humans, supporting its pineal regulatory mechanism and suggesting applications in age-related circadian disruption and sleep quality.",
      "Retinitis Pigmentosa \u2014 Human Trial [1] \u2014 A human clinical trial in retinitis pigmentosa patients found that Epitalon produced a positive clinical effect in 90% of cases in the treated group \u2014 one of the strongest human efficacy signals in the Epitalon literature.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Telomere length extension in human cell cultures surpassing the Hayflick limit",
      "Significant telomere lengthening in blood cells of elderly humans in clinical studies",
      "7.9-year reduction in biological age in a case report using combination protocol",
      "Restored melatonin secretion in aged monkeys and humans",
      "Reduced spontaneous tumor incidence and metastases in cancer-prone animal models",
      "Positive clinical effect in 90% of retinitis pigmentosa patients",
      "Enhanced mitochondrial function and reduced reactive oxygen species",
      "Neuroprotective effects \u2014 reduced oxidative DNA damage in neurons",
      "Chromosomal aberration reduction in aging mice models",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: Tetrapeptide (Ala-Glu-Asp-Gly) \u2014 4 amino acids",
      "Molecular weight: 0.39 kDa \u2014 small enough to directly interact with DNA",
      "Half-life: Short \u2014 specific human pharmacokinetic data limited",
      "Administration: Subcutaneous injection (typical research protocol: 5\u201310 mg daily for 10\u201320 consecutive days, repeated every 3\u20136 months)",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) The majority of research originates from a single Russian research group (Khavinson et al., St. Petersburg Institute of Bioregulation and Gerontology) \u2014 independent replication outside this group is limited, though increasing. (2) The Epitalon Paradox remains unresolved \u2014 telomerase activation theoretically increases cancer risk, yet animal studies show reduced tumors. The mechanism explaining this apparent contradiction is not fully understood. (3) Large-scale randomized controlled trials under Western regulatory frameworks do not exist. (4) Human evidence is largely from Russian clinical studies with limited methodological detail available in English. (5) Not FDA approved. (6) Optimal dosing, cycle length, and long-term safety in humans are not fully established.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "Epitalon is frequently studied alongside Semax \u2014 Epitalon for telomere and longevity support, Semax for cognitive enhancement. In broader longevity protocols it is combined with Thymosin Alpha-1 for immune support, and with NAD+ precursors for comprehensive cellular health.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "PubMed. Epithalon peptide induces telomerase activity and telomere elongation in human somatic cells. 2003. https://pubmed.ncbi.nlm.nih.gov/12937682/",
      "Springer/Biogerontology. Epitalon increases telomere length in human cell lines through telomerase upregulation or ALT activity. 2025. https://link.springer.com/article/10.1007/s10522-025-10315-x",
      "PMC. Overview of Epitalon \u2014 Highly Bioactive Pineal Tetrapeptide with Promising Properties. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC11943447/",
      "Restorative Medicine. Improving Biological Age, Telomere Length, and Cognition: A Case Report. 2024. https://restorativemedicine.org/journal/improving-biological-age/",
    ],
  },
];

export default function EpitalonPage() {
  return (
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Epitalon</h1>
        <span className="tag">Longevity</span>
        <span className="text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Research Use Only
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Epithalon, Epithalone, AEDG peptide
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
        {["Longevity", "Telomerase", "Pineal Gland", "Preclinical"].map((tag) => (
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
        <Link href="/peptides/nad-plus" className="text-sm font-medium text-[#0891b2] hover:underline">NAD+</Link>
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#0891b2] hover:underline">Thymosin Alpha-1</Link>
        <Link href="/peptides/semax" className="text-sm font-medium text-[#0891b2] hover:underline">Semax</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/epitalon-vs-nad-plus" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon vs NAD+ &rarr;</Link>
        </div>
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
            href="https://www.amazon.com/s?k=longevity+supplements&tag=profpeptide-20"
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
