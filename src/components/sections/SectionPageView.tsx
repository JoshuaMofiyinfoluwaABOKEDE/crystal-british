import Link from "next/link";
import { getSection, type SectionSlug } from "@/content/sections";
import { PageHeader } from "@/components/shared/PageHeader";
import { SitePhoto } from "@/components/shared/Photo";
import { AdmissionsBand } from "./SchoolBlocks";

/** Shared layout for the Nursery, Primary and Secondary pages. */
export function SectionPageView({ slug }: { slug: SectionSlug }) {
  const { section, previous, next } = getSection(slug);
  return (
    <>
      <PageHeader
        title={section.name}
        intro={section.summary}
        crumbs={[{ label: "Our School", href: "/our-school" }]}
        photo={section.photo}
      />

      <section className="container-site section-pad grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div>
          <div className="measure grid gap-6 font-serif text-[1.15rem] leading-[1.75]">
            {section.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[2rem] md:text-[2.5rem]">What {section.name} looks like</h2>
          <dl className="mt-8 border-t border-silver">
            {section.highlights.map((item) => (
              <div key={item.title} className="grid gap-1 border-b border-silver py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <dt className="font-serif font-bold text-navy">{item.title}</dt>
                <dd className="text-muted">{item.text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/admissions#enquire" className="btn btn-gold">
              Enquire about {section.name}
            </Link>
            <Link href="/academics" className="btn btn-outline">
              Our academic programme
            </Link>
          </div>
        </div>
      </section>

      <section aria-label={`${section.name} in pictures`} className="bg-porcelain">
        <div className="container-site section-pad">
          <ul className="grid gap-6 sm:grid-cols-3">
            {section.gallery.map((key) => (
              <li key={key}>
                <SitePhoto name={key} aspect="aspect-[4/5]" sizes="(min-width: 640px) 30vw, 100vw" caption />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav aria-label="Other stages" className="border-b border-silver">
        <div className="container-site grid gap-6 py-10 sm:grid-cols-2">
          <div>
            {previous && (
              <Link href={`/our-school/${previous.slug}`} className="group block">
                <span className="block text-sm text-muted">Previous stage</span>
                <span className="font-display text-3xl text-navy group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4">
                  {previous.name}
                </span>
              </Link>
            )}
          </div>
          <div className="sm:text-right">
            {next && (
              <Link href={`/our-school/${next.slug}`} className="group block">
                <span className="block text-sm text-muted">Next stage</span>
                <span className="font-display text-3xl text-navy group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4">
                  {next.name}
                </span>
              </Link>
            )}
          </div>
        </div>
      </nav>

      <AdmissionsBand />
    </>
  );
}
