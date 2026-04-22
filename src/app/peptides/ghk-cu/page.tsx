import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/peptides/ghk-cu" },
  title: "GHK-Cu — Research Profile, Mechanism & Dosage Guide | Prof. Peptide",
  description:
    "GHK-Cu research profile covering copper peptide mechanism, collagen synthesis, gene expression reprogramming, wound healing, and skin rejuvenation.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "GHK-Cu is a naturally occurring tripeptide-copper complex composed of three amino acids \u2014 glycine, histidine, and lysine \u2014 bound to a copper ion. It was first isolated from human plasma in 1973 by researcher Loren Pickart, who discovered that plasma from young individuals caused older liver tissue to synthesize proteins more characteristic of younger tissue \u2014 an activity traced to the GHK peptide. GHK-Cu is found naturally in human plasma, saliva, and urine, but its concentration declines dramatically with age: from approximately 200 ng/mL at age 20 to around 80 ng/mL by age 60. This age-related decline coincides with the visible decrease in skin regenerative capacity and healing ability. GHK-Cu is one of the most extensively researched cosmetic and regenerative peptides, with decades of studies demonstrating its ability to stimulate collagen and elastin synthesis, accelerate wound healing, reduce inflammation, and modulate gene expression across thousands of genes. It is widely used in topical skincare formulations and is classified as a safe cosmetic ingredient. Injectable forms were placed on the FDA's Category 2 bulk drug substance list, restricting commercial compounding in the US. Topical formulations remain widely available. GHK-Cu is notable for its ability to affect approximately 31% of human genes \u2014 essentially resetting gene expression patterns toward healthier, younger states.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "Collagen and Elastin Synthesis Stimulation [1] \u2014 GHK-Cu directly stimulates fibroblasts to produce collagen types I and III, elastin, and glycosaminoglycans including dermatan sulfate and chondroitin sulfate. It also increases production of decorin, a proteoglycan that organizes collagen fibers and maintains skin structure. Clinical studies show collagen production improved in 70% of women treated with GHK-Cu topically for 12 weeks \u2014 compared to 50% with vitamin C cream and 40% with retinoic acid.",
      "Copper-Mediated Enzymatic Activity [2] \u2014 The copper ion in GHK-Cu activates lysyl oxidase, an enzyme essential for cross-linking collagen and elastin fibers, increasing the structural integrity and strength of newly synthesized matrix proteins. Copper also supports superoxide dismutase activity, providing antioxidant protection.",
      "Matrix Metalloproteinase Modulation [1] \u2014 GHK-Cu modulates matrix metalloproteinases (MMPs) \u2014 enzymes that break down old, damaged collagen \u2014 while simultaneously stimulating new collagen synthesis. This dual regulation enables effective tissue remodeling rather than simple collagen accumulation.",
      "Gene Expression Reprogramming [3] \u2014 GHK-Cu influences expression of approximately 4,000 genes \u2014 31.2% of the human genome \u2014 activating genes involved in tissue remodeling, antioxidant response, and repair while suppressing genes linked to inflammation and tissue breakdown. This genomic reprogramming effect resets aged skin cell gene expression patterns toward profiles more characteristic of younger cells.",
      "Anti-Inflammatory Effects [2] \u2014 GHK-Cu reduces TNF-alpha induced secretion of pro-inflammatory cytokine IL-6 in dermal fibroblasts, modulates inflammatory cascades, and inhibits nitric oxide synthesis in inflammatory conditions. These effects make it relevant for inflammatory skin conditions.",
      "Wound Healing Acceleration [1] \u2014 GHK-Cu attracts immune and endothelial cells to injury sites, stimulates angiogenesis, accelerates wound contraction, and improves transplanted skin take. It has demonstrated 40\u201350% acceleration of wound closure compared to control treatments in research models across skin, hair follicles, gastrointestinal tract, and bone tissue.",
      "Antioxidant Activity [4] \u2014 GHK without copper quenches hydroxyl and peroxyl radicals with stronger hydroxyl radical quenching ability than glutathione \u2014 making it a potent endogenous antioxidant. The copper-chelated form shows even more prominent antioxidant effects.",
    ],
  },
  {
    id: "research",
    title: "Key Research Areas",
    body: [
      "Skin Rejuvenation \u2014 Clinical Studies [3] \u2014 A 2023 double-blind split-face study (n=60, aged 40\u201365) comparing 0.05% GHK-Cu serum to placebo for 12 weeks showed a 22% increase in skin firmness and 16% reduction in fine lines by optical profilometry. A 2023 clinical trial by Yuvan Research using a novel GHK-Cu gel demonstrated an average 28% increase in skin collagen density after 3 months, with the top quartile achieving 51% collagen increase.",
      "Anti-Aging Skin Applications [1] \u2014 GHK-Cu applied twice daily for 12 weeks improved skin laxity, clarity, firmness, and appearance, reduced fine lines, coarse wrinkles, and mottled pigmentation, and increased skin density and thickness \u2014 while strongly stimulating dermal keratinocyte proliferation.",
      "Wound Healing [2] \u2014 A 2024 multicenter study investigated 0.05% GHK-Cu gel after fractional laser resurfacing, demonstrating accelerated post-procedure healing. Research across multiple models confirms 40\u201350% faster wound closure compared to controls.",
      "COPD and Lung Research [2] \u2014 A collaborative study by scientists from Boston University, University of Groningen, University of British Columbia, and University of Pennsylvania established that GHK-Cu reverses the gene expression signature of COPD \u2014 a finding that expanded interest in its systemic applications beyond skin.",
      "Hair Growth [5] \u2014 GHK-Cu has demonstrated improvements in hair count, hair diameter, and scalp coverage in androgenetic alopecia research through improved scalp circulation, reduced follicle inflammation, and growth factor support.",
      "Cognitive Research [4] \u2014 Preliminary observations suggest GHK can partially reverse cognitive impairment in aging mice by targeting anti-inflammatory and epigenetic pathways \u2014 opening a novel research direction beyond its established skin applications.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "22\u201328% improvements in skin collagen density in clinical trials",
      "22% increase in skin firmness and 16% reduction in fine lines in controlled study",
      "Collagen production improved in 70% of women in 12-week topical study",
      "40\u201350% acceleration of wound closure compared to controls",
      "Anti-inflammatory effects reducing IL-6 in dermal fibroblasts",
      "Gene expression reprogramming affecting 31% of human genome",
      "Hair density and diameter improvements in alopecia research",
      "Antioxidant activity stronger than glutathione for hydroxyl radical quenching",
      "Reversal of COPD gene expression signature in collaborative research",
    ],
  },
  {
    id: "pharmacokinetics",
    title: "Pharmacokinetics",
    body: [
      "Structure: Tripeptide (Gly-His-Lys) complexed with copper II ion",
      "Stability: Stable between pH 5\u20137; hydrolyzes in alkaline conditions; sensitive to oxidation",
      "Natural color: Distinctive blue due to copper chelation",
      "Administration: Topical (primary), subcutaneous injection (restricted)",
      "Detectability: Up to 12 hours post-administration",
    ],
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) Injectable GHK-Cu was placed on FDA's Category 2 bulk drug substance list in 2023, meaning it cannot be compounded by commercial pharmacies in the US \u2014 reflecting absence of FDA-standard evidence rather than documented harm. Topical formulations remain freely available. (2) Clinical trial sizes are generally small \u2014 larger Phase 2 and 3 RCTs are needed. (3) Effects are described as moderate compared to retinoids or growth factor formulations in comparative analyses. (4) A rare phenomenon called \"copper uglies\" \u2014 apparent accelerated skin aging from topical copper peptides \u2014 has been anecdotally reported, potentially related to MMP upregulation at higher concentrations. (5) Chemical stability requires careful formulation \u2014 pH, packaging, and chelating agent selection are critical for product efficacy.",
  },
  {
    id: "stacking",
    title: "Common Research Stacking",
    content:
      "GHK-Cu is frequently studied alongside BPC-157 and TB-500 for broader tissue repair protocols. In skincare research it is studied with complementary actives including niacinamide, ceramides, and barrier-strengthening systems.",
  },
  {
    id: "references",
    title: "References",
    body: [
      "PMC. GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration. 2015. https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/",
      "PMC. Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/",
      "EurekAlert. Epigenetic mechanisms activated by GHK-Cu increase skin collagen density in clinical trial. 2023. https://www.eurekalert.org/news-releases/990464",
      "PMC. The potential of GHK as an anti-aging peptide. 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC8789089/",
      "Grand Ingredients. GHK-Cu Peptide: Clinical Evidence and Skin Benefits 2025. https://grandingredients.com/copper-peptides-clinical-benefits/",
    ],
  },
];

export default function GHKCuPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"GHK-Cu","description":"GHK-Cu research profile covering copper peptide mechanism, collagen synthesis, gene expression reprogramming, wound healing, and skin rejuvenation.","url":"https://profpeptide.com/peptides/ghk-cu","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"GHK-Cu"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">GHK-Cu</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
        <span className="text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50 px-2.5 py-1 rounded-full font-medium">
          Not FDA Approved — Topical Use Widely Available
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Also Known As: Copper Peptide, Glycyl-L-Histidyl-L-Lysine Copper, The Glow Peptide
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
        {["Skin Health", "Collagen", "Anti-Aging", "Copper Peptide"].map((tag) => (
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
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157</Link>
        <Link href="/peptides/glow" className="text-sm font-medium text-[#0891b2] hover:underline">GLOW Stack</Link>
        <Link href="/peptides/melanotan-ii" className="text-sm font-medium text-[#0891b2] hover:underline">Melanotan II</Link>
        </div>
      </div>
      <div className="mt-6 p-5 border border-[#0891b2]/20 bg-[#0891b2]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/bpc-157-vs-ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157 vs GHK-Cu &rarr;</Link>
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
            href="https://www.amazon.com/s?k=skin+health+anti+aging+supplements&tag=profpeptide-20"
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
