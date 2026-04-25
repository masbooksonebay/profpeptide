type Fact = {
  label: string;
  value: string;
  flag?: string;
};

export default function KeyFactsCallout({ facts }: { facts: Fact[] }) {
  return (
    <div className="mb-8 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-200 dark:border-slate-700 rounded-xl">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-4">
        Key facts
      </p>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wide mb-1">
              {f.label}
            </dt>
            <dd className="text-sm text-gray-800 dark:text-slate-200 leading-snug">
              {f.value}
              {f.flag && (
                <span className="block mt-1 text-xs text-amber-700 dark:text-amber-400">
                  {f.flag}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
