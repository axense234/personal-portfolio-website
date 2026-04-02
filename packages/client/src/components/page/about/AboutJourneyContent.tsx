"use client";
// SCSS
import aboutJourneyContentStyles from "@/scss/components/page/about/AboutJourneyContent.module.scss";
// Data
import { aboutPageJourneyContentData } from "@/data";
// Zustand
import { useGetTech, useGetWindowWidth } from "@/hooks";
// Next
import Link from "next/link";
// Helpers
import { getSpecificButtonColor } from "@/helpers";
// Components
import IconComponent from "@/components/shared/IconComponent";

const AboutJourneyContent = () => {
  const { isError, isLoading, tech } = useGetTech();

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
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
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
              <h5>{articleData.title}</h5>
              {iconsPosition === "bottom" && shownIcons}
            </div>
            <div className={aboutJourneyContentStyles.content}>
              <div className={aboutJourneyContentStyles.paragraphs}>
                {articleData?.paragraphs.map((paragraph, index) => {
                  return <p key={index}>{paragraph}</p>;
                })}
              </div>
              <div className={aboutJourneyContentStyles.externals}>
                {articleData?.external_links?.map((external_link, index) => {
                  const linkButtonColor = getSpecificButtonColor(index);

                  return (
                    <div
                      className={aboutJourneyContentStyles.external}
                      key={external_link.id}
                    >
                      <span>Check out</span>
                      <Link
                        href={external_link.link}
                        style={{ color: linkButtonColor }}
                      >
                        {external_link.label}
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
