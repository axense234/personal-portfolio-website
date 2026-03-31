"use client";
// Interfaces
import { CardProps } from "@/core/interfaces";
// SCSS
import cardStyles from "@/scss/components/shared/entity/Card.module.scss";
// Next
import Image from "next/image";
// React
import { FC } from "react";
// Components
import LinkButton from "../LinkButton";
import IconComponent from "../IconComponent";
// Hooks
import { useGetWindowWidth } from "@/hooks";

const Card: FC<CardProps> = ({ desc, image, label, button, externals }) => {
  const windowWidth = useGetWindowWidth();
  const iconHeight = windowWidth && windowWidth <= 1200 ? 24 : 32;
  let linkButtonSize: "large" | "small" | "medium" = "large";

  if (windowWidth && windowWidth <= 600) {
    linkButtonSize = "small";
  } else if (windowWidth && windowWidth <= 1200) {
    linkButtonSize = "medium";
  } else if (windowWidth && windowWidth <= 1500) {
    linkButtonSize = "large";
  } else {
    linkButtonSize = "large";
  }

  return (
    <div className={cardStyles.container}>
      <Image
        width={500}
        height={280}
        src={image}
        alt={label}
        title={`${label} Thumbnail Image`}
        aria-label={`${label} Thumbnail Image`}
      />
      <div className={cardStyles.contentWrapper}>
        <div className={cardStyles.content}>
          <h6 title={label} aria-label={label}>
            {label}
          </h6>
          <p>{desc}</p>
        </div>
        <div className={cardStyles.buttons}>
          {button && <LinkButton {...button} size={linkButtonSize} />}
          {externals && (
            <div className={cardStyles.externals}>
              {externals.map((external) => {
                return (
                  <IconComponent
                    height={iconHeight}
                    dest={external.dest}
                    icon_src={external.rel}
                    label={external.label}
                    key={external.id}
                    id=""
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
