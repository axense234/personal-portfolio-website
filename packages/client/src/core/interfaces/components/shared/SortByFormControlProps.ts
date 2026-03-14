// Interfaces
import { SelectFormControlProps } from "./SelectFormControlProps";

export interface SortByFormControlProps {
  sortingOptions: SelectFormControlProps[] | string;

  scope: "sort" | "filter";
  label: string;
}
