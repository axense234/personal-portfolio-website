"use client";
// React
import { FC } from "react";
// Interfaces
import { EntityViewImagesProps } from "@/core/interfaces";
// Next
import Image from "next/image";
// SCSS
import entityViewImagesStyles from "@/scss/components/shared/entity/EntityViewImages.module.scss";
// Components
import EntityNavigationDots from "./EntityNavigationDots";
// Hooks
import {
  useCalculateEntityViewImagesProportions,
  useGetWindowWidth,
} from "@/hooks";
// Data
import { entityViewImagesImageAlt } from "@/data";

const EntityViewImages: FC<EntityViewImagesProps> = ({
  images,
  entityType,
  currentEntityImage,
  setCurrentEntityImage,
}) => {
  const windowWidth = useGetWindowWidth();
  const reservedImageAmount = useCalculateEntityViewImagesProportions(
    entityType,
    windowWidth || 1800, // -> not the best way of doing things ya know
  );

  const imageUsed = currentEntityImage || images[0];

  if (!imageUsed) {
    return <div>loading image</div>;
  }

  return (
    <div className={entityViewImagesStyles.container}>
      <Image
        width={reservedImageAmount.width}
        height={reservedImageAmount.height}
        src={imageUsed}
        alt={entityViewImagesImageAlt}
      />
      <EntityNavigationDots
        currentEntityId={imageUsed}
        setCurrentEntityId={setCurrentEntityImage}
        entityIds={images}
        useCase="images"
      />
    </div>
  );
};

export default EntityViewImages;
