export const metadata = {
  title: "Privacy Policy | Prof. Peptide",
};

export default function PrivacyPage() {
  return (
    <div className="section max-w-3xl">
      <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-6">Privacy Policy</h1>
      <div className="text-gray-600 dark:text-slate-300 space-y-4 text-sm">
        <p><strong className="text-gray-800 dark:text-slate-200">Data Collection.</strong> Prof. Peptide does not collect personal information beyond what is voluntarily submitted (e.g., waitlist email). We do not use tracking pixels or sell data to third parties.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Analytics.</strong> We may use privacy-respecting analytics (e.g., aggregate page view counts) to understand site usage. No individual-level tracking is used.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Cookies.</strong> We use minimal cookies required for site function. We do not use advertising cookies.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Third Parties.</strong> We use Vercel for hosting, which may log standard server request data (IP address, user agent) per their own privacy policy.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Contact.</strong> Questions about privacy can be directed through the site contact page.</p>
        <p className="text-xs text-gray-400 dark:text-slate-500 pt-4">Last updated: 2025</p>
      </div>
    </div>
  );
}