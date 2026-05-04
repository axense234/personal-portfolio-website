// Shared
import { ProjectWithEverything } from "@personal-portfolio-website/shared";
// Helpers
import { filterProjectsByTech } from "./filterProjectsByTech";
import { sortProjectsByKey } from "./sortProjects";
// Types
import {
  SelectFormControlProps,
  SortByFormControlProps,
} from "@/core/interfaces";

export const queryProjects = (
  projects: ProjectWithEverything[],
  filter: string[],
  sort: SortByFormControlProps,
  search: string,
) => {
  let queriedProjects = projects;
  // filter
  queriedProjects = filterProjectsByTech(queriedProjects, filter);
  // sort
  const sortCriteria = Array.from(
    (sort.sortingOptions as Map<number, SelectFormControlProps>).values(),
  ).reverse();
  for (const option of sortCriteria) {
    queriedProjects = sortProjectsByKey(queriedProjects, option.current);
  }
  // search
  queriedProjects = queriedProjects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase()),
  );

  return queriedProjects;
};
