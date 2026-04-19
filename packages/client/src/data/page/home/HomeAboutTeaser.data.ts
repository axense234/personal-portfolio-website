import { SectionDataType } from "@/core/types";

export const homePageAboutTeaserSectionData: SectionDataType = {
  title: "A Bit About Me",
  paragraphs: [
    "As a Computer Science student at UBB and full-stack web developer I work on my projects out of a combination of self-satisfaction and pure enjoyment of the craft.",
    "Also won a few county level web dev competitions and even got a bronze medal at a national one during my high school years.",
  ],
  buttons: [
    {
      id: 1,
      colorSpecifier: "delete",
      dest: "/about",
      label: "Read More",
      size: "large",
    },
  ],
};
