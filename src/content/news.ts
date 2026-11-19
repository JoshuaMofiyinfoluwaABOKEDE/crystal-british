/**
 * News stories, school events and gallery albums.
 *
 * Every story is built from the school's own photographs and says only what
 * those photographs show. Dates are left out until the school confirms them:
 * add `date: "2026-03-14"` (year-month-day) to a story and it appears.
 *
 * To add a story, copy one of the entries below, give it a new `slug` (the
 * end of its web address) and choose photos from src/content/photos.ts.
 */

import type { PhotoKey } from "./photos";

export type NewsStory = {
  slug: string;
  title: string;
  category: "School life" | "Celebrations" | "Achievements" | "Parents";
  /** Optional, year-month-day. Shown only when set. */
  date?: string;
  summary: string;
  body: string[];
  cover: PhotoKey;
  photos: PhotoKey[];
};

export const newsStories: NewsStory[] = [
  {
    slug: "anti-bullying-day",
    title: "Anti-Bullying Day: be a buddy, not a bully",
    category: "School life",
    summary:
      "From Nursery to Secondary, pupils wore odd socks, made their own posters and joined hands for a day about kindness.",
    body: [
      "Anti-Bullying Day brought the whole school together around a simple message: every child should feel safe and loved at Crystal.",
      "Pupils came to school in odd socks, a reminder that it is fine to be different. Classes made their own posters with messages such as “Be a buddy, not a bully”, “Be kind, not cruel” and “No to teasing”, and our youngest pupils carried signs reading “Feel safe and loved”.",
      "Older students sat in circles on the field and joined hands, and the day included an assembly on the field led by a student. Kindness is not a lesson for one day only, but days like this help every pupil know what it looks like.",
    ],
    cover: "antiBullyingHandsRaised",
    photos: [
      "antiBullyingOddSocks",
      "antiBullyingBeABuddy",
      "nurseryFeelSafeAndLoved",
      "antiBullyingNurseryCircle",
      "antiBullyingPosters",
      "assemblySportsField",
    ],
  },
  {
    slug: "cultural-day",
    title: "Cultural Day: celebrating where we come from",
    category: "Celebrations",
    summary:
      "Pupils and teachers swapped uniforms for traditional attire, filling the courtyard with coral beads, red caps and bright fabrics.",
    body: [
      "On Cultural Day the courtyard filled with colour as pupils and teachers came dressed in the traditional attire of their families.",
      "There were red caps and coral beads, wrappers and gele, embroidered kaftans and walking sticks carried with pride. Pupils gathered for photographs in front of the school building, beneath the British, Nigerian and American flags.",
      "An international education begins with a firm sense of home. Cultural Day is one of the ways Crystal pupils learn to value their own heritage and respect the heritage of their classmates.",
    ],
    cover: "culturalDayGroup",
    photos: ["culturalDayTeachers", "culturalDayAttire"],
  },
  {
    slug: "honours-day",
    title: "Honours Day recognises our pupils",
    category: "Achievements",
    summary: "At the school's Honours Day ceremony, pupils were presented with certificates in recognition of their efforts.",
    body: [
      "Honours Day is the school's occasion to recognise its pupils. The ceremony took place in front of the school's Honours Day backdrop, beneath a canopy of yellow balloons.",
      "Pupils being honoured received their certificates and stood for photographs with the adults who support them: a proud moment for each child, and one the whole school shares.",
    ],
    cover: "honoursDay",
    photos: [],
  },
  {
    slug: "career-day",
    title: "Career dress-up day: tomorrow's lawyers and doctors",
    category: "School life",
    summary: "Even our youngest pupils came dressed as the professionals they hope to become.",
    body: [
      "On career dress-up day, pupils came to school dressed for the jobs they dream of doing.",
      "There were lawyers in wigs, gowns and bands, and doctors in white coats with stethoscopes and medical kits. Days like this let children talk about their ambitions and imagine the future their education is building towards.",
    ],
    cover: "careerDayLawyer",
    photos: ["careerDayDoctor"],
  },
  {
    slug: "spring-term-welcome",
    title: "Welcoming families to the Spring Term",
    category: "Parents",
    summary: "Parents were welcomed with refreshments in the courtyard at the start of the Spring Term.",
    body: [
      "The start of the Spring Term was a chance to welcome families back to school. A painted wall greeted everyone with the words “Welcome to our Spring Term”, decorated with balloons.",
      "Staff served refreshments to parents in the courtyard, a friendly start to the term and a chance for families and staff to talk.",
    ],
    cover: "springTermWelcome",
    photos: ["springTermRefreshments"],
  },
];

export function getStory(slug: string) {
  return newsStories.find((story) => story.slug === slug);
}

/**
 * Upcoming events and term dates. Empty until the school confirms dates;
 * the News & Events page shows how to get current dates meanwhile.
 * Example: { title: "Resumption for the Summer Term", date: "2027-04-26", detail: "8:00 am" }
 */
export const events: { title: string; date: string; detail?: string }[] = [];

/** Gallery albums. Each photo appears once; add new albums as events happen. */
export const galleryAlbums: { title: string; photos: PhotoKey[] }[] = [
  { title: "Our campus", photos: ["campusCourtyard", "assemblySportsField"] },
  { title: "In the classroom", photos: ["classroomScienceLesson", "classroomLaptops", "pupilInUniform"] },
  {
    title: "Anti-Bullying Day",
    photos: [
      "antiBullyingHandsRaised",
      "antiBullyingOddSocks",
      "antiBullyingBeABuddy",
      "nurseryFeelSafeAndLoved",
      "antiBullyingNurseryCircle",
      "antiBullyingPosters",
    ],
  },
  { title: "Cultural Day", photos: ["culturalDayGroup", "culturalDayTeachers", "culturalDayAttire"] },
  { title: "Celebrations", photos: ["honoursDay", "careerDayLawyer", "careerDayDoctor", "springTermWelcome", "springTermRefreshments"] },
];
