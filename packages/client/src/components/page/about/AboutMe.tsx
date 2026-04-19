"use client";
// Next
import Image from "next/image";
// SCSS
import aboutMeStyles from "@/scss/components/page/about/AboutMe.module.scss";
// Components
import LinkButton from "@/components/shared/LinkButton";
// Data
import {
  aboutPageAboutMeSectionData,
  imagePlaceholderTextAlt,
  imagePlaceholderTextSrc,
  imagePlaceholderTextTitle,
} from "@/data";
// Hooks
import { useGetWindowWidth } from "@/hooks";
// Translations
import { useTranslations } from "next-intl";
// Types
import { SectionDataType } from "@/core/types";

const AboutMe = () => {
  const windowWidth = useGetWindowWidth();
  const translations = useTranslations("about.sections.aboutMe");

  const translatedData: SectionDataType = {
    ...aboutPageAboutMeSectionData,
    title: translations("title"),
    paragraphs: translations.raw("paragraphs"),
    buttons: aboutPageAboutMeSectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

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

  const { paragraphs, title, buttons } = translatedData;

  return (
    <section className={aboutMeStyles.container}>
      <Image
        alt={imagePlaceholderTextAlt}
        src={imagePlaceholderTextSrc}
        width={400}
        height={400}
        title={imagePlaceholderTextTitle}
        aria-label={imagePlaceholderTextTitle}
      />
      <div className={aboutMeStyles.content}>
        <div className={aboutMeStyles.intro}>
          <h2>{title}</h2>
          <div className={aboutMeStyles.paragraphs}>
            {paragraphs?.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
        <div className={aboutMeStyles.buttons}>
          {buttons?.map((button) => {
            return (
              <LinkButton {...button} key={button.id} size={linkButtonSize} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
