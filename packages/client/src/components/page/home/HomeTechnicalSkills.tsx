"use client";
// Components
import TechIcons from "@/components/shared/entity/tech/TechIcons";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Data
import { homePageTechnicalSkillsSectionData } from "@/data";

const HomeTechnicalSkills = () => {
  return (
    <PageSectionWrapper pageSectionData={homePageTechnicalSkillsSectionData}>
      <TechIcons isFunctional={false} isFancy={false} />
    </PageSectionWrapper>
  );
};

export default HomeTechnicalSkills;
