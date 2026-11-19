import { pageMetadata } from "@/config/metadata";
import { school } from "@/config/school";
import { getSection } from "@/content/sections";
import { SectionPageView } from "@/components/sections/SectionPageView";

const { section } = getSection("primary");

export const metadata = pageMetadata({
  title: "Primary",
  description: `Primary at ${school.name}, Abakaliki. ${section.summary}`,
  path: "/our-school/primary",
});

export default function Page() {
  return <SectionPageView slug="primary" />;
}
