// SCSS
import mealPrepDetailsStyles from "@/scss/components/shared/MealPrepDetails.module.scss";
// React
import { FC } from "react";
// Interfaces
import { MealPrepDetailsProps } from "@/core/interfaces";
// Helpers
import { dateToCustomFormat, ingredientToText } from "@/helpers";

const MealPrepDetails: FC<MealPrepDetailsProps> = ({
  cookedAt,
  coverage,
  ingredients,
  name,
}) => {
  return (
    <div className={mealPrepDetailsStyles.container}>
      <div className={mealPrepDetailsStyles.intro}>
        <h4 title={name} aria-label={name}>
          {name}
        </h4>
        <p>{dateToCustomFormat(new Date(cookedAt))}</p>
      </div>
      <div className={mealPrepDetailsStyles.coverage}>
        <h5>Coverage:</h5>
        <p>{coverage} days</p>
      </div>
      <div className={mealPrepDetailsStyles.ingredientsWrapper}>
        <h5>Ingredients Used:</h5>
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

export default MealPrepDetails;
