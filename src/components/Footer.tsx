import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#0b1120] border-t border-gray-100 dark:border-slate-800 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <p className="font-bold text-[#16181B] dark:text-slate-100 text-base mb-2">Prof. Peptide</p>
            <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed mb-4">
              Independent peptide and supplement research platform.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://x.com/ProfPeptideHQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-slate-500 hover:text-[#3A759F] transition-colors" aria-label="X (Twitter)">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61570750762108" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-slate-500 hover:text-[#3A759F] transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"/></svg>
              </a>
              <a href="https://www.instagram.com/profpeptidehq/" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-slate-500 hover:text-[#3A759F] transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">Learn</p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
              <li><Link href="/peptides" className="hover:text-[#3A759F]">Peptide Library</Link></li>
              <li><Link href="/supplements" className="hover:text-[#3A759F]">Supplements</Link></li>
              <li><Link href="/bioregulators" className="hover:text-[#3A759F]">Bioregulators</Link></li>
              <li><Link href="/compare" className="hover:text-[#3A759F]">Comparisons</Link></li>
              <li><Link href="/guides" className="hover:text-[#3A759F]">Guides</Link></li>
              <li><Link href="/faq" className="hover:text-[#3A759F]">FAQ</Link></li>
              <li><Link href="/news" className="hover:text-[#3A759F]">News</Link></li>
              <li><Link href="/glossary" className="hover:text-[#3A759F]">Glossary</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">Tools</p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
              <li><Link href="/calculator" className="hover:text-[#3A759F]">Dosage Calculator</Link></li>
              <li><Link href="/log" className="hover:text-[#3A759F]">Track / Log</Link></li>
              <li><Link href="/app" className="hover:text-[#3A759F]">Get the App</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">Sourcing</p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
              {/* Price Comparison link gated until real vendor prices land (route is noindexed). */}
              <li><Link href="/vendors" className="hover:text-[#3A759F]">Verified Vendors</Link></li>
              <li><Link href="/best-peptide-vendors" className="hover:text-[#3A759F]">Best Peptide Vendors</Link></li>
              <li><Link href="/coupons" className="hover:text-[#3A759F]">Discount Codes</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">Legal</p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
              <li><Link href="/about" className="hover:text-[#3A759F]">About</Link></li>
              <li><Link href="/methodology" className="hover:text-[#3A759F]">Methodology</Link></li>
              <li><Link href="/disclaimer" className="hover:text-[#3A759F]">Disclaimer</Link></li>
              <li><Link href="/privacy" className="hover:text-[#3A759F]">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-[#3A759F]">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#D9DEE4] dark:border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-400 dark:text-slate-500">
            <p>&copy; {new Date().getFullYear()} Strength Cycle Studios, LLC. All rights reserved.</p>
          </div>
          <p className="text-xs text-gray-400 dark:text-slate-500 text-center sm:text-right max-w-sm">
            For educational and research purposes only. Not medical advice. Not for human consumption.
          </p>
        </div>
      </div>
    </footer>
  );
}
