"use client";
// Data
import { aboutPageTechnicalSkillsSectionData } from "@/data";
// Components
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
import TechSkills from "@/components/shared/entity/tech-skill/TechSkills";
import ErrorInterface from "@/components/shared/sections/ErrorInterface";
import LoadingInterface from "@/components/shared/sections/LoadingInterface";
// Hooks
import { useGetTechSkills } from "@/hooks";
// Translations
import { useTranslations } from "next-intl";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";

const AboutTechnicalSkills = () => {
  const { techSkills, isError, isLoading } = useGetTechSkills();

  const translations = useTranslations("about.sections.technicalSkills");

  const translatedData = translateGivenSectionDataType(
    translations,
    aboutPageTechnicalSkillsSectionData,
  );

  if (isError) {
    return <ErrorInterface isError={isError} />;
  }

  if (isLoading) {
    return (
      <LoadingInterface
        isLoading={isLoading}
        message="Loading Tech Skills..."
      />
    );
  }

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <TechSkills techSkills={techSkills} />
    </PageSectionWrapper>
  );
};

export default AboutTechnicalSkills;
