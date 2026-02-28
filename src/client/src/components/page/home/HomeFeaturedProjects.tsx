"use client";
// Hooks
import useGetProjects from "@/hooks/api/github/useGetProjects";

const HomeFeaturedProjects = () => {
  const featuredProjects = useGetProjects({
    rawTopics: ["personal-project", "featured"],
  });

  if (!featuredProjects) {
    return <div>test undefined</div>;
  }

  return (
    <div>
      {featuredProjects?.projects?.map((project) => {
        return <div key={project.id}>{project.name}</div>;
      })}
    </div>
  );
};

export default HomeFeaturedProjects;
