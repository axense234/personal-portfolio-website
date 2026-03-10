// SCSS
import aboutTechnicalSkillsStyles from "@/scss/components/page/about/AboutHobbies.module.scss";
// Data
import { aboutPageHobbiesSectionData } from "@/data";
// Components
import Hobbies from "./Hobbies";

const AboutHobbies = () => {
  const { title, paragraphs } = aboutPageHobbiesSectionData;

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
        <Hobbies />
      </div>
    </section>
  );
};

export default AboutHobbies;
