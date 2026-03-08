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
          const isSelected = currentSkill == skill.label;
          return (
            <li
              key={skill.id}
              onClick={() => onTabOptionClickFunc(skill.label)}
              style={{ opacity: isSelected ? "1" : "0.5" }}
            >
              <Image
                alt={`${skill.label} Icon`}
                src={skill.local_rel}
                height={48}
                width={128}
              />
              <span>{skill.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechSkillsTabOptions;
