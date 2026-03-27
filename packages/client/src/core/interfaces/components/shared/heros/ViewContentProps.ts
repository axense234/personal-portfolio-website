import {
  MealPrepWithIngredients,
  ProjectWithEverything,
} from "@personal-portfolio-website/shared";

export interface ViewContentProps {
  page: "projects" | "meal-prep" | "awards";

  currentEntityId: string;

  currentEntityImage: string;
  setCurrentEntityImage: (image: string) => void;

  isError: boolean;
  isLoading: boolean;

  entities: ProjectWithEverything[] | MealPrepWithIngredients[];
}
