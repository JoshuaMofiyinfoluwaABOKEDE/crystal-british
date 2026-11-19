/**
 * Every photograph on the website, in one place.
 *
 * All photos are the school's own, taken from its social media pages.
 * Each entry holds the image, its alt text (read aloud by screen readers and
 * used by search engines) and a short caption. To add a photo: save it as
 * .webp in src/assets/photos/, import it below and give it alt text that
 * describes what is in the picture.
 *
 * Only use photographs of pupils whose parents have agreed to their child
 * appearing on the school's website and social media.
 */

import type { StaticImageData } from "next/image";

import antiBullyingBeABuddy from "@/assets/photos/anti-bullying-be-a-buddy.webp";
import antiBullyingHandsRaised from "@/assets/photos/anti-bullying-hands-raised.webp";
import antiBullyingNurseryCircle from "@/assets/photos/anti-bullying-nursery-circle.webp";
import antiBullyingOddSocks from "@/assets/photos/anti-bullying-odd-socks.webp";
import antiBullyingPosters from "@/assets/photos/anti-bullying-posters.webp";
import assemblySportsField from "@/assets/photos/assembly-sports-field.webp";
import campusCourtyard from "@/assets/photos/campus-courtyard.webp";
import careerDayDoctor from "@/assets/photos/career-day-doctor.webp";
import careerDayLawyer from "@/assets/photos/career-day-lawyer.webp";
import classroomLaptops from "@/assets/photos/classroom-laptops.webp";
import classroomScienceLesson from "@/assets/photos/classroom-science-lesson.webp";
import culturalDayAttire from "@/assets/photos/cultural-day-attire.webp";
import culturalDayGroup from "@/assets/photos/cultural-day-group.webp";
import culturalDayTeachers from "@/assets/photos/cultural-day-teachers.webp";
import honoursDay from "@/assets/photos/honours-day.webp";
import nurseryFeelSafeAndLoved from "@/assets/photos/nursery-feel-safe-and-loved.webp";
import pupilInUniform from "@/assets/photos/pupil-in-uniform.webp";
import springTermRefreshments from "@/assets/photos/spring-term-refreshments.webp";
import springTermWelcome from "@/assets/photos/spring-term-welcome.webp";

export type Photo = {
  image: StaticImageData;
  alt: string;
  caption: string;
  /** CSS object-position, to keep faces in frame when the photo is cropped. */
  focus?: string;
};

export const photos = {
  pupilInUniform: {
    image: pupilInUniform,
    alt: "A smiling pupil in the Crystal uniform: straw boater with a navy band, light-blue shirt printed with the school initials, striped tie and navy pinafore.",
    caption: "The Crystal uniform, from boater to pinafore.",
    focus: "50% 30%",
  },
  campusCourtyard: {
    image: campusCourtyard,
    alt: "The school building: three floors of balconies around a paved courtyard, with the British, Nigerian and American flags flying in front.",
    caption: "Our campus on Chief Okpaga Street, Mgbabo Echara.",
    focus: "40% 50%",
  },
  classroomLaptops: {
    image: classroomLaptops,
    alt: "A teacher points to the whiteboard while two pupils stand at their desks with laptops open.",
    caption: "Laptops at the desk, attention on the board.",
    focus: "60% 45%",
  },
  classroomScienceLesson: {
    image: classroomScienceLesson,
    alt: "A pupil explains a lesson on litres and centilitres at the whiteboard while her teacher looks on, in a bright classroom with colourful desks.",
    caption: "Explaining the working at the whiteboard.",
    focus: "55% 45%",
  },
  careerDayLawyer: {
    image: careerDayLawyer,
    alt: "A young pupil dressed as a lawyer in a wig, black gown and white bands, standing in front of classroom charts.",
    caption: "A future barrister on career dress-up day.",
    focus: "50% 22%",
  },
  careerDayDoctor: {
    image: careerDayDoctor,
    alt: "A young pupil in a white doctor's coat with a toy stethoscope and medical kit, smiling and making a peace sign.",
    caption: "Doctors in training.",
    focus: "55% 30%",
  },
  springTermWelcome: {
    image: springTermWelcome,
    alt: "A staff member serves refreshments to a parent beside a painted wall that reads Welcome to our Spring Term.",
    caption: "Welcoming families to the Spring Term.",
    focus: "50% 40%",
  },
  springTermRefreshments: {
    image: springTermRefreshments,
    alt: "Parents and staff gather around a refreshment table in the school courtyard.",
    caption: "Refreshments for parents in the courtyard.",
    focus: "50% 40%",
  },
  honoursDay: {
    image: honoursDay,
    alt: "A pupil in a red dress holds her Honours Day certificate, standing with three adults in front of the school's Honours Day backdrop.",
    caption: "Recognised at Honours Day.",
    focus: "50% 70%",
  },
  culturalDayGroup: {
    image: culturalDayGroup,
    alt: "A large group of pupils in traditional Nigerian attire, with coral beads, caps and gele, in front of the school building.",
    caption: "Cultural Day in the courtyard.",
    focus: "50% 60%",
  },
  culturalDayTeachers: {
    image: culturalDayTeachers,
    alt: "A teacher in black and white traditional dress with a red cap stands among boys in traditional attire, with a female teacher behind them.",
    caption: "Teachers and pupils dressed for Cultural Day.",
    focus: "50% 40%",
  },
  culturalDayAttire: {
    image: culturalDayAttire,
    alt: "Three older boys in traditional attire with red caps and coral beads, one holding a walking stick, standing on the school field.",
    caption: "Traditional dress on Cultural Day.",
    focus: "50% 30%",
  },
  antiBullyingPosters: {
    image: antiBullyingPosters,
    alt: "Pupils sit in a circle on artificial grass showing odd, colourful socks and hand-made posters reading Be kind, not cruel.",
    caption: "Odd socks and hand-made posters.",
  },
  antiBullyingNurseryCircle: {
    image: antiBullyingNurseryCircle,
    alt: "Nursery children sit in a circle on the carpet, each wearing two different socks.",
    caption: "Our youngest pupils in odd socks.",
  },
  antiBullyingBeABuddy: {
    image: antiBullyingBeABuddy,
    alt: "Two young pupils hold up a yellow poster reading Be a buddy, not a bully, with a smiling face drawn in the middle.",
    caption: "Be a buddy, not a bully.",
    focus: "50% 40%",
  },
  antiBullyingHandsRaised: {
    image: antiBullyingHandsRaised,
    alt: "Older pupils sit in a circle on the field holding hands raised high, with anti-bullying posters on the grass between them.",
    caption: "Hands joined on Anti-Bullying Day.",
    focus: "50% 30%",
  },
  assemblySportsField: {
    image: assemblySportsField,
    alt: "Pupils gather on the artificial-turf field beside the covered stand while a student reads to the assembly and a teacher looks on.",
    caption: "A student-led assembly on the field.",
    focus: "45% 50%",
  },
  nurseryFeelSafeAndLoved: {
    image: nurseryFeelSafeAndLoved,
    alt: "A nursery pupil in a white shirt and odd socks holds a round red sign that reads Feel safe and loved.",
    caption: "Feel safe and loved.",
    focus: "50% 35%",
  },
  antiBullyingOddSocks: {
    image: antiBullyingOddSocks,
    alt: "Seen from above, pupils' feet in mismatched socks meet in the middle of a circle, beside posters reading Be a buddy, not a bully and No to teasing.",
    caption: "No to teasing.",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
