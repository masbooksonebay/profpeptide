type TOCItem = { id: string; title: string };

export default function PageTOC({ sections }: { sections: TOCItem[] }) {
  return (
    <nav
      aria-label="On this page"
      className="bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl p-5 mb-8 mt-2"
    >
      <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-3">
        On this page
      </h2>
      <ol className="list-decimal list-inside space-y-1.5">
        {sections.map((s) => (
          <li key={s.id} className="text-sm leading-relaxed">
            <a href={`#${s.id}`} className="text-[#0891b2] hover:underline">
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
