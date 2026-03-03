// Components
import LinkButton from "@/components/shared/LinkButton";
// SCSS
import homeFeaturedProjectsStyles from "@/scss/components/page/home/HomeFeaturedProjects.module.scss";

const FeaturedProjects = () => {
  return <div>featured projects</div>;
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
