// Interfaces
import { TechSkillsTabOptionsProps } from "@/core/interfaces";
// SCSS
import techSkillsTabOptionsStyles from "@/scss/components/shared/TechSkillsTabOptions.module.scss";
// React
import { FC } from "react";
// Next
import Image from "next/image";

const TechSkillsTabOptions: FC<TechSkillsTabOptionsProps> = ({
  skills,
  currentSkill,
  onTabOptionClickFunc,
}) => {
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
                height={48}
                width={128}
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
