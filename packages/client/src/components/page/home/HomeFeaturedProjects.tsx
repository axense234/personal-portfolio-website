"use client";
import Card from "@/components/shared/Card";
// Components
import LinkButton from "@/components/shared/LinkButton";
// Data
import { buttonColors } from "@/data";
// Helpers
import { adaptProjectToCard } from "@/helpers";
// Hooks
import { useGetProjects } from "@/hooks";
// SCSS
import homeFeaturedProjectsStyles from "@/scss/components/page/home/HomeFeaturedProjects.module.scss";

const FeaturedProjects = () => {
  const { projects, isError, isLoading } = useGetProjects();

  if (isError) {
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
  }

  return (
    <div className={homeFeaturedProjectsStyles.projects}>
      {projects.map((project, index) => {
        const buttonColorsCurrentColorIndex = (index % buttonColors.length) - 1;
        const buttonColor = buttonColors[buttonColorsCurrentColorIndex];

        const cardProps = adaptProjectToCard(project, buttonColor);
        return <Card {...cardProps} key={project.id} />;
      })}
    </div>
  );
};

const HomeFeaturedProjects = () => {
  return (
    <section className={homeFeaturedProjectsStyles.container}>
      <div className={homeFeaturedProjectsStyles.content}>
        <div className={homeFeaturedProjectsStyles.intro}>
          <h2>Featured Projects</h2>
          <p>
            Here are displayed some of my best / favorite web dev projects. Had
            a lot of fun working on them even tho I most likely consumed a bit
            too much pepsi max.
          </p>
        </div>
        <FeaturedProjects />
      </div>
      <LinkButton color="warning" dest="/projects" label="More Projects" />
    </section>
  );
};

export default HomeFeaturedProjects;
