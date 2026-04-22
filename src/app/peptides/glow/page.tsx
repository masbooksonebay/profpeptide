import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  alternates: { canonical: "/peptides/glow" },
  title: "GLOW (Peptide Stack) — Research Profile, Mechanism & Protocol | Prof. Peptide",
  description:
    "GLOW peptide stack research profile covering GHK-Cu, BPC-157, and TB-500 synergy for skin rejuvenation, collagen production, tissue repair, and anti-inflammatory recovery.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content:
      "GLOW is a popular peptide stack combining three synergistic compounds \u2014 GHK-Cu, BPC-157, and TB-500 \u2014 into a single protocol designed to support skin rejuvenation, collagen production, tissue repair, and anti-inflammatory recovery. Rather than a single molecule, GLOW represents a research-driven combination that leverages complementary mechanisms: GHK-Cu drives collagen synthesis and gene expression reprogramming, BPC-157 provides systemic anti-inflammatory and wound-healing support, and TB-500 promotes cell migration and organized tissue remodeling. The rationale is that targeting multiple regenerative pathways simultaneously may produce outcomes beyond what any single peptide achieves alone.",
  },
  {
    id: "mechanism",
    title: "Mechanism of Action",
    body: [
      "GHK-Cu (Copper Tripeptide-1) \u2014 A naturally occurring copper-binding peptide whose levels decline from approximately 200 ng/mL at age 20 to 80 ng/mL by age 60. Stimulates collagen and elastin synthesis, promotes skin remodeling, attracts immune cells to damaged tissue, and modulates gene expression related to tissue repair. Research found GHK-Cu affects over 31% of human genes studied, with broad regenerative actions including resetting aged gene expression patterns toward younger profiles.",
      "BPC-157 (Body Protection Compound) \u2014 Supports wound healing, promotes angiogenesis (new blood vessel formation), reduces systemic inflammation, and helps protect and repair the skin barrier. Its anti-inflammatory effects \u2014 including NF-\u03BAB pathway modulation \u2014 create an optimal healing environment for the other peptides in the stack.",
      "TB-500 (Thymosin Beta-4 Fragment) \u2014 Promotes cell migration to damaged areas, supports organized collagen deposition, and reduces fibrosis in tissue. Works systemically to support regeneration throughout the body. Its anti-fibrotic properties help ensure new tissue forms in an organized, functional pattern rather than as scar tissue.",
    ],
  },
  {
    id: "research",
    title: "Research Highlights",
    body: [
      "GHK-Cu shown to increase skin elasticity by 11.8% in 30 days in clinical research, with collagen production improved in 70% of women in a 12-week topical study.",
      "GHK-Cu increased decorin production by 302% and glycosaminoglycan accumulation in skin fibroblasts \u2014 key structural molecules for skin firmness and hydration.",
      "BPC-157 demonstrated significantly increased collagen, reticulin, and blood vessel formation in animal wound-healing models, with 40\u201350% acceleration of wound closure compared to controls.",
      "TB-500 shows anti-fibrotic properties while promoting organized collagen deposition \u2014 reducing scar formation while supporting functional tissue regeneration.",
      "All three peptides share complementary anti-inflammatory mechanisms, inhibiting NF-\u03BAB and related inflammatory pathways \u2014 creating a multi-targeted approach to reducing chronic inflammation that impairs skin quality and healing.",
    ],
  },
  {
    id: "benefits",
    title: "Observed Benefits in Research",
    body: [
      "Enhanced collagen and elastin synthesis through multiple complementary pathways",
      "Accelerated wound healing and tissue repair with reduced scarring",
      "Broad anti-inflammatory effects via NF-\u03BAB inhibition from all three components",
      "Gene expression reprogramming toward younger, healthier tissue profiles (GHK-Cu)",
      "Improved skin firmness, elasticity, and hydration markers",
      "Organized collagen deposition with reduced fibrosis (TB-500)",
      "Angiogenesis support for improved nutrient delivery to healing tissue (BPC-157)",
      "Synergistic mechanism coverage \u2014 collagen synthesis, immune modulation, and cell migration",
    ],
  },
  {
    id: "protocol",
    title: "Typical Research Protocol",
    content:
      "GLOW is commonly formulated at a 5:1:1 ratio \u2014 GHK-Cu (50 mg) : TB-500 (10 mg) : BPC-157 (10 mg) \u2014 either as a combined vial or as individual peptides dosed separately. Most research protocols include a break of at least 15 days between cycles. Administration is typically subcutaneous injection. As with all peptide protocols, reconstitution with bacteriostatic water is standard and proper storage (refrigerated, protected from light) is essential for peptide stability.",
  },
  {
    id: "limitations",
    title: "Research Limitations",
    content:
      "(1) GLOW is a combination protocol \u2014 no clinical trials have studied this specific three-peptide stack as a unified treatment. Evidence is extrapolated from individual peptide research. (2) Most GHK-Cu clinical data comes from topical applications; injectable research is more limited. (3) BPC-157 and TB-500 evidence is primarily preclinical (animal models) with limited human trial data. (4) Optimal ratios and dosing schedules for the combined stack have not been established through controlled research. (5) None of the component peptides are FDA-approved for human therapeutic use. (6) Individual responses may vary and long-term safety data for the combination is not available.",
  },
  {
    id: "components",
    title: "Component Profiles",
    content: "Read the full research profile for each component peptide in the GLOW stack:",
  },
  {
    id: "references",
    title: "References",
    body: [
      "PMC. GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration. 2015. https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/",
      "PMC. Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/",
      "EurekAlert. Epigenetic mechanisms activated by GHK-Cu increase skin collagen density in clinical trial. 2023. https://www.eurekalert.org/news-releases/990464",
      "PMC. Stable Gastric Pentadecapeptide BPC 157: Novel Therapy in Gastrointestinal Tract. 2016. https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/",
      "PMC. Thymosin Beta 4 Is an Endogenous Iron Chelator and Molecular Switch of Ferroptosis. 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC9916557/",
    ],
  },
];

export default function GLOWPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"GLOW (Peptide Stack)","description":"GLOW peptide stack research profile covering GHK-Cu, BPC-157, and TB-500 synergy for skin rejuvenation, collagen production, tissue repair, and anti-inflammatory recovery.","url":"https://profpeptide.com/peptides/glow","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"GLOW (Peptide Stack)"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">GLOW</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
        <span className="tag">Recovery</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
        Peptide Stack: GHK-Cu + BPC-157 + TB-500
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
            {s.id === "components" && (
              <div className="flex flex-wrap gap-3 mt-3">
                <Link href="/peptides/ghk-cu" className="btn-primary text-sm">GHK-Cu Profile</Link>
                <Link href="/peptides/bpc-157" className="btn-outline text-sm">BPC-157 Profile</Link>
                <Link href="/peptides/tb-500" className="btn-outline text-sm">TB-500 Profile</Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Skin Health", "Anti-Aging", "Collagen", "Recovery", "Peptide Stack"].map((tag) => (
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
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#0891b2] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#0891b2] hover:underline">BPC-157</Link>
        <Link href="/peptides/tb-500" className="text-sm font-medium text-[#0891b2] hover:underline">TB-500</Link>
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

      <p className="text-xs text-gray-400 dark:text-slate-500 mt-8">For research purposes only. Not FDA-approved for human use. Not medical advice.</p>
    </div>
    </>
  );
}
