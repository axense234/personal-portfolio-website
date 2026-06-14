// Data
import { projectsPageProjectsSectionData } from "@/data";
// Components
import ProjectsDashboard from "./ProjectsDashboard";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Translations
import { useTranslations } from "next-intl";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";

const Projects = () => {
  const translations = useTranslations("projects.sections.projects");

  const translatedData = translateGivenSectionDataType(
    translations,
    projectsPageProjectsSectionData,
  );

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <ProjectsDashboard />
    </PageSectionWrapper>
  );
};

export default Projects;
