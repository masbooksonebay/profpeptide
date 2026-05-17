import type { Metadata } from "next";

const SITE_URL = "https://profpeptide.com";
const OG_IMAGE = "https://profpeptide.com/og-image.png";

export function buildPageMetadata({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  useDefaultOgImage = true,
}: {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  useDefaultOgImage?: boolean;
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
      ...(useDefaultOgImage && {
        images: [{ url: OG_IMAGE, width: 1024, height: 1024, alt: "Prof. Peptide" }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: finalOgTitle,
      description: finalOgDescription,
      ...(useDefaultOgImage && { images: [OG_IMAGE] }),
    },
  };
}
