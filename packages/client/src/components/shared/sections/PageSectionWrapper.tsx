"use client";
// SCSS
import pageSectionWrapperStyles from "@/scss/components/shared/sections/PageSectionWrapper.module.scss";
// React
import { FC } from "react";
// Interfaces
import { PageSectionWrapperProps } from "@/core/interfaces";
// Components
import LinkButton from "../LinkButton";
// Hooks
import { useGetWindowWidth } from "@/hooks";
// Transitions
import { useInView } from "react-intersection-observer";
import usePopInAnimation from "@/hooks/general/usePopInTransition";

const PageSectionWrapper: FC<PageSectionWrapperProps> = ({
  children,
  pageSectionData,
  titleHeadingUsed = "h2",
  flexDirection = "column",
  justifyContent = "center",
  contentAlignment = "right",
}) => {
  const { title, paragraphs, buttons, subtitle } = pageSectionData;

  const windowWidth = useGetWindowWidth();
  const {
    ref: sectionRef,
    inView: sectionInView,
    entry: sectionEntry,
  } = useInView();
  usePopInAnimation("showBTT", sectionInView, sectionEntry);

  let linkButtonSize: "large" | "small" | "medium" = "large";
  if (windowWidth && windowWidth <= 600) {
    linkButtonSize = "small";
  } else if (windowWidth && windowWidth <= 1200) {
    linkButtonSize = "medium";
  } else if (windowWidth && windowWidth <= 1500) {
    linkButtonSize = "large";
  } else {
    linkButtonSize = "large";
  }

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

  return (
    <section
      className={`${pageSectionWrapperStyles.container} hiddenBTT`}
      style={{ justifyContent }}
      ref={sectionRef}
    >
      <div
        className={pageSectionWrapperStyles.content}
        style={{ justifyContent, flexDirection }}
      >
        {contentAlignment === "left" && children}
        <div className={pageSectionWrapperStyles.intro}>
          {titleShown}
          {subtitle && (
            <h4 title={subtitle} aria-label={subtitle}>
              {subtitle}
            </h4>
          )}
          <div className={pageSectionWrapperStyles.paragraphs}>
            {paragraphs?.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
        {contentAlignment === "right" && children}
      </div>
      <div className={pageSectionWrapperStyles.buttons}>
        {buttons?.map((button) => {
          return (
            <LinkButton {...button} key={button.id} size={linkButtonSize} />
          );
        })}
      </div>
    </section>
  );
};

export default PageSectionWrapper;
