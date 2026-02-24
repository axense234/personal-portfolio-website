// React
import { FC } from "react";
// SCSS
import colorSchemeToggleStyles from "@/scss/components/layout/navbar/utils/ColorSchemeToggle.module.scss";
// Zustand
import { useGeneralStore } from "@/zustand/general/context";
// Fonts (paragraph)
import { karla } from "@/app/fonts";
// React Icons
import { FaMoon } from "react-icons/fa";

const ColorSchemeToggle: FC = () => {
  const { colorTheme, toggleColorTheme } = useGeneralStore((state) => state);

  const labelText = colorTheme === "dark" ? "Dark" : "Light";
  const labelTextColor = colorTheme === "dark" ? "#f8f9fa" : "#1f1f1f";
  const divBackgroundColor = colorTheme === "dark" ? "#f8f9fa" : "#1f1f1f";
  const svgColor = colorTheme === "light" ? "#f8f9fa" : "#1f1f1f";

  return (
    <div className={colorSchemeToggleStyles.container}>
      <label
        style={{ color: labelTextColor }}
        className={karla.className}
        htmlFor="cst"
        title={`Toggle Color Modes`}
        aria-label={`Toggle Color Modes`}
      >
        {labelText}
      </label>
      <div style={{ backgroundColor: divBackgroundColor }}>
        <input
          type="checkbox"
          name="cst"
          id="cst"
          value={colorTheme === "dark" ? "true" : "false"}
          onClick={toggleColorTheme}
        />
        <FaMoon style={{ color: svgColor }} />
      </div>
    </div>
  );
};

export default ColorSchemeToggle;
