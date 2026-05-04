"use client";
// Components
import OngoingProjects from "./OngoingProjects";
import Projects from "./Projects";
import ProjectsHero from "./ProjectsHero";
import StandardPageWrapper from "../StandardPageWrapper";
// Hooks
import {
  useGetProjects,
  useGetTech,
  useSetCurrentEntityIdBasedOnData,
} from "@/hooks";
import { useGeneralStore } from "@/zustand/general";

const ProjectsPage = () => {
  useGetTech();
  useGetProjects();

  const { setCurrentProjectId, getProjectsData, currentProjectId } =
    useGeneralStore((state) => state);

  useSetCurrentEntityIdBasedOnData(
    { ...getProjectsData, entities: getProjectsData?.projects },
    currentProjectId,
    setCurrentProjectId,
  );

  return (
    <StandardPageWrapper>
      <ProjectsHero />
      <Projects />
      <OngoingProjects />
    </StandardPageWrapper>
  );
};

export default ProjectsPage;
