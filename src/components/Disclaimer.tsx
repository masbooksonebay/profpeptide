"use client";
import { usePathname } from "next/navigation";

const SHOW_ON = ["/peptides", "/research"];

export default function Disclaimer() {
  const pathname = usePathname();
  const isIndexPage = pathname === "/peptides" || pathname === "/research";
  const show = !isIndexPage && SHOW_ON.some((prefix) => pathname.startsWith(prefix));
  if (!show) return null;
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg px-4 py-3 mx-auto max-w-5xl w-full sm:px-6 mb-4 text-xs text-amber-800 dark:text-amber-300">
      For educational and research purposes only. Not medical advice. Not for human use.
    </div>
  );
}
