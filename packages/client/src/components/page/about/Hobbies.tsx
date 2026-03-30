"use client";
// SCSS
import hobbiesStyles from "@/scss/components/page/about/Hobbies.module.scss";
// Data
import { aboutPageHobbiesContentData } from "@/data";
// Components
import Card from "@/components/shared/entity/Card";
// Hooks
import { useGetWindowWidth } from "@/hooks";

const Hobbies = () => {
  const windowWidth = useGetWindowWidth();
  const shouldHobbiesUseGrid = windowWidth && windowWidth <= 900 ? false : true;
  const containerClass = shouldHobbiesUseGrid ? "grid" : "hobbies";

  return (
    <ul className={hobbiesStyles[containerClass]}>
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
