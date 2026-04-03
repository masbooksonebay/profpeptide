import Link from "next/link";

export const metadata = {
  title: "Peptide Library | Prof. Peptide",
  description: "Research profiles for 30+ peptides including mechanisms, half-lives, and dosing research.",
};

const peptides = [
  { name: "Semaglutide", category: "GLP-1", tags: ["Metabolic", "Weight"], slug: "semaglutide", summary: "GLP-1 receptor agonist studied for metabolic regulation and appetite modulation." },
  { name: "Tirzepatide", category: "GLP-1/GIP", tags: ["Metabolic", "Dual agonist"], slug: "tirzepatide", summary: "Dual GLP-1/GIP agonist with strong data on weight and glucose management in research models." },
  { name: "BPC-157", category: "Tissue Repair", tags: ["Gut", "Recovery"], slug: "bpc-157", summary: "Pentadecapeptide derived from human gastric juice, studied for tissue healing and gut protection." },
  { name: "TB-500", category: "Tissue Repair", tags: ["Recovery", "Inflammation"], slug: "tb-500", summary: "Synthetic fragment of Thymosin Beta-4 researched for wound healing and anti-inflammatory effects." },
  { name: "CJC-1295", category: "GHRH Analogue", tags: ["GH axis", "Recovery"], slug: "cjc-1295", summary: "GHRH analogue that stimulates growth hormone release; often combined with Ipamorelin." },
  { name: "Ipamorelin", category: "GHRP", tags: ["GH axis", "Sleep"], slug: "ipamorelin", summary: "Selective growth hormone secretagogue with minimal cortisol or prolactin side effects in studies." },
  { name: "Retatrutide", category: "Triple Agonist", tags: ["Metabolic", "Novel"], slug: "retatrutide", summary: "GLP-1/GIP/glucagon triple agonist in clinical research; shows promising metabolic data." },
  { name: "Selank", category: "Peptide Nootropic", tags: ["Anxiety", "Cognitive"], slug: "selank", summary: "Synthetic heptapeptide derived from tuftsin, researched for anxiolytic and nootropic properties." },
  { name: "Semax", category: "Peptide Nootropic", tags: ["Cognitive", "Neuroprotection"], slug: "semax", summary: "ACTH-derived peptide studied for cognitive enhancement and neuroprotective properties." },
  { name: "PT-141", category: "Melanocortin", tags: ["Sexual health"], slug: "pt-141", summary: "Melanocortin receptor agonist (Bremelanotide) studied for sexual arousal in research models." },
  { name: "Epitalon", category: "Telomerase", tags: ["Longevity", "Sleep"], slug: "epitalon", summary: "Tetrapeptide researched for telomerase activation and circadian rhythm regulation." },
  { name: "MOTS-c", category: "Mitochondrial", tags: ["Metabolic", "Longevity"], slug: "mots-c", summary: "Mitochondria-derived peptide studied for metabolic regulation and exercise performance." },
];

export default function PeptidesPage() {
  return (
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research Profiles</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Peptide Library</h1>
        <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
          In-depth research profiles covering mechanisms of action, half-lives, reconstitution, and published study data. Updated as new research emerges.
        </p>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-8 text-xs text-amber-800">
        <strong>Disclaimer:</strong> All information is for educational and research purposes only. Not medical advice. Not for human use.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {peptides.map((p) => (
          <Link href={"/peptides/" + p.slug} key={p.slug} className="card group">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-base font-semibold text-[#1e2d3d] group-hover:text-[#0D7377] transition-colors">{p.name}</h2>
              <span className="tag text-xs ml-2 flex-shrink-0">{p.category}</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-3">{p.summary}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}