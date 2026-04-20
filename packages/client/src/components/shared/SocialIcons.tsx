// SCSS
import IconComponent from "@/components/shared/IconComponent";
// Interfaces
import { SocialIconsProps } from "@/core/interfaces";
// Data
import { socialMediaIcons } from "@/data";
// SCSS
import socialIconsStyles from "@/scss/components/shared/SocialIcons.module.scss";
// Translations
import { useTranslations } from "next-intl";
// React
import { FC } from "react";

const SocialIcons: FC<SocialIconsProps> = ({ iconHeight, focus }) => {
  const translations = useTranslations("common.socialIcons");

  return (
    <div className={socialIconsStyles.container}>
      {socialMediaIcons.map((smIcon) => {
        // fix this shit later
        // update: fix this shit later
        if (focus === "contact" && smIcon.label === "Project Design") {
          return null;
        }

        // probably not the best way of doing things but ehh
        const translatedLabel = translations(`icon-${smIcon.id}`);

        return (
          <IconComponent
            dest={smIcon.dest}
            icon_src={smIcon.rel}
            label={translatedLabel}
            height={iconHeight}
            key={smIcon.id}
            id=""
          />
        );
      })}
    </div>
  );
};

export default SocialIcons;
