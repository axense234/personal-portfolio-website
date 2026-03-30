"use client";
// React
import { FC } from "react";
// SCSS
import commonPageHeroStyles from "@/scss/components/shared/heros/CommonPageHero.module.scss";
// Interfaces
import { CommonPageHeroProps } from "@/core/interfaces";
// Next
import Image from "next/image";
// Fonts
import { karla } from "@/app/fonts";
// Components
import LinkButton from "../LinkButton";
// Hooks
import { useGetWindowWidth } from "@/hooks";

const CommonPageHero: FC<CommonPageHeroProps> = ({
  title,
  subtitle,
  image,
  desc,
  buttons,
  titleHeadingUsed = "h1",
}) => {
  const titleShown =
    titleHeadingUsed === "h1" ? (
      <h1 title={title} aria-label={title}>
        {title}
      </h1>
    ) : (
      <h2 title={title} aria-label={title}>
        {title}
      </h2>
    );

  const windowWidth = useGetWindowWidth();
  const imagePosition = windowWidth && windowWidth <= 1500 ? "top" : "bottom";
  const reservedImageSpace = windowWidth && windowWidth <= 1500 ? 280 : 400;

  let linkButtonSize: "large" | "small" | "medium" = "large";
  if (windowWidth && windowWidth <= 1200) {
    linkButtonSize = "medium";
  } else if (windowWidth && windowWidth <= 1500) {
    linkButtonSize = "large";
  } else {
    linkButtonSize = "large";
  }

  return (
    <section className={commonPageHeroStyles.container}>
      {imagePosition === "top" && (
        <Image
          alt="A Cool Looking Image I Guess Man"
          src={image}
          width={reservedImageSpace}
          height={reservedImageSpace}
          title="Placeholder: This is where an eventual cool picture of myself is going to be"
          aria-label="Placeholder: This is where an eventual cool picture of myself is going to be"
        />
      )}
      <div className={commonPageHeroStyles.content}>
        <div className={commonPageHeroStyles.header}>
          {titleShown}
          <h3>{subtitle}</h3>
        </div>
        <p className={karla.className}>{desc}</p>
        <div className={commonPageHeroStyles.buttons}>
          {buttons.map((button) => {
            return (
              <LinkButton {...button} key={button.id} size={linkButtonSize} />
            );
          })}
        </div>
      </div>
      {imagePosition === "bottom" && (
        <Image
          alt="A Cool Looking Image I Guess Man"
          src={image}
          width={reservedImageSpace}
          height={reservedImageSpace}
          title="Placeholder: This is where an eventual cool picture of myself is going to be"
          aria-label="Placeholder: This is where an eventual cool picture of myself is going to be"
        />
      )}
    </section>
  );
};

export default CommonPageHero;
