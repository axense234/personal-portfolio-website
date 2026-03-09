"use client";
import Card from "@/components/shared/Card";
// Components
import LinkButton from "@/components/shared/LinkButton";
// Data
import { buttonColors, homePageFeaturedProjectsSectionData } from "@/data";
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
    <ul className={homeFeaturedProjectsStyles.projects}>
      {projects?.map((project, index) => {
        const buttonColorsCurrentColorIndex = index % buttonColors.length;
        const buttonColor = buttonColors[buttonColorsCurrentColorIndex];

        const cardProps = adaptProjectToCard(project, buttonColor);
        return (
          <li key={project.id}>
            <Card {...cardProps} />;
          </li>
        );
      })}
    </ul>
  );
};

const HomeFeaturedProjects = () => {
  const { buttons, paragraphs, title } = homePageFeaturedProjectsSectionData;
  return (
    <section className={homeFeaturedProjectsStyles.container}>
      <div className={homeFeaturedProjectsStyles.content}>
        <div className={homeFeaturedProjectsStyles.intro}>
          <h2 title={title} aria-label={title}>
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
        <FeaturedProjects />
      </div>
      {buttons?.map((button) => {
        return <LinkButton {...button} key={button.id} />;
      })}
    </section>
  );
};

export default HomeFeaturedProjects;
