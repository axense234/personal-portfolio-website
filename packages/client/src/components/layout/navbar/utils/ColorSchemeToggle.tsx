"use client";
// React
import { FC, useEffect } from "react";
// SCSS
import colorSchemeToggleStyles from "@/scss/components/layout/navbar/utils/ColorSchemeToggle.module.scss";
// Zustand
import { useGeneralStore } from "@/zustand/general/context";
// Fonts (paragraph)
import { karla } from "@/app/fonts";
// React Icons
import { FaMoon } from "react-icons/fa";
// Translations
import { useTranslations } from "use-intl";

const ColorSchemeToggle: FC = () => {
  const { colorTheme, toggleColorTheme, setColorTheme } = useGeneralStore(
    (state) => state,
  );
  const translations = useTranslations("common.colorSchemeToggle");

  const labelTextColor = colorTheme === "dark" ? "#f8f9fa" : "#1f1f1f";
  const divBackgroundColor = colorTheme === "dark" ? "#f8f9fa" : "#1f1f1f";
  const svgColor = colorTheme === "light" ? "#f8f9fa" : "#1f1f1f";

  const translatedLabelText = translations(colorTheme);
  const translatedLabelTextTitle = translations("title");

  useEffect(() => {
    const colorThemeFromLocalStorage = localStorage.getItem("colorTheme") as
      | "dark"
      | "light";

    setColorTheme(colorThemeFromLocalStorage || "dark");
  }, []);

  const onColorSchemeToggleClick = () => {
    toggleColorTheme();
    // bad design
    localStorage.setItem("colorTheme", colorTheme == "dark" ? "light" : "dark");
  };

  return (
    <div className={colorSchemeToggleStyles.container}>
      <label
        style={{ color: labelTextColor }}
        className={karla.className}
        htmlFor="cst"
        title={translatedLabelTextTitle}
        aria-label={translatedLabelTextTitle}
      >
        {translatedLabelText}
      </label>
      <div style={{ backgroundColor: divBackgroundColor }}>
        <input
          type="checkbox"
          name="cst"
          id="cst"
          value={colorTheme === "dark" ? "true" : "false"}
          onClick={onColorSchemeToggleClick}
        />
        <FaMoon style={{ color: svgColor }} />
      </div>
    </div>
  );
};

export default ColorSchemeToggle;
