// SCSS
import techCategoryStyles from "@/scss/components/shared/TechCategory.module.scss";
// React
import { FC } from "react";
// Interfaces
import { TechCategoryProps, TechSkillProps } from "@/core/interfaces";
// Next
import Image from "next/image";
import Link from "next/link";

const TechSkill: FC<TechSkillProps> = ({ dest, label, rel }) => {
  return (
    <Link href={dest} className={techCategoryStyles.skill} target="_blank">
      <Image
        alt={label}
        title={label}
        aria-label={label}
        src={rel}
        height={48}
        width={128} // want this width for the fat ahh mongoose logo
      />
    </Link>
  );
};

const TechCategory: FC<TechCategoryProps> = ({ label, skills }) => {
  return (
    <div className={techCategoryStyles.container}>
      <h6>{label}</h6>
      <ul className={techCategoryStyles.skills}>
        {skills.map((skill) => {
          return (
            <li key={skill.id}>
              <TechSkill {...skill} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechCategory;
