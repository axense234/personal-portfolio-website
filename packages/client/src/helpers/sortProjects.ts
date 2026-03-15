import { ProjectWithEverything } from "@personal-portfolio-website/shared";

export const sortProjectsByKey = (
  projects: ProjectWithEverything[],
  projectPropertyKey: string,
) => {
  return projects.sort((p1, p2) => {
    const first = p1[projectPropertyKey];
    const second = p2[projectPropertyKey];

    let firstSpecifier;
    let secondSpecifier;

    switch (typeof first) {
      case "string":
        firstSpecifier = first.toLowerCase();
        secondSpecifier = second.toLowerCase();
        break;
      case "number":
        firstSpecifier = first;
        secondSpecifier = second;
        break;
      default:
        break;
    }

    if (firstSpecifier > secondSpecifier) {
      return 1;
    }

    if (firstSpecifier < secondSpecifier) {
      return -1;
    }

    return 0;
  });
};
