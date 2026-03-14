// SCSS
import projectsStyles from "@/scss/components/page/projects/Projects.module.scss";
// Data
import { projectsPageProjectsSectionData } from "@/data";
// Components
import ProjectsDashboard from "./ProjectsDashboard";

const Projects = () => {
  const { title, paragraphs } = projectsPageProjectsSectionData;

  return (
    <section className={projectsStyles.container}>
      <div className={projectsStyles.intro}>
        <h2 title={title} aria-label={title}>
          {title}
        </h2>
        {paragraphs?.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
      <ProjectsDashboard />
    </section>
  );
};

export default Projects;
