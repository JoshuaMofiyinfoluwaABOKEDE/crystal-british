# Instructions for Claude Code

@AGENTS.md

## Project

Crystal British-American Schools, Abakaliki: public school website in Next.js, adapted from the Prudence Group of
Schools codebase. Day school (no boarding); Nursery, Primary and Secondary; British, Nigerian and American curricula;
founded March 2024. Phone and WhatsApp: 0901 995 6263.

The project owner is not a programmer. Explain decisions in plain language and ask before changing agreed rules.

## Content rules

- Never invent statistics, awards, facilities, testimonials, accreditations, achievements or curriculum details.
  Describe only what the school has confirmed or what its own photographs show.
- Use only the school's own photographs; never present stock photos as Crystal pupils, staff or facilities.
- Nothing on the site may read as unsure or "to be confirmed". Leave a section out until its content is confirmed.
- If sources conflict (for example the school's name on the crest vs the banner), state the conflict and a
  recommendation; do not pick silently.

## Stack

Next.js 16 (App Router, Turbopack, Cache Components), React 19, TypeScript, Tailwind CSS v4.
Fonts: Libre Caslon Display/Text (headings), Instrument Sans (body).

## Layout of the code

- `src/app/(public)/`: public pages sharing the header and footer
- `src/config/school.ts`: name, contacts, navigation, leadership
- `src/content/`: stages, academics, news/events/gallery, photos (with alt text)
- `src/components/`: `layout/`, `navigation/`, `shared/`, `sections/`, `forms/`

## Working rules

- Inspect existing code before editing; keep working features working.
- Never expose secret keys; `.env.local` is not committed.
- Run `npm run build` before declaring a change done.

## Design notes

- Colours from the crest, defined once in `src/app/globals.css`: navy, gold, silver, porcelain.
- Gold buttons are the main call to action (admissions). The roundel (pupil framed by a lettered gold ring) echoes
  the crest; keep other decoration quiet.

## Status

- Content approved by the owner (20 Nov 2026). Repo: JoshuaMofiyinfoluwaABOKEDE/crystal-british.
- Enquiry forms prepare a WhatsApp message; nothing is stored on a server yet.
