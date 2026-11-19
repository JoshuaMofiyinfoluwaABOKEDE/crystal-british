# Crystal British-American Schools: website

Public website for Crystal British-American Schools, Chief Okpaga Street, Mgbabo Echara, Abakaliki, Ebonyi State.
A day school (no boarding) for Nursery, Primary and Secondary, combining the British, Nigerian and American curricula.
Founded March 2024.

Built on the Prudence Group of Schools codebase (Next.js 16, React 19, TypeScript, Tailwind CSS v4) and adapted to
Crystal's own identity, content and photographs.

## Pages

Home, About Us, Our School (Nursery, Primary, Secondary), Academic Programme, Facilities, Student Life, Gallery,
Admissions (with enquiry form), News & Events (with story pages), Contact.

## Where things live

- `src/config/school.ts`: name, address, phone, WhatsApp, menus, leadership list. One change updates every page.
- `src/content/`: page text for stages (`sections.ts`), curricula (`academics.ts`), news and gallery (`news.ts`),
  photos with alt text (`photos.ts`).
- `src/assets/photos/`: the school's own photographs, optimised as .webp.
- `src/app/globals.css`: brand colours taken from the crest (navy, gold, silver).

## Commands

- `npm run dev`: local preview at http://localhost:3000
- `npm run build`: production build (run before declaring a change done)

## Rules

- Do not invent statistics, awards, facilities, testimonials, accreditations or achievements.
- Use only the school's own photographs, and only of pupils whose parents have agreed.
- Nothing uncertain or "to be confirmed" appears on the site; add content only once it is confirmed.

## Approved by the school (20 Nov 2026)

Name as shown, address, phone/WhatsApp 0901 995 6263, email cbas@gmail.com, mission and vision wording, event
names, and parental consent for every photograph. Leadership profiles, academic details and term dates can be added
later in `src/config/school.ts` and `src/content/`.

## Not yet built (from the Prudence plan)

Enquiries are prepared in the browser and sent by WhatsApp (nothing is stored). Saving enquiries to a database, the
content editor and the staff/parent portal come later, as in the Prudence plan.
