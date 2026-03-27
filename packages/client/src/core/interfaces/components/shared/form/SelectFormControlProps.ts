// React
import { ChangeEventHandler } from "react";

export type SelectOption = { label: string; value: any; specifier: any };

export interface SelectFormControlProps {
  label?: string;
  current: string;

  options: SelectOption[];
  onOptionSelect: ChangeEventHandler<HTMLSelectElement> | undefined;

  flow: "row" | "column";
}
