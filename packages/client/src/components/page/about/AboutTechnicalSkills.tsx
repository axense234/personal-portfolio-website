"use client";
// Data
import { aboutPageTechnicalSkillsSectionData } from "@/data";
// Components
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
import TechSkills from "@/components/shared/entity/tech-skill/TechSkills";
// Hooks
import { useGetTechSkills } from "@/hooks";
// Translations
import { useTranslations } from "next-intl";
// Types
import { SectionDataType } from "@/core/types";

const AboutTechnicalSkills = () => {
  const { techSkills, isError, isLoading } = useGetTechSkills();

  const translations = useTranslations("about.sections.technicalSkills");

  const translatedData: SectionDataType = {
    ...aboutPageTechnicalSkillsSectionData,
    title: translations("title"),
    paragraphs: translations.has("paragraphs")
      ? translations.raw("paragraphs")
      : undefined,
    subtitle: translations.has("subtitle")
      ? translations.raw("subtitle")
      : undefined,
    buttons: aboutPageTechnicalSkillsSectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  if (isError) {
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
  }

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <TechSkills techSkills={techSkills} />
    </PageSectionWrapper>
  );
};

export default AboutTechnicalSkills;
