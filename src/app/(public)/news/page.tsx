import { school, whatsappLink } from "@/config/school";
import { pageMetadata } from "@/config/metadata";
import { events, newsStories } from "@/content/news";
import { PageHeader, SectionHeading } from "@/components/shared/PageHeader";
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from "@/components/shared/Icons";
import { StoryCard } from "@/components/sections/SchoolBlocks";

export const metadata = pageMetadata({
  title: "News & Events",
  description: `News, announcements and upcoming events from ${school.name}, Abakaliki.`,
  path: "/news",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" });
}

export default function NewsPage() {
  const [lead, ...rest] = newsStories;
  return (
    <>
      <PageHeader
        title="News & Events"
        intro="Stories from school life, announcements for parents and the dates you need to know."
      />

      <section aria-labelledby="news-list-heading" className="container-site section-pad">
        <h2 id="news-list-heading" className="sr-only">
          Latest news
        </h2>
        {lead && (
          <div className="border-b border-silver pb-14 md:pb-20">
            <StoryCard story={lead} featured />
          </div>
        )}
        <ul className="mt-14 grid gap-x-8 gap-y-14 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {rest.map((story) => (
            <li key={story.slug}>
              <StoryCard story={story} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="calendar-heading" className="bg-porcelain">
        <div className="container-site section-pad grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionHeading
              id="calendar-heading"
              title="Upcoming events"
              intro="Term dates, open days and school events for families."
            />
          </div>
          {events.length > 0 ? (
            <ul className="divide-y divide-silver border-y border-silver bg-white">
              {events.map((event) => (
                <li key={`${event.date}-${event.title}`} className="grid gap-1 px-5 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
                  <time dateTime={event.date} className="font-medium text-gold-ink">
                    {formatDate(event.date)}
                  </time>
                  <div>
                    <p className="font-serif text-lg font-bold text-navy">{event.title}</p>
                    {event.detail && <p className="text-sm text-muted">{event.detail}</p>}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-[3px] border border-silver bg-white p-7 md:p-9">
              <CalendarIcon className="size-7 text-gold-ink" />
              <p className="mt-4 font-serif text-xl font-bold text-navy">Get the latest term dates from the school office.</p>
              <p className="mt-2 text-muted">
                For resumption dates, holidays and upcoming events, call or send us a WhatsApp message.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={whatsappLink(`Hello ${school.name}, please could you send me the dates for this term?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-navy"
                >
                  <WhatsAppIcon className="size-5" /> Ask on WhatsApp
                </a>
                <a href={`tel:${school.phones[0].tel}`} className="btn btn-outline">
                  <PhoneIcon /> Call {school.phones[0].display}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
