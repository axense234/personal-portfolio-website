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

const EntityViewImages: FC<EntityViewImagesProps> = ({
  images,
  entityType,
  currentEntityImage,
  setCurrentEntityImage,
}) => {
  const proportionsMap = {
    "meal-prep": { width: 480, height: 640 },
    "project-awards": { width: 640, height: 480 },
    "project-images": { width: 800, height: 450 },
  };

  const reservedImageAmount = proportionsMap[entityType];

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
        style={{
          width: reservedImageAmount.width,
          height: reservedImageAmount.height,
        }}
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
