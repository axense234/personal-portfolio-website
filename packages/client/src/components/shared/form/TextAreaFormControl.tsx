// SCSS
import textAreaFormControlStyles from "@/scss/components/shared/form/TextAreaFormControl.module.scss";
// React
import { FC } from "react";
// Interfaces
import { TextAreaFormControlProps } from "@/core/interfaces";

const TextAreaFormControl: FC<TextAreaFormControlProps> = ({
  label,
  onChange,
  value,
  inputPlaceholder,
}) => {
  return (
    <div className={textAreaFormControlStyles.container}>
      <label htmlFor={label}>{label}</label>
      <textarea
        name={label}
        id={label}
        value={value}
        placeholder={`ex: ${inputPlaceholder}`}
        onChange={(e) => {
          e.preventDefault();
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default TextAreaFormControl;
