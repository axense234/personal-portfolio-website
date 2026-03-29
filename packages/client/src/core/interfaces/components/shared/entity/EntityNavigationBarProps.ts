// Interfaces
import {
  SortByFormControlProps,
  TextFormControlProps,
} from "@/core/interfaces";

export interface EntityNavigationBarProps {
  search?: TextFormControlProps;

  sort?: SortByFormControlProps;

  filter?: SortByFormControlProps;
}
