// SCSS
import weeklyMealPrepStyles from "@/scss/components/shared/WeeklyMealPrep.module.scss";
// Components
import LinkButton from "./LinkButton";
import MealPrepView from "./MealPrepView";
// Data
import { weeklyMealPrepSectionData } from "@/data";

const WeeklyMealPrep = () => {
  const { buttons, paragraphs, title } = weeklyMealPrepSectionData;

  return (
    <section className={weeklyMealPrepStyles.container}>
      <div className={weeklyMealPrepStyles.content}>
        <div className={weeklyMealPrepStyles.intro}>
          <h2 title={title} aria-label={title}>
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
        <MealPrepView />
      </div>
      {buttons?.map((button) => {
        return <LinkButton {...button} key={button.id} />;
      })}
    </section>
  );
};

export default WeeklyMealPrep;
