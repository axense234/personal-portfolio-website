"use client";
// SCSS
import galleryStyles from "@/scss/components/page/meal-prep/Gallery.module.scss";
// Components
import EntityNavigationBar from "@/components/shared/entity/EntityNavigationBar";
import ErrorInterface from "@/components/shared/sections/ErrorInterface";
import LoadingInterface from "@/components/shared/sections/LoadingInterface";
import EntityViewImages from "@/components/shared/entity/EntityViewImages";
// State
import { useGeneralStore } from "@/zustand/general";

const Gallery = () => {
  const { getMealPrepsData } = useGeneralStore((state) => state);

  const { isError, isLoading, mealPreps } = getMealPrepsData;

  if (isError) {
    return <ErrorInterface isError={isError} />;
  }

  if (isLoading) {
    return (
      <LoadingInterface isLoading={isLoading} message="Loading Projects..." />
    );
  }
  return (
    <div className={galleryStyles.container}>
      {/* <EntityNavigationBar />  TODO*/}
      <ul className={galleryStyles.images}>
        {mealPreps?.map((mealPrep) => {
          return (
            <li key={mealPrep.id}>
              <EntityViewImages
                images={mealPrep.images}
                entityType="meal-prep"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;
