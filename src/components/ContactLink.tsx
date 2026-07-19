import Link from "next/link";

export default function ContactLink({
  pageName,
  pagePath,
}: {
  pageName: string;
  pagePath: string;
}) {
  const subject = `Question about ${pageName}`;
  const href = `/contact?subject=${encodeURIComponent(subject)}&from=${encodeURIComponent(pagePath)}`;
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700/50">
      <p className="text-base text-gray-500 dark:text-slate-400 leading-relaxed">
        Have a question about{" "}
        <span className="text-gray-700 dark:text-slate-300">{pageName}</span>?{" "}
        <Link
          href={href}
          className="text-[#3A759F] dark:text-cyan-400 hover:underline underline-offset-2 ml-1"
        >
          Send us an email &rarr;
        </Link>
      </p>
    </div>
  );
}
