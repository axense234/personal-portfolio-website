// Components
import EntityViewImages from "./EntityViewImages";
import ProjectViewDetails from "./ProjectViewDetails";
// SCSS
import projectViewStyles from "@/scss/components/shared/ProjectView.module.scss";

const ProjectView = () => {
  return (
    <div className={projectViewStyles.container}>
      <ProjectViewDetails />
      <EntityViewImages />
    </div>
  );
};

export default ProjectView;
