import Image from "next/image";
import Link from "next/link";
import { leadership, school, whatsappLink } from "@/config/school";
import { pageMetadata } from "@/config/metadata";
import { PageHeader, SectionHeading } from "@/components/shared/PageHeader";
import { SitePhoto } from "@/components/shared/Photo";
import { AdmissionsBand } from "@/components/sections/SchoolBlocks";
import crest from "@/assets/crest-480.webp";

export const metadata = pageMetadata({
  title: "About Us",
  description: `The story, mission, vision, values and leadership of ${school.name}, a day school in Abakaliki founded in ${school.founded.display}.`,
  path: "/about",
});

const values = [
  {
    title: "Kindness",
    text: "Every child should feel safe and loved at school. We teach pupils to be a buddy, not a bully, and expect the same of every adult.",
  },
  {
    title: "Confidence",
    text: "Pupils are given chances to speak, present and lead, from explaining their working at the whiteboard to addressing a school assembly.",
  },
  {
    title: "Heritage",
    text: "An international education starts from a firm sense of home. We celebrate the cultures and traditions within our community.",
  },
  {
    title: "Excellence",
    text: "We hold high expectations for learning and conduct, and we recognise pupils' efforts and achievements, as we do at Honours Day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" intro={school.description} photo="campusCourtyard" />

      {/* Story */}
      <section aria-labelledby="story-heading" className="container-site section-pad grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <SectionHeading id="story-heading" title="Our story" />
        <div>
          <div className="measure grid gap-5 font-serif text-[1.15rem] leading-[1.75]">
            <p>
              {school.name} opened in {school.founded.display} on {school.address.street}, in the {school.address.area}{" "}
              area of Abakaliki, Ebonyi State.
            </p>
            <p>
              From the start, the school has been a day school taking children through three stages, Nursery, Primary
              and Secondary, and bringing together the British, Nigerian and American curricula. The British, Nigerian
              and American flags fly together in our courtyard.
            </p>
            <p>
              Though young, the school already has special days of its own, among them Cultural Day,
              Anti-Bullying Day, career dress-up day and Honours Day, when pupils are recognised for their efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section aria-labelledby="mission-heading" className="bg-navy text-white">
        <div className="container-site section-pad grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div className="mx-auto flex aspect-square w-full max-w-[17rem] items-center justify-center rounded-full bg-white ring-[6px] ring-gold ring-offset-[10px] ring-offset-navy lg:max-w-[22rem]">
            <Image
              src={crest}
              alt={`The ${school.name} crest, with the motto Brighter Minds Brighter Future`}
              className="h-[72%] w-auto"
              sizes="16rem"
            />
          </div>
          <div>
            <h2 id="mission-heading" className="text-[2.25rem] !text-white md:text-5xl">
              {school.motto}
            </h2>
            <p className="measure lead mt-5 text-white/80">
              Our motto, written on the ribbon of our crest, sums up what we are here to do.
            </p>
            <dl className="mt-12 grid gap-10 md:grid-cols-2">
              <div className="border-t-[3px] border-gold pt-6">
                <dt className="font-display text-3xl text-white">Our mission</dt>
                <dd className="mt-3 text-white/85">
                  To give every child, from Nursery to Secondary, an education that combines the best of the British,
                  Nigerian and American curricula, in a school where they feel safe, are known and are challenged to do
                  their best.
                </dd>
              </div>
              <div className="border-t-[3px] border-gold pt-6">
                <dt className="font-display text-3xl text-white">Our vision</dt>
                <dd className="mt-3 text-white/85">
                  Brighter minds and a brighter future: young people from Abakaliki who are confident, kind and well
                  prepared to succeed in Nigeria and anywhere in the world.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Philosophy and values */}
      <section aria-labelledby="values-heading" className="container-site section-pad">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="values-heading"
              title="What we believe"
              intro="Our philosophy is simple: children learn best when they feel safe, are expected to think, and are given the chance to shine."
            />
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="border-t border-silver py-7">
                <dt className="font-display text-[1.85rem] text-navy">{value.title}</dt>
                <dd className="mt-3 text-muted">{value.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <SitePhoto name="nurseryFeelSafeAndLoved" aspect="aspect-[4/5]" caption sizes="(min-width: 640px) 30vw, 100vw" />
          <SitePhoto name="assemblySportsField" aspect="aspect-[4/5]" caption sizes="(min-width: 640px) 30vw, 100vw" />
          <SitePhoto name="culturalDayTeachers" aspect="aspect-[4/5]" caption sizes="(min-width: 640px) 30vw, 100vw" />
        </div>
      </section>

      {/* Leadership */}
      <section aria-labelledby="leaders-heading" className="bg-porcelain">
        <div className="container-site section-pad">
          <SectionHeading id="leaders-heading" title="Leadership" />
          {leadership.length > 0 ? (
            <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.map((person) => (
                <li key={person.name} className="border-t-[3px] border-navy pt-6">
                  <p className="font-display text-2xl text-navy">{person.name}</p>
                  <p className="mt-1 font-medium text-gold-ink">{person.role}</p>
                  {person.bio && <p className="mt-3 text-muted">{person.bio}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <p className="measure lead text-muted">
                The best way to meet the people who lead Crystal is to visit. Arrange a visit and our leadership team
                will be glad to show you around and answer your questions.
              </p>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href={whatsappLink(school.whatsapp.visit)} target="_blank" rel="noopener noreferrer" className="btn btn-navy">
                  Arrange a visit
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Contact the school
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <AdmissionsBand />
    </>
  );
}
