// Shared
import { MealPrepWithIngredients } from "@personal-portfolio-website/shared";
// Types
import {
  SelectFormControlProps,
  SortByFormControlProps,
} from "@/core/interfaces";
import { sortMealPrepsByKey } from "./sortMealPreps";

export const queryMealPreps = (
  mealPreps: MealPrepWithIngredients[],
  sort: SortByFormControlProps,
  search: string,
) => {
  let queriedMealPreps = mealPreps;
  // sort
  const sortCriteria = Array.from(
    (sort.sortingOptions as Map<number, SelectFormControlProps>).values(),
  ).reverse();

  for (const option of sortCriteria) {
    queriedMealPreps = sortMealPrepsByKey(queriedMealPreps, option.current);
  }

  // search
  queriedMealPreps = queriedMealPreps.filter((mealPrep) =>
    mealPrep.name.toLowerCase().includes(search.toLowerCase()),
  );

  return queriedMealPreps;
};
