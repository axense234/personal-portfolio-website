import { SectionDataType } from "@/core/types";

export const mealPrepsPageHeroContentData: SectionDataType = {
  title: "Meal Preps",
  subtitle: "unfathomable meals",
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
      dest: "/meal-prep",
      label: "Weekly Meal Prep",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
      dest: "/meal-prep",
      label: "Meals Gallery",
      size: "large",
    },
  ],
};
