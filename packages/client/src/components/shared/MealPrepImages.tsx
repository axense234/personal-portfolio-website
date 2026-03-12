// Interfaces
import { MealPrepImagesProps } from "@/core/interfaces";
// Next
import Image from "next/image";
// SCSS
import mealPrepImagesStyles from "@/scss/components/shared/MealPrepImages.module.scss";
// React
import { FC } from "react";
// Zuuuuuuuuuuuuuuuuuuuuustand or smth idk
import { useGeneralStore } from "@/zustand/general/context";

// REFACTOR THIS
const MealPrepImages: FC<MealPrepImagesProps> = ({ images, mealPrepName }) => {
  const {
    weeklyMealPrepCurrentImageIndex,
    handleWeeklyMealPrepImagesCarousel,
  } = useGeneralStore((state) => state);

  if (!images || images.length < 1) {
    return <div>no images</div>;
  }

  return (
    <div className={mealPrepImagesStyles.container}>
      <Image
        width={480}
        height={640}
        alt={`${mealPrepName} Image`}
        src={images[weeklyMealPrepCurrentImageIndex]}
      />
      <ul className={mealPrepImagesStyles.navDots}>
        {images.map((_, index) => {
          const isSelected = weeklyMealPrepCurrentImageIndex == index;
          const buttonColor = isSelected ? "red" : "gray";
          return (
            <li
              key={index}
              style={{ backgroundColor: buttonColor }}
              onClick={() => {
                handleWeeklyMealPrepImagesCarousel(index);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MealPrepImages;
