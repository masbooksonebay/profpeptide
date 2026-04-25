import { ReactNode } from "react";

export default function QuickAnswerBox({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 p-5 border-l-4 border-[#0891b2] bg-[#0891b2]/5 dark:bg-[#0891b2]/10 rounded-r-xl">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#0891b2] mb-2">
        Quick answer
      </p>
      <div className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
