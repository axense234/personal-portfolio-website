// React
import { FC } from "react";
// SCSS
import commonPageHeroStyles from "@/scss/components/shared/CommonPageHero.module.scss";
// Interfaces
import { CommonPageHeroProps } from "@/core/interfaces";
// Next
import Image from "next/image";
// Fonts
import { karla } from "@/app/fonts";
// Components
import LinkButton from "./LinkButton";

const CommonPageHero: FC<CommonPageHeroProps> = ({
  title,
  subtitle,
  image,
  desc,
  buttons,
}) => {
  return (
    <section className={commonPageHeroStyles.container}>
      <div className={commonPageHeroStyles.content}>
        <div className={commonPageHeroStyles.header}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <p className={karla.className}>{desc}</p>
        <div className={commonPageHeroStyles.buttons}>
          {buttons.map((button) => {
            return <LinkButton {...button} key={button.id} />;
          })}
        </div>
      </div>
      <Image
        alt="A Cool Looking Image I Guess Man"
        src={image}
        width={400}
        height={400}
      />
    </section>
  );
};

export default CommonPageHero;
