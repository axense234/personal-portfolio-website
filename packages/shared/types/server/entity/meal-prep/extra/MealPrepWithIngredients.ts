import { Prisma } from "../../../../prisma/client";

export type MealPrepWithIngredients = Prisma.MealPrepGetPayload<{
  include: {
    ingredients: true;
  };
}>;
