"use client";
// SCSS
import footerInfoStyles from "@/scss/components/layout/footer/FooterInfo.module.scss";
// Components
import FooterCopy from "./FooterCopy";
import SocialIcons from "@/components/shared/SocialIcons";
// Hooks
import { useGetWindowWidth } from "@/hooks";

const FooterInfo = () => {
  const windowWidth = useGetWindowWidth();
  const iconHeight = windowWidth && windowWidth <= 900 ? 24 : 32;
  const socialIconsPosition =
    windowWidth && windowWidth <= 650 ? "top" : "bottom";

  return (
    <div className={footerInfoStyles.container}>
      {socialIconsPosition === "top" && (
        <SocialIcons iconHeight={iconHeight} focus="info" />
      )}
      <FooterCopy />
      {socialIconsPosition === "bottom" && (
        <SocialIcons iconHeight={iconHeight} focus="info" />
      )}
    </div>
  );
};

export default FooterInfo;
