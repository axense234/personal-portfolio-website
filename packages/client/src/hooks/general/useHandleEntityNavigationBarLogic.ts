"use client";
import {
  SelectFormControlProps,
  SelectOption,
  SortByFormControlProps,
} from "@/core/interfaces";
import { useEffect } from "react";

export const useHandleEntityNavigationBarLogic = (
  options: SelectOption[],
  setEntitiesQueryDataSortBy: (value: SortByFormControlProps) => void,
  setEntitiesQueryDataSortByOptions: (
    value: SelectFormControlProps,
    specifier: "remove" | "add",
  ) => void,
  setEntitiesQueryDataSortByOption: (value: SelectFormControlProps) => void,
) => {
  const handleAddSortingOption = (
    freshSortingOptions: Map<number, SelectFormControlProps>,
    id: number,
  ) => {
    const currentMap = freshSortingOptions;
    console.log(currentMap.keys(), id);
    const currentValue = currentMap?.get(id)?.current || options[0].value;

    setEntitiesQueryDataSortByOptions(
      {
        flow: "row",
        options,
        id,
        current: currentValue,
        onOptionSelect: (e) => {
          const existing = currentMap.get(id) as SelectFormControlProps;
          setEntitiesQueryDataSortByOption({
            ...existing,
            current: e.target.value,
            id: id,
          });
        },
      },
      "add",
    );
  };

  const handleRemoveSortingOption = (
    freshSortingOptions: Map<number, SelectFormControlProps>,
    id: number,
  ) => {
    const currentMap = freshSortingOptions;
    console.log(currentMap.keys(), id);
    const currentSelectFormControl = currentMap?.get(id - 1);

    setEntitiesQueryDataSortByOptions(
      {
        ...(currentSelectFormControl as SelectFormControlProps),
      },
      "remove",
    );
  };

  useEffect(() => {
    setEntitiesQueryDataSortBy({
      scope: "sort",
      label: "Sort",
      sortingOptions: new Map(),
      onAddSortingOption: handleAddSortingOption,
      onRemoveSortingOption: handleRemoveSortingOption,
    });
    handleAddSortingOption(new Map<number, SelectFormControlProps>(), 0);
  }, []);

  return { handleAddSortingOption, handleRemoveSortingOption };
};
