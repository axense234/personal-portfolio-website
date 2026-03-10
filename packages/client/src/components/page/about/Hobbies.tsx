// SCSS
import hobbiesStyles from "@/scss/components/page/about/Hobbies.module.scss";
// Data
import { aboutPageHobbiesContentData } from "@/data";
// Components
import Card from "@/components/shared/Card";

const Hobbies = () => {
  return (
    <ul className={hobbiesStyles.container}>
      {aboutPageHobbiesContentData?.map((hobby, index) => {
        return (
          <li key={index}>
            <Card {...hobby} />;
          </li>
        );
      })}
    </ul>
  );
};

export default Hobbies;
