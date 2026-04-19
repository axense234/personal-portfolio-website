import { SectionDataType } from "@/core/types";

export const aboutPageAboutMeSectionData: SectionDataType = {
  title: "Who am I?",
  paragraphs: [
    "My name is Comănescu Andrei, I am a romanian student currently attending the Faculty of Mathematics and Computer Science at Babes-Bolyai University, studying Computer Science in English as an undergraduate.",
    "In my free time, I usually like doing web development, learning any technologies.  I also like cooking, long walks and playing some games when im free.",
  ],
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
      dest: "/contact",
      label: "Contact Me",
      size: "large",
    },
  ],
};
