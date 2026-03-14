// React
import { FC } from "react";
// Next
import Image from "next/image";
import Link from "next/link";
// SCSS
import iconComponentStyles from "@/scss/components/shared/IconComponent.module.scss";
// Interfaces
import { IconComponentProps } from "@/core/interfaces";

const IconComponent: FC<IconComponentProps> = ({
  dest,
  label,
  icon_src,
  height,
  isFunctional = false,
  onTechIconClick,
  isSelected,
  id,
}) => {
  if (isFunctional && onTechIconClick) {
    return (
      <Image
        alt={label}
        title={label}
        aria-label={label}
        src={icon_src}
        height={64}
        width={256}
        style={{
          width: "auto",
          height: height,
          border: isSelected ? "3px solid #d29922" : "",
          padding: isSelected ? "0.05rem" : "0",
        }}
        className={iconComponentStyles.image}
        onClick={() => onTechIconClick(id)}
      />
    );
  }

  return (
    <Link href={dest} className={iconComponentStyles.container} target="_blank">
      <Image
        alt={label}
        title={label}
        aria-label={label}
        src={icon_src}
        height={64}
        width={256}
        style={{ width: "auto", height: height }}
        className={iconComponentStyles.image}
      />
    </Link>
  );
};

export default IconComponent;
