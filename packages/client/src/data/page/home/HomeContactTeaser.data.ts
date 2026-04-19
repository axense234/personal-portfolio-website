import { SectionDataType } from "@/core/types";

export const homePageContactTeaserSectionData: SectionDataType = {
  title: "Mayhaps Contact Me?",
  paragraphs: [
    "If there is a will there is a way as they say.",
    "Also open to internships or other types of work. Also also, I wouldn’t mind collaborating on web dev / python projects.",
  ],
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
      dest: "/misc/resume.pdf",
      label: "My Resume",
      size: "large",
      download: true,
      downloadFilename: "ca-resume.pdf",
      buttonType: "download",
    },
  ],
};
