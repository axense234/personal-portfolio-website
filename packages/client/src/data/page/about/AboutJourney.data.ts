import { SectionDataType } from "@/core/types";

export const aboutPageJourneySectionData: SectionDataType = {
  title: "My Journey",
  paragraphs: [
    "My programming journey at large, starting from Python in 2020.",
  ],
  buttons: [
    {
      id: 1,
      colorSpecifier: "success",
      dest: "/projects",
      label: "My Projects",
      size: "large",
    },
  ],
};
