import { MealPrepWithIngredients } from "@personal-portfolio-website/shared";

export const sortMealPrepsByKey = (
  mealPreps: MealPrepWithIngredients[],
  mealPrepPropertyKey: string,
) => {
  return [...mealPreps].sort((p1, p2) => {
    const first = p1[mealPrepPropertyKey];
    const second = p2[mealPrepPropertyKey];

    let firstSpecifier;
    let secondSpecifier;

    switch (typeof first) {
      case "string":
        firstSpecifier = first.toLowerCase();
        secondSpecifier = second.toLowerCase();
        break;
      case "number":
        firstSpecifier = first;
        secondSpecifier = second;
        break;
      default:
        firstSpecifier = String(first);
        secondSpecifier = String(second);
        break;
    }

    if (firstSpecifier > secondSpecifier) {
      return 1;
    }
    if (firstSpecifier < secondSpecifier) {
      return -1;
    }
    return 0;
  });
};
