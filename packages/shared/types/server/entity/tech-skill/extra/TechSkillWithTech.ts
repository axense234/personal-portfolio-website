import { Prisma } from "../../../../prisma/client";

export type TechSkillWithTech = Prisma.TechSkillGetPayload<{
  include: {
    tech: true;
  };
}>;
