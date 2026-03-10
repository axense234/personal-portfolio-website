// SCSS
import techCategoryStyles from "@/scss/components/shared/TechCategory.module.scss";
// React
import { FC } from "react";
// Interfaces
import { TechCategoryProps } from "@/core/interfaces";
// Components
import IconComponent from "./IconComponent";

const TechCategory: FC<TechCategoryProps> = ({ label, skills }) => {
  return (
    <div className={techCategoryStyles.container}>
      <h6>{label}</h6>
      <ul className={techCategoryStyles.skills}>
        {skills.map((skill) => {
          return (
            <li key={skill.id}>
              <IconComponent {...skill} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechCategory;
