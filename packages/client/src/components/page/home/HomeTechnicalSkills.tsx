"use client";
// SCSS
import homeTechnicalSkillsStyles from "@/scss/components/page/home/HomeTechnicalSkills.module.scss";
// Components
import LinkButton from "@/components/shared/LinkButton";
import TechCategory from "@/components/shared/TechCategory";
// Custom Hooks
import { useGetTech } from "@/hooks";
// Data
import { homePageTechnicalSkillsSectionData } from "@/data";

const Skills = () => {
  const { isError, isLoading, tech } = useGetTech();

  if (isError) {
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
  }

  const techCategories = Array.from(new Set(tech?.map((t) => t.category)));

  return (
    <ul className={homeTechnicalSkillsStyles.skills}>
      {techCategories?.map((category, index) => {
        const skillsByCategory = tech.filter((t) => t.category === category);

        return (
          <li key={index}>
            <TechCategory label={category} skills={skillsByCategory} />
          </li>
        );
      })}
    </ul>
  );
};

const HomeTechnicalSkills = () => {
  const { buttons, paragraphs, title } = homePageTechnicalSkillsSectionData;

  return (
    <section className={homeTechnicalSkillsStyles.container}>
      <div className={homeTechnicalSkillsStyles.content}>
        <div className={homeTechnicalSkillsStyles.intro}>
          <h2>{title}</h2>
          {paragraphs.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
        <Skills />
      </div>
      {buttons?.map((button) => {
        return <LinkButton {...button} key={button.id} />;
      })}
    </section>
  );
};

export default HomeTechnicalSkills;
