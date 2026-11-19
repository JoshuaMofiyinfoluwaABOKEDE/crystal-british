import { school } from "@/config/school";
import { pageMetadata } from "@/config/metadata";
import type { PhotoKey } from "@/content/photos";
import { PageHeader } from "@/components/shared/PageHeader";
import { SitePhoto } from "@/components/shared/Photo";
import { AdmissionsBand } from "@/components/sections/SchoolBlocks";

export const metadata = pageMetadata({
  title: "Facilities",
  description: `The campus of ${school.name} on ${school.address.street}, ${school.address.area}, Abakaliki: our building and courtyard, classrooms and sports field.`,
  path: "/facilities",
});

/**
 * Only facilities shown in the school's own photographs are described here.
 * Add others (and their photos) once the school confirms them.
 */
const facilities: { title: string; text: string[]; photo: PhotoKey; extra?: PhotoKey }[] = [
  {
    title: "The school building and courtyard",
    text: [
      "Our main building rises three floors around a paved courtyard, with shaded balconies running along every level and white railings throughout.",
      "The courtyard is the heart of the campus. It is where families are welcomed at the start of term, where pupils gather for Cultural Day photographs, and where the flags of the United Kingdom, Nigeria and the United States fly side by side.",
    ],
    photo: "campusCourtyard",
    extra: "springTermRefreshments",
  },
  {
    title: "Classrooms",
    text: [
      "Classrooms are bright, well lit by large windows and furnished with desks and chairs sized for the children who use them.",
      "Lessons centre on the whiteboard, and the walls are put to work: number charts, multiplication and conversion tables, and affirmation posters that remind each child they are smart, brave, kind and capable.",
    ],
    photo: "classroomScienceLesson",
    extra: "careerDayLawyer",
  },
  {
    title: "Laptops in lessons",
    text: [
      "Laptops are part of everyday lessons, used by pupils at their desks alongside books and the whiteboard, so that working with technology becomes second nature.",
    ],
    photo: "classroomLaptops",
  },
  {
    title: "Sports field and covered stand",
    text: [
      "The school has an artificial-turf field enclosed by a perimeter wall, with a covered stand and seating along one side.",
      "The field is used for whole-school assemblies and events: on Anti-Bullying Day, pupils gathered there for an assembly led by one of their schoolmates.",
    ],
    photo: "assemblySportsField",
    extra: "antiBullyingHandsRaised",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="Facilities"
        intro={`Our campus on ${school.address.street}, ${school.address.area}: space to learn, to gather and to celebrate.`}
        photo="assemblySportsField"
      />

      <section aria-label="Our facilities" className="container-site section-pad">
        <div className="grid gap-20 md:gap-28">
          {facilities.map((facility, i) => (
            <article
              key={facility.title}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={facility.extra ? "grid grid-cols-[1.6fr_1fr] gap-4" : ""}>
                <SitePhoto
                  name={facility.photo}
                  aspect={facility.extra ? "aspect-[4/5]" : "aspect-[3/2]"}
                  sizes="(min-width: 1024px) 34vw, 62vw"
                />
                {facility.extra && (
                  <SitePhoto name={facility.extra} aspect="aspect-[3/5] self-end" sizes="(min-width: 1024px) 18vw, 38vw" />
                )}
              </div>
              <div>
                <h2 className="text-[2.1rem] md:text-[2.75rem]">{facility.title}</h2>
                <span aria-hidden className="mt-6 block h-[3px] w-12 bg-gold" />
                <div className="measure mt-6 grid gap-4 text-[1.05rem] text-muted">
                  {facility.text.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <AdmissionsBand
        title="See the campus for yourself"
        text="Photographs only tell part of the story. Arrange a visit and walk through the classrooms, courtyard and field with a member of staff."
      />
    </>
  );
}
