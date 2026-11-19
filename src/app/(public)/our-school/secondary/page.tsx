import { pageMetadata } from "@/config/metadata";
import { school } from "@/config/school";
import { getSection } from "@/content/sections";
import { SectionPageView } from "@/components/sections/SectionPageView";

const { section } = getSection("secondary");

export const metadata = pageMetadata({
  title: "Secondary",
  description: `Secondary at ${school.name}, Abakaliki. ${section.summary}`,
  path: "/our-school/secondary",
});

export default function Page() {
  return <SectionPageView slug="secondary" />;
}
