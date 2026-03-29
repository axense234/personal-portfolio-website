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
import { useCalculateEntityViewImagesProportions } from "@/hooks";
import useGetWindowWidth from "@/hooks/general/useGetWindowWidth";

const EntityViewImages: FC<EntityViewImagesProps> = ({
  images,
  entityType,
  currentEntityImage,
  setCurrentEntityImage,
}) => {
  const windowWidth = useGetWindowWidth();
  const reservedImageAmount = useCalculateEntityViewImagesProportions(
    entityType,
    windowWidth,
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
        alt={"TODO"}
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
