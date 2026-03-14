"use client";
// SCSS
import homeTechnicalSkillsStyles from "@/scss/components/page/home/HomeTechnicalSkills.module.scss";
// Components
import LinkButton from "@/components/shared/LinkButton";
import TechIcons from "@/components/shared/TechIcons";
// Data
import { homePageTechnicalSkillsSectionData } from "@/data";

const HomeTechnicalSkills = () => {
  const { buttons, paragraphs, title } = homePageTechnicalSkillsSectionData;

  return (
    <section className={homeTechnicalSkillsStyles.container}>
      <div className={homeTechnicalSkillsStyles.content}>
        <div className={homeTechnicalSkillsStyles.intro}>
          <h2>{title}</h2>
          {paragraphs?.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
        <TechIcons isFunctional={false} isFancy={false} />
      </div>
      {buttons?.map((button) => {
        return <LinkButton {...button} key={button.id} />;
      })}
    </section>
  );
};

export default HomeTechnicalSkills;
