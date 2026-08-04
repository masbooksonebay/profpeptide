export const metadata = {
  alternates: { canonical: "/hybrid-rockstar/privacy" },
  title: "Hybrid Rockstar — Privacy Policy",
  description: "Privacy policy for the Hybrid Rockstar iOS app — a Hyrox-style 12-week hybrid training tracker.",
};

export default function HybridRockstarPrivacyPage() {
  return (
    <div className="section max-w-3xl">
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-3">Hybrid Rockstar — Privacy Policy</h1>
      <p className="text-xs text-gray-400 dark:text-slate-500 mb-8">Last updated: August 3, 2026</p>

      <div className="text-gray-600 dark:text-slate-300 space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Overview</h2>
          <p>Hybrid Rockstar (&ldquo;the App&rdquo;) is an iOS application developed by Strength Cycle Studios, LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This privacy policy explains how the App handles your information.</p>
          <p className="mt-2">In short: the App has no accounts and no sign-in, and your training data is stored on your device. One optional feature &mdash; Ask Coach &mdash; sends data off your device when you use it, and one optional feature &mdash; Apple Health sync &mdash; writes workouts to Apple Health on your device. Both are described in full below.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Data Stored on Your Device</h2>
          <p>The App stores your training data locally on your device using iOS&apos;s standard app storage: your settings and preferences (division, gender, unit system, race date, goal, pace), cycle progress and completed sessions, activity log entries and notes, logged working weights, race results you enter, and achievements. We operate no account system and no sync service; the App has no backend for storing user data, and we cannot see this data. It is included in your standard iOS device backups like any app&apos;s data, and if you delete the App, it is removed and cannot be recovered by us.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Ask Coach &mdash; Data That Leaves Your Device</h2>
          <p>Ask Coach is an optional chat feature. When you send a message, the App transmits the following to our server (a function we operate on Vercel), which forwards it to Anthropic&apos;s Claude API to generate the coaching reply:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>The conversation transcript &mdash; your messages and the coach&apos;s prior replies in the current chat</li>
            <li>Training context from your settings and progress, sent so the coach can give relevant answers: your division (format, tier, and gender), unit preference, current cycle week and block, sessions completed, race date, planned cycle start, goal setting, and 1km pace</li>
            <li>Your device&apos;s IP address, which is inherent to any internet request and is used by our server for rate limiting</li>
          </ul>
          <p className="mt-2">No name, email address, account identifier, or device advertising identifier is sent, because the App collects none.</p>
          <p className="mt-2">Our server code does not store, log, or retain your messages or training context &mdash; it holds only a temporary in-memory request counter per IP address for rate limiting, which is not written to any database. Two things are outside our code and are attributed here rather than promised: Vercel, as the hosting platform, keeps its standard request logs and metadata (see Vercel&apos;s privacy policy at <a href="https://vercel.com/legal/privacy-policy" className="text-[#3A759F] hover:underline">vercel.com/legal/privacy-policy</a>); and Anthropic processes the conversation to generate the response under its own policies (see <a href="https://www.anthropic.com/legal/privacy" className="text-[#3A759F] hover:underline">anthropic.com/legal/privacy</a>).</p>
          <p className="mt-2">On your device, chat history is held in memory only while you are on the Ask Coach screen &mdash; it is not saved, and it is gone when you leave the screen or close the App. If you never use Ask Coach, nothing is transmitted.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Apple Health Integration</h2>
          <p>The App can save your completed training sessions to Apple Health as workouts. This is <strong className="text-gray-800 dark:text-slate-200">write-only and off by default</strong>:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>It only runs if you turn on &ldquo;Sync to Apple Health&rdquo; in the App&apos;s Settings, at which point iOS asks for your permission</li>
            <li>What is written: the workout type (for example running or strength training) and its duration &mdash; nothing else</li>
            <li>The App does not read any data from Apple Health &mdash; no workouts, heart rate, sleep, or any other health data</li>
            <li>You can revoke access at any time in the iOS Settings app under Privacy &amp; Security &gt; Health, or turn the toggle off in the App</li>
          </ul>
          <p className="mt-2">Health data written this way stays in Apple Health on your device, under Apple&apos;s health data protections. It is not transmitted to us or anyone else by the App.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What the App Does Not Do</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>No analytics or usage tracking &mdash; the App contains no analytics SDK</li>
            <li>No crash reporting or telemetry</li>
            <li>No advertising, ad networks, or advertising identifiers (IDFA)</li>
            <li>No push notification service &mdash; the App registers no push token</li>
            <li>No collection of personal information (name, email, phone number, address)</li>
            <li>No sale or sharing of data with advertisers, partners, or data brokers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Notifications</h2>
          <p>The App may schedule local reminders about your training sessions. These are scheduled and delivered entirely on your device using iOS&apos;s standard notification system. No notification content or scheduling information is transmitted anywhere.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Ratings and Sharing</h2>
          <p>If you rate the App, the rating prompt is Apple&apos;s own StoreKit interface; the App itself collects nothing from it. If you use the share feature after completing a session, the App renders an image on your device and hands it to the iOS share sheet &mdash; where it goes from there is your choice, and the App uploads nothing itself.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Children&apos;s Privacy</h2>
          <p>The App is not directed at children under the age of 13. We do not knowingly collect data from children.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Changes to This Privacy Policy</h2>
          <p>We may update this privacy policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of the App after changes constitutes acceptance of the updated policy.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Contact</h2>
          <p>For questions about this privacy policy or about Hybrid Rockstar, please contact:</p>
          <p className="mt-2">
            Strength Cycle Studios, LLC<br />
            9712 Ashbourn Drive<br />
            Burke, VA 22015<br />
            Email: <a href="mailto:support@hybridrockstar.app" className="text-[#3A759F] hover:underline">support@hybridrockstar.app</a>
          </p>
        </section>

        <p className="text-xs text-gray-400 dark:text-slate-500 pt-6 border-t border-gray-100 dark:border-slate-800">&copy; 2026 Strength Cycle Studios, LLC</p>
      </div>
    </div>
  );
}
