import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/guides",
  title: "Guides — Practical Peptide Research References | Prof. Peptide",
  description:
    "Practical reference guides for peptide research — injection technique, reconstitution math, syringe sizing, and research fundamentals.",
});

const guides = [
  {
    href: "/guides/peptide-research-basics",
    title: "Peptide Research Basics",
    desc: "What research peptides are, how they signal at the receptor level, why doses are measured in micrograms, and what quality testing actually verifies.",
    topic: "Foundations",
    audience: "New to peptides",
    readingTime: "10–12 min",
  },
  {
    href: "/guides/syringes-and-injection",
    title: "Insulin Syringes and Injection Technique",
    desc: "A practical guide to reading insulin syringes, choosing the right size, and injecting research peptides correctly.",
    topic: "Hands-on technique",
    audience: "New to peptide injection",
    readingTime: "8–10 min",
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="section max-w-3xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-3">Guides</h1>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Practical reference guides for peptide research — covering injection technique, syringe sizing, reconstitution math, and the basics of working with research-grade peptides.
        </p>
      </div>

      <div className="space-y-4">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="block p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl hover:border-[#3A759F]/40 transition-colors"
          >
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100">{g.title}</h2>
              <span className="text-xs text-gray-500 dark:text-slate-400 whitespace-nowrap">{g.readingTime}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="tag">{g.topic}</span>
              <span className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">
                {g.audience}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mt-3">{g.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
