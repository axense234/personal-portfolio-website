// React
import { FC, useState } from "react";
// SCSS
import sortByFormControlStyles from "@/scss/components/shared/SortByFormControl.module.scss";
// Components
import SelectFormControl from "./SelectFormControl";
// Interfaces
import {
  SelectFormControlProps,
  SortByFormControlProps,
} from "@/core/interfaces";
// React Icons
import { FaMinus, FaPlus } from "react-icons/fa";

const SortByFormControl: FC<SortByFormControlProps> = ({
  sortingOptions,
  scope,
  label,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const toggleTitle = isHidden ? "Expand" : "Minimize";
  const FaToggle = isHidden ? FaPlus : FaMinus;

  if (scope === "filter") {
    return (
      <p className={sortByFormControlStyles.message}>
        {sortingOptions as string}
      </p>
    );
  }

  const safeSortingOptions = sortingOptions as SelectFormControlProps[];

  return (
    <div className={sortByFormControlStyles.container}>
      <div className={sortByFormControlStyles.intro}>
        <label
          title={label}
          aria-label={label}
          htmlFor={safeSortingOptions.map((o) => o.label)[0]}
        >
          {label}
        </label>
        <FaToggle
          title={toggleTitle}
          aria-label={toggleTitle}
          onClick={() => setIsHidden(!isHidden)}
        />
      </div>
      {!isHidden && (
        <div className={sortByFormControlStyles.controls}>
          {safeSortingOptions.map((sortingOption, index) => {
            return (
              <div className={sortByFormControlStyles.sortBy} key={index}>
                <SelectFormControl {...sortingOption} />
                {scope === "sort" && true /* asc/desc button */}
              </div>
            );
          })}
        </div>
      )}
      {/* <AddControl/> */}
    </div>
  );
};

export default SortByFormControl;
