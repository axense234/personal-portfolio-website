import { LinkHrefType } from "@/core/types";

export interface LinkButtonProps {
  id?: number;
  colorSpecifier: "warning" | "success" | "delete" | number;
  size: "large" | "medium" | "small";
  label: string;

  dest?: LinkHrefType;

  download?: boolean;
  downloadFilename?: string;

  onClick?: () => void;

  buttonType?: "link" | "download" | "submit";
}
