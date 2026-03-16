// SCSS
import weeklyMealPrepStyles from "@/scss/components/shared/WeeklyMealPrep.module.scss";
// Components
import LinkButton from "./LinkButton";
import MealPrepView from "./MealPrepView";
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
  const { buttons, paragraphs, title } = weeklyMealPrepSectionData;

  return (
    <section className={weeklyMealPrepStyles.container}>
      <div className={weeklyMealPrepStyles.content}>
        <div className={weeklyMealPrepStyles.intro}>
          <h2 title={title} aria-label={title}>
            {title}
          </h2>
          {paragraphs?.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
        <MealPrepView
          displayMode="static"
          mealPrep={weeklyMealPrep}
          isError={isError}
          isLoading={isLoading}
        />
      </div>
      {buttons?.map((button) => {
        return <LinkButton {...button} key={button.id} />;
      })}
    </section>
  );
};

export default WeeklyMealPrep;
