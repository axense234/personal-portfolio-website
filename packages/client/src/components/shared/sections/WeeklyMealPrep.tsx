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
// Types
import { SectionDataType } from "@/core/types";

const WeeklyMealPrep: FC<WeeklyMealPrepProps> = ({
  weeklyMealPrep,
  isError,
  isLoading,
}) => {
  const translations = useTranslations("common.weeklyMealPrep");

  const translatedData: SectionDataType = {
    ...weeklyMealPrepSectionData,
    title: translations("title"),
    paragraphs: translations.raw("paragraphs"),
    buttons: weeklyMealPrepSectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };
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
