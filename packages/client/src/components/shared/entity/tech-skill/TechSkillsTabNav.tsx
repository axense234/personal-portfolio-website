// SCSS
import techSkillsTabNavStyles from "@/scss/components/shared/entity/tech-skill/TechSkillsTabNav.module.scss";
// React
import { FC } from "react";
// Interfaces
import { TechSkillsTabNavProps } from "@/core/interfaces";

const TechSkillsTabNav: FC<TechSkillsTabNavProps> = ({
  categories,
  currentCategory,
  onTabClickFunc,
}) => {
  return (
    <nav className={techSkillsTabNavStyles.container}>
      <ul className={techSkillsTabNavStyles.wrapper}>
        {[...categories].map((category) => {
          const isSelected = currentCategory === category;
          return (
            <li
              key={category}
              onClick={() => onTabClickFunc(category)}
              style={{ opacity: isSelected ? "1" : "0.5" }}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TechSkillsTabNav;
