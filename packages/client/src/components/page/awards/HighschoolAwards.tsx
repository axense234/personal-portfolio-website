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
// Types
import { SectionDataType } from "@/core/types";
// Translations
import { useTranslations } from "next-intl";

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
  const translations = useTranslations("awards.sections.bronzeMedal");

  const translatedData: SectionDataType = {
    ...awardsPageHighschoolAwardsSectionData,
    title: translations("title"),
    paragraphs: translations.has("paragraphs")
      ? translations.raw("paragraphs")
      : undefined,
    subtitle: translations.has("subtitle")
      ? translations.raw("subtitle")
      : undefined,
    buttons: awardsPageHighschoolAwardsSectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <Awards />
    </PageSectionWrapper>
  );
};

export default HighschoolAwards;
