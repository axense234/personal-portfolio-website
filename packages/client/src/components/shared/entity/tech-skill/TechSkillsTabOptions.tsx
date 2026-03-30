// Interfaces
import { TechSkillsTabOptionsProps } from "@/core/interfaces";
// SCSS
import techSkillsTabOptionsStyles from "@/scss/components/shared/entity/tech-skill/TechSkillsTabOptions.module.scss";
// React
import { FC } from "react";
// Next
import Image from "next/image";
// Hooks
import { useGetWindowWidth } from "@/hooks";

const TechSkillsTabOptions: FC<TechSkillsTabOptionsProps> = ({
  skills,
  currentSkill,
  onTabOptionClickFunc,
}) => {
  const windowWidth = useGetWindowWidth();
  const iconSize = windowWidth && windowWidth <= 900 ? 32 : 40;

  return (
    <div className={techSkillsTabOptionsStyles.container}>
      <ul className={techSkillsTabOptionsStyles.wrapper}>
        {skills?.map((skill) => {
          const isSelected = currentSkill?.id === skill.id;
          return (
            <li
              key={skill.id}
              onClick={() => onTabOptionClickFunc(skill)}
              style={{ opacity: isSelected ? "1" : "0.5" }}
            >
              <Image
                alt={`${skill.tech.label} Icon`}
                src={skill.tech.icon_src}
                height={iconSize}
                width={iconSize * 3}
              />
              <span>{skill.tech.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechSkillsTabOptions;
