// SCSS
import IconComponent from "@/components/shared/IconComponent";
// Interfaces
import { SocialIconsProps } from "@/core/interfaces";
// Data
import { socialMediaIcons } from "@/data";
// SCSS
import socialIconsStyles from "@/scss/components/shared/SocialIcons.module.scss";
// React
import { FC } from "react";

const SocialIcons: FC<SocialIconsProps> = ({ iconHeight }) => {
  return (
    <div className={socialIconsStyles.container}>
      {socialMediaIcons.map((smIcon) => {
        return (
          <IconComponent
            dest={smIcon.dest}
            icon_src={smIcon.rel}
            label={smIcon.label}
            height={iconHeight}
            key={smIcon.id}
          />
        );
      })}
    </div>
  );
};

export default SocialIcons;
