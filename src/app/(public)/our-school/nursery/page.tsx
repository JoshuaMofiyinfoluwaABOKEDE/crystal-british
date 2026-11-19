import { pageMetadata } from "@/config/metadata";
import { school } from "@/config/school";
import { getSection } from "@/content/sections";
import { SectionPageView } from "@/components/sections/SectionPageView";

const { section } = getSection("nursery");

export const metadata = pageMetadata({
  title: "Nursery",
  description: `Nursery at ${school.name}, Abakaliki. ${section.summary}`,
  path: "/our-school/nursery",
});

export default function Page() {
  return <SectionPageView slug="nursery" />;
}
