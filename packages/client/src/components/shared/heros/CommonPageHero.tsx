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
// Data
import { imagePlaceholderTextAlt, imagePlaceholderTextTitle } from "@/data";
// Smooth Transitions
import { useInView } from "react-intersection-observer";
import usePopInAnimation from "@/hooks/general/usePopInTransition";

const CommonPageHero: FC<CommonPageHeroProps> = ({
  title,
  subtitle,
  image,
  desc,
  buttons,
  titleHeadingUsed = "h1",
}) => {
  const windowWidth = useGetWindowWidth();
  const imagePosition = windowWidth && windowWidth <= 1500 ? "top" : "bottom";

  const { ref: imageRef, inView: imageInView, entry: imageEntry } = useInView();
  const {
    ref: contentRef,
    inView: contentInView,
    entry: contentEntry,
  } = useInView();

  usePopInAnimation("showRTL", imageInView, imageEntry);
  usePopInAnimation("showLTR", contentInView, contentEntry);

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

  let reservedImageSpace = 400;

  let linkButtonSize: "large" | "small" | "medium" = "large";
  if (windowWidth && windowWidth <= 600) {
    linkButtonSize = "small";
    reservedImageSpace = 184;
  } else if (windowWidth && windowWidth <= 1200) {
    linkButtonSize = "medium";
    reservedImageSpace = 280;
  } else if (windowWidth && windowWidth <= 1500) {
    linkButtonSize = "large";
    reservedImageSpace = 280;
  } else {
    linkButtonSize = "large";
  }

  return (
    <section className={commonPageHeroStyles.container}>
      {imagePosition === "top" && (
        <Image
          alt={imagePlaceholderTextAlt}
          src={image}
          width={reservedImageSpace}
          height={reservedImageSpace}
          title={imagePlaceholderTextTitle}
          aria-label={imagePlaceholderTextTitle}
          ref={imageRef}
          className="hiddenRTL"
          fetchPriority="high"
        />
      )}
      <div
        className={`${commonPageHeroStyles.content} hiddenLTR`}
        ref={contentRef}
      >
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
          ref={imageRef}
          className="hiddenRTL"
        />
      )}
    </section>
  );
};

export default CommonPageHero;
