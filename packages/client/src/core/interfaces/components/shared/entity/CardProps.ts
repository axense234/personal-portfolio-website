import { ExternalMediaIconType } from "@/core/types";
import { LinkButtonProps } from "./LinkButtonProps";

export interface CardProps {
  image: string;
  label: string;
  desc: string;

  button?: LinkButtonProps;
  externals?: ExternalMediaIconType[];
}
