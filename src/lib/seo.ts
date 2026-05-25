import type { Metadata } from "next";

const SITE_URL = "https://profpeptide.com";
const OG_IMAGE = "https://profpeptide.com/og-image.png";

export interface OGImageMeta {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export function buildPageMetadata({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  useDefaultOgImage,
  ogImage,
}: {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  useDefaultOgImage?: boolean;
  ogImage?: OGImageMeta;
}): Metadata {
  if (useDefaultOgImage === true && ogImage) {
    console.warn(
      `[buildPageMetadata] useDefaultOgImage and ogImage are mutually exclusive (path: ${path}). ogImage takes precedence.`
    );
  }

  const url = `${SITE_URL}${path}`;
  const finalOgTitle = ogTitle ?? title;
  const finalOgDescription = ogDescription ?? description;

  // Resolve OG image precedence:
  //   1. Explicit ogImage (per-page override) wins if provided.
  //   2. Otherwise, default static OG image unless useDefaultOgImage === false.
  const resolvedOgImage: OGImageMeta | null =
    ogImage ??
    (useDefaultOgImage === false
      ? null
      : { url: OG_IMAGE, width: 1024, height: 1024, alt: "Prof. Peptide" });

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
      ...(resolvedOgImage && { images: [resolvedOgImage] }),
    },
    twitter: {
      card: "summary_large_image",
      title: finalOgTitle,
      description: finalOgDescription,
      ...(resolvedOgImage && { images: [resolvedOgImage.url] }),
    },
  };
}
