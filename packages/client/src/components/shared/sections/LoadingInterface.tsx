"use client";
// Interfaces
import { LoadingInterfaceProps } from "@/core/interfaces";
// Hooks
import { useGetWindowWidth } from "@/hooks";
// SCSS
import loadingInterfaceStyles from "@/scss/components/shared/sections/LoadingInterface.module.scss";
// Zustand
import { useGeneralStore } from "@/zustand/general";
// React
import { FC } from "react";
// Loading Spinner
import { PacmanLoader } from "react-spinners";

const LoadingInterface: FC<LoadingInterfaceProps> = ({
  isLoading,
  message,
}) => {
  const { colorTheme } = useGeneralStore((state) => state);
  const windowWidth = useGetWindowWidth();

  const spinnerColor = colorTheme == "dark" ? "#f8f9fa" : "#1f1f1f";

  let pacmanLoaderSize = 96;
  if (windowWidth && windowWidth <= 600) {
    pacmanLoaderSize = 48;
  } else if (windowWidth && windowWidth <= 1200) {
    pacmanLoaderSize = 64;
  } else if (windowWidth && windowWidth <= 1500) {
    pacmanLoaderSize = 96;
  }

  return (
    <div className={loadingInterfaceStyles.container}>
      <PacmanLoader
        color={spinnerColor}
        size={pacmanLoaderSize}
        loading={isLoading}
        title="Loading"
        aria-label="Loading"
      />
      <h6 title={message} aria-label={message}>
        {message}
      </h6>
    </div>
  );
};

export default LoadingInterface;
