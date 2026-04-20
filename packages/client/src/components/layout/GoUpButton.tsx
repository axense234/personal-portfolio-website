"use client";
// SCSS
import goUpButtonStyles from "@/scss/components/layout/GoUpButton.module.scss";
// React Icons
import { FaChevronUp } from "react-icons/fa";
// Hooks
import { useHandleWindowScroll } from "@/hooks";
// Translations
import { useTranslations } from "next-intl";

const GoUpButton = () => {
  const translations = useTranslations("common.goUpButton");
  const isVisible = useHandleWindowScroll(2);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={goUpButtonStyles.container}
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        cursor: "pointer",
      }}
      onClick={scrollToTop}
      aria-label={translations("label")}
      title={translations("label")}
    >
      <FaChevronUp />
    </div>
  );
};

export default GoUpButton;
