// Interfaces
import { SelectFormControlProps } from "@/core/interfaces";

export interface SortByFormControlProps {
  sortingOptions: Map<number, SelectFormControlProps> | string;

  scope: "sort" | "filter";
  label?: string;

  onAddSortingOption: (
    freshSortingOptions: Map<number, SelectFormControlProps>,
    id: number,
  ) => void;

  onRemoveSortingOption: (
    freshSortingOptions: Map<number, SelectFormControlProps>,
    id: number,
  ) => void;
}
