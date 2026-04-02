// React
import { useState, useEffect } from "react";

export const useHandleWindowScroll = (thresholdFactor = 1.5) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * thresholdFactor;

      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible;
};
