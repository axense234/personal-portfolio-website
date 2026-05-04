import { SectionDataType } from "@/core/types";

export const weeklyMealPrepSectionData: SectionDataType = {
  title: "Weekly Meal Prep",
  paragraphs: [
    "I do indeed like cooking up some meals in advance at least once a week. They taste better than they look. Yummy. Very Yummy Yes.",
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
