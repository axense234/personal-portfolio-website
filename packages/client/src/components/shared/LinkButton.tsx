// React
import { FC } from "react";
// Types
import { LinkButtonProps } from "@/core/interfaces";
import { LinkHrefType } from "@/core/types";
// Links and stuff man
import { Link as Linki18n } from "@/i18n/navigation";
import Link from "next/link";
// SCSS
import linkButtonStyles from "@/scss/components/shared/LinkButton.module.scss";
// Helpers
import { getSpecificButtonColor } from "@/helpers";

const LinkButton: FC<LinkButtonProps> = ({
  colorSpecifier,
  dest,
  label,
  size,
  download,
  downloadFilename,
  buttonType = "link",
  onClick,
}) => {
  const linkButtonColor = getSpecificButtonColor(colorSpecifier);
  let linkButtonFontSize = "20px";
  let linkButtonPadding = "0.5rem 1.5rem";

  const LinkUsed = buttonType === "download" ? Link : Linki18n;

  switch (size) {
    case "large":
      linkButtonFontSize = "20px";
      linkButtonPadding = "0.5rem 1.5rem";
      break;
    case "medium":
      linkButtonFontSize = "16px";
      linkButtonPadding = "0.35rem 1rem";
      break;
    case "small":
      linkButtonFontSize = "14px";
      linkButtonPadding = "0.5rem 0.75rem";
      break;
    default:
      linkButtonFontSize = "20px";
      linkButtonPadding = "0.5rem 1.5rem";
      break;
  }

  if (buttonType === "submit") {
    return (
      <button
        style={{
          backgroundColor: linkButtonColor,
          fontSize: linkButtonFontSize,
          padding: linkButtonPadding,
        }}
        className={linkButtonStyles.link}
        title={label}
        aria-label={label}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  return (
    <LinkUsed
      href={dest as LinkHrefType}
      style={{
        backgroundColor: linkButtonColor,
        fontSize: linkButtonFontSize,
        padding: linkButtonPadding,
      }}
      download={download && downloadFilename}
      className={linkButtonStyles.link}
      title={label}
      aria-label={label}
      onClick={onClick}
    >
      {label}
    </LinkUsed>
  );
};

export default LinkButton;
