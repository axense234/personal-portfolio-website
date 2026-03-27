export interface TechIconsProps {
  isFunctional: boolean;
  onTechIconClick?: (techId: string) => void;

  isFancy: boolean;

  selectedTech?: string[];
}
