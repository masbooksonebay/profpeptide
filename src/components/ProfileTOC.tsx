type TOCItem = { id: string; title: string };

// Shared "On this page" navigation for peptide-profile pages.
// - variant="rail": sticky right-rail panel on desktop (two-column layout).
// - variant="mobile": collapsible <details> shown above the content on small screens.
// Prominent accent panel (brand left-border + tint + shadow) matching the
// .section-heading treatment; full light + dark support.

function TOCLinks({ sections }: { sections: TOCItem[] }) {
  return (
    <ol className="space-y-1.5">
      {sections.map((s, i) => (
        <li key={s.id} className="flex gap-2 text-sm leading-relaxed">
          <span className="text-brand font-semibold tabular-nums select-none">{i + 1}.</span>
          <a
            href={`#${s.id}`}
            className="text-gray-600 dark:text-slate-300 hover:text-brand transition-colors"
          >
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function ProfileTOC({
  sections,
  variant = "rail",
}: {
  sections: TOCItem[];
  variant?: "rail" | "mobile";
}) {
  if (variant === "mobile") {
    return (
      <details className="panel-card lg:hidden mb-8 overflow-hidden">
        <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-[#16181B] dark:text-slate-100">
          <span>On this page</span>
          <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-4 pb-4 pt-1 border-t border-[#D9DEE4] dark:border-slate-700">
          <TOCLinks sections={sections} />
        </div>
      </details>
    );
  }

  return (
    <nav aria-label="On this page">
      {/* The parent <aside> is the sticky grid item (sticky top-24 + self-start
          so it stays content-height and can travel the tall grid row). This
          card caps its height to the viewport (minus the 96px offset + breathing
          room) and scrolls internally when the list overflows a short viewport. */}
      <div className="panel-card p-5 max-h-[calc(100vh-7rem)] overflow-y-auto toc-scroll">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-[#16181B] dark:text-slate-100 mb-3">
          On this page
        </h2>
        <TOCLinks sections={sections} />
      </div>
    </nav>
  );
}
