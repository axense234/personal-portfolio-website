// React
import { FC } from "react";
// Interfaces
import { EntityViewImagesProps } from "@/core/interfaces";
// Next
import Image from "next/image";
// SCSS
import entityViewImagesStyles from "@/scss/components/shared/EntityViewImages.module.scss";
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

  if (!currentEntityImage) {
    return <div>loading image</div>;
  }

  return (
    <div className={entityViewImagesStyles.container}>
      <Image
        width={reservedImageAmount.width}
        height={reservedImageAmount.height}
        src={currentEntityImage}
        alt={"TODO"}
      />
      <EntityNavigationDots
        currentEntityId={currentEntityImage}
        setCurrentEntityId={setCurrentEntityImage}
        entityIds={images}
        useCase="images"
      />
    </div>
  );
};

export default EntityViewImages;
