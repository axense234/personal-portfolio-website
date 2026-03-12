"use client";
// SCSS
import highschoolAwardsStyles from "@/scss/components/page/awards/HighschoolAwards.module.scss";
// Data
import { awardsPageHighschoolAwardsSectionData } from "@/data";
// Zustadaolwdnawoidjawpidwad
import { useGeneralStore } from "@/zustand/general/context";
// Components
import ProjectView from "@/components/shared/ProjectView";

const Awards = () => {
  const { getProjectsData } = useGeneralStore((state) => state);

  if (getProjectsData.isError) {
    return <div>is error</div>;
  }

  if (getProjectsData.isLoading) {
    return <div>is loading</div>;
  }

  return (
    <div className={highschoolAwardsStyles.awards}>
      {getProjectsData?.projects?.map((project) => {
        return (
          <ProjectView
            viewType="awards"
            key={project.id}
            displayMode="static"
            project={project}
          />
        );
      })}
    </div>
  );
};

const HighschoolAwards = () => {
  const { title, paragraphs } = awardsPageHighschoolAwardsSectionData;

  return (
    <section className={highschoolAwardsStyles.container}>
      <div className={highschoolAwardsStyles.intro}>
        <h2 title={title} aria-label={title}>
          {title}
        </h2>
        {paragraphs?.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
      <Awards />
    </section>
  );
};

export default HighschoolAwards;
