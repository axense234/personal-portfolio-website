import { Prisma } from "../../../../prisma/client";

export type ProjectWithEverything = Prisma.ProjectGetPayload<{
  include: {
    images: true;
    awards: true;
    skills: { include: { tech: true } };
  };
}>;
