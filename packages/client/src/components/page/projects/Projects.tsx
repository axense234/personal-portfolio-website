// Data
import { projectsPageProjectsSectionData } from "@/data";
// Components
import ProjectsDashboard from "./ProjectsDashboard";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";

const Projects = () => {
  return (
    <PageSectionWrapper pageSectionData={projectsPageProjectsSectionData}>
      <ProjectsDashboard />
    </PageSectionWrapper>
  );
};

export default Projects;
