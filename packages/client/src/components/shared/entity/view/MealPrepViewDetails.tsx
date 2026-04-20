// SCSS
import mealPrepDetailsStyles from "@/scss/components/shared/entity/view/MealPrepViewDetails.module.scss";
// React
import { FC } from "react";
// Interfaces
import { MealPrepViewDetailsProps } from "@/core/interfaces";
// Helpers
import { dateToCustomFormat, ingredientToText } from "@/helpers";
// Translations
import { useTranslations } from "next-intl";

const MealPrepViewDetails: FC<MealPrepViewDetailsProps> = ({
  currentMealPrep,
}) => {
  const { name, cookedAt, coverage, ingredients } = currentMealPrep;

  const translations = useTranslations("common.mealPrepViewDetails");

  return (
    <div className={mealPrepDetailsStyles.container}>
      <div className={mealPrepDetailsStyles.intro}>
        <h4 title={name} aria-label={name}>
          {name}
        </h4>
        <p>{dateToCustomFormat(new Date(cookedAt))}</p>
      </div>
      <div className={mealPrepDetailsStyles.coverage}>
        <h5>{translations("coverageLabel")}</h5>
        <p>{translations("coverageValue", { coverage })}</p>
      </div>
      <div className={mealPrepDetailsStyles.ingredientsWrapper}>
        <h5>{translations("ingredientsUsedLabel")}</h5>
        <ul className={mealPrepDetailsStyles.ingredients}>
          {ingredients?.map((ingredient) => {
            const ingredientLabel = ingredientToText(ingredient);
            return <li key={ingredient.id}>{ingredientLabel}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MealPrepViewDetails;
