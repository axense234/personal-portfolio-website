"use client";
// Components
import TechIcons from "@/components/shared/entity/tech/TechIcons";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";
// Data
import { homePageTechnicalSkillsSectionData } from "@/data";
// Translations
import { useTranslations } from "next-intl";

const HomeTechnicalSkills = () => {
  const translations = useTranslations("home.sections.technicalSkills");

  const translatedData = translateGivenSectionDataType(
    translations,
    homePageTechnicalSkillsSectionData,
  );

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <TechIcons isFunctional={false} isFancy={false} />
    </PageSectionWrapper>
  );
};

export default HomeTechnicalSkills;
