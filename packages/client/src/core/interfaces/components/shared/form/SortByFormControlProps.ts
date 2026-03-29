// Interfaces
import { SelectFormControlProps } from "@/core/interfaces";

export interface SortByFormControlProps {
  sortingOptions: SelectFormControlProps[] | string;

  scope: "sort" | "filter";
  label?: string;
}
