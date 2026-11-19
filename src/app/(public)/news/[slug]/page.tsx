import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { school, siteUrl } from "@/config/school";
import { pageMetadata } from "@/config/metadata";
import { getStory, newsStories } from "@/content/news";
import { photos } from "@/content/photos";
import { SitePhoto } from "@/components/shared/Photo";
import { AdmissionsBand, StoryCard } from "@/components/sections/SchoolBlocks";

export function generateStaticParams() {
  return newsStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  const base = pageMetadata({ title: story.title, description: story.summary, path: `/news/${story.slug}` });
  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article", images: [{ url: photos[story.cover].image.src, alt: photos[story.cover].alt }] },
  };
}

export default async function StoryPage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();
  const more = newsStories.filter((s) => s.slug !== story.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: story.title,
    description: story.summary,
    image: [`${siteUrl}${photos[story.cover].image.src}`],
    ...(story.date ? { datePublished: story.date } : {}),
    publisher: { "@type": "EducationalOrganization", name: school.name, logo: `${siteUrl}/logos/crest.png` },
    mainEntityOfPage: `${siteUrl}/news/${story.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd).replace(/</g, "\\u003c") }}
      />
      <article>
        <header className="bg-navy text-white">
          <div className="container-site pt-14 pb-10 md:pt-20">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-silver/80">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li className="flex items-center gap-2">
                  <Link href="/" className="underline-offset-4 hover:text-white hover:underline">
                    Home
                  </Link>
                  <span aria-hidden className="text-gold">
                    /
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Link href="/news" className="underline-offset-4 hover:text-white hover:underline">
                    News &amp; Events
                  </Link>
                  <span aria-hidden className="text-gold">
                    /
                  </span>
                </li>
                <li aria-current="page" className="text-white">
                  {story.category}
                </li>
              </ol>
            </nav>
            <h1 className="max-w-[22ch] text-[2.5rem] !text-white sm:text-[3.5rem] lg:text-[4rem]">{story.title}</h1>
            {story.date && (
              <p className="mt-6 text-silver">
                <time dateTime={story.date}>
                  {new Date(story.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </time>
              </p>
            )}
          </div>
        </header>
        <div className="bg-gradient-to-b from-navy from-50% to-white to-50%">
          <div className="container-site">
            <SitePhoto name={story.cover} aspect="aspect-[4/3] md:aspect-[16/9]" sizes="(min-width: 1280px) 76rem, 100vw" preload />
          </div>
        </div>

        <div className="container-site section-pad">
          <div className="mx-auto max-w-[40rem]">
            <p className="font-serif text-[1.35rem] leading-relaxed text-navy">{story.summary}</p>
            <div className="mt-8 grid gap-6 font-serif text-[1.15rem] leading-[1.8]">
              {story.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>

          {story.photos.length > 0 && (
            <ul className={`mx-auto mt-16 grid max-w-5xl gap-4 ${story.photos.length === 1 ? "max-w-xl" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
              {story.photos.map((key) => (
                <li key={key}>
                  <SitePhoto name={key} aspect="aspect-[4/5]" caption sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>

      <section aria-labelledby="more-heading" className="bg-porcelain">
        <div className="container-site section-pad">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="more-heading" className="text-[2.25rem] md:text-5xl">
              More from school
            </h2>
            <Link href="/news" className="text-link">
              All news and events
            </Link>
          </div>
          <ul className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {more.map((s) => (
              <li key={s.slug}>
                <StoryCard story={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AdmissionsBand />
    </>
  );
}
