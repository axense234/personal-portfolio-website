import { SectionDataType } from "@/core/types";

export interface PageSectionWrapperProps {
  children?: React.ReactNode;
  pageSectionData: SectionDataType;
  titleHeadingUsed?: "h1" | "h2";
}
