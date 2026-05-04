"use client";
// React
import { FC, useState } from "react";
// Interfaces
import { EntityViewImagesProps } from "@/core/interfaces";
// Next
import Image from "next/image";
// SCSS
import entityViewImagesStyles from "@/scss/components/shared/entity/EntityViewImages.module.scss";
// Components
import EntityNavigationDots from "./EntityNavigationDots";
import MealPrepViewDetails from "./view/MealPrepViewDetails";
// Hooks
import {
  useCalculateEntityViewImagesProportions,
  useGetWindowWidth,
} from "@/hooks";
// Data
import { entityViewImagesImageAlt } from "@/data";
// Icons
import { FaWindowClose } from "react-icons/fa";

const EntityViewImages: FC<EntityViewImagesProps> = ({
  entity,
  images,
  entityType,
  currentEntityImage,
  setCurrentEntityImage,
  allowMealPrepImagesOverlay = false,
}) => {
  const windowWidth = useGetWindowWidth();
  const reservedImageAmount = useCalculateEntityViewImagesProportions(
    entityType,
    windowWidth || 1800, // -> not the best way of doing things but ya know
  );

  const imageUsed = currentEntityImage || images[0];

  const [isMouseOverImage, setIsMouseOverImage] = useState<boolean>(false);
  const [showDetailsOverlay, setShowDetailsOverlay] = useState<boolean>(false);

  const [currentEntityImageLocal, setCurrentEntityImageLocal] =
    useState<string>(images[0]);

  const currentEntityImageUsed = currentEntityImage
    ? currentEntityImage
    : currentEntityImageLocal;

  const setCurrentEntityImageUsed = setCurrentEntityImage
    ? setCurrentEntityImage
    : setCurrentEntityImageLocal;

  if (!imageUsed) {
    return <div>loading image</div>;
  }

  return (
    <div
      className={entityViewImagesStyles.container}
      onMouseEnter={() => setIsMouseOverImage(true)}
      onMouseLeave={() => setIsMouseOverImage(false)}
    >
      {entityType == "meal-prep" && allowMealPrepImagesOverlay && entity && (
        <div
          className={entityViewImagesStyles.overlay}
          style={{ opacity: showDetailsOverlay ? "0.9" : "0" }}
        >
          <FaWindowClose
            title="Close."
            aria-label="Close."
            onClick={() => setShowDetailsOverlay(false)}
          />
          <MealPrepViewDetails currentMealPrep={entity} scale={0.7} />
        </div>
      )}
      {entityType == "meal-prep" &&
        allowMealPrepImagesOverlay &&
        !showDetailsOverlay && (
          <Image
            width={64}
            height={64}
            src={"/misc/lightbulb-png-836.png"}
            alt={"Details"}
            title="Details"
            aria-label="Details"
            className={entityViewImagesStyles.icon}
            style={{ opacity: isMouseOverImage ? "0.9" : "0" }}
            onClick={() => setShowDetailsOverlay(true)}
          />
        )}
      <Image
        width={reservedImageAmount.width}
        height={reservedImageAmount.height}
        src={currentEntityImageUsed}
        alt={entityViewImagesImageAlt}
      />
      <EntityNavigationDots
        currentEntityId={currentEntityImageUsed}
        setCurrentEntityId={setCurrentEntityImageUsed}
        entityIds={images}
        useCase="images"
      />
    </div>
  );
};

export default EntityViewImages;
