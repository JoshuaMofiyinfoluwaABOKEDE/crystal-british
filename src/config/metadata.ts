import type { Metadata } from "next";
import { school } from "./school";

/**
 * Page metadata with a canonical address and matching social-sharing text,
 * so each page shows the right title when its link is shared on WhatsApp,
 * Facebook or X.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: school.name,
      title: `${title} | ${school.name}`,
      description,
      url: path,
    },
  };
}
