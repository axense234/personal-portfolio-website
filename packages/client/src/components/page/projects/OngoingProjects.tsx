// Components
import ViewBasedPageHero from "@/components/shared/ViewBasedPageHero";
// Data
import { projectsPageOngoingProjectsContentData } from "@/data";
// Zustand
import { useGeneralStore } from "@/zustand/general";

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

  console.log(ongoingProjects);

  return (
    <ViewBasedPageHero
      heroData={projectsPageOngoingProjectsContentData}
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
