"use client";
// Components
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import ConstructionBanner from "@/components/layout/ConstructionBanner";
// SCSS
import pagesLayoutStyles from "@/scss/components/layout/PagesLayout.module.scss";
// Fonts
import { manrope } from "@/app/fonts";
// Zustand
import { useGeneralStore } from "@/zustand/general/context";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const { colorTheme } = useGeneralStore((state) => state);

  const windowWidth = window && window?.innerWidth;

  if (windowWidth && windowWidth < 900) {
    return (
      <div data-theme={colorTheme} className={pagesLayoutStyles.temporary}>
        <h1>Responsive Design has not been implemented yet.</h1>
        <h2>
          View the website on Desktop or a device with a bigger screen. Pretty
          please.
        </h2>
      </div>
    );
  }

  return (
    <div
      data-theme={colorTheme}
      className={`${pagesLayoutStyles.appContainer} ${manrope.className}`}
    >
      <ConstructionBanner />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PagesLayout;
