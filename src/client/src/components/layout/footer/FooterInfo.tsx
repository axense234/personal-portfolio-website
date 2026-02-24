// SCSS
import footerInfoStyles from "@/scss/components/layout/footer/FooterInfo.module.scss";
// Components
import FooterCopy from "./FooterCopy";
import FooterSocial from "./FooterSocial";

const FooterInfo = () => {
  return (
    <div className={footerInfoStyles.container}>
      <FooterCopy />
      <FooterSocial />
    </div>
  );
};

export default FooterInfo;
