import type { Metadata, Viewport } from "next";
import "@fontsource/libre-caslon-display/latin-400.css";
import "@fontsource/libre-caslon-text/latin-400.css";
import "@fontsource/libre-caslon-text/latin-700.css";
import "@fontsource-variable/instrument-sans/wght.css";
import "./globals.css";
import { school, siteUrl } from "@/config/school";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${school.name} | Nursery, Primary and Secondary School in Abakaliki`,
    template: `%s | ${school.name}, Abakaliki`,
  },
  description: `${school.description} Founded ${school.founded.display}. Day school; no boarding.`,
  applicationName: school.name,
  keywords: [
    ...school.alternateNames,
    "school in Abakaliki",
    "private school Abakaliki",
    "nursery school Abakaliki",
    "primary school Abakaliki",
    "secondary school Abakaliki",
    "British curriculum school Ebonyi",
    "American curriculum school Nigeria",
    "Mgbabo Echara",
    "Ebonyi State",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: school.name,
    title: `${school.name}, Abakaliki`,
    description: school.description,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#202054",
};

const organisation = {
  "@context": "https://schema.org",
  "@type": ["School", "EducationalOrganization"],
  name: school.name,
  alternateName: school.alternateNames,
  url: siteUrl,
  logo: `${siteUrl}/logos/crest.png`,
  image: `${siteUrl}/opengraph-image.jpg`,
  description: school.description,
  slogan: school.motto,
  foundingDate: school.founded.iso,
  telephone: school.phones[0].tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${school.address.street}, ${school.address.area}`,
    addressLocality: school.address.city,
    addressRegion: school.address.region,
    addressCountry: school.address.countryCode,
  },
  ...(school.email ? { email: school.email } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
