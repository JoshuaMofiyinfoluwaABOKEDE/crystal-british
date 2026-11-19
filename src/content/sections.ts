/**
 * The three stages of the school: Nursery, Primary and Secondary.
 */

import { photos, type PhotoKey } from "./photos";

export type SectionSlug = "nursery" | "primary" | "secondary";

export type SchoolSection = {
  slug: SectionSlug;
  name: string;
  /** One line used on cards and in the page header. */
  summary: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  photo: PhotoKey;
  gallery: PhotoKey[];
};

export const sections: SchoolSection[] = [
  {
    slug: "nursery",
    name: "Nursery",
    summary: "A gentle, happy start to school, where our youngest pupils learn to feel safe, make friends and enjoy learning.",
    intro: [
      "Nursery is where a child's school life begins, and where they first learn what it means to belong to Crystal. Small children are given bright, child-sized classrooms, caring adults and a calm routine.",
      "Our youngest pupils take a full part in school life. They sit in circle time with their classmates, join in special days such as Anti-Bullying Day, and dress up for occasions like career day, learning early that school is a place where they are safe and loved.",
    ],
    highlights: [
      { title: "Safe and loved", text: "Kindness and good manners are taught from the very first day." },
      { title: "Learning together", text: "Circle time and group activities help children listen, share and take turns." },
      { title: "Part of the whole school", text: "Nursery pupils join school-wide celebrations alongside older children." },
    ],
    photo: "nurseryFeelSafeAndLoved",
    gallery: ["antiBullyingNurseryCircle", "antiBullyingBeABuddy", "careerDayLawyer"],
  },
  {
    slug: "primary",
    name: "Primary",
    summary: "Strong foundations in reading, writing and mathematics, with pupils who are encouraged to speak up and explain their thinking.",
    intro: [
      "In Primary, pupils build the knowledge and habits that carry them through school. Lessons are active: pupils come to the whiteboard to work through problems, explain their reasoning to the class and use laptops alongside their books.",
      "Classrooms are bright and full of learning on the walls, from conversion tables and number charts to affirmations that remind every child they are smart, brave, kind and capable.",
    ],
    highlights: [
      { title: "Confident speakers", text: "Pupils present their work and explain how they reached an answer." },
      { title: "Technology in lessons", text: "Laptops are used in class alongside books and the whiteboard." },
      { title: "Character with learning", text: "Kindness, honesty and respect are part of everyday school life." },
    ],
    photo: "classroomLaptops",
    gallery: ["classroomScienceLesson", "pupilInUniform", "antiBullyingPosters"],
  },
  {
    slug: "secondary",
    name: "Secondary",
    summary: "Greater independence, wider subjects and real responsibility, preparing students for the next stage of their education.",
    intro: [
      "Secondary students take on more of the life of the school. They lead assemblies in front of their schoolmates, take part in campaigns such as Anti-Bullying Day and set the example for younger pupils.",
      "Alongside their studies, students celebrate who they are. On Cultural Day they come dressed in the traditional attire of their families, a reminder that an international education starts from a firm sense of home.",
    ],
    highlights: [
      { title: "Leadership", text: "Students speak at assemblies and help lead school events." },
      { title: "Heritage and identity", text: "Cultural Day celebrates the many traditions within our community." },
      { title: "Ready for what is next", text: "Teaching that builds independence for further study and life beyond school." },
    ],
    photo: "assemblySportsField",
    gallery: ["culturalDayAttire", "antiBullyingHandsRaised", "culturalDayTeachers"],
  },
];

export function getSection(slug: SectionSlug) {
  const index = sections.findIndex((s) => s.slug === slug);
  return {
    section: sections[index],
    previous: index > 0 ? sections[index - 1] : undefined,
    next: index < sections.length - 1 ? sections[index + 1] : undefined,
  };
}

export function sectionPhoto(section: SchoolSection) {
  return photos[section.photo];
}
