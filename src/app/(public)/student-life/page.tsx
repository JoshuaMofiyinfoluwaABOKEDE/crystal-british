import Link from "next/link";
import { school } from "@/config/school";
import { pageMetadata } from "@/config/metadata";
import { newsStories } from "@/content/news";
import { PageHeader, SectionHeading } from "@/components/shared/PageHeader";
import { SitePhoto } from "@/components/shared/Photo";
import { AdmissionsBand, StoryCard } from "@/components/sections/SchoolBlocks";

export const metadata = pageMetadata({
  title: "Student Life",
  description: `Student life at ${school.name}, Abakaliki: Cultural Day, Anti-Bullying Day, Honours Day, assemblies and the special days that help pupils grow.`,
  path: "/student-life",
});

const growth = [
  {
    title: "Character",
    text: "On Anti-Bullying Day, pupils of every age wore odd socks, made posters and joined hands to stand together for kindness.",
  },
  {
    title: "Leadership",
    text: "Students are given the chance to speak in front of the whole school, as when a student led the Anti-Bullying Day assembly on the field.",
  },
  {
    title: "Identity",
    text: "Cultural Day fills the courtyard with the traditional attire of our families, celebrating the heritage of every pupil.",
  },
  {
    title: "Ambition",
    text: "On career dress-up day, even our youngest pupils arrive as the lawyers and doctors they hope to become.",
  },
];

export default function StudentLifePage() {
  const honours = newsStories.find((s) => s.slug === "honours-day");
  return (
    <>
      <PageHeader
        title="Student Life"
        intro="School is more than lessons. Special days, celebrations and chances to lead help every pupil grow in confidence and character."
        photo="culturalDayGroup"
      />

      {/* How pupils grow */}
      <section aria-labelledby="growth-heading" className="container-site section-pad">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="growth-heading"
              title="How pupils grow"
              intro="The moments outside the timetable are often the ones children remember. Each one teaches something."
            />
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2">
            {growth.map((item) => (
              <div key={item.title} className="border-t border-silver py-7">
                <dt className="font-display text-[1.85rem] text-navy">{item.title}</dt>
                <dd className="mt-3 text-muted">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Achievements */}
      {honours && (
        <section aria-labelledby="achievements-heading" className="bg-navy text-white">
          <div className="container-site section-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <SitePhoto name="honoursDay" aspect="aspect-[4/5]" sizes="(min-width: 1024px) 40vw, 100vw" />
            <div>
              <SectionHeading
                id="achievements-heading"
                title="Celebrating achievement"
                intro="Effort deserves recognition. At Honours Day, pupils receive their certificates before the school community."
                light
              />
              <Link href={`/news/${honours.slug}`} className="text-link-light mt-8 inline-block">
                Read about Honours Day
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Special days */}
      <section aria-labelledby="days-heading" className="container-site section-pad">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="days-heading" title="Special days" />
          <Link href="/gallery" className="text-link">
            See every photo in the gallery
          </Link>
        </div>
        <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {newsStories.map((story) => (
            <li key={story.slug}>
              <StoryCard story={story} />
            </li>
          ))}
        </ul>
      </section>

      <AdmissionsBand />
    </>
  );
}
