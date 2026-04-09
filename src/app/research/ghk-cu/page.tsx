import Link from "next/link";

export const metadata = {
  title: "GHK-Cu Research — Key Studies & Plain-English Summaries | Prof. Peptide",
  description:
    "5 key GHK-Cu studies summarized in plain English. Covers skin regeneration, gene expression modulation, wound healing, and clinical trial data.",
};

const studies = [
  {
    title: "GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration",
    authors: "Pickart L, Vasquez-Soltero JM, Margolina A",
    journal: "BioMed Research International / PMC",
    year: "2015",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/",
    summary: "The comprehensive review that established GHK-Cu as a multi-pathway skin regeneration agent. The paper documents that GHK-Cu \u2014 first isolated by Pickart in 1973 when he discovered it made aged liver tissue behave like younger tissue \u2014 accelerates wound healing, improves transplanted skin take, stimulates collagen and glycosaminoglycan synthesis, attracts immune and endothelial cells to injury sites, and restores replicative vitality to fibroblasts after radiation therapy. Crucially, plasma GHK levels decline from 200 ng/mL at age 20 to 80 ng/mL by age 60 \u2014 a 60% drop that coincides with the well-documented decline in tissue regenerative capacity. The paper concludes that GHK-Cu \u201Cmay be one of the few molecules with the ability to reset cellular function\u201D toward a younger profile.",
  },
  {
    title: "Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data",
    authors: "Pickart L, Margolina A",
    journal: "International Journal of Molecular Sciences / PMC",
    year: "2018",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/",
    summary: "A landmark review synthesizing GHK-Cu\u2019s known biological actions with groundbreaking gene expression data from the Broad Institute\u2019s Connectivity Map. Using this publicly available genomic database, researchers found that GHK-Cu modulates expression of genes across an extraordinary range of categories \u2014 wound healing, collagen synthesis, anti-inflammatory signaling, nerve growth, antioxidant defense, and DNA repair. At higher concentrations it upregulated 10 caspase and caspase-associated genes with anti-cancer relevance, and combined GHK-Cu with ascorbic acid produced strong suppression of sarcoma-180 growth in mice. The paper expanded GHK-Cu\u2019s research profile from a wound healing peptide into a potential anti-aging genomic modulator \u2014 one of the most scientifically provocative findings in peptide research.",
  },
  {
    title: "Skin Regenerative and Anti-Cancer Actions of Copper Peptides",
    authors: "Pickart L, Margolina A",
    journal: "Cosmetics (MDPI)",
    year: "2018",
    access: "Open Access",
    url: "https://www.mdpi.com/2079-9284/5/2/29",
    summary: "A focused review of GHK-Cu\u2019s applications in skin protection and cancer prevention \u2014 two applications that emerge from the same underlying mechanism of DNA repair and gene expression modulation. The paper documents how GHK-Cu\u2019s ability to modulate 84 genes associated with DNA repair and cancer suppression could make it relevant for skin cancer prevention alongside its established role in skin regeneration and anti-aging. Human clinical trial data on topical GHK-Cu showed consistent improvements in wrinkles, skin density, and overall skin quality. The paper also documents GHK-Cu\u2019s anti-inflammatory and antioxidant properties through its copper-binding effects on superoxide dismutase activity.",
  },
  {
    title: "Exploring the Role of Tripeptides in Wound Healing and Skin Regeneration \u2014 A Comprehensive Review",
    authors: "Medsci Research Group",
    journal: "International Journal of Medical Sciences",
    year: "2025",
    access: "Open Access",
    url: "https://www.medsci.org/v22p4175.htm",
    summary: "The most current systematic review of GHK-Cu in wound healing, covering studies published between 2016 and 2025. The paper documents GHK-Cu\u2019s role across all phases of wound repair \u2014 stimulating fibroblast migration, enhancing collagen deposition, supporting angiogenesis, and facilitating extracellular matrix remodeling. It also covers advanced formulations including GHK-Cu nanoparticle conjugates, hydrogels, and clinical derivatives (TriHex and TriHex 2.0) that improve bioavailability for wound care applications. The review notes that GHK-Cu\u2019s small tripeptide size gives it physicochemical advantages over larger peptides \u2014 better water solubility, easier tissue diffusion, and resistance to enzymatic degradation \u2014 making it highly suitable for both topical and injectable formulations.",
  },
  {
    title: "Effects of Topical Copper Tripeptide Complex on CO2 Laser-Resurfaced Skin",
    authors: "Leyden JJ, et al.",
    journal: "Archives of Facial Plastic Surgery / Liebertpub",
    year: "2006",
    access: "Paywalled",
    url: "https://www.liebertpub.com/abs/doi/10.1001/archfaci.8.4.252",
    summary: "One of the few controlled human clinical trials of GHK-Cu \u2014 examining its use after CO2 laser skin resurfacing in 13 patients. While the study found no statistically significant reduction in post-procedure erythema between GHK-Cu and control groups, patient satisfaction was significantly higher in the GHK-Cu group (p=.04), and data suggested superior improvement in wrinkle scores in Fitzpatrick classes II and III. The mixed results reflect the challenge of measuring GHK-Cu\u2019s multifactorial effects in small controlled trials \u2014 and underscore why larger studies are needed to formally validate what extensive preclinical and cosmetic data already suggests.",
  },
];

export default function GHKCuResearchPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/research" className="text-sm text-[#0891b2] hover:underline mb-6 inline-block">&larr; Back to Research</Link>
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">GHK-Cu Research</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">Key peer-reviewed studies on GHK-Cu (Glycyl-L-Histidyl-L-Lysine copper complex), a naturally occurring copper-binding tripeptide first isolated from human plasma in 1973. GHK-Cu has one of the most extensive evidence bases of any peptide, including multiple human clinical studies. It is widely used in cosmetic formulations and is not FDA-regulated as a drug. Each summary is written in plain English. Click any title to read the full article.</p>
      <div className="space-y-6">
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">View the full GHK-Cu profile</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Mechanism of action, gene expression data, clinical applications, and regulatory status.</p>
        <Link href="/peptides/ghk-cu" className="btn-primary text-sm">GHK-Cu Profile</Link>
      </div>
    </div>
  );
}
