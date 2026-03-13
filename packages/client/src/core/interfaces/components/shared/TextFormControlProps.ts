export interface TextFormControlProps {
  value: string;
  onChange: (value: string) => void;

  label: string;

  inputType: "text" | "email";
  inputPlaceholder: string;
}
