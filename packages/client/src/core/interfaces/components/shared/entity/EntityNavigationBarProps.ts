// Interfaces
import { SortByFormControlProps } from "./SortByFormControlProps";
import { TextFormControlProps } from "./TextFormControlProps";

export interface EntityNavigationBarProps {
  search?: TextFormControlProps;

  sort?: SortByFormControlProps;

  filter?: SortByFormControlProps;
}
