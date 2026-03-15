import { ProjectWithEverything } from "@personal-portfolio-website/shared";

export const filterProjectsByTech = (
  projects: ProjectWithEverything[],
  techIds: string[],
) => {
  return projects?.filter((project) =>
    techIds.every((techId) =>
      project.skills.map((s) => s.tech_id).includes(techId),
    ),
  );
};
