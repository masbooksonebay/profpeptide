import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/privacy",
  title: "Privacy Policy | Prof. Peptide",
  description:
    "Prof. Peptide privacy policy — what data is collected, how it is used, cookies and analytics, and your choices.",
  // No own opengraph-image.tsx — defer to the inherited root card.
  useDefaultOgImage: false,
});

export default function PrivacyPage() {
  return (
    <div className="section max-w-3xl">
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-6">Privacy Policy</h1>
      <div className="text-gray-600 dark:text-slate-300 space-y-4 text-sm">
        <p><strong className="text-gray-800 dark:text-slate-200">Data Collection.</strong> Prof. Peptide does not collect personal information beyond what is voluntarily submitted (e.g., waitlist email). We do not use tracking pixels or sell data to third parties.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Analytics.</strong> We may use privacy-respecting analytics (e.g., aggregate page view counts) to understand site usage. No individual-level tracking is used.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Cookies.</strong> We use minimal cookies required for site function. We do not use advertising cookies.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">AI Chat Assistant.</strong> Questions you type into the chat assistant are logged so we can see which topics the site fails to answer and improve its coverage. We store the question, which pages were retrieved to answer it, timing and token counts, and a <em>hashed</em> form of your IP address &mdash; never the address itself. We do not store the assistant&rsquo;s replies. These records are automatically deleted after 30 days. Your question is also sent to Anthropic&rsquo;s API, which generates the answer, and is handled under their privacy policy. Please do not enter personal, identifying, or health information into the chat &mdash; it is a research tool, not a medical or account service.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Third Parties.</strong> We use Vercel for hosting, which may log standard server request data (IP address, user agent) per their own privacy policy.</p>
        <p><strong className="text-gray-800 dark:text-slate-200">Contact.</strong> Questions about privacy can be directed through the site contact page.</p>
        <p className="text-xs text-gray-400 dark:text-slate-500 pt-4">Last updated: April 3, 2026</p>
      </div>
    </div>
  );
}