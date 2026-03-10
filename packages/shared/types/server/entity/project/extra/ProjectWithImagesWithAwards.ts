import { Prisma } from "../../../../prisma/client";

export type ProjectWithImagesWithAwards = Prisma.ProjectGetPayload<{
  include: {
    images: true;
    awards: true;
  };
}>;
