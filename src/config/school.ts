/**
 * Central school information.
 *
 * Every page reads the school's name, contact details and menu from here,
 * so a change in this file updates the whole website.
 *
 * Only facts confirmed by the school belong here.
 */

export const school = {
  /** Display name. Other spellings are in `alternateNames` for search engines. */
  name: "Crystal British-American Schools",
  shortName: "Crystal",
  /** Other spellings, used by search engines so every version finds the site. */
  alternateNames: [
    "Crystal British American School",
    "Crystals British-American Schools",
    "Crystals International British-America Schools",
    "CIBAS",
  ],
  motto: "Brighter minds, brighter future.",
  founded: { display: "March 2024", iso: "2024-03" },
  stages: "Nursery, Primary and Secondary",
  curricula: "British, Nigerian and American",
  description:
    "A day school in Abakaliki, Ebonyi State, for Nursery, Primary and Secondary, combining the British, Nigerian and American curricula.",

  address: {
    street: "Chief Okpaga Street",
    area: "Mgbabo Echara",
    city: "Abakaliki",
    state: "Ebonyi State",
    region: "Ebonyi",
    countryCode: "NG",
    full: "Chief Okpaga Street, Mgbabo Echara, Abakaliki, Ebonyi State",
  },

  phones: [{ display: "0901 995 6263", tel: "+2349019956263" }],

  email: "cbas@gmail.com" as string,

  whatsapp: {
    number: "2349019956263",
    display: "0901 995 6263",
    greeting: "Hello Crystal British-American Schools, I would like to make an enquiry.",
    visit: "Hello Crystal British-American Schools, I would like to arrange a visit to the school.",
    admission: "Hello Crystal British-American Schools, I would like to ask about admission for my child.",
  },
} as const;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://crystal-british.vercel.app").replace(
  /\/+$/,
  "",
);

const mapsQuery = encodeURIComponent(`${school.address.full}, Nigeria`);

export const maps = {
  embedUrl: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  viewUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
};

export function whatsappLink(message: string = school.whatsapp.greeting) {
  return `https://wa.me/${school.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Leadership team, shown on the About page. While empty, the page invites
 * parents to visit and meet the team.
 * Example entry: { name: "Mrs A. Example", role: "Head of School", photo: photos.someKey }
 */
export const leadership: { name: string; role: string; bio?: string }[] = [];

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const sectionLinks: NavItem[] = [
  { label: "Nursery", href: "/our-school/nursery" },
  { label: "Primary", href: "/our-school/primary" },
  { label: "Secondary", href: "/our-school/secondary" },
];

export const studentLifeLinks: NavItem[] = [
  { label: "Life at Crystal", href: "/student-life" },
  { label: "Gallery", href: "/gallery" },
];

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Our School", href: "/our-school", children: sectionLinks },
  { label: "Academics", href: "/academics" },
  { label: "Facilities", href: "/facilities" },
  { label: "Student Life", href: "/student-life", children: studentLifeLinks },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];
