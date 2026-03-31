"use client";
// React
import { FC } from "react";
// Interfaces
import { LanguageSwitcherSelectProps } from "@/core/interfaces";
// NextJS
import Image from "next/image";
// Hooks
import { useGetWindowWidth, useNavigateToPathname } from "@/hooks";
// SCSS
import languageSwitcherSelectStyles from "@/scss/components/layout/navbar/utils/lang/LanguageSwitcherSelect.module.scss";
// Data
import { languageFlagsImages } from "@/data";

const LanguageSwitcherSelect: FC<LanguageSwitcherSelectProps> = ({
  locale,
  defaultSelectValue,
  children,
}) => {
  const { label, rel } =
    languageFlagsImages.find((flagImage) => flagImage.value === locale) ||
    languageFlagsImages[0];

  const navigateToPathname = useNavigateToPathname();

  const windowWidth = useGetWindowWidth();
  let imageSizes = { width: 64, height: 48 };

  if (windowWidth && windowWidth <= 900) {
    imageSizes = { width: 32, height: 24 };
  } else if (windowWidth && windowWidth <= 900) {
    imageSizes = { width: 48, height: 36 };
  } else {
    imageSizes = { width: 64, height: 48 };
  }

  return (
    <div
      className={languageSwitcherSelectStyles.container}
      title={label}
      aria-label={label}
    >
      <Image
        src={rel}
        title={label}
        aria-label={label}
        alt={label}
        width={imageSizes.width}
        height={imageSizes.height}
      />
      <div className={languageSwitcherSelectStyles.selectFormControl}>
        <select
          name="languageSwitcher"
          id="languageSwitcher"
          defaultValue={defaultSelectValue}
          onChange={(e) => navigateToPathname({ forcedLocale: e.target.value })}
        >
          {children}
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcherSelect;
