"use client";
// SCSS
import goUpButtonStyles from "@/scss/components/layout/GoUpButton.module.scss";
// React Icons
import { FaChevronUp } from "react-icons/fa";
// Hooks
import { useHandleWindowScroll } from "@/hooks";
// Data
import { goUpButtonTitle } from "@/data";

const GoUpButton = () => {
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
      aria-label={goUpButtonTitle}
      title={goUpButtonTitle}
    >
      <FaChevronUp />
    </div>
  );
};

export default GoUpButton;
