import { CommonPageHeroSectionDataType } from "@/core/types";

export const aboutPageHeroSectionData: CommonPageHeroSectionDataType = {
  title: "About Me",
  subtitle: "mischevious information",
  desc: "I am a romanian student passionate about web development. Check out my projects, my programing journey and my hobbies.",
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
    {
      id: 3,
      colorSpecifier: "delete",
      dest: "/about",
      label: "My Hobbies",
      size: "large",
    },
  ],
};
