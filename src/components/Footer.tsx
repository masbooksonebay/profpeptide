import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#0b1120] border-t border-gray-100 dark:border-slate-800 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <p className="font-bold text-[#0891b2] text-base mb-2">Prof. Peptide</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
              Independent peptide and supplement research platform.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">Learn</p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
              <li><Link href="/peptides" className="hover:text-[#0891b2]">Peptide Library</Link></li>
              <li><Link href="/research" className="hover:text-[#0891b2]">Research</Link></li>
              <li><Link href="/compare" className="hover:text-[#0891b2]">Comparisons</Link></li>
              <li><Link href="/faq" className="hover:text-[#0891b2]">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">Tools</p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
              <li><Link href="/calculator" className="hover:text-[#0891b2]">Dosage Calculator</Link></li>
              <li><Link href="/coupons" className="hover:text-[#0891b2]">Discount Codes</Link></li>
              <li><Link href="/app" className="hover:text-[#0891b2]">Get the App</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">Legal</p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
              <li><Link href="/disclaimer" className="hover:text-[#0891b2]">Disclaimer</Link></li>
              <li><Link href="/privacy" className="hover:text-[#0891b2]">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Prof. Peptide. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-slate-500 text-center sm:text-right max-w-sm">
            For educational and research purposes only. Not medical advice. Not for human consumption.
          </p>
        </div>
      </div>
    </footer>
  );
}
