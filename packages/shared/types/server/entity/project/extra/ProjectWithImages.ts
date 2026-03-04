import { Prisma } from "../../../../prisma/client";

export type ProjectWithImages = Prisma.ProjectGetPayload<{
  include: {
    images: true;
  };
}>;
