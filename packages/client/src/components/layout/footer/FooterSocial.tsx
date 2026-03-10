// SCSS
import IconComponent from "@/components/shared/IconComponent";
// Data
import { socialMediaIcons } from "@/data";
// SCSS
import footerSocialStyles from "@/scss/components/layout/footer/FooterSocial.module.scss";

const FooterSocial = () => {
  return (
    <div className={footerSocialStyles.container}>
      {socialMediaIcons.map((smIcon) => {
        return (
          <IconComponent
            dest={smIcon.dest}
            icon_src={smIcon.rel}
            label={smIcon.label}
            height={32}
            key={smIcon.id}
          />
        );
      })}
    </div>
  );
};

export default FooterSocial;
