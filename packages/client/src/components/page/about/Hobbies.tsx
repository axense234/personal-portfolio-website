"use client";
// SCSS
import hobbiesStyles from "@/scss/components/page/about/Hobbies.module.scss";
// Data
import { aboutPageHobbiesContentData } from "@/data";
// Components
import Card from "@/components/shared/entity/Card";
// Hooks
import { useGetWindowWidth } from "@/hooks";
// Translations
import { useTranslations } from "next-intl";
// Types
import { CardProps, LinkButtonProps } from "@/core/interfaces";

const Hobbies = () => {
  const translations = useTranslations("about.sections.hobbies.content.data");

  const windowWidth = useGetWindowWidth();
  const shouldHobbiesUseGrid = windowWidth && windowWidth <= 900 ? false : true;
  const containerClass = shouldHobbiesUseGrid ? "grid" : "hobbies";

  return (
    <ul className={hobbiesStyles[containerClass]}>
      {aboutPageHobbiesContentData?.map((hobby, index) => {
        const translatedHobby: CardProps = {
          ...hobby,
          label: translations(`${hobby.label}.label`),
          desc: translations(`${hobby.label}.desc`),
          externals: hobby.externals?.map((external) => ({
            ...external,
            label: translations(`${hobby.label}.externals.githubLabel`),
          })),
          button: translations.has(`${hobby.label}.buttonLabel`)
            ? {
                ...(hobby.button as LinkButtonProps),
                label: translations(`${hobby.label}.buttonLabel`),
              }
            : undefined,
        };
        return (
          <li key={index}>
            <Card {...translatedHobby} />;
          </li>
        );
      })}
    </ul>
  );
};

export default Hobbies;
