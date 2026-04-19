"use client";
// SCSS
import constructionBannerStyles from "@/scss/components/layout/ConstructionBanner.module.scss";
// React Icons
import { FaWindowClose } from "react-icons/fa";
// React
import { useState } from "react";

const ConstructionBanner = () => {
  const [isClosed, setIsClosed] = useState<boolean>(false);

  if (isClosed) {
    return null;
  }

  return (
    <div className={constructionBannerStyles.container}>
      <FaWindowClose
        title="Close the cute banner."
        aria-label="Close the cute banner."
        onClick={() => setIsClosed(true)}
      />
      <h3>⚠️ SITE IS UNDER CONSTRUCTION ⚠️</h3>
      <p>
        Yep, the website is obviously still under construction. Main things
        currently being worked on: translatations, the dashboard page, the Meals
        Gallery section.
      </p>
    </div>
  );
};

export default ConstructionBanner;
