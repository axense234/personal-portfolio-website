// Components
import ViewBasedPageHero from "@/components/shared/heros/ViewBasedPageHero";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";
// Data
import { projectsPageOngoingProjectsContentData } from "@/data";
// Zustand
import { useGeneralStore } from "@/zustand/general";
// Translations
import { useTranslations } from "next-intl";

const OngoingProjects = () => {
  const {
    currentOngoingProjectId,
    setCurrentOngoingProjectId,
    currentOngoingProjectImage,
    setCurrentOngoingProjectImage,
    getProjectsData,
  } = useGeneralStore((state) => state);

  const ongoingProjects = getProjectsData?.projects?.filter(
    (project) => project.project_phase,
  );

  const translations = useTranslations("projects.sections.ongoingProjects");

  const translatedData = translateGivenSectionDataType(
    translations,
    projectsPageOngoingProjectsContentData,
  );

  return (
    <ViewBasedPageHero
      heroData={translatedData}
      page="projects"
      sectionType="normal"
      currentEntityId={currentOngoingProjectId}
      setCurrentEntityId={setCurrentOngoingProjectId}
      currentEntityImage={currentOngoingProjectImage}
      setCurrentEntityImage={setCurrentOngoingProjectImage}
      entities={ongoingProjects}
      isError={getProjectsData.isError}
      isLoading={getProjectsData.isLoading}
    />
  );
};

export default OngoingProjects;
