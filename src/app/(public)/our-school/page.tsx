import Link from "next/link";
import { school } from "@/config/school";
import { pageMetadata } from "@/config/metadata";
import { PageHeader, SectionHeading } from "@/components/shared/PageHeader";
import { SitePhoto } from "@/components/shared/Photo";
import { AdmissionsBand, StageJourney } from "@/components/sections/SchoolBlocks";

export const metadata = pageMetadata({
  title: "Our School",
  description: `Nursery, Primary and Secondary at ${school.name}: one day school on one campus in ${school.address.area}, Abakaliki.`,
  path: "/our-school",
});

const shared = [
  {
    title: "One set of values",
    text: "Kindness, confidence and high expectations run through every stage, from Nursery circle time to Secondary assemblies.",
  },
  {
    title: "One campus",
    text: `All three stages share one campus on ${school.address.street}, so brothers and sisters can attend the same school.`,
  },
  {
    title: "Three curricula",
    text: "Teaching at every stage draws on the British, Nigerian and American curricula.",
  },
  {
    title: "A day school",
    text: "Pupils come to school each morning and go home to their families each afternoon. We do not offer boarding.",
  },
];

export default function OurSchoolPage() {
  return (
    <>
      <PageHeader
        title="Our School"
        intro={`Three stages on one campus in ${school.address.area}, so your child can grow with us from their first day in Nursery to their final year in Secondary.`}
        photo="pupilInUniform"
      />

      <section aria-labelledby="journey-heading" className="container-site section-pad">
        <SectionHeading id="journey-heading" title="Nursery, Primary and Secondary" />
        <div className="mt-14">
          <StageJourney />
        </div>
      </section>

      <section aria-labelledby="shared-heading" className="bg-porcelain">
        <div className="container-site section-pad grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionHeading id="shared-heading" title="What every stage shares" />
            <div className="mt-10 hidden lg:block">
              <SitePhoto name="culturalDayGroup" aspect="aspect-[4/3]" caption sizes="35vw" />
            </div>
          </div>
          <div>
            <dl className="grid gap-x-10 sm:grid-cols-2">
              {shared.map((item) => (
                <div key={item.title} className="border-t border-silver py-7">
                  <dt className="font-display text-[1.85rem] text-navy">{item.title}</dt>
                  <dd className="mt-3 text-muted">{item.text}</dd>
                </div>
              ))}
            </dl>
            <Link href="/academics" className="text-link mt-6 inline-block">
              Read about our academic programme
            </Link>
          </div>
        </div>
      </section>

      <AdmissionsBand />
    </>
  );
}
