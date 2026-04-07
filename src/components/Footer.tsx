import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <p className="font-bold text-[#0D7377] text-base mb-2">Prof. Peptide</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Independent peptide and supplement research platform.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Learn</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/peptides" className="hover:text-[#0D7377]">Peptide Library</Link></li>
              <li><Link href="/research" className="hover:text-[#0D7377]">Research</Link></li>
              <li><Link href="/faq" className="hover:text-[#0D7377]">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Tools</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/calculator" className="hover:text-[#0D7377]">Dosage Calculator</Link></li>
              <li><Link href="/coupons" className="hover:text-[#0D7377]">Discount Codes</Link></li>
              <li><Link href="/app" className="hover:text-[#0D7377]">Get the App</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Legal</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/disclaimer" className="hover:text-[#0D7377]">Disclaimer</Link></li>
              <li><Link href="/privacy" className="hover:text-[#0D7377]">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Prof. Peptide. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 text-center sm:text-right max-w-sm">
            For educational and research purposes only. Not medical advice. Not for human consumption.
          </p>
        </div>
      </div>
    </footer>
  );
}
