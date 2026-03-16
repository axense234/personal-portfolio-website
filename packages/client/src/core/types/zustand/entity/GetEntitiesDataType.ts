import {
  MealPrepWithIngredients,
  ProjectWithEverything,
} from "@personal-portfolio-website/shared";

export type GetEntitiesDataType = {
  isError: boolean;
  isLoading: boolean;
  entities: ProjectWithEverything[] | MealPrepWithIngredients[];
};
