import { SectionDataType } from "@/core/types";
import { ProjectWithEverything } from "@personal-portfolio-website/shared";

export interface ViewBasedPageHeroProps {
  heroData: SectionDataType;
  page: "projects" | "meal-prep" | "awards";
  sectionType: "hero" | "normal";

  currentEntityId: string;
  setCurrentEntityId: (id: string) => void;

  currentEntityImage: string;
  setCurrentEntityImage: (image: string) => void;

  entities: ProjectWithEverything[];

  isError: boolean;
  isLoading: boolean;
}
