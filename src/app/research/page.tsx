import Link from "next/link";

export const metadata = {
  title: "Research & Education | Prof. Peptide",
  description: "Curated peptide research articles, study summaries, and educational guides.",
};

const articles = [
  {
    title: "Understanding GLP-1 Receptor Agonists",
    category: "Metabolic Research",
    readTime: "8 min read",
    summary: "A deep dive into the mechanism, clinical trial data, and research applications of GLP-1 receptor agonists including semaglutide and tirzepatide.",
    slug: "glp1-receptor-agonists",
    featured: true,
  },
  {
    title: "Reconstitution 101: A Researcher's Guide",
    category: "Practical Guide",
    readTime: "5 min read",
    summary: "Step-by-step guide to correctly reconstituting lyophilized peptides with bacteriostatic water, including storage, handling, and common mistakes.",
    slug: "reconstitution-guide",
    featured: true,
  },
  {
    title: "The GH Axis: GHRH, GHRP, and Secretagogues Explained",
    category: "Endocrinology",
    readTime: "10 min read",
    summary: "How growth hormone is regulated, how peptides interact with that axis, and what the research literature says about GH secretagogues.",
    slug: "gh-axis-explained",
    featured: false,
  },
  {
    title: "BPC-157 vs TB-500: Mechanisms and Research Comparison",
    category: "Tissue Repair",
    readTime: "7 min read",
    summary: "Comparing the two most-researched tissue-repair peptides: mechanisms, study quality, routes of administration, and what the data actually shows.",
    slug: "bpc157-vs-tb500",
    featured: false,
  },
  {
    title: "Peptide Storage and Stability: What Research Shows",
    category: "Practical Guide",
    readTime: "6 min read",
    summary: "Temperature, light, pH, and freeze-thaw cycles all affect peptide stability. A review of stability data across common research peptides.",
    slug: "peptide-storage-stability",
    featured: false,
  },
  {
    title: "Introduction to Peptide Nootropics: Semax and Selank",
    category: "Cognitive Research",
    readTime: "9 min read",
    summary: "Overview of Russian-developed peptide nootropics, the research base behind them, and what is and isn't known about their mechanisms.",
    slug: "peptide-nootropics-semax-selank",
    featured: false,
  },
];

export default function ResearchPage() {
  const featured = articles.filter(a => a.featured);
  const rest = articles.filter(a => !a.featured);
  return (
    <div className="section">
      <div className="mb-10">
        <span className="tag mb-3 inline-block">Research & Education</span>
        <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Research Hub</h1>
        <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
          Curated guides, study summaries, and educational articles. Written to be accurate,
          honest about unknowns, and useful for serious researchers.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {featured.map((a) => (
          <div key={a.slug} className="card border-[#d0eeef] bg-[#f0fafa]">
            <div className="flex items-center gap-2 mb-3">
              <span className="tag">{a.category}</span>
              <span className="text-xs text-gray-400">{a.readTime}</span>
            </div>
            <h2 className="text-base font-semibold text-[#1e2d3d] mb-2">{a.title}</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{a.summary}</p>
            <span className="text-xs font-medium text-[#0D7377]">Read article →</span>
          </div>
        ))}
      </div>
      <h2 className="text-lg font-semibold text-[#1e2d3d] mb-4">All Articles</h2>
      <div className="space-y-3">
        {rest.map((a) => (
          <div key={a.slug} className="card flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="tag text-xs">{a.category}</span>
                <span className="text-xs text-gray-400">{a.readTime}</span>
              </div>
              <h3 className="text-sm font-semibold text-[#1e2d3d]">{a.title}</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{a.summary}</p>
            </div>
            <span className="text-xs font-medium text-[#0D7377] whitespace-nowrap flex-shrink-0">Read →</span>
          </div>
        ))}
      </div>
      <div className="mt-12 p-6 bg-gray-50 border border-gray-100 rounded-xl text-center">
        <p className="text-sm font-medium text-[#1e2d3d] mb-2">More articles coming soon</p>
        <p className="text-xs text-gray-500">The research hub is actively updated. Get the app to be notified of new content.</p>
        <Link href="/app" className="btn-primary text-sm mt-4 inline-block">Get the App</Link>
      </div>
    </div>
  );
}