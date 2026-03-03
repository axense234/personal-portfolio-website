// SCSS
import homeTechnicalSkillsStyles from "@/scss/components/page/home/HomeTechnicalSkills.module.scss";
// Components
import LinkButton from "@/components/shared/LinkButton";
import TechCategory from "@/components/shared/TechCategory";
// Data
import { technicalSkillsData } from "@/data";

const Skills = () => {
  return (
    <ul className={homeTechnicalSkillsStyles.skills}>
      {technicalSkillsData.map((category) => {
        return (
          <li key={category.id}>
            <TechCategory {...category} />
          </li>
        );
      })}
    </ul>
  );
};

const HomeTechnicalSkills = () => {
  return (
    <section className={homeTechnicalSkillsStyles.container}>
      <div className={homeTechnicalSkillsStyles.content}>
        <div className={homeTechnicalSkillsStyles.intro}>
          <h2>Technical Skills</h2>
          <p>
            A list of the most important technologies I know. Frontend
            technologies, backend technologies and other tools.
          </p>
        </div>
        <Skills />
      </div>
      <LinkButton color="success" dest="/about" label="More Details" />
    </section>
  );
};

export default HomeTechnicalSkills;
