import Link from "next/link";

export const metadata = {
    title: "Research & Education | Prof. Peptide",
    description: "Curated peptide research articles, study summaries, and educational guides.",
};

type Article = {
    title: string;
    url: string;
    date?: string;
    source?: string;
};

type PeptideSection = {
    peptide: string;
    articles: Article[];
};

type CategorySection = {
    category: string;
    peptides: PeptideSection[];
};

const categories: CategorySection[] = [
  {
        category: "Metabolic & Weight Loss",
        peptides: [
          {
                    peptide: "Semaglutide",
                    articles: [],
          },
          {
                    peptide: "Tirzepatide",
                    articles: [],
          },
          {
                    peptide: "Retatrutide",
                    articles: [
                      {
                                    title: "TRIUMPH-4 Phase 3 Trial: 71.2 lbs Average Weight Loss Plus Knee Osteoarthritis Pain Relief",
                                    url: "https://www.rheumatologyadvisor.com/news/triumph-4-results-retatrutide-cuts-weight-and-knee-oa-pain/",
                                    date: "December 2025",
                                    source: "Rheumatology Advisor",
                      },
                      {
                                    title: "Retatrutide: A Game Changer in Obesity Pharmacotherapy",
                                    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12190491/",
                                    date: "June 2025",
                                    source: "PMC",
                      },
                      {
                                    title: "Triple-Hormone-Receptor Agonist Retatrutide for Obesity — Phase 2 Trial",
                                    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2301972",
                                    source: "NEJM",
                      },
                      {
                                    title: "Efficacy and Safety of Retatrutide — Systematic Review and Meta-Analysis",
                                    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12026077/",
                                    date: "2025",
                                    source: "PMC",
                      },
                              ],
          },
          {
                    peptide: "MOTS-c",
                    articles: [],
          },
              ],
  },
  {
        category: "Metabolic & Weight Loss — Cross-Peptide Research",
        peptides: [
          {
                    peptide: "Cross-Peptide Research",
                    articles: [
                      {
                                    title: "Tirzepatide vs Semaglutide for Obesity — SURMOUNT-5 Head-to-Head Trial",
                                    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2416394",
                                    date: "May 2025",
                                    source: "NEJM",
                      },
                      {
                                    title: "Cardiovascular Outcomes of Semaglutide and Tirzepatide in Clinical Practice",
                                    url: "https://www.nature.com/articles/s41591-025-04102-x",
                                    date: "November 2025",
                                    source: "Nature Medicine",
                      },
                      {
                                    title: "Semaglutide and Tirzepatide in a Remote Weight Management Program — 12-Month Study",
                                    url: "https://formative.jmir.org/2025/1/e81912",
                                    date: "September 2025",
                                    source: "JMIR",
                      },
                              ],
          },
              ],
  },
  {
        category: "Recovery & Tissue Repair",
        peptides: [
          {
                    peptide: "BPC-157",
                    articles: [],
          },
          {
                    peptide: "TB-500",
                    articles: [],
          },
              ],
  },
  {
        category: "Growth Hormone",
        peptides: [
          {
                    peptide: "CJC-1295",
                    articles: [],
          },
          {
                    peptide: "Ipamorelin",
                    articles: [],
          },
              ],
  },
  {
        category: "Cognitive & Nootropic",
        peptides: [
          {
                    peptide: "Selank",
                    articles: [],
          },
          {
                    peptide: "Semax",
                    articles: [],
          },
              ],
  },
  {
        category: "Longevity",
        peptides: [
          {
                    peptide: "Epitalon",
                    articles: [],
          },
              ],
  },
  {
        category: "Sexual Health & Melanocortin",
        peptides: [
          {
                    peptide: "PT-141",
                    articles: [],
          },
              ],
  },
  ];

export default function ResearchPage() {
    return (
          <div className="section">
                <div className="mb-10">
                        <span className="tag mb-3 inline-block">Research & Education</span>span>
                        <h1 className="text-3xl font-bold text-[#1e2d3d] mb-3">Research Hub</h1>h1>
                        <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
                                  Curated study summaries and research articles organized by peptide. Written to be accurate, honest about unknowns, and useful for serious researchers.
                        </p>p>
                </div>div>
          
                <div className="space-y-12">
                  {categories.map((cat) => (
                      <section key={cat.category}>
                                  <h2 className="text-xl font-bold text-[#1e2d3d] mb-6 pb-2 border-b border-[#d0eeef]">
                                    {cat.category === "Metabolic & Weight Loss — Cross-Peptide Research"
                                                      ? "Cross-Peptide Research"
                                                      : cat.category}
                                  </h2>h2>
                                  <div className="space-y-8">
                                    {cat.peptides.map((ps) => (
                                        <div key={ps.peptide}>
                                          {cat.category !== "Metabolic & Weight Loss — Cross-Peptide Research" && (
                                                              <h3 className="text-base font-semibold text-[#0D7377] mb-3">{ps.peptide}</h3>h3>
                                                          )}
                                          {ps.articles.length === 0 ? (
                                                              <div className="card border-dashed border-gray-200 bg-gray-50">
                                                                                    <p className="text-xs text-gray-400 italic">No articles yet — check back soon.</p>p>
                                                              </div>div>
                                                            ) : (
                                                              <div className="space-y-3">
                                                                {ps.articles.map((article) => (
                                                                                        <a
                                                                                                                    key={article.url}
                                                                                                                    href={article.url}
                                                                                                                    target="_blank"
                                                                                                                    rel="noopener noreferrer"
                                                                                                                    className="card flex flex-col sm:flex-row sm:items-start gap-3 hover:border-[#0D7377] transition-colors group"
                                                                                                                  >
                                                                                                                  <div className="flex-1">
                                                                                                                                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                                                                                                                                {article.source && (
                                                                                                                                                    <span className="tag text-xs">{article.source}</span>span>
                                                                                                                                                                            )}
                                                                                                                                                {article.date && (
                                                                                                                                                    <span className="text-xs text-gray-400">{article.date}</span>span>
                                                                                                                                                                            )}
                                                                                                                                                </div>div>
                                                                                                                                              <p className="text-sm font-semibold text-[#1e2d3d] group-hover:text-[#0D7377] transition-colors leading-snug">
                                                                                                                                                {article.title}
                                                                                                                                                </p>p>
                                                                                                                    </div>div>
                                                                                                                  <span className="text-xs font-medium text-[#0D7377] whitespace-nowrap flex-shrink-0 mt-1">
                                                                                                                                              Read →
                                                                                                                    </span>span>
                                                                                          </a>a>
                                                                                      ))}
                                                              </div>div>
                                                          )}
                                        </div>div>
                                      ))}
                                  </div>div>
                      </section>section>
                    ))}
                </div>div>
          
                <div className="mt-12 p-6 bg-gray-50 border border-gray-100 rounded-xl text-center">
                        <p className="text-sm font-medium text-[#1e2d3d] mb-2">More articles coming soon</p>p>
                        <p className="text-xs text-gray-500">The research hub is actively updated. Get the app to be notified of new content.</p>p>
                        <Link href="/app" className="btn-primary text-sm mt-4 inline-block">Get the App</Link>Link>
                </div>div>
          </div>div>
        );
}</div>
