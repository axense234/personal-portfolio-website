import { LinkButtonProps } from "@/core/interfaces";

export type SectionDataType = {
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  buttons?: LinkButtonProps[];
};
