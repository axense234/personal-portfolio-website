export interface IconComponentProps {
  dest: string;
  label: string;
  icon_src: string;
  height?: number;

  id: string;

  isFunctional?: boolean;
  onTechIconClick?: (id: string) => void;

  isSelected?: boolean;
}
