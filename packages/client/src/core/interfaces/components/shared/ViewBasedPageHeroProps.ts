import { SectionDataType } from "@/core/types";

export interface ViewBasedPageHeroProps {
  heroData: SectionDataType;
  page: "projects" | "meal-prep" | "awards";

  currentEntityId: string;
  setCurrentEntityId: (id: string) => void;
  entityIds: string[];
}
