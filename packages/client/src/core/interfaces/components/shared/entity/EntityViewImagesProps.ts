import { MealPrepWithIngredients } from "@personal-portfolio-website/shared";

export interface EntityViewImagesProps {
  images: string[];

  entityType: "meal-prep" | "project-awards" | "project-images";

  entity?: MealPrepWithIngredients;

  currentEntityImage?: string;
  setCurrentEntityImage?: (img: string) => void;

  allowMealPrepImagesOverlay?: boolean;
}
