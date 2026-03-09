// Next
import Link from "next/link";
import Image from "next/image";
// Interfaces
import { FC } from "react";
// SCSS
import techIconStyles from "@/scss/components/shared/TechIcon.module.scss";
// Shared
import { Tech } from "@personal-portfolio-website/shared";

const TechIcon: FC<(Tech | undefined) & { height: number }> = ({
  label,
  icon_src,
  dest,
  height = 64,
  id,
}) => {
  if (!id || id.length === 0) {
    return <div>something is wrong</div>;
  }

  return (
    <Link href={dest} className={techIconStyles.container} target="_blank">
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

export default TechIcon;
