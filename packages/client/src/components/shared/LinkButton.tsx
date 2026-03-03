// React
import { FC } from "react";
// Types
import { LinkButtonProps } from "@/core/interfaces";
// i18n
import { Link } from "@/i18n/navigation";
// SCSS
import linkButtonStyles from "@/scss/components/shared/LinkButton.module.scss";

const LinkButton: FC<LinkButtonProps> = ({ color, dest, label }) => {
  let linkButtonColor: string = "#d29922";

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

  return (
    <Link
      href={dest}
      style={{ backgroundColor: linkButtonColor }}
      className={linkButtonStyles.link}
      title={label}
      aria-label={label}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
