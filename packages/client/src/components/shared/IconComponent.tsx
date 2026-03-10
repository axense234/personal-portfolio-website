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
}) => {
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
      />
    </Link>
  );
};

export default IconComponent;
