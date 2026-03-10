// Interfaces
import { FC } from "react";
import { TechSkillsTabViewProps } from "@/core/interfaces";
// SCSS
import techSkillsTabViewStyles from "@/scss/components/shared/TechSkillsTabView.module.scss";
// Components
import IconComponent from "./IconComponent";

const TechSkillsTabView: FC<TechSkillsTabViewProps> = ({
  currentTechSkill,
}) => {
  if (!currentTechSkill) {
    return <div>loading</div>;
  }

  return (
    <div className={techSkillsTabViewStyles.container}>
      <div className={techSkillsTabViewStyles.logo}>
        <IconComponent {...currentTechSkill.tech} height={64} />
      </div>
      <div className={techSkillsTabViewStyles.content}>
        <div className={techSkillsTabViewStyles.header}>
          <h4>{currentTechSkill.tech.label}</h4>
          <p>{currentTechSkill.tech.short_desc}</p>
        </div>
        <div className={techSkillsTabViewStyles.techContent}>
          {currentTechSkill.content?.sections.map((article) => {
            return (
              <div className={techSkillsTabViewStyles.article} key={article.id}>
                <h5>{article.title}</h5>
                <div className={techSkillsTabViewStyles.paragraphs}>
                  {article.paragraphs.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechSkillsTabView;
