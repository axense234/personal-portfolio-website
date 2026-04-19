import { SectionDataType } from "@/core/types";

export const awardsPageHeroContentData: SectionDataType = {
  title: "Awards",
  subtitle: "shiny stuff",
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
      dest: "/awards",
      label: "Bronze Medal Award",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
      dest: "/awards",
      label: "Highschool Awards",
      size: "large",
    },
  ],
};
