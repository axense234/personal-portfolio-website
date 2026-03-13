// SCSS
import footerInfoStyles from "@/scss/components/layout/footer/FooterInfo.module.scss";
// Components
import FooterCopy from "./FooterCopy";
import SocialIcons from "@/components/shared/SocialIcons";

const FooterInfo = () => {
  return (
    <div className={footerInfoStyles.container}>
      <FooterCopy />
      <SocialIcons iconHeight={32} />
    </div>
  );
};

export default FooterInfo;
