"use client";
// Data
import { aboutPageTechnicalSkillsSectionData } from "@/data";
// Components
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
import TechSkills from "@/components/shared/entity/tech-skill/TechSkills";
// Hooks
import { useGetTechSkills } from "@/hooks";

const AboutTechnicalSkills = () => {
  const { techSkills, isError, isLoading } = useGetTechSkills();

  if (isError) {
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
  }

  return (
    <PageSectionWrapper pageSectionData={aboutPageTechnicalSkillsSectionData}>
      <TechSkills techSkills={techSkills} />
    </PageSectionWrapper>
  );
};

export default AboutTechnicalSkills;
