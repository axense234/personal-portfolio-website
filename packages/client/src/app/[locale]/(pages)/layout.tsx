"use client";
// Components
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import GoUpButton from "@/components/layout/GoUpButton";
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
      <GoUpButton />
      <Footer />
    </div>
  );
};

export default PagesLayout;
