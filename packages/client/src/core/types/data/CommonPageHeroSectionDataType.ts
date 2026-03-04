import { LinkHrefType } from "@/core/types";

export type ExperimentalButtonType = {
  id: number;
  color: "warning" | "success" | "delete";
  label: string;
  dest: LinkHrefType;
};

export type CommonPageHeroSectionDataType = {
  title: string;
  subtitle: string;
  desc: string;
  image: string;

  buttons: ExperimentalButtonType[];
};
