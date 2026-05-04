"use client";
// SCSS
import aboutJourneyContentStyles from "@/scss/components/page/about/AboutJourneyContent.module.scss";
// Data
import { aboutPageJourneyContentData } from "@/data";
// Zustand
import { useGetWindowWidth } from "@/hooks";
import { useGeneralStore } from "@/zustand/general";
// Next
import Link from "next/link";
// Helpers
import { getSpecificButtonColor } from "@/helpers";
// Components
import IconComponent from "@/components/shared/IconComponent";
import ErrorInterface from "@/components/shared/sections/ErrorInterface";
import LoadingInterface from "@/components/shared/sections/LoadingInterface";
// Translations
import { useTranslations } from "use-intl";

const AboutJourneyContent = () => {
  const { getTechData } = useGeneralStore((state) => state);
  const { isError, isLoading, tech } = getTechData;
  const translations = useTranslations("about.sections.journey.content");

  const windowWidth = useGetWindowWidth();
  const iconsPosition = windowWidth && windowWidth <= 1200 ? "top" : "bottom";
  let iconHeight = 64;
  if (windowWidth && windowWidth <= 600) {
    iconHeight = 32;
  } else if (windowWidth && windowWidth <= 1200) {
    iconHeight = 48;
  } else {
    iconHeight = 64;
  }

  if (isError) {
    return <ErrorInterface isError={isError} />;
  }

  if (isLoading) {
    return <LoadingInterface isLoading={isLoading} message="Loading Tech..." />;
  }

  const getTechById = (id: string) => {
    return tech.find((tech) => tech.id === id);
  };

  return (
    <div className={aboutJourneyContentStyles.container}>
      {aboutPageJourneyContentData.map((articleData) => {
        const shownIcons = articleData?.tech_ids ? (
          <div className={aboutJourneyContentStyles.icons}>
            {articleData?.tech_ids?.map((icon, index) => {
              const usedTech = getTechById(icon);

              if (usedTech) {
                return (
                  <IconComponent
                    {...usedTech}
                    key={index}
                    height={iconHeight}
                  />
                );
              }
            })}
          </div>
        ) : (
          <div className={aboutJourneyContentStyles.icons}>
            {articleData?.icons?.map((icon, index) => {
              return (
                <IconComponent
                  {...icon}
                  id=""
                  key={index}
                  height={iconHeight}
                />
              );
            })}
          </div>
        );

        return (
          <div
            className={aboutJourneyContentStyles.article}
            key={articleData.id}
          >
            <div className={aboutJourneyContentStyles.header}>
              {iconsPosition === "top" && shownIcons}
              <h5>{translations(`data.${articleData.title}.title`)}</h5>
              {iconsPosition === "bottom" && shownIcons}
            </div>
            <div className={aboutJourneyContentStyles.content}>
              <div className={aboutJourneyContentStyles.paragraphs}>
                {translations
                  .raw(`data.${articleData.title}.paragraphs`)
                  .map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>;
                  })}
              </div>
              <div className={aboutJourneyContentStyles.externals}>
                {articleData?.external_links?.map((external_link, index) => {
                  const linkButtonColor = getSpecificButtonColor(index);

                  const translatedExternalLabel = translations(
                    `data.${articleData.title}.externalLabels.${external_link.label}`,
                  );

                  return (
                    <div
                      className={aboutJourneyContentStyles.external}
                      key={external_link.id}
                    >
                      <span>{translations("linkLabel")}</span>
                      <Link
                        href={external_link.link}
                        style={{ color: linkButtonColor }}
                      >
                        {translatedExternalLabel}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutJourneyContent;
