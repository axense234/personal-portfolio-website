"use client";
// Components
import TechIcons from "@/components/shared/entity/tech/TechIcons";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Types
import { SectionDataType } from "@/core/types";
// Data
import { homePageTechnicalSkillsSectionData } from "@/data";
// Translations
import { useTranslations } from "next-intl";

const HomeTechnicalSkills = () => {
  const translations = useTranslations("home.sections.technicalSkills");

  const translatedData: SectionDataType = {
    ...homePageTechnicalSkillsSectionData,
    title: translations("title"),
    paragraphs: translations.raw("paragraphs"),
    buttons: homePageTechnicalSkillsSectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <TechIcons isFunctional={false} isFancy={false} />
    </PageSectionWrapper>
  );
};

export default HomeTechnicalSkills;
