import { LinkButtonProps } from "@/core/interfaces";
import { ExternalMediaIconType } from "@/core/types";

export interface CardProps {
  image: string;
  label: string;
  desc: string;

  button?: LinkButtonProps;
  externals?: ExternalMediaIconType[];
}
