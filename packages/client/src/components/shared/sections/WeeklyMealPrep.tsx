// Components
import MealPrepView from "../entity/view/MealPrepView";
import PageSectionWrapper from "./PageSectionWrapper";
// Data
import { weeklyMealPrepSectionData } from "@/data";
// React
import { FC } from "react";
// Interfaces
import { WeeklyMealPrepProps } from "@/core/interfaces";
// Translations
import { useTranslations } from "next-intl";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";

const WeeklyMealPrep: FC<WeeklyMealPrepProps> = ({
  weeklyMealPrep,
  isError,
  isLoading,
}) => {
  const translations = useTranslations("common.weeklyMealPrep");

  const translatedData = translateGivenSectionDataType(
    translations,
    weeklyMealPrepSectionData,
  );

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
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
