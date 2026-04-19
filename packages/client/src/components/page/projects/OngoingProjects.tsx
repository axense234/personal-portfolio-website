// Components
import ViewBasedPageHero from "@/components/shared/heros/ViewBasedPageHero";
// Types
import { SectionDataType } from "@/core/types";
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

  const translatedData: SectionDataType = {
    ...projectsPageOngoingProjectsContentData,
    title: translations("title"),
    paragraphs: translations.has("paragraphs")
      ? translations.raw("paragraphs")
      : undefined,
    subtitle: translations.has("subtitle")
      ? translations.raw("subtitle")
      : undefined,
    buttons: projectsPageOngoingProjectsContentData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

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
