"use client";
import { usePathname } from "next/navigation";

const SHOW_ON = ["/peptides", "/research"];

export default function Disclaimer() {
  const pathname = usePathname();
  const show = SHOW_ON.some((prefix) => pathname.startsWith(prefix));
  if (!show) return null;
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mx-auto max-w-5xl w-full sm:px-6 mb-4 text-xs text-amber-800">
      For educational and research purposes only. Not medical advice. Not for human use.
    </div>
  );
}
