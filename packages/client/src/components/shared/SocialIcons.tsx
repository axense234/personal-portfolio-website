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

const SocialIcons: FC<SocialIconsProps> = ({ iconHeight, focus }) => {
  return (
    <div className={socialIconsStyles.container}>
      {socialMediaIcons.map((smIcon) => {
        // fix this shit later
        if (focus === "contact" && smIcon.label === "Project Design") {
          return null;
        }

        return (
          <IconComponent
            dest={smIcon.dest}
            icon_src={smIcon.rel}
            label={smIcon.label}
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
