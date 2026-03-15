// Shared
import { ProjectWithEverything } from "@personal-portfolio-website/shared";
// Helpers
import { filterProjectsByTech } from "./filterProjectsByTech";
import { sortProjectsByKey } from "./sortProjects";

export const queryProjects = (
  projects: ProjectWithEverything[],
  filter: string[],
  sort: string,
  search: string,
) => {
  let queriedProjects = projects;
  queriedProjects = filterProjectsByTech(queriedProjects, filter);
  queriedProjects = sortProjectsByKey(queriedProjects, sort);
  queriedProjects = queriedProjects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase()),
  );

  return queriedProjects;
};
