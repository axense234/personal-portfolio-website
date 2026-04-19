import { SectionDataType } from "@/core/types";

export const homePageFeaturedProjectsSectionData: SectionDataType = {
  title: "Featured Projects",
  paragraphs: [
    "Here are displayed some of my best / favorite web dev projects. Had a lot of fun working on them even tho I most likely consumed a bit too much pepsi max.",
  ],
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
      dest: "/projects",
      label: "More Projects",
      size: "large",
    },
  ],
};
