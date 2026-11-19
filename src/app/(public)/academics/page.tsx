import Link from "next/link";
import { school } from "@/config/school";
import { pageMetadata } from "@/config/metadata";
import { curricula, learningPrinciples } from "@/content/academics";
import { sections } from "@/content/sections";
import { PageHeader, SectionHeading } from "@/components/shared/PageHeader";
import { SitePhoto } from "@/components/shared/Photo";
import { AdmissionsBand } from "@/components/sections/SchoolBlocks";

export const metadata = pageMetadata({
  title: "Academic Programme",
  description: `How ${school.name} in Abakaliki combines the British, Nigerian and American curricula from Nursery to Secondary.`,
  path: "/academics",
});

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        title="Academic Programme"
        intro="Our teaching brings together the British, Nigerian and American curricula, from Nursery through to Secondary."
        photo="classroomLaptops"
      />

      {/* The combined curriculum */}
      <section aria-labelledby="combined-heading" className="container-site section-pad">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <SectionHeading id="combined-heading" title="Three curricula, combined" />
          <div className="measure grid gap-5 font-serif text-[1.15rem] leading-[1.75]">
            <p>
              Each of the three curricula has its own strengths. Rather than choose between them, Crystal draws on all
              three, so that pupils gain a structured foundation, a firm knowledge of their own country and the
              confidence to think and speak for themselves.
            </p>
            <p>
              The combination is reflected across school life: the flags of the United Kingdom, Nigeria and the United States fly together
              in our courtyard, and our school year includes term names, such as the Spring Term, that families from
              British schools will recognise.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[3px] border border-silver bg-silver md:grid-cols-3">
          {curricula.map((c) => (
            <li key={c.name} className="flex flex-col bg-white p-7 md:p-9">
              <h3 className="font-display text-[2.25rem] font-normal">{c.name}</h3>
              <span aria-hidden className="mt-4 block h-[3px] w-10 bg-gold" />
              <p className="mt-5 font-medium text-ink">{c.brings}</p>
              <p className="mt-4 text-muted">{c.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Teaching philosophy */}
      <section aria-labelledby="learning-heading" className="bg-porcelain">
        <div className="container-site section-pad">
          <SectionHeading
            id="learning-heading"
            title="What learning looks like"
            intro="Walk into a Crystal classroom and you will see pupils taking an active part in their lessons."
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <dl className="grid gap-x-10 sm:grid-cols-2">
              {learningPrinciples.map((item) => (
                <div key={item.title} className="border-t border-silver py-7">
                  <dt className="font-serif text-xl font-bold text-navy">{item.title}</dt>
                  <dd className="mt-3 text-muted">{item.text}</dd>
                </div>
              ))}
            </dl>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <SitePhoto name="classroomScienceLesson" aspect="aspect-[3/2]" caption sizes="(min-width: 1024px) 40vw, 50vw" />
              <SitePhoto name="antiBullyingPosters" aspect="aspect-[3/2]" caption sizes="(min-width: 1024px) 40vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* By stage */}
      <section aria-labelledby="stages-heading" className="container-site section-pad">
        <SectionHeading
          id="stages-heading"
          title="At each stage"
          intro="The programme grows with your child. Find out what each stage looks like."
        />
        <ul className="mt-12 divide-y divide-silver border-y border-silver">
          {sections.map((section) => (
            <li key={section.slug} className="grid gap-3 py-8 md:grid-cols-[14rem_1fr_auto] md:items-baseline md:gap-10">
              <h3 className="font-display text-[2rem] font-normal">{section.name}</h3>
              <p className="text-muted">{section.summary}</p>
              <Link href={`/our-school/${section.slug}`} className="text-link whitespace-nowrap">
                About {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <AdmissionsBand />
    </>
  );
}
