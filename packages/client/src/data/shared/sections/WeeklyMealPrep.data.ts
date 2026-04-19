import { SectionDataType } from "@/core/types";

export const weeklyMealPrepSectionData: SectionDataType = {
  title: "Weekly Meal Prep",
  paragraphs: [
    "I do indeed like cooking up some meals in advance at least once a week. It tastes even better than it looks. Yummy. Very Yummy Yes.",
  ],
  buttons: [
    {
      id: 1,
      colorSpecifier: "delete",
      dest: "/meal-prep",
      label: "Meals Gallery",
      size: "large",
    },
  ],
};
