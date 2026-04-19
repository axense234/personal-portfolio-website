import { CommonPageHeroSectionDataType } from "@/core/types";

export const homePageHeroSectionData: CommonPageHeroSectionDataType = {
  title: "Comănescu Andrei",
  subtitle: "Web Developer",
  desc: "My name is Comănescu Andrei, I am a romanian student currently attending the Faculty of Mathematics and Computer Science at Babes-Bolyai University, studying Computer Science in English as an undergraduate.",
  image: "/misc/placeholder.jpg",
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
      dest: "/projects",
      label: "My Projects",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
      dest: "/about",
      label: "My Journey",
      size: "large",
    },
  ],
};
