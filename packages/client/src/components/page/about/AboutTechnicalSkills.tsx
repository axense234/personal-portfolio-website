"use client";
// SCSS
import aboutTechnicalSkillsStyles from "@/scss/components/page/about/AboutTechnicalSkills.module.scss";
// Data
import { aboutPageTechnicalSkillsSectionData } from "@/data";
// Components
import TechnicalSkills from "@/components/shared/TechnicalSkills";
// Hooks
import { useGetTechSkills } from "@/hooks";

const AboutTechnicalSkills = () => {
  const { title, paragraphs } = aboutPageTechnicalSkillsSectionData;

  const { techSkills, isError, isLoading } = useGetTechSkills();

  if (isError) {
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
  }

  return (
    <section className={aboutTechnicalSkillsStyles.container}>
      <div className={aboutTechnicalSkillsStyles.content}>
        <div className={aboutTechnicalSkillsStyles.intro}>
          <h2 title={title} aria-label={title}>
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
        <TechnicalSkills techSkills={techSkills} />
      </div>
    </section>
  );
};

export default AboutTechnicalSkills;
