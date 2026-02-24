"use client";
// Components
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
// SCSS
import pagesLayoutStyles from "@/scss/components/layout/PagesLayout.module.scss";
// Fonts
import { manrope } from "@/app/fonts";
// Zustand
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
      <Footer />
    </div>
  );
};

export default PagesLayout;
