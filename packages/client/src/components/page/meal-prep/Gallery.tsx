"use client";
// SCSS
import galleryStyles from "@/scss/components/page/meal-prep/Gallery.module.scss";
// Components
import ErrorInterface from "@/components/shared/sections/ErrorInterface";
import LoadingInterface from "@/components/shared/sections/LoadingInterface";
import EntityViewImages from "@/components/shared/entity/EntityViewImages";
import EntityNavigationBar from "@/components/shared/entity/EntityNavigationBar";
// State
import { useGeneralStore } from "@/zustand/general";
// Interfaces
import { SelectOption } from "@/core/interfaces";
// Hooks
import { useGetWindowWidth, useHandleEntityNavigationBarLogic } from "@/hooks";
// Helpers
import { queryMealPreps } from "@/helpers";

const Gallery = () => {
  const {
    getMealPrepsData,
    mealPrepsQueryData,
    setMealPrepsQueryDataSearch,
    setMealPrepsQueryDataSortBy,
    setMealPrepsQueryDataSortByOptions,
    setMealPrepsQueryDataSortByOption,
  } = useGeneralStore((state) => state);

  const { isError, isLoading, mealPreps } = getMealPrepsData;
  const { sortBy, search } = mealPrepsQueryData;

  const windowWidth = useGetWindowWidth();
  const searchFormControlFlow =
    windowWidth && windowWidth <= 600 ? "column" : "row";

  const searchFormControlData = search.searchFormControlData(
    search.current,
    (value: string) => setMealPrepsQueryDataSearch(value),
  );

  const sortByOptions: SelectOption[] = [
    { label: "Name", value: "name", specifier: "string" },
    { label: "Coverage", value: "coverage", specifier: "number" },
    { label: "Creation Date", value: "createdAt", specifier: "date" },
    { label: "Update Date", value: "updatedAt", specifier: "date" },
  ];

  useHandleEntityNavigationBarLogic(
    sortByOptions,
    setMealPrepsQueryDataSortBy,
    setMealPrepsQueryDataSortByOptions,
    setMealPrepsQueryDataSortByOption,
  );

  if (isError) {
    return <ErrorInterface isError={isError} />;
  }

  if (isLoading) {
    return (
      <LoadingInterface isLoading={isLoading} message="Loading Projects..." />
    );
  }

  const queriedMealPreps = queryMealPreps(mealPreps, sortBy, search.current);

  return (
    <div className={galleryStyles.container}>
      <EntityNavigationBar
        sort={sortBy}
        search={{ ...searchFormControlData, flow: searchFormControlFlow }}
      />
      <ul className={galleryStyles.images}>
        {queriedMealPreps?.map((mealPrep) => {
          return (
            <li key={mealPrep.id}>
              <EntityViewImages
                images={mealPrep.images}
                entityType="meal-prep"
                allowMealPrepImagesOverlay
                entity={mealPrep}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;
