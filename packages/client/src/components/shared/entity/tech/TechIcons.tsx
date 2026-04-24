// Hooks
import { useGetTech, useGetWindowWidth } from "@/hooks";
// SCSS
import techIconsStyles from "@/scss/components/shared/entity/tech/TechIcons.module.scss";
// Components
import TechCategory from "./TechCategory";
import ErrorInterface from "../../sections/ErrorInterface";
import LoadingInterface from "../../sections/LoadingInterface";
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
  const windowWidth = useGetWindowWidth();
  const iconSize = windowWidth && windowWidth <= 900 ? 32 : 40;
  const { isError, isLoading, tech } = useGetTech();

  if (isError) {
    return <ErrorInterface isError={isError} />;
  }

  if (isLoading) {
    return (
      <LoadingInterface isLoading={isLoading} message="Loading Tech Icons..." />
    );
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
              iconHeight={iconSize}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TechIcons;
