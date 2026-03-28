import { SortByFormControlProps } from "@/core/interfaces";

export const useHandleDumbStuffThatNeedsToBeChangedLaterAndThoughtOutCarefully =
  (
    sortCurrent: string,
    sortSetter: (key: string, value: string) => void,
    filter: string[],
  ) => {
    const sortFormControlData: SortByFormControlProps = {
      scope: "sort",
      label: "Sort By",
      sortingOptions: [
        {
          flow: "row",
          current: sortCurrent,
          onOptionSelect: (e) => sortSetter("sortByTest", e.target.value),
          options: [
            { label: "Name", value: "name", specifier: "string" },
            { label: "Creation Date", value: "createdAt", specifier: "date" },
          ],
        },
      ],
    };

    const filterFormControlData: SortByFormControlProps = {
      scope: "filter",
      sortingOptions:
        filter?.length > 0
          ? `You have ${filter?.length} technology filters applied.`
          : "",
    };

    return { sortFormControlData, filterFormControlData };
  };
