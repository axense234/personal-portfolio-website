"use client";
// Components
import Navbar from "@/components/layout/navbar/Navbar";
// SCSS
import pagesLayoutStyles from "@/scss/components/layout/PagesLayout.module.scss";
// Fonts
import { manrope } from "@/app/fonts";
import { useGeneralStore } from "@/zustand/general/context";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const { colorTheme } = useGeneralStore((state) => state);

  return (
    <div
      data-theme={colorTheme}
      className={`${pagesLayoutStyles.appContainer} ${manrope.className}`}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default PagesLayout;
