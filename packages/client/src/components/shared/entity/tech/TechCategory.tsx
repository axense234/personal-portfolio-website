// SCSS
import techCategoryStyles from "@/scss/components/shared/entity/tech/TechCategory.module.scss";
// React
import { FC } from "react";
// Interfaces
import { TechCategoryProps } from "@/core/interfaces";
// Components
import IconComponent from "../../IconComponent";

const TechCategory: FC<TechCategoryProps> = ({
  label,
  skills,
  isFunctional,
  onTechIconClick,
  selectedTech,
  iconHeight = 40,
}) => {
  return (
    <div className={techCategoryStyles.container}>
      <h6>{label}</h6>
      <ul className={techCategoryStyles.skills}>
        {skills.map((skill) => {
          const isTechSelected = selectedTech?.includes(skill.id);

          return (
            <li key={skill.id}>
              <IconComponent
                {...skill}
                isFunctional={isFunctional}
                onTechIconClick={onTechIconClick}
                isSelected={isTechSelected}
                height={iconHeight}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechCategory;
