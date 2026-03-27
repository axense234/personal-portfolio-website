// Components
import MealPrepView from "../entity/view/MealPrepView";
import PageSectionWrapper from "./PageSectionWrapper";
// Data
import { weeklyMealPrepSectionData } from "@/data";
// React
import { FC } from "react";
// Interfaces
import { WeeklyMealPrepProps } from "@/core/interfaces";

const WeeklyMealPrep: FC<WeeklyMealPrepProps> = ({
  weeklyMealPrep,
  isError,
  isLoading,
}) => {
  return (
    <PageSectionWrapper pageSectionData={weeklyMealPrepSectionData}>
      <MealPrepView
        displayMode="static"
        mealPrep={weeklyMealPrep}
        isError={isError}
        isLoading={isLoading}
      />
    </PageSectionWrapper>
  );
};

export default WeeklyMealPrep;
