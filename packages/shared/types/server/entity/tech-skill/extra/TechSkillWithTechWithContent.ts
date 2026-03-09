import { Prisma } from "../../../../prisma/client";

export type TechSkillWithTechWithContent = Prisma.TechSkillGetPayload<{
  include: {
    tech: true;
    content: { include: { sections: true } };
  };
}>;
