import {
  SortByFormControlProps,
  TextFormControlProps,
} from "@/core/interfaces";

export type ProjectsQueryDataType = {
  filterValues: string[];

  sortBy: SortByFormControlProps;

  search: {
    current: string;
    searchFormControlData: (
      current: string,
      setter: (value: string) => void,
    ) => TextFormControlProps;
  };
};
