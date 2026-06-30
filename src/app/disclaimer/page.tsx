export const metadata = {
  alternates: { canonical: "/disclaimer" },
  title: "Disclaimer | Prof. Peptide",
};

export default function DisclaimerPage() {
  return (
    <div className="section max-w-3xl">
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6">Disclaimer</h1>
      <div className="prose prose-sm max-w-none text-gray-600 dark:text-slate-300 space-y-4">
        <p><strong className="text-gray-800 dark:text-slate-200">Educational Purpose Only.</strong> All content on Prof. Peptide is provided for educational and informational purposes only. Nothing on this site constitutes medical advice, diagnosis, or treatment recommendations.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Not for Human Use.</strong> Research peptides described on this site are intended for laboratory and scientific research purposes only. They are not approved for human consumption by the FDA or equivalent regulatory bodies in most jurisdictions.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Affiliate Disclosure.</strong> Prof. Peptide is independently operated and may receive affiliate commissions from some vendors when users purchase through our links or use our discount codes, at no additional cost to you. Affiliate relationships do not determine vendor inclusion, ranking, verification, or our editorial conclusions.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Accuracy.</strong> While we strive for accuracy, research in this field evolves rapidly. Information may become outdated. Always consult primary research literature and qualified professionals.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Liability.</strong> Prof. Peptide and its operators accept no liability for any actions taken based on information found on this site.</p>
        <p className="text-xs text-gray-400 dark:text-slate-500 pt-4">Last updated: 2026</p>
      </div>
    </div>
  );
}