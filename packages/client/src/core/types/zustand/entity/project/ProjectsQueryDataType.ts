import { TextFormControlProps } from "@/core/interfaces";

export type ProjectsQueryDataType = {
  filterValues: string[];

  sortByTest: string;

  search: {
    current: string;
    searchFormControlData: (
      current: string,
      setter: (value: string) => void,
    ) => TextFormControlProps;
  };
};
