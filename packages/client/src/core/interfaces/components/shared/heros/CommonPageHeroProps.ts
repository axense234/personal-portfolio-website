import { LinkButtonProps } from "../LinkButtonProps";

export interface CommonPageHeroProps {
  title: string;
  subtitle: string;
  desc: string;
  image: string;

  titleHeadingUsed?: "h1" | "h2";

  buttons: LinkButtonProps[];
}
