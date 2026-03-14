"use client";
// SCSS
import projectsPageStyles from "@/scss/components/page/projects/ProjectsPage.module.scss";
// Components
import OngoingProjects from "./OngoingProjects";
import Projects from "./Projects";
import ProjectsHero from "./ProjectsHero";
// Hooks
import { useGetProjects, useSetCurrentEntityIdBasedOnData } from "@/hooks";
import { useGeneralStore } from "@/zustand/general";

const ProjectsPage = () => {
  useGetProjects();

  const { setCurrentProjectId, getProjectsData, currentProjectId } =
    useGeneralStore((state) => state);

  useSetCurrentEntityIdBasedOnData(
    getProjectsData,
    currentProjectId,
    setCurrentProjectId,
  );

  return (
    <section className={projectsPageStyles.container}>
      <ProjectsHero />
      <Projects />
      <OngoingProjects />
    </section>
  );
};

export default ProjectsPage;
