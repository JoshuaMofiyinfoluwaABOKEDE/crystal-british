import Link from "next/link";
import { school, whatsappLink } from "@/config/school";
import { sections } from "@/content/sections";
import { newsStories, type NewsStory } from "@/content/news";
import { SitePhoto } from "@/components/shared/Photo";
import { PhoneIcon, WhatsAppIcon } from "@/components/shared/Icons";

/**
 * Nursery, Primary and Secondary as a journey. The gold rings grow from one
 * stage to the next, because the stages are a real sequence.
 */
export function StageJourney({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const ringSizes = ["size-4", "size-6", "size-8"];
  return (
    <ol className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-10">
      {sections.map((section, i) => (
        <li key={section.slug} className="group relative flex flex-col">
          <Link href={`/our-school/${section.slug}`} tabIndex={-1} aria-hidden className="block">
            <SitePhoto
              name={section.photo}
              aspect="aspect-[4/5]"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span aria-hidden className="flex size-8 shrink-0 items-center justify-center">
              <span className={`${ringSizes[i]} rounded-full border-[3px] border-gold`} />
            </span>
            <Heading className="font-display text-[2rem] font-normal">{section.name}</Heading>
          </div>
          <p className="mt-3 grow text-muted">{section.summary}</p>
          <Link href={`/our-school/${section.slug}`} className="text-link mt-5 self-start">
            Explore {section.name}
          </Link>
        </li>
      ))}
    </ol>
  );
}

/** A news story as a teaser: photo, category, title and summary. `featured` lays it out side by side. */
export function StoryCard({
  story,
  headingLevel = "h3",
  featured = false,
}: {
  story: NewsStory;
  headingLevel?: "h2" | "h3";
  featured?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <article
      className={`group relative flex flex-col ${featured ? "lg:grid lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-14" : ""}`}
    >
      <SitePhoto
        name={story.cover}
        aspect={featured ? "aspect-[4/3] lg:aspect-[16/10]" : "aspect-[4/3]"}
        sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
      />
      <div>
        <p className="mt-5 text-sm font-semibold text-gold-ink lg:mt-5">
          {story.category}
          {story.date && (
            <>
              <span className="sr-only">, </span>
              <time dateTime={story.date} className="ml-3 font-normal text-muted">
                {new Date(story.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </time>
            </>
          )}
        </p>
        <Heading
          className={`mt-2 ${featured ? "font-display text-[2.25rem] leading-[1.1] font-normal md:text-[2.75rem]" : "text-[1.45rem] leading-snug"}`}
        >
          <Link
            href={`/news/${story.slug}`}
            className="after:absolute after:inset-0 group-hover:underline group-hover:decoration-gold group-hover:decoration-2 group-hover:underline-offset-4"
          >
            {story.title}
          </Link>
        </Heading>
        <p className={`mt-3 text-muted ${featured ? "lead" : "text-[0.98rem]"}`}>{story.summary}</p>
        {featured && (
          <p aria-hidden className="text-link mt-6 inline-block">
            Read the story
          </p>
        )}
      </div>
    </article>
  );
}

/** Latest stories as a compact list without photos, for pages that already show many photos. */
export function StoryList({ count = 3 }: { count?: number }) {
  return (
    <ul className="grid border-t border-silver md:grid-cols-3">
      {newsStories.slice(0, count).map((story) => (
        <li key={story.slug} className="group relative border-b border-silver py-8 md:border-b-0 md:py-10 md:pr-10 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-10">
          <p className="text-sm font-semibold text-gold-ink">{story.category}</p>
          <h3 className="mt-3 text-[1.45rem] leading-snug">
            <Link
              href={`/news/${story.slug}`}
              className="after:absolute after:inset-0 group-hover:underline group-hover:decoration-gold group-hover:decoration-2 group-hover:underline-offset-4"
            >
              {story.title}
            </Link>
          </h3>
          <p className="mt-3 text-[0.98rem] text-muted">{story.summary}</p>
        </li>
      ))}
    </ul>
  );
}

export function LatestStories({ count = 3 }: { count?: number }) {
  return (
    <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
      {newsStories.slice(0, count).map((story) => (
        <li key={story.slug}>
          <StoryCard story={story} />
        </li>
      ))}
    </ul>
  );
}

/** Closing invitation at the foot of most pages: the next step for a parent. */
export function AdmissionsBand({
  title = "Find a place for your child at Crystal",
  text = `Talk to us about Nursery, Primary or Secondary, or come and see the school for yourself at ${school.address.street}, ${school.address.area}.`,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="container-site grid gap-10 py-16 md:grid-cols-[1.3fr_1fr] md:items-center md:py-20">
        <div>
          <h2 className="max-w-[18ch] text-[2.25rem] !text-white md:text-5xl">{title}</h2>
          <p className="measure lead mt-5 text-white/80">{text}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:max-w-sm lg:justify-self-end">
          <Link href="/admissions#enquire" className="btn btn-gold">
            Enquire about admission
          </Link>
          <a href={whatsappLink(school.whatsapp.visit)} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-5" /> Arrange a visit
          </a>
          <a href={`tel:${school.phones[0].tel}`} className="btn btn-outline-light sm:col-span-2 md:col-span-1">
            <PhoneIcon /> Call {school.phones[0].display}
          </a>
        </div>
      </div>
    </section>
  );
}
