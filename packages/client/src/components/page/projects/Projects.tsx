// Data
import { projectsPageProjectsSectionData } from "@/data";
// Components
import ProjectsDashboard from "./ProjectsDashboard";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Translations
import { useTranslations } from "next-intl";
// Types
import { SectionDataType } from "@/core/types";

const Projects = () => {
  const translations = useTranslations("projects.sections.projects");

  const translatedData: SectionDataType = {
    ...projectsPageProjectsSectionData,
    title: translations("title"),
    paragraphs: translations.raw("paragraphs"),
    buttons: projectsPageProjectsSectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <ProjectsDashboard />
    </PageSectionWrapper>
  );
};

export default Projects;
