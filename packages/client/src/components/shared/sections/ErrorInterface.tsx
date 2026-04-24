"use client";
// SCSS
import errorInterfaceStyles from "@/scss/components/shared/sections/ErrorInterface.module.scss";
// Interfaces
import { ErrorInterfaceProps } from "@/core/interfaces";
// Next
import Image from "next/image";
// React
import { FC } from "react";
// Link
import { Link } from "@/i18n/navigation";
// Data
import { errorInterfaceImageSrc } from "@/data";
// Translations
import { useTranslations } from "next-intl";
// Hooks
import { useGetWindowWidth } from "@/hooks";

const ErrorInterface: FC<ErrorInterfaceProps> = () => {
  const translations = useTranslations("common.errorInterface");
  const windowWidth = useGetWindowWidth();

  let reservedImageSpace = 400;

  if (windowWidth && windowWidth <= 600) {
    reservedImageSpace = 184;
  } else if (windowWidth && windowWidth <= 1200) {
    reservedImageSpace = 280;
  } else if (windowWidth && windowWidth <= 1500) {
    reservedImageSpace = 280;
  }

  return (
    <div className={errorInterfaceStyles.container}>
      <Image
        alt={translations("image.alt")}
        src={errorInterfaceImageSrc}
        width={reservedImageSpace}
        height={reservedImageSpace}
        title={translations("image.title")}
        aria-label={translations("image.title")}
      />
      <h6>
        {translations.rich("section.label", {
          link: (chunks) => (
            <Link
              href={"/contact"}
              title={translations("section.title")}
              aria-label={translations("section.title")}
            >
              {chunks}
            </Link>
          ),
        })}
      </h6>
    </div>
  );
};

export default ErrorInterface;
