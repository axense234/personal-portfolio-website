// Types
import { GeneralState, GeneralStore } from "@/core/types";
// Zustand
import { createStore } from "zustand/vanilla";
// Default Data
import { defaultInitState } from "./init";
// Actions
import {
  toggleColorTheme,
  handleWeeklyMealPrepImagesCarousel,
} from "./actions";

export const createGeneralStore = (
  initState: GeneralState = defaultInitState,
) => {
  return createStore<GeneralStore>()((set) => ({
    ...initState,
    toggleColorTheme: () => toggleColorTheme(set),
    handleWeeklyMealPrepImagesCarousel: (index: number) =>
      handleWeeklyMealPrepImagesCarousel(set, index),
  }));
};
