import { CommonPageHeroSectionDataType } from "@/core/types";

export const contactPageHeroSectionData: CommonPageHeroSectionDataType = {
  title: "Contact Me",
  subtitle: "communication",
  desc: "I am a romanian student passionate about web development. Feel free to contact me for any type of project related reason or just for the fun of it I guess.",
  image: "/misc/placeholder.jpg",
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
      dest: "/contact",
      label: "Contact Me",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
      dest: "/contact",
      label: "Message Me",
      size: "large",
    },
    {
      id: 3,
      colorSpecifier: "delete",
      dest: "/contact",
      label: "My Resume",
      size: "large",
    },
  ],
};
