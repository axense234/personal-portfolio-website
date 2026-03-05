// React
import { FC } from "react";
// Types
import { LinkButtonProps } from "@/core/interfaces";
// i18n
import { Link } from "@/i18n/navigation";
// SCSS
import linkButtonStyles from "@/scss/components/shared/LinkButton.module.scss";

const LinkButton: FC<LinkButtonProps> = ({ color, dest, label, size }) => {
  let linkButtonColor: string = "#d29922";
  let linkButtonFontSize = "20px";
  let linkButtonPadding = "0.5rem 1.5rem";

  switch (color) {
    case "warning":
      linkButtonColor = "#d29922";
      break;
    case "success":
      linkButtonColor = "#3fb950";
      break;
    case "delete":
      linkButtonColor = "#f85149";
      break;
    default:
      linkButtonColor = "#d29922";
      break;
  }

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
      linkButtonPadding = "0.25rem 0.75rem";
      break;
    default:
      linkButtonFontSize = "20px";
      linkButtonPadding = "0.5rem 1.5rem";
      break;
  }

  return (
    <Link
      href={dest}
      style={{
        backgroundColor: linkButtonColor,
        fontSize: linkButtonFontSize,
        padding: linkButtonPadding,
      }}
      className={linkButtonStyles.link}
      title={label}
      aria-label={label}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
