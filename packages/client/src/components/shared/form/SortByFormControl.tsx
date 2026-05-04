// React
import { FC, useState } from "react";
// SCSS
import sortByFormControlStyles from "@/scss/components/shared/form/SortByFormControl.module.scss";
// Components
import SelectFormControl from "./SelectFormControl";
// Interfaces
import {
  SelectFormControlProps,
  SortByFormControlProps,
} from "@/core/interfaces";
// React Icons
import { FaPlus, FaMinus } from "react-icons/fa";

const SortByFormControl: FC<SortByFormControlProps> = ({
  sortingOptions,
  scope,
  label,
  onAddSortingOption,
  onRemoveSortingOption,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const toggleTitle = isHidden ? "Expand" : "Minimize";
  const FaToggle = isHidden ? FaPlus : FaMinus;

  if (scope === "filter" && typeof sortingOptions === "string") {
    return (
      <p className={sortByFormControlStyles.message}>
        {sortingOptions as string}
      </p>
    );
  }

  const arraySortingOptions = Array.from(
    (sortingOptions as Map<number, SelectFormControlProps>).values(),
  );

  return (
    <div className={sortByFormControlStyles.container}>
      <div className={sortByFormControlStyles.intro}>
        <label title={label} aria-label={label}>
          {label}
        </label>
        <FaToggle
          title={toggleTitle}
          aria-label={toggleTitle}
          onClick={() => setIsHidden(!isHidden)}
        />
      </div>
      {!isHidden && (
        <>
          <div className={sortByFormControlStyles.controls}>
            {arraySortingOptions.map((sortingOption, index) => {
              return (
                <div className={sortByFormControlStyles.sortBy} key={index}>
                  <SelectFormControl {...sortingOption} />
                  {scope === "sort" && true /* asc/desc button */}
                </div>
              );
            })}
          </div>
          <FaPlus
            onClick={() =>
              onAddSortingOption(
                sortingOptions as Map<number, SelectFormControlProps>,
                arraySortingOptions.length,
              )
            }
          />
          {(sortingOptions as Map<number, SelectFormControlProps>).size > 0 && (
            <FaMinus
              onClick={() =>
                onRemoveSortingOption(
                  sortingOptions as Map<number, SelectFormControlProps>,
                  arraySortingOptions.length,
                )
              }
            />
          )}
        </>
      )}
    </div>
  );
};

export default SortByFormControl;
