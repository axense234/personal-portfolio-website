// Interfaces
import { FC } from "react";
import { TechSkillsTabViewProps } from "@/core/interfaces";
// Data
import { technicalSkillsViewsData } from "@/data";
// SCSS
import techSkillsTabViewStyles from "@/scss/components/shared/TechSkillsTabView.module.scss";

const TechSkillsTabView: FC<TechSkillsTabViewProps> = ({
  currentTechSkill,
}) => {
  const currentViewData = technicalSkillsViewsData.find(
    (viewData) => viewData.matcher == currentTechSkill,
  );

  return (
    <div className={techSkillsTabViewStyles.container}>
      <div className={techSkillsTabViewStyles.logo}></div>
      <div className={techSkillsTabViewStyles.content}>
        <div className={techSkillsTabViewStyles.header}>
          <h4>{currentViewData?.matcher}</h4>
          <p>{currentViewData?.subtitle}</p>
        </div>
        <div className={techSkillsTabViewStyles.techContent}>
          {currentViewData?.articles?.map((article) => {
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
