import { TechSkillWhereUniqueInput } from '@personal-portfolio-website/shared';

export const connectProjectTech = (
  techIds: string[],
): TechSkillWhereUniqueInput[] => {
  return techIds.map((techId) => {
    return {
      tech_id: techId,
    };
  });
};
