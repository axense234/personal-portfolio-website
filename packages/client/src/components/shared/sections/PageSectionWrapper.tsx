// SCSS
import pageSectionWrapperStyles from "@/scss/components/shared/sections/PageSectionWrapper.module.scss";
// React
import { FC } from "react";
// Interfaces
import { PageSectionWrapperProps } from "@/core/interfaces";
// Components
import LinkButton from "../LinkButton";

const PageSectionWrapper: FC<PageSectionWrapperProps> = ({
  children,
  pageSectionData,
  titleHeadingUsed = "h2",
}) => {
  const { title, paragraphs, buttons, subtitle } = pageSectionData;

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
    <section className={pageSectionWrapperStyles.container}>
      <div className={pageSectionWrapperStyles.content}>
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
        {children}
      </div>
      <div className={pageSectionWrapperStyles.buttons}>
        {buttons?.map((button) => {
          return <LinkButton {...button} key={button.id} />;
        })}
      </div>
    </section>
  );
};

export default PageSectionWrapper;
