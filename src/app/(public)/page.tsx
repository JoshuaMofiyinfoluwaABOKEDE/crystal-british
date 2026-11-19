import type { Metadata } from "next";
import Link from "next/link";
import { school, whatsappLink } from "@/config/school";
import { curricula } from "@/content/academics";
import { Roundel, SitePhoto } from "@/components/shared/Photo";
import { SectionHeading } from "@/components/shared/PageHeader";
import { WhatsAppIcon } from "@/components/shared/Icons";
import { AdmissionsBand, StageJourney, StoryList } from "@/components/sections/SchoolBlocks";
import type { PhotoKey } from "@/content/photos";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const facts = [
  { term: "Founded", detail: school.founded.display },
  { term: "Stages", detail: school.stages },
  { term: "Curricula", detail: school.curricula },
  { term: "Day school", detail: `${school.address.area}, ${school.address.city}` },
];

const lifeTiles: { photo: PhotoKey; title: string; href: string; className: string; sizes: string }[] = [
  {
    photo: "culturalDayGroup",
    title: "Cultural Day",
    href: "/news/cultural-day",
    className: "col-span-2 aspect-[16/10] md:aspect-auto md:h-full",
    sizes: "(min-width: 768px) 55vw, 100vw",
  },
  {
    photo: "honoursDay",
    title: "Honours Day",
    href: "/news/honours-day",
    className: "aspect-[3/4] md:aspect-auto md:h-full md:row-span-2",
    sizes: "(min-width: 768px) 30vw, 50vw",
  },
  {
    photo: "antiBullyingHandsRaised",
    title: "Anti-Bullying Day",
    href: "/news/anti-bullying-day",
    className: "aspect-[3/4] md:aspect-auto md:h-full",
    sizes: "(min-width: 768px) 28vw, 50vw",
  },
  {
    photo: "careerDayLawyer",
    title: "Career dress-up day",
    href: "/news/career-day",
    className: "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-auto md:h-full",
    sizes: "(min-width: 768px) 28vw, 100vw",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: the motto, and a pupil framed by the gold ring of the crest */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="container-site grid items-center gap-12 pt-14 pb-12 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pt-24 lg:pb-16">
          <div>
            <h1 className="!text-white">
              <span className="block font-sans text-base font-medium tracking-[0.02em] text-silver md:text-lg">
                {school.name}, Abakaliki
              </span>
              <span className="mt-5 block text-[3.25rem] leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
                Brighter minds, brighter future.
              </span>
            </h1>
            <p className="lead measure mt-8 text-white/85">
              A day school for Nursery, Primary and Secondary, combining the British, Nigerian and American curricula
              on one campus in {school.address.area}.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/admissions#enquire" className="btn btn-gold">
                Enquire about admission
              </Link>
              <a href={whatsappLink(school.whatsapp.visit)} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" /> Arrange a visit
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[22rem] sm:max-w-md lg:max-w-[34rem]">
            <Roundel name="pupilInUniform" lettering={`${school.name.toUpperCase()}  ★  ABAKALIKI, EBONYI STATE`} />
          </div>
        </div>
        <div className="border-t border-white/12">
          <dl className="container-site grid grid-cols-2 gap-x-6 gap-y-6 py-8 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.term} className="border-l-2 border-gold pl-4">
                <dt className="text-sm text-silver/80">{fact.term}</dt>
                <dd className="mt-1 font-serif text-[1.05rem] text-white md:text-lg">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Introduction */}
      <section aria-labelledby="intro-heading" className="container-site section-pad grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading id="intro-heading" title="An international education, close to home" />
          <div className="measure mt-7 grid gap-5 font-serif text-[1.15rem] leading-[1.75]">
            <p>
              {school.name} opened in {school.founded.display} in {school.address.area}, Abakaliki. We are a day
              school for Nursery, Primary and Secondary, bringing together the British, Nigerian and American
              curricula.
            </p>
            <p>
              Our motto, <em>brighter minds, brighter future</em>, is what we work towards every day: children who
              think for themselves, speak with confidence, treat others kindly and are ready for whatever comes next.
            </p>
          </div>
          <Link href="/about" className="text-link mt-8 inline-block">
            About the school
          </Link>
        </div>
        <SitePhoto name="classroomScienceLesson" aspect="aspect-[4/3]" caption sizes="(min-width: 1024px) 45vw, 100vw" />
      </section>

      {/* Three curricula */}
      <section aria-labelledby="curricula-heading" className="bg-porcelain">
        <div className="container-site section-pad">
          <SectionHeading
            id="curricula-heading"
            title="Three curricula, one education"
            intro="Our teaching draws on the British, Nigerian and American curricula, so pupils gain the strengths of each."
          />
          <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {curricula.map((c) => (
              <li key={c.name} className="border-t-[3px] border-navy pt-6">
                <h3 className="font-display text-[2rem] font-normal">{c.name}</h3>
                <p className="mt-3 text-muted">{c.brings}</p>
              </li>
            ))}
          </ul>
          <Link href="/academics" className="text-link mt-12 inline-block">
            How the curricula work together
          </Link>
        </div>
      </section>

      {/* Campus */}
      <section aria-labelledby="campus-heading" className="relative">
        <SitePhoto
          name="campusCourtyard"
          aspect="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
          sizes="100vw"
          className="!rounded-none"
        />
        <div className="container-site relative -mt-16 md:-mt-28">
          <div className="max-w-xl bg-white p-7 shadow-[0_24px_60px_-30px_rgb(32_32_84/0.5)] md:p-10">
            <h2 id="campus-heading" className="text-[2rem] md:text-[2.6rem]">
              Our campus
            </h2>
            <p className="mt-4 text-muted">
              Classrooms on three floors look out over a paved courtyard where the British, Nigerian and American
              flags fly together. The school&rsquo;s artificial-turf field, with its covered stand, hosts
              assemblies and school events.
            </p>
            <Link href="/facilities" className="text-link mt-6 inline-block">
              See our facilities
            </Link>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section aria-labelledby="stages-heading" className="container-site section-pad">
        <SectionHeading
          id="stages-heading"
          title="Nursery to Secondary, on one campus"
          intro="Children can grow with us from their first day in Nursery to their final year in Secondary, with the same values all the way through."
        />
        <div className="mt-14">
          <StageJourney />
        </div>
      </section>

      {/* Student life */}
      <section aria-labelledby="life-heading" className="bg-porcelain">
        <div className="container-site section-pad">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              id="life-heading"
              title="Life beyond the lesson"
              intro="Special days are part of the rhythm of the school year, from Cultural Day to Honours Day."
            />
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/student-life" className="text-link">
                Student life
              </Link>
              <Link href="/gallery" className="text-link">
                Open the gallery
              </Link>
            </div>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-[1.15fr_1.15fr_1fr] md:grid-rows-[19rem_19rem] md:gap-4">
            {lifeTiles.map((tile) => (
              <li key={tile.title} className={`group relative ${tile.className}`}>
                <SitePhoto name={tile.photo} aspect="h-full" sizes={tile.sizes} />
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[3px] bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
                <Link
                  href={tile.href}
                  className="absolute inset-x-0 bottom-0 p-4 font-display text-xl text-white after:absolute after:inset-0 group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4 md:p-6 md:text-2xl"
                >
                  {tile.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* News */}
      <section aria-labelledby="news-heading" className="container-site section-pad">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="news-heading" title="News from school" />
          <Link href="/news" className="text-link">
            All news and events
          </Link>
        </div>
        <div className="mt-12">
          <StoryList />
        </div>
      </section>

      <AdmissionsBand />
    </>
  );
}
