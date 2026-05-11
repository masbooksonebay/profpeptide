import type { Metadata } from "next";

const SITE_URL = "https://profpeptide.com";
const OG_IMAGE = "https://profpeptide.com/og-image.png";

export function buildPageMetadata({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
}: {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const finalOgTitle = ogTitle ?? title;
  const finalOgDescription = ogDescription ?? description;
  return {
    alternates: { canonical: path },
    title,
    description,
    openGraph: {
      title: finalOgTitle,
      description: finalOgDescription,
      url,
      siteName: "Prof. Peptide",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1024, height: 1024, alt: "Prof. Peptide" }],
    },
    twitter: {
      card: "summary_large_image",
      title: finalOgTitle,
      description: finalOgDescription,
      images: [OG_IMAGE],
    },
  };
}
