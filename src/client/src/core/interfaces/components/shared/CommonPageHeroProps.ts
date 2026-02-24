import { LinkButtonProps } from "./LinkButtonProps";

export interface CommonPageHeroProps {
  title: string;
  subtitle: string;
  desc: string;
  image: string;

  buttons: LinkButtonProps[];
}
