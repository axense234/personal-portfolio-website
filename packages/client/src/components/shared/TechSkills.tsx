// React
import { FC } from "react";
// Interfaces
import { TechSkillsProps } from "@/core/interfaces";
import { TechCategory } from "@personal-portfolio-website/shared";
// SCSS
import techSkillsStyles from "@/scss/components/shared/TechSkills.module.scss";
// Components
import TechSkillsTabOptions from "./TechSkillsTabOptions";
import TechSkillsTabView from "./TechSkillsTabView";
import TechSkillsTabNav from "./TechSkillsTabNav";
// Zusssssssssssssssstand
import { useGeneralStore } from "@/zustand/general/context";

const TechSkills: FC<TechSkillsProps> = ({ techSkills }) => {
  const categories = new Set(techSkills?.map((skill) => skill.tech.category));

  const {
    currentTechSkillCategory: currentCategory,
    currentTechSkill,
    setCurrentTechSkill,
    handleOnTechSkillCategoryTabClick,
  } = useGeneralStore((state) => state);

  const onTabClickFunc = (category: TechCategory) => {
    handleOnTechSkillCategoryTabClick(category);
  };

  const skillsBasedOnCategory = techSkills?.filter(
    (skill) => skill.tech.category == currentCategory,
  );

  return (
    <div className={techSkillsStyles.container}>
      <TechSkillsTabNav
        categories={categories}
        currentCategory={currentCategory}
        onTabClickFunc={onTabClickFunc}
      />
      <div className={techSkillsStyles.wrapper}>
        <TechSkillsTabOptions
          skills={skillsBasedOnCategory}
          currentSkill={currentTechSkill}
          onTabOptionClickFunc={setCurrentTechSkill}
        />
        <TechSkillsTabView currentTechSkill={currentTechSkill} />
      </div>
    </div>
  );
};

export default TechSkills;
