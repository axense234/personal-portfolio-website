export interface EntityNavigationDotsProps {
  currentEntityId: string;
  setCurrentEntityId: (id: string) => void;

  entityIds: string[];

  useCase: "entities" | "images";
}
