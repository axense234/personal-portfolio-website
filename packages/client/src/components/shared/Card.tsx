// Interfaces
import { CardProps } from "@/core/interfaces";
// SCSS
import cardStyles from "@/scss/components/shared/Card.module.scss";
// Next
import Image from "next/image";
import Link from "next/link";
// React
import { FC } from "react";
// Components
import LinkButton from "./LinkButton";

const Card: FC<CardProps> = ({ desc, image, label, button, externals }) => {
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
      <div className={cardStyles.content}>
        <h6>{label}</h6>
        <p>{desc}</p>
      </div>
      <div className={cardStyles.buttons}>
        {button && <LinkButton {...button} />}
        {externals && (
          <div className={cardStyles.externals}>
            {externals.map((external) => {
              return (
                <Link href={external.dest} target="_blank" key={external.id}>
                  <Image
                    src={external.rel}
                    alt={external.label}
                    title={external.label}
                    aria-label={external.label}
                    width={48}
                    height={48}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
