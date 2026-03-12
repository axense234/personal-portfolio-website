export interface EntityViewImagesProps {
  images: string[];

  entityType: "meal-prep" | "project";

  currentEntityImage: string;
  setCurrentEntityImage: (img: string) => void;
}
