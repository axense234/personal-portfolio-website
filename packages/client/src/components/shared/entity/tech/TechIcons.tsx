// Hooks
import { useGetTech } from "@/hooks";
// SCSS
import techIconsStyles from "@/scss/components/shared/entity/tech/TechIcons.module.scss";
// Components
import TechCategory from "./TechCategory";
// React
import { FC } from "react";
// Interfaces
import { TechIconsProps } from "@/core/interfaces";

const TechIcons: FC<TechIconsProps> = ({
  isFunctional,
  onTechIconClick,
  isFancy,
  selectedTech,
}) => {
  const { isError, isLoading, tech } = useGetTech();

  if (isError) {
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
  }

  const techCategories = Array.from(new Set(tech?.map((t) => t.category)));

  return (
    <ul className={isFancy ? techIconsStyles.fancy : techIconsStyles.container}>
      {techCategories?.map((category, index) => {
        const skillsByCategory = tech.filter((t) => t.category === category);

        return (
          <li key={index}>
            <TechCategory
              label={category}
              skills={skillsByCategory}
              isFunctional={isFunctional}
              onTechIconClick={onTechIconClick}
              selectedTech={selectedTech}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TechIcons;
