import {
  SortByFormControlProps,
  TextFormControlProps,
} from "@/core/interfaces";

export type MealsPrepsQueryDataType = {
  filterValues: string[]; // change this

  sortBy: SortByFormControlProps;

  search: {
    current: string;
    searchFormControlData: (
      current: string,
      setter: (value: string) => void,
    ) => TextFormControlProps;
  };
};
