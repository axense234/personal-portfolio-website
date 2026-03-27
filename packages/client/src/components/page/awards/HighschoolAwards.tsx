"use client";
// SCSS
import highschoolAwardsStyles from "@/scss/components/page/awards/HighschoolAwards.module.scss";
// Data
import { awardsPageHighschoolAwardsSectionData } from "@/data";
// Zustadaolwdnawoidjawpidwad
import { useGeneralStore } from "@/zustand/general/context";
// Components
import ProjectView from "@/components/shared/entity/view/ProjectView";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";

const Awards = () => {
  const { getProjectsData } = useGeneralStore((state) => state);

  return (
    <div className={highschoolAwardsStyles.awards}>
      {getProjectsData?.projects?.map((project, index) => {
        return (
          <ProjectView
            viewType="awards"
            key={project.id}
            displayMode="static"
            project={project}
            index={index}
            isError={getProjectsData?.isError}
            isLoading={getProjectsData?.isLoading}
          />
        );
      })}
    </div>
  );
};

const HighschoolAwards = () => {
  return (
    <PageSectionWrapper pageSectionData={awardsPageHighschoolAwardsSectionData}>
      <Awards />
    </PageSectionWrapper>
  );
};

export default HighschoolAwards;
