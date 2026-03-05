import { LinkHrefType } from "@/core/types";

export interface LinkButtonProps {
  id?: number;
  color: "warning" | "success" | "delete";
  label: string;
  dest: LinkHrefType;
  size: "large" | "medium" | "small";
}
