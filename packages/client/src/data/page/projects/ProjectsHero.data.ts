import { SectionDataType } from "@/core/types";

export const projectsPageHeroContentData: SectionDataType = {
  title: "My Projects",
  subtitle: "effloresced passion",
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
      dest: "/projects",
      label: "All Projects",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
      dest: "/projects",
      label: "Ongoing Projects",
      size: "large",
    },
  ],
};
