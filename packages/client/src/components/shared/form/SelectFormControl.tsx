// React
import { FC } from "react";
// Interfaces
import { SelectFormControlProps } from "@/core/interfaces";
// SCSS
import selectFormControlStyles from "@/scss/components/shared/form/SelectFormControl.module.scss";

const SelectFormControl: FC<SelectFormControlProps> = ({
  current,
  label,
  onOptionSelect,
  options,
  flow,
}) => {
  return (
    <div
      className={selectFormControlStyles.container}
      style={{
        flexDirection: flow,
        alignItems: flow === "row" ? "center" : "flex-start",
      }}
    >
      {label && <label htmlFor={label}>{label}</label>}
      <select name={label} id={label} onChange={onOptionSelect} value={current}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectFormControl;
