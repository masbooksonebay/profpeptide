export const metadata = {
  title: "Disclaimer | Prof. Peptide",
};

export default function DisclaimerPage() {
  return (
    <div className="section max-w-3xl">
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6">Disclaimer</h1>
      <div className="prose prose-sm max-w-none text-gray-600 dark:text-slate-300 space-y-4">
        <p><strong className="text-gray-800 dark:text-slate-200">Educational Purpose Only.</strong> All content on Prof. Peptide is provided for educational and informational purposes only. Nothing on this site constitutes medical advice, diagnosis, or treatment recommendations.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Not for Human Use.</strong> Research peptides described on this site are intended for laboratory and scientific research purposes only. They are not approved for human consumption by the FDA or equivalent regulatory bodies in most jurisdictions.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">No Vendor Affiliation.</strong> Prof. Peptide is an independent platform. We are not affiliated with, sponsored by, or compensated by any peptide vendor. Coupon codes are provided as a convenience and do not represent endorsement.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Accuracy.</strong> While we strive for accuracy, research in this field evolves rapidly. Information may become outdated. Always consult primary research literature and qualified professionals.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Liability.</strong> Prof. Peptide and its operators accept no liability for any actions taken based on information found on this site.</p>
        <p className="text-xs text-gray-400 dark:text-slate-500 pt-4">Last updated: 2025</p>
      </div>
    </div>
  );
}