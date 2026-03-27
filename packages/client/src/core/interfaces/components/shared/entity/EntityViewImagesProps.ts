export interface EntityViewImagesProps {
  images: string[];

  entityType: "meal-prep" | "project-awards" | "project-images";

  currentEntityImage: string;
  setCurrentEntityImage: (img: string) => void;
}
