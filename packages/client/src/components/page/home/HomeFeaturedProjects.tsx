"use client";
// Components
import LinkButton from "@/components/shared/LinkButton";
import ProjectCards from "@/components/shared/ProjectCards";
// Data
import { homePageFeaturedProjectsSectionData } from "@/data";
// Hooks
import { useGetProjects } from "@/hooks";
// SCSS
import homeFeaturedProjectsStyles from "@/scss/components/page/home/HomeFeaturedProjects.module.scss";
// zus
import { useGeneralStore } from "@/zustand/general/context";

const FeaturedProjects = () => {
  useGetProjects(["FEATURED"]);

  const { isError, isLoading, projects } = useGeneralStore(
    (state) => state.getProjectsData,
  );

  if (isError) {
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
  }

  return <ProjectCards projects={projects} />;
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
          {paragraphs?.map((paragraph, index) => {
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
