// SCSS
import textFormControlStyles from "@/scss/components/shared/form/TextFormControl.module.scss";
// React
import { FC } from "react";
// Interfaces
import { TextFormControlProps } from "@/core/interfaces";

const TextFormControl: FC<TextFormControlProps> = ({
  inputType,
  label,
  onChange,
  value,
  inputPlaceholder,
  flow,
}) => {
  const placeholder = `ex: ${inputPlaceholder}`;

  return (
    <div
      className={textFormControlStyles.container}
      style={{
        flexDirection: flow,
        alignItems: flow === "row" ? "center" : "flex-start",
      }}
    >
      <label htmlFor={label}>{label}</label>
      <input
        type={inputType}
        name={label}
        id={label}
        value={value}
        style={{
          minWidth: `${placeholder.length * 1.1}ch`,
        }}
        placeholder={placeholder}
        onChange={(e) => {
          e.preventDefault();
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default TextFormControl;
